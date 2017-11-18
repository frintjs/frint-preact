/* eslint-disable import/no-extraneous-dependencies, global-require */
import Preact, { h } from 'preact';

import getMountableComponent from './components/getMountableComponent';

export default function render(app, node) {
  const MountableComponent = getMountableComponent(app);

  return Preact.render(<MountableComponent />, node);
}
