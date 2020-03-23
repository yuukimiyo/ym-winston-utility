require('dotenv').config();

const GOOGLE_PROJECT_ID = process.env.GOOGLE_PROJECT_ID;
const GOOGLE_KEYFILE = process.env.GOOGLE_KEYFILE;
const SLACK_USER = process.env.SLACK_USER;
const SLACK_CHANNEL = process.env.SLACK_CHANNEL;
const SECRETS_SLACK_WEBHOOKURL = process.env.SECRETS_SLACK_WEBHOOKURL;

const { winston, ConsoleTransport, GCPTransport, SlackTransport } = require("ym-winston-utility");

var log = winston.createLogger({
  level: 'info',
  transports: [
    ConsoleTransport(),
    GCPTransport(GOOGLE_PROJECT_ID, GOOGLE_KEYFILE, {})
  ]
})

var slack = winston.createLogger({
  level: 'info',
  transports: [
    SlackTransport(SECRETS_SLACK_WEBHOOKURL, SLACK_USER, SLACK_CHANNEL),
  ]
})

log.info('test');
slack.info('test');
