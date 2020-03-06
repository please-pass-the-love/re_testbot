const { App } = require("@slack/bolt");
const { affirmations } = require('./affirmations');

function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message(':hi:', ({ message, say }) => {
    say(`Hello <@${message.user}>!`);
});

app.message('sunshine', ({say}) => {
    const affirmation = affirmations[randomInt(affirmations.length)]
    say(affirmation);
});

(async () => {
    await app.start(process.env.PORT || 3000);

    console.log('Slack moderation app is running!');
})();
