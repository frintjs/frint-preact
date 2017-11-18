import Preact, { h } from 'preact';
import { Region } from 'frint-preact';

export default class Root extends Preact.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="eight columns">
            <h3>Main</h3>

            <hr />

            <Region name="main" />
          </div>

          <div className="four columns">
            <h3>Sidebar</h3>

            <hr />

            <Region name="sidebar" />
          </div>
        </div>
      </div>
    );
  }
}
