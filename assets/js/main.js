(function () {
  "use strict";
  var D = window.PORTFOLIO;
  var root = document.documentElement;
  var lang = root.getAttribute("lang") === "en" ? "en" : "ko";
  var $ = function (id) { return document.getElementById(id); };

  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function t(v) { return v == null ? "" : typeof v === "string" ? v : (v[lang] != null ? v[lang] : v.ko); }
  function ui(k) { return D.ui[lang][k] || D.ui.ko[k] || ""; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
    function linkRow(links) {
    return (links || []).map(function (l) { return '<a href="' + esc(l.u) + '" target="_blank" rel="noopener">' + esc(t(l.t)) + "</a>"; }).join("");
  }

  /* ---------- render ---------- */
  function renderStatic() {
    document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = ui(el.getAttribute("data-t")); });
    $("lang-ko").className = lang === "ko" ? "on" : "";
    $("lang-en").className = lang === "en" ? "on" : "";
    document.title = "Coldlapse";
  }

  function renderHead() {
    $("facts").innerHTML = D.facts.map(function (f) {
      var v = f.u ? '<a href="' + f.u + '"' + (f.u.indexOf("http") === 0 ? ' target="_blank" rel="noopener"' : "") + ">" + esc(t(f.v)) + "</a>" : esc(t(f.v));
      return "<div><dt>" + esc(t(f.k)) + "</dt><dd>" + v + "</dd></div>";
    }).join("");
    $("glance").innerHTML = D.glance.map(function (g) {
      return '<li><span class="n">' + esc(g.n) + '</span><span class="v">' + esc(t(g.v)) + "</span></li>";
    }).join("");
  }

  var LAMP = { fc: "FULL COMBO", exh: "EX HARD", hard: "HARD", clear: "CLEAR", easy: "EASY" };
  function lamp(l, cls) { return '<i class="' + (cls || "lamp") + '" data-l="' + l + '" title="' + LAMP[l] + " · " + esc(ui("lamp." + l)) + '"></i>'; }
  function renderLegend() {
    $("legend").innerHTML = '<ul>' + D.legend.map(function (l) {
      return "<li>" + lamp(l) + "<b>" + LAMP[l] + "</b><span>" + esc(ui("lamp." + l)) + "</span></li>";
    }).join("") + "</ul>";
  }

  function media(c) {
    var m = c.media;
    if (m.type === "pixel") return '<figure class="shot"><div class="pxdemo" id="pxdemo"></div></figure>';
    if (m.type === "image") {
      return '<figure class="shot"><div class="frame"><img src="' + m.src + '" width="' + m.w + '" height="' + m.h + '" alt="' + esc(t(m.alt)) + '" loading="lazy"></div></figure>';
    }
    if (m.type === "pair") {
      return '<figure class="shot"><div class="shot-pair">' + m.items.map(function (i) {
        return '<div class="frame"><img src="' + i.src + '" width="' + i.w + '" height="' + i.h + '" alt="' + esc(t(i.alt)) + '" loading="lazy"></div>';
      }).join("") + "</div></figure>";
    }
    if (m.type === "video") {
      return '<figure class="shot"><div class="frame video-frame">' + m.items.map(function (v) {
        return '<video src="' + v.src + '" poster="' + v.poster + '" muted loop playsinline autoplay preload="metadata" width="520" height="380"></video>';
      }).join("") + "</div></figure>";
    }
    return "";
  }

  function renderCases() {
    $("cases").innerHTML = D.cases.map(function (c) {
      return '<article class="case" id="' + c.id + '">' +
        '<header class="case-head">' +
          "<h3>" + lamp(c.lamp) + esc(c.title) + "</h3>" +
          '<p class="one">' + esc(t(c.one)) + "</p>" +
          '<p class="links">' + linkRow(c.links) + "</p>" +
        "</header>" +
        '<div class="case-grid">' + media(c) +
          '<ul class="wins">' + t(c.wins).map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ul>" +
        "</div>" +
      "</article>";
    }).join("");
    initPixelDemo();
  }

  function renderPolygon() {
    var P = D.polygon;
    $("polygon-body").innerHTML =
      '<div class="poly">' +
        '<div><h3><i class="lamp" data-l="hard"></i>Polygon</h3><p class="one">' + esc(t(P.line)) + "</p>" +
        '<p class="poly-link"><a href="' + P.url + '" target="_blank" rel="noopener">' + esc(ui("polygon.more")) + ' →</a><br><a href="' + P.status + '" target="_blank" rel="noopener">' + esc(ui("polygon.status")) + " →</a></p></div>" +
        '<div><ul class="wins">' + t(P.points).map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ul>" +
        '<p class="stack-line">' + esc(P.stack) + "</p></div>" +
      "</div>";
  }

  function renderSongs() {
    $("songs").innerHTML = D.songs.map(function (s) {
      return '<div class="song" id="' + s.id + '">' +
        lamp(s.lamp, "bar") +
        '<span class="title">' + esc(t(s.title)) + "</span>" +
        '<span class="line">' + esc(t(s.win)) + "</span>" +
        '<span class="yr">' + esc(s.year) + "</span>" +
        '<span class="lk">' + linkRow(s.links) + "</span></div>";
    }).join("");
  }

  function renderRest() {
    $("freelance-body").innerHTML = t(D.freelance).map(function (s) { return s.length <= 24 ? '<span class="nw">' + esc(s) + "</span>" : esc(s); }).join(" ") + ' <a class="nw" href="mailto:vegarian@dgu.ac.kr">vegarian@dgu.ac.kr</a>';
    $("paper-list").innerHTML = D.papers.map(function (p) {
      var title = p.u ? '<a href="' + p.u + '" target="_blank" rel="noopener">' + esc(p.title) + "</a>" : esc(p.title);
      return '<li><span class="k">' + p.k + '</span><span class="v"><b>' + title + "</b><small>" + esc(t(p.sub)) + "</small></span></li>";
    }).join("");
    $("stack-list").innerHTML = D.stack.map(function (x) {
      return '<li><span class="k">' + esc(t(x.k)) + '</span><span class="v">' + esc(x.v) + "</span></li>";
    }).join("");
  }

  function renderAll() {
    renderStatic(); renderHead(); renderLegend(); renderCases(); renderPolygon(); renderSongs(); renderRest();
  }

  /* ---------- pixel demo: bilinear vs nearest vs block-aware ---------- */
  // 14×14 sprite, stored at 2×2 blocks (28×28) to play the role of an already-enlarged pixel-art image.
  var SPRITE = [
    "....kkkkkk....",
    "...kkkkkkkk...",
    "..kkwwkkwwkk..",
    "..kkwkkkkwkk..",
    "..kkkkookkkk..",
    ".kkkwwwwwwkkk.",
    ".kkwwwwwwwwkk.",
    "kkkwwwwwwwwkkk",
    "kbkwwwccwwwkbk",
    "kbkwwcwwcwwkbk",
    ".kkwwwwwwwwkk.",
    "..kkwwwwwwkk..",
    "...kkkkkkkk...",
    "...oo....oo..."
  ];
  var PAL = { k: "#1c2748", w: "#eef4fb", o: "#e3a33b", b: "#5f86d8", c: "#9fd3ee" };
  var BLOCK = 2, MAX_SCALE = 2.5, zoom = 3;

  function spriteCanvas(block) {
    var n = SPRITE.length, cv = document.createElement("canvas");
    cv.width = cv.height = n * block;
    var g = cv.getContext("2d");
    SPRITE.forEach(function (row, y) {
      for (var x = 0; x < row.length; x++) {
        var ch = row[x]; if (ch === ".") continue;
        g.fillStyle = PAL[ch]; g.fillRect(x * block, y * block, block, block);
      }
    });
    return cv;
  }
  function drawScaled(target, src, w, smooth) {
    target.width = target.height = w;
    target.style.width = target.style.height = (w * zoom) + "px";
    var g = target.getContext("2d");
    g.imageSmoothingEnabled = smooth; g.imageSmoothingQuality = "high";
    g.clearRect(0, 0, w, w); g.drawImage(src, 0, 0, w, w);
  }
  function nearestWidths(srcSize, dst, block, count) {
    var w = [];
    for (var x = 0; x < dst; x++) {
      var dot = Math.floor(Math.floor((x + 0.5) * srcSize / dst) / block);
      w[dot] = (w[dot] || 0) + 1;
    }
    return w.slice(0, count);
  }

  var demoScale = 1.25;
  function initPixelDemo() {
    var host = $("pxdemo"); if (!host) return;
    host.innerHTML =
      '<div class="ctl"><label for="px-range">' + esc(ui("px.scale")) + '</label>' +
      '<input id="px-range" type="range" min="1" max="2.5" step="0.05" value="' + demoScale + '">' +
      '<span class="scale" id="px-val"></span></div>' +
      '<div class="row">' +
        ['bilinear', 'nearest', 'pz'].map(function (k) {
          return '<div class="cell"><div class="stage"><canvas id="px-' + k + '"></canvas></div>' +
            '<span class="label" id="px-l-' + k + '"></span><span class="widths" id="px-w-' + k + '"></span></div>';
        }).join("") +
      "</div>";
    var orig = spriteCanvas(BLOCK), base = spriteCanvas(1), size = orig.width, n = base.width;
    function fitZoom() {
      // largest whole-number display zoom at which the biggest output still fits its cell
      var stage = host.querySelector(".stage"), room = stage ? stage.clientWidth - 8 : 200;
      zoom = Math.max(1, Math.min(3, Math.floor(room / (size * MAX_SCALE))));
      host.querySelectorAll(".stage").forEach(function (st) { st.style.minHeight = (size * MAX_SCALE * zoom + 8) + "px"; });
    }
    function update() {
      var s = demoScale, w = Math.round(size * s);
      drawScaled($("px-bilinear"), orig, w, true);
      drawScaled($("px-nearest"), orig, w, false);
      var k = Math.max(1, Math.round(s * BLOCK)), wz = n * k;
      drawScaled($("px-pz"), base, wz, false);
      $("px-val").textContent = s.toFixed(2) + "×";
      $("px-l-bilinear").innerHTML = "<b>" + esc(ui("px.bilinear")) + "</b> " + w + "px";
      $("px-l-nearest").innerHTML = "<b>" + esc(ui("px.nearest")) + "</b> " + w + "px";
      $("px-l-pz").innerHTML = "<b>" + esc(ui("px.pz")) + "</b> " + wz + "px · " + (k / BLOCK).toFixed(2) + "×";
      $("px-w-bilinear").textContent = "";
      $("px-w-nearest").textContent = ui("px.widths") + ": " + nearestWidths(size, w, BLOCK, 9).join(", ") + " …";
      $("px-w-pz").textContent = ui("px.widths") + ": " + Array(9).fill(k).join(", ") + " …";
    }
    $("px-range").addEventListener("input", function (e) { demoScale = parseFloat(e.target.value); update(); });
    window.addEventListener("resize", function () { if (document.body.contains(host)) { fitZoom(); update(); } });
    fitZoom(); update();
  }

  /* ---------- controls ---------- */
  function currentTheme() {
    return root.getAttribute("data-theme") || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  function paintTheme() { $("theme").textContent = currentTheme() === "dark" ? "LIGHT" : "DARK"; }
  $("theme").addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next); save("theme", next); paintTheme();
  });
  function setLang(l) {
    if (l === lang) return;
    var open = [];
    lang = l; root.setAttribute("lang", l); save("lang", l); renderAll();
    open.forEach(function (id) {
      var el = document.getElementById(id); if (!el) return;
      (el.tagName === "DETAILS" ? el : el.querySelector("details")).open = true;
    });
  }
  $("lang-ko").addEventListener("click", function () { setLang("ko"); });
  $("lang-en").addEventListener("click", function () { setLang("en"); });
  if (window.matchMedia) matchMedia("(prefers-color-scheme: dark)").addEventListener("change", paintTheme);

  /* ---------- weather, hero only ---------- */
  (function weather() {
    var cv = $("weather"); if (!cv || !cv.getContext) return;
    var still = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    var g = cv.getContext("2d"), W, H, dpr = Math.min(window.devicePixelRatio || 1, 2), flakes = [], visible = true;
    function flake(any) { var z = Math.random(); return { x: Math.random() * W, y: any ? Math.random() * H : -6, r: 0.5 + z * 1.4, v: 0.12 + z * 0.35, p: Math.random() * 6.3, a: 0.15 + z * 0.35 }; }
    function size() {
      W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; g.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(40, W * H / 30000)); flakes = []; for (var i = 0; i < n; i++) flakes.push(flake(true));
    }
    function ink() { return currentTheme() === "dark" ? "215,228,250" : "120,145,185"; }
    function draw(step) {
      g.clearRect(0, 0, W, H); var c = ink();
      flakes.forEach(function (f, i) {
        if (step) { f.p += 0.008; f.y += f.v; f.x += Math.sin(f.p) * 0.18; if (f.y > H + 6) flakes[i] = f = flake(false); }
        g.beginPath(); g.arc(f.x, f.y, f.r, 0, 6.283); g.fillStyle = "rgba(" + c + "," + f.a + ")"; g.fill();
      });
    }
    size(); addEventListener("resize", size);
    if (still) { draw(false); return; }
    if ("IntersectionObserver" in window) new IntersectionObserver(function (e) { visible = e[0].isIntersecting; if (visible) loop(); }).observe(cv);
    var raf = 0;
    function tick() { raf = 0; if (!visible || document.hidden) return; draw(true); raf = requestAnimationFrame(tick); }
    function loop() { if (!raf) raf = requestAnimationFrame(tick); }
    document.addEventListener("visibilitychange", loop);
    loop();
  })();

  paintTheme();
  renderAll();
})();
