/**
 * Source: https://gist.github.com/developit/5d879edb820228224dc9
 */
export default class Provider {
  getChildContext() {
    let { children, ...context } = this.props;
    return context;
  }

  render({ children }) {
    return children && children[0] || null;
  }
}
