"use strict";

const SlackHook = require("winston-slack-webhook-transport");

module.exports = (_webhookUrl, _username, _channel) => {
  return new SlackHook({
    webhookUrl: _webhookUrl,
    username: _username,
    channel: _channel
  })
}
