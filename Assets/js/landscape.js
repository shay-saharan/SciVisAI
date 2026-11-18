(function () {
  'use strict';

  var root = document.querySelector('[data-landscape]');
  if (!root) return;

  var data = JSON.parse(document.getElementById('landscape-data').textContent);
  var base = root.getAttribute('data-base') || '';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  var map = root.querySelector('.ls-map');
  var stage = root.querySelector('.ls-stage');
  var panel = root.querySelector('.ls-panel');
  var content = root.querySelector('.ls-content');
  var artImg = root.querySelector('.ls-art-img');
  var titleEl = root.querySelector('.ls-title');
  var subEl = root.querySelector('.ls-sub');
  var textEl = root.querySelector('.ls-text');
  var counter = root.querySelector('.ls-count');
  var prevBtn = root.querySelector('.ls-prev');
  var nextBtn = root.querySelector('.ls-next');
  var homeBtn = root.querySelector('.ls-home');
  var pins = Array.prototype.slice.call(root.querySelectorAll('.ls-pin'));
  var markers = pins.map(function (pin) { return pin.querySelector('.ls-marker'); });

  // Index 0 is Home; 1..n are the hotspots in numbered order.
  var stops = [{
    title: data.home.title,
    subtitle: '',
    text: data.home.text,
    image: data.home.image,
    zoom: 1
  }].concat(data.stops.slice().sort(function (a, b) { return a.number - b.number; }));
  var last = stops.length - 1;

  var current = 0;
  var swapTimer = null;

  // Without @property the zoom can't animate its variables, so fall back to transitioning transform.
  if (!(window.CSS && CSS.registerProperty)) root.classList.add('ls--legacy');

  stops.forEach(function (s) { new Image().src = base + s.image; });

  function viewFor(index) {
    var s = stops[index];
    if (index === 0) return { x: 0, y: 0, z: 1 };

    var sideLayout = getComputedStyle(panel).position === 'absolute';
    var visibleW = sideLayout ? panel.offsetLeft : map.clientWidth;
    var visibleH = sideLayout ? map.clientHeight : Math.min(map.clientHeight, panel.offsetTop);
    var z = s.zoom;
    var px = (s.focus_x / 100) * stage.offsetWidth;
    var py = (s.focus_y / 100) * stage.offsetHeight;

    return {
      x: visibleW / 2 - stage.offsetLeft - z * px,
      y: visibleH / 2 - stage.offsetTop - z * py,
      z: z
    };
  }

  function applyView(index) {
    var v = viewFor(index);
    stage.style.setProperty('--ls-x', v.x + 'px');
    stage.style.setProperty('--ls-y', v.y + 'px');
    stage.style.setProperty('--ls-z', v.z);
  }

  function setDisabled(btn, disabled) {
    btn.setAttribute('aria-disabled', disabled ? 'true' : 'false');
  }

  function swapContent(s) {
    artImg.src = base + s.image;
    titleEl.textContent = s.title;
    subEl.textContent = s.subtitle || '';
    subEl.hidden = !s.subtitle;
    textEl.textContent = s.text;
  }

  function updatePanel(s) {
    clearTimeout(swapTimer);
    if (reduceMotion.matches) {
      swapContent(s);
      return;
    }
    content.classList.add('is-fading');
    swapTimer = setTimeout(function () {
      swapContent(s);
      content.classList.remove('is-fading');
    }, 200);
  }

  // Hidden markers can't hold focus, so hand focus to a control that stays on screen.
  function rescueFocus(previous, index) {
    if (!previous || !root.contains(previous)) return;
    if (previous === homeBtn && index === 0) {
      nextBtn.focus();
    } else if (previous.classList.contains('ls-marker') && index !== 0 && Number(previous.dataset.stop) !== index) {
      markers[index - 1].focus();
    }
  }

  function goTo(index) {
    if (index < 0 || index > last || index === current) return;
    current = index;
    var previousFocus = document.activeElement;

    root.classList.toggle('is-home', index === 0);
    homeBtn.inert = index === 0;
    pins.forEach(function (pin, i) {
      var dim = index !== 0 && i + 1 !== index;
      pin.classList.toggle('is-dim', dim);
      pin.inert = dim;
    });

    counter.textContent = index === 0 ? '' : index + ' of ' + last;
    setDisabled(prevBtn, index === 0);
    setDisabled(nextBtn, index === last);

    rescueFocus(previousFocus, index);
    applyView(index);
    updatePanel(stops[index]);
  }

  markers.forEach(function (m) {
    m.addEventListener('click', function () { goTo(Number(m.dataset.stop)); });
  });
  prevBtn.addEventListener('click', function () {
    if (prevBtn.getAttribute('aria-disabled') !== 'true') goTo(current - 1);
  });
  nextBtn.addEventListener('click', function () {
    if (nextBtn.getAttribute('aria-disabled') !== 'true') goTo(current + 1);
  });
  homeBtn.addEventListener('click', function () { goTo(0); });

  root.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (e.key === 'ArrowRight') {
      goTo(current + 1);
    } else if (e.key === 'ArrowLeft') {
      goTo(current - 1);
    } else if (e.key === 'Escape') {
      goTo(0);
    } else {
      return;
    }
    e.preventDefault();
  });

  // Re-centre without animating when the layout changes size.
  var resizeFrame = null;
  function relayout() {
    root.classList.add('ls--instant');
    applyView(current);
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(function () {
      resizeFrame = requestAnimationFrame(function () { root.classList.remove('ls--instant'); });
    });
  }
  if ('ResizeObserver' in window) {
    new ResizeObserver(relayout).observe(map);
  } else {
    window.addEventListener('resize', relayout);
  }

  homeBtn.inert = true;
  root.hidden = false;
  applyView(0);
})();
