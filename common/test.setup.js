var FrintTestUtils = require('frint-test-utils');

global.resetDOM = FrintTestUtils.resetDOM;
global.resetDOM();

FrintTestUtils.takeOverConsole(console);
