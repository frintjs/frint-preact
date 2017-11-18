/* eslint-disable import/no-extraneous-dependencies */
import Preact, { h } from 'preact';
/* eslint-enable import/no-extraneous-dependencies */
import { createSwitchHandler } from 'frint-router-component-handlers';
import { PreactHandler } from 'frint-preact';

/**
 * @TODO: this needs work in Preact
 */

export default class Switch extends Preact.Component {
  constructor(...args) {
    super(...args);

    this._handler = createSwitchHandler(ReactHandler, this.context.app, this);

    this.state = this._handler.getInitialData();
  }

  componentWillMount() {
    this._handler.beforeMount();
  }

  componentWillUnmount() {
    this._handler.beforeDestroy();
  }

  render() {
    let child = null;

    Preact.Children.forEach(this.props.children, (element) => {
      if (child !== null) {
        return;
      }

      if (!Preact.isValidElement(element)) {
        return;
      }

      const { path, exact } = element.props;

      // if Route has no path (it's default) then getMatch will return match with whatever URL
      const match = this._handler.getMatch(path, { exact });

      if (match !== null) {
        child = Preact.cloneElement(element, {
          ...element.props,
          computedMatch: match,
        });
      }
    });

    return child;
  }
}
