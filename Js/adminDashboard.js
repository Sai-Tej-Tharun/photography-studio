
function switchTab(id, el){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.sidebar li').forEach(l=>l.classList.remove('active'));
  el.classList.add('active');
}


const toggle=document.getElementById('themeToggle');
if(localStorage.theme==='dark'){
  document.body.classList.add('dark');
  toggle.textContent='☀️';
}

toggle.onclick=()=>{
  document.body.classList.toggle('dark');
  const dark=document.body.classList.contains('dark');
  toggle.textContent=dark?'☀️':'🌙';
  localStorage.theme=dark?'dark':'light';
};


function drawChart(canvasId, data){
  const c=document.getElementById(canvasId);
  const ctx=c.getContext('2d');
  c.width=c.parentElement.offsetWidth;
  c.height=200;
  ctx.beginPath();
  ctx.moveTo(0,200);
  data.forEach((v,i)=>ctx.lineTo(i*80,200-v));
  ctx.strokeStyle="#6366f1";
  ctx.lineWidth=3;
  ctx.stroke();
}

drawChart('lineChart',[40,80,60,120,90,140]);
drawChart('barChart',[60,100,80,140,120]);