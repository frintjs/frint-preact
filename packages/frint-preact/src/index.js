import render from './render';
import streamProps from './streamProps';
import isObservable from './isObservable';

import getMountableComponent from './components/getMountableComponent';
import observe from './components/observe';
import Region from './components/Region';
import Provider from './components/Provider';

import RegionService from './services/Region';

import PreactHandler from './handlers/PreactHandler';

module.exports = {
  render,
  streamProps,
  isObservable,

  getMountableComponent,
  observe,
  Region,
  Provider,

  RegionService,

  PreactHandler,
};
