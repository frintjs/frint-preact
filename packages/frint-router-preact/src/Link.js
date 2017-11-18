import Preact, { h } from 'preact'; // eslint-disable-line import/no-extraneous-dependencies
import { createLinkHandler } from 'frint-router-component-handlers';
import { PreactHandler } from 'frint-preact';

export default class Link extends Preact.Component {
  constructor(...args) {
    super(...args);

    this._handler = createLinkHandler(PreactHandler, this.context.app, this);

    this.state = this._handler.getInitialData();
  }

  componentDidMount() {
    this._handler.beforeMount();
  }

  componentWillReceiveProps(nextProps) {
    const toChanged = (this.props.to !== nextProps.to);
    const exactChanged = (this.props.exact !== nextProps.exact);

    this._handler.propsChange(nextProps, toChanged, exactChanged);
  }

  componentWillUnmount() {
    this._handler.beforeDestroy();
  }

  handleClick = (e) => {
    e.preventDefault();

    this._handler.handleClick();
  };

  render() {
    const {
      to,
      children,
      className,
      type,
      activeClassName,
    } = this.props;

    const linkProps = {
      onClick: this.handleClick,
      className: className || '',
    };

    if (this._handler.getData('active')) {
      linkProps.className += ` ${activeClassName}`;
    }

    if (typeof type === 'undefined') {
      // anchor
      linkProps.href = to;

      return (
        <a {...linkProps}>
          {children}
        </a>
      );
    }

    // button
    linkProps.type = type;

    return (
      <button {...linkProps}>
        {children}
      </button>
    );
  }
}
