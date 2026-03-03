var ln, j, ci, gt, Xa, li, ui, di, Zr, Lr, Fr, fi, Ln = {}, Fn = [], Cl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, un = Array.isArray;
function Ve(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function ea(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function oe(e, t, n) {
  var r, a, o, i = {};
  for (o in t) o == "key" ? r = t[o] : o == "ref" ? a = t[o] : i[o] = t[o];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? ln.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (o in e.defaultProps) i[o] === void 0 && (i[o] = e.defaultProps[o]);
  return en(e, i, r, a, null);
}
function en(e, t, n, r, a) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++ci, __i: -1, __u: 0 };
  return a == null && j.vnode != null && j.vnode(o), o;
}
function mi() {
  return { current: null };
}
function Z(e) {
  return e.children;
}
function Re(e, t) {
  this.props = e, this.context = t;
}
function Lt(e, t) {
  if (t == null) return e.__ ? Lt(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? Lt(e) : null;
}
function Pl(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, r = [], a = [], o = Ve({}, t);
    o.__v = t.__v + 1, j.vnode && j.vnode(o), ta(e.__P, o, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, r, n ?? Lt(t), !!(32 & t.__u), a), o.__v = t.__v, o.__.__k[o.__i] = o, gi(r, o, a), t.__e = t.__ = null, o.__e != n && pi(o);
  }
}
function pi(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), pi(e);
}
function $r(e) {
  (!e.__d && (e.__d = !0) && gt.push(e) && !$n.__r++ || Xa != j.debounceRendering) && ((Xa = j.debounceRendering) || li)($n);
}
function $n() {
  for (var e, t = 1; gt.length; ) gt.length > t && gt.sort(ui), e = gt.shift(), t = gt.length, Pl(e);
  $n.__r = 0;
}
function hi(e, t, n, r, a, o, i, s, u, d, f) {
  var l, m, p, w, h, g, v, y = r && r.__k || Fn, x = t.length;
  for (u = El(n, t, y, u, x), l = 0; l < x; l++) (p = n.__k[l]) != null && (m = p.__i != -1 && y[p.__i] || Ln, p.__i = l, g = ta(e, p, m, a, o, i, s, u, d, f), w = p.__e, p.ref && m.ref != p.ref && (m.ref && na(m.ref, null, p), f.push(p.ref, p.__c || w, p)), h == null && w != null && (h = w), (v = !!(4 & p.__u)) || m.__k === p.__k ? u = wi(p, u, e, v) : typeof p.type == "function" && g !== void 0 ? u = g : w && (u = w.nextSibling), p.__u &= -7);
  return n.__e = h, u;
}
function El(e, t, n, r, a) {
  var o, i, s, u, d, f = n.length, l = f, m = 0;
  for (e.__k = new Array(a), o = 0; o < a; o++) (i = t[o]) != null && typeof i != "boolean" && typeof i != "function" ? (typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? i = e.__k[o] = en(null, i, null, null, null) : un(i) ? i = e.__k[o] = en(Z, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? i = e.__k[o] = en(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : e.__k[o] = i, u = o + m, i.__ = e, i.__b = e.__b + 1, s = null, (d = i.__i = kl(i, n, u, l)) != -1 && (l--, (s = n[d]) && (s.__u |= 2)), s == null || s.__v == null ? (d == -1 && (a > f ? m-- : a < f && m++), typeof i.type != "function" && (i.__u |= 4)) : d != u && (d == u - 1 ? m-- : d == u + 1 ? m++ : (d > u ? m-- : m++, i.__u |= 4))) : e.__k[o] = null;
  if (l) for (o = 0; o < f; o++) (s = n[o]) != null && (2 & s.__u) == 0 && (s.__e == r && (r = Lt(s)), yi(s, s));
  return r;
}
function wi(e, t, n, r) {
  var a, o;
  if (typeof e.type == "function") {
    for (a = e.__k, o = 0; a && o < a.length; o++) a[o] && (a[o].__ = e, t = wi(a[o], t, n, r));
    return t;
  }
  e.__e != t && (r && (t && e.type && !t.parentNode && (t = Lt(e)), n.insertBefore(e.__e, t || null)), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Ze(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (un(e) ? e.some(function(n) {
    Ze(n, t);
  }) : t.push(e)), t;
}
function kl(e, t, n, r) {
  var a, o, i, s = e.key, u = e.type, d = t[n], f = d != null && (2 & d.__u) == 0;
  if (d === null && s == null || f && s == d.key && u == d.type) return n;
  if (r > (f ? 1 : 0)) {
    for (a = n - 1, o = n + 1; a >= 0 || o < t.length; ) if ((d = t[i = a >= 0 ? a-- : o++]) != null && (2 & d.__u) == 0 && s == d.key && u == d.type) return i;
  }
  return -1;
}
function Ja(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Cl.test(t) ? n : n + "px";
}
function _n(e, t, n, r, a) {
  var o, i;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || Ja(e.style, t, "");
    if (n) for (t in n) r && n[t] == r[t] || Ja(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") o = t != (t = t.replace(di, "$1")), i = t.toLowerCase(), t = i in e || t == "onFocusOut" || t == "onFocusIn" ? i.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r ? n.u = r.u : (n.u = Zr, e.addEventListener(t, o ? Fr : Lr, o)) : e.removeEventListener(t, o ? Fr : Lr, o);
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
function Qa(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = Zr++;
      else if (t.t < n.u) return;
      return n(j.event ? j.event(t) : t);
    }
  };
}
function ta(e, t, n, r, a, o, i, s, u, d) {
  var f, l, m, p, w, h, g, v, y, x, _, P, k, M, b, N = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (u = !!(32 & n.__u), o = [s = t.__e = n.__e]), (f = j.__b) && f(t);
  e: if (typeof N == "function") try {
    if (v = t.props, y = "prototype" in N && N.prototype.render, x = (f = N.contextType) && r[f.__c], _ = f ? x ? x.props.value : f.__ : r, n.__c ? g = (l = t.__c = n.__c).__ = l.__E : (y ? t.__c = l = new N(v, _) : (t.__c = l = new Re(v, _), l.constructor = N, l.render = Al), x && x.sub(l), l.state || (l.state = {}), l.__n = r, m = l.__d = !0, l.__h = [], l._sb = []), y && l.__s == null && (l.__s = l.state), y && N.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Ve({}, l.__s)), Ve(l.__s, N.getDerivedStateFromProps(v, l.__s))), p = l.props, w = l.state, l.__v = t, m) y && N.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), y && l.componentDidMount != null && l.__h.push(l.componentDidMount);
    else {
      if (y && N.getDerivedStateFromProps == null && v !== p && l.componentWillReceiveProps != null && l.componentWillReceiveProps(v, _), t.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(v, l.__s, _) === !1) {
        t.__v != n.__v && (l.props = v, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(S) {
          S && (S.__ = t);
        }), Fn.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && i.push(l);
        break e;
      }
      l.componentWillUpdate != null && l.componentWillUpdate(v, l.__s, _), y && l.componentDidUpdate != null && l.__h.push(function() {
        l.componentDidUpdate(p, w, h);
      });
    }
    if (l.context = _, l.props = v, l.__P = e, l.__e = !1, P = j.__r, k = 0, y) l.state = l.__s, l.__d = !1, P && P(t), f = l.render(l.props, l.state, l.context), Fn.push.apply(l.__h, l._sb), l._sb = [];
    else do
      l.__d = !1, P && P(t), f = l.render(l.props, l.state, l.context), l.state = l.__s;
    while (l.__d && ++k < 25);
    l.state = l.__s, l.getChildContext != null && (r = Ve(Ve({}, r), l.getChildContext())), y && !m && l.getSnapshotBeforeUpdate != null && (h = l.getSnapshotBeforeUpdate(p, w)), M = f != null && f.type === Z && f.key == null ? vi(f.props.children) : f, s = hi(e, un(M) ? M : [M], t, n, r, a, o, i, s, u, d), l.base = t.__e, t.__u &= -161, l.__h.length && i.push(l), g && (l.__E = l.__ = null);
  } catch (S) {
    if (t.__v = null, u || o != null) if (S.then) {
      for (t.__u |= u ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      o[o.indexOf(s)] = null, t.__e = s;
    } else {
      for (b = o.length; b--; ) ea(o[b]);
      Wr(t);
    }
    else t.__e = n.__e, t.__k = n.__k, S.then || Wr(t);
    j.__e(S, t, n);
  }
  else o == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = Tl(n.__e, t, n, r, a, o, i, u, d);
  return (f = j.diffed) && f(t), 128 & t.__u ? void 0 : s;
}
function Wr(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Wr));
}
function gi(e, t, n) {
  for (var r = 0; r < n.length; r++) na(n[r], n[++r], n[++r]);
  j.__c && j.__c(t, e), e.some(function(a) {
    try {
      e = a.__h, a.__h = [], e.some(function(o) {
        o.call(a);
      });
    } catch (o) {
      j.__e(o, a.__v);
    }
  });
}
function vi(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : un(e) ? e.map(vi) : Ve({}, e);
}
function Tl(e, t, n, r, a, o, i, s, u) {
  var d, f, l, m, p, w, h, g = n.props || Ln, v = t.props, y = t.type;
  if (y == "svg" ? a = "http://www.w3.org/2000/svg" : y == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), o != null) {
    for (d = 0; d < o.length; d++) if ((p = o[d]) && "setAttribute" in p == !!y && (y ? p.localName == y : p.nodeType == 3)) {
      e = p, o[d] = null;
      break;
    }
  }
  if (e == null) {
    if (y == null) return document.createTextNode(v);
    e = document.createElementNS(a, y, v.is && v), s && (j.__m && j.__m(t, o), s = !1), o = null;
  }
  if (y == null) g === v || s && e.data == v || (e.data = v);
  else {
    if (o = o && ln.call(e.childNodes), !s && o != null) for (g = {}, d = 0; d < e.attributes.length; d++) g[(p = e.attributes[d]).name] = p.value;
    for (d in g) p = g[d], d == "dangerouslySetInnerHTML" ? l = p : d == "children" || d in v || d == "value" && "defaultValue" in v || d == "checked" && "defaultChecked" in v || _n(e, d, null, p, a);
    for (d in v) p = v[d], d == "children" ? m = p : d == "dangerouslySetInnerHTML" ? f = p : d == "value" ? w = p : d == "checked" ? h = p : s && typeof p != "function" || g[d] === p || _n(e, d, p, g[d], a);
    if (f) s || l && (f.__html == l.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (l && (e.innerHTML = ""), hi(t.type == "template" ? e.content : e, un(m) ? m : [m], t, n, r, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, o, i, o ? o[0] : n.__k && Lt(n, 0), s, u), o != null) for (d = o.length; d--; ) ea(o[d]);
    s || (d = "value", y == "progress" && w == null ? e.removeAttribute("value") : w != null && (w !== e[d] || y == "progress" && !w || y == "option" && w != g[d]) && _n(e, d, w, g[d], a), d = "checked", h != null && h != e[d] && _n(e, d, h, g[d], a));
  }
  return e;
}
function na(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (a) {
    j.__e(a, n);
  }
}
function yi(e, t, n) {
  var r, a;
  if (j.unmount && j.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || na(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (o) {
      j.__e(o, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (a = 0; a < r.length; a++) r[a] && yi(r[a], t, n || typeof e.type != "function");
  n || ea(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Al(e, t, n) {
  return this.constructor(e, n);
}
function nn(e, t, n) {
  var r, a, o, i;
  t == document && (t = document.documentElement), j.__ && j.__(e, t), a = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], i = [], ta(t, e = (!r && n || t).__k = oe(Z, null, [e]), a || Ln, Ln, t.namespaceURI, !r && n ? [n] : a ? null : t.firstChild ? ln.call(t.childNodes) : null, o, !r && n ? n : a ? a.__e : t.firstChild, r, i), gi(o, e, i);
}
function bi(e, t) {
  nn(e, t, bi);
}
function Dl(e, t, n) {
  var r, a, o, i, s = Ve({}, e.props);
  for (o in e.type && e.type.defaultProps && (i = e.type.defaultProps), t) o == "key" ? r = t[o] : o == "ref" ? a = t[o] : s[o] = t[o] === void 0 && i != null ? i[o] : t[o];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? ln.call(arguments, 2) : n), en(e.type, s, r || e.key, a || e.ref, null);
}
function Ge(e) {
  function t(n) {
    var r, a;
    return this.getChildContext || (r = /* @__PURE__ */ new Set(), (a = {})[t.__c] = this, this.getChildContext = function() {
      return a;
    }, this.componentWillUnmount = function() {
      r = null;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value != o.value && r.forEach(function(i) {
        i.__e = !0, $r(i);
      });
    }, this.sub = function(o) {
      r.add(o);
      var i = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        r && r.delete(o), i && i.call(o);
      };
    }), n.children;
  }
  return t.__c = "__cC" + fi++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, r) {
    return n.children(r);
  }).contextType = t, t;
}
ln = Fn.slice, j = { __e: function(e, t, n, r) {
  for (var a, o, i; t = t.__; ) if ((a = t.__c) && !a.__) try {
    if ((o = a.constructor) && o.getDerivedStateFromError != null && (a.setState(o.getDerivedStateFromError(e)), i = a.__d), a.componentDidCatch != null && (a.componentDidCatch(e, r || {}), i = a.__d), i) return a.__E = a;
  } catch (s) {
    e = s;
  }
  throw e;
} }, ci = 0, Re.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = Ve({}, this.state), typeof e == "function" && (e = e(Ve({}, n), this.props)), e && Ve(n, e), e != null && this.__v && (t && this._sb.push(t), $r(this));
}, Re.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), $r(this));
}, Re.prototype.render = Z, gt = [], li = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ui = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, $n.__r = 0, di = /(PointerCapture)$|Capture$/i, Zr = 0, Lr = Qa(!1), Fr = Qa(!0), fi = 0;
var et, ee, hr, Za, Ft = 0, xi = [], ie = j, eo = ie.__b, to = ie.__r, no = ie.diffed, ro = ie.__c, ao = ie.unmount, oo = ie.__;
function xt(e, t) {
  ie.__h && ie.__h(ee, e, Ft || t), Ft = 0;
  var n = ee.__H || (ee.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function C(e) {
  return Ft = 1, Bt(_i, e);
}
function Bt(e, t, n) {
  var r = xt(et++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : _i(void 0, t), function(s) {
    var u = r.__N ? r.__N[0] : r.__[0], d = r.t(u, s);
    u !== d && (r.__N = [d, r.__[1]], r.__c.setState({}));
  }], r.__c = ee, !ee.__f)) {
    var a = function(s, u, d) {
      if (!r.__c.__H) return !0;
      var f = r.__c.__H.__.filter(function(m) {
        return m.__c;
      });
      if (f.every(function(m) {
        return !m.__N;
      })) return !o || o.call(this, s, u, d);
      var l = r.__c.props !== s;
      return f.some(function(m) {
        if (m.__N) {
          var p = m.__[0];
          m.__ = m.__N, m.__N = void 0, p !== m.__[0] && (l = !0);
        }
      }), o && o.call(this, s, u, d) || l;
    };
    ee.__f = !0;
    var o = ee.shouldComponentUpdate, i = ee.componentWillUpdate;
    ee.componentWillUpdate = function(s, u, d) {
      if (this.__e) {
        var f = o;
        o = void 0, a(s, u, d), o = f;
      }
      i && i.call(this, s, u, d);
    }, ee.shouldComponentUpdate = a;
  }
  return r.__N || r.__;
}
function I(e, t) {
  var n = xt(et++, 3);
  !ie.__s && oa(n.__H, t) && (n.__ = e, n.u = t, ee.__H.__h.push(n));
}
function at(e, t) {
  var n = xt(et++, 4);
  !ie.__s && oa(n.__H, t) && (n.__ = e, n.u = t, ee.__h.push(n));
}
function D(e) {
  return Ft = 5, le(function() {
    return { current: e };
  }, []);
}
function Zn(e, t, n) {
  Ft = 6, at(function() {
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
function le(e, t) {
  var n = xt(et++, 7);
  return oa(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function B(e, t) {
  return Ft = 8, le(function() {
    return e;
  }, t);
}
function Le(e) {
  var t = ee.context[e.__c], n = xt(et++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(ee)), t.props.value) : e.__;
}
function ra(e, t) {
  ie.useDebugValue && ie.useDebugValue(t ? t(e) : e);
}
function Rl(e) {
  var t = xt(et++, 10), n = C();
  return t.__ = e, ee.componentDidCatch || (ee.componentDidCatch = function(r, a) {
    t.__ && t.__(r, a), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function aa() {
  var e = xt(et++, 11);
  if (!e.__) {
    for (var t = ee.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Ol() {
  for (var e; e = xi.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(An), t.__h.some(Ur), t.__h = [];
    } catch (n) {
      t.__h = [], ie.__e(n, e.__v);
    }
  }
}
ie.__b = function(e) {
  ee = null, eo && eo(e);
}, ie.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), oo && oo(e, t);
}, ie.__r = function(e) {
  to && to(e), et = 0;
  var t = (ee = e.__c).__H;
  t && (hr === ee ? (t.__h = [], ee.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(An), t.__h.some(Ur), t.__h = [], et = 0)), hr = ee;
}, ie.diffed = function(e) {
  no && no(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (xi.push(t) !== 1 && Za === ie.requestAnimationFrame || ((Za = ie.requestAnimationFrame) || Il)(Ol)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), hr = ee = null;
}, ie.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(An), n.__h = n.__h.filter(function(r) {
        return !r.__ || Ur(r);
      });
    } catch (r) {
      t.some(function(a) {
        a.__h && (a.__h = []);
      }), t = [], ie.__e(r, n.__v);
    }
  }), ro && ro(e, t);
}, ie.unmount = function(e) {
  ao && ao(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(r) {
    try {
      An(r);
    } catch (a) {
      t = a;
    }
  }), n.__H = void 0, t && ie.__e(t, n.__v));
};
var io = typeof requestAnimationFrame == "function";
function Il(e) {
  var t, n = function() {
    clearTimeout(r), io && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 35);
  io && (t = requestAnimationFrame(n));
}
function An(e) {
  var t = ee, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), ee = t;
}
function Ur(e) {
  var t = ee;
  e.__c = e.__(), ee = t;
}
function oa(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function _i(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Si(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function zr(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function ia(e, t) {
  var n = t(), r = C({ t: { __: n, u: t } }), a = r[0].t, o = r[1];
  return at(function() {
    a.__ = n, a.u = t, wr(a) && o({ t: a });
  }, [e, n, t]), I(function() {
    return wr(a) && o({ t: a }), e(function() {
      wr(a) && o({ t: a });
    });
  }, [e]), n;
}
function wr(e) {
  try {
    return !((t = e.__) === (n = e.u()) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
  var t, n;
}
function sa(e) {
  e();
}
function ca(e) {
  return e;
}
function la() {
  return [!1, sa];
}
var ua = at;
function Wn(e, t) {
  this.props = e, this.context = t;
}
function Mi(e, t) {
  function n(a) {
    var o = this.props.ref, i = o == a.ref;
    return !i && o && (o.call ? o(null) : o.current = null), t ? !t(this.props, a) || !i : zr(this.props, a);
  }
  function r(a) {
    return this.shouldComponentUpdate = n, oe(e, a);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r.type = e, r;
}
(Wn.prototype = new Re()).isPureReactComponent = !0, Wn.prototype.shouldComponentUpdate = function(e, t) {
  return zr(this.props, e) || zr(this.state, t);
};
var so = j.__b;
j.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), so && so(e);
};
var Ll = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function T(e) {
  function t(n) {
    var r = Si({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Ll, t.render = e, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var co = function(e, t) {
  return e == null ? null : Ze(Ze(e).map(t));
}, He = { map: co, forEach: co, count: function(e) {
  return e ? Ze(e).length : 0;
}, only: function(e) {
  var t = Ze(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: Ze }, Fl = j.__e;
j.__e = function(e, t, n, r) {
  if (e.then) {
    for (var a, o = t; o = o.__; ) if ((a = o.__c) && a.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), a.__c(e, t);
  }
  Fl(e, t, n, r);
};
var lo = j.unmount;
function Ni(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Si({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Ni(r, t, n);
  })), e;
}
function Ci(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Ci(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function tn() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Pi(e) {
  if (!e.__) return null;
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Ei(e) {
  var t, n, r, a = null;
  function o(i) {
    if (t || (t = e()).then(function(s) {
      s && (a = s.default || s), r = !0;
    }, function(s) {
      n = s, r = !0;
    }), n) throw n;
    if (!r) throw t;
    return a ? oe(a, i) : null;
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function At() {
  this.i = null, this.l = null;
}
j.unmount = function(e) {
  var t = e.__c;
  t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), lo && lo(e);
}, (tn.prototype = new Re()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var a = Pi(r.__v), o = !1, i = function() {
    o || r.__z || (o = !0, n.__R = null, a ? a(u) : u());
  };
  n.__R = i;
  var s = n.__P;
  n.__P = null;
  var u = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var d = r.state.__a;
        r.__v.__k[0] = Ci(d, d.__c.__P, d.__c.__O);
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
      this.__v.__k[0] = Ni(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var a = t.__a && oe(Z, null, e.fallback);
  return a && (a.__u &= -33), [oe(Z, null, t.__a ? null : e.children), a];
};
var uo = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function $l(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Wl(e) {
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
  nn(oe($l, { context: t.context }, e.__v), t.v);
}
function ki(e, t) {
  var n = oe(Wl, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(At.prototype = new Re()).__a = function(e) {
  var t = this, n = Pi(t.__v), r = t.l.get(e);
  return r[0]++, function(a) {
    var o = function() {
      t.props.revealOrder ? (r.push(a), uo(t, e, r)) : a();
    };
    n ? n(o) : o();
  };
}, At.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = Ze(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, At.prototype.componentDidUpdate = At.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    uo(e, n, t);
  });
};
var Ti = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ul = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, zl = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Bl = /[A-Z0-9]/g, Vl = typeof document < "u", jl = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function da(e, t, n) {
  return t.__k == null && (t.textContent = ""), nn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Ai(e, t, n) {
  return bi(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
Re.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Re.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var fo = j.event;
function Hl() {
}
function Yl() {
  return this.cancelBubble;
}
function Gl() {
  return this.defaultPrevented;
}
j.event = function(e) {
  return fo && (e = fo(e)), e.persist = Hl, e.isPropagationStopped = Yl, e.isDefaultPrevented = Gl, e.nativeEvent = e;
};
var fa, ql = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, mo = j.vnode;
j.vnode = function(e) {
  typeof e.type == "string" && (function(t) {
    var n = t.props, r = t.type, a = {}, o = r.indexOf("-") === -1;
    for (var i in n) {
      var s = n[i];
      if (!(i === "value" && "defaultValue" in n && s == null || Vl && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var u = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : u === "translate" && s === "no" ? s = !1 : u[0] === "o" && u[1] === "n" ? u === "ondoubleclick" ? i = "ondblclick" : u !== "onchange" || r !== "input" && r !== "textarea" || jl(n.type) ? u === "onfocus" ? i = "onfocusin" : u === "onblur" ? i = "onfocusout" : zl.test(i) && (i = u) : u = i = "oninput" : o && Ul.test(i) ? i = i.replace(Bl, "-$&").toLowerCase() : s === null && (s = void 0), u === "oninput" && a[i = u] && (i = "oninputCapture"), a[i] = s;
      }
    }
    r == "select" && a.multiple && Array.isArray(a.value) && (a.value = Ze(n.children).forEach(function(d) {
      d.props.selected = a.value.indexOf(d.props.value) != -1;
    })), r == "select" && a.defaultValue != null && (a.value = Ze(n.children).forEach(function(d) {
      d.props.selected = a.multiple ? a.defaultValue.indexOf(d.props.value) != -1 : a.defaultValue == d.props.value;
    })), n.class && !n.className ? (a.class = n.class, Object.defineProperty(a, "className", ql)) : n.className && (a.class = a.className = n.className), t.props = a;
  })(e), e.$$typeof = Ti, mo && mo(e);
};
var po = j.__r;
j.__r = function(e) {
  po && po(e), fa = e.__c;
};
var ho = j.diffed;
j.diffed = function(e) {
  ho && ho(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), fa = null;
};
var Di = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return fa.__n[e.__c].props.value;
}, useCallback: B, useContext: Le, useDebugValue: ra, useDeferredValue: ca, useEffect: I, useId: aa, useImperativeHandle: Zn, useInsertionEffect: ua, useLayoutEffect: at, useMemo: le, useReducer: Bt, useRef: D, useState: C, useSyncExternalStore: ia, useTransition: la } } }, Kl = "18.3.1";
function Ri(e) {
  return oe.bind(null, e);
}
function tt(e) {
  return !!e && e.$$typeof === Ti;
}
function Oi(e) {
  return tt(e) && e.type === Z;
}
function Ii(e) {
  return !!e && typeof e.displayName == "string" && e.displayName.startsWith("Memo(");
}
function Vt(e) {
  return tt(e) ? Dl.apply(null, arguments) : e;
}
function ma(e) {
  return !!e.__k && (nn(null, e), !0);
}
function Li(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Fi = function(e, t) {
  return e(t);
}, er = function(e, t) {
  return e(t);
}, $i = Z, Wi = tt, Qe = { useState: C, useId: aa, useReducer: Bt, useEffect: I, useLayoutEffect: at, useInsertionEffect: ua, useTransition: la, useDeferredValue: ca, useSyncExternalStore: ia, startTransition: sa, useRef: D, useImperativeHandle: Zn, useMemo: le, useCallback: B, useContext: Le, useDebugValue: ra, version: "18.3.1", Children: He, render: da, hydrate: Ai, unmountComponentAtNode: ma, createPortal: ki, createElement: oe, createContext: Ge, createFactory: Ri, cloneElement: Vt, createRef: mi, Fragment: Z, isValidElement: tt, isElement: Wi, isFragment: Oi, isMemo: Ii, findDOMNode: Li, Component: Re, PureComponent: Wn, memo: Mi, forwardRef: T, flushSync: er, unstable_batchedUpdates: Fi, StrictMode: $i, Suspense: tn, SuspenseList: At, lazy: Ei, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Di };
const pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: He,
  Component: Re,
  Fragment: Z,
  PureComponent: Wn,
  StrictMode: $i,
  Suspense: tn,
  SuspenseList: At,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Di,
  cloneElement: Vt,
  createContext: Ge,
  createElement: oe,
  createFactory: Ri,
  createPortal: ki,
  createRef: mi,
  default: Qe,
  findDOMNode: Li,
  flushSync: er,
  forwardRef: T,
  hydrate: Ai,
  isElement: Wi,
  isFragment: Oi,
  isMemo: Ii,
  isValidElement: tt,
  lazy: Ei,
  memo: Mi,
  render: da,
  startTransition: sa,
  unmountComponentAtNode: ma,
  unstable_batchedUpdates: Fi,
  useCallback: B,
  useContext: Le,
  useDebugValue: ra,
  useDeferredValue: ca,
  useEffect: I,
  useErrorBoundary: Rl,
  useId: aa,
  useImperativeHandle: Zn,
  useInsertionEffect: ua,
  useLayoutEffect: at,
  useMemo: le,
  useReducer: Bt,
  useRef: D,
  useState: C,
  useSyncExternalStore: ia,
  useTransition: la,
  version: Kl
}, Symbol.toStringTag, { value: "Module" }));
function Xl(e) {
  return {
    // eslint-disable-next-line
    render: function(t) {
      da(t, e);
    },
    // eslint-disable-next-line
    unmount: function() {
      ma(e);
    }
  };
}
var Jl = 0;
function c(e, t, n, r, a, o) {
  t || (t = {});
  var i, s, u = t;
  if ("ref" in u) for (s in u = {}, t) s == "ref" ? i = t[s] : u[s] = t[s];
  var d = { type: e, props: u, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Jl, __i: -1, __u: 0, __source: a, __self: o };
  if (typeof e == "function" && (i = e.defaultProps)) for (s in i) u[s] === void 0 && (u[s] = i[s]);
  return j.vnode && j.vnode(d), d;
}
function wo(e) {
  return e.replace(/@s\.whatsapp\.net$/, "").replace(/@g\.us$/, "").replace(/@lid$/, "");
}
function go(e) {
  if (!e) return (/* @__PURE__ */ new Date()).toISOString();
  const t = e > 1e12 ? e : e * 1e3;
  return new Date(t).toISOString();
}
function Ql(e) {
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
function Zl(e) {
  if (!e) return;
  const t = e.key.fromMe ? "outbound" : "inbound", n = e.message;
  return n ? {
    content: (typeof n.conversation == "string" ? n.conversation : void 0) || (n.extendedTextMessage && typeof n.extendedTextMessage.text == "string" ? n.extendedTextMessage.text : void 0) || (n.imageMessage && typeof n.imageMessage.caption == "string" ? n.imageMessage.caption : void 0) || "" || `[${e.messageType || "message"}]`,
    direction: t,
    type: e.messageType
  } : { content: "", direction: t, type: e.messageType };
}
function gr(e) {
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
class Ui {
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
    var s, u, d, f;
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
      const m = l.remoteJid || l.id, p = (u = (s = l.lastMessage) == null ? void 0 : s.key) == null ? void 0 : u.remoteJidAlt;
      m != null && m.endsWith("@lid") && (p != null && p.endsWith("@s.whatsapp.net")) && (o.set(m, p), this.phoneLidMap.set(p, m));
    }
    const i = /* @__PURE__ */ new Map();
    for (const l of n) {
      const m = l.remoteJid || l.id;
      if (!m) continue;
      let p;
      if (m.endsWith("@g.us"))
        p = m;
      else if (m.endsWith("@lid")) {
        const x = o.get(m);
        if (!x) continue;
        p = x;
      } else if (m.endsWith("@s.whatsapp.net"))
        p = m;
      else
        continue;
      const w = i.get(p), h = Zl(l.lastMessage), g = l.updatedAt || ((d = l.lastMessage) != null && d.messageTimestamp ? go(l.lastMessage.messageTimestamp) : void 0), v = p.endsWith("@g.us");
      let y;
      if (v)
        y = l.name || l.pushName || void 0;
      else {
        const x = (f = l.lastMessage) != null && f.pushName && !l.lastMessage.key.fromMe ? l.lastMessage.pushName : void 0;
        y = a.get(m) || a.get(p) || l.pushName || x || void 0;
      }
      w ? (m.endsWith("@lid") && (w.lidJid = m), w.contactName = w.contactName || y, w.profilePicUrl = w.profilePicUrl || l.profilePicUrl || void 0, w.unreadCount = (w.unreadCount || 0) + (l.unreadCount || 0), g && (!w.lastActiveAt || new Date(g) > new Date(w.lastActiveAt)) && (w.lastActiveAt = g, w.lastMessage = h || w.lastMessage)) : i.set(p, {
        id: p,
        phoneNumber: wo(p),
        contactName: y,
        profilePicUrl: l.profilePicUrl || void 0,
        lastActiveAt: g,
        lastMessage: h,
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
    const a = n.endsWith("@g.us"), o = n.includes("@") ? n : `${n}@s.whatsapp.net`, i = (p) => this.request(
      `/chat/findMessages/${encodeURIComponent(t)}`,
      {
        method: "POST",
        body: JSON.stringify({
          where: { key: { remoteJid: p } },
          limit: r
        })
      }
    ).then((w) => {
      var h;
      return ((h = w == null ? void 0 : w.messages) == null ? void 0 : h.records) || [];
    });
    let s, u;
    if (a)
      s = await i(o), u = [];
    else {
      await this.ensureLidMap(t);
      const p = this.phoneLidMap.get(o);
      [s, u] = await Promise.all([
        i(o),
        p ? i(p) : Promise.resolve([])
      ]);
    }
    const d = /* @__PURE__ */ new Set(), f = [];
    for (const p of [...s, ...u])
      d.has(p.key.id) || (d.add(p.key.id), f.push(p));
    const l = wo(o), m = /* @__PURE__ */ new Set();
    for (const p of f) {
      const w = gr(p);
      w.messageType === "revoked" && w.revokedMessageId && m.add(w.revokedMessageId);
    }
    return f.filter((p) => gr(p).messageType !== "revoked").map((p) => {
      const w = gr(p), h = Ql(p.MessageUpdate), g = m.has(p.key.id);
      return {
        id: p.key.id,
        direction: p.key.fromMe ? "outbound" : "inbound",
        content: g ? "" : w.content,
        createdAt: go(p.messageTimestamp),
        status: h,
        phoneNumber: l,
        hasMedia: g ? !1 : w.hasMedia,
        messageType: g ? "deleted" : w.messageType,
        reactionEmoji: w.reactionEmoji,
        reactedToMessageId: w.reactedToMessageId,
        caption: g ? null : w.caption,
        filename: g ? null : w.filename,
        mimeType: g ? null : w.mimeType,
        metadata: !g && w.hasMedia ? { mediaId: p.key.id } : {}
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
const Un = {
  // Conversation list
  "conversationList.chats": "Chats",
  "conversationList.autoUpdating": "Auto-updating",
  "conversationList.searchPlaceholder": "Search or start new chat",
  "conversationList.noConversationsFound": "No conversations found",
  "conversationList.noConversationsYet": "No conversations yet",
  "conversationList.selectInstance": "Select an instance to view chats",
  "conversationList.yesterday": "Yesterday",
  // Message view
  "messageView.title": "WhatsApp Inbox",
  "messageView.emptyStateDescription": "Send and receive messages. Select a conversation from the sidebar to get started.",
  "messageView.encryptionNotice": "Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.",
  "messageView.messageDeleted": "This message was deleted",
  "messageView.downloadFile": "Download file",
  "messageView.notDelivered": "Not delivered",
  "messageView.readOnlyMode": "This device is in read-only mode",
  "messageView.uploadFile": "Upload file",
  "messageView.sendInteractiveMessage": "Send interactive message",
  "messageView.typeMessage": "Type a message",
  "messageView.sendTemplate": "Send template",
  "messageView.noInboundMessages": "User hasn't messaged yet. Send a template message or wait for them to reply.",
  "messageView.outside24HourWindow": "Last message was over 24 hours ago. Send a template message or wait for the user to message you.",
  "messageView.today": "Today",
  "messageView.yesterday": "Yesterday",
  // Instance selector
  "instanceSelector.loadingDevices": "Loading devices...",
  "instanceSelector.noDevicesConfigured": "No devices configured",
  "instanceSelector.selectDevice": "Select device",
  "instanceSelector.allDevices": "All Devices",
  "instanceSelector.connected": "connected",
  "instanceSelector.close": "Close",
  "instanceSelector.mergeDevices": "Merge devices",
  // Message context menu
  "contextMenu.messageOptions": "Message options",
  "contextMenu.copy": "Copy",
  "contextMenu.forward": "Forward",
  "contextMenu.delete": "Delete",
  "contextMenu.deleteMessage": "Delete message",
  "contextMenu.deleteConfirmation": "This will delete the message for everyone in the chat. This action cannot be undone.",
  "contextMenu.cancel": "Cancel",
  "contextMenu.deleteForEveryone": "Delete for everyone",
  // Forward message dialog
  "forwardDialog.title": "Forward message",
  "forwardDialog.description": "Choose a contact to forward this message to",
  "forwardDialog.forwarding": "Forwarding:",
  "forwardDialog.searchContacts": "Search contacts...",
  "forwardDialog.noContactsFound": "No contacts found",
  "forwardDialog.cancel": "Cancel",
  "forwardDialog.forward": "Forward",
  // Template selector dialog
  "templateSelector.title": "Send template message",
  "templateSelector.description": "Select a template to send to {phoneNumber}",
  "templateSelector.noTemplates": "No approved templates found",
  "templateSelector.cancel": "Cancel",
  "templateSelector.send": "Send",
  "templateSelector.notSupported": "Templates are not yet supported for this provider",
  // Template parameters dialog
  "templateParameters.title": "Template parameters",
  "templateParameters.description": "Fill in the parameters for {templateName}",
  "templateParameters.fillAllParameters": "Please fill in all parameters",
  "templateParameters.example": "Example: {example}",
  "templateParameters.back": "Back",
  "templateParameters.sendTemplate": "Send template",
  "templateParameters.notSupported": "Templates are not yet supported for this provider",
  // Interactive message dialog
  "interactiveDialog.title": "Send interactive message",
  "interactiveDialog.description": "Create a message with interactive buttons",
  "interactiveDialog.headerLabel": "Header (optional)",
  "interactiveDialog.headerPlaceholder": "Add a header to your message",
  "interactiveDialog.bodyLabel": "Body",
  "interactiveDialog.bodyPlaceholder": "Enter your message text",
  "interactiveDialog.buttonsLabel": "Buttons",
  "interactiveDialog.addButton": "Add button",
  "interactiveDialog.buttonPlaceholder": "Button {index} title",
  "interactiveDialog.moreButtons": "You can add up to {count} more button(s)",
  "interactiveDialog.cancel": "Cancel",
  "interactiveDialog.send": "Send",
  "interactiveDialog.validationError": "Please fill in the body and all button titles",
  "interactiveDialog.noConversation": "No conversation selected",
  "interactiveDialog.noInstance": "No instance selected",
  // Media message
  "mediaMessage.unavailable": "Media unavailable",
  "mediaMessage.downloadDocument": "Download document"
}, zi = Ge(Un);
function eu({
  translations: e,
  children: t
}) {
  const n = le(
    () => e ? { ...Un, ...e } : Un,
    [e]
  );
  return /* @__PURE__ */ c(zi.Provider, { value: n, children: t });
}
function Fe() {
  const e = Le(zi);
  return le(() => (n, r) => {
    let a = e[n] || Un[n] || n;
    if (r)
      for (const [o, i] of Object.entries(r))
        a = a.replace(`{${o}}`, String(i));
    return a;
  }, [e]);
}
function tu(e, t, n) {
  if (e === "evolution")
    return new Ui(t, n);
  throw new Error(`Unknown provider type: ${e}`);
}
function nu(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) {
    const r = n.providerType || "evolution", a = `${n.apiUrl}|${n.apiKey}|${r}`;
    t.has(a) || t.set(a, tu(r, n.apiUrl, n.apiKey));
  }
  return t;
}
function vo(e, t) {
  const n = e.providerType || "evolution", r = `${e.apiUrl}|${e.apiKey}|${n}`;
  return t.get(r);
}
const Bi = Ge(null), Vi = Ge(null);
function ru({ config: e, children: t }) {
  const { devices: n } = e, r = le(() => nu(n), [n]), [a, o] = C(
    e.defaultDeviceId || (n.length > 0 ? n[0].id : null)
  ), [i, s] = C("single"), u = le(() => n.find((w) => w.id === a) || n[0] || null, [n, a]), d = B((w) => {
    o(w);
  }, []), f = B((w) => vo(w, r), [r]), l = le(() => u ? vo(u, r) : null, [u, r]), m = (u == null ? void 0 : u.readonly) ?? !1, p = le(() => ({
    devices: n,
    selectedDevice: u,
    selectDevice: d,
    getProviderForDevice: f,
    readonly: m,
    viewMode: i,
    setViewMode: s
  }), [n, u, d, f, m, i]);
  return /* @__PURE__ */ c(eu, { translations: e.translations, children: /* @__PURE__ */ c(Bi.Provider, { value: p, children: /* @__PURE__ */ c(Vi.Provider, { value: l, children: t }) }) });
}
function jt() {
  const e = Le(Vi);
  if (!e)
    throw new Error("useProvider must be used within a ProviderProvider");
  return e;
}
function ha() {
  const e = Le(Bi);
  if (!e)
    throw new Error("useDeviceContext must be used within a ProviderProvider");
  return e;
}
const ji = 6048e5, au = 864e5, ou = 36e5, yo = Symbol.for("constructDateFrom");
function Pe(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && yo in e ? e[yo](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ke(e, t) {
  return Pe(t || e, e);
}
function iu(e, t, n) {
  const r = ke(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Pe(e, NaN) : (r.setDate(r.getDate() + t), r);
}
let su = {};
function tr() {
  return su;
}
function rn(e, t) {
  var s, u, d, f;
  const n = tr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((u = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, a = ke(e, t == null ? void 0 : t.in), o = a.getDay(), i = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function zn(e, t) {
  return rn(e, { ...t, weekStartsOn: 1 });
}
function Hi(e, t) {
  const n = ke(e, t == null ? void 0 : t.in), r = n.getFullYear(), a = Pe(n, 0);
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const o = zn(a), i = Pe(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const s = zn(i);
  return n.getTime() >= o.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function bo(e) {
  const t = ke(e), n = new Date(
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
function wa(e, ...t) {
  const n = Pe.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Bn(e, t) {
  const n = ke(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function cu(e, t, n) {
  const [r, a] = wa(
    n == null ? void 0 : n.in,
    e,
    t
  ), o = Bn(r), i = Bn(a), s = +o - bo(o), u = +i - bo(i);
  return Math.round((s - u) / au);
}
function lu(e, t) {
  const n = Hi(e, t), r = Pe(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), zn(r);
}
function Yi(e) {
  return Pe(e, Date.now());
}
function Gi(e, t, n) {
  const [r, a] = wa(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Bn(r) == +Bn(a);
}
function uu(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function vt(e) {
  return !(!uu(e) && typeof e != "number" || isNaN(+ke(e)));
}
function du(e) {
  return (t) => {
    const n = Math.trunc, r = n(t);
    return r === 0 ? 0 : r;
  };
}
function fu(e, t, n) {
  const [r, a] = wa(
    n == null ? void 0 : n.in,
    e,
    t
  ), o = (+r - +a) / ou;
  return du()(o);
}
function mu(e, t) {
  const n = ke(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const pu = {
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
}, hu = (e, t, n) => {
  let r;
  const a = pu[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function vr(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const wu = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, gu = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, vu = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, yu = {
  date: vr({
    formats: wu,
    defaultWidth: "full"
  }),
  time: vr({
    formats: gu,
    defaultWidth: "full"
  }),
  dateTime: vr({
    formats: vu,
    defaultWidth: "full"
  })
}, bu = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, xu = (e, t, n, r) => bu[e];
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
const _u = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Su = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Mu = {
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
}, Nu = {
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
}, Cu = {
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
}, Pu = {
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
}, Eu = (e, t) => {
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
}, ku = {
  ordinalNumber: Eu,
  era: Xt({
    values: _u,
    defaultWidth: "wide"
  }),
  quarter: Xt({
    values: Su,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Xt({
    values: Mu,
    defaultWidth: "wide"
  }),
  day: Xt({
    values: Nu,
    defaultWidth: "wide"
  }),
  dayPeriod: Xt({
    values: Cu,
    defaultWidth: "wide",
    formattingValues: Pu,
    defaultFormattingWidth: "wide"
  })
};
function Jt(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const i = o[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(s) ? Au(s, (l) => l.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      Tu(s, (l) => l.test(i))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(u) : u, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const f = t.slice(i.length);
    return { value: d, rest: f };
  };
}
function Tu(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Au(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Du(e) {
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
const Ru = /^(\d+)(th|st|nd|rd)?/i, Ou = /\d+/i, Iu = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Lu = {
  any: [/^b/i, /^(a|c)/i]
}, Fu = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, $u = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Wu = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Uu = {
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
}, zu = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Bu = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Vu = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ju = {
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
}, Hu = {
  ordinalNumber: Du({
    matchPattern: Ru,
    parsePattern: Ou,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Jt({
    matchPatterns: Iu,
    defaultMatchWidth: "wide",
    parsePatterns: Lu,
    defaultParseWidth: "any"
  }),
  quarter: Jt({
    matchPatterns: Fu,
    defaultMatchWidth: "wide",
    parsePatterns: $u,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Jt({
    matchPatterns: Wu,
    defaultMatchWidth: "wide",
    parsePatterns: Uu,
    defaultParseWidth: "any"
  }),
  day: Jt({
    matchPatterns: zu,
    defaultMatchWidth: "wide",
    parsePatterns: Bu,
    defaultParseWidth: "any"
  }),
  dayPeriod: Jt({
    matchPatterns: Vu,
    defaultMatchWidth: "any",
    parsePatterns: ju,
    defaultParseWidth: "any"
  })
}, Yu = {
  code: "en-US",
  formatDistance: hu,
  formatLong: yu,
  formatRelative: xu,
  localize: ku,
  match: Hu,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Gu(e, t) {
  const n = ke(e, t == null ? void 0 : t.in);
  return cu(n, mu(n)) + 1;
}
function qu(e, t) {
  const n = ke(e, t == null ? void 0 : t.in), r = +zn(n) - +lu(n);
  return Math.round(r / ji) + 1;
}
function qi(e, t) {
  var f, l, m, p;
  const n = ke(e, t == null ? void 0 : t.in), r = n.getFullYear(), a = tr(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : l.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((p = (m = a.locale) == null ? void 0 : m.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, i = Pe((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = rn(i, t), u = Pe((t == null ? void 0 : t.in) || e, 0);
  u.setFullYear(r, 0, o), u.setHours(0, 0, 0, 0);
  const d = rn(u, t);
  return +n >= +s ? r + 1 : +n >= +d ? r : r - 1;
}
function Ku(e, t) {
  var s, u, d, f;
  const n = tr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : u.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, a = qi(e, t), o = Pe((t == null ? void 0 : t.in) || e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), rn(o, t);
}
function Xu(e, t) {
  const n = ke(e, t == null ? void 0 : t.in), r = +rn(n, t) - +Ku(n, t);
  return Math.round(r / ji) + 1;
}
function J(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const it = {
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
}, Ct = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, xo = {
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
    return it.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = qi(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const i = o % 100;
      return J(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : J(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Hi(e);
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
        return it.M(e, t);
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
    const a = Xu(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : J(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = qu(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : J(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : it.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Gu(e);
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
    switch (r === 12 ? a = Ct.noon : r === 0 ? a = Ct.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? a = Ct.evening : r >= 12 ? a = Ct.afternoon : r >= 4 ? a = Ct.morning : a = Ct.night, t) {
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
    return it.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : it.H(e, t);
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
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : it.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : it.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return it.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return So(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return wt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return wt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return So(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return wt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return wt(r, ":");
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
        return "GMT" + _o(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + wt(r, ":");
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
        return "GMT" + _o(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + wt(r, ":");
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
function _o(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + J(o, 2);
}
function So(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + J(Math.abs(e) / 60, 2) : wt(e, t);
}
function wt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = J(Math.trunc(r / 60), 2), o = J(r % 60, 2);
  return n + a + t + o;
}
const Mo = (e, t) => {
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
}, Ki = (e, t) => {
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
}, Ju = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return Mo(e, t);
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
  return o.replace("{{date}}", Mo(r, t)).replace("{{time}}", Ki(a, t));
}, Qu = {
  p: Ki,
  P: Ju
}, Zu = /^D+$/, ed = /^Y+$/, td = ["D", "DD", "YY", "YYYY"];
function nd(e) {
  return Zu.test(e);
}
function rd(e) {
  return ed.test(e);
}
function ad(e, t, n) {
  const r = od(e, t, n);
  if (console.warn(r), td.includes(e)) throw new RangeError(r);
}
function od(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const id = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, sd = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, cd = /^'([^]*?)'?$/, ld = /''/g, ud = /[a-zA-Z]/;
function $t(e, t, n) {
  var f, l, m, p;
  const r = tr(), a = r.locale ?? Yu, o = r.firstWeekContainsDate ?? ((l = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, i = r.weekStartsOn ?? ((p = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : p.weekStartsOn) ?? 0, s = ke(e, n == null ? void 0 : n.in);
  if (!vt(s))
    throw new RangeError("Invalid time value");
  let u = t.match(sd).map((w) => {
    const h = w[0];
    if (h === "p" || h === "P") {
      const g = Qu[h];
      return g(w, a.formatLong);
    }
    return w;
  }).join("").match(id).map((w) => {
    if (w === "''")
      return { isToken: !1, value: "'" };
    const h = w[0];
    if (h === "'")
      return { isToken: !1, value: dd(w) };
    if (xo[h])
      return { isToken: !0, value: w };
    if (h.match(ud))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + h + "`"
      );
    return { isToken: !1, value: w };
  });
  a.localize.preprocessor && (u = a.localize.preprocessor(s, u));
  const d = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: a
  };
  return u.map((w) => {
    if (!w.isToken) return w.value;
    const h = w.value;
    (rd(h) || nd(h)) && ad(h, t, String(e));
    const g = xo[h[0]];
    return g(s, h, a.localize, d);
  }).join("");
}
function dd(e) {
  const t = e.match(cd);
  return t ? t[1].replace(ld, "'") : e;
}
function Xi(e, t) {
  return Gi(
    Pe(e, e),
    Yi(e)
  );
}
function fd(e, t, n) {
  return iu(e, -1, n);
}
function Ji(e, t) {
  return Gi(
    Pe(e, e),
    fd(Yi(e))
  );
}
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const md = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), pd = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), No = (e) => {
  const t = pd(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Qi = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), hd = (e) => {
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
var wd = {
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
const gd = T(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: a = "",
    children: o,
    iconNode: i,
    ...s
  }, u) => oe(
    "svg",
    {
      ref: u,
      ...wd,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Qi("lucide", a),
      ...!o && !hd(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...i.map(([d, f]) => oe(d, f)),
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
const ue = (e, t) => {
  const n = T(
    ({ className: r, ...a }, o) => oe(gd, {
      ref: o,
      iconNode: t,
      className: Qi(
        `lucide-${md(No(e))}`,
        `lucide-${e}`,
        r
      ),
      ...a
    })
  );
  return n.displayName = No(e), n;
};
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vd = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Br = ue("arrow-left", vd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yd = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], bd = ue("check", yd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xd = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Zi = ue("chevron-down", xd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _d = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Sd = ue("circle-alert", _d);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Md = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Nd = ue("circle-x", Md);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cd = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Pd = ue("copy", Cd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ed = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], kd = ue("file-text", Ed);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Td = [
  ["path", { d: "m15 17 5-5-5-5", key: "nf172w" }],
  ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }]
], Ad = ue("forward", Td);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dd = [
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "M3 10a2 2 0 0 0 2 2h3", key: "1npucw" }],
  ["path", { d: "M3 5v12a2 2 0 0 0 2 2h3", key: "x1gjn2" }]
], Rd = ue("list-tree", Dd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Od = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], lt = ue("loader-circle", Od);
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
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], Ld = ue("message-square", Id);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fd = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], $d = ue("mic", Fd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wd = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], yr = ue("paperclip", Wd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ud = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], zd = ue("pause", Ud);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bd = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], Vd = ue("play", Bd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jd = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Hd = ue("plus", jd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yd = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], es = ue("refresh-cw", Yd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gd = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], ts = ue("search", Gd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qd = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], dn = ue("send", qd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kd = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Xd = ue("trash-2", Kd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jd = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], Qd = ue("wifi-off", Jd);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zd = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], nr = ue("x", Zd);
function ns(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = ns(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function rs() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = ns(e)) && (r && (r += " "), r += t);
  return r;
}
const ga = "-", ef = (e) => {
  const t = nf(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(ga);
      return s[0] === "" && s.length !== 1 && s.shift(), as(s, t) || tf(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const u = n[i] || [];
      return s && r[i] ? [...u, ...r[i]] : u;
    }
  };
}, as = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), a = r ? as(e.slice(1), r) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const o = e.join(ga);
  return (i = t.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : i.classGroupId;
}, Co = /^\[(.+)\]$/, tf = (e) => {
  if (Co.test(e)) {
    const t = Co.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, nf = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const a in n)
    Vr(n[a], r, a, t);
  return r;
}, Vr = (e, t, n, r) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const o = a === "" ? t : Po(t, a);
      o.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (rf(a)) {
        Vr(a(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([o, i]) => {
      Vr(i, Po(t, o), n, r);
    });
  });
}, Po = (e, t) => {
  let n = e;
  return t.split(ga).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, rf = (e) => e.isThemeGetter, af = (e) => {
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
}, jr = "!", Hr = ":", of = Hr.length, sf = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (a) => {
    const o = [];
    let i = 0, s = 0, u = 0, d;
    for (let w = 0; w < a.length; w++) {
      let h = a[w];
      if (i === 0 && s === 0) {
        if (h === Hr) {
          o.push(a.slice(u, w)), u = w + of;
          continue;
        }
        if (h === "/") {
          d = w;
          continue;
        }
      }
      h === "[" ? i++ : h === "]" ? i-- : h === "(" ? s++ : h === ")" && s--;
    }
    const f = o.length === 0 ? a : a.substring(u), l = cf(f), m = l !== f, p = d && d > u ? d - u : void 0;
    return {
      modifiers: o,
      hasImportantModifier: m,
      baseClassName: l,
      maybePostfixModifierPosition: p
    };
  };
  if (t) {
    const a = t + Hr, o = r;
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
}, cf = (e) => e.endsWith(jr) ? e.substring(0, e.length - 1) : e.startsWith(jr) ? e.substring(1) : e, lf = (e) => {
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
}, uf = (e) => ({
  cache: af(e.cacheSize),
  parseClassName: sf(e),
  sortModifiers: lf(e),
  ...ef(e)
}), df = /\s+/, ff = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: a,
    sortModifiers: o
  } = t, i = [], s = e.trim().split(df);
  let u = "";
  for (let d = s.length - 1; d >= 0; d -= 1) {
    const f = s[d], {
      isExternal: l,
      modifiers: m,
      hasImportantModifier: p,
      baseClassName: w,
      maybePostfixModifierPosition: h
    } = n(f);
    if (l) {
      u = f + (u.length > 0 ? " " + u : u);
      continue;
    }
    let g = !!h, v = r(g ? w.substring(0, h) : w);
    if (!v) {
      if (!g) {
        u = f + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (v = r(w), !v) {
        u = f + (u.length > 0 ? " " + u : u);
        continue;
      }
      g = !1;
    }
    const y = o(m).join(":"), x = p ? y + jr : y, _ = x + v;
    if (i.includes(_))
      continue;
    i.push(_);
    const P = a(v, g);
    for (let k = 0; k < P.length; ++k) {
      const M = P[k];
      i.push(x + M);
    }
    u = f + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function mf() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = os(t)) && (r && (r += " "), r += n);
  return r;
}
const os = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = os(e[r])) && (n && (n += " "), n += t);
  return n;
};
function pf(e, ...t) {
  let n, r, a, o = i;
  function i(u) {
    const d = t.reduce((f, l) => l(f), e());
    return n = uf(d), r = n.cache.get, a = n.cache.set, o = s, s(u);
  }
  function s(u) {
    const d = r(u);
    if (d)
      return d;
    const f = ff(u, n);
    return a(u, f), f;
  }
  return function() {
    return o(mf.apply(null, arguments));
  };
}
const pe = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, is = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ss = /^\((?:(\w[\w-]*):)?(.+)\)$/i, hf = /^\d+\/\d+$/, wf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, yf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Pt = (e) => hf.test(e), H = (e) => !!e && !Number.isNaN(Number(e)), st = (e) => !!e && Number.isInteger(Number(e)), br = (e) => e.endsWith("%") && H(e.slice(0, -1)), Je = (e) => wf.test(e), xf = () => !0, _f = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  gf.test(e) && !vf.test(e)
), cs = () => !1, Sf = (e) => yf.test(e), Mf = (e) => bf.test(e), Nf = (e) => !R(e) && !O(e), Cf = (e) => Ht(e, ds, cs), R = (e) => is.test(e), pt = (e) => Ht(e, fs, _f), xr = (e) => Ht(e, Af, H), Eo = (e) => Ht(e, ls, cs), Pf = (e) => Ht(e, us, Mf), Sn = (e) => Ht(e, ms, Sf), O = (e) => ss.test(e), Qt = (e) => Yt(e, fs), Ef = (e) => Yt(e, Df), ko = (e) => Yt(e, ls), kf = (e) => Yt(e, ds), Tf = (e) => Yt(e, us), Mn = (e) => Yt(e, ms, !0), Ht = (e, t, n) => {
  const r = is.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Yt = (e, t, n = !1) => {
  const r = ss.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, ls = (e) => e === "position" || e === "percentage", us = (e) => e === "image" || e === "url", ds = (e) => e === "length" || e === "size" || e === "bg-size", fs = (e) => e === "length", Af = (e) => e === "number", Df = (e) => e === "family-name", ms = (e) => e === "shadow", Rf = () => {
  const e = pe("color"), t = pe("font"), n = pe("text"), r = pe("font-weight"), a = pe("tracking"), o = pe("leading"), i = pe("breakpoint"), s = pe("container"), u = pe("spacing"), d = pe("radius"), f = pe("shadow"), l = pe("inset-shadow"), m = pe("text-shadow"), p = pe("drop-shadow"), w = pe("blur"), h = pe("perspective"), g = pe("aspect"), v = pe("ease"), y = pe("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [
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
  ], P = () => [..._(), O, R], k = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], b = () => [O, R, u], N = () => [Pt, "full", "auto", ...b()], S = () => [st, "none", "subgrid", O, R], F = () => ["auto", {
    span: ["full", st, O, R]
  }, st, O, R], V = () => [st, "auto", O, R], z = () => ["auto", "min", "max", "fr", O, R], Y = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ...b()], G = () => [Pt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...b()], E = () => [e, O, R], L = () => [..._(), ko, Eo, {
    position: [O, R]
  }], X = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], de = () => ["auto", "cover", "contain", kf, Cf, {
    size: [O, R]
  }], we = () => [br, Qt, pt], ne = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    O,
    R
  ], re = () => ["", H, Qt, pt], De = () => ["solid", "dashed", "dotted", "double"], ye = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], q = () => [H, br, ko, Eo], he = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    w,
    O,
    R
  ], fe = () => ["none", H, O, R], Me = () => ["none", H, O, R], Xe = () => [H, O, R], We = () => [Pt, "full", ...b()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Je],
      breakpoint: [Je],
      color: [xf],
      container: [Je],
      "drop-shadow": [Je],
      ease: ["in", "out", "in-out"],
      font: [Nf],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Je],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Je],
      shadow: [Je],
      spacing: ["px", H],
      text: [Je],
      "text-shadow": [Je],
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
        aspect: ["auto", "square", Pt, R, O, g]
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
        columns: [H, R, O, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": x()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": x()
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
        object: P()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
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
        inset: N()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": N()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": N()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: N()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: N()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: N()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: N()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: N()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: N()
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
        z: [st, "auto", O, R]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Pt, "full", "auto", s, ...b()]
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
        flex: [H, Pt, "auto", "initial", "none", R]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", H, O, R]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", H, O, R]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [st, "first", "last", "none", O, R]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": S()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: F()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": V()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": V()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": S()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: F()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": V()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": V()
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
        "auto-cols": z()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": z()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: b()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": b()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": b()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...Y(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Q(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Q()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Y()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": Y()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Q(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Q()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: b()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: b()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: b()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: b()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: b()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: b()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: b()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: b()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: b()
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
        "space-x": b()
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
        "space-y": b()
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
        size: G()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...G()]
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
          ...G()
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
          ...G()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...G()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...G()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...G()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Qt, pt]
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
        font: [r, O, xr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", br, R]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ef, R, t]
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
        tracking: [a, O, R]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [H, "none", O, xr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...b()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", O, R]
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
        list: ["disc", "decimal", "none", O, R]
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
        placeholder: E()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: E()
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
        decoration: [...De(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [H, "from-font", "auto", O, pt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: E()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [H, "auto", O, R]
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
        indent: b()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", O, R]
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
        content: ["none", O, R]
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
        bg: L()
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
        bg: de()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, st, O, R],
          radial: ["", O, R],
          conic: [st, O, R]
        }, Tf, Pf]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: E()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: we()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: we()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: we()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: E()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: E()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: E()
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
        border: re()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": re()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": re()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": re()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": re()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": re()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": re()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": re()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": re()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": re()
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
        "divide-y": re()
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
        border: [...De(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...De(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: E()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": E()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": E()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": E()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": E()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": E()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": E()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": E()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": E()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: E()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...De(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [H, O, R]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", H, Qt, pt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: E()
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
          Mn,
          Sn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: E()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", l, Mn, Sn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": E()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: re()
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
        ring: E()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [H, pt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": E()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": re()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": E()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, Mn, Sn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": E()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [H, O, R]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ye(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ye()
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
        "mask-linear": [H]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": q()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": q()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": E()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": E()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": q()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": q()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": E()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": E()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": q()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": q()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": E()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": E()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": q()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": q()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": E()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": E()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": q()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": q()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": E()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": E()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": q()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": q()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": E()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": E()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": q()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": q()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": E()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": E()
      }],
      "mask-image-radial": [{
        "mask-radial": [O, R]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": q()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": q()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": E()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": E()
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
        "mask-radial-at": _()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [H]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": q()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": q()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": E()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": E()
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
        mask: L()
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
        mask: de()
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
        mask: ["none", O, R]
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
          O,
          R
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: he()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [H, O, R]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [H, O, R]
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
          p,
          Mn,
          Sn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": E()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", H, O, R]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [H, O, R]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", H, O, R]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [H, O, R]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", H, O, R]
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
          O,
          R
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": he()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [H, O, R]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [H, O, R]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", H, O, R]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [H, O, R]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", H, O, R]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [H, O, R]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [H, O, R]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", H, O, R]
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
        "border-spacing": b()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": b()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": b()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", O, R]
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
        duration: [H, "initial", O, R]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", v, O, R]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [H, O, R]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, O, R]
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
        perspective: [h, O, R]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": P()
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
        scale: Me()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Me()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Me()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Me()
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
        skew: Xe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Xe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Xe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [O, R, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: P()
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
        translate: We()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": We()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": We()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": We()
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
        accent: E()
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
        caret: E()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", O, R]
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
        "scroll-m": b()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": b()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": b()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": b()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": b()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": b()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": b()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": b()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": b()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": b()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": b()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": b()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": b()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": b()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": b()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": b()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": b()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": b()
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
        "will-change": ["auto", "scroll", "contents", "transform", O, R]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...E()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [H, Qt, pt, xr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...E()]
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
}, Of = /* @__PURE__ */ pf(Rf);
function $(...e) {
  return Of(rs(e));
}
function va({ interval: e = 5e3, enabled: t = !0, onPoll: n }) {
  const [r, a] = C(!1), [o, i] = C(!1), s = D(null), u = B(() => {
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
  }, [e, t, n]), d = B(() => {
    s.current && (clearInterval(s.current), s.current = null), a(!1);
  }, []);
  return I(() => {
    const f = () => {
      document.hidden ? (i(!0), d()) : (i(!1), t && u());
    };
    return document.addEventListener("visibilitychange", f), () => {
      document.removeEventListener("visibilitychange", f);
    };
  }, [t, u, d]), I(() => (t && !document.hidden ? u() : d(), () => {
    d();
  }), [t, u, d]), {
    isPolling: r,
    isPaused: o
  };
}
function To(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function rr(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((a) => {
      const o = To(a, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          typeof o == "function" ? o() : To(e[a], null);
        }
      };
  };
}
function se(...e) {
  return B(rr(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  const t = /* @__PURE__ */ If(e), n = T((r, a) => {
    const { children: o, ...i } = r, s = He.toArray(o), u = s.find(Ff);
    if (u) {
      const d = u.props.children, f = s.map((l) => l === u ? He.count(d) > 1 ? He.only(null) : tt(d) ? d.props.children : null : l);
      return /* @__PURE__ */ c(t, { ...i, ref: a, children: tt(d) ? Vt(d, void 0, f) : null });
    }
    return /* @__PURE__ */ c(t, { ...i, ref: a, children: o });
  });
  return n.displayName = `${e}.Slot`, n;
}
var ps = /* @__PURE__ */ Wt("Slot");
// @__NO_SIDE_EFFECTS__
function If(e) {
  const t = T((n, r) => {
    const { children: a, ...o } = n;
    if (tt(a)) {
      const i = Wf(a), s = $f(o, a.props);
      return a.type !== Z && (s.ref = r ? rr(r, i) : i), Vt(a, s);
    }
    return He.count(a) > 1 ? He.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Lf = Symbol("radix.slottable");
function Ff(e) {
  return tt(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Lf;
}
function $f(e, t) {
  const n = { ...t };
  for (const r in t) {
    const a = e[r], o = t[r];
    /^on[A-Z]/.test(r) ? a && o ? n[r] = (...s) => {
      const u = o(...s);
      return a(...s), u;
    } : a && (n[r] = a) : r === "style" ? n[r] = { ...a, ...o } : r === "className" && (n[r] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Wf(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const Ao = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Do = rs, hs = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Do(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: a, defaultVariants: o } = t, i = Object.keys(a).map((d) => {
    const f = n == null ? void 0 : n[d], l = o == null ? void 0 : o[d];
    if (f === null) return null;
    const m = Ao(f) || Ao(l);
    return a[d][m];
  }), s = n && Object.entries(n).reduce((d, f) => {
    let [l, m] = f;
    return m === void 0 || (d[l] = m), d;
  }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, f) => {
    let { class: l, className: m, ...p } = f;
    return Object.entries(p).every((w) => {
      let [h, g] = w;
      return Array.isArray(g) ? g.includes({
        ...o,
        ...s
      }[h]) : {
        ...o,
        ...s
      }[h] === g;
    }) ? [
      ...d,
      l,
      m
    ] : d;
  }, []);
  return Do(e, i, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Uf = hs(
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
    r ? ps : "button",
    {
      "data-slot": "button",
      className: $(Uf({ variant: t, size: n, className: e })),
      ...a
    }
  );
}
var zf = [
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
], K = zf.reduce((e, t) => {
  const n = /* @__PURE__ */ Wt(`Primitive.${t}`), r = T((a, o) => {
    const { asChild: i, ...s } = a, u = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c(u, { ...s, ref: o });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function ws(e, t) {
  e && er(() => e.dispatchEvent(t));
}
var Ee = globalThis != null && globalThis.document ? at : () => {
};
function Bf(e, t) {
  return Bt((n, r) => t[n][r] ?? n, e);
}
var Te = (e) => {
  const { present: t, children: n } = e, r = Vf(t), a = typeof n == "function" ? n({ present: r.isPresent }) : He.only(n), o = se(r.ref, jf(a));
  return typeof n == "function" || r.isPresent ? Vt(a, { ref: o }) : null;
};
Te.displayName = "Presence";
function Vf(e) {
  const [t, n] = C(), r = D(null), a = D(e), o = D("none"), i = e ? "mounted" : "unmounted", [s, u] = Bf(i, {
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
    const d = Nn(r.current);
    o.current = s === "mounted" ? d : "none";
  }, [s]), Ee(() => {
    const d = r.current, f = a.current;
    if (f !== e) {
      const m = o.current, p = Nn(d);
      e ? u("MOUNT") : p === "none" || (d == null ? void 0 : d.display) === "none" ? u("UNMOUNT") : u(f && m !== p ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, u]), Ee(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, l = (p) => {
        const h = Nn(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && h && (u("ANIMATION_END"), !a.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, m = (p) => {
        p.target === t && (o.current = Nn(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        f.clearTimeout(d), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: B((d) => {
      r.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function Nn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function jf(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Hf(e, t) {
  const n = Ge(t), r = (o) => {
    const { children: i, ...s } = o, u = le(() => s, Object.values(s));
    return /* @__PURE__ */ c(n.Provider, { value: u, children: i });
  };
  r.displayName = e + "Provider";
  function a(o) {
    const i = Le(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${o}\` must be used within \`${e}\``);
  }
  return [r, a];
}
function ft(e, t = []) {
  let n = [];
  function r(o, i) {
    const s = Ge(i), u = n.length;
    n = [...n, i];
    const d = (l) => {
      var v;
      const { scope: m, children: p, ...w } = l, h = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[u]) || s, g = le(() => w, Object.values(w));
      return /* @__PURE__ */ c(h.Provider, { value: g, children: p });
    };
    d.displayName = o + "Provider";
    function f(l, m) {
      var h;
      const p = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[u]) || s, w = Le(p);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${l}\` must be used within \`${o}\``);
    }
    return [d, f];
  }
  const a = () => {
    const o = n.map((i) => Ge(i));
    return function(s) {
      const u = (s == null ? void 0 : s[e]) || o;
      return le(
        () => ({ [`__scope${e}`]: { ...s, [e]: u } }),
        [s, u]
      );
    };
  };
  return a.scopeName = e, [r, Yf(a, ...t)];
}
function Yf(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(o) {
      const i = r.reduce((s, { useScope: u, scopeName: d }) => {
        const l = u(o)[`__scope${d}`];
        return { ...s, ...l };
      }, {});
      return le(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function ge(e) {
  const t = D(e);
  return I(() => {
    t.current = e;
  }), le(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
var Gf = Ge(void 0);
function ya(e) {
  const t = Le(Gf);
  return e || t || "ltr";
}
function qf(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function U(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), n === !1 || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  };
}
function Kf(e, t) {
  return Bt((n, r) => t[n][r] ?? n, e);
}
var ba = "ScrollArea", [gs] = ft(ba), [Xf, Ae] = gs(ba), vs = T(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: a,
      scrollHideDelay: o = 600,
      ...i
    } = e, [s, u] = C(null), [d, f] = C(null), [l, m] = C(null), [p, w] = C(null), [h, g] = C(null), [v, y] = C(0), [x, _] = C(0), [P, k] = C(!1), [M, b] = C(!1), N = se(t, (F) => u(F)), S = ya(a);
    return /* @__PURE__ */ c(
      Xf,
      {
        scope: n,
        type: r,
        dir: S,
        scrollHideDelay: o,
        scrollArea: s,
        viewport: d,
        onViewportChange: f,
        content: l,
        onContentChange: m,
        scrollbarX: p,
        onScrollbarXChange: w,
        scrollbarXEnabled: P,
        onScrollbarXEnabledChange: k,
        scrollbarY: h,
        onScrollbarYChange: g,
        scrollbarYEnabled: M,
        onScrollbarYEnabledChange: b,
        onCornerWidthChange: y,
        onCornerHeightChange: _,
        children: /* @__PURE__ */ c(
          K.div,
          {
            dir: S,
            ...i,
            ref: N,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": v + "px",
              "--radix-scroll-area-corner-height": x + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
vs.displayName = ba;
var ys = "ScrollAreaViewport", bs = T(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: a, ...o } = e, i = Ae(ys, n), s = D(null), u = se(t, s, i.onViewportChange);
    return /* @__PURE__ */ c(Z, { children: [
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
        K.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...o,
          ref: u,
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
bs.displayName = ys;
var qe = "ScrollAreaScrollbar", xs = T(
  (e, t) => {
    const { forceMount: n, ...r } = e, a = Ae(qe, e.__scopeScrollArea), { onScrollbarXEnabledChange: o, onScrollbarYEnabledChange: i } = a, s = e.orientation === "horizontal";
    return I(() => (s ? o(!0) : i(!0), () => {
      s ? o(!1) : i(!1);
    }), [s, o, i]), a.type === "hover" ? /* @__PURE__ */ c(Jf, { ...r, ref: t, forceMount: n }) : a.type === "scroll" ? /* @__PURE__ */ c(Qf, { ...r, ref: t, forceMount: n }) : a.type === "auto" ? /* @__PURE__ */ c(_s, { ...r, ref: t, forceMount: n }) : a.type === "always" ? /* @__PURE__ */ c(xa, { ...r, ref: t }) : null;
  }
);
xs.displayName = qe;
var Jf = T((e, t) => {
  const { forceMount: n, ...r } = e, a = Ae(qe, e.__scopeScrollArea), [o, i] = C(!1);
  return I(() => {
    const s = a.scrollArea;
    let u = 0;
    if (s) {
      const d = () => {
        window.clearTimeout(u), i(!0);
      }, f = () => {
        u = window.setTimeout(() => i(!1), a.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", d), s.addEventListener("pointerleave", f), () => {
        window.clearTimeout(u), s.removeEventListener("pointerenter", d), s.removeEventListener("pointerleave", f);
      };
    }
  }, [a.scrollArea, a.scrollHideDelay]), /* @__PURE__ */ c(Te, { present: n || o, children: /* @__PURE__ */ c(
    _s,
    {
      "data-state": o ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), Qf = T((e, t) => {
  const { forceMount: n, ...r } = e, a = Ae(qe, e.__scopeScrollArea), o = e.orientation === "horizontal", i = or(() => u("SCROLL_END"), 100), [s, u] = Kf("hidden", {
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
      const d = window.setTimeout(() => u("HIDE"), a.scrollHideDelay);
      return () => window.clearTimeout(d);
    }
  }, [s, a.scrollHideDelay, u]), I(() => {
    const d = a.viewport, f = o ? "scrollLeft" : "scrollTop";
    if (d) {
      let l = d[f];
      const m = () => {
        const p = d[f];
        l !== p && (u("SCROLL"), i()), l = p;
      };
      return d.addEventListener("scroll", m), () => d.removeEventListener("scroll", m);
    }
  }, [a.viewport, o, u, i]), /* @__PURE__ */ c(Te, { present: n || s !== "hidden", children: /* @__PURE__ */ c(
    xa,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: U(e.onPointerEnter, () => u("POINTER_ENTER")),
      onPointerLeave: U(e.onPointerLeave, () => u("POINTER_LEAVE"))
    }
  ) });
}), _s = T((e, t) => {
  const n = Ae(qe, e.__scopeScrollArea), { forceMount: r, ...a } = e, [o, i] = C(!1), s = e.orientation === "horizontal", u = or(() => {
    if (n.viewport) {
      const d = n.viewport.offsetWidth < n.viewport.scrollWidth, f = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(s ? d : f);
    }
  }, 10);
  return Ut(n.viewport, u), Ut(n.content, u), /* @__PURE__ */ c(Te, { present: r || o, children: /* @__PURE__ */ c(
    xa,
    {
      "data-state": o ? "visible" : "hidden",
      ...a,
      ref: t
    }
  ) });
}), xa = T((e, t) => {
  const { orientation: n = "vertical", ...r } = e, a = Ae(qe, e.__scopeScrollArea), o = D(null), i = D(0), [s, u] = C({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), d = Ps(s.viewport, s.content), f = {
    ...r,
    sizes: s,
    onSizesChange: u,
    hasThumb: d > 0 && d < 1,
    onThumbChange: (m) => o.current = m,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (m) => i.current = m
  };
  function l(m, p) {
    return am(m, i.current, s, p);
  }
  return n === "horizontal" ? /* @__PURE__ */ c(
    Zf,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (a.viewport && o.current) {
          const m = a.viewport.scrollLeft, p = Ro(m, s, a.dir);
          o.current.style.transform = `translate3d(${p}px, 0, 0)`;
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
    em,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (a.viewport && o.current) {
          const m = a.viewport.scrollTop, p = Ro(m, s);
          o.current.style.transform = `translate3d(0, ${p}px, 0)`;
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
}), Zf = T((e, t) => {
  const { sizes: n, onSizesChange: r, ...a } = e, o = Ae(qe, e.__scopeScrollArea), [i, s] = C(), u = D(null), d = se(t, u, o.onScrollbarXChange);
  return I(() => {
    u.current && s(getComputedStyle(u.current));
  }, [u]), /* @__PURE__ */ c(
    Ms,
    {
      "data-orientation": "horizontal",
      ...a,
      ref: d,
      sizes: n,
      style: {
        bottom: 0,
        left: o.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: o.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": ar(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, l) => {
        if (o.viewport) {
          const m = o.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(m), ks(m, l) && f.preventDefault();
        }
      },
      onResize: () => {
        u.current && o.viewport && i && r({
          content: o.viewport.scrollWidth,
          viewport: o.viewport.offsetWidth,
          scrollbar: {
            size: u.current.clientWidth,
            paddingStart: jn(i.paddingLeft),
            paddingEnd: jn(i.paddingRight)
          }
        });
      }
    }
  );
}), em = T((e, t) => {
  const { sizes: n, onSizesChange: r, ...a } = e, o = Ae(qe, e.__scopeScrollArea), [i, s] = C(), u = D(null), d = se(t, u, o.onScrollbarYChange);
  return I(() => {
    u.current && s(getComputedStyle(u.current));
  }, [u]), /* @__PURE__ */ c(
    Ms,
    {
      "data-orientation": "vertical",
      ...a,
      ref: d,
      sizes: n,
      style: {
        top: 0,
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": ar(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, l) => {
        if (o.viewport) {
          const m = o.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(m), ks(m, l) && f.preventDefault();
        }
      },
      onResize: () => {
        u.current && o.viewport && i && r({
          content: o.viewport.scrollHeight,
          viewport: o.viewport.offsetHeight,
          scrollbar: {
            size: u.current.clientHeight,
            paddingStart: jn(i.paddingTop),
            paddingEnd: jn(i.paddingBottom)
          }
        });
      }
    }
  );
}), [tm, Ss] = gs(qe), Ms = T((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: a,
    onThumbChange: o,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: u,
    onDragScroll: d,
    onWheelScroll: f,
    onResize: l,
    ...m
  } = e, p = Ae(qe, n), [w, h] = C(null), g = se(t, (N) => h(N)), v = D(null), y = D(""), x = p.viewport, _ = r.content - r.viewport, P = ge(f), k = ge(u), M = or(l, 10);
  function b(N) {
    if (v.current) {
      const S = N.clientX - v.current.left, F = N.clientY - v.current.top;
      d({ x: S, y: F });
    }
  }
  return I(() => {
    const N = (S) => {
      const F = S.target;
      (w == null ? void 0 : w.contains(F)) && P(S, _);
    };
    return document.addEventListener("wheel", N, { passive: !1 }), () => document.removeEventListener("wheel", N, { passive: !1 });
  }, [x, w, _, P]), I(k, [r, k]), Ut(w, M), Ut(p.content, M), /* @__PURE__ */ c(
    tm,
    {
      scope: n,
      scrollbar: w,
      hasThumb: a,
      onThumbChange: ge(o),
      onThumbPointerUp: ge(i),
      onThumbPositionChange: k,
      onThumbPointerDown: ge(s),
      children: /* @__PURE__ */ c(
        K.div,
        {
          ...m,
          ref: g,
          style: { position: "absolute", ...m.style },
          onPointerDown: U(e.onPointerDown, (N) => {
            N.button === 0 && (N.target.setPointerCapture(N.pointerId), v.current = w.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), b(N));
          }),
          onPointerMove: U(e.onPointerMove, b),
          onPointerUp: U(e.onPointerUp, (N) => {
            const S = N.target;
            S.hasPointerCapture(N.pointerId) && S.releasePointerCapture(N.pointerId), document.body.style.webkitUserSelect = y.current, p.viewport && (p.viewport.style.scrollBehavior = ""), v.current = null;
          })
        }
      )
    }
  );
}), Vn = "ScrollAreaThumb", Ns = T(
  (e, t) => {
    const { forceMount: n, ...r } = e, a = Ss(Vn, e.__scopeScrollArea);
    return /* @__PURE__ */ c(Te, { present: n || a.hasThumb, children: /* @__PURE__ */ c(nm, { ref: t, ...r }) });
  }
), nm = T(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...a } = e, o = Ae(Vn, n), i = Ss(Vn, n), { onThumbPositionChange: s } = i, u = se(
      t,
      (l) => i.onThumbChange(l)
    ), d = D(void 0), f = or(() => {
      d.current && (d.current(), d.current = void 0);
    }, 100);
    return I(() => {
      const l = o.viewport;
      if (l) {
        const m = () => {
          if (f(), !d.current) {
            const p = om(l, s);
            d.current = p, s();
          }
        };
        return s(), l.addEventListener("scroll", m), () => l.removeEventListener("scroll", m);
      }
    }, [o.viewport, f, s]), /* @__PURE__ */ c(
      K.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...a,
        ref: u,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: U(e.onPointerDownCapture, (l) => {
          const p = l.target.getBoundingClientRect(), w = l.clientX - p.left, h = l.clientY - p.top;
          i.onThumbPointerDown({ x: w, y: h });
        }),
        onPointerUp: U(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
Ns.displayName = Vn;
var _a = "ScrollAreaCorner", Cs = T(
  (e, t) => {
    const n = Ae(_a, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ c(rm, { ...e, ref: t }) : null;
  }
);
Cs.displayName = _a;
var rm = T((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, a = Ae(_a, n), [o, i] = C(0), [s, u] = C(0), d = !!(o && s);
  return Ut(a.scrollbarX, () => {
    var l;
    const f = ((l = a.scrollbarX) == null ? void 0 : l.offsetHeight) || 0;
    a.onCornerHeightChange(f), u(f);
  }), Ut(a.scrollbarY, () => {
    var l;
    const f = ((l = a.scrollbarY) == null ? void 0 : l.offsetWidth) || 0;
    a.onCornerWidthChange(f), i(f);
  }), d ? /* @__PURE__ */ c(
    K.div,
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
function jn(e) {
  return e ? parseInt(e, 10) : 0;
}
function Ps(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function ar(e) {
  const t = Ps(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function am(e, t, n, r = "ltr") {
  const a = ar(n), o = a / 2, i = t || o, s = a - i, u = n.scrollbar.paddingStart + i, d = n.scrollbar.size - n.scrollbar.paddingEnd - s, f = n.content - n.viewport, l = r === "ltr" ? [0, f] : [f * -1, 0];
  return Es([u, d], l)(e);
}
function Ro(e, t, n = "ltr") {
  const r = ar(t), a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, o = t.scrollbar.size - a, i = t.content - t.viewport, s = o - r, u = n === "ltr" ? [0, i] : [i * -1, 0], d = qf(e, u);
  return Es([0, i], [0, s])(d);
}
function Es(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function ks(e, t) {
  return e > 0 && e < t;
}
var om = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function a() {
    const o = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== o.left, s = n.top !== o.top;
    (i || s) && t(), n = o, r = window.requestAnimationFrame(a);
  })(), () => window.cancelAnimationFrame(r);
};
function or(e, t) {
  const n = ge(e), r = D(0);
  return I(() => () => window.clearTimeout(r.current), []), B(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Ut(e, t) {
  const n = ge(t);
  Ee(() => {
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
var im = vs, sm = bs, cm = Cs;
function fn({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ c(
    im,
    {
      "data-slot": "scroll-area",
      className: $("wa:relative", e),
      style: { overflow: "hidden", ...n.style },
      ...n,
      children: [
        /* @__PURE__ */ c(
          sm,
          {
            "data-slot": "scroll-area-viewport",
            style: { width: "100%", height: "100%", overflowY: "scroll" },
            className: "focus-visible:wa:ring-ring/50 wa:rounded-[inherit] wa:transition-[color,box-shadow] wa:outline-none focus-visible:wa:ring-[3px] focus-visible:wa:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ c(lm, {}),
        /* @__PURE__ */ c(cm, {})
      ]
    }
  );
}
function lm({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ c(
    xs,
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
        Ns,
        {
          "data-slot": "scroll-area-thumb",
          style: { background: "#00a884", borderRadius: "9999px", position: "relative", flex: 1 }
        }
      )
    }
  );
}
function Ne({ className: e, ...t }) {
  return /* @__PURE__ */ c(
    "div",
    {
      "data-slot": "skeleton",
      className: $("wa:bg-accent wa:animate-pulse wa:rounded-md", e),
      ...t
    }
  );
}
function um(e) {
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
var _r = { exports: {} }, Sr = {};
const dm = /* @__PURE__ */ um(pa);
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oo;
function fm() {
  if (Oo) return Sr;
  Oo = 1;
  var e = dm;
  function t(l, m) {
    return l === m && (l !== 0 || 1 / l === 1 / m) || l !== l && m !== m;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, a = e.useEffect, o = e.useLayoutEffect, i = e.useDebugValue;
  function s(l, m) {
    var p = m(), w = r({ inst: { value: p, getSnapshot: m } }), h = w[0].inst, g = w[1];
    return o(
      function() {
        h.value = p, h.getSnapshot = m, u(h) && g({ inst: h });
      },
      [l, p, m]
    ), a(
      function() {
        return u(h) && g({ inst: h }), l(function() {
          u(h) && g({ inst: h });
        });
      },
      [l]
    ), i(p), p;
  }
  function u(l) {
    var m = l.getSnapshot;
    l = l.value;
    try {
      var p = m();
      return !n(l, p);
    } catch {
      return !0;
    }
  }
  function d(l, m) {
    return m();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : s;
  return Sr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Sr;
}
var Io;
function mm() {
  return Io || (Io = 1, _r.exports = fm()), _r.exports;
}
var pm = mm();
function hm() {
  return pm.useSyncExternalStore(
    wm,
    () => !0,
    () => !1
  );
}
function wm() {
  return () => {
  };
}
var Sa = "Avatar", [gm] = ft(Sa), [vm, Ts] = gm(Sa), As = T(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [a, o] = C("idle");
    return /* @__PURE__ */ c(
      vm,
      {
        scope: n,
        imageLoadingStatus: a,
        onImageLoadingStatusChange: o,
        children: /* @__PURE__ */ c(K.span, { ...r, ref: t })
      }
    );
  }
);
As.displayName = Sa;
var Ds = "AvatarImage", Rs = T(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: a = () => {
    }, ...o } = e, i = Ts(Ds, n), s = ym(r, o), u = ge((d) => {
      a(d), i.onImageLoadingStatusChange(d);
    });
    return Ee(() => {
      s !== "idle" && u(s);
    }, [s, u]), s === "loaded" ? /* @__PURE__ */ c(K.img, { ...o, ref: t, src: r }) : null;
  }
);
Rs.displayName = Ds;
var Os = "AvatarFallback", Is = T(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...a } = e, o = Ts(Os, n), [i, s] = C(r === void 0);
    return I(() => {
      if (r !== void 0) {
        const u = window.setTimeout(() => s(!0), r);
        return () => window.clearTimeout(u);
      }
    }, [r]), i && o.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ c(K.span, { ...a, ref: t }) : null;
  }
);
Is.displayName = Os;
function Lo(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function ym(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = hm(), a = D(null), o = r ? (a.current || (a.current = new window.Image()), a.current) : null, [i, s] = C(
    () => Lo(o, e)
  );
  return Ee(() => {
    s(Lo(o, e));
  }, [o, e]), Ee(() => {
    const u = (l) => () => {
      s(l);
    };
    if (!o) return;
    const d = u("loaded"), f = u("error");
    return o.addEventListener("load", d), o.addEventListener("error", f), t && (o.referrerPolicy = t), typeof n == "string" && (o.crossOrigin = n), () => {
      o.removeEventListener("load", d), o.removeEventListener("error", f);
    };
  }, [o, n, t]), i;
}
var bm = As, xm = Rs, _m = Is;
function Ls({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    bm,
    {
      "data-slot": "avatar",
      className: $(
        "wa:relative wa:flex wa:size-8 wa:shrink-0 wa:overflow-hidden wa:rounded-full",
        e
      ),
      ...t
    }
  );
}
function Fs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    xm,
    {
      "data-slot": "avatar-image",
      className: $("wa:aspect-square wa:size-full", e),
      ...t
    }
  );
}
function $s({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    _m,
    {
      "data-slot": "avatar-fallback",
      className: $(
        "wa:bg-muted wa:flex wa:size-full wa:items-center wa:justify-center wa:rounded-full",
        e
      ),
      ...t
    }
  );
}
function Sm(e, t) {
  try {
    const n = new Date(e);
    return vt(n) ? Xi(n) ? $t(n, "HH:mm") : Ji(n) ? t : $t(n, "MMM d") : "";
  } catch {
    return "";
  }
}
function Mm(e, t) {
  if (e) {
    const n = e.trim().split(/\s+/);
    return n.length >= 2 ? (n[0][0] + n[1][0]).toUpperCase() : e.slice(0, 2).toUpperCase();
  }
  return t ? t.replace(/\D/g, "").slice(-2) : "??";
}
const Ws = T(
  ({ onSelectConversation: e, selectedConversationId: t, isHidden: n = !1, instance: r }, a) => {
    const o = jt(), { viewMode: i, devices: s, getProviderForDevice: u } = ha(), d = Fe(), [f, l] = C([]), [m, p] = C(!0), [w, h] = C(!1), [g, v] = C(""), [y, x] = C(!1), _ = B(async () => {
      if (i === "all") {
        const F = await Promise.allSettled(
          s.map(async (z) => (await u(z).findChats(z.instanceName)).map((W) => ({
            id: W.id,
            phoneNumber: W.phoneNumber,
            status: "active",
            lastActiveAt: W.lastActiveAt || "",
            contactName: W.contactName,
            profilePicUrl: W.profilePicUrl,
            lastMessage: W.lastMessage,
            unreadCount: W.unreadCount,
            deviceId: z.id,
            deviceLabel: z.label || z.instanceName
          })))
        ), V = [];
        for (const z of F)
          z.status === "fulfilled" && V.push(...z.value);
        return V.sort((z, Y) => z.lastActiveAt ? Y.lastActiveAt ? new Date(Y.lastActiveAt).getTime() - new Date(z.lastActiveAt).getTime() : -1 : 1), V;
      }
      return r ? (await o.findChats(r)).map((F) => ({
        id: F.id,
        phoneNumber: F.phoneNumber,
        status: "active",
        lastActiveAt: F.lastActiveAt || "",
        contactName: F.contactName,
        profilePicUrl: F.profilePicUrl,
        lastMessage: F.lastMessage,
        unreadCount: F.unreadCount
      })) : [];
    }, [i, s, u, r, o]), P = B(async () => {
      if (i === "single" && !r) {
        l([]), p(!1);
        return;
      }
      try {
        const S = await _();
        l(S);
      } catch (S) {
        console.error("Error fetching conversations:", S);
      } finally {
        p(!1), h(!1);
      }
    }, [i, r, _]);
    I(() => {
      p(!0), P();
    }, [P]);
    const k = () => {
      h(!0), P();
    }, { isPolling: M } = va({
      interval: 1e4,
      enabled: i === "all" || !!r,
      onPoll: P
    }), b = (S) => {
      const F = f.find((V) => V.phoneNumber === S);
      F && e(F);
    };
    Zn(a, () => ({
      refresh: async () => {
        if (i === "single" && !r) return [];
        h(!0);
        try {
          const S = await _();
          return l(S), h(!1), S;
        } catch {
          return h(!1), [];
        }
      },
      selectByPhoneNumber: b
    }));
    const N = f.filter((S) => {
      var V, z;
      const F = g.toLowerCase();
      return S.phoneNumber.toLowerCase().includes(F) || ((V = S.contactName) == null ? void 0 : V.toLowerCase().includes(F)) || ((z = S.deviceLabel) == null ? void 0 : z.toLowerCase().includes(F));
    });
    return m ? /* @__PURE__ */ c("div", { className: $(
      "wa-sidebar wa:w-full wa:border-r wa:border-[#e9edef] wa:bg-white wa:flex wa:flex-col",
      n && "wa-sidebar--hidden"
    ), children: [
      /* @__PURE__ */ c("div", { className: "wa:px-3 wa:pt-2.5 wa:pb-1.5", children: [
        /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:justify-between wa:mb-2.5", children: [
          /* @__PURE__ */ c(Ne, { className: "wa:h-6 wa:w-16" }),
          /* @__PURE__ */ c(Ne, { className: "wa:h-8 wa:w-8 wa:rounded-full" })
        ] }),
        /* @__PURE__ */ c(Ne, { className: "wa:h-[35px] wa:w-full wa:rounded-lg" })
      ] }),
      /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:space-y-0", children: [1, 2, 3, 4, 5, 6, 7, 8].map((S) => /* @__PURE__ */ c("div", { className: "wa:flex wa:gap-3 wa:px-3 wa:py-3", children: [
        /* @__PURE__ */ c(Ne, { className: "wa:h-[49px] wa:w-[49px] wa:rounded-full wa:flex-shrink-0" }),
        /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:space-y-2 wa:pt-1", children: [
          /* @__PURE__ */ c(Ne, { className: "wa:h-4 wa:w-32" }),
          /* @__PURE__ */ c(Ne, { className: "wa:h-3 wa:w-48" })
        ] })
      ] }, S)) })
    ] }) : i === "single" && !r ? /* @__PURE__ */ c("div", { className: $(
      "wa-sidebar wa:w-full wa:border-r wa:border-[#e9edef] wa:bg-white wa:flex wa:flex-col wa:items-center wa:justify-center",
      n && "wa-sidebar--hidden"
    ), children: /* @__PURE__ */ c("p", { className: "wa:text-[#667781] wa:text-[14px]", children: d("conversationList.selectInstance") }) }) : /* @__PURE__ */ c("div", { className: $(
      "wa-sidebar wa:w-full wa:border-r wa:border-[#e9edef] wa:bg-white wa:flex wa:flex-col",
      n && "wa-sidebar--hidden"
    ), children: [
      /* @__PURE__ */ c("div", { className: "wa:flex-shrink-0", children: [
        /* @__PURE__ */ c("div", { style: { padding: "12px 16px 4px" }, className: "wa:flex wa:items-center wa:justify-between", children: [
          /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:gap-2", children: [
            /* @__PURE__ */ c("h1", { className: "wa:text-[22px] wa:font-bold wa:text-[#111b21] wa:leading-none", children: d("conversationList.chats") }),
            M && /* @__PURE__ */ c(
              "div",
              {
                className: "wa:h-2 wa:w-2 wa:rounded-full wa:bg-green-500 wa:animate-pulse",
                title: d("conversationList.autoUpdating")
              }
            )
          ] }),
          /* @__PURE__ */ c(
            ce,
            {
              onClick: k,
              disabled: w,
              variant: "ghost",
              size: "icon",
              className: "wa:text-[#54656f] hover:wa:bg-transparent wa:h-10 wa:w-10",
              children: /* @__PURE__ */ c(es, { className: $("wa:h-[18px] wa:w-[18px]", w && "wa:animate-spin") })
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { style: { padding: "0 16px 8px" }, children: /* @__PURE__ */ c("div", { style: { padding: "0 16px" }, className: $(
          "wa:flex wa:items-center wa:gap-3 wa:rounded-lg wa:h-[35px] wa:transition-colors",
          y ? "wa:bg-white wa:ring-2 wa:ring-[#00a884]" : "wa:bg-[#f0f2f5]"
        ), children: [
          /* @__PURE__ */ c("div", { className: "wa:flex-shrink-0", children: /* @__PURE__ */ c(ts, { className: $(
            "wa:h-[15px] wa:w-[15px] wa:transition-colors",
            y ? "wa:text-[#00a884]" : "wa:text-[#54656f]"
          ) }) }),
          /* @__PURE__ */ c(
            "input",
            {
              type: "text",
              value: g,
              onChange: (S) => v(S.target.value),
              onFocus: () => x(!0),
              onBlur: () => x(!1),
              placeholder: d("conversationList.searchPlaceholder"),
              className: "wa:flex-1 wa:bg-transparent wa:border-none wa:outline-none wa:text-[13px] wa:text-[#111b21] wa:placeholder-[#667781] wa:h-full"
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ c(fn, { className: "wa:flex-1 wa:h-0 wa:overflow-hidden", children: N.length === 0 ? /* @__PURE__ */ c("div", { className: "wa:py-8 wa:text-center wa:text-[#667781] wa:text-[14px]", children: d(g ? "conversationList.noConversationsFound" : "conversationList.noConversationsYet") }) : /* @__PURE__ */ c("div", { className: "wa:w-full wa:overflow-hidden", children: N.map((S) => {
        const F = S.deviceId ? `${S.deviceId}::${S.id}` : S.id, V = i === "all" ? t === F : t === S.id;
        return /* @__PURE__ */ c(
          "button",
          {
            onClick: () => e(S),
            className: $(
              "wa:w-full wa:text-left wa:transition-colors wa:relative wa:overflow-hidden wa:flex wa:items-center wa:cursor-pointer",
              "hover:wa:bg-[#f5f6f6]",
              V && "wa:bg-[#f0f2f5]"
            ),
            style: { padding: "5px 15px 5px 13px" },
            children: [
              V && /* @__PURE__ */ c("div", { className: "wa:absolute wa:left-0 wa:top-0 wa:bottom-0 wa:w-[3px] wa:bg-[#00a884]" }),
              /* @__PURE__ */ c("div", { className: "wa:flex wa:gap-3.5 wa:items-center wa:w-full wa:py-3.5 wa:overflow-hidden", children: [
                /* @__PURE__ */ c(Ls, { className: "wa:h-[49px] wa:w-[49px] wa:flex-shrink-0", children: [
                  S.profilePicUrl && /* @__PURE__ */ c(Fs, { src: S.profilePicUrl, alt: S.contactName || S.phoneNumber }),
                  /* @__PURE__ */ c($s, { className: "wa:bg-[#dfe5e7] wa:text-[#54656f] wa:text-sm wa:font-medium", children: Mm(S.contactName, S.phoneNumber) })
                ] }),
                /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0 wa:overflow-hidden", children: [
                  /* @__PURE__ */ c("div", { className: "wa:flex wa:justify-between wa:items-baseline wa:gap-2", children: [
                    /* @__PURE__ */ c("p", { className: "wa:text-[17px] wa:font-normal wa:text-[#111b21] wa:truncate wa:leading-[21px]", children: S.contactName || S.phoneNumber }),
                    /* @__PURE__ */ c("span", { className: $(
                      "wa:text-[12px] wa:flex-shrink-0 wa:leading-[14px]",
                      S.unreadCount && S.unreadCount > 0 ? "wa:text-[#00a884]" : "wa:text-[#667781]"
                    ), children: Sm(S.lastActiveAt, d("conversationList.yesterday")) })
                  ] }),
                  i === "all" && S.deviceLabel && /* @__PURE__ */ c("p", { className: "wa:text-[11px] wa:text-[#667781] wa:truncate wa:leading-[14px]", children: S.deviceLabel }),
                  /* @__PURE__ */ c("div", { className: "wa:flex wa:justify-between wa:items-center wa:gap-2 wa:mt-[2px]", children: [
                    S.lastMessage ? /* @__PURE__ */ c("p", { className: "wa:text-[14px] wa:text-[#667781] wa:truncate wa:leading-[20px]", children: [
                      S.lastMessage.direction === "outbound" && /* @__PURE__ */ c("span", { className: "wa:text-[#53bdeb]", children: "✓ " }),
                      S.lastMessage.content
                    ] }) : /* @__PURE__ */ c("span", {}),
                    S.unreadCount != null && S.unreadCount > 0 && /* @__PURE__ */ c("span", { className: "wa:flex-shrink-0 wa:bg-[#00a884] wa:text-white wa:text-[11px] wa:font-bold wa:rounded-full wa:min-w-[20px] wa:h-[20px] wa:flex wa:items-center wa:justify-center wa:px-1", children: S.unreadCount })
                  ] })
                ] })
              ] })
            ]
          },
          F
        );
      }) }) })
    ] });
  }
);
Ws.displayName = "ConversationList";
function Nm(e) {
  if (!isFinite(e) || e < 0) return "0:00";
  const t = Math.floor(e / 60), n = Math.floor(e % 60);
  return `${t}:${n.toString().padStart(2, "0")}`;
}
function Cm(e, t) {
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
function Us({ src: e, isOutbound: t, onError: n }) {
  const r = D(null), [a, o] = C(!1), [i, s] = C(0), [u, d] = C(0), [f] = C(() => Cm(e, 40)), l = i > 0 ? u / i : 0;
  I(() => {
    const h = r.current;
    if (!h) return;
    const g = () => s(h.duration), v = () => d(h.currentTime), y = () => {
      o(!1), d(0);
    }, x = () => s(h.duration);
    return h.addEventListener("loadedmetadata", g), h.addEventListener("timeupdate", v), h.addEventListener("ended", y), h.addEventListener("durationchange", x), () => {
      h.removeEventListener("loadedmetadata", g), h.removeEventListener("timeupdate", v), h.removeEventListener("ended", y), h.removeEventListener("durationchange", x);
    };
  }, []);
  const m = B(() => {
    const h = r.current;
    h && (a ? (h.pause(), o(!1)) : h.play().then(() => o(!0)).catch(() => {
    }));
  }, [a]), p = B((h) => {
    const g = r.current;
    if (!g || !i) return;
    const v = h.currentTarget.getBoundingClientRect(), y = Math.max(0, Math.min(1, (h.clientX - v.left) / v.width));
    g.currentTime = y * i, d(g.currentTime);
  }, [i]), w = a || u > 0 ? u : i;
  return /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:gap-2 wa:min-w-[240px] wa:max-w-[320px]", children: [
    /* @__PURE__ */ c("audio", { ref: r, src: e, preload: "metadata", onError: n }),
    /* @__PURE__ */ c("div", { className: $(
      "wa:relative wa:flex-shrink-0 wa:w-10 wa:h-10 wa:rounded-full wa:flex wa:items-center wa:justify-center",
      t ? "wa:bg-[#b3ddb1]" : "wa:bg-[#e2e2e2]"
    ), children: /* @__PURE__ */ c($d, { className: $("wa:h-5 wa:w-5", t ? "wa:text-[#4faa48]" : "wa:text-[#8696a0]") }) }),
    /* @__PURE__ */ c(
      "button",
      {
        onClick: m,
        className: $(
          "wa:flex-shrink-0 wa:w-8 wa:h-8 wa:rounded-full wa:flex wa:items-center wa:justify-center wa:transition-colors",
          t ? "wa:text-[#4faa48] hover:wa:bg-[#b3ddb1]" : "wa:text-[#8696a0] hover:wa:bg-[#e2e2e2]"
        ),
        children: a ? /* @__PURE__ */ c(zd, { className: "wa:h-5 wa:w-5 wa:fill-current" }) : /* @__PURE__ */ c(Vd, { className: "wa:h-5 wa:w-5 wa:fill-current wa:ml-0.5" })
      }
    ),
    /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0", children: [
      /* @__PURE__ */ c(
        "div",
        {
          className: "wa:relative wa:h-7 wa:flex wa:items-center wa:gap-[1.5px] wa:cursor-pointer",
          onClick: p,
          children: [
            f.map((h, g) => {
              const y = g / f.length < l;
              return /* @__PURE__ */ c(
                "div",
                {
                  className: $(
                    "wa:w-[2.5px] wa:rounded-full wa:transition-colors wa:flex-shrink-0",
                    y ? t ? "wa:bg-[#4faa48]" : "wa:bg-[#4fc3f7]" : t ? "wa:bg-[#b3ddb1]" : "wa:bg-[#c8c8c8]"
                  ),
                  style: { height: `${h * 100}%` }
                },
                g
              );
            }),
            /* @__PURE__ */ c(
              "div",
              {
                className: $(
                  "wa:absolute wa:w-3 wa:h-3 wa:rounded-full wa:top-1/2 -wa:translate-y-1/2 -wa:translate-x-1/2 wa:shadow-sm",
                  t ? "wa:bg-[#4faa48]" : "wa:bg-[#8696a0]"
                ),
                style: { left: `${l * 100}%` }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ c("span", { className: $(
        "wa:text-[11px] wa:leading-none",
        t ? "wa:text-[#4d8b4a]" : "wa:text-[#8696a0]"
      ), children: Nm(w) })
    ] })
  ] });
}
function Pm({ mediaId: e, messageType: t, caption: n, filename: r, isOutbound: a, instance: o }) {
  const i = jt(), s = Fe(), [u, d] = C(null), [f, l] = C(!0), [m, p] = C(!1), w = B(() => {
    p(!0);
  }, []);
  return I(() => {
    if (!o) {
      l(!1);
      return;
    }
    let h = !1;
    return i.getMediaUrl(o, e).then((g) => {
      h || (d(g), l(!1));
    }).catch(() => {
      h || (p(!0), l(!1));
    }), () => {
      h = !0;
    };
  }, [e, o, i]), f ? /* @__PURE__ */ c("div", { className: "wa:w-64 wa:h-48 wa:rounded wa:flex wa:items-center wa:justify-center", children: /* @__PURE__ */ c(Ne, { className: "wa:w-full wa:h-full" }) }) : m || !u ? /* @__PURE__ */ c("div", { className: $(
    "wa:bg-muted wa:rounded wa:flex wa:items-center wa:justify-center",
    t === "audio" ? "wa:min-w-[240px] wa:h-12 wa:px-4" : "wa:w-64 wa:h-48"
  ), children: /* @__PURE__ */ c("p", { className: $("wa:text-sm", a ? "wa:text-green-100" : "wa:text-muted-foreground"), children: s("mediaMessage.unavailable") }) }) : /* @__PURE__ */ c("div", { children: [
    t === "image" && /* @__PURE__ */ c(
      "img",
      {
        src: u,
        alt: n || "Image",
        className: "wa:rounded wa:max-w-full wa:h-auto wa:max-h-96",
        onError: w
      }
    ),
    t === "video" && /* @__PURE__ */ c(
      "video",
      {
        src: u,
        controls: !0,
        className: "wa:rounded wa:max-w-full wa:h-auto wa:max-h-96",
        onError: w
      }
    ),
    t === "audio" && /* @__PURE__ */ c(Us, { src: u, isOutbound: a, onError: w }),
    t === "document" && /* @__PURE__ */ c(
      "a",
      {
        href: u,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "wa:flex wa:items-center wa:gap-2 wa:text-sm wa:underline wa:cursor-pointer hover:wa:opacity-80 wa:transition-opacity wa:text-[#00a884]",
        children: [
          /* @__PURE__ */ c(kd, { className: "wa:h-4 wa:w-4" }),
          r || s("mediaMessage.downloadDocument")
        ]
      }
    )
  ] });
}
var Em = pa[" useId ".trim().toString()] || (() => {
}), km = 0;
function Rt(e) {
  const [t, n] = C(Em());
  return Ee(() => {
    n((r) => r ?? String(km++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Tm = pa[" useInsertionEffect ".trim().toString()] || Ee;
function Ma({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [a, o, i] = Am({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, u = s ? e : a;
  {
    const f = D(e !== void 0);
    I(() => {
      const l = f.current;
      l !== s && console.warn(
        `${r} is changing from ${l ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = s;
    }, [s, r]);
  }
  const d = B(
    (f) => {
      var l;
      if (s) {
        const m = Dm(f) ? f(e) : f;
        m !== e && ((l = i.current) == null || l.call(i, m));
      } else
        o(f);
    },
    [s, e, o, i]
  );
  return [u, d];
}
function Am({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = C(e), a = D(n), o = D(t);
  return Tm(() => {
    o.current = t;
  }, [t]), I(() => {
    var i;
    a.current !== n && ((i = o.current) == null || i.call(o, n), a.current = n);
  }, [n, a]), [n, r, o];
}
function Dm(e) {
  return typeof e == "function";
}
function Rm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ge(e);
  I(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Om = "DismissableLayer", Yr = "dismissableLayer.update", Im = "dismissableLayer.pointerDownOutside", Lm = "dismissableLayer.focusOutside", Fo, zs = Ge({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Na = T(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: o,
      onInteractOutside: i,
      onDismiss: s,
      ...u
    } = e, d = Le(zs), [f, l] = C(null), m = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = C({}), w = se(t, (M) => l(M)), h = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), v = h.indexOf(g), y = f ? h.indexOf(f) : -1, x = d.layersWithOutsidePointerEventsDisabled.size > 0, _ = y >= v, P = Wm((M) => {
      const b = M.target, N = [...d.branches].some((S) => S.contains(b));
      !_ || N || (a == null || a(M), i == null || i(M), M.defaultPrevented || s == null || s());
    }, m), k = Um((M) => {
      const b = M.target;
      [...d.branches].some((S) => S.contains(b)) || (o == null || o(M), i == null || i(M), M.defaultPrevented || s == null || s());
    }, m);
    return Rm((M) => {
      y === d.layers.size - 1 && (r == null || r(M), !M.defaultPrevented && s && (M.preventDefault(), s()));
    }, m), I(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Fo = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), $o(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Fo);
        };
    }, [f, m, n, d]), I(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), $o());
    }, [f, d]), I(() => {
      const M = () => p({});
      return document.addEventListener(Yr, M), () => document.removeEventListener(Yr, M);
    }, []), /* @__PURE__ */ c(
      K.div,
      {
        ...u,
        ref: w,
        style: {
          pointerEvents: x ? _ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: U(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: U(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: U(
          e.onPointerDownCapture,
          P.onPointerDownCapture
        )
      }
    );
  }
);
Na.displayName = Om;
var Fm = "DismissableLayerBranch", $m = T((e, t) => {
  const n = Le(zs), r = D(null), a = se(t, r);
  return I(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ c(K.div, { ...e, ref: a });
});
$m.displayName = Fm;
function Wm(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ge(e), r = D(!1), a = D(() => {
  });
  return I(() => {
    const o = (s) => {
      if (s.target && !r.current) {
        let u = function() {
          Bs(
            Im,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = u, t.addEventListener("click", a.current, { once: !0 })) : u();
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
function Um(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ge(e), r = D(!1);
  return I(() => {
    const a = (o) => {
      o.target && !r.current && Bs(Lm, n, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function $o() {
  const e = new CustomEvent(Yr);
  document.dispatchEvent(e);
}
function Bs(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), r ? ws(a, o) : a.dispatchEvent(o);
}
var Mr = "focusScope.autoFocusOnMount", Nr = "focusScope.autoFocusOnUnmount", Wo = { bubbles: !1, cancelable: !0 }, zm = "FocusScope", Ca = T((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: o,
    ...i
  } = e, [s, u] = C(null), d = ge(a), f = ge(o), l = D(null), m = se(t, (h) => u(h)), p = D({
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
      let h = function(x) {
        if (p.paused || !s) return;
        const _ = x.target;
        s.contains(_) ? l.current = _ : ct(l.current, { select: !0 });
      }, g = function(x) {
        if (p.paused || !s) return;
        const _ = x.relatedTarget;
        _ !== null && (s.contains(_) || ct(l.current, { select: !0 }));
      }, v = function(x) {
        if (document.activeElement === document.body)
          for (const P of x)
            P.removedNodes.length > 0 && ct(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const y = new MutationObserver(v);
      return s && y.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), y.disconnect();
      };
    }
  }, [r, s, p.paused]), I(() => {
    if (s) {
      zo.add(p);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const v = new CustomEvent(Mr, Wo);
        s.addEventListener(Mr, d), s.dispatchEvent(v), v.defaultPrevented || (Bm(Gm(Vs(s)), { select: !0 }), document.activeElement === h && ct(s));
      }
      return () => {
        s.removeEventListener(Mr, d), setTimeout(() => {
          const v = new CustomEvent(Nr, Wo);
          s.addEventListener(Nr, f), s.dispatchEvent(v), v.defaultPrevented || ct(h ?? document.body, { select: !0 }), s.removeEventListener(Nr, f), zo.remove(p);
        }, 0);
      };
    }
  }, [s, d, f, p]);
  const w = B(
    (h) => {
      if (!n && !r || p.paused) return;
      const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, v = document.activeElement;
      if (g && v) {
        const y = h.currentTarget, [x, _] = Vm(y);
        x && _ ? !h.shiftKey && v === _ ? (h.preventDefault(), n && ct(x, { select: !0 })) : h.shiftKey && v === x && (h.preventDefault(), n && ct(_, { select: !0 })) : v === y && h.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ c(K.div, { tabIndex: -1, ...i, ref: m, onKeyDown: w });
});
Ca.displayName = zm;
function Bm(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ct(r, { select: t }), document.activeElement !== n) return;
}
function Vm(e) {
  const t = Vs(e), n = Uo(t, e), r = Uo(t.reverse(), e);
  return [n, r];
}
function Vs(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Uo(e, t) {
  for (const n of e)
    if (!jm(n, { upTo: t })) return n;
}
function jm(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Hm(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ct(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Hm(e) && t && e.select();
  }
}
var zo = Ym();
function Ym() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Bo(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Bo(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Bo(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Gm(e) {
  return e.filter((t) => t.tagName !== "A");
}
var qm = "Portal", Pa = T((e, t) => {
  var s;
  const { container: n, ...r } = e, [a, o] = C(!1);
  Ee(() => o(!0), []);
  const i = n || a && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? Qe.createPortal(/* @__PURE__ */ c(K.div, { ...r, ref: t }), i) : null;
});
Pa.displayName = qm;
var Cr = 0;
function js() {
  I(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Vo()), document.body.insertAdjacentElement("beforeend", e[1] ?? Vo()), Cr++, () => {
      Cr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Cr--;
    };
  }, []);
}
function Vo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Be = function() {
  return Be = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Be.apply(this, arguments);
};
function Hs(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Km(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var Dn = "right-scroll-bar-position", Rn = "width-before-scroll-bar", Xm = "with-scroll-bars-hidden", Jm = "--removed-body-scroll-bar-size";
function Pr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Qm(e, t) {
  var n = C(function() {
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
var Zm = typeof window < "u" ? at : I, jo = /* @__PURE__ */ new WeakMap();
function ep(e, t) {
  var n = Qm(null, function(r) {
    return e.forEach(function(a) {
      return Pr(a, r);
    });
  });
  return Zm(function() {
    var r = jo.get(n);
    if (r) {
      var a = new Set(r), o = new Set(e), i = n.current;
      a.forEach(function(s) {
        o.has(s) || Pr(s, null);
      }), o.forEach(function(s) {
        a.has(s) || Pr(s, i);
      });
    }
    jo.set(n, e);
  }, [e]), n;
}
function tp(e) {
  return e;
}
function np(e, t) {
  t === void 0 && (t = tp);
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
      var u = function() {
        var f = i;
        i = [], f.forEach(o);
      }, d = function() {
        return Promise.resolve().then(u);
      };
      d(), n = {
        push: function(f) {
          i.push(f), d();
        },
        filter: function(f) {
          return i = i.filter(f), n;
        }
      };
    }
  };
  return a;
}
function rp(e) {
  e === void 0 && (e = {});
  var t = np(null);
  return t.options = Be({ async: !0, ssr: !1 }, e), t;
}
var Ys = function(e) {
  var t = e.sideCar, n = Hs(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return oe(r, Be({}, n));
};
Ys.isSideCarExport = !0;
function ap(e, t) {
  return e.useMedium(t), Ys;
}
var Gs = rp(), Er = function() {
}, ir = T(function(e, t) {
  var n = D(null), r = C({
    onScrollCapture: Er,
    onWheelCapture: Er,
    onTouchMoveCapture: Er
  }), a = r[0], o = r[1], i = e.forwardProps, s = e.children, u = e.className, d = e.removeScrollBar, f = e.enabled, l = e.shards, m = e.sideCar, p = e.noRelative, w = e.noIsolation, h = e.inert, g = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, x = e.gapMode, _ = Hs(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = m, k = ep([n, t]), M = Be(Be({}, _), a);
  return oe(
    Z,
    null,
    f && oe(P, { sideCar: Gs, removeScrollBar: d, shards: l, noRelative: p, noIsolation: w, inert: h, setCallbacks: o, allowPinchZoom: !!g, lockRef: n, gapMode: x }),
    i ? Vt(He.only(s), Be(Be({}, M), { ref: k })) : oe(y, Be({}, M, { className: u, ref: k }), s)
  );
});
ir.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ir.classNames = {
  fullWidth: Rn,
  zeroRight: Dn
};
var op = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ip() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = op();
  return t && e.setAttribute("nonce", t), e;
}
function sp(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function cp(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var lp = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ip()) && (sp(t, n), cp(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, up = function() {
  var e = lp();
  return function(t, n) {
    I(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, qs = function() {
  var e = up(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, dp = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, kr = function(e) {
  return parseInt(e || "", 10) || 0;
}, fp = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [kr(n), kr(r), kr(a)];
}, mp = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return dp;
  var t = fp(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, pp = qs(), Ot = "data-scroll-locked", hp = function(e, t, n, r) {
  var a = e.left, o = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Xm, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Ot, `] {
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
  
  .`).concat(Dn, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Rn, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Dn, " .").concat(Dn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Rn, " .").concat(Rn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Ot, `] {
    `).concat(Jm, ": ").concat(s, `px;
  }
`);
}, Ho = function() {
  var e = parseInt(document.body.getAttribute(Ot) || "0", 10);
  return isFinite(e) ? e : 0;
}, wp = function() {
  I(function() {
    return document.body.setAttribute(Ot, (Ho() + 1).toString()), function() {
      var e = Ho() - 1;
      e <= 0 ? document.body.removeAttribute(Ot) : document.body.setAttribute(Ot, e.toString());
    };
  }, []);
}, gp = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  wp();
  var o = le(function() {
    return mp(a);
  }, [a]);
  return oe(pp, { styles: hp(o, !t, a, n ? "" : "!important") });
}, Gr = !1;
if (typeof window < "u")
  try {
    var Cn = Object.defineProperty({}, "passive", {
      get: function() {
        return Gr = !0, !0;
      }
    });
    window.addEventListener("test", Cn, Cn), window.removeEventListener("test", Cn, Cn);
  } catch {
    Gr = !1;
  }
var Et = Gr ? { passive: !1 } : !1, vp = function(e) {
  return e.tagName === "TEXTAREA";
}, Ks = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !vp(e) && n[t] === "visible")
  );
}, yp = function(e) {
  return Ks(e, "overflowY");
}, bp = function(e) {
  return Ks(e, "overflowX");
}, Yo = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = Xs(e, r);
    if (a) {
      var o = Js(e, r), i = o[1], s = o[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, xp = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, _p = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Xs = function(e, t) {
  return e === "v" ? yp(t) : bp(t);
}, Js = function(e, t) {
  return e === "v" ? xp(t) : _p(t);
}, Sp = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Mp = function(e, t, n, r, a) {
  var o = Sp(e, window.getComputedStyle(t).direction), i = o * r, s = n.target, u = t.contains(s), d = !1, f = i > 0, l = 0, m = 0;
  do {
    if (!s)
      break;
    var p = Js(e, s), w = p[0], h = p[1], g = p[2], v = h - g - o * w;
    (w || v) && Xs(e, s) && (l += v, m += w);
    var y = s.parentNode;
    s = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !u && s !== document.body || // self content
    u && (t.contains(s) || t === s)
  );
  return (f && Math.abs(l) < 1 || !f && Math.abs(m) < 1) && (d = !0), d;
}, Pn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Go = function(e) {
  return [e.deltaX, e.deltaY];
}, qo = function(e) {
  return e && "current" in e ? e.current : e;
}, Np = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Cp = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Pp = 0, kt = [];
function Ep(e) {
  var t = D([]), n = D([0, 0]), r = D(), a = C(Pp++)[0], o = C(qs)[0], i = D(e);
  I(function() {
    i.current = e;
  }, [e]), I(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var h = Km([e.lockRef.current], (e.shards || []).map(qo), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = B(function(h, g) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !i.current.allowPinchZoom;
    var v = Pn(h), y = n.current, x = "deltaX" in h ? h.deltaX : y[0] - v[0], _ = "deltaY" in h ? h.deltaY : y[1] - v[1], P, k = h.target, M = Math.abs(x) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && M === "h" && k.type === "range")
      return !1;
    var b = Yo(M, k);
    if (!b)
      return !0;
    if (b ? P = M : (P = M === "v" ? "h" : "v", b = Yo(M, k)), !b)
      return !1;
    if (!r.current && "changedTouches" in h && (x || _) && (r.current = P), !P)
      return !0;
    var N = r.current || P;
    return Mp(N, g, h, N === "h" ? x : _);
  }, []), u = B(function(h) {
    var g = h;
    if (!(!kt.length || kt[kt.length - 1] !== o)) {
      var v = "deltaY" in g ? Go(g) : Pn(g), y = t.current.filter(function(P) {
        return P.name === g.type && (P.target === g.target || g.target === P.shadowParent) && Np(P.delta, v);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var x = (i.current.shards || []).map(qo).filter(Boolean).filter(function(P) {
          return P.contains(g.target);
        }), _ = x.length > 0 ? s(g, x[0]) : !i.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = B(function(h, g, v, y) {
    var x = { name: h, delta: g, target: v, should: y, shadowParent: kp(v) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== x;
      });
    }, 1);
  }, []), f = B(function(h) {
    n.current = Pn(h), r.current = void 0;
  }, []), l = B(function(h) {
    d(h.type, Go(h), h.target, s(h, e.lockRef.current));
  }, []), m = B(function(h) {
    d(h.type, Pn(h), h.target, s(h, e.lockRef.current));
  }, []);
  I(function() {
    return kt.push(o), e.setCallbacks({
      onScrollCapture: l,
      onWheelCapture: l,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", u, Et), document.addEventListener("touchmove", u, Et), document.addEventListener("touchstart", f, Et), function() {
      kt = kt.filter(function(h) {
        return h !== o;
      }), document.removeEventListener("wheel", u, Et), document.removeEventListener("touchmove", u, Et), document.removeEventListener("touchstart", f, Et);
    };
  }, []);
  var p = e.removeScrollBar, w = e.inert;
  return oe(
    Z,
    null,
    w ? oe(o, { styles: Cp(a) }) : null,
    p ? oe(gp, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function kp(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Tp = ap(Gs, Ep);
var Ea = T(function(e, t) {
  return oe(ir, Be({}, e, { ref: t, sideCar: Tp }));
});
Ea.classNames = ir.classNames;
var Ap = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Tt = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), kn = {}, Tr = 0, Qs = function(e) {
  return e && (e.host || Qs(e.parentNode));
}, Dp = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Qs(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Rp = function(e, t, n, r) {
  var a = Dp(t, Array.isArray(e) ? e : [e]);
  kn[n] || (kn[n] = /* @__PURE__ */ new WeakMap());
  var o = kn[n], i = [], s = /* @__PURE__ */ new Set(), u = new Set(a), d = function(l) {
    !l || s.has(l) || (s.add(l), d(l.parentNode));
  };
  a.forEach(d);
  var f = function(l) {
    !l || u.has(l) || Array.prototype.forEach.call(l.children, function(m) {
      if (s.has(m))
        f(m);
      else
        try {
          var p = m.getAttribute(r), w = p !== null && p !== "false", h = (Tt.get(m) || 0) + 1, g = (o.get(m) || 0) + 1;
          Tt.set(m, h), o.set(m, g), i.push(m), h === 1 && w && En.set(m, !0), g === 1 && m.setAttribute(n, "true"), w || m.setAttribute(r, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", m, v);
        }
    });
  };
  return f(t), s.clear(), Tr++, function() {
    i.forEach(function(l) {
      var m = Tt.get(l) - 1, p = o.get(l) - 1;
      Tt.set(l, m), o.set(l, p), m || (En.has(l) || l.removeAttribute(r), En.delete(l)), p || l.removeAttribute(n);
    }), Tr--, Tr || (Tt = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), kn = {});
  };
}, Zs = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = Ap(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live], script"))), Rp(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, sr = "Dialog", [ec] = ft(sr), [Op, $e] = ec(sr), tc = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: o,
    modal: i = !0
  } = e, s = D(null), u = D(null), [d, f] = Ma({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: sr
  });
  return /* @__PURE__ */ c(
    Op,
    {
      scope: t,
      triggerRef: s,
      contentRef: u,
      contentId: Rt(),
      titleId: Rt(),
      descriptionId: Rt(),
      open: d,
      onOpenChange: f,
      onOpenToggle: B(() => f((l) => !l), [f]),
      modal: i,
      children: n
    }
  );
};
tc.displayName = sr;
var nc = "DialogTrigger", Ip = T(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = $e(nc, n), o = se(t, a.triggerRef);
    return /* @__PURE__ */ c(
      K.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": Aa(a.open),
        ...r,
        ref: o,
        onClick: U(e.onClick, a.onOpenToggle)
      }
    );
  }
);
Ip.displayName = nc;
var ka = "DialogPortal", [Lp, rc] = ec(ka, {
  forceMount: void 0
}), ac = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: a } = e, o = $e(ka, t);
  return /* @__PURE__ */ c(Lp, { scope: t, forceMount: n, children: He.map(r, (i) => /* @__PURE__ */ c(Te, { present: n || o.open, children: /* @__PURE__ */ c(Pa, { asChild: !0, container: a, children: i }) })) });
};
ac.displayName = ka;
var Hn = "DialogOverlay", oc = T(
  (e, t) => {
    const n = rc(Hn, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = $e(Hn, e.__scopeDialog);
    return o.modal ? /* @__PURE__ */ c(Te, { present: r || o.open, children: /* @__PURE__ */ c($p, { ...a, ref: t }) }) : null;
  }
);
oc.displayName = Hn;
var Fp = /* @__PURE__ */ Wt("DialogOverlay.RemoveScroll"), $p = T(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = $e(Hn, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c(Ea, { as: Fp, allowPinchZoom: !0, shards: [a.contentRef], children: /* @__PURE__ */ c(
        K.div,
        {
          "data-state": Aa(a.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), yt = "DialogContent", ic = T(
  (e, t) => {
    const n = rc(yt, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = $e(yt, e.__scopeDialog);
    return /* @__PURE__ */ c(Te, { present: r || o.open, children: o.modal ? /* @__PURE__ */ c(Wp, { ...a, ref: t }) : /* @__PURE__ */ c(Up, { ...a, ref: t }) });
  }
);
ic.displayName = yt;
var Wp = T(
  (e, t) => {
    const n = $e(yt, e.__scopeDialog), r = D(null), a = se(t, n.contentRef, r);
    return I(() => {
      const o = r.current;
      if (o) return Zs(o);
    }, []), /* @__PURE__ */ c(
      sc,
      {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: U(e.onCloseAutoFocus, (o) => {
          var i;
          o.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: U(e.onPointerDownOutside, (o) => {
          const i = o.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && o.preventDefault();
        }),
        onFocusOutside: U(
          e.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), Up = T(
  (e, t) => {
    const n = $e(yt, e.__scopeDialog), r = D(!1), a = D(!1);
    return /* @__PURE__ */ c(
      sc,
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
          var u, d;
          (u = e.onInteractOutside) == null || u.call(e, o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (a.current = !0));
          const i = o.target;
          ((d = n.triggerRef.current) == null ? void 0 : d.contains(i)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && a.current && o.preventDefault();
        }
      }
    );
  }
), sc = T(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: o, ...i } = e, s = $e(yt, n), u = D(null), d = se(t, u);
    return js(), /* @__PURE__ */ c(Z, { children: [
      /* @__PURE__ */ c(
        Ca,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: a,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ c(
            Na,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Aa(s.open),
              ...i,
              ref: d,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c(Z, { children: [
        /* @__PURE__ */ c(zp, { titleId: s.titleId }),
        /* @__PURE__ */ c(Vp, { contentRef: u, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Ta = "DialogTitle", cc = T(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = $e(Ta, n);
    return /* @__PURE__ */ c(K.h2, { id: a.titleId, ...r, ref: t });
  }
);
cc.displayName = Ta;
var lc = "DialogDescription", uc = T(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = $e(lc, n);
    return /* @__PURE__ */ c(K.p, { id: a.descriptionId, ...r, ref: t });
  }
);
uc.displayName = lc;
var dc = "DialogClose", fc = T(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = $e(dc, n);
    return /* @__PURE__ */ c(
      K.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: U(e.onClick, () => a.onOpenChange(!1))
      }
    );
  }
);
fc.displayName = dc;
function Aa(e) {
  return e ? "open" : "closed";
}
var mc = "DialogTitleWarning", [kv, pc] = Hf(mc, {
  contentName: yt,
  titleName: Ta,
  docsSlug: "dialog"
}), zp = ({ titleId: e }) => {
  const t = pc(mc), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return I(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Bp = "DialogDescriptionWarning", Vp = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${pc(Bp).contentName}}.`;
  return I(() => {
    var o;
    const a = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
    t && a && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, jp = tc, Hp = ac, Yp = oc, Gp = ic, qp = cc, Kp = uc, Xp = fc;
function mn({
  ...e
}) {
  return /* @__PURE__ */ c(jp, { "data-slot": "dialog", ...e });
}
function Jp({
  ...e
}) {
  return /* @__PURE__ */ c(Hp, { "data-slot": "dialog-portal", ...e });
}
function Qp({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    Yp,
    {
      "data-slot": "dialog-overlay",
      className: $(
        "data-[state=open]:wa:animate-in data-[state=closed]:wa:animate-out data-[state=closed]:wa:fade-out-0 data-[state=open]:wa:fade-in-0 wa:fixed wa:inset-0 wa:z-50 wa:bg-black/50",
        e
      ),
      ...t
    }
  );
}
function pn({
  className: e,
  children: t,
  showCloseButton: n = !0,
  ...r
}) {
  return /* @__PURE__ */ c(Jp, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ c(Qp, {}),
    /* @__PURE__ */ c(
      Gp,
      {
        "data-slot": "dialog-content",
        className: $(
          "wa:bg-background data-[state=open]:wa:animate-in data-[state=closed]:wa:animate-out data-[state=closed]:wa:fade-out-0 data-[state=open]:wa:fade-in-0 data-[state=closed]:wa:zoom-out-95 data-[state=open]:wa:zoom-in-95 wa:fixed wa:top-[50%] wa:left-[50%] wa:z-50 wa:grid wa:w-full wa:max-w-[calc(100%-2rem)] wa:translate-x-[-50%] wa:translate-y-[-50%] wa:gap-4 wa:rounded-lg wa:border wa:p-6 wa:shadow-lg wa:duration-200 sm:wa:max-w-lg",
          e
        ),
        ...r,
        children: [
          t,
          n && /* @__PURE__ */ c(
            Xp,
            {
              "data-slot": "dialog-close",
              className: "wa:ring-offset-background focus:wa:ring-ring data-[state=open]:wa:bg-accent data-[state=open]:wa:text-muted-foreground wa:absolute wa:top-4 wa:right-4 wa:rounded-xs wa:opacity-70 wa:transition-opacity hover:wa:opacity-100 focus:wa:ring-2 focus:wa:ring-offset-2 focus:wa:outline-hidden disabled:wa:pointer-events-none [&_svg]:wa:pointer-events-none [&_svg]:wa:shrink-0 [&_svg:not([class*='size-'])]:wa:size-4",
              children: [
                /* @__PURE__ */ c(nr, {}),
                /* @__PURE__ */ c("span", { className: "wa:sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function hn({ className: e, ...t }) {
  return /* @__PURE__ */ c(
    "div",
    {
      "data-slot": "dialog-header",
      className: $("wa:flex wa:flex-col wa:gap-2 wa:text-center sm:wa:text-left", e),
      ...t
    }
  );
}
function Zp({ className: e, ...t }) {
  return /* @__PURE__ */ c(
    "div",
    {
      "data-slot": "dialog-footer",
      className: $(
        "wa:flex wa:flex-col-reverse wa:gap-2 sm:wa:flex-row sm:wa:justify-end",
        e
      ),
      ...t
    }
  );
}
function wn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    qp,
    {
      "data-slot": "dialog-title",
      className: $("wa:text-lg wa:leading-none wa:font-semibold", e),
      ...t
    }
  );
}
function gn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    Kp,
    {
      "data-slot": "dialog-description",
      className: $("wa:text-muted-foreground wa:text-sm", e),
      ...t
    }
  );
}
const eh = hs(
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
function an({
  className: e,
  variant: t,
  asChild: n = !1,
  ...r
}) {
  return /* @__PURE__ */ c(
    n ? ps : "span",
    {
      "data-slot": "badge",
      className: $(eh({ variant: t }), e),
      ...r
    }
  );
}
var th = "Separator", Ko = "horizontal", nh = ["horizontal", "vertical"], hc = T((e, t) => {
  const { decorative: n, orientation: r = Ko, ...a } = e, o = rh(r) ? r : Ko, s = n ? { role: "none" } : { "aria-orientation": o === "vertical" ? o : void 0, role: "separator" };
  return /* @__PURE__ */ c(
    K.div,
    {
      "data-orientation": o,
      ...s,
      ...a,
      ref: t
    }
  );
});
hc.displayName = th;
function rh(e) {
  return nh.includes(e);
}
var ah = hc;
function Da({
  className: e,
  orientation: t = "horizontal",
  decorative: n = !0,
  ...r
}) {
  return /* @__PURE__ */ c(
    ah,
    {
      "data-slot": "separator",
      decorative: n,
      orientation: t,
      className: $(
        "wa:bg-border wa:shrink-0 data-[orientation=horizontal]:wa:h-px data-[orientation=horizontal]:wa:w-full data-[orientation=vertical]:wa:h-full data-[orientation=vertical]:wa:w-px",
        e
      ),
      ...r
    }
  );
}
function oh(e) {
  var r, a;
  const t = [];
  let n = "POSITIONAL";
  if (!e.components)
    return { format: n, parameters: t };
  for (const o of e.components) {
    if (o.type === "HEADER" && o.format === "TEXT") {
      const i = ih(o);
      i.length > 0 && (t.push(...i.map((s) => ({ ...s, component: "HEADER" }))), (r = o.example) != null && r.headerTextNamedParams && (n = "NAMED"));
    }
    if (o.type === "BODY") {
      const i = sh(o);
      i.length > 0 && (t.push(...i.map((s) => ({ ...s, component: "BODY" }))), (a = o.example) != null && a.bodyTextNamedParams && (n = "NAMED"));
    }
    if (o.type === "BUTTONS") {
      const i = ch(o);
      i.length > 0 && t.push(...i.map((s) => ({ ...s, component: "BUTTON" })));
    }
  }
  return { format: n, parameters: t };
}
function ih(e) {
  const t = [];
  return e.example ? e.example.headerTextNamedParams ? e.example.headerTextNamedParams.map((n) => ({
    name: n.paramName,
    example: n.example
  })) : e.example.headerText ? e.example.headerText.map((n, r) => ({
    name: `header_param_${r + 1}`,
    example: n
  })) : t : t;
}
function sh(e) {
  const t = [];
  return e.example ? e.example.bodyTextNamedParams ? e.example.bodyTextNamedParams.map((n) => ({
    name: n.paramName,
    example: n.example
  })) : e.example.bodyText && e.example.bodyText.length > 0 ? e.example.bodyText[0].map((r, a) => ({
    name: `body_param_${a + 1}`,
    example: r
  })) : t : t;
}
function ch(e) {
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
function lh(e, t) {
  return e.format === "NAMED" ? t : e.parameters.map((n) => t[n.name] || "");
}
function Yn({ className: e, type: t, ...n }) {
  return /* @__PURE__ */ c(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: $(
        "file:wa:text-foreground placeholder:wa:text-muted-foreground selection:wa:bg-primary selection:wa:text-primary-foreground dark:wa:bg-input/30 wa:border-input wa:h-9 wa:w-full wa:min-w-0 wa:rounded-md wa:border wa:bg-transparent wa:px-3 wa:py-1 wa:text-base wa:shadow-xs wa:transition-[color,box-shadow] wa:outline-none file:wa:inline-flex file:wa:h-7 file:wa:border-0 file:wa:bg-transparent file:wa:text-sm file:wa:font-medium disabled:wa:pointer-events-none disabled:wa:cursor-not-allowed disabled:wa:opacity-50 md:wa:text-sm",
        "focus-visible:wa:border-ring focus-visible:wa:ring-ring/50 focus-visible:wa:ring-[3px]",
        "aria-invalid:wa:ring-destructive/20 dark:aria-invalid:wa:ring-destructive/40 aria-invalid:wa:border-destructive",
        e
      ),
      ...n
    }
  );
}
var uh = "Label", wc = T((e, t) => /* @__PURE__ */ c(
  K.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var a;
      n.target.closest("button, input, select, textarea") || ((a = e.onMouseDown) == null || a.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
wc.displayName = uh;
var dh = wc;
function On({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    dh,
    {
      "data-slot": "label",
      className: $(
        "wa:flex wa:items-center wa:gap-2 wa:text-sm wa:leading-none wa:font-medium wa:select-none group-data-[disabled=true]:wa:pointer-events-none group-data-[disabled=true]:wa:opacity-50 peer-disabled:wa:cursor-not-allowed peer-disabled:wa:opacity-50",
        e
      ),
      ...t
    }
  );
}
function fh({
  open: e,
  onOpenChange: t,
  template: n,
  parameterInfo: r,
  phoneNumber: a,
  onBack: o,
  onTemplateSent: i
}) {
  const s = Fe(), [u, d] = C({}), [f, l] = C(!1), [m, p] = C(null), w = (y, x) => {
    d((_) => ({
      ..._,
      [y]: x
    }));
  }, h = r.parameters.every(
    (y) => {
      var x;
      return (x = u[y.name]) == null ? void 0 : x.trim();
    }
  ), g = async () => {
    if (!h) {
      p(s("templateParameters.fillAllParameters"));
      return;
    }
    l(!0), p(null);
    try {
      lh(r, u), p(s("templateParameters.notSupported"));
    } catch (y) {
      console.error("Error sending template:", y), p(y instanceof Error ? y.message : s("templateParameters.notSupported"));
    } finally {
      l(!1);
    }
  }, v = (y) => y.replace(/_/g, " ").replace(/\b\w/g, (x) => x.toUpperCase()).replace(/Param (\d+)/, "Parameter $1").replace(/Button (\d+) Parameter (\d+)/, "Button $1 URL Parameter $2");
  return /* @__PURE__ */ c(mn, { open: e, onOpenChange: t, children: /* @__PURE__ */ c(pn, { className: "sm:wa:max-w-[500px]", children: [
    /* @__PURE__ */ c(hn, { children: /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:gap-2", children: [
      /* @__PURE__ */ c(
        ce,
        {
          variant: "ghost",
          size: "icon",
          onClick: o,
          className: "wa:h-8 wa:w-8",
          children: /* @__PURE__ */ c(Br, { className: "wa:h-4 wa:w-4" })
        }
      ),
      /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ c(wn, { children: s("templateParameters.title") }),
        /* @__PURE__ */ c(gn, { children: s("templateParameters.description", { templateName: n.name }) })
      ] })
    ] }) }),
    m && /* @__PURE__ */ c("div", { className: "wa:p-3 wa:bg-red-50 wa:border wa:border-red-200 wa:rounded-lg wa:text-sm wa:text-red-800", children: m }),
    /* @__PURE__ */ c(fn, { className: "wa:max-h-[400px] wa:pr-4", children: /* @__PURE__ */ c("div", { className: "wa:space-y-4", children: r.parameters.map((y) => /* @__PURE__ */ c("div", { className: "wa:space-y-2", children: [
      /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:gap-2", children: [
        /* @__PURE__ */ c(On, { htmlFor: y.name, className: "wa:text-[#111b21]", children: v(y.name) }),
        /* @__PURE__ */ c(
          an,
          {
            variant: "secondary",
            className: "wa:text-xs wa:bg-[#f0f2f5] wa:text-[#667781]",
            children: y.component
          }
        )
      ] }),
      /* @__PURE__ */ c(
        Yn,
        {
          id: y.name,
          value: u[y.name] || "",
          onChange: (x) => w(y.name, x.target.value),
          placeholder: y.example || `Enter ${v(y.name)}`,
          className: "wa:bg-white wa:border-[#d1d7db] focus-visible:wa:ring-[#00a884]"
        }
      ),
      y.example && /* @__PURE__ */ c("p", { className: "wa:text-xs wa:text-[#667781]", children: s("templateParameters.example", { example: y.example || "" }) })
    ] }, y.name)) }) }),
    /* @__PURE__ */ c(Da, {}),
    /* @__PURE__ */ c("div", { className: "wa:flex wa:justify-between wa:gap-2", children: [
      /* @__PURE__ */ c(ce, { variant: "outline", onClick: o, children: s("templateParameters.back") }),
      /* @__PURE__ */ c(
        ce,
        {
          onClick: g,
          disabled: !h || f,
          className: "wa:bg-[#00a884] hover:wa:bg-[#008f6f]",
          children: f ? /* @__PURE__ */ c(lt, { className: "wa:h-4 wa:w-4 wa:animate-spin" }) : /* @__PURE__ */ c(Z, { children: [
            /* @__PURE__ */ c(dn, { className: "wa:h-4 wa:w-4 wa:mr-1" }),
            s("templateParameters.sendTemplate")
          ] })
        }
      )
    ] })
  ] }) });
}
function mh({ open: e, onOpenChange: t, phoneNumber: n, onTemplateSent: r }) {
  const a = Fe(), [o, i] = C([]), [s, u] = C(!1), [d, f] = C(null), [l, m] = C(null), [p, w] = C(!1), [h, g] = C(null), [v, y] = C(null);
  I(() => {
    e && x();
  }, [e]);
  const x = async () => {
    u(!0), m(null);
    try {
      m(a("templateSelector.notSupported")), i([]);
    } catch (N) {
      console.error("Error fetching templates:", N), m(N instanceof Error ? N.message : a("templateSelector.notSupported"));
    } finally {
      u(!1);
    }
  }, _ = (N) => {
    const S = oh(N);
    if (S.parameters.length > 0) {
      g(N), y(S), w(!0);
      return;
    }
    P(N);
  }, P = async (N) => {
    f(N.id), m(null);
    try {
      m(a("templateSelector.notSupported"));
    } catch (S) {
      console.error("Error sending template:", S), m(S instanceof Error ? S.message : a("templateSelector.notSupported"));
    } finally {
      f(null);
    }
  }, k = () => {
    w(!1), g(null), y(null);
  }, M = () => {
    w(!1), g(null), y(null), t(!1), r == null || r();
  }, b = (N) => {
    switch (N) {
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
  return /* @__PURE__ */ c(Z, { children: [
    /* @__PURE__ */ c(mn, { open: e, onOpenChange: t, children: /* @__PURE__ */ c(pn, { className: "sm:wa:max-w-[500px]", children: [
      /* @__PURE__ */ c(hn, { children: [
        /* @__PURE__ */ c(wn, { children: a("templateSelector.title") }),
        /* @__PURE__ */ c(gn, { children: a("templateSelector.description", { phoneNumber: n }) })
      ] }),
      l && /* @__PURE__ */ c("div", { className: "wa:p-3 wa:bg-red-50 wa:border wa:border-red-200 wa:rounded-lg wa:text-sm wa:text-red-800", children: l }),
      s ? /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:justify-center wa:py-8", children: /* @__PURE__ */ c(lt, { className: "wa:h-8 wa:w-8 wa:animate-spin wa:text-[#00a884]" }) }) : o.length === 0 ? /* @__PURE__ */ c("div", { className: "wa:py-8 wa:text-center wa:text-muted-foreground", children: a("templateSelector.noTemplates") }) : /* @__PURE__ */ c(fn, { className: "wa:h-[400px] wa:pr-4", children: /* @__PURE__ */ c("div", { className: "wa:space-y-3", children: o.map((N) => /* @__PURE__ */ c(
        "div",
        {
          className: "wa:p-4 wa:border wa:border-[#d1d7db] wa:rounded-lg hover:wa:bg-[#f0f2f5] wa:transition-colors",
          children: /* @__PURE__ */ c("div", { className: "wa:flex wa:items-start wa:justify-between wa:gap-3 wa:mb-2", children: [
            /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0", children: [
              /* @__PURE__ */ c("h3", { className: "wa:font-medium wa:text-[#111b21] wa:truncate", children: N.name }),
              /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:gap-2 wa:mt-1", children: [
                /* @__PURE__ */ c(an, { variant: "secondary", className: b(N.category), children: N.category }),
                /* @__PURE__ */ c("span", { className: "wa:text-xs wa:text-[#667781]", children: N.language })
              ] })
            ] }),
            /* @__PURE__ */ c(
              ce,
              {
                onClick: () => _(N),
                disabled: d !== null,
                size: "sm",
                className: "wa:bg-[#00a884] hover:wa:bg-[#008f6f]",
                children: d === N.id ? /* @__PURE__ */ c(lt, { className: "wa:h-4 wa:w-4 wa:animate-spin" }) : /* @__PURE__ */ c(Z, { children: [
                  /* @__PURE__ */ c(dn, { className: "wa:h-4 wa:w-4 wa:mr-1" }),
                  a("templateSelector.send")
                ] })
              }
            )
          ] })
        },
        N.id
      )) }) }),
      /* @__PURE__ */ c(Da, {}),
      /* @__PURE__ */ c("div", { className: "wa:flex wa:justify-end wa:gap-2", children: /* @__PURE__ */ c(ce, { variant: "outline", onClick: () => t(!1), children: a("templateSelector.cancel") }) })
    ] }) }),
    h && v && /* @__PURE__ */ c(
      fh,
      {
        open: p,
        onOpenChange: w,
        template: h,
        parameterInfo: v,
        phoneNumber: n,
        onBack: k,
        onTemplateSent: M
      }
    )
  ] });
}
function ph({ className: e, ...t }) {
  return /* @__PURE__ */ c(
    "textarea",
    {
      "data-slot": "textarea",
      className: $(
        "wa:border-input placeholder:wa:text-muted-foreground focus-visible:wa:border-ring focus-visible:wa:ring-ring/50 aria-invalid:wa:ring-destructive/20 dark:aria-invalid:wa:ring-destructive/40 aria-invalid:wa:border-destructive dark:wa:bg-input/30 wa:flex wa:field-sizing-content wa:min-h-16 wa:w-full wa:rounded-md wa:border wa:bg-transparent wa:px-3 wa:py-2 wa:text-base wa:shadow-xs wa:transition-[color,box-shadow] wa:outline-none focus-visible:wa:ring-[3px] disabled:wa:cursor-not-allowed disabled:wa:opacity-50 md:wa:text-sm",
        e
      ),
      ...t
    }
  );
}
function hh({
  open: e,
  onOpenChange: t,
  conversationId: n,
  phoneNumber: r,
  onMessageSent: a,
  instance: o
}) {
  const i = jt(), s = Fe(), [u, d] = C(""), [f, l] = C(""), [m, p] = C([
    { id: "button_1", title: "" }
  ]), [w, h] = C(!1), [g, v] = C(null), y = () => {
    m.length < 3 && p([
      ...m,
      { id: `button_${m.length + 1}`, title: "" }
    ]);
  }, x = (b) => {
    m.length > 1 && p(m.filter((N, S) => S !== b));
  }, _ = (b, N) => {
    if (N.length <= 20) {
      const S = [...m];
      S[b].title = N, p(S);
    }
  }, P = () => !(!f.trim() || m.length === 0 || m.some((b) => !b.title.trim())), k = () => {
    d(""), l(""), p([{ id: "button_1", title: "" }]), v(null);
  }, M = async () => {
    if (!P()) {
      v(s("interactiveDialog.validationError"));
      return;
    }
    if (!n || !r) {
      v(s("interactiveDialog.noConversation"));
      return;
    }
    if (!o) {
      v(s("interactiveDialog.noInstance"));
      return;
    }
    h(!0), v(null);
    try {
      await i.sendButtons(o, {
        to: r,
        body: f.trim(),
        header: u.trim() || void 0,
        buttons: m.map((b) => ({
          id: b.id,
          title: b.title.trim()
        }))
      }), k(), t(!1), a == null || a();
    } catch (b) {
      console.error("Error sending interactive message:", b), v(b instanceof Error ? b.message : s("interactiveDialog.validationError"));
    } finally {
      h(!1);
    }
  };
  return /* @__PURE__ */ c(mn, { open: e, onOpenChange: (b) => {
    t(b), b || k();
  }, children: /* @__PURE__ */ c(pn, { className: "sm:wa:max-w-[500px]", children: [
    /* @__PURE__ */ c(hn, { children: [
      /* @__PURE__ */ c(wn, { children: s("interactiveDialog.title") }),
      /* @__PURE__ */ c(gn, { children: s("interactiveDialog.description") })
    ] }),
    g && /* @__PURE__ */ c("div", { className: "wa:p-3 wa:bg-red-50 wa:border wa:border-red-200 wa:rounded-lg wa:text-sm wa:text-red-800", children: g }),
    /* @__PURE__ */ c("div", { className: "wa:space-y-4", children: [
      /* @__PURE__ */ c("div", { className: "wa:space-y-2", children: [
        /* @__PURE__ */ c(On, { htmlFor: "header", className: "wa:text-[#111b21]", children: s("interactiveDialog.headerLabel") }),
        /* @__PURE__ */ c(
          Yn,
          {
            id: "header",
            value: u,
            onChange: (b) => d(b.target.value),
            placeholder: s("interactiveDialog.headerPlaceholder"),
            className: "wa:bg-white wa:border-[#d1d7db] focus-visible:wa:ring-[#00a884]"
          }
        )
      ] }),
      /* @__PURE__ */ c("div", { className: "wa:space-y-2", children: [
        /* @__PURE__ */ c(On, { htmlFor: "body", className: "wa:text-[#111b21]", children: [
          s("interactiveDialog.bodyLabel"),
          " ",
          /* @__PURE__ */ c("span", { className: "wa:text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ c(
          ph,
          {
            id: "body",
            value: f,
            onChange: (b) => l(b.target.value),
            placeholder: s("interactiveDialog.bodyPlaceholder"),
            className: "wa:bg-white wa:border-[#d1d7db] focus-visible:wa:ring-[#00a884] wa:min-h-[100px]"
          }
        )
      ] }),
      /* @__PURE__ */ c("div", { className: "wa:space-y-2", children: [
        /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:justify-between", children: [
          /* @__PURE__ */ c(On, { className: "wa:text-[#111b21]", children: [
            s("interactiveDialog.buttonsLabel"),
            " ",
            /* @__PURE__ */ c("span", { className: "wa:text-red-500", children: "*" })
          ] }),
          /* @__PURE__ */ c(
            ce,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: y,
              disabled: m.length >= 3,
              className: "wa:h-8 wa:text-[#00a884] hover:wa:text-[#008f6f] hover:wa:bg-[#f0f2f5]",
              children: [
                /* @__PURE__ */ c(Hd, { className: "wa:h-4 wa:w-4 wa:mr-1" }),
                s("interactiveDialog.addButton")
              ]
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "wa:space-y-2", children: m.map((b, N) => /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:gap-2", children: [
          /* @__PURE__ */ c(
            Yn,
            {
              value: b.title,
              onChange: (S) => _(N, S.target.value),
              placeholder: s("interactiveDialog.buttonPlaceholder", { index: String(N + 1) }),
              className: "wa:bg-white wa:border-[#d1d7db] focus-visible:wa:ring-[#00a884]",
              maxLength: 20
            }
          ),
          /* @__PURE__ */ c("span", { className: "wa:text-xs wa:text-[#667781] wa:min-w-[3rem]", children: [
            b.title.length,
            "/20"
          ] }),
          m.length > 1 && /* @__PURE__ */ c(
            ce,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              onClick: () => x(N),
              className: "wa:h-9 wa:w-9 wa:text-[#667781] hover:wa:text-red-600 hover:wa:bg-red-50",
              children: /* @__PURE__ */ c(nr, { className: "wa:h-4 wa:w-4" })
            }
          )
        ] }, b.id)) }),
        m.length < 3 && /* @__PURE__ */ c("p", { className: "wa:text-xs wa:text-[#667781]", children: s("interactiveDialog.moreButtons", { count: String(3 - m.length) }) })
      ] })
    ] }),
    /* @__PURE__ */ c(Da, {}),
    /* @__PURE__ */ c("div", { className: "wa:flex wa:justify-between wa:gap-2", children: [
      /* @__PURE__ */ c(ce, { variant: "outline", onClick: () => t(!1), children: s("interactiveDialog.cancel") }),
      /* @__PURE__ */ c(
        ce,
        {
          onClick: M,
          disabled: !P() || w,
          className: "wa:bg-[#00a884] hover:wa:bg-[#008f6f]",
          children: w ? /* @__PURE__ */ c(lt, { className: "wa:h-4 wa:w-4 wa:animate-spin" }) : /* @__PURE__ */ c(Z, { children: [
            /* @__PURE__ */ c(dn, { className: "wa:h-4 wa:w-4 wa:mr-1" }),
            s("interactiveDialog.send")
          ] })
        }
      )
    ] })
  ] }) });
}
function gc(e) {
  const t = e + "CollectionProvider", [n, r] = ft(t), [a, o] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (h) => {
    const { scope: g, children: v } = h, y = Qe.useRef(null), x = Qe.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c(a, { scope: g, itemMap: x, collectionRef: y, children: v });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", u = /* @__PURE__ */ Wt(s), d = Qe.forwardRef(
    (h, g) => {
      const { scope: v, children: y } = h, x = o(s, v), _ = se(g, x.collectionRef);
      return /* @__PURE__ */ c(u, { ref: _, children: y });
    }
  );
  d.displayName = s;
  const f = e + "CollectionItemSlot", l = "data-radix-collection-item", m = /* @__PURE__ */ Wt(f), p = Qe.forwardRef(
    (h, g) => {
      const { scope: v, children: y, ...x } = h, _ = Qe.useRef(null), P = se(g, _), k = o(f, v);
      return Qe.useEffect(() => (k.itemMap.set(_, { ref: _, ...x }), () => void k.itemMap.delete(_))), /* @__PURE__ */ c(m, { [l]: "", ref: P, children: y });
    }
  );
  p.displayName = f;
  function w(h) {
    const g = o(e + "CollectionConsumer", h);
    return Qe.useCallback(() => {
      const y = g.collectionRef.current;
      if (!y) return [];
      const x = Array.from(y.querySelectorAll(`[${l}]`));
      return Array.from(g.itemMap.values()).sort(
        (k, M) => x.indexOf(k.ref.current) - x.indexOf(M.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: i, Slot: d, ItemSlot: p },
    w,
    r
  ];
}
function wh(e) {
  const [t, n] = C(void 0);
  return Ee(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const o = a[0];
        let i, s;
        if ("borderBoxSize" in o) {
          const u = o.borderBoxSize, d = Array.isArray(u) ? u[0] : u;
          i = d.inlineSize, s = d.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        n({ width: i, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
const gh = ["top", "right", "bottom", "left"], ut = Math.min, _e = Math.max, Gn = Math.round, Tn = Math.floor, Ye = (e) => ({
  x: e,
  y: e
}), vh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function qr(e, t, n) {
  return _e(e, ut(t, n));
}
function nt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rt(e) {
  return e.split("-")[0];
}
function Gt(e) {
  return e.split("-")[1];
}
function Ra(e) {
  return e === "x" ? "y" : "x";
}
function Oa(e) {
  return e === "y" ? "height" : "width";
}
function je(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Ia(e) {
  return Ra(je(e));
}
function yh(e, t, n) {
  n === void 0 && (n = !1);
  const r = Gt(e), a = Ia(e), o = Oa(a);
  let i = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (i = qn(i)), [i, qn(i)];
}
function bh(e) {
  const t = qn(e);
  return [Kr(e), t, Kr(t)];
}
function Kr(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Xo = ["left", "right"], Jo = ["right", "left"], xh = ["top", "bottom"], _h = ["bottom", "top"];
function Sh(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Jo : Xo : t ? Xo : Jo;
    case "left":
    case "right":
      return t ? xh : _h;
    default:
      return [];
  }
}
function Mh(e, t, n, r) {
  const a = Gt(e);
  let o = Sh(rt(e), n === "start", r);
  return a && (o = o.map((i) => i + "-" + a), t && (o = o.concat(o.map(Kr)))), o;
}
function qn(e) {
  const t = rt(e);
  return vh[t] + e.slice(t.length);
}
function Nh(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function vc(e) {
  return typeof e != "number" ? Nh(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Kn(e) {
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
function Qo(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const o = je(t), i = Ia(t), s = Oa(i), u = rt(t), d = o === "y", f = r.x + r.width / 2 - a.width / 2, l = r.y + r.height / 2 - a.height / 2, m = r[s] / 2 - a[s] / 2;
  let p;
  switch (u) {
    case "top":
      p = {
        x: f,
        y: r.y - a.height
      };
      break;
    case "bottom":
      p = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: l
      };
      break;
    case "left":
      p = {
        x: r.x - a.width,
        y: l
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Gt(t)) {
    case "start":
      p[i] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      p[i] += m * (n && d ? -1 : 1);
      break;
  }
  return p;
}
async function Ch(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: a,
    platform: o,
    rects: i,
    elements: s,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: l = "floating",
    altBoundary: m = !1,
    padding: p = 0
  } = nt(t, e), w = vc(p), g = s[m ? l === "floating" ? "reference" : "floating" : l], v = Kn(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(g))) == null || n ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: u
  })), y = l === "floating" ? {
    x: r,
    y: a,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), _ = await (o.isElement == null ? void 0 : o.isElement(x)) ? await (o.getScale == null ? void 0 : o.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = Kn(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: y,
    offsetParent: x,
    strategy: u
  }) : y);
  return {
    top: (v.top - P.top + w.top) / _.y,
    bottom: (P.bottom - v.bottom + w.bottom) / _.y,
    left: (v.left - P.left + w.left) / _.x,
    right: (P.right - v.right + w.right) / _.x
  };
}
const Ph = 50, Eh = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: o = [],
    platform: i
  } = n, s = i.detectOverflow ? i : {
    ...i,
    detectOverflow: Ch
  }, u = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let d = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: f,
    y: l
  } = Qo(d, r, u), m = r, p = 0;
  const w = {};
  for (let h = 0; h < o.length; h++) {
    const g = o[h];
    if (!g)
      continue;
    const {
      name: v,
      fn: y
    } = g, {
      x,
      y: _,
      data: P,
      reset: k
    } = await y({
      x: f,
      y: l,
      initialPlacement: r,
      placement: m,
      strategy: a,
      middlewareData: w,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = x ?? f, l = _ ?? l, w[v] = {
      ...w[v],
      ...P
    }, k && p < Ph && (p++, typeof k == "object" && (k.placement && (m = k.placement), k.rects && (d = k.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : k.rects), {
      x: f,
      y: l
    } = Qo(d, m, u)), h = -1);
  }
  return {
    x: f,
    y: l,
    placement: m,
    strategy: a,
    middlewareData: w
  };
}, kh = (e) => ({
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
      middlewareData: u
    } = t, {
      element: d,
      padding: f = 0
    } = nt(e, t) || {};
    if (d == null)
      return {};
    const l = vc(f), m = {
      x: n,
      y: r
    }, p = Ia(a), w = Oa(p), h = await i.getDimensions(d), g = p === "y", v = g ? "top" : "left", y = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", _ = o.reference[w] + o.reference[p] - m[p] - o.floating[w], P = m[p] - o.reference[p], k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let M = k ? k[x] : 0;
    (!M || !await (i.isElement == null ? void 0 : i.isElement(k))) && (M = s.floating[x] || o.floating[w]);
    const b = _ / 2 - P / 2, N = M / 2 - h[w] / 2 - 1, S = ut(l[v], N), F = ut(l[y], N), V = S, z = M - h[w] - F, Y = M / 2 - h[w] / 2 + b, Q = qr(V, Y, z), W = !u.arrow && Gt(a) != null && Y !== Q && o.reference[w] / 2 - (Y < V ? S : F) - h[w] / 2 < 0, G = W ? Y < V ? Y - V : Y - z : 0;
    return {
      [p]: m[p] + G,
      data: {
        [p]: Q,
        centerOffset: Y - Q - G,
        ...W && {
          alignmentOffset: G
        }
      },
      reset: W
    };
  }
}), Th = function(e) {
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
        platform: u,
        elements: d
      } = t, {
        mainAxis: f = !0,
        crossAxis: l = !0,
        fallbackPlacements: m,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: h = !0,
        ...g
      } = nt(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const v = rt(a), y = je(s), x = rt(s) === s, _ = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), P = m || (x || !h ? [qn(s)] : bh(s)), k = w !== "none";
      !m && k && P.push(...Mh(s, h, w, _));
      const M = [s, ...P], b = await u.detectOverflow(t, g), N = [];
      let S = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (f && N.push(b[v]), l) {
        const Y = yh(a, i, _);
        N.push(b[Y[0]], b[Y[1]]);
      }
      if (S = [...S, {
        placement: a,
        overflows: N
      }], !N.every((Y) => Y <= 0)) {
        var F, V;
        const Y = (((F = o.flip) == null ? void 0 : F.index) || 0) + 1, Q = M[Y];
        if (Q && (!(l === "alignment" ? y !== je(Q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        S.every((E) => je(E.placement) === y ? E.overflows[0] > 0 : !0)))
          return {
            data: {
              index: Y,
              overflows: S
            },
            reset: {
              placement: Q
            }
          };
        let W = (V = S.filter((G) => G.overflows[0] <= 0).sort((G, E) => G.overflows[1] - E.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!W)
          switch (p) {
            case "bestFit": {
              var z;
              const G = (z = S.filter((E) => {
                if (k) {
                  const L = je(E.placement);
                  return L === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((E) => [E.placement, E.overflows.filter((L) => L > 0).reduce((L, X) => L + X, 0)]).sort((E, L) => E[1] - L[1])[0]) == null ? void 0 : z[0];
              G && (W = G);
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
function Zo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ei(e) {
  return gh.some((t) => e[t] >= 0);
}
const Ah = function(e) {
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
      } = nt(e, t);
      switch (a) {
        case "referenceHidden": {
          const i = await r.detectOverflow(t, {
            ...o,
            elementContext: "reference"
          }), s = Zo(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: ei(s)
            }
          };
        }
        case "escaped": {
          const i = await r.detectOverflow(t, {
            ...o,
            altBoundary: !0
          }), s = Zo(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: ei(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, yc = /* @__PURE__ */ new Set(["left", "top"]);
async function Dh(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), i = rt(n), s = Gt(n), u = je(n) === "y", d = yc.has(i) ? -1 : 1, f = o && u ? -1 : 1, l = nt(t, e);
  let {
    mainAxis: m,
    crossAxis: p,
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
  return s && typeof w == "number" && (p = s === "end" ? w * -1 : w), u ? {
    x: p * f,
    y: m * d
  } : {
    x: m * d,
    y: p * f
  };
}
const Rh = function(e) {
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
      } = t, u = await Dh(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: a + u.x,
        y: o + u.y,
        data: {
          ...u,
          placement: i
        }
      };
    }
  };
}, Oh = function(e) {
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
        limiter: u = {
          fn: (v) => {
            let {
              x: y,
              y: x
            } = v;
            return {
              x: y,
              y: x
            };
          }
        },
        ...d
      } = nt(e, t), f = {
        x: n,
        y: r
      }, l = await o.detectOverflow(t, d), m = je(rt(a)), p = Ra(m);
      let w = f[p], h = f[m];
      if (i) {
        const v = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", x = w + l[v], _ = w - l[y];
        w = qr(x, w, _);
      }
      if (s) {
        const v = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", x = h + l[v], _ = h - l[y];
        h = qr(x, h, _);
      }
      const g = u.fn({
        ...t,
        [p]: w,
        [m]: h
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [p]: i,
            [m]: s
          }
        }
      };
    }
  };
}, Ih = function(e) {
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
        mainAxis: u = !0,
        crossAxis: d = !0
      } = nt(e, t), f = {
        x: n,
        y: r
      }, l = je(a), m = Ra(l);
      let p = f[m], w = f[l];
      const h = nt(s, t), g = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (u) {
        const x = m === "y" ? "height" : "width", _ = o.reference[m] - o.floating[x] + g.mainAxis, P = o.reference[m] + o.reference[x] - g.mainAxis;
        p < _ ? p = _ : p > P && (p = P);
      }
      if (d) {
        var v, y;
        const x = m === "y" ? "width" : "height", _ = yc.has(rt(a)), P = o.reference[l] - o.floating[x] + (_ && ((v = i.offset) == null ? void 0 : v[l]) || 0) + (_ ? 0 : g.crossAxis), k = o.reference[l] + o.reference[x] + (_ ? 0 : ((y = i.offset) == null ? void 0 : y[l]) || 0) - (_ ? g.crossAxis : 0);
        w < P ? w = P : w > k && (w = k);
      }
      return {
        [m]: p,
        [l]: w
      };
    }
  };
}, Lh = function(e) {
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
        apply: u = () => {
        },
        ...d
      } = nt(e, t), f = await i.detectOverflow(t, d), l = rt(a), m = Gt(a), p = je(a) === "y", {
        width: w,
        height: h
      } = o.floating;
      let g, v;
      l === "top" || l === "bottom" ? (g = l, v = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (v = l, g = m === "end" ? "top" : "bottom");
      const y = h - f.top - f.bottom, x = w - f.left - f.right, _ = ut(h - f[g], y), P = ut(w - f[v], x), k = !t.middlewareData.shift;
      let M = _, b = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (b = x), (r = t.middlewareData.shift) != null && r.enabled.y && (M = y), k && !m) {
        const S = _e(f.left, 0), F = _e(f.right, 0), V = _e(f.top, 0), z = _e(f.bottom, 0);
        p ? b = w - 2 * (S !== 0 || F !== 0 ? S + F : _e(f.left, f.right)) : M = h - 2 * (V !== 0 || z !== 0 ? V + z : _e(f.top, f.bottom));
      }
      await u({
        ...t,
        availableWidth: b,
        availableHeight: M
      });
      const N = await i.getDimensions(s.floating);
      return w !== N.width || h !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function cr() {
  return typeof window < "u";
}
function qt(e) {
  return bc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ke(e) {
  var t;
  return (t = (bc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function bc(e) {
  return cr() ? e instanceof Node || e instanceof Se(e).Node : !1;
}
function Oe(e) {
  return cr() ? e instanceof Element || e instanceof Se(e).Element : !1;
}
function ot(e) {
  return cr() ? e instanceof HTMLElement || e instanceof Se(e).HTMLElement : !1;
}
function ti(e) {
  return !cr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Se(e).ShadowRoot;
}
function vn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = Ie(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && a !== "inline" && a !== "contents";
}
function Fh(e) {
  return /^(table|td|th)$/.test(qt(e));
}
function lr(e) {
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
const $h = /transform|translate|scale|rotate|perspective|filter/, Wh = /paint|layout|strict|content/, ht = (e) => !!e && e !== "none";
let Ar;
function La(e) {
  const t = Oe(e) ? Ie(e) : e;
  return ht(t.transform) || ht(t.translate) || ht(t.scale) || ht(t.rotate) || ht(t.perspective) || !Fa() && (ht(t.backdropFilter) || ht(t.filter)) || $h.test(t.willChange || "") || Wh.test(t.contain || "");
}
function Uh(e) {
  let t = dt(e);
  for (; ot(t) && !zt(t); ) {
    if (La(t))
      return t;
    if (lr(t))
      return null;
    t = dt(t);
  }
  return null;
}
function Fa() {
  return Ar == null && (Ar = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Ar;
}
function zt(e) {
  return /^(html|body|#document)$/.test(qt(e));
}
function Ie(e) {
  return Se(e).getComputedStyle(e);
}
function ur(e) {
  return Oe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function dt(e) {
  if (qt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ti(e) && e.host || // Fallback.
    Ke(e)
  );
  return ti(t) ? t.host : t;
}
function xc(e) {
  const t = dt(e);
  return zt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ot(t) && vn(t) ? t : xc(t);
}
function on(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = xc(e), o = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Se(a);
  if (o) {
    const s = Xr(i);
    return t.concat(i, i.visualViewport || [], vn(a) ? a : [], s && n ? on(s) : []);
  } else
    return t.concat(a, on(a, [], n));
}
function Xr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function _c(e) {
  const t = Ie(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = ot(e), o = a ? e.offsetWidth : n, i = a ? e.offsetHeight : r, s = Gn(n) !== o || Gn(r) !== i;
  return s && (n = o, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function $a(e) {
  return Oe(e) ? e : e.contextElement;
}
function It(e) {
  const t = $a(e);
  if (!ot(t))
    return Ye(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: o
  } = _c(t);
  let i = (o ? Gn(n.width) : n.width) / r, s = (o ? Gn(n.height) : n.height) / a;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const zh = /* @__PURE__ */ Ye(0);
function Sc(e) {
  const t = Se(e);
  return !Fa() || !t.visualViewport ? zh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Bh(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Se(e) ? !1 : t;
}
function bt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), o = $a(e);
  let i = Ye(1);
  t && (r ? Oe(r) && (i = It(r)) : i = It(e));
  const s = Bh(o, n, r) ? Sc(o) : Ye(0);
  let u = (a.left + s.x) / i.x, d = (a.top + s.y) / i.y, f = a.width / i.x, l = a.height / i.y;
  if (o) {
    const m = Se(o), p = r && Oe(r) ? Se(r) : r;
    let w = m, h = Xr(w);
    for (; h && r && p !== w; ) {
      const g = It(h), v = h.getBoundingClientRect(), y = Ie(h), x = v.left + (h.clientLeft + parseFloat(y.paddingLeft)) * g.x, _ = v.top + (h.clientTop + parseFloat(y.paddingTop)) * g.y;
      u *= g.x, d *= g.y, f *= g.x, l *= g.y, u += x, d += _, w = Se(h), h = Xr(w);
    }
  }
  return Kn({
    width: f,
    height: l,
    x: u,
    y: d
  });
}
function dr(e, t) {
  const n = ur(e).scrollLeft;
  return t ? t.left + n : bt(Ke(e)).left + n;
}
function Mc(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - dr(e, n), a = n.top + t.scrollTop;
  return {
    x: r,
    y: a
  };
}
function Vh(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: a
  } = e;
  const o = a === "fixed", i = Ke(r), s = t ? lr(t.floating) : !1;
  if (r === i || s && o)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Ye(1);
  const f = Ye(0), l = ot(r);
  if ((l || !l && !o) && ((qt(r) !== "body" || vn(i)) && (u = ur(r)), l)) {
    const p = bt(r);
    d = It(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop;
  }
  const m = i && !l && !o ? Mc(i, u) : Ye(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + f.x + m.x,
    y: n.y * d.y - u.scrollTop * d.y + f.y + m.y
  };
}
function jh(e) {
  return Array.from(e.getClientRects());
}
function Hh(e) {
  const t = Ke(e), n = ur(e), r = e.ownerDocument.body, a = _e(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = _e(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + dr(e);
  const s = -n.scrollTop;
  return Ie(r).direction === "rtl" && (i += _e(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: o,
    x: i,
    y: s
  };
}
const ni = 25;
function Yh(e, t) {
  const n = Se(e), r = Ke(e), a = n.visualViewport;
  let o = r.clientWidth, i = r.clientHeight, s = 0, u = 0;
  if (a) {
    o = a.width, i = a.height;
    const f = Fa();
    (!f || f && t === "fixed") && (s = a.offsetLeft, u = a.offsetTop);
  }
  const d = dr(r);
  if (d <= 0) {
    const f = r.ownerDocument, l = f.body, m = getComputedStyle(l), p = f.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, w = Math.abs(r.clientWidth - l.clientWidth - p);
    w <= ni && (o -= w);
  } else d <= ni && (o += d);
  return {
    width: o,
    height: i,
    x: s,
    y: u
  };
}
function Gh(e, t) {
  const n = bt(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, o = ot(e) ? It(e) : Ye(1), i = e.clientWidth * o.x, s = e.clientHeight * o.y, u = a * o.x, d = r * o.y;
  return {
    width: i,
    height: s,
    x: u,
    y: d
  };
}
function ri(e, t, n) {
  let r;
  if (t === "viewport")
    r = Yh(e, n);
  else if (t === "document")
    r = Hh(Ke(e));
  else if (Oe(t))
    r = Gh(t, n);
  else {
    const a = Sc(e);
    r = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Kn(r);
}
function Nc(e, t) {
  const n = dt(e);
  return n === t || !Oe(n) || zt(n) ? !1 : Ie(n).position === "fixed" || Nc(n, t);
}
function qh(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = on(e, [], !1).filter((s) => Oe(s) && qt(s) !== "body"), a = null;
  const o = Ie(e).position === "fixed";
  let i = o ? dt(e) : e;
  for (; Oe(i) && !zt(i); ) {
    const s = Ie(i), u = La(i);
    !u && s.position === "fixed" && (a = null), (o ? !u && !a : !u && s.position === "static" && !!a && (a.position === "absolute" || a.position === "fixed") || vn(i) && !u && Nc(e, i)) ? r = r.filter((f) => f !== i) : a = s, i = dt(i);
  }
  return t.set(e, r), r;
}
function Kh(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const i = [...n === "clippingAncestors" ? lr(t) ? [] : qh(t, this._c) : [].concat(n), r], s = ri(t, i[0], a);
  let u = s.top, d = s.right, f = s.bottom, l = s.left;
  for (let m = 1; m < i.length; m++) {
    const p = ri(t, i[m], a);
    u = _e(p.top, u), d = ut(p.right, d), f = ut(p.bottom, f), l = _e(p.left, l);
  }
  return {
    width: d - l,
    height: f - u,
    x: l,
    y: u
  };
}
function Xh(e) {
  const {
    width: t,
    height: n
  } = _c(e);
  return {
    width: t,
    height: n
  };
}
function Jh(e, t, n) {
  const r = ot(t), a = Ke(t), o = n === "fixed", i = bt(e, !0, o, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Ye(0);
  function d() {
    u.x = dr(a);
  }
  if (r || !r && !o)
    if ((qt(t) !== "body" || vn(a)) && (s = ur(t)), r) {
      const p = bt(t, !0, o, t);
      u.x = p.x + t.clientLeft, u.y = p.y + t.clientTop;
    } else a && d();
  o && !r && a && d();
  const f = a && !r && !o ? Mc(a, s) : Ye(0), l = i.left + s.scrollLeft - u.x - f.x, m = i.top + s.scrollTop - u.y - f.y;
  return {
    x: l,
    y: m,
    width: i.width,
    height: i.height
  };
}
function Dr(e) {
  return Ie(e).position === "static";
}
function ai(e, t) {
  if (!ot(e) || Ie(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ke(e) === n && (n = n.ownerDocument.body), n;
}
function Cc(e, t) {
  const n = Se(e);
  if (lr(e))
    return n;
  if (!ot(e)) {
    let a = dt(e);
    for (; a && !zt(a); ) {
      if (Oe(a) && !Dr(a))
        return a;
      a = dt(a);
    }
    return n;
  }
  let r = ai(e, t);
  for (; r && Fh(r) && Dr(r); )
    r = ai(r, t);
  return r && zt(r) && Dr(r) && !La(r) ? n : r || Uh(e) || n;
}
const Qh = async function(e) {
  const t = this.getOffsetParent || Cc, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Jh(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Zh(e) {
  return Ie(e).direction === "rtl";
}
const ew = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Vh,
  getDocumentElement: Ke,
  getClippingRect: Kh,
  getOffsetParent: Cc,
  getElementRects: Qh,
  getClientRects: jh,
  getDimensions: Xh,
  getScale: It,
  isElement: Oe,
  isRTL: Zh
};
function Pc(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function tw(e, t) {
  let n = null, r;
  const a = Ke(e);
  function o() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, u) {
    s === void 0 && (s = !1), u === void 0 && (u = 1), o();
    const d = e.getBoundingClientRect(), {
      left: f,
      top: l,
      width: m,
      height: p
    } = d;
    if (s || t(), !m || !p)
      return;
    const w = Tn(l), h = Tn(a.clientWidth - (f + m)), g = Tn(a.clientHeight - (l + p)), v = Tn(f), x = {
      rootMargin: -w + "px " + -h + "px " + -g + "px " + -v + "px",
      threshold: _e(0, ut(1, u)) || 1
    };
    let _ = !0;
    function P(k) {
      const M = k[0].intersectionRatio;
      if (M !== u) {
        if (!_)
          return i();
        M ? i(!1, M) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !Pc(d, e.getBoundingClientRect()) && i(), _ = !1;
    }
    try {
      n = new IntersectionObserver(P, {
        ...x,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(P, x);
    }
    n.observe(e);
  }
  return i(!0), o;
}
function nw(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: o = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, d = $a(e), f = a || o ? [...d ? on(d) : [], ...t ? on(t) : []] : [];
  f.forEach((v) => {
    a && v.addEventListener("scroll", n, {
      passive: !0
    }), o && v.addEventListener("resize", n);
  });
  const l = d && s ? tw(d, n) : null;
  let m = -1, p = null;
  i && (p = new ResizeObserver((v) => {
    let [y] = v;
    y && y.target === d && p && t && (p.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var x;
      (x = p) == null || x.observe(t);
    })), n();
  }), d && !u && p.observe(d), t && p.observe(t));
  let w, h = u ? bt(e) : null;
  u && g();
  function g() {
    const v = bt(e);
    h && !Pc(h, v) && n(), h = v, w = requestAnimationFrame(g);
  }
  return n(), () => {
    var v;
    f.forEach((y) => {
      a && y.removeEventListener("scroll", n), o && y.removeEventListener("resize", n);
    }), l == null || l(), (v = p) == null || v.disconnect(), p = null, u && cancelAnimationFrame(w);
  };
}
const rw = Rh, aw = Oh, ow = Th, iw = Lh, sw = Ah, oi = kh, cw = Ih, lw = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: ew,
    ...n
  }, o = {
    ...a.platform,
    _c: r
  };
  return Eh(e, t, {
    ...a,
    platform: o
  });
};
var uw = typeof document < "u", dw = function() {
}, In = uw ? at : dw;
function Xn(e, t) {
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
        if (!Xn(e[r], t[r]))
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
      if (!(o === "_owner" && e.$$typeof) && !Xn(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ec(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ii(e, t) {
  const n = Ec(e);
  return Math.round(t * n) / n;
}
function Rr(e) {
  const t = D(e);
  return In(() => {
    t.current = e;
  }), t;
}
function fw(e) {
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
    whileElementsMounted: u,
    open: d
  } = e, [f, l] = C({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, p] = C(r);
  Xn(m, r) || p(r);
  const [w, h] = C(null), [g, v] = C(null), y = B((E) => {
    E !== k.current && (k.current = E, h(E));
  }, []), x = B((E) => {
    E !== M.current && (M.current = E, v(E));
  }, []), _ = o || w, P = i || g, k = D(null), M = D(null), b = D(f), N = u != null, S = Rr(u), F = Rr(a), V = Rr(d), z = B(() => {
    if (!k.current || !M.current)
      return;
    const E = {
      placement: t,
      strategy: n,
      middleware: m
    };
    F.current && (E.platform = F.current), lw(k.current, M.current, E).then((L) => {
      const X = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      Y.current && !Xn(b.current, X) && (b.current = X, er(() => {
        l(X);
      }));
    });
  }, [m, t, n, F, V]);
  In(() => {
    d === !1 && b.current.isPositioned && (b.current.isPositioned = !1, l((E) => ({
      ...E,
      isPositioned: !1
    })));
  }, [d]);
  const Y = D(!1);
  In(() => (Y.current = !0, () => {
    Y.current = !1;
  }), []), In(() => {
    if (_ && (k.current = _), P && (M.current = P), _ && P) {
      if (S.current)
        return S.current(_, P, z);
      z();
    }
  }, [_, P, z, S, N]);
  const Q = le(() => ({
    reference: k,
    floating: M,
    setReference: y,
    setFloating: x
  }), [y, x]), W = le(() => ({
    reference: _,
    floating: P
  }), [_, P]), G = le(() => {
    const E = {
      position: n,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return E;
    const L = ii(W.floating, f.x), X = ii(W.floating, f.y);
    return s ? {
      ...E,
      transform: "translate(" + L + "px, " + X + "px)",
      ...Ec(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: L,
      top: X
    };
  }, [n, s, W.floating, f.x, f.y]);
  return le(() => ({
    ...f,
    update: z,
    refs: Q,
    elements: W,
    floatingStyles: G
  }), [f, z, Q, W, G]);
}
const mw = (e) => {
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
      return r && t(r) ? r.current != null ? oi({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? oi({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
}, pw = (e, t) => {
  const n = rw(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, hw = (e, t) => {
  const n = aw(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, ww = (e, t) => ({
  fn: cw(e).fn,
  options: [e, t]
}), gw = (e, t) => {
  const n = ow(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, vw = (e, t) => {
  const n = iw(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, yw = (e, t) => {
  const n = sw(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, bw = (e, t) => {
  const n = mw(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var xw = "Arrow", kc = T((e, t) => {
  const { children: n, width: r = 10, height: a = 5, ...o } = e;
  return /* @__PURE__ */ c(
    K.svg,
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
kc.displayName = xw;
var _w = kc, Wa = "Popper", [Tc, Ac] = ft(Wa), [Sw, Dc] = Tc(Wa), Rc = (e) => {
  const { __scopePopper: t, children: n } = e, [r, a] = C(null);
  return /* @__PURE__ */ c(Sw, { scope: t, anchor: r, onAnchorChange: a, children: n });
};
Rc.displayName = Wa;
var Oc = "PopperAnchor", Ic = T(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...a } = e, o = Dc(Oc, n), i = D(null), s = se(t, i), u = D(null);
    return I(() => {
      const d = u.current;
      u.current = (r == null ? void 0 : r.current) || i.current, d !== u.current && o.onAnchorChange(u.current);
    }), r ? null : /* @__PURE__ */ c(K.div, { ...a, ref: s });
  }
);
Ic.displayName = Oc;
var Ua = "PopperContent", [Mw, Nw] = Tc(Ua), Lc = T(
  (e, t) => {
    var q, he, fe, Me, Xe, We;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: a = 0,
      align: o = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: u = !0,
      collisionBoundary: d = [],
      collisionPadding: f = 0,
      sticky: l = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: w,
      ...h
    } = e, g = Dc(Ua, n), [v, y] = C(null), x = se(t, (mt) => y(mt)), [_, P] = C(null), k = wh(_), M = (k == null ? void 0 : k.width) ?? 0, b = (k == null ? void 0 : k.height) ?? 0, N = r + (o !== "center" ? "-" + o : ""), S = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, F = Array.isArray(d) ? d : [d], V = F.length > 0, z = {
      padding: S,
      boundary: F.filter(Pw),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: Y, floatingStyles: Q, placement: W, isPositioned: G, middlewareData: E } = fw({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: N,
      whileElementsMounted: (...mt) => nw(...mt, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        pw({ mainAxis: a + b, alignmentAxis: i }),
        u && hw({
          mainAxis: !0,
          crossAxis: !1,
          limiter: l === "partial" ? ww() : void 0,
          ...z
        }),
        u && gw({ ...z }),
        vw({
          ...z,
          apply: ({ elements: mt, rects: A, availableWidth: me, availableHeight: be }) => {
            const { width: xe, height: Ue } = A.reference, ae = mt.floating.style;
            ae.setProperty("--radix-popper-available-width", `${me}px`), ae.setProperty("--radix-popper-available-height", `${be}px`), ae.setProperty("--radix-popper-anchor-width", `${xe}px`), ae.setProperty("--radix-popper-anchor-height", `${Ue}px`);
          }
        }),
        _ && bw({ element: _, padding: s }),
        Ew({ arrowWidth: M, arrowHeight: b }),
        m && yw({ strategy: "referenceHidden", ...z })
      ]
    }), [L, X] = Wc(W), de = ge(w);
    Ee(() => {
      G && (de == null || de());
    }, [G, de]);
    const we = (q = E.arrow) == null ? void 0 : q.x, ne = (he = E.arrow) == null ? void 0 : he.y, re = ((fe = E.arrow) == null ? void 0 : fe.centerOffset) !== 0, [De, ye] = C();
    return Ee(() => {
      v && ye(window.getComputedStyle(v).zIndex);
    }, [v]), /* @__PURE__ */ c(
      "div",
      {
        ref: Y.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: G ? Q.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: De,
          "--radix-popper-transform-origin": [
            (Me = E.transformOrigin) == null ? void 0 : Me.x,
            (Xe = E.transformOrigin) == null ? void 0 : Xe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((We = E.hide) == null ? void 0 : We.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ c(
          Mw,
          {
            scope: n,
            placedSide: L,
            onArrowChange: P,
            arrowX: we,
            arrowY: ne,
            shouldHideArrow: re,
            children: /* @__PURE__ */ c(
              K.div,
              {
                "data-side": L,
                "data-align": X,
                ...h,
                ref: x,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: G ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Lc.displayName = Ua;
var Fc = "PopperArrow", Cw = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, $c = T(function(t, n) {
  const { __scopePopper: r, ...a } = t, o = Nw(Fc, r), i = Cw[o.placedSide];
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
          _w,
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
$c.displayName = Fc;
function Pw(e) {
  return e !== null;
}
var Ew = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, v, y;
    const { placement: n, rects: r, middlewareData: a } = t, i = ((g = a.arrow) == null ? void 0 : g.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, u = i ? 0 : e.arrowHeight, [d, f] = Wc(n), l = { start: "0%", center: "50%", end: "100%" }[f], m = (((v = a.arrow) == null ? void 0 : v.x) ?? 0) + s / 2, p = (((y = a.arrow) == null ? void 0 : y.y) ?? 0) + u / 2;
    let w = "", h = "";
    return d === "bottom" ? (w = i ? l : `${m}px`, h = `${-u}px`) : d === "top" ? (w = i ? l : `${m}px`, h = `${r.floating.height + u}px`) : d === "right" ? (w = `${-u}px`, h = i ? l : `${p}px`) : d === "left" && (w = `${r.floating.width + u}px`, h = i ? l : `${p}px`), { data: { x: w, y: h } };
  }
});
function Wc(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var kw = Rc, Tw = Ic, Aw = Lc, Dw = $c, Or = "rovingFocusGroup.onEntryFocus", Rw = { bubbles: !1, cancelable: !0 }, yn = "RovingFocusGroup", [Jr, Uc, Ow] = gc(yn), [Iw, zc] = ft(
  yn,
  [Ow]
), [Lw, Fw] = Iw(yn), Bc = T(
  (e, t) => /* @__PURE__ */ c(Jr.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c(Jr.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c($w, { ...e, ref: t }) }) })
);
Bc.displayName = yn;
var $w = T((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: a = !1,
    dir: o,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: u,
    onEntryFocus: d,
    preventScrollOnEntryFocus: f = !1,
    ...l
  } = e, m = D(null), p = se(t, m), w = ya(o), [h, g] = Ma({
    prop: i,
    defaultProp: s ?? null,
    onChange: u,
    caller: yn
  }), [v, y] = C(!1), x = ge(d), _ = Uc(n), P = D(!1), [k, M] = C(0);
  return I(() => {
    const b = m.current;
    if (b)
      return b.addEventListener(Or, x), () => b.removeEventListener(Or, x);
  }, [x]), /* @__PURE__ */ c(
    Lw,
    {
      scope: n,
      orientation: r,
      dir: w,
      loop: a,
      currentTabStopId: h,
      onItemFocus: B(
        (b) => g(b),
        [g]
      ),
      onItemShiftTab: B(() => y(!0), []),
      onFocusableItemAdd: B(
        () => M((b) => b + 1),
        []
      ),
      onFocusableItemRemove: B(
        () => M((b) => b - 1),
        []
      ),
      children: /* @__PURE__ */ c(
        K.div,
        {
          tabIndex: v || k === 0 ? -1 : 0,
          "data-orientation": r,
          ...l,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: U(e.onMouseDown, () => {
            P.current = !0;
          }),
          onFocus: U(e.onFocus, (b) => {
            const N = !P.current;
            if (b.target === b.currentTarget && N && !v) {
              const S = new CustomEvent(Or, Rw);
              if (b.currentTarget.dispatchEvent(S), !S.defaultPrevented) {
                const F = _().filter((W) => W.focusable), V = F.find((W) => W.active), z = F.find((W) => W.id === h), Q = [V, z, ...F].filter(
                  Boolean
                ).map((W) => W.ref.current);
                Hc(Q, f);
              }
            }
            P.current = !1;
          }),
          onBlur: U(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), Vc = "RovingFocusGroupItem", jc = T(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: a = !1,
      tabStopId: o,
      children: i,
      ...s
    } = e, u = Rt(), d = o || u, f = Fw(Vc, n), l = f.currentTabStopId === d, m = Uc(n), { onFocusableItemAdd: p, onFocusableItemRemove: w, currentTabStopId: h } = f;
    return I(() => {
      if (r)
        return p(), () => w();
    }, [r, p, w]), /* @__PURE__ */ c(
      Jr.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: r,
        active: a,
        children: /* @__PURE__ */ c(
          K.span,
          {
            tabIndex: l ? 0 : -1,
            "data-orientation": f.orientation,
            ...s,
            ref: t,
            onMouseDown: U(e.onMouseDown, (g) => {
              r ? f.onItemFocus(d) : g.preventDefault();
            }),
            onFocus: U(e.onFocus, () => f.onItemFocus(d)),
            onKeyDown: U(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const v = zw(g, f.orientation, f.dir);
              if (v !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let x = m().filter((_) => _.focusable).map((_) => _.ref.current);
                if (v === "last") x.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && x.reverse();
                  const _ = x.indexOf(g.currentTarget);
                  x = f.loop ? Bw(x, _ + 1) : x.slice(_ + 1);
                }
                setTimeout(() => Hc(x));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: l, hasTabStop: h != null }) : i
          }
        )
      }
    );
  }
);
jc.displayName = Vc;
var Ww = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Uw(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function zw(e, t, n) {
  const r = Uw(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Ww[r];
}
function Hc(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Bw(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Vw = Bc, jw = jc, Qr = ["Enter", " "], Hw = ["ArrowDown", "PageUp", "Home"], Yc = ["ArrowUp", "PageDown", "End"], Yw = [...Hw, ...Yc], Gw = {
  ltr: [...Qr, "ArrowRight"],
  rtl: [...Qr, "ArrowLeft"]
}, qw = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, bn = "Menu", [sn, Kw, Xw] = gc(bn), [_t, Gc] = ft(bn, [
  Xw,
  Ac,
  zc
]), fr = Ac(), qc = zc(), [Jw, St] = _t(bn), [Qw, xn] = _t(bn), Kc = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: a, onOpenChange: o, modal: i = !0 } = e, s = fr(t), [u, d] = C(null), f = D(!1), l = ge(o), m = ya(a);
  return I(() => {
    const p = () => {
      f.current = !0, document.addEventListener("pointerdown", w, { capture: !0, once: !0 }), document.addEventListener("pointermove", w, { capture: !0, once: !0 });
    }, w = () => f.current = !1;
    return document.addEventListener("keydown", p, { capture: !0 }), () => {
      document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", w, { capture: !0 }), document.removeEventListener("pointermove", w, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c(kw, { ...s, children: /* @__PURE__ */ c(
    Jw,
    {
      scope: t,
      open: n,
      onOpenChange: l,
      content: u,
      onContentChange: d,
      children: /* @__PURE__ */ c(
        Qw,
        {
          scope: t,
          onClose: B(() => l(!1), [l]),
          isUsingKeyboardRef: f,
          dir: m,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
Kc.displayName = bn;
var Zw = "MenuAnchor", za = T(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, a = fr(n);
    return /* @__PURE__ */ c(Tw, { ...a, ...r, ref: t });
  }
);
za.displayName = Zw;
var Ba = "MenuPortal", [eg, Xc] = _t(Ba, {
  forceMount: void 0
}), Jc = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: a } = e, o = St(Ba, t);
  return /* @__PURE__ */ c(eg, { scope: t, forceMount: n, children: /* @__PURE__ */ c(Te, { present: n || o.open, children: /* @__PURE__ */ c(Pa, { asChild: !0, container: a, children: r }) }) });
};
Jc.displayName = Ba;
var Ce = "MenuContent", [tg, Va] = _t(Ce), Qc = T(
  (e, t) => {
    const n = Xc(Ce, e.__scopeMenu), { forceMount: r = n.forceMount, ...a } = e, o = St(Ce, e.__scopeMenu), i = xn(Ce, e.__scopeMenu);
    return /* @__PURE__ */ c(sn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c(Te, { present: r || o.open, children: /* @__PURE__ */ c(sn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ c(ng, { ...a, ref: t }) : /* @__PURE__ */ c(rg, { ...a, ref: t }) }) }) });
  }
), ng = T(
  (e, t) => {
    const n = St(Ce, e.__scopeMenu), r = D(null), a = se(t, r);
    return I(() => {
      const o = r.current;
      if (o) return Zs(o);
    }, []), /* @__PURE__ */ c(
      ja,
      {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: U(
          e.onFocusOutside,
          (o) => o.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), rg = T((e, t) => {
  const n = St(Ce, e.__scopeMenu);
  return /* @__PURE__ */ c(
    ja,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), ag = /* @__PURE__ */ Wt("MenuContent.ScrollLock"), ja = T(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: a,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: u,
      onEscapeKeyDown: d,
      onPointerDownOutside: f,
      onFocusOutside: l,
      onInteractOutside: m,
      onDismiss: p,
      disableOutsideScroll: w,
      ...h
    } = e, g = St(Ce, n), v = xn(Ce, n), y = fr(n), x = qc(n), _ = Kw(n), [P, k] = C(null), M = D(null), b = se(t, M, g.onContentChange), N = D(0), S = D(""), F = D(0), V = D(null), z = D("right"), Y = D(0), Q = w ? Ea : Z, W = w ? { as: ag, allowPinchZoom: !0 } : void 0, G = (L) => {
      var q, he;
      const X = S.current + L, de = _().filter((fe) => !fe.disabled), we = document.activeElement, ne = (q = de.find((fe) => fe.ref.current === we)) == null ? void 0 : q.textValue, re = de.map((fe) => fe.textValue), De = wg(re, X, ne), ye = (he = de.find((fe) => fe.textValue === De)) == null ? void 0 : he.ref.current;
      (function fe(Me) {
        S.current = Me, window.clearTimeout(N.current), Me !== "" && (N.current = window.setTimeout(() => fe(""), 1e3));
      })(X), ye && setTimeout(() => ye.focus());
    };
    I(() => () => window.clearTimeout(N.current), []), js();
    const E = B((L) => {
      var de, we;
      return z.current === ((de = V.current) == null ? void 0 : de.side) && vg(L, (we = V.current) == null ? void 0 : we.area);
    }, []);
    return /* @__PURE__ */ c(
      tg,
      {
        scope: n,
        searchRef: S,
        onItemEnter: B(
          (L) => {
            E(L) && L.preventDefault();
          },
          [E]
        ),
        onItemLeave: B(
          (L) => {
            var X;
            E(L) || ((X = M.current) == null || X.focus(), k(null));
          },
          [E]
        ),
        onTriggerLeave: B(
          (L) => {
            E(L) && L.preventDefault();
          },
          [E]
        ),
        pointerGraceTimerRef: F,
        onPointerGraceIntentChange: B((L) => {
          V.current = L;
        }, []),
        children: /* @__PURE__ */ c(Q, { ...W, children: /* @__PURE__ */ c(
          Ca,
          {
            asChild: !0,
            trapped: a,
            onMountAutoFocus: U(o, (L) => {
              var X;
              L.preventDefault(), (X = M.current) == null || X.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ c(
              Na,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: d,
                onPointerDownOutside: f,
                onFocusOutside: l,
                onInteractOutside: m,
                onDismiss: p,
                children: /* @__PURE__ */ c(
                  Vw,
                  {
                    asChild: !0,
                    ...x,
                    dir: v.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: P,
                    onCurrentTabStopIdChange: k,
                    onEntryFocus: U(u, (L) => {
                      v.isUsingKeyboardRef.current || L.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c(
                      Aw,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": pl(g.open),
                        "data-radix-menu-content": "",
                        dir: v.dir,
                        ...y,
                        ...h,
                        ref: b,
                        style: { outline: "none", ...h.style },
                        onKeyDown: U(h.onKeyDown, (L) => {
                          const de = L.target.closest("[data-radix-menu-content]") === L.currentTarget, we = L.ctrlKey || L.altKey || L.metaKey, ne = L.key.length === 1;
                          de && (L.key === "Tab" && L.preventDefault(), !we && ne && G(L.key));
                          const re = M.current;
                          if (L.target !== re || !Yw.includes(L.key)) return;
                          L.preventDefault();
                          const ye = _().filter((q) => !q.disabled).map((q) => q.ref.current);
                          Yc.includes(L.key) && ye.reverse(), pg(ye);
                        }),
                        onBlur: U(e.onBlur, (L) => {
                          L.currentTarget.contains(L.target) || (window.clearTimeout(N.current), S.current = "");
                        }),
                        onPointerMove: U(
                          e.onPointerMove,
                          cn((L) => {
                            const X = L.target, de = Y.current !== L.clientX;
                            if (L.currentTarget.contains(X) && de) {
                              const we = L.clientX > Y.current ? "right" : "left";
                              z.current = we, Y.current = L.clientX;
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
Qc.displayName = Ce;
var og = "MenuGroup", Ha = T(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c(K.div, { role: "group", ...r, ref: t });
  }
);
Ha.displayName = og;
var ig = "MenuLabel", Zc = T(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c(K.div, { ...r, ref: t });
  }
);
Zc.displayName = ig;
var Jn = "MenuItem", si = "menu.itemSelect", mr = T(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...a } = e, o = D(null), i = xn(Jn, e.__scopeMenu), s = Va(Jn, e.__scopeMenu), u = se(t, o), d = D(!1), f = () => {
      const l = o.current;
      if (!n && l) {
        const m = new CustomEvent(si, { bubbles: !0, cancelable: !0 });
        l.addEventListener(si, (p) => r == null ? void 0 : r(p), { once: !0 }), ws(l, m), m.defaultPrevented ? d.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ c(
      el,
      {
        ...a,
        ref: u,
        disabled: n,
        onClick: U(e.onClick, f),
        onPointerDown: (l) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, l), d.current = !0;
        },
        onPointerUp: U(e.onPointerUp, (l) => {
          var m;
          d.current || (m = l.currentTarget) == null || m.click();
        }),
        onKeyDown: U(e.onKeyDown, (l) => {
          const m = s.searchRef.current !== "";
          n || m && l.key === " " || Qr.includes(l.key) && (l.currentTarget.click(), l.preventDefault());
        })
      }
    );
  }
);
mr.displayName = Jn;
var el = T(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: a, ...o } = e, i = Va(Jn, n), s = qc(n), u = D(null), d = se(t, u), [f, l] = C(!1), [m, p] = C("");
    return I(() => {
      const w = u.current;
      w && p((w.textContent ?? "").trim());
    }, [o.children]), /* @__PURE__ */ c(
      sn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: a ?? m,
        children: /* @__PURE__ */ c(jw, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ c(
          K.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...o,
            ref: d,
            onPointerMove: U(
              e.onPointerMove,
              cn((w) => {
                r ? i.onItemLeave(w) : (i.onItemEnter(w), w.defaultPrevented || w.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: U(
              e.onPointerLeave,
              cn((w) => i.onItemLeave(w))
            ),
            onFocus: U(e.onFocus, () => l(!0)),
            onBlur: U(e.onBlur, () => l(!1))
          }
        ) })
      }
    );
  }
), sg = "MenuCheckboxItem", tl = T(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...a } = e;
    return /* @__PURE__ */ c(il, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c(
      mr,
      {
        role: "menuitemcheckbox",
        "aria-checked": Qn(n) ? "mixed" : n,
        ...a,
        ref: t,
        "data-state": Ga(n),
        onSelect: U(
          a.onSelect,
          () => r == null ? void 0 : r(Qn(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
tl.displayName = sg;
var nl = "MenuRadioGroup", [cg, lg] = _t(
  nl,
  { value: void 0, onValueChange: () => {
  } }
), rl = T(
  (e, t) => {
    const { value: n, onValueChange: r, ...a } = e, o = ge(r);
    return /* @__PURE__ */ c(cg, { scope: e.__scopeMenu, value: n, onValueChange: o, children: /* @__PURE__ */ c(Ha, { ...a, ref: t }) });
  }
);
rl.displayName = nl;
var al = "MenuRadioItem", ol = T(
  (e, t) => {
    const { value: n, ...r } = e, a = lg(al, e.__scopeMenu), o = n === a.value;
    return /* @__PURE__ */ c(il, { scope: e.__scopeMenu, checked: o, children: /* @__PURE__ */ c(
      mr,
      {
        role: "menuitemradio",
        "aria-checked": o,
        ...r,
        ref: t,
        "data-state": Ga(o),
        onSelect: U(
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
ol.displayName = al;
var Ya = "MenuItemIndicator", [il, ug] = _t(
  Ya,
  { checked: !1 }
), sl = T(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...a } = e, o = ug(Ya, n);
    return /* @__PURE__ */ c(
      Te,
      {
        present: r || Qn(o.checked) || o.checked === !0,
        children: /* @__PURE__ */ c(
          K.span,
          {
            ...a,
            ref: t,
            "data-state": Ga(o.checked)
          }
        )
      }
    );
  }
);
sl.displayName = Ya;
var dg = "MenuSeparator", cl = T(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c(
      K.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
cl.displayName = dg;
var fg = "MenuArrow", ll = T(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, a = fr(n);
    return /* @__PURE__ */ c(Dw, { ...a, ...r, ref: t });
  }
);
ll.displayName = fg;
var mg = "MenuSub", [Tv, ul] = _t(mg), Zt = "MenuSubTrigger", dl = T(
  (e, t) => {
    const n = St(Zt, e.__scopeMenu), r = xn(Zt, e.__scopeMenu), a = ul(Zt, e.__scopeMenu), o = Va(Zt, e.__scopeMenu), i = D(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: u } = o, d = { __scopeMenu: e.__scopeMenu }, f = B(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return I(() => f, [f]), I(() => {
      const l = s.current;
      return () => {
        window.clearTimeout(l), u(null);
      };
    }, [s, u]), /* @__PURE__ */ c(za, { asChild: !0, ...d, children: /* @__PURE__ */ c(
      el,
      {
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": a.contentId,
        "data-state": pl(n.open),
        ...e,
        ref: rr(t, a.onTriggerChange),
        onClick: (l) => {
          var m;
          (m = e.onClick) == null || m.call(e, l), !(e.disabled || l.defaultPrevented) && (l.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: U(
          e.onPointerMove,
          cn((l) => {
            o.onItemEnter(l), !l.defaultPrevented && !e.disabled && !n.open && !i.current && (o.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: U(
          e.onPointerLeave,
          cn((l) => {
            var p, w;
            f();
            const m = (p = n.content) == null ? void 0 : p.getBoundingClientRect();
            if (m) {
              const h = (w = n.content) == null ? void 0 : w.dataset.side, g = h === "right", v = g ? -5 : 5, y = m[g ? "left" : "right"], x = m[g ? "right" : "left"];
              o.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: l.clientX + v, y: l.clientY },
                  { x: y, y: m.top },
                  { x, y: m.top },
                  { x, y: m.bottom },
                  { x: y, y: m.bottom }
                ],
                side: h
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
        onKeyDown: U(e.onKeyDown, (l) => {
          var p;
          const m = o.searchRef.current !== "";
          e.disabled || m && l.key === " " || Gw[r.dir].includes(l.key) && (n.onOpenChange(!0), (p = n.content) == null || p.focus(), l.preventDefault());
        })
      }
    ) });
  }
);
dl.displayName = Zt;
var fl = "MenuSubContent", ml = T(
  (e, t) => {
    const n = Xc(Ce, e.__scopeMenu), { forceMount: r = n.forceMount, ...a } = e, o = St(Ce, e.__scopeMenu), i = xn(Ce, e.__scopeMenu), s = ul(fl, e.__scopeMenu), u = D(null), d = se(t, u);
    return /* @__PURE__ */ c(sn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c(Te, { present: r || o.open, children: /* @__PURE__ */ c(sn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c(
      ja,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...a,
        ref: d,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var l;
          i.isUsingKeyboardRef.current && ((l = u.current) == null || l.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: U(e.onFocusOutside, (f) => {
          f.target !== s.trigger && o.onOpenChange(!1);
        }),
        onEscapeKeyDown: U(e.onEscapeKeyDown, (f) => {
          i.onClose(), f.preventDefault();
        }),
        onKeyDown: U(e.onKeyDown, (f) => {
          var p;
          const l = f.currentTarget.contains(f.target), m = qw[i.dir].includes(f.key);
          l && m && (o.onOpenChange(!1), (p = s.trigger) == null || p.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
ml.displayName = fl;
function pl(e) {
  return e ? "open" : "closed";
}
function Qn(e) {
  return e === "indeterminate";
}
function Ga(e) {
  return Qn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function pg(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function hg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function wg(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, o = n ? e.indexOf(n) : -1;
  let i = hg(e, Math.max(o, 0));
  a.length === 1 && (i = i.filter((d) => d !== n));
  const u = i.find(
    (d) => d.toLowerCase().startsWith(a.toLowerCase())
  );
  return u !== n ? u : void 0;
}
function gg(e, t) {
  const { x: n, y: r } = e;
  let a = !1;
  for (let o = 0, i = t.length - 1; o < t.length; i = o++) {
    const s = t[o], u = t[i], d = s.x, f = s.y, l = u.x, m = u.y;
    f > r != m > r && n < (l - d) * (r - f) / (m - f) + d && (a = !a);
  }
  return a;
}
function vg(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return gg(n, t);
}
function cn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var yg = Kc, bg = za, xg = Jc, _g = Qc, Sg = Ha, Mg = Zc, Ng = mr, Cg = tl, Pg = rl, Eg = ol, kg = sl, Tg = cl, Ag = ll, Dg = dl, Rg = ml, pr = "DropdownMenu", [Og] = ft(
  pr,
  [Gc]
), ve = Gc(), [Ig, hl] = Og(pr), wl = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: a,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, u = ve(t), d = D(null), [f, l] = Ma({
    prop: a,
    defaultProp: o ?? !1,
    onChange: i,
    caller: pr
  });
  return /* @__PURE__ */ c(
    Ig,
    {
      scope: t,
      triggerId: Rt(),
      triggerRef: d,
      contentId: Rt(),
      open: f,
      onOpenChange: l,
      onOpenToggle: B(() => l((m) => !m), [l]),
      modal: s,
      children: /* @__PURE__ */ c(yg, { ...u, open: f, onOpenChange: l, dir: r, modal: s, children: n })
    }
  );
};
wl.displayName = pr;
var gl = "DropdownMenuTrigger", vl = T(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...a } = e, o = hl(gl, n), i = ve(n);
    return /* @__PURE__ */ c(bg, { asChild: !0, ...i, children: /* @__PURE__ */ c(
      K.button,
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
        ref: rr(t, o.triggerRef),
        onPointerDown: U(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (o.onOpenToggle(), o.open || s.preventDefault());
        }),
        onKeyDown: U(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && o.onOpenToggle(), s.key === "ArrowDown" && o.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
vl.displayName = gl;
var Lg = "DropdownMenuPortal", yl = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = ve(t);
  return /* @__PURE__ */ c(xg, { ...r, ...n });
};
yl.displayName = Lg;
var bl = "DropdownMenuContent", xl = T(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = hl(bl, n), o = ve(n), i = D(!1);
    return /* @__PURE__ */ c(
      _g,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...o,
        ...r,
        ref: t,
        onCloseAutoFocus: U(e.onCloseAutoFocus, (s) => {
          var u;
          i.current || (u = a.triggerRef.current) == null || u.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: U(e.onInteractOutside, (s) => {
          const u = s.detail.originalEvent, d = u.button === 0 && u.ctrlKey === !0, f = u.button === 2 || d;
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
xl.displayName = bl;
var Fg = "DropdownMenuGroup", $g = T(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = ve(n);
    return /* @__PURE__ */ c(Sg, { ...a, ...r, ref: t });
  }
);
$g.displayName = Fg;
var Wg = "DropdownMenuLabel", Ug = T(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = ve(n);
    return /* @__PURE__ */ c(Mg, { ...a, ...r, ref: t });
  }
);
Ug.displayName = Wg;
var zg = "DropdownMenuItem", _l = T(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = ve(n);
    return /* @__PURE__ */ c(Ng, { ...a, ...r, ref: t });
  }
);
_l.displayName = zg;
var Bg = "DropdownMenuCheckboxItem", Vg = T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = ve(n);
  return /* @__PURE__ */ c(Cg, { ...a, ...r, ref: t });
});
Vg.displayName = Bg;
var jg = "DropdownMenuRadioGroup", Hg = T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = ve(n);
  return /* @__PURE__ */ c(Pg, { ...a, ...r, ref: t });
});
Hg.displayName = jg;
var Yg = "DropdownMenuRadioItem", Gg = T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = ve(n);
  return /* @__PURE__ */ c(Eg, { ...a, ...r, ref: t });
});
Gg.displayName = Yg;
var qg = "DropdownMenuItemIndicator", Kg = T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = ve(n);
  return /* @__PURE__ */ c(kg, { ...a, ...r, ref: t });
});
Kg.displayName = qg;
var Xg = "DropdownMenuSeparator", Sl = T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = ve(n);
  return /* @__PURE__ */ c(Tg, { ...a, ...r, ref: t });
});
Sl.displayName = Xg;
var Jg = "DropdownMenuArrow", Qg = T(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = ve(n);
    return /* @__PURE__ */ c(Ag, { ...a, ...r, ref: t });
  }
);
Qg.displayName = Jg;
var Zg = "DropdownMenuSubTrigger", ev = T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = ve(n);
  return /* @__PURE__ */ c(Dg, { ...a, ...r, ref: t });
});
ev.displayName = Zg;
var tv = "DropdownMenuSubContent", nv = T((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = ve(n);
  return /* @__PURE__ */ c(
    Rg,
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
nv.displayName = tv;
var rv = wl, av = vl, ov = yl, iv = xl, sv = _l, cv = Sl;
function lv({
  ...e
}) {
  return /* @__PURE__ */ c(rv, { "data-slot": "dropdown-menu", ...e });
}
function uv({
  ...e
}) {
  return /* @__PURE__ */ c(
    av,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function dv({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ c(ov, { children: /* @__PURE__ */ c(
    iv,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: $(
        "wa:z-50 wa:max-h-(--radix-dropdown-menu-content-available-height) wa:min-w-[8rem] wa:origin-(--radix-dropdown-menu-content-transform-origin) wa:overflow-x-hidden wa:overflow-y-auto wa:rounded-md wa:border wa:bg-popover wa:p-1 wa:text-popover-foreground wa:shadow-md data-[side=bottom]:wa:slide-in-from-top-2 data-[side=left]:wa:slide-in-from-right-2 data-[side=right]:wa:slide-in-from-left-2 data-[side=top]:wa:slide-in-from-bottom-2 data-[state=closed]:wa:animate-out data-[state=closed]:wa:fade-out-0 data-[state=closed]:wa:zoom-out-95 data-[state=open]:wa:animate-in data-[state=open]:wa:fade-in-0 data-[state=open]:wa:zoom-in-95",
        e
      ),
      ...n
    }
  ) });
}
function Ir({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ c(
    sv,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: $(
        "wa:relative wa:flex wa:cursor-default wa:items-center wa:gap-2 wa:rounded-sm wa:px-2 wa:py-1.5 wa:text-sm wa:outline-hidden wa:select-none focus:wa:bg-accent focus:wa:text-accent-foreground data-[disabled]:wa:pointer-events-none data-[disabled]:wa:opacity-50 data-[inset]:wa:pl-8 data-[variant=destructive]:wa:text-destructive data-[variant=destructive]:focus:wa:bg-destructive/10 data-[variant=destructive]:focus:wa:text-destructive dark:data-[variant=destructive]:focus:wa:bg-destructive/20 [&_svg]:wa:pointer-events-none [&_svg]:wa:shrink-0 [&_svg:not([class*='size-'])]:wa:size-4 [&_svg:not([class*='text-'])]:wa:text-muted-foreground data-[variant=destructive]:*:[svg]:wa:text-destructive!",
        e
      ),
      ...r
    }
  );
}
function fv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(
    cv,
    {
      "data-slot": "dropdown-menu-separator",
      className: $("-wa:mx-1 wa:my-1 wa:h-px wa:bg-border", e),
      ...t
    }
  );
}
function mv({
  message: e,
  conversationId: t,
  instance: n,
  onDeleted: r,
  onForward: a,
  readOnly: o = !1
}) {
  const i = jt(), s = Fe(), [u, d] = C(!1), [f, l] = C(!1), m = () => {
    const w = e.caption || e.content;
    w && navigator.clipboard.writeText(w);
  }, p = async () => {
    if (n) {
      l(!0);
      try {
        await i.deleteMessage(
          n,
          e.id,
          t,
          e.direction === "outbound"
        ), d(!1), r(e.id);
      } catch (w) {
        console.error("Error deleting message:", w);
      } finally {
        l(!1);
      }
    }
  };
  return /* @__PURE__ */ c(Z, { children: [
    /* @__PURE__ */ c(lv, { children: [
      /* @__PURE__ */ c(uv, { asChild: !0, children: /* @__PURE__ */ c(
        "button",
        {
          className: "wa:absolute wa:top-1 wa:right-1 wa:z-10 wa:opacity-0 group-hover:wa:opacity-100 wa:transition-opacity wa:rounded-full wa:p-0.5 hover:wa:bg-black/5",
          "aria-label": s("contextMenu.messageOptions"),
          children: /* @__PURE__ */ c(Zi, { className: "wa:h-4 wa:w-4 wa:text-[#667781]" })
        }
      ) }),
      /* @__PURE__ */ c(dv, { align: "end", className: "wa:w-40", children: [
        /* @__PURE__ */ c(Ir, { onClick: m, children: [
          /* @__PURE__ */ c(Pd, { className: "wa:h-4 wa:w-4 wa:mr-2" }),
          s("contextMenu.copy")
        ] }),
        !o && /* @__PURE__ */ c(Z, { children: [
          /* @__PURE__ */ c(Ir, { onClick: () => a(e), children: [
            /* @__PURE__ */ c(Ad, { className: "wa:h-4 wa:w-4 wa:mr-2" }),
            s("contextMenu.forward")
          ] }),
          /* @__PURE__ */ c(fv, {}),
          /* @__PURE__ */ c(
            Ir,
            {
              onClick: () => d(!0),
              className: "wa:text-red-600 focus:wa:text-red-600",
              children: [
                /* @__PURE__ */ c(Xd, { className: "wa:h-4 wa:w-4 wa:mr-2" }),
                s("contextMenu.delete")
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c(mn, { open: u, onOpenChange: d, children: /* @__PURE__ */ c(pn, { className: "sm:wa:max-w-[400px]", children: [
      /* @__PURE__ */ c(hn, { children: [
        /* @__PURE__ */ c(wn, { children: s("contextMenu.deleteMessage") }),
        /* @__PURE__ */ c(gn, { children: s("contextMenu.deleteConfirmation") })
      ] }),
      /* @__PURE__ */ c(Zp, { children: [
        /* @__PURE__ */ c(
          ce,
          {
            variant: "outline",
            onClick: () => d(!1),
            disabled: f,
            children: s("contextMenu.cancel")
          }
        ),
        /* @__PURE__ */ c(
          ce,
          {
            variant: "destructive",
            onClick: p,
            disabled: f,
            children: f ? /* @__PURE__ */ c(lt, { className: "wa:h-4 wa:w-4 wa:animate-spin" }) : s("contextMenu.deleteForEveryone")
          }
        )
      ] })
    ] }) })
  ] });
}
function pv({
  open: e,
  onOpenChange: t,
  message: n,
  instance: r,
  onForwarded: a
}) {
  const o = jt(), i = Fe(), [s, u] = C([]), [d, f] = C(!1), [l, m] = C(""), [p, w] = C(null), [h, g] = C(!1), [v, y] = C(null);
  I(() => {
    e && r && (f(!0), o.findChats(r).then((M) => {
      u(
        M.map((b) => ({
          id: b.id,
          phoneNumber: b.phoneNumber,
          contactName: b.contactName,
          profilePicUrl: b.profilePicUrl
        }))
      );
    }).catch((M) => {
      console.error("Error fetching conversations:", M);
    }).finally(() => {
      f(!1);
    }));
  }, [e, r, o]);
  const x = le(() => {
    if (!l.trim()) return s;
    const M = l.toLowerCase();
    return s.filter(
      (b) => {
        var N;
        return ((N = b.contactName) == null ? void 0 : N.toLowerCase().includes(M)) || b.phoneNumber.includes(M);
      }
    );
  }, [s, l]), _ = async () => {
    var M;
    if (!(!n || !p || !r)) {
      g(!0), y(null);
      try {
        if (n.hasMedia && ((M = n.mediaData) != null && M.url)) {
          const b = n.mediaData.url;
          let N = b;
          b.startsWith("data:") && (N = b.split(",")[1]);
          const S = n.messageType || "document";
          await o.sendMedia(r, {
            to: p,
            mediaType: S,
            media: N,
            caption: n.caption || void 0,
            fileName: n.filename || n.mediaData.filename || void 0,
            mimeType: n.mimeType || n.mediaData.contentType || void 0
          });
        } else
          await o.sendText(r, {
            to: p,
            body: n.content
          });
        P(), t(!1), a == null || a();
      } catch (b) {
        console.error("Error forwarding message:", b), y(b instanceof Error ? b.message : "Failed to forward message");
      } finally {
        g(!1);
      }
    }
  }, P = () => {
    m(""), w(null), y(null);
  }, k = n ? n.caption || n.content || `[${n.messageType || "Media"}]` : "";
  return /* @__PURE__ */ c(
    mn,
    {
      open: e,
      onOpenChange: (M) => {
        t(M), M || P();
      },
      children: /* @__PURE__ */ c(pn, { className: "sm:wa:max-w-[500px]", children: [
        /* @__PURE__ */ c(hn, { children: [
          /* @__PURE__ */ c(wn, { children: i("forwardDialog.title") }),
          /* @__PURE__ */ c(gn, { children: i("forwardDialog.description") })
        ] }),
        v && /* @__PURE__ */ c("div", { className: "wa:p-3 wa:bg-red-50 wa:border wa:border-red-200 wa:rounded-lg wa:text-sm wa:text-red-800", children: v }),
        /* @__PURE__ */ c("div", { className: "wa:p-3 wa:bg-[#f0f2f5] wa:rounded-lg wa:border wa:border-[#d1d7db]", children: [
          /* @__PURE__ */ c("p", { className: "wa:text-xs wa:text-[#667781] wa:mb-1", children: i("forwardDialog.forwarding") }),
          /* @__PURE__ */ c("p", { className: "wa:text-sm wa:text-[#111b21] wa:line-clamp-3", children: k })
        ] }),
        /* @__PURE__ */ c("div", { className: "wa:relative", children: [
          /* @__PURE__ */ c(ts, { className: "wa:absolute wa:left-3 wa:top-1/2 -wa:translate-y-1/2 wa:h-4 wa:w-4 wa:text-[#667781]" }),
          /* @__PURE__ */ c(
            Yn,
            {
              value: l,
              onChange: (M) => m(M.target.value),
              placeholder: i("forwardDialog.searchContacts"),
              className: "wa:pl-9 wa:bg-white wa:border-[#d1d7db] focus-visible:wa:ring-[#00a884]"
            }
          )
        ] }),
        /* @__PURE__ */ c(fn, { className: "wa:h-[300px] -wa:mx-2", children: d ? /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:justify-center wa:h-full", children: /* @__PURE__ */ c(lt, { className: "wa:h-6 wa:w-6 wa:animate-spin wa:text-[#667781]" }) }) : x.length === 0 ? /* @__PURE__ */ c("p", { className: "wa:text-center wa:text-sm wa:text-[#667781] wa:py-8", children: i("forwardDialog.noContactsFound") }) : /* @__PURE__ */ c("div", { className: "wa:space-y-0.5 wa:px-2", children: x.map((M) => /* @__PURE__ */ c(
          "button",
          {
            onClick: () => w(M.phoneNumber),
            className: $(
              "wa:w-full wa:flex wa:items-center wa:gap-3 wa:px-3 wa:py-2.5 wa:rounded-lg wa:text-left wa:transition-colors",
              p === M.phoneNumber ? "wa:bg-[#00a884]/10 wa:ring-1 wa:ring-[#00a884]" : "hover:wa:bg-[#f0f2f5]"
            ),
            children: [
              /* @__PURE__ */ c("div", { className: "wa:w-10 wa:h-10 wa:rounded-full wa:bg-[#dfe5e7] wa:flex wa:items-center wa:justify-center wa:flex-shrink-0", children: /* @__PURE__ */ c("span", { className: "wa:text-sm wa:text-[#667781] wa:font-medium", children: (M.contactName || M.phoneNumber).charAt(0).toUpperCase() }) }),
              /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0", children: [
                /* @__PURE__ */ c("p", { className: "wa:text-sm wa:font-medium wa:text-[#111b21] wa:truncate", children: M.contactName || M.phoneNumber }),
                M.contactName && /* @__PURE__ */ c("p", { className: "wa:text-xs wa:text-[#667781] wa:truncate", children: M.phoneNumber })
              ] })
            ]
          },
          M.id
        )) }) }),
        /* @__PURE__ */ c("div", { className: "wa:flex wa:justify-end wa:gap-2", children: [
          /* @__PURE__ */ c(ce, { variant: "outline", onClick: () => t(!1), children: i("forwardDialog.cancel") }),
          /* @__PURE__ */ c(
            ce,
            {
              onClick: _,
              disabled: !p || h,
              className: "wa:bg-[#00a884] hover:wa:bg-[#008f6f]",
              children: h ? /* @__PURE__ */ c(lt, { className: "wa:h-4 wa:w-4 wa:animate-spin" }) : /* @__PURE__ */ c(Z, { children: [
                /* @__PURE__ */ c(dn, { className: "wa:h-4 wa:w-4 wa:mr-1" }),
                i("forwardDialog.forward")
              ] })
            }
          )
        ] })
      ] })
    }
  );
}
function hv(e) {
  try {
    const t = new Date(e);
    return vt(t) ? $t(t, "HH:mm") : "";
  } catch {
    return "";
  }
}
function wv(e, t, n) {
  try {
    const r = new Date(e);
    return vt(r) ? Xi(r) ? t : Ji(r) ? n : $t(r, "MMMM d, yyyy") : "";
  } catch {
    return "";
  }
}
function Ml(e, t) {
  if (!t) return !0;
  try {
    const n = new Date(e.createdAt), r = new Date(t.createdAt);
    return !vt(n) || !vt(r) ? !1 : $t(n, "yyyy-MM-dd") !== $t(r, "yyyy-MM-dd");
  } catch {
    return !1;
  }
}
function gv(e) {
  const t = e.filter((r) => r.direction === "inbound");
  if (t.length === 0)
    return !1;
  const n = t[t.length - 1];
  try {
    const r = new Date(n.createdAt);
    return vt(r) ? fu(/* @__PURE__ */ new Date(), r) < 24 : !1;
  } catch {
    return !1;
  }
}
function vv(e, t, n) {
  return e.filter((a) => a.direction === "inbound").length === 0 ? t : n;
}
function yv(e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    r.onload = () => {
      const o = r.result.split(",")[1];
      t(o);
    }, r.onerror = n, r.readAsDataURL(e);
  });
}
function bv(e) {
  return e.startsWith("image/") ? "image" : e.startsWith("video/") ? "video" : e.startsWith("audio/") ? "audio" : "document";
}
function xv(e, t) {
  if (e) {
    const n = e.trim().split(/\s+/);
    return n.length >= 2 ? (n[0][0] + n[1][0]).toUpperCase() : e.slice(0, 2).toUpperCase();
  }
  return t ? t.replace(/\D/g, "").slice(-2) : "??";
}
function _v(e, t) {
  if (t === 0) return !0;
  const n = e[t - 1], r = e[t];
  return n.direction !== r.direction ? !0 : Ml(r, n);
}
function Sv({ conversationId: e, phoneNumber: t, contactName: n, profilePicUrl: r, onTemplateSent: a, onBack: o, isVisible: i = !1, instance: s, provider: u, readOnly: d = !1, providerOverride: f }) {
  const l = jt(), m = f || l, p = Fe(), [w, h] = C([]), [g, v] = C(!1), [y, x] = C(!1), [_, P] = C(""), [k, M] = C(!1), [b, N] = C(null), [S, F] = C(null), [V, z] = C(!0), [Y, Q] = C(!1), [W, G] = C(!1), [E, L] = C(null), [X, de] = C(!0), we = D(null), ne = D(null), re = D(null), De = D(0), ye = u === "cloud", q = () => {
    var A;
    (A = we.current) == null || A.scrollIntoView({ behavior: "smooth" });
  }, he = B(async () => {
    if (!(!e || !s))
      try {
        const A = await m.findMessages(s, e), me = A.filter((te) => te.messageType === "reaction"), be = A.filter((te) => te.messageType !== "reaction"), xe = /* @__PURE__ */ new Map();
        me.forEach((te) => {
          te.reactedToMessageId && te.reactionEmoji && xe.set(te.reactedToMessageId, te.reactionEmoji);
        });
        const ae = be.map((te) => {
          const ze = xe.get(te.id);
          return ze ? { ...te, reactionEmoji: ze } : te;
        }).sort((te, ze) => new Date(te.createdAt).getTime() - new Date(ze.createdAt).getTime());
        h((te) => te.length !== ae.length || ae.some((Mt, Nt) => {
          var Kt, qa, Ka;
          return Mt.id !== ((Kt = te[Nt]) == null ? void 0 : Kt.id) || Mt.status !== ((qa = te[Nt]) == null ? void 0 : qa.status) || Mt.reactionEmoji !== ((Ka = te[Nt]) == null ? void 0 : Ka.reactionEmoji);
        }) ? ae : te), De.current = ae.length;
      } catch (A) {
        console.error("Error fetching messages:", A);
      } finally {
        v(!1), x(!1);
      }
  }, [e, s, m]);
  I(() => {
    e && s && (v(!0), he());
  }, [e, s, he]), I(() => {
    X && q();
  }, [w, X]), I(() => {
    z(ye ? gv(w) : !0);
  }, [w, ye]), I(() => {
    const A = ne.current;
    if (!A) return;
    const me = () => {
      const xe = A.querySelector("[data-radix-scroll-area-viewport]");
      if (!xe) return;
      const { scrollTop: Ue, scrollHeight: ae, clientHeight: te } = xe, ze = ae - Ue - te;
      de(ze < 100);
    }, be = A.querySelector("[data-radix-scroll-area-viewport]");
    if (be)
      return be.addEventListener("scroll", me), () => be.removeEventListener("scroll", me);
  }, []);
  const fe = () => {
    x(!0), he();
  };
  va({
    interval: 5e3,
    enabled: !!e && !!s,
    onPoll: he
  });
  const Me = (A) => {
    var be;
    const me = (be = A.target.files) == null ? void 0 : be[0];
    if (me)
      if (N(me), me.type.startsWith("image/")) {
        const xe = new FileReader();
        xe.onloadend = () => {
          F(xe.result);
        }, xe.readAsDataURL(me);
      } else
        F(null);
  }, Xe = () => {
    N(null), F(null), re.current && (re.current.value = "");
  }, We = async (A) => {
    if (A.preventDefault(), !(!_.trim() && !b || !t || !s || k)) {
      M(!0);
      try {
        if (b) {
          const me = await yv(b), be = bv(b.type);
          await m.sendMedia(s, {
            to: t,
            mediaType: be,
            media: me,
            caption: _.trim() || void 0,
            fileName: b.name,
            mimeType: b.type
          });
        } else
          await m.sendText(s, {
            to: t,
            body: _.trim()
          });
        P(""), Xe(), await he();
      } catch (me) {
        console.error("Error sending message:", me);
      } finally {
        M(!1);
      }
    }
  }, mt = async () => {
    await he(), t && a && await a(t);
  };
  return e ? g ? /* @__PURE__ */ c("div", { className: $(
    "wa:flex-1 wa:flex wa:flex-col",
    !i && "wa-content--hidden"
  ), children: [
    /* @__PURE__ */ c("div", { className: "wa:px-4 wa:py-[10px] wa:bg-[#f0f2f5] wa:border-l wa:border-[#e9edef] wa:flex wa:items-center wa:gap-3", children: [
      o && /* @__PURE__ */ c(ce, { onClick: o, variant: "ghost", size: "icon", className: "wa-back-btn wa:text-[#54656f]", children: /* @__PURE__ */ c(Br, { className: "wa:h-5 wa:w-5" }) }),
      /* @__PURE__ */ c(Ne, { className: "wa:h-10 wa:w-10 wa:rounded-full wa:flex-shrink-0" }),
      /* @__PURE__ */ c("div", { className: "wa:flex-1", children: [
        /* @__PURE__ */ c(Ne, { className: "wa:h-4 wa:w-36 wa:mb-1.5" }),
        /* @__PURE__ */ c(Ne, { className: "wa:h-3 wa:w-28" })
      ] })
    ] }),
    /* @__PURE__ */ c("div", { className: "wa-chat-bg wa:flex-1 wa:px-[5%] wa:py-4", children: /* @__PURE__ */ c("div", { className: "wa:max-w-[850px] wa:mx-auto wa:space-y-3", children: [1, 2, 3, 4, 5, 6].map((A) => /* @__PURE__ */ c("div", { className: $("wa:flex wa:mb-2", A % 2 === 0 ? "wa:justify-end" : "wa:justify-start"), children: /* @__PURE__ */ c("div", { className: $(
      "wa:max-w-[70%] wa:rounded-lg wa:px-3 wa:py-2",
      A % 2 === 0 ? "wa:bg-[#d9fdd3]" : "wa:bg-white"
    ), children: [
      /* @__PURE__ */ c(Ne, { className: "wa:h-4 wa:mb-2 wa:bg-black/5", style: { width: `${Math.random() * 150 + 150}px` } }),
      /* @__PURE__ */ c(Ne, { className: "wa:h-3 wa:w-16 wa:bg-black/5" })
    ] }) }, A)) }) })
  ] }) : /* @__PURE__ */ c("div", { className: $(
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
          children: /* @__PURE__ */ c(Br, { className: "wa:h-5 wa:w-5" })
        }
      ),
      /* @__PURE__ */ c(Ls, { className: "wa:h-10 wa:w-10 wa:flex-shrink-0 wa:cursor-pointer", children: [
        r && /* @__PURE__ */ c(Fs, { src: r, alt: n || t }),
        /* @__PURE__ */ c($s, { className: "wa:bg-[#dfe5e7] wa:text-[#54656f] wa:text-sm wa:font-medium", children: xv(n, t) })
      ] }),
      /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0 wa:cursor-pointer", children: [
        /* @__PURE__ */ c("h2", { className: "wa:text-[16px] wa:font-normal wa:text-[#111b21] wa:truncate wa:leading-[21px]", children: n || t || "Conversation" }),
        n && t && /* @__PURE__ */ c("p", { className: "wa:text-[13px] wa:text-[#667781] wa:truncate wa:leading-[17px]", children: t })
      ] }),
      /* @__PURE__ */ c(
        ce,
        {
          onClick: fe,
          disabled: y,
          variant: "ghost",
          size: "icon",
          className: "wa:text-[#54656f] hover:wa:bg-transparent wa:h-10 wa:w-10",
          children: /* @__PURE__ */ c(es, { className: $("wa:h-[20px] wa:w-[20px]", y && "wa:animate-spin") })
        }
      )
    ] }),
    /* @__PURE__ */ c(fn, { ref: ne, style: { flex: 1, height: 0, overflow: "auto" }, className: "wa-chat-bg", children: /* @__PURE__ */ c("div", { style: { padding: "12px 5%" }, children: /* @__PURE__ */ c("div", { children: [
      w.length === 0 ? /* @__PURE__ */ c("div", { className: "wa:flex wa:justify-center wa:mt-8", children: /* @__PURE__ */ c("span", { className: "wa:bg-[#fdf4c5] wa:text-[#54656f] wa:text-[12.5px] wa:px-3 wa:py-1.5 wa:rounded-[7.5px] wa:shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] wa:text-center wa:max-w-[330px]", children: p("messageView.encryptionNotice") }) }) : w.map((A, me) => {
        var te, ze, Mt, Nt, Kt;
        const be = me > 0 ? w[me - 1] : null, xe = Ml(A, be), Ue = _v(w, me), ae = A.direction === "outbound";
        return /* @__PURE__ */ c("div", { children: [
          xe && /* @__PURE__ */ c("div", { style: { margin: "20px 0" }, className: "wa:flex wa:justify-center", children: /* @__PURE__ */ c("span", { style: { padding: "7px 14px" }, className: "wa:bg-white wa:text-[#54656f] wa:text-[12.5px] wa:rounded-[7.5px] wa:shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] wa:select-none wa:font-normal", children: wv(A.createdAt, p("messageView.today"), p("messageView.yesterday")) }) }),
          /* @__PURE__ */ c(
            "div",
            {
              style: Ue ? { marginBottom: 6, marginTop: 6 } : { marginBottom: 6 },
              className: $(
                "wa:flex wa:group",
                ae ? "wa:justify-end" : "wa:justify-start"
              ),
              children: /* @__PURE__ */ c("div", { className: $(
                "wa:relative wa:max-w-[65%]",
                ae ? "wa:pr-2" : "wa:pl-2"
              ), children: [
                A.messageType !== "deleted" && /* @__PURE__ */ c(
                  mv,
                  {
                    message: A,
                    conversationId: e,
                    instance: s,
                    provider: u,
                    onDeleted: he,
                    onForward: L,
                    readOnly: d
                  }
                ),
                /* @__PURE__ */ c(
                  "div",
                  {
                    style: { padding: "7px 12px 9px" },
                    className: $(
                      "wa:rounded-[7.5px] wa:shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]",
                      ae ? "wa:bg-[#d9fdd3] wa:text-[#111b21]" : "wa:bg-white wa:text-[#111b21]",
                      // Tail styling
                      Ue && ae && "wa-bubble-out wa:rounded-tr-none",
                      Ue && !ae && "wa-bubble-in wa:rounded-tl-none",
                      !Ue && ae && "wa:rounded-tr-[7.5px]",
                      !Ue && !ae && "wa:rounded-tl-[7.5px]"
                    ),
                    children: [
                      A.messageType === "deleted" ? /* @__PURE__ */ c("p", { className: "wa:text-[14.2px] wa:leading-[19px] wa:italic wa:text-[#8696a0]", children: p("messageView.messageDeleted") }) : /* @__PURE__ */ c(Z, { children: [
                        A.hasMedia && ((te = A.mediaData) != null && te.url) ? /* @__PURE__ */ c("div", { style: { margin: "-7px -12px 4px" }, className: "wa:overflow-hidden wa:rounded-t-[7.5px]", children: A.messageType === "sticker" ? /* @__PURE__ */ c(
                          "img",
                          {
                            src: A.mediaData.url,
                            alt: "Sticker",
                            style: { margin: "7px 12px 0" },
                            className: "wa:max-w-[150px] wa:max-h-[150px] wa:h-auto"
                          }
                        ) : (ze = A.mediaData.contentType) != null && ze.startsWith("image/") || A.messageType === "image" ? /* @__PURE__ */ c(
                          "img",
                          {
                            src: A.mediaData.url,
                            alt: "Image",
                            className: "wa:w-full wa:h-auto wa:max-h-[330px] wa:object-cover"
                          }
                        ) : (Mt = A.mediaData.contentType) != null && Mt.startsWith("video/") || A.messageType === "video" ? /* @__PURE__ */ c(
                          "video",
                          {
                            src: A.mediaData.url,
                            controls: !0,
                            className: "wa:w-full wa:h-auto wa:max-h-[330px]"
                          }
                        ) : (Nt = A.mediaData.contentType) != null && Nt.startsWith("audio/") || A.messageType === "audio" ? /* @__PURE__ */ c("div", { style: { padding: "7px 12px 0" }, children: /* @__PURE__ */ c(Us, { src: A.mediaData.url, isOutbound: ae }) }) : /* @__PURE__ */ c("div", { style: { padding: "7px 12px 0" }, children: /* @__PURE__ */ c(
                          "a",
                          {
                            href: A.mediaData.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "wa:flex wa:items-center wa:gap-2 wa:text-[14.2px] wa:underline wa:cursor-pointer hover:wa:opacity-80 wa:text-[#027eb5]",
                            children: [
                              /* @__PURE__ */ c(yr, { className: "wa:h-4 wa:w-4 wa:flex-shrink-0" }),
                              A.mediaData.filename || A.filename || p("messageView.downloadFile")
                            ]
                          }
                        ) }) }) : (Kt = A.metadata) != null && Kt.mediaId && A.messageType ? /* @__PURE__ */ c("div", { className: "wa:mb-1", children: /* @__PURE__ */ c(
                          Pm,
                          {
                            mediaId: A.metadata.mediaId,
                            messageType: A.messageType,
                            caption: A.caption,
                            filename: A.filename,
                            isOutbound: ae,
                            instance: s
                          }
                        ) }) : null,
                        A.caption && /* @__PURE__ */ c("p", { className: "wa:text-[14.2px] wa:leading-[19px] wa:break-words wa:whitespace-pre-wrap wa:mt-1", children: A.caption }),
                        A.content && A.content !== A.caption && /* @__PURE__ */ c("p", { className: "wa:text-[14.2px] wa:leading-[19px] wa:break-words wa:whitespace-pre-wrap", children: A.content })
                      ] }),
                      /* @__PURE__ */ c("div", { style: { marginTop: "2px", gap: "3px" }, className: "wa:flex wa:justify-end wa:items-center", children: [
                        /* @__PURE__ */ c("span", { className: "wa:text-[11px] wa:text-[#667781] wa:leading-none wa:select-none", children: hv(A.createdAt) }),
                        ae && A.status && /* @__PURE__ */ c(Z, { children: A.status === "failed" ? /* @__PURE__ */ c(Nd, { className: "wa:h-[15px] wa:w-[15px] wa:text-red-500" }) : /* @__PURE__ */ c("span", { className: $(
                          "wa:text-[16px] wa:leading-none",
                          A.status === "read" ? "wa:text-[#53bdeb]" : "wa:text-[#8696a0]"
                        ), children: A.status === "read" || A.status === "delivered" ? "✓✓" : A.status === "sent" ? "✓" : "" }) })
                      ] }),
                      ae && A.status === "failed" && /* @__PURE__ */ c("div", { className: "wa:mt-0.5 wa:clear-both", children: /* @__PURE__ */ c("span", { className: "wa:text-[11px] wa:text-red-500 wa:flex wa:items-center wa:gap-1", children: p("messageView.notDelivered") }) }),
                      A.reactionEmoji && /* @__PURE__ */ c("div", { className: "wa:absolute -wa:bottom-2.5 wa:right-1 wa:bg-white wa:rounded-full wa:px-1 wa:py-0.5 wa:text-[14px] wa:shadow-[0_1px_3px_rgba(11,20,26,0.16)] wa:leading-none wa:select-none", children: A.reactionEmoji })
                    ]
                  }
                )
              ] })
            }
          )
        ] }, A.id);
      }),
      /* @__PURE__ */ c("div", { ref: we })
    ] }) }) }),
    d ? /* @__PURE__ */ c("div", { className: "wa:bg-[#f0f2f5] wa:border-l wa:border-[#e9edef] wa:flex-shrink-0 wa:px-4 wa:py-3 wa:text-center wa:text-[13px] wa:text-[#667781]", children: p("messageView.readOnlyMode") }) : /* @__PURE__ */ c("div", { className: "wa:bg-[#f0f2f5] wa:border-l wa:border-[#e9edef] wa:flex-shrink-0", children: V ? /* @__PURE__ */ c(Z, { children: [
      b && /* @__PURE__ */ c("div", { className: "wa:px-4 wa:py-2.5 wa:border-b wa:border-[#e9edef] wa:bg-white", children: /* @__PURE__ */ c("div", { className: "wa:flex wa:items-start wa:gap-3 wa:max-w-[900px] wa:mx-auto", children: [
        S ? /* @__PURE__ */ c("img", { src: S, alt: "Preview", className: "wa:w-16 wa:h-16 wa:object-cover wa:rounded-md" }) : /* @__PURE__ */ c("div", { className: "wa:w-16 wa:h-16 wa:bg-[#f0f2f5] wa:rounded-md wa:flex wa:items-center wa:justify-center", children: /* @__PURE__ */ c(yr, { className: "wa:h-6 wa:w-6 wa:text-[#667781]" }) }),
        /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0", children: [
          /* @__PURE__ */ c("p", { className: "wa:text-[14px] wa:font-medium wa:text-[#111b21] wa:truncate", children: b.name }),
          /* @__PURE__ */ c("p", { className: "wa:text-[12px] wa:text-[#667781]", children: [
            (b.size / 1024).toFixed(1),
            " KB"
          ] })
        ] }),
        /* @__PURE__ */ c(
          ce,
          {
            onClick: Xe,
            type: "button",
            variant: "ghost",
            size: "icon",
            className: "wa:text-[#667781] hover:wa:bg-transparent wa:h-8 wa:w-8",
            children: /* @__PURE__ */ c(nr, { className: "wa:h-4 wa:w-4" })
          }
        )
      ] }) }),
      /* @__PURE__ */ c("form", { onSubmit: We, style: { padding: "10px 16px" }, className: "wa:w-full wa:flex wa:gap-2 wa:items-end", children: [
        /* @__PURE__ */ c(
          "input",
          {
            ref: re,
            type: "file",
            onChange: Me,
            accept: "image/*,video/*,audio/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            className: "wa:hidden"
          }
        ),
        /* @__PURE__ */ c(
          ce,
          {
            type: "button",
            onClick: () => {
              var A;
              return (A = re.current) == null ? void 0 : A.click();
            },
            disabled: k,
            variant: "ghost",
            size: "icon",
            className: "wa:text-[#54656f] hover:wa:bg-transparent hover:wa:text-[#111b21] wa:h-[42px] wa:w-[42px] wa:flex-shrink-0",
            title: p("messageView.uploadFile"),
            children: /* @__PURE__ */ c(yr, { className: "wa:h-[22px] wa:w-[22px] wa:rotate-45" })
          }
        ),
        /* @__PURE__ */ c(
          ce,
          {
            type: "button",
            onClick: () => G(!0),
            disabled: k,
            size: "icon",
            variant: "ghost",
            className: "wa:text-[#54656f] hover:wa:bg-transparent hover:wa:text-[#111b21] wa:h-[42px] wa:w-[42px] wa:flex-shrink-0",
            title: p("messageView.sendInteractiveMessage"),
            children: /* @__PURE__ */ c(Rd, { className: "wa:h-[22px] wa:w-[22px]" })
          }
        ),
        /* @__PURE__ */ c("div", { style: { flex: 1, minWidth: 0 }, children: /* @__PURE__ */ c(
          "input",
          {
            type: "text",
            value: _,
            onChange: (A) => P(A.target.value),
            onKeyDown: (A) => {
              A.key === "Enter" && !A.shiftKey && We(A);
            },
            placeholder: p("messageView.typeMessage"),
            disabled: k,
            style: { padding: "8px 12px" },
            className: "wa:w-full wa:h-[42px] wa:bg-white wa:border-none wa:outline-none wa:rounded-[8px] wa:text-[15px] wa:text-[#111b21] wa:placeholder-[#667781] focus:wa:ring-0"
          }
        ) }),
        /* @__PURE__ */ c(
          ce,
          {
            type: "submit",
            disabled: k || !_.trim() && !b,
            size: "icon",
            variant: "ghost",
            className: $(
              "wa:h-[42px] wa:w-[42px] wa:flex-shrink-0 wa:rounded-full",
              _.trim() || b ? "wa:text-[#00a884] hover:wa:bg-transparent hover:wa:text-[#008f6f]" : "wa:text-[#8696a0] hover:wa:bg-transparent"
            ),
            children: /* @__PURE__ */ c(dn, { className: "wa:h-[22px] wa:w-[22px]" })
          }
        )
      ] })
    ] }) : /* @__PURE__ */ c("div", { className: "wa:p-3 wa:max-w-[900px] wa:mx-auto wa:w-full", children: /* @__PURE__ */ c("div", { className: "wa:bg-[#fff4cc] wa:border wa:border-[#e9c46a] wa:rounded-[8px] wa:p-4", children: /* @__PURE__ */ c("div", { className: "wa:flex wa:items-start wa:gap-3", children: [
      /* @__PURE__ */ c(Sd, { className: "wa:h-5 wa:w-5 wa:text-[#8b7000] wa:flex-shrink-0 wa:mt-0.5" }),
      /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0", children: [
        /* @__PURE__ */ c("p", { className: "wa:text-[14px] wa:text-[#111b21] wa:mb-3", children: vv(w, p("messageView.noInboundMessages"), p("messageView.outside24HourWindow")) }),
        /* @__PURE__ */ c(
          ce,
          {
            onClick: () => Q(!0),
            className: "wa:bg-[#00a884] hover:wa:bg-[#008f6f] wa:text-white wa:h-9 wa:rounded-[8px]",
            size: "sm",
            children: [
              /* @__PURE__ */ c(Ld, { className: "wa:h-4 wa:w-4 wa:mr-2" }),
              p("messageView.sendTemplate")
            ]
          }
        )
      ] })
    ] }) }) }) }),
    ye && /* @__PURE__ */ c(
      mh,
      {
        open: Y,
        onOpenChange: Q,
        phoneNumber: t || "",
        onTemplateSent: mt
      }
    ),
    /* @__PURE__ */ c(
      hh,
      {
        open: W,
        onOpenChange: G,
        conversationId: e,
        phoneNumber: t,
        onMessageSent: he,
        instance: s
      }
    ),
    /* @__PURE__ */ c(
      pv,
      {
        open: !!E,
        onOpenChange: (A) => {
          A || L(null);
        },
        message: E,
        instance: s,
        onForwarded: he
      }
    )
  ] }) : /* @__PURE__ */ c("div", { className: $(
    "wa:flex-1 wa:flex wa:flex-col wa:items-center wa:justify-center wa:bg-[#f0f2f5] wa:border-b-[6px] wa:border-[#00a884]",
    !i && "wa-content--hidden"
  ), children: /* @__PURE__ */ c("div", { className: "wa:text-center wa:max-w-[560px] wa:px-6", children: [
    /* @__PURE__ */ c("div", { className: "wa:w-[320px] wa:h-[188px] wa:mx-auto wa:mb-8 wa:flex wa:items-center wa:justify-center", children: /* @__PURE__ */ c("svg", { viewBox: "0 0 303 172", width: "320", className: "wa:text-[#dfe5e7]", children: /* @__PURE__ */ c("path", { fill: "currentColor", d: "M229.565 160.229c32.647-16.166 55.1-50.26 55.1-89.52 0-55.107-45.235-99.791-100.418-99.791-38.633 0-72.103 21.423-88.856 52.891-2.309-.098-4.632-.148-6.968-.148C39.643 23.661 0 63.304 0 112.084c0 24.283 9.834 46.269 25.74 62.21a5.907 5.907 0 0 1-.083-.333c-2.319-10.974-7.19-28.22-18.148-43.478l.063-.043c10.753 6.68 43.07 22.992 80.857 18.498 25.566 19.477 57.102 29.99 90.351 29.99 15.694 0 30.794-2.711 44.846-7.661-1.006-.089-2.013-.192-3.019-.31a209.273 209.273 0 0 1-19.306-3.32c6.839 2.726 15.161-4.476 28.264-7.408z", opacity: ".4" }) }) }),
    /* @__PURE__ */ c("h2", { className: "wa:text-[32px] wa:font-light wa:text-[#41525d] wa:mb-2.5 wa:leading-tight", children: p("messageView.title") }),
    /* @__PURE__ */ c("p", { className: "wa:text-[14px] wa:text-[#667781] wa:leading-[20px]", children: p("messageView.emptyStateDescription") })
  ] }) });
}
function Mv({ onDeviceChange: e }) {
  const { devices: t, selectedDevice: n, selectDevice: r, getProviderForDevice: a, viewMode: o, setViewMode: i } = ha(), s = Fe(), [u, d] = C({}), [f, l] = C(!1), [m, p] = C(!0), w = B(async () => {
    const v = {};
    await Promise.all(
      t.map(async (y) => {
        try {
          const _ = await a(y).getConnectionState(y.instanceName);
          v[y.id] = _;
        } catch {
          v[y.id] = "close";
        }
      })
    ), d(v), p(!1);
  }, [t, a]);
  if (I(() => {
    w();
  }, [w]), va({
    interval: 3e4,
    enabled: !0,
    onPoll: w
  }), I(() => {
    n && e({
      instanceName: n.instanceName,
      provider: n.providerType || "evolution"
    });
  }, [n, e]), I(() => {
    if (!m && n && u[n.id] !== "open") {
      const v = t.find((y) => u[y.id] === "open");
      v && v.id !== n.id && r(v.id);
    }
  }, [m, u, t, n, r]), m)
    return /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:justify-center wa:gap-3 wa:px-4 wa:py-3 wa:text-base wa:text-[#8696a0]", children: [
      /* @__PURE__ */ c(lt, { className: "wa:h-5 wa:w-5 wa:animate-spin" }),
      s("instanceSelector.loadingDevices")
    ] });
  if (t.length === 0)
    return /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:justify-center wa:gap-3 wa:px-4 wa:py-3 wa:text-base wa:text-red-400", children: [
      /* @__PURE__ */ c(Qd, { className: "wa:h-5 wa:w-5" }),
      s("instanceSelector.noDevicesConfigured")
    ] });
  const h = t.filter((v) => u[v.id] === "open").length, g = t.length > 1;
  return /* @__PURE__ */ c(Z, { children: [
    /* @__PURE__ */ c("div", { className: "wa:flex wa:items-center wa:gap-2 wa:w-full", children: [
      g && /* @__PURE__ */ c(Pv, { viewMode: o, onViewModeChange: i }),
      o === "single" ? /* @__PURE__ */ c(
        "button",
        {
          onClick: () => l(!0),
          className: "wa:flex wa:flex-1 wa:items-center wa:justify-center wa:gap-3 wa:px-4 wa:py-3 wa:rounded-lg hover:wa:bg-white/10 wa:transition-colors wa:min-w-0",
          children: [
            /* @__PURE__ */ c(Nl, { status: n && u[n.id] || "close" }),
            /* @__PURE__ */ c("span", { className: "wa:text-base wa:font-medium wa:text-[#e9edef] wa:truncate", children: (n == null ? void 0 : n.label) || (n == null ? void 0 : n.instanceName) || s("instanceSelector.selectDevice") }),
            /* @__PURE__ */ c(an, { variant: "outline", className: "wa:text-xs wa:px-2 wa:py-0.5 wa:h-5 wa:uppercase wa:text-[#8696a0] wa:border-[#8696a0]/40", children: ((n == null ? void 0 : n.providerType) || "evolution") === "evolution" ? "EVO" : "CLOUD" }),
            /* @__PURE__ */ c(Zi, { className: "wa:h-5 wa:w-5 wa:text-[#8696a0]" })
          ]
        }
      ) : (
        /* All mode: summary label */
        /* @__PURE__ */ c("div", { className: "wa:flex wa:flex-1 wa:items-center wa:justify-center wa:gap-3 wa:px-4 wa:py-3 wa:min-w-0", children: [
          /* @__PURE__ */ c("span", { className: "wa:text-base wa:font-medium wa:text-[#e9edef] wa:truncate", children: s("instanceSelector.allDevices") }),
          /* @__PURE__ */ c(an, { variant: "outline", className: "wa:text-xs wa:text-[#8696a0] wa:border-[#8696a0]/40", style: { padding: "4px 12px" }, children: [
            h,
            " ",
            s("instanceSelector.connected")
          ] })
        ] })
      )
    ] }),
    f && o === "single" && /* @__PURE__ */ c(Nv, { onClose: () => l(!1), children: [
      /* @__PURE__ */ c("div", { className: "wa:mb-2 wa:flex wa:flex-col wa:gap-2 wa:text-center", children: /* @__PURE__ */ c("h2", { className: "wa:text-lg wa:leading-none wa:font-semibold wa:text-[#e9edef]", children: s("instanceSelector.selectDevice") }) }),
      /* @__PURE__ */ c("div", { className: "wa:flex wa:flex-col wa:gap-3", children: t.map((v) => /* @__PURE__ */ c(
        Cv,
        {
          device: v,
          status: u[v.id] || "close",
          isSelected: (n == null ? void 0 : n.id) === v.id,
          onSelect: () => {
            r(v.id), l(!1);
          }
        },
        v.id
      )) })
    ] })
  ] });
}
function Nv({ children: e, onClose: t }) {
  const n = Fe(), r = D(null);
  return I(() => {
    const a = (o) => {
      o.key === "Escape" && t();
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, [t]), /* @__PURE__ */ c(
    "div",
    {
      ref: r,
      className: "wa:fixed wa:inset-0 wa:z-50 wa:bg-black/50 wa:flex wa:items-center wa:justify-center",
      onClick: (a) => {
        a.target === r.current && t();
      },
      children: /* @__PURE__ */ c(
        "div",
        {
          className: "wa:bg-[#111b21] wa:border wa:border-[#3b4a54] wa:max-w-md wa:w-full wa:max-w-[calc(100%-2rem)] wa:rounded-lg wa:shadow-lg wa:relative",
          style: { padding: 32 },
          role: "dialog",
          "aria-modal": "true",
          children: [
            /* @__PURE__ */ c(
              "button",
              {
                onClick: t,
                className: "wa:absolute wa:top-4 wa:right-4 wa:rounded-xs wa:opacity-70 wa:transition-opacity hover:wa:opacity-100 wa:text-[#8696a0]",
                children: [
                  /* @__PURE__ */ c(nr, { className: "wa:h-4 wa:w-4" }),
                  /* @__PURE__ */ c("span", { className: "wa:sr-only", children: n("instanceSelector.close") })
                ]
              }
            ),
            e
          ]
        }
      )
    }
  );
}
function Cv({
  device: e,
  status: t,
  isSelected: n,
  onSelect: r
}) {
  return /* @__PURE__ */ c(
    "button",
    {
      onClick: r,
      className: $(
        "wa:w-full wa:flex wa:items-center wa:gap-3 wa:px-4 wa:py-3.5 wa:rounded-lg wa:transition-colors",
        n ? "wa:bg-[#00a884]/20 wa:border wa:border-[#00a884]/40" : "wa:bg-[#233138] hover:wa:bg-[#2a3942] wa:border wa:border-transparent"
      ),
      children: [
        /* @__PURE__ */ c(Nl, { status: t }),
        /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-w-0 wa:text-left", children: [
          /* @__PURE__ */ c("p", { className: "wa:text-base wa:font-medium wa:text-[#e9edef] wa:truncate", children: e.label || e.instanceName }),
          e.label && /* @__PURE__ */ c("p", { className: "wa:text-xs wa:text-[#8696a0] wa:truncate", children: e.instanceName })
        ] }),
        /* @__PURE__ */ c(an, { variant: "outline", className: "wa:text-xs wa:px-2 wa:py-0.5 wa:h-5 wa:uppercase wa:flex-shrink-0 wa:text-[#8696a0] wa:border-[#8696a0]/40", children: (e.providerType || "evolution") === "evolution" ? "EVO" : "CLOUD" }),
        n && /* @__PURE__ */ c(bd, { className: "wa:h-5 wa:w-5 wa:text-[#00a884] wa:flex-shrink-0" })
      ]
    }
  );
}
function Pv({ viewMode: e, onViewModeChange: t }) {
  const n = Fe(), r = e === "all";
  return /* @__PURE__ */ c("label", { className: "wa:flex wa:items-center wa:gap-2 wa:flex-shrink-0 wa:cursor-pointer wa:select-none", children: [
    /* @__PURE__ */ c(
      "button",
      {
        role: "switch",
        "aria-checked": r,
        onClick: () => t(r ? "single" : "all"),
        className: $(
          "wa:relative wa:inline-flex wa:h-5 wa:w-9 wa:items-center wa:rounded-full wa:transition-colors wa:flex-shrink-0",
          r ? "wa:bg-[#00a884]" : "wa:bg-[#3b4a54]"
        ),
        children: /* @__PURE__ */ c(
          "span",
          {
            className: $(
              "wa:inline-block wa:h-3.5 wa:w-3.5 wa:rounded-full wa:bg-white wa:transition-transform",
              r ? "wa:translate-x-[18px]" : "wa:translate-x-[3px]"
            )
          }
        )
      }
    ),
    /* @__PURE__ */ c("span", { className: "wa:text-xs wa:text-[#8696a0] wa:whitespace-nowrap", children: n("instanceSelector.mergeDevices") })
  ] });
}
function Nl({ status: e }) {
  return /* @__PURE__ */ c(
    "span",
    {
      className: $(
        "wa:h-3 wa:w-3 wa:rounded-full wa:flex-shrink-0",
        e === "open" && "wa:bg-green-500",
        e === "connecting" && "wa:bg-yellow-500 wa:animate-pulse",
        (e === "close" || e === "loading") && "wa:bg-red-400"
      ),
      title: e
    }
  );
}
function Ev() {
  const { selectedDevice: e, readonly: t, viewMode: n, devices: r, getProviderForDevice: a } = ha(), [o, i] = C(), s = D(null), u = D(e == null ? void 0 : e.id);
  I(() => {
    e && u.current !== e.id && (u.current = e.id, i(void 0));
  }, [e]);
  const d = D(n);
  I(() => {
    d.current !== n && (d.current = n, i(void 0));
  }, [n]);
  const f = B((y) => {
  }, []), l = n === "all" && (o != null && o.deviceId) ? r.find((y) => y.id === o.deviceId) : void 0, m = n === "all" ? l == null ? void 0 : l.instanceName : e == null ? void 0 : e.instanceName, p = n === "all" ? (l == null ? void 0 : l.providerType) || "evolution" : (e == null ? void 0 : e.providerType) || "evolution", w = n === "all" ? (l == null ? void 0 : l.readonly) ?? !1 : t, h = n === "all" && l ? a(l) : void 0, g = async (y) => {
    var _;
    const x = await ((_ = s.current) == null ? void 0 : _.refresh());
    if (x) {
      const P = x.find((k) => k.phoneNumber === y);
      P && i(P);
    }
  }, v = () => {
    i(void 0);
  };
  return /* @__PURE__ */ c("div", { className: "wa:h-screen wa:flex wa:flex-col wa:bg-[#d1d7db]", children: [
    /* @__PURE__ */ c("div", { className: "wa:bg-[#00a884] wa:flex-shrink-0", style: { height: 127 }, children: /* @__PURE__ */ c("div", { style: { padding: "19px 19px 12px" }, children: /* @__PURE__ */ c("div", { className: "wa:bg-[#111b21] wa:rounded-lg", style: { padding: "6px 12px" }, children: /* @__PURE__ */ c(Mv, { onDeviceChange: f }) }) }) }),
    /* @__PURE__ */ c("div", { className: "wa:flex-1 wa:min-h-0 wa:w-full", style: { marginTop: -68, padding: "0 19px 19px" }, children: /* @__PURE__ */ c("div", { className: "wa:flex wa:h-full wa:bg-white wa:overflow-hidden", style: { boxShadow: "0 1px 1px rgba(0,0,0,0.06), 0 2px 5px rgba(0,0,0,0.06)", borderRadius: "0 0 3px 3px" }, children: [
      /* @__PURE__ */ c(
        Ws,
        {
          ref: s,
          onSelectConversation: i,
          selectedConversationId: n === "all" && (o != null && o.deviceId) ? `${o.deviceId}::${o.id}` : o == null ? void 0 : o.id,
          isHidden: !!o,
          instance: e == null ? void 0 : e.instanceName,
          provider: p
        }
      ),
      /* @__PURE__ */ c(
        Sv,
        {
          conversationId: o == null ? void 0 : o.id,
          phoneNumber: o == null ? void 0 : o.phoneNumber,
          contactName: o == null ? void 0 : o.contactName,
          profilePicUrl: o == null ? void 0 : o.profilePicUrl,
          onTemplateSent: g,
          onBack: v,
          isVisible: !!o,
          instance: m,
          provider: p,
          readOnly: w,
          providerOverride: h
        }
      )
    ] }) })
  ] });
}
function Av(e, t, n) {
  if (e === "evolution")
    return new Ui(t, n);
  throw new Error(`Unknown provider: ${e}`);
}
const Dt = /* @__PURE__ */ new WeakMap();
function Dv(e, t) {
  const n = Dt.get(e);
  n && (n.unmount(), Dt.delete(e));
  const r = Xl(e);
  return Dt.set(e, r), r.render(
    oe(
      ru,
      { config: t },
      oe(Ev)
    )
  ), {
    unmount: () => {
      r.unmount(), Dt.delete(e);
    }
  };
}
function Rv(e) {
  const t = Dt.get(e);
  t && (t.unmount(), Dt.delete(e));
}
export {
  Ev as App,
  Ws as ConversationList,
  Ui as EvolutionProvider,
  Mv as InstanceSelector,
  Sv as MessageView,
  ru as ProviderProvider,
  eu as TranslationsProvider,
  Av as createProvider,
  Un as defaultTranslations,
  Dv as mount,
  Rv as unmount,
  ha as useDeviceContext,
  jt as useProvider,
  Fe as useTranslations
};
