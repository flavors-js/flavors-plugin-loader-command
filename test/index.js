'use strict';

const
  assert = require('assert'),
  loader = require('..');

describe('loader', () => {
  it('loads object with string', () => {
    assert.deepEqual(loader({args: [1, 2, 3], command: 'test' }), { args: [1, 2, 3], command: 'test'});
  });
  it('loads object with function', () => {
    assert.deepEqual(loader({args: [1, 2, 3], command: _ => _.value }, { config: { value: 1 } }), { args: [1, 2, 3], command: 1});
  });
  it('loads function', () => {
    assert.equal(loader(_ => _.value, { config: { value: 1 } }).command, 1);
  });
  it('loads value', () => {
    assert.equal(loader(1).command, 1);
  });
});
