/* eslint-disable import/no-extraneous-dependencies */
import Preact, { h } from 'preact';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import composeHandlers from 'frint-component-utils/lib/composeHandlers';
import ObserveHandler from 'frint-component-handlers/lib/ObserveHandler';

import PreactHandler from '../handlers/PreactHandler';
import isObservable from '../isObservable';

export default function observe(fn) {
  return (Component) => {
    class WrappedComponent extends Preact.Component {
      static displayName = (typeof Component.displayName !== 'undefined')
        ? `observe(${Component.displayName})`
        : 'observe';

      constructor(props, context) {
        super(props, context);
        this._props$ = new BehaviorSubject(this.props);

        const output = (typeof fn === 'function')
          ? fn(context.app, this._props$)
          : {};

        if (!isObservable(output)) {
          // sync
          this.state = {
            computedProps: output,
          };

          return;
        }

        // async
        this._handler = composeHandlers(
          PreactHandler,
          ObserveHandler,
          {
            component: this,
            getProps$: () => output,
          },
        );

        this.state = this._handler.getInitialData();
      }

      componentWillMount() {
        if (this._handler) {
          this._handler.app = this.context.app;
          this._handler.beforeMount();
        }
      }

      componentWillReceiveProps(newProps) {
        if (this._handler) {
          this._props$.next(newProps);
        }
      }

      componentWillUnmount() {
        if (this._handler) {
          this._handler.beforeDestroy();
        }
      }

      render() {
        const { computedProps } = this.state;

        return <Component {...computedProps} {...this.props} />;
      }
    }

    return WrappedComponent;
  };
}
