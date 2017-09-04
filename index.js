'use strict';

module.exports = (rawPlugin, plugin) => {
  let command = rawPlugin;
  if (typeof command === 'object') {
    command = rawPlugin.command;
  }
  if (typeof command === 'function') {
    command = command(plugin.config);
  }
  return {
    command: command
  };
};
