/* =====================================================================
   main.js — renders the shared header/footer and each page from
   data/site.js and data/projects.js. You normally won't need to edit
   this file; edit the data files instead.
   ===================================================================== */
(function () {
  "use strict";

  var SITE = window.SITE || {};
  var ALL = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  var page = document.body.getAttribute("data-page");

  /* ---------- helpers ---------- */

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // Projects visible to the public: not hidden, has a slug + title.
  function visibleProjects() {
    return ALL.filter(function (p) { return p && p.slug && p.title && !p.hidden; });
  }

  function projectUrl(p) {
    return "project.html?p=" + encodeURIComponent(p.slug);
  }

  function el(id) { return document.getElementById(id); }

  // Load Google Fonts on demand (only the families a page actually uses).
  var loadedFonts = {};
  function loadGoogleFonts(families) {
    (families || []).forEach(function (f) {
      if (loadedFonts[f]) return;
      loadedFonts[f] = true;
      var link = document.createElement("link");
      link.rel = "stylesheet";
      // Keep Google's axis syntax (e.g. "Kodchasan:wght@500") intact; only spaces become "+".
      link.href = "https://fonts.googleapis.com/css2?family=" + String(f).replace(/[^\w:@;,.\- ]/g, "").replace(/ /g, "+") + "&display=swap";
      document.head.appendChild(link);
    });
  }

  // Image with a graceful placeholder if the file is missing or empty.
  function imageHtml(src, alt, cls) {
    var placeholder = '<div class="img-placeholder ' + (cls || "") + '" aria-hidden="true"><span>' +
      esc((alt || "Image").slice(0, 40)) + "</span></div>";
    if (!src) return placeholder;
    return '<img class="' + (cls || "") + '" src="' + esc(src) + '" alt="' + esc(alt || "") + '" loading="lazy">';
  }
  // Swap broken images for placeholders (runs after render).
  function wirePlaceholders(root) {
    (root || document).querySelectorAll("img").forEach(function (img) {
      img.addEventListener("error", function () {
        var div = document.createElement("div");
        div.className = "img-placeholder " + img.className;
        div.setAttribute("aria-hidden", "true");
        div.innerHTML = "<span>" + esc(img.alt || "Image") + "</span>";
        img.replaceWith(div);
      }, { once: true });
    });
  }

  /* ---------- shared header & footer ---------- */

  function renderHeader() {
    var h = el("site-header");
    if (!h) return;
    var links = [
      { href: "index.html", label: "Home", key: "home" },
      { href: "portfolio.html", label: "Portfolio", key: "portfolio" },
      { href: SITE.resumeUrl || "resume.html", label: "Resume", key: "resume" }
    ];
    var nav = links.map(function (l) {
      var active = page === l.key || (page === "project" && l.key === "portfolio");
      return '<a href="' + esc(l.href) + '"' + (active ? ' aria-current="page"' : "") + ">" + l.label + "</a>";
    }).join("");

    h.innerHTML =
      '<div class="container site-header__inner">' +
        '<a class="logo" href="index.html">' + esc(SITE.name || "Portfolio") + "</a>" +
        '<button class="nav-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="Menu"><span></span><span></span></button>' +
        '<nav class="site-nav" id="site-nav" aria-label="Main">' + nav + "</nav>" +
      "</div>";

    var btn = h.querySelector(".nav-toggle");
    btn.addEventListener("click", function () {
      var open = h.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function renderFooter() {
    var f = el("site-footer");
    if (!f) return;
    var bits = [];
    if (SITE.email) bits.push('<a href="mailto:' + esc(SITE.email) + '">' + esc(SITE.email) + "</a>");
    if (SITE.linkedin) bits.push('<a href="' + esc(SITE.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>');
    if (SITE.resumeUrl) bits.push('<a href="' + esc(SITE.resumeUrl) + '">Resume</a>');
    if (SITE.location) bits.push("<span>" + esc(SITE.location) + "</span>");
    f.innerHTML =
      '<div class="container site-footer__inner">' +
        "<p>© " + new Date().getFullYear() + " " + esc(SITE.name || "") + "</p>" +
        '<p class="site-footer__links">' + bits.join('<span class="dot">·</span>') + "</p>" +
      "</div>";
  }

  /* ---------- project card ---------- */

  function cardHtml(p) {
    var tags = (p.tags || []).slice(0, 3).map(function (t) {
      return '<li>' + esc(t) + "</li>";
    }).join("");
    return (
      '<a class="card" href="' + projectUrl(p) + '">' +
        '<div class="card__media">' + imageHtml(p.thumbnail, p.title, "card__img") + "</div>" +
        '<div class="card__body">' +
          '<h3 class="card__title">' + esc(p.title) + "</h3>" +
          '<p class="card__summary">' + esc(p.summary || "") + "</p>" +
          (tags ? '<ul class="tags">' + tags + "</ul>" : "") +
        "</div>" +
      "</a>"
    );
  }

  function renderGrid(container, list) {
    if (!container) return;
    if (!list.length) {
      container.innerHTML = '<p class="empty">No projects to show yet.</p>';
      return;
    }
    container.innerHTML = list.map(cardHtml).join("");
    wirePlaceholders(container);
  }

  /* ---------- pages ---------- */

  function renderHome() {
    var photo = el("hero-photo");
    if (photo) {
      if (SITE.photo) { photo.src = SITE.photo; photo.alt = SITE.photoAlt || SITE.name || ""; }
      else { photo.removeAttribute("src"); }
      wirePlaceholders(photo.parentNode);
      if (!SITE.photo) photo.dispatchEvent(new Event("error"));
    }
    if (el("hero-name")) el("hero-name").textContent = SITE.name || "";
    if (el("hero-tagline")) el("hero-tagline").textContent = SITE.tagline || "";
    if (el("hero-intro")) el("hero-intro").textContent = SITE.intro || "";

    var actions = '<a class="btn" href="portfolio.html">View portfolio</a>';
    if (SITE.resumeUrl) actions += '<a class="btn btn--ghost" href="' + esc(SITE.resumeUrl) + '">Resume</a>';
    if (el("hero-actions")) el("hero-actions").innerHTML = actions;

    if (el("highlights-title")) el("highlights-title").textContent = SITE.highlightsTitle || "Selected Work";

    var visible = visibleProjects();
    var featured = visible.filter(function (p) { return p.featured; });
    if (!featured.length) featured = visible; // fall back to first projects
    renderGrid(el("highlights-grid"), featured.slice(0, SITE.highlightsCount || 3));
  }

  function renderPortfolio() {
    renderGrid(el("portfolio-grid"), visibleProjects());
  }

  /* --- case study sections --- */

  function paragraphs(body) {
    if (!body) return "";
    var list = Array.isArray(body) ? body : String(body).split(/\n\s*\n/);
    // body is trusted author content, so simple HTML is allowed
    return list.map(function (t) { return "<p>" + t + "</p>"; }).join("");
  }

  function figure(img, extraCls, afterImage) {
    // `grow` (optional) sizes the item relative to its siblings in a `layout: "row"` gallery
    return '<figure class="cs-figure ' + (extraCls || "") + '"' + (img.grow ? ' style="flex-grow:' + (parseFloat(img.grow) || 1) + '"' : "") + ">" +
      // `outline: true` adds a thick border — for images whose edges match the page background
      imageHtml(img.src, img.alt || img.caption || "", "cs-img" + (img.outline ? " is-outlined" : "")) + (afterImage || "") +
      (img.caption ? "<figcaption>" + esc(img.caption) + "</figcaption>" : "") +
    "</figure>";
  }

  var SECTION_RENDERERS = {
    text: function (s) {
      return '<section class="cs-section">' +
        (s.heading ? "<h2>" + esc(s.heading) + "</h2>" : "") +
        '<div class="cs-prose">' + paragraphs(s.body) + "</div></section>";
    },
    // Optional key under the image:
    //   legend: [{ label, color, shape: "circle"|"dot"|"rect"|"pill"|"diamond" }], legendBackground, legendColor
    image: function (s) {
      var legend = "";
      if (s.legend && s.legend.length) {
        legend = '<ul class="cs-legend" aria-label="Key" style="background:' + esc(s.legendBackground || "var(--surface)") +
          ";color:" + esc(s.legendColor || "inherit") + '">' +
          s.legend.map(function (k) {
            return '<li><span class="cs-legend__mark cs-legend__mark--' + esc(k.shape || "rect") + '" style="background:' + esc(k.color) + '" aria-hidden="true"></span>' + esc(k.label) + "</li>";
          }).join("") + "</ul>";
      }
      return '<section class="cs-section cs-section--media' + (s.wide ? " is-wide" : "") + (legend ? " has-legend" : "") + '">' +
        figure(s, "", legend) + "</section>";
    },
    gallery: function (s) {
      var imgs = (s.images || []).map(function (i) { return figure(i); }).join("");
      return '<section class="cs-section cs-section--media is-wide">' +
        (s.heading ? "<h2>" + esc(s.heading) + "</h2>" : "") +
        '<div class="cs-gallery' + (s.layout === "row" ? " is-row" : s.columns ? " has-cols" : "") + '"' +
        (s.columns ? ' style="--cols:' + (parseInt(s.columns, 10) || 3) + '"' : "") + ">" + imgs + "</div></section>";
    },
    list: function (s) {
      var items = (s.items || []).map(function (i) { return "<li>" + i + "</li>"; }).join("");
      return '<section class="cs-section">' +
        (s.heading ? "<h2>" + esc(s.heading) + "</h2>" : "") +
        '<ul class="cs-list">' + items + "</ul></section>";
    },
    quote: function (s) {
      return '<section class="cs-section"><blockquote class="cs-quote"><p>' + esc(s.text) + "</p>" +
        (s.cite ? "<cite>— " + esc(s.cite) + "</cite>" : "") + "</blockquote></section>";
    },
    // Type specimens / wordmark callouts rendered as live text.
    // { type: "wordmarks", background, color, labelFont, googleFonts: ["Family", ...],
    //   groups: [{ label, labelFont, box, align, lines: [{ font, weight, size: "xl"|"lg"|"md"|"type"|"sm", parts: [{ text, color }] }] }] }
    wordmarks: function (s) {
      loadGoogleFonts(s.googleFonts);
      var groups = (s.groups || []).map(function (g) {
        var lines = (g.lines || []).map(function (l) {
          var parts = (l.parts || []).map(function (p) {
            return '<span style="color:' + esc(p.color || "inherit") + '">' + esc(p.text) + "</span>";
          }).join(" ");
          return '<p class="wm-line wm-line--' + esc(l.size || "md") + '" style="font-family:' + esc(l.font || "inherit") +
            (l.weight ? ";font-weight:" + esc(l.weight) : "") + '">' + parts + "</p>";
        }).join("");
        var boxStyle = (g.box ? "background:" + esc(g.box) + ";" : "") + (g.align ? "text-align:" + esc(g.align) + ";" : "");
        return '<div class="wm-group">' +
          (g.label ? '<h3 class="wm-label" style="' + (g.labelFont ? "font-family:" + esc(g.labelFont) + ";" : "") +
            (g.labelWeight ? "font-weight:" + esc(g.labelWeight) + ";" : "") + '">' + esc(g.label) + "</h3>" : "") +
          '<div class="wm-box' + (g.box ? " has-box" : "") + '"' + (boxStyle ? ' style="' + boxStyle + '"' : "") + ">" + lines + "</div></div>";
      }).join("");
      var style = "background:" + esc(s.background || "var(--surface)") + ";color:" + esc(s.color || "inherit") +
        (s.labelFont ? ";--wm-label-font:" + esc(s.labelFont) : "");
      return '<section class="cs-section">' +
        (s.heading ? "<h2>" + esc(s.heading) + "</h2>" : "") +
        '<figure class="wm-panel" style="' + style + '">' + groups +
        (s.caption ? "<figcaption>" + esc(s.caption) + "</figcaption>" : "") + "</figure></section>";
    },
    // Live, interactive UI components built from a style tile's tokens.
    // { type: "uiDemo", heading, intro, background, panel, color, font, googleFonts,
    //   buttons: [{ label, bg, fg, hoverBg, activeBg, focusBorder }],
    //   field: { label, placeholder, bg, fg, border, hoverBg, caret, errorBorder, errorText, errorMessage, pattern } }
    uiDemo: function (s) {
      loadGoogleFonts(s.googleFonts);
      var btns = (s.buttons || []).map(function (b) {
        var vars = "--b-bg:" + b.bg + ";--b-fg:" + (b.fg || "#fff") + ";--b-hover:" + (b.hoverBg || b.bg) +
          ";--b-active:" + (b.activeBg || b.bg) + ";--b-focus:" + (b.focusBorder || "currentColor");
        return '<button type="button" class="ui-btn" style="' + esc(vars) + '">' + esc(b.label) + "</button>";
      }).join("");
      var field = "";
      if (s.field) {
        var f = s.field;
        var fvars = "--f-bg:" + f.bg + ";--f-fg:" + f.fg + ";--f-border:" + f.border + ";--f-hover:" + (f.hoverBg || f.bg) +
          ";--f-caret:" + (f.caret || f.fg) + ";--f-error:" + (f.errorBorder || "#c00") + ";--f-error-text:" + (f.errorText || f.errorBorder || "#c00");
        field = '<div class="ui-field" style="' + esc(fvars) + '">' +
          '<label class="ui-field__label" for="ui-demo-field">' + esc(f.label) + "</label>" +
          '<input id="ui-demo-field" class="ui-input" type="text" autocomplete="off" placeholder="' + esc(f.placeholder || "") + '"' +
          ' data-pattern="' + esc(f.pattern || "") + '" aria-describedby="ui-demo-error">' +
          '<p class="ui-field__error" id="ui-demo-error" aria-live="polite"></p>' +
          '<span class="ui-field__msg" hidden>' + esc(f.errorMessage || "Invalid Input") + "</span></div>";
      }
      var style = "background:" + esc(s.background || "var(--surface)") + ";color:" + esc(s.color || "inherit") +
        (s.font ? ";--ui-font:" + esc(s.font) : "");
      return '<section class="cs-section">' +
        (s.heading ? "<h2>" + esc(s.heading) + "</h2>" : "") +
        '<div class="ui-demo" style="' + style + '">' +
          (s.intro ? '<p class="ui-demo__intro">' + esc(s.intro) + "</p>" : "") +
          '<div class="ui-demo__stage"' + (s.panel ? ' style="background:' + esc(s.panel) + '"' : "") + ">" +
            '<div class="ui-demo__buttons">' + btns + "</div>" + field +
          "</div>" +
          '<p class="ui-demo__status" aria-live="polite">&nbsp;</p>' +
        "</div></section>";
    },
    // Colour palette callout, same panel style as "wordmarks".
    // { type: "palette", background, color, labelFont, textFont, googleFonts,
    //   groups: [{ label, swatches: [{ name, hex }] }],
    //   samples: { label, items: [{ text, bg, fg }] } }
    palette: function (s) {
      loadGoogleFonts(s.googleFonts);
      var groups = (s.groups || []).map(function (g) {
        var sw = (g.swatches || []).map(function (c) {
          var hex = String(c.hex || "").replace(/^#/, "").toUpperCase();
          return '<div class="pal-swatch"><div class="pal-chip" style="background:#' + esc(hex) + '"></div>' +
            '<p class="pal-name">' + esc(c.name) + '</p><p class="pal-hex">#' + esc(hex) + "</p></div>";
        }).join("");
        return '<div class="pal-group"><h3 class="wm-label">' + esc(g.label) + '</h3><div class="pal-row">' + sw + "</div></div>";
      }).join("");
      var samples = "";
      if (s.samples) {
        samples = '<div class="pal-group"><h3 class="wm-label">' + esc(s.samples.label || "Contrast") + '</h3><div class="pal-samples">' +
          (s.samples.items || []).map(function (i) {
            return '<div class="pal-sample" style="background:' + esc(i.bg) + ";color:" + esc(i.fg) + '">' + esc(i.text) + "</div>";
          }).join("") + "</div></div>";
      }
      var style = "background:" + esc(s.background || "var(--surface)") + ";color:" + esc(s.color || "inherit") +
        (s.labelFont ? ";--wm-label-font:" + esc(s.labelFont) : "") + (s.textFont ? ";font-family:" + esc(s.textFont) : "");
      return '<section class="cs-section">' +
        (s.heading ? "<h2>" + esc(s.heading) + "</h2>" : "") +
        '<figure class="wm-panel pal-panel" style="' + style + '">' + groups + samples +
        (s.caption ? "<figcaption>" + esc(s.caption) + "</figcaption>" : "") + "</figure></section>";
    },
    table: function (s) {
      var hl = s.highlightColumn; // 1-based index of a column to emphasise
      var head = "<tr><th scope=\"col\"><span class=\"sr-only\">" + esc(s.corner || "Criteria") + "</span></th>" +
        (s.columns || []).map(function (c, i) {
          return '<th scope="col"' + (hl === i + 1 ? ' class="is-hl"' : "") + ">" + esc(c) + "</th>";
        }).join("") + "</tr>";
      var body = (s.rows || []).map(function (r) {
        // Row label is a string, or { label: "...", hint: "smaller helper text" }
        var lbl = r[0] && typeof r[0] === "object" ?
          esc(r[0].label) + (r[0].hint ? '<span class="cs-table__hint">' + esc(r[0].hint) + "</span>" : "") :
          esc(r[0]);
        return '<tr><th scope="row">' + lbl + "</th>" + r.slice(1).map(function (cell, i) {
          return "<td" + (hl === i + 1 ? ' class="is-hl"' : "") + ">" + esc(cell) + "</td>";
        }).join("") + "</tr>";
      }).join("");
      return '<section class="cs-section">' +
        (s.heading ? "<h2>" + esc(s.heading) + "</h2>" : "") +
        '<div class="cs-table-wrap" tabindex="0" role="region" aria-label="' + esc(s.caption || s.heading || "Table") + '">' +
        '<table class="cs-table">' + (s.caption ? "<caption>" + esc(s.caption) + "</caption>" : "") +
        "<thead>" + head + "</thead><tbody>" + body + "</tbody></table></div></section>";
    },
    stats: function (s) {
      var items = (s.items || []).map(function (i) {
        return '<div class="cs-stat"><strong>' + esc(i.value) + "</strong><span>" + esc(i.label) + "</span></div>";
      }).join("");
      return '<section class="cs-section">' +
        (s.heading ? "<h2>" + esc(s.heading) + "</h2>" : "") +
        '<div class="cs-stats">' + items + "</div></section>";
    }
  };

  function renderProject() {
    var root = el("case-study");
    if (!root) return;
    var params = new URLSearchParams(window.location.search);
    var slug = params.get("p");
    var preview = params.has("preview");

    var project = ALL.filter(function (p) { return p && p.slug === slug; })[0];
    if (!project || (project.hidden && !preview)) {
      document.title = "Project not found — " + (SITE.name || "");
      root.innerHTML =
        '<div class="container not-found"><h1>Project not found</h1>' +
        "<p>This project may have been moved or is no longer available.</p>" +
        '<a class="btn" href="portfolio.html">Back to portfolio</a></div>';
      return;
    }

    applyProjectTheme(project.theme);
    document.title = project.title + " — " + (SITE.name || "");
    var meta = document.createElement("meta");
    meta.name = "description";
    meta.content = project.summary || "";
    document.head.appendChild(meta);

    var facts = [
      ["Role", project.role],
      ["Year", project.year],
      ["Tools", (project.tools || []).join(", ")],
      ["Focus", (project.tags || []).join(", ")]
    ].filter(function (f) { return f[1]; }).map(function (f) {
      return "<div><dt>" + f[0] + "</dt><dd>" + esc(f[1]) + "</dd></div>";
    }).join("");

    var sections = (project.sections || []).map(function (s) {
      var fn = SECTION_RENDERERS[s.type || "text"];
      return fn ? fn(s) : "";
    }).join("");

    // Prev / next among visible projects
    var visible = visibleProjects();
    var idx = visible.indexOf(project);
    var next = idx >= 0 && visible.length > 1 ? visible[(idx + 1) % visible.length] : null;
    var prev = idx >= 0 && visible.length > 1 ? visible[(idx - 1 + visible.length) % visible.length] : null;

    root.innerHTML =
      (project.hidden ? '<div class="preview-banner">Preview — this project is hidden from the public site.</div>' : "") +
      '<header class="cs-hero container">' +
        '<a class="back-link" href="portfolio.html">← All projects</a>' +
        "<h1>" + esc(project.title) + "</h1>" +
        '<p class="cs-lead">' + esc(project.summary || "") + "</p>" +
        (facts ? '<dl class="cs-facts">' + facts + "</dl>" : "") +
      "</header>" +
      '<div class="cs-cover container">' + imageHtml(project.cover || project.thumbnail, project.title, "cs-cover__img") + "</div>" +
      '<div class="cs-body container">' + sections + "</div>" +
      (next ?
        '<nav class="cs-pager container" aria-label="More projects">' +
          '<a href="' + projectUrl(prev) + '"><span>Previous</span>' + esc(prev.title) + "</a>" +
          '<a class="is-next" href="' + projectUrl(next) + '"><span>Next</span>' + esc(next.title) + "</a>" +
        "</nav>" : "");

    wirePlaceholders(root);
    wireUiDemos(root);
  }

  // Optional per-project theme: restyles only the case-study content (<main>),
  // leaving the site header and footer untouched.
  // theme: { bg, surface, text, muted, line, accent, accentInk, fontSans, fontDisplay, googleFonts }
  function applyProjectTheme(t) {
    var main = el("main");
    if (!t || !main) return;
    loadGoogleFonts(t.googleFonts);
    var map = { bg: "--bg", surface: "--surface", text: "--text", muted: "--muted", line: "--line",
      accent: "--accent", accentInk: "--accent-ink", fontSans: "--font-sans", fontDisplay: "--font-display" };
    Object.keys(map).forEach(function (k) { if (t[k]) main.style.setProperty(map[k], t[k]); });
    main.classList.add("is-themed");
  }

  // Behaviour for "uiDemo" sections: button feedback + field validation.
  function wireUiDemos(root) {
    root.querySelectorAll(".ui-demo").forEach(function (demo) {
      var status = demo.querySelector(".ui-demo__status");
      var timer;
      demo.querySelectorAll(".ui-btn").forEach(function (b) {
        // Resting the pointer on a button for 1s shows its "Focused" state from the style tile
        var dwell;
        b.addEventListener("pointerenter", function () {
          clearTimeout(dwell);
          dwell = setTimeout(function () { b.classList.add("is-dwell"); }, 1000);
        });
        b.addEventListener("pointerleave", function () {
          clearTimeout(dwell);
          b.classList.remove("is-dwell");
        });
        b.addEventListener("click", function () {
          status.textContent = "“" + b.textContent + "” pressed";
          clearTimeout(timer);
          timer = setTimeout(function () { status.innerHTML = "&nbsp;"; }, 1800);
        });
      });
      var input = demo.querySelector(".ui-input");
      if (!input) return;
      var err = demo.querySelector(".ui-field__error");
      var msg = demo.querySelector(".ui-field__msg").textContent;
      var re = input.getAttribute("data-pattern") ? new RegExp(input.getAttribute("data-pattern")) : null;
      function check(showEmpty) {
        var v = input.value.trim();
        var bad = (v === "" && showEmpty) || (v !== "" && re && !re.test(v));
        input.classList.toggle("is-invalid", bad);
        input.classList.toggle("is-filled", v !== "" && !bad);
        input.setAttribute("aria-invalid", bad ? "true" : "false");
        err.textContent = bad ? msg : "";
      }
      // Once flagged, re-validate as the visitor types so the error clears as soon as it's fixed
      input.addEventListener("input", function () { if (input.classList.contains("is-invalid")) check(false); });
      input.addEventListener("blur", function () { check(true); });
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") { check(true); } });
    });
  }

  /* ---------- resume ---------- */

  function renderResume() {
    var root = el("resume");
    var R = window.RESUME;
    if (!root || !R) return;

    var pdf = R.pdf || SITE.resumePdf;
    var c = R.contact || {};
    var contact = [];
    if (c.email) contact.push('<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>");
    if (c.linkedin) contact.push('<a href="' + esc(c.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>');
    if (c.phone) contact.push('<a href="tel:' + esc(c.phone.replace(/[^\d+]/g, "")) + '">' + esc(c.phone) + "</a>");

    function kv(pairs) {
      return '<dl class="rs-kv">' + (pairs || []).map(function (p) {
        return "<div><dt>" + esc(p[0]) + "</dt><dd>" + esc(p[1]) + "</dd></div>";
      }).join("") + "</dl>";
    }

    function entry(head, sub, date, body) {
      return '<article class="rs-entry">' +
        '<div class="rs-entry__head"><h3>' + head + "</h3>" +
        (date ? '<span class="rs-date">' + esc(date) + "</span>" : "") + "</div>" +
        (sub ? '<p class="rs-sub">' + sub + "</p>" : "") + body + "</article>";
    }

    var education = (R.education || []).map(function (e) {
      return entry(esc(e.school) + (e.location ? '<span class="rs-muted">, ' + esc(e.location) + "</span>" : ""),
        esc(e.degree), e.date, kv(e.details));
    }).join("");

    var sections = (R.sections || []).map(function (s) {
      var items = (s.items || []).map(function (i) {
        var bullets = (i.bullets || []).map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("");
        return entry(esc(i.org) + (i.role ? ' <span class="rs-role">' + esc(i.role) + "</span>" : ""),
          i.blurb ? esc(i.blurb) : "", i.date, bullets ? '<ul class="rs-bullets">' + bullets + "</ul>" : "");
      }).join("");
      return '<section class="rs-section"><h2>' + esc(s.title) + "</h2>" + items + "</section>";
    }).join("");

    var actions = "";
    if (pdf) {
      actions =
        '<a class="btn" href="' + esc(pdf) + '" download="' + esc(R.pdfDownloadName || "") + '">Download PDF</a>' +
        '<a class="btn btn--ghost" href="' + esc(pdf) + '" target="_blank" rel="noopener">Open PDF</a>';
    }

    root.innerHTML =
      '<header class="rs-hero">' +
        '<div><p class="eyebrow">Resume</p><h1>' + esc(SITE.name || "") + "</h1>" +
        (contact.length ? '<p class="rs-contact">' + contact.join('<span class="dot">·</span>') + "</p>" : "") +
        (R.updated ? '<p class="rs-muted rs-updated">Last updated ' + esc(R.updated) + "</p>" : "") +
        "</div>" +
        (actions ? '<div class="rs-actions">' + actions + "</div>" : "") +
      "</header>" +
      (education ? '<section class="rs-section"><h2>Education</h2>' + education + "</section>" : "") +
      sections +
      ((R.skills || []).length ? '<section class="rs-section"><h2>Certificates, Skills &amp; Interests</h2>' + kv(R.skills) + "</section>" : "");
  }

  /* ---------- boot ---------- */

  renderHeader();
  renderFooter();
  if (page === "home") renderHome();
  else if (page === "portfolio") renderPortfolio();
  else if (page === "project") renderProject();
  else if (page === "resume") renderResume();
})();
