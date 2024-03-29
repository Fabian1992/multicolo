if (window.Modernizr = function(a, b, c) {
        function d(a, b) { var c = a.charAt(0).toUpperCase() + a.substr(1),
                d = (a + " " + u.join(c + " ") + c).split(" "); return e(d, b) }

        function e(a, b) { for (var d in a)
                if (q[a[d]] !== c) return "pfx" != b || a[d];
            return !1 }

        function f(a, b) { return !!~("" + a).indexOf(b) }

        function g(a, b) { return typeof a === b }

        function i(a) { q.cssText = a } var r, B, D, j = "2.0.6",
            k = {},
            l = !0,
            m = b.documentElement,
            o = (b.head || b.getElementsByTagName("head")[0], "modernizr"),
            p = b.createElement(o),
            q = p.style,
            t = (Object.prototype.toString, " -webkit- -moz- -o- -ms- -khtml- ".split(" ")),
            u = "Webkit Moz O ms Khtml".split(" "),
            v = {},
            y = [],
            z = function(a, c, d, e) { var f, g, h, i = b.createElement("div"); if (parseInt(d, 10))
                    for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : o + (d + 1), i.appendChild(h); return f = ["&shy;", "<style>", a, "</style>"].join(""), i.id = o, i.innerHTML += f, m.appendChild(i), g = c(i, a), i.parentNode.removeChild(i), !!g },
            A = function(b) { if (a.matchMedia) return matchMedia(b).matches; var c; return z("@media " + b + " { #" + o + " { position: absolute; } }", function(b) { c = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position }), c },
            C = {}.hasOwnProperty;
        D = g(C, c) || g(C.call, c) ? function(a, b) { return b in a && g(a.constructor.prototype[b], c) } : function(a, b) { return C.call(a, b) }, v.rgba = function() { return i("background-color:rgba(150,255,150,.5)"), f(q.backgroundColor, "rgba") }, v.boxshadow = function() { return d("boxShadow") }, v.csstransitions = function() { return d("transitionProperty") }; for (var E in v) D(v, E) && (B = E.toLowerCase(), k[B] = v[E](), y.push((k[B] ? "" : "no-") + B)); return k.addTest = function(a, b) { if ("object" == typeof a)
                for (var d in a) D(a, d) && k.addTest(d, a[d]);
            else { if (a = a.toLowerCase(), k[a] !== c) return;
                b = "boolean" == typeof b ? b : !!b(), m.className += " " + (b ? "" : "no-") + a, k[a] = b } return k }, i(""), p = r = null, a.attachEvent && function() { var a = b.createElement("div"); return a.innerHTML = "<elem></elem>", 1 !== a.childNodes.length }() && function(a, b) {
            function d(a) { for (var b = -1; ++b < h;) a.createElement(g[b]) }
            a.iepp = a.iepp || {}; var s, e = a.iepp,
                f = e.html5elements || "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                g = f.split("|"),
                h = g.length,
                i = new RegExp("(^|\\s)(" + f + ")", "gi"),
                j = new RegExp("<(/*)(" + f + ")", "gi"),
                k = /^\s*[\{\}]\s*$/,
                l = new RegExp("(^|[^\\n]*?\\s)(" + f + ")([^\\n]*)({[\\n\\w\\W]*?})", "gi"),
                m = b.createDocumentFragment(),
                n = b.documentElement,
                o = n.firstChild,
                p = b.createElement("body"),
                q = b.createElement("style"),
                r = /print|all/;
            e.getCSS = function(a, b) { if (a + "" === c) return ""; for (var g, d = -1, f = a.length, h = []; ++d < f;) g = a[d], g.disabled || (b = g.media || b, r.test(b) && h.push(e.getCSS(g.imports, b), g.cssText), b = "all"); return h.join("") }, e.parseCSS = function(a) { for (var c, b = []; null != (c = l.exec(a));) b.push(((k.exec(c[1]) ? "\n" : c[1]) + c[2] + c[3]).replace(i, "$1.iepp_$2") + c[4]); return b.join("\n") }, e.writeHTML = function() { var a = -1; for (s = s || b.body; ++a < h;)
                    for (var c = b.getElementsByTagName(g[a]), d = c.length, e = -1; ++e < d;) c[e].className.indexOf("iepp_") < 0 && (c[e].className += " iepp_" + g[a]);
                m.appendChild(s), n.appendChild(p), p.className = s.className, p.id = s.id, p.innerHTML = s.innerHTML.replace(j, "<$1font") }, e._beforePrint = function() { q.styleSheet.cssText = e.parseCSS(e.getCSS(b.styleSheets, "all")), e.writeHTML() }, e.restoreHTML = function() { p.innerHTML = "", n.removeChild(p), n.appendChild(s) }, e._afterPrint = function() { e.restoreHTML(), q.styleSheet.cssText = "" }, d(b), d(m), e.disablePP || (o.insertBefore(q, o.firstChild), q.media = "print", q.className = "iepp-printshim", a.attachEvent("onbeforeprint", e._beforePrint), a.attachEvent("onafterprint", e._afterPrint)) }(a, b), k._version = j, k._prefixes = t, k._domPrefixes = u, k.mq = A, k.testProp = function(a) { return e([a]) }, k.testAllProps = d, k.testStyles = z, m.className = m.className.replace(/\bno-js\b/, "") + (l ? " js " + y.join(" ") : ""), k }(this, this.document), function(a, b) {
        function c() { s(!0) } if (a.respond = {}, respond.update = function() {}, respond.mediaQueriesSupported = b, !b) { var q, r, d = a.document,
                e = d.documentElement,
                f = [],
                g = [],
                h = [],
                i = {},
                j = 30,
                k = d.getElementsByTagName("head")[0] || e,
                l = k.getElementsByTagName("link"),
                m = [],
                n = function() { for (var e, f, g, h, b = l, c = b.length, d = 0; d < c; d++) e = b[d], f = e.href, g = e.media, h = e.rel && "stylesheet" === e.rel.toLowerCase(), !!f && h && !i[f] && (/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(f) && f.replace(RegExp.$1, "").split("/")[0] !== a.location.host ? i[f] = !0 : m.push({ href: f, media: g }));
                    o() },
                o = function() { if (m.length) { var a = m.shift();
                        t(a.href, function(b) { p(b, a.href, a.media), i[a.href] = !0, o() }) } },
                p = function(a, b, c) { var k, l, m, n, o, d = a.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),
                        e = d && d.length || 0,
                        b = b.substring(0, b.lastIndexOf("/")),
                        h = function(a) { return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + b + "$2$3") },
                        i = !e && c,
                        j = 0; for (b.length && (b += "/"), i && (e = 1); j < e; j++)
                        for (k = 0, i ? (l = c, g.push(h(a))) : (l = d[j].match(/@media ([^\{]+)\{([\S\s]+?)$/) && RegExp.$1, g.push(RegExp.$2 && h(RegExp.$2))), n = l.split(","), o = n.length; k < o; k++) m = n[k], f.push({ media: m.match(/(only\s+)?([a-zA-Z]+)(\sand)?/) && RegExp.$2, rules: g.length - 1, minw: m.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/) && parseFloat(RegExp.$1), maxw: m.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/) && parseFloat(RegExp.$1) });
                    s() },
                s = function(a) { var b = "clientWidth",
                        c = e[b],
                        i = "CSS1Compat" === d.compatMode && c || d.body[b] || c,
                        m = {},
                        n = d.createDocumentFragment(),
                        o = l[l.length - 1],
                        p = (new Date).getTime(); if (a && q && p - q < j) clearTimeout(r), r = setTimeout(s, j);
                    else { q = p; for (var t in f) { var u = f[t];
                            (!u.minw && !u.maxw || (!u.minw || u.minw && i >= u.minw) && (!u.maxw || u.maxw && i <= u.maxw)) && (m[u.media] || (m[u.media] = []), m[u.media].push(g[u.rules])) } for (var t in h) h[t] && h[t].parentNode === k && k.removeChild(h[t]); for (var t in m) { var v = d.createElement("style"),
                                w = m[t].join("\n");
                            v.type = "text/css", v.media = t, v.styleSheet ? v.styleSheet.cssText = w : v.appendChild(d.createTextNode(w)), n.appendChild(v), h.push(v) }
                        k.insertBefore(n, o.nextSibling) } },
                t = function(a, b) { var c = u(); if (c) { if (c.open("GET", a, !0), c.onreadystatechange = function() { 4 == c.readyState && (200 == c.status || 304 == c.status) && b(c.responseText) }, 4 == c.readyState) return;
                        c.send() } },
                u = function() { for (var a = !1, b = [function() { return new ActiveXObject("Microsoft.XMLHTTP") }, function() { return new XMLHttpRequest }], c = b.length; c--;) { try { a = b[c]() } catch (a) { continue } break } return function() { return a } }();
            n(), respond.update = n, a.addEventListener ? a.addEventListener("resize", c, !1) : a.attachEvent && a.attachEvent("onresize", c) } }(this, Modernizr.mq("only all")), function(a, b, c) {
        function d(a) { return !a || "loaded" == a || "complete" == a }

        function e() { for (var a = 1, b = -1; p.length - ++b && (!p[b].s || (a = p[b].r)););
            a && h() }

        function f(a) { var f, c = b.createElement("script");
            c.src = a.s, c.onreadystatechange = c.onload = function() {!f && d(c.readyState) && (f = 1, e(), c.onload = c.onreadystatechange = null) }, m(function() { f || (f = 1, e()) }, H.errorTimeout), a.e ? c.onload() : n.parentNode.insertBefore(c, n) }

        function g(a) { var d, c = b.createElement("link"); if (c.href = a.s, c.rel = "stylesheet", c.type = "text/css", a.e || !w && !r) c.onload = function() { d || (d = 1, m(function() { e() }, 0)) }, a.e && c.onload();
            else { var f = function(a) { m(function() { if (!d) try { a.sheet.cssRules.length ? (d = 1, e()) : f(a) } catch (b) { 1e3 == b.code || "security" == b.message || "denied" == b.message ? (d = 1, m(function() { e() }, 0)) : f(a) } }, 0) };
                f(c) }
            m(function() { d || (d = 1, e()) }, H.errorTimeout), !a.e && n.parentNode.insertBefore(c, n) }

        function h() { var a = p.shift();
            q = 1, a ? a.t ? m(function() { "c" == a.t ? g(a) : f(a) }, 0) : (a(), e()) : q = 0 }

        function i(a, c, f, g, i, j) {
            function k() {!o && d(l.readyState) && (r.r = o = 1, !q && e(), l.onload = l.onreadystatechange = null, m(function() { u.removeChild(l) }, 0)) } var l = b.createElement(a),
                o = 0,
                r = { t: f, s: c, e: j };
            l.src = l.data = c, !s && (l.style.display = "none"), l.width = l.height = "0", "object" != a && (l.type = f), l.onload = l.onreadystatechange = k, "img" == a ? l.onerror = k : "script" == a && (l.onerror = function() { r.e = r.r = 1, h() }), p.splice(g, 0, r), u.insertBefore(l, s ? null : n), m(function() { o || (u.removeChild(l), r.r = r.e = o = 1, e()) }, H.errorTimeout) }

        function j(a, b, c) { var d = "c" == b ? z : y; return q = 0, b = b || "j", C(a) ? i(d, a, b, this.i++, l, c) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this }

        function k() { var a = H; return a.loader = { load: j, i: 0 }, a } var G, H, l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            u = s ? l : n.parentNode,
            v = a.opera && "[object Opera]" == o.call(a.opera),
            w = "webkitAppearance" in l.style,
            x = w && "async" in b.createElement("script"),
            y = r ? "object" : v || x ? "img" : "script",
            z = w ? "img" : y,
            A = Array.isArray || function(a) { return "[object Array]" == o.call(a) },
            B = function(a) { return Object(a) === a },
            C = function(a) { return "string" == typeof a },
            D = function(a) { return "[object Function]" == o.call(a) },
            E = [],
            F = {};
        H = function(a) {
            function b(a) { var g, h, b = a.split("!"),
                    c = E.length,
                    d = b.pop(),
                    e = b.length,
                    f = { url: d, origUrl: d, prefixes: b }; for (h = 0; h < e; h++) g = F[b[h]], g && (f = g(f)); for (h = 0; h < c; h++) f = E[h](f); return f }

            function d(a, d, e, f, g) { var h = b(a),
                    i = h.autoCallback; if (!h.bypass) { if (d && (d = D(d) ? d : d[a] || d[f] || d[a.split("/").pop().split("?")[0]]), h.instead) return h.instead(a, d, e, f, g);
                    e.load(h.url, h.forceCSS || !h.forceJS && /css$/.test(h.url) ? "c" : c, h.noexec), (D(d) || D(i)) && e.load(function() { k(), d && d(h.origUrl, g, f), i && i(h.origUrl, g, f) }) } }

            function e(a, b) {
                function c(a) { if (C(a)) d(a, h, b, 0, e);
                    else if (B(a))
                        for (i in a) a.hasOwnProperty(i) && d(a[i], h, b, i, e) } var i, e = !!a.test,
                    f = e ? a.yep : a.nope,
                    g = a.load || a.both,
                    h = a.callback;
                c(f), c(g), a.complete && b.load(a.complete) } var f, g, h = this.yepnope.loader; if (C(a)) d(a, 0, h, 0);
            else if (A(a))
                for (f = 0; f < a.length; f++) g = a[f], C(g) ? d(g, 0, h, 0) : A(g) ? H(g) : B(g) && e(g, h);
            else B(a) && e(a, h) }, H.addPrefix = function(a, b) { F[a] = b }, H.addFilter = function(a) { E.push(a) }, H.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", G = function() { b.removeEventListener("DOMContentLoaded", G, 0), b.readyState = "complete" }, 0)), a.yepnope = k() }(this, this.document), Modernizr.load = function() { yepnope.apply(window, [].slice.call(arguments, 0)) }, ! function(a, b, c, d) { var e = function(d, e) { this.elem = d, this.$elem = a(d), this.options = e, this.metadata = this.$elem.data("plugin-options"), this.$win = a(b), this.sections = {}, this.didScroll = !1, this.$doc = a(c), this.docHeight = this.$doc.height() };
        e.prototype = { defaults: { navItems: "a", currentClass: "current", changeHash: !1, easing: "swing", filter: "", scrollSpeed: 750, scrollThreshold: .5, begin: !1, end: !1, scrollChange: !1 }, init: function() { return this.config = a.extend({}, this.defaults, this.options, this.metadata), this.$nav = this.$elem.find(this.config.navItems), "" !== this.config.filter && (this.$nav = this.$nav.filter(this.config.filter)), this.$nav.on("click.onePageNav", a.proxy(this.handleClick, this)), this.getPositions(), this.bindInterval(), this.$win.on("resize.onePageNav", a.proxy(this.getPositions, this)), this }, adjustNav: function(a, b) { a.$elem.find("." + a.config.currentClass).removeClass(a.config.currentClass), b.addClass(a.config.currentClass) }, bindInterval: function() { var a, b = this;
                b.$win.on("scroll.onePageNav", function() { b.didScroll = !0 }), b.t = setInterval(function() { a = b.$doc.height(), b.didScroll && (b.didScroll = !1, b.scrollChange()), a !== b.docHeight && (b.docHeight = a, b.getPositions()) }, 250) }, getHash: function(a) { return a.attr("href").split("#")[1] }, getPositions: function() { var b, c, d, e = this;
                e.$nav.each(function() { b = e.getHash(a(this)), d = a("#" + b), d.length && (c = d.offset().top, e.sections[b] = Math.round(c)) }) }, getSection: function(a) { var b = null,
                    c = Math.round(this.$win.height() * this.config.scrollThreshold); for (var d in this.sections) this.sections[d] - c < a && (b = d); return b }, handleClick: function(c) { var d = this,
                    e = a(c.currentTarget),
                    f = e.parent(),
                    g = "#" + d.getHash(e);
                f.hasClass(d.config.currentClass) || (d.config.begin && d.config.begin(), d.adjustNav(d, f), d.unbindInterval(), d.scrollTo(g, function() { d.config.changeHash && (b.location.hash = g), d.bindInterval(), d.config.end && d.config.end() })), c.preventDefault() }, scrollChange: function() { var a, b = this.$win.scrollTop(),
                    c = this.getSection(b);
                null !== c && (a = this.$elem.find('a[href$="#' + c + '"]').parent(), a.hasClass(this.config.currentClass) || (this.adjustNav(this, a), this.config.scrollChange && this.config.scrollChange(a))) }, scrollTo: function(b, c) { var d = a(b).offset().top;
                a("html, body").animate({ scrollTop: d - this.config.scrollOffset }, this.config.scrollSpeed, this.config.easing, c) }, unbindInterval: function() { clearInterval(this.t), this.$win.unbind("scroll.onePageNav") } }, e.defaults = e.prototype.defaults, a.fn.onePageNav = function(a) { return this.each(function() { new e(this, a).init() }) } }(jQuery, window, document), "function" != typeof Object.create && (Object.create = function(a) {
        function b() {} return b.prototype = a, new b }), function(a, b, c) {
        var d = {
            init: function(b, c) { var d = this;
                d.$elem = a(c), d.options = a.extend({}, a.fn.owlCarousel.options, d.$elem.data(), b), d.userOptions = b, d.loadContent() },
            loadContent: function() {
                function b(a) { var b, c = ""; if ("function" == typeof d.options.jsonSuccess) d.options.jsonSuccess.apply(this, [a]);
                    else { for (b in a.owl) a.owl.hasOwnProperty(b) && (c += a.owl[b].item);
                        d.$elem.html(c) }
                    d.logIn() } var c, d = this; "function" == typeof d.options.beforeInit && d.options.beforeInit.apply(this, [d.$elem]), "string" == typeof d.options.jsonPath ? (c = d.options.jsonPath, a.getJSON(c, b)) : d.logIn() },
            logIn: function() { var a = this;
                a.$elem.data({ "owl-originalStyles": a.$elem.attr("style"), "owl-originalClasses": a.$elem.attr("class") }), a.$elem.css({ opacity: 0 }), a.orignalItems = a.options.items, a.checkBrowser(), a.wrapperWidth = 0, a.checkVisible = null, a.setVars() },
            setVars: function() { var a = this; return 0 !== a.$elem.children().length && (a.baseClass(), a.eventTypes(), a.$userItems = a.$elem.children(), a.itemsAmount = a.$userItems.length, a.wrapItems(), a.$owlItems = a.$elem.find(".owl-item"), a.$owlWrapper = a.$elem.find(".owl-wrapper"), a.playDirection = "next", a.prevItem = 0, a.prevArr = [0], a.currentItem = 0, a.customEvents(), void a.onStartup()) },
            onStartup: function() { var a = this;
                a.updateItems(), a.calculateAll(), a.buildControls(), a.updateControls(), a.response(), a.moveEvents(), a.stopOnHover(), a.owlStatus(), a.options.transitionStyle !== !1 && a.transitionTypes(a.options.transitionStyle), a.options.autoPlay === !0 && (a.options.autoPlay = 5e3), a.play(), a.$elem.find(".owl-wrapper").css("display", "block"), a.$elem.is(":visible") ? a.$elem.css("opacity", 1) : a.watchVisibility(), a.onstartup = !1, a.eachMoveUpdate(), "function" == typeof a.options.afterInit && a.options.afterInit.apply(this, [a.$elem]) },
            eachMoveUpdate: function() { var a = this;
                a.options.lazyLoad === !0 && a.lazyLoad(), a.options.autoHeight === !0 && a.autoHeight(), a.onVisibleItems(), "function" == typeof a.options.afterAction && a.options.afterAction.apply(this, [a.$elem]) },
            updateVars: function() { var a = this; "function" == typeof a.options.beforeUpdate && a.options.beforeUpdate.apply(this, [a.$elem]), a.watchVisibility(), a.updateItems(), a.calculateAll(), a.updatePosition(), a.updateControls(), a.eachMoveUpdate(), "function" == typeof a.options.afterUpdate && a.options.afterUpdate.apply(this, [a.$elem]) },
            reload: function() { var a = this;
                b.setTimeout(function() { a.updateVars() }, 0) },
            watchVisibility: function() { var a = this; return a.$elem.is(":visible") === !1 && (a.$elem.css({ opacity: 0 }), b.clearInterval(a.autoPlayInterval), b.clearInterval(a.checkVisible), void(a.checkVisible = b.setInterval(function() { a.$elem.is(":visible") && (a.reload(), a.$elem.animate({ opacity: 1 }, 200), b.clearInterval(a.checkVisible)) }, 500))) },
            wrapItems: function() { var a = this;
                a.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), a.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), a.wrapperOuter = a.$elem.find(".owl-wrapper-outer"), a.$elem.css("display", "block") },
            baseClass: function() { var a = this,
                    b = a.$elem.hasClass(a.options.baseClass),
                    c = a.$elem.hasClass(a.options.theme);
                b || a.$elem.addClass(a.options.baseClass), c || a.$elem.addClass(a.options.theme) },
            updateItems: function() { var b, c, d = this; if (d.options.responsive === !1) return !1; if (d.options.singleItem === !0) return d.options.items = d.orignalItems = 1, d.options.itemsCustom = !1, d.options.itemsDesktop = !1, d.options.itemsDesktopSmall = !1, d.options.itemsTablet = !1, d.options.itemsTabletSmall = !1, d.options.itemsMobile = !1, !1; if (b = a(d.options.responsiveBaseWidth).width(), b > (d.options.itemsDesktop[0] || d.orignalItems) && (d.options.items = d.orignalItems), d.options.itemsCustom !== !1)
                    for (d.options.itemsCustom.sort(function(a, b) { return a[0] - b[0] }), c = 0; c < d.options.itemsCustom.length; c += 1) d.options.itemsCustom[c][0] <= b && (d.options.items = d.options.itemsCustom[c][1]);
                else b <= d.options.itemsDesktop[0] && d.options.itemsDesktop !== !1 && (d.options.items = d.options.itemsDesktop[1]), b <= d.options.itemsDesktopSmall[0] && d.options.itemsDesktopSmall !== !1 && (d.options.items = d.options.itemsDesktopSmall[1]), b <= d.options.itemsTablet[0] && d.options.itemsTablet !== !1 && (d.options.items = d.options.itemsTablet[1]), b <= d.options.itemsTabletSmall[0] && d.options.itemsTabletSmall !== !1 && (d.options.items = d.options.itemsTabletSmall[1]), b <= d.options.itemsMobile[0] && d.options.itemsMobile !== !1 && (d.options.items = d.options.itemsMobile[1]);
                d.options.items > d.itemsAmount && d.options.itemsScaleUp === !0 && (d.options.items = d.itemsAmount) },
            response: function() { var c, d, e = this; return e.options.responsive === !0 && (d = a(b).width(), e.resizer = function() { a(b).width() !== d && (e.options.autoPlay !== !1 && b.clearInterval(e.autoPlayInterval), b.clearTimeout(c), c = b.setTimeout(function() { d = a(b).width(), e.updateVars() }, e.options.responsiveRefreshRate)) }, void a(b).resize(e.resizer)) },
            updatePosition: function() { var a = this;
                a.jumpTo(a.currentItem), a.options.autoPlay !== !1 && a.checkAp() },
            appendItemsSizes: function() { var b = this,
                    c = 0,
                    d = b.itemsAmount - b.options.items;
                b.$owlItems.each(function(e) { var f = a(this);
                    f.css({ width: b.itemWidth }).data("owl-item", Number(e)), (e % b.options.items === 0 || e === d) && (e > d || (c += 1)), f.data("owl-roundPages", c) }) },
            appendWrapperSizes: function() { var a = this,
                    b = a.$owlItems.length * a.itemWidth;
                a.$owlWrapper.css({ width: 2 * b, left: 0 }), a.appendItemsSizes() },
            calculateAll: function() { var a = this;
                a.calculateWidth(), a.appendWrapperSizes(), a.loops(), a.max() },
            calculateWidth: function() { var a = this;
                a.itemWidth = Math.round(a.$elem.width() / a.options.items) },
            max: function() { var a = this,
                    b = -1 * (a.itemsAmount * a.itemWidth - a.options.items * a.itemWidth); return a.options.items > a.itemsAmount ? (a.maximumItem = 0, b = 0, a.maximumPixels = 0) : (a.maximumItem = a.itemsAmount - a.options.items, a.maximumPixels = b), b },
            min: function() { return 0 },
            loops: function() { var b, c, d, e = this,
                    f = 0,
                    g = 0; for (e.positionsInArray = [0], e.pagesInArray = [], b = 0; b < e.itemsAmount; b += 1) g += e.itemWidth, e.positionsInArray.push(-g), e.options.scrollPerPage === !0 && (c = a(e.$owlItems[b]), d = c.data("owl-roundPages"), d !== f && (e.pagesInArray[f] = e.positionsInArray[b], f = d)) },
            buildControls: function() { var b = this;
                (b.options.navigation === !0 || b.options.pagination === !0) && (b.owlControls = a('<div class="owl-controls"/>').toggleClass("clickable", !b.browser.isTouch).appendTo(b.$elem)), b.options.pagination === !0 && b.buildPagination(), b.options.navigation === !0 && b.buildButtons() },
            buildButtons: function() { var b = this,
                    c = a('<div class="owl-buttons"/>');
                b.owlControls.append(c), b.buttonPrev = a("<div/>", { class: "owl-prev", html: b.options.navigationText[0] || "" }), b.buttonNext = a("<div/>", { class: "owl-next", html: b.options.navigationText[1] || "" }), c.append(b.buttonPrev).append(b.buttonNext), c.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) { a.preventDefault() }), c.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(c) { c.preventDefault(), a(this).hasClass("owl-next") ? b.next() : b.prev() }) },
            buildPagination: function() { var b = this;
                b.paginationWrapper = a('<div class="owl-pagination"/>'), b.owlControls.append(b.paginationWrapper), b.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(c) { c.preventDefault(), Number(a(this).data("owl-page")) !== b.currentItem && b.goTo(Number(a(this).data("owl-page")), !0) }) },
            updatePagination: function() { var b, c, d, e, f, g, h = this; if (h.options.pagination === !1) return !1; for (h.paginationWrapper.html(""), b = 0, c = h.itemsAmount - h.itemsAmount % h.options.items, e = 0; e < h.itemsAmount; e += 1) e % h.options.items === 0 && (b += 1, c === e && (d = h.itemsAmount - h.options.items), f = a("<div/>", { class: "owl-page" }), g = a("<span></span>", { text: h.options.paginationNumbers === !0 ? b : "", class: h.options.paginationNumbers === !0 ? "owl-numbers" : "" }), f.append(g), f.data("owl-page", c === e ? d : e), f.data("owl-roundPages", b), h.paginationWrapper.append(f));
                h.checkPagination() },
            checkPagination: function() { var b = this; return b.options.pagination !== !1 && void b.paginationWrapper.find(".owl-page").each(function() { a(this).data("owl-roundPages") === a(b.$owlItems[b.currentItem]).data("owl-roundPages") && (b.paginationWrapper.find(".owl-page").removeClass("active"), a(this).addClass("active")) }) },
            checkNavigation: function() { var a = this; return a.options.navigation !== !1 && void(a.options.rewindNav === !1 && (0 === a.currentItem && 0 === a.maximumItem ? (a.buttonPrev.addClass("disabled"), a.buttonNext.addClass("disabled")) : 0 === a.currentItem && 0 !== a.maximumItem ? (a.buttonPrev.addClass("disabled"), a.buttonNext.removeClass("disabled")) : a.currentItem === a.maximumItem ? (a.buttonPrev.removeClass("disabled"), a.buttonNext.addClass("disabled")) : 0 !== a.currentItem && a.currentItem !== a.maximumItem && (a.buttonPrev.removeClass("disabled"), a.buttonNext.removeClass("disabled")))) },
            updateControls: function() { var a = this;
                a.updatePagination(), a.checkNavigation(), a.owlControls && (a.options.items >= a.itemsAmount ? a.owlControls.hide() : a.owlControls.show()) },
            destroyControls: function() { var a = this;
                a.owlControls && a.owlControls.remove() },
            next: function(a) { var b = this; if (b.isTransition) return !1; if (b.currentItem += b.options.scrollPerPage === !0 ? b.options.items : 1, b.currentItem > b.maximumItem + (b.options.scrollPerPage === !0 ? b.options.items - 1 : 0)) { if (b.options.rewindNav !== !0) return b.currentItem = b.maximumItem, !1;
                    b.currentItem = 0, a = "rewind" }
                b.goTo(b.currentItem, a) },
            prev: function(a) { var b = this; if (b.isTransition) return !1; if (b.options.scrollPerPage === !0 && b.currentItem > 0 && b.currentItem < b.options.items ? b.currentItem = 0 : b.currentItem -= b.options.scrollPerPage === !0 ? b.options.items : 1, b.currentItem < 0) { if (b.options.rewindNav !== !0) return b.currentItem = 0, !1;
                    b.currentItem = b.maximumItem, a = "rewind" }
                b.goTo(b.currentItem, a) },
            goTo: function(a, c, d) { var e, f = this; return !f.isTransition && ("function" == typeof f.options.beforeMove && f.options.beforeMove.apply(this, [f.$elem]), a >= f.maximumItem ? a = f.maximumItem : 0 >= a && (a = 0), f.currentItem = f.owl.currentItem = a, f.options.transitionStyle !== !1 && "drag" !== d && 1 === f.options.items && f.browser.support3d === !0 ? (f.swapSpeed(0), f.browser.support3d === !0 ? f.transition3d(f.positionsInArray[a]) : f.css2slide(f.positionsInArray[a], 1), f.afterGo(), f.singleItemTransition(), !1) : (e = f.positionsInArray[a], f.browser.support3d === !0 ? (f.isCss3Finish = !1, c === !0 ? (f.swapSpeed("paginationSpeed"), b.setTimeout(function() { f.isCss3Finish = !0 }, f.options.paginationSpeed)) : "rewind" === c ? (f.swapSpeed(f.options.rewindSpeed), b.setTimeout(function() { f.isCss3Finish = !0 }, f.options.rewindSpeed)) : (f.swapSpeed("slideSpeed"), b.setTimeout(function() { f.isCss3Finish = !0 }, f.options.slideSpeed)), f.transition3d(e)) : c === !0 ? f.css2slide(e, f.options.paginationSpeed) : "rewind" === c ? f.css2slide(e, f.options.rewindSpeed) : f.css2slide(e, f.options.slideSpeed), void f.afterGo())) },
            jumpTo: function(a) { var b = this; "function" == typeof b.options.beforeMove && b.options.beforeMove.apply(this, [b.$elem]), a >= b.maximumItem || -1 === a ? a = b.maximumItem : 0 >= a && (a = 0), b.swapSpeed(0), b.browser.support3d === !0 ? b.transition3d(b.positionsInArray[a]) : b.css2slide(b.positionsInArray[a], 1), b.currentItem = b.owl.currentItem = a, b.afterGo() },
            afterGo: function() { var a = this;
                a.prevArr.push(a.currentItem), a.prevItem = a.owl.prevItem = a.prevArr[a.prevArr.length - 2], a.prevArr.shift(0), a.prevItem !== a.currentItem && (a.checkPagination(), a.checkNavigation(), a.eachMoveUpdate(), a.options.autoPlay !== !1 && a.checkAp()), "function" == typeof a.options.afterMove && a.prevItem !== a.currentItem && a.options.afterMove.apply(this, [a.$elem]) },
            stop: function() { var a = this;
                a.apStatus = "stop", b.clearInterval(a.autoPlayInterval) },
            checkAp: function() { var a = this; "stop" !== a.apStatus && a.play() },
            play: function() { var a = this; return a.apStatus = "play", a.options.autoPlay !== !1 && (b.clearInterval(a.autoPlayInterval), void(a.autoPlayInterval = b.setInterval(function() { a.next(!0) }, a.options.autoPlay))) },
            swapSpeed: function(a) { var b = this; "slideSpeed" === a ? b.$owlWrapper.css(b.addCssSpeed(b.options.slideSpeed)) : "paginationSpeed" === a ? b.$owlWrapper.css(b.addCssSpeed(b.options.paginationSpeed)) : "string" != typeof a && b.$owlWrapper.css(b.addCssSpeed(a)) },
            addCssSpeed: function(a) { return { "-webkit-transition": "all " + a + "ms ease", "-moz-transition": "all " + a + "ms ease", "-o-transition": "all " + a + "ms ease", transition: "all " + a + "ms ease" } },
            removeTransition: function() { return { "-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: "" } },
            doTranslate: function(a) { return { "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)", "-moz-transform": "translate3d(" + a + "px, 0px, 0px)", "-o-transform": "translate3d(" + a + "px, 0px, 0px)", "-ms-transform": "translate3d(" + a + "px, 0px, 0px)", transform: "translate3d(" + a + "px, 0px,0px)" } },
            transition3d: function(a) { var b = this;
                b.$owlWrapper.css(b.doTranslate(a)) },
            css2move: function(a) { var b = this;
                b.$owlWrapper.css({ left: a }) },
            css2slide: function(a, b) { var c = this;
                c.isCssFinish = !1, c.$owlWrapper.stop(!0, !0).animate({ left: a }, { duration: b || c.options.slideSpeed, complete: function() { c.isCssFinish = !0 } }) },
            checkBrowser: function() { var a, d, e, f, g = this,
                    h = "translate3d(0px, 0px, 0px)",
                    i = c.createElement("div");
                i.style.cssText = "  -moz-transform:" + h + "; -ms-transform:" + h + "; -o-transform:" + h + "; -webkit-transform:" + h + "; transform:" + h, a = /translate3d\(0px, 0px, 0px\)/g, d = i.style.cssText.match(a), e = null !== d && d.length >= 1, f = "ontouchstart" in b || b.navigator.msMaxTouchPoints, g.browser = { support3d: e, isTouch: f } },
            moveEvents: function() { var a = this;
                (a.options.mouseDrag !== !1 || a.options.touchDrag !== !1) && (a.gestures(), a.disabledEvents()) },
            eventTypes: function() { var a = this,
                    b = ["s", "e", "x"];
                a.ev_types = {}, a.options.mouseDrag === !0 && a.options.touchDrag === !0 ? b = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : a.options.mouseDrag === !1 && a.options.touchDrag === !0 ? b = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : a.options.mouseDrag === !0 && a.options.touchDrag === !1 && (b = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), a.ev_types.start = b[0], a.ev_types.move = b[1], a.ev_types.end = b[2] },
            disabledEvents: function() { var b = this;
                b.$elem.on("dragstart.owl", function(a) { a.preventDefault() }), b.$elem.on("mousedown.disableTextSelect", function(b) { return a(b.target).is("input, textarea, select, option") }) },
            gestures: function() {
                function d(a) { if (void 0 !== a.touches) return { x: a.touches[0].pageX, y: a.touches[0].pageY }; if (void 0 === a.touches) { if (void 0 !== a.pageX) return { x: a.pageX, y: a.pageY }; if (void 0 === a.pageX) return { x: a.clientX, y: a.clientY } } }

                function e(b) { "on" === b ? (a(c).on(i.ev_types.move, g), a(c).on(i.ev_types.end, h)) : "off" === b && (a(c).off(i.ev_types.move), a(c).off(i.ev_types.end)) }

                function f(c) { var f, g = c.originalEvent || c || b.event; if (3 === g.which) return !1; if (!(i.itemsAmount <= i.options.items)) { if (i.isCssFinish === !1 && !i.options.dragBeforeAnimFinish) return !1; if (i.isCss3Finish === !1 && !i.options.dragBeforeAnimFinish) return !1;
                        i.options.autoPlay !== !1 && b.clearInterval(i.autoPlayInterval), i.browser.isTouch === !0 || i.$owlWrapper.hasClass("grabbing") || i.$owlWrapper.addClass("grabbing"), i.newPosX = 0, i.newRelativeX = 0, a(this).css(i.removeTransition()), f = a(this).position(), j.relativePos = f.left, j.offsetX = d(g).x - f.left, j.offsetY = d(g).y - f.top, e("on"), j.sliding = !1, j.targetElement = g.target || g.srcElement } }

                function g(e) { var f, g, h = e.originalEvent || e || b.event;
                    i.newPosX = d(h).x - j.offsetX, i.newPosY = d(h).y - j.offsetY, i.newRelativeX = i.newPosX - j.relativePos, "function" == typeof i.options.startDragging && j.dragging !== !0 && 0 !== i.newRelativeX && (j.dragging = !0, i.options.startDragging.apply(i, [i.$elem])), (i.newRelativeX > 8 || i.newRelativeX < -8) && i.browser.isTouch === !0 && (void 0 !== h.preventDefault ? h.preventDefault() : h.returnValue = !1, j.sliding = !0), (i.newPosY > 10 || i.newPosY < -10) && j.sliding === !1 && a(c).off("touchmove.owl"), f = function() { return i.newRelativeX / 5 }, g = function() { return i.maximumPixels + i.newRelativeX / 5 }, i.newPosX = Math.max(Math.min(i.newPosX, f()), g()), i.browser.support3d === !0 ? i.transition3d(i.newPosX) : i.css2move(i.newPosX) }

                function h(c) { var d, f, g, h = c.originalEvent || c || b.event;
                    h.target = h.target || h.srcElement, j.dragging = !1, i.browser.isTouch !== !0 && i.$owlWrapper.removeClass("grabbing"), i.dragDirection = i.owl.dragDirection = i.newRelativeX < 0 ? "left" : "right", 0 !== i.newRelativeX && (d = i.getNewPosition(), i.goTo(d, !1, "drag"), j.targetElement === h.target && i.browser.isTouch !== !0 && (a(h.target).on("click.disable", function(b) { b.stopImmediatePropagation(), b.stopPropagation(), b.preventDefault(), a(b.target).off("click.disable") }), f = a._data(h.target, "events").click, g = f.pop(), f.splice(0, 0, g))), e("off") } var i = this,
                    j = { offsetX: 0, offsetY: 0, baseElWidth: 0, relativePos: 0, position: null, minSwipe: null, maxSwipe: null, sliding: null, dargging: null, targetElement: null };
                i.isCssFinish = !0, i.$elem.on(i.ev_types.start, ".owl-wrapper", f) },
            getNewPosition: function() { var a = this,
                    b = a.closestItem(); return b > a.maximumItem ? (a.currentItem = a.maximumItem, b = a.maximumItem) : a.newPosX >= 0 && (b = 0, a.currentItem = 0), b },
            closestItem: function() { var b = this,
                    c = b.options.scrollPerPage === !0 ? b.pagesInArray : b.positionsInArray,
                    d = b.newPosX,
                    e = null; return a.each(c, function(f, g) { d - b.itemWidth / 20 > c[f + 1] && d - b.itemWidth / 20 < g && "left" === b.moveDirection() ? (e = g, b.currentItem = b.options.scrollPerPage === !0 ? a.inArray(e, b.positionsInArray) : f) : d + b.itemWidth / 20 < g && d + b.itemWidth / 20 > (c[f + 1] || c[f] - b.itemWidth) && "right" === b.moveDirection() && (b.options.scrollPerPage === !0 ? (e = c[f + 1] || c[c.length - 1], b.currentItem = a.inArray(e, b.positionsInArray)) : (e = c[f + 1], b.currentItem = f + 1)) }), b.currentItem },
            moveDirection: function() { var a, b = this; return b.newRelativeX < 0 ? (a = "right", b.playDirection = "next") : (a = "left", b.playDirection = "prev"), a },
            customEvents: function() { var a = this;
                a.$elem.on("owl.next", function() { a.next() }), a.$elem.on("owl.prev", function() { a.prev() }), a.$elem.on("owl.play", function(b, c) { a.options.autoPlay = c, a.play(), a.hoverStatus = "play" }), a.$elem.on("owl.stop", function() { a.stop(), a.hoverStatus = "stop" }), a.$elem.on("owl.goTo", function(b, c) { a.goTo(c) }), a.$elem.on("owl.jumpTo", function(b, c) { a.jumpTo(c) }) },
            stopOnHover: function() { var a = this;
                a.options.stopOnHover === !0 && a.browser.isTouch !== !0 && a.options.autoPlay !== !1 && (a.$elem.on("mouseover", function() { a.stop() }), a.$elem.on("mouseout", function() { "stop" !== a.hoverStatus && a.play() })) },
            lazyLoad: function() { var b, c, d, e, f, g = this; if (g.options.lazyLoad === !1) return !1; for (b = 0; b < g.itemsAmount; b += 1) c = a(g.$owlItems[b]), "loaded" !== c.data("owl-loaded") && (d = c.data("owl-item"), e = c.find(".lazyOwl"), "string" == typeof e.data("src") ? (void 0 === c.data("owl-loaded") && (e.hide(), c.addClass("loading").data("owl-loaded", "checked")), f = g.options.lazyFollow !== !0 || d >= g.currentItem, f && d < g.currentItem + g.options.items && e.length && e.each(function() { g.lazyPreload(c, a(this)) })) : c.data("owl-loaded", "loaded")) },
            lazyPreload: function(a, c) {
                function d() { a.data("owl-loaded", "loaded").removeClass("loading"), c.removeAttr("data-src"), "fade" === g.options.lazyEffect ? c.fadeIn(400) : c.show(), "function" == typeof g.options.afterLazyLoad && g.options.afterLazyLoad.apply(this, [g.$elem]) }

                function e() { h += 1, g.completeImg(c.get(0)) || f === !0 ? d() : 100 >= h ? b.setTimeout(e, 100) : d() } var f, g = this,
                    h = 0; "DIV" === c.prop("tagName") ? (c.css("background-image", "url(" + c.data("src") + ")"), f = !0) : c[0].src = c.data("src"), e() },
            autoHeight: function() {
                function c() { var c = a(f.$owlItems[f.currentItem]).height();
                    f.wrapperOuter.css("height", c + "px"), f.wrapperOuter.hasClass("autoHeight") || b.setTimeout(function() { f.wrapperOuter.addClass("autoHeight") }, 0) }

                function d() { e += 1, f.completeImg(g.get(0)) ? c() : 100 >= e ? b.setTimeout(d, 100) : f.wrapperOuter.css("height", "") } var e, f = this,
                    g = a(f.$owlItems[f.currentItem]).find("img");
                void 0 !== g.get(0) ? (e = 0, d()) : c() },
            completeImg: function(a) { var b; return !!a.complete && (b = typeof a.naturalWidth, "undefined" === b || 0 !== a.naturalWidth) },
            onVisibleItems: function() { var b, c = this; for (c.options.addClassActive === !0 && c.$owlItems.removeClass("active"), c.visibleItems = [], b = c.currentItem; b < c.currentItem + c.options.items; b += 1) c.visibleItems.push(b), c.options.addClassActive === !0 && a(c.$owlItems[b]).addClass("active");
                c.owl.visibleItems = c.visibleItems },
            transitionTypes: function(a) { var b = this;
                b.outClass = "owl-" + a + "-out", b.inClass = "owl-" + a + "-in" },
            singleItemTransition: function() {
                function a(a) { return { position: "relative", left: a + "px" } }
                var b = this,
                    c = b.outClass,
                    d = b.inClass,
                    e = b.$owlItems.eq(b.currentItem),
                    f = b.$owlItems.eq(b.prevItem),
                    g = Math.abs(b.positionsInArray[b.currentItem]) + b.positionsInArray[b.prevItem],
                    h = Math.abs(b.positionsInArray[b.currentItem]) + b.itemWidth / 2,
                    i = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                b.isTransition = !0, b.$owlWrapper.addClass("owl-origin").css({ "-webkit-transform-origin": h + "px", "-moz-perspective-origin": h + "px", "perspective-origin": h + "px" }), f.css(a(g, 10)).addClass(c).on(i, function() { b.endPrev = !0, f.off(i), b.clearTransStyle(f, c) }), e.addClass(d).on(i, function() { b.endCurrent = !0, e.off(i), b.clearTransStyle(e, d) })
            },
            clearTransStyle: function(a, b) { var c = this;
                a.css({ position: "", left: "" }).removeClass(b), c.endPrev && c.endCurrent && (c.$owlWrapper.removeClass("owl-origin"), c.endPrev = !1, c.endCurrent = !1, c.isTransition = !1) },
            owlStatus: function() { var a = this;
                a.owl = { userOptions: a.userOptions, baseElement: a.$elem, userItems: a.$userItems, owlItems: a.$owlItems, currentItem: a.currentItem, prevItem: a.prevItem, visibleItems: a.visibleItems, isTouch: a.browser.isTouch, browser: a.browser, dragDirection: a.dragDirection } },
            clearEvents: function() { var d = this;
                d.$elem.off(".owl owl mousedown.disableTextSelect"), a(c).off(".owl owl"), a(b).off("resize", d.resizer) },
            unWrap: function() { var a = this;
                0 !== a.$elem.children().length && (a.$owlWrapper.unwrap(), a.$userItems.unwrap().unwrap(), a.owlControls && a.owlControls.remove()), a.clearEvents(), a.$elem.attr({ style: a.$elem.data("owl-originalStyles") || "", class: a.$elem.data("owl-originalClasses") }) },
            destroy: function() { var a = this;
                a.stop(), b.clearInterval(a.checkVisible), a.unWrap(), a.$elem.removeData() },
            reinit: function(b) { var c = this,
                    d = a.extend({}, c.userOptions, b);
                c.unWrap(), c.init(d, c.$elem) },
            addItem: function(a, b) { var c, d = this; return !!a && (0 === d.$elem.children().length ? (d.$elem.append(a), d.setVars(), !1) : (d.unWrap(), c = void 0 === b || -1 === b ? -1 : b, c >= d.$userItems.length || -1 === c ? d.$userItems.eq(-1).after(a) : d.$userItems.eq(c).before(a), void d.setVars())) },
            removeItem: function(a) { var b, c = this; return 0 !== c.$elem.children().length && (b = void 0 === a || -1 === a ? -1 : a, c.unWrap(), c.$userItems.eq(b).remove(), void c.setVars()) }
        };
        a.fn.owlCarousel = function(b) { return this.each(function() { if (a(this).data("owl-init") === !0) return !1;
                a(this).data("owl-init", !0); var c = Object.create(d);
                c.init(b, this), a.data(this, "owlCarousel", c) }) }, a.fn.owlCarousel.options = { items: 5, itemsCustom: !1, itemsDesktop: [1199, 4], itemsDesktopSmall: [979, 3], itemsTablet: [768, 2], itemsTabletSmall: !1, itemsMobile: [479, 1], singleItem: !1, itemsScaleUp: !1, slideSpeed: 200, paginationSpeed: 800, rewindSpeed: 1e3, autoPlay: !1, stopOnHover: !1, navigation: !1, navigationText: ["prev", "next"], rewindNav: !0, scrollPerPage: !1, pagination: !0, paginationNumbers: !1, responsive: !0, responsiveRefreshRate: 200, responsiveBaseWidth: b, baseClass: "owl-carousel", theme: "owl-theme", lazyLoad: !1, lazyFollow: !0, lazyEffect: "fade", autoHeight: !1, jsonPath: !1, jsonSuccess: !1, dragBeforeAnimFinish: !0, mouseDrag: !0, touchDrag: !0, addClassActive: !1, transitionStyle: !1, beforeUpdate: !1, afterUpdate: !1, beforeInit: !1, afterInit: !1, beforeMove: !1, afterMove: !1, afterAction: !1, startDragging: !1, afterLazyLoad: !1 }
    }(jQuery, window, document), ! function(a, b, c, d) {
        function e(b, c) { this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init() } var f = "stellar",
            g = { scrollProperty: "scroll", positionProperty: "position", horizontalScrolling: !0, verticalScrolling: !0, horizontalOffset: 0, verticalOffset: 0, responsive: !1, parallaxBackgrounds: !0, parallaxElements: !0, hideDistantElements: !0, hideElement: function(a) { a.hide() }, showElement: function(a) { a.show() } },
            h = { scroll: { getLeft: function(a) { return a.scrollLeft() }, setLeft: function(a, b) { a.scrollLeft(b) }, getTop: function(a) { return a.scrollTop() }, setTop: function(a, b) { a.scrollTop(b) } }, position: { getLeft: function(a) { return -1 * parseInt(a.css("left"), 10) }, getTop: function(a) { return -1 * parseInt(a.css("top"), 10) } }, margin: { getLeft: function(a) { return -1 * parseInt(a.css("margin-left"), 10) }, getTop: function(a) { return -1 * parseInt(a.css("margin-top"), 10) } }, transform: { getLeft: function(a) { var b = getComputedStyle(a[0])[k]; return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0 }, getTop: function(a) { var b = getComputedStyle(a[0])[k]; return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0 } } },
            i = { position: { setLeft: function(a, b) { a.css("left", b) }, setTop: function(a, b) { a.css("top", b) } }, transform: { setPosition: function(a, b, c, d, e) { a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)" } } },
            j = function() { var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                    d = a("script")[0].style,
                    e = ""; for (b in d)
                    if (c.test(b)) { e = b.match(c)[0]; break }
                return "WebkitOpacity" in d && (e = "Webkit"), "KhtmlOpacity" in d && (e = "Khtml"),
                    function(a) { return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a) } }(),
            k = j("transform"),
            l = a("<div />", { style: "background:#fff" }).css("background-position-x") !== d,
            m = l ? function(a, b, c) { a.css({ "background-position-x": b, "background-position-y": c }) } : function(a, b, c) { a.css("background-position", b + " " + c) },
            n = l ? function(a) { return [a.css("background-position-x"), a.css("background-position-y")] } : function(a) { return a.css("background-position").split(" ") },
            o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function(a) { setTimeout(a, 1e3 / 60) };
        e.prototype = { init: function() { this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({ firstLoad: !0 }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop() }, _defineElements: function() { this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent() }, _defineGetters: function() { var a = this,
                    b = h[a.options.scrollProperty];
                this._getScrollLeft = function() { return b.getLeft(a.$scrollElement) }, this._getScrollTop = function() { return b.getTop(a.$scrollElement) } }, _defineSetters: function() { var b = this,
                    c = h[b.options.scrollProperty],
                    d = i[b.options.positionProperty],
                    e = c.setLeft,
                    f = c.setTop;
                this._setScrollLeft = "function" == typeof e ? function(a) { e(b.$scrollElement, a) } : a.noop, this._setScrollTop = "function" == typeof f ? function(a) { f(b.$scrollElement, a) } : a.noop, this._setPosition = d.setPosition || function(a, c, e, f, g) { b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g) } }, _handleWindowLoadAndResize: function() { var c = this,
                    d = a(b);
                c.options.responsive && d.bind("load." + this.name, function() { c.refresh() }), d.bind("resize." + this.name, function() { c._detectViewport(), c.options.responsive && c.refresh() }) }, refresh: function(c) { var d = this,
                    e = d._getScrollLeft(),
                    f = d._getScrollTop();
                c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function() { var a = d._getScrollLeft(),
                        b = d._getScrollTop();
                    d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b) }), this._setScrollLeft(e), this._setScrollTop(f) }, _detectViewport: function() { var a = this.$viewportElement.offset(),
                    b = null !== a && a !== d;
                this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0 }, _findParticles: function() { var b = this; if (this._getScrollLeft(), this._getScrollTop(), this.particles !== d)
                    for (var c = this.particles.length - 1; c >= 0; c--) this.particles[c].$element.data("stellar-elementIsActive", d);
                this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() { var c, e, f, g, h, i, j, k, l, m = a(this),
                        n = 0,
                        o = 0,
                        p = 0,
                        q = 0; if (m.data("stellar-elementIsActive")) { if (m.data("stellar-elementIsActive") !== this) return } else m.data("stellar-elementIsActive", this);
                    b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function() { var b = a(this); return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void(q += b.position().top)) }), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({ $element: m, $offsetParent: j, isFixed: "fixed" === m.css("position"), horizontalOffset: c, verticalOffset: e, startingPositionLeft: f, startingPositionTop: g, startingOffsetLeft: k, startingOffsetTop: l, parentOffsetLeft: n, parentOffsetTop: o, stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1, width: m.outerWidth(!0), height: m.outerHeight(!0), isHidden: !1 }) }) }, _findBackgrounds: function() { var b, c = this,
                    e = this._getScrollLeft(),
                    f = this._getScrollTop();
                this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function() { var b, g, h, i, j, k, l, o = a(this),
                        p = n(o),
                        q = 0,
                        r = 0,
                        s = 0,
                        t = 0; if (o.data("stellar-backgroundIsActive")) { if (o.data("stellar-backgroundIsActive") !== this) return } else o.data("stellar-backgroundIsActive", this);
                    o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function() { var b = a(this); return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top)) }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({ $element: o, $offsetParent: l, isFixed: "fixed" === o.css("background-attachment"), horizontalOffset: b, verticalOffset: g, startingValueLeft: p[0], startingValueTop: p[1], startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10), startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10), startingPositionLeft: o.position().left, startingPositionTop: o.position().top, startingOffsetLeft: j, startingOffsetTop: k, parentOffsetLeft: q, parentOffsetTop: r, stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio") }) })) }, _reset: function() { var a, b, c, d, e; for (e = this.particles.length - 1; e >= 0; e--) a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null); for (e = this.backgrounds.length - 1; e >= 0; e--) d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop) }, destroy: function() { this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name) }, _setOffsets: function() { var c = this,
                    d = a(b);
                d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function() { c.horizontalOffset = c.options.horizontalOffset() })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function() { c.verticalOffset = c.options.verticalOffset() })) : this.verticalOffset = this.options.verticalOffset }, _repositionElements: function() { var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(),
                    l = this._getScrollTop(),
                    n = !0,
                    o = !0; if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) { for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--) a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0); for (j = this.backgrounds.length - 1; j >= 0; j--) c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e) } }, _handleScrollEvent: function() { var a = this,
                    b = !1,
                    c = function() { a._repositionElements(), b = !1 },
                    d = function() { b || (o(c), b = !0) };
                this.$scrollElement.bind("scroll." + this.name, d), d() }, _startAnimationLoop: function() { var a = this;
                this._animationLoop = function() { o(a._animationLoop), a._repositionElements() }, this._animationLoop() } }, a.fn[f] = function(b) { var c = arguments; return b === d || "object" == typeof b ? this.each(function() { a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b)) }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function() { var d = a.data(this, "plugin_" + f);
                d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null) }) : void 0 }, a[f] = function() { var c = a(b); return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0)) }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e }(jQuery, this, document), function() {
        function a(a, b) { return [].slice.call((b || document).querySelectorAll(a)) } if (window.addEventListener) { var b = window.StyleFix = { link: function(a) { try { if ("stylesheet" !== a.rel || a.hasAttribute("data-noprefix")) return } catch (a) { return } var j, c = a.href || a.getAttribute("data-href"),
                        d = c.replace(/[^\/]+$/, ""),
                        e = (/^[a-z]{3,10}:/.exec(d) || [""])[0],
                        f = (/^[a-z]{3,10}:\/\/[^\/]+/.exec(d) || [""])[0],
                        g = /^([^?]*)\??/.exec(c)[1],
                        h = a.parentNode,
                        i = new XMLHttpRequest;
                    i.onreadystatechange = function() { 4 === i.readyState && j() }, j = function() { var c = i.responseText; if (c && a.parentNode && (!i.status || i.status < 400 || i.status > 600)) { if (c = b.fix(c, !0, a), d) { c = c.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi, function(a, b, c) { return /^([a-z]{3,10}:|#)/i.test(c) ? a : /^\/\//.test(c) ? 'url("' + e + c + '")' : /^\//.test(c) ? 'url("' + f + c + '")' : /^\?/.test(c) ? 'url("' + g + c + '")' : 'url("' + d + c + '")' }); var j = d.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g, "\\$1");
                                c = c.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)" + j, "gi"), "$1") } var k = document.createElement("style");
                            k.textContent = c, k.media = a.media, k.disabled = a.disabled, k.setAttribute("data-href", a.getAttribute("href")), h.insertBefore(k, a), h.removeChild(a), k.media = a.media } }; try { i.open("GET", c), i.send(null) } catch (a) { "undefined" != typeof XDomainRequest && (i = new XDomainRequest, i.onerror = i.onprogress = function() {}, i.onload = j, i.open("GET", c), i.send(null)) }
                    a.setAttribute("data-inprogress", "") }, styleElement: function(a) { if (!a.hasAttribute("data-noprefix")) { var c = a.disabled;
                        a.textContent = b.fix(a.textContent, !0, a), a.disabled = c } }, styleAttribute: function(a) { var c = a.getAttribute("style");
                    c = b.fix(c, !1, a), a.setAttribute("style", c) }, process: function() { a('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link), a("style").forEach(StyleFix.styleElement), a("[style]").forEach(StyleFix.styleAttribute) }, register: function(a, c) {
                    (b.fixers = b.fixers || []).splice(void 0 === c ? b.fixers.length : c, 0, a) }, fix: function(a, c, d) { for (var e = 0; e < b.fixers.length; e++) a = b.fixers[e](a, c, d) || a; return a }, camelCase: function(a) { return a.replace(/-([a-z])/g, function(a, b) { return b.toUpperCase() }).replace("-", "") }, deCamelCase: function(a) { return a.replace(/[A-Z]/g, function(a) { return "-" + a.toLowerCase() }) } };! function() { setTimeout(function() { a('link[rel="stylesheet"]').forEach(StyleFix.link) }, 10), document.addEventListener("DOMContentLoaded", StyleFix.process, !1) }() } }(), function(a) {
        function b(a, b, d, e, f) { if (a = c[a], a.length) { var g = RegExp(b + "(" + a.join("|") + ")" + d, "gi");
                f = f.replace(g, e) } return f } if (window.StyleFix && window.getComputedStyle) { var c = window.PrefixFree = { prefixCSS: function(a, d, e) { var f = c.prefix; if (c.functions.indexOf("linear-gradient") > -1 && (a = a.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/gi, function(a, b, c, d) { return b + (c || "") + "linear-gradient(" + (90 - d) + "deg" })), a = b("functions", "(\\s|:|,)", "\\s*\\(", "$1" + f + "$2(", a), a = b("keywords", "(\\s|:)", "(\\s|;|\\}|$)", "$1" + f + "$2$3", a), a = b("properties", "(^|\\{|\\s|;)", "\\s*:", "$1" + f + "$2:", a), c.properties.length) { var g = RegExp("\\b(" + c.properties.join("|") + ")(?!:)", "gi");
                        a = b("valueProperties", "\\b", ":(.+?);", function(a) { return a.replace(g, f + "$1") }, a) } return d && (a = b("selectors", "", "\\b", c.prefixSelector, a), a = b("atrules", "@", "\\b", "@" + f + "$1", a)), a = a.replace(RegExp("-" + f, "g"), "-"), a = a.replace(/-\*-(?=[a-z]+)/gi, c.prefix) }, property: function(a) { return (c.properties.indexOf(a) >= 0 ? c.prefix : "") + a }, value: function(a, d) { return a = b("functions", "(^|\\s|,)", "\\s*\\(", "$1" + c.prefix + "$2(", a), a = b("keywords", "(^|\\s)", "(\\s|$)", "$1" + c.prefix + "$2$3", a), c.valueProperties.indexOf(d) >= 0 && (a = b("properties", "(^|\\s|,)", "($|\\s|,)", "$1" + c.prefix + "$2$3", a)), a }, prefixSelector: function(a) { return a.replace(/^:{1,2}/, function(a) { return a + c.prefix }) }, prefixProperty: function(a, b) { var d = c.prefix + a; return b ? StyleFix.camelCase(d) : d } };! function() { var a = {},
                    b = [],
                    e = getComputedStyle(document.documentElement, null),
                    f = document.createElement("div").style,
                    g = function(c) { if ("-" === c.charAt(0)) { b.push(c); var d = c.split("-"),
                                e = d[1]; for (a[e] = ++a[e] || 1; d.length > 3;) { d.pop(); var f = d.join("-");
                                h(f) && b.indexOf(f) === -1 && b.push(f) } } },
                    h = function(a) { return StyleFix.camelCase(a) in f }; if (e.length > 0)
                    for (var i = 0; i < e.length; i++) g(e[i]);
                else
                    for (var j in e) g(StyleFix.deCamelCase(j)); var k = { uses: 0 }; for (var l in a) { var m = a[l];
                    k.uses < m && (k = { prefix: l, uses: m }) }
                c.prefix = "-" + k.prefix + "-", c.Prefix = StyleFix.camelCase(c.prefix), c.properties = []; for (var i = 0; i < b.length; i++) { var j = b[i]; if (0 === j.indexOf(c.prefix)) { var n = j.slice(c.prefix.length);
                        h(n) || c.properties.push(n) } } "Ms" == c.Prefix && !("transform" in f) && !("MsTransform" in f) && "msTransform" in f && c.properties.push("transform", "transform-origin"), c.properties.sort() }(),
            function() {
                function a(a, b) { return e[b] = "", e[b] = a, !!e[b] } var b = { "linear-gradient": { property: "backgroundImage", params: "red, teal" }, calc: { property: "width", params: "1px + 5%" }, element: { property: "backgroundImage", params: "#foo" }, "cross-fade": { property: "backgroundImage", params: "url(a.png), url(b.png), 50%" } };
                b["repeating-linear-gradient"] = b["repeating-radial-gradient"] = b["radial-gradient"] = b["linear-gradient"]; var d = { initial: "color", "zoom-in": "cursor", "zoom-out": "cursor", box: "display", flexbox: "display", "inline-flexbox": "display", flex: "display", "inline-flex": "display", grid: "display", "inline-grid": "display", "min-content": "width" };
                c.functions = [], c.keywords = []; var e = document.createElement("div").style; for (var f in b) { var g = b[f],
                        h = g.property,
                        i = f + "(" + g.params + ")";!a(i, h) && a(c.prefix + i, h) && c.functions.push(f) } for (var j in d) { var h = d[j];!a(j, h) && a(c.prefix + j, h) && c.keywords.push(j) } }(),
            function() {
                function b(a) { return f.textContent = a + "{}", !!f.sheet.cssRules.length } var d = { ":read-only": null, ":read-write": null, ":any-link": null, "::selection": null },
                    e = { keyframes: "name", viewport: null, document: 'regexp(".")' };
                c.selectors = [], c.atrules = []; var f = a.appendChild(document.createElement("style")); for (var g in d) { var h = g + (d[g] ? "(" + d[g] + ")" : "");!b(h) && b(c.prefixSelector(h)) && c.selectors.push(g) } for (var i in e) { var h = i + " " + (e[i] || "");!b("@" + h) && b("@" + c.prefix + h) && c.atrules.push(i) }
                a.removeChild(f) }(), c.valueProperties = ["transition", "transition-property"], a.className += " " + c.prefix, StyleFix.register(c.prefixCSS) } }(document.documentElement), ! function(a) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function(a) {
        var b, c, d, e, f, g, h = "Close",
            i = "BeforeClose",
            j = "AfterClose",
            k = "BeforeAppend",
            l = "MarkupParse",
            m = "Open",
            n = "Change",
            o = "mfp",
            p = "." + o,
            q = "mfp-ready",
            r = "mfp-removing",
            s = "mfp-prevent-close",
            t = function() {},
            u = !!window.jQuery,
            v = a(window),
            w = function(a, c) { b.ev.on(o + a + p, c) },
            x = function(b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f },
            y = function(c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) },
            z = function(c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn },
            A = function() { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) },
            B = function() { var a = document.createElement("p").style,
                    b = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== a.transition) return !0; for (; b.length;)
                    if (b.pop() + "Transition" in a) return !0;
                return !1 };
        t.prototype = { constructor: t, init: function() { var c = navigator.appVersion;
                b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} }, open: function(c) { var e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++)
                        if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML();
                b.types = [], f = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { var j = i[e];
                    j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b) }
                y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? { overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY } : { top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function() { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f); var k = b.wH = v.height(),
                    n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { var o = b._getScrollbarSize();
                    o && (n.marginRight = o) }
                b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden"); var r = b.st.mainClass; return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c }, close: function() { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function() { y(h); var c = r + " " + q + " "; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) { var e = { marginRight: "" };
                    b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) }
                d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) }, updateSize: function(a) { if (b.isIOS) { var c = document.documentElement.clientWidth / window.innerWidth,
                        d = window.innerHeight * c;
                    b.wrap.css("height", d), b.wH = d } else b.wH = a || v.height();
                b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize") }, updateItemHTML: function() { var c = b.items[b.index];
                b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) { var f = !!b.st[d] && b.st[d].markup;
                    y("FirstMarkupParse", f), b.currTemplate[d] = !f || a(f) }
                e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder"); var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
                b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange") }, appendContent: function(a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function(c) { var d, e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (var f = b.types, g = 0; g < f.length; g++)
                        if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break }
                    e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) } return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c] }, addGroup: function(a, c) { var d = function(d) { d.mfpEl = this, b._openClick(d, a, c) };
                c || (c = {}); var e = "click.magnificPopup";
                c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function(c, d, e) { var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) { var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g)
                        if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0;
                    c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function(a, d) { if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading); var e = { status: a, text: d };
                    y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function(c) { if (!a(c).hasClass(s)) { var d = b.st.closeOnContentClick,
                        e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0; return !1 } }, _addClassToMFP: function(a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function(a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function(a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) }, _setFocus: function() {
                (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function(c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function(b, c, d) { var e;
                d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(a, c) { if (void 0 === c || c === !1) return !0; if (e = a.split("_"), e.length > 1) { var d = b.find(p + "-" + e[0]); if (d.length > 0) { var f = e[1]; "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c) } } else b.find(p + "-" + a).html(c) }) }, _getScrollbarSize: function() { if (void 0 === b.scrollbarSize) { var a = document.createElement("div");
                    a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function(b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function() { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function(b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, a.fn.magnificPopup = function(c) { A(); var d = a(this); if ("string" == typeof c)
                if ("open" === c) { var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c); return d };
        var C, D, E, F = "inline",
            G = function() { E && (D.after(E.addClass(C)).detach(), E = null) };
        a.magnificPopup.registerModule(F, {
            options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
            proto: {
                initInline: function() {
                    b.types.push(F), w(h + "." + F, function() { G() })
                },
                getInline: function(c, d) { if (G(), c.src) { var e = b.st.inline,
                            f = a(c.src); if (f.length) { var g = f[0].parentNode;
                            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>"); return c.inlineElement = f, f } return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d }
            }
        });
        var H, I = "ajax",
            J = function() { H && a(document.body).removeClass(H) },
            K = function() { J(), b.req && b.req.abort() };
        a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function() { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) }, getAjax: function(c) { H && a(document.body).addClass(H), b.updateStatus("loading"); var d = a.extend({ url: c.src, success: function(d, e, f) { var g = { data: d, xhr: f };
                            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded") }, error: function() { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings); return b.req = a.ajax(d), "" } } });
        var L, M = function(c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" };
        a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function() { var c = b.st.image,
                        d = ".image";
                    b.types.push("image"), w(m + d, function() { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function() { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage) }, resizeImage: function() { var a = b.currItem; if (a && a.img && b.st.image.verticalFit) { var c = 0;
                        b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function(a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function(a) { var c = 0,
                        d = a.img[0],
                        e = function(f) { L && clearInterval(L), L = setInterval(function() { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) };
                    e(1) }, getImage: function(c, d) { var e = 0,
                        f = function() { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) },
                        g = function() { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) },
                        h = b.st.image,
                        i = d.find(".mfp-img"); if (i.length) { var j = document.createElement("img");
                        j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) } return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } } });
        var N, O = function() { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N };
        a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function() { var a, c = b.st.zoom,
                        d = ".zoom"; if (c.enabled && b.supportsTransition) { var e, f, g = c.duration,
                            j = function(a) { var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    d = "all " + c.duration / 1e3 + "s " + c.easing,
                                    e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                    f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b },
                            k = function() { b.content.css("visibility", "visible") };
                        w("BuildControls" + d, function() { if (b._allowZoom()) { if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                                f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() { f.css(b._getOffset(!0)), e = setTimeout(function() { k(), setTimeout(function() { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), w(i + d, function() { if (b._allowZoom()) { if (clearTimeout(e), b.st.removalDelay = g, !a) { if (a = b._getItemToZoom(), !a) return;
                                    f = j(a) }
                                f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() { f.css(b._getOffset()) }, 16) } }), w(h + d, function() { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function() { return "image" === b.currItem.type }, _getItemToZoom: function() { return !!b.currItem.hasSize && b.currItem.img }, _getOffset: function(c) { var d;
                    d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(),
                        f = parseInt(d.css("padding-top"), 10),
                        g = parseInt(d.css("padding-bottom"), 10);
                    e.top -= a(window).scrollTop() - f; var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }; return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } });
        var P = "iframe",
            Q = "//about:blank",
            R = function(a) { if (b.currTemplate[P]) { var c = b.currTemplate[P].find("iframe");
                    c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none")) } };
        a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function() { b.types.push(P), w("BeforeChange", function(a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function() { R() }) }, getIframe: function(c, d) { var e = c.src,
                        f = b.st.iframe;
                    a.each(f.patterns, function() { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 }); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } });
        var S = function(a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a },
            T = function(a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) };
        a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function() { var c = b.st.gallery,
                        e = ".mfp-gallery",
                        g = Boolean(a.fn.mfpFastClick); return b.direction = !0, !(!c || !c.enabled) && (f += " mfp-gallery", w(m + e, function() { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function(a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function(a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function(a, d, e, f) { var g = b.items.length;
                        e.counter = g > 1 ? T(c.tCounter, f.index, g) : "" }), w("BuildControls" + e, function() { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { var d = c.arrowMarkup,
                                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s),
                                h = g ? "mfpFastClick" : "click";
                            e[h](function() { b.prev() }), f[h](function() { b.next() }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f)) } }), w(n + e, function() { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function() { d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null })) }, next: function() { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() }, prev: function() { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() }, goTo: function(a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function() { var a, c = b.st.gallery.preload,
                        d = Math.min(c[0], b.items.length),
                        e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a) }, _preloadItem: function(c) { if (c = S(c), !b.items[c].preloaded) { var d = b.items[c];
                        d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() { d.hasSize = !0 }).on("error.mfploader", function() { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } });
        var U = "retina";
        a.magnificPopup.registerModule(U, { options: { replaceSrc: function(a) { return a.src.replace(/\.\w+$/, function(a) { return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function() { if (window.devicePixelRatio > 1) { var a = b.st.retina,
                                c = a.ratio;
                            c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function(b, d) { d.src = a.replaceSrc(d, c) })) } } } }),
            function() { var b = 1e3,
                    c = "ontouchstart" in window,
                    d = function() { v.off("touchmove" + f + " touchend" + f) },
                    e = "mfpFastClick",
                    f = "." + e;
                a.fn.mfpFastClick = function(e) { return a(this).each(function() { var g, h = a(this); if (c) { var i, j, k, l, m, n;
                            h.on("touchstart" + f, function(a) { l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function(a) { m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d()) }).on("touchend" + f, function(a) { d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() { g = !1 }, b), e()) }) }) }
                        h.on("click" + f, function() { g || e() }) }) }, a.fn.destroyMfpFastClick = function() { a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f) } }(), A()
    }), ! function(a) {
        function b() {}

        function c(a) {
            function c(b) { b.prototype.option || (b.prototype.option = function(b) { a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b)) }) }

            function e(b, c) { a.fn[b] = function(e) { if ("string" == typeof e) { for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) { var j = this[h],
                                k = a.data(j, b); if (k)
                                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) { var l = k[e].apply(k, g); if (void 0 !== l) return l } else f("no such method '" + e + "' for " + b + " instance");
                            else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'") } return this } return this.each(function() { var d = a.data(this, b);
                        d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d)) }) } } if (a) { var f = "undefined" == typeof console ? b : function(a) { console.error(a) }; return a.bridget = function(a, b) { c(b), e(a, b) }, a.bridget } } var d = Array.prototype.slice; "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery) }(window), function(a) {
        function b(b) { var c = a.event; return c.target = c.target || c.srcElement || b, c } var c = document.documentElement,
            d = function() {};
        c.addEventListener ? d = function(a, b, c) { a.addEventListener(b, c, !1) } : c.attachEvent && (d = function(a, c, d) { a[c + d] = d.handleEvent ? function() { var c = b(a);
                d.handleEvent.call(d, c) } : function() { var c = b(a);
                d.call(a, c) }, a.attachEvent("on" + c, a[c + d]) }); var e = function() {};
        c.removeEventListener ? e = function(a, b, c) { a.removeEventListener(b, c, !1) } : c.detachEvent && (e = function(a, b, c) { a.detachEvent("on" + b, a[b + c]); try { delete a[b + c] } catch (d) { a[b + c] = void 0 } }); var f = { bind: d, unbind: e }; "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f }(window), function() { "use strict";

        function a() {}

        function b(a, b) { for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1 }

        function c(a) { return function() { return this[a].apply(this, arguments) } } var d = a.prototype,
            e = this,
            f = e.EventEmitter;
        d.getListeners = function(a) { var b, c, d = this._getEvents(); if (a instanceof RegExp) { b = {}; for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]) } else b = d[a] || (d[a] = []); return b }, d.flattenListeners = function(a) { var b, c = []; for (b = 0; b < a.length; b += 1) c.push(a[b].listener); return c }, d.getListenersAsObject = function(a) { var b, c = this.getListeners(a); return c instanceof Array && (b = {}, b[a] = c), b || c }, d.addListener = function(a, c) { var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c; for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : { listener: c, once: !1 }); return this }, d.on = c("addListener"), d.addOnceListener = function(a, b) { return this.addListener(a, { listener: b, once: !0 }) }, d.once = c("addOnceListener"), d.defineEvent = function(a) { return this.getListeners(a), this }, d.defineEvents = function(a) { for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]); return this }, d.removeListener = function(a, c) { var d, e, f = this.getListenersAsObject(a); for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1)); return this }, d.off = c("removeListener"), d.addListeners = function(a, b) { return this.manipulateListeners(!1, a, b) }, d.removeListeners = function(a, b) { return this.manipulateListeners(!0, a, b) }, d.manipulateListeners = function(a, b, c) { var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners; if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e)); return this }, d.removeEvent = function(a) { var b, c = typeof a,
                d = this._getEvents(); if ("string" === c) delete d[a];
            else if (a instanceof RegExp)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events; return this }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) { var c, d, e, f, g = this.getListenersAsObject(a); for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this }, d.trigger = c("emitEvent"), d.emit = function(a) { var b = Array.prototype.slice.call(arguments, 1); return this.emitEvent(a, b) }, d.setOnceReturnValue = function(a) { return this._onceReturnValue = a, this }, d._getOnceReturnValue = function() { return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue }, d._getEvents = function() { return this._events || (this._events = {}) }, a.noConflict = function() { return e.EventEmitter = f, a }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() { return a }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a }.call(this), function(a) {
        function b(a) { if (a) { if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1); for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b } } var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style; "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() { return b }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b }(window), function(a, b) {
        function c(a) { var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b); return c && b }

        function d() {}

        function e() { for (var a = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, b = 0, c = h.length; c > b; b++) { var d = h[b];
                a[d] = 0 } return a }

        function f(b) {
            function d() { if (!m) { m = !0; var d = a.getComputedStyle; if (j = function() { var a = d ? function(a) { return d(a, null) } : function(a) { return a.currentStyle }; return function(b) { var c = a(b); return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c } }(), k = b("boxSizing")) { var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box"; var f = document.body || document.documentElement;
                        f.appendChild(e); var h = j(e);
                        l = 200 === c(h.width), f.removeChild(e) } } }

            function f(a) { if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) { var b = j(a); if ("none" === b.display) return e(); var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight; for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) { var o = h[m],
                            p = b[o];
                        p = i(a, p); var q = parseFloat(p);
                        f[o] = isNaN(q) ? 0 : q } var r = f.paddingLeft + f.paddingRight,
                        s = f.paddingTop + f.paddingBottom,
                        t = f.marginLeft + f.marginRight,
                        u = f.marginTop + f.marginBottom,
                        v = f.borderLeftWidth + f.borderRightWidth,
                        w = f.borderTopWidth + f.borderBottomWidth,
                        x = g && l,
                        y = c(b.width);
                    y !== !1 && (f.width = y + (x ? 0 : r + v)); var z = c(b.height); return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f } }

            function i(b, c) { if (a.getComputedStyle || -1 === c.indexOf("%")) return c; var d = b.style,
                    e = d.left,
                    f = b.runtimeStyle,
                    g = f && f.left; return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c } var j, k, l, m = !1; return f } var g = "undefined" == typeof console ? d : function(a) { console.error(a) },
            h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"]; "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty) }(window), function(a) {
        function b(a) { "function" == typeof a && (b.isReady ? a() : g.push(a)) }

        function c(a) { var c = "readystatechange" === a.type && "complete" !== f.readyState;
            b.isReady || c || d() }

        function d() { b.isReady = !0; for (var a = 0, c = g.length; c > a; a++) { var d = g[a];
                d() } }

        function e(e) { return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b } var f = a.document,
            g = [];
        b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie) }(window), function(a) { "use strict";

        function b(a, b) { return a[g](b) }

        function c(a) { if (!a.parentNode) { var b = document.createDocumentFragment();
                b.appendChild(a) } }

        function d(a, b) { c(a); for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                if (d[e] === a) return !0;
            return !1 }

        function e(a, d) { return c(a), b(a, d) } var f, g = function() { if (a.matches) return "matches"; if (a.matchesSelector) return "matchesSelector"; for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) { var e = b[c],
                    f = e + "MatchesSelector"; if (a[f]) return f } }(); if (g) { var h = document.createElement("div"),
                i = b(h, "div");
            f = i ? b : e } else f = d; "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() { return f }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f }(Element.prototype), function(a, b) { "use strict"; "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) { return b(a, c, d) }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector) }(window, function(a, b, c) { var d = {};
        d.extend = function(a, b) { for (var c in b) a[c] = b[c]; return a }, d.modulo = function(a, b) { return (a % b + b) % b }; var e = Object.prototype.toString;
        d.isArray = function(a) { return "[object Array]" == e.call(a) }, d.makeArray = function(a) { var b = []; if (d.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
            else b.push(a); return b }, d.indexOf = Array.prototype.indexOf ? function(a, b) { return a.indexOf(b) } : function(a, b) { for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1 }, d.removeFrom = function(a, b) { var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1) }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) { return a instanceof HTMLElement } : function(a) { return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName }, d.setText = function() {
            function a(a, c) { b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c } var b; return a }(), d.getParent = function(a, b) { for (; a != document.body;)
                if (a = a.parentNode, c(a, b)) return a }, d.getQueryElement = function(a) { return "string" == typeof a ? document.querySelector(a) : a }, d.handleEvent = function(a) { var b = "on" + a.type;
            this[b] && this[b](a) }, d.filterFindElements = function(a, b) { a = d.makeArray(a); for (var e = [], f = 0, g = a.length; g > f; f++) { var h = a[f]; if (d.isElement(h))
                    if (b) { c(h, b) && e.push(h); for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j]) } else e.push(h) } return e }, d.debounceMethod = function(a, b, c) { var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function() { var a = this[e];
                a && clearTimeout(a); var b = arguments,
                    f = this;
                this[e] = setTimeout(function() { d.apply(f, b), delete f[e] }, c || 100) } }, d.toDashed = function(a) { return a.replace(/(.)([A-Z])/g, function(a, b, c) { return b + "-" + c }).toLowerCase() }; var f = a.console; return d.htmlInit = function(c, e) { b(function() { for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) { var k, l = g[i],
                        m = l.getAttribute(h); try { k = m && JSON.parse(m) } catch (a) { f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + a); continue } var n = new c(l, k),
                        o = a.jQuery;
                    o && o.data(l, e, n) } }) }, d }), function(a, b) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) { return b(a, c, d, e, f) }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils)) }(window, function(a, b, c, d, e) { "use strict";

        function f(a) { for (var b in a) return !1; return b = null, !0 }

        function g(a, b) { a && (this.element = a, this.layout = b, this.position = { x: 0, y: 0 }, this._create()) }

        function h(a) { return a.replace(/([A-Z])/g, function(a) { return "-" + a.toLowerCase() }) } var i = a.getComputedStyle,
            j = i ? function(a) { return i(a, null) } : function(a) { return a.currentStyle },
            k = d("transition"),
            l = d("transform"),
            m = k && l,
            n = !!d("perspective"),
            o = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[k],
            p = ["transform", "transition", "transitionDuration", "transitionProperty"],
            q = function() { for (var a = {}, b = 0, c = p.length; c > b; b++) { var e = p[b],
                        f = d(e);
                    f && f !== e && (a[e] = f) } return a }();
        e.extend(g.prototype, b.prototype), g.prototype._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, g.prototype.handleEvent = function(a) { var b = "on" + a.type;
            this[b] && this[b](a) }, g.prototype.getSize = function() { this.size = c(this.element) }, g.prototype.css = function(a) { var b = this.element.style; for (var c in a) { var d = q[c] || c;
                b[d] = a[c] } }, g.prototype.getPosition = function() { var a = j(this.element),
                b = this.layout.options,
                c = b.isOriginLeft,
                d = b.isOriginTop,
                e = a[c ? "left" : "right"],
                f = a[d ? "top" : "bottom"],
                g = this.layout.size,
                h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
                i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
            h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i }, g.prototype.layoutPosition = function() { var a = this.layout.size,
                b = this.layout.options,
                c = {},
                d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
                e = b.isOriginLeft ? "left" : "right",
                f = b.isOriginLeft ? "right" : "left",
                g = this.position.x + a[d];
            c[e] = this.getXValue(g), c[f] = ""; var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
                i = b.isOriginTop ? "top" : "bottom",
                j = b.isOriginTop ? "bottom" : "top",
                k = this.position.y + a[h];
            c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this]) }, g.prototype.getXValue = function(a) { var b = this.layout.options; return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px" }, g.prototype.getYValue = function(a) { var b = this.layout.options; return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px" }, g.prototype._transitionTo = function(a, b) { this.getPosition(); var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y; if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition(); var h = a - c,
                i = b - d,
                j = {};
            j.transform = this.getTranslate(h, i), this.transition({ to: j, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, g.prototype.getTranslate = function(a, b) { var c = this.layout.options; return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)" }, g.prototype.goTo = function(a, b) { this.setPosition(a, b), this.layoutPosition() }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function(a, b) { this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10) }, g.prototype._nonTransition = function(a) { this.css(a.to), a.isCleaning && this._removeStyles(a.to); for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this) }, g.prototype._transition = function(a) { if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a); var b = this._transn; for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c]; for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0); if (a.from) { this.css(a.from); var d = this.element.offsetHeight;
                d = null }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0 }; var r = "opacity," + h(q.transform || "transform");
        g.prototype.enableTransition = function() { this.isTransitioning || (this.css({ transitionProperty: r, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(o, this, !1)) }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function(a) { this.ontransitionend(a) }, g.prototype.onotransitionend = function(a) { this.ontransitionend(a) }; var s = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" };
        g.prototype.ontransitionend = function(a) { if (a.target === this.element) { var b = this._transn,
                    c = s[a.propertyName] || a.propertyName; if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) { var d = b.onEnd[c];
                    d.call(this), delete b.onEnd[c] }
                this.emitEvent("transitionEnd", [this]) } }, g.prototype.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1 }, g.prototype._removeStyles = function(a) { var b = {}; for (var c in a) b[c] = "";
            this.css(b) }; var t = { transitionProperty: "", transitionDuration: "" }; return g.prototype.removeTransitionStyles = function() { this.css(t) }, g.prototype.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, g.prototype.remove = function() { if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem(); var a = this;
            this.once("transitionEnd", function() { a.removeElem() }), this.hide() }, g.prototype.reveal = function() { delete this.isHidden, this.css({ display: "" }); var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("visibleStyle");
            b[c] = this.onRevealTransitionEnd, this.transition({ from: a.hiddenStyle, to: a.visibleStyle, isCleaning: !0, onTransitionEnd: b }) }, g.prototype.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, g.prototype.getHideRevealTransitionEndProperty = function(a) { var b = this.layout.options[a]; if (b.opacity) return "opacity"; for (var c in b) return c }, g.prototype.hide = function() { this.isHidden = !0, this.css({ display: "" }); var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("hiddenStyle");
            b[c] = this.onHideTransitionEnd, this.transition({ from: a.visibleStyle, to: a.hiddenStyle, isCleaning: !0, onTransitionEnd: b }) }, g.prototype.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, g.prototype.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, g }), function(a, b) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) { return b(a, c, d, e, f, g) }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item) }(window, function(a, b, c, d, e, f) {
        "use strict";

        function g(a, b) { var c = e.getQueryElement(a); if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b); var d = ++k;
            this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout() }
        var h = a.console,
            i = a.jQuery,
            j = function() {},
            k = 0,
            l = {};
        return g.namespace = "outlayer", g.Item = f, g.defaults = { containerStyle: { position: "relative" }, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }, e.extend(g.prototype, c.prototype), g.prototype.option = function(a) { e.extend(this.options, a) }, g.prototype._create = function() { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize() }, g.prototype.reloadItems = function() { this.items = this._itemize(this.element.children) }, g.prototype._itemize = function(a) { for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) { var g = b[e],
                    h = new c(g, this);
                d.push(h) } return d }, g.prototype._filterFindItemElements = function(a) { return e.filterFindElements(a, this.options.itemSelector) }, g.prototype.getItemElements = function() { for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element); return a }, g.prototype.layout = function() { this._resetLayout(), this._manageStamps(); var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0 }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() { this.getSize() }, g.prototype.getSize = function() { this.size = d(this.element) }, g.prototype._getMeasurement = function(a, b) { var c, f = this.options[a];
            f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0 }, g.prototype.layoutItems = function(a, b) { a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout() }, g.prototype._getItemsForLayout = function(a) { for (var b = [], c = 0, d = a.length; d > c; c++) { var e = a[c];
                e.isIgnored || b.push(e) } return b }, g.prototype._layoutItems = function(a, b) { if (this._emitCompleteOnItems("layout", a), a && a.length) { for (var c = [], d = 0, e = a.length; e > d; d++) { var f = a[d],
                        g = this._getItemLayoutPosition(f);
                    g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g) }
                this._processLayoutQueue(c) } }, g.prototype._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, g.prototype._processLayoutQueue = function(a) { for (var b = 0, c = a.length; c > b; b++) { var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant) } }, g.prototype._positionItem = function(a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, g.prototype._postLayout = function() { this.resizeContainer() }, g.prototype.resizeContainer = function() { if (this.options.isResizingContainer) { var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1)) } }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function(a, b) { if (void 0 !== a) { var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px" } }, g.prototype._emitCompleteOnItems = function(a, b) {
            function c() { e.dispatchEvent(a + "Complete", null, [b]) }

            function d() { g++, g === f && c() } var e = this,
                f = b.length; if (!b || !f) return void c(); for (var g = 0, h = 0, i = b.length; i > h; h++) { var j = b[h];
                j.once(a, d) } }, g.prototype.dispatchEvent = function(a, b, c) { var d = b ? [b].concat(c) : c; if (this.emitEvent(a, d), i)
                if (this.$element = this.$element || i(this.element), b) { var e = i.Event(b);
                    e.type = a, this.$element.trigger(e, c) } else this.$element.trigger(a, c) }, g.prototype.ignore = function(a) { var b = this.getItem(a);
            b && (b.isIgnored = !0) }, g.prototype.unignore = function(a) { var b = this.getItem(a);
            b && delete b.isIgnored }, g.prototype.stamp = function(a) { if (a = this._find(a)) { this.stamps = this.stamps.concat(a); for (var b = 0, c = a.length; c > b; b++) { var d = a[b];
                    this.ignore(d) } } }, g.prototype.unstamp = function(a) { if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) { var d = a[b];
                    e.removeFrom(this.stamps, d), this.unignore(d) } }, g.prototype._find = function(a) { return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0 }, g.prototype._manageStamps = function() { if (this.stamps && this.stamps.length) { this._getBoundingRect(); for (var a = 0, b = this.stamps.length; b > a; a++) { var c = this.stamps[a];
                    this._manageStamp(c) } } }, g.prototype._getBoundingRect = function() { var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = { left: a.left + b.paddingLeft + b.borderLeftWidth, top: a.top + b.paddingTop + b.borderTopWidth, right: a.right - (b.paddingRight + b.borderRightWidth), bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth) } }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function(a) { var b = a.getBoundingClientRect(),
                c = this._boundingRect,
                e = d(a),
                f = { left: b.left - c.left - e.marginLeft, top: b.top - c.top - e.marginTop, right: c.right - b.right - e.marginRight, bottom: c.bottom - b.bottom - e.marginBottom }; return f }, g.prototype.handleEvent = function(a) { var b = "on" + a.type;
            this[b] && this[b](a) }, g.prototype.bindResize = function() { this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0) }, g.prototype.unbindResize = function() { this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1 }, g.prototype.onresize = function() {
            function a() { b.resize(), delete b.resizeTimeout }
            this.resizeTimeout && clearTimeout(this.resizeTimeout); var b = this;
            this.resizeTimeout = setTimeout(a, 100) }, g.prototype.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, g.prototype.needsResizeLayout = function() { var a = d(this.element),
                b = this.size && a; return b && a.innerWidth !== this.size.innerWidth }, g.prototype.addItems = function(a) { var b = this._itemize(a); return b.length && (this.items = this.items.concat(b)), b }, g.prototype.appended = function(a) { var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b)) }, g.prototype.prepended = function(a) { var b = this._itemize(a); if (b.length) { var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c) } }, g.prototype.reveal = function(a) { this._emitCompleteOnItems("reveal", a); for (var b = a && a.length, c = 0; b && b > c; c++) { var d = a[c];
                d.reveal() } }, g.prototype.hide = function(a) { this._emitCompleteOnItems("hide", a); for (var b = a && a.length, c = 0; b && b > c; c++) { var d = a[c];
                d.hide() } }, g.prototype.revealItemElements = function(a) { var b = this.getItems(a);
            this.reveal(b) }, g.prototype.hideItemElements = function(a) { var b = this.getItems(a);
            this.hide(b) }, g.prototype.getItem = function(a) { for (var b = 0, c = this.items.length; c > b; b++) { var d = this.items[b]; if (d.element === a) return d } }, g.prototype.getItems = function(a) { a = e.makeArray(a); for (var b = [], c = 0, d = a.length; d > c; c++) { var f = a[c],
                    g = this.getItem(f);
                g && b.push(g) } return b }, g.prototype.remove = function(a) { var b = this.getItems(a); if (this._emitCompleteOnItems("remove", b), b && b.length)
                for (var c = 0, d = b.length; d > c; c++) { var f = b[c];
                    f.remove(), e.removeFrom(this.items, f) } }, g.prototype.destroy = function() { var a = this.element.style;
            a.height = "", a.position = "", a.width = ""; for (var b = 0, c = this.items.length; c > b; b++) { var d = this.items[b];
                d.destroy() }
            this.unbindResize(); var e = this.element.outlayerGUID;
            delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace) }, g.data = function(a) { a = e.getQueryElement(a); var b = a && a.outlayerGUID; return b && l[b] }, g.create = function(a, b) {
            function c() { g.apply(this, arguments) } return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function() { f.apply(this, arguments) }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c }, g.Item = f, g
    }), function(a, b) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer)) }(window, function(a) { "use strict";

        function b() { a.Item.apply(this, arguments) }
        b.prototype = new a.Item, b.prototype._create = function() { this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {} }, b.prototype.updateSortData = function() { if (!this.isIgnored) { this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random(); var a = this.layout.options.getSortData,
                    b = this.layout._sorters; for (var c in a) { var d = b[c];
                    this.sortData[c] = d(this.element, this) } } }; var c = b.prototype.destroy; return b.prototype.destroy = function() { c.apply(this, arguments), this.css({ display: "" }) }, b }), function(a, b) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer)) }(window, function(a, b) { "use strict";

        function c(a) { this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size) } return function() {
            function a(a) { return function() { return b.prototype[a].apply(this.isotope, arguments) } } for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) { var g = d[e];
                c.prototype[g] = a(g) } }(), c.prototype.needsVerticalResizeLayout = function() { var b = a(this.isotope.element),
                c = this.isotope.size && b; return c && b.innerHeight != this.isotope.size.innerHeight }, c.prototype._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, c.prototype.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, c.prototype.getRowHeight = function() { this.getSegmentSize("row", "Height") }, c.prototype.getSegmentSize = function(a, b) { var c = a + b,
                d = "outer" + b; if (this._getMeasurement(c, d), !this[c]) { var e = this.getFirstItemSize();
                this[c] = e && e[d] || this.isotope.size["inner" + b] } }, c.prototype.getFirstItemSize = function() { var b = this.isotope.filteredItems[0]; return b && b.element && a(b.element) }, c.prototype.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, c.prototype.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, c.modes = {}, c.create = function(a, b) {
            function d() { c.apply(this, arguments) } return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d }, c }), function(a, b) { "use strict"; "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils) }(window, function(a, b, c) { var d = a.create("masonry"); return d.prototype._resetLayout = function() { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(); var a = this.cols; for (this.colYs = []; a--;) this.colYs.push(0);
            this.maxY = 0 }, d.prototype.measureColumns = function() { if (this.getContainerWidth(), !this.columnWidth) { var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth } var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1) }, d.prototype.getContainerWidth = function() { var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                c = b(a);
            this.containerWidth = c && c.innerWidth }, d.prototype._getItemLayoutPosition = function(a) { a.getSize(); var b = a.size.outerWidth % this.columnWidth,
                d = b && 1 > b ? "round" : "ceil",
                e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols); for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = { x: this.columnWidth * h, y: g }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j; return i }, d.prototype._getColGroup = function(a) { if (2 > a) return this.colYs; for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) { var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e) } return b }, d.prototype._manageStamp = function(a) { var c = b(a),
                d = this._getElementOffset(a),
                e = this.options.isOriginLeft ? d.left : d.right,
                f = e + c.outerWidth,
                g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g); var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h); for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j]) }, d.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var a = { height: this.maxY }; return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a }, d.prototype._getContainerFitWidth = function() { for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++; return (this.cols - a) * this.columnWidth - this.gutter }, d.prototype.needsResizeLayout = function() { var a = this.containerWidth; return this.getContainerWidth(), a !== this.containerWidth }, d }), function(a, b) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry) }(window, function(a, b) { "use strict";

        function c(a, b) { for (var c in b) a[c] = b[c]; return a } var d = a.create("masonry"),
            e = d.prototype._getElementOffset,
            f = d.prototype.layout,
            g = d.prototype._getMeasurement;
        c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g; var h = d.prototype.measureColumns;
        d.prototype.measureColumns = function() { this.items = this.isotope.filteredItems, h.call(this) }; var i = d.prototype._manageStamp; return d.prototype._manageStamp = function() { this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments) }, d }), function(a, b) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode) }(window, function(a) { "use strict"; var b = a.create("fitRows"); return b.prototype._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, b.prototype._getItemLayoutPosition = function(a) { a.getSize(); var b = a.size.outerWidth + this.gutter,
                c = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY); var d = { x: this.x, y: this.y }; return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d }, b.prototype._getContainerSize = function() { return { height: this.maxY } }, b }), function(a, b) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode) }(window, function(a) { "use strict"; var b = a.create("vertical", { horizontalAlignment: 0 }); return b.prototype._resetLayout = function() { this.y = 0 }, b.prototype._getItemLayoutPosition = function(a) { a.getSize(); var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                c = this.y; return this.y += a.size.outerHeight, { x: b, y: c } }, b.prototype._getContainerSize = function() { return { height: this.y } }, b }), function(a, b) { "use strict"; "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(c, d, e, f, g, h) { return b(a, c, d, e, f, g, h) }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode) }(window, function(a, b, c, d, e, f, g) {
        function h(a, b) { return function(c, d) { for (var e = 0, f = a.length; f > e; e++) { var g = a[e],
                        h = c.sortData[g],
                        i = d.sortData[g]; if (h > i || i > h) { var j = void 0 !== b[g] ? b[g] : b,
                            k = j ? 1 : -1; return (h > i ? 1 : -1) * k } } return 0 } } var i = a.jQuery,
            j = String.prototype.trim ? function(a) { return a.trim() } : function(a) { return a.replace(/^\s+|\s+$/g, "") },
            k = document.documentElement,
            l = k.textContent ? function(a) { return a.textContent } : function(a) { return a.innerText },
            m = b.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        m.Item = f, m.LayoutMode = g, m.prototype._create = function() { this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"]; for (var a in g.modes) this._initLayoutMode(a) }, m.prototype.reloadItems = function() { this.itemGUID = 0, b.prototype.reloadItems.call(this) }, m.prototype._itemize = function() { for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) { var e = a[c];
                e.id = this.itemGUID++ } return this._updateItemsSortData(a), a }, m.prototype._initLayoutMode = function(a) { var b = g.modes[a],
                c = this.options[a] || {};
            this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this) }, m.prototype.layout = function() { return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout() }, m.prototype._layout = function() { var a = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0 }, m.prototype.arrange = function(a) {
            function b() { d.reveal(c.needReveal), d.hide(c.needHide) }
            this.option(a), this._getIsInstant(); var c = this._filter(this.items);
            this.filteredItems = c.matches; var d = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout() }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function() { var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited; return this._isInstant = a, a }, m.prototype._bindArrangeComplete = function() {
            function a() { b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems]) } var b, c, d, e = this;
            this.once("layoutComplete", function() { b = !0, a() }), this.once("hideComplete", function() { c = !0, a() }), this.once("revealComplete", function() { d = !0, a() }) }, m.prototype._filter = function(a) { var b = this.options.filter;
            b = b || "*"; for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) { var i = a[g]; if (!i.isIgnored) { var j = f(i);
                    j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i) } } return { matches: c, needReveal: d, needHide: e } }, m.prototype._getFilterTest = function(a) { return i && this.options.isJQueryFiltering ? function(b) { return i(b.element).is(a) } : "function" == typeof a ? function(b) { return a(b.element) } : function(b) { return d(b.element, a) } }, m.prototype.updateSortData = function(a) { var b;
            a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b) }, m.prototype._getSorters = function() { var a = this.options.getSortData; for (var b in a) { var c = a[b];
                this._sorters[b] = n(c) } }, m.prototype._updateItemsSortData = function(a) { for (var b = a && a.length, c = 0; b && b > c; c++) { var d = a[c];
                d.updateSortData() } }; var n = function() {
            function a(a) { if ("string" != typeof a) return a; var c = j(a).split(" "),
                    d = c[0],
                    e = d.match(/^\[(.+)\]$/),
                    f = e && e[1],
                    g = b(f, d),
                    h = m.sortDataParsers[c[1]]; return a = h ? function(a) { return a && h(g(a)) } : function(a) { return a && g(a) } }

            function b(a, b) { var c; return c = a ? function(b) { return b.getAttribute(a) } : function(a) { var c = a.querySelector(b); return c && l(c) } } return a }();
        m.sortDataParsers = { parseInt: function(a) { return parseInt(a, 10) }, parseFloat: function(a) { return parseFloat(a) } }, m.prototype._sort = function() { var a = this.options.sortBy; if (a) { var b = [].concat.apply(a, this.sortHistory),
                    c = h(b, this.options.sortAscending);
                this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a) } }, m.prototype._mode = function() { var a = this.options.layoutMode,
                b = this.modes[a]; if (!b) throw new Error("No layout mode: " + a); return b.options = this.options[a], b }, m.prototype._resetLayout = function() { b.prototype._resetLayout.call(this), this._mode()._resetLayout() }, m.prototype._getItemLayoutPosition = function(a) { return this._mode()._getItemLayoutPosition(a) }, m.prototype._manageStamp = function(a) { this._mode()._manageStamp(a) }, m.prototype._getContainerSize = function() { return this._mode()._getContainerSize() }, m.prototype.needsResizeLayout = function() { return this._mode().needsResizeLayout() }, m.prototype.appended = function(a) { var b = this.addItems(a); if (b.length) { var c = this._filterRevealAdded(b);
                this.filteredItems = this.filteredItems.concat(c) } }, m.prototype.prepended = function(a) { var b = this._itemize(a); if (b.length) { this._resetLayout(), this._manageStamps(); var c = this._filterRevealAdded(b);
                this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items) } }, m.prototype._filterRevealAdded = function(a) { var b = this._filter(a); return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches }, m.prototype.insert = function(a) { var b = this.addItems(a); if (b.length) { var c, d, e = b.length; for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element); var f = this._filter(b).matches; for (c = 0; e > c; c++) b[c].isLayoutInstant = !0; for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
                this.reveal(f) } }; var o = m.prototype.remove; return m.prototype.remove = function(a) { a = e.makeArray(a); var b = this.getItems(a);
            o.call(this, a); var c = b && b.length; if (c)
                for (var d = 0; c > d; d++) { var f = b[d];
                    e.removeFrom(this.filteredItems, f) } }, m.prototype.shuffle = function() { for (var a = 0, b = this.items.length; b > a; a++) { var c = this.items[a];
                c.sortData.random = Math.random() }
            this.options.sortBy = "random", this._sort(), this._layout() }, m.prototype._noTransition = function(a) { var b = this.options.transitionDuration;
            this.options.transitionDuration = 0; var c = a.call(this); return this.options.transitionDuration = b, c }, m.prototype.getFilteredItemElements = function() { for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element); return a }, m }), function(a, b, c) { "use strict";

        function d(c) { if (e = b.documentElement, f = b.body, T(), ha = this, c = c || {}, ma = c.constants || {}, c.easing)
                for (var d in c.easing) W[d] = c.easing[d];
            ta = c.edgeStrategy || "set", ka = { beforerender: c.beforerender, render: c.render, keyframe: c.keyframe }, la = c.forceHeight !== !1, la && (Ka = c.scale || 1), na = c.mobileDeceleration || y, pa = c.smoothScrolling !== !1, qa = c.smoothScrollingDuration || A, ra = { targetTop: ha.getScrollTop() }, Sa = (c.mobileCheck || function() { return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || a.opera) })(), Sa ? (ja = b.getElementById(c.skrollrBody || z), ja && ga(), X(), Ea(e, [s, v], [t])) : Ea(e, [s, u], [t]), ha.refresh(), wa(a, "resize orientationchange", function() { var a = e.clientWidth,
                    b = e.clientHeight;
                (b !== Pa || a !== Oa) && (Pa = b, Oa = a, Qa = !0) }); var g = U(); return function a() { $(), va = g(a) }(), ha } var e, f, g = { get: function() { return ha }, init: function(a) { return ha || new d(a) }, VERSION: "0.6.29" },
            h = Object.prototype.hasOwnProperty,
            i = a.Math,
            j = a.getComputedStyle,
            k = "touchstart",
            l = "touchmove",
            m = "touchcancel",
            n = "touchend",
            o = "skrollable",
            p = o + "-before",
            q = o + "-between",
            r = o + "-after",
            s = "skrollr",
            t = "no-" + s,
            u = s + "-desktop",
            v = s + "-mobile",
            w = "linear",
            x = 1e3,
            y = .004,
            z = "skrollr-body",
            A = 200,
            B = "start",
            C = "end",
            D = "center",
            E = "bottom",
            F = "___skrollable_id",
            G = /^(?:input|textarea|button|select)$/i,
            H = /^\s+|\s+$/g,
            I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
            J = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
            K = /^(@?[a-z\-]+)\[(\w+)\]$/,
            L = /-([a-z0-9_])/g,
            M = function(a, b) { return b.toUpperCase() },
            N = /[\-+]?[\d]*\.?[\d]+/g,
            O = /\{\?\}/g,
            P = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
            Q = /[a-z\-]+-gradient/g,
            R = "",
            S = "",
            T = function() { var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/; if (j) { var b = j(f, null); for (var d in b)
                        if (R = d.match(a) || +d == d && b[d].match(a)) break;
                    if (!R) return R = S = "", c;
                    R = R[0], "-" === R.slice(0, 1) ? (S = R, R = { "-webkit-": "webkit", "-moz-": "Moz", "-ms-": "ms", "-o-": "O" }[R]) : S = "-" + R.toLowerCase() + "-" } },
            U = function() { var b = a.requestAnimationFrame || a[R.toLowerCase() + "RequestAnimationFrame"],
                    c = Ha(); return (Sa || !b) && (b = function(b) { var d = Ha() - c,
                        e = i.max(0, 1e3 / 60 - d); return a.setTimeout(function() { c = Ha(), b() }, e) }), b },
            V = function() { var b = a.cancelAnimationFrame || a[R.toLowerCase() + "CancelAnimationFrame"]; return (Sa || !b) && (b = function(b) { return a.clearTimeout(b) }), b },
            W = { begin: function() { return 0 }, end: function() { return 1 }, linear: function(a) { return a }, quadratic: function(a) { return a * a }, cubic: function(a) { return a * a * a }, swing: function(a) { return -i.cos(a * i.PI) / 2 + .5 }, sqrt: function(a) { return i.sqrt(a) }, outCubic: function(a) { return i.pow(a - 1, 3) + 1 }, bounce: function(a) { var b; if (.5083 >= a) b = 3;
                    else if (.8489 >= a) b = 9;
                    else if (.96208 >= a) b = 27;
                    else { if (!(.99981 >= a)) return 1;
                        b = 91 } return 1 - i.abs(3 * i.cos(1.028 * a * b) / b) } };
        d.prototype.refresh = function(a) { var d, e, f = !1; for (a === c ? (f = !0, ia = [], Ra = 0, a = b.getElementsByTagName("*")) : a.length === c && (a = [a]), d = 0, e = a.length; e > d; d++) { var g = a[d],
                    h = g,
                    i = [],
                    j = pa,
                    k = ta,
                    l = !1; if (f && F in g && delete g[F], g.attributes) { for (var m = 0, n = g.attributes.length; n > m; m++) { var p = g.attributes[m]; if ("data-anchor-target" !== p.name)
                            if ("data-smooth-scrolling" !== p.name)
                                if ("data-edge-strategy" !== p.name)
                                    if ("data-emit-events" !== p.name) { var q = p.name.match(I); if (null !== q) { var r = { props: p.value, element: g, eventType: p.name.replace(L, M) };
                                            i.push(r); var s = q[1];
                                            s && (r.constant = s.substr(1)); var t = q[2]; /p$/.test(t) ? (r.isPercentage = !0, r.offset = (0 | t.slice(0, -1)) / 100) : r.offset = 0 | t; var u = q[3],
                                                v = q[4] || u;
                                            u && u !== B && u !== C ? (r.mode = "relative", r.anchors = [u, v]) : (r.mode = "absolute", u === C ? r.isEnd = !0 : r.isPercentage || (r.offset = r.offset * Ka)) } } else l = !0;
                        else k = p.value;
                        else j = "off" !== p.value;
                        else if (h = b.querySelector(p.value), null === h) throw 'Unable to find anchor target "' + p.value + '"' } if (i.length) { var w, x, y;!f && F in g ? (y = g[F], w = ia[y].styleAttr, x = ia[y].classAttr) : (y = g[F] = Ra++, w = g.style.cssText, x = Da(g)), ia[y] = { element: g, styleAttr: w, classAttr: x, anchorTarget: h, keyFrames: i, smoothScrolling: j, edgeStrategy: k, emitEvents: l, lastFrameIndex: -1 }, Ea(g, [o], []) } } } for (Aa(), d = 0, e = a.length; e > d; d++) { var z = ia[a[d][F]];
                z !== c && (_(z), ba(z)) } return ha }, d.prototype.relativeToAbsolute = function(a, b, c) { var d = e.clientHeight,
                f = a.getBoundingClientRect(),
                g = f.top,
                h = f.bottom - f.top; return b === E ? g -= d : b === D && (g -= d / 2), c === E ? g += h : c === D && (g += h / 2), g += ha.getScrollTop(), 0 | g + .5 }, d.prototype.animateTo = function(a, b) { b = b || {}; var d = Ha(),
                e = ha.getScrollTop(); return oa = { startTop: e, topDiff: a - e, targetTop: a, duration: b.duration || x, startTime: d, endTime: d + (b.duration || x), easing: W[b.easing || w], done: b.done }, oa.topDiff || (oa.done && oa.done.call(ha, !1), oa = c), ha }, d.prototype.stopAnimateTo = function() { oa && oa.done && oa.done.call(ha, !0), oa = c }, d.prototype.isAnimatingTo = function() { return !!oa }, d.prototype.isMobile = function() { return Sa }, d.prototype.setScrollTop = function(b, c) { return sa = c === !0, Sa ? Ta = i.min(i.max(b, 0), Ja) : a.scrollTo(0, b), ha }, d.prototype.getScrollTop = function() { return Sa ? Ta : a.pageYOffset || e.scrollTop || f.scrollTop || 0 }, d.prototype.getMaxScrollTop = function() { return Ja }, d.prototype.on = function(a, b) { return ka[a] = b, ha }, d.prototype.off = function(a) { return delete ka[a], ha }, d.prototype.destroy = function() { var a = V();
            a(va), ya(), Ea(e, [t], [s, u, v]); for (var b = 0, d = ia.length; d > b; b++) fa(ia[b].element);
            e.style.overflow = f.style.overflow = "", e.style.height = f.style.height = "", ja && g.setStyle(ja, "transform", "none"), ha = c, ja = c, ka = c, la = c, Ja = 0, Ka = 1, ma = c, na = c, La = "down", Ma = -1, Oa = 0, Pa = 0, Qa = !1, oa = c, pa = c, qa = c, ra = c, sa = c, Ra = 0, ta = c, Sa = !1, Ta = 0, ua = c }; var X = function() { var d, g, h, j, o, p, q, r, s, t, u, v;
                wa(e, [k, l, m, n].join(" "), function(a) { var e = a.changedTouches[0]; for (j = a.target; 3 === j.nodeType;) j = j.parentNode; switch (o = e.clientY, p = e.clientX, t = a.timeStamp, G.test(j.tagName) || a.preventDefault(), a.type) {
                        case k:
                            d && d.blur(), ha.stopAnimateTo(), d = j, g = q = o, h = p, s = t; break;
                        case l:
                            G.test(j.tagName) && b.activeElement !== j && a.preventDefault(), r = o - q, v = t - u, ha.setScrollTop(Ta - r, !0), q = o, u = t; break;
                        default:
                        case m:
                        case n:
                            var f = g - o,
                                w = h - p,
                                x = w * w + f * f; if (49 > x) { if (!G.test(d.tagName)) { d.focus(); var y = b.createEvent("MouseEvents");
                                    y.initMouseEvent("click", !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), d.dispatchEvent(y) } return }
                            d = c; var z = r / v;
                            z = i.max(i.min(z, 3), -3); var A = i.abs(z / na),
                                B = z * A + .5 * na * A * A,
                                C = ha.getScrollTop() - B,
                                D = 0;
                            C > Ja ? (D = (Ja - C) / B, C = Ja) : 0 > C && (D = -C / B, C = 0), A *= 1 - D, ha.animateTo(0 | C + .5, { easing: "outCubic", duration: A }) } }), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = "hidden" },
            Y = function() { var a, b, c, d, f, g, h, j, k, l, m, n = e.clientHeight,
                    o = Ba(); for (j = 0, k = ia.length; k > j; j++)
                    for (a = ia[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], l = h.offset, m = o[h.constant] || 0, h.frame = l, h.isPercentage && (l *= n, h.frame = l), "relative" === h.mode && (fa(b), h.frame = ha.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l, fa(b, !0)), h.frame += m, la && !h.isEnd && h.frame > Ja && (Ja = h.frame); for (Ja = i.max(Ja, Ca()), j = 0, k = ia.length; k > j; j++) { for (a = ia[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], m = o[h.constant] || 0, h.isEnd && (h.frame = Ja - h.offset + m);
                    a.keyFrames.sort(Ia) } },
            Z = function(a, b) { for (var c = 0, d = ia.length; d > c; c++) { var e, f, i = ia[c],
                        j = i.element,
                        k = i.smoothScrolling ? a : b,
                        l = i.keyFrames,
                        m = l.length,
                        n = l[0],
                        s = l[l.length - 1],
                        t = n.frame > k,
                        u = k > s.frame,
                        v = t ? n : s,
                        w = i.emitEvents,
                        x = i.lastFrameIndex; if (t || u) { if (t && -1 === i.edge || u && 1 === i.edge) continue; switch (t ? (Ea(j, [p], [r, q]), w && x > -1 && (za(j, n.eventType, La), i.lastFrameIndex = -1)) : (Ea(j, [r], [p, q]), w && m > x && (za(j, s.eventType, La), i.lastFrameIndex = m)), i.edge = t ? -1 : 1, i.edgeStrategy) {
                            case "reset":
                                fa(j); continue;
                            case "ease":
                                k = v.frame; break;
                            default:
                            case "set":
                                var y = v.props; for (e in y) h.call(y, e) && (f = ea(y[e].value), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f)); continue } } else 0 !== i.edge && (Ea(j, [o, q], [p, r]), i.edge = 0); for (var z = 0; m - 1 > z; z++)
                        if (k >= l[z].frame && l[z + 1].frame >= k) { var A = l[z],
                                B = l[z + 1]; for (e in A.props)
                                if (h.call(A.props, e)) { var C = (k - A.frame) / (B.frame - A.frame);
                                    C = A.props[e].easing(C), f = da(A.props[e].value, B.props[e].value, C), f = ea(f), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f) }
                            w && x !== z && ("down" === La ? za(j, A.eventType, La) : za(j, B.eventType, La), i.lastFrameIndex = z); break } } },
            $ = function() { Qa && (Qa = !1, Aa()); var a, b, d = ha.getScrollTop(),
                    e = Ha(); if (oa) e >= oa.endTime ? (d = oa.targetTop, a = oa.done, oa = c) : (b = oa.easing((e - oa.startTime) / oa.duration), d = 0 | oa.startTop + b * oa.topDiff), ha.setScrollTop(d, !0);
                else if (!sa) { var f = ra.targetTop - d;
                    f && (ra = { startTop: Ma, topDiff: d - Ma, targetTop: d, startTime: Na, endTime: Na + qa }), ra.endTime >= e && (b = W.sqrt((e - ra.startTime) / qa), d = 0 | ra.startTop + b * ra.topDiff) } if (Sa && ja && g.setStyle(ja, "transform", "translate(0, " + -Ta + "px) " + ua), sa || Ma !== d) { La = d > Ma ? "down" : Ma > d ? "up" : La, sa = !1; var h = { curTop: d, lastTop: Ma, maxTop: Ja, direction: La },
                        i = ka.beforerender && ka.beforerender.call(ha, h);
                    i !== !1 && (Z(d, ha.getScrollTop()), Ma = d, ka.render && ka.render.call(ha, h)), a && a.call(ha, !1) }
                Na = e },
            _ = function(a) { for (var b = 0, c = a.keyFrames.length; c > b; b++) { for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = J.exec(h.props));) f = g[1], e = g[2], d = f.match(K), null !== d ? (f = d[1], d = d[2]) : d = w, e = e.indexOf("!") ? aa(e) : [e.slice(1)], i[f] = { value: e, easing: W[d] };
                    h.props = i } },
            aa = function(a) { var b = []; return P.lastIndex = 0, a = a.replace(P, function(a) { return a.replace(N, function(a) { return 100 * (a / 255) + "%" }) }), S && (Q.lastIndex = 0, a = a.replace(Q, function(a) { return S + a })), a = a.replace(N, function(a) { return b.push(+a), "{?}" }), b.unshift(a), b },
            ba = function(a) { var b, c, d = {}; for (b = 0, c = a.keyFrames.length; c > b; b++) ca(a.keyFrames[b], d); for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--) ca(a.keyFrames[b], d) },
            ca = function(a, b) { var c; for (c in b) h.call(a.props, c) || (a.props[c] = b[c]); for (c in a.props) b[c] = a.props[c] },
            da = function(a, b, c) { var d, e = a.length; if (e !== b.length) throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"'; var f = [a[0]]; for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c; return f },
            ea = function(a) { var b = 1; return O.lastIndex = 0, a[0].replace(O, function() { return a[b++] }) },
            fa = function(a, b) { a = [].concat(a); for (var c, d, e = 0, f = a.length; f > e; e++) d = a[e], c = ia[d[F]], c && (b ? (d.style.cssText = c.dirtyStyleAttr, Ea(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = Da(d), d.style.cssText = c.styleAttr, Ea(d, c.classAttr))) },
            ga = function() { ua = "translateZ(0)", g.setStyle(ja, "transform", ua); var a = j(ja),
                    b = a.getPropertyValue("transform"),
                    c = a.getPropertyValue(S + "transform"),
                    d = b && "none" !== b || c && "none" !== c;
                d || (ua = "") };
        g.setStyle = function(a, b, c) { var d = a.style; if (b = b.replace(L, M).replace("-", ""), "zIndex" === b) d[b] = isNaN(c) ? c : "" + (0 | c);
            else if ("float" === b) d.styleFloat = d.cssFloat = c;
            else try { R && (d[R + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), d[b] = c } catch (a) {} }; var ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa = g.addEvent = function(b, c, d) { var e = function(b) { return b = b || a.event, b.target || (b.target = b.srcElement), b.preventDefault || (b.preventDefault = function() { b.returnValue = !1, b.defaultPrevented = !0 }), d.call(this, b) };
                c = c.split(" "); for (var f, g = 0, h = c.length; h > g; g++) f = c[g], b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent("on" + f, e), Ua.push({ element: b, name: f, listener: d }) },
            xa = g.removeEvent = function(a, b, c) { b = b.split(" "); for (var d = 0, e = b.length; e > d; d++) a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent("on" + b[d], c) },
            ya = function() { for (var a, b = 0, c = Ua.length; c > b; b++) a = Ua[b], xa(a.element, a.name, a.listener);
                Ua = [] },
            za = function(a, b, c) { ka.keyframe && ka.keyframe.call(ha, a, b, c) },
            Aa = function() { var a = ha.getScrollTop();
                Ja = 0, la && !Sa && (f.style.height = ""), Y(), la && !Sa && (f.style.height = Ja + e.clientHeight + "px"), Sa ? ha.setScrollTop(i.min(ha.getScrollTop(), Ja)) : ha.setScrollTop(a, !0), sa = !0 },
            Ba = function() { var a, b, c = e.clientHeight,
                    d = {}; for (a in ma) b = ma[a], "function" == typeof b ? b = b.call(ha) : /p$/.test(b) && (b = b.slice(0, -1) / 100 * c), d[a] = b; return d },
            Ca = function() { var a, b = 0; return ja && (b = i.max(ja.offsetHeight, ja.scrollHeight)), a = i.max(b, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight), a - e.clientHeight },
            Da = function(b) { var c = "className"; return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = "baseVal"), b[c] },
            Ea = function(b, d, e) { var f = "className"; if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = "baseVal"), e === c) return b[f] = d, c; for (var g = b[f], h = 0, i = e.length; i > h; h++) g = Ga(g).replace(Ga(e[h]), " ");
                g = Fa(g); for (var j = 0, k = d.length; k > j; j++) - 1 === Ga(g).indexOf(Ga(d[j])) && (g += " " + d[j]);
                b[f] = Fa(g) },
            Fa = function(a) { return a.replace(H, "") },
            Ga = function(a) { return " " + a + " " },
            Ha = Date.now || function() { return +new Date },
            Ia = function(a, b) { return a.frame - b.frame },
            Ja = 0,
            Ka = 1,
            La = "down",
            Ma = -1,
            Na = Ha(),
            Oa = 0,
            Pa = 0,
            Qa = !1,
            Ra = 0,
            Sa = !1,
            Ta = 0,
            Ua = []; "function" == typeof define && define.amd ? define([], function() { return g }) : "undefined" != typeof module && module.exports ? module.exports = g : a.skrollr = g }(window, document), function(a) {
        a.fn.appear = function(b, c) {
            var d = a.extend({ data: void 0, one: !0, accX: 0, accY: 0 }, c);
            return this.each(function() {
                var c = a(this);
                if (c.appeared = !1, !b) return void c.trigger("appear", d.data);
                var e = a(window),
                    f = function() { if (!c.is(":visible")) return void(c.appeared = !1); var a = e.scrollLeft(),
                            b = e.scrollTop(),
                            f = c.offset(),
                            g = f.left,
                            h = f.top,
                            i = d.accX,
                            j = d.accY,
                            k = c.height(),
                            l = e.height(),
                            m = c.width(),
                            n = e.width();
                        h + k + j >= b && h <= b + l + j && g + m + i >= a && g <= a + n + i ? c.appeared || c.trigger("appear", d.data) : c.appeared = !1 },
                    g = function() { if (c.appeared = !0, d.one) { e.unbind("scroll", f); var g = a.inArray(f, a.fn.appear.checks);
                            g >= 0 && a.fn.appear.checks.splice(g, 1) }
                        b.apply(this, arguments) };
                d.one ? c.one("appear", d.data, g) : c.bind("appear", d.data, g), e.scroll(f), a.fn.appear.checks.push(f), f()
            })
        }, a.extend(a.fn.appear, { checks: [], timeout: null, checkAll: function() { var b = a.fn.appear.checks.length; if (b > 0)
                    for (; b--;) a.fn.appear.checks[b]() }, run: function() { a.fn.appear.timeout && clearTimeout(a.fn.appear.timeout), a.fn.appear.timeout = setTimeout(a.fn.appear.checkAll, 20) } }), a.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(b, c) { var d = a.fn[c];
            d && (a.fn[c] = function() { var b = d.apply(this, arguments); return a.fn.appear.run(), b }) })
    }(jQuery), function(a) { a.fn.countTo = function(b) { b = a.extend({}, a.fn.countTo.defaults, b || {}); var c = Math.ceil(b.speed / b.refreshInterval),
                d = (b.to - b.from) / c; return a(this).each(function() {
                function e() { h += d, g++, a(f).html(h.toFixed(b.decimals)), "function" == typeof b.onUpdate && b.onUpdate.call(f, h), g >= c && (clearInterval(i), h = b.to, "function" == typeof b.onComplete && b.onComplete.call(f, h)) } var f = this,
                    g = 0,
                    h = b.from,
                    i = setInterval(e, b.refreshInterval) }) }, a.fn.countTo.defaults = { from: 0, to: 100, speed: 1e3, refreshInterval: 100, decimals: 0, onUpdate: null, onComplete: null } }(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) { "use strict"; var b = a.fn.jquery.split(" ")[0].split("."); if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher") }(jQuery), + function(a) { "use strict";

    function b() { var a = document.createElement("bootstrap"),
            b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var c in b)
            if (void 0 !== a.style[c]) return { end: b[c] };
        return !1 }
    a.fn.emulateTransitionEnd = function(b) { var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() { c = !0 }); var e = function() { c || a(d).trigger(a.support.transition.end) }; return setTimeout(e, b), this }, a(function() { a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function(b) { return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0 } }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c) }) } var c = '[data-dismiss="alert"]',
        d = function(b) { a(b).on("click", c, this.close) };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() { g.detach().trigger("closed.bs.alert").remove() } var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")); var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c()) }; var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() { return a.fn.alert = e, this }, a(document).on("click.bs.alert.data-api", c, d.prototype.close) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b) }) } var c = function(b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1 };
    c.VERSION = "3.3.5", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function(b) { var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() { d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c)) }, this), 0) }, c.prototype.toggle = function() { var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]'); if (b.length) { var c = this.$element.find("input"); "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") }; var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() { return a.fn.button = d, this }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) { var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault() }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) { a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type)) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle() }) } var c = function(b, c) { this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this)) };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function(a) { if (!/input|textarea/i.test(a.target.tagName)) { switch (a.which) {
                case 37:
                    this.prev(); break;
                case 39:
                    this.next(); break;
                default:
                    return }
            a.preventDefault() } }, c.prototype.cycle = function(b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, c.prototype.getItemIndex = function(a) { return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active) }, c.prototype.getItemForDirection = function(a, b) { var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1; if (d && !this.options.wrap) return b; var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length; return this.$items.eq(f) }, c.prototype.to = function(a) { var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active")); return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() { b.to(a) }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a)) }, c.prototype.pause = function(b) { return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, c.prototype.next = function() { return this.sliding ? void 0 : this.slide("next") }, c.prototype.prev = function() { return this.sliding ? void 0 : this.slide("prev") }, c.prototype.slide = function(b, d) { var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this; if (f.hasClass("active")) return this.sliding = !1; var j = f[0],
            k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h }); if (this.$element.trigger(k), !k.isDefaultPrevented()) { if (this.sliding = !0, g && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active") } var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h }); return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() { f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() { i.$element.trigger(m) }, 0) }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this } }; var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() { return a.fn.carousel = d, this }; var e = function(c) { var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")); if (f.hasClass("carousel")) { var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault() } };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() { a('[data-ride="carousel"]').each(function() { var c = a(this);
            b.call(c, c.data()) }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""); return a(d) }

    function c(b) { return this.each(function() { var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]() }) } var d = function(b, c) { this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function() { var a = this.$element.hasClass("width"); return a ? "width" : "height" }, d.prototype.show = function() { if (!this.transitioning && !this.$element.hasClass("in")) { var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) { var f = a.Event("show.bs.collapse"); if (this.$element.trigger(f), !f.isDefaultPrevented()) { e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null)); var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var h = function() { this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!a.support.transition) return h.call(this); var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]) } } } }, d.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass("in")) { var b = a.Event("hide.bs.collapse"); if (this.$element.trigger(b), !b.isDefaultPrevented()) { var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var e = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this) } } }, d.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, d.prototype.getParent = function() { return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) { var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e) }, this)).end() }, d.prototype.addAriaAndCollapsedClass = function(a, b) { var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c) }; var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() { return a.fn.collapse = e, this }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) { var e = a(this);
        e.attr("data-target") || d.preventDefault(); var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h) }) }(jQuery), + function(a) { "use strict";

    function b(b) { var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")); var d = c && a(c); return d && d.length ? d : b.parent() }

    function c(c) { c && 3 === c.which || (a(e).remove(), a(f).each(function() { var d = a(this),
                e = b(d),
                f = { relatedTarget: this };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))) })) }

    function d(b) { return this.each(function() { var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c) }) } var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) { a(b).on("click.bs.dropdown", this.toggle) };
    g.VERSION = "3.3.5", g.prototype.toggle = function(d) { var e = a(this); if (!e.is(".disabled, :disabled")) { var f = b(e),
                g = f.hasClass("open"); if (c(), !g) { "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c); var h = { relatedTarget: this }; if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h) } return !1 } }, g.prototype.keydown = function(c) { if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) { var d = a(this); if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) { var e = b(d),
                    g = e.hasClass("open"); if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click"); var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h); if (i.length) { var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus") } } } }; var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() { return a.fn.dropdown = h, this }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown) }(jQuery), + function(a) { "use strict";

    function b(b, d) { return this.each(function() { var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d) }) } var c = function(b, c) { this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function(a) { return this.isShown ? this.hide() : this.show(a) }, c.prototype.show = function(b) { var d = this,
            e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { d.$element.one("mouseup.dismiss.bs.modal", function(b) { a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0) }) }), this.backdrop(function() { var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus(); var f = a.Event("shown.bs.modal", { relatedTarget: b });
            e ? d.$dialog.one("bsTransitionEnd", function() { d.$element.trigger("focus").trigger(f) }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f) })) }, c.prototype.hide = function(b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal()) }, c.prototype.enforceFocus = function() { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) { this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus") }, this)) }, c.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, c.prototype.resize = function() { this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal") }, c.prototype.hideModal = function() { var a = this;
        this.$element.hide(), this.backdrop(function() { a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal") }) }, c.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, c.prototype.backdrop = function(b) { var d = this,
            e = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var f = a.support.transition && e; if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var g = function() { d.removeBackdrop(), b && b() };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g() } else b && b() }, c.prototype.handleUpdate = function() { this.adjustDialog() }, c.prototype.adjustDialog = function() { var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" }) }, c.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, c.prototype.checkScrollbar = function() { var a = window.innerWidth; if (!a) { var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left) }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar() }, c.prototype.setScrollbar = function() { var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth) }, c.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, c.prototype.measureScrollbar = function() { var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a); var b = a.offsetWidth - a.clientWidth; return this.$body[0].removeChild(a), b }; var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() { return a.fn.modal = d, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) { var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) { a.isDefaultPrevented() || f.one("hidden.bs.modal", function() { d.is(":visible") && d.trigger("focus") }) }), b.call(f, g, this) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function(a, b) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b) };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function(b, c, d) { if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!"); for (var e = this.options.trigger.split(" "), f = e.length; f--;) { var g = e[f]; if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) { var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this)) } }
        this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.getOptions = function(b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, c.prototype.getDelegateOptions = function() { var b = {},
            c = this.getDefaults(); return this._options && a.each(this._options, function(a, d) { c[a] != d && (b[a] = d) }), b }, c.prototype.enter = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() { "in" == c.hoverState && c.show() }, c.options.delay.show)) : c.show()) }, c.prototype.isInStateTrue = function() { for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1 }, c.prototype.leave = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() { "out" == c.hoverState && c.hide() }, c.options.delay.hide)) : c.hide()) }, c.prototype.show = function() { var b = a.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(b); var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (b.isDefaultPrevented() || !d) return; var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade"); var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type); var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight; if (j) { var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h) } var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h); var q = function() { var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e) };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q() } }, c.prototype.applyPlacement = function(b, c) { var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function(a) { d.css({ top: Math.round(a.top), left: Math.round(a.left) }) } }, b), 0), d.addClass("in"); var i = d[0].offsetWidth,
            j = d[0].offsetHeight; "top" == c && j != f && (b.top = b.top + f - j); var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top; var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l) }, c.prototype.replaceArrow = function(a, b, c) { this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "") }, c.prototype.setContent = function() { var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right") }, c.prototype.hide = function(b) {
        function d() { "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b() } var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type); return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this) }, c.prototype.fixTitle = function() { var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "") }, c.prototype.hasContent = function() { return this.getTitle() }, c.prototype.getPosition = function(b) { b = b || this.$element; var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top })); var f = d ? { top: 0, left: 0 } : b.offset(),
            g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
            h = d ? { width: a(window).width(), height: a(window).height() } : null; return a.extend({}, e, g, h, f) }, c.prototype.getCalculatedOffset = function(a, b, c, d) { return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) { var e = { top: 0, left: 0 }; if (!this.$viewport) return e; var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport); if (/right|left/.test(a)) { var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i) } else { var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k) } return e }, c.prototype.getTitle = function() { var a, b = this.$element,
            c = this.options; return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title) }, c.prototype.getUID = function(a) { do a += ~~(1e6 * Math.random()); while (document.getElementById(a)); return a }, c.prototype.tip = function() { if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, c.prototype.enable = function() { this.enabled = !0 }, c.prototype.disable = function() { this.enabled = !1 }, c.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, c.prototype.toggle = function(b) { var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c) }, c.prototype.destroy = function() { var a = this;
        clearTimeout(this.timeout), this.hide(function() { a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null }) }; var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() { return a.fn.tooltip = d, this } }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function(a, b) { this.init("popover", a, b) }; if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.setContent = function() { var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide() }, c.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, c.prototype.getContent = function() { var a = this.$element,
            b = this.options; return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content) }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") }; var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() { return a.fn.popover = d, this } }(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null,
            this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) { return this.each(function() { var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]() }) }
    b.VERSION = "3.3.5", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, b.prototype.refresh = function() { var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() { var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e); return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null }).sort(function(a, b) { return a[0] - b[0] }).each(function() { b.offsets.push(this[0]), b.targets.push(this[1]) }) }, b.prototype.process = function() { var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget; if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a); if (g && b < e[0]) return this.activeTarget = null, this.clear(); for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]) }, b.prototype.activate = function(b) { this.activeTarget = b, this.clear(); var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy") }, b.prototype.clear = function() { a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() { return a.fn.scrollspy = d, this }, a(window).on("load.bs.scrollspy.data-api", function() { a('[data-spy="scroll"]').each(function() { var b = a(this);
            c.call(b, b.data()) }) })
}(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]() }) } var c = function(b) { this.element = a(b) };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function() { var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target"); if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) { var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                g = a.Event("show.bs.tab", { relatedTarget: e[0] }); if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) { var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() { e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] }) }) } } }, c.prototype.activate = function(b, d, e) {
        function f() { g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e() } var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in") }; var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() { return a.fn.tab = d, this }; var e = function(c) { c.preventDefault(), b.call(a(this), "show") };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]() }) } var c = function(b, d) { this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
    c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function(a, b, c, d) { var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height(); if (null != c && "top" == this.affixed) return c > e && "top"; if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(a - d >= e + g) && "bottom"; var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b; return null != c && c >= e ? "top" : null != d && i + j >= a - d && "bottom" }, c.prototype.getPinnedOffset = function() { if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix"); var a = this.$target.scrollTop(),
            b = this.$element.offset(); return this.pinnedOffset = b.top - a }, c.prototype.checkPositionWithEventLoop = function() { setTimeout(a.proxy(this.checkPosition, this), 1) }, c.prototype.checkPosition = function() { if (this.$element.is(":visible")) { var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height()); "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element)); var h = this.getState(g, b, e, f); if (this.affixed != h) { null != this.unpin && this.$element.css("top", ""); var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix"); if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix") } "bottom" == h && this.$element.offset({ top: g - b - f }) } }; var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() { return a.fn.affix = d, this }, a(window).on("load", function() { a('[data-spy="affix"]').each(function() { var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d) }) }) }(jQuery), ! function(a, b) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", b) : "object" == typeof module && module.exports ? module.exports = b() : a.EvEmitter = b() }(this, function() {
    function a() {} var b = a.prototype; return b.on = function(a, b) { if (a && b) { var c = this._events = this._events || {},
                d = c[a] = c[a] || []; return -1 == d.indexOf(b) && d.push(b), this } }, b.once = function(a, b) { if (a && b) { this.on(a, b); var c = this._onceEvents = this._onceEvents || {},
                d = c[a] = c[a] || []; return d[b] = !0, this } }, b.off = function(a, b) { var c = this._events && this._events[a]; if (c && c.length) { var d = c.indexOf(b); return -1 != d && c.splice(d, 1), this } }, b.emitEvent = function(a, b) { var c = this._events && this._events[a]; if (c && c.length) { var d = 0,
                e = c[d];
            b = b || []; for (var f = this._onceEvents && this._onceEvents[a]; e;) { var g = f && f[e];
                g && (this.off(a, e), delete f[e]), e.apply(this, b), d += g ? 0 : 1, e = c[d] } return this } }, a }),
function(a, b) { "use strict"; "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(c) { return b(a, c) }) : "object" == typeof module && module.exports ? module.exports = b(a, require("ev-emitter")) : a.imagesLoaded = b(a, a.EvEmitter) }(window, function(a, b) {
    function c(a, b) { for (var c in b) a[c] = b[c]; return a }

    function d(a) { var b = []; if (Array.isArray(a)) b = a;
        else if ("number" == typeof a.length)
            for (var c = 0; c < a.length; c++) b.push(a[c]);
        else b.push(a); return b }

    function e(a, b, f) { return this instanceof e ? ("string" == typeof a && (a = document.querySelectorAll(a)), this.elements = d(a), this.options = c({}, this.options), "function" == typeof b ? f = b : c(this.options, b), f && this.on("always", f), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function() { this.check() }.bind(this))) : new e(a, b, f) }

    function f(a) { this.img = a }

    function g(a, b) { this.url = a, this.element = b, this.img = new Image } var h = a.jQuery,
        i = a.console;
    e.prototype = Object.create(b.prototype), e.prototype.options = {}, e.prototype.getImages = function() { this.images = [], this.elements.forEach(this.addElementImages, this) }, e.prototype.addElementImages = function(a) { "IMG" == a.nodeName && this.addImage(a), this.options.background === !0 && this.addElementBackgroundImages(a); var b = a.nodeType; if (b && j[b]) { for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) { var e = c[d];
                this.addImage(e) } if ("string" == typeof this.options.background) { var f = a.querySelectorAll(this.options.background); for (d = 0; d < f.length; d++) { var g = f[d];
                    this.addElementBackgroundImages(g) } } } }; var j = { 1: !0, 9: !0, 11: !0 }; return e.prototype.addElementBackgroundImages = function(a) { var b = getComputedStyle(a); if (b)
            for (var c = /url\((['"])?(.*?)\1\)/gi, d = c.exec(b.backgroundImage); null !== d;) { var e = d && d[2];
                e && this.addBackground(e, a), d = c.exec(b.backgroundImage) } }, e.prototype.addImage = function(a) { var b = new f(a);
        this.images.push(b) }, e.prototype.addBackground = function(a, b) { var c = new g(a, b);
        this.images.push(c) }, e.prototype.check = function() {
        function a(a, c, d) { setTimeout(function() { b.progress(a, c, d) }) } var b = this; return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(b) { b.once("progress", a), b.check() }) : void this.complete() }, e.prototype.progress = function(a, b, c) { this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emitEvent("progress", [this, a, b]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + c, a, b) }, e.prototype.complete = function() { var a = this.hasAnyBroken ? "fail" : "done"; if (this.isComplete = !0, this.emitEvent(a, [this]), this.emitEvent("always", [this]), this.jqDeferred) { var b = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[b](this) } }, f.prototype = Object.create(b.prototype), f.prototype.check = function() { var a = this.getIsImageComplete(); return a ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src)) }, f.prototype.getIsImageComplete = function() { return this.img.complete && void 0 !== this.img.naturalWidth }, f.prototype.confirm = function(a, b) { this.isLoaded = a, this.emitEvent("progress", [this, this.img, b]) }, f.prototype.handleEvent = function(a) { var b = "on" + a.type;
        this[b] && this[b](a) }, f.prototype.onload = function() { this.confirm(!0, "onload"), this.unbindEvents() }, f.prototype.onerror = function() { this.confirm(!1, "onerror"), this.unbindEvents() }, f.prototype.unbindEvents = function() { this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, g.prototype = Object.create(f.prototype), g.prototype.check = function() { this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url; var a = this.getIsImageComplete();
        a && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents()) }, g.prototype.unbindEvents = function() { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, g.prototype.confirm = function(a, b) { this.isLoaded = a, this.emitEvent("progress", [this, this.element, b]) }, e.makeJQueryPlugin = function(b) { b = b || a.jQuery, b && (h = b, h.fn.imagesLoaded = function(a, b) { var c = new e(this, a, b); return c.jqDeferred.promise(h(this)) }) }, e.makeJQueryPlugin(), e }),
function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function(a) {
    function c(a, b) { return a.toFixed(b.decimals) } var b = function(c, d) { this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, this.dataOptions(), d), this.init() };
    b.DEFAULTS = { from: 0, to: 0, speed: 1e3, refreshInterval: 100, decimals: 0, formatter: c, onUpdate: null, onComplete: null }, b.prototype.init = function() { this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops }, b.prototype.dataOptions = function() { var a = { from: this.$element.data("from"), to: this.$element.data("to"), speed: this.$element.data("speed"), refreshInterval: this.$element.data("refresh-interval"), decimals: this.$element.data("decimals") },
            b = Object.keys(a); for (var c in b) { var d = b[c]; "undefined" == typeof a[d] && delete a[d] } return a }, b.prototype.update = function() { this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value)) }, b.prototype.render = function() { var a = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(a) }, b.prototype.restart = function() { this.stop(), this.init(), this.start() }, b.prototype.start = function() { this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval) }, b.prototype.stop = function() { this.interval && clearInterval(this.interval) }, b.prototype.toggle = function() { this.interval ? this.stop() : this.start() }, a.fn.countTo = function(c) { return this.each(function() { var d = a(this),
                e = d.data("countTo"),
                f = !e || "object" == typeof c,
                g = "object" == typeof c ? c : {},
                h = "string" == typeof c ? c : "start";
            f && (e && e.stop(), d.data("countTo", e = new b(this, g))), e[h].call(e) }) } }),
function(a) {
    function b(b, c, d, e) { var f = b.text().split(c),
            g = "";
        f.length && (a(f).each(function(a, b) { g += '<span class="' + d + (a + 1) + '">' + b + "</span>" + e }), b.empty().append(g)) } var c = { init: function() { return this.each(function() { b(a(this), "", "char", "") }) }, words: function() { return this.each(function() { b(a(this), " ", "word", " ") }) }, lines: function() { return this.each(function() { var c = "eefec303079ad17405c889e092e105b0";
                b(a(this).children("br").replaceWith(c).end(), c, "line", "") }) } };
    a.fn.lettering = function(b) { return b && c[b] ? c[b].apply(this, [].slice.call(arguments, 1)) : "letters" !== b && b ? (a.error("Method " + b + " does not exist on jQuery.lettering"), this) : c.init.apply(this, [].slice.call(arguments, 0)) } }(jQuery),
function(a) { "use strict";

    function b(b) { return /In/.test(b) || a.inArray(b, a.fn.textillate.defaults.inEffects) >= 0 }

    function c(b) { return /Out/.test(b) || a.inArray(b, a.fn.textillate.defaults.outEffects) >= 0 }

    function d(a) { return "true" !== a && "false" !== a ? a : "true" === a }

    function e(b) { var c = b.attributes || [],
            e = {}; return c.length ? (a.each(c, function(a, b) { var c = b.nodeName.replace(/delayscale/, "delayScale"); /^data-in-*/.test(c) ? (e.in = e.in || {}, e.in[c.replace(/data-in-/, "")] = d(b.nodeValue)) : /^data-out-*/.test(c) ? (e.out = e.out || {}, e.out[c.replace(/data-out-/, "")] = d(b.nodeValue)) : /^data-*/.test(c) && (e[c.replace(/data-/, "")] = d(b.nodeValue)) }), e) : e }

    function f(a) { for (var b, c, d = a.length; d; b = parseInt(Math.random() * d), c = a[--d], a[d] = a[b], a[b] = c); return a }

    function g(a, b, c) { a.addClass("animated " + b).css("visibility", "visible").show(), a.one("animationend webkitAnimationEnd oAnimationEnd", function() { a.removeClass("animated " + b), c && c() }) }

    function h(d, e, h) { var j = d.length; return j ? (e.shuffle && (d = f(d)), e.reverse && (d = d.toArray().reverse()), void a.each(d, function(d, f) {
            function k() { b(e.effect) ? i.css("visibility", "visible") : c(e.effect) && i.css("visibility", "hidden"), j -= 1, !j && h && h() } var i = a(f),
                l = e.sync ? e.delay : e.delay * d * e.delayScale;
            i.text() ? setTimeout(function() { g(i, e.effect, k) }, l) : k() })) : void(h && h()) } var i = function(d, f) { var g = this,
            i = a(d);
        g.init = function() { g.$texts = i.find(f.selector), g.$texts.length || (g.$texts = a('<ul class="texts"><li>' + i.html() + "</li></ul>"), i.html(g.$texts)), g.$texts.hide(), g.$current = a("<span>").html(g.$texts.find(":first-child").html()).prependTo(i), b(f.in.effect) ? g.$current.css("visibility", "hidden") : c(f.out.effect) && g.$current.css("visibility", "visible"), g.setOptions(f), g.timeoutRun = null, setTimeout(function() { g.options.autoStart && g.start() }, g.options.initialDelay) }, g.setOptions = function(a) { g.options = a }, g.triggerEvent = function(b) { var c = a.Event(b + ".tlt"); return i.trigger(c, g), c }, g.in = function(d, f) { d = d || 0; var k, i = g.$texts.find(":nth-child(" + ((d || 0) + 1) + ")"),
                j = a.extend(!0, {}, g.options, i.length ? e(i[0]) : {});
            i.addClass("current"), g.triggerEvent("inAnimationBegin"), g.$current.html(i.html()).lettering("words"), "char" == g.options.type && g.$current.find('[class^="word"]').css({ display: "inline-block", "-webkit-transform": "translate3d(0,0,0)", "-moz-transform": "translate3d(0,0,0)", "-o-transform": "translate3d(0,0,0)", transform: "translate3d(0,0,0)" }).each(function() { a(this).lettering() }), k = g.$current.find('[class^="' + g.options.type + '"]').css("display", "inline-block"), b(j.in.effect) ? k.css("visibility", "hidden") : c(j.in.effect) && k.css("visibility", "visible"), g.currentIndex = d, h(k, j.in, function() { g.triggerEvent("inAnimationEnd"), j.in.callback && j.in.callback(), f && f(g) }) }, g.out = function(b) { var c = g.$texts.find(":nth-child(" + ((g.currentIndex || 0) + 1) + ")"),
                d = g.$current.find('[class^="' + g.options.type + '"]'),
                f = a.extend(!0, {}, g.options, c.length ? e(c[0]) : {});
            g.triggerEvent("outAnimationBegin"), h(d, f.out, function() { c.removeClass("current"), g.triggerEvent("outAnimationEnd"), f.out.callback && f.out.callback(), b && b(g) }) }, g.start = function(a) { setTimeout(function() { g.triggerEvent("start"),
                    function a(b) { g.in(b, function() { var c = g.$texts.children().length;
                            b += 1, !g.options.loop && b >= c ? (g.options.callback && g.options.callback(), g.triggerEvent("end")) : (b %= c, g.timeoutRun = setTimeout(function() { g.out(function() { a(b) }) }, g.options.minDisplayTime)) }) }(a || 0) }, g.options.initialDelay) }, g.stop = function() { g.timeoutRun && (clearInterval(g.timeoutRun), g.timeoutRun = null) }, g.init() };
    a.fn.textillate = function(b, c) { return this.each(function() { var d = a(this),
                f = d.data("textillate"),
                g = a.extend(!0, {}, a.fn.textillate.defaults, e(this), "object" == typeof b && b);
            f ? "string" == typeof b ? f[b].apply(f, [].concat(c)) : f.setOptions.call(f, g) : d.data("textillate", f = new i(this, g)) }) }, a.fn.textillate.defaults = { selector: ".texts", loop: !1, minDisplayTime: 2e3, initialDelay: 0, in: { effect: "fadeInLeftBig", delayScale: 1.5, delay: 50, sync: !1, reverse: !1, shuffle: !1, callback: function() {} }, out: { effect: "hinge", delayScale: 1.5, delay: 50, sync: !1, reverse: !1, shuffle: !1, callback: function() {} }, autoStart: !0, inEffects: [], outEffects: ["hinge"], callback: function() {}, type: "char" } }(jQuery),
function(a) { var b = { total: 10, ofTop: 0, ofLeft: 0, on: "document.body", twinkle: .2, minPixel: 1, maxPixel: 2, color: "#fff", namespace: "jqueryFireFly", _paused: !1 };
    a.firefly = function(c) { if (a.firefly.settings = a.extend({}, b, c), a.firefly.eleHeight = a(a.firefly.settings.on).height(), a.firefly.eleWidth = a(a.firefly.settings.on).width(), "document.body" !== a.firefly.settings.on) { var d = a(a.firefly.settings.on).offset();
            a.firefly.offsetTop = d.top, a.firefly.offsetLeft = d.left, a.firefly.eleHeight = a(a.firefly.settings.on).height(), a.firefly.eleWidth = a(a.firefly.settings.on).width() } else a.firefly.offsetTop = 0, a.firefly.offsetLeft = 0, a.firefly.eleHeight = a(document.body).height(), a.firefly.eleWidth = a(document.body).width(); for (i = 0; i < a.firefly.settings.total; i++) { var e = a.firefly.randomPixel(a.firefly.settings.minPixel, a.firefly.settings.maxPixel),
                f = a.firefly.create(e);
            a.firefly.fly(f) } return a.firefly.sparks = a(a.firefly.settings.on).children("." + a.firefly.settings.namespace), this.pause = function(b) { a.firefly.settings._paused = !0, b && a.each(a.firefly.sparks, function(b, c) { a(c).stop(!0) }) }, this.resume = function() { a.firefly.settings._paused = !1, a.each(a.firefly.sparks, function(b, c) { a.firefly.fly(c) }) }, this }, a.firefly.create = function(b) { return spark = a("<div>").hide(), spark.addClass(a.firefly.settings.namespace), a.firefly.settings._onSparkID++, "document.body" === a.firefly.settings.on ? a(document.body).append(spark) : a(a.firefly.settings.on).append(spark), spark.css({ position: "absolute", width: b, height: b, "background-color": a.firefly.settings.color, "z-index": a.firefly.random(20), top: a.firefly.offsetTop + a.firefly.random(a.firefly.eleHeight - 50), left: a.firefly.offsetLeft + a.firefly.random(a.firefly.eleWidth - 50) }).show() }, a.firefly.fly = function(b) { a(b).animate({ top: a.firefly.offsetTop + a.firefly.random(a.firefly.eleHeight - 50), left: a.firefly.offsetLeft + a.firefly.random(a.firefly.eleWidth - 50), opacity: a.firefly.opacity(a.firefly.settings.twinkle) }, { duration: 2e3 * (a.firefly.random(10) + 5), done: function() { a.firefly.settings._paused || a.firefly.fly(b) } }) }, a.firefly.randomPixel = function(a, b) { return Math.floor(Math.random() * (b - a + 1) + a) }, a.firefly.random = function(a) { return Math.ceil(Math.random() * a) - 1 }, a.firefly.opacity = function(a) { return op = Math.random(), op < a ? 0 : 1 } }(jQuery),
function(a) { "use strict"; var b, c, d, e, f, g, h, i, j, k;
    b = window.device, window.device = {}, d = window.document.documentElement, k = window.navigator.userAgent.toLowerCase(), device.ios = function() { return device.iphone() || device.ipod() || device.ipad() }, device.iphone = function() { return e("iphone") }, device.ipod = function() { return e("ipod") }, device.ipad = function() { return e("ipad") }, device.android = function() { return e("android") }, device.androidPhone = function() { return device.android() && e("mobile") }, device.androidTablet = function() { return device.android() && !e("mobile") }, device.blackberry = function() { return e("blackberry") || e("bb10") || e("rim") }, device.blackberryPhone = function() { return device.blackberry() && !e("tablet") }, device.blackberryTablet = function() { return device.blackberry() && e("tablet") }, device.windows = function() { return e("windows") }, device.windowsPhone = function() { return device.windows() && e("phone") }, device.windowsTablet = function() { return device.windows() && e("touch") }, device.fxos = function() { return (e("(mobile;") || e("(tablet;")) && e("; rv:") }, device.fxosPhone = function() { return device.fxos() && e("mobile") }, device.fxosTablet = function() { return device.fxos() && e("tablet") }, device.meego = function() { return e("meego") }, device.cordova = function() { return window.cordova && "file:" === location.protocol }, device.mobile = function() { return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego() }, device.tablet = function() { return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet() }, device.desktop = function() { return !device.tablet() && !device.mobile() }, device.portrait = function() { return window.innerHeight / window.innerWidth > 1 }, device.landscape = function() { return window.innerHeight / window.innerWidth < 1 }, device.noConflict = function() { return window.device = b, this }, e = function(a) { return k.indexOf(a) !== -1 }, g = function(a) { var b; return b = new RegExp(a, "i"), d.className.match(b) }, c = function(a) { if (!g(a)) return d.className += " " + a }, i = function(a) { if (g(a)) return d.className = d.className.replace(a, "") }, device.ios() ? device.ipad() ? c("ios ipad tablet") : device.iphone() ? c("ios iphone mobile") : device.ipod() && c("ios ipod mobile") : c(device.android() ? device.androidTablet() ? "android tablet" : "android mobile" : device.blackberry() ? device.blackberryTablet() ? "blackberry tablet" : "blackberry mobile" : device.windows() ? device.windowsTablet() ? "windows tablet" : device.windowsPhone() ? "windows mobile" : "desktop" : device.fxos() ? device.fxosTablet() ? "fxos tablet" : "fxos mobile" : device.meego() ? "meego mobile" : "desktop"), device.cordova() && c("cordova"), f = function() { return device.landscape() ? (i("portrait"), c("landscape")) : (i("landscape"), c("portrait")) }, j = "onorientationchange" in window, h = j ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(h, f, !1) : window.attachEvent ? window.attachEvent(h, f) : window[h] = f, f() }.call(this),
    function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery) }(function(a) {
        function b(a) { for (var b, c; a.length && a[0] !== document;) { if (b = a.css("position"), ("absolute" === b || "relative" === b || "fixed" === b) && (c = parseInt(a.css("zIndex"), 10), !isNaN(c) && 0 !== c)) return c;
                a = a.parent() } return 0 }

        function c() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, a.extend(this._defaults, this.regional[""]), this.regional.en = a.extend(!0, {}, this.regional[""]), this.regional["en-US"] = a.extend(!0, {}, this.regional.en), this.dpDiv = d(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) }

        function d(b) { var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return b.on("mouseout", c, function() { a(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover") }).on("mouseover", c, e) }

        function e() { a.datepicker._isDisabledDatepicker(g.inline ? g.dpDiv.parent()[0] : g.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover")) }

        function f(b, c) { a.extend(b, c); for (var d in c) null == c[d] && (b[d] = c[d]); return b }
        a.ui = a.ui || {}, a.ui.version = "1.12.0-rc.1", a.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, a.extend(a.ui, { datepicker: { version: "1.12.0-rc.1" } });
        var g;
        a.extend(c.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() { return this.dpDiv },
            setDefaults: function(a) { return f(this._defaults, a || {}), this },
            _attachDatepicker: function(b, c) { var d, e, f;
                d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f) },
            _newInst: function(b, c) { var e = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: e, input: b, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: c, dpDiv: c ? d(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } },
            _connectDatepicker: function(b, c) { var d = a(b);
                c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(c), a.data(b, "datepicker", c), c.settings.disabled && this._disableDatepicker(b)) },
            _attachments: function(b, c) { var d, e, f, g = this._get(c, "appendText"),
                    h = this._get(c, "isRTL");
                c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[h ? "before" : "after"](c.append)), b.off("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.on("focus", this._showDatepicker), ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({ src: f, alt: e, title: e }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({ src: f, alt: e, title: e }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.on("click", function() { return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1 })) },
            _autoSize: function(a) { if (this._get(a, "autoSize") && !a.inline) { var b, c, d, e, f = new Date(2009, 11, 20),
                        g = this._get(a, "dateFormat");
                    g.match(/[DM]/) && (b = function(a) { for (c = 0, d = 0, e = 0; a.length > e; e++) a[e].length > c && (c = a[e].length, d = e); return d }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length) } },
            _inlineDatepicker: function(b, c) { var d = a(b);
                d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block")) },
            _dialogDatepicker: function(b, c, d, e, g) { var h, i, j, k, l, m = this._dialogInst; return m || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), a("body").append(this._dialogInput), m = this._dialogInst = this._newInst(this._dialogInput, !1), m.settings = {}, a.data(this._dialogInput[0], "datepicker", m)), f(m.settings, e || {}), c = c && c.constructor === Date ? this._formatDate(m, c) : c, this._dialogInput.val(c), this._pos = g ? g.length ? g : [g.pageX, g.pageY] : null, this._pos || (i = document.documentElement.clientWidth, j = document.documentElement.clientHeight, k = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [i / 2 - 100 + k, j / 2 - 150 + l]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), m.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], "datepicker", m), this },
            _destroyDatepicker: function(b) { var c, d = a(b),
                    e = a.data(b, "datepicker");
                d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, "datepicker"), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty(), g === e && (g = null)) },
            _enableDatepicker: function(b) {
                var c, d, e = a(b),
                    f = a.data(b, "datepicker");
                e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
                    this._disabledInputs = a.map(this._disabledInputs, function(a) { return a === b ? null : a }))
            },
            _disableDatepicker: function(b) { var c, d, e = a(b),
                    f = a.data(b, "datepicker");
                e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function(a) { return a === b ? null : a }), this._disabledInputs[this._disabledInputs.length] = b) },
            _isDisabledDatepicker: function(a) { if (!a) return !1; for (var b = 0; this._disabledInputs.length > b; b++)
                    if (this._disabledInputs[b] === a) return !0;
                return !1 },
            _getInst: function(b) { try { return a.data(b, "datepicker") } catch (a) { throw "Missing instance data for this datepicker" } },
            _optionDatepicker: function(b, c, d) { var e, g, h, i, j = this._getInst(b); return 2 === arguments.length && "string" == typeof c ? "defaults" === c ? a.extend({}, a.datepicker._defaults) : j ? "all" === c ? a.extend({}, j.settings) : this._get(j, c) : null : (e = c || {}, "string" == typeof c && (e = {}, e[c] = d), void(j && (this._curInst === j && this._hideDatepicker(), g = this._getDateDatepicker(b, !0), h = this._getMinMaxDate(j, "min"), i = this._getMinMaxDate(j, "max"), f(j.settings, e), null !== h && void 0 !== e.dateFormat && void 0 === e.minDate && (j.settings.minDate = this._formatDate(j, h)), null !== i && void 0 !== e.dateFormat && void 0 === e.maxDate && (j.settings.maxDate = this._formatDate(j, i)), "disabled" in e && (e.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b)), this._attachments(a(b), j), this._autoSize(j), this._setDate(j, g), this._updateAlternate(j), this._updateDatepicker(j)))) },
            _changeDatepicker: function(a, b, c) { this._optionDatepicker(a, b, c) },
            _refreshDatepicker: function(a) { var b = this._getInst(a);
                b && this._updateDatepicker(b) },
            _setDateDatepicker: function(a, b) { var c = this._getInst(a);
                c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c)) },
            _getDateDatepicker: function(a, b) { var c = this._getInst(a); return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null },
            _doKeyDown: function(b) { var c, d, e, f = a.datepicker._getInst(b.target),
                    g = !0,
                    h = f.dpDiv.is(".ui-datepicker-rtl"); if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
                    case 9:
                        a.datepicker._hideDatepicker(), g = !1; break;
                    case 13:
                        return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
                    case 27:
                        a.datepicker._hideDatepicker(); break;
                    case 33:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M"); break;
                    case 34:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M"); break;
                    case 35:
                        (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey; break;
                    case 36:
                        (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey; break;
                    case 37:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M"); break;
                    case 38:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey; break;
                    case 39:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M"); break;
                    case 40:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey; break;
                    default:
                        g = !1 } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
                g && (b.preventDefault(), b.stopPropagation()) },
            _doKeyPress: function(b) { var c, d, e = a.datepicker._getInst(b.target); return a.datepicker._get(e, "constrainInput") ? (c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || c.indexOf(d) > -1) : void 0 },
            _doKeyUp: function(b) { var c, d = a.datepicker._getInst(b.target); if (d.input.val() !== d.lastVal) try { c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d)) } catch (a) {}
                return !0 },
            _showDatepicker: function(c) { if (c = c.target || c, "input" !== c.nodeName.toLowerCase() && (c = a("input", c.parentNode)[0]), !a.datepicker._isDisabledDatepicker(c) && a.datepicker._lastInput !== c) { var d, e, g, h, i, j, k;
                    d = a.datepicker._getInst(c), a.datepicker._curInst && a.datepicker._curInst !== d && (a.datepicker._curInst.dpDiv.stop(!0, !0), d && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), e = a.datepicker._get(d, "beforeShow"), g = e ? e.apply(c, [c, d]) : {}, g !== !1 && (f(d.settings, g), d.lastVal = null, a.datepicker._lastInput = c, a.datepicker._setDateFromField(d), a.datepicker._inDialog && (c.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(c), a.datepicker._pos[1] += c.offsetHeight), h = !1, a(c).parents().each(function() { return h |= "fixed" === a(this).css("position"), !h }), i = { left: a.datepicker._pos[0], top: a.datepicker._pos[1] }, a.datepicker._pos = null, d.dpDiv.empty(), d.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), a.datepicker._updateDatepicker(d), i = a.datepicker._checkOffset(d, i, h), d.dpDiv.css({ position: a.datepicker._inDialog && a.blockUI ? "static" : h ? "fixed" : "absolute", display: "none", left: i.left + "px", top: i.top + "px" }), d.inline || (j = a.datepicker._get(d, "showAnim"), k = a.datepicker._get(d, "duration"), d.dpDiv.css("z-index", b(a(c)) + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[j] ? d.dpDiv.show(j, a.datepicker._get(d, "showOptions"), k) : d.dpDiv[j || "show"](j ? k : null), a.datepicker._shouldFocusInput(d) && d.input.trigger("focus"), a.datepicker._curInst = d)) } },
            _updateDatepicker: function(b) { this.maxRows = 4, g = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b); var c, d = this._getNumberOfMonths(b),
                    f = d[1],
                    h = 17,
                    i = b.dpDiv.find("." + this._dayOverClass + " a");
                i.length > 0 && e.apply(i.get(0)), b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), f > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", h * f + "em"), b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.trigger("focus"), b.yearshtml && (c = b.yearshtml, setTimeout(function() { c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), c = b.yearshtml = null }, 0)) },
            _shouldFocusInput: function(a) { return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus") },
            _checkOffset: function(b, c, d) { var e = b.dpDiv.outerWidth(),
                    f = b.dpDiv.outerHeight(),
                    g = b.input ? b.input.outerWidth() : 0,
                    h = b.input ? b.input.outerHeight() : 0,
                    i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()),
                    j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop()); return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c },
            _findPos: function(b) { for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) b = b[e ? "previousSibling" : "nextSibling"]; return c = a(b).offset(), [c.left, c.top] },
            _hideDatepicker: function(b) { var c, d, e, f, g = this._curInst;!g || b && g !== a.data(b, "datepicker") || this._datepickerShowing && (c = this._get(g, "showAnim"), d = this._get(g, "duration"), e = function() { a.datepicker._tidyDialog(g) }, a.effects && (a.effects.effect[c] || a.effects[c]) ? g.dpDiv.hide(c, a.datepicker._get(g, "showOptions"), d, e) : g.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(g, "onClose"), f && f.apply(g.input ? g.input[0] : null, [g.input ? g.input.val() : "", g]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1) },
            _tidyDialog: function(a) { a.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar") },
            _checkExternalClick: function(b) { if (a.datepicker._curInst) { var c = a(b.target),
                        d = a.datepicker._getInst(c[0]);
                    (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker() } },
            _adjustDate: function(b, c, d) { var e = a(b),
                    f = this._getInst(e[0]);
                this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f)) },
            _gotoToday: function(b) { var c, d = a(b),
                    e = this._getInst(d[0]);
                this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), this._notifyChange(e), this._adjustDate(d) },
            _selectMonthYear: function(b, c, d) { var e = a(b),
                    f = this._getInst(e[0]);
                f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(f), this._adjustDate(e) },
            _selectDay: function(b, c, d, e) { var f, g = a(b);
                a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear))) },
            _clearDate: function(b) { var c = a(b);
                this._selectDate(c, "") },
            _selectDate: function(b, c) { var d, e = a(b),
                    f = this._getInst(e[0]);
                c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [c, f]) : f.input && f.input.trigger("change"), f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.trigger("focus"), this._lastInput = null) },
            _updateAlternate: function(b) { var c, d, e, f = this._get(b, "altField");
                f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).val(e)) },
            noWeekends: function(a) { var b = a.getDay(); return [b > 0 && 6 > b, ""] },
            iso8601Week: function(a) { var b, c = new Date(a.getTime()); return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1 },
            parseDate: function(b, c, d) { if (null == b || null == c) throw "Invalid arguments"; if (c = "object" == typeof c ? "" + c : c + "", "" === c) return null; var e, f, g, h, i = 0,
                    j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    k = "string" != typeof j ? j : (new Date).getFullYear() % 100 + parseInt(j, 10),
                    l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort,
                    m = (d ? d.dayNames : null) || this._defaults.dayNames,
                    n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort,
                    o = (d ? d.monthNames : null) || this._defaults.monthNames,
                    p = -1,
                    q = -1,
                    r = -1,
                    s = -1,
                    t = !1,
                    u = function(a) { var c = b.length > e + 1 && b.charAt(e + 1) === a; return c && e++, c },
                    v = function(a) { var b = u(a),
                            d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2,
                            e = "y" === a ? d : 1,
                            f = RegExp("^\\d{" + e + "," + d + "}"),
                            g = c.substring(i).match(f); if (!g) throw "Missing number at position " + i; return i += g[0].length, parseInt(g[0], 10) },
                    w = function(b, d, e) { var f = -1,
                            g = a.map(u(b) ? e : d, function(a, b) { return [
                                    [b, a]
                                ] }).sort(function(a, b) { return -(a[1].length - b[1].length) }); if (a.each(g, function(a, b) { var d = b[1]; return c.substr(i, d.length).toLowerCase() === d.toLowerCase() ? (f = b[0], i += d.length, !1) : void 0 }), -1 !== f) return f + 1; throw "Unknown name at position " + i },
                    x = function() { if (c.charAt(i) !== b.charAt(e)) throw "Unexpected literal at position " + i;
                        i++ }; for (e = 0; b.length > e; e++)
                    if (t) "'" !== b.charAt(e) || u("'") ? x() : t = !1;
                    else switch (b.charAt(e)) {
                        case "d":
                            r = v("d"); break;
                        case "D":
                            w("D", l, m); break;
                        case "o":
                            s = v("o"); break;
                        case "m":
                            q = v("m"); break;
                        case "M":
                            q = w("M", n, o); break;
                        case "y":
                            p = v("y"); break;
                        case "@":
                            h = new Date(v("@")), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate(); break;
                        case "!":
                            h = new Date((v("!") - this._ticksTo1970) / 1e4), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate(); break;
                        case "'":
                            u("'") ? x() : t = !0; break;
                        default:
                            x() }
                    if (c.length > i && (g = c.substr(i), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g;
                if (-1 === p ? p = (new Date).getFullYear() : 100 > p && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (k >= p ? 0 : -100)), s > -1)
                    for (q = 1, r = s; f = this._getDaysInMonth(p, q - 1), !(f >= r);) q++, r -= f; if (h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r) throw "Invalid date"; return h },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
            formatDate: function(a, b, c) { if (!b) return ""; var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                    f = (c ? c.dayNames : null) || this._defaults.dayNames,
                    g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                    h = (c ? c.monthNames : null) || this._defaults.monthNames,
                    i = function(b) { var c = a.length > d + 1 && a.charAt(d + 1) === b; return c && d++, c },
                    j = function(a, b, c) { var d = "" + b; if (i(a))
                            for (; c > d.length;) d = "0" + d; return d },
                    k = function(a, b, c, d) { return i(a) ? d[b] : c[b] },
                    l = "",
                    m = !1; if (b)
                    for (d = 0; a.length > d; d++)
                        if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1;
                        else switch (a.charAt(d)) {
                            case "d":
                                l += j("d", b.getDate(), 2); break;
                            case "D":
                                l += k("D", b.getDay(), e, f); break;
                            case "o":
                                l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3); break;
                            case "m":
                                l += j("m", b.getMonth() + 1, 2); break;
                            case "M":
                                l += k("M", b.getMonth(), g, h); break;
                            case "y":
                                l += i("y") ? b.getFullYear() : (10 > b.getFullYear() % 100 ? "0" : "") + b.getFullYear() % 100; break;
                            case "@":
                                l += b.getTime(); break;
                            case "!":
                                l += 1e4 * b.getTime() + this._ticksTo1970; break;
                            case "'":
                                i("'") ? l += "'" : m = !0; break;
                            default:
                                l += a.charAt(d) }
                        return l },
            _possibleChars: function(a) { var b, c = "",
                    d = !1,
                    e = function(c) { var d = a.length > b + 1 && a.charAt(b + 1) === c; return d && b++, d }; for (b = 0; a.length > b; b++)
                    if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1;
                    else switch (a.charAt(b)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            c += "0123456789"; break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            e("'") ? c += "'" : d = !0; break;
                        default:
                            c += a.charAt(b) }
                    return c },
            _get: function(a, b) { return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b] },
            _setDateFromField: function(a, b) { if (a.input.val() !== a.lastVal) { var c = this._get(a, "dateFormat"),
                        d = a.lastVal = a.input ? a.input.val() : null,
                        e = this._getDefaultDate(a),
                        f = e,
                        g = this._getFormatConfig(a); try { f = this.parseDate(c, d, g) || e } catch (a) { d = b ? "" : d }
                    a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a) } },
            _getDefaultDate: function(a) { return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date)) },
            _determineDate: function(b, c, d) { var e = function(a) { var b = new Date; return b.setDate(b.getDate() + a), b },
                    f = function(c) { try { return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b)) } catch (a) {} for (var d = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, e = d.getFullYear(), f = d.getMonth(), g = d.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, i = h.exec(c); i;) { switch (i[2] || "d") {
                                case "d":
                                case "D":
                                    g += parseInt(i[1], 10); break;
                                case "w":
                                case "W":
                                    g += 7 * parseInt(i[1], 10); break;
                                case "m":
                                case "M":
                                    f += parseInt(i[1], 10), g = Math.min(g, a.datepicker._getDaysInMonth(e, f)); break;
                                case "y":
                                case "Y":
                                    e += parseInt(i[1], 10), g = Math.min(g, a.datepicker._getDaysInMonth(e, f)) }
                            i = h.exec(c) } return new Date(e, f, g) },
                    g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime()); return g = g && "Invalid Date" == "" + g ? d : g, g && (g.setHours(0), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g) },
            _daylightSavingAdjust: function(a) { return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null },
            _setDate: function(a, b, c) { var d = !b,
                    e = a.selectedMonth,
                    f = a.selectedYear,
                    g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
                a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a)) },
            _getDate: function(a) { var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay)); return b },
            _attachHandlers: function(b) { var c = this._get(b, "stepMonths"),
                    d = "#" + b.id.replace(/\\\\/g, "\\");
                b.dpDiv.find("[data-handler]").map(function() { var b = { prev: function() { a.datepicker._adjustDate(d, -c, "M") }, next: function() { a.datepicker._adjustDate(d, +c, "M") }, hide: function() { a.datepicker._hideDatepicker() }, today: function() { a.datepicker._gotoToday(d) }, selectDay: function() { return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function() { return a.datepicker._selectMonthYear(d, this, "M"), !1 }, selectYear: function() { return a.datepicker._selectMonthYear(d, this, "Y"), !1 } };
                    a(this).on(this.getAttribute("data-event"), b[this.getAttribute("data-handler")]) }) },
            _generateHTML: function(a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date,
                    P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
                    Q = this._get(a, "isRTL"),
                    R = this._get(a, "showButtonPanel"),
                    S = this._get(a, "hideIfNoPrevNext"),
                    T = this._get(a, "navigationAsDateFormat"),
                    U = this._getNumberOfMonths(a),
                    V = this._get(a, "showCurrentAtPos"),
                    W = this._get(a, "stepMonths"),
                    X = 1 !== U[0] || 1 !== U[1],
                    Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
                    Z = this._getMinMaxDate(a, "min"),
                    $ = this._getMinMaxDate(a, "max"),
                    _ = a.drawMonth - V,
                    aa = a.drawYear; if (0 > _ && (_ += 12, aa--), $)
                    for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(aa, _, 1)) > b;) _--, 0 > _ && (_ = 11, aa--); for (a.drawMonth = _, a.drawYear = aa, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(aa, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, aa, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(aa, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, aa, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; U[0] > w; w++) { for (x = "", this.maxRows = 4, y = 0; U[1] > y; y++) { if (z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay)), A = " ui-corner-all", B = "", X) { if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
                                case 0:
                                    B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left"); break;
                                case U[1] - 1:
                                    B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right"); break;
                                default:
                                    B += " ui-datepicker-group-middle", A = "" }
                            B += "'>" } for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, aa, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; 7 > v; v++) D = (v + k) % 7, C += "<th scope='col'" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>"; for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(aa, _), aa === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)), J = 0; H > J; J++) { for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; 7 > v; v++) L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                            B += K + "</tr>" }
                        _++, _ > 11 && (_ = 0, aa++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B }
                    u += x } return u += j, a._keyEvent = !1, u },
            _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) { var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"),
                    r = this._get(a, "changeYear"),
                    s = this._get(a, "showMonthAfterYear"),
                    t = "<div class='ui-datepicker-title'>",
                    u = ""; if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
                else { for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; 12 > k; k++)(!i || k >= d.getMonth()) && (!j || e.getMonth() >= k) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
                    u += "</select>" } if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)
                    if (a.yearshtml = "", f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>";
                    else { for (l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function(a) { var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10); return isNaN(b) ? m : b }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
                        a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null }
                return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>" },
            _adjustInstDate: function(a, b, c) { var d = a.drawYear + ("Y" === c ? b : 0),
                    e = a.drawMonth + ("M" === c ? b : 0),
                    f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0),
                    g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
                a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), ("M" === c || "Y" === c) && this._notifyChange(a) },
            _restrictMinMax: function(a, b) { var c = this._getMinMaxDate(a, "min"),
                    d = this._getMinMaxDate(a, "max"),
                    e = c && c > b ? c : b; return d && e > d ? d : e },
            _notifyChange: function(a) { var b = this._get(a, "onChangeMonthYear");
                b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a]) },
            _getNumberOfMonths: function(a) { var b = this._get(a, "numberOfMonths"); return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b },
            _getMinMaxDate: function(a, b) { return this._determineDate(a, this._get(a, b + "Date"), null) },
            _getDaysInMonth: function(a, b) { return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate() },
            _getFirstDayOfMonth: function(a, b) { return new Date(a, b, 1).getDay() },
            _canAdjustMonth: function(a, b, c, d) { var e = this._getNumberOfMonths(a),
                    f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1)); return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f) },
            _isInRange: function(a, b) { var c, d, e = this._getMinMaxDate(a, "min"),
                    f = this._getMinMaxDate(a, "max"),
                    g = null,
                    h = null,
                    i = this._get(a, "yearRange"); return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || h >= b.getFullYear()) },
            _getFormatConfig: function(a) { var b = this._get(a, "shortYearCutoff"); return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), { shortYearCutoff: b, dayNamesShort: this._get(a, "dayNamesShort"), dayNames: this._get(a, "dayNames"), monthNamesShort: this._get(a, "monthNamesShort"), monthNames: this._get(a, "monthNames") } },
            _formatDate: function(a, b, c, d) { b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear); var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay)); return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a)) }
        }), a.fn.datepicker = function(b) { if (!this.length) return this;
            a.datepicker.initialized || (a(document).on("mousedown", a.datepicker._checkExternalClick), a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv); var c = Array.prototype.slice.call(arguments, 1); return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function() { "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b) }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) }, a.datepicker = new c, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.12.0-rc.1", a.datepicker
    }), ! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery) }(function(a) {
        a.extend(a.fn, { validate: function(b) { if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")); var c = a.data(this[0], "validator"); return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) { c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0) }), this.on("submit.validate", function(b) {
                    function d() { var d, e; return !c.settings.submitHandler || (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e && e) } return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1) })), c) }, valid: function() { var b, c, d; return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() { b = c.element(this) && b, b || (d = d.concat(c.errorList)) }), c.errorList = d), b }, rules: function(b, c) { if (this.length) { var d, e, f, g, h, i, j = this[0]; if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                        case "add":
                            a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages)); break;
                        case "remove":
                            return c ? (i = {}, a.each(c.split(/\s/), function(b, c) { i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required") }), i) : (delete e[j.name], f) }
                    return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({ required: h }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, { remote: h })), g } } }), a.extend(a.expr[":"], { blank: function(b) { return !a.trim("" + a(b).val()) }, filled: function(b) { var c = a(b).val(); return null !== c && !!a.trim("" + c) }, unchecked: function(b) { return !a(b).prop("checked") } }), a.validator = function(b, c) { this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init() }, a.validator.format = function(b, c) { return 1 === arguments.length ? function() { var c = a.makeArray(arguments); return c.unshift(b), a.validator.format.apply(this, c) } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) { b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() { return c }) }), b) }, a.extend(a.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: a([]),
                errorLabelContainer: a([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(a) { this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a))) },
                onfocusout: function(a) { this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a) },
                onkeyup: function(b, c) { var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b.name in this.invalid) && this.element(b) },
                onclick: function(a) { a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode) },
                highlight: function(b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
                },
                unhighlight: function(b, c, d) { "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d) }
            },
            setDefaults: function(b) { a.extend(a.validator.defaults, b) },
            messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date ( ISO ).", number: "Please enter a valid number.", digits: "Please enter only digits.", equalTo: "Please enter the same value again.", maxlength: a.validator.format("Please enter no more than {0} characters."), minlength: a.validator.format("Please enter at least {0} characters."), rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."), range: a.validator.format("Please enter a value between {0} and {1}."), max: a.validator.format("Please enter a value less than or equal to {0}."), min: a.validator.format("Please enter a value greater than or equal to {0}."), step: a.validator.format("Please enter a multiple of {0}.") },
            autoCreateRanges: !1,
            prototype: { init: function() {
                    function b(b) { var c = a.data(this.form, "validator"),
                            d = "on" + b.type.replace(/^validate/, ""),
                            e = c.settings;
                        e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b) }
                    this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset(); var c, d = this.groups = {};
                    a.each(this.settings.groups, function(b, c) { "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) { d[c] = b }) }), c = this.settings.rules, a.each(c, function(b, d) { c[b] = a.validator.normalizeRule(d) }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true") }, form: function() { return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() }, checkForm: function() { this.prepareForm(); for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]); return this.valid() }, element: function(b) { var c, d, e = this.clean(b),
                        f = this.validationTargetFor(e),
                        g = this,
                        h = !0; return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function(a, b) { b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = h && g.check(e))) }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h }, showErrors: function(b) { if (b) { var c = this;
                        a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function(a, b) { return { message: a, element: c.findByName(b)[0] } }), this.successList = a.grep(this.successList, function(a) { return !(a.name in b) }) }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors() }, resetForm: function() { a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors(); var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(b) }, resetElements: function(a) { var b; if (this.settings.unhighlight)
                        for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
                    else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass) }, numberOfInvalids: function() { return this.objectLength(this.invalid) }, objectLength: function(a) { var b, c = 0; for (b in a) a[b] && c++; return c }, hideErrors: function() { this.hideThese(this.toHide) }, hideThese: function(a) { a.not(this.containers).text(""), this.addWrapper(a).hide() }, valid: function() { return 0 === this.size() }, size: function() { return this.errorList.length }, focusInvalid: function() { if (this.settings.focusInvalid) try { a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (a) {} }, findLastActive: function() { var b = this.lastActive; return b && 1 === a.grep(this.errorList, function(a) { return a.element.name === b.name }).length && b }, elements: function() { var b = this,
                        c = {}; return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() { var d = this.name || a(this).attr("name"); return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]), !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0) }) }, clean: function(b) { return a(b)[0] }, errors: function() { var b = this.settings.errorClass.split(" ").join("."); return a(this.settings.errorElement + "." + b, this.errorContext) }, resetInternals: function() { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]) }, reset: function() { this.resetInternals(), this.currentElements = a([]) }, prepareForm: function() { this.reset(), this.toHide = this.errors().add(this.containers) }, prepareElement: function(a) { this.reset(), this.toHide = this.errorsFor(a) }, elementValue: function(b) { var c, d, e = a(b),
                        f = b.type; return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c) }, check: function(b) { b = this.validationTargetFor(this.clean(b)); var c, d, e, f = a(b).rules(),
                        g = a.map(f, function(a, b) { return b }).length,
                        h = !1,
                        i = this.elementValue(b); if ("function" == typeof f.normalizer) { if (i = f.normalizer.call(b, i), "string" != typeof i) throw new TypeError("The normalizer should return a string value.");
                        delete f.normalizer } for (d in f) { e = { method: d, parameters: f[d] }; try { if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) { h = !0; continue } if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b))); if (!c) return this.formatAndAdd(b, e), !1 } catch (a) { throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", a), a instanceof TypeError && (a.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), a } } if (!h) return this.objectLength(f) && this.successList.push(b), !0 }, customDataMessage: function(b, c) { return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg") }, customMessage: function(a, b) { var c = this.settings.messages[a]; return c && (c.constructor === String ? c : c[b]) }, findDefined: function() { for (var a = 0; a < arguments.length; a++)
                        if (void 0 !== arguments[a]) return arguments[a] }, defaultMessage: function(b, c) { var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
                        e = /\$?\{(\d+)\}/g; return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d }, formatAndAdd: function(a, b) { var c = this.defaultMessage(a, b);
                    this.errorList.push({ message: c, element: a, method: b.method }), this.errorMap[a.name] = c, this.submitted[a.name] = c }, addWrapper: function(a) { return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a }, defaultShowErrors: function() { var a, b, c; for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message); if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]); if (this.settings.unhighlight)
                        for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show() }, validElements: function() { return this.currentElements.not(this.invalidElements()) }, invalidElements: function() { return a(this.errorList).map(function() { return this.element }) }, showLabel: function(b, c) { var d, e, f, g, h = this.errorsFor(b),
                        i = this.idOrName(b),
                        j = a(b).attr("aria-describedby");
                    h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function(b, c) { c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id")) })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h) }, errorsFor: function(b) { var c = this.escapeCssMeta(this.idOrName(b)),
                        d = a(b).attr("aria-describedby"),
                        e = "label[for='" + c + "'], label[for='" + c + "'] *"; return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e) }, escapeCssMeta: function(a) { return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1") }, idOrName: function(a) { return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name) }, validationTargetFor: function(b) { return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0] }, checkable: function(a) { return /radio|checkbox/i.test(a.type) }, findByName: function(b) { return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']") }, getLength: function(b, c) { switch (c.nodeName.toLowerCase()) {
                        case "select":
                            return a("option:selected", c).length;
                        case "input":
                            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length } return b.length }, depend: function(a, b) { return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b) }, dependTypes: { boolean: function(a) { return a }, string: function(b, c) { return !!a(b, c.form).length }, function: function(a, b) { return a(b) } }, optional: function(b) { var c = this.elementValue(b); return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch" }, startRequest: function(b) { this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0) }, stopRequest: function(b, c) { this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) }, previousValue: function(b, c) { return a.data(b, "previousValue") || a.data(b, "previousValue", { old: null, valid: !0, message: this.defaultMessage(b, { method: c }) }) }, destroy: function() { this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur") } },
            classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
            addClassRules: function(b, c) { b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b) },
            classRules: function(b) { var c = {},
                    d = a(b).attr("class"); return d && a.each(d.split(" "), function() { this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]) }), c },
            normalizeAttributeRule: function(a, b, c, d) { /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0) },
            attributeRules: function(b) { var c, d, e = {},
                    f = a(b),
                    g = b.getAttribute("type"); for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d); return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e },
            dataRules: function(b) { var c, d, e = {},
                    f = a(b),
                    g = b.getAttribute("type"); for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d); return e },
            staticRules: function(b) { var c = {},
                    d = a.data(b.form, "validator"); return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c },
            normalizeRules: function(b, c) { return a.each(b, function(d, e) { if (e === !1) return void delete b[d]; if (e.param || e.depends) { var f = !0; switch (typeof e.depends) {
                            case "string":
                                f = !!a(e.depends, c.form).length; break;
                            case "function":
                                f = e.depends.call(c, c) }
                        f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d]) } }), a.each(b, function(d, e) { b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e }), a.each(["minlength", "maxlength"], function() { b[this] && (b[this] = Number(b[this])) }), a.each(["rangelength", "range"], function() { var c;
                    b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])])) }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b },
            normalizeRule: function(b) { if ("string" == typeof b) { var c = {};
                    a.each(b.split(/\s/), function() { c[this] = !0 }), b = c } return b },
            addMethod: function(b, c, d) { a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b)) },
            methods: { required: function(b, c, d) { if (!this.depend(d, c)) return "dependency-mismatch"; if ("select" === c.nodeName.toLowerCase()) { var e = a(c).val(); return e && e.length > 0 } return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0 }, email: function(a, b) { return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a) }, url: function(a, b) { return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a) }, date: function(a, b) { return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString()) }, dateISO: function(a, b) { return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a) }, number: function(a, b) { return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a) }, digits: function(a, b) { return this.optional(b) || /^\d+$/.test(a) }, minlength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || e >= d }, maxlength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || d >= e }, rangelength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || e >= d[0] && e <= d[1] }, min: function(a, b, c) { return this.optional(b) || a >= c }, max: function(a, b, c) { return this.optional(b) || c >= a }, range: function(a, b, c) { return this.optional(b) || a >= c[0] && a <= c[1] }, step: function(b, c, d) { var e = a(c).attr("type"),
                        f = "Step attribute on input type " + e + " is not supported.",
                        g = ["text", "number", "range"],
                        h = new RegExp("\\b" + e + "\\b"),
                        i = e && !h.test(g.join()); if (i) throw new Error(f); return this.optional(c) || b % d === 0 }, equalTo: function(b, c, d) { var e = a(d); return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() { a(c).valid() }), b === e.val() }, remote: function(b, c, d, e) { if (this.optional(c)) return "dependency-mismatch";
                    e = "string" == typeof e && e || "remote"; var f, g, h, i = this.previousValue(c, e); return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && { url: d } || d, h = a.param(a.extend({ data: b }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, { mode: "abort", port: "validate" + c.name, dataType: "json", data: g, context: f.currentForm, success: function(a) { var d, g, h, j = a === !0 || "true" === a;
                            f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, { method: e, parameters: b }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j) } }, d)), "pending") } }
        });
        var b, c = {};
        a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) { var e = a.port; "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d) }) : (b = a.ajax, a.ajax = function(d) { var e = ("mode" in d ? d : a.ajaxSettings).mode,
                f = ("port" in d ? d : a.ajaxSettings).port; return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments) })
    }),
    function(a, b) { "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? module.exports = b() : b() }(this, function() {
        function a(a) { if (null === p) { for (var b = a.length, c = 0, d = document.getElementById(f), e = "<ul>"; c < b;) e += "<li>" + a[c] + "</li>", c++;
                d.innerHTML = e + "</ul>" } else p(a) }

        function b(a) { return a.replace(/<b[^>]*>(.*?)<\/b>/gi, function(a, b) { return b }).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi, "") }

        function c(a) { a = a.getElementsByTagName("a"); for (var b = a.length - 1; 0 <= b; b--) a[b].setAttribute("target", "_blank") }

        function d(a, b) { for (var c = [], d = new RegExp("(^| )" + b + "( |$)"), e = a.getElementsByTagName("*"), f = 0, g = e.length; f < g; f++) d.test(e[f].className) && c.push(e[f]); return c }

        function e(a) { if (void 0 !== a && 0 <= a.innerHTML.indexOf("data-srcset")) return a = a.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0], decodeURIComponent(a).split('"')[1] } var f = "",
            g = 20,
            h = !0,
            i = [],
            j = !1,
            k = !0,
            l = !0,
            m = null,
            n = !0,
            o = !0,
            p = null,
            q = !0,
            r = !1,
            s = !0,
            t = !0,
            u = !1,
            v = null,
            w = { fetch: function(a) { if (void 0 === a.maxTweets && (a.maxTweets = 20), void 0 === a.enableLinks && (a.enableLinks = !0), void 0 === a.showUser && (a.showUser = !0), void 0 === a.showTime && (a.showTime = !0), void 0 === a.dateFunction && (a.dateFunction = "default"), void 0 === a.showRetweet && (a.showRetweet = !0), void 0 === a.customCallback && (a.customCallback = null), void 0 === a.showInteraction && (a.showInteraction = !0), void 0 === a.showImages && (a.showImages = !1), void 0 === a.linksInNewWindow && (a.linksInNewWindow = !0), void 0 === a.showPermalinks && (a.showPermalinks = !0), void 0 === a.dataOnly && (a.dataOnly = !1), j) i.push(a);
                    else { j = !0, f = a.domId, g = a.maxTweets, h = a.enableLinks, l = a.showUser, k = a.showTime, o = a.showRetweet, m = a.dateFunction, p = a.customCallback, q = a.showInteraction, r = a.showImages, s = a.linksInNewWindow, t = a.showPermalinks, u = a.dataOnly; var b = document.getElementsByTagName("head")[0];
                        null !== v && b.removeChild(v), v = document.createElement("script"), v.type = "text/javascript", v.src = "https://cdn.syndication.twimg.com/widgets/timelines/" + a.id + "?&lang=" + (a.lang || "en") + "&callback=twitterFetcher.callback&suppress_response_codes=true&rnd=" + Math.random(), b.appendChild(v) } }, callback: function(f) {
                    function p(a) { var b = a.getElementsByTagName("img")[0]; return b.src = b.getAttribute("data-src-2x"), a } var v = document.createElement("div");
                    v.innerHTML = f.body, "undefined" == typeof v.getElementsByClassName && (n = !1), f = []; var x = [],
                        y = [],
                        z = [],
                        A = [],
                        B = [],
                        C = [],
                        D = 0; if (n)
                        for (v = v.getElementsByClassName("timeline-Tweet"); D < v.length;) 0 < v[D].getElementsByClassName("timeline-Tweet-retweetCredit").length ? A.push(!0) : A.push(!1), (!A[D] || A[D] && o) && (f.push(v[D].getElementsByClassName("timeline-Tweet-text")[0]), B.push(v[D].getAttribute("data-tweet-id")), x.push(p(v[D].getElementsByClassName("timeline-Tweet-author")[0])), y.push(v[D].getElementsByClassName("dt-updated")[0]), C.push(v[D].getElementsByClassName("timeline-Tweet-timestamp")[0]), void 0 !== v[D].getElementsByClassName("timeline-Tweet-media")[0] ? z.push(v[D].getElementsByClassName("timeline-Tweet-media")[0]) : z.push(void 0)), D++;
                    else
                        for (v = d(v, "timeline-Tweet"); D < v.length;) 0 < d(v[D], "timeline-Tweet-retweetCredit").length ? A.push(!0) : A.push(!1), (!A[D] || A[D] && o) && (f.push(d(v[D], "timeline-Tweet-text")[0]), B.push(v[D].getAttribute("data-tweet-id")), x.push(p(d(v[D], "timeline-Tweet-author")[0])), y.push(d(v[D], "dt-updated")[0]), C.push(d(v[D], "timeline-Tweet-timestamp")[0]), void 0 !== d(v[D], "timeline-Tweet-media")[0] ? z.push(d(v[D], "timeline-Tweet-media")[0]) : z.push(void 0)), D++;
                    f.length > g && (f.splice(g, f.length - g), x.splice(g, x.length - g), y.splice(g, y.length - g), A.splice(g, A.length - g), z.splice(g, z.length - g), C.splice(g, C.length - g)); var v = [],
                        D = f.length,
                        E = 0; if (u)
                        for (; E < D;) v.push({ tweet: f[E].innerHTML, author: x[E].innerHTML, time: y[E].textContent, image: e(z[E]), rt: A[E], tid: B[E], permalinkURL: void 0 === C[E] ? "" : C[E].href }), E++;
                    else
                        for (; E < D;) { if ("string" != typeof m) { var A = y[E].getAttribute("datetime"),
                                    F = new Date(y[E].getAttribute("datetime").replace(/-/g, "/").replace("T", " ").split("+")[0]),
                                    A = m(F, A); if (y[E].setAttribute("aria-label", A), f[E].textContent)
                                    if (n) y[E].textContent = A;
                                    else { var F = document.createElement("p"),
                                            G = document.createTextNode(A);
                                        F.appendChild(G), F.setAttribute("aria-label", A), y[E] = F }
                                else y[E].textContent = A }
                            A = "", h ? (s && (c(f[E]), l && c(x[E])), l && (A += '<div class="user">' + b(x[E].innerHTML) + "</div>"), A += '<p class="tweet">' + b(f[E].innerHTML) + "</p>", k && (A = t ? A + ('<p class="timePosted"><a href="' + C[E] + '">' + y[E].getAttribute("aria-label") + "</a></p>") : A + ('<p class="timePosted">' + y[E].getAttribute("aria-label") + "</p>"))) : (l && (A += '<p class="user">' + x[E].textContent + "</p>"), A += '<p class="tweet">' + f[E].textContent + "</p>", k && (A += '<p class="timePosted">' + y[E].textContent + "</p>")), q && (A += '<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to=' + B[E] + '" class="twitter_reply_icon"' + (s ? ' target="_blank">' : ">") + 'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id=' + B[E] + '" class="twitter_retweet_icon"' + (s ? ' target="_blank">' : ">") + 'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id=' + B[E] + '" class="twitter_fav_icon"' + (s ? ' target="_blank">' : ">") + "Favorite</a></p>"), r && void 0 !== z[E] && (A += '<div class="media"><img src="' + e(z[E]) + '" alt="Image from tweet" /></div>'), v.push(A), E++ }
                    a(v), j = !1, 0 < i.length && (w.fetch(i[0]), i.splice(0, 1)) } }; return window.twitterFetcher = w }),
    function() { var a = !1;
        window.JQClass = function() {}, JQClass.classes = {}, JQClass.extend = function b(c) {
            function g() {!a && this._init && this._init.apply(this, arguments) } var d = this.prototype;
            a = !0; var e = new this;
            a = !1; for (var f in c) e[f] = "function" == typeof c[f] && "function" == typeof d[f] ? function(a, b) { return function() { var c = this._super;
                    this._super = function(b) { return d[a].apply(this, b || []) }; var e = b.apply(this, arguments); return this._super = c, e } }(f, c[f]) : c[f]; return g.prototype = e, g.prototype.constructor = g, g.extend = b, g } }(),
    function($) {
        function camelCase(a) { return a.replace(/-([a-z])/g, function(a, b) { return b.toUpperCase() }) }
        JQClass.classes.JQPlugin = JQClass.extend({ name: "plugin", defaultOptions: {}, regionalOptions: {}, _getters: [], _getMarker: function() { return "is-" + this.name }, _init: function() { $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {}); var a = camelCase(this.name);
                $[a] = this, $.fn[a] = function(b) { var c = Array.prototype.slice.call(arguments, 1); return $[a]._isNotChained(b, c) ? $[a][b].apply($[a], [this[0]].concat(c)) : this.each(function() { if ("string" == typeof b) { if ("_" === b[0] || !$[a][b]) throw "Unknown method: " + b;
                            $[a][b].apply($[a], [this].concat(c)) } else $[a]._attach(this, b) }) } }, setDefaults: function(a) { $.extend(this.defaultOptions, a || {}) }, _isNotChained: function(a, b) { return "option" === a && (0 === b.length || 1 === b.length && "string" == typeof b[0]) || $.inArray(a, this._getters) > -1 }, _attach: function(a, b) { if (a = $(a), !a.hasClass(this._getMarker())) { a.addClass(this._getMarker()), b = $.extend({}, this.defaultOptions, this._getMetadata(a), b || {}); var c = $.extend({ name: this.name, elem: a, options: b }, this._instSettings(a, b));
                    a.data(this.name, c), this._postAttach(a, c), this.option(a, b) } }, _instSettings: function(a, b) { return {} }, _postAttach: function(a, b) {}, _getMetadata: function(d) { try { var f = d.data(this.name.toLowerCase()) || "";
                    f = f.replace(/'/g, '"'), f = f.replace(/([a-zA-Z0-9]+):/g, function(a, b, c) { var d = f.substring(0, c).match(/"/g); return d && d.length % 2 !== 0 ? b + ":" : '"' + b + '":' }), f = $.parseJSON("{" + f + "}"); for (var g in f) { var h = f[g]; "string" == typeof h && h.match(/^new Date\((.*)\)$/) && (f[g] = eval(h)) } return f } catch (a) { return {} } }, _getInst: function(a) { return $(a).data(this.name) || {} }, option: function(a, b, c) { a = $(a); var d = a.data(this.name); if (!b || "string" == typeof b && null == c) { var e = (d || {}).options; return e && b ? e[b] : e } if (a.hasClass(this._getMarker())) { var e = b || {}; "string" == typeof b && (e = {}, e[b] = c), this._optionsChanged(a, d, e), $.extend(d.options, e) } }, _optionsChanged: function(a, b, c) {}, destroy: function(a) { a = $(a), a.hasClass(this._getMarker()) && (this._preDestroy(a, this._getInst(a)), a.removeData(this.name).removeClass(this._getMarker())) }, _preDestroy: function(a, b) {} }), $.JQPlugin = { createPlugin: function(a, b) { "object" == typeof a && (b = a, a = "JQPlugin"), a = camelCase(a); var c = camelCase(b.name);
                JQClass.classes[c] = JQClass.classes[a].extend(b), new JQClass.classes[c] } } }(jQuery), ! function(a, b) {
        "use strict";

        function c(a) { a = a || {}; for (var b = 1; b < arguments.length; b++) { var c = arguments[b]; if (c)
                    for (var d in c) c.hasOwnProperty(d) && ("object" == typeof c[d] ? deepExtend(a[d], c[d]) : a[d] = c[d]) } return a }

        function d(d, g) {
            function h() { if (y) { r = b.createElement("canvas"), r.className = "pg-canvas", r.style.display = "block", d.insertBefore(r, d.firstChild), s = r.getContext("2d"), i(); for (var c = Math.round(r.width * r.height / g.density), e = 0; c > e; e++) { var f = new n;
                        f.setStackPos(e), z.push(f) }
                    a.addEventListener("resize", function() { k() }, !1), b.addEventListener("mousemove", function(a) { A = a.pageX, B = a.pageY }, !1), D && !C && a.addEventListener("deviceorientation", function() { F = Math.min(Math.max(-event.beta, -30), 30), E = Math.min(Math.max(-event.gamma, -30), 30) }, !0), j(), q("onInit") } }

            function i() { r.width = d.offsetWidth, r.height = d.offsetHeight, s.fillStyle = g.dotColor, s.strokeStyle = g.lineColor, s.lineWidth = g.lineWidth }

            function j() { if (y) { u = a.innerWidth, v = a.innerHeight, s.clearRect(0, 0, r.width, r.height); for (var b = 0; b < z.length; b++) z[b].updatePosition(); for (var b = 0; b < z.length; b++) z[b].draw();
                    G || (t = requestAnimationFrame(j)) } }

            function k() { i(); for (var a = d.offsetWidth, b = d.offsetHeight, c = z.length - 1; c >= 0; c--)(z[c].position.x > a || z[c].position.y > b) && z.splice(c, 1); var e = Math.round(r.width * r.height / g.density); if (e > z.length)
                    for (; e > z.length;) { var f = new n;
                        z.push(f) } else e < z.length && z.splice(e); for (c = z.length - 1; c >= 0; c--) z[c].setStackPos(c) }

            function l() { G = !0 }

            function m() { G = !1, j() }

            function n() { switch (this.stackPos, this.active = !0, this.layer = Math.ceil(3 * Math.random()), this.parallaxOffsetX = 0, this.parallaxOffsetY = 0, this.position = { x: Math.ceil(Math.random() * r.width), y: Math.ceil(Math.random() * r.height) }, this.speed = {}, g.directionX) {
                    case "left":
                        this.speed.x = +(-g.maxSpeedX + Math.random() * g.maxSpeedX - g.minSpeedX).toFixed(2); break;
                    case "right":
                        this.speed.x = +(Math.random() * g.maxSpeedX + g.minSpeedX).toFixed(2); break;
                    default:
                        this.speed.x = +(-g.maxSpeedX / 2 + Math.random() * g.maxSpeedX).toFixed(2), this.speed.x += this.speed.x > 0 ? g.minSpeedX : -g.minSpeedX } switch (g.directionY) {
                    case "up":
                        this.speed.y = +(-g.maxSpeedY + Math.random() * g.maxSpeedY - g.minSpeedY).toFixed(2); break;
                    case "down":
                        this.speed.y = +(Math.random() * g.maxSpeedY + g.minSpeedY).toFixed(2); break;
                    default:
                        this.speed.y = +(-g.maxSpeedY / 2 + Math.random() * g.maxSpeedY).toFixed(2), this.speed.x += this.speed.y > 0 ? g.minSpeedY : -g.minSpeedY } }

            function o(a, b) { return b ? void(g[a] = b) : g[a] }

            function p() { console.log("destroy"), r.parentNode.removeChild(r), q("onDestroy"), f && f(d).removeData("plugin_" + e) }

            function q(a) { void 0 !== g[a] && g[a].call(d) } var r, s, t, u, v, w, x, y = !!b.createElement("canvas").getContext,
                z = [],
                A = 0,
                B = 0,
                C = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
                D = !!a.DeviceOrientationEvent,
                E = 0,
                F = 0,
                G = !1; return g = c({}, a[e].defaults, g), n.prototype.draw = function() { s.beginPath(), s.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, g.particleRadius / 2, 0, 2 * Math.PI, !0), s.closePath(), s.fill(), s.beginPath(); for (var a = z.length - 1; a > this.stackPos; a--) { var b = z[a],
                        c = this.position.x - b.position.x,
                        d = this.position.y - b.position.y,
                        e = Math.sqrt(c * c + d * d).toFixed(2);
                    e < g.proximity && (s.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY), g.curvedLines ? s.quadraticCurveTo(Math.max(b.position.x, b.position.x), Math.min(b.position.y, b.position.y), b.position.x + b.parallaxOffsetX, b.position.y + b.parallaxOffsetY) : s.lineTo(b.position.x + b.parallaxOffsetX, b.position.y + b.parallaxOffsetY)) }
                s.stroke(), s.closePath() }, n.prototype.updatePosition = function() { if (g.parallax) { if (D && !C) { var a = (u - 0) / 60;
                        w = (E - -30) * a + 0; var b = (v - 0) / 60;
                        x = (F - -30) * b + 0 } else w = A, x = B;
                    this.parallaxTargX = (w - u / 2) / (g.parallaxMultiplier * this.layer), this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10, this.parallaxTargY = (x - v / 2) / (g.parallaxMultiplier * this.layer), this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10 } var c = d.offsetWidth,
                    e = d.offsetHeight; switch (g.directionX) {
                    case "left":
                        this.position.x + this.speed.x + this.parallaxOffsetX < 0 && (this.position.x = c - this.parallaxOffsetX); break;
                    case "right":
                        this.position.x + this.speed.x + this.parallaxOffsetX > c && (this.position.x = 0 - this.parallaxOffsetX); break;
                    default:
                        (this.position.x + this.speed.x + this.parallaxOffsetX > c || this.position.x + this.speed.x + this.parallaxOffsetX < 0) && (this.speed.x = -this.speed.x) } switch (g.directionY) {
                    case "up":
                        this.position.y + this.speed.y + this.parallaxOffsetY < 0 && (this.position.y = e - this.parallaxOffsetY); break;
                    case "down":
                        this.position.y + this.speed.y + this.parallaxOffsetY > e && (this.position.y = 0 - this.parallaxOffsetY); break;
                    default:
                        (this.position.y + this.speed.y + this.parallaxOffsetY > e || this.position.y + this.speed.y + this.parallaxOffsetY < 0) && (this.speed.y = -this.speed.y) }
                this.position.x += this.speed.x, this.position.y += this.speed.y }, n.prototype.setStackPos = function(a) { this.stackPos = a }, h(), { option: o, destroy: p, start: m, pause: l } }
        var e = "particleground",
            f = a.jQuery;
        a[e] = function(a, b) { return new d(a, b) }, a[e].defaults = { minSpeedX: .1, maxSpeedX: .7, minSpeedY: .1, maxSpeedY: .7, directionX: "center", directionY: "center", density: 1e4, dotColor: "#666666", lineColor: "#666666", particleRadius: 7, lineWidth: 1, curvedLines: !1, proximity: 100, parallax: !0, parallaxMultiplier: 5, onInit: function() {}, onDestroy: function() {} }, f && (f.fn[e] = function(a) {
            if ("string" == typeof arguments[0]) {
                var b, c = arguments[0],
                    g = Array.prototype.slice.call(arguments, 1);
                return this.each(function() { f.data(this, "plugin_" + e) && "function" == typeof f.data(this, "plugin_" + e)[c] && (b = f.data(this, "plugin_" + e)[c].apply(this, g)) }), void 0 !== b ? b : this
            }
            return "object" != typeof a && a ? void 0 : this.each(function() { f.data(this, "plugin_" + e) || f.data(this, "plugin_" + e, new d(this, a)) })
        })
    }(window, document),
    function() { for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(b) { var c = (new Date).getTime(),
                d = Math.max(0, 16 - (c - a)),
                e = window.setTimeout(function() { b(c + d) }, d); return a = c + d, e }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) { clearTimeout(a) }) }();