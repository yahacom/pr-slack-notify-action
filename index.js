const core = require('@actions/core');
const github = require('@actions/github');
const { IncomingWebhook } = require('@slack/webhook');

(async () => {
  try {
    const SLACK_WEBHOOK_URL = core.getInput('SLACK_WEBHOOK_URL', { required: true });
    const PR_DATA = core.getInput('PR_DATA', { required: true });
    console.log('[ACTION]: ', SLACK_WEBHOOK_URL, PR_DATA);
    const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL);

    await webhook.send({
      blocks: [
        {
          type: 'section',
          text: { type: 'mrkdwn', text: PR_DATA },
          fields: [
            { type: 'mrkdwn', text: '*Title*\nJohn Smith' },
            { type: 'mrkdwn', text: '*Author*\n$8.50' },
          ]
        },
      ],
      // attachments: [
      //   {
      //     color: 'good',
      //     blocks: [
      //       {
      //         type: 'section',
      //         fields: [
      //           { type: 'mrkdwn', text: '*Name*\nJohn Smith' },
      //           { type: 'mrkdwn', text: '*Amount*\n$8.50' },
      //         ]
      //       },
      //     ]
      //   }
      // ]
    });
  } catch (error) {
    core.setFailed(error.message);
  }
})();
// Error: .github/workflows/demo.yml (Line: 25, Col: 20): A mapping was not expected
// Error: The template is not valid. .github/workflows/demo.yml (Line: 25, Col: 20): A mapping was not expected
