(function(){
 var d=document,b=d.body,btn=d.querySelector('.menu-btn'),nav=d.getElementById('nav');
 function setMenu(o){b.classList.toggle('menu-open',o);btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Close menu':'Open menu')}
 if(btn&&nav){
  nav.querySelectorAll('a').forEach(function(a,i){a.style.setProperty('--i',i)});
  btn.addEventListener('click',function(){setMenu(!b.classList.contains('menu-open'))});
  d.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});
  matchMedia('(min-width:761px)').addEventListener('change',function(){setMenu(false)});
 }
 var els=d.querySelectorAll('[data-reveal]');
 if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(el){io.observe(el)});
 }else{els.forEach(function(el){el.classList.add('in')})}
 d.querySelectorAll('a[href$=".html"]').forEach(function(a){
  a.addEventListener('click',function(e){
   if(e.metaKey||e.ctrlKey||e.shiftKey||a.target||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
   e.preventDefault();b.classList.add('leaving');setTimeout(function(){location.href=a.href},220);
  });
 });
 window.addEventListener('pageshow',function(e){if(e.persisted)b.classList.remove('leaving')});
})();
