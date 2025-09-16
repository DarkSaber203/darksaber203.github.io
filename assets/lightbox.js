
// Simple lightbox with ESC and arrow navigation
document.addEventListener('DOMContentLoaded', function(){
  const lb = document.querySelector('.lightbox');
  if(!lb) return;
  const img = lb.querySelector('img');
  const thumbs = Array.from(document.querySelectorAll('.thumb'));
  let idx = 0;
  function show(i){
    idx = (i+thumbs.length)%thumbs.length;
    const src = thumbs[idx].getAttribute('data-src');
    img.src = src;
  }
  document.querySelector('.gallery-main').addEventListener('click', ()=>{
    const active = document.querySelector('.thumb.active') || thumbs[0];
    idx = thumbs.indexOf(active);
    show(idx);
    lb.classList.add('open');
  });
  lb.querySelector('.close').addEventListener('click', ()=> lb.classList.remove('open'));
  lb.querySelector('.prev').addEventListener('click', ()=> show(idx-1));
  lb.querySelector('.next').addEventListener('click', ()=> show(idx+1));
  document.addEventListener('keydown', (e)=>{
    if(!lb.classList.contains('open')) return;
    if(e.key==='Escape') lb.classList.remove('open');
    if(e.key==='ArrowLeft') show(idx-1);
    if(e.key==='ArrowRight') show(idx+1);
  });
  thumbs.forEach((t,i)=> t.addEventListener('click', ()=>{
    document.querySelectorAll('.thumb').forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    document.querySelector('.gallery-main img').src = t.getAttribute('data-src');
  }));
});
