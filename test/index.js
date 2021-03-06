'use strict';

const
  assert = require('assert'),
  loader = require('..');

describe('loader', () => {
  it('loads object with string', () => {
    assert.deepEqual(loader({ command: { args: [1, 2, 3], command: 'test' } }).command, { args: [1, 2, 3], command: 'test' });
  });
  it('loads object with function', () => {
    assert.equal(loader({ command: _ => _.value }, { config: { value: 1 } }).command, 1);
  });
  it('loads function', () => {
    assert.equal(loader(_ => _.value, { config: { value: 1 } }).command, 1);
  });
  it('loads value', () => {
    assert.equal(loader(1).command, 1);
  });
});
