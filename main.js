// main.js for C Web
(function(){
  console.log('C Web main.js loaded — running in page', location.href);

  // Example: floating button
  if (document.getElementById('cweb-btn')) return;
  const btn = document.createElement('button');
  btn.id = 'cweb-btn';
  btn.textContent = 'C';
  btn.style.position = 'fixed';
  btn.style.right = '12px';
  btn.style.bottom = '12px';
  btn.style.zIndex = 2147483647;
  btn.style.padding = '8px 10px';
  btn.style.borderRadius = '8px';
  btn.style.background = '#4CAF50';
  btn.style.color = '#fff';
  btn.style.border = 'none';
  btn.onclick = ()=> alert('C Web active on ' + location.hostname);
  document.documentElement.appendChild(btn);
})();
