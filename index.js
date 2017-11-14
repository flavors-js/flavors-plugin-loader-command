'use strict';

module.exports = (rawPlugin, plugin) => {
  let command = {};
  if (typeof rawPlugin === 'object') {
    if (typeof rawPlugin.command === 'function') {
      command.command = rawPlugin.command(plugin.config);
    } else {
      command.command = rawPlugin.command;
    }
    command.args = rawPlugin.args;
  } else if (typeof rawPlugin === 'function') {
    command.command = rawPlugin(plugin.config);
  } else {
    command.command = rawPlugin;
  }
  return command;
};
