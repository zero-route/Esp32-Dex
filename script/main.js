(function () {
  "use strict";

  var DATA = window.ESP32_DATA;
  var main = document.getElementById("main");
  var navGroups = document.getElementById("nav-groups");

  if (!DATA) {
    main.innerHTML = '<div class="no-results">data.js tidak ditemukan atau gagal dimuat.</div>';
    return;
  }

  function el(tag, className, html) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function slug(str) {
    return String(str)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  DATA.categories.forEach(function (cat, i) {
    var catEl = el("div", "nav-cat");
    var num = String(i + 1).padStart(2, "0");

    var btn = el(
      "button",
      "nav-cat-btn",
      '<span><span class="idx">' + num + "</span>" + cat.nav + "</span>" +
        '<svg class="chev" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    );
    btn.setAttribute("aria-expanded", "false");
    catEl.appendChild(btn);

    var sub = el("div", "nav-sub");
    var topLink = el("a", null, "→ Lihat semua " + cat.nav);
    topLink.href = "#" + cat.id;
    sub.appendChild(topLink);

    if (cat.groups) {
      cat.groups.forEach(function (g) {
        var a = el("a", null, g.label);
        a.href = "#" + cat.id + "-" + slug(g.label);
        sub.appendChild(a);
      });
    }
    catEl.appendChild(sub);

    btn.addEventListener("click", function () {
      var isOpen = sub.classList.contains("open");
      sub.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });

    navGroups.appendChild(catEl);
  });

  navGroups.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeNav);
  });

  var totalItems = 0;

  DATA.categories.forEach(function (cat) {
    var section = el("section", "section");
    section.id = cat.id;

    var head = el("div", "section-head");
    head.appendChild(
      el(
        "div",
        "trace",
        '<span class="pad"></span><span class="line"></span><span class="label">' +
          cat.nav +
          '</span><span class="fill"></span>'
      )
    );
    head.appendChild(el("h2", null, cat.title));
    if (cat.description) head.appendChild(el("p", null, cat.description));
    section.appendChild(head);

    if (cat.matrix) {
      section.appendChild(renderMatrix(cat.matrix));
    }

    if (cat.groups) {
      cat.groups.forEach(function (group) {
        var groupEl = el("div", "group");
        groupEl.id = cat.id + "-" + slug(group.label);

        groupEl.appendChild(
          el(
            "h3",
            "group-title",
            group.label + ' <span class="count">(' + group.items.length + " varian)</span>"
          )
        );

        var grid = el("div", "grid");
        group.items.forEach(function (item) {
          grid.appendChild(renderCard(item));
          totalItems++;
        });
        groupEl.appendChild(grid);
        section.appendChild(groupEl);
      });
    }

    main.appendChild(section);
  });

  var statTotal = document.getElementById("stat-total");
  var statCat = document.getElementById("stat-cat");
  if (statTotal) statTotal.textContent = totalItems + "+";
  if (statCat) statCat.textContent = DATA.categories.filter(function (c) { return c.groups; }).length;

  function renderCard(item) {
    var card = el("article", "card");

    var imgWrap = el("div", "card-img");
    var img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.loading = "lazy";
    img.addEventListener("error", function () {
      imgWrap.innerHTML =
        '<div class="fallback"><svg width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="5" y="5" width="14" height="14" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M5 2v3M9 2v3M15 2v3M19 2v3M5 19v3M9 19v3M15 19v3M19 19v3M2 5h3M2 9h3M2 15h3M2 19h3M19 5h3M19 9h3M19 15h3M19 19h3" stroke="currentColor" stroke-width="1.2"/></svg><span>Gambar belum tersedia</span></div>';
    });
    imgWrap.appendChild(img);
    card.appendChild(imgWrap);

    var body = el("div", "card-body");
    body.appendChild(el("h3", null, item.name));
    body.appendChild(el("p", null, item.desc || ""));
    if (item.tags && item.tags.length) {
      var tagsEl = el("div", "tags");
      item.tags.forEach(function (t) {
        tagsEl.appendChild(el("span", "tag", t));
      });
      body.appendChild(tagsEl);
    }
    card.appendChild(body);
    return card;
  }

  function renderMatrix(matrix) {
    var wrap = el("div", "table-wrap");
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var trh = document.createElement("tr");
    matrix.head.forEach(function (h) {
      trh.appendChild(el("th", null, h));
    });
    thead.appendChild(trh);
    table.appendChild(thead);

    var tbody = document.createElement("tbody");
    matrix.rows.forEach(function (row) {
      var tr = document.createElement("tr");
      row.forEach(function (cell) {
        tr.appendChild(el("td", null, cell));
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
    return wrap;
  }

  var hamburger = document.getElementById("hamburger");
  var navPanel = document.getElementById("nav-panel");

  function openNav() {
    navPanel.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
  }
  function closeNav() {
    navPanel.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }
  hamburger.addEventListener("click", function () {
    var isOpen = navPanel.classList.contains("open");
    if (isOpen) closeNav();
    else openNav();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  var toTop = document.getElementById("to-top");
  window.addEventListener("scroll", function () {
    toTop.classList.toggle("show", window.scrollY > 500);
  });
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
