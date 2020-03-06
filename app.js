const { App } = require("@slack/bolt");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message('hi', ({ message, say }) => {
    say(`Hello <@${message.user}>!`);
});

(async () => {
    await app.start(process.env.PORT || 3000);

    console.log('Slack moderation app is running!');
})();
