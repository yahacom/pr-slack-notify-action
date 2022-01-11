const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
  try {
    const SLACK_WEBHOOK_URL = core.getInput('SLACK_WEBHOOK_URL', { required: true });
    const PR_DATA = core.getInput('PR_DATA', { required: true });
    console.log(SLACK_WEBHOOK_URL, PR_DATA);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
