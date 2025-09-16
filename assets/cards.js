
async function loadProjects(){
  const res = await fetch('assets/projects.json?v=1');
  const list = await res.json();
  const grid = document.getElementById('projects-grid');
  if(!grid) return;
  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <div class="meta mt2">${p.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div>
      <div class="btn-row mt2">
        <a class="button" href="./projects/${p.slug}.html">View details</a>
        ${ (p.downloads && p.downloads.length) ? p.downloads.map(d=>`<a class="button ghost" href="./downloads/${d.file}">Download</a>`).join('') : ''}
        ${ p.live_demo ? `<span class="demo-chip" title="Live demo"><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg> Live demo</span>` : ''}
      </div>
    `;
    grid.appendChild(card);
  });
}
document.addEventListener('DOMContentLoaded', loadProjects);
