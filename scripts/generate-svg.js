const { Octokit } = require("@octokit/rest");
const fs = require("fs");

(async () => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const username = "sarmatdzar";

  const events = await octokit.activity.listPublicEventsForUser({ username, per_page: 100 });
  const sevenDaysAgo = Date.now() - 7 * 24 * 3600 * 1000;
  const commits = events.data
    .filter(e => e.type === "PushEvent" && new Date(e.created_at).getTime() > sevenDaysAgo)
    .reduce((sum, e) => sum + (e.payload?.size ?? 0), 0);

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="500" height="140">
  <rect width="100%" height="100%" fill="#0b0f14"/>
  <text x="20" y="40" fill="#e6edf3" font-family="Inter" font-size="22">Commits this week</text>
  <text x="20" y="90" fill="#7C4DFF" font-family="Inter" font-size="48" font-weight="800">${commits}</text>
</svg>`;
  fs.writeFileSync("assets/commits-week.svg", svg);
})();
