/* DAW Instructors — app.js
 * Plain JS, no build step, no network. All content comes from data/data.js.
 */
(function () {
'use strict';

/* ---------------- helpers ---------------- */
function $(s) { return document.querySelector(s); }
function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

var OFFICES = {}; DATA.offices.forEach(function (o) { OFFICES[o.id] = o; });
var BYOFF = {}; DATA.offices.forEach(function (o) { BYOFF[o.id] = DATA.people.filter(function (p) { return p.office === o.id; }); });

function nameOf(p) { return (p.initials ? p.initials + ' ' : '') + p.surname; }
function isCurrent(p) { return /to date/i.test(p.tenure); }
var RANKIMG = {
  'Sqn Ldr': 'assets/img/epaulettes/squadron%20leader.png',
  'Wg Cdr': 'assets/img/epaulettes/wing%20commander.png',
  'Gp Capt': 'assets/img/epaulettes/group%20captain.png',
  'Air Cdre': 'assets/img/epaulettes/air%20commodore.png'
};
function startYear(t) {
  var m = t.match(/(\d{4})/);
  if (m) return +m[1];
  var m2 = t.match(/(\d{2})(?=\s*-\s*|$)/);
  if (m2) { var y = +m2[1]; return y <= 26 ? 2000 + y : 1900 + y; }
  return 0;
}

/* ---------------- tween ---------------- */
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
function tween(dur, ease, onU, onDone) {
  var t0 = performance.now();
  function fr(t) { var k = Math.min(1, (t - t0) / dur); onU(ease(k)); if (k < 1) requestAnimationFrame(fr); else if (onDone) onDone(); }
  requestAnimationFrame(fr);
}

/* ---------------- stage scaling (fixed 1920x1080 design surface) ---------------- */
var stage = $('#stage');
function fit() { var s = Math.min(innerWidth / 1920, innerHeight / 1080); stage.style.transform = 'translate(-50%,-50%) scale(' + s + ')'; }
addEventListener('resize', fit); fit();
addEventListener('contextmenu', function (e) { e.preventDefault(); });

/* ---------------- toast ---------------- */
var toastEl = $('#toast'), toastT = null;
function toast(msg) {
  toastEl.textContent = msg; toastEl.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove('show'); }, 2800);
}

/* ---------------- idle return ---------------- */
var idleT = null;
function poke() { clearTimeout(idleT); idleT = setTimeout(goThreshold, 75000); }
addEventListener('pointerdown', poke, { passive: true });
addEventListener('keydown', poke);

/* ---------------- screens ---------------- */
var screens = { threshold: $('#threshold'), corridor: $('#corridor'), chamber: $('#chamber'), person: $('#person'), search: $('#search') };
var current = 'threshold';
var backTarget = 'threshold';

function show(name, crumb) {
  var from = screens[current], to = screens[name];
  if (from === to) { current = name; return; }
  current = name;
  to.style.zIndex = 10; from.style.zIndex = 5;
  to.classList.add('active');
  requestAnimationFrame(function () { from.classList.add('leaving'); });
  setTimeout(function () { from.classList.remove('active', 'leaving', 'departing'); }, 520);
  $('#crumb').textContent = crumb || 'Instructors';
  $('#chrome').classList.toggle('on', name !== 'threshold');
}
function goThreshold() {
  if (current !== 'threshold') {
    camZ = 0;
    slots.forEach(function (slot, i) { slot.z = -i * SPACING; });
    syncRing();
    show('threshold', 'Instructors');
  }
}

/* ---------------- chrome ---------------- */
$('#btn-close').addEventListener('click', function () {
  document.title = '__CLOSE_KIOSK__';
  try { window.close(); } catch (e) {}
  setTimeout(function () {
    document.title = 'Instructors — Department of Air Warfare';
    toast('Please ask the kiosk operator to close this screen.');
  }, 700);
});
$('#btn-back').addEventListener('click', function () {
  if (current === 'person') backFromPerson();
  else if (current === 'chamber') show('corridor', 'Instructors');
  else if (current === 'search') closeSearch();
  else if (current === 'corridor') goThreshold();
});
$('#btn-search').addEventListener('click', function () { if (current !== 'search') openSearch(); });

/* ---------------- threshold scene ---------------- */
(function buildThreshold() {
  var host = $('.th-plates');
  var picks = [
    [8, 20, "Gp Capt U Mu'azu"], [72, 16, 'Air Cdre OO Obasa'], [15, 63, 'Wg Cdr RN Ekunno'],
    [80, 58, 'Gp Capt EA Ogiriki'], [26, 80, 'Sqn Ldr JD Skinner'], [66, 82, 'Gp Capt UU Akeel'],
    [5, 42, 'Wg Cdr WO Pratt'], [88, 40, 'Air Cdre SM Chindo'], [33, 12, 'Gp Capt KR Ekezie'],
    [58, 10, 'Wg Cdr UU Akeel'], [12, 78, 'Gp Capt JD Wuyep'], [84, 76, 'Air Cdre JA Kolawole']
  ];
  picks.forEach(function (p, i) {
    var s = el('span', null, p[2]);
    s.style.left = p[0] + '%'; s.style.top = p[1] + '%';
    s.style.animationDelay = (i * 0.9) + 's';
    host.appendChild(s);
  });
})();
var thresholdLeaving = false;
screens.threshold.addEventListener('click', function () {
  if (current !== 'threshold' || thresholdLeaving) return;
  thresholdLeaving = true;
  screens.threshold.classList.add('departing');
});
screens.threshold.addEventListener('animationend', function (e) {
  if (e.animationName !== 'threshold-depart') return;
  thresholdLeaving = false;
  show('corridor', 'Instructors');
});


/* ---------------- corridor: the tube ---------------- */
var RING = 44, SPACING = 90;
var POS = [
  { x: -680, y: -250, r: -15 }, { x: -230, y: -250, r: -6 }, { x: 230, y: -250, r: 6 }, { x: 680, y: -250, r: 15 },
  { x: -680, y: 40, r: -15 },   { x: -230, y: 40, r: -6 },   { x: 230, y: 40, r: 6 },   { x: 680, y: 40, r: 15 },
  { x: -680, y: 330, r: -15 },  { x: -230, y: 330, r: -6 },  { x: 230, y: 330, r: 6 },  { x: 680, y: 330, r: 15 }
];

var stream = [];
['dir', 'sc', 'jc', 'ds'].forEach(function (oid) {
  stream.push({ type: 'gate', office: oid });
  BYOFF[oid].forEach(function (p, i) { stream.push({ type: 'person', p: p, idx: i }); });
});

var ring = $('#ring'), slots = [], streamPtr = 0, camZ = 0, drift = 1.5, dragging = false, dragX = 0, moved = 0;

function plateContent(item) {
  if (item.type === 'gate') {
    var o = OFFICES[item.office];
    return { rank: 'Chronicle', name: o.name, tenure: 'Enter · ' + BYOFF[item.office].length + ' recorded', office: '' };
  }
  return { rank: item.p.rank, name: nameOf(item.p), tenure: item.p.tenure, office: OFFICES[item.p.office].short };
}
function fillSlot(slot, item) {
  slot.item = item;
  var c = plateContent(item);
  slot.node.classList.toggle('gate', item.type === 'gate');
  var im = slot.node.querySelector('.p-img');
  im.src = item.type === 'gate' ? '' : (RANKIMG[item.p.rank] || '');
  slot.node.querySelector('.p-rank').textContent = c.rank;
  slot.node.querySelector('.p-name').textContent = c.name;
  slot.node.querySelector('.p-tenure').textContent = c.tenure;
  slot.node.querySelector('.p-office').textContent = c.office;
}
(function buildRing() {
  for (var i = 0; i < RING; i++) {
    var node = el('div', 'plate');
    node.appendChild(el('img', 'p-img'));
    node.appendChild(el('div', 'p-office'));
    node.appendChild(el('div', 'p-rank'));
    node.appendChild(el('div', 'p-name'));
    node.appendChild(el('div', 'p-tenure'));
    (function (idx) {
      node.addEventListener('click', function () {
        var s = slots[idx];
        if (moved > 10 || !s.hot || !s.item) return;
        if (s.item.type === 'gate') enterChamber(s.item.office);
        else openPerson(BYOFF[s.item.p.office], s.item.idx, 'corridor');
      });
    })(i);
    ring.appendChild(node);
    slots.push({ node: node, z: -i * SPACING, item: null, hot: false });
    fillSlot(slots[i], stream[streamPtr++ % stream.length]);
  }
})();

function syncRing() {
  ring.style.transform = 'translateZ(' + camZ + 'px)';
  for (var i = 0; i < RING; i++) {
    var s = slots[i];
    var p = POS[i % POS.length];
    s.node.style.transform = 'translate(-50%,-50%) translateZ(' + s.z + 'px) translate3d(' + p.x + 'px,' + p.y + 'px,0) rotateY(' + p.r + 'deg)';
  }
}
syncRing();

(function corridorLoop() {
  if (current === 'corridor') {
    if (!dragging) camZ += drift;
    ring.style.transform = 'translateZ(' + camZ + 'px)';
    for (var i = 0; i < RING; i++) {
      var s = slots[i];
      if (s.z + camZ > 260) { s.z -= RING * SPACING; fillSlot(s, stream[streamPtr++ % stream.length]); syncOne(s, i); }
      var rel = s.z + camZ;
      var op = 1;
      if (rel < -1900) op = Math.max(0, (rel + 3200) / 1300);
      if (rel > 60) op = Math.max(0, 1 - (rel - 60) / 200);
      s.node.style.opacity = op;
      s.hot = rel > -1500 && rel < 120 && op > 0.5;
      s.node.classList.toggle('hot', s.hot);
    }
  }
  requestAnimationFrame(corridorLoop);
})();
function syncOne(s, i) {
  var p = POS[i % POS.length];
  s.node.style.transform = 'translate(-50%,-50%) translateZ(' + s.z + 'px) translate3d(' + p.x + 'px,' + p.y + 'px,0) rotateY(' + p.r + 'deg)';
}
(function dragHandlers() {
  var tun = $('#tunnel');
  tun.addEventListener('pointerdown', function (e) { dragging = true; dragX = e.clientX; moved = 0; });
  addEventListener('pointermove', function (e) {
    if (!dragging) return;
    var dx = e.clientX - dragX; dragX = e.clientX; moved += Math.abs(dx);
    camZ -= dx * 1.6;
  });
  addEventListener('pointerup', function () { dragging = false; });
  tun.addEventListener('wheel', function (e) { camZ -= e.deltaY * 0.5; }, { passive: true });
})();

/* gate shortcuts along the foot of the corridor */
(function buildGatebar() {
  var bar = $('#gatebar');
  DATA.offices.forEach(function (o) {
    var b = el('button', 'gate-chip');
    b.appendChild(el('span', 'gc-n', o.short));
    b.appendChild(el('span', 'gc-c', BYOFF[o.id].length));
    b.addEventListener('click', function () { enterChamber(o.id); });
    bar.appendChild(b);
  });
})();

/* ---------------- chamber ---------------- */
var chOffice = null, chList = [], chPage = 0, chDecade = null, chFromDecade = null;
var PAGE = 15;

function decadeMatch(dec, y) {
  if (!y || y < 1978) return dec === DATA.decades[0];
  var map = { '1978 - 1989': [1978, 1989], '1990 - 1999': [1990, 1999], '2000 - 2009': [2000, 2009], '2010 - 2019': [2010, 2019], '2020 - To date': [2020, 9999] };
  var r = map[dec]; return y >= r[0] && y <= r[1];
}
function renderDecades() {
  var host = $('#ch-decades'); host.innerHTML = '';
  if (chOffice !== 'ds') return;
  DATA.decades.forEach(function (d) {
    var b = el('button', 'decade-chip' + (d === chDecade ? ' sel' : ''), d);
    b.addEventListener('click', function () { chDecade = d; chList = BYOFF.ds.filter(function (p) { return decadeMatch(d, startYear(p.tenure)); }); chPage = 0; renderChamber(); });
    host.appendChild(b);
  });
}
function enterChamber(oid, decade) {
  chOffice = oid;
  if (oid === 'ds') {
    chDecade = decade || '2020 - To date';
    chList = BYOFF.ds.filter(function (p) { return decadeMatch(chDecade, startYear(p.tenure)); });
  } else { chDecade = null; chList = BYOFF[oid]; }
  chPage = 0; chFromDecade = chDecade;
  renderDecades(); renderChamber();
  show('chamber', OFFICES[oid].short);
}
function renderChamber() {
  var o = OFFICES[chOffice];
  $('#ch-kicker').textContent = 'Chronicle · since 1978';
  $('#ch-title').textContent = o.name;
  $('#ch-blurb').textContent = o.blurb;
  $('#ch-count').textContent = chList.length + (chOffice === 'ds' ? ' officers' : ' holders');
  var pages = Math.max(1, Math.ceil(chList.length / PAGE));
  if (chPage > pages - 1) chPage = pages - 1;
  var host = $('#ch-grid'); host.innerHTML = '';
  var slice = chList.slice(chPage * PAGE, chPage * PAGE + PAGE);
  for (var i = 0; i < PAGE; i++) {
    var cell = el('div', 'slot');
    var p = slice[i];
    if (p) {
      var gi = BYOFF[chOffice].indexOf(p);
      var b = el('button', 'np' + (isCurrent(p) ? ' current' : ''));
      b.appendChild(el('span', 'n-idx', String(gi + 1)));
      var thumb = el('img', 'n-img');
      thumb.src = RANKIMG[p.rank] || '';
      thumb.alt = '';
      thumb.draggable = false;
      b.appendChild(thumb);
      b.appendChild(el('div', 'n-rank', p.rank));
      b.appendChild(el('div', 'n-name', nameOf(p)));
      b.appendChild(el('div', 'n-tenure', p.tenure));
      (function (list, idx) { b.addEventListener('click', function () { openPerson(list, idx, 'chamber'); }); })(chList, chPage * PAGE + i);
      cell.appendChild(b);
    }
    host.appendChild(cell);
  }
  $('#ch-pageinfo').textContent = 'Page ' + (chPage + 1) + ' of ' + pages;
  $('#ch-prev').disabled = chPage === 0;
  $('#ch-next').disabled = chPage >= pages - 1;
}
$('#ch-prev').addEventListener('click', function () { if (chPage > 0) { chPage--; renderChamber(); } });
$('#ch-next').addEventListener('click', function () { chPage++; renderChamber(); });

/* ---------------- person ---------------- */
var psList = [], psIdx = 0, psFrom = 'corridor';
function openPerson(list, idx, from) {
  psList = list; psIdx = idx; psFrom = from || 'corridor';
  fillPerson();
  show('person', nameOf(psList[psIdx]));
  var frame = $('#ps-frame');
  frame.style.opacity = 0;
  tween(1150, easeOutCubic, function (k) {
    frame.style.opacity = Math.min(1, k * 1.6);
    frame.style.transform = 'translateY(' + (1 - k) * 80 + 'px) scale(' + (0.8 + 0.2 * k) + ')';
  }, function () { frame.style.transform = ''; frame.style.opacity = ''; });
  [['#ps-rank', 420], ['#ps-name', 540], ['#ps-tenure', 660], ['#ps-meta', 780]].forEach(function (cfg) {
    var e = $(cfg[0]); e.style.opacity = 0; e.style.transform = 'translateY(14px)';
    setTimeout(function () {
      tween(340, easeOutCubic, function (k) { e.style.opacity = k; e.style.transform = 'translateY(' + (1 - k) * 14 + 'px)'; },
        function () { e.style.transform = ''; });
    }, cfg[1]);
  });
}
function fillPerson() {
  var p = psList[psIdx];
  $('#ps-office').textContent = OFFICES[p.office].name;
  $('#ps-rank').textContent = p.rank;
  $('#ps-name').textContent = nameOf(p);
  $('#ps-tenure').textContent = p.tenure;
  var meta = 'No. ' + (BYOFF[p.office].indexOf(p) + 1) + ' of ' + BYOFF[p.office].length;
  if (p.svc) meta += ' \u00b7 Svc ' + p.svc;
  if (p.branch) meta += ' \u00b7 ' + p.branch;
  $('#ps-meta').textContent = meta;
  var img = RANKIMG[p.rank];
  var ep = $('#ps-epaulette');
  if (img) { ep.classList.remove('nophoto'); $('#ps-img').src = img; $('#ps-mono').textContent = ''; }
  else { ep.classList.add('nophoto'); $('#ps-mono').textContent = (p.initials || p.surname).slice(0, 2); }
  $('#ps-pos').textContent = (psIdx + 1) + ' / ' + psList.length;
  $('#ps-prev').disabled = psIdx === 0;
  $('#ps-next').disabled = psIdx === psList.length - 1;
}
$('#ps-prev').addEventListener('click', function () { if (psIdx > 0) { psIdx--; fillPerson(); } });
$('#ps-next').addEventListener('click', function () { if (psIdx < psList.length - 1) { psIdx++; fillPerson(); } });
function backFromPerson() {
  if (psFrom === 'chamber') { show('chamber', OFFICES[chOffice].short); }
  else if (psFrom === 'search') { show('search', 'Search'); }
  else show('corridor', 'Instructors');
}

/* ---------------- search ---------------- */
var scQuery = '', scFrom = 'corridor';
var KBD = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', "'", '-'],
  ['SPACE', 'BACK']
];
function buildKbd() {
  var host = $('#sc-kbd');
  KBD.forEach(function (row) {
    var r = el('div', 'kbd-row');
    row.forEach(function (k) {
      var b;
      if (k === 'SPACE') b = el('button', 'key space', 'Space');
      else if (k === 'BACK') b = el('button', 'key wide', '\u232b');
      else b = el('button', 'key', k);
      b.addEventListener('click', function () {
        if (k === 'SPACE') scQuery += ' ';
        else if (k === 'BACK') scQuery = scQuery.slice(0, -1);
        else scQuery += k;
        renderSearch();
      });
      r.appendChild(b);
    });
    host.appendChild(r);
  });
  $('#sc-clear').addEventListener('click', function () { scQuery = ''; renderSearch(); });
}
function renderSearch() {
  var q = $('#sc-query');
  if (scQuery) { q.textContent = scQuery; q.classList.remove('placeholder'); }
  else { q.textContent = 'Type a name'; q.classList.add('placeholder'); }
  var host = $('#sc-results'); host.innerHTML = '';
  var term = scQuery.trim().toLowerCase();
  if (!term) { host.appendChild(el('div', 'sc-empty', 'Search across all 554 recorded instructors by name, initials or surname.')); return; }
  var hits = DATA.people.filter(function (p) { return nameOf(p).toLowerCase().indexOf(term) !== -1; }).slice(0, 80);
  if (!hits.length) { host.appendChild(el('div', 'sc-empty', 'No instructor matches \u201c' + scQuery + '\u201d.')); return; }
  hits.forEach(function (p) {
    var b = el('button', 'sc-row');
    var thumb = el('img', 'sr-img');
    thumb.src = RANKIMG[p.rank] || '';
    thumb.alt = '';
    thumb.draggable = false;
    b.appendChild(thumb);
    b.appendChild(el('span', 'sr-rank', p.rank));
    b.appendChild(el('span', 'sr-name', nameOf(p)));
    b.appendChild(el('span', 'sr-tenure', p.tenure));
    b.appendChild(el('span', 'sr-office', OFFICES[p.office].short));
    b.addEventListener('click', function () { openPerson(BYOFF[p.office], BYOFF[p.office].indexOf(p), 'search'); });
    host.appendChild(b);
  });
}
function openSearch() { scFrom = current; show('search', 'Search'); renderSearch(); }
function closeSearch() { show(scFrom === 'search' ? 'corridor' : scFrom, scFrom === 'chamber' ? OFFICES[chOffice].short : scFrom === 'person' ? nameOf(psList[psIdx]) : 'Instructors'); }
buildKbd();

/* ---------------- boot ---------------- */
var params = new URLSearchParams(location.search);
if (params.has('static')) { screens.threshold.classList.remove('active'); show('corridor', 'Instructors'); }
renderSearch();
})();
