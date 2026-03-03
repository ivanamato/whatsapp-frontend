var cn, z, ni, ht, Ha, ri, ai, oi, Gr, Tr, Ar, ii, An = {}, Dn = [], bl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ln = Array.isArray;
function ze(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function qr(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function ae(e, t, n) {
  var r, a, o, i = {};
  for (o in t) o == "key" ? r = t[o] : o == "ref" ? a = t[o] : i[o] = t[o];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? cn.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (o in e.defaultProps) i[o] === void 0 && (i[o] = e.defaultProps[o]);
  return en(e, i, r, a, null);
}
function en(e, t, n, r, a) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++ni, __i: -1, __u: 0 };
  return a == null && z.vnode != null && z.vnode(o), o;
}
function si() {
  return { current: null };
}
function Q(e) {
  return e.children;
}
function Ie(e, t) {
  this.props = e, this.context = t;
}
function Dt(e, t) {
  if (t == null) return e.__ ? Dt(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? Dt(e) : null;
}
function xl(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, r = [], a = [], o = ze({}, t);
    o.__v = t.__v + 1, z.vnode && z.vnode(o), Kr(e.__P, o, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, r, n ?? Dt(t), !!(32 & t.__u), a), o.__v = t.__v, o.__.__k[o.__i] = o, di(r, o, a), t.__e = t.__ = null, o.__e != n && ci(o);
  }
}
function ci(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), ci(e);
}
function Dr(e) {
  (!e.__d && (e.__d = !0) && ht.push(e) && !Rn.__r++ || Ha != z.debounceRendering) && ((Ha = z.debounceRendering) || ri)(Rn);
}
function Rn() {
  for (var e, t = 1; ht.length; ) ht.length > t && ht.sort(ai), e = ht.shift(), t = ht.length, xl(e);
  Rn.__r = 0;
}
function li(e, t, n, r, a, o, i, s, d, u, f) {
  var l, m, h, w, p, g, v, y = r && r.__k || Dn, S = t.length;
  for (d = _l(n, t, y, d, S), l = 0; l < S; l++) (h = n.__k[l]) != null && (m = h.__i != -1 && y[h.__i] || An, h.__i = l, g = Kr(e, h, m, a, o, i, s, d, u, f), w = h.__e, h.ref && m.ref != h.ref && (m.ref && Xr(m.ref, null, h), f.push(h.ref, h.__c || w, h)), p == null && w != null && (p = w), (v = !!(4 & h.__u)) || m.__k === h.__k ? d = ui(h, d, e, v) : typeof h.type == "function" && g !== void 0 ? d = g : w && (d = w.nextSibling), h.__u &= -7);
  return n.__e = p, d;
}
function _l(e, t, n, r, a) {
  var o, i, s, d, u, f = n.length, l = f, m = 0;
  for (e.__k = new Array(a), o = 0; o < a; o++) (i = t[o]) != null && typeof i != "boolean" && typeof i != "function" ? (typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? i = e.__k[o] = en(null, i, null, null, null) : ln(i) ? i = e.__k[o] = en(Q, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? i = e.__k[o] = en(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : e.__k[o] = i, d = o + m, i.__ = e, i.__b = e.__b + 1, s = null, (u = i.__i = Sl(i, n, d, l)) != -1 && (l--, (s = n[u]) && (s.__u |= 2)), s == null || s.__v == null ? (u == -1 && (a > f ? m-- : a < f && m++), typeof i.type != "function" && (i.__u |= 4)) : u != d && (u == d - 1 ? m-- : u == d + 1 ? m++ : (u > d ? m-- : m++, i.__u |= 4))) : e.__k[o] = null;
  if (l) for (o = 0; o < f; o++) (s = n[o]) != null && (2 & s.__u) == 0 && (s.__e == r && (r = Dt(s)), mi(s, s));
  return r;
}
function ui(e, t, n, r) {
  var a, o;
  if (typeof e.type == "function") {
    for (a = e.__k, o = 0; a && o < a.length; o++) a[o] && (a[o].__ = e, t = ui(a[o], t, n, r));
    return t;
  }
  e.__e != t && (r && (t && e.type && !t.parentNode && (t = Dt(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Xe(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (ln(e) ? e.some(function(n) {
    Xe(n, t);
  }) : t.push(e)), t;
}
function Sl(e, t, n, r) {
  var a, o, i, s = e.key, d = e.type, u = t[n], f = u != null && (2 & u.__u) == 0;
  if (u === null && s == null || f && s == u.key && d == u.type) return n;
  if (r > (f ? 1 : 0)) {
    for (a = n - 1, o = n + 1; a >= 0 || o < t.length; ) if ((u = t[i = a >= 0 ? a-- : o++]) != null && (2 & u.__u) == 0 && s == u.key && d == u.type) return i;
  }
  return -1;
}
function Va(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || bl.test(t) ? n : n + "px";
}
function gn(e, t, n, r, a) {
  var o, i;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || Va(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || Va(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") o = t != (t = t.replace(oi, "$1")), i = t.toLowerCase(), t = i in e || t == "onFocusOut" || t == "onFocusIn" ? i.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r ? n.u = r.u : (n.u = Gr, e.addEventListener(t, o ? Ar : Tr, o)) : e.removeEventListener(t, o ? Ar : Tr, o);
  else {
    if (a == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function Ya(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = Gr++;
      else if (t.t < n.u) return;
      return n(z.event ? z.event(t) : t);
    }
  };
}
function Kr(e, t, n, r, a, o, i, s, d, u) {
  var f, l, m, h, w, p, g, v, y, S, N, x, C, b, _, E = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (d = !!(32 & n.__u), o = [s = t.__e = n.__e]), (f = z.__b) && f(t);
  e: if (typeof E == "function") try {
    if (v = t.props, y = "prototype" in E && E.prototype.render, S = (f = E.contextType) && r[f.__c], N = f ? S ? S.props.value : f.__ : r, n.__c ? g = (l = t.__c = n.__c).__ = l.__E : (y ? t.__c = l = new E(v, N) : (t.__c = l = new Ie(v, N), l.constructor = E, l.render = Cl), S && S.sub(l), l.state || (l.state = {}), l.__n = r, m = l.__d = !0, l.__h = [], l._sb = []), y && l.__s == null && (l.__s = l.state), y && E.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = ze({}, l.__s)), ze(l.__s, E.getDerivedStateFromProps(v, l.__s))), h = l.props, w = l.state, l.__v = t, m) y && E.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), y && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (y && E.getDerivedStateFromProps == null && v !== h && l.componentWillReceiveProps != null && l.componentWillReceiveProps(v, N), t.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(v, l.__s, N) === !1) {
        t.__v != n.__v && (l.props = v, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(L) {
          L && (L.__ = t);
        }), Dn.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && i.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(v, l.__s, N), y && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(h, w, p);
      });
    }
    if (l.context = N, l.props = v, l.__P = e, l.__e = !1, x = z.__r, C = 0, y) l.state = l.__s, l.__d = !1, x && x(t), f = l.render(l.props, l.state, l.context), Dn.push.apply(l.__h, l._sb), l._sb = [];
    else do
      l.__d = !1, x && x(t), f = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++C < 25);
    l.state = l.__s, l.getChildContext != null && (r = ze(ze({}, r), l.getChildContext())), y && !m && l.getSnapshotBeforeUpdate != null && (p = l.getSnapshotBeforeUpdate(h, w)), b = f != null && f.type === Q && f.key == null ? fi(f.props.children) : f, s = li(e, ln(b) ? b : [b], t, n, r, a, o, i, s, d, u), l.base = t.__e, t.__u &= -161, l.__h.length && i.push(l), g && (l.__E = l.__ = null);
  } catch (L) {
    if (t.__v = null, d || o != null) if (L.then) {
      for (t.__u |= d ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      o[o.indexOf(s)] = null, t.__e = s;
    } else {
      for (_ = o.length; _--; ) qr(o[_]);
      Rr(t);
    }
    else t.__e = n.__e, t.__k = n.__k, L.then || Rr(t);
    z.__e(L, t, n);
  }
  else o == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = Nl(n.__e, t, n, r, a, o, i, d, u);
  return (f = z.diffed) && f(t), 128 & t.__u ? void 0 : s;
}
function Rr(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Rr));
}
function di(e, t, n) {
  for (var r = 0; r < n.length; r++) Xr(n[r], n[++r], n[++r]);
  z.__c && z.__c(t, e), e.some(function(a) {
    try {
      e = a.__h, a.__h = [], e.some(function(o) {
        o.call(a);
      });
    } catch (o) {
      z.__e(o, a.__v);
    }
  });
}
function fi(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : ln(e) ? e.map(fi) : ze({}, e);
}
function Nl(e, t, n, r, a, o, i, s, d) {
  var u, f, l, m, h, w, p, g = n.props || An, v = t.props, y = t.type;
  if (y == "svg" ? a = "http://www.w3.org/2000/svg" : y == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), o != null) {
    for (u = 0; u < o.length; u++) if ((h = o[u]) && "setAttribute" in h == !!y && (y ? h.localName == y : h.nodeType == 3)) {
      e = h, o[u] = null;
      break;
    }
  }
  if (e == null) {
    if (y == null) return document.createTextNode(v);
    e = document.createElementNS(a, y, v.is && v), s && (z.__m && z.__m(t, o), s = !1), o = null;
  }
  if (y == null) g === v || s && e.data == v || (e.data = v);
  else {
    if (o = o && cn.call(e.childNodes), !s && o != null) for (g = {}, u = 0; u < e.attributes.length; u++) g[(h = e.attributes[u]).name] = h.value;
    for (u in g) h = g[u], u == "dangerouslySetInnerHTML" ? l = h : u == "children" || u in v || u == "value" && "defaultValue" in v || u == "checked" && "defaultChecked" in v || gn(e, u, null, h, a);
    for (u in v) h = v[u], u == "children" ? m = h : u == "dangerouslySetInnerHTML" ? f = h : u == "value" ? w = h : u == "checked" ? p = h : s && typeof h != "function" || g[u] === h || gn(e, u, h, g[u], a);
    if (f) s || l && (f.__html == l.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (l && (e.innerHTML = ""), li(t.type == "template" ? e.content : e, ln(m) ? m : [m], t, n, r, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, o, i, o ? o[0] : n.__k && Dt(n, 0), s, d), o != null) for (u = o.length; u--; ) qr(o[u]);
    s || (u = "value", y == "progress" && w == null ? e.removeAttribute("value") : w != null && (w !== e[u] || y == "progress" && !w || y == "option" && w != g[u]) && gn(e, u, w, g[u], a), u = "checked", p != null && p != e[u] && gn(e, u, p, g[u], a));
  }
  return e;
}
function Xr(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (a) {
    z.__e(a, n);
  }
}
function mi(e, t, n) {
  var r, a;
  if (z.unmount && z.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || Xr(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (o) {
      z.__e(o, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (a = 0; a < r.length; a++) r[a] && mi(r[a], t, n || typeof e.type != "function");
  n || qr(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Cl(e, t, n) {
  return this.constructor(e, n);
}
function nn(e, t, n) {
  var r, a, o, i;
  t == document && (t = document.documentElement), z.__ && z.__(e, t), a = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], i = [], Kr(t, e = (!r && n || t).__k = ae(Q, null, [e]), a || An, An, t.namespaceURI, !r && n ? [n] : a ? null : t.firstChild ? cn.call(t.childNodes) : null, o, !r && n ? n : a ? a.__e : t.firstChild, r, i), di(o, e, i);
}
function hi(e, t) {
  nn(e, t, hi);
}
function Ml(e, t, n) {
  var r, a, o, i, s = ze({}, e.props);
  for (o in e.type && e.type.defaultProps && (i = e.type.defaultProps), t) o == "key" ? r = t[o] : o == "ref" ? a = t[o] : s[o] = t[o] === void 0 && i != null ? i[o] : t[o];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? cn.call(arguments, 2) : n), en(e.type, s, r || e.key, a || e.ref, null);
}
function Je(e) {
  function t(n) {
    var r, a;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (a = {})[t.__c] = this, this.getChildContext = function() {
      return a;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && r.forEach(function(i) {
        i.__e = !0, Dr(i);
      });
    }, this.sub = function(o) {
      r.add(o);
      var i = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        r && r.delete(o), i && i.call(o);
      };
    }), n.children;
  }
  return t.__c = "__cC" + ii++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
cn = Dn.slice, z = { __e: function(e, t, n, r) {
  for (var a, o, i; t = t.__; ) if ((a = t.__c) && !a.__) try {
    if ((o = a.constructor) && o.getDerivedStateFromError != null && (a.setState(o.getDerivedStateFromError(e)), i = a.__d), a.componentDidCatch != null && (a.componentDidCatch(e, r || {}), i = a.__d), i) return a.__E = a;
  } catch (s) {
    e = s;
  }
  throw e;
} }, ni = 0, Ie.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = ze({}, this.state), typeof e == "function" && (e = e(ze({}, n), this.props)), e && ze(n, e), e != null && this.__v && (t && this._sb.push(t), Dr(this));
}, Ie.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Dr(this));
}, Ie.prototype.render = Q, ht = [], ri = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ai = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Rn.__r = 0, oi = /(PointerCapture)$|Capture$/i, Gr = 0, Tr = Ya(!1), Ar = Ya(!0), ii = 0;
var Qe, te, lr, Ga, Rt = 0, pi = [], ie = z, qa = ie.__b, Ka = ie.__r, Xa = ie.diffed, Ja = ie.__c, Qa = ie.unmount, Za = ie.__;
function vt(e, t) {
  ie.__h && ie.__h(te, e, Rt || t), Rt = 0;
  var n = te.__H || (te.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function M(e) {
  return Rt = 1, $t(wi, e);
}
function $t(e, t, n) {
  var r = vt(Qe++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : wi(void 0, t), function(s) {
    var d = r.__N ? r.__N[0] : r.__[0], u = r.t(d, s);
    d !== u && (r.__N = [u, r.__[1]], r.__c.setState({}));
  }], r.__c = te, !te.__f)) {
    var a = function(s, d, u) {
      if (!r.__c.__H) return !0;
      var f = r.__c.__H.__.filter(function(m) {
        return m.__c;
      });
      if (f.every(function(m) {
        return !m.__N;
      })) return !o || o.call(this, s, d, u);
      var l = r.__c.props !== s;
      return f.some(function(m) {
        if (m.__N) {
          var h = m.__[0];
          m.__ = m.__N, m.__N = void 0, h !== m.__[0] && (l = !0);
        }
      }), o && o.call(this, s, d, u) || l;
    };
    te.__f = !0;
    var o = te.shouldComponentUpdate, i = te.componentWillUpdate;
    te.componentWillUpdate = function(s, d, u) {
      if (this.__e) {
        var f = o;
        o = void 0, a(s, d, u), o = f;
      }
      i && i.call(this, s, d, u);
    }, te.shouldComponentUpdate = a;
  }
  return r.__N || r.__;
}
function I(e, t) {
  var n = vt(Qe++, 3);
  !ie.__s && Zr(n.__H, t) && (n.__ = e, n.u = t, te.__H.__h.push(n));
}
function nt(e, t) {
  var n = vt(Qe++, 4);
  !ie.__s && Zr(n.__H, t) && (n.__ = e, n.u = t, te.__h.push(n));
}
function A(e) {
  return Rt = 5, me(function() {
    return { current: e };
  }, []);
}
function Gn(e, t, n) {
  Rt = 6, nt(function() {
    if (typeof e == "function") {
      var r = e(t());
      return function() {
        e(null), r && typeof r == "function" && r();
      };
    }
    if (e) return e.current = t(), function() {
      return e.current = null;
    };
  }, n == null ? n : n.concat(e));
}
function me(e, t) {
  var n = vt(Qe++, 7);
  return Zr(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function U(e, t) {
  return Rt = 8, me(function() {
    return e;
  }, t);
}
function Ve(e) {
  var t = te.context[e.__c], n = vt(Qe++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(te)), t.props.value) : e.__;
}
function Jr(e, t) {
  ie.useDebugValue && ie.useDebugValue(t ? t(e) : e);
}
function Pl(e) {
  var t = vt(Qe++, 10), n = M();
  return t.__ = e, te.componentDidCatch || (te.componentDidCatch = function(r, a) {
    t.__ && t.__(r, a), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Qr() {
  var e = vt(Qe++, 11);
  if (!e.__) {
    for (var t = te.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function El() {
  for (var e; e = pi.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(Mn), t.__h.some(Or), t.__h = [];
    } catch (n) {
      t.__h = [], ie.__e(n, e.__v);
    }
  }
}
ie.__b = function(e) {
  te = null, qa && qa(e);
}, ie.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Za && Za(e, t);
}, ie.__r = function(e) {
  Ka && Ka(e), Qe = 0;
  var t = (te = e.__c).__H;
  t && (lr === te ? (t.__h = [], te.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(Mn), t.__h.some(Or), t.__h = [], Qe = 0)), lr = te;
}, ie.diffed = function(e) {
  Xa && Xa(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (pi.push(t) !== 1 && Ga === ie.requestAnimationFrame || ((Ga = ie.requestAnimationFrame) || kl)(El)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), lr = te = null;
}, ie.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(Mn), n.__h = n.__h.filter(function(r) {
        return !r.__ || Or(r);
      });
    } catch (r) {
      t.some(function(a) {
        a.__h && (a.__h = []);
      }), t = [], ie.__e(r, n.__v);
    }
  }), Ja && Ja(e, t);
}, ie.unmount = function(e) {
  Qa && Qa(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(r) {
    try {
      Mn(r);
    } catch (a) {
      t = a;
    }
  }), n.__H = void 0, t && ie.__e(t, n.__v));
};
var eo = typeof requestAnimationFrame == "function";
function kl(e) {
  var t, n = function() {
    clearTimeout(r), eo && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 35);
  eo && (t = requestAnimationFrame(n));
}
function Mn(e) {
  var t = te, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), te = t;
}
function Or(e) {
  var t = te;
  e.__c = e.__(), te = t;
}
function Zr(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function wi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function gi(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Ir(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function ea(e, t) {
  var n = t(), r = M({ t: { __: n, u: t } }), a = r[0].t, o = r[1];
  return nt(function() {
    a.__ = n, a.u = t, ur(a) && o({ t: a });
  }, [e, n, t]), I(function() {
    return ur(a) && o({ t: a }), e(function() {
      ur(a) && o({ t: a });
    });
  }, [e]), n;
}
function ur(e) {
  try {
    return !((t = e.__) === (n = e.u()) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
  var t, n;
}
function ta(e) {
  e();
}
function na(e) {
  return e;
}
function ra() {
  return [!1, ta];
}
var aa = nt;
function On(e, t) {
  this.props = e, this.context = t;
}
function vi(e, t) {
  function n(a) {
    var o = this.props.ref, i = o == a.ref;
    return !i && o && (o.call ? o(null) : o.current = null), t ? !t(this.props, a) || !i : Ir(this.props, a);
  }
  function r(a) {
    return this.shouldComponentUpdate = n, ae(e, a);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r.type = e, r;
}
(On.prototype = new Ie()).isPureReactComponent = !0, On.prototype.shouldComponentUpdate = function(e, t) {
  return Ir(this.props, e) || Ir(this.state, t);
};
var to = z.__b;
z.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), to && to(e);
};
var Tl = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function T(e) {
  function t(n) {
    var r = gi({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Tl, t.render = e, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var no = function(e, t) {
  return e == null ? null : Xe(Xe(e).map(t));
}, je = { map: no, forEach: no, count: function(e) {
  return e ? Xe(e).length : 0;
}, only: function(e) {
  var t = Xe(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: Xe }, Al = z.__e;
z.__e = function(e, t, n, r) {
  if (e.then) {
    for (var a, o = t; o = o.__; ) if ((a = o.__c) && a.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), a.__c(e, t);
  }
  Al(e, t, n, r);
};
var ro = z.unmount;
function yi(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = gi({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return yi(r, t, n);
  })), e;
}
function bi(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return bi(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function tn() {
  this.__u = 0, this.o = null, this.__b = null;
}
function xi(e) {
  if (!e.__) return null;
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function _i(e) {
  var t, n, r, a = null;
  function o(i) {
    if (t || (t = e()).then(function(s) {
      s && (a = s.default || s), r = !0;
    }, function(s) {
      n = s, r = !0;
    }), n) throw n;
    if (!r) throw t;
    return a ? ae(a, i) : null;
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Pt() {
  this.i = null, this.l = null;
}
z.unmount = function(e) {
  var t = e.__c;
  t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), ro && ro(e);
}, (tn.prototype = new Ie()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var a = xi(r.__v), o = !1, i = function() {
    o || r.__z || (o = !0, n.__R = null, a ? a(d) : d());
  };
  n.__R = i;
  var s = n.__P;
  n.__P = null;
  var d = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var u = r.state.__a;
        r.__v.__k[0] = bi(u, u.__c.__P, u.__c.__O);
      }
      var f;
      for (r.setState({ __a: r.__b = null }); f = r.o.pop(); ) f.__P = s, f.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(i, i);
}, tn.prototype.componentWillUnmount = function() {
  this.o = [];
}, tn.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = yi(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var a = t.__a && ae(Q, null, e.fallback);
  return a && (a.__u &= -33), [ae(Q, null, t.__a ? null : e.children), a];
};
var ao = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function Dl(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Rl(e) {
  var t = this, n = e.h;
  if (t.componentWillUnmount = function() {
    nn(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), !t.v) {
    for (var r = t.__v; r !== null && !r.__m && r.__ !== null; ) r = r.__;
    t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], __k: { __m: r.__m }, contains: function() {
      return !0;
    }, namespaceURI: n.namespaceURI, insertBefore: function(a, o) {
      this.childNodes.push(a), t.h.insertBefore(a, o);
    }, removeChild: function(a) {
      this.childNodes.splice(this.childNodes.indexOf(a) >>> 1, 1), t.h.removeChild(a);
    } };
  }
  nn(ae(Dl, { context: t.context }, e.__v), t.v);
}
function Si(e, t) {
  var n = ae(Rl, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Pt.prototype = new Ie()).__a = function(e) {
  var t = this, n = xi(t.__v), r = t.l.get(e);
  return r[0]++, function(a) {
    var o = function() {
      t.props.revealOrder ? (r.push(a), ao(t, e, r)) : a();
    };
    n ? n(o) : o();
  };
}, Pt.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = Xe(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, Pt.prototype.componentDidUpdate = Pt.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    ao(e, n, t);
  });
};
var Ni = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ol = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Il = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Ll = /[A-Z0-9]/g, Fl = typeof document < "u", $l = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function oa(e, t, n) {
  return t.__k == null && (t.textContent = ""), nn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Ci(e, t, n) {
  return hi(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
Ie.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Ie.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var oo = z.event;
function Wl() {
}
function Ul() {
  return this.cancelBubble;
}
function zl() {
  return this.defaultPrevented;
}
z.event = function(e) {
  return oo && (e = oo(e)), e.persist = Wl, e.isPropagationStopped = Ul, e.isDefaultPrevented = zl, e.nativeEvent = e;
};
var ia, Bl = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, io = z.vnode;
z.vnode = function(e) {
  typeof e.type == "string" && (function(t) {
    var n = t.props, r = t.type, a = {}, o = r.indexOf("-") === -1;
    for (var i in n) {
      var s = n[i];
      if (!(i === "value" && "defaultValue" in n && s == null || Fl && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var d = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : d === "translate" && s === "no" ? s = !1 : d[0] === "o" && d[1] === "n" ? d === "ondoubleclick" ? i = "ondblclick" : d !== "onchange" || r !== "input" && r !== "textarea" || $l(n.type) ? d === "onfocus" ? i = "onfocusin" : d === "onblur" ? i = "onfocusout" : Il.test(i) && (i = d) : d = i = "oninput" : o && Ol.test(i) ? i = i.replace(Ll, "-$&").toLowerCase() : s === null && (s = void 0), d === "oninput" && a[i = d] && (i = "oninputCapture"), a[i] = s;
      }
    }
    r == "select" && a.multiple && Array.isArray(a.value) && (a.value = Xe(n.children).forEach(function(u) {
      u.props.selected = a.value.indexOf(u.props.value) != -1;
    })), r == "select" && a.defaultValue != null && (a.value = Xe(n.children).forEach(function(u) {
      u.props.selected = a.multiple ? a.defaultValue.indexOf(u.props.value) != -1 : a.defaultValue == u.props.value;
    })), n.class && !n.className ? (a.class = n.class, Object.defineProperty(a, "className", Bl)) : n.className && (a.class = a.className = n.className), t.props = a;
  })(e), e.$$typeof = Ni, io && io(e);
};
var so = z.__r;
z.__r = function(e) {
  so && so(e), ia = e.__c;
};
var co = z.diffed;
z.diffed = function(e) {
  co && co(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), ia = null;
};
var Mi = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return ia.__n[e.__c].props.value;
}, useCallback: U, useContext: Ve, useDebugValue: Jr, useDeferredValue: na, useEffect: I, useId: Qr, useImperativeHandle: Gn, useInsertionEffect: aa, useLayoutEffect: nt, useMemo: me, useReducer: $t, useRef: A, useState: M, useSyncExternalStore: ea, useTransition: ra } } }, jl = "18.3.1";
function Pi(e) {
  return ae.bind(null, e);
}
function Ze(e) {
  return !!e && e.$$typeof === Ni;
}
function Ei(e) {
  return Ze(e) && e.type === Q;
}
function ki(e) {
  return !!e && typeof e.displayName == "string" && e.displayName.startsWith("Memo(");
}
function Wt(e) {
  return Ze(e) ? Ml.apply(null, arguments) : e;
}
function sa(e) {
  return !!e.__k && (nn(null, e), !0);
}
function Ti(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Ai = function(e, t) {
  return e(t);
}, qn = function(e, t) {
  return e(t);
}, Di = Q, Ri = Ze, Ke = { useState: M, useId: Qr, useReducer: $t, useEffect: I, useLayoutEffect: nt, useInsertionEffect: aa, useTransition: ra, useDeferredValue: na, useSyncExternalStore: ea, startTransition: ta, useRef: A, useImperativeHandle: Gn, useMemo: me, useCallback: U, useContext: Ve, useDebugValue: Jr, version: "18.3.1", Children: je, render: oa, hydrate: Ci, unmountComponentAtNode: sa, createPortal: Si, createElement: ae, createContext: Je, createFactory: Pi, cloneElement: Wt, createRef: si, Fragment: Q, isValidElement: Ze, isElement: Ri, isFragment: Ei, isMemo: ki, findDOMNode: Ti, Component: Ie, PureComponent: On, memo: vi, forwardRef: T, flushSync: qn, unstable_batchedUpdates: Ai, StrictMode: Di, Suspense: tn, SuspenseList: Pt, lazy: _i, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Mi };
const ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: je,
  Component: Ie,
  Fragment: Q,
  PureComponent: On,
  StrictMode: Di,
  Suspense: tn,
  SuspenseList: Pt,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Mi,
  cloneElement: Wt,
  createContext: Je,
  createElement: ae,
  createFactory: Pi,
  createPortal: Si,
  createRef: si,
  default: Ke,
  findDOMNode: Ti,
  flushSync: qn,
  forwardRef: T,
  hydrate: Ci,
  isElement: Ri,
  isFragment: Ei,
  isMemo: ki,
  isValidElement: Ze,
  lazy: _i,
  memo: vi,
  render: oa,
  startTransition: ta,
  unmountComponentAtNode: sa,
  unstable_batchedUpdates: Ai,
  useCallback: U,
  useContext: Ve,
  useDebugValue: Jr,
  useDeferredValue: na,
  useEffect: I,
  useErrorBoundary: Pl,
  useId: Qr,
  useImperativeHandle: Gn,
  useInsertionEffect: aa,
  useLayoutEffect: nt,
  useMemo: me,
  useReducer: $t,
  useRef: A,
  useState: M,
  useSyncExternalStore: ea,
  useTransition: ra,
  version: jl
}, Symbol.toStringTag, { value: "Module" }));
function Hl(e) {
  return {
    // eslint-disable-next-line
    render: function(t) {
      oa(t, e);
    },
    // eslint-disable-next-line
    unmount: function() {
      sa(e);
    }
  };
}
var Vl = 0;
function c(e, t, n, r, a, o) {
  t || (t = {});
  var i, s, d = t;
  if ("ref" in d) for (s in d = {}, t) s == "ref" ? i = t[s] : d[s] = t[s];
  var u = { type: e, props: d, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Vl, __i: -1, __u: 0, __source: a, __self: o };
  if (typeof e == "function" && (i = e.defaultProps)) for (s in i) d[s] === void 0 && (d[s] = i[s]);
  return z.vnode && z.vnode(u), u;
}
function lo(e) {
  return e.replace(/@s\.whatsapp\.net$/, "").replace(/@g\.us$/, "").replace(/@lid$/, "");
}
function uo(e) {
  if (!e) return (/* @__PURE__ */ new Date()).toISOString();
  const t = e > 1e12 ? e : e * 1e3;
  return new Date(t).toISOString();
}
function Yl(e) {
  if (!e || e.length === 0) return;
  const t = {
    ERROR: 0,
    PENDING: 1,
    SERVER_ACK: 2,
    DELIVERY_ACK: 3,
    READ: 4,
    PLAYED: 5
  }, n = {
    ERROR: "failed",
    PENDING: "sent",
    SERVER_ACK: "sent",
    DELIVERY_ACK: "delivered",
    READ: "read",
    PLAYED: "read"
  };
  let r = "", a = -1;
  for (const o of e) {
    const i = t[o.status] ?? -1;
    i > a && (a = i, r = o.status);
  }
  return n[r];
}
function Gl(e) {
  if (!e) return;
  const t = e.key.fromMe ? "outbound" : "inbound", n = e.message;
  return n ? {
    content: (typeof n.conversation == "string" ? n.conversation : void 0) || (n.extendedTextMessage && typeof n.extendedTextMessage.text == "string" ? n.extendedTextMessage.text : void 0) || (n.imageMessage && typeof n.imageMessage.caption == "string" ? n.imageMessage.caption : void 0) || "" || `[${e.messageType || "message"}]`,
    direction: t,
    type: e.messageType
  } : { content: "", direction: t, type: e.messageType };
}
function dr(e) {
  var r, a, o, i;
  const t = e.message, n = e.messageType || "unknown";
  return t ? t.conversation ? {
    content: t.conversation,
    messageType: "text",
    hasMedia: !1,
    caption: null,
    filename: null,
    mimeType: null,
    mediaUrl: null,
    mediaSize: null,
    reactionEmoji: null,
    reactedToMessageId: null
  } : (r = t.extendedTextMessage) != null && r.text ? {
    content: t.extendedTextMessage.text,
    messageType: "text",
    hasMedia: !1,
    caption: null,
    filename: null,
    mimeType: null,
    mediaUrl: null,
    mediaSize: null,
    reactionEmoji: null,
    reactedToMessageId: null
  } : ((a = t.protocolMessage) == null ? void 0 : a.type) === "REVOKE" ? {
    content: "",
    messageType: "revoked",
    hasMedia: !1,
    caption: null,
    filename: null,
    mimeType: null,
    mediaUrl: null,
    mediaSize: null,
    reactionEmoji: null,
    reactedToMessageId: null,
    revokedMessageId: ((o = t.protocolMessage.key) == null ? void 0 : o.id) || null
  } : t.reactionMessage ? {
    content: t.reactionMessage.text || "",
    messageType: "reaction",
    hasMedia: !1,
    caption: null,
    filename: null,
    mimeType: null,
    mediaUrl: null,
    mediaSize: null,
    reactionEmoji: t.reactionMessage.text || null,
    reactedToMessageId: ((i = t.reactionMessage.key) == null ? void 0 : i.id) || null
  } : t.imageMessage ? {
    content: t.imageMessage.caption || "",
    messageType: "image",
    hasMedia: !0,
    caption: t.imageMessage.caption || null,
    filename: t.imageMessage.fileName || null,
    mimeType: t.imageMessage.mimetype || "image/jpeg",
    mediaUrl: t.imageMessage.url || null,
    mediaSize: t.imageMessage.fileLength ? Number(t.imageMessage.fileLength) : null,
    reactionEmoji: null,
    reactedToMessageId: null
  } : t.videoMessage ? {
    content: t.videoMessage.caption || "",
    messageType: "video",
    hasMedia: !0,
    caption: t.videoMessage.caption || null,
    filename: t.videoMessage.fileName || null,
    mimeType: t.videoMessage.mimetype || "video/mp4",
    mediaUrl: t.videoMessage.url || null,
    mediaSize: t.videoMessage.fileLength ? Number(t.videoMessage.fileLength) : null,
    reactionEmoji: null,
    reactedToMessageId: null
  } : t.audioMessage ? {
    content: "",
    messageType: "audio",
    hasMedia: !0,
    caption: null,
    filename: t.audioMessage.fileName || null,
    mimeType: t.audioMessage.mimetype || "audio/ogg",
    mediaUrl: t.audioMessage.url || null,
    mediaSize: t.audioMessage.fileLength ? Number(t.audioMessage.fileLength) : null,
    reactionEmoji: null,
    reactedToMessageId: null
  } : t.documentMessage ? {
    content: t.documentMessage.caption || "",
    messageType: "document",
    hasMedia: !0,
    caption: t.documentMessage.caption || null,
    filename: t.documentMessage.fileName || t.documentMessage.title || null,
    mimeType: t.documentMessage.mimetype || "application/octet-stream",
    mediaUrl: t.documentMessage.url || null,
    mediaSize: t.documentMessage.fileLength ? Number(t.documentMessage.fileLength) : null,
    reactionEmoji: null,
    reactedToMessageId: null
  } : t.stickerMessage ? {
    content: "",
    messageType: "sticker",
    hasMedia: !0,
    caption: null,
    filename: null,
    mimeType: t.stickerMessage.mimetype || "image/webp",
    mediaUrl: t.stickerMessage.url || null,
    mediaSize: t.stickerMessage.fileLength ? Number(t.stickerMessage.fileLength) : null,
    reactionEmoji: null,
    reactedToMessageId: null
  } : t.contactMessage ? {
    content: t.contactMessage.displayName || "[Contact]",
    messageType: "contact",
    hasMedia: !1,
    caption: null,
    filename: null,
    mimeType: null,
    mediaUrl: null,
    mediaSize: null,
    reactionEmoji: null,
    reactedToMessageId: null
  } : t.locationMessage ? {
    content: t.locationMessage.name || `[Location: ${t.locationMessage.degreesLatitude}, ${t.locationMessage.degreesLongitude}]`,
    messageType: "location",
    hasMedia: !1,
    caption: null,
    filename: null,
    mimeType: null,
    mediaUrl: null,
    mediaSize: null,
    reactionEmoji: null,
    reactedToMessageId: null
  } : t.buttonsResponseMessage ? {
    content: t.buttonsResponseMessage.selectedDisplayText || "[Button response]",
    messageType: "buttons_response",
    hasMedia: !1,
    caption: null,
    filename: null,
    mimeType: null,
    mediaUrl: null,
    mediaSize: null,
    reactionEmoji: null,
    reactedToMessageId: null
  } : {
    content: "",
    messageType: n,
    hasMedia: !1,
    caption: null,
    filename: null,
    mimeType: null,
    mediaUrl: null,
    mediaSize: null,
    reactionEmoji: null,
    reactedToMessageId: null
  } : {
    content: "",
    messageType: n,
    hasMedia: !1,
    caption: null,
    filename: null,
    mimeType: null,
    mediaUrl: null,
    mediaSize: null,
    reactionEmoji: null,
    reactedToMessageId: null
  };
}
class Oi {
  constructor(t, n) {
    this.baseUrl = t, this.apiKey = n, this.type = "evolution", this.supportsTemplates = !1, this.has24HourWindow = !1, this.phoneLidMap = /* @__PURE__ */ new Map();
  }
  async request(t, n) {
    const r = `${this.baseUrl}${t}`, a = await fetch(r, {
      ...n,
      headers: {
        "Content-Type": "application/json",
        apikey: this.apiKey,
        ...n == null ? void 0 : n.headers
      }
    });
    if (!a.ok) {
      const o = await a.text().catch(() => "");
      throw new Error(`Evolution API ${a.status}: ${o}`);
    }
    return a.json();
  }
  async getConnectionState(t) {
    var a;
    const r = (a = (await this.request(
      `/instance/connectionState/${encodeURIComponent(t)}`
    )).instance) == null ? void 0 : a.state;
    return r === "open" ? "open" : r === "connecting" ? "connecting" : "close";
  }
  async findChats(t) {
    var s, d, u, f;
    const [n, r] = await Promise.all([
      this.request(
        `/chat/findChats/${encodeURIComponent(t)}`,
        { method: "POST", body: JSON.stringify({}) }
      ),
      this.request(
        `/chat/findContacts/${encodeURIComponent(t)}`,
        { method: "POST", body: JSON.stringify({}) }
      ).catch(() => [])
    ]), a = /* @__PURE__ */ new Map();
    for (const l of r)
      l.pushName && a.set(l.remoteJid, l.pushName);
    const o = /* @__PURE__ */ new Map();
    for (const l of n) {
      const m = l.remoteJid || l.id, h = (d = (s = l.lastMessage) == null ? void 0 : s.key) == null ? void 0 : d.remoteJidAlt;
      m != null && m.endsWith("@lid") && (h != null && h.endsWith("@s.whatsapp.net")) && (o.set(m, h), this.phoneLidMap.set(h, m));
    }
    const i = /* @__PURE__ */ new Map();
    for (const l of n) {
      const m = l.remoteJid || l.id;
      if (!m) continue;
      let h;
      if (m.endsWith("@g.us"))
        h = m;
      else if (m.endsWith("@lid")) {
        const S = o.get(m);
        if (!S) continue;
        h = S;
      } else if (m.endsWith("@s.whatsapp.net"))
        h = m;
      else
        continue;
      const w = i.get(h), p = Gl(l.lastMessage), g = l.updatedAt || ((u = l.lastMessage) != null && u.messageTimestamp ? uo(l.lastMessage.messageTimestamp) : void 0), v = h.endsWith("@g.us");
      let y;
      if (v)
        y = l.name || l.pushName || void 0;
      else {
        const S = (f = l.lastMessage) != null && f.pushName && !l.lastMessage.key.fromMe ? l.lastMessage.pushName : void 0;
        y = a.get(m) || a.get(h) || l.pushName || S || void 0;
      }
      w ? (m.endsWith("@lid") && (w.lidJid = m), w.contactName = w.contactName || y, w.profilePicUrl = w.profilePicUrl || l.profilePicUrl || void 0, w.unreadCount = (w.unreadCount || 0) + (l.unreadCount || 0), g && (!w.lastActiveAt || new Date(g) > new Date(w.lastActiveAt)) && (w.lastActiveAt = g, w.lastMessage = p || w.lastMessage)) : i.set(h, {
        id: h,
        phoneNumber: lo(h),
        contactName: y,
        profilePicUrl: l.profilePicUrl || void 0,
        lastActiveAt: g,
        lastMessage: p,
        unreadCount: l.unreadCount,
        lidJid: m.endsWith("@lid") ? m : void 0
      });
    }
    return Array.from(i.values()).sort((l, m) => !l.lastActiveAt || !m.lastActiveAt ? 0 : new Date(m.lastActiveAt).getTime() - new Date(l.lastActiveAt).getTime());
  }
  async ensureLidMap(t) {
    var r, a;
    if (this.phoneLidMap.size > 0) return;
    const n = await this.request(
      `/chat/findChats/${encodeURIComponent(t)}`,
      { method: "POST", body: JSON.stringify({}) }
    );
    for (const o of n) {
      const i = o.remoteJid || o.id, s = (a = (r = o.lastMessage) == null ? void 0 : r.key) == null ? void 0 : a.remoteJidAlt;
      i != null && i.endsWith("@lid") && (s != null && s.endsWith("@s.whatsapp.net")) && this.phoneLidMap.set(s, i);
    }
  }
  async findMessages(t, n, r = 50) {
    const a = n.endsWith("@g.us"), o = n.includes("@") ? n : `${n}@s.whatsapp.net`, i = (h) => this.request(
      `/chat/findMessages/${encodeURIComponent(t)}`,
      {
        method: "POST",
        body: JSON.stringify({
          where: { key: { remoteJid: h } },
          limit: r
        })
      }
    ).then((w) => {
      var p;
      return ((p = w == null ? void 0 : w.messages) == null ? void 0 : p.records) || [];
    });
    let s, d;
    if (a)
      s = await i(o), d = [];
    else {
      await this.ensureLidMap(t);
      const h = this.phoneLidMap.get(o);
      [s, d] = await Promise.all([
        i(o),
        h ? i(h) : Promise.resolve([])
      ]);
    }
    const u = /* @__PURE__ */ new Set(), f = [];
    for (const h of [...s, ...d])
      u.has(h.key.id) || (u.add(h.key.id), f.push(h));
    const l = lo(o), m = /* @__PURE__ */ new Set();
    for (const h of f) {
      const w = dr(h);
      w.messageType === "revoked" && w.revokedMessageId && m.add(w.revokedMessageId);
    }
    return f.filter((h) => dr(h).messageType !== "revoked").map((h) => {
      const w = dr(h), p = Yl(h.MessageUpdate), g = m.has(h.key.id);
      return {
        id: h.key.id,
        direction: h.key.fromMe ? "outbound" : "inbound",
        content: g ? "" : w.content,
        createdAt: uo(h.messageTimestamp),
        status: p,
        phoneNumber: l,
        hasMedia: g ? !1 : w.hasMedia,
        messageType: g ? "deleted" : w.messageType,
        reactionEmoji: w.reactionEmoji,
        reactedToMessageId: w.reactedToMessageId,
        caption: g ? null : w.caption,
        filename: g ? null : w.filename,
        mimeType: g ? null : w.mimeType,
        metadata: !g && w.hasMedia ? { mediaId: h.key.id } : {}
      };
    });
  }
  async sendText(t, n) {
    var a;
    const r = await this.request(
      `/message/sendText/${encodeURIComponent(t)}`,
      {
        method: "POST",
        body: JSON.stringify({
          number: n.to,
          text: n.body
        })
      }
    );
    return {
      messageId: ((a = r.key) == null ? void 0 : a.id) || "",
      status: r.status
    };
  }
  async sendMedia(t, n) {
    var a;
    const r = await this.request(
      `/message/sendMedia/${encodeURIComponent(t)}`,
      {
        method: "POST",
        body: JSON.stringify({
          number: n.to,
          mediatype: n.mediaType,
          media: n.media,
          caption: n.caption || void 0,
          fileName: n.fileName || void 0,
          mimetype: n.mimeType || void 0
        })
      }
    );
    return {
      messageId: ((a = r.key) == null ? void 0 : a.id) || "",
      status: r.status
    };
  }
  async sendButtons(t, n) {
    var a;
    const r = await this.request(
      `/message/sendButtons/${encodeURIComponent(t)}`,
      {
        method: "POST",
        body: JSON.stringify({
          number: n.to,
          title: n.header || "",
          description: n.body,
          buttons: n.buttons.map((o) => ({
            buttonId: o.id,
            buttonText: { displayText: o.title },
            type: "reply"
          }))
        })
      }
    );
    return {
      messageId: ((a = r.key) == null ? void 0 : a.id) || "",
      status: r.status
    };
  }
  async deleteMessage(t, n, r, a) {
    await this.request(`/chat/deleteMessageForEveryone/${encodeURIComponent(t)}`, {
      method: "DELETE",
      body: JSON.stringify({ id: n, remoteJid: r, fromMe: a })
    });
  }
  async getMediaUrl(t, n) {
    var r, a;
    try {
      const o = await this.request(
        `/chat/findMessages/${encodeURIComponent(t)}`,
        {
          method: "POST",
          body: JSON.stringify({
            where: { key: { id: n } },
            limit: 1
          })
        }
      ), i = (a = (r = o == null ? void 0 : o.messages) == null ? void 0 : r.records) == null ? void 0 : a[0];
      if (!i) return null;
      const s = await this.request(
        `/chat/getBase64FromMediaMessage/${encodeURIComponent(t)}`,
        {
          method: "POST",
          body: JSON.stringify({
            message: {
              key: i.key,
              message: i.message
            },
            convertToMp4: !1
          })
        }
      );
      return s.base64 && s.mimetype ? `data:${s.mimetype};base64,${s.base64}` : null;
    } catch {
      return null;
    }
  }
}
function ql(e, t, n) {
  if (e === "evolution")
    return new Oi(t, n);
  throw new Error(`Unknown provider type: ${e}`);
}
function Kl(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    const r = n.providerType || "evolution", a = `${n.apiUrl}|${n.apiKey}|${r}`;
    t.has(a) || t.set(a, ql(r, n.apiUrl, n.apiKey));
  }
  return t;
}
function fo(e, t) {
  const n = e.providerType || "evolution", r = `${e.apiUrl}|${e.apiKey}|${n}`;
  return t.get(r);
}
const Ii = Je(null), Li = Je(null);
function Xl({ config: e, children: t }) {
  const { devices: n } = e, r = me(() => Kl(n), [n]), [a, o] = M(
    e.defaultDeviceId || (n.length > 0 ? n[0].id : null)
  ), i = me(() => n.find((m) => m.id === a) || n[0] || null, [n, a]), s = U((m) => {
    o(m);
  }, []), d = U((m) => fo(m, r), [r]), u = me(() => i ? fo(i, r) : null, [i, r]), f = (i == null ? void 0 : i.readonly) ?? !1, l = me(() => ({
    devices: n,
    selectedDevice: i,
    selectDevice: s,
    getProviderForDevice: d,
    readonly: f
  }), [n, i, s, d, f]);
  return /* @__PURE__ */ c(Ii.Provider, { value: l, children: /* @__PURE__ */ c(Li.Provider, { value: u, children: t }) });
}
function Ut() {
  const e = Ve(Li);
  if (!e)
    throw new Error("useProvider must be used within a ProviderProvider");
  return e;
}
function Fi() {
  const e = Ve(Ii);
  if (!e)
    throw new Error("useDeviceContext must be used within a ProviderProvider");
  return e;
}
const $i = 6048e5, Jl = 864e5, Ql = 36e5, mo = Symbol.for("constructDateFrom");
function Ee(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && mo in e ? e[mo](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Te(e, t) {
  return Ee(t || e, e);
}
function Zl(e, t, n) {
  const r = Te(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Ee(e, NaN) : (r.setDate(r.getDate() + t), r);
}
let eu = {};
function Kn() {
  return eu;
}
function rn(e, t) {
  var s, d, u, f;
  const n = Kn(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : d.weekStartsOn) ?? n.weekStartsOn ?? ((f = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : f.weekStartsOn) ?? 0, a = Te(e, t == null ? void 0 : t.in), o = a.getDay(), i = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function In(e, t) {
  return rn(e, { ...t, weekStartsOn: 1 });
}
function Wi(e, t) {
  const n = Te(e, t == null ? void 0 : t.in), r = n.getFullYear(), a = Ee(n, 0);
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const o = In(a), i = Ee(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const s = In(i);
  return n.getTime() >= o.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function ho(e) {
  const t = Te(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function la(e, ...t) {
  const n = Ee.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Ln(e, t) {
  const n = Te(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function tu(e, t, n) {
  const [r, a] = la(
    n == null ? void 0 : n.in,
    e,
    t
  ), o = Ln(r), i = Ln(a), s = +o - ho(o), d = +i - ho(i);
  return Math.round((s - d) / Jl);
}
function nu(e, t) {
  const n = Wi(e, t), r = Ee(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), In(r);
}
function Ui(e) {
  return Ee(e, Date.now());
}
function zi(e, t, n) {
  const [r, a] = la(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Ln(r) == +Ln(a);
}
function ru(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function pt(e) {
  return !(!ru(e) && typeof e != "number" || isNaN(+Te(e)));
}
function au(e) {
  return (t) => {
    const n = Math.trunc, r = n(t);
    return r === 0 ? 0 : r;
  };
}
function ou(e, t, n) {
  const [r, a] = la(
    n == null ? void 0 : n.in,
    e,
    t
  ), o = (+r - +a) / Ql;
  return au()(o);
}
function iu(e, t) {
  const n = Te(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const su = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, cu = (e, t, n) => {
  let r;
  const a = su[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function fr(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const lu = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, uu = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, du = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, fu = {
  date: fr({
    formats: lu,
    defaultWidth: "full"
  }),
  time: fr({
    formats: uu,
    defaultWidth: "full"
  }),
  dateTime: fr({
    formats: du,
    defaultWidth: "full"
  })
}, mu = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, hu = (e, t, n, r) => mu[e];
function Xt(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      a = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[s] || e.values[i];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[o];
  };
}
const pu = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, wu = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, gu = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, vu = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, yu = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, bu = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, xu = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, _u = {
  ordinalNumber: xu,
  era: Xt({
    values: pu,
    defaultWidth: "wide"
  }),
  quarter: Xt({
    values: wu,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Xt({
    values: gu,
    defaultWidth: "wide"
  }),
  day: Xt({
    values: vu,
    defaultWidth: "wide"
  }),
  dayPeriod: Xt({
    values: yu,
    defaultWidth: "wide",
    formattingValues: bu,
    defaultFormattingWidth: "wide"
  })
};
function Jt(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const i = o[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(s) ? Nu(s, (l) => l.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      Su(s, (l) => l.test(i))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(d) : d, u = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(u)
    ) : u;
    const f = t.slice(i.length);
    return { value: u, rest: f };
  };
}
function Su(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Nu(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Cu(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const a = r[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(a.length);
    return { value: i, rest: s };
  };
}
const Mu = /^(\d+)(th|st|nd|rd)?/i, Pu = /\d+/i, Eu = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ku = {
  any: [/^b/i, /^(a|c)/i]
}, Tu = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Au = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Du = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ru = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Ou = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Iu = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Lu = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Fu = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, $u = {
  ordinalNumber: Cu({
    matchPattern: Mu,
    parsePattern: Pu,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Jt({
    matchPatterns: Eu,
    defaultMatchWidth: "wide",
    parsePatterns: ku,
    defaultParseWidth: "any"
  }),
  quarter: Jt({
    matchPatterns: Tu,
    defaultMatchWidth: "wide",
    parsePatterns: Au,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Jt({
    matchPatterns: Du,
    defaultMatchWidth: "wide",
    parsePatterns: Ru,
    defaultParseWidth: "any"
  }),
  day: Jt({
    matchPatterns: Ou,
    defaultMatchWidth: "wide",
    parsePatterns: Iu,
    defaultParseWidth: "any"
  }),
  dayPeriod: Jt({
    matchPatterns: Lu,
    defaultMatchWidth: "any",
    parsePatterns: Fu,
    defaultParseWidth: "any"
  })
}, Wu = {
  code: "en-US",
  formatDistance: cu,
  formatLong: fu,
  formatRelative: hu,
  localize: _u,
  match: $u,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Uu(e, t) {
  const n = Te(e, t == null ? void 0 : t.in);
  return tu(n, iu(n)) + 1;
}
function zu(e, t) {
  const n = Te(e, t == null ? void 0 : t.in), r = +In(n) - +nu(n);
  return Math.round(r / $i) + 1;
}
function Bi(e, t) {
  var f, l, m, h;
  const n = Te(e, t == null ? void 0 : t.in), r = n.getFullYear(), a = Kn(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : l.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((h = (m = a.locale) == null ? void 0 : m.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = Ee((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = rn(i, t), d = Ee((t == null ? void 0 : t.in) || e, 0);
  d.setFullYear(r, 0, o), d.setHours(0, 0, 0, 0);
  const u = rn(d, t);
  return +n >= +s ? r + 1 : +n >= +u ? r : r - 1;
}
function Bu(e, t) {
  var s, d, u, f;
  const n = Kn(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, a = Bi(e, t), o = Ee((t == null ? void 0 : t.in) || e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), rn(o, t);
}
function ju(e, t) {
  const n = Te(e, t == null ? void 0 : t.in), r = +rn(n, t) - +Bu(n, t);
  return Math.round(r / $i) + 1;
}
function J(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const at = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return J(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : J(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return J(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return J(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return J(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return J(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return J(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return J(a, t.length);
  }
}, _t = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, po = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return at.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = Bi(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const i = o % 100;
      return J(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : J(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Wi(e);
    return J(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return J(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return J(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return J(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return at.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return J(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const a = ju(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : J(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = zu(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : J(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : at.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Uu(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : J(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return J(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(o, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return J(o, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), a = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return J(a, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r === 12 ? a = _t.noon : r === 0 ? a = _t.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r >= 17 ? a = _t.evening : r >= 12 ? a = _t.afternoon : r >= 4 ? a = _t.morning : a = _t.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return at.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : at.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : J(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : J(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : at.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : at.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return at.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return go(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return mt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return mt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return go(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return mt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return mt(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + wo(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + mt(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + wo(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + mt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return J(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return J(+e, t.length);
  }
};
function wo(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + J(o, 2);
}
function go(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + J(Math.abs(e) / 60, 2) : mt(e, t);
}
function mt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = J(Math.trunc(r / 60), 2), o = J(r % 60, 2);
  return n + a + t + o;
}
const vo = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, ji = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Hu = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return vo(e, t);
  let o;
  switch (r) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", vo(r, t)).replace("{{time}}", ji(a, t));
}, Vu = {
  p: ji,
  P: Hu
}, Yu = /^D+$/, Gu = /^Y+$/, qu = ["D", "DD", "YY", "YYYY"];
function Ku(e) {
  return Yu.test(e);
}
function Xu(e) {
  return Gu.test(e);
}
function Ju(e, t, n) {
  const r = Qu(e, t, n);
  if (console.warn(r), qu.includes(e)) throw new RangeError(r);
}
function Qu(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Zu = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ed = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, td = /^'([^]*?)'?$/, nd = /''/g, rd = /[a-zA-Z]/;
function Ot(e, t, n) {
  var f, l, m, h;
  const r = Kn(), a = r.locale ?? Wu, o = r.firstWeekContainsDate ?? ((l = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, i = r.weekStartsOn ?? ((h = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : h.weekStartsOn) ?? 0, s = Te(e, n == null ? void 0 : n.in);
  if (!pt(s))
    throw new RangeError("Invalid time value");
  let d = t.match(ed).map((w) => {
    const p = w[0];
    if (p === "p" || p === "P") {
      const g = Vu[p];
      return g(w, a.formatLong);
    }
    return w;
  }).join("").match(Zu).map((w) => {
    if (w === "''")
      return { isToken: !1, value: "'" };
    const p = w[0];
    if (p === "'")
      return { isToken: !1, value: ad(w) };
    if (po[p])
      return { isToken: !0, value: w };
    if (p.match(rd))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + p + "`"
      );
    return { isToken: !1, value: w };
  });
  a.localize.preprocessor && (d = a.localize.preprocessor(s, d));
  const u = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: a
  };
  return d.map((w) => {
    if (!w.isToken) return w.value;
    const p = w.value;
    (Xu(p) || Ku(p)) && Ju(p, t, String(e));
    const g = po[p[0]];
    return g(s, p, a.localize, u);
  }).join("");
}
function ad(e) {
  const t = e.match(td);
  return t ? t[1].replace(nd, "'") : e;
}
function Hi(e, t) {
  return zi(
    Ee(e, e),
    Ui(e)
  );
}
function od(e, t, n) {
  return Zl(e, -1, n);
}
function Vi(e, t) {
  return zi(
    Ee(e, e),
    od(Ui(e))
  );
}
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const id = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), sd = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), yo = (e) => {
  const t = sd(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Yi = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), cd = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ld = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ud = T(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: a = "",
    children: o,
    iconNode: i,
    ...s
  }, d) => ae(
    "svg",
    {
      ref: d,
      ...ld,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Yi("lucide", a),
      ...!o && !cd(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...i.map(([u, f]) => ae(u, f)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const le = (e, t) => {
  const n = T(
    ({ className: r, ...a }, o) => ae(ud, {
      ref: o,
      iconNode: t,
      className: Yi(
        `lucide-${id(yo(e))}`,
        `lucide-${e}`,
        r
      ),
      ...a
    })
  );
  return n.displayName = yo(e), n;
};
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dd = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Lr = le("arrow-left", dd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fd = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], md = le("check", fd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hd = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Gi = le("chevron-down", hd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pd = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], wd = le("circle-alert", pd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gd = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], vd = le("circle-x", gd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yd = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], bd = le("copy", yd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xd = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], _d = le("file-text", xd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sd = [
  ["path", { d: "m15 17 5-5-5-5", key: "nf172w" }],
  ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }]
], Nd = le("forward", Sd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cd = [
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "M3 10a2 2 0 0 0 2 2h3", key: "1npucw" }],
  ["path", { d: "M3 5v12a2 2 0 0 0 2 2h3", key: "x1gjn2" }]
], Md = le("list-tree", Cd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pd = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], st = le("loader-circle", Pd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ed = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], kd = le("message-square", Ed);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Td = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], Ad = le("mic", Td);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dd = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], mr = le("paperclip", Dd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rd = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], Od = le("pause", Rd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Id = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], Ld = le("play", Id);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fd = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], $d = le("plus", Fd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wd = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], qi = le("refresh-cw", Wd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ud = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Ki = le("search", Ud);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zd = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], un = le("send", zd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bd = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], jd = le("trash-2", Bd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hd = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], Vd = le("wifi-off", Hd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yd = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ua = le("x", Yd);
function Xi(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Xi(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ji() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Xi(e)) && (r && (r += " "), r += t);
  return r;
}
const da = "-", Gd = (e) => {
  const t = Kd(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(da);
      return s[0] === "" && s.length !== 1 && s.shift(), Qi(s, t) || qd(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const d = n[i] || [];
      return s && r[i] ? [...d, ...r[i]] : d;
    }
  };
}, Qi = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), a = r ? Qi(e.slice(1), r) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const o = e.join(da);
  return (i = t.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : i.classGroupId;
}, bo = /^\[(.+)\]$/, qd = (e) => {
  if (bo.test(e)) {
    const t = bo.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Kd = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const a in n)
    Fr(n[a], r, a, t);
  return r;
}, Fr = (e, t, n, r) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const o = a === "" ? t : xo(t, a);
      o.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (Xd(a)) {
        Fr(a(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([o, i]) => {
      Fr(i, xo(t, o), n, r);
    });
  });
}, xo = (e, t) => {
  let n = e;
  return t.split(da).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Xd = (e) => e.isThemeGetter, Jd = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const a = (o, i) => {
    n.set(o, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let i = n.get(o);
      if (i !== void 0)
        return i;
      if ((i = r.get(o)) !== void 0)
        return a(o, i), i;
    },
    set(o, i) {
      n.has(o) ? n.set(o, i) : a(o, i);
    }
  };
}, $r = "!", Wr = ":", Qd = Wr.length, Zd = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (a) => {
    const o = [];
    let i = 0, s = 0, d = 0, u;
    for (let w = 0; w < a.length; w++) {
      let p = a[w];
      if (i === 0 && s === 0) {
        if (p === Wr) {
          o.push(a.slice(d, w)), d = w + Qd;
          continue;
        }
        if (p === "/") {
          u = w;
          continue;
        }
      }
      p === "[" ? i++ : p === "]" ? i-- : p === "(" ? s++ : p === ")" && s--;
    }
    const f = o.length === 0 ? a : a.substring(d), l = ef(f), m = l !== f, h = u && u > d ? u - d : void 0;
    return {
      modifiers: o,
      hasImportantModifier: m,
      baseClassName: l,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const a = t + Wr, o = r;
    r = (i) => i.startsWith(a) ? o(i.substring(a.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const a = r;
    r = (o) => n({
      className: o,
      parseClassName: a
    });
  }
  return r;
}, ef = (e) => e.endsWith($r) ? e.substring(0, e.length - 1) : e.startsWith($r) ? e.substring(1) : e, tf = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const a = [];
    let o = [];
    return r.forEach((i) => {
      i[0] === "[" || t[i] ? (a.push(...o.sort(), i), o = []) : o.push(i);
    }), a.push(...o.sort()), a;
  };
}, nf = (e) => ({
  cache: Jd(e.cacheSize),
  parseClassName: Zd(e),
  sortModifiers: tf(e),
  ...Gd(e)
}), rf = /\s+/, af = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: a,
    sortModifiers: o
  } = t, i = [], s = e.trim().split(rf);
  let d = "";
  for (let u = s.length - 1; u >= 0; u -= 1) {
    const f = s[u], {
      isExternal: l,
      modifiers: m,
      hasImportantModifier: h,
      baseClassName: w,
      maybePostfixModifierPosition: p
    } = n(f);
    if (l) {
      d = f + (d.length > 0 ? " " + d : d);
      continue;
    }
    let g = !!p, v = r(g ? w.substring(0, p) : w);
    if (!v) {
      if (!g) {
        d = f + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (v = r(w), !v) {
        d = f + (d.length > 0 ? " " + d : d);
        continue;
      }
      g = !1;
    }
    const y = o(m).join(":"), S = h ? y + $r : y, N = S + v;
    if (i.includes(N))
      continue;
    i.push(N);
    const x = a(v, g);
    for (let C = 0; C < x.length; ++C) {
      const b = x[C];
      i.push(S + b);
    }
    d = f + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function of() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Zi(t)) && (r && (r += " "), r += n);
  return r;
}
const Zi = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Zi(e[r])) && (n && (n += " "), n += t);
  return n;
};
function sf(e, ...t) {
  let n, r, a, o = i;
  function i(d) {
    const u = t.reduce((f, l) => l(f), e());
    return n = nf(u), r = n.cache.get, a = n.cache.set, o = s, s(d);
  }
  function s(d) {
    const u = r(d);
    if (u)
      return u;
    const f = af(d, n);
    return a(d, f), f;
  }
  return function() {
    return o(of.apply(null, arguments));
  };
}
const pe = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, es = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ts = /^\((?:(\w[\w-]*):)?(.+)\)$/i, cf = /^\d+\/\d+$/, lf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, uf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, df = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ff = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, mf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, St = (e) => cf.test(e), B = (e) => !!e && !Number.isNaN(Number(e)), ot = (e) => !!e && Number.isInteger(Number(e)), hr = (e) => e.endsWith("%") && B(e.slice(0, -1)), qe = (e) => lf.test(e), hf = () => !0, pf = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  uf.test(e) && !df.test(e)
), ns = () => !1, wf = (e) => ff.test(e), gf = (e) => mf.test(e), vf = (e) => !D(e) && !R(e), yf = (e) => zt(e, os, ns), D = (e) => es.test(e), dt = (e) => zt(e, is, pf), pr = (e) => zt(e, Nf, B), _o = (e) => zt(e, rs, ns), bf = (e) => zt(e, as, gf), vn = (e) => zt(e, ss, wf), R = (e) => ts.test(e), Qt = (e) => Bt(e, is), xf = (e) => Bt(e, Cf), So = (e) => Bt(e, rs), _f = (e) => Bt(e, os), Sf = (e) => Bt(e, as), yn = (e) => Bt(e, ss, !0), zt = (e, t, n) => {
  const r = es.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Bt = (e, t, n = !1) => {
  const r = ts.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, rs = (e) => e === "position" || e === "percentage", as = (e) => e === "image" || e === "url", os = (e) => e === "length" || e === "size" || e === "bg-size", is = (e) => e === "length", Nf = (e) => e === "number", Cf = (e) => e === "family-name", ss = (e) => e === "shadow", Mf = () => {
  const e = pe("color"), t = pe("font"), n = pe("text"), r = pe("font-weight"), a = pe("tracking"), o = pe("leading"), i = pe("breakpoint"), s = pe("container"), d = pe("spacing"), u = pe("radius"), f = pe("shadow"), l = pe("inset-shadow"), m = pe("text-shadow"), h = pe("drop-shadow"), w = pe("blur"), p = pe("perspective"), g = pe("aspect"), v = pe("ease"), y = pe("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], x = () => [...N(), R, D], C = () => ["auto", "hidden", "clip", "visible", "scroll"], b = () => ["auto", "contain", "none"], _ = () => [R, D, d], E = () => [St, "full", "auto", ..._()], L = () => [ot, "none", "subgrid", R, D], j = () => ["auto", {
    span: ["full", ot, R, D]
  }, ot, R, D], Y = () => [ot, "auto", R, D], K = () => ["auto", "min", "max", "fr", R, D], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ..._()], V = () => [St, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ..._()], P = () => [e, R, D], O = () => [...N(), So, _o, {
    position: [R, D]
  }], X = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], oe = () => ["auto", "cover", "contain", _f, yf, {
    size: [R, D]
  }], ve = () => [hr, Qt, dt], ne = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    R,
    D
  ], ue = () => ["", B, Qt, dt], he = () => ["solid", "dashed", "dotted", "double"], Se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], G = () => [B, hr, So, _o], Re = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    w,
    R,
    D
  ], fe = () => ["none", B, R, D], Ne = () => ["none", B, R, D], k = () => [B, R, D], re = () => [St, "full", ..._()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [qe],
      breakpoint: [qe],
      color: [hf],
      container: [qe],
      "drop-shadow": [qe],
      ease: ["in", "out", "in-out"],
      font: [vf],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [qe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [qe],
      shadow: [qe],
      spacing: ["px", B],
      text: [qe],
      "text-shadow": [qe],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", St, D, R, g]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [B, D, R, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": S()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": S()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: x()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: C()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": C()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": C()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: b()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": b()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": b()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: E()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": E()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": E()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: E()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: E()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: E()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: E()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: E()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: E()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [ot, "auto", R, D]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [St, "full", "auto", s, ..._()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [B, St, "auto", "initial", "none", D]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", B, R, D]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", B, R, D]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ot, "first", "last", "none", R, D]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": L()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: j()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Y()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Y()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": L()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: j()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Y()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Y()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": K()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": K()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: _()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": _()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": _()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...H(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Z(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Z()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": H()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Z(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Z()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: _()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: _()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: _()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: _()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: _()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: _()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: _()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: _()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: _()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: W()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: W()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: W()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: W()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: W()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: W()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: W()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: W()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: W()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": _()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": _()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: V()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...V()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          s,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...V()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          s,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...V()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...V()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...V()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...V()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Qt, dt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, R, pr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", hr, D]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [xf, D, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [a, R, D]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [B, "none", R, pr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ..._()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", R, D]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", R, D]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: P()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: P()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...he(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [B, "from-font", "auto", R, dt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: P()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [B, "auto", R, D]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: _()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", R, D]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", R, D]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: O()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: X()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: oe()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ot, R, D],
          radial: ["", R, D],
          conic: [ot, R, D]
        }, Sf, bf]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: P()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ve()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ve()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ve()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: P()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: P()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: P()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: ne()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": ne()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": ne()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": ne()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": ne()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": ne()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": ne()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": ne()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": ne()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": ne()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": ne()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": ne()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": ne()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": ne()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": ne()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: ue()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": ue()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": ue()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": ue()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": ue()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": ue()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": ue()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": ue()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": ue()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": ue()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": ue()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...he(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...he(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: P()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": P()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": P()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": P()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": P()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": P()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": P()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": P()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": P()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: P()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...he(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [B, R, D]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", B, Qt, dt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: P()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          f,
          yn,
          vn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: P()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", l, yn, vn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": P()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: ue()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: P()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [B, dt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": P()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": ue()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": P()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, yn, vn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": P()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [B, R, D]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Se(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Se()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [B]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": G()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": G()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": P()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": P()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": G()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": G()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": P()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": P()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": G()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": G()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": P()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": P()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": G()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": G()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": P()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": P()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": G()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": G()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": P()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": P()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": G()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": G()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": P()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": P()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": G()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": G()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": P()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": P()
      }],
      "mask-image-radial": [{
        "mask-radial": [R, D]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": G()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": G()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": P()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": P()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": N()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [B]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": G()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": G()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": P()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": P()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: O()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: X()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: oe()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", R, D]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          R,
          D
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Re()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [B, R, D]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [B, R, D]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          h,
          yn,
          vn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": P()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", B, R, D]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [B, R, D]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", B, R, D]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [B, R, D]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", B, R, D]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          R,
          D
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Re()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [B, R, D]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [B, R, D]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", B, R, D]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [B, R, D]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", B, R, D]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [B, R, D]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [B, R, D]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", B, R, D]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": _()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": _()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": _()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", R, D]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [B, "initial", R, D]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", v, R, D]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [B, R, D]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, R, D]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [p, R, D]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": x()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: fe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": fe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": fe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": fe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Ne()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Ne()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Ne()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Ne()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: k()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": k()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": k()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [R, D, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: x()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: re()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": re()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": re()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": re()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: P()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: P()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", R, D]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": _()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", R, D]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...P()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [B, Qt, dt, pr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...P()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Pf = /* @__PURE__ */ sf(Mf);
function F(...e) {
  return Pf(Ji(e));
}
function fa({ interval: e = 5e3, enabled: t = !0, onPoll: n }) {
  const [r, a] = M(!1), [o, i] = M(!1), s = A(null), d = U(() => {
    if (!t) return;
    a(!0);
    const f = async () => {
      try {
        await n();
      } catch (l) {
        console.error("Polling error:", l);
      }
    };
    f(), s.current = setInterval(f, e);
  }, [e, t, n]), u = U(() => {
    s.current && (clearInterval(s.current), s.current = null), a(!1);
  }, []);
  return I(() => {
    const f = () => {
      document.hidden ? (i(!0), u()) : (i(!1), t && d());
    };
    return document.addEventListener("visibilitychange", f), () => {
      document.removeEventListener("visibilitychange", f);
    };
  }, [t, d, u]), I(() => (t && !document.hidden ? d() : u(), () => {
    u();
  }), [t, d, u]), {
    isPolling: r,
    isPaused: o
  };
}
function No(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Xn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((a) => {
      const o = No(a, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          typeof o == "function" ? o() : No(e[a], null);
        }
      };
  };
}
function se(...e) {
  return U(Xn(...e), e);
}
// @__NO_SIDE_EFFECTS__
function It(e) {
  const t = /* @__PURE__ */ Ef(e), n = T((r, a) => {
    const { children: o, ...i } = r, s = je.toArray(o), d = s.find(Tf);
    if (d) {
      const u = d.props.children, f = s.map((l) => l === d ? je.count(u) > 1 ? je.only(null) : Ze(u) ? u.props.children : null : l);
      return /* @__PURE__ */ c(t, { ...i, ref: a, children: Ze(u) ? Wt(u, void 0, f) : null });
    }
    return /* @__PURE__ */ c(t, { ...i, ref: a, children: o });
  });
  return n.displayName = `${e}.Slot`, n;
}
var cs = /* @__PURE__ */ It("Slot");
// @__NO_SIDE_EFFECTS__
function Ef(e) {
  const t = T((n, r) => {
    const { children: a, ...o } = n;
    if (Ze(a)) {
      const i = Df(a), s = Af(o, a.props);
      return a.type !== Q && (s.ref = r ? Xn(r, i) : i), Wt(a, s);
    }
    return je.count(a) > 1 ? je.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var kf = Symbol("radix.slottable");
function Tf(e) {
  return Ze(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === kf;
}
function Af(e, t) {
  const n = { ...t };
  for (const r in t) {
    const a = e[r], o = t[r];
    /^on[A-Z]/.test(r) ? a && o ? n[r] = (...s) => {
      const d = o(...s);
      return a(...s), d;
    } : a && (n[r] = a) : r === "style" ? n[r] = { ...a, ...o } : r === "className" && (n[r] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Df(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const Co = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Mo = Ji, ls = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Mo(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: a, defaultVariants: o } = t, i = Object.keys(a).map((u) => {
    const f = n == null ? void 0 : n[u], l = o == null ? void 0 : o[u];
    if (f === null) return null;
    const m = Co(f) || Co(l);
    return a[u][m];
  }), s = n && Object.entries(n).reduce((u, f) => {
    let [l, m] = f;
    return m === void 0 || (u[l] = m), u;
  }, {}), d = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, f) => {
    let { class: l, className: m, ...h } = f;
    return Object.entries(h).every((w) => {
      let [p, g] = w;
      return Array.isArray(g) ? g.includes({
        ...o,
        ...s
      }[p]) : {
        ...o,
        ...s
      }[p] === g;
    }) ? [
      ...u,
      l,
      m
    ] : u;
  }, []);
  return Mo(e, i, d, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Rf = ls(
  "wa:inline-flex wa:items-center wa:justify-center wa:gap-2 wa:whitespace-nowrap wa:rounded-md wa:text-sm wa:font-medium wa:transition-all disabled:wa:pointer-events-none disabled:wa:opacity-50 [&_svg]:wa:pointer-events-none [&_svg:not([class*='size-'])]:wa:size-4 wa:shrink-0 [&_svg]:wa:shrink-0 wa:outline-none focus-visible:wa:border-ring focus-visible:wa:ring-ring/50 focus-visible:wa:ring-[3px] aria-invalid:wa:ring-destructive/20 dark:aria-invalid:wa:ring-destructive/40 aria-invalid:wa:border-destructive",
  {
    variants: {
      variant: {
        default: "wa:bg-primary wa:text-primary-foreground hover:wa:bg-primary/90",
        destructive: "wa:bg-destructive wa:text-white hover:wa:bg-destructive/90 focus-visible:wa:ring-destructive/20 dark:focus-visible:wa:ring-destructive/40 dark:wa:bg-destructive/60",
        outline: "wa:border wa:bg-background wa:shadow-xs hover:wa:bg-accent hover:wa:text-accent-foreground dark:wa:bg-input/30 dark:wa:border-input dark:hover:wa:bg-input/50",
        secondary: "wa:bg-secondary wa:text-secondary-foreground hover:wa:bg-secondary/80",
        ghost: "hover:wa:bg-accent hover:wa:text-accent-foreground dark:hover:wa:bg-accent/50",
        link: "wa:text-primary wa:underline-offset-4 hover:wa:underline"
      },
      size: {
        default: "wa:h-9 wa:px-4 wa:py-2 has-[>svg]:wa:px-3",
        sm: "wa:h-8 wa:rounded-md wa:gap-1.5 wa:px-3 has-[>svg]:wa:px-2.5",
        lg: "wa:h-10 wa:rounded-md wa:px-6 has-[>svg]:wa:px-4",
        icon: "wa:size-9",
        "icon-sm": "wa:size-8",
        "icon-lg": "wa:size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function ce({
  className: e,
  variant: t,
  size: n,
  asChild: r = !1,
  ...a
}) {
  return /* @__PURE__ */ c(
    r ? cs : "button",
    {
      "data-slot": "button",
      className: F(Rf({ variant: t, size: n, className: e })),
      ...a
    }
  );
}
var Of = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], q = Of.reduce((e, t) => {
  const n = /* @__PURE__ */ It(`Primitive.${t}`), r = T((a, o) => {
    const { asChild: i, ...s } = a, d = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c(d, { ...s, ref: o });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function us(e, t) {
  e && qn(() => e.dispatchEvent(t));
}
var ke = globalThis != null && globalThis.document ? nt : () => {
};
function If(e, t) {
  return $t((n, r) => t[n][r] ?? n, e);
}
var Ae = (e) => {
  const { present: t, children: n } = e, r = Lf(t), a = typeof n == "function" ? n({ present: r.isPresent }) : je.only(n), o = se(r.ref, Ff(a));
  return typeof n == "function" || r.isPresent ? Wt(a, { ref: o }) : null;
};
Ae.displayName = "Presence";
function Lf(e) {
  const [t, n] = M(), r = A(null), a = A(e), o = A("none"), i = e ? "mounted" : "unmounted", [s, d] = If(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return I(() => {
    const u = bn(r.current);
    o.current = s === "mounted" ? u : "none";
  }, [s]), ke(() => {
    const u = r.current, f = a.current;
    if (f !== e) {
      const m = o.current, h = bn(u);
      e ? d("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? d("UNMOUNT") : d(f && m !== h ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, d]), ke(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, l = (h) => {
        const p = bn(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && p && (d("ANIMATION_END"), !a.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, m = (h) => {
        h.target === t && (o.current = bn(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: U((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function bn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Ff(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function $f(e, t) {
  const n = Je(t), r = (o) => {
    const { children: i, ...s } = o, d = me(() => s, Object.values(s));
    return /* @__PURE__ */ c(n.Provider, { value: d, children: i });
  };
  r.displayName = e + "Provider";
  function a(o) {
    const i = Ve(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${o}\` must be used within \`${e}\``);
  }
  return [r, a];
}
function ut(e, t = []) {
  let n = [];
  function r(o, i) {
    const s = Je(i), d = n.length;
    n = [...n, i];
    const u = (l) => {
      var v;
      const { scope: m, children: h, ...w } = l, p = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[d]) || s, g = me(() => w, Object.values(w));
      return /* @__PURE__ */ c(p.Provider, { value: g, children: h });
    };
    u.displayName = o + "Provider";
    function f(l, m) {
      var p;
      const h = ((p = m == null ? void 0 : m[e]) == null ? void 0 : p[d]) || s, w = Ve(h);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${l}\` must be used within \`${o}\``);
    }
    return [u, f];
  }
  const a = () => {
    const o = n.map((i) => Je(i));
    return function(s) {
      const d = (s == null ? void 0 : s[e]) || o;
      return me(
        () => ({ [`__scope${e}`]: { ...s, [e]: d } }),
        [s, d]
      );
    };
  };
  return a.scopeName = e, [r, Wf(a, ...t)];
}
function Wf(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(o) {
      const i = r.reduce((s, { useScope: d, scopeName: u }) => {
        const l = d(o)[`__scope${u}`];
        return { ...s, ...l };
      }, {});
      return me(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function ge(e) {
  const t = A(e);
  return I(() => {
    t.current = e;
  }), me(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
var Uf = Je(void 0);
function ma(e) {
  const t = Ve(Uf);
  return e || t || "ltr";
}
function zf(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function $(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), n === !1 || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  };
}
function Bf(e, t) {
  return $t((n, r) => t[n][r] ?? n, e);
}
var ha = "ScrollArea", [ds] = ut(ha), [jf, De] = ds(ha), fs = T(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: a,
      scrollHideDelay: o = 600,
      ...i
    } = e, [s, d] = M(null), [u, f] = M(null), [l, m] = M(null), [h, w] = M(null), [p, g] = M(null), [v, y] = M(0), [S, N] = M(0), [x, C] = M(!1), [b, _] = M(!1), E = se(t, (j) => d(j)), L = ma(a);
    return /* @__PURE__ */ c(
      jf,
      {
        scope: n,
        type: r,
        dir: L,
        scrollHideDelay: o,
        scrollArea: s,
        viewport: u,
        onViewportChange: f,
        content: l,
        onContentChange: m,
        scrollbarX: h,
        onScrollbarXChange: w,
        scrollbarXEnabled: x,
        onScrollbarXEnabledChange: C,
        scrollbarY: p,
        onScrollbarYChange: g,
        scrollbarYEnabled: b,
        onScrollbarYEnabledChange: _,
        onCornerWidthChange: y,
        onCornerHeightChange: N,
        children: /* @__PURE__ */ c(
          q.div,
          {
            dir: L,
            ...i,
            ref: E,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": v + "px",
              "--radix-scroll-area-corner-height": S + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
fs.displayName = ha;
var ms = "ScrollAreaViewport", hs = T(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: a, ...o } = e, i = De(ms, n), s = A(null), d = se(t, s, i.onViewportChange);
    return /* @__PURE__ */ c(Q, { children: [
      /* @__PURE__ */ c(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: a
        }
      ),
      /* @__PURE__ */ c(
        q.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...o,
          ref: d,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ c("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
hs.displayName = ms;
var Ye = "ScrollAreaScrollbar", ps = T(
  (e, t) => {
    const { forceMount: n, ...r } = e, a = De(Ye, e.__scopeScrollArea), { onScrollbarXEnabledChange: o, onScrollbarYEnabledChange: i } = a, s = e.orientation === "horizontal";
    return I(() => (s ? o(!0) : i(!0), () => {
      s ? o(!1) : i(!1);
    }), [s, o, i]), a.type === "hover" ? /* @__PURE__ */ c(Hf, { ...r, ref: t, forceMount: n }) : a.type === "scroll" ? /* @__PURE__ */ c(Vf, { ...r, ref: t, forceMount: n }) : a.type === "auto" ? /* @__PURE__ */ c(ws, { ...r, ref: t, forceMount: n }) : a.type === "always" ? /* @__PURE__ */ c(pa, { ...r, ref: t }) : null;
  }
);
ps.displayName = Ye;
var Hf = T((e, t) => {
  const { forceMount: n, ...r } = e, a = De(Ye, e.__scopeScrollArea), [o, i] = M(!1);
  return I(() => {
    const s = a.scrollArea;
    let d = 0;
    if (s) {
      const u = () => {
        window.clearTimeout(d), i(!0);
      }, f = () => {
        d = window.setTimeout(() => i(!1), a.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", u), s.addEventListener("pointerleave", f), () => {
        window.clearTimeout(d), s.removeEventListener("pointerenter", u), s.removeEventListener("pointerleave", f);
      };
    }
  }, [a.scrollArea, a.scrollHideDelay]), /* @__PURE__ */ c(Ae, { present: n || o, children: /* @__PURE__ */ c(
    ws,
    {
      "data-state": o ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), Vf = T((e, t) => {
  const { forceMount: n, ...r } = e, a = De(Ye, e.__scopeScrollArea), o = e.orientation === "horizontal", i = Qn(() => d("SCROLL_END"), 100), [s, d] = Bf("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return I(() => {
    if (s === "idle") {
      const u = window.setTimeout(() => d("HIDE"), a.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [s, a.scrollHideDelay, d]), I(() => {
    const u = a.viewport, f = o ? "scrollLeft" : "scrollTop";
    if (u) {
      let l = u[f];
      const m = () => {
        const h = u[f];
        l !== h && (d("SCROLL"), i()), l = h;
      };
      return u.addEventListener("scroll", m), () => u.removeEventListener("scroll", m);
    }
  }, [a.viewport, o, d, i]), /* @__PURE__ */ c(Ae, { present: n || s !== "hidden", children: /* @__PURE__ */ c(
    pa,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: $(e.onPointerEnter, () => d("POINTER_ENTER")),
      onPointerLeave: $(e.onPointerLeave, () => d("POINTER_LEAVE"))
    }
  ) });
}), ws = T((e, t) => {
  const n = De(Ye, e.__scopeScrollArea), { forceMount: r, ...a } = e, [o, i] = M(!1), s = e.orientation === "horizontal", d = Qn(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, f = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(s ? u : f);
    }
  }, 10);
  return Lt(n.viewport, d), Lt(n.content, d), /* @__PURE__ */ c(Ae, { present: r || o, children: /* @__PURE__ */ c(
    pa,
    {
      "data-state": o ? "visible" : "hidden",
      ...a,
      ref: t
    }
  ) });
}), pa = T((e, t) => {
  const { orientation: n = "vertical", ...r } = e, a = De(Ye, e.__scopeScrollArea), o = A(null), i = A(0), [s, d] = M({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = xs(s.viewport, s.content), f = {
    ...r,
    sizes: s,
    onSizesChange: d,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (m) => o.current = m,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (m) => i.current = m
  };
  function l(m, h) {
    return Jf(m, i.current, s, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ c(
    Yf,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (a.viewport && o.current) {
          const m = a.viewport.scrollLeft, h = Po(m, s, a.dir);
          o.current.style.transform = `translate3d(${h}px, 0, 0)`;
        }
      },
      onWheelScroll: (m) => {
        a.viewport && (a.viewport.scrollLeft = m);
      },
      onDragScroll: (m) => {
        a.viewport && (a.viewport.scrollLeft = l(m, a.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ c(
    Gf,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (a.viewport && o.current) {
          const m = a.viewport.scrollTop, h = Po(m, s);
          o.current.style.transform = `translate3d(0, ${h}px, 0)`;
        }
      },
      onWheelScroll: (m) => {
        a.viewport && (a.viewport.scrollTop = m);
      },
      onDragScroll: (m) => {
        a.viewport && (a.viewport.scrollTop = l(m));
      }
    }
  ) : null;
}), Yf = T((e, t) => {
  const { sizes: n, onSizesChange: r, ...a } = e, o = De(Ye, e.__scopeScrollArea), [i, s] = M(), d = A(null), u = se(t, d, o.onScrollbarXChange);
  return I(() => {
    d.current && s(getComputedStyle(d.current));
  }, [d]), /* @__PURE__ */ c(
    vs,
    {
      "data-orientation": "horizontal",
      ...a,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: o.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: o.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Jn(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, l) => {
        if (o.viewport) {
          const m = o.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(m), Ss(m, l) && f.preventDefault();
        }
      },
      onResize: () => {
        d.current && o.viewport && i && r({
          content: o.viewport.scrollWidth,
          viewport: o.viewport.offsetWidth,
          scrollbar: {
            size: d.current.clientWidth,
            paddingStart: $n(i.paddingLeft),
            paddingEnd: $n(i.paddingRight)
          }
        });
      }
    }
  );
}), Gf = T((e, t) => {
  const { sizes: n, onSizesChange: r, ...a } = e, o = De(Ye, e.__scopeScrollArea), [i, s] = M(), d = A(null), u = se(t, d, o.onScrollbarYChange);
  return I(() => {
    d.current && s(getComputedStyle(d.current));
  }, [d]), /* @__PURE__ */ c(
    vs,
    {
      "data-orientation": "vertical",
      ...a,
      ref: u,
      sizes: n,
      style: {
        top: 0,
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Jn(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, l) => {
        if (o.viewport) {
          const m = o.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(m), Ss(m, l) && f.preventDefault();
        }
      },
      onResize: () => {
        d.current && o.viewport && i && r({
          content: o.viewport.scrollHeight,
          viewport: o.viewport.offsetHeight,
          scrollbar: {
            size: d.current.clientHeight,
            paddingStart: $n(i.paddingTop),
            paddingEnd: $n(i.paddingBottom)
          }
        });
      }
    }
  );
}), [qf, gs] = ds(Ye), vs = T((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: a,
    onThumbChange: o,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: d,
    onDragScroll: u,
    onWheelScroll: f,
    onResize: l,
    ...m
  } = e, h = De(Ye, n), [w, p] = M(null), g = se(t, (E) => p(E)), v = A(null), y = A(""), S = h.viewport, N = r.content - r.viewport, x = ge(f), C = ge(d), b = Qn(l, 10);
  function _(E) {
    if (v.current) {
      const L = E.clientX - v.current.left, j = E.clientY - v.current.top;
      u({ x: L, y: j });
    }
  }
  return I(() => {
    const E = (L) => {
      const j = L.target;
      (w == null ? void 0 : w.contains(j)) && x(L, N);
    };
    return document.addEventListener("wheel", E, { passive: !1 }), () => document.removeEventListener("wheel", E, { passive: !1 });
  }, [S, w, N, x]), I(C, [r, C]), Lt(w, b), Lt(h.content, b), /* @__PURE__ */ c(
    qf,
    {
      scope: n,
      scrollbar: w,
      hasThumb: a,
      onThumbChange: ge(o),
      onThumbPointerUp: ge(i),
      onThumbPositionChange: C,
      onThumbPointerDown: ge(s),
      children: /* @__PURE__ */ c(
        q.div,
        {
          ...m,
          ref: g,
          style: { position: "absolute", ...m.style },
          onPointerDown: $(e.onPointerDown, (E) => {
            E.button === 0 && (E.target.setPointerCapture(E.pointerId), v.current = w.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), _(E));
          }),
          onPointerMove: $(e.onPointerMove, _),
          onPointerUp: $(e.onPointerUp, (E) => {
            const L = E.target;
            L.hasPointerCapture(E.pointerId) && L.releasePointerCapture(E.pointerId), document.body.style.webkitUserSelect = y.current, h.viewport && (h.viewport.style.scrollBehavior = ""), v.current = null;
          })
        }
      )
    }
  );
}), Fn = "ScrollAreaThumb", ys = T(
  (e, t) => {
    const { forceMount: n, ...r } = e, a = gs(Fn, e.__scopeScrollArea);
    return /* @__PURE__ */ c(Ae, { present: n || a.hasThumb, children: /* @__PURE__ */ c(Kf, { ref: t, ...r }) });
  }
), Kf = T(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...a } = e, o = De(Fn, n), i = gs(Fn, n), { onThumbPositionChange: s } = i, d = se(
      t,
      (l) => i.onThumbChange(l)
    ), u = A(void 0), f = Qn(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return I(() => {
      const l = o.viewport;
      if (l) {
        const m = () => {
          if (f(), !u.current) {
            const h = Qf(l, s);
            u.current = h, s();
          }
        };
        return s(), l.addEventListener("scroll", m), () => l.removeEventListener("scroll", m);
      }
    }, [o.viewport, f, s]), /* @__PURE__ */ c(
      q.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...a,
        ref: d,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: $(e.onPointerDownCapture, (l) => {
          const h = l.target.getBoundingClientRect(), w = l.clientX - h.left, p = l.clientY - h.top;
          i.onThumbPointerDown({ x: w, y: p });
        }),
        onPointerUp: $(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
ys.displayName = Fn;
var wa = "ScrollAreaCorner", bs = T(
  (e, t) => {
    const n = De(wa, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ c(Xf, { ...e, ref: t }) : null;
  }
);
bs.displayName = wa;
var Xf = T((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, a = De(wa, n), [o, i] = M(0), [s, d] = M(0), u = !!(o && s);
  return Lt(a.scrollbarX, () => {
    var l;
    const f = ((l = a.scrollbarX) == null ? void 0 : l.offsetHeight) || 0;
    a.onCornerHeightChange(f), d(f);
  }), Lt(a.scrollbarY, () => {
    var l;
    const f = ((l = a.scrollbarY) == null ? void 0 : l.offsetWidth) || 0;
    a.onCornerWidthChange(f), i(f);
  }), u ? /* @__PURE__ */ c(
    q.div,
    {
      ...r,
      ref: t,
      style: {
        width: o,
        height: s,
        position: "absolute",
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function $n(e) {
  return e ? parseInt(e, 10) : 0;
}
function xs(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Jn(e) {
  const t = xs(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function Jf(e, t, n, r = "ltr") {
  const a = Jn(n), o = a / 2, i = t || o, s = a - i, d = n.scrollbar.paddingStart + i, u = n.scrollbar.size - n.scrollbar.paddingEnd - s, f = n.content - n.viewport, l = r === "ltr" ? [0, f] : [f * -1, 0];
  return _s([d, u], l)(e);
}
function Po(e, t, n = "ltr") {
  const r = Jn(t), a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, o = t.scrollbar.size - a, i = t.content - t.viewport, s = o - r, d = n === "ltr" ? [0, i] : [i * -1, 0], u = zf(e, d);
  return _s([0, i], [0, s])(u);
}
function _s(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Ss(e, t) {
  return e > 0 && e < t;
}
var Qf = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function a() {
    const o = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== o.left, s = n.top !== o.top;
    (i || s) && t(), n = o, r = window.requestAnimationFrame(a);
  })(), () => window.cancelAnimationFrame(r);
};
function Qn(e, t) {
  const n = ge(e), r = A(0);
  return I(() => () => window.clearTimeout(r.current), []), U(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Lt(e, t) {
  const n = ge(t);
  ke(() => {
    let r = 0;
    if (e) {
      const a = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return a.observe(e), () => {
        window.cancelAnimationFrame(r), a.unobserve(e);
      };
    }
  }, [e, n]);
}
var Zf = fs, em = hs, tm = bs;
function dn({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ c(
    Zf,
    {
      "data-slot": "scroll-area",
      className: F("wa:relative", e),
      style: { overflow: "hidden", ...n.style },
      ...n,
      children: [
        /* @__PURE__ */ c(
          em,
          {
            "data-slot": "scroll-area-viewport",
            style: { width: "100%", height: "100%", overflowY: "scroll" },
            className: "focus-visible:wa:ring-ring/50 wa:rounded-[inherit] wa:transition-[color,box-shadow] wa:outline-none focus-visible:wa:ring-[3px] focus-visible:wa:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ c(nm, {}),
        /* @__PURE__ */ c(tm, {})
      ]
    }
  );
}
function nm({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ c(
    ps,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: t,
      style: {
        display: "flex",
        touchAction: "none",
        userSelect: "none",
        padding: "1px",
        ...t === "vertical" ? { height: "100%", width: "8px" } : { width: "100%", height: "8px", flexDirection: "column" }
      },
      ...n,
      children: /* @__PURE__ */ c(
        ys,
        {
          "data-slot": "scroll-area-thumb",
          style: { background: "#00a884", borderRadius: "9999px", position: "relative", flex: 1 }
        }
      )
    }
  );
}
function Me({ className: e, ...t }) {
  return /* @__PURE__ */ c(
    "div",
    {
      "data-slot": "skeleton",
      className: F("wa:bg-accent wa:animate-pulse wa:rounded-md", e),
      ...t
    }
  );
}
function rm(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var wr = { exports: {} }, gr = {};
const am = /* @__PURE__ */ rm(ca);
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eo;
function om() {
  if (Eo) return gr;
  Eo = 1;
  var e = am;
  function t(l, m) {
    return l === m && (l !== 0 || 1 / l === 1 / m) || l !== l && m !== m;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, a = e.useEffect, o = e.useLayoutEffect, i = e.useDebugValue;
  function s(l, m) {
    var h = m(), w = r({ inst: { value: h, getSnapshot: m } }), p = w[0].inst, g = w[1];
    return o(
      function() {
        p.value = h, p.getSnapshot = m, d(p) && g({ inst: p });
      },
      [l, h, m]
    ), a(
      function() {
        return d(p) && g({ inst: p }), l(function() {
          d(p) && g({ inst: p });
        });
      },
      [l]
    ), i(h), h;
  }
  function d(l) {
    var m = l.getSnapshot;
    l = l.value;
    try {
      var h = m();
      return !n(l, h);
    } catch {
      return !0;
    }
  }
  function u(l, m) {
    return m();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return gr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, gr;
}
var ko;
function im() {
  return ko || (ko = 1, wr.exports = om()), wr.exports;
}
var sm = im();
function cm() {
  return sm.useSyncExternalStore(
    lm,
    () => !0,
    () => !1
  );
}
function lm() {
  return () => {
  };
}
var ga = "Avatar", [um] = ut(ga), [dm, Ns] = um(ga), Cs = T(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [a, o] = M("idle");
    return /* @__PURE__ */ c(
      dm,
      {
        scope: n,
        imageLoadingStatus: a,
        onImageLoadingStatusChange: o,
        children: /* @__PURE__ */ c(q.span, { ...r, ref: t })
      }
    );
  }
);
Cs.displayName = ga;
var Ms = "AvatarImage", Ps = T(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: a = () => {
    }, ...o } = e, i = Ns(Ms, n), s = fm(r, o), d = ge((u) => {
      a(u), i.onImageLoadingStatusChange(u);
    });
    return ke(() => {
      s !== "idle" && d(s);
    }, [s, d]), s === "loaded" ? /* @__PURE__ */ c(q.img, { ...o, ref: t, src: r }) : null;
  }
);
Ps.displayName = Ms;
var Es = "AvatarFallback", ks = T(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...a } = e, o = Ns(Es, n), [i, s] = M(r === void 0);
    return I(() => {
      if (r !== void 0) {
        const d = window.setTimeout(() => s(!0), r);
        return () => window.clearTimeout(d);
      }
    }, [r]), i && o.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ c(q.span, { ...a, ref: t }) : null;
  }
);
ks.displayName = Es;
function To(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function fm(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = cm(), a = A(null), o = r ? (a.current || (a.current = new window.Image()), a.current) : null, [i, s] = M(
    () => To(o, e)
  );
  return ke(() => {
    s(To(o, e));
  }, [o, e]), ke(() => {
    const d = (l) => () => {
      s(l);
    };
    if (!o) return;
    const u = d("loaded"), f = d("error");
    return o.addEventListener("load", u), o.addEventListener("error", f), t && (o.referrerPolicy = t), typeof n == "string" && (o.crossOrigin = n), () => {
      o.removeEventListener("load", u), o.removeEventListener("error", f);
    };
  }, [o, n, t]), i;
}
var mm = Cs, hm = Ps, pm = ks;
function Ts({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    mm,
    {
      "data-slot": "avatar",
      className: F(
        "wa:relative wa:flex wa:size-8 wa:shrink-0 wa:overflow-hidden wa:rounded-full",
        e
      ),
      ...t
    }
  );
}
function As({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    hm,
    {
      "data-slot": "avatar-image",
      className: F("wa:aspect-square wa:size-full", e),
      ...t
    }
  );
}
function Ds({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    pm,
    {
      "data-slot": "avatar-fallback",
      className: F(
        "wa:bg-muted wa:flex wa:size-full wa:items-center wa:justify-center wa:rounded-full",
        e
      ),
      ...t
    }
  );
}
function wm(e) {
  try {
    const t = new Date(e);
    return pt(t) ? Hi(t) ? Ot(t, "HH:mm") : Vi(t) ? "Yesterday" : Ot(t, "MMM d") : "";
  } catch {
    return "";
  }
}
function gm(e, t) {
  if (e) {
    const n = e.trim().split(/\s+/);
    return n.length >= 2 ? (n[0][0] + n[1][0]).toUpperCase() : e.slice(0, 2).toUpperCase();
  }
  return t ? t.replace(/\D/g, "").slice(-2) : "??";
}
const Rs = T(
  ({ onSelectConversation: e, selectedConversationId: t, isHidden: n = !1, instance: r }, a) => {
    const o = Ut(), [i, s] = M([]), [d, u] = M(!0), [f, l] = M(!1), [m, h] = M(""), [w, p] = M(!1), g = U(async () => {
      if (!r) {
        s([]), u(!1);
        return;
      }
      try {
        const C = (await o.findChats(r)).map((b) => ({
          id: b.id,
          phoneNumber: b.phoneNumber,
          status: "active",
          lastActiveAt: b.lastActiveAt || "",
          contactName: b.contactName,
          profilePicUrl: b.profilePicUrl,
          lastMessage: b.lastMessage,
          unreadCount: b.unreadCount
        }));
        s(C);
      } catch (x) {
        console.error("Error fetching conversations:", x);
      } finally {
        u(!1), l(!1);
      }
    }, [r, o]);
    I(() => {
      u(!0), g();
    }, [g]);
    const v = () => {
      l(!0), g();
    }, { isPolling: y } = fa({
      interval: 1e4,
      enabled: !!r,
      onPoll: g
    }), S = (x) => {
      const C = i.find((b) => b.phoneNumber === x);
      C && e(C);
    };
    Gn(a, () => ({
      refresh: async () => {
        if (!r) return [];
        l(!0);
        try {
          const C = (await o.findChats(r)).map((b) => ({
            id: b.id,
            phoneNumber: b.phoneNumber,
            status: "active",
            lastActiveAt: b.lastActiveAt || "",
            contactName: b.contactName,
            profilePicUrl: b.profilePicUrl,
            lastMessage: b.lastMessage,
            unreadCount: b.unreadCount
          }));
          return s(C), l(!1), C;
        } catch {
          return l(!1), [];
        }
      },
      selectByPhoneNumber: S
    }));
    const N = i.filter((x) => {
      var b;
      const C = m.toLowerCase();
      return x.phoneNumber.toLowerCase().includes(C) || ((b = x.contactName) == null ? void 0 : b.toLowerCase().includes(C));
    });
    return d ? /* @__PURE__ */ c("div", { className: F(
      "wa-sidebar wa:w-full wa:border-r wa:border-[#e9edef] wa:bg-white wa:flex wa:flex-col",
      n && "wa-sidebar--hidden"
    ), children: [
      /* @__PURE__ */ c("div", { className: "wa:px-3 wa:pt-2.5 wa:pb-1.5", children: [
        /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:justify-between wa:mb-2.5", children: [
          /* @__PURE__ */ c(Me, { className: "wa:h-6 wa:w-16" }),
          /* @__PURE__ */ c(Me, { className: "wa:h-8 wa:w-8 wa:rounded-full" })
        ] }),
        /* @__PURE__ */ c(Me, { className: "wa:h-[35px] wa:w-full wa:rounded-lg" })
      ] }),
      /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:space-y-0", children: [1, 2, 3, 4, 5, 6, 7, 8].map((x) => /* @__PURE__ */ c("div", { className: "wa:flex wa:gap-3 wa:px-3 wa:py-3", children: [
        /* @__PURE__ */ c(Me, { className: "wa:h-[49px] wa:w-[49px] wa:rounded-full wa:flex-shrink-0" }),
        /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:space-y-2 wa:pt-1", children: [
          /* @__PURE__ */ c(Me, { className: "wa:h-4 wa:w-32" }),
          /* @__PURE__ */ c(Me, { className: "wa:h-3 wa:w-48" })
        ] })
      ] }, x)) })
    ] }) : r ? /* @__PURE__ */ c("div", { className: F(
      "wa-sidebar wa:w-full wa:border-r wa:border-[#e9edef] wa:bg-white wa:flex wa:flex-col",
      n && "wa-sidebar--hidden"
    ), children: [
      /* @__PURE__ */ c("div", { className: "wa:flex-shrink-0", children: [
        /* @__PURE__ */ c("div", { style: { padding: "12px 16px 4px" }, className: "wa:flex wa:items-center wa:justify-between", children: [
          /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:gap-2", children: [
            /* @__PURE__ */ c("h1", { className: "wa:text-[22px] wa:font-bold wa:text-[#111b21] wa:leading-none", children: "Chats" }),
            y && /* @__PURE__ */ c(
              "div",
              {
                className: "wa:h-2 wa:w-2 wa:rounded-full wa:bg-green-500 wa:animate-pulse",
                title: "Auto-updating"
              }
            )
          ] }),
          /* @__PURE__ */ c(
            ce,
            {
              onClick: v,
              disabled: f,
              variant: "ghost",
              size: "icon",
              className: "wa:text-[#54656f] hover:wa:bg-transparent wa:h-10 wa:w-10",
              children: /* @__PURE__ */ c(qi, { className: F("wa:h-[18px] wa:w-[18px]", f && "wa:animate-spin") })
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { style: { padding: "0 16px 8px" }, children: /* @__PURE__ */ c("div", { style: { padding: "0 16px" }, className: F(
          "wa:flex wa:items-center wa:gap-3 wa:rounded-lg wa:h-[35px] wa:transition-colors",
          w ? "wa:bg-white wa:ring-2 wa:ring-[#00a884]" : "wa:bg-[#f0f2f5]"
        ), children: [
          /* @__PURE__ */ c("div", { className: "wa:flex-shrink-0", children: /* @__PURE__ */ c(Ki, { className: F(
            "wa:h-[15px] wa:w-[15px] wa:transition-colors",
            w ? "wa:text-[#00a884]" : "wa:text-[#54656f]"
          ) }) }),
          /* @__PURE__ */ c(
            "input",
            {
              type: "text",
              value: m,
              onChange: (x) => h(x.target.value),
              onFocus: () => p(!0),
              onBlur: () => p(!1),
              placeholder: "Search or start new chat",
              className: "wa:flex-1 wa:bg-transparent wa:border-none wa:outline-none wa:text-[13px] wa:text-[#111b21] wa:placeholder-[#667781] wa:h-full"
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ c(dn, { className: "wa:flex-1 wa:h-0 wa:overflow-hidden", children: N.length === 0 ? /* @__PURE__ */ c("div", { className: "wa:py-8 wa:text-center wa:text-[#667781] wa:text-[14px]", children: m ? "No conversations found" : "No conversations yet" }) : /* @__PURE__ */ c("div", { className: "wa:w-full wa:overflow-hidden", children: N.map((x) => /* @__PURE__ */ c(
        "button",
        {
          onClick: () => e(x),
          className: F(
            "wa:w-full wa:text-left wa:transition-colors wa:relative wa:overflow-hidden wa:flex wa:items-center wa:cursor-pointer",
            "hover:wa:bg-[#f5f6f6]",
            t === x.id && "wa:bg-[#f0f2f5]"
          ),
          style: { padding: "5px 15px 5px 13px" },
          children: [
            t === x.id && /* @__PURE__ */ c("div", { className: "wa:absolute wa:left-0 wa:top-0 wa:bottom-0 wa:w-[3px] wa:bg-[#00a884]" }),
            /* @__PURE__ */ c("div", { className: "wa:flex wa:gap-3.5 wa:items-center wa:w-full wa:py-3.5 wa:overflow-hidden", children: [
              /* @__PURE__ */ c(Ts, { className: "wa:h-[49px] wa:w-[49px] wa:flex-shrink-0", children: [
                x.profilePicUrl && /* @__PURE__ */ c(As, { src: x.profilePicUrl, alt: x.contactName || x.phoneNumber }),
                /* @__PURE__ */ c(Ds, { className: "wa:bg-[#dfe5e7] wa:text-[#54656f] wa:text-sm wa:font-medium", children: gm(x.contactName, x.phoneNumber) })
              ] }),
              /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0 wa:overflow-hidden", children: [
                /* @__PURE__ */ c("div", { className: "wa:flex wa:justify-between wa:items-baseline wa:gap-2", children: [
                  /* @__PURE__ */ c("p", { className: "wa:text-[17px] wa:font-normal wa:text-[#111b21] wa:truncate wa:leading-[21px]", children: x.contactName || x.phoneNumber }),
                  /* @__PURE__ */ c("span", { className: F(
                    "wa:text-[12px] wa:flex-shrink-0 wa:leading-[14px]",
                    x.unreadCount && x.unreadCount > 0 ? "wa:text-[#00a884]" : "wa:text-[#667781]"
                  ), children: wm(x.lastActiveAt) })
                ] }),
                /* @__PURE__ */ c("div", { className: "wa:flex wa:justify-between wa:items-center wa:gap-2 wa:mt-[2px]", children: [
                  x.lastMessage ? /* @__PURE__ */ c("p", { className: "wa:text-[14px] wa:text-[#667781] wa:truncate wa:leading-[20px]", children: [
                    x.lastMessage.direction === "outbound" && /* @__PURE__ */ c("span", { className: "wa:text-[#53bdeb]", children: "✓ " }),
                    x.lastMessage.content
                  ] }) : /* @__PURE__ */ c("span", {}),
                  x.unreadCount != null && x.unreadCount > 0 && /* @__PURE__ */ c("span", { className: "wa:flex-shrink-0 wa:bg-[#00a884] wa:text-white wa:text-[11px] wa:font-bold wa:rounded-full wa:min-w-[20px] wa:h-[20px] wa:flex wa:items-center wa:justify-center wa:px-1", children: x.unreadCount })
                ] })
              ] })
            ] })
          ]
        },
        x.id
      )) }) })
    ] }) : /* @__PURE__ */ c("div", { className: F(
      "wa-sidebar wa:w-full wa:border-r wa:border-[#e9edef] wa:bg-white wa:flex wa:flex-col wa:items-center wa:justify-center",
      n && "wa-sidebar--hidden"
    ), children: /* @__PURE__ */ c("p", { className: "wa:text-[#667781] wa:text-[14px]", children: "Select an instance to view chats" }) });
  }
);
Rs.displayName = "ConversationList";
function vm(e) {
  if (!isFinite(e) || e < 0) return "0:00";
  const t = Math.floor(e / 60), n = Math.floor(e % 60);
  return `${t}:${n.toString().padStart(2, "0")}`;
}
function ym(e, t) {
  let n = 0;
  for (let a = 0; a < e.length; a++)
    n = (n << 5) - n + e.charCodeAt(a) | 0;
  const r = [];
  for (let a = 0; a < t; a++) {
    n = (n << 5) - n + a | 0;
    const o = Math.abs(n) % 100 / 100;
    r.push(0.15 + o * 0.85);
  }
  return r;
}
function Os({ src: e, isOutbound: t, onError: n }) {
  const r = A(null), [a, o] = M(!1), [i, s] = M(0), [d, u] = M(0), [f] = M(() => ym(e, 40)), l = i > 0 ? d / i : 0;
  I(() => {
    const p = r.current;
    if (!p) return;
    const g = () => s(p.duration), v = () => u(p.currentTime), y = () => {
      o(!1), u(0);
    }, S = () => s(p.duration);
    return p.addEventListener("loadedmetadata", g), p.addEventListener("timeupdate", v), p.addEventListener("ended", y), p.addEventListener("durationchange", S), () => {
      p.removeEventListener("loadedmetadata", g), p.removeEventListener("timeupdate", v), p.removeEventListener("ended", y), p.removeEventListener("durationchange", S);
    };
  }, []);
  const m = U(() => {
    const p = r.current;
    p && (a ? (p.pause(), o(!1)) : p.play().then(() => o(!0)).catch(() => {
    }));
  }, [a]), h = U((p) => {
    const g = r.current;
    if (!g || !i) return;
    const v = p.currentTarget.getBoundingClientRect(), y = Math.max(0, Math.min(1, (p.clientX - v.left) / v.width));
    g.currentTime = y * i, u(g.currentTime);
  }, [i]), w = a || d > 0 ? d : i;
  return /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:gap-2 wa:min-w-[240px] wa:max-w-[320px]", children: [
    /* @__PURE__ */ c("audio", { ref: r, src: e, preload: "metadata", onError: n }),
    /* @__PURE__ */ c("div", { className: F(
      "wa:relative wa:flex-shrink-0 wa:w-10 wa:h-10 wa:rounded-full wa:flex wa:items-center wa:justify-center",
      t ? "wa:bg-[#b3ddb1]" : "wa:bg-[#e2e2e2]"
    ), children: /* @__PURE__ */ c(Ad, { className: F("wa:h-5 wa:w-5", t ? "wa:text-[#4faa48]" : "wa:text-[#8696a0]") }) }),
    /* @__PURE__ */ c(
      "button",
      {
        onClick: m,
        className: F(
          "wa:flex-shrink-0 wa:w-8 wa:h-8 wa:rounded-full wa:flex wa:items-center wa:justify-center wa:transition-colors",
          t ? "wa:text-[#4faa48] hover:wa:bg-[#b3ddb1]" : "wa:text-[#8696a0] hover:wa:bg-[#e2e2e2]"
        ),
        children: a ? /* @__PURE__ */ c(Od, { className: "wa:h-5 wa:w-5 wa:fill-current" }) : /* @__PURE__ */ c(Ld, { className: "wa:h-5 wa:w-5 wa:fill-current wa:ml-0.5" })
      }
    ),
    /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0", children: [
      /* @__PURE__ */ c(
        "div",
        {
          className: "wa:relative wa:h-7 wa:flex wa:items-center wa:gap-[1.5px] wa:cursor-pointer",
          onClick: h,
          children: [
            f.map((p, g) => {
              const y = g / f.length < l;
              return /* @__PURE__ */ c(
                "div",
                {
                  className: F(
                    "wa:w-[2.5px] wa:rounded-full wa:transition-colors wa:flex-shrink-0",
                    y ? t ? "wa:bg-[#4faa48]" : "wa:bg-[#4fc3f7]" : t ? "wa:bg-[#b3ddb1]" : "wa:bg-[#c8c8c8]"
                  ),
                  style: { height: `${p * 100}%` }
                },
                g
              );
            }),
            /* @__PURE__ */ c(
              "div",
              {
                className: F(
                  "wa:absolute wa:w-3 wa:h-3 wa:rounded-full wa:top-1/2 -wa:translate-y-1/2 -wa:translate-x-1/2 wa:shadow-sm",
                  t ? "wa:bg-[#4faa48]" : "wa:bg-[#8696a0]"
                ),
                style: { left: `${l * 100}%` }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ c("span", { className: F(
        "wa:text-[11px] wa:leading-none",
        t ? "wa:text-[#4d8b4a]" : "wa:text-[#8696a0]"
      ), children: vm(w) })
    ] })
  ] });
}
function bm({ mediaId: e, messageType: t, caption: n, filename: r, isOutbound: a, instance: o }) {
  const i = Ut(), [s, d] = M(null), [u, f] = M(!0), [l, m] = M(!1), h = U(() => {
    m(!0);
  }, []);
  return I(() => {
    if (!o) {
      f(!1);
      return;
    }
    let w = !1;
    return i.getMediaUrl(o, e).then((p) => {
      w || (d(p), f(!1));
    }).catch(() => {
      w || (m(!0), f(!1));
    }), () => {
      w = !0;
    };
  }, [e, o, i]), u ? /* @__PURE__ */ c("div", { className: "wa:w-64 wa:h-48 wa:rounded wa:flex wa:items-center wa:justify-center", children: /* @__PURE__ */ c(Me, { className: "wa:w-full wa:h-full" }) }) : l || !s ? /* @__PURE__ */ c("div", { className: F(
    "wa:bg-muted wa:rounded wa:flex wa:items-center wa:justify-center",
    t === "audio" ? "wa:min-w-[240px] wa:h-12 wa:px-4" : "wa:w-64 wa:h-48"
  ), children: /* @__PURE__ */ c("p", { className: F("wa:text-sm", a ? "wa:text-green-100" : "wa:text-muted-foreground"), children: "Media unavailable" }) }) : /* @__PURE__ */ c("div", { children: [
    t === "image" && /* @__PURE__ */ c(
      "img",
      {
        src: s,
        alt: n || "Image",
        className: "wa:rounded wa:max-w-full wa:h-auto wa:max-h-96",
        onError: h
      }
    ),
    t === "video" && /* @__PURE__ */ c(
      "video",
      {
        src: s,
        controls: !0,
        className: "wa:rounded wa:max-w-full wa:h-auto wa:max-h-96",
        onError: h
      }
    ),
    t === "audio" && /* @__PURE__ */ c(Os, { src: s, isOutbound: a, onError: h }),
    t === "document" && /* @__PURE__ */ c(
      "a",
      {
        href: s,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "wa:flex wa:items-center wa:gap-2 wa:text-sm wa:underline wa:cursor-pointer hover:wa:opacity-80 wa:transition-opacity wa:text-[#00a884]",
        children: [
          /* @__PURE__ */ c(_d, { className: "wa:h-4 wa:w-4" }),
          r || "Download document"
        ]
      }
    )
  ] });
}
var xm = ca[" useId ".trim().toString()] || (() => {
}), _m = 0;
function kt(e) {
  const [t, n] = M(xm());
  return ke(() => {
    n((r) => r ?? String(_m++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Sm = ca[" useInsertionEffect ".trim().toString()] || ke;
function va({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [a, o, i] = Nm({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, d = s ? e : a;
  {
    const f = A(e !== void 0);
    I(() => {
      const l = f.current;
      l !== s && console.warn(
        `${r} is changing from ${l ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = s;
    }, [s, r]);
  }
  const u = U(
    (f) => {
      var l;
      if (s) {
        const m = Cm(f) ? f(e) : f;
        m !== e && ((l = i.current) == null || l.call(i, m));
      } else
        o(f);
    },
    [s, e, o, i]
  );
  return [d, u];
}
function Nm({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = M(e), a = A(n), o = A(t);
  return Sm(() => {
    o.current = t;
  }, [t]), I(() => {
    var i;
    a.current !== n && ((i = o.current) == null || i.call(o, n), a.current = n);
  }, [n, a]), [n, r, o];
}
function Cm(e) {
  return typeof e == "function";
}
function Mm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ge(e);
  I(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Pm = "DismissableLayer", Ur = "dismissableLayer.update", Em = "dismissableLayer.pointerDownOutside", km = "dismissableLayer.focusOutside", Ao, Is = Je({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ya = T(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: o,
      onInteractOutside: i,
      onDismiss: s,
      ...d
    } = e, u = Ve(Is), [f, l] = M(null), m = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = M({}), w = se(t, (b) => l(b)), p = Array.from(u.layers), [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = p.indexOf(g), y = f ? p.indexOf(f) : -1, S = u.layersWithOutsidePointerEventsDisabled.size > 0, N = y >= v, x = Dm((b) => {
      const _ = b.target, E = [...u.branches].some((L) => L.contains(_));
      !N || E || (a == null || a(b), i == null || i(b), b.defaultPrevented || s == null || s());
    }, m), C = Rm((b) => {
      const _ = b.target;
      [...u.branches].some((L) => L.contains(_)) || (o == null || o(b), i == null || i(b), b.defaultPrevented || s == null || s());
    }, m);
    return Mm((b) => {
      y === u.layers.size - 1 && (r == null || r(b), !b.defaultPrevented && s && (b.preventDefault(), s()));
    }, m), I(() => {
      if (f)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Ao = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Do(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Ao);
        };
    }, [f, m, n, u]), I(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Do());
    }, [f, u]), I(() => {
      const b = () => h({});
      return document.addEventListener(Ur, b), () => document.removeEventListener(Ur, b);
    }, []), /* @__PURE__ */ c(
      q.div,
      {
        ...d,
        ref: w,
        style: {
          pointerEvents: S ? N ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: $(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: $(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: $(
          e.onPointerDownCapture,
          x.onPointerDownCapture
        )
      }
    );
  }
);
ya.displayName = Pm;
var Tm = "DismissableLayerBranch", Am = T((e, t) => {
  const n = Ve(Is), r = A(null), a = se(t, r);
  return I(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ c(q.div, { ...e, ref: a });
});
Am.displayName = Tm;
function Dm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ge(e), r = A(!1), a = A(() => {
  });
  return I(() => {
    const o = (s) => {
      if (s.target && !r.current) {
        let d = function() {
          Ls(
            Em,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = d, t.addEventListener("click", a.current, { once: !0 })) : d();
      } else
        t.removeEventListener("click", a.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", o), t.removeEventListener("click", a.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Rm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ge(e), r = A(!1);
  return I(() => {
    const a = (o) => {
      o.target && !r.current && Ls(km, n, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Do() {
  const e = new CustomEvent(Ur);
  document.dispatchEvent(e);
}
function Ls(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), r ? us(a, o) : a.dispatchEvent(o);
}
var vr = "focusScope.autoFocusOnMount", yr = "focusScope.autoFocusOnUnmount", Ro = { bubbles: !1, cancelable: !0 }, Om = "FocusScope", ba = T((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: o,
    ...i
  } = e, [s, d] = M(null), u = ge(a), f = ge(o), l = A(null), m = se(t, (p) => d(p)), h = A({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  I(() => {
    if (r) {
      let p = function(S) {
        if (h.paused || !s) return;
        const N = S.target;
        s.contains(N) ? l.current = N : it(l.current, { select: !0 });
      }, g = function(S) {
        if (h.paused || !s) return;
        const N = S.relatedTarget;
        N !== null && (s.contains(N) || it(l.current, { select: !0 }));
      }, v = function(S) {
        if (document.activeElement === document.body)
          for (const x of S)
            x.removedNodes.length > 0 && it(s);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", g);
      const y = new MutationObserver(v);
      return s && y.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", g), y.disconnect();
      };
    }
  }, [r, s, h.paused]), I(() => {
    if (s) {
      Io.add(h);
      const p = document.activeElement;
      if (!s.contains(p)) {
        const v = new CustomEvent(vr, Ro);
        s.addEventListener(vr, u), s.dispatchEvent(v), v.defaultPrevented || (Im(Um(Fs(s)), { select: !0 }), document.activeElement === p && it(s));
      }
      return () => {
        s.removeEventListener(vr, u), setTimeout(() => {
          const v = new CustomEvent(yr, Ro);
          s.addEventListener(yr, f), s.dispatchEvent(v), v.defaultPrevented || it(p ?? document.body, { select: !0 }), s.removeEventListener(yr, f), Io.remove(h);
        }, 0);
      };
    }
  }, [s, u, f, h]);
  const w = U(
    (p) => {
      if (!n && !r || h.paused) return;
      const g = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, v = document.activeElement;
      if (g && v) {
        const y = p.currentTarget, [S, N] = Lm(y);
        S && N ? !p.shiftKey && v === N ? (p.preventDefault(), n && it(S, { select: !0 })) : p.shiftKey && v === S && (p.preventDefault(), n && it(N, { select: !0 })) : v === y && p.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ c(q.div, { tabIndex: -1, ...i, ref: m, onKeyDown: w });
});
ba.displayName = Om;
function Im(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (it(r, { select: t }), document.activeElement !== n) return;
}
function Lm(e) {
  const t = Fs(e), n = Oo(t, e), r = Oo(t.reverse(), e);
  return [n, r];
}
function Fs(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Oo(e, t) {
  for (const n of e)
    if (!Fm(n, { upTo: t })) return n;
}
function Fm(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function $m(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function it(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && $m(e) && t && e.select();
  }
}
var Io = Wm();
function Wm() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Lo(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Lo(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Lo(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Um(e) {
  return e.filter((t) => t.tagName !== "A");
}
var zm = "Portal", xa = T((e, t) => {
  var s;
  const { container: n, ...r } = e, [a, o] = M(!1);
  ke(() => o(!0), []);
  const i = n || a && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? Ke.createPortal(/* @__PURE__ */ c(q.div, { ...r, ref: t }), i) : null;
});
xa.displayName = zm;
var br = 0;
function $s() {
  I(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Fo()), document.body.insertAdjacentElement("beforeend", e[1] ?? Fo()), br++, () => {
      br === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), br--;
    };
  }, []);
}
function Fo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ue = function() {
  return Ue = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Ue.apply(this, arguments);
};
function Ws(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Bm(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var Pn = "right-scroll-bar-position", En = "width-before-scroll-bar", jm = "with-scroll-bars-hidden", Hm = "--removed-body-scroll-bar-size";
function xr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Vm(e, t) {
  var n = M(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var a = n.value;
          a !== r && (n.value = r, n.callback(r, a));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Ym = typeof window < "u" ? nt : I, $o = /* @__PURE__ */ new WeakMap();
function Gm(e, t) {
  var n = Vm(null, function(r) {
    return e.forEach(function(a) {
      return xr(a, r);
    });
  });
  return Ym(function() {
    var r = $o.get(n);
    if (r) {
      var a = new Set(r), o = new Set(e), i = n.current;
      a.forEach(function(s) {
        o.has(s) || xr(s, null);
      }), o.forEach(function(s) {
        a.has(s) || xr(s, i);
      });
    }
    $o.set(n, e);
  }, [e]), n;
}
function qm(e) {
  return e;
}
function Km(e, t) {
  t === void 0 && (t = qm);
  var n = [], r = !1, a = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(o) {
      var i = t(o, r);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(o);
      }
      n = {
        push: function(s) {
          return o(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(o) {
      r = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(o), i = n;
      }
      var d = function() {
        var f = i;
        i = [], f.forEach(o);
      }, u = function() {
        return Promise.resolve().then(d);
      };
      u(), n = {
        push: function(f) {
          i.push(f), u();
        },
        filter: function(f) {
          return i = i.filter(f), n;
        }
      };
    }
  };
  return a;
}
function Xm(e) {
  e === void 0 && (e = {});
  var t = Km(null);
  return t.options = Ue({ async: !0, ssr: !1 }, e), t;
}
var Us = function(e) {
  var t = e.sideCar, n = Ws(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return ae(r, Ue({}, n));
};
Us.isSideCarExport = !0;
function Jm(e, t) {
  return e.useMedium(t), Us;
}
var zs = Xm(), _r = function() {
}, Zn = T(function(e, t) {
  var n = A(null), r = M({
    onScrollCapture: _r,
    onWheelCapture: _r,
    onTouchMoveCapture: _r
  }), a = r[0], o = r[1], i = e.forwardProps, s = e.children, d = e.className, u = e.removeScrollBar, f = e.enabled, l = e.shards, m = e.sideCar, h = e.noRelative, w = e.noIsolation, p = e.inert, g = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, S = e.gapMode, N = Ws(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = m, C = Gm([n, t]), b = Ue(Ue({}, N), a);
  return ae(
    Q,
    null,
    f && ae(x, { sideCar: zs, removeScrollBar: u, shards: l, noRelative: h, noIsolation: w, inert: p, setCallbacks: o, allowPinchZoom: !!g, lockRef: n, gapMode: S }),
    i ? Wt(je.only(s), Ue(Ue({}, b), { ref: C })) : ae(y, Ue({}, b, { className: d, ref: C }), s)
  );
});
Zn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Zn.classNames = {
  fullWidth: En,
  zeroRight: Pn
};
var Qm = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Zm() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Qm();
  return t && e.setAttribute("nonce", t), e;
}
function eh(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function th(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var nh = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Zm()) && (eh(t, n), th(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, rh = function() {
  var e = nh();
  return function(t, n) {
    I(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Bs = function() {
  var e = rh(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, ah = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Sr = function(e) {
  return parseInt(e || "", 10) || 0;
}, oh = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Sr(n), Sr(r), Sr(a)];
}, ih = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ah;
  var t = oh(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, sh = Bs(), Tt = "data-scroll-locked", ch = function(e, t, n, r) {
  var a = e.left, o = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(jm, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Tt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Pn, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(En, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Pn, " .").concat(Pn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(En, " .").concat(En, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Tt, `] {
    `).concat(Hm, ": ").concat(s, `px;
  }
`);
}, Wo = function() {
  var e = parseInt(document.body.getAttribute(Tt) || "0", 10);
  return isFinite(e) ? e : 0;
}, lh = function() {
  I(function() {
    return document.body.setAttribute(Tt, (Wo() + 1).toString()), function() {
      var e = Wo() - 1;
      e <= 0 ? document.body.removeAttribute(Tt) : document.body.setAttribute(Tt, e.toString());
    };
  }, []);
}, uh = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  lh();
  var o = me(function() {
    return ih(a);
  }, [a]);
  return ae(sh, { styles: ch(o, !t, a, n ? "" : "!important") });
}, zr = !1;
if (typeof window < "u")
  try {
    var xn = Object.defineProperty({}, "passive", {
      get: function() {
        return zr = !0, !0;
      }
    });
    window.addEventListener("test", xn, xn), window.removeEventListener("test", xn, xn);
  } catch {
    zr = !1;
  }
var Nt = zr ? { passive: !1 } : !1, dh = function(e) {
  return e.tagName === "TEXTAREA";
}, js = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !dh(e) && n[t] === "visible")
  );
}, fh = function(e) {
  return js(e, "overflowY");
}, mh = function(e) {
  return js(e, "overflowX");
}, Uo = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = Hs(e, r);
    if (a) {
      var o = Vs(e, r), i = o[1], s = o[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, hh = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, ph = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Hs = function(e, t) {
  return e === "v" ? fh(t) : mh(t);
}, Vs = function(e, t) {
  return e === "v" ? hh(t) : ph(t);
}, wh = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, gh = function(e, t, n, r, a) {
  var o = wh(e, window.getComputedStyle(t).direction), i = o * r, s = n.target, d = t.contains(s), u = !1, f = i > 0, l = 0, m = 0;
  do {
    if (!s)
      break;
    var h = Vs(e, s), w = h[0], p = h[1], g = h[2], v = p - g - o * w;
    (w || v) && Hs(e, s) && (l += v, m += w);
    var y = s.parentNode;
    s = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !d && s !== document.body || // self content
    d && (t.contains(s) || t === s)
  );
  return (f && Math.abs(l) < 1 || !f && Math.abs(m) < 1) && (u = !0), u;
}, _n = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, zo = function(e) {
  return [e.deltaX, e.deltaY];
}, Bo = function(e) {
  return e && "current" in e ? e.current : e;
}, vh = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, yh = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, bh = 0, Ct = [];
function xh(e) {
  var t = A([]), n = A([0, 0]), r = A(), a = M(bh++)[0], o = M(Bs)[0], i = A(e);
  I(function() {
    i.current = e;
  }, [e]), I(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var p = Bm([e.lockRef.current], (e.shards || []).map(Bo), !0).filter(Boolean);
      return p.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), p.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = U(function(p, g) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !i.current.allowPinchZoom;
    var v = _n(p), y = n.current, S = "deltaX" in p ? p.deltaX : y[0] - v[0], N = "deltaY" in p ? p.deltaY : y[1] - v[1], x, C = p.target, b = Math.abs(S) > Math.abs(N) ? "h" : "v";
    if ("touches" in p && b === "h" && C.type === "range")
      return !1;
    var _ = Uo(b, C);
    if (!_)
      return !0;
    if (_ ? x = b : (x = b === "v" ? "h" : "v", _ = Uo(b, C)), !_)
      return !1;
    if (!r.current && "changedTouches" in p && (S || N) && (r.current = x), !x)
      return !0;
    var E = r.current || x;
    return gh(E, g, p, E === "h" ? S : N);
  }, []), d = U(function(p) {
    var g = p;
    if (!(!Ct.length || Ct[Ct.length - 1] !== o)) {
      var v = "deltaY" in g ? zo(g) : _n(g), y = t.current.filter(function(x) {
        return x.name === g.type && (x.target === g.target || g.target === x.shadowParent) && vh(x.delta, v);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var S = (i.current.shards || []).map(Bo).filter(Boolean).filter(function(x) {
          return x.contains(g.target);
        }), N = S.length > 0 ? s(g, S[0]) : !i.current.noIsolation;
        N && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = U(function(p, g, v, y) {
    var S = { name: p, delta: g, target: v, should: y, shadowParent: _h(v) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(N) {
        return N !== S;
      });
    }, 1);
  }, []), f = U(function(p) {
    n.current = _n(p), r.current = void 0;
  }, []), l = U(function(p) {
    u(p.type, zo(p), p.target, s(p, e.lockRef.current));
  }, []), m = U(function(p) {
    u(p.type, _n(p), p.target, s(p, e.lockRef.current));
  }, []);
  I(function() {
    return Ct.push(o), e.setCallbacks({
      onScrollCapture: l,
      onWheelCapture: l,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", d, Nt), document.addEventListener("touchmove", d, Nt), document.addEventListener("touchstart", f, Nt), function() {
      Ct = Ct.filter(function(p) {
        return p !== o;
      }), document.removeEventListener("wheel", d, Nt), document.removeEventListener("touchmove", d, Nt), document.removeEventListener("touchstart", f, Nt);
    };
  }, []);
  var h = e.removeScrollBar, w = e.inert;
  return ae(
    Q,
    null,
    w ? ae(o, { styles: yh(a) }) : null,
    h ? ae(uh, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function _h(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Sh = Jm(zs, xh);
var _a = T(function(e, t) {
  return ae(Zn, Ue({}, e, { ref: t, sideCar: Sh }));
});
_a.classNames = Zn.classNames;
var Nh = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Mt = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap(), Nn = {}, Nr = 0, Ys = function(e) {
  return e && (e.host || Ys(e.parentNode));
}, Ch = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ys(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Mh = function(e, t, n, r) {
  var a = Ch(t, Array.isArray(e) ? e : [e]);
  Nn[n] || (Nn[n] = /* @__PURE__ */ new WeakMap());
  var o = Nn[n], i = [], s = /* @__PURE__ */ new Set(), d = new Set(a), u = function(l) {
    !l || s.has(l) || (s.add(l), u(l.parentNode));
  };
  a.forEach(u);
  var f = function(l) {
    !l || d.has(l) || Array.prototype.forEach.call(l.children, function(m) {
      if (s.has(m))
        f(m);
      else
        try {
          var h = m.getAttribute(r), w = h !== null && h !== "false", p = (Mt.get(m) || 0) + 1, g = (o.get(m) || 0) + 1;
          Mt.set(m, p), o.set(m, g), i.push(m), p === 1 && w && Sn.set(m, !0), g === 1 && m.setAttribute(n, "true"), w || m.setAttribute(r, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", m, v);
        }
    });
  };
  return f(t), s.clear(), Nr++, function() {
    i.forEach(function(l) {
      var m = Mt.get(l) - 1, h = o.get(l) - 1;
      Mt.set(l, m), o.set(l, h), m || (Sn.has(l) || l.removeAttribute(r), Sn.delete(l)), h || l.removeAttribute(n);
    }), Nr--, Nr || (Mt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap(), Nn = {});
  };
}, Gs = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = Nh(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live], script"))), Mh(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, er = "Dialog", [qs] = ut(er), [Ph, $e] = qs(er), Ks = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: o,
    modal: i = !0
  } = e, s = A(null), d = A(null), [u, f] = va({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: er
  });
  return /* @__PURE__ */ c(
    Ph,
    {
      scope: t,
      triggerRef: s,
      contentRef: d,
      contentId: kt(),
      titleId: kt(),
      descriptionId: kt(),
      open: u,
      onOpenChange: f,
      onOpenToggle: U(() => f((l) => !l), [f]),
      modal: i,
      children: n
    }
  );
};
Ks.displayName = er;
var Xs = "DialogTrigger", Eh = T(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = $e(Xs, n), o = se(t, a.triggerRef);
    return /* @__PURE__ */ c(
      q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": Ca(a.open),
        ...r,
        ref: o,
        onClick: $(e.onClick, a.onOpenToggle)
      }
    );
  }
);
Eh.displayName = Xs;
var Sa = "DialogPortal", [kh, Js] = qs(Sa, {
  forceMount: void 0
}), Qs = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: a } = e, o = $e(Sa, t);
  return /* @__PURE__ */ c(kh, { scope: t, forceMount: n, children: je.map(r, (i) => /* @__PURE__ */ c(Ae, { present: n || o.open, children: /* @__PURE__ */ c(xa, { asChild: !0, container: a, children: i }) })) });
};
Qs.displayName = Sa;
var Wn = "DialogOverlay", Zs = T(
  (e, t) => {
    const n = Js(Wn, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = $e(Wn, e.__scopeDialog);
    return o.modal ? /* @__PURE__ */ c(Ae, { present: r || o.open, children: /* @__PURE__ */ c(Ah, { ...a, ref: t }) }) : null;
  }
);
Zs.displayName = Wn;
var Th = /* @__PURE__ */ It("DialogOverlay.RemoveScroll"), Ah = T(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = $e(Wn, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c(_a, { as: Th, allowPinchZoom: !0, shards: [a.contentRef], children: /* @__PURE__ */ c(
        q.div,
        {
          "data-state": Ca(a.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), wt = "DialogContent", ec = T(
  (e, t) => {
    const n = Js(wt, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = $e(wt, e.__scopeDialog);
    return /* @__PURE__ */ c(Ae, { present: r || o.open, children: o.modal ? /* @__PURE__ */ c(Dh, { ...a, ref: t }) : /* @__PURE__ */ c(Rh, { ...a, ref: t }) });
  }
);
ec.displayName = wt;
var Dh = T(
  (e, t) => {
    const n = $e(wt, e.__scopeDialog), r = A(null), a = se(t, n.contentRef, r);
    return I(() => {
      const o = r.current;
      if (o) return Gs(o);
    }, []), /* @__PURE__ */ c(
      tc,
      {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: $(e.onCloseAutoFocus, (o) => {
          var i;
          o.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: $(e.onPointerDownOutside, (o) => {
          const i = o.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && o.preventDefault();
        }),
        onFocusOutside: $(
          e.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), Rh = T(
  (e, t) => {
    const n = $e(wt, e.__scopeDialog), r = A(!1), a = A(!1);
    return /* @__PURE__ */ c(
      tc,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, o), o.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), o.preventDefault()), r.current = !1, a.current = !1;
        },
        onInteractOutside: (o) => {
          var d, u;
          (d = e.onInteractOutside) == null || d.call(e, o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (a.current = !0));
          const i = o.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && a.current && o.preventDefault();
        }
      }
    );
  }
), tc = T(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: o, ...i } = e, s = $e(wt, n), d = A(null), u = se(t, d);
    return $s(), /* @__PURE__ */ c(Q, { children: [
      /* @__PURE__ */ c(
        ba,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: a,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ c(
            ya,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Ca(s.open),
              ...i,
              ref: u,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c(Q, { children: [
        /* @__PURE__ */ c(Oh, { titleId: s.titleId }),
        /* @__PURE__ */ c(Lh, { contentRef: d, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Na = "DialogTitle", nc = T(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = $e(Na, n);
    return /* @__PURE__ */ c(q.h2, { id: a.titleId, ...r, ref: t });
  }
);
nc.displayName = Na;
var rc = "DialogDescription", ac = T(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = $e(rc, n);
    return /* @__PURE__ */ c(q.p, { id: a.descriptionId, ...r, ref: t });
  }
);
ac.displayName = rc;
var oc = "DialogClose", ic = T(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = $e(oc, n);
    return /* @__PURE__ */ c(
      q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: $(e.onClick, () => a.onOpenChange(!1))
      }
    );
  }
);
ic.displayName = oc;
function Ca(e) {
  return e ? "open" : "closed";
}
var sc = "DialogTitleWarning", [bv, cc] = $f(sc, {
  contentName: wt,
  titleName: Na,
  docsSlug: "dialog"
}), Oh = ({ titleId: e }) => {
  const t = cc(sc), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return I(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Ih = "DialogDescriptionWarning", Lh = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${cc(Ih).contentName}}.`;
  return I(() => {
    var o;
    const a = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
    t && a && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Fh = Ks, $h = Qs, Wh = Zs, Uh = ec, zh = nc, Bh = ac, jh = ic;
function jt({
  ...e
}) {
  return /* @__PURE__ */ c(Fh, { "data-slot": "dialog", ...e });
}
function Hh({
  ...e
}) {
  return /* @__PURE__ */ c($h, { "data-slot": "dialog-portal", ...e });
}
function Vh({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    Wh,
    {
      "data-slot": "dialog-overlay",
      className: F(
        "data-[state=open]:wa:animate-in data-[state=closed]:wa:animate-out data-[state=closed]:wa:fade-out-0 data-[state=open]:wa:fade-in-0 wa:fixed wa:inset-0 wa:z-50 wa:bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Ht({
  className: e,
  children: t,
  showCloseButton: n = !0,
  ...r
}) {
  return /* @__PURE__ */ c(Hh, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ c(Vh, {}),
    /* @__PURE__ */ c(
      Uh,
      {
        "data-slot": "dialog-content",
        className: F(
          "wa:bg-background data-[state=open]:wa:animate-in data-[state=closed]:wa:animate-out data-[state=closed]:wa:fade-out-0 data-[state=open]:wa:fade-in-0 data-[state=closed]:wa:zoom-out-95 data-[state=open]:wa:zoom-in-95 wa:fixed wa:top-[50%] wa:left-[50%] wa:z-50 wa:grid wa:w-full wa:max-w-[calc(100%-2rem)] wa:translate-x-[-50%] wa:translate-y-[-50%] wa:gap-4 wa:rounded-lg wa:border wa:p-6 wa:shadow-lg wa:duration-200 sm:wa:max-w-lg",
          e
        ),
        ...r,
        children: [
          t,
          n && /* @__PURE__ */ c(
            jh,
            {
              "data-slot": "dialog-close",
              className: "wa:ring-offset-background focus:wa:ring-ring data-[state=open]:wa:bg-accent data-[state=open]:wa:text-muted-foreground wa:absolute wa:top-4 wa:right-4 wa:rounded-xs wa:opacity-70 wa:transition-opacity hover:wa:opacity-100 focus:wa:ring-2 focus:wa:ring-offset-2 focus:wa:outline-hidden disabled:wa:pointer-events-none [&_svg]:wa:pointer-events-none [&_svg]:wa:shrink-0 [&_svg:not([class*='size-'])]:wa:size-4",
              children: [
                /* @__PURE__ */ c(ua, {}),
                /* @__PURE__ */ c("span", { className: "wa:sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function Vt({ className: e, ...t }) {
  return /* @__PURE__ */ c(
    "div",
    {
      "data-slot": "dialog-header",
      className: F("wa:flex wa:flex-col wa:gap-2 wa:text-center sm:wa:text-left", e),
      ...t
    }
  );
}
function Yh({ className: e, ...t }) {
  return /* @__PURE__ */ c(
    "div",
    {
      "data-slot": "dialog-footer",
      className: F(
        "wa:flex wa:flex-col-reverse wa:gap-2 sm:wa:flex-row sm:wa:justify-end",
        e
      ),
      ...t
    }
  );
}
function Yt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    zh,
    {
      "data-slot": "dialog-title",
      className: F("wa:text-lg wa:leading-none wa:font-semibold", e),
      ...t
    }
  );
}
function fn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    Bh,
    {
      "data-slot": "dialog-description",
      className: F("wa:text-muted-foreground wa:text-sm", e),
      ...t
    }
  );
}
const Gh = ls(
  "wa:inline-flex wa:items-center wa:justify-center wa:rounded-md wa:border wa:px-2 wa:py-0.5 wa:text-xs wa:font-medium wa:w-fit wa:whitespace-nowrap wa:shrink-0 [&>svg]:wa:size-3 wa:gap-1 [&>svg]:wa:pointer-events-none focus-visible:wa:border-ring focus-visible:wa:ring-ring/50 focus-visible:wa:ring-[3px] aria-invalid:wa:ring-destructive/20 dark:aria-invalid:wa:ring-destructive/40 aria-invalid:wa:border-destructive wa:transition-[color,box-shadow] wa:overflow-hidden",
  {
    variants: {
      variant: {
        default: "wa:border-transparent wa:bg-primary wa:text-primary-foreground [a&]:hover:wa:bg-primary/90",
        secondary: "wa:border-transparent wa:bg-secondary wa:text-secondary-foreground [a&]:hover:wa:bg-secondary/90",
        destructive: "wa:border-transparent wa:bg-destructive wa:text-white [a&]:hover:wa:bg-destructive/90 focus-visible:wa:ring-destructive/20 dark:focus-visible:wa:ring-destructive/40 dark:wa:bg-destructive/60",
        outline: "wa:text-foreground [a&]:hover:wa:bg-accent [a&]:hover:wa:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function tr({
  className: e,
  variant: t,
  asChild: n = !1,
  ...r
}) {
  return /* @__PURE__ */ c(
    n ? cs : "span",
    {
      "data-slot": "badge",
      className: F(Gh({ variant: t }), e),
      ...r
    }
  );
}
var qh = "Separator", jo = "horizontal", Kh = ["horizontal", "vertical"], lc = T((e, t) => {
  const { decorative: n, orientation: r = jo, ...a } = e, o = Xh(r) ? r : jo, s = n ? { role: "none" } : { "aria-orientation": o === "vertical" ? o : void 0, role: "separator" };
  return /* @__PURE__ */ c(
    q.div,
    {
      "data-orientation": o,
      ...s,
      ...a,
      ref: t
    }
  );
});
lc.displayName = qh;
function Xh(e) {
  return Kh.includes(e);
}
var Jh = lc;
function Ma({
  className: e,
  orientation: t = "horizontal",
  decorative: n = !0,
  ...r
}) {
  return /* @__PURE__ */ c(
    Jh,
    {
      "data-slot": "separator",
      decorative: n,
      orientation: t,
      className: F(
        "wa:bg-border wa:shrink-0 data-[orientation=horizontal]:wa:h-px data-[orientation=horizontal]:wa:w-full data-[orientation=vertical]:wa:h-full data-[orientation=vertical]:wa:w-px",
        e
      ),
      ...r
    }
  );
}
function Qh(e) {
  var r, a;
  const t = [];
  let n = "POSITIONAL";
  if (!e.components)
    return { format: n, parameters: t };
  for (const o of e.components) {
    if (o.type === "HEADER" && o.format === "TEXT") {
      const i = Zh(o);
      i.length > 0 && (t.push(...i.map((s) => ({ ...s, component: "HEADER" }))), (r = o.example) != null && r.headerTextNamedParams && (n = "NAMED"));
    }
    if (o.type === "BODY") {
      const i = ep(o);
      i.length > 0 && (t.push(...i.map((s) => ({ ...s, component: "BODY" }))), (a = o.example) != null && a.bodyTextNamedParams && (n = "NAMED"));
    }
    if (o.type === "BUTTONS") {
      const i = tp(o);
      i.length > 0 && t.push(...i.map((s) => ({ ...s, component: "BUTTON" })));
    }
  }
  return { format: n, parameters: t };
}
function Zh(e) {
  const t = [];
  return e.example ? e.example.headerTextNamedParams ? e.example.headerTextNamedParams.map((n) => ({
    name: n.paramName,
    example: n.example
  })) : e.example.headerText ? e.example.headerText.map((n, r) => ({
    name: `header_param_${r + 1}`,
    example: n
  })) : t : t;
}
function ep(e) {
  const t = [];
  return e.example ? e.example.bodyTextNamedParams ? e.example.bodyTextNamedParams.map((n) => ({
    name: n.paramName,
    example: n.example
  })) : e.example.bodyText && e.example.bodyText.length > 0 ? e.example.bodyText[0].map((r, a) => ({
    name: `body_param_${a + 1}`,
    example: r
  })) : t : t;
}
function tp(e) {
  const t = [];
  return e.buttons && e.buttons.forEach((n, r) => {
    n.example && n.example.length > 0 && n.example.forEach((a, o) => {
      t.push({
        name: `button_${r}_param_${o + 1}`,
        example: a,
        buttonIndex: r
      });
    });
  }), t;
}
function np(e, t) {
  return e.format === "NAMED" ? t : e.parameters.map((n) => t[n.name] || "");
}
function Un({ className: e, type: t, ...n }) {
  return /* @__PURE__ */ c(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: F(
        "file:wa:text-foreground placeholder:wa:text-muted-foreground selection:wa:bg-primary selection:wa:text-primary-foreground dark:wa:bg-input/30 wa:border-input wa:h-9 wa:w-full wa:min-w-0 wa:rounded-md wa:border wa:bg-transparent wa:px-3 wa:py-1 wa:text-base wa:shadow-xs wa:transition-[color,box-shadow] wa:outline-none file:wa:inline-flex file:wa:h-7 file:wa:border-0 file:wa:bg-transparent file:wa:text-sm file:wa:font-medium disabled:wa:pointer-events-none disabled:wa:cursor-not-allowed disabled:wa:opacity-50 md:wa:text-sm",
        "focus-visible:wa:border-ring focus-visible:wa:ring-ring/50 focus-visible:wa:ring-[3px]",
        "aria-invalid:wa:ring-destructive/20 dark:aria-invalid:wa:ring-destructive/40 aria-invalid:wa:border-destructive",
        e
      ),
      ...n
    }
  );
}
var rp = "Label", uc = T((e, t) => /* @__PURE__ */ c(
  q.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var a;
      n.target.closest("button, input, select, textarea") || ((a = e.onMouseDown) == null || a.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
uc.displayName = rp;
var ap = uc;
function kn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    ap,
    {
      "data-slot": "label",
      className: F(
        "wa:flex wa:items-center wa:gap-2 wa:text-sm wa:leading-none wa:font-medium wa:select-none group-data-[disabled=true]:wa:pointer-events-none group-data-[disabled=true]:wa:opacity-50 peer-disabled:wa:cursor-not-allowed peer-disabled:wa:opacity-50",
        e
      ),
      ...t
    }
  );
}
function op({
  open: e,
  onOpenChange: t,
  template: n,
  parameterInfo: r,
  phoneNumber: a,
  onBack: o,
  onTemplateSent: i
}) {
  const [s, d] = M({}), [u, f] = M(!1), [l, m] = M(null), h = (v, y) => {
    d((S) => ({
      ...S,
      [v]: y
    }));
  }, w = r.parameters.every(
    (v) => {
      var y;
      return (y = s[v.name]) == null ? void 0 : y.trim();
    }
  ), p = async () => {
    if (!w) {
      m("Please fill in all parameters");
      return;
    }
    f(!0), m(null);
    try {
      np(r, s), m("Templates are not yet supported for this provider");
    } catch (v) {
      console.error("Error sending template:", v), m(v instanceof Error ? v.message : "Failed to send template");
    } finally {
      f(!1);
    }
  }, g = (v) => v.replace(/_/g, " ").replace(/\b\w/g, (y) => y.toUpperCase()).replace(/Param (\d+)/, "Parameter $1").replace(/Button (\d+) Parameter (\d+)/, "Button $1 URL Parameter $2");
  return /* @__PURE__ */ c(jt, { open: e, onOpenChange: t, children: /* @__PURE__ */ c(Ht, { className: "sm:wa:max-w-[500px]", children: [
    /* @__PURE__ */ c(Vt, { children: /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:gap-2", children: [
      /* @__PURE__ */ c(
        ce,
        {
          variant: "ghost",
          size: "icon",
          onClick: o,
          className: "wa:h-8 wa:w-8",
          children: /* @__PURE__ */ c(Lr, { className: "wa:h-4 wa:w-4" })
        }
      ),
      /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ c(Yt, { children: "Template parameters" }),
        /* @__PURE__ */ c(fn, { children: [
          "Fill in the parameters for ",
          n.name
        ] })
      ] })
    ] }) }),
    l && /* @__PURE__ */ c("div", { className: "wa:p-3 wa:bg-red-50 wa:border wa:border-red-200 wa:rounded-lg wa:text-sm wa:text-red-800", children: l }),
    /* @__PURE__ */ c(dn, { className: "wa:max-h-[400px] wa:pr-4", children: /* @__PURE__ */ c("div", { className: "wa:space-y-4", children: r.parameters.map((v) => /* @__PURE__ */ c("div", { className: "wa:space-y-2", children: [
      /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:gap-2", children: [
        /* @__PURE__ */ c(kn, { htmlFor: v.name, className: "wa:text-[#111b21]", children: g(v.name) }),
        /* @__PURE__ */ c(
          tr,
          {
            variant: "secondary",
            className: "wa:text-xs wa:bg-[#f0f2f5] wa:text-[#667781]",
            children: v.component
          }
        )
      ] }),
      /* @__PURE__ */ c(
        Un,
        {
          id: v.name,
          value: s[v.name] || "",
          onChange: (y) => h(v.name, y.target.value),
          placeholder: v.example || `Enter ${g(v.name)}`,
          className: "wa:bg-white wa:border-[#d1d7db] focus-visible:wa:ring-[#00a884]"
        }
      ),
      v.example && /* @__PURE__ */ c("p", { className: "wa:text-xs wa:text-[#667781]", children: [
        "Example: ",
        v.example
      ] })
    ] }, v.name)) }) }),
    /* @__PURE__ */ c(Ma, {}),
    /* @__PURE__ */ c("div", { className: "wa:flex wa:justify-between wa:gap-2", children: [
      /* @__PURE__ */ c(ce, { variant: "outline", onClick: o, children: "Back" }),
      /* @__PURE__ */ c(
        ce,
        {
          onClick: p,
          disabled: !w || u,
          className: "wa:bg-[#00a884] hover:wa:bg-[#008f6f]",
          children: u ? /* @__PURE__ */ c(st, { className: "wa:h-4 wa:w-4 wa:animate-spin" }) : /* @__PURE__ */ c(Q, { children: [
            /* @__PURE__ */ c(un, { className: "wa:h-4 wa:w-4 wa:mr-1" }),
            "Send template"
          ] })
        }
      )
    ] })
  ] }) });
}
function ip({ open: e, onOpenChange: t, phoneNumber: n, onTemplateSent: r }) {
  const [a, o] = M([]), [i, s] = M(!1), [d, u] = M(null), [f, l] = M(null), [m, h] = M(!1), [w, p] = M(null), [g, v] = M(null);
  I(() => {
    e && y();
  }, [e]);
  const y = async () => {
    s(!0), l(null);
    try {
      l("Templates are not yet supported for this provider"), o([]);
    } catch (_) {
      console.error("Error fetching templates:", _), l(_ instanceof Error ? _.message : "Failed to load templates");
    } finally {
      s(!1);
    }
  }, S = (_) => {
    const E = Qh(_);
    if (E.parameters.length > 0) {
      p(_), v(E), h(!0);
      return;
    }
    N(_);
  }, N = async (_) => {
    u(_.id), l(null);
    try {
      l("Templates are not yet supported for this provider");
    } catch (E) {
      console.error("Error sending template:", E), l(E instanceof Error ? E.message : "Failed to send template");
    } finally {
      u(null);
    }
  }, x = () => {
    h(!1), p(null), v(null);
  }, C = () => {
    h(!1), p(null), v(null), t(!1), r == null || r();
  }, b = (_) => {
    switch (_) {
      case "MARKETING":
        return "wa:bg-blue-100 wa:text-blue-800";
      case "UTILITY":
        return "wa:bg-green-100 wa:text-green-800";
      case "AUTHENTICATION":
        return "wa:bg-purple-100 wa:text-purple-800";
      default:
        return "wa:bg-gray-100 wa:text-gray-800";
    }
  };
  return /* @__PURE__ */ c(Q, { children: [
    /* @__PURE__ */ c(jt, { open: e, onOpenChange: t, children: /* @__PURE__ */ c(Ht, { className: "sm:wa:max-w-[500px]", children: [
      /* @__PURE__ */ c(Vt, { children: [
        /* @__PURE__ */ c(Yt, { children: "Send template message" }),
        /* @__PURE__ */ c(fn, { children: [
          "Select a template to send to ",
          n
        ] })
      ] }),
      f && /* @__PURE__ */ c("div", { className: "wa:p-3 wa:bg-red-50 wa:border wa:border-red-200 wa:rounded-lg wa:text-sm wa:text-red-800", children: f }),
      i ? /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:justify-center wa:py-8", children: /* @__PURE__ */ c(st, { className: "wa:h-8 wa:w-8 wa:animate-spin wa:text-[#00a884]" }) }) : a.length === 0 ? /* @__PURE__ */ c("div", { className: "wa:py-8 wa:text-center wa:text-muted-foreground", children: "No approved templates found" }) : /* @__PURE__ */ c(dn, { className: "wa:h-[400px] wa:pr-4", children: /* @__PURE__ */ c("div", { className: "wa:space-y-3", children: a.map((_) => /* @__PURE__ */ c(
        "div",
        {
          className: "wa:p-4 wa:border wa:border-[#d1d7db] wa:rounded-lg hover:wa:bg-[#f0f2f5] wa:transition-colors",
          children: /* @__PURE__ */ c("div", { className: "wa:flex wa:items-start wa:justify-between wa:gap-3 wa:mb-2", children: [
            /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0", children: [
              /* @__PURE__ */ c("h3", { className: "wa:font-medium wa:text-[#111b21] wa:truncate", children: _.name }),
              /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:gap-2 wa:mt-1", children: [
                /* @__PURE__ */ c(tr, { variant: "secondary", className: b(_.category), children: _.category }),
                /* @__PURE__ */ c("span", { className: "wa:text-xs wa:text-[#667781]", children: _.language })
              ] })
            ] }),
            /* @__PURE__ */ c(
              ce,
              {
                onClick: () => S(_),
                disabled: d !== null,
                size: "sm",
                className: "wa:bg-[#00a884] hover:wa:bg-[#008f6f]",
                children: d === _.id ? /* @__PURE__ */ c(st, { className: "wa:h-4 wa:w-4 wa:animate-spin" }) : /* @__PURE__ */ c(Q, { children: [
                  /* @__PURE__ */ c(un, { className: "wa:h-4 wa:w-4 wa:mr-1" }),
                  "Send"
                ] })
              }
            )
          ] })
        },
        _.id
      )) }) }),
      /* @__PURE__ */ c(Ma, {}),
      /* @__PURE__ */ c("div", { className: "wa:flex wa:justify-end wa:gap-2", children: /* @__PURE__ */ c(ce, { variant: "outline", onClick: () => t(!1), children: "Cancel" }) })
    ] }) }),
    w && g && /* @__PURE__ */ c(
      op,
      {
        open: m,
        onOpenChange: h,
        template: w,
        parameterInfo: g,
        phoneNumber: n,
        onBack: x,
        onTemplateSent: C
      }
    )
  ] });
}
function sp({ className: e, ...t }) {
  return /* @__PURE__ */ c(
    "textarea",
    {
      "data-slot": "textarea",
      className: F(
        "wa:border-input placeholder:wa:text-muted-foreground focus-visible:wa:border-ring focus-visible:wa:ring-ring/50 aria-invalid:wa:ring-destructive/20 dark:aria-invalid:wa:ring-destructive/40 aria-invalid:wa:border-destructive dark:wa:bg-input/30 wa:flex wa:field-sizing-content wa:min-h-16 wa:w-full wa:rounded-md wa:border wa:bg-transparent wa:px-3 wa:py-2 wa:text-base wa:shadow-xs wa:transition-[color,box-shadow] wa:outline-none focus-visible:wa:ring-[3px] disabled:wa:cursor-not-allowed disabled:wa:opacity-50 md:wa:text-sm",
        e
      ),
      ...t
    }
  );
}
function cp({
  open: e,
  onOpenChange: t,
  conversationId: n,
  phoneNumber: r,
  onMessageSent: a,
  instance: o
}) {
  const i = Ut(), [s, d] = M(""), [u, f] = M(""), [l, m] = M([
    { id: "button_1", title: "" }
  ]), [h, w] = M(!1), [p, g] = M(null), v = () => {
    l.length < 3 && m([
      ...l,
      { id: `button_${l.length + 1}`, title: "" }
    ]);
  }, y = (b) => {
    l.length > 1 && m(l.filter((_, E) => E !== b));
  }, S = (b, _) => {
    if (_.length <= 20) {
      const E = [...l];
      E[b].title = _, m(E);
    }
  }, N = () => !(!u.trim() || l.length === 0 || l.some((b) => !b.title.trim())), x = () => {
    d(""), f(""), m([{ id: "button_1", title: "" }]), g(null);
  }, C = async () => {
    if (!N()) {
      g("Please fill in the body and all button titles");
      return;
    }
    if (!n || !r) {
      g("No conversation selected");
      return;
    }
    if (!o) {
      g("No instance selected");
      return;
    }
    w(!0), g(null);
    try {
      await i.sendButtons(o, {
        to: r,
        body: u.trim(),
        header: s.trim() || void 0,
        buttons: l.map((b) => ({
          id: b.id,
          title: b.title.trim()
        }))
      }), x(), t(!1), a == null || a();
    } catch (b) {
      console.error("Error sending interactive message:", b), g(b instanceof Error ? b.message : "Failed to send message");
    } finally {
      w(!1);
    }
  };
  return /* @__PURE__ */ c(jt, { open: e, onOpenChange: (b) => {
    t(b), b || x();
  }, children: /* @__PURE__ */ c(Ht, { className: "sm:wa:max-w-[500px]", children: [
    /* @__PURE__ */ c(Vt, { children: [
      /* @__PURE__ */ c(Yt, { children: "Send interactive message" }),
      /* @__PURE__ */ c(fn, { children: "Create a message with interactive buttons" })
    ] }),
    p && /* @__PURE__ */ c("div", { className: "wa:p-3 wa:bg-red-50 wa:border wa:border-red-200 wa:rounded-lg wa:text-sm wa:text-red-800", children: p }),
    /* @__PURE__ */ c("div", { className: "wa:space-y-4", children: [
      /* @__PURE__ */ c("div", { className: "wa:space-y-2", children: [
        /* @__PURE__ */ c(kn, { htmlFor: "header", className: "wa:text-[#111b21]", children: "Header (optional)" }),
        /* @__PURE__ */ c(
          Un,
          {
            id: "header",
            value: s,
            onChange: (b) => d(b.target.value),
            placeholder: "Add a header to your message",
            className: "wa:bg-white wa:border-[#d1d7db] focus-visible:wa:ring-[#00a884]"
          }
        )
      ] }),
      /* @__PURE__ */ c("div", { className: "wa:space-y-2", children: [
        /* @__PURE__ */ c(kn, { htmlFor: "body", className: "wa:text-[#111b21]", children: [
          "Body ",
          /* @__PURE__ */ c("span", { className: "wa:text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ c(
          sp,
          {
            id: "body",
            value: u,
            onChange: (b) => f(b.target.value),
            placeholder: "Enter your message text",
            className: "wa:bg-white wa:border-[#d1d7db] focus-visible:wa:ring-[#00a884] wa:min-h-[100px]"
          }
        )
      ] }),
      /* @__PURE__ */ c("div", { className: "wa:space-y-2", children: [
        /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:justify-between", children: [
          /* @__PURE__ */ c(kn, { className: "wa:text-[#111b21]", children: [
            "Buttons ",
            /* @__PURE__ */ c("span", { className: "wa:text-red-500", children: "*" })
          ] }),
          /* @__PURE__ */ c(
            ce,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: v,
              disabled: l.length >= 3,
              className: "wa:h-8 wa:text-[#00a884] hover:wa:text-[#008f6f] hover:wa:bg-[#f0f2f5]",
              children: [
                /* @__PURE__ */ c($d, { className: "wa:h-4 wa:w-4 wa:mr-1" }),
                "Add button"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "wa:space-y-2", children: l.map((b, _) => /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:gap-2", children: [
          /* @__PURE__ */ c(
            Un,
            {
              value: b.title,
              onChange: (E) => S(_, E.target.value),
              placeholder: `Button ${_ + 1} title`,
              className: "wa:bg-white wa:border-[#d1d7db] focus-visible:wa:ring-[#00a884]",
              maxLength: 20
            }
          ),
          /* @__PURE__ */ c("span", { className: "wa:text-xs wa:text-[#667781] wa:min-w-[3rem]", children: [
            b.title.length,
            "/20"
          ] }),
          l.length > 1 && /* @__PURE__ */ c(
            ce,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              onClick: () => y(_),
              className: "wa:h-9 wa:w-9 wa:text-[#667781] hover:wa:text-red-600 hover:wa:bg-red-50",
              children: /* @__PURE__ */ c(ua, { className: "wa:h-4 wa:w-4" })
            }
          )
        ] }, b.id)) }),
        l.length < 3 && /* @__PURE__ */ c("p", { className: "wa:text-xs wa:text-[#667781]", children: [
          "You can add up to ",
          3 - l.length,
          " more button",
          3 - l.length !== 1 ? "s" : ""
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c(Ma, {}),
    /* @__PURE__ */ c("div", { className: "wa:flex wa:justify-between wa:gap-2", children: [
      /* @__PURE__ */ c(ce, { variant: "outline", onClick: () => t(!1), children: "Cancel" }),
      /* @__PURE__ */ c(
        ce,
        {
          onClick: C,
          disabled: !N() || h,
          className: "wa:bg-[#00a884] hover:wa:bg-[#008f6f]",
          children: h ? /* @__PURE__ */ c(st, { className: "wa:h-4 wa:w-4 wa:animate-spin" }) : /* @__PURE__ */ c(Q, { children: [
            /* @__PURE__ */ c(un, { className: "wa:h-4 wa:w-4 wa:mr-1" }),
            "Send"
          ] })
        }
      )
    ] })
  ] }) });
}
function dc(e) {
  const t = e + "CollectionProvider", [n, r] = ut(t), [a, o] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (p) => {
    const { scope: g, children: v } = p, y = Ke.useRef(null), S = Ke.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c(a, { scope: g, itemMap: S, collectionRef: y, children: v });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", d = /* @__PURE__ */ It(s), u = Ke.forwardRef(
    (p, g) => {
      const { scope: v, children: y } = p, S = o(s, v), N = se(g, S.collectionRef);
      return /* @__PURE__ */ c(d, { ref: N, children: y });
    }
  );
  u.displayName = s;
  const f = e + "CollectionItemSlot", l = "data-radix-collection-item", m = /* @__PURE__ */ It(f), h = Ke.forwardRef(
    (p, g) => {
      const { scope: v, children: y, ...S } = p, N = Ke.useRef(null), x = se(g, N), C = o(f, v);
      return Ke.useEffect(() => (C.itemMap.set(N, { ref: N, ...S }), () => void C.itemMap.delete(N))), /* @__PURE__ */ c(m, { [l]: "", ref: x, children: y });
    }
  );
  h.displayName = f;
  function w(p) {
    const g = o(e + "CollectionConsumer", p);
    return Ke.useCallback(() => {
      const y = g.collectionRef.current;
      if (!y) return [];
      const S = Array.from(y.querySelectorAll(`[${l}]`));
      return Array.from(g.itemMap.values()).sort(
        (C, b) => S.indexOf(C.ref.current) - S.indexOf(b.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: h },
    w,
    r
  ];
}
function lp(e) {
  const [t, n] = M(void 0);
  return ke(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const o = a[0];
        let i, s;
        if ("borderBoxSize" in o) {
          const d = o.borderBoxSize, u = Array.isArray(d) ? d[0] : d;
          i = u.inlineSize, s = u.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        n({ width: i, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
const up = ["top", "right", "bottom", "left"], ct = Math.min, xe = Math.max, zn = Math.round, Cn = Math.floor, He = (e) => ({
  x: e,
  y: e
}), dp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Br(e, t, n) {
  return xe(e, ct(t, n));
}
function et(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tt(e) {
  return e.split("-")[0];
}
function Gt(e) {
  return e.split("-")[1];
}
function Pa(e) {
  return e === "x" ? "y" : "x";
}
function Ea(e) {
  return e === "y" ? "height" : "width";
}
function Be(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function ka(e) {
  return Pa(Be(e));
}
function fp(e, t, n) {
  n === void 0 && (n = !1);
  const r = Gt(e), a = ka(e), o = Ea(a);
  let i = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (i = Bn(i)), [i, Bn(i)];
}
function mp(e) {
  const t = Bn(e);
  return [jr(e), t, jr(t)];
}
function jr(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Ho = ["left", "right"], Vo = ["right", "left"], hp = ["top", "bottom"], pp = ["bottom", "top"];
function wp(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Vo : Ho : t ? Ho : Vo;
    case "left":
    case "right":
      return t ? hp : pp;
    default:
      return [];
  }
}
function gp(e, t, n, r) {
  const a = Gt(e);
  let o = wp(tt(e), n === "start", r);
  return a && (o = o.map((i) => i + "-" + a), t && (o = o.concat(o.map(jr)))), o;
}
function Bn(e) {
  const t = tt(e);
  return dp[t] + e.slice(t.length);
}
function vp(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function fc(e) {
  return typeof e != "number" ? vp(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function jn(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: a
  } = e;
  return {
    width: r,
    height: a,
    top: n,
    left: t,
    right: t + r,
    bottom: n + a,
    x: t,
    y: n
  };
}
function Yo(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const o = Be(t), i = ka(t), s = Ea(i), d = tt(t), u = o === "y", f = r.x + r.width / 2 - a.width / 2, l = r.y + r.height / 2 - a.height / 2, m = r[s] / 2 - a[s] / 2;
  let h;
  switch (d) {
    case "top":
      h = {
        x: f,
        y: r.y - a.height
      };
      break;
    case "bottom":
      h = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: l
      };
      break;
    case "left":
      h = {
        x: r.x - a.width,
        y: l
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Gt(t)) {
    case "start":
      h[i] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      h[i] += m * (n && u ? -1 : 1);
      break;
  }
  return h;
}
async function yp(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: a,
    platform: o,
    rects: i,
    elements: s,
    strategy: d
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: l = "floating",
    altBoundary: m = !1,
    padding: h = 0
  } = et(t, e), w = fc(h), g = s[m ? l === "floating" ? "reference" : "floating" : l], v = jn(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(g))) == null || n ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: d
  })), y = l === "floating" ? {
    x: r,
    y: a,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), N = await (o.isElement == null ? void 0 : o.isElement(S)) ? await (o.getScale == null ? void 0 : o.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = jn(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: y,
    offsetParent: S,
    strategy: d
  }) : y);
  return {
    top: (v.top - x.top + w.top) / N.y,
    bottom: (x.bottom - v.bottom + w.bottom) / N.y,
    left: (v.left - x.left + w.left) / N.x,
    right: (x.right - v.right + w.right) / N.x
  };
}
const bp = 50, xp = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: o = [],
    platform: i
  } = n, s = i.detectOverflow ? i : {
    ...i,
    detectOverflow: yp
  }, d = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: f,
    y: l
  } = Yo(u, r, d), m = r, h = 0;
  const w = {};
  for (let p = 0; p < o.length; p++) {
    const g = o[p];
    if (!g)
      continue;
    const {
      name: v,
      fn: y
    } = g, {
      x: S,
      y: N,
      data: x,
      reset: C
    } = await y({
      x: f,
      y: l,
      initialPlacement: r,
      placement: m,
      strategy: a,
      middlewareData: w,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = S ?? f, l = N ?? l, w[v] = {
      ...w[v],
      ...x
    }, C && h < bp && (h++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (u = C.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : C.rects), {
      x: f,
      y: l
    } = Yo(u, m, d)), p = -1);
  }
  return {
    x: f,
    y: l,
    placement: m,
    strategy: a,
    middlewareData: w
  };
}, _p = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: a,
      rects: o,
      platform: i,
      elements: s,
      middlewareData: d
    } = t, {
      element: u,
      padding: f = 0
    } = et(e, t) || {};
    if (u == null)
      return {};
    const l = fc(f), m = {
      x: n,
      y: r
    }, h = ka(a), w = Ea(h), p = await i.getDimensions(u), g = h === "y", v = g ? "top" : "left", y = g ? "bottom" : "right", S = g ? "clientHeight" : "clientWidth", N = o.reference[w] + o.reference[h] - m[h] - o.floating[w], x = m[h] - o.reference[h], C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let b = C ? C[S] : 0;
    (!b || !await (i.isElement == null ? void 0 : i.isElement(C))) && (b = s.floating[S] || o.floating[w]);
    const _ = N / 2 - x / 2, E = b / 2 - p[w] / 2 - 1, L = ct(l[v], E), j = ct(l[y], E), Y = L, K = b - p[w] - j, H = b / 2 - p[w] / 2 + _, Z = Br(Y, H, K), W = !d.arrow && Gt(a) != null && H !== Z && o.reference[w] / 2 - (H < Y ? L : j) - p[w] / 2 < 0, V = W ? H < Y ? H - Y : H - K : 0;
    return {
      [h]: m[h] + V,
      data: {
        [h]: Z,
        centerOffset: H - Z - V,
        ...W && {
          alignmentOffset: V
        }
      },
      reset: W
    };
  }
}), Sp = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: a,
        middlewareData: o,
        rects: i,
        initialPlacement: s,
        platform: d,
        elements: u
      } = t, {
        mainAxis: f = !0,
        crossAxis: l = !0,
        fallbackPlacements: m,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: p = !0,
        ...g
      } = et(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const v = tt(a), y = Be(s), S = tt(s) === s, N = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), x = m || (S || !p ? [Bn(s)] : mp(s)), C = w !== "none";
      !m && C && x.push(...gp(s, p, w, N));
      const b = [s, ...x], _ = await d.detectOverflow(t, g), E = [];
      let L = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (f && E.push(_[v]), l) {
        const H = fp(a, i, N);
        E.push(_[H[0]], _[H[1]]);
      }
      if (L = [...L, {
        placement: a,
        overflows: E
      }], !E.every((H) => H <= 0)) {
        var j, Y;
        const H = (((j = o.flip) == null ? void 0 : j.index) || 0) + 1, Z = b[H];
        if (Z && (!(l === "alignment" ? y !== Be(Z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        L.every((P) => Be(P.placement) === y ? P.overflows[0] > 0 : !0)))
          return {
            data: {
              index: H,
              overflows: L
            },
            reset: {
              placement: Z
            }
          };
        let W = (Y = L.filter((V) => V.overflows[0] <= 0).sort((V, P) => V.overflows[1] - P.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!W)
          switch (h) {
            case "bestFit": {
              var K;
              const V = (K = L.filter((P) => {
                if (C) {
                  const O = Be(P.placement);
                  return O === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((O) => O > 0).reduce((O, X) => O + X, 0)]).sort((P, O) => P[1] - O[1])[0]) == null ? void 0 : K[0];
              V && (W = V);
              break;
            }
            case "initialPlacement":
              W = s;
              break;
          }
        if (a !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
};
function Go(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function qo(e) {
  return up.some((t) => e[t] >= 0);
}
const Np = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: a = "referenceHidden",
        ...o
      } = et(e, t);
      switch (a) {
        case "referenceHidden": {
          const i = await r.detectOverflow(t, {
            ...o,
            elementContext: "reference"
          }), s = Go(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: qo(s)
            }
          };
        }
        case "escaped": {
          const i = await r.detectOverflow(t, {
            ...o,
            altBoundary: !0
          }), s = Go(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: qo(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, mc = /* @__PURE__ */ new Set(["left", "top"]);
async function Cp(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), i = tt(n), s = Gt(n), d = Be(n) === "y", u = mc.has(i) ? -1 : 1, f = o && d ? -1 : 1, l = et(t, e);
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: w
  } = typeof l == "number" ? {
    mainAxis: l,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: l.mainAxis || 0,
    crossAxis: l.crossAxis || 0,
    alignmentAxis: l.alignmentAxis
  };
  return s && typeof w == "number" && (h = s === "end" ? w * -1 : w), d ? {
    x: h * f,
    y: m * u
  } : {
    x: m * u,
    y: h * f
  };
}
const Mp = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: a,
        y: o,
        placement: i,
        middlewareData: s
      } = t, d = await Cp(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: a + d.x,
        y: o + d.y,
        data: {
          ...d,
          placement: i
        }
      };
    }
  };
}, Pp = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: a,
        platform: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: d = {
          fn: (v) => {
            let {
              x: y,
              y: S
            } = v;
            return {
              x: y,
              y: S
            };
          }
        },
        ...u
      } = et(e, t), f = {
        x: n,
        y: r
      }, l = await o.detectOverflow(t, u), m = Be(tt(a)), h = Pa(m);
      let w = f[h], p = f[m];
      if (i) {
        const v = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", S = w + l[v], N = w - l[y];
        w = Br(S, w, N);
      }
      if (s) {
        const v = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", S = p + l[v], N = p - l[y];
        p = Br(S, p, N);
      }
      const g = d.fn({
        ...t,
        [h]: w,
        [m]: p
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [h]: i,
            [m]: s
          }
        }
      };
    }
  };
}, Ep = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: a,
        rects: o,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: d = !0,
        crossAxis: u = !0
      } = et(e, t), f = {
        x: n,
        y: r
      }, l = Be(a), m = Pa(l);
      let h = f[m], w = f[l];
      const p = et(s, t), g = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (d) {
        const S = m === "y" ? "height" : "width", N = o.reference[m] - o.floating[S] + g.mainAxis, x = o.reference[m] + o.reference[S] - g.mainAxis;
        h < N ? h = N : h > x && (h = x);
      }
      if (u) {
        var v, y;
        const S = m === "y" ? "width" : "height", N = mc.has(tt(a)), x = o.reference[l] - o.floating[S] + (N && ((v = i.offset) == null ? void 0 : v[l]) || 0) + (N ? 0 : g.crossAxis), C = o.reference[l] + o.reference[S] + (N ? 0 : ((y = i.offset) == null ? void 0 : y[l]) || 0) - (N ? g.crossAxis : 0);
        w < x ? w = x : w > C && (w = C);
      }
      return {
        [m]: h,
        [l]: w
      };
    }
  };
}, kp = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: a,
        rects: o,
        platform: i,
        elements: s
      } = t, {
        apply: d = () => {
        },
        ...u
      } = et(e, t), f = await i.detectOverflow(t, u), l = tt(a), m = Gt(a), h = Be(a) === "y", {
        width: w,
        height: p
      } = o.floating;
      let g, v;
      l === "top" || l === "bottom" ? (g = l, v = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (v = l, g = m === "end" ? "top" : "bottom");
      const y = p - f.top - f.bottom, S = w - f.left - f.right, N = ct(p - f[g], y), x = ct(w - f[v], S), C = !t.middlewareData.shift;
      let b = N, _ = x;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (_ = S), (r = t.middlewareData.shift) != null && r.enabled.y && (b = y), C && !m) {
        const L = xe(f.left, 0), j = xe(f.right, 0), Y = xe(f.top, 0), K = xe(f.bottom, 0);
        h ? _ = w - 2 * (L !== 0 || j !== 0 ? L + j : xe(f.left, f.right)) : b = p - 2 * (Y !== 0 || K !== 0 ? Y + K : xe(f.top, f.bottom));
      }
      await d({
        ...t,
        availableWidth: _,
        availableHeight: b
      });
      const E = await i.getDimensions(s.floating);
      return w !== E.width || p !== E.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function nr() {
  return typeof window < "u";
}
function qt(e) {
  return hc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function _e(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ge(e) {
  var t;
  return (t = (hc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function hc(e) {
  return nr() ? e instanceof Node || e instanceof _e(e).Node : !1;
}
function Le(e) {
  return nr() ? e instanceof Element || e instanceof _e(e).Element : !1;
}
function rt(e) {
  return nr() ? e instanceof HTMLElement || e instanceof _e(e).HTMLElement : !1;
}
function Ko(e) {
  return !nr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof _e(e).ShadowRoot;
}
function mn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = Fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && a !== "inline" && a !== "contents";
}
function Tp(e) {
  return /^(table|td|th)$/.test(qt(e));
}
function rr(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const Ap = /transform|translate|scale|rotate|perspective|filter/, Dp = /paint|layout|strict|content/, ft = (e) => !!e && e !== "none";
let Cr;
function Ta(e) {
  const t = Le(e) ? Fe(e) : e;
  return ft(t.transform) || ft(t.translate) || ft(t.scale) || ft(t.rotate) || ft(t.perspective) || !Aa() && (ft(t.backdropFilter) || ft(t.filter)) || Ap.test(t.willChange || "") || Dp.test(t.contain || "");
}
function Rp(e) {
  let t = lt(e);
  for (; rt(t) && !Ft(t); ) {
    if (Ta(t))
      return t;
    if (rr(t))
      return null;
    t = lt(t);
  }
  return null;
}
function Aa() {
  return Cr == null && (Cr = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Cr;
}
function Ft(e) {
  return /^(html|body|#document)$/.test(qt(e));
}
function Fe(e) {
  return _e(e).getComputedStyle(e);
}
function ar(e) {
  return Le(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function lt(e) {
  if (qt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ko(e) && e.host || // Fallback.
    Ge(e)
  );
  return Ko(t) ? t.host : t;
}
function pc(e) {
  const t = lt(e);
  return Ft(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : rt(t) && mn(t) ? t : pc(t);
}
function an(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = pc(e), o = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = _e(a);
  if (o) {
    const s = Hr(i);
    return t.concat(i, i.visualViewport || [], mn(a) ? a : [], s && n ? an(s) : []);
  } else
    return t.concat(a, an(a, [], n));
}
function Hr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function wc(e) {
  const t = Fe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = rt(e), o = a ? e.offsetWidth : n, i = a ? e.offsetHeight : r, s = zn(n) !== o || zn(r) !== i;
  return s && (n = o, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function Da(e) {
  return Le(e) ? e : e.contextElement;
}
function At(e) {
  const t = Da(e);
  if (!rt(t))
    return He(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: o
  } = wc(t);
  let i = (o ? zn(n.width) : n.width) / r, s = (o ? zn(n.height) : n.height) / a;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Op = /* @__PURE__ */ He(0);
function gc(e) {
  const t = _e(e);
  return !Aa() || !t.visualViewport ? Op : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ip(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== _e(e) ? !1 : t;
}
function gt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), o = Da(e);
  let i = He(1);
  t && (r ? Le(r) && (i = At(r)) : i = At(e));
  const s = Ip(o, n, r) ? gc(o) : He(0);
  let d = (a.left + s.x) / i.x, u = (a.top + s.y) / i.y, f = a.width / i.x, l = a.height / i.y;
  if (o) {
    const m = _e(o), h = r && Le(r) ? _e(r) : r;
    let w = m, p = Hr(w);
    for (; p && r && h !== w; ) {
      const g = At(p), v = p.getBoundingClientRect(), y = Fe(p), S = v.left + (p.clientLeft + parseFloat(y.paddingLeft)) * g.x, N = v.top + (p.clientTop + parseFloat(y.paddingTop)) * g.y;
      d *= g.x, u *= g.y, f *= g.x, l *= g.y, d += S, u += N, w = _e(p), p = Hr(w);
    }
  }
  return jn({
    width: f,
    height: l,
    x: d,
    y: u
  });
}
function or(e, t) {
  const n = ar(e).scrollLeft;
  return t ? t.left + n : gt(Ge(e)).left + n;
}
function vc(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - or(e, n), a = n.top + t.scrollTop;
  return {
    x: r,
    y: a
  };
}
function Lp(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: a
  } = e;
  const o = a === "fixed", i = Ge(r), s = t ? rr(t.floating) : !1;
  if (r === i || s && o)
    return n;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = He(1);
  const f = He(0), l = rt(r);
  if ((l || !l && !o) && ((qt(r) !== "body" || mn(i)) && (d = ar(r)), l)) {
    const h = gt(r);
    u = At(r), f.x = h.x + r.clientLeft, f.y = h.y + r.clientTop;
  }
  const m = i && !l && !o ? vc(i, d) : He(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - d.scrollLeft * u.x + f.x + m.x,
    y: n.y * u.y - d.scrollTop * u.y + f.y + m.y
  };
}
function Fp(e) {
  return Array.from(e.getClientRects());
}
function $p(e) {
  const t = Ge(e), n = ar(e), r = e.ownerDocument.body, a = xe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = xe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + or(e);
  const s = -n.scrollTop;
  return Fe(r).direction === "rtl" && (i += xe(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: o,
    x: i,
    y: s
  };
}
const Xo = 25;
function Wp(e, t) {
  const n = _e(e), r = Ge(e), a = n.visualViewport;
  let o = r.clientWidth, i = r.clientHeight, s = 0, d = 0;
  if (a) {
    o = a.width, i = a.height;
    const f = Aa();
    (!f || f && t === "fixed") && (s = a.offsetLeft, d = a.offsetTop);
  }
  const u = or(r);
  if (u <= 0) {
    const f = r.ownerDocument, l = f.body, m = getComputedStyle(l), h = f.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, w = Math.abs(r.clientWidth - l.clientWidth - h);
    w <= Xo && (o -= w);
  } else u <= Xo && (o += u);
  return {
    width: o,
    height: i,
    x: s,
    y: d
  };
}
function Up(e, t) {
  const n = gt(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, o = rt(e) ? At(e) : He(1), i = e.clientWidth * o.x, s = e.clientHeight * o.y, d = a * o.x, u = r * o.y;
  return {
    width: i,
    height: s,
    x: d,
    y: u
  };
}
function Jo(e, t, n) {
  let r;
  if (t === "viewport")
    r = Wp(e, n);
  else if (t === "document")
    r = $p(Ge(e));
  else if (Le(t))
    r = Up(t, n);
  else {
    const a = gc(e);
    r = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return jn(r);
}
function yc(e, t) {
  const n = lt(e);
  return n === t || !Le(n) || Ft(n) ? !1 : Fe(n).position === "fixed" || yc(n, t);
}
function zp(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = an(e, [], !1).filter((s) => Le(s) && qt(s) !== "body"), a = null;
  const o = Fe(e).position === "fixed";
  let i = o ? lt(e) : e;
  for (; Le(i) && !Ft(i); ) {
    const s = Fe(i), d = Ta(i);
    !d && s.position === "fixed" && (a = null), (o ? !d && !a : !d && s.position === "static" && !!a && (a.position === "absolute" || a.position === "fixed") || mn(i) && !d && yc(e, i)) ? r = r.filter((f) => f !== i) : a = s, i = lt(i);
  }
  return t.set(e, r), r;
}
function Bp(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const i = [...n === "clippingAncestors" ? rr(t) ? [] : zp(t, this._c) : [].concat(n), r], s = Jo(t, i[0], a);
  let d = s.top, u = s.right, f = s.bottom, l = s.left;
  for (let m = 1; m < i.length; m++) {
    const h = Jo(t, i[m], a);
    d = xe(h.top, d), u = ct(h.right, u), f = ct(h.bottom, f), l = xe(h.left, l);
  }
  return {
    width: u - l,
    height: f - d,
    x: l,
    y: d
  };
}
function jp(e) {
  const {
    width: t,
    height: n
  } = wc(e);
  return {
    width: t,
    height: n
  };
}
function Hp(e, t, n) {
  const r = rt(t), a = Ge(t), o = n === "fixed", i = gt(e, !0, o, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = He(0);
  function u() {
    d.x = or(a);
  }
  if (r || !r && !o)
    if ((qt(t) !== "body" || mn(a)) && (s = ar(t)), r) {
      const h = gt(t, !0, o, t);
      d.x = h.x + t.clientLeft, d.y = h.y + t.clientTop;
    } else a && u();
  o && !r && a && u();
  const f = a && !r && !o ? vc(a, s) : He(0), l = i.left + s.scrollLeft - d.x - f.x, m = i.top + s.scrollTop - d.y - f.y;
  return {
    x: l,
    y: m,
    width: i.width,
    height: i.height
  };
}
function Mr(e) {
  return Fe(e).position === "static";
}
function Qo(e, t) {
  if (!rt(e) || Fe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ge(e) === n && (n = n.ownerDocument.body), n;
}
function bc(e, t) {
  const n = _e(e);
  if (rr(e))
    return n;
  if (!rt(e)) {
    let a = lt(e);
    for (; a && !Ft(a); ) {
      if (Le(a) && !Mr(a))
        return a;
      a = lt(a);
    }
    return n;
  }
  let r = Qo(e, t);
  for (; r && Tp(r) && Mr(r); )
    r = Qo(r, t);
  return r && Ft(r) && Mr(r) && !Ta(r) ? n : r || Rp(e) || n;
}
const Vp = async function(e) {
  const t = this.getOffsetParent || bc, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Hp(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Yp(e) {
  return Fe(e).direction === "rtl";
}
const Gp = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Lp,
  getDocumentElement: Ge,
  getClippingRect: Bp,
  getOffsetParent: bc,
  getElementRects: Vp,
  getClientRects: Fp,
  getDimensions: jp,
  getScale: At,
  isElement: Le,
  isRTL: Yp
};
function xc(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function qp(e, t) {
  let n = null, r;
  const a = Ge(e);
  function o() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, d) {
    s === void 0 && (s = !1), d === void 0 && (d = 1), o();
    const u = e.getBoundingClientRect(), {
      left: f,
      top: l,
      width: m,
      height: h
    } = u;
    if (s || t(), !m || !h)
      return;
    const w = Cn(l), p = Cn(a.clientWidth - (f + m)), g = Cn(a.clientHeight - (l + h)), v = Cn(f), S = {
      rootMargin: -w + "px " + -p + "px " + -g + "px " + -v + "px",
      threshold: xe(0, ct(1, d)) || 1
    };
    let N = !0;
    function x(C) {
      const b = C[0].intersectionRatio;
      if (b !== d) {
        if (!N)
          return i();
        b ? i(!1, b) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      b === 1 && !xc(u, e.getBoundingClientRect()) && i(), N = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...S,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, S);
    }
    n.observe(e);
  }
  return i(!0), o;
}
function Kp(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: o = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = r, u = Da(e), f = a || o ? [...u ? an(u) : [], ...t ? an(t) : []] : [];
  f.forEach((v) => {
    a && v.addEventListener("scroll", n, {
      passive: !0
    }), o && v.addEventListener("resize", n);
  });
  const l = u && s ? qp(u, n) : null;
  let m = -1, h = null;
  i && (h = new ResizeObserver((v) => {
    let [y] = v;
    y && y.target === u && h && t && (h.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var S;
      (S = h) == null || S.observe(t);
    })), n();
  }), u && !d && h.observe(u), t && h.observe(t));
  let w, p = d ? gt(e) : null;
  d && g();
  function g() {
    const v = gt(e);
    p && !xc(p, v) && n(), p = v, w = requestAnimationFrame(g);
  }
  return n(), () => {
    var v;
    f.forEach((y) => {
      a && y.removeEventListener("scroll", n), o && y.removeEventListener("resize", n);
    }), l == null || l(), (v = h) == null || v.disconnect(), h = null, d && cancelAnimationFrame(w);
  };
}
const Xp = Mp, Jp = Pp, Qp = Sp, Zp = kp, ew = Np, Zo = _p, tw = Ep, nw = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: Gp,
    ...n
  }, o = {
    ...a.platform,
    _c: r
  };
  return xp(e, t, {
    ...a,
    platform: o
  });
};
var rw = typeof document < "u", aw = function() {
}, Tn = rw ? nt : aw;
function Hn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, a;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Hn(e[r], t[r]))
          return !1;
      return !0;
    }
    if (a = Object.keys(e), n = a.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, a[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const o = a[r];
      if (!(o === "_owner" && e.$$typeof) && !Hn(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function _c(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ei(e, t) {
  const n = _c(e);
  return Math.round(t * n) / n;
}
function Pr(e) {
  const t = A(e);
  return Tn(() => {
    t.current = e;
  }), t;
}
function ow(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: a,
    elements: {
      reference: o,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: d,
    open: u
  } = e, [f, l] = M({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, h] = M(r);
  Hn(m, r) || h(r);
  const [w, p] = M(null), [g, v] = M(null), y = U((P) => {
    P !== C.current && (C.current = P, p(P));
  }, []), S = U((P) => {
    P !== b.current && (b.current = P, v(P));
  }, []), N = o || w, x = i || g, C = A(null), b = A(null), _ = A(f), E = d != null, L = Pr(d), j = Pr(a), Y = Pr(u), K = U(() => {
    if (!C.current || !b.current)
      return;
    const P = {
      placement: t,
      strategy: n,
      middleware: m
    };
    j.current && (P.platform = j.current), nw(C.current, b.current, P).then((O) => {
      const X = {
        ...O,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Y.current !== !1
      };
      H.current && !Hn(_.current, X) && (_.current = X, qn(() => {
        l(X);
      }));
    });
  }, [m, t, n, j, Y]);
  Tn(() => {
    u === !1 && _.current.isPositioned && (_.current.isPositioned = !1, l((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [u]);
  const H = A(!1);
  Tn(() => (H.current = !0, () => {
    H.current = !1;
  }), []), Tn(() => {
    if (N && (C.current = N), x && (b.current = x), N && x) {
      if (L.current)
        return L.current(N, x, K);
      K();
    }
  }, [N, x, K, L, E]);
  const Z = me(() => ({
    reference: C,
    floating: b,
    setReference: y,
    setFloating: S
  }), [y, S]), W = me(() => ({
    reference: N,
    floating: x
  }), [N, x]), V = me(() => {
    const P = {
      position: n,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return P;
    const O = ei(W.floating, f.x), X = ei(W.floating, f.y);
    return s ? {
      ...P,
      transform: "translate(" + O + "px, " + X + "px)",
      ..._c(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: O,
      top: X
    };
  }, [n, s, W.floating, f.x, f.y]);
  return me(() => ({
    ...f,
    update: K,
    refs: Z,
    elements: W,
    floatingStyles: V
  }), [f, K, Z, W, V]);
}
const iw = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: a
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Zo({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? Zo({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
}, sw = (e, t) => {
  const n = Xp(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, cw = (e, t) => {
  const n = Jp(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, lw = (e, t) => ({
  fn: tw(e).fn,
  options: [e, t]
}), uw = (e, t) => {
  const n = Qp(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, dw = (e, t) => {
  const n = Zp(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, fw = (e, t) => {
  const n = ew(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, mw = (e, t) => {
  const n = iw(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var hw = "Arrow", Sc = T((e, t) => {
  const { children: n, width: r = 10, height: a = 5, ...o } = e;
  return /* @__PURE__ */ c(
    q.svg,
    {
      ...o,
      ref: t,
      width: r,
      height: a,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ c("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Sc.displayName = hw;
var pw = Sc, Ra = "Popper", [Nc, Cc] = ut(Ra), [ww, Mc] = Nc(Ra), Pc = (e) => {
  const { __scopePopper: t, children: n } = e, [r, a] = M(null);
  return /* @__PURE__ */ c(ww, { scope: t, anchor: r, onAnchorChange: a, children: n });
};
Pc.displayName = Ra;
var Ec = "PopperAnchor", kc = T(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...a } = e, o = Mc(Ec, n), i = A(null), s = se(t, i), d = A(null);
    return I(() => {
      const u = d.current;
      d.current = (r == null ? void 0 : r.current) || i.current, u !== d.current && o.onAnchorChange(d.current);
    }), r ? null : /* @__PURE__ */ c(q.div, { ...a, ref: s });
  }
);
kc.displayName = Ec;
var Oa = "PopperContent", [gw, vw] = Nc(Oa), Tc = T(
  (e, t) => {
    var G, Re, fe, Ne, k, re;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: a = 0,
      align: o = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: d = !0,
      collisionBoundary: u = [],
      collisionPadding: f = 0,
      sticky: l = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: w,
      ...p
    } = e, g = Mc(Oa, n), [v, y] = M(null), S = se(t, (we) => y(we)), [N, x] = M(null), C = lp(N), b = (C == null ? void 0 : C.width) ?? 0, _ = (C == null ? void 0 : C.height) ?? 0, E = r + (o !== "center" ? "-" + o : ""), L = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, j = Array.isArray(u) ? u : [u], Y = j.length > 0, K = {
      padding: L,
      boundary: j.filter(bw),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: Y
    }, { refs: H, floatingStyles: Z, placement: W, isPositioned: V, middlewareData: P } = ow({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: E,
      whileElementsMounted: (...we) => Kp(...we, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        sw({ mainAxis: a + _, alignmentAxis: i }),
        d && cw({
          mainAxis: !0,
          crossAxis: !1,
          limiter: l === "partial" ? lw() : void 0,
          ...K
        }),
        d && uw({ ...K }),
        dw({
          ...K,
          apply: ({ elements: we, rects: be, availableWidth: We, availableHeight: de }) => {
            const { width: ee, height: Ce } = be.reference, Oe = we.floating.style;
            Oe.setProperty("--radix-popper-available-width", `${We}px`), Oe.setProperty("--radix-popper-available-height", `${de}px`), Oe.setProperty("--radix-popper-anchor-width", `${ee}px`), Oe.setProperty("--radix-popper-anchor-height", `${Ce}px`);
          }
        }),
        N && mw({ element: N, padding: s }),
        xw({ arrowWidth: b, arrowHeight: _ }),
        m && fw({ strategy: "referenceHidden", ...K })
      ]
    }), [O, X] = Rc(W), oe = ge(w);
    ke(() => {
      V && (oe == null || oe());
    }, [V, oe]);
    const ve = (G = P.arrow) == null ? void 0 : G.x, ne = (Re = P.arrow) == null ? void 0 : Re.y, ue = ((fe = P.arrow) == null ? void 0 : fe.centerOffset) !== 0, [he, Se] = M();
    return ke(() => {
      v && Se(window.getComputedStyle(v).zIndex);
    }, [v]), /* @__PURE__ */ c(
      "div",
      {
        ref: H.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Z,
          transform: V ? Z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: he,
          "--radix-popper-transform-origin": [
            (Ne = P.transformOrigin) == null ? void 0 : Ne.x,
            (k = P.transformOrigin) == null ? void 0 : k.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((re = P.hide) == null ? void 0 : re.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ c(
          gw,
          {
            scope: n,
            placedSide: O,
            onArrowChange: x,
            arrowX: ve,
            arrowY: ne,
            shouldHideArrow: ue,
            children: /* @__PURE__ */ c(
              q.div,
              {
                "data-side": O,
                "data-align": X,
                ...p,
                ref: S,
                style: {
                  ...p.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: V ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Tc.displayName = Oa;
var Ac = "PopperArrow", yw = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Dc = T(function(t, n) {
  const { __scopePopper: r, ...a } = t, o = vw(Ac, r), i = yw[o.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ c(
      "span",
      {
        ref: o.onArrowChange,
        style: {
          position: "absolute",
          left: o.arrowX,
          top: o.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[o.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[o.placedSide],
          visibility: o.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ c(
          pw,
          {
            ...a,
            ref: n,
            style: {
              ...a.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Dc.displayName = Ac;
function bw(e) {
  return e !== null;
}
var xw = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, v, y;
    const { placement: n, rects: r, middlewareData: a } = t, i = ((g = a.arrow) == null ? void 0 : g.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, d = i ? 0 : e.arrowHeight, [u, f] = Rc(n), l = { start: "0%", center: "50%", end: "100%" }[f], m = (((v = a.arrow) == null ? void 0 : v.x) ?? 0) + s / 2, h = (((y = a.arrow) == null ? void 0 : y.y) ?? 0) + d / 2;
    let w = "", p = "";
    return u === "bottom" ? (w = i ? l : `${m}px`, p = `${-d}px`) : u === "top" ? (w = i ? l : `${m}px`, p = `${r.floating.height + d}px`) : u === "right" ? (w = `${-d}px`, p = i ? l : `${h}px`) : u === "left" && (w = `${r.floating.width + d}px`, p = i ? l : `${h}px`), { data: { x: w, y: p } };
  }
});
function Rc(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var _w = Pc, Sw = kc, Nw = Tc, Cw = Dc, Er = "rovingFocusGroup.onEntryFocus", Mw = { bubbles: !1, cancelable: !0 }, hn = "RovingFocusGroup", [Vr, Oc, Pw] = dc(hn), [Ew, Ic] = ut(
  hn,
  [Pw]
), [kw, Tw] = Ew(hn), Lc = T(
  (e, t) => /* @__PURE__ */ c(Vr.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c(Vr.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c(Aw, { ...e, ref: t }) }) })
);
Lc.displayName = hn;
var Aw = T((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: a = !1,
    dir: o,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: d,
    onEntryFocus: u,
    preventScrollOnEntryFocus: f = !1,
    ...l
  } = e, m = A(null), h = se(t, m), w = ma(o), [p, g] = va({
    prop: i,
    defaultProp: s ?? null,
    onChange: d,
    caller: hn
  }), [v, y] = M(!1), S = ge(u), N = Oc(n), x = A(!1), [C, b] = M(0);
  return I(() => {
    const _ = m.current;
    if (_)
      return _.addEventListener(Er, S), () => _.removeEventListener(Er, S);
  }, [S]), /* @__PURE__ */ c(
    kw,
    {
      scope: n,
      orientation: r,
      dir: w,
      loop: a,
      currentTabStopId: p,
      onItemFocus: U(
        (_) => g(_),
        [g]
      ),
      onItemShiftTab: U(() => y(!0), []),
      onFocusableItemAdd: U(
        () => b((_) => _ + 1),
        []
      ),
      onFocusableItemRemove: U(
        () => b((_) => _ - 1),
        []
      ),
      children: /* @__PURE__ */ c(
        q.div,
        {
          tabIndex: v || C === 0 ? -1 : 0,
          "data-orientation": r,
          ...l,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: $(e.onMouseDown, () => {
            x.current = !0;
          }),
          onFocus: $(e.onFocus, (_) => {
            const E = !x.current;
            if (_.target === _.currentTarget && E && !v) {
              const L = new CustomEvent(Er, Mw);
              if (_.currentTarget.dispatchEvent(L), !L.defaultPrevented) {
                const j = N().filter((W) => W.focusable), Y = j.find((W) => W.active), K = j.find((W) => W.id === p), Z = [Y, K, ...j].filter(
                  Boolean
                ).map((W) => W.ref.current);
                Wc(Z, f);
              }
            }
            x.current = !1;
          }),
          onBlur: $(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), Fc = "RovingFocusGroupItem", $c = T(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: a = !1,
      tabStopId: o,
      children: i,
      ...s
    } = e, d = kt(), u = o || d, f = Tw(Fc, n), l = f.currentTabStopId === u, m = Oc(n), { onFocusableItemAdd: h, onFocusableItemRemove: w, currentTabStopId: p } = f;
    return I(() => {
      if (r)
        return h(), () => w();
    }, [r, h, w]), /* @__PURE__ */ c(
      Vr.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: a,
        children: /* @__PURE__ */ c(
          q.span,
          {
            tabIndex: l ? 0 : -1,
            "data-orientation": f.orientation,
            ...s,
            ref: t,
            onMouseDown: $(e.onMouseDown, (g) => {
              r ? f.onItemFocus(u) : g.preventDefault();
            }),
            onFocus: $(e.onFocus, () => f.onItemFocus(u)),
            onKeyDown: $(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const v = Ow(g, f.orientation, f.dir);
              if (v !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let S = m().filter((N) => N.focusable).map((N) => N.ref.current);
                if (v === "last") S.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && S.reverse();
                  const N = S.indexOf(g.currentTarget);
                  S = f.loop ? Iw(S, N + 1) : S.slice(N + 1);
                }
                setTimeout(() => Wc(S));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: l, hasTabStop: p != null }) : i
          }
        )
      }
    );
  }
);
$c.displayName = Fc;
var Dw = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Rw(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Ow(e, t, n) {
  const r = Rw(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Dw[r];
}
function Wc(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Iw(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Lw = Lc, Fw = $c, Yr = ["Enter", " "], $w = ["ArrowDown", "PageUp", "Home"], Uc = ["ArrowUp", "PageDown", "End"], Ww = [...$w, ...Uc], Uw = {
  ltr: [...Yr, "ArrowRight"],
  rtl: [...Yr, "ArrowLeft"]
}, zw = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, pn = "Menu", [on, Bw, jw] = dc(pn), [yt, zc] = ut(pn, [
  jw,
  Cc,
  Ic
]), ir = Cc(), Bc = Ic(), [Hw, bt] = yt(pn), [Vw, wn] = yt(pn), jc = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: a, onOpenChange: o, modal: i = !0 } = e, s = ir(t), [d, u] = M(null), f = A(!1), l = ge(o), m = ma(a);
  return I(() => {
    const h = () => {
      f.current = !0, document.addEventListener("pointerdown", w, { capture: !0, once: !0 }), document.addEventListener("pointermove", w, { capture: !0, once: !0 });
    }, w = () => f.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", w, { capture: !0 }), document.removeEventListener("pointermove", w, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c(_w, { ...s, children: /* @__PURE__ */ c(
    Hw,
    {
      scope: t,
      open: n,
      onOpenChange: l,
      content: d,
      onContentChange: u,
      children: /* @__PURE__ */ c(
        Vw,
        {
          scope: t,
          onClose: U(() => l(!1), [l]),
          isUsingKeyboardRef: f,
          dir: m,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
jc.displayName = pn;
var Yw = "MenuAnchor", Ia = T(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, a = ir(n);
    return /* @__PURE__ */ c(Sw, { ...a, ...r, ref: t });
  }
);
Ia.displayName = Yw;
var La = "MenuPortal", [Gw, Hc] = yt(La, {
  forceMount: void 0
}), Vc = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: a } = e, o = bt(La, t);
  return /* @__PURE__ */ c(Gw, { scope: t, forceMount: n, children: /* @__PURE__ */ c(Ae, { present: n || o.open, children: /* @__PURE__ */ c(xa, { asChild: !0, container: a, children: r }) }) });
};
Vc.displayName = La;
var Pe = "MenuContent", [qw, Fa] = yt(Pe), Yc = T(
  (e, t) => {
    const n = Hc(Pe, e.__scopeMenu), { forceMount: r = n.forceMount, ...a } = e, o = bt(Pe, e.__scopeMenu), i = wn(Pe, e.__scopeMenu);
    return /* @__PURE__ */ c(on.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c(Ae, { present: r || o.open, children: /* @__PURE__ */ c(on.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ c(Kw, { ...a, ref: t }) : /* @__PURE__ */ c(Xw, { ...a, ref: t }) }) }) });
  }
), Kw = T(
  (e, t) => {
    const n = bt(Pe, e.__scopeMenu), r = A(null), a = se(t, r);
    return I(() => {
      const o = r.current;
      if (o) return Gs(o);
    }, []), /* @__PURE__ */ c(
      $a,
      {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: $(
          e.onFocusOutside,
          (o) => o.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Xw = T((e, t) => {
  const n = bt(Pe, e.__scopeMenu);
  return /* @__PURE__ */ c(
    $a,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Jw = /* @__PURE__ */ It("MenuContent.ScrollLock"), $a = T(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: a,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: d,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      onFocusOutside: l,
      onInteractOutside: m,
      onDismiss: h,
      disableOutsideScroll: w,
      ...p
    } = e, g = bt(Pe, n), v = wn(Pe, n), y = ir(n), S = Bc(n), N = Bw(n), [x, C] = M(null), b = A(null), _ = se(t, b, g.onContentChange), E = A(0), L = A(""), j = A(0), Y = A(null), K = A("right"), H = A(0), Z = w ? _a : Q, W = w ? { as: Jw, allowPinchZoom: !0 } : void 0, V = (O) => {
      var G, Re;
      const X = L.current + O, oe = N().filter((fe) => !fe.disabled), ve = document.activeElement, ne = (G = oe.find((fe) => fe.ref.current === ve)) == null ? void 0 : G.textValue, ue = oe.map((fe) => fe.textValue), he = lg(ue, X, ne), Se = (Re = oe.find((fe) => fe.textValue === he)) == null ? void 0 : Re.ref.current;
      (function fe(Ne) {
        L.current = Ne, window.clearTimeout(E.current), Ne !== "" && (E.current = window.setTimeout(() => fe(""), 1e3));
      })(X), Se && setTimeout(() => Se.focus());
    };
    I(() => () => window.clearTimeout(E.current), []), $s();
    const P = U((O) => {
      var oe, ve;
      return K.current === ((oe = Y.current) == null ? void 0 : oe.side) && dg(O, (ve = Y.current) == null ? void 0 : ve.area);
    }, []);
    return /* @__PURE__ */ c(
      qw,
      {
        scope: n,
        searchRef: L,
        onItemEnter: U(
          (O) => {
            P(O) && O.preventDefault();
          },
          [P]
        ),
        onItemLeave: U(
          (O) => {
            var X;
            P(O) || ((X = b.current) == null || X.focus(), C(null));
          },
          [P]
        ),
        onTriggerLeave: U(
          (O) => {
            P(O) && O.preventDefault();
          },
          [P]
        ),
        pointerGraceTimerRef: j,
        onPointerGraceIntentChange: U((O) => {
          Y.current = O;
        }, []),
        children: /* @__PURE__ */ c(Z, { ...W, children: /* @__PURE__ */ c(
          ba,
          {
            asChild: !0,
            trapped: a,
            onMountAutoFocus: $(o, (O) => {
              var X;
              O.preventDefault(), (X = b.current) == null || X.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ c(
              ya,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                onFocusOutside: l,
                onInteractOutside: m,
                onDismiss: h,
                children: /* @__PURE__ */ c(
                  Lw,
                  {
                    asChild: !0,
                    ...S,
                    dir: v.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: x,
                    onCurrentTabStopIdChange: C,
                    onEntryFocus: $(d, (O) => {
                      v.isUsingKeyboardRef.current || O.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c(
                      Nw,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": cl(g.open),
                        "data-radix-menu-content": "",
                        dir: v.dir,
                        ...y,
                        ...p,
                        ref: _,
                        style: { outline: "none", ...p.style },
                        onKeyDown: $(p.onKeyDown, (O) => {
                          const oe = O.target.closest("[data-radix-menu-content]") === O.currentTarget, ve = O.ctrlKey || O.altKey || O.metaKey, ne = O.key.length === 1;
                          oe && (O.key === "Tab" && O.preventDefault(), !ve && ne && V(O.key));
                          const ue = b.current;
                          if (O.target !== ue || !Ww.includes(O.key)) return;
                          O.preventDefault();
                          const Se = N().filter((G) => !G.disabled).map((G) => G.ref.current);
                          Uc.includes(O.key) && Se.reverse(), sg(Se);
                        }),
                        onBlur: $(e.onBlur, (O) => {
                          O.currentTarget.contains(O.target) || (window.clearTimeout(E.current), L.current = "");
                        }),
                        onPointerMove: $(
                          e.onPointerMove,
                          sn((O) => {
                            const X = O.target, oe = H.current !== O.clientX;
                            if (O.currentTarget.contains(X) && oe) {
                              const ve = O.clientX > H.current ? "right" : "left";
                              K.current = ve, H.current = O.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Yc.displayName = Pe;
var Qw = "MenuGroup", Wa = T(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c(q.div, { role: "group", ...r, ref: t });
  }
);
Wa.displayName = Qw;
var Zw = "MenuLabel", Gc = T(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c(q.div, { ...r, ref: t });
  }
);
Gc.displayName = Zw;
var Vn = "MenuItem", ti = "menu.itemSelect", sr = T(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...a } = e, o = A(null), i = wn(Vn, e.__scopeMenu), s = Fa(Vn, e.__scopeMenu), d = se(t, o), u = A(!1), f = () => {
      const l = o.current;
      if (!n && l) {
        const m = new CustomEvent(ti, { bubbles: !0, cancelable: !0 });
        l.addEventListener(ti, (h) => r == null ? void 0 : r(h), { once: !0 }), us(l, m), m.defaultPrevented ? u.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ c(
      qc,
      {
        ...a,
        ref: d,
        disabled: n,
        onClick: $(e.onClick, f),
        onPointerDown: (l) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, l), u.current = !0;
        },
        onPointerUp: $(e.onPointerUp, (l) => {
          var m;
          u.current || (m = l.currentTarget) == null || m.click();
        }),
        onKeyDown: $(e.onKeyDown, (l) => {
          const m = s.searchRef.current !== "";
          n || m && l.key === " " || Yr.includes(l.key) && (l.currentTarget.click(), l.preventDefault());
        })
      }
    );
  }
);
sr.displayName = Vn;
var qc = T(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: a, ...o } = e, i = Fa(Vn, n), s = Bc(n), d = A(null), u = se(t, d), [f, l] = M(!1), [m, h] = M("");
    return I(() => {
      const w = d.current;
      w && h((w.textContent ?? "").trim());
    }, [o.children]), /* @__PURE__ */ c(
      on.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: a ?? m,
        children: /* @__PURE__ */ c(Fw, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ c(
          q.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...o,
            ref: u,
            onPointerMove: $(
              e.onPointerMove,
              sn((w) => {
                r ? i.onItemLeave(w) : (i.onItemEnter(w), w.defaultPrevented || w.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: $(
              e.onPointerLeave,
              sn((w) => i.onItemLeave(w))
            ),
            onFocus: $(e.onFocus, () => l(!0)),
            onBlur: $(e.onBlur, () => l(!1))
          }
        ) })
      }
    );
  }
), eg = "MenuCheckboxItem", Kc = T(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...a } = e;
    return /* @__PURE__ */ c(el, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c(
      sr,
      {
        role: "menuitemcheckbox",
        "aria-checked": Yn(n) ? "mixed" : n,
        ...a,
        ref: t,
        "data-state": za(n),
        onSelect: $(
          a.onSelect,
          () => r == null ? void 0 : r(Yn(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Kc.displayName = eg;
var Xc = "MenuRadioGroup", [tg, ng] = yt(
  Xc,
  { value: void 0, onValueChange: () => {
  } }
), Jc = T(
  (e, t) => {
    const { value: n, onValueChange: r, ...a } = e, o = ge(r);
    return /* @__PURE__ */ c(tg, { scope: e.__scopeMenu, value: n, onValueChange: o, children: /* @__PURE__ */ c(Wa, { ...a, ref: t }) });
  }
);
Jc.displayName = Xc;
var Qc = "MenuRadioItem", Zc = T(
  (e, t) => {
    const { value: n, ...r } = e, a = ng(Qc, e.__scopeMenu), o = n === a.value;
    return /* @__PURE__ */ c(el, { scope: e.__scopeMenu, checked: o, children: /* @__PURE__ */ c(
      sr,
      {
        role: "menuitemradio",
        "aria-checked": o,
        ...r,
        ref: t,
        "data-state": za(o),
        onSelect: $(
          r.onSelect,
          () => {
            var i;
            return (i = a.onValueChange) == null ? void 0 : i.call(a, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Zc.displayName = Qc;
var Ua = "MenuItemIndicator", [el, rg] = yt(
  Ua,
  { checked: !1 }
), tl = T(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...a } = e, o = rg(Ua, n);
    return /* @__PURE__ */ c(
      Ae,
      {
        present: r || Yn(o.checked) || o.checked === !0,
        children: /* @__PURE__ */ c(
          q.span,
          {
            ...a,
            ref: t,
            "data-state": za(o.checked)
          }
        )
      }
    );
  }
);
tl.displayName = Ua;
var ag = "MenuSeparator", nl = T(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c(
      q.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
nl.displayName = ag;
var og = "MenuArrow", rl = T(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, a = ir(n);
    return /* @__PURE__ */ c(Cw, { ...a, ...r, ref: t });
  }
);
rl.displayName = og;
var ig = "MenuSub", [xv, al] = yt(ig), Zt = "MenuSubTrigger", ol = T(
  (e, t) => {
    const n = bt(Zt, e.__scopeMenu), r = wn(Zt, e.__scopeMenu), a = al(Zt, e.__scopeMenu), o = Fa(Zt, e.__scopeMenu), i = A(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: d } = o, u = { __scopeMenu: e.__scopeMenu }, f = U(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return I(() => f, [f]), I(() => {
      const l = s.current;
      return () => {
        window.clearTimeout(l), d(null);
      };
    }, [s, d]), /* @__PURE__ */ c(Ia, { asChild: !0, ...u, children: /* @__PURE__ */ c(
      qc,
      {
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": a.contentId,
        "data-state": cl(n.open),
        ...e,
        ref: Xn(t, a.onTriggerChange),
        onClick: (l) => {
          var m;
          (m = e.onClick) == null || m.call(e, l), !(e.disabled || l.defaultPrevented) && (l.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: $(
          e.onPointerMove,
          sn((l) => {
            o.onItemEnter(l), !l.defaultPrevented && !e.disabled && !n.open && !i.current && (o.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: $(
          e.onPointerLeave,
          sn((l) => {
            var h, w;
            f();
            const m = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (m) {
              const p = (w = n.content) == null ? void 0 : w.dataset.side, g = p === "right", v = g ? -5 : 5, y = m[g ? "left" : "right"], S = m[g ? "right" : "left"];
              o.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: l.clientX + v, y: l.clientY },
                  { x: y, y: m.top },
                  { x: S, y: m.top },
                  { x: S, y: m.bottom },
                  { x: y, y: m.bottom }
                ],
                side: p
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => o.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (o.onTriggerLeave(l), l.defaultPrevented) return;
              o.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: $(e.onKeyDown, (l) => {
          var h;
          const m = o.searchRef.current !== "";
          e.disabled || m && l.key === " " || Uw[r.dir].includes(l.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), l.preventDefault());
        })
      }
    ) });
  }
);
ol.displayName = Zt;
var il = "MenuSubContent", sl = T(
  (e, t) => {
    const n = Hc(Pe, e.__scopeMenu), { forceMount: r = n.forceMount, ...a } = e, o = bt(Pe, e.__scopeMenu), i = wn(Pe, e.__scopeMenu), s = al(il, e.__scopeMenu), d = A(null), u = se(t, d);
    return /* @__PURE__ */ c(on.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c(Ae, { present: r || o.open, children: /* @__PURE__ */ c(on.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c(
      $a,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...a,
        ref: u,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var l;
          i.isUsingKeyboardRef.current && ((l = d.current) == null || l.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: $(e.onFocusOutside, (f) => {
          f.target !== s.trigger && o.onOpenChange(!1);
        }),
        onEscapeKeyDown: $(e.onEscapeKeyDown, (f) => {
          i.onClose(), f.preventDefault();
        }),
        onKeyDown: $(e.onKeyDown, (f) => {
          var h;
          const l = f.currentTarget.contains(f.target), m = zw[i.dir].includes(f.key);
          l && m && (o.onOpenChange(!1), (h = s.trigger) == null || h.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
sl.displayName = il;
function cl(e) {
  return e ? "open" : "closed";
}
function Yn(e) {
  return e === "indeterminate";
}
function za(e) {
  return Yn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function sg(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function cg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function lg(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, o = n ? e.indexOf(n) : -1;
  let i = cg(e, Math.max(o, 0));
  a.length === 1 && (i = i.filter((u) => u !== n));
  const d = i.find(
    (u) => u.toLowerCase().startsWith(a.toLowerCase())
  );
  return d !== n ? d : void 0;
}
function ug(e, t) {
  const { x: n, y: r } = e;
  let a = !1;
  for (let o = 0, i = t.length - 1; o < t.length; i = o++) {
    const s = t[o], d = t[i], u = s.x, f = s.y, l = d.x, m = d.y;
    f > r != m > r && n < (l - u) * (r - f) / (m - f) + u && (a = !a);
  }
  return a;
}
function dg(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return ug(n, t);
}
function sn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var fg = jc, mg = Ia, hg = Vc, pg = Yc, wg = Wa, gg = Gc, vg = sr, yg = Kc, bg = Jc, xg = Zc, _g = tl, Sg = nl, Ng = rl, Cg = ol, Mg = sl, cr = "DropdownMenu", [Pg] = ut(
  cr,
  [zc]
), ye = zc(), [Eg, ll] = Pg(cr), ul = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: a,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, d = ye(t), u = A(null), [f, l] = va({
    prop: a,
    defaultProp: o ?? !1,
    onChange: i,
    caller: cr
  });
  return /* @__PURE__ */ c(
    Eg,
    {
      scope: t,
      triggerId: kt(),
      triggerRef: u,
      contentId: kt(),
      open: f,
      onOpenChange: l,
      onOpenToggle: U(() => l((m) => !m), [l]),
      modal: s,
      children: /* @__PURE__ */ c(fg, { ...d, open: f, onOpenChange: l, dir: r, modal: s, children: n })
    }
  );
};
ul.displayName = cr;
var dl = "DropdownMenuTrigger", fl = T(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...a } = e, o = ll(dl, n), i = ye(n);
    return /* @__PURE__ */ c(mg, { asChild: !0, ...i, children: /* @__PURE__ */ c(
      q.button,
      {
        type: "button",
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": o.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...a,
        ref: Xn(t, o.triggerRef),
        onPointerDown: $(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (o.onOpenToggle(), o.open || s.preventDefault());
        }),
        onKeyDown: $(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && o.onOpenToggle(), s.key === "ArrowDown" && o.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
fl.displayName = dl;
var kg = "DropdownMenuPortal", ml = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = ye(t);
  return /* @__PURE__ */ c(hg, { ...r, ...n });
};
ml.displayName = kg;
var hl = "DropdownMenuContent", pl = T(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = ll(hl, n), o = ye(n), i = A(!1);
    return /* @__PURE__ */ c(
      pg,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...o,
        ...r,
        ref: t,
        onCloseAutoFocus: $(e.onCloseAutoFocus, (s) => {
          var d;
          i.current || (d = a.triggerRef.current) == null || d.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: $(e.onInteractOutside, (s) => {
          const d = s.detail.originalEvent, u = d.button === 0 && d.ctrlKey === !0, f = d.button === 2 || u;
          (!a.modal || f) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
pl.displayName = hl;
var Tg = "DropdownMenuGroup", Ag = T(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = ye(n);
    return /* @__PURE__ */ c(wg, { ...a, ...r, ref: t });
  }
);
Ag.displayName = Tg;
var Dg = "DropdownMenuLabel", Rg = T(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = ye(n);
    return /* @__PURE__ */ c(gg, { ...a, ...r, ref: t });
  }
);
Rg.displayName = Dg;
var Og = "DropdownMenuItem", wl = T(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = ye(n);
    return /* @__PURE__ */ c(vg, { ...a, ...r, ref: t });
  }
);
wl.displayName = Og;
var Ig = "DropdownMenuCheckboxItem", Lg = T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = ye(n);
  return /* @__PURE__ */ c(yg, { ...a, ...r, ref: t });
});
Lg.displayName = Ig;
var Fg = "DropdownMenuRadioGroup", $g = T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = ye(n);
  return /* @__PURE__ */ c(bg, { ...a, ...r, ref: t });
});
$g.displayName = Fg;
var Wg = "DropdownMenuRadioItem", Ug = T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = ye(n);
  return /* @__PURE__ */ c(xg, { ...a, ...r, ref: t });
});
Ug.displayName = Wg;
var zg = "DropdownMenuItemIndicator", Bg = T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = ye(n);
  return /* @__PURE__ */ c(_g, { ...a, ...r, ref: t });
});
Bg.displayName = zg;
var jg = "DropdownMenuSeparator", gl = T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = ye(n);
  return /* @__PURE__ */ c(Sg, { ...a, ...r, ref: t });
});
gl.displayName = jg;
var Hg = "DropdownMenuArrow", Vg = T(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = ye(n);
    return /* @__PURE__ */ c(Ng, { ...a, ...r, ref: t });
  }
);
Vg.displayName = Hg;
var Yg = "DropdownMenuSubTrigger", Gg = T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = ye(n);
  return /* @__PURE__ */ c(Cg, { ...a, ...r, ref: t });
});
Gg.displayName = Yg;
var qg = "DropdownMenuSubContent", Kg = T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = ye(n);
  return /* @__PURE__ */ c(
    Mg,
    {
      ...a,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Kg.displayName = qg;
var Xg = ul, Jg = fl, Qg = ml, Zg = pl, ev = wl, tv = gl;
function nv({
  ...e
}) {
  return /* @__PURE__ */ c(Xg, { "data-slot": "dropdown-menu", ...e });
}
function rv({
  ...e
}) {
  return /* @__PURE__ */ c(
    Jg,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function av({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ c(Qg, { children: /* @__PURE__ */ c(
    Zg,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: F(
        "wa:z-50 wa:max-h-(--radix-dropdown-menu-content-available-height) wa:min-w-[8rem] wa:origin-(--radix-dropdown-menu-content-transform-origin) wa:overflow-x-hidden wa:overflow-y-auto wa:rounded-md wa:border wa:bg-popover wa:p-1 wa:text-popover-foreground wa:shadow-md data-[side=bottom]:wa:slide-in-from-top-2 data-[side=left]:wa:slide-in-from-right-2 data-[side=right]:wa:slide-in-from-left-2 data-[side=top]:wa:slide-in-from-bottom-2 data-[state=closed]:wa:animate-out data-[state=closed]:wa:fade-out-0 data-[state=closed]:wa:zoom-out-95 data-[state=open]:wa:animate-in data-[state=open]:wa:fade-in-0 data-[state=open]:wa:zoom-in-95",
        e
      ),
      ...n
    }
  ) });
}
function kr({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ c(
    ev,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: F(
        "wa:relative wa:flex wa:cursor-default wa:items-center wa:gap-2 wa:rounded-sm wa:px-2 wa:py-1.5 wa:text-sm wa:outline-hidden wa:select-none focus:wa:bg-accent focus:wa:text-accent-foreground data-[disabled]:wa:pointer-events-none data-[disabled]:wa:opacity-50 data-[inset]:wa:pl-8 data-[variant=destructive]:wa:text-destructive data-[variant=destructive]:focus:wa:bg-destructive/10 data-[variant=destructive]:focus:wa:text-destructive dark:data-[variant=destructive]:focus:wa:bg-destructive/20 [&_svg]:wa:pointer-events-none [&_svg]:wa:shrink-0 [&_svg:not([class*='size-'])]:wa:size-4 [&_svg:not([class*='text-'])]:wa:text-muted-foreground data-[variant=destructive]:*:[svg]:wa:text-destructive!",
        e
      ),
      ...r
    }
  );
}
function ov({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    tv,
    {
      "data-slot": "dropdown-menu-separator",
      className: F("-wa:mx-1 wa:my-1 wa:h-px wa:bg-border", e),
      ...t
    }
  );
}
function iv({
  message: e,
  conversationId: t,
  instance: n,
  onDeleted: r,
  onForward: a,
  readOnly: o = !1
}) {
  const i = Ut(), [s, d] = M(!1), [u, f] = M(!1);
  return /* @__PURE__ */ c(Q, { children: [
    /* @__PURE__ */ c(nv, { children: [
      /* @__PURE__ */ c(rv, { asChild: !0, children: /* @__PURE__ */ c(
        "button",
        {
          className: "wa:absolute wa:top-1 wa:right-1 wa:z-10 wa:opacity-0 group-hover:wa:opacity-100 wa:transition-opacity wa:rounded-full wa:p-0.5 hover:wa:bg-black/5",
          "aria-label": "Message options",
          children: /* @__PURE__ */ c(Gi, { className: "wa:h-4 wa:w-4 wa:text-[#667781]" })
        }
      ) }),
      /* @__PURE__ */ c(av, { align: "end", className: "wa:w-40", children: [
        /* @__PURE__ */ c(kr, { onClick: () => {
          const h = e.caption || e.content;
          h && navigator.clipboard.writeText(h);
        }, children: [
          /* @__PURE__ */ c(bd, { className: "wa:h-4 wa:w-4 wa:mr-2" }),
          "Copy"
        ] }),
        !o && /* @__PURE__ */ c(Q, { children: [
          /* @__PURE__ */ c(kr, { onClick: () => a(e), children: [
            /* @__PURE__ */ c(Nd, { className: "wa:h-4 wa:w-4 wa:mr-2" }),
            "Forward"
          ] }),
          /* @__PURE__ */ c(ov, {}),
          /* @__PURE__ */ c(
            kr,
            {
              onClick: () => d(!0),
              className: "wa:text-red-600 focus:wa:text-red-600",
              children: [
                /* @__PURE__ */ c(jd, { className: "wa:h-4 wa:w-4 wa:mr-2" }),
                "Delete"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c(jt, { open: s, onOpenChange: d, children: /* @__PURE__ */ c(Ht, { className: "sm:wa:max-w-[400px]", children: [
      /* @__PURE__ */ c(Vt, { children: [
        /* @__PURE__ */ c(Yt, { children: "Delete message" }),
        /* @__PURE__ */ c(fn, { children: "This will delete the message for everyone in the chat. This action cannot be undone." })
      ] }),
      /* @__PURE__ */ c(Yh, { children: [
        /* @__PURE__ */ c(
          ce,
          {
            variant: "outline",
            onClick: () => d(!1),
            disabled: u,
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ c(
          ce,
          {
            variant: "destructive",
            onClick: async () => {
              if (n) {
                f(!0);
                try {
                  await i.deleteMessage(
                    n,
                    e.id,
                    t,
                    e.direction === "outbound"
                  ), d(!1), r(e.id);
                } catch (h) {
                  console.error("Error deleting message:", h);
                } finally {
                  f(!1);
                }
              }
            },
            disabled: u,
            children: u ? /* @__PURE__ */ c(st, { className: "wa:h-4 wa:w-4 wa:animate-spin" }) : "Delete for everyone"
          }
        )
      ] })
    ] }) })
  ] });
}
function sv({
  open: e,
  onOpenChange: t,
  message: n,
  instance: r,
  onForwarded: a
}) {
  const o = Ut(), [i, s] = M([]), [d, u] = M(!1), [f, l] = M(""), [m, h] = M(null), [w, p] = M(!1), [g, v] = M(null);
  I(() => {
    e && r && (u(!0), o.findChats(r).then((C) => {
      s(
        C.map((b) => ({
          id: b.id,
          phoneNumber: b.phoneNumber,
          contactName: b.contactName,
          profilePicUrl: b.profilePicUrl
        }))
      );
    }).catch((C) => {
      console.error("Error fetching conversations:", C);
    }).finally(() => {
      u(!1);
    }));
  }, [e, r, o]);
  const y = me(() => {
    if (!f.trim()) return i;
    const C = f.toLowerCase();
    return i.filter(
      (b) => {
        var _;
        return ((_ = b.contactName) == null ? void 0 : _.toLowerCase().includes(C)) || b.phoneNumber.includes(C);
      }
    );
  }, [i, f]), S = async () => {
    var C;
    if (!(!n || !m || !r)) {
      p(!0), v(null);
      try {
        if (n.hasMedia && ((C = n.mediaData) != null && C.url)) {
          const b = n.mediaData.url;
          let _ = b;
          b.startsWith("data:") && (_ = b.split(",")[1]);
          const E = n.messageType || "document";
          await o.sendMedia(r, {
            to: m,
            mediaType: E,
            media: _,
            caption: n.caption || void 0,
            fileName: n.filename || n.mediaData.filename || void 0,
            mimeType: n.mimeType || n.mediaData.contentType || void 0
          });
        } else
          await o.sendText(r, {
            to: m,
            body: n.content
          });
        N(), t(!1), a == null || a();
      } catch (b) {
        console.error("Error forwarding message:", b), v(b instanceof Error ? b.message : "Failed to forward message");
      } finally {
        p(!1);
      }
    }
  }, N = () => {
    l(""), h(null), v(null);
  }, x = n ? n.caption || n.content || `[${n.messageType || "Media"}]` : "";
  return /* @__PURE__ */ c(
    jt,
    {
      open: e,
      onOpenChange: (C) => {
        t(C), C || N();
      },
      children: /* @__PURE__ */ c(Ht, { className: "sm:wa:max-w-[500px]", children: [
        /* @__PURE__ */ c(Vt, { children: [
          /* @__PURE__ */ c(Yt, { children: "Forward message" }),
          /* @__PURE__ */ c(fn, { children: "Choose a contact to forward this message to" })
        ] }),
        g && /* @__PURE__ */ c("div", { className: "wa:p-3 wa:bg-red-50 wa:border wa:border-red-200 wa:rounded-lg wa:text-sm wa:text-red-800", children: g }),
        /* @__PURE__ */ c("div", { className: "wa:p-3 wa:bg-[#f0f2f5] wa:rounded-lg wa:border wa:border-[#d1d7db]", children: [
          /* @__PURE__ */ c("p", { className: "wa:text-xs wa:text-[#667781] wa:mb-1", children: "Forwarding:" }),
          /* @__PURE__ */ c("p", { className: "wa:text-sm wa:text-[#111b21] wa:line-clamp-3", children: x })
        ] }),
        /* @__PURE__ */ c("div", { className: "wa:relative", children: [
          /* @__PURE__ */ c(Ki, { className: "wa:absolute wa:left-3 wa:top-1/2 -wa:translate-y-1/2 wa:h-4 wa:w-4 wa:text-[#667781]" }),
          /* @__PURE__ */ c(
            Un,
            {
              value: f,
              onChange: (C) => l(C.target.value),
              placeholder: "Search contacts...",
              className: "wa:pl-9 wa:bg-white wa:border-[#d1d7db] focus-visible:wa:ring-[#00a884]"
            }
          )
        ] }),
        /* @__PURE__ */ c(dn, { className: "wa:h-[300px] -wa:mx-2", children: d ? /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:justify-center wa:h-full", children: /* @__PURE__ */ c(st, { className: "wa:h-6 wa:w-6 wa:animate-spin wa:text-[#667781]" }) }) : y.length === 0 ? /* @__PURE__ */ c("p", { className: "wa:text-center wa:text-sm wa:text-[#667781] wa:py-8", children: "No contacts found" }) : /* @__PURE__ */ c("div", { className: "wa:space-y-0.5 wa:px-2", children: y.map((C) => /* @__PURE__ */ c(
          "button",
          {
            onClick: () => h(C.phoneNumber),
            className: F(
              "wa:w-full wa:flex wa:items-center wa:gap-3 wa:px-3 wa:py-2.5 wa:rounded-lg wa:text-left wa:transition-colors",
              m === C.phoneNumber ? "wa:bg-[#00a884]/10 wa:ring-1 wa:ring-[#00a884]" : "hover:wa:bg-[#f0f2f5]"
            ),
            children: [
              /* @__PURE__ */ c("div", { className: "wa:w-10 wa:h-10 wa:rounded-full wa:bg-[#dfe5e7] wa:flex wa:items-center wa:justify-center wa:flex-shrink-0", children: /* @__PURE__ */ c("span", { className: "wa:text-sm wa:text-[#667781] wa:font-medium", children: (C.contactName || C.phoneNumber).charAt(0).toUpperCase() }) }),
              /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0", children: [
                /* @__PURE__ */ c("p", { className: "wa:text-sm wa:font-medium wa:text-[#111b21] wa:truncate", children: C.contactName || C.phoneNumber }),
                C.contactName && /* @__PURE__ */ c("p", { className: "wa:text-xs wa:text-[#667781] wa:truncate", children: C.phoneNumber })
              ] })
            ]
          },
          C.id
        )) }) }),
        /* @__PURE__ */ c("div", { className: "wa:flex wa:justify-end wa:gap-2", children: [
          /* @__PURE__ */ c(ce, { variant: "outline", onClick: () => t(!1), children: "Cancel" }),
          /* @__PURE__ */ c(
            ce,
            {
              onClick: S,
              disabled: !m || w,
              className: "wa:bg-[#00a884] hover:wa:bg-[#008f6f]",
              children: w ? /* @__PURE__ */ c(st, { className: "wa:h-4 wa:w-4 wa:animate-spin" }) : /* @__PURE__ */ c(Q, { children: [
                /* @__PURE__ */ c(un, { className: "wa:h-4 wa:w-4 wa:mr-1" }),
                "Forward"
              ] })
            }
          )
        ] })
      ] })
    }
  );
}
function cv(e) {
  try {
    const t = new Date(e);
    return pt(t) ? Ot(t, "HH:mm") : "";
  } catch {
    return "";
  }
}
function lv(e) {
  try {
    const t = new Date(e);
    return pt(t) ? Hi(t) ? "Today" : Vi(t) ? "Yesterday" : Ot(t, "MMMM d, yyyy") : "";
  } catch {
    return "";
  }
}
function vl(e, t) {
  if (!t) return !0;
  try {
    const n = new Date(e.createdAt), r = new Date(t.createdAt);
    return !pt(n) || !pt(r) ? !1 : Ot(n, "yyyy-MM-dd") !== Ot(r, "yyyy-MM-dd");
  } catch {
    return !1;
  }
}
function uv(e) {
  const t = e.filter((r) => r.direction === "inbound");
  if (t.length === 0)
    return !1;
  const n = t[t.length - 1];
  try {
    const r = new Date(n.createdAt);
    return pt(r) ? ou(/* @__PURE__ */ new Date(), r) < 24 : !1;
  } catch {
    return !1;
  }
}
function dv(e) {
  return e.filter((n) => n.direction === "inbound").length === 0 ? "User hasn't messaged yet. Send a template message or wait for them to reply." : "Last message was over 24 hours ago. Send a template message or wait for the user to message you.";
}
function fv(e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    r.onload = () => {
      const o = r.result.split(",")[1];
      t(o);
    }, r.onerror = n, r.readAsDataURL(e);
  });
}
function mv(e) {
  return e.startsWith("image/") ? "image" : e.startsWith("video/") ? "video" : e.startsWith("audio/") ? "audio" : "document";
}
function hv(e, t) {
  if (e) {
    const n = e.trim().split(/\s+/);
    return n.length >= 2 ? (n[0][0] + n[1][0]).toUpperCase() : e.slice(0, 2).toUpperCase();
  }
  return t ? t.replace(/\D/g, "").slice(-2) : "??";
}
function pv(e, t) {
  if (t === 0) return !0;
  const n = e[t - 1], r = e[t];
  return n.direction !== r.direction ? !0 : vl(r, n);
}
function wv({ conversationId: e, phoneNumber: t, contactName: n, profilePicUrl: r, onTemplateSent: a, onBack: o, isVisible: i = !1, instance: s, provider: d, readOnly: u = !1 }) {
  const f = Ut(), [l, m] = M([]), [h, w] = M(!1), [p, g] = M(!1), [v, y] = M(""), [S, N] = M(!1), [x, C] = M(null), [b, _] = M(null), [E, L] = M(!0), [j, Y] = M(!1), [K, H] = M(!1), [Z, W] = M(null), [V, P] = M(!0), O = A(null), X = A(null), oe = A(null), ve = A(0), ne = d === "cloud", ue = () => {
    var k;
    (k = O.current) == null || k.scrollIntoView({ behavior: "smooth" });
  }, he = U(async () => {
    if (!(!e || !s))
      try {
        const k = await f.findMessages(s, e), re = k.filter((ee) => ee.messageType === "reaction"), we = k.filter((ee) => ee.messageType !== "reaction"), be = /* @__PURE__ */ new Map();
        re.forEach((ee) => {
          ee.reactedToMessageId && ee.reactionEmoji && be.set(ee.reactedToMessageId, ee.reactionEmoji);
        });
        const de = we.map((ee) => {
          const Ce = be.get(ee.id);
          return Ce ? { ...ee, reactionEmoji: Ce } : ee;
        }).sort((ee, Ce) => new Date(ee.createdAt).getTime() - new Date(Ce.createdAt).getTime());
        m((ee) => ee.length !== de.length || de.some((Oe, xt) => {
          var Kt, Ba, ja;
          return Oe.id !== ((Kt = ee[xt]) == null ? void 0 : Kt.id) || Oe.status !== ((Ba = ee[xt]) == null ? void 0 : Ba.status) || Oe.reactionEmoji !== ((ja = ee[xt]) == null ? void 0 : ja.reactionEmoji);
        }) ? de : ee), ve.current = de.length;
      } catch (k) {
        console.error("Error fetching messages:", k);
      } finally {
        w(!1), g(!1);
      }
  }, [e, s, f]);
  I(() => {
    e && s && (w(!0), he());
  }, [e, s, he]), I(() => {
    V && ue();
  }, [l, V]), I(() => {
    L(ne ? uv(l) : !0);
  }, [l, ne]), I(() => {
    const k = X.current;
    if (!k) return;
    const re = () => {
      const be = k.querySelector("[data-radix-scroll-area-viewport]");
      if (!be) return;
      const { scrollTop: We, scrollHeight: de, clientHeight: ee } = be, Ce = de - We - ee;
      P(Ce < 100);
    }, we = k.querySelector("[data-radix-scroll-area-viewport]");
    if (we)
      return we.addEventListener("scroll", re), () => we.removeEventListener("scroll", re);
  }, []);
  const Se = () => {
    g(!0), he();
  };
  fa({
    interval: 5e3,
    enabled: !!e && !!s,
    onPoll: he
  });
  const G = (k) => {
    var we;
    const re = (we = k.target.files) == null ? void 0 : we[0];
    if (re)
      if (C(re), re.type.startsWith("image/")) {
        const be = new FileReader();
        be.onloadend = () => {
          _(be.result);
        }, be.readAsDataURL(re);
      } else
        _(null);
  }, Re = () => {
    C(null), _(null), oe.current && (oe.current.value = "");
  }, fe = async (k) => {
    if (k.preventDefault(), !(!v.trim() && !x || !t || !s || S)) {
      N(!0);
      try {
        if (x) {
          const re = await fv(x), we = mv(x.type);
          await f.sendMedia(s, {
            to: t,
            mediaType: we,
            media: re,
            caption: v.trim() || void 0,
            fileName: x.name,
            mimeType: x.type
          });
        } else
          await f.sendText(s, {
            to: t,
            body: v.trim()
          });
        y(""), Re(), await he();
      } catch (re) {
        console.error("Error sending message:", re);
      } finally {
        N(!1);
      }
    }
  }, Ne = async () => {
    await he(), t && a && await a(t);
  };
  return e ? h ? /* @__PURE__ */ c("div", { className: F(
    "wa:flex-1 wa:flex wa:flex-col",
    !i && "wa-content--hidden"
  ), children: [
    /* @__PURE__ */ c("div", { className: "wa:px-4 wa:py-[10px] wa:bg-[#f0f2f5] wa:border-l wa:border-[#e9edef] wa:flex wa:items-center wa:gap-3", children: [
      o && /* @__PURE__ */ c(ce, { onClick: o, variant: "ghost", size: "icon", className: "wa-back-btn wa:text-[#54656f]", children: /* @__PURE__ */ c(Lr, { className: "wa:h-5 wa:w-5" }) }),
      /* @__PURE__ */ c(Me, { className: "wa:h-10 wa:w-10 wa:rounded-full wa:flex-shrink-0" }),
      /* @__PURE__ */ c("div", { className: "wa:flex-1", children: [
        /* @__PURE__ */ c(Me, { className: "wa:h-4 wa:w-36 wa:mb-1.5" }),
        /* @__PURE__ */ c(Me, { className: "wa:h-3 wa:w-28" })
      ] })
    ] }),
    /* @__PURE__ */ c("div", { className: "wa-chat-bg wa:flex-1 wa:px-[5%] wa:py-4", children: /* @__PURE__ */ c("div", { className: "wa:max-w-[850px] wa:mx-auto wa:space-y-3", children: [1, 2, 3, 4, 5, 6].map((k) => /* @__PURE__ */ c("div", { className: F("wa:flex wa:mb-2", k % 2 === 0 ? "wa:justify-end" : "wa:justify-start"), children: /* @__PURE__ */ c("div", { className: F(
      "wa:max-w-[70%] wa:rounded-lg wa:px-3 wa:py-2",
      k % 2 === 0 ? "wa:bg-[#d9fdd3]" : "wa:bg-white"
    ), children: [
      /* @__PURE__ */ c(Me, { className: "wa:h-4 wa:mb-2 wa:bg-black/5", style: { width: `${Math.random() * 150 + 150}px` } }),
      /* @__PURE__ */ c(Me, { className: "wa:h-3 wa:w-16 wa:bg-black/5" })
    ] }) }, k)) }) })
  ] }) : /* @__PURE__ */ c("div", { className: F(
    "wa:flex-1 wa:flex wa:flex-col wa:min-w-0",
    !i && "wa-content--hidden"
  ), children: [
    /* @__PURE__ */ c("div", { style: { padding: "12px 16px" }, className: "wa:bg-[#f0f2f5] wa:border-l wa:border-[#e9edef] wa:flex wa:items-center wa:gap-3 wa:flex-shrink-0", children: [
      o && /* @__PURE__ */ c(
        ce,
        {
          onClick: o,
          variant: "ghost",
          size: "icon",
          className: "wa-back-btn wa:text-[#54656f] hover:wa:bg-transparent wa:flex-shrink-0 wa:-ml-2",
          children: /* @__PURE__ */ c(Lr, { className: "wa:h-5 wa:w-5" })
        }
      ),
      /* @__PURE__ */ c(Ts, { className: "wa:h-10 wa:w-10 wa:flex-shrink-0 wa:cursor-pointer", children: [
        r && /* @__PURE__ */ c(As, { src: r, alt: n || t }),
        /* @__PURE__ */ c(Ds, { className: "wa:bg-[#dfe5e7] wa:text-[#54656f] wa:text-sm wa:font-medium", children: hv(n, t) })
      ] }),
      /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0 wa:cursor-pointer", children: [
        /* @__PURE__ */ c("h2", { className: "wa:text-[16px] wa:font-normal wa:text-[#111b21] wa:truncate wa:leading-[21px]", children: n || t || "Conversation" }),
        n && t && /* @__PURE__ */ c("p", { className: "wa:text-[13px] wa:text-[#667781] wa:truncate wa:leading-[17px]", children: t })
      ] }),
      /* @__PURE__ */ c(
        ce,
        {
          onClick: Se,
          disabled: p,
          variant: "ghost",
          size: "icon",
          className: "wa:text-[#54656f] hover:wa:bg-transparent wa:h-10 wa:w-10",
          children: /* @__PURE__ */ c(qi, { className: F("wa:h-[20px] wa:w-[20px]", p && "wa:animate-spin") })
        }
      )
    ] }),
    /* @__PURE__ */ c(dn, { ref: X, style: { flex: 1, height: 0, overflow: "auto" }, className: "wa-chat-bg", children: /* @__PURE__ */ c("div", { style: { padding: "12px 5%" }, children: /* @__PURE__ */ c("div", { children: [
      l.length === 0 ? /* @__PURE__ */ c("div", { className: "wa:flex wa:justify-center wa:mt-8", children: /* @__PURE__ */ c("span", { className: "wa:bg-[#fdf4c5] wa:text-[#54656f] wa:text-[12.5px] wa:px-3 wa:py-1.5 wa:rounded-[7.5px] wa:shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] wa:text-center wa:max-w-[330px]", children: "Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them." }) }) : l.map((k, re) => {
        var ee, Ce, Oe, xt, Kt;
        const we = re > 0 ? l[re - 1] : null, be = vl(k, we), We = pv(l, re), de = k.direction === "outbound";
        return /* @__PURE__ */ c("div", { children: [
          be && /* @__PURE__ */ c("div", { style: { margin: "20px 0" }, className: "wa:flex wa:justify-center", children: /* @__PURE__ */ c("span", { style: { padding: "7px 14px" }, className: "wa:bg-white wa:text-[#54656f] wa:text-[12.5px] wa:rounded-[7.5px] wa:shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] wa:select-none wa:font-normal", children: lv(k.createdAt) }) }),
          /* @__PURE__ */ c(
            "div",
            {
              style: We ? { marginBottom: 6, marginTop: 6 } : { marginBottom: 6 },
              className: F(
                "wa:flex wa:group",
                de ? "wa:justify-end" : "wa:justify-start"
              ),
              children: /* @__PURE__ */ c("div", { className: F(
                "wa:relative wa:max-w-[65%]",
                de ? "wa:pr-2" : "wa:pl-2"
              ), children: [
                k.messageType !== "deleted" && /* @__PURE__ */ c(
                  iv,
                  {
                    message: k,
                    conversationId: e,
                    instance: s,
                    provider: d,
                    onDeleted: he,
                    onForward: W,
                    readOnly: u
                  }
                ),
                /* @__PURE__ */ c(
                  "div",
                  {
                    style: { padding: "7px 12px 9px" },
                    className: F(
                      "wa:rounded-[7.5px] wa:shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]",
                      de ? "wa:bg-[#d9fdd3] wa:text-[#111b21]" : "wa:bg-white wa:text-[#111b21]",
                      // Tail styling
                      We && de && "wa-bubble-out wa:rounded-tr-none",
                      We && !de && "wa-bubble-in wa:rounded-tl-none",
                      !We && de && "wa:rounded-tr-[7.5px]",
                      !We && !de && "wa:rounded-tl-[7.5px]"
                    ),
                    children: [
                      k.messageType === "deleted" ? /* @__PURE__ */ c("p", { className: "wa:text-[14.2px] wa:leading-[19px] wa:italic wa:text-[#8696a0]", children: "This message was deleted" }) : /* @__PURE__ */ c(Q, { children: [
                        k.hasMedia && ((ee = k.mediaData) != null && ee.url) ? /* @__PURE__ */ c("div", { style: { margin: "-7px -12px 4px" }, className: "wa:overflow-hidden wa:rounded-t-[7.5px]", children: k.messageType === "sticker" ? /* @__PURE__ */ c(
                          "img",
                          {
                            src: k.mediaData.url,
                            alt: "Sticker",
                            style: { margin: "7px 12px 0" },
                            className: "wa:max-w-[150px] wa:max-h-[150px] wa:h-auto"
                          }
                        ) : (Ce = k.mediaData.contentType) != null && Ce.startsWith("image/") || k.messageType === "image" ? /* @__PURE__ */ c(
                          "img",
                          {
                            src: k.mediaData.url,
                            alt: "Image",
                            className: "wa:w-full wa:h-auto wa:max-h-[330px] wa:object-cover"
                          }
                        ) : (Oe = k.mediaData.contentType) != null && Oe.startsWith("video/") || k.messageType === "video" ? /* @__PURE__ */ c(
                          "video",
                          {
                            src: k.mediaData.url,
                            controls: !0,
                            className: "wa:w-full wa:h-auto wa:max-h-[330px]"
                          }
                        ) : (xt = k.mediaData.contentType) != null && xt.startsWith("audio/") || k.messageType === "audio" ? /* @__PURE__ */ c("div", { style: { padding: "7px 12px 0" }, children: /* @__PURE__ */ c(Os, { src: k.mediaData.url, isOutbound: de }) }) : /* @__PURE__ */ c("div", { style: { padding: "7px 12px 0" }, children: /* @__PURE__ */ c(
                          "a",
                          {
                            href: k.mediaData.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "wa:flex wa:items-center wa:gap-2 wa:text-[14.2px] wa:underline wa:cursor-pointer hover:wa:opacity-80 wa:text-[#027eb5]",
                            children: [
                              /* @__PURE__ */ c(mr, { className: "wa:h-4 wa:w-4 wa:flex-shrink-0" }),
                              k.mediaData.filename || k.filename || "Download file"
                            ]
                          }
                        ) }) }) : (Kt = k.metadata) != null && Kt.mediaId && k.messageType ? /* @__PURE__ */ c("div", { className: "wa:mb-1", children: /* @__PURE__ */ c(
                          bm,
                          {
                            mediaId: k.metadata.mediaId,
                            messageType: k.messageType,
                            caption: k.caption,
                            filename: k.filename,
                            isOutbound: de,
                            instance: s
                          }
                        ) }) : null,
                        k.caption && /* @__PURE__ */ c("p", { className: "wa:text-[14.2px] wa:leading-[19px] wa:break-words wa:whitespace-pre-wrap wa:mt-1", children: k.caption }),
                        k.content && k.content !== k.caption && /* @__PURE__ */ c("p", { className: "wa:text-[14.2px] wa:leading-[19px] wa:break-words wa:whitespace-pre-wrap", children: k.content })
                      ] }),
                      /* @__PURE__ */ c("div", { style: { marginTop: "2px", gap: "3px" }, className: "wa:flex wa:justify-end wa:items-center", children: [
                        /* @__PURE__ */ c("span", { className: "wa:text-[11px] wa:text-[#667781] wa:leading-none wa:select-none", children: cv(k.createdAt) }),
                        de && k.status && /* @__PURE__ */ c(Q, { children: k.status === "failed" ? /* @__PURE__ */ c(vd, { className: "wa:h-[15px] wa:w-[15px] wa:text-red-500" }) : /* @__PURE__ */ c("span", { className: F(
                          "wa:text-[16px] wa:leading-none",
                          k.status === "read" ? "wa:text-[#53bdeb]" : "wa:text-[#8696a0]"
                        ), children: k.status === "read" || k.status === "delivered" ? "✓✓" : k.status === "sent" ? "✓" : "" }) })
                      ] }),
                      de && k.status === "failed" && /* @__PURE__ */ c("div", { className: "wa:mt-0.5 wa:clear-both", children: /* @__PURE__ */ c("span", { className: "wa:text-[11px] wa:text-red-500 wa:flex wa:items-center wa:gap-1", children: "Not delivered" }) }),
                      k.reactionEmoji && /* @__PURE__ */ c("div", { className: "wa:absolute -wa:bottom-2.5 wa:right-1 wa:bg-white wa:rounded-full wa:px-1 wa:py-0.5 wa:text-[14px] wa:shadow-[0_1px_3px_rgba(11,20,26,0.16)] wa:leading-none wa:select-none", children: k.reactionEmoji })
                    ]
                  }
                )
              ] })
            }
          )
        ] }, k.id);
      }),
      /* @__PURE__ */ c("div", { ref: O })
    ] }) }) }),
    u ? /* @__PURE__ */ c("div", { className: "wa:bg-[#f0f2f5] wa:border-l wa:border-[#e9edef] wa:flex-shrink-0 wa:px-4 wa:py-3 wa:text-center wa:text-[13px] wa:text-[#667781]", children: "This device is in read-only mode" }) : /* @__PURE__ */ c("div", { className: "wa:bg-[#f0f2f5] wa:border-l wa:border-[#e9edef] wa:flex-shrink-0", children: E ? /* @__PURE__ */ c(Q, { children: [
      x && /* @__PURE__ */ c("div", { className: "wa:px-4 wa:py-2.5 wa:border-b wa:border-[#e9edef] wa:bg-white", children: /* @__PURE__ */ c("div", { className: "wa:flex wa:items-start wa:gap-3 wa:max-w-[900px] wa:mx-auto", children: [
        b ? /* @__PURE__ */ c("img", { src: b, alt: "Preview", className: "wa:w-16 wa:h-16 wa:object-cover wa:rounded-md" }) : /* @__PURE__ */ c("div", { className: "wa:w-16 wa:h-16 wa:bg-[#f0f2f5] wa:rounded-md wa:flex wa:items-center wa:justify-center", children: /* @__PURE__ */ c(mr, { className: "wa:h-6 wa:w-6 wa:text-[#667781]" }) }),
        /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0", children: [
          /* @__PURE__ */ c("p", { className: "wa:text-[14px] wa:font-medium wa:text-[#111b21] wa:truncate", children: x.name }),
          /* @__PURE__ */ c("p", { className: "wa:text-[12px] wa:text-[#667781]", children: [
            (x.size / 1024).toFixed(1),
            " KB"
          ] })
        ] }),
        /* @__PURE__ */ c(
          ce,
          {
            onClick: Re,
            type: "button",
            variant: "ghost",
            size: "icon",
            className: "wa:text-[#667781] hover:wa:bg-transparent wa:h-8 wa:w-8",
            children: /* @__PURE__ */ c(ua, { className: "wa:h-4 wa:w-4" })
          }
        )
      ] }) }),
      /* @__PURE__ */ c("form", { onSubmit: fe, style: { padding: "10px 16px" }, className: "wa:w-full wa:flex wa:gap-2 wa:items-end", children: [
        /* @__PURE__ */ c(
          "input",
          {
            ref: oe,
            type: "file",
            onChange: G,
            accept: "image/*,video/*,audio/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            className: "wa:hidden"
          }
        ),
        /* @__PURE__ */ c(
          ce,
          {
            type: "button",
            onClick: () => {
              var k;
              return (k = oe.current) == null ? void 0 : k.click();
            },
            disabled: S,
            variant: "ghost",
            size: "icon",
            className: "wa:text-[#54656f] hover:wa:bg-transparent hover:wa:text-[#111b21] wa:h-[42px] wa:w-[42px] wa:flex-shrink-0",
            title: "Upload file",
            children: /* @__PURE__ */ c(mr, { className: "wa:h-[22px] wa:w-[22px] wa:rotate-45" })
          }
        ),
        /* @__PURE__ */ c(
          ce,
          {
            type: "button",
            onClick: () => H(!0),
            disabled: S,
            size: "icon",
            variant: "ghost",
            className: "wa:text-[#54656f] hover:wa:bg-transparent hover:wa:text-[#111b21] wa:h-[42px] wa:w-[42px] wa:flex-shrink-0",
            title: "Send interactive message",
            children: /* @__PURE__ */ c(Md, { className: "wa:h-[22px] wa:w-[22px]" })
          }
        ),
        /* @__PURE__ */ c("div", { style: { flex: 1, minWidth: 0 }, children: /* @__PURE__ */ c(
          "input",
          {
            type: "text",
            value: v,
            onChange: (k) => y(k.target.value),
            onKeyDown: (k) => {
              k.key === "Enter" && !k.shiftKey && fe(k);
            },
            placeholder: "Type a message",
            disabled: S,
            style: { padding: "8px 12px" },
            className: "wa:w-full wa:h-[42px] wa:bg-white wa:border-none wa:outline-none wa:rounded-[8px] wa:text-[15px] wa:text-[#111b21] wa:placeholder-[#667781] focus:wa:ring-0"
          }
        ) }),
        /* @__PURE__ */ c(
          ce,
          {
            type: "submit",
            disabled: S || !v.trim() && !x,
            size: "icon",
            variant: "ghost",
            className: F(
              "wa:h-[42px] wa:w-[42px] wa:flex-shrink-0 wa:rounded-full",
              v.trim() || x ? "wa:text-[#00a884] hover:wa:bg-transparent hover:wa:text-[#008f6f]" : "wa:text-[#8696a0] hover:wa:bg-transparent"
            ),
            children: /* @__PURE__ */ c(un, { className: "wa:h-[22px] wa:w-[22px]" })
          }
        )
      ] })
    ] }) : /* @__PURE__ */ c("div", { className: "wa:p-3 wa:max-w-[900px] wa:mx-auto wa:w-full", children: /* @__PURE__ */ c("div", { className: "wa:bg-[#fff4cc] wa:border wa:border-[#e9c46a] wa:rounded-[8px] wa:p-4", children: /* @__PURE__ */ c("div", { className: "wa:flex wa:items-start wa:gap-3", children: [
      /* @__PURE__ */ c(wd, { className: "wa:h-5 wa:w-5 wa:text-[#8b7000] wa:flex-shrink-0 wa:mt-0.5" }),
      /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0", children: [
        /* @__PURE__ */ c("p", { className: "wa:text-[14px] wa:text-[#111b21] wa:mb-3", children: dv(l) }),
        /* @__PURE__ */ c(
          ce,
          {
            onClick: () => Y(!0),
            className: "wa:bg-[#00a884] hover:wa:bg-[#008f6f] wa:text-white wa:h-9 wa:rounded-[8px]",
            size: "sm",
            children: [
              /* @__PURE__ */ c(kd, { className: "wa:h-4 wa:w-4 wa:mr-2" }),
              "Send template"
            ]
          }
        )
      ] })
    ] }) }) }) }),
    ne && /* @__PURE__ */ c(
      ip,
      {
        open: j,
        onOpenChange: Y,
        phoneNumber: t || "",
        onTemplateSent: Ne
      }
    ),
    /* @__PURE__ */ c(
      cp,
      {
        open: K,
        onOpenChange: H,
        conversationId: e,
        phoneNumber: t,
        onMessageSent: he,
        instance: s
      }
    ),
    /* @__PURE__ */ c(
      sv,
      {
        open: !!Z,
        onOpenChange: (k) => {
          k || W(null);
        },
        message: Z,
        instance: s,
        onForwarded: he
      }
    )
  ] }) : /* @__PURE__ */ c("div", { className: F(
    "wa:flex-1 wa:flex wa:flex-col wa:items-center wa:justify-center wa:bg-[#f0f2f5] wa:border-b-[6px] wa:border-[#00a884]",
    !i && "wa-content--hidden"
  ), children: /* @__PURE__ */ c("div", { className: "wa:text-center wa:max-w-[560px] wa:px-6", children: [
    /* @__PURE__ */ c("div", { className: "wa:w-[320px] wa:h-[188px] wa:mx-auto wa:mb-8 wa:flex wa:items-center wa:justify-center", children: /* @__PURE__ */ c("svg", { viewBox: "0 0 303 172", width: "320", className: "wa:text-[#dfe5e7]", children: /* @__PURE__ */ c("path", { fill: "currentColor", d: "M229.565 160.229c32.647-16.166 55.1-50.26 55.1-89.52 0-55.107-45.235-99.791-100.418-99.791-38.633 0-72.103 21.423-88.856 52.891-2.309-.098-4.632-.148-6.968-.148C39.643 23.661 0 63.304 0 112.084c0 24.283 9.834 46.269 25.74 62.21a5.907 5.907 0 0 1-.083-.333c-2.319-10.974-7.19-28.22-18.148-43.478l.063-.043c10.753 6.68 43.07 22.992 80.857 18.498 25.566 19.477 57.102 29.99 90.351 29.99 15.694 0 30.794-2.711 44.846-7.661-1.006-.089-2.013-.192-3.019-.31a209.273 209.273 0 0 1-19.306-3.32c6.839 2.726 15.161-4.476 28.264-7.408z", opacity: ".4" }) }) }),
    /* @__PURE__ */ c("h2", { className: "wa:text-[32px] wa:font-light wa:text-[#41525d] wa:mb-2.5 wa:leading-tight", children: "WhatsApp Inbox" }),
    /* @__PURE__ */ c("p", { className: "wa:text-[14px] wa:text-[#667781] wa:leading-[20px]", children: "Send and receive messages. Select a conversation from the sidebar to get started." })
  ] }) });
}
function gv({ onDeviceChange: e }) {
  const { devices: t, selectedDevice: n, selectDevice: r, getProviderForDevice: a } = Fi(), [o, i] = M({}), [s, d] = M(!1), [u, f] = M(!0), l = U(async () => {
    const m = {};
    await Promise.all(
      t.map(async (h) => {
        try {
          const p = await a(h).getConnectionState(h.instanceName);
          m[h.id] = p;
        } catch {
          m[h.id] = "close";
        }
      })
    ), i(m), f(!1);
  }, [t, a]);
  return I(() => {
    l();
  }, [l]), fa({
    interval: 3e4,
    enabled: !0,
    onPoll: l
  }), I(() => {
    n && e({
      instanceName: n.instanceName,
      provider: n.providerType || "evolution"
    });
  }, [n, e]), I(() => {
    if (!u && n && o[n.id] !== "open") {
      const m = t.find((h) => o[h.id] === "open");
      m && m.id !== n.id && r(m.id);
    }
  }, [u, o, t, n, r]), u ? /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:justify-center wa:gap-3 wa:px-4 wa:py-3 wa:text-base wa:text-[#8696a0]", children: [
    /* @__PURE__ */ c(st, { className: "wa:h-5 wa:w-5 wa:animate-spin" }),
    "Loading devices..."
  ] }) : t.length === 0 ? /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:justify-center wa:gap-3 wa:px-4 wa:py-3 wa:text-base wa:text-red-400", children: [
    /* @__PURE__ */ c(Vd, { className: "wa:h-5 wa:w-5" }),
    "No devices configured"
  ] }) : /* @__PURE__ */ c(Q, { children: [
    /* @__PURE__ */ c(
      "button",
      {
        onClick: () => d(!0),
        className: "wa:flex wa:items-center wa:justify-center wa:gap-3 wa:px-4 wa:py-3 wa:rounded-lg hover:wa:bg-white/10 wa:transition-colors wa:w-full",
        children: [
          /* @__PURE__ */ c(yl, { status: n && o[n.id] || "close" }),
          /* @__PURE__ */ c("span", { className: "wa:text-base wa:font-medium wa:text-[#e9edef] wa:truncate", children: (n == null ? void 0 : n.label) || (n == null ? void 0 : n.instanceName) || "Select device" }),
          /* @__PURE__ */ c(tr, { variant: "outline", className: "wa:text-xs wa:px-2 wa:py-0.5 wa:h-5 wa:uppercase wa:text-[#8696a0] wa:border-[#8696a0]/40", children: ((n == null ? void 0 : n.providerType) || "evolution") === "evolution" ? "EVO" : "CLOUD" }),
          /* @__PURE__ */ c(Gi, { className: "wa:h-5 wa:w-5 wa:text-[#8696a0]" })
        ]
      }
    ),
    /* @__PURE__ */ c(jt, { open: s, onOpenChange: d, children: /* @__PURE__ */ c(Ht, { className: "wa:bg-[#111b21] wa:border-[#3b4a54] wa:max-w-md", style: { padding: 32 }, children: [
      /* @__PURE__ */ c(Vt, { className: "wa:mb-2", children: /* @__PURE__ */ c(Yt, { className: "wa:text-[#e9edef] wa:text-center", children: "Select Device" }) }),
      /* @__PURE__ */ c("div", { className: "wa:flex wa:flex-col wa:gap-3", children: t.map((m) => /* @__PURE__ */ c(
        vv,
        {
          device: m,
          status: o[m.id] || "close",
          isSelected: (n == null ? void 0 : n.id) === m.id,
          onSelect: () => {
            r(m.id), d(!1);
          }
        },
        m.id
      )) })
    ] }) })
  ] });
}
function vv({
  device: e,
  status: t,
  isSelected: n,
  onSelect: r
}) {
  return /* @__PURE__ */ c(
    "button",
    {
      onClick: r,
      className: F(
        "wa:w-full wa:flex wa:items-center wa:gap-3 wa:px-4 wa:py-3.5 wa:rounded-lg wa:transition-colors",
        n ? "wa:bg-[#00a884]/20 wa:border wa:border-[#00a884]/40" : "wa:bg-[#233138] hover:wa:bg-[#2a3942] wa:border wa:border-transparent"
      ),
      children: [
        /* @__PURE__ */ c(yl, { status: t }),
        /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0 wa:text-left", children: [
          /* @__PURE__ */ c("p", { className: "wa:text-base wa:font-medium wa:text-[#e9edef] wa:truncate", children: e.label || e.instanceName }),
          e.label && /* @__PURE__ */ c("p", { className: "wa:text-xs wa:text-[#8696a0] wa:truncate", children: e.instanceName })
        ] }),
        /* @__PURE__ */ c(tr, { variant: "outline", className: "wa:text-xs wa:px-2 wa:py-0.5 wa:h-5 wa:uppercase wa:flex-shrink-0 wa:text-[#8696a0] wa:border-[#8696a0]/40", children: (e.providerType || "evolution") === "evolution" ? "EVO" : "CLOUD" }),
        n && /* @__PURE__ */ c(md, { className: "wa:h-5 wa:w-5 wa:text-[#00a884] wa:flex-shrink-0" })
      ]
    }
  );
}
function yl({ status: e }) {
  return /* @__PURE__ */ c(
    "span",
    {
      className: F(
        "wa:h-3 wa:w-3 wa:rounded-full wa:flex-shrink-0",
        e === "open" && "wa:bg-green-500",
        e === "connecting" && "wa:bg-yellow-500 wa:animate-pulse",
        (e === "close" || e === "loading") && "wa:bg-red-400"
      ),
      title: e
    }
  );
}
function yv() {
  const { selectedDevice: e, readonly: t } = Fi(), [n, r] = M(), a = A(null), o = A(e == null ? void 0 : e.id);
  I(() => {
    e && o.current !== e.id && (o.current = e.id, r(void 0));
  }, [e]);
  const i = U((l) => {
  }, []), s = e == null ? void 0 : e.instanceName, d = (e == null ? void 0 : e.providerType) || "evolution", u = async (l) => {
    var h;
    const m = await ((h = a.current) == null ? void 0 : h.refresh());
    if (m) {
      const w = m.find((p) => p.phoneNumber === l);
      w && r(w);
    }
  }, f = () => {
    r(void 0);
  };
  return /* @__PURE__ */ c("div", { className: "wa:h-screen wa:flex wa:flex-col wa:bg-[#d1d7db]", children: [
    /* @__PURE__ */ c("div", { className: "wa:bg-[#00a884] wa:flex-shrink-0", style: { height: 127 }, children: /* @__PURE__ */ c("div", { style: { padding: "19px 19px 12px" }, children: /* @__PURE__ */ c("div", { className: "wa:bg-[#111b21] wa:rounded-lg", style: { padding: "6px 12px" }, children: /* @__PURE__ */ c(gv, { onDeviceChange: i }) }) }) }),
    /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-h-0 wa:w-full", style: { marginTop: -68, padding: "0 19px 19px" }, children: /* @__PURE__ */ c("div", { className: "wa:flex wa:h-full wa:bg-white wa:overflow-hidden", style: { boxShadow: "0 1px 1px rgba(0,0,0,0.06), 0 2px 5px rgba(0,0,0,0.06)", borderRadius: "0 0 3px 3px" }, children: [
      /* @__PURE__ */ c(
        Rs,
        {
          ref: a,
          onSelectConversation: r,
          selectedConversationId: n == null ? void 0 : n.id,
          isHidden: !!n,
          instance: s,
          provider: d
        }
      ),
      /* @__PURE__ */ c(
        wv,
        {
          conversationId: n == null ? void 0 : n.id,
          phoneNumber: n == null ? void 0 : n.phoneNumber,
          contactName: n == null ? void 0 : n.contactName,
          profilePicUrl: n == null ? void 0 : n.profilePicUrl,
          onTemplateSent: u,
          onBack: f,
          isVisible: !!n,
          instance: s,
          provider: d,
          readOnly: t
        }
      )
    ] }) })
  ] });
}
function _v(e, t, n) {
  if (e === "evolution")
    return new Oi(t, n);
  throw new Error(`Unknown provider: ${e}`);
}
const Et = /* @__PURE__ */ new WeakMap();
function Sv(e, t) {
  const n = Et.get(e);
  n && (n.unmount(), Et.delete(e));
  const r = Hl(e);
  return Et.set(e, r), r.render(
    ae(
      Xl,
      { config: t },
      ae(yv)
    )
  ), {
    unmount: () => {
      r.unmount(), Et.delete(e);
    }
  };
}
function Nv(e) {
  const t = Et.get(e);
  t && (t.unmount(), Et.delete(e));
}
export {
  yv as App,
  Rs as ConversationList,
  Oi as EvolutionProvider,
  gv as InstanceSelector,
  wv as MessageView,
  Xl as ProviderProvider,
  _v as createProvider,
  Sv as mount,
  Nv as unmount,
  Fi as useDeviceContext,
  Ut as useProvider
};
