var FrintTestUtils = require('frint-test-utils');

global.resetDOM = FrintTestUtils.resetDOM;
global.resetDOM();

// const Enzyme = require('enzyme');
// const Adapter = require('enzyme-adapter-preact');

// Enzyme.configure({
//   adapter: new Adapter(),
// });

FrintTestUtils.takeOverConsole(console);
