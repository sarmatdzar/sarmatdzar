<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sarmat Dzarakhokhov — GitHub Profile</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0b0f14;
      --card: #11161d;
      --text: #e6edf3;
      --muted: #9aa7b0;
      --accent1: #7C4DFF;
      --accent2: #18FFFF;
      --accent3: #FF4081;
      --border: #1f2a35;
    }
    * { box-sizing: border-box }
    body {
      margin: 0;
      font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto;
      color: var(--text);
      background: radial-gradient(1200px 600px at 20% 10%, #0f1420, #0b0f14);
      min-height: 100vh;
    }
    .grid {
      max-width: 1100px;
      margin: 0 auto;
      padding: 40px 20px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    @media (min-width: 900px) {
      .grid { grid-template-columns: 2fr 1fr; }
    }
    .hero {
      position: relative;
      padding: 32px;
      border: 1px solid var(--border);
      background: linear-gradient(180deg, rgba(124,77,255,0.12), transparent 35%),
                  linear-gradient(180deg, rgba(24,255,255,0.08), transparent 65%),
                  var(--card);
      border-radius: 16px;
      overflow: hidden;
    }
    .hero h1 {
      margin: 0 0 10px;
      font-size: 38px;
      letter-spacing: -0.5px;
    }
    .hero p { margin: 0; color: var(--muted) }
    .chips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px }
    .chip {
      padding: 8px 12px;
      border-radius: 999px;
      background: #0e1320;
      border: 1px solid var(--border);
      color: var(--muted);
      font-size: 12px;
    }
    .cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px }
    .card {
      padding: 16px;
      border-radius: 12px;
      border: 1px solid var(--border);
      background: var(--card);
    }
    .card h3 { margin: 0 0 8px; font-size: 16px }
    .mini {
      display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
    }
    .stat {
      padding: 12px;
      border-radius: 10px;
      background: #0c1219;
      border: 1px solid var(--border);
      text-align: center;
    }
    .stat .num { font-weight: 800; font-size: 20px }
    .footer { text-align: center; color: var(--muted); padding: 30px 0 }
    a { color: #9dc4ff; text-decoration: none }
    a:hover { text-decoration: underline }
    .gradient-text {
      background: linear-gradient(90deg, var(--accent1), var(--accent2), var(--accent3));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .divider {
      height: 1px; background: linear-gradient(90deg, transparent, #234, transparent); margin: 16px 0;
    }
  </style>
</head>
<body>
  <div class="grid">
    <section class="hero">
      <h1 class="gradient-text">Sarmat Dzarakhokhov</h1>
      <p>Build fast. Ship clear. Own the craft.</p>
      <div class="chips">
        <span class="chip">TypeScript</span>
        <span class="chip">React/Next.js</span>
        <span class="chip">Go</span>
        <span class="chip">Rust</span>
        <span class="chip">Cloud • DX • Perf</span>
      </div>

      <div class="cards">
        <div class="card">
          <h3>Featured projects</h3>
          <ul>
            <li><a href="https://github.com/sarmatdzar/awesome-project">awesome-project</a> — UI generator</li>
            <li><a href="https://github.com/sarmatdzar/perf-tracer">perf-tracer</a> — frontend profiler</li>
            <li><a href="https://github.com/sarmatdzar/tiny-ml">tiny-ml</a> — ML in the browser</li>
          </ul>
          <div class="divider"></div>
          <div class="mini">
            <div class="stat"><div class="num" id="stars">—</div><div>Stars</div></div>
            <div class="stat"><div class="num" id="forks">—</div><div>Forks</div></div>
          </div>
        </div>

        <div class="card">
          <h3>Status</h3>
          <p>Latest release: <span id="latest">—</span></p>
          <p>Commits this week: <span id="commits">—</span></p>
          <p>Contact: <a href="mailto:hi@sarmatdzar.github.io">hi@sarmatdzar.github.io</a></p>
        </div>
      </div>
    </section>

    <aside class="card">
      <h3>Graphs</h3>
      <img src="https://github-readme-stats.vercel.app/api?username=sarmatdzar&show_icons=true&theme=radical" alt="stats" style="width:100%; border-radius:10px;"/>
      <div style="height:12px"></div>
      <img src="https://github-readme-streak-stats.herokuapp.com/?user=sarmatdzar&theme=radical" alt="streak" style="width:100%; border-radius:10px;"/>
    </aside>
  </div>

  <div class="footer">© Sarmat Dzarakhokhov — crafted with care</div>

  <script>
    // Lightweight client widget: fetch GitHub API data
    async function fetchRepoStats() {
      const user = "sarmatdzar";
      const repo = "awesome-project"; // change or aggregate multiple repos
      const [r, ev] = await Promise.all([
        fetch(`https://api.github.com/repos/${user}/${repo}`).then(res => res.json()),
        fetch(`https://api.github.com/repos/${user}/${repo}/commits`).then(res => res.json()),
      ]);
      document.getElementById("stars").textContent = r.stargazers_count ?? "0";
      document.getElementById("forks").textContent = r.forks_count ?? "0";
      document.getElementById("latest").textContent = r.pushed_at?.slice(0,10) ?? "—";

      // Commits in the last 7 days (simple estimate)
      const sevenDaysAgo = Date.now() - 7 * 24 * 3600 * 1000;
      const commits = (ev || []).filter(c => new Date(c.commit.author.date).getTime() > sevenDaysAgo).length;
      document.getElementById("commits").textContent = commits;
    }
    fetchRepoStats().catch(()=>{});
  </script>
</body>
</html>
