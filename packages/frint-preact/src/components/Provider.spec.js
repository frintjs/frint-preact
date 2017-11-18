/* eslint-disable import/no-extraneous-dependencies, func-names */
/* global afterEach, beforeEach, describe, it */
import chai, { expect } from 'chai';
import Preact, { h } from 'preact';

import Provider from './Provider';

describe('frint-preact › components › Provider', function () {
  const fakeApp = {};
  const fakeChildren = (<div id="myFakeChildren"/>);
  let myProviderInstance;

  beforeEach(function () {
    myProviderInstance = new Provider({
      app: fakeApp,
      children: fakeChildren
    });
  });

  // it('has the app as private property, just like the passed arguments', function () {
  //   expect(myProviderInstance.app).to.be.deep.equal(fakeApp);
  // });

  // it('has a getChildContext method which returns app object of the instance', function () {
  //   expect(myProviderInstance.getChildContext()).to.be.deep.equal({
  //     app: fakeApp
  //   });
  // });
});
