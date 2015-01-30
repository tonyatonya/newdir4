/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.1", n = function(a, b) {
        return new n.fn.init(a, b)
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(a) {
            var b = this.length, c =+ a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j=!1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e=!1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a)?!1 : a.constructor&&!j.call(a.constructor.prototype, "isPrototypeOf")?!1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d===!1)
                            break
                } else 
                    for (e in a)
                        if (d = b.apply(a[e], c), d===!1)
                            break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d===!1)
                        break
            } else 
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d===!1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b?-1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c =+ b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h=!c; g > f; f++)
                d=!b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c), null != d && i.push(d);
            else 
                for (f in a)
                    d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = a.length, c = n.type(a);
        return "function" === c || n.isWindow(a)?!1 : 1 === a.nodeType && b?!0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" +- new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function(a, b) {
            return a === b && (l=!0), 0
        }, C = "undefined", D = 1<<31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return - 1
        }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d>>10 | 55296, 1023 & d | 56320)
        };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                }
                : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a)
                return d;
            if (1 !== (k = b.nodeType) && 9 !== k)
                return [];
            if (p&&!e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h ||!h.parentNode)
                                return d;
                                if (h.id === j)
                                    return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h), d
                    } else {
                        if (f[2])
                            return I.apply(d, b.getElementsByTagName(a)), d;
                            if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
                                return I.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q ||!q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--)
                            o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x)
                        try {
                            return I.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function gb() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }
        function hb(a) {
            return a[u]=!0, a
        }
        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function jb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function kb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return - 1;
            return a ? 1 : - 1
        }
        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function nb(a) {
            return hb(function(b) {
                return b =+ b, hb(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e]=!(d[e] = c[e]))
                })
            })
        }
        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {}, f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a: v, g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p=!f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            })), c.attributes = ib(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function(a) {
                return o.appendChild(a).id = u, !e.getElementsByName ||!e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a, d = b && b.parentNode;
                return a === d ||!(!d || 1 !== d.nodeType ||!(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b)
                    return l=!0, 0;
                var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d ||!c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a)?-1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d?-1 : 1)
            } : function(a, b) {
                if (a === b)
                    return l=!0, 0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (!f ||!g)
                    return a === e?-1 : b === e ? 1 : f?-1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g)
                    return kb(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? kb(h[d], i[d]) : h[d] === v?-1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function(a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector ||!p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
            } catch (e) {}
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p): void 0;
            return void 0 !== f ? f : c.attributes ||!p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l=!c.detectDuplicates, k=!c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                    } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else 
                while (b = a[d++])
                    c += e(b);
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] =+ (a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] =+ (a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c=!a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c)>-1 : "$=" === b ? c && e.slice( - c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c)>-1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice( - 4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling": "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s=!i&&!h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a&&!o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild: q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l=++n && l && l[p] || (m = n = 0) || o.pop()
                                    )if (1 === l.nodeType&&++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else 
                                while (l=++n && l && l[p] || (m = n = 0) || o.pop()
                                    )if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)&&++m && (s && ((l[u] || (l[u] = {})
                                )[a] = [w, m]), l === b))break;
                            return m -= e, m === d || m%d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = K.call(a, f[g]), a[d]=!(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)(f = g[h]) && (a[h]=!(b[h] = f))
                        }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }), has : hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }), contains : hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a)>-1
                    }
                }), lang : hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function(b) {
                        var c;
                        do 
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target : function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function(a) {
                    return a === o
                }, focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus())&&!!(a.type || a.href||~a.tabIndex)
                }, enabled: function(a) {
                    return a.disabled===!1
                }, disabled: function(a) {
                    return a.disabled===!0
                }, checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b&&!!a.checked || "option" === b&&!!a.selected
                }, selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected===!0
                }, empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                }, parent: function(a) {
                    return !d.pseudos.empty(a)
                }, header: function(a) {
                    return Z.test(a.nodeName)
                }, input: function(a) {
                    return Y.test(a.nodeName)
                }, button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: nb(function() {
                    return [0]
                }), last : nb(function(a, b) {
                    return [b - 1]
                }), eq : nb(function(a, b, c) {
                    return [0 > c ? c + b: c]
                }), even : nb(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }), odd : nb(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }), lt : nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)
                        a.push(d);
                    return a
                }), gt : nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)
                        a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq; for (b in{
            radio : !0, checkbox : !0, file : !0, password : !0, image : !0
        })d.pseudos[b] = lb(b);
        for (b in{
            submit: !0,
            reset: !0
        })d.pseudos[b] = mb(b);
        function pb() {}
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c=!1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g]&&!(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };
        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function rb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else 
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                                if (i[d] = j, j[2] = a(b, c, g))
                                    return !0
                        }
            }
        }
        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            } : a[0]
        }
        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fb(a, b[d], c);
            return c
        }
        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) 
                && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function vb(a, b, c, d, e, f) {
            return d&&!d[u] && (d = vb(d)), e&&!e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q=!a ||!f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]]=!(q[n[k]] = l))
                    }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k])>-1 && (f[j]=!(g[j] = l))
                        }
                } else 
                    r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
                })
        }
        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                return a === b
            }, h, !0), l = rb(function(a) {
                return K.call(b, a)>-1
            }, h, !0), m = [function(a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e=++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                                return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                                    value: " " === a[i - 2].type ? "*": ""
                                })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                            }
                            m.push(c)
                }
            return sb(m)
        }
        function xb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1: Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = v)
                    }
                    c && ((l=!o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++])
                        o(r, s, g, h);
                    if (f) {
                        if (p > 0)
                            while (q--)
                                r[q] || s[q] || (s[q] = G.call(i));
                        s = ub(s)
                    }
                    I.apply(i, s), k&&!f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)
                    f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o=!f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)
                        return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a)
                            return I.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates=!!l, m(), c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b]===!0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a); n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains; var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/; function x(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (w.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this))
                            return !0
                        }));
            for (b = 0; c > b; b++)
                n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c ||!c[1] && b)
                return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                    for (c in b)
                        n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.extend({
        dir: function(a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c))
                        break;
                        d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c)>-1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice( - 5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};
    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c]=!0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i=!a.once && [], j = function(l) {
            for (b = a.memory && l, c=!0, g = e || 0, e = 0, f = h.length, d=!0; h && f > g; g++)
                if (h[g].apply(l[0], l[1])===!1 && a.stopOnFalse) {
                    b=!1;
                    break
                }
            d=!1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function() {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function(b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments), d ? f = h.length : b && (e = c, j(b))
                }
                return this
            },
            remove: function() {
                return h && n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c))>-1)
                        h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                }), this
            },
            has: function(a) {
                return a ? n.inArray(a, h)>-1 : !(!h ||!h.length)
            },
            empty: function() {
                return h = [], f = 0, this
            },
            disable: function() {
                return h = i = b = void 0, this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return i = void 0, b || k.disable(), this
            },
            locked: function() {
                return !i
            },
            fireWith: function(a, b) {
                return !h || c&&!i || (b = b || [], b = [a, b.slice ? b.slice(): b], d ? i.push(b) : j(b)), this
            },
            fire: function() {
                return k.fireWith(this, arguments), this
            },
            fired: function() {
                return !!c
            }
        };
        return k
    }, n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1^a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e: 0, g = 1 === f ? a: n.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a===!0?--n.readyWait : n.isReady) || (n.isReady=!0, a!==!0&&--n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }
    n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e=!0;
            for (h in c)
                n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e=!0, n.isFunction(d) || (g=!0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c)
        })), b))for (; i > h; h++)
            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType||!+a.nodeType
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = n.expando + Math.random()
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a))
                return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)
                f[b] = c;
            else if (n.isEmptyObject(f))
                n.extend(this.cache[e], b);
            else 
                for (d in b)
                    f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)
                this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--)
                    delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c?!0 : "false" === c?!1 : "null" === c ? null : + c + "" === c?+c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                M.set(a, b, c)
            } else 
                c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function(a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function(a, b) {
            M.remove(a, b)
        },
        _data: function(a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function(a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType&&!L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a)
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c)
                        return c;
                    if (c = M.get(f, d), void 0 !== c)
                        return c;
                    if (c = P(f, d, void 0), void 0 !== c)
                        return c
                } else 
                    this.each(function() {
                        var c = M.get(this, d);
                        M.set(this, d, b), - 1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)
                c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") ||!n.contains(a.ownerDocument, a)
    }, T = /^(?:checkbox|radio)$/i;
    !function() {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin"in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return !0
    }
    function $() {
        return !1
    }
    function _() {
        try {
            return l.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g)!==!1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o]=!0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--)
                            k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h&&!h.test(k.namespace) || d && d !== k.selector && ("**" !== d ||!k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g&&!m.length && (l.teardown && l.teardown.call(a, p, r.handle)!==!1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else 
                        for (o in i)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type: b, r = j.call(b, "namespace") ? b.namespace.split("."): [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType&&!X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e ||!o.trigger || o.trigger.apply(d, c)!==!1)
                ) {
                if (!e&&!o.noBubble&&!n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
                        p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++])&&!b.isPropagationStopped())
                    b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result===!1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c)!==!1 ||!n.acceptData(d) || k && n.isFunction(d[q])&&!n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a)!==!1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++])&&!a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e)===!1 && (a.preventDefault(), a.stopPropagation())
                        )
                    }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled!==!0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++)
                            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--)
                c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue===!1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando]=!0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d&&!n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d===!1)
                d = $;
            else if (!d)
                return this;
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b===!1 || "function" == typeof b) && (c = b, b = void 0), c===!1 && (c = $), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }
    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }
    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++)
                        n.event.add(b, e, j[e][c])
                    }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }
    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*"): a.querySelectorAll ? a.querySelectorAll(b || "*"): [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }
    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)
                    pb(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)
                        nb(f[d], g[d]);
                else 
                    nb(a, h);
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === n.type(e))
                        n.merge(l, e.nodeType ? [e] : e);
                    else if (cb.test(e)) {
                        f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
                        while (j--)
                            f = f.lastChild;
                            n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                    } else 
                        l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])
                if ((!d||-1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
                    j = 0;
                    while (e = f[j++])
                        fb.test(e.type || "") && c.push(e)
                }
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a?!1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a&&!db.test(a)&&!ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p&&!k.checkClone && eb.test(p))
                return this.each(function(c) {
                    var d = m.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
                });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)
                    h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++)
                        h = f[j], fb.test(h.type || "")&&!L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
                c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qb, rb = {};
    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display: n.css(e[0], "display");
        return e.detach(), f
    }
    function tb(a) {
        var b = l, c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
    }
    var ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    };
    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }
    function yb(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    !function() {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(), b
                },
                boxSizingReliable: function() {
                    return null == c && g(), c
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b=!parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b
                }
            })
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    };
    var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Db = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Eb = ["Webkit", "O", "Moz", "ms"];
    function Fb(a, b) {
        if (b in a)
            return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length;
        while (e--)
            if (b = Eb[e] + c, b in a)
                return b;
        return d
    }
    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }
    function Ib(a, b, c) {
        var d=!0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get"in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c===!0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function() {
                    return Ib(a, b, d)
                }) : Ib(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xb, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb)
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Jb(this, !0)
        },
        hide: function() {
            return Jb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e)
    }
    n.Tween = Kb, Kb.prototype = {
        constructor: Kb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [Vb], Rb = {
        "*": [function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f&&+d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g =+ d || 1;
                do 
                    h = h || ".5", g/=h, n.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h&&--i)
                }
            return e && (g = c.start =+ g||+d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : + e[2]), c
        }
        ]
    };
    function Sb() {
        return setTimeout(function() {
            Lb = void 0
        }), Lb = n.now()
    }
    function Tb(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1: 0;
        4 > d;
        d += 2 - b)c = R[d],
        e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Nb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e ||!q || void 0 === q[d])
                        continue;
                        p=!0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else 
                j = void 0;
        if (n.isEmptyObject(m))
            "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden"in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden=!p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m)
                    n.style(a, b, m[b])
            });
            for (d in m)
                g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand"in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e)
            } else 
                b[d] = e
    }
    function Xb(a, b, c) {
        var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Lb || Sb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length: 0;
                if (e)
                    return this;
                for (e=!0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (Wb(k, j.opts.specialEasing);
        g > f;
        f++)if (d = Qb[f].call(j, a, k, j.opts))
            return d;
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(Xb, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Qb.unshift(a) : Qb.push(a)
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a): {
            complete: c ||!c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b&&!n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue===!0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = Xb(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue===!1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a!==!1 && this.queue(a || "fx", []), this.each(function() {
                var b=!0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else 
                    for (e in g)
                        g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                for (e = f.length; e--;)
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b=!1, f.splice(e, 1));
                (b ||!c) && n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a!==!1 && (a = a || "fx"), this.each(function() {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length: 0;
                for (c.finish=!0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (Lb = n.now(); b < c.length; b++)
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Lb = void 0
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
        Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
        clearInterval(Mb), Mb = null
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }, function() {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled=!0, k.optDisabled=!c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d]=!1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Zb = {
        set: function(a, b, c) {
            return b===!1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function(a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
        }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g ||!n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : - 1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0)
                                d = d.replace(" " + e + " ", " ");
                                g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else (c === U || "boolean" === c) 
                    && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a===!1 ? "" : L.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f)
                                return b;
                                g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c=!0);
                    return c || (a.selectedIndex =- 1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cc = n.now(), dc = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a)
            return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm, jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//, mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = "*/".concat("*");
    try {
        fc = location.href
    } catch (qc) {
        fc = l.createElement("a"), fc.href = "", fc = fc.href
    }
    ec = mc.exec(fc.toLowerCase()) || [];
    function rc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function sc(a, b, c, d) {
        var e = {}, f = a === oc;
        function g(h) {
            var i;
            return e[h]=!0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f?!(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) ||!e["*"] && g("*")
    }
    function tc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }
    function uc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function vc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g===!0 ? g = j[e] : j[e]!==!0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                            if (g!==!0)
                                if (g && a["throws"])
                                    b = g(b);
                                else 
                                    try {
                                        b = g(b)
                                    } catch (l) {
                                        return {
                                            state: "parsererror",
                                            error: g ? l: "No conversion from " + i + " to " + f
                                        }
                                    }
                                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fc,
            type: "GET",
            isLocal: jc.test(ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": pc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a)
        },
        ajaxPrefilter: rc(nc),
        ajaxTransport: rc(oc),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l): n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!f) {
                            f = {};
                            while (b = ic.exec(e))
                                f[b[1].toLowerCase()] = b[2]
                        }
                        b = f[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? e : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else 
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return c && c.abort(b), x(0, b), this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain=!(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t)
                return v;
            i = k.global, i && 0 === n.active++&&n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent=!kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache===!1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType!==!1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers)
                v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k)===!1 || 2 === t))
                return v.abort();
            u = "abort";
            for (j in{
                success: 1,
                error: 1,
                complete: 1
            })
                v[j](k[j]);
            if (c = sc(oc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x( - 1, w)
                }
            } else 
                x( - 1, "No Transport");
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j=!s)) : (s = x, (a ||!x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r: s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var wc = /%20/g, xc = /\[\]$/, yc = /\r?\n/g, zc = /^(?:submit|button|image|reset|file)$/i, Ac = /^(?:input|select|textarea|keygen)/i;
    function Bc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else 
            for (e in b)
                Bc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery&&!n.isPlainObject(a)
            )n.each(a, function() {
            e(this.name, this.value)
        });
        else 
            for (c in a)
                Bc(c, a[c], b, e);
        return d.join("&").replace(wc, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name&&!n(this).is(":disabled") && Ac.test(this.nodeName)&&!zc.test(a) && (this.checked ||!T.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(yc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(yc, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Cc = 0, Dc = {}, Ec = {
        0: 200,
        1223: 204
    }, Fc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function() {
        for (var a in Dc)
            Dc[a]()
    }), k.cors=!!Fc && "withCredentials"in Fc, k.ajax = Fc=!!Fc, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Fc&&!a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g=++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields)
                        f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)
                    f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)
                        throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache=!1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gc.pop() || n.expando + "_" + cc++;
            return this[a]=!0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp!==!1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data&&!(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp!==!1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b, b=!1), b = b || l;
        var d = v.exec(a), e=!c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Ic = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ic)
            return Ic.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jc = a.document.documentElement;
    function Kc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto")>-1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using"in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Jc;
                while (a&&!n.nodeName(a, "html") && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Jc
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Kc(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d===!0 || e===!0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Lc = a.jQuery, Mc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
/*!
 * VERSION: beta 1.10.3
 * DATE: 2013-09-02
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, s, r, n, a = function() {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
        }, o = {}, l = a.prototype = new t("css");
        l.constructor = a, a.version = "1.10.3", a.API = 2, a.defaultTransformPerspective = 0, l = "px", a.suffixMap = {
            top: l,
            right: l,
            bottom: l,
            left: l,
            width: l,
            height: l,
            fontSize: l,
            padding: l,
            margin: l,
            perspective: l
        };
        var h, u, _, p, f, c, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g, m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /[^\d\-\.]/g, y = /(?:\d|\-|\+|=|#|\.)*/g, T = /opacity *= *([^)]*)/, w = /opacity:([^;]*)/, x = /alpha\(opacity *=.+?\)/i, b = /^(rgb|hsl)/, P = /([A-Z])/g, S = /-([a-z])/gi, k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, R = function(t, e) {
            return e.toUpperCase()
        }, C = /(?:Left|Right|Width)/i, O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, A = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, D = /,(?=[^\)]*(?:\(|$))/gi, M = Math.PI / 180, L = 180 / Math.PI, I = {}, X = document, N = X.createElement("div"), F = X.createElement("img"), E = a._internals = {
            _specialProps: o
        }, Y = navigator.userAgent, z = function() {
            var t, e = Y.indexOf("Android"), i = X.createElement("div");
            return _ =- 1 !== Y.indexOf("Safari")&&-1 === Y.indexOf("Chrome") && ( - 1 === e || Number(Y.substr(e + 8, 1)) > 3), f = _ && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), p =- 1 !== Y.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y), c = parseFloat(RegExp.$1), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
        }(), U = function(t) {
            return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, B = function(t) {
            window.console && console.log(t)
        }, j = "", V = "", q = function(t, e) {
            e = e || N;
            var i, s, r = e.style;
            if (void 0 !== r[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s>-1 && void 0 === r[i[s] + t];);
            return s >= 0 ? (V = 3 === s ? "ms" : i[s], j = "-" + V.toLowerCase() + "-", V + t) : null
        }, W = X.defaultView ? X.defaultView.getComputedStyle: function() {}, Q = a.getStyle = function(t, e, i, s, r) {
            var n;
            return z || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || W(t, null)) ? (t = i.getPropertyValue(e.replace(P, "-$1").toLowerCase()), n = t || i.length ? t : i[e]) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : U(t)
        }, Z = function(t, e, i, s, r) {
            if ("px" === s ||!s)
                return i;
            if ("auto" === s ||!i)
                return 0;
            var n, a = C.test(e), o = t, l = N.style, h = 0 > i;
            return h && (i =- i), "%" === s&&-1 !== e.indexOf("border") ? n = i / 100 * (a ? t.clientWidth : t.clientHeight) : (l.cssText = "border-style:solid;border-width:0;position:absolute;line-height:0;", "%" !== s && o.appendChild ? l[a ? "borderLeftWidth": "borderTopWidth"] = i + s : (o = t.parentNode || X.body, l[a ? "width": "height"] = i + s), o.appendChild(N), n = parseFloat(N[a ? "offsetWidth": "offsetHeight"]), o.removeChild(N), 0 !== n || r || (n = Z(t, e, i, s, !0))), h?-n : n
        }, H = function(t, e, i) {
            if ("absolute" !== Q(t, "position", i))
                return 0;
            var s = "left" === e ? "Left": "Top", r = Q(t, "margin" + s, i);
            return t["offset" + s] - (Z(t, e, parseFloat(r), r.replace(y, "")) || 0)
        }, $ = function(t, e) {
            var i, s, r = {};
            if (e = e || W(t, null))
                if (i = e.length)
                    for (; --i>-1;)
                        r[e[i].replace(S, R)] = e.getPropertyValue(e[i]);
                else 
                    for (i in e)
                        r[i] = e[i];
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    r[i.replace(S, R)] = e[i];
            return z || (r.opacity = U(t)), s = be(t, e, !1), r.rotation = s.rotation * L, r.skewX = s.skewX * L, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, xe && (r.z = s.z, r.rotationX = s.rotationX * L, r.rotationY = s.rotationY * L, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
        }, G = function(t, e, i, s, r) {
            var n, a, o, l = {}, h = t.style;
            for (a in i)
                "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a])&&-1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : H(t, a), void 0 !== h[a] && (o = new _e(h, a, h[a], o)));
            if (s)
                for (a in s)
                    "className" !== a && (l[a] = s[a]);
            return {
                difs: l,
                firstMPT: o
            }
        }, K = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, J = ["marginLeft", "marginRight", "marginTop", "marginBottom"], te = function(t, e, i) {
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), r = K[e], n = r.length;
            for (i = i || W(t, null); --n>-1;)
                s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
            return s
        }, ee = function(t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
            var i = t.split(" "), s =- 1 !== t.indexOf("left") ? "0%" : - 1 !== t.indexOf("right") ? "100%" : i[0], r =- 1 !== t.indexOf("top") ? "0%" : - 1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s))&&-1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp =- 1 !== s.indexOf("%"), e.oyp =- 1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "")
        }, ie = function(t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }, se = function(t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
        }, re = function(t, e, i, s) {
            var r, n, a, o, l = 1e-6;
            return null == t ? o = e : "number" == typeof t ? o = t * M : (r = 2 * Math.PI, n = t.split("_"), a = Number(n[0].replace(v, "")) * ( - 1 === t.indexOf("rad") ? M : 1) - ("=" === t.charAt(1) ? 0 : e), n.length && (s && (s[i] = e + a), - 1 !== t.indexOf("short") && (a%=r, a !== a%(r / 2) && (a = 0 > a ? a + r : a - r)), - 1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r)%r - (0 | a / r) * r : - 1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r)%r - (0 | a / r) * r)), o = e + a), l > o && o>-l && (o = 0), o
        }, ne = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, ae = function(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        }, oe = function(t) {
            var e, i, s, r, n, a;
            return t && "" !== t ? "number" == typeof t ? [t>>16, 255 & t>>8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ne[t] ? ne[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t>>16, 255 & t>>8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), r = Number(t[0])%360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ae(r + 1 / 3, e, i), t[1] = ae(r, e, i), t[2] = ae(r - 1 / 3, e, i), t) : (t = t.match(d) || ne.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ne.black
        }, le = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (l in ne)
            le += "|" + l + "\\b";
        le = RegExp(le + ")", "gi");
        var he = function(t, e, i, s) {
            if (null == t)
                return function(t) {
                    return t
                };
            var r, n = e ? (t.match(le) || [""])[0]: "", a = t.split(n).join("").match(g) || [], o = t.substr(0, t.indexOf(a[0])), l = ")" === t.charAt(t.length - 1) ? ")": "", h =- 1 !== t.indexOf(" ") ? " " : ",", u = a.length, _ = u > 0 ? a[0].replace(d, "") : "";
            return u ? r = e ? function(t) {
                var e, p, f, c;
                if ("number" == typeof t)
                    t += _;
                else if (s && D.test(t)) {
                    for (c = t.replace(D, "|").split("|"), f = 0; c.length > f; f++)
                        c[f] = r(c[f]);
                    return c.join(",")
                }
                if (e = (t.match(le) || [n])[0], p = t.split(e).join("").match(g) || [], f = p.length, u > f--)
                    for (; u>++f;)
                        p[f] = i ? p[0 | (f - 1) / 2] : a[f];
                return o + p.join(h) + h + e + l + ( - 1 !== t.indexOf("inset") ? " inset" : "")
            } : function(t) {
                var e, n, p;
                if ("number" == typeof t)
                    t += _;
                else if (s && D.test(t)) {
                    for (n = t.replace(D, "|").split("|"), p = 0; n.length > p; p++)
                        n[p] = r(n[p]);
                    return n.join(",")
                }
                if (e = t.match(g) || [], p = e.length, u > p--)
                    for (; u>++p;)
                        e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                return o + e.join(h) + l
            } : function(t) {
                return t
            }
        }, ue = function(t) {
            return t = t.split(","), function(e, i, s, r, n, a, o) {
                var l, h = (i + "").split(" ");
                for (o = {}, l = 0; 4 > l; l++)
                    o[t[l]] = h[l] = h[l] || h[(l - 1) / 2>>0];
                return r.parse(e, o, n, a)
            }
        }, _e = (E._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o;)
                e = a[o.v], o.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : l > e && e>-l && (e = 0), o.t[o.p] = e, o = o._next;
            if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                for (o = n.firstMPT; o;) {
                    if (i = o.t, i.type) {
                        if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++)
                                r += i["xn" + s] + i["xs" + (s + 1)];
                                i.e = r
                        }
                    } else 
                        i.e = i.s + i.xs0;
                        o = o._next
                }
        }, function(t, e, i, s, r) {
            this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
        }), pe = (E._parseToProxy = function(t, e, i, s, r, n) {
            var a, o, l, h, u, _ = s, p = {}, f = {}, c = i._transform, d = I;
            for (i._transform = null, I = e, s = u = i.parse(t, e, s, r), I = d, n && (i._transform = c, _ && (_._prev = null, _._prev && (_._prev._next = null))); s && s !== _;) {
                if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, p[o] = s.s, n || (h = new _e(s, "s", o, h, s.r), s.c = 0), 1 === s.type))
                    for (a = s.l; --a > 0;)
                        l = "xn" + a, o = s.p + "_" + l, f[o] = s.data[l], p[o] = s[l], n || (h = new _e(s, l, o, h, s.rxp[l]));
                s = s._next
            }
            return {
                proxy: p,
                end: f,
                firstMPT: h,
                pt: u
            }
        }, E.CSSPropTween = function(t, e, s, r, a, o, l, h, u, _, p) {
            this.t = t, this.p = e, this.s = s, this.c = r, this.n = l || e, t instanceof pe || n.push(this.n), this.r = h, this.type = o || 0, u && (this.pr = u, i=!0), this.b = void 0 === _ ? s : _, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this)
        }), fe = a.parseComplex = function(t, e, i, s, r, n, a, o, l, u) {
            i = i || n || "", a = new pe(t, e, 0, 0, a, u ? 2 : 1, null, !1, o, i, s), s += "";
            var _, p, f, c, g, v, y, T, w, x, P, S, k = i.split(", ").join(",").split(" "), R = s.split(", ").join(",").split(" "), C = k.length, O = h!==!1;
            for (( - 1 !== s.indexOf(",")||-1 !== i.indexOf(",")) && (k = k.join(" ").replace(D, ", ").split(" "), R = R.join(" ").replace(D, ", ").split(" "), C = k.length), C !== R.length && (k = (n || "").split(" "), C = k.length), a.plugin = l, a.setRatio = u, _ = 0; C > _; _++)
                if (c = k[_], g = R[_], T = parseFloat(c), T || 0 === T)
                    a.appendXtra("", T, ie(g, T), g.replace(m, ""), O&&-1 !== g.indexOf("px"), !0);
                else if (r && ("#" === c.charAt(0) || ne[c] || b.test(c)))
                    S = "," === g.charAt(g.length - 1) ? ")," : ")", c = oe(c), g = oe(g), w = c.length + g.length > 6, w&&!z && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[_]).join("transparent")) : (z || (w=!1), a.appendXtra(w ? "rgba(" : "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], w ? "," : S, !0), w && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, S, !1)));
                else if (v = c.match(d)) {
                    if (y = g.match(m), !y || y.length !== v.length)
                        return a;
                        for (f = 0, p = 0; v.length > p; p++)
                            P = v[p], x = c.indexOf(P, f), a.appendXtra(c.substr(f, x - f), Number(P), ie(y[p], P), "", O && "px" === c.substr(x + P.length, 2), 0 === p), f = x + P.length;
                            a["xs" + a.l] += c.substr(f)
                } else 
                    a["xs" + a.l] += a.l ? " " + c : c;
            if ( - 1 !== s.indexOf("=") && a.data) {
                for (S = a.xs0 + a.data.s, _ = 1; a.l > _; _++)
                    S += a["xs" + _] + a.data["xn" + _];
                a.e = S + a["xs" + _]
            }
            return a.l || (a.type =- 1, a.xs0 = a.e), a.xfirst || a
        }, ce = 9;
        for (l = pe.prototype, l.l = l.pr = 0; --ce > 0;)
            l["xn" + ce] = 0, l["xs" + ce] = "";
        l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, s, r, n) {
            var a = this, o = a.l;
            return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                s: e + i
            }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
        };
        var de = function(t, e) {
            e = e || {}, this.p = e.prefix ? q(t) || t : t, o[t] = o[this.p] = this, this.format = e.formatter || he(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        }, me = E._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var s, r, n = t.split(","), a = e.defaultValue;
            for (i = i || [a], s = 0; n.length > s; s++)
                e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new de(n[s], e)
        }, ge = function(t) {
            if (!o[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                me(t, {
                    parser: function(t, i, s, r, n, a, l) {
                        var h = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                        return h ? (h._cssRegister(), o[s].parse(t, i, s, r, n, a, l)) : (B("Error: " + e + " js file not loaded."), n)
                    }
                })
            }
        };
        l = de.prototype, l.parseComplex = function(t, e, i, s, r, n) {
            var a, o, l, h, u, _, p = this.keyword;
            if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : p && (o = [e], l = [i])), l) {
                for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++)
                    e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, p && (u = e.indexOf(p), _ = i.indexOf(p), u !== _ && (i =- 1 === _ ? l : o, i[a] += " " + p));
                e = o.join(", "), i = l.join(", ")
            }
            return fe(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
        }, l.parse = function(t, e, i, s, n, a) {
            return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
        }, a.registerSpecialProp = function(t, e, i) {
            me(t, {
                parser: function(t, s, r, n, a, o) {
                    var l = new pe(t, r, 0, 0, a, 2, r, !1, i);
                    return l.plugin = o, l.setRatio = e(t, s, n._tween, r), l
                },
                priority: i
            })
        };
        var ve = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","), ye = q("transform"), Te = j + "transform", we = q("transformOrigin"), xe = null !== q("perspective"), be = function(t, e, i, s) {
            if (t._gsTransform && i&&!s)
                return t._gsTransform;
            var r, n, o, l, h, u, _, p, f, c, d, m, g, v = i ? t._gsTransform || {
                skewY: 0
            }
            : {
                skewY: 0
            }, y = 0 > v.scaleX, T = 2e-5, w = 1e5, x =- Math.PI + 1e-4, b = Math.PI - 1e-4, P = xe ? parseFloat(Q(t, we, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
            for (ye ? r = Q(t, Te, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(O)
                , r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = n.length;
            --o>-1;
            )l = Number(n[o]), n[o] = (h = l - (l|=0)) ? (0 | h * w + (0 > h?-.5 : .5)) / w + l : l;
            if (16 === n.length) {
                var S = n[8], k = n[9], R = n[10], C = n[12], A = n[13], D = n[14];
                if (v.zOrigin && (D =- v.zOrigin, C = S * D - n[12], A = k * D - n[13], D = R * D + v.zOrigin - n[14]), !i || s || null == v.rotationX) {
                    var M, L, I, X, N, F, E, Y = n[0], z = n[1], U = n[2], B = n[3], j = n[4], V = n[5], q = n[6], W = n[7], Z = n[11], H = v.rotationX = Math.atan2(q, R), $ = x > H || H > b;
                    H && (X = Math.cos( - H), N = Math.sin( - H), M = j * X + S * N, L = V * X + k * N, I = q * X + R * N, S = j*-N + S * X, k = V*-N + k * X, R = q*-N + R * X, Z = W*-N + Z * X, j = M, V = L, q = I), H = v.rotationY = Math.atan2(S, Y), H && (F = x > H || H > b, X = Math.cos( - H), N = Math.sin( - H), M = Y * X - S * N, L = z * X - k * N, I = U * X - R * N, k = z * N + k * X, R = U * N + R * X, Z = B * N + Z * X, Y = M, z = L, U = I), H = v.rotation = Math.atan2(z, V), H && (E = x > H || H > b, X = Math.cos( - H), N = Math.sin( - H), Y = Y * X + j * N, L = z * X + V * N, V = z*-N + V * X, q = U*-N + q * X, z = L), E && $ ? v.rotation = v.rotationX = 0 : E && F ? v.rotation = v.rotationY = 0 : F && $ && (v.rotationY = v.rotationX = 0), v.scaleX = (0 | Math.sqrt(Y * Y + z * z) * w + .5) / w, v.scaleY = (0 | Math.sqrt(V * V + k * k) * w + .5) / w, v.scaleZ = (0 | Math.sqrt(q * q + R * R) * w + .5) / w, v.skewX = 0, v.perspective = Z ? 1 / (0 > Z?-Z : Z) : 0, v.x = C, v.y = A, v.z = D
                }
            } else if (!(xe&&!s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === Q(t, "display", e))
                ) {
                var G = n.length >= 6, K = G ? n[0]: 1, J = n[1] || 0, te = n[2] || 0, ee = G ? n[3]: 1;
                v.x = n[4] || 0, v.y = n[5] || 0, u = Math.sqrt(K * K + J * J), _ = Math.sqrt(ee * ee + te * te), p = K || J ? Math.atan2(J, K) : v.rotation || 0, f = te || ee ? Math.atan2(te, ee) + p : v.skewX || 0, c = u - Math.abs(v.scaleX || 0), d = _ - Math.abs(v.scaleY || 0), Math.abs(f) > Math.PI / 2 && Math.abs(f) < 1.5 * Math.PI && (y ? (u*=-1, f += 0 >= p ? Math.PI : - Math.PI, p += 0 >= p ? Math.PI : - Math.PI) : (_*=-1, f += 0 >= f ? Math.PI : - Math.PI)), m = (p - v.rotation)%Math.PI, g = (f - v.skewX)%Math.PI, (void 0 === v.skewX || c > T||-T > c || d > T||-T > d || m > x && b > m && false | m * w || g > x && b > g && false | g * w) && (v.scaleX = u, v.scaleY = _, v.rotation = p, v.skewX = f), xe && (v.rotationX = v.rotationY = v.z = 0, v.perspective = parseFloat(a.defaultTransformPerspective) || 0, v.scaleZ = 1)
            }
            v.zOrigin = P;
            for (o in v)
                T > v[o] && v[o]>-T && (v[o] = 0);
            return i && (t._gsTransform = v), v
        }, Pe = function(t) {
            var e, i, s = this.data, r =- s.rotation, n = r + s.skewX, a = 1e5, o = (0 | Math.cos(r) * s.scaleX * a) / a, l = (0 | Math.sin(r) * s.scaleX * a) / a, h = (0 | Math.sin(n)*-s.scaleY * a) / a, u = (0 | Math.cos(n) * s.scaleY * a) / a, _ = this.t.style, p = this.t.currentStyle;
            if (p) {
                i = l, l =- h, h =- i, e = p.filter, _.filter = "";
                var f, d, m = this.t.offsetWidth, g = this.t.offsetHeight, v = "absolute" !== p.position, w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u, x = s.x, b = s.y;
                if (null != s.ox && (f = (s.oxp ? .01 * m * s.ox : s.ox) - m / 2, d = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, x += f - (f * o + d * l), b += d - (f * h + d * u)), v ? (f = m / 2, d = g / 2, w += ", Dx=" + (f - (f * o + d * l) + x) + ", Dy=" + (d - (f * h + d * u) + b) + ")") : w += ", sizingMethod='auto expand')", _.filter =- 1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(A, w) : w + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v&&-1 === w.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1)||-1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && _.removeAttribute("filter")), !v) {
                    var P, S, k, R = 8 > c ? 1: - 1;
                    for (f = s.ieOffsetX || 0, d = s.ieOffsetY || 0, s.ieOffsetX = Math.round((m - ((0 > o?-o : o) * m + (0 > l?-l : l) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > u?-u : u) * g + (0 > h?-h : h) * m)) / 2 + b), ce = 0; 4 > ce; ce++)
                        S = J[ce], P = p[S], i =- 1 !== P.indexOf("px") ? parseFloat(P) : Z(this.t, S, parseFloat(P), P.replace(y, "")) || 0, k = i !== s[S] ? 2 > ce?-s.ieOffsetX : - s.ieOffsetY : 2 > ce ? f - s.ieOffsetX : d - s.ieOffsetY, _[S] = (s[S] = Math.round(i - k * (0 === ce || 2 === ce ? 1 : R))) + "px"
                }
            }
        }, Se = function() {
            var t, e, i, s, r, n, a, o, l, h, u, _, f, c, d, m, g, v, y, T, w, x, b, P, S, k, R = this.data, C = this.t.style, O = R.rotation, A = R.scaleX, D = R.scaleY, M = R.scaleZ, L = R.perspective;
            if (p && (P = C.top ? "top" : C.bottom ? "bottom" : parseFloat(Q(this.t, "top", null, !1)) ? "bottom" : "top", T = Q(this.t, P, null, !1), S = parseFloat(T) || 0, k = T.substr((S + "").length) || "px", R._ffFix=!R._ffFix, C[P] = (R._ffFix ? S + .05 : S - .05) + k), O || R.skewX)
                v = Math.cos(O), y = Math.sin(O), t = v, r = y, R.skewX && (O -= R.skewX, v = Math.cos(O), y = Math.sin(O)), e =- y, n = v;
            else {
                if (!(R.rotationY || R.rotationX || 1 !== M || L))
                    return C[ye] = "translate3d(" + R.x + "px," + R.y + "px," + R.z + "px)" + (1 !== A || 1 !== D ? " scale(" + A + "," + D + ")" : ""), void 0;
                t = n = 1, e = r = 0
            }
            u = 1, i = s = a = o = l = h = _ = f = c = 0, d = L?-1 / L : 0, m = R.zOrigin, g = 1e5, O = R.rotationY, O && (v = Math.cos(O), y = Math.sin(O), l = u*-y, f = d*-y, i = t * y, a = r * y, u*=v, d*=v, t*=v, r*=v), O = R.rotationX, O && (v = Math.cos(O), y = Math.sin(O), T = e * v + i * y, w = n * v + a * y, x = h * v + u * y, b = c * v + d * y, i = e*-y + i * v, a = n*-y + a * v, u = h*-y + u * v, d = c*-y + d * v, e = T, n = w, h = x, c = b), 1 !== M && (i*=M, a*=M, u*=M, d*=M), 1 !== D && (e*=D, n*=D, h*=D, c*=D), 1 !== A && (t*=A, r*=A, l*=A, f*=A), m && (_ -= m, s = i * _, o = a * _, _ = u * _ + m), s = (T = (s += R.x) - (s|=0)) ? (0 | T * g + (0 > T?-.5 : .5)) / g + s : s, o = (T = (o += R.y) - (o|=0)) ? (0 | T * g + (0 > T?-.5 : .5)) / g + o : o, _ = (T = (_ += R.z) - (_|=0)) ? (0 | T * g + (0 > T?-.5 : .5)) / g + _ : _, C[ye] = "matrix3d(" + [(0 | t * g) / g, (0 | r * g) / g, (0 | l * g) / g, (0 | f * g) / g, (0 | e * g) / g, (0 | n * g) / g, (0 | h * g) / g, (0 | c * g) / g, (0 | i * g) / g, (0 | a * g) / g, (0 | u * g) / g, (0 | d * g) / g, s, o, _, L ? 1 +- _ / L: 1].join(",") + ")"
        }, ke = function() {
            var t, e, i, s, r, n, a, o, l, h = this.data, u = this.t, _ = u.style;
            p && (t = _.top ? "top" : _.bottom ? "bottom" : parseFloat(Q(u, "top", null, !1)) ? "bottom" : "top", e = Q(u, t, null, !1), i = parseFloat(e) || 0, s = e.substr((i + "").length) || "px", h._ffFix=!h._ffFix, _[t] = (h._ffFix ? i + .05 : i - .05) + s), h.rotation || h.skewX ? (r = h.rotation, n = r - h.skewX, a = 1e5, o = h.scaleX * a, l = h.scaleY * a, _[ye] = "matrix(" + (0 | Math.cos(r) * o) / a + "," + (0 | Math.sin(r) * o) / a + "," + (0 | Math.sin(n)*-l) / a + "," + (0 | Math.cos(n) * l) / a + "," + h.x + "," + h.y + ")") : _[ye] = "matrix(" + h.scaleX + ",0,0," + h.scaleY + "," + h.x + "," + h.y + ")"
        };
        me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
            parser: function(t, e, i, s, n, a, o) {
                if (s._transform)
                    return n;
                var l, h, u, _, p, f, c, d = s._transform = be(t, r, !0, o.parseTransform), m = t.style, g = 1e-6, v = ve.length, y = o, T = {};
                if ("string" == typeof y.transform && ye)
                    u = m.cssText, m[ye] = y.transform, m.display = "block", l = be(t, null, !1), m.cssText = u;
                else if ("object" == typeof y) {
                    if (l = {
                        scaleX: se(null != y.scaleX ? y.scaleX : y.scale, d.scaleX),
                        scaleY: se(null != y.scaleY ? y.scaleY : y.scale, d.scaleY),
                        scaleZ: se(null != y.scaleZ ? y.scaleZ : y.scale, d.scaleZ),
                        x: se(y.x, d.x),
                        y: se(y.y, d.y),
                        z: se(y.z, d.z),
                        perspective: se(y.transformPerspective, d.perspective)
                    }, c = y.directionalRotation, null != c)
                        if ("object" == typeof c)
                            for (u in c)
                                y[u] = c[u];
                        else 
                            y.rotation = c;
                    l.rotation = re("rotation"in y ? y.rotation : "shortRotation"in y ? y.shortRotation + "_short" : "rotationZ"in y ? y.rotationZ : d.rotation * L, d.rotation, "rotation", T), xe && (l.rotationX = re("rotationX"in y ? y.rotationX : "shortRotationX"in y ? y.shortRotationX + "_short" : d.rotationX * L || 0, d.rotationX, "rotationX", T), l.rotationY = re("rotationY"in y ? y.rotationY : "shortRotationY"in y ? y.shortRotationY + "_short" : d.rotationY * L || 0, d.rotationY, "rotationY", T)), l.skewX = null == y.skewX ? d.skewX : re(y.skewX, d.skewX), l.skewY = null == y.skewY ? d.skewY : re(y.skewY, d.skewY), (h = l.skewY - d.skewY) && (l.skewX += h, l.rotation += h)
                }
                for (null != y.force3D && (d.force3D = y.force3D, f=!0), p = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, p || null == y.scale || (l.scaleZ = 1); --v>-1;)
                    i = ve[v], _ = l[i] - d[i], (_ > g||-g > _ || null != I[i]) && (f=!0, n = new pe(d, i, d[i], _, n), i in T && (n.e = T[i]), n.xs0 = 0, n.plugin = a, s._overwriteProps.push(n.n));
                return _ = y.transformOrigin, (_ || xe && p && d.zOrigin) && (ye ? (f=!0, i = we, _ = (_ || Q(t, i, r, !1, "50% 50%")) + "", n = new pe(m, i, 0, 0, n, - 1, "transformOrigin"), n.b = m[i], n.plugin = a, xe ? (u = d.zOrigin, _ = _.split(" "), d.zOrigin = (_.length > 2 && (0 === u || "0px" !== _[2]) ? parseFloat(_[2]) : u) || 0, n.xs0 = n.e = m[i] = _[0] + " " + (_[1] || "50%") + " 0px", n = new pe(d, "zOrigin", 0, 0, n, - 1, n.n), n.b = u, n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = m[i] = _) : ee(_ + "", d)), f && (s._transformType = p || 3 === this._transformType ? 3 : 2), n
            },
            prefix: !0
        }), me("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), me("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, a) {
                e = this.format(e);
                var o, l, h, u, _, p, f, c, d, m, g, v, y, T, w, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], P = t.style;
                for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; b.length > l; l++)
                    this.p.indexOf("border") && (b[l] = q(b[l])), _ = u = Q(t, b[l], r, !1, "0px"), - 1 !== _.indexOf(" ") && (u = _.split(" "), _ = u[0], u = u[1]), p = h = o[l], f = parseFloat(_), v = _.substr((f + "").length), y = "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c*=parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)), "" === g && (g = s[i] || v), g !== v && (T = Z(t, "borderLeft", f, v), w = Z(t, "borderTop", f, v), "%" === g ? (_ = 100 * (T / d) + "%", u = 100 * (w / m) + "%") : "em" === g ? (x = Z(t, "borderLeft", 1, "em"), _ = T / x + "em", u = w / x + "em") : (_ = T + "px", u = w + "px"), y && (p = parseFloat(_) + c + g, h = parseFloat(u) + c + g)), a = fe(P, b[l], _ + " " + u, p + " " + h, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: he("0px 0px 0px 0px", !1, !0)
        }), me("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, s, n, a) {
                var o, l, h, u, _, p, f = "background-position", d = r || W(t, null), m = this.format((d ? c ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                if ( - 1 !== m.indexOf("%") != ( - 1 !== g.indexOf("%")) && (p = Q(t, "backgroundImage").replace(k, ""), p && "none" !== p)) {
                    for (o = m.split(" "), l = g.split(" "), F.setAttribute("src", p), h = 2; --h>-1;)
                        m = o[h], u =- 1 !== m.indexOf("%"), u !== ( - 1 !== l[h].indexOf("%")) && (_ = 0 === h ? t.offsetWidth - F.width : t.offsetHeight - F.height, o[h] = u ? parseFloat(m) / 100 * _ + "px" : 100 * (parseFloat(m) / _) + "%");
                    m = o.join(" ")
                }
                return this.parseComplex(t.style, m, g, n, a)
            },
            formatter: ee
        }), me("backgroundSize", {
            defaultValue: "0 0",
            formatter: ee
        }), me("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), me("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), me("transformStyle", {
            prefix: !0
        }), me("backfaceVisibility", {
            prefix: !0
        }), me("margin", {
            parser: ue("marginTop,marginRight,marginBottom,marginLeft")
        }), me("padding", {
            parser: ue("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), me("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, s, n, a) {
                var o, l, h;
                return 9 > c ? (l = t.currentStyle, h = 8 > c ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
            }
        }), me("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), me("autoRound,strictUnits", {
            parser: function(t, e, i, s, r) {
                return r
            }
        }), me("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, s, n, a) {
                return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(le) || ["#000"])[0]
            }
        }), me("float,cssFloat,styleFloat", {
            parser: function(t, e, i, s, r) {
                var n = t.style, a = "cssFloat"in n ? "cssFloat": "styleFloat";
                return new pe(n, a, 0, 0, r, - 1, i, !1, 0, n[a], e)
            }
        });
        var Re = function(t) {
            var e, i = this.t, s = i.filter || Q(this.data, "filter"), r = 0 | this.s + this.c * t;
            100 === r && ( - 1 === s.indexOf("atrix(")&&-1 === s.indexOf("radient(")&&-1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e=!Q(this.data, "filter")) : (i.filter = s.replace(x, ""), e=!0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), - 1 === s.indexOf("opacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(T, "opacity=" + r))
        };
        me("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, s, n, a) {
                var o = parseFloat(Q(t, "opacity", r, !1, "1")), l = t.style, h = "autoAlpha" === i;
                return e = parseFloat(e), h && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), z ? n = new pe(l, "opacity", o, e - o, n) : (n = new pe(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Re), h && (n = new pe(l, "visibility", 0, 0, n, - 1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
            }
        });
        var Ce = function(t, e) {
            e && (t.removeProperty ? t.removeProperty(e.replace(P, "-$1").toLowerCase()) : t.removeAttribute(e))
        }, Oe = function(t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.className = 0 === t ? this.b : this.e;
                for (var e = this.data, i = this.t.style; e;)
                    e.v ? i[e.p] = e.v : Ce(i, e.p), e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else 
                this.t.className !== this.e && (this.t.className = this.e)
        };
        me("className", {
            parser: function(t, e, s, n, a, o, l) {
                var h, u, _, p, f, c = t.className, d = t.style.cssText;
                if (a = n._classNamePT = new pe(t, s, 0, 0, a, 2), a.setRatio = Oe, a.pr =- 11, i=!0, a.b = c, u = $(t, r), _ = t._gsClassPT) {
                    for (p = {}, f = _.data; f;)
                        p[f.p] = 1, f = f._next;
                    _.setRatio(1)
                }
                return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.className = a.e, h = G(t, u, $(t), l, p), t.className = c, a.data = h.firstMPT, t.style.cssText = d, a = a.xfirst = n.parse(t, h.difs, a, o)), a
            }
        });
        var Ae = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration) {
                var e, i, s, r, n = this.t.style, a = o.transform.parse;
                if ("all" === this.e)
                    n.cssText = "", r=!0;
                else 
                    for (e = this.e.split(","), s = e.length; --s>-1;)
                        i = e[s], o[i] && (o[i].parse === a ? r=!0 : i = "transformOrigin" === i ? we : o[i].p), Ce(n, i);
                r && (Ce(n, ye), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (me("clearProps", {
            parser: function(t, e, s, r, n) {
                return n = new pe(t, s, 0, 0, n, 2), n.setRatio = Ae, n.e = e, n.pr =- 10, n.data = r._tween, i=!0, n
            }
        })
            , l = "bezier,throwProps,physicsProps,physics2D".split(","), ce = l.length;
        ce--;
        )ge(l[ce]);
        l = a.prototype, l._firstPT = null, l._onInitTween = function(t, e, o) {
            if (!t.nodeType)
                return !1;
            this._target = t, this._tween = o, this._vars = e, h = e.autoRound, i=!1, s = e.suffixMap || a.suffixMap, r = W(t, ""), n = this._overwriteProps;
            var l, p, c, d, m, g, v, y, T, x = t.style;
            if (u && "" === x.zIndex && (l = Q(t, "zIndex", r), ("auto" === l || "" === l) && (x.zIndex = 0)), "string" == typeof e && (d = x.cssText, l = $(t, r), x.cssText = d + ";" + e, l = G(t, l, $(t)).difs, !z && w.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, x.cssText = d), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                for (T = 3 === this._transformType, ye ? _ && (u=!0, "" === x.zIndex && (v = Q(t, "zIndex", r), ("auto" === v || "" === v) && (x.zIndex = 0)), f && (x.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : x.zoom = 1, c = p; c && c._next;)
                    c = c._next;
                y = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && xe ? Se : ye ? ke : Pe, y.data = this._transform || be(t, r, !0), n.pop()
            }
            if (i) {
                for (; p;) {
                    for (g = p._next, c = d; c && c.pr > p.pr;)
                        c = c._next;
                    (p._prev = c ? c._prev : m) ? p._prev._next = p : d = p, (p._next = c) ? c._prev = p : m = p, p = g
                }
                this._firstPT = d
            }
            return !0
        }, l.parse = function(t, e, i, n) {
            var a, l, u, _, p, f, c, d, m, g, v = t.style;
            for (a in e)
                f = e[a], l = o[a], l ? i = l.parse(t, f, a, this, i, n, e) : (p = Q(t, a, r) + "", m = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a||-1 !== a.indexOf("Color") || m && b.test(f) ? (m || (f = oe(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = fe(v, a, p, f, !0, "transparent", i, 0, n)) : !m||-1 === f.indexOf(" ")&&-1 === f.indexOf(",") ? (u = parseFloat(p), c = u || 0 === u ? p.substr((u + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (u = te(t, a, r), c = "px") : "left" === a || "top" === a ? (u = H(t, a, r), c = "px") : (u = "opacity" !== a ? 0 : 1, c = "")), g = m && "=" === f.charAt(1), g ? (_ = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), _*=parseFloat(f), d = f.replace(y, "")) : (_ = parseFloat(f), d = m ? f.substr((_ + "").length) || "" : ""), "" === d && (d = s[a] || c), f = _ || 0 === _ ? (g ? _ + u : _) + d : e[a], c !== d && "" !== d && (_ || 0 === _) && (u || 0 === u) && (u = Z(t, a, u, c), "%" === d ? (u/=Z(t, a, 100, "%") / 100, u > 100 && (u = 100), e.strictUnits!==!0 && (p = u + "%")) : "em" === d ? u/=Z(t, a, 1, "em") : (_ = Z(t, a, _, d), d = "px"), g && (_ || 0 === _) && (f = _ + u + d)), g && (_ += u), !u && 0 !== u ||!_ && 0 !== _ ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pe(v, a, _ || u || 0, 0, i, - 1, a, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== a&&-1 === a.indexOf("Style") ? f : p) : B("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, u, _ - u, i, 0, a, h!==!1 && ("px" === d || "zIndex" === a), 0, p, f), i.xs0 = d)) : i = fe(v, a, p, f, !0, null, i, 0, n)), n && i&&!i.plugin && (i.plugin = n);
            return i
        }, l.setRatio = function(t) {
            var e, i, s, r = this._firstPT, n = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime===-1e-6)
                    for (; r;) {
                        if (e = r.c * t + r.s, r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : n > e && e>-n && (e = 0), r.type)
                            if (1 === r.type)
                                if (s = r.l, 2 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++)
                                        i += r["xn" + s] + r["xs" + (s + 1)];
                                        r.t[r.p] = i
                                } else 
                                    - 1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                else 
                    r.t[r.p] = e + r.xs0;
                    r = r._next
                    } else 
                        for (; r;)
                            2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
            else 
                for (; r;)
                    2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
        }, l._enableTransforms = function(t) {
            this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || be(this._target, r, !0)
        }, l._linkCSSP = function(t, e, i, s) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s=!0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, l._kill = function(e) {
            var i, s, r, n = e;
            if (e.autoAlpha || e.alpha) {
                n = {};
                for (s in e)
                    n[s] = e[s];
                n.opacity = 1, n.autoAlpha && (n.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
        };
        var De = function(t, e, i) {
            var s, r, n, a;
            if (t.slice)
                for (r = t.length; --r>-1;)
                    De(t[r], e, i);
            else 
                for (s = t.childNodes, r = s.length; --r>-1;)
                    n = s[r], a = n.type, n.style && (e.push($(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a ||!n.childNodes.length || De(n, e, i)
        };
        return a.cascadeTo = function(t, i, s) {
            var r, n, a, o = e.to(t, i, s), l = [o], h = [], u = [], _ = [], p = e._internals.reservedProps;
            for (t = o._targets || o.target, De(t, h, _), o.render(i, !0), De(t, u), o.render(0, !0), o._enabled(!0), r = _.length; --r>-1;)
                if (n = G(_[r], h[r], u[r]), n.firstMPT) {
                    n = n.difs;
                    for (a in s)
                        p[a] && (n[a] = s[a]);
                        l.push(e.to(_[r], i, n))
                }
            return l
        }, t.activate([a]), a
    }, !0)
}), window._gsDefine && window._gsQueue.pop()();
/*!
 * VERSION: beta 1.9.3
 * DATE: 2013-04-02
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, s, r = window.GreenSockGlobals || window, n = r.com.greensock, a = 2 * Math.PI, o = Math.PI / 2, h = n._class, l = function(e, i) {
            var s = h("easing." + e, function() {}, !0), r = s.prototype = new t;
            return r.constructor = s, r.getRatio = i, s
        }, _ = t.register || function() {}, u = function(t, e, i, s) {
            var r = h("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new s
            }, !0);
            return _(r, t), r
        }, c = function(t, e, i) {
            this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
        }, f = function(e, i) {
            var s = h("easing." + e, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
            }, !0), r = s.prototype = new t;
            return r.constructor = s, r.getRatio = i, r.config = function(t) {
                return new s(t)
            }, s
        }, p = u("Back", f("BackOut", function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), f("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), f("BackInOut", function(t) {
            return 1 > (t*=2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), m = h("easing.SlowMo", function(t, e, i) {
            e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i===!0
        }, !0), d = m.prototype = new t;
        return d.constructor = m, d.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
            return new m(t, e, i)
        }, e = h("easing.SteppedEase", function(t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t>>0) * this._p1
        }, d.config = e.config = function(t) {
            return new e(t)
        }, i = h("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, p = e.randomize!==!1, m = e.clamp===!0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f>-1;)
                i = p ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), p ? s += Math.random() * r - .5 * r : f%2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                    x: i,
                    y: s
                };
            for (l.sort(function(t, e) {
                return t.x - e.x
            }), o = new c(1, 1, null), f = u; --f>-1;)
                a = l[f], o = new c(a.x, a.y, o);
            this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
        }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;)
                    e = e.next;
                e = e.prev
            } else 
                for (; e.prev && e.t >= t;)
                    e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, d.config = function(t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", l("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
            return - (Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
            return 1 > (t*=2)?-.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), s = function(e, i, s) {
            var r = h("easing." + e, function(t, e) {
                this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
            }, !0), n = r.prototype = new t;
            return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                return new r(t, e)
            }, r
        }, u("Elastic", s("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, - 10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .3), s("ElasticIn", function(t) {
            return - (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        }, .3), s("ElasticInOut", function(t) {
            return 1 > (t*=2)?-.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, - 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .45)), u("Expo", l("ExpoOut", function(t) {
            return 1 - Math.pow(2, - 10 * t)
        }), l("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
            return 1 > (t*=2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, - 10 * (t - 1)))
        })), u("Sine", l("SineOut", function(t) {
            return Math.sin(t * o)
        }), l("SineIn", function(t) {
            return - Math.cos(t * o) + 1
        }), l("SineInOut", function(t) {
            return - .5 * (Math.cos(Math.PI * t) - 1)
        })), h("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), p
    }, !0)
}), window._gsDefine && window._gsQueue.pop()();
/*!
 * VERSION: 1.11.1
 * DATE: 2013-10-29
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t) {
    "use strict";
    var e = t.GreenSockGlobals || t;
    if (!e.TweenLite) {
        var i, s, r, n, a, o = function(t) {
            var i, s = t.split("."), r = e;
            for (i = 0; s.length > i; i++)
                r[s[i]] = r = r[s[i]] || {};
            return r
        }, l = o("com.greensock"), h = 1e-10, _ = [].slice, u = function() {}, m = function() {
            var t = Object.prototype.toString, e = t.call([]);
            return function(i) {
                return i instanceof Array || "object" == typeof i&&!!i.push && t.call(i) === e
            }
        }(), f = {}, p = function(i, s, r, n) {
            this.sc = f[i] ? f[i].sc : [], f[i] = this, this.gsClass = null, this.func = r;
            var a = [];
            this.check = function(l) {
                for (var h, _, u, m, c = s.length, d = c; --c>-1;)(h = f[s[c]] || new p(s[c], [])
                    ).gsClass ? (a[c] = h.gsClass, d--) : l && h.sc.push(this);
                if (0 === d && r)
                    for (_ = ("com.greensock." + i).split("."), u = _.pop(), m = o(_.join("."))[u] = this.gsClass = r.apply(r, a), n && (e[u] = m, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + i.split(".").join("/"), [], function() {
                        return m
                    }) : "undefined" != typeof module && module.exports && (module.exports = m)), c = 0; this.sc.length > c; c++)
                        this.sc[c].check()
            }, this.check(!0)
        }, c = t._gsDefine = function(t, e, i, s) {
            return new p(t, e, i, s)
        }, d = l._class = function(t, e, i) {
            return e = e || function() {}, c(t, [], function() {
                return e
            }, i), e
        };
        c.globals = e;
        var v = [0, 0, 1, 1], g = [], T = d("easing.Ease", function(t, e, i, s) {
            this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v
        }, !0), w = T.map = {}, P = T.register = function(t, e, i, s) {
            for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_>-1;)
                for (n = h[_], r = s ? d("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a>-1;)
                    o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t
        };
        for (r = T.prototype, r._calcEnd=!1, r.getRatio = function(t) {
            if (this._func)
                return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type, i = this._power, s = 1 === e ? 1 - t: 2 === e ? t: .5 > t ? 2 * t: 2 * (1 - t);
            return 1 === i ? s*=s : 2 === i ? s*=s * s : 3 === i ? s*=s * s * s : 4 === i && (s*=s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
        }, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = i.length; --s>-1;)
            r = i[s] + ",Power" + s, P(new T(null, null, 1, s), r, "easeOut", !0), P(new T(null, null, 2, s), r, "easeIn" + (0 === s ? ",easeNone" : "")), P(new T(null, null, 3, s), r, "easeInOut");
        w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
        var y = d("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        r = y.prototype, r.addEventListener = function(t, e, i, s, r) {
            r = r || 0;
            var o, l, h = this._listeners[t], _ = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l>-1;)
                o = h[l], o.c === e && o.s === i ? h.splice(l, 1) : 0 === _ && r > o.pr && (_ = l + 1);
            h.splice(_, 0, {
                c: e,
                s: i,
                up: s,
                pr: r
            }), this !== n || a || n.wake()
        }, r.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s)
                for (i = s.length; --i>-1;)
                    if (s[i].c === e)
                        return s.splice(i, 1), void 0
        }, r.dispatchEvent = function(t) {
            var e, i, s, r = this._listeners[t];
            if (r)
                for (e = r.length, i = this._eventTarget; --e>-1;)
                    s = r[e], s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i)
        };
        var b = t.requestAnimationFrame, k = t.cancelAnimationFrame, A = Date.now || function() {
            return (new Date).getTime()
        }, S = A();
        for (i = ["ms", "moz", "webkit", "o"], s = i.length; --s>-1&&!b;)
            b = t[i[s] + "RequestAnimationFrame"], k = t[i[s] + "CancelAnimationFrame"] || t[i[s] + "CancelRequestAnimationFrame"];
        d("Ticker", function(t, e) {
            var i, s, r, o, l, h = this, _ = A(), m = e!==!1 && b, f = function(t) {
                S = A(), h.time = (S - _) / 1e3;
                var e, n = h.time - l;
                (!i || n > 0 || t===!0) && (h.frame++, l += n + (n >= o ? .004 : o - n), e=!0), t!==!0 && (r = s(f)), e && h.dispatchEvent("tick")
            };
            y.call(h), h.time = h.frame = 0, h.tick = function() {
                f(!0)
            }, h.sleep = function() {
                null != r && (m && k ? k(r) : clearTimeout(r), s = u, r = null, h === n && (a=!1))
            }, h.wake = function() {
                null !== r && h.sleep(), s = 0 === i ? u : m && b ? b : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                }, h === n && (a=!0), f(2)
            }, h.fps = function(t) {
                return arguments.length ? (i = t, o = 1 / (i || 60), l = this.time + o, h.wake(), void 0) : i
            }, h.useRAF = function(t) {
                return arguments.length ? (h.sleep(), m = t, h.fps(i), void 0) : m
            }, h.fps(t), setTimeout(function() {
                m && (!r || 5 > h.frame) && h.useRAF(!1)
            }, 1500)
        }), r = l.Ticker.prototype = new l.events.EventDispatcher, r.constructor = l.Ticker;
        var x = d("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender===!0, this.data = e.data, this._reversed = e.reversed===!0, Q) {
                a || n.wake();
                var i = this.vars.useFrames ? G: Q;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        n = x.ticker = new l.Ticker, r = x.prototype, r._dirty = r._gc = r._initted = r._paused=!1, r._totalTime = r._time = 0, r._rawPrevTime =- 1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused=!1;
        var C = function() {
            A() - S > 2e3 && n.wake(), setTimeout(C, 2e3)
        };
        C(), r.play = function(t, e) {
            return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
        }, r.pause = function(t, e) {
            return arguments.length && this.seek(t, e), this.paused(!0)
        }, r.resume = function(t, e) {
            return arguments.length && this.seek(t, e), this.paused(!1)
        }, r.seek = function(t, e) {
            return this.totalTime(Number(t), e!==!1)
        }, r.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t?-this._delay : 0, e!==!1, !0)
        }, r.reverse = function(t, e) {
            return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, r.render = function() {}, r.invalidate = function() {
            return this
        }, r.isActive = function() {
            var t, e = this._timeline, i = this._startTime;
            return !e ||!this._gc&&!this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, r._enabled = function(t, e) {
            return a || n.wake(), this._gc=!t, this._active = this.isActive(), e!==!0 && (t&&!this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, r._kill = function() {
            return this._enabled(!1, !1)
        }, r.kill = function(t, e) {
            return this._kill(t, e), this
        }, r._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;)
                e._dirty=!0, e = e.timeline;
            return this
        }, r._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e>-1;)
                "{self}" === t[e] && (i[e] = this);
            return i
        }, r.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length)
                    return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = m(i)&&-1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, r.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, r.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty=!1, this._duration)
        }, r.totalDuration = function(t) {
            return this._dirty=!1, arguments.length ? this.duration(t) : this._totalDuration
        }, r.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, r.totalTime = function(t, e, i) {
            if (a || n.wake(), !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (0 > t&&!i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration, r = this._timeline;
                    if (t > s&&!i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline;)
                            r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && this.render(t, e, !1)
            }
            return this
        }, r.progress = r.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, r.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, r.timeScale = function(t) {
            if (!arguments.length)
                return this._timeScale;
            if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime, i = e || 0 === e ? e: this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, r.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
        }, r.paused = function(t) {
            if (!arguments.length)
                return this._paused;
            if (t != this._paused && this._timeline) {
                a || t || n.wake();
                var e = this._timeline, i = e.rawTime(), s = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc&&!t && this._enabled(!0, !1), this
        };
        var R = d("core.SimpleTimeline", function(t) {
            x.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming=!0
        });
        r = R.prototype = new x, r.constructor = R, r.kill()._gc=!1, r._first = r._last = null, r._sortChildren=!1, r.add = r.insert = function(t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (s = t._startTime; i && i._startTime > s;)
                    i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
        }, r._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
        }, r.render = function(t, e, i) {
            var s, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;)
                s = r._next, (r._active || t >= r._startTime&&!r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
        }, r.rawTime = function() {
            return a || n.wake(), this._totalTime
        };
        var D = d("TweenLite", function(e, i, s) {
            if (x.call(this, i, s), this.render = D.prototype.render, null == e)
                throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : D.selector(e) || e;
            var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style&&!e.nodeType), l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? j[D.defaultOverwrite] : "number" == typeof l ? l>>0 : j[l], (o || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
                for (this._targets = a = _.call(e, 0), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++)
                    n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style&&!n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(_.call(n, 0))) : (this._siblings[r] = B(n, this, !1), 1 === l && this._siblings[r].length > 1 && q(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
            else 
                this._propLookup = {}, this._siblings = B(e, this, !1), 1 === l && this._siblings.length > 1 && q(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender!==!1) && this.render( - this._delay, !1, !0)
        }, !0), E = function(e) {
            return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style&&!e.nodeType)
        }, I = function(t, e) {
            var i, s = {};
            for (i in t)
                F[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i ||!(!N[i] || N[i] && N[i]._autoCSS) || (s[i] = t[i], delete t[i]);
            t.css = s
        };
        r = D.prototype = new x, r.constructor = D, r.kill()._gc=!1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled=!1, D.version = "1.11.1", D.defaultEase = r._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = n, D.autoSleep=!0, D.selector = t.$ || t.jQuery || function(e) {
            return t.$ ? (D.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
        };
        var O = D._internals = {
            isArray: m,
            isSelector: E
        }, N = D._plugins = {}, L = D._tweenLookup = {}, U = 0, F = O.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1
        }, j = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }, G = x._rootFramesTimeline = new R, Q = x._rootTimeline = new R;
        Q._startTime = n.time, G._startTime = n.frame, Q._active = G._active=!0, x._updateRoot = function() {
            if (Q.render((n.time - Q._startTime) * Q._timeScale, !1, !1), G.render((n.frame - G._startTime) * G._timeScale, !1, !1), !(n.frame%120)) {
                var t, e, i;
                for (i in L) {
                    for (e = L[i].tweens, t = e.length; --t>-1;)
                        e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete L[i]
                }
                if (i = Q._first, (!i || i._paused) && D.autoSleep&&!G._first && 1 === n._listeners.tick.length) {
                    for (; i && i._paused;)
                        i = i._next;
                    i || n.sleep()
                }
            }
        }, n.addEventListener("tick", x._updateRoot);
        var B = function(t, e, i) {
            var s, r, n = t._gsTweenID;
            if (L[n || (t._gsTweenID = n = "t" + U++)] || (L[n] = {
                target: t,
                tweens: []
            }), e && (s = L[n].tweens, s[r = s.length] = e, i))
                for (; --r>-1;)
                    s[r] === e && s.splice(r, 1);
            return L[n].tweens
        }, q = function(t, e, i, s, r) {
            var n, a, o, l;
            if (1 === s || s >= 4) {
                for (l = r.length, n = 0; l > n; n++)
                    if ((o = r[n]) !== e)
                        o._gc || o._enabled(!1, !1) && (a=!0);
                    else if (5 === s)
                        break;
                return a
            }
            var _, u = e._startTime + h, m = [], f = 0, p = 0 === e._duration;
            for (n = r.length; --n>-1;)(o = r[n]) 
                === e || o._gc || o._paused || (o._timeline !== e._timeline ? (_ = _ || $(e, 0, p), 0 === $(o, _, p) && (m[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale + h > u && ((p ||!o._initted) && 2e-10 >= u - o._startTime || (m[f++] = o)));
            for (n = f; --n>-1;)
                o = m[n], 2 === s && o._kill(i, t) && (a=!0), (2 !== s ||!o._firstPT && o._initted) && o._enabled(!1, !1) && (a=!0);
            return a
        }, $ = function(t, e, i) {
            for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                if (n += s._startTime, r*=s._timeScale, s._paused)
                    return - 100;
                s = s._timeline
            }
            return n/=r, n > e ? n - e : i && n === e ||!t._initted && 2 * h > n - e ? h : (n += t.totalDuration() / t._timeScale / r) > e + h ? 0 : n - e - h
        };
        r._init = function() {
            var t, e, i, s, r = this.vars, n = this._overwrittenProps, a = this._duration, o = r.immediateRender, l = r.ease;
            if (r.startAt) {
                if (this._startAt && this._startAt.render( - 1, !0), r.startAt.overwrite = 0, r.startAt.immediateRender=!0, this._startAt = D.to(this.target, 0, r.startAt), o)
                    if (this._time > 0)
                        this._startAt = null;
                    else if (0 !== a)
                        return 
            } else if (r.runBackwards && 0 !== a)
                if (this._startAt)
                    this._startAt.render( - 1, !0), this._startAt = null;
                else {
                    i = {};
                    for (s in r)
                        F[s] && "autoCSS" !== s || (i[s] = r[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", this._startAt = D.to(this.target, 0, i), r.immediateRender) {
                            if (0 === this._time)
                                return 
                        } else 
                            this._startAt.render( - 1, !0)
                }
            if (this._ease = l ? l instanceof T ? r.easeParams instanceof Array ? l.config.apply(l, r.easeParams) : l : "function" == typeof l ? new T(l, r.easeParams) : w[l] || D.defaultEase : D.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t>-1;)
                    this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], n ? n[t] : null) && (e=!0);
            else 
                e = this._initProps(this.target, this._propLookup, this._siblings, n);
            if (e && D._onPluginEvent("_onInitAllProps", this), n && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (i = this._firstPT; i;)
                    i.s += i.c, i.c =- i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted=!0
        }, r._initProps = function(e, i, s, r) {
            var n, a, o, l, h, _;
            if (null == e)
                return !1;
            this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS!==!1 && I(this.vars, e);
            for (n in this.vars) {
                if (_ = this.vars[n], F[n])
                    _ && (_ instanceof Array || _.push && m(_))&&-1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                else if (N[n] && (l = new N[n])._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = h = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: n,
                        pg: !0,
                        pr: l._priority
                    }, a = l._overwriteProps.length; --a>-1;)
                        i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o=!0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled=!0)
                } else 
                    this._firstPT = i[n] = h = {
                        _next: this._firstPT,
                        t: e,
                        p: n,
                        f: "function" == typeof e[n],
                        n: n,
                        pg: !1,
                        pr: 0
                    }, h.s = h.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n: "get" + n.substr(3)]() : parseFloat(e[n]), h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0;
                h && h._next && (h._next._prev = h)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && q(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : o
        }, r.render = function(t, e, i) {
            var s, r, n, a, o = this._time, l = this._duration;
            if (t >= l)
                this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s=!0, r = "onComplete"), 0 === l && (a = this._rawPrevTime, (0 === t || 0 > a || a === h) && a !== t && (i=!0, a > h && (r = "onReverseComplete")), this._rawPrevTime = a=!e || t ? t : h);
            else if (1e-7 > t)
                this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && this._rawPrevTime > h) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active=!1, 0 === l && (this._rawPrevTime >= 0 && (i=!0), this._rawPrevTime = a=!e || t ? t : h)) : this._initted || (i=!0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var _ = t / l, u = this._easeType, m = this._easePower;
                (1 === u || 3 === u && _ >= .5) && (_ = 1 - _), 3 === u && (_*=2), 1 === m ? _*=_ : 2 === m ? _*=_ * _ : 3 === m ? _*=_ * _ * _ : 4 === m && (_*=_ * _ * _ * _), this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : .5 > t / l ? _ / 2 : 1 - _ / 2
            } else 
                this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc)
                        return;
                    this._time&&!s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active ||!this._paused && this._time !== o && t >= 0 && (this._active=!0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || g))), n = this._firstPT; n;)
                    n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || i && 0 === this._time && 0 === o || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || g)), r && (this._gc || (0 > t && this._startAt&&!this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active=!1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || g), 0 === l && this._rawPrevTime === h && a !== h && (this._rawPrevTime = 0)))
            }
        }, r._kill = function(t, e) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target))
                return this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
            var i, s, r, n, a, o, l, h;
            if ((m(e) || E(e)) && "number" != typeof e[0])
                for (i = e.length; --i>-1;)
                    this._kill(t, e[i]) && (o=!0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i>-1;)
                        if (e === this._targets[i]) {
                            a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target)
                        return !1;
                    a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    l = t || a, h = t !== s && "all" !== s && t !== a && ("object" != typeof t ||!t._tempKill);
                    for (r in l)(n = a[r]) 
                        && (n.pg && n.t._kill(l) && (o=!0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete a[r]), h && (s[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return o
        }, r.invalidate = function() {
            return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled=!1, this._propLookup = this._targets ? {} : [], this
        }, r._enabled = function(t, e) {
            if (a || n.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s)
                    for (i = s.length; --i>-1;)
                        this._siblings[i] = B(s[i], this, !0);
                else 
                    this._siblings = B(this.target, this, !0)
            }
            return x.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, D.to = function(t, e, i) {
            return new D(t, e, i)
        }, D.from = function(t, e, i) {
            return i.runBackwards=!0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
        }, D.fromTo = function(t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s)
        }, D.delayedCall = function(t, e, i, s, r) {
            return new D(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }, D.set = function(t, e) {
            return new D(t, 0, e)
        }, D.getTweensOf = function(t, e) {
            if (null == t)
                return [];
            t = "string" != typeof t ? t : D.selector(t) || t;
            var i, s, r, n;
            if ((m(t) || E(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i>-1;)
                    s = s.concat(D.getTweensOf(t[i], e));
                for (i = s.length; --i>-1;)
                    for (n = s[i], r = i; --r>-1;)
                        n === s[r] && s.splice(i, 1)
            } else 
                for (s = B(t).concat(), i = s.length; --i>-1;)(s[i]._gc || e&&!s[i].isActive()
                    ) && s.splice(i, 1);
            return s
        }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e=!1);
            for (var s = D.getTweensOf(t, e), r = s.length; --r>-1;)
                s[r]._kill(i, t)
        };
        var M = d("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = M.prototype
        }, !0);
        if (r = M.prototype, M.version = "1.10.1", M.API = 2, r._firstPT = null, r._addTween = function(t, e, i, s, r, n) {
            var a, o;
            return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                _next: this._firstPT,
                t: t,
                p: e,
                s: i,
                c: a,
                f: "function" == typeof t[e],
                n: r || e,
                r: n
            }, o._next && (o._next._prev = o), o) : void 0
        }, r.setRatio = function(t) {
            for (var e, i = this._firstPT, s = 1e-6; i;)
                e = i.c * t + i.s, i.r ? e = 0 | e + (e > 0 ? .5 : - .5) : s > e && e>-s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
        }, r._kill = function(t) {
            var e, i = this._overwriteProps, s = this._firstPT;
            if (null != t[this._propName])
                this._overwriteProps = [];
            else 
                for (e = i.length; --e>-1;)
                    null != t[i[e]] && i.splice(e, 1);
            for (; s;)
                null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
            return !1
        }, r._roundProps = function(t, e) {
            for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) 
                && (i.r = e), i = i._next
        }, D._onPluginEvent = function(t, e) {
            var i, s, r, n, a, o = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; o;) {
                    for (a = o._next, s = r; s && s.pr > o.pr;)
                        s = s._next;
                    (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o, (o._next = s) ? s._prev = o : n = o, o = a
                }
                o = e._firstPT = r
            }
            for (; o;)
                o.pg && "function" == typeof o.t[t] && o.t[t]() && (i=!0), o = o._next;
            return i
        }, M.activate = function(t) {
            for (var e = t.length; --e>-1;)
                t[e].API === M.API && (N[(new t[e])._propName] = t[e]);
            return !0
        }, c.plugin = function(t) {
            if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
            var e, i = t.propName, s = t.priority || 0, r = t.overwriteProps, n = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            }, a = d("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                M.call(this, i, s), this._overwriteProps = r || []
            }, t.global===!0), o = a.prototype = new M(i);
            o.constructor = a, a.API = t.API;
            for (e in n)
                "function" == typeof t[e] && (o[n[e]] = t[e]);
            return a.version = t.version, M.activate([a]), a
        }, i = t._gsQueue) {
            for (s = 0; i.length > s; s++)
                i[s]();
            for (r in f)
                f[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
            }
        a=!1
    }
})(window);
// Simple Set Clipboard System
// Author: Joseph Huckaby

var ZeroClipboard = {

    version: "1.0.4",
    clients: {},
    // registered upload clients on page, indexed by id
    moviePath: 'ZeroClipboard.swf',
    // URL to movie
    nextId: 1,
    // ID of next movie

    $: function(thingy) {
        // simple DOM lookup utility function
        if (typeof(thingy) == 'string') 
            thingy = document.getElementById(thingy);
        if (!thingy.addClass) {
            // extend element with a few useful methods
            thingy.hide = function() {
                this.style.display = 'none';
            };
            thingy.show = function() {
                this.style.display = '';
            };
            thingy.addClass = function(name) {
                this.removeClass(name);
                this.className += ' ' + name;
            };
            thingy.removeClass = function(name) {
                this.className = this.className.replace( new RegExp("\\s*" + name + "\\s*"), " ").replace(/^\s+/, '').replace(/\s+$/, '');
            };
            thingy.hasClass = function(name) {
                return !!this.className.match( new RegExp("\\s*" + name + "\\s*") );
            }
        }
        return thingy;
    },

    setMoviePath: function(path) {
        // set path to ZeroClipboard.swf
        this.moviePath = path;
    },

    dispatch: function(id, eventName, args) {
        // receive event from flash movie, send to client		
        var client = this.clients[id];
        if (client) {
            client.receiveEvent(eventName, args);
        }
    },

    register: function(id, client) {
        // register new client to receive events
        this.clients[id] = client;
    },

    getDOMObjectPosition: function(obj) {
        // get absolute coordinates for dom element
        var info = {
            left: 0,
            top: 0,
            width: obj.width ? obj.width : obj.offsetWidth,
            height: obj.height ? obj.height : obj.offsetHeight
        };

        while (obj) {
            info.left += obj.offsetLeft;
            info.top += obj.offsetTop;
            obj = obj.offsetParent;
        }

        return info;
    },

    Client: function(elem) {
        // constructor for new simple upload client
        this.handlers = {};

        // unique ID
        this.id = ZeroClipboard.nextId++;
        this.movieId = 'ZeroClipboardMovie_' + this.id;

        // register client with singleton to receive flash events
        ZeroClipboard.register(this.id, this);

        // create movie
        if (elem) 
            this.glue(elem);
    }
};

ZeroClipboard.Client.prototype = {

    id: 0,
    // unique ID for us
    ready: false,
    // whether movie is ready to receive events or not
    movie: null,
    // reference to movie object
    clipText: '',
    // text to copy to clipboard
    handCursorEnabled: true,
    // whether to show hand cursor, or default pointer cursor
    cssEffects: true,
    // enable CSS mouse effects on dom container
    handlers: null,
    // user event handlers

    glue: function(elem) {
        // glue to DOM element
        // elem can be ID or actual DOM element object
        this.domElement = ZeroClipboard.$(elem);

        // float just above object, or zIndex 99 if dom element isn't set
        var zIndex = 99;
        if (this.domElement.style.zIndex) {
            zIndex = parseInt(this.domElement.style.zIndex) + 1;
        }

        // find X/Y position of domElement
        var box = ZeroClipboard.getDOMObjectPosition(this.domElement);

        // create floating DIV above element
        this.div = document.createElement('div');
        var style = this.div.style;
        style.position = 'absolute';
        style.left = '' + box.left + 'px';
        style.top = '' + box.top + 'px';
        style.width = '' + box.width + 'px';
        style.height = '' + box.height + 'px';
        style.zIndex = zIndex;

        // style.backgroundColor = '#f00'; // debug

        var body = document.getElementsByTagName('body')[0];
        body.appendChild(this.div);

        this.div.innerHTML = this.getHTML( box.width, box.height );
    },

    getHTML: function(width, height) {
        // return HTML for movie
        var html = '';
        var flashvars = 'id=' + this.id + 
        '&width=' + width + 
        '&height=' + height;

        if (navigator.userAgent.match(/MSIE/)) {
            // IE gets an OBJECT tag
            var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
            html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + protocol + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + width + '" height="' + height + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + flashvars + '"/><param name="wmode" value="transparent"/></object>';
        } else {
            // all other browsers get an EMBED tag
            html += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + width + '" height="' + height + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + flashvars + '" wmode="transparent" />';
        }
        return html;
    },

    hide: function() {
        // temporarily hide floater offscreen
        if (this.div) {
            this.div.style.left = '-2000px';
        }
    },

    show: function() {
        // show ourselves after a call to hide()
        this.reposition();
    },

    destroy: function() {
        // destroy control and floater
        if (this.domElement && this.div) {
            this.hide();
            this.div.innerHTML = '';

            var body = document.getElementsByTagName('body')[0];
            try {
                body.removeChild( this.div );
            } catch (e) {
                ;
            }

            this.domElement = null;
            this.div = null;
        }
    },

    reposition: function(elem) {
        // reposition our floating div, optionally to new container
        // warning: container CANNOT change size, only position
        if (elem) {
            this.domElement = ZeroClipboard.$(elem);
            if (!this.domElement) 
                this.hide();
        }

        if (this.domElement && this.div) {
            var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
            var style = this.div.style;
            style.left = '' + box.left + 'px';
            style.top = '' + box.top + 'px';
        }
    },

    setText: function(newText) {
        // set text to be copied to clipboard
        this.clipText = newText;
        if (this.ready) 
            this.movie.setText(newText);
    },

    addEventListener: function(eventName, func) {
        // add user event listener for event
        // event types: load, queueStart, fileStart, fileComplete, queueComplete, progress, error, cancel
        eventName = eventName.toString().toLowerCase().replace(/^on/, '');
        if (!this.handlers[eventName]) 
            this.handlers[eventName] = [];
        this.handlers[eventName].push(func);
    },

    setHandCursor: function(enabled) {
        // enable hand cursor (true), or default arrow cursor (false)
        this.handCursorEnabled = enabled;
        if (this.ready) 
            this.movie.setHandCursor(enabled);
    },

    setCSSEffects: function(enabled) {
        // enable or disable CSS effects on DOM container
        this.cssEffects = !!enabled;
    },

    receiveEvent: function(eventName, args) {
        // receive event from flash
        eventName = eventName.toString().toLowerCase().replace(/^on/, '');

        // special behavior for certain events
        switch (eventName) {
        case 'load':
            // movie claims it is ready, but in IE this isn't always the case...
            // bug fix: Cannot extend EMBED DOM elements in Firefox, must use traditional function
            this.movie = document.getElementById(this.movieId);
            if (!this.movie) {
                var self = this;
                setTimeout( function() {
                    self.receiveEvent('load', null);
                }, 1 );
                return;
            }

            // firefox on pc needs a "kick" in order to set these in certain cases
            if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
                var self = this;
                setTimeout( function() {
                    self.receiveEvent('load', null);
                }, 100 );
                this.ready = true;
                return;
            }

            this.ready = true;
            this.movie.setText( this.clipText );
            this.movie.setHandCursor( this.handCursorEnabled );
            break;

        case 'mouseover':
            if (this.domElement && this.cssEffects) {
                this.domElement.addClass('hover');
                if (this.recoverActive) 
                    this.domElement.addClass('active');
            }
            break;

        case 'mouseout':
            if (this.domElement && this.cssEffects) {
                this.recoverActive = false;
                if (this.domElement.hasClass('active')) {
                    this.domElement.removeClass('active');
                    this.recoverActive = true;
                }
                this.domElement.removeClass('hover');
            }
            break;

        case 'mousedown':
            if (this.domElement && this.cssEffects) {
                this.domElement.addClass('active');
            }
            break;

        case 'mouseup':
            if (this.domElement && this.cssEffects) {
                this.domElement.removeClass('active');
                this.recoverActive = false;
            }
            break;
        }
        // switch eventName

        if (this.handlers[eventName]) {
            for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
                var func = this.handlers[eventName][idx];

                if (typeof(func) == 'function') {
                    // actual function reference
                    func(this, args);
                } else if ((typeof(func) == 'object') && (func.length == 2)) {
                    // PHP style object + method, i.e. [myObject, 'myMethod']
                    func[0][ func[1] ](this, args);
                } else if (typeof(func) == 'string') {
                    // name of function
                    window[func](this, args);
                }
            }
            // foreach event handler defined
        }
        // user defined handler for event
    }

};
/*! Projekktor v1.2.37 -jarisflash,-youtube,-plugins/ima,-plugins/logo,-plugins/postertitle,-plugins/share,-plugins/tracks,-plugins/settings | http://www.projekktor.com | Copyright 2010, 2011, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com | GNU General Public License - http://www.projekktor.com/license/
 */
jQuery(function ($) {
    var projekktors = [];
    document.createElement("video").canPlayType && function () {
        return;
        var t;
        var e
    }();

    function Iterator(t) {
        this.length = t.length, this.each = function (e) {
            $.each(t, e)
        }, this.size = function () {
            return t.length
        }
    }
    $.fn.prop || ($.fn.prop = function (t, e) {
        return $(this).attr(t, e)
    }), projekktor = $p = function () {
        var arg = arguments[0],
        instances = [],
        plugins = [];
        if (!arguments.length) 
            return projekktors[0] || null;
        if ("number" == typeof arg) 
            return projekktors[arg];
        if ("string" == typeof arg) {
            if ("*" == arg) 
                return new Iterator(projekktors);
            for (var i = 0; projekktors.length > i; i++) {
                try {
                    if (projekktors[i].getId() == arg.id) {
                        instances.push(projekktors[i]);
                        continue
                    }
                } catch (e) {}
                try {
                    for (var j = 0; $(arg).length > j; j++) 
                        projekktors[i].env.playerDom.get(0) != $(arg).get(j) || instances.push(projekktors[i])
                    } catch (e) {}
                try {
                    if (projekktors[i].getParent() == arg) {
                        instances.push(projekktors[i]);
                        continue
                    }
                } catch (e) {}
                try {
                    if (projekktors[i].getId() == arg) {
                        instances.push(projekktors[i]);
                        continue
                    }
                } catch (e) {}
            }
            if (instances.length > 0) 
                return 1 == instances.length ? instances[0] : new Iterator(instances)
        }
        if (0 === instances.length) {
            var cfg = arguments[1] || {}, callback = arguments[2] || {}, count = 0,
            playerA;
            if ("string" == typeof arg) 
                return $.each($(arg), function () {
                    playerA = new PPlayer($(this), cfg, callback), projekktors.push(playerA), count++
                }), count > 1 ? new Iterator(projekktors) : playerA;
            if (arg) 
                return projekktors.push(new PPlayer(arg, cfg, callback)), new Iterator(projekktors)
        }
        return null;

        function PPlayer(srcNode, cfg, onReady) {
            return this.config = new projekktorConfig("1.3.09"), this.env = {
                muted: !1,
                playerDom: null,
                mediaContainer: null,
                agent: "standard",
                mouseIsOver: !1,
                loading: !1,
                className: "",
                onReady: onReady
            }, this.media = [], this._plugins = [], this._pluginCache = {}, this._queue = [], this._cuePoints = {}, this.listeners = [], this.playerModel = {}, this._isReady = !1, this._maxElapsed = 0, this._currentItem = null, this._playlistServer = "", this._id = "", this._reelUpdate = function (obj) {
                var ref = this,
                itemIdx = null,
                data = obj || [{}
                ],
                files = data.playlist || data;
                this.env.loading = !0, this.media = [];
                try {
                    for (var props in data.config)
                        if (data.config.hasOwnProperty(props)) {
                            if (typeof data.config[props].indexOf("objectfunction") > - 1) 
                                continue;
                                this.config[props] = eval(data.config[props])
                        }
                    null != data.config && ($p.utils.log("Updated config var: " + props + " to " + this.config[props]), this._promote("configModified"), delete data.config)
                } catch (e) {}
                $.each(files, function () {
                    itemIdx = ref._addItem(ref._prepareMedia({
                        file: this,
                        config: this.config || {},
                        errorCode: this.errorCode || 0
                    })), $.each(this.cuepoints || [], function () {
                        this.item = itemIdx, ref.setCuePoint(this)
                    })
                }), null === itemIdx && this._addItem(this._prepareMedia({
                    file: "",
                    config: {},
                    errorCode: 97
                })), this.env.loading = !1, this._promote("scheduled", this.getItemCount()), this._syncPlugins(function () {
                    ref.setActiveItem(0)
                })
            }, this._addItem = function (t, e, i) {
                var s = 0;
                return 1 === this.media.length && "NA" == this.media[0].mediaModel && (this._detachplayerModel(), this.media = []), void 0 === e || 0 > e || e > this.media.length - 1 ? (this.media.push(t), s = this.media.length - 1) : (this.media.splice(e, i === !0 ? 1 : 0, t), s = e), this.env.loading === !1 && this._promote("scheduleModified", this.getItemCount()), s
            }, this._removeItem = function (t) {
                var e = 0;
                return 1 === this.media.length ? "NA" == this.media[0].mediaModel ? 0 : (this.media[0] = this._prepareMedia({
                    file: ""
                }), 0) : (void 0 === t || 0 > t || t > this.media.length - 1 ? (this.media.pop(), e = this.media.length) : (this.media.splice(t, 1), e = t), this.env.loading === !1 && this._promote("scheduleModified", this.getItemCount()), e)
            }, this._canPlay = function (t, e, i) {
                var s = this,
                n = [],
                a = [],
                r = i || "http",
                o = "object" == typeof e ? e : [e],
                l = t ? t.replace(/x-/, "") : void 0,
                h = s._testMediaSupport();
                if ($.each(o, function (t, e) {
                    $.each($.extend(h[r], h["*"] || []) || [], function (t, i) {
                        return null != e && t != e ? !0 : (n = $.merge(n, this), !0)
                    })
                }), 0 === n.length) 
                    return !1;
                switch (typeof l) {
                case "undefined":
                    return n.length > 0;
                case "string":
                    if ("*" == l) 
                        return n;
                    a.push(l);
                    break;
                case "array":
                    a = l
                }
                for (var c in a)
                    if ($p.mmap.hasOwnProperty(c)) {
                        if ("string" != typeof a[c]) 
                            break;
                            if ($.inArray(a[c], n) > - 1) 
                                return !0
                    }
                return !1
            }, this._prepareMedia = function (t) {
                var e = this,
                i = [],
                s = [],
                n = [],
                a = {}, r = {}, o = [],
                l = {}, h = [],
                c = 0;
                for (var u in $p.mmap) 
                    $p.mmap.hasOwnProperty(u) && (platforms = "object" == typeof $p.mmap[u].platform ? $p.mmap[u].platform : [$p.mmap[u].platform], $.each(platforms, function (i, s) {
                        var n = 0,
                        o = "http";
                        for (var l in t.file)
                            if (t.file.hasOwnProperty(l)) {
                                if ("config" === l) 
                                    continue;
                                    if (o = t.file[l].streamType || e.getConfig("streamType") || "http", e._canPlay($p.mmap[u].type, s, o) && n++, 0 === n) 
                                        continue;
                                        if ($p.mmap[u].level = $.inArray(s, e.config._platforms), $p.mmap[u].level = 0 > $p.mmap[u].level ? 100 : $p.mmap[u].level, h.push("." + $p.mmap[u].ext), a[$p.mmap[u].ext] || (a[$p.mmap[u].ext] = []), a[$p.mmap[u].ext].push($p.mmap[u]), null === $p.mmap[u].streamType || "*" == $p.mmap[u].streamType || $.inArray(o || [], $p.mmap[u].streamType || "") > - 1) {
                                            r[$p.mmap[u].type] || (r[$p.mmap[u].type] = []), n = - 1;
                                            for (var c = 0, p = r[$p.mmap[u].type].length; p > c; c++)
                                                if (r[$p.mmap[u].type][c].model == $p.mmap[u].model) {
                                                    n = c;
                                                    break
                                                }
                                                - 1 === n && r[$p.mmap[u].type].push($p.mmap[u])
                                            }
                                    } else ;
                                    return !0
                        }));
                h = "^.*.(" + h.join("|") + ")$", "string" == typeof t.file && (t.file = [{
                    src: t.file
                }
                ], "string" == typeof t.type && (t.file = [{
                    src: t.file,
                    type: t.type
                }
                ])), ($.isEmptyObject(t) || t.file === !1 || null === t.file) && (t.file = [{
                    src: null
                }
                ]);
                for (var p in t.file)
                    if (t.file.hasOwnProperty(p)) {
                        if ("config" == p) 
                            continue;
                            if ("string" == typeof t.file[p] && (t.file[p] = {
                                src: t.file[p]
                            }), null == t.file[p].src) 
                                continue;
                                if (null != t.file[p].type && "" !== t.file[p].type) 
                                    try {
                                        var d = t.file[p].type.split(" ").join("").split(/[\;]codecs=.([a-zA-Z0-9\,]*)[\'|\"]/i);
                                        null != d[1] && (t.file[p].codec = d[1]), t.file[p].type = d[0].replace(/x-/, ""), t.file[p].originalType = d[0]
                                    } catch (m) {} else 
                                        t.file[p].type = this._getTypeFromFileExtension(t.file[p].src);
                                        r[t.file[p].type] && r[t.file[p].type].length > 0 && (r[t.file[p].type].sort(function (t, e) {
                                            return t.level - e.level
                                        }), o.push(r[t.file[p].type][0]))
                    }
                0 === o.length ? o = r["none/none"] : (o.sort(function (t, e) {
                    return t.level - e.level
                }), c = o[0].level, o = $.grep(o, function (t) {
                    return t.level == c
                })), i = [], $.each(o || [], function () {
                    i.push(this.type)
                });
                var g = o && o.length > 0 ? o[0] : {
                    type: "none/none",
                    model: "NA",
                    errorCode: 11
                };
                i = $p.utils.unique(i);
                for (p in t.file)
                    if (t.file.hasOwnProperty(p)) {
                        if (null == t.file[p].type) 
                            continue;
                            if (0 > $.inArray(t.file[p].type.replace(/x-/, ""), i) && "none/none" != g.type) 
                                continue;
                                ($.isEmptyObject(t.config) || null == t.config.streamType || - 1 == t.config.streamType.indexOf("rtmp")) && (t.file[p].src = $p.utils.toAbsoluteURL(t.file[p].src)), null == t.file[p].quality && (t.file[p].quality = "default"), n.push(t.file[p].quality), s.push(t.file[p])
                    }
                0 === s.length && s.push({
                    src: null,
                    quality: "default"
                });
                var f = [];
                return $.each(this.getConfig("playbackQualities"), function () {
                    f.push(this.key || "default")
                }), l = {
                    ID: t.config.id || $p.utils.randomId(8),
                    cat: t.config.cat || "clip",
                    file: s,
                    platform: g.platform,
                    platforms: platforms,
                    qualities: $p.utils.intersect($p.utils.unique(f), $p.utils.unique(n)),
                    mediaModel: g.model || "NA",
                    errorCode: g.errorCode || t.errorCode || 7,
                    config: t.config || {}
                }
            }, this._modelUpdateListener = function (t, e) {
                var i = this,
                s = this.playerModel;
                if (this.playerModel.init) 
                    switch ("time" != t && "progress" != t && $p.utils.log("Update: '" + t, this.playerModel.getSrc(), this.playerModel.getModelName(), e), t) {
                    case "state":
                        this._promote("state", e);
                        var n = $.map(this.getDC().attr("class").split(" "), function (t) {
                            return - 1 === t.indexOf(i.getConfig("ns") + "state") ? t : ""
                        });
                        switch (n.push(this.getConfig("ns") + "state" + e.toLowerCase()), this.getDC().attr("class", n.join(" ")), e) {
                        case "AWAKENING":
                            this._syncPlugins(function () {
                                s.getState("AWAKENING") && s.displayItem(!0)
                            });
                            break;
                        case "ERROR":
                            this._addGUIListeners();
                            break;
                        case "PAUSED":
                            this.getConfig("disablePause") === !0 && this.playerModel.applyCommand("play", 0);
                            break;
                        case "COMPLETED":
                            if (this._currentItem + 1 >= this.media.length && !this.getConfig("loop") && (this._promote("done", {}), this.getConfig("leaveFullscreen"))) 
                                return this.reset(), void 0;
                                this.setActiveItem("next")
                            }
                            break;
                        case "modelReady":
                            this._maxElapsed = 0, this._promote("item", i._currentItem);
                            break;
                        case "displayReady":
                            this._promote("displayReady", !0), this._syncPlugins(function () {
                                i._promote("ready"), i._addGUIListeners(), s.getState("IDLE") || s.start()
                            });
                            break;
                        case "availableQualitiesChange":
                            this.media[this._currentItem].qualities = e, this._promote("availableQualitiesChange", e);
                            break;
                        case "qualityChange":
                            this.setConfig({
                                playbackQuality: e
                            }), this._promote("qualityChange", e);
                            break;
                        case "volume":
                            this.setConfig({
                                volume: e
                            }), this._promote("volume", e), 0 >= e ? (this.env.muted = !0, this._promote("mute", e)) : this.env.muted === !0 && (this.env.muted = !1, this._promote("unmute", e));
                            break;
                        case "playlist":
                            this.setFile(e.file, e.type);
                            break;
                        case "config":
                            this.setConfig(e);
                            break;
                        case "time":
                            if (e > this._maxElapsed) {
                                var a = Math.round(100 * e / this.getDuration()),
                                r = !1;
                                25 > a && (a = 25), a > 25 && 50 > a && (r = "firstquartile", a = 50), a > 50 && 75 > a && (r = "midpoint", a = 75), a > 75 && 100 > a && (r = "thirdquartile", a = 100), r !== !1 && this._promote(r, e), this._maxElapsed = this.getDuration() * a / 100
                            }
                            this._promote(t, e);
                            break;
                        case "fullscreen":
                            e === !0 ? (this.getDC().addClass("fullscreen"), this._enterFullViewport()) : (this.getDC().removeClass("fullscreen"), this._exitFullViewport()), this._promote(t, e);
                            break;
                        case "error":
                            this._promote(t, e), this.getConfig("skipTestcard") && this.getItemCount() > 1 ? this.setActiveItem("next") : (this.playerModel.applyCommand("error", e), this._addGUIListeners());
                            break;
                        case "streamTypeChange":
                            "dvr" == e && this.getDC().addClass(this.getNS() + "dvr"), this._promote(t, e);
                            break;
                        default:
                            this._promote(t, e)
                    }
                }, this._syncPlugins = function (t) {
                var e = this;
                this.env.loading = !0,
                function () {
                    try {
                        if (e._plugins.length > 0)
                            for (var i = 0; e._plugins.length > i; i++)
                                if (!e._plugins[i].isReady()) 
                                    return setTimeout(arguments.callee, 50), void 0;
                        e.env.loading = !1, e._promote("pluginsReady", {});
                        try {
                            t()
                        } catch (s) {}
                    } catch (s) {}
                }()
            }, this._MD = function (t) {
                projekktor("#" + t.currentTarget.id.replace(/_media$/, ""))._playerFocusListener(t)
            }, this._addGUIListeners = function () {
                var t = this;
                this._removeGUIListeners(), this.getDC().get(0).addEventListener ? this.getDC().get(0).addEventListener("mousedown", this._MD, !0) : this.getDC().mousedown(function (e) {
                    t._playerFocusListener(e)
                }), this.getDC().mousemove(function (e) {
                    t._playerFocusListener(e)
                }).mouseenter(function (e) {
                    t._playerFocusListener(e)
                }).mouseleave(function (e) {
                    t._playerFocusListener(e)
                }).focus(function (e) {
                    t._playerFocusListener(e)
                }).blur(function (e) {
                    t._playerFocusListener(e)
                }), $(window).bind("resize.projekktor" + this.getId(), function () {
                    t.setSize()
                }).bind("touchstart", function () {
                    t._windowTouchListener(event)
                }), this.config.enableKeyboard === !0 && ($(document).unbind("keydown.pp" + this._id), $(document).bind("keydown.pp" + this._id, function (e) {
                    t._keyListener(e)
                }))
            }, this._removeGUIListeners = function () {
                $("#" + this.getId()).unbind(), this.getDC().unbind(), this.getDC().get(0).removeEventListener ? this.getDC().get(0).removeEventListener("mousedown", this._MD, !0) : this.getDC().get(0).detachEvent("onmousedown", this._MD), $(window).unbind("resize.projekktor" + this.getId())
            }, this._registerPlugins = function () {
                var plugins = $.merge($.merge([], this.config._plugins), this.config._addplugins),
                pluginName = "",
                pluginObj = null;
                if (!(this._plugins.length > 0 || 0 === plugins.length))
                    for (var i = 0; plugins.length > i; i++) {
                        pluginName = "projekktor" + plugins[i].charAt(0).toUpperCase() + plugins[i].slice(1);
                        try {
                            typeof eval(pluginName)
                        } catch (e) {
                            alert("Projekktor Error: Plugin '" + plugins[i] + "' malicious or not available.");
                            continue
                        }
                        pluginObj = $.extend(!0, {}, new projekktorPluginInterface, eval(pluginName).prototype), pluginObj.name = plugins[i].toLowerCase(), pluginObj.pp = this, pluginObj.playerDom = this.env.playerDom, pluginObj._init(this.config["plugin_" + plugins[i].toLowerCase()] || {}), null == this.config["plugin_" + pluginObj.name] && (this.config["plugin_" + pluginObj.name] = {}), this.config["plugin_" + pluginObj.name] = $.extend(!0, {}, pluginObj.config || {});
                        for (var propName in pluginObj) 
                            propName.indexOf("Handler") > 1 && (null == this._pluginCache[propName] && (this._pluginCache[propName] = []), this._pluginCache[propName].push(pluginObj));
                            this._plugins.push(pluginObj)
                }
            }, this.removePlugins = function (t) {
                if (0 != this._plugins.length) {
                    var e = t || $.merge($.merge([], this.config._plugins), this.config._addplugins),
                    i = this._plugins.length;
                    for (var s = 0; e.length > s; s++)
                        for (var n = 0; i > n; n++)
                            if (void 0 != this._plugins[n] && this._plugins[n].name == e[s].toLowerCase()
                                ) {
                        this._plugins[n].deconstruct(), this._plugins.splice(n, 1);
                        for (var a in this._pluginCache)
                            for (var r = 0; this._pluginCache[a].length > r; r++) 
                                this._pluginCache[a][r].name == e[s].toLowerCase() && this._pluginCache[a].splice(r, 1)
                            }
                }
            }, this.getPlugins = function () {
                var t = [];
                return $.each(this._plugins, function () {
                    t.push({
                        name: this.name,
                        ver: this.version || "unknown"
                    })
                }), t
            }, this._promote = function (t, e) {
                var i = this;
                this._enqueue(function () {
                    try {
                        i.__promote(t, e)
                    } catch (s) {}
                })
            }, this.__promote = function (t, e) {
                var i = t,
                s = {};
                if ("object" == typeof i) {
                    if (!i._plugin) 
                        return;
                    i = "plugin_" + i._plugin + $p.utils.capitalise(i._event.toUpperCase())
                }
                if ("time" != i && "progress" != i && "mousemove" != i && $p.utils.log("Event: [" + i + "]", e, this.listeners), this._pluginCache[i + "Handler"] && this._pluginCache[i + "Handler"].length > 0)
                    for (var n = 0; this._pluginCache[i + "Handler"].length > n; n++)
                        if (this.getConfig("debug")) 
                            try {
                                this._pluginCache[i + "Handler"][n][i + "Handler"](e, this)
                            } catch (a) {
                    $p.utils.log(a)
                } else 
                    this._pluginCache[i + "Handler"][n][i + "Handler"](e, this);
                if (this._pluginCache.eventHandler && this._pluginCache.eventHandler.length > 0)
                    for (var n = 0; this._pluginCache.eventHandler.length > n; n++)
                        if (this.getConfig("debug")) 
                            try {
                                this._pluginCache.eventHandler[n].eventHandler(i, e, this)
                            } catch (a) {
                    $p.utils.log(a)
                } else 
                    this._pluginCache.eventHandler[n].eventHandler(i, e, this);
                if (this.listeners.length > 0)
                    for (var n = 0; this.listeners.length > n; n++)
                        if (this.listeners[n].event == i || "*" == this.listeners[n].event)
                            if (this.getConfig("debug")) 
                                try {
                                    this.listeners[n].callback(e, this)
                                } catch (a) {
                    $p.utils.log(a)
                } else 
                    this.listeners[n].callback(e, this)
            }, this._detachplayerModel = function () {
                this._removeGUIListeners();
                try {
                    this.playerModel.destroy(), this._promote("detach", {})
                } catch (t) {}
            }, this._windowTouchListener = function (t) {
                t.touches && t.touches.length > 0 && (($(document.elementFromPoint(t.touches[0].clientX, t.touches[0].clientY)).attr("id") || "").indexOf(this.getDC().attr("id")) > - 1 ? (0 == this.env.mouseIsOver && this._promote("mouseenter", {}), this.env.mouseIsOver = !0, this._promote("mousemove", {}), t.stopPropagation()) : this.env.mouseIsOver && (this._promote("mouseleave", {}), this.env.mouseIsOver = !1))
            }, this._playerFocusListener = function (t) {
                var e = t.type.toLowerCase();
                switch (e) {
                case "mousedown":
                    if (0 == this.env.mouseIsOver) 
                        break;
                    if ("|TEXTAREA|INPUT".indexOf("|" + t.target.tagName.toUpperCase()) > - 1) 
                        return;
                    if (3 == t.which) {
                        if ($(t.target).hasClass("context")) 
                            break;
                        $(document).bind("contextmenu", function (t) {
                            return $(document).unbind("contextmenu"), !1
                        })
                    }
                    break;
                case "mousemove":
                    if (this.env.mouseX != t.clientX && this.env.mouseY != t.clientY && (this.env.mouseIsOver = !0), this.env.clientX == t.clientX && this.env.clientY == t.clientY) 
                        return;
                    this.env.clientX = t.clientX, this.env.clientY = t.clientY;
                    break;
                case "focus":
                case "mouseenter":
                    this.env.mouseIsOver = !0;
                    break;
                case "blur":
                case "mouseleave":
                    this.env.mouseIsOver = !1
                }
                this._promote(e, t)
            }, this._keyListener = function (t) {
                if (this.env.mouseIsOver && !("|TEXTAREA|INPUT".indexOf("|" + t.target.tagName.toUpperCase()) > - 1)) {
                    var e = this,
                    i = this.getConfig("keys").length > 0 ? this.getConfig("keys") : [{
                        27: function (t) {
                            t.getInFullscreen() ? t.setFullscreen(!1) : t.setStop()
                        },
                        32: function (t, e) {
                            t.setPlayPause(), e.preventDefault()
                        },
                        70: function (t) {
                            t.setFullscreen()
                        },
                        39: function (t, e) {
                            t.setPlayhead("+5"), e.preventDefault()
                        },
                        37: function (t, e) {
                            t.setPlayhead("-5"), e.preventDefault()
                        },
                        38: function (t, e) {
                            t.setVolume("+0.05"), e.preventDefault()
                        },
                        40: function (t, e) {
                            t.setVolume("-0.05"), e.preventDefault()
                        },
                        68: function (t) {
                            t.setDebug()
                        },
                        67: function (t) {
                            $p.utils.log("Config Dump", t.config)
                        },
                        80: function (t) {
                            $p.utils.log("Schedule Dump", t.media)
                        },
                        84: function (t) {
                            $p.utils.log("Cuepoints Dump", t.getCuePoints())
                        }
                    }
                    ];
                    this._promote("key", t), $.each(i || [], function () {
                        try {
                            this[t.keyCode](e, t)
                        } catch (i) {}
                        try {
                            this["*"](e)
                        } catch (i) {}
                    })
                }
            }, this._enterFullViewport = function (t) {
                var e = this.getIframeParent() || $(window),
                i = this.getIframe() || this.getDC(),
                s = $(e[0].document.body).css("overflow");
                t && (e = $(window), i = this.getDC()), i.data("fsdata", {
                    scrollTop: e.scrollTop() || 0,
                    scrollLeft: e.scrollLeft() || 0,
                    targetStyle: i.attr("style") || "",
                    targetWidth: i.width(),
                    targetHeight: i.height(),
                    bodyOverflow: "visible" == s ? "auto" : s,
                    bodyOverflowX: $(e[0].document.body).css("overflow-x"),
                    bodyOverflowY: $(e[0].document.body).css("overflow-y"),
                    iframeWidth: i.attr("width") || 0,
                    iframeHeight: i.attr("height") || 0
                }).css({
                    position: "absolute",
                    display: "block",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 99999,
                    margin: 0,
                    padding: 0
                }), e.scrollTop(0).scrollLeft(0), $(e[0].document.body).css({
                    overflow: "hidden",
                    overflowX: "hidden",
                    overflowY: "hidden"
                })
            }, this._exitFullViewport = function (t) {
                var e = this.getIframeParent() || $(window),
                i = this.getIframe() || this.getDC(),
                s = i.data("fsdata") || null;
                t && (e = $(window), i = this.getDC()), null != s && (e.scrollTop(s.scrollTop).scrollLeft(s.scrollLeft), $(e[0].document.body).css("overflow", s.bodyOverflow), $(e[0].document.body).css("overflow-x", s.bodyOverflowX), $(e[0].document.body).css("overflow-y", s.bodyOverflowY), s.iframeWidth > 0 && !t ? i.attr("width", s.iframeWidth + "px").attr("height", s.iframeHeight + "px") : i.width(s.targetWidth).height(s.targetHeight), i.attr("style", null == s.targetStyle ? "" : s.targetStyle).data("fsdata", null))
            }, this.pluginAPI = function () {
                var t = Array.prototype.slice.call(arguments) || null,
                e = t.shift(),
                i = t.shift();
                if (null != e && null != i)
                    for (var s = 0; this._plugins.length > s; s++)
                        if (this._plugins[s].name == e) 
                            return this._plugins[s][i](t[0]), void 0
            }, this.getPlayerVer = function () {
                return this.config._version
            }, this.getIsLastItem = function () {
                return this._currentItem == this.media.length - 1 && this.config._loop !== !0
            }, this.getIsFirstItem = function () {
                return 0 == this._currentItem && this.config._loop !== !0
            }, this.getItemConfig = function (t, e) {
                return this.getConfig(t, e)
            }, this.getConfig = function (t, e) {
                var i = e || this._currentItem,
                s = null != this.config["_" + t] ? this.config["_" + t] : this.config[t];
                if (null == t) 
                    return this.media[i].config;
                if (null == this.config["_" + t]) 
                    try {
                        void 0 !== this.media[i].config[t] && (s = this.media[i].config[t])
                } catch (n) {}
                if (t.indexOf("plugin_") > - 1) 
                    try {
                        this.media[i].config[t] && (s = $.extend(!0, {}, this.config[t], this.media[i].config[t]))
                } catch (n) {}
                if (null == s) 
                    return null;
                if ("object" == typeof s && null === s.length ? s = $.extend(!0, {}, s || {}) : "object" == typeof s && (s = $.extend(!0, [], s || [])), "string" == typeof s) 
                    switch (s) {
                    case "true":
                        s = !0;
                        break;
                    case "false":
                        s = !1;
                        break;
                    case "NaN":
                    case "undefined":
                    case "null":
                        s = null
                    }
                return s
            }, this.getDC = function () {
                return this.env.playerDom
            }, this.getState = function (t) {
                var e = "IDLE";
                try {
                    e = this.playerModel.getState()
                } catch (i) {}
                return null != t ? e == t.toUpperCase() : e
            }, this.getLoadProgress = function () {
                try {
                    return this.playerModel.getLoadProgress()
                } catch (t) {
                    return 0
                }
            }, this.getKbPerSec = function () {
                try {
                    return this.playerModel.getKbPerSec()
                } catch (t) {
                    return 0
                }
            }, this.getItemCount = function () {
                return 1 == this.media.length && "na" == this.media[0].mediaModel ? 0 : this.media.length
            }, this.getItemId = function (t) {
                return this.media[t || this._currentItem].ID || null
            }, this.getItemIdx = function () {
                return this._currentItem
            }, this.getPlaylist = function () {
                return this.getItem("*")
            }, this.getItem = function () {
                if (1 == this.media.length && "na" == this.media[0].mediaModel) 
                    return null;
                switch (arguments[0] || "current") {
                case "next":
                    return $.extend(!0, {}, this.media[this._currentItem + 1] || {});
                case "prev":
                    return $.extend(!0, {}, this.media[this._currentItem - 1] || {});
                case "current":
                    return $.extend(!0, {}, this.media[this._currentItem] || {});
                case "*":
                    return $.extend(!0, [], this.media || []);
                default:
                    return $.extend(!0, {}, this.media[arguments[0] || this._currentItem] || {})
                }
            }, this.getVolume = function () {
                return this.getConfig("fixedVolume") === !0 ? this.config.volume : this.getConfig("volume")
            }, this.getTrackId = function () {
                return this.getConfig("trackId") ? this.config.trackId : null != this._playlistServer ? "pl" + this._currentItem : null
            }, this.getLoadPlaybackProgress = function () {
                try {
                    return this.playerModel.getLoadPlaybackProgress()
                } catch (t) {
                    return 0
                }
            }, this.getSource = function () {
                try {
                    return this.playerModel.getSource()[0].src
                } catch (t) {
                    return !1
                }
            }, this.getDuration = function () {
                try {
                    return this.playerModel.getDuration()
                } catch (t) {
                    return 0
                }
            }, this.getPosition = function () {
                try {
                    return this.playerModel.getPosition() || 0
                } catch (t) {
                    return 0
                }
            }, this.getMaxPosition = function () {
                try {
                    return this.playerModel.getMaxPosition() || 0
                } catch (t) {
                    return 0
                }
            }, this.getFrame = function () {
                try {
                    return this.playerModel.getFrame()
                } catch (t) {
                    return 0
                }
            }, this.getTimeLeft = function () {
                try {
                    return this.playerModel.getDuration() - this.playerModel.getPosition()
                } catch (t) {
                    return this.media[this._currentItem].duration
                }
            }, this.getInFullscreen = function () {
                return this.getNativeFullscreenSupport().isFullScreen()
            }, this.getMediaContainer = function () {
                return null == this.env.mediaContainer && (this.env.mediaContainer = $("#" + this.getMediaId())), 0 == this.env.mediaContainer.length && (this.env.mediaContainer = this.env.playerDom.find("." + this.getNS() + "display").length > 0 ? $(document.createElement("div")).attr({
                    id: this.getId() + "_media"
                }).css({
                    overflow: "hidden",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0,
                    padding: 0,
                    margin: 0,
                    display: "block"
                }).appendTo(this.env.playerDom.find("." + this.getNS() + "display")) : $(document.createElement("div")).attr({
                    id: this.getMediaId()
                }).css({
                    width: "1px",
                    height: "1px"
                }).appendTo($(document.body))), this.env.mediaContainer
            }, this.getMediaId = function () {
                return this.getId() + "_media"
            }, this.getMediaType = function () {
                try {
                    return this._getTypeFromFileExtension(this.playerModel.getSrc()) || "na/na"
                } catch (t) {
                    return "na/na"
                }
            }, this.getUsesFlash = function () {
                return this.playerModel.modelId.indexOf("FLASH") > - 1
            }, this.getModel = function () {
                try {
                    return this.media[this._currentItem].mediaModel.toUpperCase()
                } catch (t) {
                    return "NA"
                }
            }, this.getIframeParent = this.getIframeWindow = function () {
                try {
                    var t = !1;
                    return this.config._iframe && (t = parent.location.host || !1), t === !1 ? !1 : $(parent.window)
                } catch (e) {
                    return !1
                }
            }, this.getIframe = function () {
                try {
                    var t = [];
                    return this.config._iframe && (t = window.$(frameElement) || []), 0 == t.length ? !1 : t
                } catch (e) {
                    return !1
                }
            }, this.getIframeAllowFullscreen = function () {
                var t = null;
                try {
                    t = window.frameElement.attributes.allowFullscreen || window.frameElement.attributes.mozallowFullscreen || window.frameElement.attributes.webkitallowFullscreen || null
                } catch (e) {
                    t = !0
                }
                return null != t ? !0 : !1
            }, this.getPlaybackQuality = function () {
                var t = "default";
                try {
                    t = this.playerModel.getPlaybackQuality()
                } catch (e) {}
                return "default" == t && (t = this.getConfig("playbackQuality")), ("default" == t || - 1 == $.inArray(t, this.getPlaybackQualities())) && (t = this.getAppropriateQuality()), - 1 == $.inArray(t, this.getPlaybackQualities()) && (t = "default"), t
            }, this.getPlaybackQualities = function () {
                try {
                    return $.extend(!0, [], this.media[this._currentItem].qualities || [])
                } catch (t) {}
                return []
            }, this.getIsMobileClient = function (t) {
                var e = navigator.userAgent.toLowerCase();
                var i = ["android", "windows ce", "blackberry", "palm", "mobile"];
                for (var s = 0; i.length > s; s++)
                    if (e.indexOf(i[s]) > - 1) 
                        return t ? i[s].toUpperCase() == t.toUpperCase() : !0;
                return !1
            }, this.getCanPlay = function (t, e, i) {
                return this._canPlay(t, e, i)
            }, this.getCanPlayNatively = function (t) {
                return this._canPlay(t, "native")
            }, this.getPlatform = function () {
                return this.media[this._currentItem].platform || "error"
            }, this.getPlatforms = function () {
                var t = this,
                e = this._testMediaSupport(!0),
                i = this.getConfig("platforms"),
                s = [],
                n = [];
                try {
                    for (var a in this.media[this._currentItem].file)
                        if (this.media[this._currentItem].file.hasOwnProperty(a))
                            for (var r in e) 
                                this._canPlay(this.media[this._currentItem].file[a].type.replace(/x-/, ""), e[r].toLowerCase(), this.getConfig("streamType")) && - 1 == $.inArray(e[r].toLowerCase(), n) && n.push(e[r].toLowerCase())
                } catch (o) {}
                return n.sort(function (t, e) {
                    return $.inArray(t, i) - $.inArray(e, i)
                }), n
            }, this.getNativeFullscreenSupport = function () {
                var t = this,
                e = {
                    supportsFullScreen: "viewport",
                    isFullScreen: function () {
                        try {
                            return t.getDC().hasClass("fullscreen")
                        } catch (e) {
                            return !1
                        }
                    },
                    requestFullScreen: function () {
                        t.playerModel.applyCommand("fullscreen", !0)
                    },
                    cancelFullScreen: function () {
                        t.playerModel.applyCommand("fullscreen", !1)
                    },
                    prefix: "",
                    ref: this
                }, i = "webkit moz o ms khtml".split(" ");
                if (document.cancelFullScreen !== void 0) 
                    e.supportsFullScreen = !0;
                else
                    for (var s = 0, n = i.length; n > s; s++)
                        if (e.prefix = i[s], document.createElement("video")[e.prefix + "EnterFullscreen"] !== void 0 && (e.supportsFullScreen = "mediaonly"), document[e.prefix + "CancelFullScreen"] !== void 0 && (e.supportsFullScreen = "dom", "moz" == e.prefix && document[e.prefix + "FullScreenEnabled"] === void 0 && (e.supportsFullScreen = "viewport")), e.supportsFullScreen !== !1 && "viewport" !== e.supportsFullScreen) break;
                return "viewport" == e.supportsFullScreen || "dom" == e.supportsFullScreen && this.getConfig("forceFullViewport") ? e : "mediaonly" == e.supportsFullScreen ? (e.requestFullScreen = function (e) {
                    t.playerModel.getMediaElement().get(0)[this.prefix + "EnterFullscreen"]()
                }, e.dest = {}, e.cancelFullScreen = function () {}, e) : (e.isFullScreen = function (e) {
                    var i = t.getIframe() ? parent.window.document : document;
                    switch (this.prefix) {
                    case "":
                        return i.fullScreen;
                    case "webkit":
                        return i.webkitIsFullScreen;
                    case "moz":
                        return i[this.prefix + "FullScreen"] || t.getDC().hasClass("fullscreen") && e !== !0;
                    default:
                        return i[this.prefix + "FullScreen"]
                    }
                }, e.requestFullScreen = function () {
                    if (!this.isFullScreen()) {
                        var e = t.getIframeParent() || $(window),
                        i = t.getIframe() ? t.getIframe().get(0) : null || t.getDC().get(0),
                        s = this,
                        n = t.getIframe() ? parent.window.document : document,
                        e = t.getIframeParent() || $(window);
                        e.data("fsdata", {
                            scrollTop: e.scrollTop(),
                            scrollLeft: e.scrollLeft()
                        }), $(n).unbind(this.prefix + "fullscreenchange.projekktor"), "" === this.prefix ? i.requestFullScreen() : i[this.prefix + "RequestFullScreen"](), s.ref.playerModel.applyCommand("fullscreen", !0), $(n).bind(this.prefix + "fullscreenchange.projekktor", function (t) {
                            if (s.isFullScreen(!0)) 
                                s.ref.playerModel.applyCommand("fullscreen", !0);
                            else {
                                s.ref.playerModel.applyCommand("fullscreen", !1);
                                var e = s.ref.getIframeParent() || $(window),
                                i = e.data("fsdata");
                                null != i && (e.scrollTop(i.scrollTop), e.scrollLeft(i.scrollLeft))
                            }
                        })
                    }
                }, e.cancelFullScreen = function () {
                    var e = t.getIframe() ? parent.window.document : document,
                    i = t.getIframeParent() || $(window),
                    s = i.data("fsdata");
                    $(t.getIframe() ? parent.window.document : document).unbind(this.prefix + "fullscreenchange.projekktor"), e.exitFullScreen ? e.exitFullScreen() : "" == this.prefix ? e.cancelFullScreen() : e[this.prefix + "CancelFullScreen"](), null != s && (i.scrollTop(s.scrollTop), i.scrollLeft(s.scrollLeft)), t.playerModel.applyCommand("fullscreen", !1)
                }, e)
            }, this.getId = function () {
                return this._id
            }, this.getHasGUI = function () {
                try {
                    return this.playerModel.getHasGUI()
                } catch (t) {
                    return !1
                }
            }, this.getCssPrefix = this.getNS = function () {
                return this.config._cssClassPrefix || this.config._ns || "pp"
            }, this.getPlayerDimensions = function () {
                return {
                    width: this.getDC().width(),
                    height: this.getDC().height()
                }
            }, this.getMediaDimensions = function () {
                return this.playerModel.getMediaDimensions() || {
                    width: 0,
                    height: 0
                }
            }, this.getAppropriateQuality = function (t) {
                var e = t || this.getPlaybackQualities() || [];
                if (0 == e.length) 
                    return [];
                var i = this.env.playerDom.width(),
                s = this.env.playerDom.height(),
                n = $p.utils.roundNumber(i / s, 2),
                a = {};
                return $.each(this.getConfig("playbackQualities") || [], function () {
                    if (0 > $.inArray(this.key, e)) 
                        return !0;
                    if ((this.minHeight || 0) > s && s >= a.minHeight) 
                        return !0;
                    if ((a.minHeight || 0) > this.minHeight) 
                        return !0;
                    if ("number" == typeof this.minWidth) {
                        if (0 === this.minWidth && this.minHeight > s) 
                            return !0;
                        if (this.minWidth > i) 
                            return !0;
                        a = this
                    } else if ("object" == typeof this.minWidth) {
                        var t = this;
                        $.each(this.minWidth, function () {
                            return (this.ratio || 100) > n ? !0 : this.minWidth > i ? !0 : (a = t, !0)
                        })
                    }
                    return !0
                }), $.inArray("auto", this.getPlaybackQualities()) > - 1 ? "auto" : a.key || "default"
            }, this.getFromUrl = function (t, e, i, s, n) {
                var a = null,
                r = this,
                o = !this.getIsMobileClient();
                if (e == r && "_reelUpdate" == i && this._promote("scheduleLoading", 1 + this.getItemCount()), "_" != i.substr(0, 1) ? window[i] = function (t) {
                    try {
                        delete window[i]
                    } catch (s) {}
                    e[i](t)
                } : n.indexOf("jsonp") > - 1 && (this["_jsonp" + i] = function (t) {
                    e[i](t)
                }), n) {
                    if (void 0 == $.parseJSON && n.indexOf("json") > - 1) return this._raiseError("Projekktor requires at least jQuery 1.4.2 in order to handle JSON playlists."), this;
                    n = n.indexOf("/") > - 1 ? n.split("/")[1] : n
                }
                var l = {
                    url: t,
                    complete: function (t, r) {
                        if (void 0 == n) 
                            try {
                                t.getResponseHeader("Content-Type").indexOf("xml") > - 1 && (n = "xml"), t.getResponseHeader("Content-Type").indexOf("json") > - 1 && (n = "json"), t.getResponseHeader("Content-Type").indexOf("html") > - 1 && (n = "html")
                        } catch (o) {}
                        a = $p.utils.cleanResponse(t.responseText, n);
                        try {
                            a = s(a, t.responseText, e)
                        } catch (o) {}
                        if ("error" != r && "jsonp" != n) 
                            try {
                                e[i](a)
                        } catch (o) {}
                    },
                    error: function (t) {
                        e[i] && "jsonp" != n && e[i](!1)
                    },
                    cache: !0,
                    async: o,
                    dataType: n,
                    jsonpCallback: "_" != i.substr(0, 1) ? !1 : "projekktor('" + this.getId() + "')._jsonp" + i,
                    jsonp: "_" != i.substr(0, 1) ? !1 : "callback"
                };
                return l.xhrFields = {
                    withCredentials: !0
                }, l.beforeSend = function (t) {
                    t.withCredentials = !0
                }, $.support.cors = !0, $.ajax(l), this
            }, this.setActiveItem = function (t) {
                var e = 0,
                i = this._currentItem,
                s = this,
                n = !1;
                if ("string" == typeof t) 
                    switch (t) {
                    case "same":
                        e = this._currentItem;
                        break;
                    case "previous":
                        e = this._currentItem - 1;
                        break;
                    case "next":
                        e = this._currentItem + 1
                    } else 
                        e = "number" == typeof t ? parseInt(t) : 0;
                if (e != this._currentItem && 1 == this.getConfig("disallowSkip") && !this.getState("COMPLETED") && !this.getState("IDLE")) 
                    return this;
                this._detachplayerModel(), this.env.loading = !1, 0 !== e || null != i && i != e || !(this.config._autoplay === !0 || "DESTROYING|AWAKENING".indexOf(this.getState()) > - 1) ? this.getItemCount() > 1 && e != i && null != i && this.config._continuous === !0 && this.getItemCount() > e && (n = !0) : n = !0, (e >= this.getItemCount() || 0 > e) && (n = this.config._loop, e = 0), this._currentItem = e;
                var a = this.getDC().hasClass("fullscreen");
                this.getDC().attr("class", this.env.className), a && this.getDC().addClass("fullscreen");
                var r = this.media[this._currentItem].mediaModel.toUpperCase();
                return $p.models[r] ? (null != this.getConfig("className", null) && this.getDC().addClass(this.getNS() + this.getConfig("className")), this.getDC().addClass(this.getNS() + (this.getConfig("streamType") || "http")), $p.utils.cssTransitions() || this.getDC().addClass("notransitions"), this.getIsMobileClient() && this.getDC().addClass("mobile")) : (r = "NA", this.media[this._currentItem].mediaModel = r, this.media[this._currentItem].errorCode = 8), this.playerModel = new playerModel, $.extend(this.playerModel, $p.models[r].prototype), this._promote("syncing", "display"), this._enqueue(function () {
                    try {
                        s._applyCuePoints()
                    } catch (t) {}
                }), this.playerModel._init({
                    media: $.extend(!0, {}, this.media[this._currentItem]),
                    model: r,
                    pp: this,
                    environment: $.extend(!0, {}, this.env),
                    autoplay: n,
                    quality: this.getPlaybackQuality(),
                    fullscreen: this.getInFullscreen()
                }), this
            }, this.setPlay = function () {
                var t = this;
                return this.getConfig("thereCanBeOnlyOne") && projekktor("*").each(function () {
                    this.getId() !== t.getId() && this.setStop()
                }), this._enqueue("play", !1), this
            }, this.setPause = function () {
                return this._enqueue("pause", !1), this
            }, this.setStop = function (t) {
                var e = this;
                return this.getState("IDLE") ? this : (t ? this._enqueue(function () {
                    e._currentItem = 0, e.setActiveItem(0)
                }) : this._enqueue("stop", !1), this)
            }, this.setPlayPause = function () {
                return this.getState("PLAYING") ? this.setPause() : this.setPlay(), this
            }, this.setVolume = function (t, e) {
                var i = this.getVolume();
                if (1 == this.getConfig("fixedVolume")) 
                    return this;
                switch (typeof t) {
                case "string":
                    var s = t.substr(0, 1);
                    switch (t = parseFloat(t.substr(1)), s) {
                    case "+":
                        t = this.getVolume() + t;
                        break;
                    case "-":
                        t = this.getVolume() - t;
                        break;
                    default:
                        t = this.getVolume()
                    }
                case "number":
                    t = parseFloat(t), t = t > 1 ? 1 : t, t = 0 > t ? 0 : t;
                    break;
                default:
                    return this
                }
                if (t > i && e) {
                    if (t - i > .03) {
                        for (var n = i; t >= n; n += .03) 
                            this._enqueue("volume", n, e);
                        return this._enqueue("volume", t, e), this
                    }
                } else if (i > t && e && i - t > .03) {
                    for (var n = i; n >= t; n -= .03) 
                        this._enqueue("volume", n, e);
                    return this._enqueue("volume", t, e), this
                }
                return this._enqueue("volume", t), this
            }, this.setPlayhead = this.setSeek = function (t) {
                if (1 == this.getConfig("disallowSkip")) 
                    return this;
                if ("string" == typeof t) {
                    var e = t.substr(0, 1);
                    t = parseFloat(t.substr(1)), t = "+" == e ? this.getPosition() + t : "-" == e ? this.getPosition() - t : this.getPosition()
                }
                return "number" == typeof t && this._enqueue("seek", Math.round(100 * t) / 100), this
            }, this.setFrame = function (t) {
                if (null == this.getConfig("fps")) 
                    return this;
                if (1 == this.getConfig("disallowSkip")) 
                    return this;
                if ("string" == typeof t) {
                    var e = t.substr(0, 1);
                    t = parseFloat(t.substr(1)), t = "+" == e ? this.getFrame() + t : "-" == e ? this.getFrame() - t : this.getFrame()
                }
                return "number" == typeof t && this._enqueue("frame", t), this
            }, this.setPlayerPoster = function (t) {
                var e = this;
                return this._enqueue(function () {
                    e.setConfig({
                        poster: t
                    }, 0)
                }), this._enqueue(function () {
                    e.playerModel.setPosterLive()
                }), this
            }, this.setConfig = function () {
                var t = this,
                e = arguments;
                return this._enqueue(function () {
                    t._setConfig(e[0] || null, e[1] || null)
                }), this
            }, this._setConfig = function () {
                if (!arguments.length) 
                    return result;
                var confObj = arguments[0],
                dest = "*",
                value = !1;
                if ("object" != typeof confObj) 
                    return this;
                dest = "string" == arguments[1] || "number" == arguments[1] ? arguments[1] : this._currentItem;
                for (var i in confObj)
                    if (null == this.config["_" + i]) {
                        try {
                            value = eval(confObj[i])
                        } catch (e) {
                            value = confObj[i]
                        }
                        if ("*" != dest) {
                            if (void 0 == this.media[dest]) 
                                return this;
                                null == this.media[dest].config && (this.media[dest].config = {}), this.media[dest].config[i] = value
                        } else 
                            $.each(this.media, function () {
                                null == this.config && (this.config = {}), this.config[i] = value
                            })
                }
                return this
            }, this.setFullscreen = function (t) {
                var e = this.getNativeFullscreenSupport();
                return t = null == t ? !e.isFullScreen() : t, t === !0 ? e.requestFullScreen() : e.cancelFullScreen(), this
            }, this.setSize = function (t) {
                var e = this.getIframe() || this.getDC(),
                i = e.data("fsdata") || null,
                s = t && null != t.width ? t.width : null != this.getConfig("width") ? this.getConfig("width") : !1,
                n = t && null != t.height ? t.height : null == this.getConfig("height") && this.getConfig("ratio") ? Math.round((s || this.getDC().width()) / this.getConfig("ratio")) : null != this.getConfig("height") ? this.getConfig("height") : !1;
                this.getInFullscreen() && null != i ? (i.targetWidth = s, i.targetHeight = n, e.data("fsdata", i)) : (s && e.css({
                    width: s + "px"
                }), n && e.css({
                    height: n + "px"
                }));
                try {
                    this.playerModel.applyCommand("resize")
                } catch (a) {}
            }, this.setLoop = function (t) {
                this.config._loop = t || !this.config._loop
            }, this.setDebug = function (t) {
                $p.utils.logging = t || !$p.utils.logging, $p.utils.logging && $p.utils.log("DEBUG MODE for player #" + this.getId())
            }, this.addListener = function (t, e) {
                var i = this;
                return this._enqueue(function () {
                    i._addListener(t, e)
                }), this
            }, this._addListener = function (t, e) {
                var i = t.indexOf(".") > - 1 ? t.split(".") : [t, "default"];
                return this.listeners.push({
                    event: i[0],
                    ns: i[1],
                    callback: e
                }), this
            }, this.removeListener = function (t, e) {
                var i = this.listeners.length,
                s = t.indexOf(".") > - 1 ? t.split(".") : [t, "*"];
                for (var n = 0; i > n; n++) 
                    void 0 != this.listeners[n] && (this.listeners[n].event == s[0] || "*" === s[0]) && (this.listeners[n].ns != s[1] && "*" !== s[1] || this.listeners[n].callback != e && null != e || this.listeners.splice(n, 1));
                return this
            }, this.setItem = function () {
                var t = arguments[0];
                var e = 0;
                return this._clearqueue(), null == t ? (e = this._removeItem(arguments[1]), e === this._currentItem && this.setActiveItem("previous")) : (e = this._addItem(this._prepareMedia({
                    file: t,
                    config: t.config || {}
                }), arguments[1], arguments[2]), e === this._currentItem && this.setActiveItem(this._currentItem)), this
            }, this.setFile = function () {
                var t = arguments[0] || "",
                e = arguments[1] || this._getTypeFromFileExtension(t),
                i = [];
                return this.env.loading === !0 ? this : (this._clearqueue(), this.env.loading = !0, this._detachplayerModel(), "object" == typeof t ? ($p.utils.log("Applying incoming JS Object", t), this._reelUpdate(t), this) : (i[0] = {}, i[0].file = {}, i[0].file.src = t || "", i[0].file.type = e || this._getTypeFromFileExtension(splt[0]), i[0].file.type.indexOf("/xml") > - 1 || i[0].file.type.indexOf("/json") > - 1 ? ($p.utils.log("Loading external data from " + i[0].file.src + " supposed to be " + i[0].file.type), this._playlistServer = i[0].file.src, this.getFromUrl(i[0].file.src, this, "_reelUpdate", this.getConfig("reelParser"), i[0].file.type), this) : ($p.utils.log("Applying incoming single file:" + i[0].file.src, i), this._reelUpdate(i), this)))
            }, this.setPlaybackQuality = function (t) {
                var e = t || this.getAppropriateQuality();
                return $.inArray(e, this.media[this._currentItem].qualities || []) > - 1 && (this.playerModel.applyCommand("quality", e), this.setConfig({
                    playbackQuality: e
                })), this
            }, this.openUrl = function (t) {
                return t = t || {
                    url: "",
                    target: "",
                    pause: !1
                }, "" == t.url ? this : (t.pause === !0 && this.setPause(), window.open(t.url, t.target).focus(), this)
            }, this.selfDestruct = this.destroy = function () {
                var t = this;
                return this._enqueue(function () {
                    t._destroy()
                }), this
            }, this._destroy = function () {
                var t = this;
                return $(this).unbind(), this.removePlugins(), this.playerModel.destroy(), this._removeGUIListeners(), $.each(projekktors, function (e) {
                    try {
                        if (this.getId() == t.getId() || this.getId() == t.getId() || this.getParent() == t.getId()) 
                            return projekktors.splice(e, 1), void 0
                    } catch (i) {}
                }), this.env.playerDom.replaceWith(this.env.srcNode), this._promote("destroyed"), this.removeListener("*"), this
            }, this.reset = function () {
                var t = this;
                return this._clearqueue(), this._enqueue(function () {
                    t._reset()
                }), this
            }, this._reset = function () {
                var t = {}, e = this;
                this.setFullscreen(!1), $(this).unbind(), $(this.getIframe() ? parent.window.document : document).unbind(".projekktor"), $(window).unbind(".projekktor" + this.getId()), this.playerModel.destroy(), this.playerModel = {}, this.removePlugins(), this._removeGUIListeners(), this.env.mediaContainer = null, this._currentItem = null;
                for (var i in this.config) 
                    t["_" == i.substr(0, 1) ? i.substr(1) : i] = this.config[i];
                return t.autoplay = !1, "function" == typeof this.env.onReady && this._enqueue(e.env.onReady(e)), this._init(this.env.playerDom, t), this
            }, this.setCuePoint = function (t, e) {
                var i = void 0 !== t.item ? t.item : this.getItemIdx(),
                s = $.extend(!0, {
                    offset: 0
                }, e),
                n = this,
                a = {
                    id: t.id || $p.utils.randomId(8),
                    group: t.group || $p.utils.randomId(8),
                    item: i,
                    on: ($p.utils.toSeconds(t.on) || 0) + s.offset,
                    off: ($p.utils.toSeconds(t.off) || $p.utils.toSeconds(t.on) || 0) + s.offset,
                    value: t.value || null,
                    callback: t.callback || function () {},
                    precision: null == t.precision ? 1 : t.precision,
                    title: null == t.title ? "" : t.title,
                    _listeners: [],
                    _unlocked: !1,
                    _active: !1,
                    _lastTime: 0,
                    isAvailable: function () {
                        return this._unlocked
                    },
                    _stateListener: function (t, e) {
                        if ("STOPPED|COMPLETED|DESTROYING".indexOf(t) > - 1) {
                            if (this._active) 
                                try {
                                    this.callback(!1, this, e)
                                } catch (i) {}
                            this._active = !1, this._lastTime = - 1
                        }
                    },
                    _timeListener: function (t, e) {
                        if (e.getItemIdx() === this.item || "*" == this.item) {
                            var i = 0 == this.precision ? Math.round(t) : $p.utils.roundNumber(t, this.precision),
                            s = this;
                            if (this._unlocked === !1) {
                                var n = e.getDuration() * e.getLoadProgress() / 100;
                                if (!(n >= this.on || i >= this.on)) 
                                    return;
                                $.each(this._listeners.unlock || [], function () {
                                    this (s, e)
                                }), this._unlocked = !0
                            }
                            if (this._lastTime != i) {
                                var a = 1 >= i - this._lastTime && i - this._lastTime > 0;
                                if ((i >= this.on && this.off >= i || i >= this.on && this.on == this.off && this.on + 1 >= i) && this._active !== !0) {
                                    this._active = !0, $p.utils.log("Cue Point: [ON " + this.on + "] at " + i, this);
                                    try {
                                        this.callback({
                                            id: this.id,
                                            enabled: !0,
                                            value: this.value,
                                            seeked: !a,
                                            player: e
                                        })
                                    } catch (r) {}
                                } else if ((this.on > i || i > this.off) && this.off != this.on && 1 == this._active) {
                                    this._active = !1, $p.utils.log("Cue Point: [OFF] at " + this.off, this);
                                    try {
                                        this.callback({
                                            id: this.id,
                                            enabled: !1,
                                            value: this.value,
                                            seeked: !a,
                                            player: e
                                        })
                                    } catch (r) {}
                                }
                                this.off == this.on && this._active && new Number(i - this.on).toPrecision(this.precision) >= 1 && (this._active = !1), this._lastTime = i
                            }
                        }
                    },
                    addListener: function (t, e) {
                        null == this._listeners[t] && (this._listeners[t] = []), this._listeners[t].push(e || function () {})
                    }
                };
                return null != t.unlockCallback && a.addListener("unlock", t.unlockCallback), null == this._cuePoints[i] && (this._cuePoints[i] = []), this._cuePoints[i].push(a), this.getState("IDLE") || this._promote("cuepointAdded"), this
            }, this.setGotoCuePoint = function (t, e) {
                var i = this.getCuePoints(e);
                return this.setPlayhead(i[t].on), this
            }, this.getCuePoints = function (t) {
                return this._cuePoints[t || this.getItemIdx()] || this._cuePoints || {}
            }, this.getCuePointById = function (t, e) {
                var i = !1,
                s = this.getCuePoints(e);
                for (var n = 0; s.length > n; n++)
                    if (s.id == t) {
                        i = this;
                        break
                    }
                return i
            }, this.removeCuePoints = function (t, e) {
                var i = this.getCuePoints(t || 0) || {}, s = [];
                for (var n = 0; i.length > n; n++) 
                    i[n].group == e && (this.removeListener("time", i[n].timeEventHandler), this.removeListener("state", i[n].stateEventHandler), s.push(n));
                for (var a = 0; s.length > a; a++) 
                    i.splice(s[a] - a, 1);
                return this
            }, this.syncCuePoints = function () {
                var t = this;
                return this._enqueue(function () {
                    try {
                        t._applyCuePoints()
                    } catch (e) {}
                }), this
            }, this._applyCuePoints = function (t) {
                var e = this;
                (null != this._cuePoints[this._currentItem] || null != this._cuePoints["*"]) && $.each($.merge(this._cuePoints[this._currentItem] || [], this._cuePoints["*"] || []), function (t, i) {
                    try {
                        e.removeListener("time", i.timeEventHandler), e.removeListener("state", i.stateEventHandler)
                    } catch (s) {}
                    i.timeEventHandler = function (t, e) {
                        try {
                            i._timeListener(t, e)
                        } catch (s) {}
                    }, i.stateEventHandler = function (t, e) {
                        try {
                            i._stateListener(t, e)
                        } catch (s) {}
                    }, e.addListener("time", i.timeEventHandler), e.addListener("state", i.stateEventHandler), e.addListener("item", function () {
                        e.removeListener("time", i.timeEventHandler), e.removeListener("state", i.stateEventHandler)
                    })
                })
            }, this._enqueue = function (t, e, i) {
                null != t && (this._queue.push({
                    command: t,
                    params: e,
                    delay: i
                }), this._processQueue())
            }, this._clearqueue = function (t, e) {
                this._isReady === !0 && (this._queue = [])
            }, this._processQueue = function () {
                var t = this,
                e = !1;
                this._processing !== !0 && this.env.loading !== !0 && (this._processing = !0, function () {
                    try {
                        e = t.playerModel.getIsReady()
                    } catch (i) {}
                    if (t.env.loading !== !0 && e) {
                        try {
                            var s = t._queue.shift();
                            null != s && ("string" == typeof s.command ? s.delay > 0 ? setTimeout(function () {
                                t.playerModel.applyCommand(s.command, s.params)
                            }, s.delay) : t.playerModel.applyCommand(s.command, s.params) : s.command(t))
                        } catch (i) {
                            $p.utils.log("ERROR:", i)
                        }
                        return 0 == t._queue.length ? (t._isReady === !1 && (t._isReady = !0), t._processing = !1, void 0) : (arguments.callee(), void 0)
                    }
                    setTimeout(arguments.callee, 100)
                }())
            }, this._getTypeFromFileExtension = function (t) {
                var e = "",
                i = [],
                s = {}, i = [],
                n = null,
                a = !0;
                for (var r in $p.mmap)
                    if ($p.mmap.hasOwnProperty(r)) {
                        n = $p.mmap[r].platform, "object" != typeof n && (n = [n]), a = !0;
                        for (var o = 0; n.length > o; o++) 
                            null != n[o] && (this.getConfig("enable" + n[o].toUpperCase() + "Platform") === !1 || - 1 === $.inArray(n[o], this.getConfig("platforms"))) && (a = !1);
                            if (a === !1) 
                                continue;
                                i.push("\\." + $p.mmap[r].ext), s[$p.mmap[r].ext] = $p.mmap[r]
                    }
                i = "^.*.(" + i.join("|") + ")";
                try {
                    e = t.match(RegExp(i))[1], e = e ? e.replace(".", "") : "NaN"
                } catch (l) {
                    e = "NaN"
                }
                return s[e].type
            }, this._testMediaSupport = function (t) {
                var e = {}, i = [],
                s = "",
                n = this;
                if (t) {
                    if (null != $p._platformTableCache) 
                        return $p._platformTableCache
                } else if (null != $p._compTableCache) 
                    return $p._compTableCache;
                for (var a = 0; $p.mmap.length > a; a++) 
                    $p.mmap.hasOwnProperty(a) && (platforms = "object" == typeof $p.mmap[a].platform ? $p.mmap[a].platform : [$p.mmap[a].platform], $.each(platforms, function (t, r) {
                        return null == r ? !0 : (s = $p.mmap[a].streamType || ["http"], $.each(s, function (t, s) {
                            if (null == e[s] && (e[s] = {}), null == e[s][r] && (e[s][r] = []), $.inArray($p.mmap[a].type, e[s][r]) > - 1) 
                                return !0;
                                var o = "" + ($p.models[$p.mmap[a].model.toUpperCase()].prototype[r.toLowerCase() + "Version"] || "1");
                                try {
                                    if ($p.utils.versionCompare($p.platforms[r.toUpperCase()]($p.mmap[a].type), o)) 
                                        return 0 != n.getConfig("enable" + r.toUpperCase() + "Platform") && $.inArray(r.toLowerCase(), n.getConfig("platforms")) > - 1 && (e[s][r].push($p.mmap[a].type), - 1 == $.inArray(r.toUpperCase(), i) && i.push(r.toUpperCase())), !0
                                    } catch (l) {
                                        $p.utils.log("ERROR", "platform " + r + " not defined")
                                    }
                                    return !0
                                }), !0)
                            }));
                return $p._compTableCache = e, $p._platformTableCache = i, t ? $p._platformTableCache : $p._compTableCache
            }, this._readMediaTag = function (t) {
                var e = {}, i = "",
                s = [],
                n = this;
                if ( - 1 == "VIDEOAUDIO".indexOf(t[0].tagName.toUpperCase())) 
                    return !1;
                this.getConfig("ignoreAttributes") || (e = {
                    autoplay: void 0 === t.attr("autoplay") && void 0 === t.prop("autoplay") || t.prop("autoplay") === !1 ? !1 : !0,
                    controls: void 0 === t.attr("controls") && void 0 === t.prop("controls") || t.prop("controls") === !1 ? !1 : !0,
                    loop: void 0 === t.attr("autoplay") && void 0 === t.prop("loop") || t.prop("loop") === !1 ? !1 : !0,
                    title: void 0 !== t.attr("title") && t.attr("title") !== !1 ? t.attr("title") : "",
                    poster: void 0 !== t.attr("poster") && t.attr("poster") !== !1 ? t.attr("poster") : "",
                    width: void 0 !== t.attr("width") && t.attr("width") !== !1 ? t.attr("width") : null,
                    height: void 0 !== t.attr("height") && t.attr("height") !== !1 ? t.attr("height") : null
                }), i = $($("<div></div>").html($(t).clone())).html(), s = ["autoplay", "controls", "loop"];
                for (var a = 0; s.length > a; a++) 
                    - 1 != i.indexOf(s[a]) && (e[s[a]] = !0);
                if (e.playlist = [], e.playlist[0] = [], e.playlist[0].config = {
                    tracks: []
                }, t.attr("src") && e.playlist[0].push({
                    src: t.attr("src"),
                    type: t.attr("type") || this._getTypeFromFileExtension(t.attr("src"))
                }), !$("<video/>").get(0).canPlayType) {
                    var r = t;
                    do
                        if (r = r.next("source,track"), r.attr("src")) 
                            switch (r.get(0).tagName.toUpperCase()) {
                            case "SOURCE":
                                e.playlist[0].push({
                                    src: r.attr("src"),
                                    type: r.attr("type") || this._getTypeFromFileExtension(r.attr("src")),
                                    quality: r.attr("data-quality") || ""
                                });
                                break;
                            case "TRACK":
                                $(this).attr("src") && e.playlist[0].config.tracks.push({
                                    src: r.attr("src"),
                                    kind: r.attr("kind") || "subtitle",
                                    lang: r.attr("srclang") || null,
                                    label: r.attr("label") || null
                                })
                            }
                    while (r.attr("src"))
                    }
                return 0 == e.playlist[0].length && t.children("source,track").each(function () {
                    if ($(this).attr("src")) 
                        switch ($(this).get(0).tagName.toUpperCase()) {
                        case "SOURCE":
                            e.playlist[0].push({
                                src: $(this).attr("src"),
                                type: $(this).attr("type") || n._getTypeFromFileExtension($(this).attr("src")),
                                quality: $(this).attr("data-quality") || ""
                            });
                            break;
                        case "TRACK":
                            e.playlist[0].config.tracks.push({
                                src: $(this).attr("src"),
                                kind: $(this).attr("kind") || "subtitle",
                                lang: $(this).attr("srclang") || null,
                                label: $(this).attr("label") || null
                            })
                        }
                }), e
            }, this._raiseError = function (t) {
                this.env.playerDom.html(t).css({
                    color: "#fdfdfd",
                    backgroundColor: "#333",
                    lineHeight: this.config.height + "px",
                    textAlign: "center",
                    display: "block"
                }), this._promote("error")
            }, this._init = function (t, e) {
                var i = t || srcNode,
                s = e || cfg,
                n = this._readMediaTag(i);
                if (this.env.srcNode = i.wrap("<div></div>").parent().html(), i.unwrap(), this.env.className = i.attr("class") || "", this._id = i[0].id || $p.utils.randomId(8), n !== !1) {
                    this.env.playerDom = $("<div/>").attr({
                        "class": i[0].className,
                        style: i.attr("style")
                    }), i.replaceWith(this.env.playerDom), i.empty().removeAttr("type").removeAttr("src");
                    try {
                        i.get(0).pause(), i.get(0).load()
                    } catch (a) {}
                    $("<div/>").append(i).get(0).innerHTML = "", i = null
                } else 
                    this.env.playerDom = i;
                s = $.extend(!0, {}, n, s);
                for (var r in s) 
                    null != this.config["_" + r] ? this.config["_" + r] = s[r] : this.config[r] = r.indexOf("plugin_") > - 1 ? $.extend(this.config[r], s[r]) : s[r];
                if ($p.utils.logging = this.config._debug, this.setSize(), this.getIsMobileClient() && (this.config._autoplay = !1, this.config.fixedVolume = !0), this.env.playerDom.attr("id", this._id), this.config._theme) 
                    switch (typeof this.config._theme) {
                    case "string":
                        break;
                    case "object":
                        this._applyTheme(this.config._theme)
                    } else 
                        this._start(!1);
                return this
            }, this._start = function (t) {
                var e = this,
                i = this.getIframeParent();
                this._registerPlugins(), this.config._iframe === !0 && (i ? i.ready(function () {
                    e._enterFullViewport(!0)
                }) : e._enterFullViewport(!0)), i === !1 && (this.config._isCrossDomain = !0), this.getIframeAllowFullscreen() || (this.config.enableFullscreen = !1), "function" == typeof onReady && this._enqueue(function () {
                    onReady(e)
                });
                for (var s in this.config._playlist[0])
                    if (this.config._playlist[0][s].type && (this.config._playlist[0][s].type.indexOf("/json") > - 1 || this.config._playlist[0][s].type.indexOf("/xml") > - 1)) 
                        return this.setFile(this.config._playlist[0][s].src, this.config._playlist[0][s].type), this;
                return this.setFile(this.config._playlist), this
            }, this._applyTheme = function (data) {
                var ref = this;
                if (data === !1) 
                    return this._raiseError("The Projekktor theme-set specified could not be loaded."), !1;
                if ("string" == typeof data.css && $("head").append('<style type="text/css">' + $p.utils.parseTemplate(data.css, {
                    rp: data.baseURL
                }) + "</style>"), "string" == typeof data.html && this.env.playerDom.html($p.utils.parseTemplate(data.html, {
                    p: this.getNS()
                })), this.env.playerDom.addClass(data.id).addClass(data.variation), this.env.className = this.env.className && 0 !== this.env.className.length ? this.env.className + " " + data.id : data.id, data.variation && 0 !== data.variation.length && (this.env.className += " " + data.variation), "object" == typeof data.config) {
                    for (var i in data.config) 
                        null != this.config["_" + i] ? this.config["_" + i] = data.config[i] : this.config[i] = i.indexOf("plugin_") > - 1 ? $.extend(!0, {}, this.config[i], data.config[i]) : data.config[i];
                    if ("object" == typeof data.config.plugins)
                        for (var i = 0; data.config.plugins.length > i; i++) 
                            try {
                                typeof eval("projekktor" + data.config.plugins[i])
                            } catch (e) {
                        return this._raiseError("The applied theme requires the following Projekktor plugin(s): <b>" + data.config.plugins.join(", ") + "</b>"), !1
                    }
                }
                return data.onReady && this._enqueue(function (player) {
                    eval(data.onReady)
                }), this._start()
            }, this._init()
        }
    }, $p.mmap = [], $p.models = {}, $p.newModel = function (t, e) {
        if ("object" != typeof t) 
            return i;
        if (!t.modelId) 
            return i;
        var i = !1,
        s = $p.models[e] && void 0 != e ? $p.models[e].prototype : {};
        if ($p.models[t.modelId]) 
            return i;
        $p.models[t.modelId] = function () {}, $p.models[t.modelId].prototype = $.extend({}, s, t), t.setiLove && t.setiLove(), $p.mmap = $.grep($p.mmap, function (e) {
            var i = e.model != (t.replace ? t.replace.toLowerCase() : ""),
            s = e.replaces != t.modelId;
            return i && s
        });
        for (var n = 0; t.iLove.length > n; n++) 
            t.iLove[n].model = t.modelId.toLowerCase(), t.iLove[n].replaces = t.replace ? t.replace.toLowerCase() : "", $p.mmap.push(t.iLove[n]);
        return !0
    }
});
var projekktorConfig = function (t) {
    this._version = t
};
projekktorConfig.prototype = {
    _playerName: "Projekktor",
    _playerHome: "http://www.projekktor.com?via=context",
    _cookieName: "projekktor",
    _cookieExpiry: 356,
    _plugins: ["display", "controlbar"],
    _addplugins: [],
    _reelParser: null,
    _ns: "pp",
    _platforms: ["browser", "android", "ios", "native", "flash", "vlc"],
    _iframe: !1,
    _ignoreAttributes: !1,
    _loop: !1,
    _autoplay: !1,
    _continuous: !0,
    _thereCanBeOnlyOne: !0,
    _leaveFullscreen: !0,
    _playlist: [],
    _theme: !1,
    _themeRepo: !1,
    _messages: {
        0: "#0 An (unknown) error occurred.",
        1: "#1 You aborted the media playback. ",
        2: "#2 A network error caused the media download to fail part-way. ",
        3: "#3 The media playback was aborted due to a corruption problem. ",
        4: "#4 The media (%{title}) could not be loaded because the server or network failed.",
        5: "#5 Sorry, your browser does not support the media format of the requested file.",
        6: "#6 Your client is in lack of the Flash Plugin V%{flashver} or higher.",
        7: "#7 No media scheduled.",
        8: "#8 ! Invalid media model configured !",
        9: "#9 File (%{file}) not found.",
        10: "#10 Invalid or missing quality settings for %{title}.",
        11: "#11 Invalid streamType and/or streamServer settings for %{title}.",
        12: "#12 Invalid or inconsistent quality setup for %{title}.",
        80: "#80 The requested file does not exist or is delivered with an invalid content-type.",
        97: "No media scheduled.",
        98: "Invalid or malformed playlist data!",
        99: "Click display to proceed. ",
        100: "Keyboard Shortcuts",
        500: "This Youtube video has been removed or set to private",
        501: "The Youtube user owning this video disabled embedding.",
        502: "Invalid Youtube Video-Id specified."
    },
    _debug: !1,
    _width: null,
    _height: null,
    _ratio: !1,
    _keys: [],
    _isCrossDomain: !1,
    _forceFullViewport: !1,
    id: 0,
    title: null,
    cat: "clip",
    poster: null,
    controls: !0,
    start: !1,
    stop: !1,
    volume: .5,
    cover: "",
    disablePause: !1,
    disallowSkip: !1,
    fixedVolume: !1,
    imageScaling: "aspectratio",
    videoScaling: "aspectratio",
    playerFlashMP4: "",
    playerFlashMP3: "",
    streamType: "http",
    streamServer: "",
    startParameter: "start",
    useYTIframeAPI: !0,
    enableKeyboard: !0,
    enableFullscreen: !0,
    playbackQuality: "default",
    _playbackQualities: [{
        key: "small",
        minHeight: 240,
        minWidth: 240
    }, {
        key: "medium",
        minHeight: 360,
        minWidth: [{
            ratio: 1.77,
            minWidth: 640
        }, {
            ratio: 1.33,
            minWidth: 480
        }
        ]
    }, {
        key: "large",
        minHeight: 480,
        minWidth: [{
            ratio: 1.77,
            minWidth: 853
        }, {
            ratio: 1.33,
            minWidth: 640
        }
        ]
    }, {
        key: "hd1080",
        minHeight: 1080,
        minWidth: [{
            ratio: 1.77,
            minWidth: 1920
        }, {
            ratio: 1.33,
            minWidth: 1440
        }
        ]
    }, {
        key: "hd720",
        minHeight: 720,
        minWidth: [{
            ratio: 1.77,
            minWidth: 1280
        }, {
            ratio: 1.33,
            minWidth: 960
        }
        ]
    }, {
        key: "highres",
        minHeight: 1081,
        minWidth: 0
    }
    ],
    enableTestcard: !0,
    skipTestcard: !1,
    duration: 0,
    className: ""
}, jQuery(function (t) {
    $p.utils = {
        imageDummy: function () {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi/v//PwNAgAEACQsDAUdpTjcAAAAASUVORK5CYII="
        },
        capitalise: function (t) {
            return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
        },
        blockSelection: function (t) {
            return t && t.css({
                "-khtml-user-select": "none",
                "-webkit-user-select": "none",
                MozUserSelect: "none",
                "user-select": "none"
            }).attr("unselectable", "on").bind("selectstart", function () {
                return !1
            }), t
        },
        unique: function (e) {
            var i = [];
            for (var s = e.length; s--;) {
                var n = e[s];
                - 1 === t.inArray(n, i) && i.unshift(n)
            }
            return i
        },
        intersect: function (e, i) {
            var s = [];
            return t.each(e, function (n) {
                try {
                    t.inArray(i, e[n]) > - 1 && s.push(e[n])
                } catch (a) {}
                try {
                    t.inArray(e[n], i) > - 1 && s.push(e[n])
                } catch (a) {}
            }), s
        },
        roundNumber: function (t, e) {
            return 0 >= t || isNaN(t) ? 0 : Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
        },
        randomId: function (t) {
            var e = "abcdefghiklmnopqrstuvwxyz",
            i = "";
            for (var s = 0; t > s; s++) {
                var n = Math.floor(Math.random() * e.length);
                i += e.substring(n, n + 1)
            }
            return i
        },
        toAbsoluteURL: function (t) {
            var e = location,
            i, s, n, a;
            if (null == t || "" == t) 
                return "";
            if (/^\w+:/.test(t)) 
                return t;
            if (i = e.protocol + "//" + e.host, 0 === t.indexOf("/")) 
                return i + t;
            if (s = e.pathname.replace(/\/[^\/]*$/, ""), n = t.match(/\.\.\//g))
                for (t = t.substring(3 * n.length), a = n.length; a--;) 
                    s = s.substring(0, s.lastIndexOf("/"));
            return i + s + "/" + t
        },
        strip: function (t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        toSeconds: function (t) {
            var e = 0;
            if ("string" != typeof t) 
                return t;
            if (t) {
                var s = t.split(":");
                for (s.length > 3 && (s = s.slice(0, 3)), i = 0; s.length > i; i++) 
                    e = 60 * e + parseFloat(s[i].replace(",", "."))
            }
            return parseFloat(e)
        },
        toTimeString: function (t, e) {
            var i = Math.floor(t / 3600),
            s = t % 3600,
            n = Math.floor(s / 60),
            a = s % 60,
            r = Math.floor(a);
            return 10 > i && (i = "0" + i), 10 > n && (n = "0" + n), 10 > r && (r = "0" + r), e === !0 ? i + ":" + n : i + ":" + n + ":" + r
        },
        embeddFlash: function (e, i, s, n) {
            var a = i.FlashVars || {}, r = "",
            o = "",
            l = "",
            h = "",
            c = e,
            u = "";
            i.src += - 1 == i.src.indexOf("?") ? "?" : "&";
            for (var p in a) 
                "function" != typeof a[p] && (h = a[p], i.src += p + "=" + encodeURIComponent(h) + "&");
            i.src.replace(/&$/, ""), o = '<object id="' + i.id + '" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"  name="' + i.name + '" width="' + i.width + '" height="' + i.height + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' + '<param name="movie" value="' + i.src + '"></param>' + '<param name="allowScriptAccess" value="' + i.allowScriptAccess + '"></param>' + '<param name="allowFullScreen" value="' + i.allowFullScreen + '"></param>' + '<param name="wmode" value="' + i.wmode + '"></param>', l = "<embed ";
            for (var p in i) 
                "FLASHVARS" !== p.toUpperCase() && "function" != typeof i[p] && (l += p + '="' + i[p] + '" ');
            return l += ' pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"></embed>', r = o + l, r += "</object>", (!document.all || window.opera) && (r = l), null === c ? r : (c.get(0).innerHTML = r, s !== !1 && c.append(t("<div/>").attr("id", i.id + "_cc").css({
                width: n ? "1px" : "100%",
                height: n ? "1px" : "100%",
                backgroundColor: 9 > $p.utils.ieVersion() ? "#000" : "transparent",
                filter: "alpha(opacity = 0.1)",
                position: "absolute",
                top: 0,
                left: 0
            })), t("#" + i.id))
        },
        ieVersion: function () {
            var t = 3,
            e = document.createElement("div"),
            i = e.getElementsByTagName("i");
            while (e.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", i[0]);
            return t > 4 ? t : void 0
        },
        parseTemplate: function (t, e, i) {
            if (void 0 === e || 0 == e.length || "object" != typeof e) 
                return t;
            for (var s in e) 
                t = t.replace(RegExp("%{" + s + "}", "gi"), i === !0 ? window.encodeURIComponent(e[s]) : e[s]);
            return t = t.replace(/%{(.*?)}/gi, "")
        },
        stretch: function (e, i, s, n, a, r) {
            if (null == i) 
                return !1;
            i instanceof t == !1 && (i = t(i)), i.data("od") || i.data("od", {
                width: i.width(),
                height: i.height()
            });
            var o = void 0 !== a ? a : i.data("od").width,
            l = void 0 !== r ? r : i.data("od").height,
            h = s / o,
            c = n / l,
            u = s,
            p = n;
            switch (e) {
            case "none":
                u = o, p = l;
                break;
            case "fill":
                h > c ? (u = o * h, p = l * h) : c > h && (u = o * c, p = l * c);
                break;
            case "aspectratio":
            default:
                h > c ? (u = o * c, p = l * c) : c > h && (u = o * h, p = l * h)
            }
            return s = $p.utils.roundNumber(100 * (u / s), 0), n = $p.utils.roundNumber(100 * (p / n), 0), 0 === s || 0 === n ? !1 : (i.css({
                margin: 0,
                padding: 0,
                width: s + "%",
                height: n + "%",
                left: (100 - s) / 2 + "%",
                top: (100 - n) / 2 + "%"
            }), i.data("od").width != i.width() || i.data("od").height != i.height() ? !0 : !1)
        },
        parseUri: function (t) {
            var e = {
                strictMode: !1,
                key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            }, i = e.parser[e.strictMode ? "strict" : "loose"].exec(t),
            s = {}, n = 14;
            while (n--) 
                s[e.key[n]] = i[n] || "";
            return s[e.q.name] = {}, s[e.key[12]].replace(e.q.parser, function (t, i, n) {
                i && (s[e.q.name][i] = n)
            }), s
        },
        log: function () {
            this.logging !== !1 && (this.history = this.history || [], this.history.push(arguments), window.console && console.log(Array.prototype.slice.call(arguments)))
        },
        cleanResponse: function (e, i) {
            var s = !1;
            switch (i) {
            case "html":
            case "xml":
                window.DOMParser ? (s = new DOMParser, s = s.parseFromString(e, "text/xml")) : (s = new ActiveXObject("Microsoft.XMLDOM"), s.async = "false", s.loadXML(e));
                break;
            case "json":
                s = e, "string" == typeof s && (s = t.parseJSON(s));
                break;
            case "jsonp":
                break;
            default:
                s = e
            }
            return s
        },
        cssTransitions: function () {
            var t = document.createElement("z"),
            e = t.style;

            function i(t) {
                for (var i in t)
                    if (null != e[t[i]]) 
                        return !0;
                return !1
            }

            function s(t) {
                var e = "Webkit Moz O ms Khtml".split(" "),
                s = t.charAt(0).toUpperCase() + t.substr(1),
                n = (t + " " + e.join(s + " ") + s).split(" ");
                return i(n)
            }
            return s("animationName")
        },
        versionCompare: function (t, e) {
            var i = t.split("."),
            s = e.split("."),
            n = 0;
            for (n = 0; i.length > n; ++n) 
                i[n] = Number(i[n]);
            for (n = 0; s.length > n; ++n) 
                s[n] = Number(s[n]);
            return 2 == i.length && (i[2] = 0), i[0] > s[0] ? !0 : i[0] < s[0] ? !1 : i[1] > s[1] ? !0 : i[1] < s[1] ? !1 : i[2] > s[2] ? !0 : i[2] < s[2] ? !1 : !0
        },
        stringify: function (t) {
            if ("JSON" in window) 
                return JSON.stringify(t);
            var e = typeof t;
            if ("object" != e || null === t) 
                return "string" == e && (t = '"' + t + '"'), t + "";
            var i, s, n = [],
            a = t && t.constructor == Array;
            for (i in t) 
                t.hasOwnProperty(i) && (s = t[i], e = typeof s, t.hasOwnProperty(i) && ("string" == e ? s = '"' + s + '"' : "object" == e && null !== s && (s = $p.utils.stringify(s)), n.push((a ? "" : '"' + i + '":') + (s + ""))));
            return (a ? "[" : "{") + (n + "") + (a ? "]" : "}")
        },
        logging: !1
    }
}), jQuery(function (t) {
    $p.platforms = {
        VLC: function () {
            if (navigator.plugins && navigator.plugins.length > 0) {
                for (var t = 0; navigator.plugins.length > t; ++t)
                    if ( - 1 != navigator.plugins[t].name.indexOf("VLC")) {
                        if (null != navigator.plugins[t].version) 
                            return navigator.plugins[t].version || "0";
                            if (null != navigator.plugins[t].description && navigator.plugins[t].description.match(/\d{1,}\.\d{1,}\.\d{1,}/i)[0]) 
                                return navigator.plugins[t].description.match(/\d{1,}\.\d{1,}\.\d{1,}/i)[0]
                    }
            } else 
                try {
                    return new ActiveXObject("VideoLAN.VLCPlugin.2"), "0"
            } catch (e) {}
            return "0"
        },
        FLASH: function (t) {
            try {
                try {
                    var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    try {
                        e.AllowScriptAccess = "always"
                    } catch (i) {
                        return "6.0.0"
                    }
                } catch (i) {}
                return "" + new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0]
            } catch (i) {
                try {
                    if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) 
                        return "" + (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0]
                } catch (i) {}
            }
            return "0"
        },
        FLASHNA: function (t) {
            try {
                try {
                    var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    try {
                        e.AllowScriptAccess = "always"
                    } catch (i) {
                        return "6.0.0"
                    }
                } catch (i) {}
                return "" + new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0]
            } catch (i) {
                try {
                    if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) 
                        return "" + (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0]
                } catch (i) {}
            }
            return "0"
        },
        ANDROID: function (t) {
            try {
                return "" + navigator.userAgent.toLowerCase().match(/android\s+(([\d\.]+))?/)[1]
            } catch (e) {}
            return "0"
        },
        IOS: function (t) {
            var e = navigator.userAgent.toLowerCase(),
            i = e.indexOf("os ");
            return (e.indexOf("iphone") > - 1 || e.indexOf("ipad") > - 1) && i > - 1 ? "" + e.substr(i + 3, 3).replace("_", ".") : "0"
        },
        NATIVE: function (e) {
            try {
                var i = t(e.indexOf("video") > - 1 ? "<video/>" : "<audio/>").get(0);
                if (null != i.canPlayType) {
                    if ("*" === e) 
                        return "1";
                    switch (i.canPlayType(e)) {
                    case "no":
                    case "":
                        return "0";
                    default:
                        return "1"
                    }
                }
            } catch (s) {}
            return "0"
        },
        BROWSER: function (t) {
            return "1"
        }
    }
});
var projekktorPluginInterface = function () {};
jQuery(function ($) {
    projekktorPluginInterface.prototype = {
        pluginReady: !1,
        reqVer: null,
        name: "",
        pp: {},
        config: {},
        playerDom: null,
        _appliedDOMObj: [],
        _pageDOMContainer: {},
        _childDOMContainer: {},
        _init: function (t) {
            return this.config = $.extend(!0, this.config, t), null == this.reqVer || $p.utils.versionCompare(this.pp.getPlayerVer(), this.reqVer) ? (this.initialize(), void 0) : (alert("Plugin '" + this.name + "' requires Projekktor v" + this.reqVer + " or later! Please visit http://www.projekktor.com and get the most recent version."), this.pluginReady = !0, void 0)
        },
        getConfig: function (t, e) {
            var i = null,
            s = e || null;
            return null != this.pp.getConfig("plugin_" + this.name) && (i = this.pp.getConfig("plugin_" + this.name)[t]), null == i && (i = this.pp.getConfig(t)), null == i && (i = this.config[t]), "object" == typeof i && null === i.length ? i = $.extend(!0, {}, i, this.config[t]) : "object" == typeof i && (i = $.extend(!0, [], this.config[t] || [], i || [])), null == i ? s : i
        },
        getDA: function (t) {
            return "data-" + this.pp.getNS() + "-" + this.name + "-" + t
        },
        getCN: function (t) {
            return this.pp.getNS() + t
        },
        sendEvent: function (t, e) {
            this.pp._promote({
                _plugin: this.name,
                _event: t
            }, e)
        },
        deconstruct: function () {
            this.pluginReady = !1, $.each(this._appliedDOMObj, function () {
                $(this).unbind()
            })
        },
        applyToPlayer: function (t, e, i) {
            if (!t) 
                return null;
            var s = e || "container",
            n = "",
            a = this;
            try {
                n = t.attr("class") || this.name
            } catch (r) {
                n = this.name
            }
            return this._pageDOMContainer[s] = $("[" + this.getDA("host") + "='" + this.pp.getId() + "'][" + this.getDA("func") + "='" + s + "']"), this._childDOMContainer[s] = this.playerDom.find("[" + this.getDA("func") + "='" + s + "'],." + this.getCN(n) + ":not([" + this.getDA("func") + "=''])"), this._pageDOMContainer[s].length > 0 ? (this._pageDOMContainer[s].removeClass("active").addClass("inactive"), $.each(this._pageDOMContainer[s], function () {
                a._appliedDOMObj.push($(this))
            }), this._pageDOMContainer[s]) : 0 == this._childDOMContainer[s].length ? (t.removeClass(n).addClass(this.pp.getNS() + n).removeClass("active").addClass("inactive").attr(this.getDA("func"), s).appendTo(this.playerDom), this._childDOMContainer[s] = t, this._appliedDOMObj.push(t), i === !0 && t.addClass("active").removeClass("inactive"), t) : ($.each(this._childDOMContainer[s], function () {
                $(this).attr(a.getDA("func"), s), a._appliedDOMObj.push($(this))
            }), i === !0 && this._childDOMContainer[s].addClass("active").removeClass("inactive"), $(this._childDOMContainer[s][0]))
        },
        getElement: function (t) {
            return this.pp.env.playerDom.find("." + this.pp.getNS() + t)
        },
        setInactive: function () {
            $(this._pageDOMContainer.container).removeClass("active").addClass("inactive"), $(this._childDOMContainer.container).removeClass("active").addClass("inactive"), this.sendEvent("inactive", $.extend(!0, {}, this._pageDOMContainer.container, this._childDOMContainer.container))
        },
        setActive: function (t, e) {
            var i = "object" == typeof t ? t : this.getElement(t);
            return null == t ? (this._pageDOMContainer.container.removeClass("inactive").addClass("active"), this._childDOMContainer.container.removeClass("inactive").addClass("active"), this.sendEvent("active", $.extend(!0, {}, this._pageDOMContainer.container, this._childDOMContainer.container)), i) : (0 != e ? i.addClass("active").removeClass("inactive") : i.addClass("inactive").removeClass("active"), i.css("display", ""), i)
        },
        getActive: function (t) {
            return $(t).hasClass("active")
        },
        initialize: function () {},
        isReady: function () {
            return this.pluginReady
        },
        clickHandler: function (t) {
            try {
                this.pp[this.getConfig(t + "Click").callback](this.getConfig(t + "Click").value)
            } catch (e) {
                try {
                    this.getConfig(t + "Click")(this.getConfig(t + "Click").value)
                } catch (e) {}
            }
            return !1
        },
        cookie: function (key, value, ttl) {
            //if (void 0 === document.cookie || document.cookie === !1) return null;
            //if (null == key && null != value) return null;
            //if (0 == this.pp.getConfig("cookieExpiry")) return null;
            //var t = new Date,
            //    result = null,
            //    cookieString = "",
            //    tmp = storedData = jQuery.parseJSON(eval(result = RegExp("(?:^|; )" + encodeURIComponent(this.getConfig("cookieName") + "_" + this.name) + "=([^;]*)").exec(document.cookie)) ? decodeURIComponent(result[1]) : null);
            //return ("object" != typeof storedData || null == storedData) && (storedData = {}, null != key && (storedData[key] = tmp)), null == key ? storedData : 1 == arguments.length ? storedData[key] : (null != value ? storedData[key] = value : delete storedData[key], $.isEmptyObject(storedData) ? (ttl = 0, storedData = "") : storedData = $p.utils.stringify(storedData), t.setDate(t.getDate() + (ttl || this.getConfig("cookieExpiry", 0))), cookieString = encodeURIComponent(this.getConfig("cookieName", "projekktor") + "_" + this.name) + "=" + encodeURIComponent(storedData) + "; expires=" + (0 == ttl ? "Thu, 01 Jan 1970 00:00:01 GMT" : t.toUTCString()), this.getConfig("cookieDomain", !1) && (cookieString += "; domain=" + options.domain), document.cookie = cookieString, value)
        },
        eventHandler: function () {}
    }
});
var playerModel = function () {};
jQuery(function (t) {
    playerModel.prototype = {
        modelId: "player",
        iLove: [],
        _currentState: null,
        _currentBufferState: null,
        _currentSeekState: null,
        _ap: !1,
        _volume: 0,
        _quality: "default",
        _displayReady: !1,
        _isPlaying: !1,
        _id: null,
        _KbPerSec: 0,
        _bandWidthTimer: null,
        _isPoster: !1,
        _isFullscreen: !1,
        hasGUI: !1,
        allowRandomSeek: !1,
        flashVerifyMethod: "api_get",
        mediaElement: null,
        pp: {},
        media: {
            duration: 0,
            position: 0,
            maxpos: 0,
            offset: 0,
            file: !1,
            poster: "",
            ended: !1,
            loadProgress: 0,
            errorCode: 0
        },
        _init: function (e) {
            this.pp = e.pp || null, this.media = t.extend(!0, {}, this.media, e.media), this._ap = e.autoplay, this._isFullscreen = e.fullscreen, this._id = $p.utils.randomId(8), this._quality = e.quality || this._quality, this._volume = this.pp.getVolume(), this._playbackQuality = this.pp.getPlaybackQuality(), this.init()
        },
        init: function (t) {
            this.ready()
        },
        ready: function () {
            this.sendUpdate("modelReady"), this._ap ? (this.sendUpdate("autostart", !0), this._setState("awakening")) : this.displayItem(!1)
        },
        displayItem: function (e) {
            return this._displayReady = !1, this._isPoster = !1, this.pp.removeListener("fullscreen.poster"), this.pp.removeListener("resize.poster"), e !== !0 || this.getState("STOPPED") ? (this._setState("idle"), this.applyImage(this.getPoster(), this.pp.getMediaContainer().html("")), this._isPoster = !0, this.displayReady(), void 0) : (t("#" + this.pp.getMediaId() + "_image").remove(), t("#" + this.pp.getId() + "_testcard_media").remove(), this.applyMedia(this.pp.getMediaContainer()), void 0)
        },
        applyMedia: function () {},
        sendUpdate: function (t, e) {
            "ERROR" != this._currentState && ("error" == t && this._setState("error"), this.pp._modelUpdateListener(t, e))
        },
        displayReady: function () {
            this._displayReady = !0, this.pp._modelUpdateListener("displayReady")
        },
        start: function () {
            var t = this;
            (null != this.mediaElement || "PLAYLIST" == this.modelId) && (this.getState("STARTING") || (this._setState("STARTING"), this.getState("STOPPED") || this.addListeners(), this.pp.getIsMobileClient("ANDROID") && !this.getState("PLAYING") && setTimeout(function () {
                t.setPlay()
            }, 500), this.setPlay()))
        },
        addListeners: function () {},
        removeListeners: function () {
            try {
                this.mediaElement.unbind(".projekktor" + this.pp.getId())
            } catch (t) {}
        },
        detachMedia: function () {},
        destroy: function (e) {
            this.removeListeners(), this.getState("IDLE") || this._setState("destroying"), this.detachMedia();
            try {
                t("#" + this.mediaElement.id).empty()
            } catch (i) {}
            if (!this.pp.getIsMobileClient()) {
                try {
                    t("#" + this.mediaElement.id).remove()
                } catch (i) {}
                try {
                    this.mediaElement.remove()
                } catch (i) {}
                this.pp.getMediaContainer().html("")
            }
            this.mediaElement = null, this.media.loadProgress = 0, this.media.playProgress = 0, this.media.frame = 0, this.media.position = 0, this.media.duration = 0
        },
        reInit: function () {
            this.flashVersion === !1 && this._isFF() && !this.getState("ERROR") && this.pp.getConfig("bypassFlashFFFix") !== !0 && (this.sendUpdate("FFreinit"), this.removeListeners(), this.displayItem(!this.getState("IDLE")))
        },
        applyCommand: function (t, e) {
            switch (t) {
            case "quality":
                this.setQuality(e);
                break;
            case "error":
                this._setState("error"), this.setTestcard(e);
                break;
            case "play":
                if (this.getState("ERROR")) 
                    break;
                if (this.getState("IDLE")) {
                    this._setState("awakening");
                    break
                }
                this.setPlay();
                break;
            case "pause":
                if (this.getState("ERROR")) 
                    break;
                this.setPause();
                break;
            case "volume":
                if (this.getState("ERROR")) 
                    break;
                this.setVolume(e) || (this._volume = e, this.sendUpdate("volume", e));
                break;
            case "stop":
                this.setStop();
                break;
            case "frame":
                this.setFrame(e);
                break;
            case "seek":
                if (this.getState("ERROR")) 
                    break;
                if (this.getSeekState("SEEKING")) 
                    break;
                if (this.getState("IDLE")) 
                    break;
                if ( - 1 == this.media.loadProgress) 
                    break;
                this._setSeekState("seeking", e), this.setSeek(e);
                break;
            case "fullscreen":
                if (e == this._isFullscreen) 
                    break;
                this._isFullscreen = e, this.sendUpdate("fullscreen", this._isFullscreen), this.reInit(), this.setFullscreen();
                break;
            case "resize":
                this.setResize(), this.sendUpdate("resize", e)
            }
        },
        setFrame: function (t) {
            var e = t / this.pp.getConfig("fps") + 1e-5;
            this.setSeek(e)
        },
        setSeek: function (t) {},
        setPlay: function () {},
        setPause: function () {},
        setStop: function () {
            this.detachMedia(), this._setState("stopped"), this.displayItem(!1)
        },
        setVolume: function (t) {},
        setFullscreen: function (t) {
            this.setResize()
        },
        setResize: function () {
            var t = this.pp.getMediaContainer();
            this.sendUpdate("scaled", {
                realWidth: this.media.videoWidth || null,
                realHeight: this.media.videoHeight || null,
                displayWidth: t.width(),
                displayHeight: t.height()
            })
        },
        setPosterLive: function () {},
        setQuality: function (t) {
            if (this._quality != t) {
                this._quality = t;
                try {
                    this.applySrc()
                } catch (e) {}
                this.qualityChangeListener()
            }
        },
        getQuality: function () {
            return this._quality
        },
        getVolume: function () {
            return null == this.mediaElement ? this._volume : this.mediaElement.prop("muted") === !0 ? 0 : this.mediaElement.prop("volume")
        },
        getLoadProgress: function () {
            return this.media.loadProgress || 0
        },
        getLoadPlaybackProgress: function () {
            return this.media.playProgress || 0
        },
        getPosition: function () {
            return this.media.position || 0
        },
        getFrame: function () {
            return this.media.frame || 0
        },
        getDuration: function () {
            return this.media.duration || 0
        },
        getMaxPosition: function () {
            return this.media.maxpos || 0
        },
        getPlaybackQuality: function () {
            return t.inArray(this._quality, this.media.qualities) > - 1 ? this._quality : "default"
        },
        getInFullscreen: function () {
            return this.pp.getInFullscreen()
        },
        getKbPerSec: function () {
            return this._KbPerSec
        },
        getState: function (t) {
            var e = null == this._currentState ? "IDLE" : this._currentState;
            return null != t ? e == t.toUpperCase() : e
        },
        getBufferState: function (t) {
            var e = null == this._currentBufferState ? "NONE" : this._currentBufferState;
            return null != t ? e == t.toUpperCase() : e
        },
        getSeekState: function (t) {
            var e = null == this._currentSeekState ? "NONE" : this._currentSeekState;
            return null != t ? e == t.toUpperCase() : e
        },
        getSrc: function () {
            try {
                return this.mediaElement.get(0).currentSrc
            } catch (t) {}
            try {
                return this.media.file[0].src
            } catch (t) {}
            try {
                return this.getPoster()
            } catch (t) {}
            return null
        },
        getModelName: function () {
            return this.modelId || null
        },
        getHasGUI: function () {
            return this.hasGUI && !this._isPoster
        },
        getIsReady: function () {
            return this._displayReady
        },
        getPoster: function () {
            var t = "poster",
            e = null,
            i = this.pp.getConfig(t),
            s = "default",
            n = [];
            if ("object" != typeof i) 
                return i;
            for (var a in i) 
                i[a].quality && n.push(i[a].quality);
            s = this.pp.getAppropriateQuality(n);
            for (var r in i)(i[r].quality == s || "" == e || "default" == s) 
                && (e = i[r].src);
            return e
        },
        getMediaElement: function () {
            return this.mediaElement || t("<video/>")
        },
        getMediaDimensions: function () {
            return {
                width: this.media.videoWidth || 0,
                height: this.media.videoHeight || 0
            }
        },
        getSource: function () {
            var e = [],
            i = this.media.offset || this.media.position || !1,
            s = this,
            n = "pseudo" == this.pp.getConfig("streamType") ? this.pp.getConfig("startParameter") : !1;
            return t.each(this.media.file || [], function () {
                if (s._quality != this.quality && null !== s._quality) 
                    return !0;
                if (!n || !i) 
                    return e.push(this), !0;
                var a = $p.utils.parseUri(this.src),
                r = a.protocol + "://" + a.host + a.path,
                o = [];
                return t.each(a.queryKey, function (t, e) {
                    t != n && o.push(t + "=" + e)
                }), r += o.length > 0 ? "?" + o.join("&") + "&" + n + "=" + i : "?" + n + "=" + i, this.src = r, e.push(this), !0
            }), 0 === e.length ? this.media.file : e
        },
        timeListener: function (t) {
            if (null != t) {
                var e = parseFloat((t.position || t.currentTime || this.media.position || 0).toFixed(2)),
                i = parseFloat((t.duration || 0).toFixed(2));
                isNaN(i + e) || ((0 != i && i != this.media.duration && !this.isPseudoStream || this.isPseudoStream && 0 == this.media.duration) && (this.media.duration = i, this.sendUpdate("durationChange", i)), e != this.media.position && (this.media.position = this.isPseudoStream && Math.round(100 * e) / 100 == Math.round(100 * this.media.offset) / 100 ? this.media.offset : this.media.offset + e, this.media.maxpos = Math.max(this.media.maxpos || 0, this.media.position || 0), this.media.playProgress = parseFloat(this.media.position > 0 && this.media.duration > 0 ? 100 * this.media.position / this.media.duration : 0), this.media.frame = this.media.position * this.pp.getConfig("fps"), this.sendUpdate("time", this.media.position), this.loadProgressUpdate()))
            }
        },
        loadProgressUpdate: function () {
            var t = this.mediaElement.get(0),
            e = 0;
            0 !== this.media.duration && "object" == typeof t.buffered && (0 !== t.buffered.length || 0 !== t.seekable.length) && 100 != this.media.loadProgress && (e = t.seekable && t.seekable.length > 0 ? Math.round(100 * t.seekable.end(0) / this.media.duration) : Math.round(100 * t.buffered.end(t.buffered.length - 1)) / this.media.duration, this.media.loadProgress > e || (this.media.loadProgress = this.allowRandomSeek === !0 ? 100 : - 1, this.media.loadProgress = 100 > this.media.loadProgress || void 0 === this.media.loadProgress ? e : 100, this.sendUpdate("progress", this.media.loadProgress)))
        },
        progressListener: function (t, e) {
            if (this.mediaElement instanceof jQuery && "object" == typeof this.mediaElement.get(0).buffered && this.mediaElement.get(0).buffered.length > 0) 
                return this.mediaElement.unbind("progress"), void 0;
            null == this._bandWidthTimer && (this._bandWidthTimer = (new Date).getTime());
            var i = 0,
            s = 0;
            try {
                isNaN(e.loaded / e.total) ? e.originalEvent && !isNaN(e.originalEvent.loaded / e.originalEvent.total) && (i = e.originalEvent.loaded, s = e.originalEvent.total) : (i = e.loaded, s = e.total)
            } catch (n) {
                t && !isNaN(t.loaded / t.total) && (i = t.loaded, s = t.total)
            }
            var a = i > 0 && s > 0 ? 100 * i / s : 0;
            Math.round(a) > Math.round(this.media.loadProgress) && (this._KbPerSec = i / 1024 / (((new Date).getTime() - this._bandWidthTimer) / 1e3)), a = 100 !== this.media.loadProgress ? a : 100, a = this.allowRandomSeek === !0 ? 100 : 5 * Math.round(a / 5), this.media.loadProgress != a && (this.media.loadProgress = a, this.sendUpdate("progress", a)), this.media.loadProgress >= 100 && this.allowRandomSeek === !1 && this._setBufferState("full")
        },
        qualityChangeListener: function () {
            this.sendUpdate("qualityChange", this._quality)
        },
        endedListener: function (t) {
            null !== this.mediaElement && (0 >= this.media.maxpos || "STARTING" != this.getState() && this._setState("completed"))
        },
        waitingListener: function (t) {
            this._setBufferState("empty")
        },
        canplayListener: function (t) {
            this._setBufferState("full")
        },
        canplaythroughListener: function (t) {
            this._setBufferState("full")
        },
        suspendListener: function (t) {
            this._setBufferState("full")
        },
        playingListener: function (t) {
            this._setState("playing")
        },
        startListener: function (t) {
            this.applyCommand("volume", this.pp.getConfig("volume")), this.isPseudoStream || this.setSeek(this.media.position || 0), this._setState("playing")
        },
        pauseListener: function (t) {
            this._setState("paused")
        },
        seekedListener: function (t) {
            this._setSeekState("SEEKED", this.media.position)
        },
        volumeListener: function (t) {
            this.sendUpdate("volume", this.getVolume())
        },
        flashReadyListener: function () {
            this._displayReady = !0
        },
        errorListener: function (t, e) {},
        metaDataListener: function (t) {
            try {
                this.media.videoWidth = t.videoWidth, this.media.videoHeight = t.videoHeight
            } catch (e) {}
            this._scaleVideo()
        },
        setTestcard: function (e, i) {
            var s = this.pp.getMediaContainer().html("").css({
                width: "100%",
                height: "100%"
            }),
            n = t.extend(this.pp.getConfig("messages"), this.pp.getConfig("msg")),
            a = null == n[e] ? 0 : e,
            r = void 0 !== i && "" !== i ? i : n[a];
            this.removeListeners(), this.detachMedia(), this.pp.getItemCount() > 1 && (r += " " + n[99]), 3 > r.length && (r = "ERROR"), 100 == a && (r = i), r = $p.utils.parseTemplate(r, t.extend({}, this.media, {
                title: this.pp.getConfig("title")
            })), this.mediaElement = t("<div/>").addClass(this.pp.getNS() + "testcard").attr("id", this.pp.getId() + "_testcard_media").html("<p>" + r + "</p>").appendTo(s), null != this.pp.getConfig("msg")[a] && this.mediaElement.addClass(this.pp.getNS() + "customtestcard")
        },
        applySrc: function () {},
        applyImage: function (e, i) {
            var s = t("<img/>").hide(),
            n = this;
            if ($p.utils.blockSelection(s), null == e || e === !1) 
                return t("<span/>").attr({
                    id: this.pp.getMediaId() + "_image"
                }).appendTo(i);
            s.html("").appendTo(i).attr({
                id: this.pp.getMediaId() + "_image",
                alt: this.pp.getConfig("title") || ""
            }).css({
                position: "absolute"
            }), s.error(function (e) {
                t(this).remove()
            }), s.load(function (t) {
                var e = t.currentTarget;
                s.data("od") || s.data("od", {
                    width: e.naturalWidth,
                    height: e.naturalHeight
                }), s.show(), $p.utils.stretch(n.pp.getConfig("imageScaling"), s, i.width(), i.height())
            }), s.attr("src", e);
            var a = function (t, e) {
                e.is(":visible") === !1 && n.pp.removeListener("fullscreen", arguments.callee);
                var i = e.width(),
                s = e.height(),
                a = t.width(),
                r = t.height();
                if ($p.utils.stretch(n.pp.getConfig("imageScaling"), t, e.width(), e.height())) 
                    try {
                        n.sendUpdate("scaled", {
                            realWidth: t._originalDimensions.width,
                            realHeight: t._originalDimensions.height,
                            displayWidth: n.mediaElement.width(),
                            displayHeight: n.mediaElement.height()
                        })
                } catch (o) {}
                t.attr("src") != n.getPoster() && t.attr("src", n.getPoster())
            };
            return this.pp.addListener("fullscreen.poster", function () {
                a(s, i)
            }), this.pp.addListener("resize.poster", function () {
                a(s, i)
            }), s
        },
        createFlash: function (t, e, i) {
            this.mediaElement = $p.utils.embeddFlash(e.html(""), t, i, !0), this._waitforPlayer()
        },
        _waitforPlayer: function () {
            var e = this,
            i = 0;
            this._displayReady !== !0 && (this._setBufferState("empty"), function () {
                if (i > 6 && e._isFF()) {
                    i = 0;
                    var s = t(e.mediaElement).parent(),
                    n = t(e.mediaElement).clone();
                    s.html("").append(n), e.mediaElement = n
                }
                s = e.mediaElement;
                try {
                    if (t(s).attr("id").indexOf("testcard") > - 1) 
                        return
                } catch (a) {
                    console.log(a)
                }
                i++;
                try {
                    void 0 === s ? setTimeout(arguments.callee, 200) : void 0 === s.get(0)[e.flashVerifyMethod] ? setTimeout(arguments.callee, 200) : (e._setBufferState("full"), e.flashReadyListener(), t("#" + t(e.mediaElement).attr("id") + "_cc").css({
                        width: "100%",
                        height: "100%"
                    }))
                } catch (a) {
                    setTimeout(arguments.callee, 200)
                }
            }())
        },
        _setState: function (t) {
            var e = this;
            t = t.toUpperCase(), this._currentState != t && "ERROR" != this._currentState && ("PAUSED" == this._currentState && "PLAYING" == t && (this.sendUpdate("resume", this.media), this._isPlaying = !0), "IDLE" != this._currentState && "STARTING" != this._currentState || "PLAYING" != t || (this.sendUpdate("start", this.media), this._isPlaying = !0), "PAUSED" == t && (this._isPlaying = !1), "ERROR" == t && (this.setPlay = this.setPause = function () {
                e.sendUpdate("start")
            }), this._currentState = t.toUpperCase(), this.sendUpdate("state", this._currentState))
        },
        _setBufferState: function (t) {
            this._currentBufferState != t.toUpperCase() && (this._currentBufferState = t.toUpperCase(), this.sendUpdate("buffer", this._currentBufferState))
        },
        _setSeekState: function (t, e) {
            this._currentSeekState != t.toUpperCase() && (this._currentSeekState = t.toUpperCase(), this.sendUpdate("seek", this._currentSeekState))
        },
        _scaleVideo: function (t) {
            var e = this.pp.getMediaContainer();
            if (!this.pp.getIsMobileClient()) 
                try {
                    var i = e.width(),
                    s = e.height(),
                    n = this.media.videoWidth,
                    a = this.media.videoHeight;
                    $p.utils.stretch(this.pp.getConfig("videoScaling"), this.mediaElement, i, s, n, a) && this.sendUpdate("scaled", {
                        realWidth: n,
                        realHeight: a,
                        displayWidth: i,
                        displayHeight: s
                    })
            } catch (r) {}
        },
        _isFF: function () {
            return navigator.userAgent.toLowerCase().indexOf("firefox") > - 1
        }
    }
}), jQuery(function (t) {
    $p.newModel({
        modelId: "NA",
        iLove: [{
            ext: "NaN",
            type: "none/none",
            platform: "browser"
        }
        ],
        hasGUI: !0,
        applyMedia: function (t) {
            var e = this;
            t.html("");
            var i = function (t, i) {
                i.getState("AWAKENING") || (e.pp.removeListener("mousedown", arguments.callee), e._setState("completed"))
            };
            this.displayReady(), this.pp.getConfig("enableTestcard") && !this.pp.getIsMobileClient() ? (this.pp.addListener("mousedown", i), this._setState("error"), this.setTestcard(null != this.media.file[0].src && 7 === this.media.errorCode ? 5 : this.media.errorCode)) : (this.applyCommand("stop"), window.location.href = this.media.file[0].src)
        },
        detachMedia: function () {
            this.pp.removeListener("leftclick", this.mouseClick)
        }
    })
}), jQuery(function (t) {
    $p.newModel({
        modelId: "VIDEO",
        androidVersion: "2",
        iosVersion: "3",
        nativeVersion: "1",
        iLove: [{
            ext: "mp4",
            type: "video/mp4",
            platform: ["ios", "android", "native"],
            streamType: ["http", "pseudo", "httpVideo"],
            fixed: "maybe"
        }, {
            ext: "m4v",
            type: "video/mp4",
            platform: ["ios", "android", "native"],
            streamType: ["http", "pseudo", "httpVideo"],
            fixed: "maybe"
        }, {
            ext: "ogv",
            type: "video/ogg",
            platform: "native",
            streamType: ["http", "httpVideo"]
        }, {
            ext: "webm",
            type: "video/webm",
            platform: "native",
            streamType: ["http", "httpVideo"]
        }, {
            ext: "ogg",
            type: "video/ogg",
            platform: "native",
            streamType: ["http", "httpVideo"]
        }, {
            ext: "anx",
            type: "video/ogg",
            platform: "native",
            streamType: ["http", "httpVideo"]
        }
        ],
        _eventMap: {
            pause: "pauseListener",
            play: "playingListener",
            volumechange: "volumeListener",
            progress: "progressListener",
            timeupdate: "timeListener",
            ended: "_ended",
            waiting: "waitingListener",
            canplaythrough: "canplayListener",
            canplay: "canplayListener",
            error: "errorListener",
            suspend: "suspendListener",
            seeked: "seekedListener",
            loadedmetadata: "metaDataListener",
            loadstart: null
        },
        isGingerbread: !1,
        isAndroid: !1,
        allowRandomSeek: !1,
        videoWidth: 0,
        videoHeight: 0,
        wasPersistent: !0,
        isPseudoStream: !1,
        init: function () {
            var t = navigator.userAgent;
            t.indexOf("Android") >= 0 && (this.isAndroid = !0, 3 > parseFloat(t.slice(t.indexOf("Android") + 8)) && (this.isGingerbread = !0)), this.ready()
        },
        applyMedia: function (e) {
            0 === t("#" + this.pp.getMediaId() + "_html").length && (this.wasPersistent = !1, e.html("").append(t("<video/>").attr({
                id: this.pp.getMediaId() + "_html",
                poster: $p.utils.imageDummy(),
                loop: !1,
                autoplay: !1,
                preload: "none",
                "x-webkit-airplay": "allow"
            }).prop({
                controls: !1,
                volume: this.getVolume()
            }).css({
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0
            }))), this.mediaElement = t("#" + this.pp.getMediaId() + "_html"), this.applySrc()
        },
        applySrc: function () {
            var e = this,
            i = this.getSource(),
            s = e.getState("AWAKENING");
            this.mediaElement.attr("src", i[0].src), this.isGingerbread || this.mediaElement.attr("type", i[0].originalType), this.mediaElement.bind("mousedown.projekktorqs" + this.pp.getId(), this.disableDefaultVideoElementActions), this.mediaElement.bind("click.projekktorqs" + this.pp.getId(), this.disableDefaultVideoElementActions);
            var n = function () {
                return e.mediaElement.unbind("loadstart.projekktorqs" + e.pp.getId()), e.mediaElement.unbind("loadeddata.projekktorqs" + e.pp.getId()), e.mediaElement.unbind("canplay.projekktorqs" + e.pp.getId()), e.addListeners("error"), e.addListeners("play"), e.addListeners("canplay"), e.mediaElement = t("#" + e.pp.getMediaId() + "_html"), s ? (e.displayReady(), void 0) : e.getSeekState("SEEKING") ? (e._isPlaying && e.setPlay(), e.seekedListener(), void 0) : (e.isPseudoStream || e.setSeek(e.media.position || 0), e._isPlaying && e.setPlay(), void 0)
            };
            this.mediaElement.bind("loadstart.projekktorqs" + this.pp.getId(), n), this.mediaElement.bind("loadeddata.projekktorqs" + this.pp.getId(), n), this.mediaElement.bind("canplay.projekktorqs" + this.pp.getId(), n), this.mediaElement[0].load(), this.isGingerbread && n()
        },
        detachMedia: function () {
            try {
                this.removeListener("error"), this.removeListener("play"), this.removeListener("canplay"), this.mediaElement.unbind("mousedown.projekktorqs" + this.pp.getId()), this.mediaElement.unbind("click.projekktorqs" + this.pp.getId()), this.mediaElement[0].pause(), this.mediaElement.attr("src", ""), this.mediaElement[0].load()
            } catch (t) {}
        },
        addListeners: function (e, i) {
            if (null != this.mediaElement) {
                var s = null != i ? ".projekktor" + i + this.pp.getId() : ".projekktor" + this.pp.getId(),
                n = this,
                a = null == e ? "*" : e;
                t.each(this._eventMap, function (t, e) {
                    t != a && "*" != a || null == e || n.mediaElement.bind(t + s, function (t) {
                        n[e](this, t)
                    })
                })
            }
        },
        removeListener: function (e, i) {
            if (null != this.mediaElement) {
                var s = null != i ? ".projekktor" + i + this.pp.getId() : ".projekktor" + this.pp.getId(),
                n = this;
                t.each(this._eventMap, function (t, i) {
                    t == e && n.mediaElement.unbind(t + s)
                })
            }
        },
        _ended: function () {
            var t = this.mediaElement[0].duration,
            e = Math.round(this.media.position) === Math.round(t),
            i = 2 > t - this.media.maxpos && 0 === this.media.position || !1;
            e || i || this.isPseudoStream ? this.endedListener(this) : this.pauseListener(this)
        },
        playingListener: function (t) {
            var e = this;
            this.isGingerbread || function () {
                try {
                    if (0 === e.getDuration()) 
                        return "" !== e.mediaElement.get(0).currentSrc && e.mediaElement.get(0).networkState == e.mediaElement.get(0).NETWORK_NO_SOURCE ? (e.sendUpdate("error", 80), void 0) : (setTimeout(arguments.callee, 500), void 0)
                } catch (t) {}
            }(), this._setState("playing")
        },
        errorListener: function (t, e) {
            try {
                switch (e.target.error.code) {
                case e.target.error.MEDIA_ERR_ABORTED:
                    this.sendUpdate("error", 1);
                    break;
                case e.target.error.MEDIA_ERR_NETWORK:
                    this.sendUpdate("error", 2);
                    break;
                case e.target.error.MEDIA_ERR_DECODE:
                    this.sendUpdate("error", 3);
                    break;
                case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    this.sendUpdate("error", 4);
                    break;
                default:
                    this.sendUpdate("error", 5)
                }
            } catch (i) {}
        },
        canplayListener: function (e) {
            var i = this;
            "pseudo" == this.pp.getConfig("streamType") && t.each(this.media.file, function () {
                return this.src.indexOf(i.mediaElement[0].currentSrc) > - 1 && "video/mp4" == this.type ? (i.isPseudoStream = !0, i.allowRandomSeek = !0, i.media.loadProgress = 100, !1) : !0
            }), this._setBufferState("full")
        },
        disableDefaultVideoElementActions: function (t) {
            t.preventDefault(), t.stopPropagation()
        },
        setPlay: function () {
            try {
                this.mediaElement[0].play()
            } catch (t) {}
        },
        setPause: function () {
            try {
                this.mediaElement[0].pause()
            } catch (t) {}
        },
        setVolume: function (t) {
            this._volume = t;
            try {
                this.mediaElement.prop("volume", t)
            } catch (e) {
                return !1
            }
            this.displayVolume(t);
            return t
        },
        setSeek: function (t) {
            var e = this;
            return this.isPseudoStream ? (this.media.position = 0, this.media.offset = t, this.applySrc(), void 0) : (function () {
                try {
                    e.mediaElement[0].currentTime = t, e.timeListener({
                        position: t
                    })
                } catch (i) {
                    null != e.mediaElement && setTimeout(arguments.callee, 100)
                }
            }(), void 0)
        },
        setFullscreen: function (t) {
            "audio" != this.element && this._scaleVideo()
        },
        setResize: function () {
            "audio" != this.element && this._scaleVideo(!1)
        }
    }), $p.newModel({
        modelId: "AUDIO",
        iLove: [{
            ext: "ogg",
            type: "audio/ogg",
            platform: "native",
            streamType: ["http", "httpAudio"]
        }, {
            ext: "oga",
            type: "audio/ogg",
            platform: "native",
            streamType: ["http", "httpAudio"]
        }, {
            ext: "mp3",
            type: "audio/mp3",
            platform: ["ios", "android", "native"],
            streamType: ["http", "httpAudio"]
        }, {
            ext: "mp3",
            type: "audio/mpeg",
            platform: ["ios", "android", "native"],
            streamType: ["http", "httpAudio"]
        }
        ],
        imageElement: {},
        applyMedia: function (e) {
            $p.utils.blockSelection(e), this.imageElement = this.applyImage(this.getPoster("cover") || this.getPoster("poster"), e), this.imageElement.css({
                border: "0px"
            }), 0 === t("#" + this.pp.getMediaId() + "_html").length && (this.wasPersistent = !1, e.html("").append(t(this.isGingerbread ? "<video/>" : "<audio/>").attr({
                id: this.pp.getMediaId() + "_html",
                poster: $p.utils.imageDummy(),
                loop: !1,
                autoplay: !1,
                preload: "none",
                "x-webkit-airplay": "allow"
            }).prop({
                controls: !1,
                volume: this.getVolume()
            }).css({
                width: "1px",
                height: "1px",
                position: "absolute",
                top: 0,
                left: 0
            }))), this.mediaElement = t("#" + this.pp.getMediaId() + "_html"), this.applySrc()
        },
        setPosterLive: function () {
            if (this.imageElement.parent) {
                var e = this.imageElement.parent(),
                i = this;
                if (this.imageElement.attr("src") == this.getPoster("cover") || this.getPoster("poster")) 
                    return;
                this.imageElement.fadeOut("fast", function () {
                    t(this).remove(), i.imageElement = i.applyImage(i.getPoster("cover") || i.getPoster("poster"), e)
                })
            }
        }
    }, "VIDEO")
}), jQuery(function (t) {
    $p.newModel({
        modelId: "VIDEOHLS",
        androidVersion: 4,
        iosVersion: 3,
        iLove: [{
            ext: "m3u8",
            type: "application/mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpVideo", "httpVideoLive"]
        }, {
            ext: "m3u",
            type: "application/mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpVideo", "httpVideoLive"]
        }, {
            ext: "m3u8",
            type: "application/vnd.apple.mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpVideo", "httpVideoLive"]
        }, {
            ext: "m3u",
            type: "application/vnd.apple.mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpVideo", "httpVideoLive"]
        }, {
            ext: "m3u8",
            type: "application/x-mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpVideo", "httpVideoLive"]
        }, {
            ext: "m3u",
            type: "application/x-mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpVideo", "httpVideoLive"]
        }
        ]
    }, "VIDEO"), $p.newModel({
        modelId: "AUDIOHLS",
        androidVersion: 4,
        iosVersion: 3,
        iLove: [{
            ext: "m3u8",
            type: "application/mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }, {
            ext: "m3u",
            type: "application/mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }, {
            ext: "m3u8",
            type: "application/vnd.apple.mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }, {
            ext: "m3u",
            type: "application/vnd.apple.mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }, {
            ext: "m3u8",
            type: "application/x-mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }, {
            ext: "m3u",
            type: "application/x-mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }, {
            ext: "m3u8",
            type: "audio/mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }, {
            ext: "m3u",
            type: "audio/mpegURL",
            platform: ["ios", "android"],
            streamType: ["http", "httpAudio", "httpAudioLive"]
        }
        ]
    }, "AUDIO")
}), jQuery(function (t) {
    $p.newModel({
        modelId: "VIDEOVLC",
        vlcVersion: "2.0.6.0",
        iLove: [],
        _eventMap: {
            MediaPlayerPaused: "pauseListener",
            MediaPlayerPlaying: "playingListener",
            MediaPlayerTimeChanged: "_timeListener",
            MediaPlayerEndReached: "endedListener",
            MediaPlayerBuffering: "waitingListener",
            MediaPlayerEncounteredError: "errorListener",
            MediaPlayerSeekableChanged: "seekableListener"
        },
        allowRandomSeek: !1,
        videoWidth: 0,
        videoHeight: 0,
        isPseudoStream: !1,
        setiLove: function () {
            var e = this;
            if (navigator.plugins && navigator.plugins.length > 0)
                for (var i = 0; navigator.plugins.length > i; ++i)
                    if (navigator.plugins[i].name.indexOf("VLC") > - 1) {
                        for (var s = 0; navigator.plugins[i].length > s; s++) {
                            var n = navigator.plugins[i][s];
                            null != n.suffixes && null != n.type && t.each(n.suffixes.split(","), function (t, i) {
                                e.iLove.push({
                                    ext: i,
                                    type: n.type.replace(/x-/, ""),
                                    platform: ["vlc"],
                                    streamType: ["rtsp", "http", "pseudo", "httpVideo", "multipart"]
                                })
                            })
                        }
                        break
                    }
                },
        applyMedia: function (e) {
            e.html("").append(t("<embed/>").attr({
                id: this.pp.getMediaId() + "_vlc",
                type: "application/x-vlc-plugin",
                pluginspage: "http://www.videolan.org",
                width: "100%",
                height: "100%",
                events: !0,
                controls: !1,
                toolbar: !1,
                windowless: !0,
                allowfullscreen: !0,
                autoplay: !1
            }).css({
                position: "absolute",
                top: 0,
                left: 0
            })), this.mediaElement = t("#" + this.pp.getMediaId() + "_vlc"), this.applySrc()
        },
        applySrc: function () {
            var t = this,
            e = this.getSource();
            this.mediaElement.get(0).playlist.add(e[0].src, "item 1"), this.getState("PLAYING") ? (this.setPlay(), t.isPseudoStream !== !0 && this.setSeek(this.media.position || 0)) : this.displayReady()
        },
        detachMedia: function () {
            try {
                this.mediaElement.get(0).playlist.stop(), this.mediaElement.html("")
            } catch (t) {}
        },
        addListeners: function () {
            var e = this;
            t.each(this._eventMap, function (t, i) {
                try {
                    e.mediaElement.get(0).attachEvent ? e.mediaElement.get(0).attachEvent(t, function (t) {
                        e[i](this, t)
                    }) : e.mediaElement.get(0).addEventListener ? e.mediaElement.get(0).addEventListener(t, function (t) {
                        e[i](this, t)
                    }, !1) : e.mediaElement.get(0)["on" + t] = function (t) {
                        e[i](this, t)
                    }
                } catch (s) {}
            })
        },
        removeListener: function (e, i) {
            if (null != this.mediaElement) {
                var s = null != i ? ".projekktor" + i + this.pp.getId() : ".projekktor" + this.pp.getId(),
                n = this;
                t.each(this._eventMap, function (t, i) {
                    t == e && n.mediaElement.unbind(t + s)
                })
            }
        },
        _timeListener: function (t) {
            this.timeListener({
                position: this.mediaElement.get(0).input.time / 1e3,
                duration: this.mediaElement.get(0).input.length / 1e3
            })
        },
        seekableListener: function () {
            this.allowRandomSeek = !0, this.media.loadProgress = 100
        },
        errorListener: function (t, e) {
            try {
                switch (event.target.error.code) {
                case event.target.error.MEDIA_ERR_ABORTED:
                    this.sendUpdate("error", 1);
                    break;
                case event.target.error.MEDIA_ERR_NETWORK:
                    this.sendUpdate("error", 2);
                    break;
                case event.target.error.MEDIA_ERR_DECODE:
                    this.sendUpdate("error", 3);
                    break;
                case event.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    this.sendUpdate("error", 4);
                    break;
                default:
                    this.sendUpdate("error", 5)
                }
            } catch (i) {}
        },
        setPlay: function () {
            this.mediaElement.get(0).playlist.play()
        },
        setPause: function () {
            this.mediaElement.get(0).playlist.pause()
        },
        setVolume: function (t) {
            this._volume = t, this.mediaElement.get(0).audio.volume = 100 * t, this.volumeListener(t)
        },
        setSeek: function (t) {
            this.mediaElement.get(0).input.position = t / this.media.duration, this._setSeekState("seeked", t)
        },
        setFullscreen: function () {
            pos = this.mediaElement.get(0).input.position, this.mediaElement.get(0).playlist.stop(), this.setPlay(), this.mediaElement.get(0).input.position = pos, this.getState("PAUSED") && this.setPause()
        },
        setResize: function () {
            this._scaleVideo(!1)
        }
    })
}), jQuery(function (t) {
    $p.newModel({
        modelId: "PLAYLIST",
        iLove: [{
            ext: "json",
            type: "text/json",
            platform: "browser"
        }, {
            ext: "jsonp",
            type: "text/jsonp",
            platform: "browser"
        }, {
            ext: "xml",
            type: "text/xml",
            platform: "browser"
        }, {
            ext: "json",
            type: "application/json",
            platform: "browser"
        }, {
            ext: "jsonp",
            type: "application/jsonp",
            platform: "browser"
        }, {
            ext: "xml",
            type: "application/xml",
            platform: "browser"
        }
        ],
        applyMedia: function (t) {
            this.displayReady()
        },
        setPlay: function () {
            this.sendUpdate("playlist", this.media)
        }
    })
}), jQuery(function (t) {
    $p.newModel({
        browserVersion: "1",
        modelId: "IMAGE",
        iLove: [{
            ext: "jpg",
            type: "image/jpeg",
            platform: "browser",
            streamType: ["http"]
        }, {
            ext: "gif",
            type: "image/gif",
            platform: "browser",
            streamType: ["http"]
        }, {
            ext: "png",
            type: "image/png",
            platform: "browser",
            streamType: ["http"]
        }
        ],
        allowRandomSeek: !0,
        _position: 0,
        _duration: 0,
        applyMedia: function (t) {
            this.mediaElement = this.applyImage(this.media.file[0].src, t.html("")), this._duration = this.pp.getConfig("duration") || 1, this._position = - 1, this.displayReady(), this._position = - .5
        },
        setPlay: function () {
            var t = this;
            return this._setBufferState("full"), this.progressListener(100), this.playingListener(), 0 == this._duration ? (t._setState("completed"), void 0) : (function () {
                return t._position >= t._duration ? (t._setState("completed"), void 0) : (t.getState("PLAYING") && (t.timeListener({
                    duration: t._duration,
                    position: t._position
                }), setTimeout(arguments.callee, 200), t._position += .2), void 0)
            }(), void 0)
        },
        detachMedia: function () {
            this.mediaElement.remove()
        },
        setPause: function () {
            this.pauseListener()
        },
        setSeek: function (t) {
            this._duration > t && (this._position = t, this.seekedListener())
        }
    }), $p.newModel({
        modelId: "HTML",
        iLove: [{
            ext: "html",
            type: "text/html",
            platform: "browser",
            streamType: ["http"]
        }
        ],
        applyMedia: function (e) {
            var i = this;
            this.mediaElement = t(document.createElement("iframe")).attr({
                id: this.pp.getMediaId() + "_iframe",
                name: this.pp.getMediaId() + "_iframe",
                src: this.media.file[0].src,
                scrolling: "no",
                frameborder: "0",
                width: "100%",
                height: "100%"
            }).css({
                overflow: "hidden",
                border: "0px",
                width: "100%",
                height: "100%"
            }).appendTo(e.html("")), this.mediaElement.load(function (t) {
                i.success()
            }), this.mediaElement.error(function (t) {
                i.remove()
            }), this._duration = this.pp.getConfig("duration")
        },
        success: function () {
            this.displayReady()
        },
        remove: function () {
            this.mediaElement.remove()
        }
    }, "IMAGE")
}), jQuery(function (t) {
    $p.newModel({
        modelId: "OSMFVIDEO",
        replace: "VIDEOFLASH",
        flashVersion: "10.2",
        flashVerifyMethod: "addEventListener",
        iLove: [{
            ext: "flv",
            type: "video/flv",
            platform: "flash",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "mp4",
            type: "video/mp4",
            platform: "flash",
            streamType: ["*"]
        }, {
            ext: "f4v",
            type: "video/mp4",
            platform: "flash",
            streamType: ["*"]
        }, {
            ext: "mov",
            type: "video/quicktime",
            platform: "flash",
            streamType: ["*"]
        }, {
            ext: "m4v",
            type: "video/mp4",
            platform: "flash",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "f4m",
            type: "application/f4m+xml",
            platform: "flash",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "m3u8",
            type: "application/mpegURL",
            platform: "flash",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "m3u8",
            type: "application/x-mpegURL",
            platform: "flash",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "m3u8",
            type: "application/vnd.apple.mpegurl",
            platform: "flash",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "manifest",
            type: "application/vnd.ms-ss",
            platform: "flash",
            fixed: !0,
            streamType: ["*"]
        }
        ],
        hasGUI: !1,
        allowRandomSeek: !1,
        isPseudoStream: !1,
        streamType: "http",
        availableQualities: {},
        _hardwareAcceleration: !0,
        _isStream: !1,
        _isDVR: !1,
        _isMuted: !1,
        _isStarted: !1,
        _qualitySwitching: !1,
        _isDynamicStream: !1,
        _volume: 0,
        _eventMap: {
            mediaPlayerCapabilityChange: "OSMF_PlayerCapabilityChange",
            durationChange: "OSMF_durationChange",
            currentTimeChange: "OSMF_currentTimeChange",
            loadStateChange: "OSMF_loadStateChange",
            bufferingChange: "OSMF_bufferingChange",
            bytesLoadedChange: "OSMF_bytesLoadedChange",
            playStateChange: "OSMF_playerStateChange",
            seekingChange: "OSMF_seekingChange",
            canPlayChange: "OSMF_seekingChange",
            isRecordingChange: "OSMF_isRecordingChange",
            complete: "endedListener",
            volumeChange: "volumeListener",
            mediaError: "errorListener",
            MBRItemChange: "OSMF_universal",
            isDynamicStreamChange: "OSMF_updateDynamicStream",
            autoSwitchChange: "OSMF_updateDynamicStream",
            switchingChange: "OSMF_updateDynamicStream"
        },
        applyMedia: function (e) {
            var i = this;
            window["projekktorOSMFReady" + this.pp.getId()] = function () {
                projekktor(i.pp.getId()).playerModel._OSMFListener(arguments)
            };
            var s = {
                id: this.pp.getMediaId() + "_flash",
                name: this.pp.getMediaId() + "_flash",
                src: this.pp.getConfig("playerFlashMP4"),
                width: "100%",
                height: "100%",
                allowScriptAccess: "always",
                quality: "high",
                menu: !1,
                allowFullScreen: "true",
                wmode: $p.utils.ieVersion() ? "transparent" : "opaque",
                SeamlessTabbing: "false",
                bgcolor: "#000000",
                FlashVars: t.extend({
                    enableStageVideo: true,
                    disableHardwareAcceleration: false,
                    javascriptCallbackFunction: "window.projekktorOSMFReady" + this.pp.getId()
                }, this.pp.getConfig("OSMFVars"))
            };
            this.createFlash(s, e)
        },
        flashReadyListener: function () {
            this.applySrc(), this.displayReady()
        },
        removeListeners: function () {},
        loadProgressUpdate: function () {},
        addListeners: function () {},
        applySrc: function () {
            var t = this,
            e = this.getSource();
            this.mediaElement.get(0).setMediaResourceURL(e[0].src), this.streamType = e[0].streamType || this.pp.getConfig("streamType") || "http", this.getState("PLAYING") && (this.setPlay(), t.isPseudoStream !== !0 && this.media.position > 0 && this.setSeek(this.media.position)), "pseudo" == this.streamType && (this.isPseudoStream = !0, this.allowRandomSeek = !0, this.media.loadProgress = 100), this.streamType.indexOf("live") > - 1 && (this.allowRandomSeek = !0, this.media.loadProgress = 100)
        },
        _OSMFListener: function () {
            var e = arguments[0][1],
            i = arguments[0][2],
            s = this;
            switch (this.mediaElement = t("#" + this.pp.getMediaId() + "_flash"), e) {
            case "onJavaScriptBridgeCreated":
                null !== this.mediaElement && this.getState("AWAKENING") && (t.each(this._eventMap, function (t, e) {
                    s.mediaElement.get(0).addEventListener(t, "projekktor('" + s.pp.getId() + "').playerModel." + e)
                }), this.flashReadyListener());
                break;
            case "loadedmetadata":
                this.metaDataListener(i);
                break;
            case "progress":
            }
        },
        OSMF_universal: function () {},
        OSMF_isRecordingChange: function () {},
        OSMF_PlayerCapabilityChange: function (t) {},
        OSMF_bytesLoadedChange: function () {
            var t = this.mediaElement.get(0),
            e = 0;
            e = 100 * t.getBytesLoaded() / t.getBytesTotal(), this.media.loadProgress > e || (this.media.loadProgress = this.allowRandomSeek === !0 ? 100 : - 1, this.media.loadProgress = 100 > this.media.loadProgress || void 0 === this.media.loadProgress ? e : 100, this.sendUpdate("progress", this.media.loadProgress))
        },
        OSMF_durationChange: function (t) {
            isNaN(t) || (this.timeListener({
                position: this.media.position,
                duration: t || 0
            }), this.seekedListener())
        },
        OSMF_currentTimeChange: function (t) {
            this._isDVR && this.sendUpdate("isLive", t + 20 >= this.media.duration), this.timeListener({
                position: t,
                duration: this.media.duration || 0
            })
        },
        OSMF_seekingChange: function (t) {
            this.seekedListener()
        },
        OSMF_bufferingChange: function (t) {
            t === !0 ? this.waitingListener() : this.canplayListener()
        },
        OSMF_loadStateChange: function (t) {
            switch (t) {
            case "loading":
                this.waitListener();
                break;
            case "ready":
                this.getState("awakening") && this.displayReady(), this.getState("starting") && this.setPlay(), this.mediaElement.get(0).getStreamType().indexOf("dvr") > - 1 && (this.allowRandomSeek = !0, this.media.loadProgress = 100);
                break;
            case "loadError":
            }
        },
        OSMF_playerStateChange: function (t) {
            var e = this;
            switch (this._isDVR || "dvr" != this.mediaElement.get(0).getStreamType() || (this._isDVR = !0, this.sendUpdate("streamTypeChange", "dvr")), t) {
            case "playing":
                this.playingListener();
                break;
            case "paused":
                this.pauseListener(), this._isDVR && function () {
                    e.getState("PAUSED") && e.media.position >= .5 && (e.timeListener({
                        position: e.media.position - .5,
                        duration: e.media.duration || 0
                    }), setTimeout(arguments.callee, 500))
                }();
                break;
            case "stopped":
                this.getSeekState("SEEKING") || this.endedListener()
            }
        },
        OSMF_updateDynamicStream: function () {
            var e = this.mediaElement.get(0).getStreamItems(),
            i = "",
            s = [];
            for (var n in e) 
                e.hasOwnProperty(n) && void 0 !== e[n].bitrate && (i = e[n].width + "x" + e[n].height, this.pp.getConfig("OSMFQualityMap") && this.pp.getConfig("OSMFQualityMap")[i] && (this.availableQualities[this.pp.getConfig("OSMFQualityMap")[i]] = n));
            $p.utils.log(e), t.each(this.availableQualities, function (t, e) {
                s.push(t)
            }), s.push("auto"), this._isDynamicStream = !0, this.sendUpdate("availableQualitiesChange", s)
        },
        switchDynamicStreamIndex: function (t) {
            - 1 == t ? this.mediaElement.get(0).setAutoDynamicStreamSwitch(!0) : (this.mediaElement.get(0).getAutoDynamicStreamSwitch() && this.mediaElement.get(0).setAutoDynamicStreamSwitch(!1), this.mediaElement.get(0).switchDynamicStreamIndex(t))
        },
        errorListener: function () {
            switch (arguments[0]) {
            case 15:
                this.sendUpdate("error", 5);
                break;
            case 80:
                this.sendUpdate("error", 80);
                break;
            default:
            }
        },
        detachMedia: function () {
            try {
                this.mediaElement.get(0).remove()
            } catch (t) {}
        },
        volumeListener: function (t) {
            this._volume = t
        },
        endedListener: function (t) {
            null !== this.mediaElement && (0 >= this.media.maxpos || "STARTING" != this.getState() && this._qualitySwitching !== !0 && this._setState("completed"))
        },
        setSeek: function (t) {
            return this.isPseudoStream ? (this._setSeekState("seeking"), this.media.offset = t, this.applySrc(), void 0) : ( - 1 == t && (t = this.getDuration()), this.mediaElement.get(0).seek(t), void 0)
        },
        setVolume: function (t) {
            null === this.mediaElement ? this.volumeListener(t) : this.mediaElement.get(0).setVolume(t)
        },
        setPause: function (t) {
            this.mediaElement.get(0).pause()
        },
        setPlay: function (t) {
            this.mediaElement.get(0).play2()
        },
        setQuality: function (t) {
            if (this._quality != t) {
                if (this._quality = t, this._isDynamicStream === !0) 
                    return this.switchDynamicStreamIndex("auto" == t ? - 1 : this.availableQualities[t]), void 0;
                this._qualitySwitching = !0, this.applySrc(), this._qualitySwitching = !1, this.qualityChangeListener()
            }
        },
        getVolume: function () {
            return this._isMuted === !0 ? 0 : null === this.mediaElement ? this.media.volume : this._volume
        },
        getSrc: function () {
            try {
                return this.mediaElement.get(0).getCurrentSrc()
            } catch (t) {
                return null
            }
        },
        getQuality: function () {
            return this._quality
        },
        _scaleVideo: function () {}
    }), $p.newModel({
        modelId: "OSMFVIDEONA",
        iLove: [{
            ext: "flv",
            type: "video/flv",
            platform: "flashna",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "mp4",
            type: "video/mp4",
            platform: "flashna",
            streamType: ["*"]
        }, {
            ext: "f4v",
            type: "video/mp4",
            platform: "flashna",
            streamType: ["*"]
        }, {
            ext: "mov",
            type: "video/quicktime",
            platform: "flashna",
            streamType: ["*"]
        }, {
            ext: "m4v",
            type: "video/mp4",
            platform: "flashna",
            fixed: !0,
            streamType: ["*"]
        }, {
            ext: "f4m",
            type: "application/f4m+xml",
            platform: "flashna",
            fixed: !0,
            streamType: ["*"]
        }
        ],
        _hardwareAcceleration: !0
    }, "OSMFVIDEO"), $p.newModel({
        modelId: "OSMFAUDIO",
        replace: "AUDIOFLASH",
        hasGUI: !1,
        iLove: [{
            ext: "mp3",
            type: "audio/mp3",
            platform: "flash",
            streamType: ["*"]
        }, {
            ext: "m4a",
            type: "audio/mp4",
            platform: "flash",
            streamType: ["*"]
        }, {
            ext: "m4a",
            type: "audio/mpeg",
            platform: "flash",
            streamType: ["*"]
        }
        ],
        applyMedia: function (e) {
            var i = this;
            $p.utils.blockSelection(e), this.imageElement = this.applyImage(this.getPoster("cover") || this.getPoster("poster"), e);
            var s = t("#" + this.pp.getMediaId() + "_flash_container");
            0 === s.length && (s = t(document.createElement("div")).css({
                width: "1px",
                height: "1px"
            }).attr("id", this.pp.getMediaId() + "_flash_container").prependTo(this.pp.getDC())), window["projekktorOSMFReady" + this.pp.getId()] = function () {
                projekktor(i.pp.getId()).playerModel._OSMFListener(arguments)
            };
            var n = {
                id: this.pp.getMediaId() + "_flash",
                name: this.pp.getMediaId() + "_flash",
                src: this.pp.getConfig("playerFlashMP4"),
                width: "100%",
                height: "100%",
                allowScriptAccess: "always",
                quality: "height",
                menu: !1,
                allowFullScreen: "true",
                wmode: "opaque",
                seamlesstabbing: "false",
                bgcolor: "#ccc",
                FlashVars: t.extend({
                    javascriptCallbackFunction: "window.projekktorOSMFReady" + this.pp.getId()
                }, this.pp.getConfig("OSMFVars"))
            };
            this.createFlash(n, s, !1)
        }
    }, "OSMFVIDEO")
});
var projekktorDisplay = function () {};
jQuery(function (t) {
    projekktorDisplay.prototype = {
        version: "1.1.00",
        logo: null,
        logoIsFading: !1,
        display: null,
        displayClicks: 0,
        buffIcn: null,
        buffIcnSprite: null,
        bufferDelayTimer: null,
        _controlsDims: null,
        config: {
            displayClick: {
                callback: "setPlayPause",
                value: null
            },
            displayPlayingClick: {
                callback: "setPlayPause",
                value: null
            },
            displayDblClick: {
                callback: null,
                value: null
            },
            staticControls: !1,
            bufferIconDelay: 1e3,
            spriteUrl: "",
            spriteWidth: 50,
            spriteHeight: 50,
            spriteTiles: 25,
            spriteOffset: 1,
            spriteCountUp: !1
        },
        initialize: function () {
            this.display = this.applyToPlayer(t("<div/>")), this.startButton = this.applyToPlayer(t("<div/>").addClass("start"), "startbtn"), this.buffIcn = this.applyToPlayer(t("<div/>").addClass("buffering"), "buffericn"), this.imaContainer = this.applyToPlayer(t("<div/>").addClass("ima"), "ima"), this.setActive(), "" !== this.config.spriteUrl && (this.buffIcnSprite = t("<div/>").appendTo(this.buffIcn).css({
                width: this.config.spriteWidth,
                height: this.config.spriteHeight,
                marginLeft: (this.buffIcn.width() - this.config.spriteWidth) / 2 + "px",
                marginTop: (this.buffIcn.height() - this.config.spriteHeight) / 2 + "px",
                backgroundColor: "transparent",
                backgroundImage: "url(" + this.config.spriteUrl + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 0"
            }).addClass("inactive")), this.pp.getMediaContainer(), this.pluginReady = !0
        },
        displayReadyHandler: function () {
            var t = this;
            this.hideStartButton(), this.startButton.unbind().click(function () {
                t.pp.setPlay()
            })
        },
        syncingHandler: function () {
            this.showBufferIcon(), this.pp.getState("IDLE") && this.hideStartButton()
        },
        readyHandler: function () {
            this.hideBufferIcon(), this.pp.getState("IDLE") && this.showStartButton()
        },
        bufferHandler: function (t) {
            (this.pp.getState("PLAYING") || this.pp.getState("AWAKENING")) && ("EMPTY" == t ? this.showBufferIcon() : this.hideBufferIcon())
        },
        stateHandler: function (t) {
            switch (t) {
            case "IDLE":
                clearTimeout(this._cursorTimer), this.display.css("cursor", "pointer");
                break;
            case "PLAYING":
                this.hideBufferIcon(), this.hideStartButton();
                break;
            case "IDLE":
                this.showStartButton();
                break;
            case "STARTING":
            case "AWAKENING":
                this.showBufferIcon(), this.hideStartButton();
                break;
            case "COMPLETED":
            case "STOPPED":
                this.hideBufferIcon();
                break;
            default:
                this.hideStartButton()
            }
        },
        errorHandler: function () {
            this.hideBufferIcon(), this.hideStartButton()
        },
        startHandler: function () {
            this.mousemoveHandler()
        },
        scheduleLoadingHandler: function () {
            this.hideStartButton(), this.showBufferIcon()
        },
        scheduledHandler: function () {
            this.getConfig("autoplay") || this.showStartButton(), this.hideBufferIcon()
        },
        plugineventHandler: function (t) {
            if ("controlbar" == t.PLUGIN && "show" == t.EVENT && this.getConfig("staticControls")) {
                var e = 100 * t.height / this.pp.getDC().height();
                this.display.height(100 - e + "%").data("sc", !0)
            }
        },
        qualityChangeHandler: function () {
            this.hideBufferIcon()
        },
        mousemoveHandler: function (t) {
            var e = this.display;
            return this.pp.getState("IDLE") ? (e.css("cursor", "pointer"), void 0) : ( /*e.css("cursor","auto"),*/
            clearTimeout(this._cursorTimer), - 1 == "AWAKENING|ERROR|PAUSED".indexOf(this.pp.getState()) && (this._cursorTimer = setTimeout(function () {
                /*e.css("cursor","none")*/
            }, 3e3)), void 0)
        },
        mousedownHandler: function (e) {
            var i = this;
            if ( - 1 != (t(e.target).attr("id") || "").indexOf("_media") && (clearTimeout(this._cursorTimer), /*this.display.css("cursor","auto"),*/
            1 == e.which)) {
                switch (this.pp.getState()) {
                case "ERROR":
                    return this.pp.setConfig({
                        disallowSkip: !1
                    }), this.pp.setActiveItem("next"), void 0;
                case "IDLE":
                    return this.pp.setPlay(), void 0
                }
                this.pp.getHasGUI() !== !0 && (this.displayClicks++, this.pp._promote("displayClick"), this.displayClicks > 0 && setTimeout(function () {
                    1 == i.displayClicks ? "PLAYING" == i.pp.getState() ? i.clickHandler("displayPlaying") : i.clickHandler("display") : 2 == i.displayClicks && i.clickHandler("displayDbl"), i.displayClicks = 0
                }, 250))
            }
        },
        showStartButton: function () {
            this.startButton.addClass("active").removeClass("inactive")
        },
        hideStartButton: function () {
            this.startButton.addClass("inactive").removeClass("active")
        },
        hideBufferIcon: function () {
            clearTimeout(this.bufferDelayTimer), this.buffIcn.addClass("inactive").removeClass("active")
        },
        showBufferIcon: function (t) {
            var e = this;
            if (clearTimeout(this.bufferDelayTimer), !this.pp.getHasGUI()) {
                if ("YTAUDIO" !== this.pp.getModel() && "YTVIDEO" !== this.pp.getModel() || this.pp.getState("IDLE") || (t = !0), t !== !0 && this.getConfig("bufferIconDelay") > 0) 
                    return this.bufferDelayTimer = setTimeout(function () {
                        e.showBufferIcon(!0)
                    }, this.getConfig("bufferIconDelay")), void 0;
                if (!this.buffIcn.hasClass("active") && (this.buffIcn.addClass("active").removeClass("inactive"), null !== e.buffIcnSprite)) {
                    var i = e.config.spriteCountUp === !0 ? 0 : (e.config.spriteHeight + e.config.spriteOffset) * (e.config.spriteTiles - 1),
                    s = i;
                    e.buffIcnSprite.addClass("active").removeClass("inactive"),
                    function () {
                        e.buffIcn.is(":visible") && (e.buffIcnSprite.css("backgroundPosition", "0px -" + s + "px"), e.config.spriteCountUp === !0 ? s += e.config.spriteHeight + e.config.spriteOffset : s -= e.config.spriteHeight + e.config.spriteOffset, (s > (i + e.config.spriteHeight) * e.config.spriteTiles || e.config.spriteOffset > s) && (s = i), setTimeout(arguments.callee, 60))
                    }()
                }
            }
        }
    }
});
var projekktorControlbar = function () {};
jQuery(function (t) {
    projekktorControlbar.prototype = {
        version: "1.1.01",
        _cTimer: null,
        _isDVR: !1,
        _noHide: !1,
        _vSliderAct: !1,
        cb: null,
        controlElements: {},
        controlElementsConfig: {
            sec_dur: null,
            min_dur: null,
            sec_abs_dur: null,
            min_abs_dur: null,
            hr_dur: null,
            sec_elp: null,
            min_elp: null,
            sec_abs_elp: null,
            min_abs_elp: null,
            hr_elp: null,
            sec_rem: null,
            min_rem: null,
            sec_abs_rem: null,
            min_abs_rem: null,
            hr_rem: null,
            sec_tip: null,
            min_tip: null,
            sec_abs_tip: null,
            min_abs_tip: null,
            hr_tip: null,
            cb: null,
            playhead: {
                on: null,
                call: null
            },
            loaded: null,
            golive: [{
                on: ["touchstart", "click"],
                call: "goliveClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            scrubber: null,
            scrubbertip: null,
            scrubberknob: null,
            scrubberdrag: [{
                on: ["mouseenter"],
                call: "scrubberShowTooltip"
            }, {
                on: ["mouseout"],
                call: "scrubberHideTooltip"
            }, {
                on: ["mousemove"],
                call: "scrubberdragTooltip"
            }, {
                on: ["mousedown"],
                call: "scrubberdragStartDragListener"
            }
            ],
            play: [{
                on: ["touchstart", "click"],
                call: "playClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            pause: [{
                on: ["touchstart", "click"],
                call: "pauseClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            stop: [{
                on: ["touchstart", "click"],
                call: "stopClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            prev: [{
                on: ["touchstart", "click"],
                call: "prevClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            next: [{
                on: ["touchstart", "click"],
                call: "nextClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            rewind: [{
                on: ["touchstart", "click"],
                call: "rewindClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            forward: [{
                on: ["touchstart", "click"],
                call: "forwardClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            fsexit: [{
                on: ["touchstart", "click"],
                call: "exitFullscreenClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            fsenter: [{
                on: ["touchstart", "click"],
                call: "enterFullscreenClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            loquality: [{
                on: ["touchstart", "click"],
                call: "setQualityClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            hiquality: [{
                on: ["touchstart", "click"],
                call: "setQualityClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            vslider: [{
                on: ["touchstart", "click"],
                call: "vsliderClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            vmarker: [{
                on: ["touchstart", "click"],
                call: "vsliderClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            vknob: {
                on: ["mousedown"],
                call: "vknobStartDragListener"
            },
            volumePanel: [{
                on: ["mousemove"],
                call: "volumeBtnHover"
            }, {
                on: ["mouseout"],
                call: "volumeBtnOut"
            }
            ],
            volume: null,
            mute: [{
                on: ["touchstart", "click"],
                call: "muteClk"
            }, {
                on: ["mouseout"],
                call: "volumeBtnOut"
            }, {
                on: ["mousemove"],
                call: "volumeBtnHover"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            unmute: [{
                on: ["touchstart", "click"],
                call: "unmuteClk"
            }, {
                on: ["mouseout"],
                call: "volumeBtnOut"
            }, {
                on: ["mousemove"],
                call: "volumeBtnHover"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            vmax: [{
                on: ["touchstart", "click"],
                call: "vmaxClk"
            }, {
                on: ["mouseout"],
                call: "volumeBtnOut"
            }, {
                on: ["mousemove"],
                call: "volumeBtnHover"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            open: [{
                on: ["touchstart", "click"],
                call: "openCloseClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            close: [{
                on: ["touchstart", "click"],
                call: "openCloseClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            loop: [{
                on: ["touchstart", "click"],
                call: "loopClk"
            }, {
                on: ["touchend"],
                call: "touchEnd"
            }
            ],
            draghandle: {
                on: ["mousedown"],
                call: "handleStartDragListener"
            },
            controls: null,
            title: null
        },
        config: {
            toggleMute: 1,
            showCuePoints: !1,
            fadeDelay: 2500,
            showOnStart: !1,
            showOnIdle: !1,
            controlsTemplate: '<ul class="left"><li><div %{play}></div><div %{pause}></div></li></ul><ul class="right"><li><div %{fsexit}></div><div %{fsenter}></div></li><li><div %{loquality}></div><div %{hiquality}></div></li><li><div %{tracksbtn}></div></li><li><div %{vmax}></div></li><li><div %{vslider}><div %{vmarker}></div><div %{vknob}></div></div></li><li><div %{mute}></div><div %{unmute}></div></li><li><div %{timeleft}>%{hr_elp}:%{min_elp}:%{sec_elp} | %{hr_dur}:%{min_dur}:%{sec_dur}</div></li><li><div %{next}></div></li><li><div %{prev}></div></li></ul><ul class="bottom"><li><div %{scrubber}><div %{loaded}></div><div %{playhead}></div><div %{scrubberknob}></div><div %{scrubberdrag}></div></div></li></ul><div %{scrubbertip}>%{hr_tip}:%{min_tip}:%{sec_tip}</div>'
        },
        initialize: function () {
            var e = this,
            i = this.playerDom.html(),
            s = !0,
            n = this.pp.getNS();
            for (var a in this.controlElementsConfig)
                if (i.match(RegExp(n + a, "gi"))) {
                    s = !1;
                    break
                }
            s ? (this.cb = this.applyToPlayer(t("<div/>").addClass("controls")), this.applyTemplate(this.cb, this.getConfig("controlsTemplate"))) : this.cb = this.playerDom.find("." + n + "controls");
            for (var a in this.controlElementsConfig) 
                this.controlElements[a] = t(this.playerDom).find("." + n + a), $p.utils.blockSelection(t(this.controlElements[a]));
            this.addGuiListeners(), this.hidecb(!0), this.pluginReady = !0
        },
        applyTemplate: function (e, i) {
            var s = this,
            n = this.pp.getNS();
            if (i) {
                var a = i.match(/\%{[a-zA-Z_]*\}/gi);
                null != a && t.each(a, function (t, e) {
                    var s = e.replace(/\%{|}/gi, "");
                    i = e.match(/\_/gi) ? i.replace(e, '<span class="' + n + s + '"></span>') : i.replace(e, 'class="' + n + s + '"')
                }), e.html(i)
            }
        },
        updateDisplay: function () {
            var t = this,
            e = this.pp.getState();
            if (!this.pp.getHasGUI()) {
                if (0 == this.getConfig("controls")) 
                    return this.hidecb(!0), void 0;
                2 > this.pp.getItemCount() || this.getConfig("disallowSkip") ? (this._active("prev", !1), this._active("next", !1)) : (this._active("prev", !0), this._active("next", !0)), 1 > this.pp.getItemIdx() && this._active("prev", !1), this.pp.getItemIdx() >= this.pp.getItemCount() - 1 && this._active("next", !1), this.getConfig("disablePause") ? (this._active("play", !1), this._active("pause", !1)) : ("PLAYING" === e && this.drawPauseButton(), "PAUSED" === e && this.drawPlayButton(), "IDLE" === e && this.drawPlayButton()), this._active("stop", "IDLE" !== e), this._active("forward", "IDLE" !== e), this._active("rewind", "IDLE" !== e), this.pp.getInFullscreen() === !0 ? this.drawExitFullscreenButton() : this.drawEnterFullscreenButton(), this.getConfig("enableFullscreen") || (this._active("fsexit", !1), this._active("fsenter", !1)), this._active("loop", !0), this.controlElements.loop.addClass(this.pp.getConfig("loop") ? "on" : "off").removeClass(this.pp.getConfig("loop") ? "off" : "on"), this.displayQualityToggle(), this.displayTime(), this.displayVolume(this._getVolume())
            }
        },
        addGuiListeners: function () {
            var e = this;
            t.each(this.controlElementsConfig, function (i, s) {
                if (null == s) 
                    return !0;
                s instanceof Array || (s = [s]);
                for (var n = 0; s.length > n; n++) 
                    null != s[n].on && t.each(s[n].on, function (t, a) {
                        var r = "on" + a in window.document,
                        o = s[n].call;
                        if (!r) {
                            var l = document.createElement("div");
                            l.setAttribute("on" + a, "return;"), r = "function" == typeof l["on" + a]
                        }
                        r && e.controlElements[i].bind(a, function (t) {
                            e.clickCatcher(t, o, e.controlElements[i])
                        })
                    });
                return !0
            }), this.cb.mousemove(function (t) {
                e.controlsFocus(t)
            }), this.cb.mouseout(function (t) {
                e.controlsBlur(t)
            })
        },
        clickCatcher: function (t, e, i) {
            var s = this;
            return t.stopPropagation(), t.preventDefault(), this[e](t, i), !1
        },
        touchEnd: function () {
            var t = this;
            this._cTimer = setTimeout(function () {
                t.hidecb()
            }, this.getConfig("fadeDelay")), this._noHide = !1
        },
        drawTitle: function () {
            this.controlElements.title.html(this.getConfig("title", ""))
        },
        hidecb: function (t) {
            return clearTimeout(this._cTimer), null != this.cb ? 0 == this.getConfig("controls") ? (this.cb.removeClass("active").addClass("inactive"), void 0) : (this.getConfig("showOnIdle") && this.pp.getState("IDLE") || (t && (this._noHide = !1), this._noHide || this.cb.hasClass("inactive") || (this.cb.removeClass("active").addClass("inactive"), this.sendEvent("hide", this.cb))), void 0) : void 0
        },
        showcb: function (t) {
            var e = this;
            if (clearTimeout(this._cTimer), this.pp.getHasGUI() || 0 == this.getConfig("controls")) 
                return this.cb.removeClass("active").addClass("inactive"), void 0;
            if (null != this.cb && !("IDLE|AWAKENING|ERROR".indexOf(this.pp.getState()) > - 1 && 1 != t)) {
                if (this.cb.hasClass("active") && t !== !1) 
                    return this._cTimer = setTimeout(function () {
                        e.hidecb()
                    }, this.getConfig("fadeDelay")), void 0;
                this.cb.removeClass("inactive").addClass("active"), this.sendEvent("show", this.cb), this._cTimer = setTimeout(function () {
                    e.hidecb()
                }, this.getConfig("fadeDelay"))
            }
        },
        displayTime: function (e, i, s) {
            if (!this.pp.getHasGUI()) {
                var n = Math.round(10 * (e || this.pp.getLoadPlaybackProgress() || 0)) / 10,
                a = i || this.pp.getDuration() || 0,
                r = s || this.pp.getPosition() || 0,
                o = t.extend({}, this._clockDigits(a, "dur"), this._clockDigits(r, "elp"), this._clockDigits(a - r, "rem"));
                if (this.controlElements.playhead.data("pct") != n) {
                    this.controlElements.playhead.data("pct", n).css({
                        width: n + "%"
                    }), this.controlElements.scrubberknob.css({
                        left: n + "%"
                    });
                    for (var l in this.controlElements) {
                        if ("cb" == l) 
                            break;
                        o[l] && t.each(this.controlElements[l], function () {
                            t(this).html(o[l])
                        })
                    }
                }
            }
        },
        displayProgress: function () {
            var t = Math.round(10 * this.pp.getLoadProgress()) / 10;
            this.controlElements.loaded.data("pct") != t && this.controlElements.loaded.data("pct", t).css("width", t + "%")
        },
        displayVolume: function (e) {
            var i = this;
            if (1 != this._vSliderAct && null != e) {
                var s = this.cb.hasClass("active"),
                i = this,
                n = this.getConfig("fixedVolume"),
                a = this.controlElements.mute.hasClass("toggle") || this.controlElements.unmute.hasClass("toggle") || this.getConfig("toggleMute");

                if (this._active("mute", !n), this._active("unmute", !n), this._active("vmax", !n), this._active("vknob", !n), this._active("vmarker", !n), this._active("vslider", !n), !n) {
                    this.controlElements.vslider.width() > this.controlElements.vslider.height() ? (this.controlElements.vmarker.css("width", 100 * e + "%"), this.controlElements.vknob.css("left", 100 * e + "%")) : (this.controlElements.vmarker.css("height", 100 * e + "%"), this.controlElements.vknob.css("top", 100 - 100 * e + "%"));
                    var r = this.controlElements.volume.find("li"),
                    o = r.length - Math.ceil(100 * e / r.length);
                    for (var l = 0; r.length >= l; l++) 
                        l >= o ? t(r[l]).addClass("active") : t(r[l]).removeClass("active");
                    if (a) 
                        switch (parseFloat(e)) {
                        case 0:
                            this._active("mute", !1), this._active("unmute", !0), this._active("vmax", !0);
                            break;
                        default:
                            this._active("mute", !0), this._active("unmute", !1), this._active("vmax", !1);
                        }
                    s && this.cb.fadeTo(1, .99).fadeTo(1, 1, function () {
                        i.cb.removeAttr("style")
                    })
                }
            }
        },
        displayCuePoints: function (e) {
            var i = this,
            s = this.pp.getNS();
            this.getConfig("showCuePoints") && (i.controlElements.scrubber.remove("." + s + "cuepoint"), t.each(this.pp.getCuePoints() || [], function () {
                var n = Math.max(100 / e, Math.round(e / 100), 1),
                a = 100 * this.on / e - 100 * (n / 2) / e,
                r = this,
                o = i.pp,
                l = t(document.createElement("div")).addClass(s + "cuepoint").addClass("inactive").css("left", a + "%").css("width", n + "%").data("on", this.on);
                "" != this.title && l.attr("title", this.title), this.addListener("unlock", function () {
                    t(l).removeClass("inactive").addClass("active"), l.click(function () {
                        i.pp.setPlayhead(l.data("on"))
                    })
                }), i.controlElements.scrubber.append(l)
            }))
        },
        drawPauseButton: function (t) {
            this._active("pause", !0), this._active("play", !1)
        },
        drawPlayButton: function (t) {
            this._active("pause", !1), this._active("play", !0)
        },
        drawEnterFullscreenButton: function (t) {
            this._active("fsexit", !1), this._active("fsenter", !0)
        },
        drawExitFullscreenButton: function (t) {
            this._active("fsexit", !0), this._active("fsenter", !1)
        },
        displayQualityToggle: function (e) {
            var i = this.getConfig("playbackQualities"),
            s = this.pp.getPlaybackQualities(),
            n = this.pp.getNS();
            if (best = [], 2 > s.length || 2 > i.length) 
                return this.controlElements.loquality.removeClass().addClass("inactive").addClass(n + "loquality").data("qual", ""), this.controlElements.hiquality.removeClass().addClass("inactive").addClass(n + "hiquality").data("qual", ""), void 0;
            i.sort(function (t, e) {
                return t.minHeight - e.minHeight
            });
            for (var a = i.length; a--; a > 0)
                if (t.inArray(i[a].key, s) > - 1 && best.push(i[a].key), best.length > 1) 
                    break;
            this.cb.addClass("qualities"), best[0] == this.pp.getPlaybackQuality() ? (this._active("loquality", !0).addClass("qual" + best[1]).data("qual", best[1]), this._active("hiquality", !1).addClass("qual" + best[0]).data("qual", best[0])) : (this._active("loquality", !1).addClass("qual" + best[1]).data("qual", best[1]), this._active("hiquality", !0).addClass("qual" + best[0]).data("qual", best[0]))
        },
        itemHandler: function (e) {
            t(this.cb).find("." + this.pp.getNS() + "cuepoint").remove(), this.pp.setVolume(this._getVolume()), this.updateDisplay(), this.hidecb(!0), this.drawTitle(), this.displayQualityToggle(), this.pluginReady = !0
        },
        startHandler: function () {
            this.pp.setVolume(this._getVolume()), 1 == this.getConfig("showOnStart") ? this.showcb(!0) : this.hidecb(!0)
        },
        readyHandler: function (t) {
            clearTimeout(this._cTimer), this.getConfig("showOnIdle") && (this.showcb(!0), this.cb.removeClass("inactive").addClass("active").show()), this.pluginReady = !0
        },
        stateHandler: function (t) {
            return this.updateDisplay(), "STOPPED|AWAKENING|IDLE|DONE".indexOf(t) > - 1 && (this.displayTime(0, 0, 0), this.displayProgress(0), this.pp.getIsMobileClient() && this.hidecb(!0)), "STOPPED|DONE|IDLE".indexOf(t) > - 1 ? (this.hidecb(!0), void 0) : ("ERROR".indexOf(t) > - 1 && (this._noHide = !1, this.hidecb(!0)), this.displayProgress(), void 0)
        },
        scheduleModifiedHandler: function () {
            "IDLE" !== this.pp.getState() && (this.updateDisplay(), this.displayTime(), this.displayProgress())
        },
        volumeHandler: function (t) {
            try {
                t > 0 && this.cookie("muted", !1), this.cookie("muted") || this.cookie("volume", t)
            } catch (e) {
                console.log(e)
            }
            this.displayVolume(t);
        },
        progressHandler: function (t) {
            this.displayProgress()
        },
        timeHandler: function (t) {
            this.displayTime(), this.displayProgress()
        },
        qualityChangeHandler: function (t) {
            this.displayQualityToggle(t)
        },
        streamTypeChangeHandler: function (t) {
            "dvr" == t && (this._isDVR = !0, this.setActive(this.controlElements.golive, !0))
        },
        isLiveHandler: function (t) {
            t ? this.controlElements.golive.addClass("on").removeClass("off") : this.controlElements.golive.addClass("off").removeClass("on")
        },
        fullscreenHandler: function (t) {
            var e = this,
            i = this.pp.getNS();
            clearTimeout(this._cTimer), this._noHide = !1, this._vSliderAct = !1, this.getConfig("controls") && this.getConfig("enableFullscreen") && (t ? (this.cb.addClass("fullscreen"), this.drawExitFullscreenButton()) : (this.cb.removeClass("fullscreen"), this.drawEnterFullscreenButton()), "IDLE" != this.pp.getState() || this.getConfig("showOnIdle") || this.hidecb(!0))
        },
        durationChangeHandler: function (t) {
            this.displayCuePoints(t)
        },
        errorHandler: function (t) {
            this.hidecb(!0)
        },
        leftclickHandler: function () {
            this.mouseleaveHandler()
        },
        focusHandler: function (t) {
            this.showcb()
        },
        mouseenterHandler: function (t) {
            this.showcb()
        },
        mousemoveHandler: function (t) {
            this.pp.getState("STARTING") || this.showcb()
        },
        mouseleaveHandler: function () {},
        mousedownHandler: function (t) {
            this.showcb()
        },
        controlsFocus: function (t) {
            this._noHide = !0
        },
        controlsBlur: function (t) {
            this._noHide = !1
        },
        setQualityClk: function (e) {
            this.pp.setPlaybackQuality(t(e.currentTarget).data("qual"))
        },
        goliveClk: function (t) {
            this.pp.setSeek( - 1)
        },
        playClk: function (t) {
            this.pp.setPlay()
        },
        pauseClk: function (t) {
            this.pp.setPause()
        },
        stopClk: function (t) {
            this.pp.setStop()
        },
        startClk: function (t) {
            this.pp.setPlay()
        },
        controlsClk: function (t) {},
        prevClk: function (t) {
            this.pp.setActiveItem("previous")
        },
        nextClk: function (t) {
            this.pp.setActiveItem("next")
        },
        forwardClk: function (t) {
            this.pp.setPlayhead("+10")
        },
        rewindClk: function (t) {
            this.pp.setPlayhead("-10")
        },
        muteClk: function (t) {
            this.cookie("muted", !0), this.pp.setVolume(0);
        },
        unmuteClk: function (t) {
            this.cookie("muted", !1), this.pp.setVolume(1);
        },
        vmaxClk: function (t) {
            this.cookie("muted", !1), this.pp.setVolume(1)
        },
        enterFullscreenClk: function (t) {
            this.pp.setFullscreen(!0)
        },
        exitFullscreenClk: function (t) {
            this.pp.setFullscreen(!1)
        },
        loopClk: function (e) {
            this.pp.setLoop(t(e.currentTarget).hasClass("inactive") || !1), this.updateDisplay()
        },
        vmarkerClk: function (t) {
            vsliderClk(t)
        },
        openCloseClk: function (e) {
            var i = this;
            t(t(e.currentTarget).attr("class").split(/\s+/)).each(function (t, e) {
                - 1 != e.indexOf("toggle") && (i.playerDom.find("." + e.substring(6)).slideToggle("slow", function () {
                    i.pp.setSize()
                }), i.controlElements.open.toggle(), i.controlElements.close.toggle())
            })
        },
        volumeBtnHover: function (t) {
            clearTimeout(this._outDelay), this.setActive(this.controlElements.volumePanel, !0)
        },
        volumeBtnOut: function (t, e) {
            var i = this;
            t.currentTarget == e.get(0) && t.relatedTarget != e.get(0) && (this._outDelay = setTimeout(function () {
                i.setActive(i.controlElements.volumePanel, !1)
            }, 100))
        },
        vsliderClk: function (e) {
            if (1 != this._vSliderAct) {
                var i = t(this.controlElements.vslider),
                s = i.width() > i.height() ? "hor" : "vert",
                n = "hor" == s ? i.width() : i.height(),
                a = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX,
                r = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY,
                o = "hor" == s ? a - i.offset().left : r - i.offset().top,
                l = 0;
                l = 0 > o || isNaN(o) || void 0 == o ? 0 : "hor" == s ? o / n : 1 - o / n, this.pp.setVolume(l)
            }
        },
        scrubberShowTooltip: function (t) {
            0 != this.pp.getDuration() && (clearTimeout(this._cTimer), this.setActive(this.controlElements.scrubbertip, !0))
        },
        scrubberHideTooltip: function (t) {
            this.setActive(this.controlElements.scrubbertip, !1)
        },
        scrubberdragTooltip: function (e) {
            if (0 != this.pp.getDuration()) {
                this.setActive(this.controlElements.scrubbertip, !0);
                var i = t(this.controlElements.scrubberdrag[0]),
                s = t(this.controlElements.loaded[0]),
                n = t(this.controlElements.scrubbertip),
                a = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX,
                r = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY,
                o = a - i.offset().left - n.outerWidth() / 2,
                l = this.pp.getDuration() / 100 * (100 * (a - i.offset().left) / i.width()),
                h = this._clockDigits(l, "tip");
                if (this._isDVR) {
                    l = this.pp.getDuration() - l;
                    var c = new Date(1e3 * ((new Date).getTime() / 1e3 - l)),
                    c = c.getSeconds() + 60 * c.getMinutes() + 3600 * c.getHours();
                    h = this._clockDigits(c, "tip")
                }
                for (var u in this.controlElements) {
                    if ("cb" == u) 
                        break;
                    h[u] && t.each(this.controlElements[u], function () {
                        t(this).html(h[u])
                    })
                }
                o = 0 > o ? 0 : o, o = o > i.width() - n.outerWidth() ? i.width() - n.outerWidth() : o, n.css({
                    left: o + "px"
                })
            }
        },
        scrubberdragStartDragListener: function (e) {
            if (1 != this.getConfig("disallowSkip")) {
                this._sSliderAct = !0;
                var i = this,
                s = t(this.controlElements.scrubberdrag[0]),
                n = t(this.controlElements.loaded[0]),
                a = 0,
                r = Math.abs(parseInt(s.offset().left) - e.clientX),
                o = function (t) {
                    var e = Math.abs(s.offset().left - t.clientX);
                    e = e > s.width() ? s.width() : e, e = e > n.width() ? n.width() : e, e = 0 > e ? 0 : e, e = Math.abs(e / s.width()) * i.pp.getDuration(), e > 0 && e != a && (a = e, i.pp.setPlayhead(a))
                }, l = function (t) {
                    return t.stopPropagation(), t.preventDefault(), i.playerDom.unbind("mouseup.slider"), s.unbind("mousemove", h), s.unbind("mouseup", l), i._sSliderAct = !1, !1
                }, h = function (t) {
                    return clearTimeout(i._cTimer), t.stopPropagation(), t.preventDefault(), o(t), !1
                };
                this.playerDom.bind("mouseup.slider", l), s.mouseup(l), s.mousemove(h), o(e)
            }
        },
        vknobStartDragListener: function (e, i) {
            this._vSliderAct = !0;
            var s = this,
            n = this.pp.getInFullscreen() === !0 && this.controlElements.vslider.length > 1 ? 1 : 0,
            a = t(i[n]),
            r = t(this.controlElements.vslider[n]),
            o = Math.abs(parseFloat(a.position().left) - e.clientX),
            l = Math.abs(parseFloat(a.position().top) - e.clientY),
            h = 0,
            c = function (t) {
                return s.playerDom.unbind("mouseup", c), r.unbind("mousemove", u), r.unbind("mouseup", c), a.unbind("mousemove", u), a.unbind("mouseup", c), s._vSliderAct = !1, !1
            }, u = function (e) {
                clearTimeout(s._cTimer);
                var i = e.clientX - o,
                i = i > r.width() - a.width() / 2 ? r.width() - a.width() / 2 : i,
                i = 0 > i ? 0 : i,
                c = e.clientY - l,
                c = c > r.height() - a.height() / 2 ? r.height() - a.height() / 2 : c,
                c = 0 > c ? 0 : c;
                s.controlElements.vslider.width() > s.controlElements.vslider.height() ? (a.css("left", i + "px"), h = Math.abs(i / (r.width() - a.width() / 2)), t(s.controlElements.vmarker[n]).css("width", 100 * h + "%")) : (a.css("top", c + "px"), h = 1 - Math.abs(c / (r.height() - a.height() / 2)), t(s.controlElements.vmarker[n]).css("height", 100 * h + "%"))
            };
            this.playerDom.mouseup(c), r.mousemove(u), r.mouseup(c), a.mousemove(u), a.mouseup(c)
        },
        handleStartDragListener: function (t, e) {
            var i = this,
            s = Math.abs(parseInt(this.cb.position().left) - t.clientX),
            n = Math.abs(parseInt(this.cb.position().top) - t.clientY);
            var a = function (t) {
                return t.stopPropagation(), t.preventDefault(), i.playerDom.unbind("mouseup", a), i.playerDom.unbind("mouseout", a), i.playerDom.unbind("mousemove", r), !1
            };
            var r = function (t) {
                t.stopPropagation(), t.preventDefault(), clearTimeout(i._cTimer);
                var e = t.clientX - s;
                e = e > i.playerDom.width() - i.cb.width() ? i.playerDom.width() - i.cb.width() : e, e = 0 > e ? 0 : e, i.cb.css("left", e + "px");
                var a = t.clientY - n;
                return a = a > i.playerDom.height() - i.cb.height() ? i.playerDom.height() - i.cb.height() : a, a = 0 > a ? 0 : a, i.cb.css("top", a + "px"), !1
            };
            this.playerDom.mousemove(r), this.playerDom.mouseup(a)
        },
        _getVolume: function () {
            var t = parseFloat(this.cookie("volume") || this.getConfig("volume") || 1),
            e = this.cookie("muted") || !1;
            return this.getConfig("fixedVolume") || null == t ? this.getConfig("volume") : e ? 0 : t
        },
        _active: function (t, e) {
            var i = this.controlElements[t];
            return 1 == e ? i.addClass("active").removeClass("inactive") : i.addClass("inactive").removeClass("active"), i
        },
        _clockDigits: function (t, e) {
            (0 > t || isNaN(t) || void 0 == t) && (t = 0);
            var i = Math.floor(t / 3600),
            s = t % 3600,
            n = Math.floor(s / 60),
            a = 60 * i + n,
            r = s % 60,
            o = Math.floor(r),
            l = t,
            h = {};
            return h["min_" + e] = 10 > n ? "0" + n : n, h["min_abs_" + e] = 10 > a ? "0" + a : a, h["sec_" + e] = 10 > o ? "0" + o : o, h["sec_abs_" + e] = 10 > l ? "0" + l : l, h["hr_" + e] = 10 > i ? "0" + i : i, h
        }
    }
});
var projekktorContextmenu = function () {};
jQuery(function (t) {
    projekktorContextmenu.prototype = {
        version: "1.1.00",
        reqVer: "1.2.13",
        _dest: null,
        _items: {},
        initialize: function () {
            var e = this,
            i = this.pp.getIframeWindow() || t(window);
            this._dest = $p.utils.blockSelection(this.applyToPlayer(t("<ul/>"))), this._items.player = {
                getContextTitle: function () {
                    return e.getConfig("playerName") + " V" + e.pp.getPlayerVer()
                },
                open: function () {
                    null != e.getConfig("playerHome") && (i.get(0).location.href = e.getConfig("playerHome"), e.pp.setPause())
                }
            }, this.pp.getConfig("helpHome") && (this._items.help = {
                getContextTitle: function () {
                    return e.pp.getConfig("messages")[100]
                },
                open: function () {
                    e.popup(e.pp.getConfig("helpHome"), 400, 600)
                }
            }), this.pluginReady = !0
        },
        mousedownHandler: function (e) {
            switch (e.which) {
            case 3:
                var i = this.pp.getDC().offset(),
                s = e.pageY - i.top,
                n = e.pageX - i.left;
                n + this._dest.width() > this.pp.getDC().width() && (n = this.pp.getDC().width() - this._dest.width() - 2), s + this._dest.height() > this.pp.getDC().height() && (s = this.pp.getDC().height() - this._dest.height() - 2), this.setActive(), this._dest.css({
                    top: s + "px",
                    left: n + "px"
                });
                break;
            case 1:
                try {
                    this._items[t(e.target).data("plugin")].open()
                } catch (a) {}
            default:
                this.setInactive()
            }
        },
        mouseleaveHandler: function () {
            this.setInactive()
        },
        eventHandler: function (t, e) {
            t.indexOf("Contextmenu") > - 1 && null == this._items[e.name] && (this._items[e.name] = e)
        },
        displayReadyHandler: function () {
            var e = this,
            i = null;
            this.setInactive(), this._dest.html("");
            for (var s in this._items) {
                i = t("<span/>").data("plugin", s).html(this._items[s].getContextTitle() || s);
                try {
                    this._items[s].setContextEntry(i)
                } catch (n) {}
                t("<li/>").append(i).data("plugin", s).appendTo(this._dest)
            }
        },
        popup: function (t, e, i) {
            centeredY = window.screenY + (window.outerHeight / 2 - i / 2), centeredX = window.screenX + (window.outerWidth / 2 - e / 2), window.open(t, "projekktor", "height=" + i + ",width=" + e + ",toolbar=0,scrollbars=0,status=0,resizable=1,location=0,menuBar=0" + ",left=" + centeredX + ",top=" + centeredY).focus()
        }
    }
});
var projekktorTracking = function () {};
jQuery(function (t) {
    projekktorTracking.prototype = {
        reqVer: "1.2.31",
        version: "1.1.4",
        sessionId: null,
        pixelSeqCount: 0,
        sessionStartTime: 0,
        userStartTime: 0,
        continuousDurations: [],
        durationNet: 0,
        _trackThis: {},
        _data: {},
        _usageDuration: 0,
        _usageDurationOffset: 0,
        config: {
            permanentUuid: !1,
            respectDNT: !1,
            track: []
        },
        _getConstants: function () {
            var t = this.pp.getCanPlayNatively("*"),
            e = this.pp.getPlatforms(),
            i = this.pp.getPlatform(),
            s = new Date;
            return t = "object" != typeof t ? "" : t.join("."), e = "object" != typeof e ? "" : e.join("."), {
                uid: this.getTrackingId(),
                sid: this.sessionId,
                sst: this.sessionStartTime.getTime(),
                plyid: this.pp.getId(),
                r: (Math.random() + "").slice(2, 8),
                url: this.cleanUrl(window.location.href),
                ref: this.cleanUrl(window.location.href),
                cpl: t,
                pltfrms: e,
                pltfrm: i,
                fl: $p.platforms.FLASH(),
                res: screen.width + "x" + screen.height
            }
        },
        _getVariables: function (t) {
            var e = new Date;
            return {
                cat: this.pp.getItem().cat,
                dur: this.pp.getDuration(),
                durms: 1e3 * this.pp.getDuration(),
                err: t ? 1 : 0,
                fs: this.pp.getInFullscreen(),
                h: e.getHours(),
                m: e.getMinutes(),
                mpos: this.pp.getMaxPosition(),
                mposms: 1e3 * this.pp.getMaxPosition(),
                mf: this.pp.getMediaType().split("/")[1],
                mt: this.pp.getMediaType().split("/")[0],
                mid: this.pp.getItemId(),
                midx: this.pp.getItemIdx(),
                mod: this.pp.getModel(),
                murl: this.pp.getSource() || "",
                mcontdur: Math.max.apply(Math, this.continuousDurations || []),
                pstate: this.pp.getState(),
                pver: this.pp.getPlayerVer(),
                pos: this.pp.getPosition(),
                posms: 1e3 * this.pp.getPosition(),
                rnd: $p.utils.randomId(8),
                seq: this.pixelSeqCount,
                s: e.getSeconds(),
                sdur: e.getTime() - this.sessionStartTime.getTime(),
                udur: e.getTime() - this.userStartTime.getTime(),
                udurnet: e.getTime() - this.userStartTime.getTime(),
                title: this.pp.getItemConfig("title"),
                ts: e.getTime()
            }
        },
        initialize: function () {
            this.pluginReady = !0, this.sessionId = this._uuid(), this.pixelSeqCount = 0, this.sessionStartTime = new Date
        },
        itemHandler: function () {
            var e = this,
            i = navigator.doNotTrack || navigator.msDoNotTrack;
            t("." + this.pp.getId() + "_tracking").remove(), this._trackThis = {}, this.continuousDurations = [], this._usageDuration = 0, this._usageDurationOffset = 0, this.durationNet = 0, (this.getConfig("respectDNT") !== !0 || "yes" !== i && "1" !== i) && (this.pluginReady = !1, t.each(this.getConfig("track"), function () {
                var i = this.url || null,
                s = this.post || null,
                n = this.cat || "clip",
                a = this.callback || null;
                return null == e._trackThis[n] && (e._trackThis[n] = {}), t.each(this.events, function (t, r) {
                    null == e._trackThis[n][r] && (e._trackThis[n][r] = []), e._trackThis[n][r].push({
                        url: i,
                        post: s,
                        callback: a
                    })
                }), !0
            }), this.pluginReady = !0)
        },
        eventHandler: function (e, i, s) {
            if (!t.isEmptyObject(this._trackThis)) {
                var n = e,
                a = this;
                switch (e) {
                case "state":
                    switch (n = e + "." + i.toLowerCase(), i) {
                    case "AWAKENING":
                        this.userStartTime = new Date;
                        break;
                    case "COMPLETED":
                        this.continuousDurations.push(this._usageDuration), this.durationNet += this._usageDuration
                    }
                    break;
                case "buffering":
                    n = e + "." + i.toLowerCase();
                    break;
                case "seek":
                    isNaN(i) && (n = e + "." + i.toLowerCase(), "SEEKED" == i && (this.continuousDurations.push(this._usageDuration), this.durationNet += this._usageDuration, this._usageDurationOffset = null));
                    break;
                case "time":
                    null === this._usageDurationOffset && (this._usageDuration = 0, this._usageDurationOffset = i), n = e + "." + i, this._usageDuration = i - this._usageDurationOffset;
                    break;
                default:
                    i = ""
                }
                try {
                    t.each(this._trackThis[this.pp.getItem().cat][n], function () {
                        a._trackCall(e, this.url, this.post, this.callback)
                    })
                } catch (r) {}
            }
        },
        _trackCall: function (e, i, s, n) {
            var a = {}, r = this,
            o = !0;
            if (this.pixelSeqCount++, null != n && n(this._getConstants(), this._getVariables("error" == e), this.pp), null != i) {
                if (i = $p.utils.parseTemplate(i, t.extend({}, this._getConstants(), this._getVariables("error" == e)), !0), null == s) 
                    return t("body").append(t("<img/>").attr("src", t("<p/>").html(i).text()).addClass(this.pp.getId() + "_tracking").hide()), void 0;
                if (t.each(s, function (i, s) {
                    try {
                        a[i] = $p.utils.parseTemplate(s, t.extend({}, r._getConstants(), r._getVariables("error" == e)), !0)
                    } catch (n) {
                        a[i] = s
                    }
                }), window.XDomainRequest) {
                    var l = new XDomainRequest;
                    return l.open("POST", i, !0), l.onprogress = function () {}, l.onerror = function () {}, l.send(t.param(a)), void 0
                }
                var h = {
                    url: i,
                    type: "POST",
                    data: a,
                    error: function () {},
                    success: function () {},
                    cache: !1,
                    async: !0,
                    crossDomain: !0
                };
                h.xhrFields = {
                    withCredentials: !0
                }, h.beforeSend = function (t) {
                    t.withCredentials = !0
                }, t.support.cors = !0, t.ajax(h)
            }
        },
        cleanUrl: function (t) {
            return window.encodeURIComponent(t.replace(RegExp("#.*"), ""))
        },
        getTrackingId: function () {
            var t = "prkusruuid",
            e = null;
            return this.getConfig("permanentUuid") === !1 ? (this.cookie(t, "anonymous"), this._uuid()) : (e = this.cookie(t), (null == e || "anonymous" == e) && (e = this._uuid(), this.cookie(t, e)), e)
        },
        _uuid: function () {
            var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
            var e = Array(36),
            i = 0,
            s;
            for (var n = 0; 36 > n; n++) 
                8 == n || 13 == n || 18 == n || 23 == n ? e[n] = "-" : 14 == n ? e[n] = "4" : (2 >= i && (i = 0 | 33554432 + 16777216 * Math.random()), s = 15 & i, i >>= 4, e[n] = t[19 == n ? 8 | 3 & s : s]);
            return e.join("")
        }
    }
});
var projekktorAudioslideshow = function () {};
jQuery(function (t) {
    projekktorAudioslideshow.prototype = {
        pluginReady: !1,
        version: "1.0.05",
        reqVer: "1.2.31",
        config: {
            id: !1,
            images: []
        },
        _delayTimer: null,
        _maxSecond: 0,
        _conveyor: t(),
        _canvas: t(),
        _next: t(),
        _prev: t(),
        _title: t(),
        _lastImage: 0,
        _images: [],
        _belt: null,
        initialize: function () {
            var e = this;
            t.each(t("[" + this.getDA("host") + "='" + (this.getConfig("id") || this.pp.getId()) + "']"), function () {
                var i = t(this).attr(e.getDA("func"));
                i && (e["_" + i] = e["_" + i].add(t(this)))
            }), this._conveyorNullPos = this._conveyor.width() / 2, this._prev.click(function () {
                null != e._images[e._lastImage - 1] && e.pp.setPlayhead($p.utils.toSeconds(e._images[e._lastImage - 1].attr("rel")))
            }), this._next.click(function () {
                null != e._images[e._lastImage + 1] && e.pp.setPlayhead($p.utils.toSeconds(e._images[e._lastImage + 1].attr("rel")))
            }), this._belt = t("<div/>").css("left", this._conveyorNullPos + "px").addClass(this.getCN("sliderbelt")).appendTo(this._conveyor), this.pluginReady = !0
        },
        resizeHandler: function () {
            var e = this,
            i = 0;
            this._conveyorNullPos = this._conveyor.width() / 2, t.each(this._images, function (s) {
                return s == e._lastImage ? !1 : (i += t(this).outerWidth(), !0)
            }), this._belt.stop(!0, !0).css({
                left: e.pp.getState("IDLE") ? this._conveyorNullPos + "px" : this._conveyorNullPos - i - this._images[this._lastImage].outerWidth() / 2 + "px"
            }), $p.utils.stretch("aspectratio", this._canvas.find("img"), this._canvas.outerWidth(), this._canvas.height())
        },
        itemHandler: function (e) {
            this.pluginReady = !1, this.pp.removeCuePoints("*", "audioslideshow");
            var i = this,
            s = 0,
            n = 0,
            a = this.getConfig("images").length,
            r = t.extend(!0, [], this.getConfig("images"));
            return this._images = [], this._lastImage = null, this._belt.html(""), this.setActive(this._prev, !1), this.setActive(this._next, !1), this.resetConveyor(), 0 === this._canvas.length && (this._canvas = this.pp.getMediaContainer()), this._canvas.find("." + this.pp.getNS() + "audioimage").remove(), 0 === r.length ? (this.pluginReady = !0, void 0) : (t.each(r, function (e, r) {
                var o = t("<img/>").load(function () {
                    i.stretch("aspectratio", t(this), t(this).outerWidth(), i._belt.innerHeight()), n++, s += t(this).outerWidth(), n >= a && i._setBelt(s)
                }).attr({
                    src: this.src_pre,
                    alt: this.alt || this.title,
                    title: this.title,
                    rel: r.on
                }).data("full", this.src).addClass("inactive").click(function () {
                    return t(this).hasClass("inactive") ? (i.pp.getState("IDLE") && i.pp.setPlay(), void 0) : (i.pp.setPlayhead($p.utils.toSeconds(r.on)), void 0)
                });
                i._images.push(o), i._belt.append(o), s += o.outerWidth()
            }), void 0)
        },
        _setBelt: function (e) {
            if (0 === this._images.length) 
                return this.pluginReady = !0, void 0;
            var i = this,
            s = this.pp.getItemIdx();
            this._belt.css("width", e + this._conveyorNullPos + "px"), t.each(this._images, function (t, e) {
                try {
                    i.pp.setCuePoint({
                        item: s,
                        group: "audioslideshow",
                        on: this.attr("rel"),
                        off: i._images[t + 1] ? i._images[t + 1].attr("rel") : "99:00:00",
                        value: {
                            idx: t,
                            tite: this.attr("alt")
                        },
                        title: this.attr("alt"),
                        precision: .1,
                        unlockCallback: function (t) {
                            i._images[t.value.idx].addClass("active").removeClass("inactive")
                        },
                        callback: function (t) {
                            t.enabled === !0 && i.makeImageCurrent(t.value.idx)
                        }
                    })
                } catch (n) {}
            }), this.pluginReady = !0
        },
        stateHandler: function (t) {
            0 !== this._images.length && "AWAKENING" == t && (this.resetConveyor(), this.setActive(this._prev, !1), this.setActive(this._next, !0))
        },
        seekHandler: function (t) {
            0 !== this._images.length && "SEEKED" == t && this.pp.getPosition() < $p.utils.toSeconds(this._images[0].attr("rel")) && this.resetConveyor()
        },
        makeImageCurrent: function (t) {
            if (null != t && this._lastImage != t && null != this._images[t]) {
                var e = this;
                this._images[t].removeClass("inactive").addClass("active"), this.setActive(this._prev, t > 0), this.setActive(this._next, this._images.length - 1 > t), this._lastImage = t, clearTimeout(this._delayTimer), this._delayTimer = setTimeout(function () {
                    e.slideTo(t)
                }, 225)
            }
        },
        slideTo: function (e) {
            if (!(e > this._images.length - 1)) {
                var i = this,
                s = 0,
                n = this._canvas.find("img"),
                a = t("<img/>"),
                r = t("<img/>");
                t.each(this._images, function (i) {
                    return i == e ? !1 : (s += t(this).outerWidth(), !0)
                }), t("." + this.pp.getNS() + "sliderbelt img.current").removeClass("current"), this._belt.stop(!0, !1).animate({
                    left: this._conveyorNullPos - s - this._images[e].outerWidth() / 2
                }, {
                    duration: 150,
                    complete: function () {
                        i._images[e].addClass("current")
                    }
                }), this.pp.getMediaType().indexOf("video") > - 1 && this._canvas == this.pp.getMediaContainer() || (this._canvas.attr("rel") != e || 0 === e) && (this._canvas.attr("rel", e).append(r), r.hide().load(function () {
                    $p.utils.stretch("aspectratio", t(this), i._canvas.outerWidth(), i._canvas.height()), t(this).fadeIn(850, function () {
                        n.fadeOut(400, function () {
                            t(this).remove()
                        })
                    })
                }).addClass(this.pp.getNS() + "audioimage").attr({
                    src: this._images[e].data("full"),
                    alt: this._images[e].attr("alt") || "",
                    title: this._images[e].attr("title") || ""
                }).css({
                    position: "absolute"
                })), this._title.html(this._images[e].attr("title"))
            }
        },
        resetConveyor: function () {
            this._belt.stop(0, 0).animate({
                left: this._conveyorNullPos
            }, {
                duration: 150
            })
        },
        stretch: function (t, e, i, s) {
            null == e.data("od") && e.data("od", {
                width: e.width(),
                height: e.height()
            });
            var n = e.data("od").width,
            a = e.data("od").height,
            r = i / n,
            o = s / a,
            l = i,
            h = s;
            r > o ? (l = n * o, h = a * o) : o > r && (l = n * r, h = a * r), e.css({
                margin: 0,
                padding: 0,
                width: l + "px",
                height: h + "px",
                left: l / 2 + "px",
                top: h / 2 + "px"
            })
        }
    }
});
var projekktorVastdemo = function () {};
jQuery(function (t) {
    projekktorVastdemo.prototype = {
        reqVer: "1.2.08",
        pluginReady: !1,
        data: {},
        _maxElapsed: 0,
        _enableTracking: !1,
        _compContainers: [],
        _impressionTrack: [],
        _adBlocked: !1,
        _wrappedData: [],
        config: {
            withCredentials: !1,
            //!
            enableCompanions: !0,
            enableOverlay: !0,
            enablePreroll: !0,
            enablePostroll: !1,
            postrollCat: "post-roll",
            prerollCat: "pre-roll",
            prerollSkip: 0,
            prerollPauseOnClick: !0,
            prerollSkipHtml: "Skip this ad in %{secs}",
            prerollUnlockedHtml: "Click here to skip this ad.",
            prerollCappingLimit: 0,
            prerollCappingPeriod: 1,
            vastProxy: "",
            vastNoCache: !1,
            overlayDelay: 1,
            companionDest: ["companiona", "companionb", "companionc"],
            resourcePriority: ["image", "javascript", "iframe", "html", "flash"],
            selectByDimensions: !0,
            adblockCallback: function () {},
            title: "advertisement"
        },
        initialize: function () {
            var e = null,
            i = t("<div/>").addClass(this.getCN("adoverlay")),
            s = this;
            this._detect_ab(function (t) {
                1 == t && (s.pluginReady = !0, s._adBlocked = !0, s.getConfig("adblockCallback")(s.pp))
            }), this.pluginReady = !0
        },
        loadVAST: function (e) {
            var i = this,
            s = null;
            return this._maxElapsed = 0, this._enableTracking = !0, this._wrappedData = [], t(".imatrackingpixel").remove(), this.pp.getIsMobileClient() === !0 && this.getConfig("type", "application/xml").indexOf("jsonp") > - 1 ? (this.pluginReady = !0, void 0) : (t.each(this.getConfig("companionDest"), function (e, n) {
                s = t("#" + n), i._compContainers.push({
                    obj: s,
                    width: s.width(),
                    height: s.height(),
                    initHtml: s.html()
                })
            }), this.getConfig("url") && void 0 == this.data[this.pp.getItem().ID] && this.requestVAST(this.getConfig("url"), this.getConfig("type"), !this.pp.getIsMobileClient()), void 0)
        },
        requestVAST: function (e, i, s) {
            var n = null,
            a = s || !1,
            r = this,
            o = i.indexOf("/") > - 1 ? i.split("/")[1] : i;
            if ("" != this.getConfig("vastProxy") && (e = this.getConfig("vastProxy") + escape(e)), o.indexOf("json") > - 1) {
                if (void 0 == t.parseJSON) 
                    return this.pp._raiseError("Projekktor requires at least jQuery 1.4.2 in order to handle JSON playlists."), !1;
                "jsonp" == o && (window.jsonp_callback = function (t) {
                    try {
                        delete window[callback]
                    } catch (e) {
                        $p.utils.log(e)
                    }
                    r.jsonp_callback(t)
                })
            }
            if (window.XDomainRequest && "jsonp" !== o) {
                var l = new XDomainRequest;
                l.open("get", e), l.onload = function () {
                    try {
                        r.VASTParser($p.utils.cleanResponse(l.responseText, o))
                    } catch (t) {
                        $p.utils.log(t)
                    }
                }, l.onprogress = function () {}, l.ontimeout = function () {}, l.onerror = function () {
                    r.VASTParser(!1)
                }, setTimeout(function () {
                    l.send()
                }, 2e3)
            } else {
                var h = {
                    url: e,
                    complete: function (t, e) {
                        if ("error" != e && "jsonp" != o) 
                            try {
                                r.VASTParser($p.utils.cleanResponse(t.responseText, o))
                        } catch (i) {
                            $p.utils.log(i)
                        }
                    },
                    error: function (t, e, i) {
                        "jsonp" != o && r.VASTParser(!1)
                    },
                    cache: !0,
                    async: a,
                    dataType: o,
                    beforeSend: function (t) {
                        t.withCredentials = r.getConfig("withCredentials")
                    },
                    crossDomain: !0,
                    jsonpCallback: "jsonp_callback",
                    jsonp: "callback"
                };
                t.support.cors = !0, t.ajax(h)
            }
        },
        jsonp_callback: function (t) {
            try {
                var e = t.contents.replace(/^\s*([\S\s]*)\b\s*$/, "$1");
                window.DOMParser ? (t = new DOMParser, t = t.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)), this.VASTParser(t)
            } catch (i) {
                this.VASTParser(!1)
            }
        },
        VASTParser: function (e) {
            var i = [],
            s = !1,
            n = "";
            return e === !1 ? (this._itemReady(), void 0) : (t(e).find("Wrapper").each(function () {
                t(e).find("VASTAdTagURI").each(function () {
                    s = !0, n = t.trim(t(this).text())
                })
            }), i = this.VASTBodyParser(e), i = this.deepExtend(i, this._wrappedData), s && "" != n ? (this._wrappedData = i, this.requestVAST(n, this.getConfig("type"), !1), void 0) : (this._wrappedData = {}, this._itemReady(i), void 0))
        },
        deepExtend: function (t, e) {
            for (var i in e) 
                e[i] && e[i].constructor && e[i].constructor === Object ? (t[i] = t[i] || {}, arguments.callee(t[i], e[i])) : t[i] = e[i];
            return t
        },
        VASTBodyParser: function (e) {
            var i = [],
            s = this,
            n = 1,
            a = {
                config: {
                    disallowSkip: !0,
                    className: "ad",
                    cat: this.getConfig("enablePostroll") ? this.getConfig("postrollCat") : this.getConfig("prerollCat"),
                    plugin_controlbar: {
                        title: this.getConfig("title"),
                        disableFade: !0,
                        showOnStart: !0
                    },
                    plugin_display: {
                        staticControls: !1,
                        displayClick: {
                            callback: null,
                            value: null
                        },
                        displayPlayingClick: {
                            callback: null,
                            value: null
                        },
                        displayDblClick: {
                            callback: null,
                            value: null
                        }
                    },
                    plugin_ima: {
                        title: this.getConfig("title"),
                        prerollPauseOnClick: this.getConfig("prerollPauseOnClick"),
                        prerollSkip: this.getConfig("prerollSkip"),
                        prerollSkipHtml: this.getConfig("prerollSkipHtml"),
                        prerollUnlockedHtml: this.getConfig("prerollUnlockedHtml")
                    },
                    vast: {
                        tracking: {}
                    }
                }
            };
            switch (t(e).find("VAST").each(function () {
                n = 2
            }), n) {
            case 2:
                t(e).find("Creatives").each(function () {
                    try {
                        i.linear = s._VTwo_grabLinearAds(t(this), a), i.nonlinear = s._VTwo_grabNonLinear(t(this), "NonLinear", s.getConfig("overlaySize")), i.companion = [];
                        for (var e = 0; s._compContainers.length > e; e++) 
                            i.companion.push({
                                dest: s._compContainers[e],
                                data: s._VTwo_grabNonLinear(t(this), "Companion", s._compContainers[e])
                            })
                    } catch (n) {
                        $p.utils.log(n)
                    }
                }), t(e).find("Impression").each(function () {
                    s._impressionTrack.push(t.trim(t(this).text()))
                });
                break;
            case 1:
                i.linear = s._VOne_grabLinearAds(t(e), a), i.companion = [];
                for (var r = 0; s._compContainers.length > r; r++) 
                    i.companion.push({
                        dest: s._compContainers[r],
                        data: s._VOne_grabCompanions(t(e), s._compContainers[r])
                    });
                t(e).find("Impression").each(function () {
                    t(this).find("URL").each(function () {
                        s._impressionTrack.push(t.trim(t(this).text()))
                    })
                })
            }
            return i
        },
        _VTwo_grabLinearAds: function (e, i) {
            var s = 0,
            n = this;
            return e.find("Linear").each(function () {
                s = 0, t(this).find("Tracking").each(function () {
                    var e = t(this).attr("event").toLowerCase();
                    null == i.config.vast.tracking[e] && (i.config.vast.tracking[e] = {});
                    var s = t.trim(t(this).text());
                    "" != s && (i.config.vast.tracking[e][$p.utils.randomId(8)] = s)
                }), t(this).find("MediaFiles").find("MediaFile").each(function () {
                    t(this).each(function () {
                        return "PROGRESSIVE" == t(this).attr("delivery").toUpperCase() ? n.pp.getCanPlay(t(this).attr("type").toLowerCase()) ? (i[s++] = {
                            type: t(this).attr("type").toLowerCase(),
                            src: t.trim(t(this).text())
                        }, void 0) : !0 : void 0
                    })
                })
            }), i
        },
        _VOne_grabLinearAds: function (e, i) {
            var s = this;
            e.find("Tracking").each(function () {
                var e = t(this).attr("event").toLowerCase();
                null == i.config.vast.tracking[e] && (i.config.vast.tracking[e] = []), t(this).find("URL").each(function () {
                    var s = t.trim(t(this).text());
                    "" != s && (i.config.vast.tracking[e][$p.utils.randomId(8)] = s)
                })
            });
            var n = 0,
            a = "na/na";
            return t(e).find("Video").each(function () {
                t(this).find("MediaFiles").find("MediaFile").each(function () {
                    t(this).each(function () {
                        return "PROGRESSIVE" == t(this).attr("delivery").toUpperCase() ? null == t(this).attr("type") || s.pp.getCanPlay(t(this).attr("type")) ? (t(this).find("URL").each(function () {
                            return null == t(this).attr("type") || s.pp.getCanPlay(t(this).attr("type")) ? (i[n++] = {
                                type: t(this).attr("type"),
                                src: t.trim(t(this).text())
                            }, void 0) : !0
                        }), void 0) : !0 : void 0
                    })
                })
            }), i
        },
        _VTwo_grabNonLinear: function (e, i, s) {
            var n = this,
            a = {
                config: {
                    vast: {
                        tracking: {}
                    }
                }
            }, r = {}, o = [],
            l = {};
            e.find(i + "Ads").each(function () {
                t(this).find(i).each(function () {
                    var e = t(this);
                    t(this).each(function () {
                        t(this).find("StaticResource").each(function () {
                            var i = null;
                            if (t(this).attr("creativeType").indexOf("shockwave") > - 1) {
                                if (0 >= n.pp.getFlashVersion()) 
                                    return;
                                if (n._adTypes("flash") === !1) 
                                    return;
                                i = "flash"
                            }
                            if (t(this).attr("creativeType").indexOf("image") > - 1) {
                                if (n._adTypes("image") === !1) 
                                    return;
                                i = "image"
                            }
                            if (t(this).attr("creativeType").indexOf("javascript") > - 1) {
                                if (n._adTypes("javascript") === !1) 
                                    return;
                                i = "javascript"
                            }
                            null != i && (r = {
                                src: t(this).text(),
                                type: i,
                                width: e.attr("width"),
                                height: e.attr("height"),
                                level: n._getLevel(i),
                                tracking: {}
                            }, o.push(r))
                        }), t(this).find("HTMLResource").each(function () {
                            n._adTypes("html") !== !1 && (r = {
                                src: t(this).text(),
                                type: "html",
                                width: e.attr("width"),
                                height: e.attr("height"),
                                level: n._getLevel("html"),
                                tracking: {}
                            }, o.push(r))
                        }), t(this).find("IFrameResource").each(function () {
                            n._adTypes("iframe") !== !1 && (r = {
                                src: t(this).text(),
                                type: "iframe",
                                width: e.attr("width"),
                                height: e.attr("height"),
                                level: n._getLevel("iframe"),
                                tracking: {}
                            }, o.push(r))
                        })
                    }), t(this).find("Tracking").each(function () {
                        null == r.tracking[t(this).attr("event")] && (r.tracking[t(this).attr("event")] = {});
                        var e = t.trim(t(this).text());
                        "" != e && (r.tracking[t(this).attr("event")][$p.utils.randomId(8)] = e)
                    })
                })
            });
            var h = null,
            c = {
                config: {
                    vast: {
                        tracking: {}
                    }
                }
            };
            if (o.sort(function (t, e) {
                return t.level - e.level
            }), "NonLinear" == i) 
                h = 0;
            else if (this.getConfig("selectByDimensions") === !0)
                for (var u = 0; o.length > u; u++) 
                    o[u].width == s.width && o[u].height == s.height && (h = u);
            return c.config.vast = o[h] || null, c
        },
        _VOne_grabCompanions: function (e, i) {
            var s = this,
            n = {
                config: {
                    vast: {
                        tracking: {}
                    }
                }
            }, a = {}, r = [],
            o = {};
            e.find("CompanionAds").each(function () {
                t(this).find("Companion").each(function () {
                    var e = null,
                    i = null;
                    if (t(this).attr("creativeType").indexOf("shockwave") > - 1) {
                        if (s._adTypes("flash") === !1) 
                            return;
                        if (0 >= s.pp.getFlashVersion()) 
                            return;
                        e = "flash"
                    }
                    if (t(this).attr("creativeType").indexOf("image") > - 1) {
                        if (s._adTypes("image") === !1) 
                            return;
                        e = "image"
                    }
                    null != e && (t(this).children("URL").each(function () {
                        i = t.trim(t(this).text())
                    }), null != i && (a = {
                        src: i,
                        type: e,
                        width: t(this).attr("width"),
                        height: t(this).attr("height")
                    }, r.push(a)))
                })
            });
            var l = null,
            h = {
                config: {
                    vast: {
                        tracking: {}
                    }
                }
            };
            if (r.sort(function (t, e) {
                return t.level - e.level
            }), this.getConfig("selectByDimensions") === !0)
                for (var c = 0; r.length > c; c++) 
                    r[c].width == i.width && r[c].height == i.height && (l = c);
            return null != l ? (h.config.vast = r[l], h) : null
        },
        timeHandler: function (t) {
            this._handleOverlay(t)
        },
        itemHandler: function (e) {
            this.pp.getDC().find("." + this.getCN("adskip")).remove(), this.pp.getDC().find("." + this.getCN("adtitle")).remove(), this.pp.getDC().find("." + this.getCN("clickthrough")).remove();
            try {
                this.overlay.remove()
            } catch (i) {
                $p.utils.log(i)
            }
            t(".imatrackingpixel").remove()
        },
        errorHandler: function () {},
        stateHandler: function (e) {
            switch (e) {
            case "AWAKENING":
                try {
                    null == this.pp.getItem().config.vast && null == this.data[this.pp.getItem().ID] && null != this.getConfig("url") && 0 == this._adBlocked ? (this.pluginReady = !1, this.loadVAST()) : this.pluginReady = !0
                } catch (i) {
                    $p.utils.log(i)
                }
                break;
            case "STARTING":
                if ("ad" != this.pp.getItem().config.className) 
                    return;
                this.getConfig("enablePreroll") && this.getConfig("prerollSkip") && this._handleSkipOption(), "" != this.getConfig("title") && this.applyToPlayer(t("<div/>").addClass("adtitle").html(this.getConfig("title")), "title", !0)
            }
        },
        leftclickHandler: function (t) {},
        _setCompanions: function (e) {
            var i = this,
            s = this.pp.getItem(e).ID,
            n = this.data[s],
            a = !1;
            if (null != n && null != n.companion) {
                t.each(this._compContainers, function () {
                    this.obj.html(this.initHtml), this.obj.click(function () {
                        return !1
                    })
                });
                for (var r = 0; n.companion.length > r; r++) 
                    try {
                        if (cfg = n.companion[r].data.config.vast, null == cfg) 
                            continue;
                            switch (dest = n.companion[r].dest, url = "", cfg.type) {
                            case "image":
                                dest.obj.html(""), t("<img/>").attr("src", cfg.src).attr("width", cfg.width).attr("height", cfg.height).appendTo(dest.obj);
                                break;
                            case "flash":
                                dest.obj.html(""), dest.obj.html($p.utils.embeddFlash(null, {
                                    src: cfg.src,
                                    width: "100%",
                                    height: "100%",
                                    allowScriptAccess: "always",
                                    allowFullScreen: "true",
                                    allowNetworking: "all",
                                    wmode: "transparent"
                                }));
                                break;
                            case "iframe":
                                dest.obj.html(""), t("<iframe/>").attr("src", cfg.src).attr("width", cfg.width).attr("height", cfg.height).attr("frameborder", 0).attr("allowtransparency", "true").attr("scrolling", "no").attr("marginwidth", 0).attr("marginheight", 0).attr("vspace", 0).attr("hspace", 0).appendTo(dest.obj);
                                break;
                            default:
                                dest.obj.html(cfg.src)
                            }
                            dest.obj.data("url", url).click(function () {
                                window.open(t(this).data("url"))
                            }), a = !0
                        } catch (o) {
                    $p.utils.log(o)
                }
                return a
            }
        },
        _setOverlay: function (e) {
            var i = this.pp.getItem(e).ID,
            s = this.data[i].nonlinear.config.vast;
            ref = this;
            try {
                this.overlay.remove()
            } catch (n) {
                $p.utils.log(n)
            }
            if (this.overlay = null, s) {
                this.overlay = this.applyToPlayer(t("<div/>").addClass("adoverlay"), "overlay");
                var a = t("<div/>").appendTo(this.overlay).addClass(this.getCN("adoverlaywrapper"));
                t("<div/>").addClass(this.getCN("adclose")).appendTo(a).click(function () {
                    ref._handleOverlayClose()
                });
                var r = t("<div/>").addClass(this.getCN("adcontent")).css({
                    width: s.width + "px",
                    height: s.height + "px"
                }).appendTo(a).click(function () {
                    ref.pp.setPause(), ref._handleOverlayClick()
                });
                switch (s.type) {
                case "image":
                    r.css({
                        background: "url('" + s.src + "') transparent center center no-repeat"
                    });
                    break;
                case "flash":
                    r.html($p.utils.embeddFlash(null, {
                        src: s.src,
                        width: s.width + "px",
                        height: s.height + "px",
                        allowScriptAccess: "always",
                        allowFullScreen: "true",
                        allowNetworking: "all",
                        wmode: "transparent"
                    }));
                    break;
                case "javascript":
                    r.append(t("<iframe/>").attr({
                        frameborder: 0,
                        marginwidth: 0,
                        marginheight: 0,
                        allowtransparency: !0,
                        hspace: 0,
                        vspace: 0,
                        scrolling: "no",
                        width: s.width + "px",
                        height: s.height + "px",
                        src: ""
                    }).bind("load", function () {
                        if (this.contentWindow) {
                            var t = document.createElement("script");
                            t.type = "text/javascript", t.innerHTML = 'document.writeln("<span/>");var script = document.createElement("script");script.src = "' + s.src + '";document.getElementsByTagName("body")[0].appendChild(script);', this.contentWindow.document.getElementsByTagName("body")[0].appendChild(t)
                        }
                    }));
                    break;
                default:
                    r.html(s.src)
                }
            }
        },
        _handleOverlay: function (t) {
            if (void 0 != this.overlay && null != this.overlay) {
                var e = this.pp.getDuration();
                ref = this, t >= this.getConfig("overlayDelay") && this.overlay.hasClass("inactive") && this.overlay.addClass("active").removeClass("inactive")
            }
        },
        _handleOverlayClick: function () {
            var t = this.pp.getItem(),
            e = this.data[t.ID].nonlinear.config.vast,
            i = null;
            try {
                window.open(i)
            } catch (s) {
                $p.utils.log(s)
            }
        },
        _handleOverlayClose: function () {
            this.overlay.remove(), this.overlay = null
        },
        _itemReady: function (t) {
            if ("object" != typeof t) 
                return this.pluginReady = !0, void 0;
            this.data[this.pp.getItem().ID] = t;
            var e = this;
            try {
                this.getConfig("enableOverlay") && this._setOverlay(this.pp.getItemIdx())
            } catch (i) {
                $p.utils.log(i)
            }
            try {
                this.getConfig("enableCompanions") && this._setCompanions(this.pp.getItemIdx())
            } catch (i) {
                $p.utils.log(i)
            }
            try {
                this.getConfig("enablePreroll") && !this.getConfig("enablePostroll") ? this._setPreroll(this.pp.getItemIdx()) : this.getConfig("enablePostroll") && this._setPostroll(this.pp.getItemIdx())
            } catch (i) {
                $p.utils.log(i)
            }
            this.pluginReady = !0
        },
        _setPreroll: function (t) {
            if (t !== !1) {
                var e = this.pp.getItem(t).ID;
                null != this.data[e] && 1 != this.data[e]._ACTIVE && null != this.data[e].linear && null != this.data[e].linear.config && null != this.data[e].linear[0] && (this._prerollCappingActive() || (this._prerollCappingCount(), this.data[e]._ACTIVE = !0, this.pp.setItem(this.data[e].linear, t)))
            }
        },
        _setPostroll: function () {
            var t = this.pp.getItem(this.pp.getItemIdx()).ID,
            e = this.pp.getPlaylist().length;
            null != this.data[t] && 1 != this.data[t]._ACTIVE && null != this.data[t].linear && null != this.data[t].linear.config && null != this.data[t].linear[0] && (this.data[t]._ACTIVE = !0, this.pp.setItem(this.data[t].linear, e))
        },
        _prerollCappingActive: function () {
            return null == this.cookie("capping") ? !1 : this.cookie("capping") >= this.getConfig("prerollCappingLimit") && this.getConfig("prerollCappingLimit") > 0 ? !0 : !1
        },
        _prerollCappingCount: function () {
            var t = null != this.cookie("capping") ? parseInt(this.cookie("capping")) + 1 : 1;
            this.getConfig("prerollCappingLimit") > 0 && this.getConfig("prerollCappingLimit") >= t && this.cookie("capping", t, this.getConfig("prerollCappingPeriod"))
        },
        _handleSkipOption: function () {
            var e = this.getConfig("prerollSkip") || 0,
            i = this;
            if (0 != e) {
                var s = this.applyToPlayer(t("<div/>").addClass("adskip").addClass("locked").css("zIndex", 1e3).click(function () {
                    i.pp.setActiveItem("next")
                }), "skip");
                var n = function () {
                    var t = i.pp.getMaxPosition(),
                    n = e - Math.ceil(t) + 1;
                    s.html($p.utils.parseTemplate(i.getConfig("prerollSkipHtml"), {
                        secs: n
                    })), e / 2 >= n && s.addClass("active").removeClass("inactive"), e > t && e > 0 || (i.pp.setConfig({
                        disallowSkip: !1
                    }, 0), i.pp.removeListener("time", arguments.callee), s.removeClass("locked").addClass("unlocked").html(i.getConfig("prerollUnlockedHtml")))
                };
                this.pp.addListener("time", n)
            }
        },
        _detect_ab: function (e) {
            var i = $p.utils.randomId(8);
            img = t(document.createElement("IMG")).attr({
                src: "advertisement.jpg",
                id: "img" + i
            }).css({
                display: "block",
                border: "5px solid red",
                width: "1px",
                height: "1px",
                position: "absolute",
                top: "-10px",
                left: "-10px"
            }), img.ready(function () {
                setTimeout(function () {
                    if (0 != t("#img" + i + ":visible").length) 
                        try {
                            e(!1)
                    } catch (s) {
                        $p.utils.log(s)
                    } else 
                        try {
                            e(!0)
                    } catch (s) {
                        $p.utils.log(s)
                    }
                }, 500)
            }), img.appendTo(t("body"))
        },
        _getLevel: function (t) {
            return this._adTypes(t)
        },
        _adTypes: function (t) {
            var e = this.getConfig("resourcePriority");
            for (var i in e)
                if (e[i] == t) 
                    return i;
            return !1
        },
        _isAd: function () {
            return this.pp.getDC().hasClass("ad") || !1
        }
    }
});
Normalize = function() {};

Normalize.init = function()
{
    //TODO 
}

Normalize.touchEvent = function(event) 
{
    if (event.pageX == null && original.clientX != null) 
    {
        event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
        event.pageY = original.clientY + ( doc && doc.scrollTop || body && body.scrollTop || 0 ) - ( doc && doc.clientTop || body && body.clientTop || 0 );
    }
};

Normalize.transform = function(dom, transform)
{
    if (dom) 
    {
        dom.style.transform = transform;
        dom.style.webkitTransform = transform;
        dom.style.mozTransform = transform;

    }
};

Normalize.transformOrigin = function(dom, origin)
{
    if (dom) 
    {
        dom.style.transformOrigin = origin;
        dom.style.webkitTransformOrigin = origin;
        dom.style.mozTransformOrigin = origin;
    }
};

Normalize.transition = function(dom, transition)
{
    if (dom) {
        dom.style.transition = transition;
        dom.style.webkitTransition = transition;
        dom.style.mozTransition = transition;
    }
};
var About, Carousel, Category, Contact, Directors, DragCarousel, Fitin, Gallery, Home, Loader, Main, Maps, Menu, NewsletterForm, Projects, Router, Scroll, Search, SearchForm, Transitions, W, WandaMenu, main,
__bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments);
    };
};

W = (function() {
    function W() {}

    W.ww = $(window).width();

    W.wh = $(window).height();

    W.scrollTop = {
        real: 0,
        calc: 0
    };

    W.isTablet = function() {
        if (navigator.userAgent.toLowerCase().match('android|iphone|ipad')) {
            return true;
        } else {
            return false;
        }
    };

    return W;

})();

DragCarousel = (function() {
    DragCarousel.NOMOVE = 'nomove';

    function DragCarousel(options) {
        this._onTouchEnd = __bind(this._onTouchEnd, this);
        this._onTouchMove = __bind(this._onTouchMove, this);
        this._onTouchStart = __bind(this._onTouchStart, this);
        this._initEvents = __bind(this._initEvents, this);
        this.container = options.container;
        this.slides = this.container.children();
        this.slider = {
            initX: 0,
            startX: 0,
            posX: 0,
            x: 0,
            initY: 0,
            dragging: void 0,
            diff: 0,
            prevX: 0
        };
        this.resize();
        this._initEvents();
    }

    DragCarousel.prototype._initEvents = function() {
        return this.container.on('touchstart', this._onTouchStart);
    };

    DragCarousel.prototype._onTouchStart = function(event) {
        var e;
        e = event.type === 'touchstart' ? event.originalEvent.touches[0] : event;
        this.slider.initX = e.pageX;
        this.slider.initY = e.pageY;
        this.slider.startX = this.slider.x;
        $('body').on('touchmove', this._onTouchMove).on('touchend', this._onTouchEnd);
        return this.target = e.target;
    };

    DragCarousel.prototype._onTouchMove = function(event) {
        var e, posX, posY;
        e = event.type === 'touchmove' ? event.originalEvent.touches[0] : event;
        posX = e.pageX - this.slider.initX;
        posY = e.pageY - this.slider.initY;
        if (this.slider.dragging === void 0) {
            if (Math.abs(posY) > 10 && Math.abs(posX) < 1) {
                return this.slider.dragging = false;
            } else if (Math.abs(posX) > 10 && Math.abs(posY) < 10) {
                return this.slider.dragging = true;
            }
        } else if (this.slider.dragging === true) {
            this.slider.prev = this.slider.posX;
            this.slider.posX = this.slider.startX - posX;
            this.slider.diff = this.slider.prev - this.slider.posX;
            return event.preventDefault();
        }
    };

    DragCarousel.prototype._onTouchEnd = function(event) {
        var cran, sign;
        $('body').off('touchmove', this._onTouchMove).off('touchend', this._onTouchEnd);
        if (this.slider.dragging) {
            this.slider.posX = ((this.slider.posX - this.slider.diff * 7) / W.ww) * W.ww;
            sign = this.slider.posX - this.slider.x < 0 ? - 1 : 1;
            cran = ~~(this.slider.posX / W.ww);
            if (Math.abs(this.slider.posX % W.ww) > W.ww * 0.5) {
                cran = cran + sign * 1;
            }
            this.slider.posX = cran * W.ww;
        } else if (this.slider.dragging === void 0) {
            $(this).trigger(DragCarousel.NOMOVE);
        }
        return this.slider.dragging = void 0;
    };

    DragCarousel.prototype.resize = function() {
        this.sliderWidth = this.slides.length * W.ww;
        this.container.css({
            'width': this.sliderWidth
        });
        return this.slides.css({
            'width': W.ww
        });
    };

    DragCarousel.prototype.update = function() {
        if (this.slider.posX < 0) {
            this.slider.posX = 0;
        } else if (this.slider.posX > this.sliderWidth - W.ww) {
            this.slider.posX = this.sliderWidth - W.ww;
        }
        this.slider.x += (this.slider.posX - this.slider.x) * 0.5;
        return Normalize.transform(this.container[0], 'translate3d(' + - this.slider.x + 'px, 0, 0)');
    };

    DragCarousel.prototype.destroy = function() {
        $('body').off('touchstart', this._onTouchStart);
        return Normalize.transform(this.container[0], 'translate3d(0, 0, 0)');
    };

    return DragCarousel;

})();

Loader = (function() {
    function Loader(options) {
        this.pics = options.pics, this.loadback = options.loadback;
        this.loadIt(0);
    }

    Loader.prototype.loadIt = function(index) {
        var img, item, klass, self, src;
        self = this;
        item = this.pics.eq(index);
        if (item.length) {
            img = new Image();
            klass = item.attr('class').replace('img', '');
            src = item.attr('data-src');
            img.src = src;
            img.onload = function() {
                var pic;
                pic = $("<img src='" + src + "' class='" + klass + "' style='opacity:0'/>");
                item.replaceWith(pic);
                self.loadIt(index + 1);
                return setTimeout(function() {
                    pic.css('opacity', 1);
                    if (typeof self.loadback === 'function') {
                        return self.loadback(pic);
                    }
                }, 10);
            };
            return img.onerror = function() {
                self.loadIt(index + 1);
                if (typeof self.loadback === 'function') {
                    return self.loadback(item);
                }
            };
        }
    };

    return Loader;

})();

Transitions = (function() {
    Transitions.INITIALIZE = 'initialize';

    Transitions.CALLSTART = 'callstart';

    Transitions.CALLEND = 'callend';

    Transitions.CALLMIDDLE = 'callmiddle';

    Transitions.CALLSAME = 'callsame';

    function Transitions() {
        this.homeSame = __bind(this.homeSame, this);
        this.defaultOut = __bind(this.defaultOut, this);
        this.launchSame = __bind(this.launchSame, this);
        this.launchIn = __bind(this.launchIn, this);
        this.launchOut = __bind(this.launchOut, this);
        this.end = __bind(this.end, this);
        this.start = __bind(this.start, this);
        this.container = $('.ajaxContainer');
        this.router = new Router();
        $(this.router).on(Router.CALLSTART, this.start);
        $(this.router).on(Router.CALLEND, this.end);
        this.sectionId = this.router.pages.current;
    }

    Transitions.prototype.start = function() {
        return $(this).trigger(Transitions.CALLSTART);
    };

    Transitions.prototype.end = function() {
        if (this.router.pages.prev === this.router.pages.current) {
            return this.launchSame();
        } else {
            return this.launchOut();
        }
    };

    Transitions.prototype.launchOut = function() {
        if (this[this.router.pages.prev + 'Out']) {
            return this[this.router.pages.prev + 'Out']();
        } else {
            return this.defaultOut();
        }
    };

    Transitions.prototype.launchIn = function() {
        $('html, body').animate({
            'scrollTop': 'scrollTop',
            0: 0
        }, 0);
        this.router.content.css('opacity', 0);
        $('.ajaxContainer').replaceWith(this.router.content);
        this.sectionId = this.router.pages.current;
        $(this).trigger(Transitions.CALLMIDDLE);
        if (this[this.router.pages.current + 'In']) {
            return this[this.router.pages.current + 'In']();
        } else {
            return this.defaultIn();
        }
    };

    Transitions.prototype.launchSame = function() {
        if (this[this.router.pages.prev + 'Same']) {
            this[this.router.pages.prev + 'Same']();
        } else {
            this.defaultOut();
        }
        return $(this).trigger(Transitions.CALLSAME);
    };

    Transitions.prototype.defaultIn = function() {
        this.router.content.css('opacity', 0);
        setTimeout((function(_this) {
            return function() {
                return _this.router.content.addClass('move').css('opacity', 1);
            };
        })(this), 10);
        return $(this).trigger(Transitions.CALLEND);
    };

    Transitions.prototype.defaultOut = function() {
        $(this).trigger(Transitions.CALLSTART);
        $('.ajaxContainer').css('opacity', 0);
        return setTimeout((function(_this) {
            return function() {
                return _this.launchIn();
            };
        })(this), 50);
    };

    Transitions.prototype.homeSame = function() {
        var href, url;
        url = document.location.pathname;
        href = this.router.href;
        this.router.content.find('article').css('display', 'none');
        if (this.router.elm.attr('class').match('next')) {
            this.router.content.children('a').eq(0).remove();
            $('.ajaxContainer').append(this.router.content.html());
        } else {
            this.router.content.children('a').eq(1).remove;
            $('.ajaxContainer').prepend(this.router.content.html());
        }
        this.router.elm.remove();
        return $(this).trigger(Transitions.CALLEND);
    };

    return Transitions;

})();

Router = (function() {
    Router.CALLSTART = 'callstart';

    Router.CALLEND = 'callend';

    Router.CALLERROR = 'callerror';

    Router.INITIALIZE = 'initialize';

    function Router() {
        this.backCall = __bind(this.backCall, this);
        this.cache = {};
        this.container = $('.ajaxContainer');
        this.current = this.container.attr('id');
        this.headTitle = $('title');
        this.pages = {
            'prev': '',
            'current': this.container.attr('id')
        };
        this.href = '';
        this.prevHref = '';
        this.events();
    }

    Router.prototype.events = function() {
        $(document).on('click', 'a', (function(_this) {
            return function(e) {
                _this.elm = $(e.currentTarget);
                _this.prevHref = _this.href;
                _this.href = _this.elm.attr('href');
                _this.checkRequestAvailability();
                if (_this.isRequestAvailable) {
                    _this.getContent();
                }
                if (!_this.isTargetSet) {
                    return e.preventDefault();
                }
            };
        })(this));
        return $(window).on('popstate', (function(_this) {
            return function(event) {
                _this.backCall();
                return event.preventDefault();
            };
        })(this));
    };

    Router.prototype.checkRequestAvailability = function() {
        this.isRequestAvailable = true;
        this.isTargetSet = false;
        this.canChangeUrl = true;
        if (this.href === document.location.pathname) {
            this.isRequestAvailable = false;
        }
        if (this.elm.attr('target')) {
            this.isTargetSet = true;
        }
        if ((this.elm.attr('data-change-url') || 'true') === 'false') {
            return this.canChangeUrl = false;
        }
    };

    Router.prototype.backCall = function() {
        if (document.location.pathname === this.href) {
            return window.history.go( - 1);
        } else {
            this.prevHref = this.href;
            this.href = document.location.pathname;
            return this.getContent();
        }
    };

    Router.prototype.getContent = function() {
        this.pages.prev = this.pages.current;
        if (this.cache[this.href]) {
            this.content = this.cache[this.href].clone();
            return this.requestSucceeded();
        } else {
            return this.request();
        }
    };

    Router.prototype.request = function() {
        $(this).trigger(Router.CALLSTART);
        if (this.ajaxRequest && this.ajaxRequest !== 4) {
            this.ajaxRequest.abort();
        }
        return this.ajaxRequest = $.ajax({
            url: this.href,
            success: (function(_this) {
                return function(response) {
                    _this.ajaxResponse = response;
                    _this.content = $(response).find('.ajaxContainer');
                    _this.title = $(response).filter('title').text();
                    return _this.requestSucceeded();
                };
            })(this),
            error: (function(_this) {
                return function(response) {
                    return $(_this).trigger(Router.CALLERROR);
                };
            })(this)
        });
    };

    Router.prototype.requestSucceeded = function(response) {
        this.pages.current = this.content.attr('id');
        this.changeTitle();
        this.caching();
        if (this.canChangeUrl) {
            this.changeUrl();
        }
        return $(this).trigger(Router.CALLEND);
    };

    Router.prototype.changeTitle = function() {
        return this.headTitle.text(self.title);
    };

    Router.prototype.caching = function() {
        return this.cache[self.href] = this.content.clone();
    };

    Router.prototype.changeUrl = function(href) {
        var pathname, state;
        if (href) {
            this.href = href;
        }
        state = {};
        pathname = this.href.split(window.location.host)[1];
        if (pathname) {
            pathname = pathname.substr(4);
        }
        if (window.history.pushState) {
            if (this.prevHref === this.href) {
                return window.history.replaceState(state, null, this.href);
            } else {
                return window.history.pushState(state, null, this.href);
            }
        } else {
            return window.location.hash = pathname;
        }
    };

    return Router;

})();

Carousel = (function() {
    Carousel.CHANGE = 'change';

    function Carousel(options) {
        this.destroy = __bind(this.destroy, this);
        this.move = __bind(this.move, this);
        this.prev = __bind(this.prev, this);
        this.next = __bind(this.next, this);
        this.events = __bind(this.events, this);
        this.container = options.container, this.timestamp = options.timestamp, this.paused = options.paused, this.navback = options.navback;
        this.overview = this.container.children('ul');
        this.slides = this.overview.children('li');
        this.nav = this.container.children('nav');
        this.slides.each(function(key) {
            var $this;
            $this = $(this);
            if (key !== 0) {
                return $this.addClass('noAnim right');
            }
        });
        this.length = this.slides.length;
        this.current = 0;
        if (!this.timestamp) {
            this.timestamp = 6000;
        }
        if (!this.paused) {
            this.paused = false;
        }
        this.delayTimer = null;
        if (!this.paused) {
            this.timer = setTimeout((function(_this) {
                return function() {
                    return _this.move();
                };
            })(this), this.timestamp);
        }
        this.events();
    }

    Carousel.prototype.events = function() {
        var restTimer, self;
        self = this;
        restTimer = null;
        return this.nav.find('.arrow').on('click', function() {
            var $this, current, klass;
            $this = $(this);
            klass = $this.attr('class');
            current = self.current;
            if (klass.match('next')) {
                current++;
            } else {
                current--;
            }
            clearTimeout(self.timer);
            clearTimeout(self.delayTimer);
            self.move(current);
            if (typeof self.navback === 'function') {
                return self.navback();
            }
        });
    };

    Carousel.prototype.next = function() {
        var current;
        current = this.current;
        current++;
        clearTimeout(this.timer);
        clearTimeout(this.delayTimer);
        return this.move(current);
    };

    Carousel.prototype.prev = function() {
        var current;
        current = this.current;
        current--;
        clearTimeout(this.timer);
        clearTimeout(this.delayTimer);
        return this.move(current);
    };

    Carousel.prototype.move = function(current) {
        var delay, direction, pre, timestamp;
        if (typeof current !== 'number') {
            pre = this.current;
            this.current++;
        } else {
            pre = this.current;
            this.current = current;
            delay = 600;
        }
        if (pre < this.current) {
            direction = ['left', 'right'];
        } else {
            direction = ['right', 'left'];
        }
        if (this.current > this.length - 1) {
            this.current = 0;
            timestamp = this.timestamp + 600;
            delay = 600;
        } else if (this.current < 0) {
            this.current = this.length - 1;
            delay = 0;
        }
        if (pre !== this.current) {
            this.slides.eq(this.current).addClass('noAnim ' + direction[1]).removeClass(direction[0]);
            setTimeout((function(_this) {
                return function() {
                    return _this.slides.eq(_this.current).removeClass('noAnim');
                };
            })(this), 10);
            setTimeout((function(_this) {
                return function() {
                    _this.slides.eq(_this.current).removeClass(direction[1]);
                    return _this.slides.eq(pre).addClass(direction[0]);
                };
            })(this), 20);
        }
        $(this).trigger(Carousel.CHANGE);
        if (!this.paused) {
            return this.delayTimer = setTimeout((function(_this) {
                return function() {
                    return _this.timer = setTimeout(function() {
                        return _this.move();
                    }, _this.timestamp);
                };
            })(this), delay);
        }
    };

    Carousel.prototype.destroy = function() {
        this.slides.attr('class', 'slide');
        this.nav.find('.arrow').off('click');
        clearTimeout(this.timer);
        return clearTimeout(this.delayTimer);
    };

    return Carousel;

})();

Fitin = (function() {
    function Fitin(options) {
        this.container = options.container, this.elm = options.elm;
        this.height = this.elm[0].height;
        this.width = this.elm[0].width;
        this.resize();
    }

    Fitin.prototype.resize = function(width, height) {
        var cR, pH, pR, pW, right, top;
        pH = this.height;
        pW = this.width;
        cR = height / width;
        pR = pH / pW;
        top = height / 2 - (pH / pW * width) / 2;
        right = width / 2 - (pW / pH * height) / 2;
        if (cR < pR) {
            return this.elm.css({
                'width': width,
                'height': width * pR + pR,
                'top': top,
                'right': 0
            });
        } else {
            return this.elm.css({
                'height': height + pR,
                'width': height / pR,
                'top': 0,
                'right': right
            });
        }
    };

    return Fitin;

})();

Gallery = (function() {
    function Gallery(options) {
        this.move = __bind(this.move, this);
        this.events = __bind(this.events, this);
        this.init = __bind(this.init, this);
        this.container = options.container, this.type = options.type, this.loadback = options.loadback, this.delay = options.delay, this.animationTime = options.animationTime, this.paused = options.paused;
        if (this.container.attr('class').match('complex')) {
            this.complex = true;
        }
        this.overview = this.container.children('.pictures');
        this.slides = this.overview.children('li');
        this.captions = this.container.find('.captions');
        this.caption = this.captions.children();
        this.dots = this.container.find('.dots');
        this.dot = this.dots.children('li');
        this.count = this.container.children('.count').find('li');
        this.total = this.container.find('.total');
        this.init();
        this.events();
    }

    Gallery.prototype.init = function() {
        if (this.complex) {
            this.dot = this.dots.children().find('li');
            this.count = this.container.children('.count').children('.value').children('li').find('li');
            this.total = this.total.children();
            this.total.each((function(_this) {
                return function(key, item) {
                    var $this;
                    $this = $(item);
                    if (key !== 0) {
                        return $this.addClass('bottom');
                    }
                };
            })(this));
        }
        if (this.type === 'slide') {
            this.slides.each((function(_this) {
                return function(key, item) {
                    var $this;
                    $this = $(item);
                    if (key !== 0) {
                        $this.addClass('right');
                        _this.caption.eq(key).addClass('bottom');
                        return _this.count.eq(key).addClass('bottom');
                    }
                };
            })(this));
        } else if (this.type === 'mask') {
            this.slides.eq(0).addClass('current');
            setTimeout((function(_this) {
                return function() {
                    return _this.slides.eq(0).addClass('move');
                };
            })(this), 10);
        }
        this.dot.eq(0).addClass('active');
        this.dot.eq(1).addClass('close');
        this.length = this.slides.length;
        this.current = 0;
        this.total_current = 0;
        this.event = 'auto';
        this.ready = true;
        this.delayTimer = null;
        if (!this.paused) {
            this.timer = setTimeout((function(_this) {
                return function() {
                    return _this.move();
                };
            })(this), this.delay);
        }
        return new Loader({
            'pics': this.overview.find('.img'),
            'loadback': this.loadback
        });
    };

    Gallery.prototype.events = function() {
        var restTimer, self;
        self = this;
        restTimer = null;
        this.container.find('.arrow').on('click', function() {
            var $this, current, klass;
            if (self.ready) {
                self.ready = false;
                $this = $(this);
                klass = $this.attr('class');
                current = self.current;
                if (klass.match('next')) {
                    current++;
                } else {
                    current--;
                }
                self.slides.eq(self.current).siblings().removeClass('current');
                clearTimeout(self.timer);
                clearTimeout(self.delayTimer);
                return setTimeout(function() {
                    return self.move(current);
                }, 100);
            }
        });
        return this.dot.on('click', function() {
            var current;
            if (self.ready) {
                self.ready = false;
                current = $.inArray(this, self.dot);
                self.slides.eq(self.current).siblings().removeClass('current');
                clearTimeout(self.timer);
                clearTimeout(self.delayTimer);
                self.event = 'click';
                return setTimeout(function() {
                    return self.move(current);
                }, 100);
            }
        });
    };

    Gallery.prototype.move = function(current) {
        var delay, lag;
        delay = this.delay;
        if (typeof current !== 'number') {
            this.pre = this.current;
            this.current++;
        } else {
            this.pre = this.current;
            this.current = current;
            lag = 600;
        }
        if (this.current > this.length - 1) {
            this.current = 0;
            delay = this.delay + 600;
            lag = 600;
        } else if (this.current < 0) {
            this.current = this.length - 1;
            lag = 0;
        }
        if (this.pre !== this.current) {
            this.dot.attr('class', '');
            this.dot.eq(this.current).addClass('active');
            if (this.current - 1 >= 0) {
                this.dot.eq(this.current - 1).addClass('close');
            } else {
                this.dot.eq(this.length - 1).addClass('close');
            }
            if (this.current < this.length - 1) {
                this.dot.eq(this.current + 1).addClass('close');
            } else {
                this.dot.eq(0).addClass('close');
            }
            this[this.type]();
        }
        if (!this.paused) {
            return this.delayTimer = setTimeout((function(_this) {
                return function() {
                    return _this.timer = setTimeout(function() {
                        _this.event = 'auto';
                        return _this.move();
                    }, delay);
                };
            })(this), lag);
        }
    };

    Gallery.prototype.slide = function() {
        var direction, total_pre;
        if (this.pre < this.current || (this.pre === this.length - 1 && this.current === 0 && this.event === 'auto')) {
            direction = ['left', 'right', 'bottom', 'top'];
        } else {
            direction = ['right', 'left', 'top', 'bottom'];
        }
        this.slides.eq(this.current).attr('class', direction[1]);
        this.caption.eq(this.current).attr('class', direction[3]);
        this.count.eq(this.current).attr('class', direction[2]);
        total_pre = this.total_current;
        if (this.complex) {
            this.total_current = this.count.eq(this.current).parent().parent().index();
            if (total_pre !== this.total_current) {
                this.total.eq(this.total_current).attr('class', direction[2]);
            }
        }
        setTimeout((function(_this) {
            return function() {
                _this.slides.eq(_this.current).addClass('move');
                _this.caption.eq(_this.current).addClass('move');
                _this.count.eq(_this.current).addClass('move');
                _this.slides.eq(_this.pre).addClass('move');
                _this.caption.eq(_this.pre).addClass('move');
                _this.count.eq(_this.pre).addClass('move');
                _this.slides.eq(_this.current).removeClass(direction[1]);
                _this.slides.eq(_this.pre).addClass(direction[0]);
                _this.caption.eq(_this.current).removeClass(direction[3]);
                _this.caption.eq(_this.pre).addClass(direction[2]);
                _this.count.eq(_this.current).removeClass(direction[2]);
                _this.count.eq(_this.pre).addClass(direction[3]);
                if (_this.complex && total_pre !== _this.total_current) {
                    _this.total.eq(_this.total_current).addClass('move');
                    _this.total.eq(total_pre).addClass('move');
                    _this.total.eq(_this.total_current).removeClass(direction[2]);
                    return _this.total.eq(total_pre).addClass(direction[3]);
                }
            };
        })(this), 10);
        return setTimeout((function(_this) {
            return function() {
                _this.slides.removeClass('move');
                _this.caption.removeClass('move');
                _this.count.removeClass('move');
                return _this.ready = true;
            };
        })(this), 1010);
    };

    Gallery.prototype.mask = function() {
        this.slides.eq(this.current).addClass('current focus');
        this.slides.eq(this.pre).removeClass('focus');
        setTimeout((function(_this) {
            return function() {
                return _this.slides.eq(_this.current).addClass('move');
            };
        })(this), 10);
        return setTimeout((function(_this) {
            return function() {
                _this.slides.eq(_this.pre).removeClass('current move');
                return _this.ready = true;
            };
        })(this), this.animationTime + 10);
    };

    return Gallery;

})();

Loader = (function() {
    function Loader(options) {
        this.pics = options.pics, this.loadback = options.loadback;
        this.loadIt(0);
    }

    Loader.prototype.loadIt = function(index) {
        var img, item, klass, self, src;
        self = this;
        item = this.pics.eq(index);
        if (item.length) {
            img = new Image();
            klass = item.attr('class').replace('img', '');
            src = item.attr('data-src');
            img.src = src;
            img.onload = function() {
                var pic;
                pic = $("<img src='" + src + "' class='" + klass + "' style='opacity:0'/>");
                item.replaceWith(pic);
                self.loadIt(index + 1);
                return setTimeout(function() {
                    pic.css('opacity', 1);
                    if (typeof self.loadback === 'function') {
                        return self.loadback(pic);
                    }
                }, 10);
            };
            return img.onerror = function() {
                self.loadIt(index + 1);
                if (typeof self.loadback === 'function') {
                    return self.loadback(item);
                }
            };
        }
    };

    return Loader;

})();

Maps = (function() {
    function Maps() {
        this.geocodeAddress = __bind(this.geocodeAddress, this);
        this.container = $('#gmap');
        this.options = {
            zoom: 10,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        this.geocodeAddress();
    }

    Maps.prototype.displayMap = function() {
        this.map = new google.maps.Map(document.getElementById('gmap'), this.options);
        this.marker = new google.maps.Marker({
            position: this.ll,
            map: this.map
        });
        return google.maps.event.trigger(this.map, 'resize');
    };

    Maps.prototype.geocodeAddress = function() {
        this.geocoder = new google.maps.Geocoder();
        this.address = this.container.attr('data-place');
        return this.geocoder.geocode({
            'address': this.address
        }, (function(_this) {
            return function(results, status) {
                _this.ll = results[0].geometry.location;
                _this.options.center = _this.ll;
                return _this.displayMap();
            };
        })(this));
    };

    return Maps;

})();

Scroll = (function() {
    Scroll.UPDATE = 'update';

    function Scroll(options) {
        this.scroll = __bind(this.scroll, this);
        this.container = options.container, this.overview = options.overview;
        this.ease = 0.2;
        this.topScroll = 0;
        this.topCalc = 0;
        this.preCalc = 0;
        this.resize();
        this.refresh();
        this.events();
    }

    Scroll.prototype.events = function(index) {
        return $(window).on('scroll', {
            self: this
        }, this.scroll);
    };

    Scroll.prototype.refresh = function(val) {
        this.overview = $('.ajaxContainer');
        if (!val) {
            val = 0;
        }
        this.height = this.overview.height();
        return this.container.height(this.height + val);
    };

    Scroll.prototype.resize = function() {
        return this.container.height(this.overview.height());
    };

    Scroll.prototype.scroll = function(e) {
        return this.topScroll = $(window).scrollTop();
    };

    Scroll.prototype.update = function() {
        this.preCalc = this.topCalc;
        this.topCalc += (this.topScroll - this.topCalc) * this.ease;
        if (this.topCalc !== this.preCalc) {
            if (this.topCalc < 0) {
                this.topCalc = 0;
            }
            this.tPos = {
                t1: this.topCalc,
                t2: this.topCalc / 2,
                t3: this.topCalc / 3,
                t4: this.topCalc / 4,
                t5: this.topCalc / 5,
                t6: this.topCalc / 6
            };
            if (this.overview.length) {
                TweenLite.set(this.overview, {
                    y: - this.topCalc,
                    force3D: true
                });
            }
            return $(this).trigger(Scroll.UPDATE);
        }
    };

    return Scroll;

})();

Projects = (function() {
    Projects.MOVIE_OPEN = 'movieopen';

    Projects.MOVIE_CLOSE = 'movieclose';

    function Projects() {
        this.addClip = __bind(this.addClip, this);
        this.container = $('.ajaxContainer');
        this.sectionId = this.container.attr('id');
        this.resizeTimer = void 0;
        this.pageInit();
        this.events();
        if ($('article.start .front').length) {
            $('article.start .front').trigger('click');
        }
    }

    Projects.prototype.load = function(parent) {
        var img, item, src;
        item = parent ? parent.find('.c_img').eq(0) : $('.img').eq(0);
        if (item.length) {
            src = item.attr('data-src');
            img = new Image();
            img.src = src;
            img.onload = (function(_this) {
                return function(e) {
                    var pic;
                    pic = $('<img src="' + e.currentTarget.src + '" style="opacity:0;"/>');
                    item.replaceWith(pic);
                    pic.css('opacity', 1);
                    return _this.load(parent);
                };
            })(this);
            return img.onerror = (function(_this) {
                return function(e) {
                    var pic;
                    pic = $('<img src="' + e.currentTarget.src + '" style="opacity:0;"/>');
                    item.replaceWith(pic);
                    return _this.load(parent);
                };
            })(this);
        } else {
            this.container.find('article').css('display', 'block');
            return $('.news').not('.displayed').each(function() {
                var $this;
                $this = $(this);
                $this.addClass('displayed');
                if ($this.prev().attr('data-type') === 'simple') {
                    return $this.addClass('dual');
                }
            });
        }
    };

    Projects.prototype.pageInit = function() {
        return this.load();
    };

    Projects.prototype.events = function() {
        if (this.sectionId !== 'category') {
            this.container.on('click', '.front', (function(_this) {
                return function(e) {
                    var $this, duration, index, klass, parent, playlistIndex, pos, prev, scrolled;
                    $this = $(e.currentTarget);
                    parent = $this.parents('article');
                    klass = parent.attr('class') ? parent.attr('class') : '';
                    duration = klass.match('start') ? [0, 500] : [500, 0];
                    if (W.isTablet()) {
                        duration = [0, 0];
                    }
                    if (!klass.match('active')) {
                        prev = _this.container.find('article.active, li.active');
                        _this.content_close(prev);
                        if (_this.carousel) {
                            prev = _this.carousel.slides.eq(_this.carousel.current);
                            _this.carousel_close(prev);
                        }
                        if (_this.player) {
                            _this.movie_close(prev);
                        }
                        index = parent.index();
                        pos = 0;
                        if (_this.sectionId === 'search') {
                            pos = index * $this.height() + 60;
                        } else if (_this.sectionId === 'directors') {
                            pos = (index - 1) * $this.height() + $('.presentation').height();
                        } else if (_this.sectionId === 'player') {
                            pos = (index - 1) * $this.height() + $('#player header').height() + 160 + parent.siblings('.presentation').height();
                            playlistIndex = parent.parent().index();
                            $('.playlist').each(function(key, item) {
                                var playlist;
                                if (key < playlistIndex - 2) {
                                    playlist = $(item);
                                    return pos += (playlist.children('article').length) * $this.height() + playlist.children('.presentation').height();
                                }
                            });
                        } else {
                            if ($('article').length > 1) {
                                $('article').each(function() {
                                    $this = $(this);
                                    if ($this.index() <= index) {
                                        return pos += $this.find('.front').height();
                                    }
                                });
                            }
                        }
                        scrolled = false;
                        return $('html, body').animate({
                            'scrollTop': pos
                        }, {
                            duration: duration[0],
                            complete: function() {
                                if (scrolled === false) {
                                    scrolled = true;
                                    setTimeout(function() {
                                        parent.addClass('active');
                                        _this.content_open(parent);
                                        if (klass.match('list')) {
                                            _this.carousel_open(parent);
                                        }
                                        if (klass.match('single_player')) {
                                            return _this.movie_open(parent);
                                        }
                                    }, duration[1]);
                                    return setTimeout(function() {
                                        return scrolled = false;
                                    });
                                }
                            }
                        });
                    }
                };
            })(this));
        }
        this.container.on('click', 'article .close_button', (function(_this) {
            return function(e) {
                var $this, parent, prev;
                $this = $(e.currentTarget);
                parent = $this.parents('article');
                prev = parent;
                _this.content_close(parent);
                if (_this.carousel) {
                    _this.carousel_close();
                }
                if (_this.player) {
                    return _this.movie_close(prev);
                }
            };
        })(this));
        this.container.on('click', '.square', (function(_this) {
            return function(e) {
                var $this, container, current;
                $this = $(e.currentTarget);
                container = $this.parents('.news');
                current = _this.carousel.slides.eq(_this.carousel.current);
                if (current.find('.ppcontrols').length === 0) {
                    return _this.movie_open(current);
                }
            };
        })(this));
        $(document).on('mouseenter', '.square', function(e) {
            var $this, container;
            $this = $(this);
            container = $this.parents('.news');
            return container.find('figcaption').css('opacity', 0);
        });
        $(document).on('mouseleave', '.square', function(e) {
            var $this, container;
            $this = $(this);
            container = $this.parents('.news');
            return container.find('figcaption').css('opacity', 1);
        });
        return $('body, html').on('mousewheel', function(e) {
            return $('body, html').stop();
        });
    };

    Projects.prototype.content_open = function($this) {
        var content, front;
        content = $this.children('.content');
        front = $this.children().children('.front');
        if (this.sectionId === 'search') {
            return content.height(50);
        } else {
            return content.height(content.children('.inner').height() + 96);
        }
    };

    Projects.prototype.content_close = function($this) {
        var content;
        content = $this.children('.content');
        $this.removeClass('active');
        return content.height(0);
    };

    Projects.prototype.carousel_open = function($this) {
        var carousel, front, id;
        carousel = $this.find('.carousel');
        front = $this.find('.figure').children('.front');
        id = ($this.attr('id') || $this.parents('article').attr('id')).replace('project', '');
        front.css('opacity', 0);
        setTimeout(function() {
            return front.css('z-index', 0);
        }, 300);
        this.load(carousel);
        this.carousel = new Carousel({
            container: carousel.parent(),
            timestamp: 3000,
            paused: true,
            navback: (function(_this) {
                return function() {
                    return _this.movie_close(_this.carousel.slides.eq(_this.carousel.current));
                };
            })(this)
        });
        $(this.carousel).on(Carousel.CHANGE, (function(_this) {
            return function() {
                return carousel.siblings('.links').children('.download').attr('href', carousel.children('li').eq(_this.carousel.current).find('video').attr('src'));
            };
        })(this));
        return this.addClip(id);
    };

    Projects.prototype.carousel_close = function() {
        var front;
        front = this.carousel.container.children('.front');
        front.css('z-index', 10);
        setTimeout(function() {
            return front.css('opacity', 1);
        }, 10);
        if (W.clip) {
            W.clip.destroy();
        }
        $(this.carousel).off(Carousel.CHANGE);
        this.carousel.destroy();
        return this.carousel = void 0;
    };

    Projects.prototype.movie_open = function($this) {
        var front, id;
        front = $this.children().children('.front');
        id = ($this.attr('id') || $this.parents('article').attr('id')).replace('project', '');
        front.css('opacity', 0);
        setTimeout((function(_this) {
            return function() {
                return front.css('z-index', 0);
            };
        })(this), 300);
        this.player = {};
        this.player.id = id;
        this.player.source = $this.find('video').clone();
        this.player.videoId = $this.find('video').attr('id');
        this.player.container = $this;
        if (W.isTablet()) {
            $('#' + this.player.videoId).attr('controls', 'controls');
            $('#' + this.player.videoId)[0].play();
        } else {
            projekktor('#' + this.player.videoId, {
                controls: true,
                autoplay: true,
                volume: 1,
                toggleMute: 1,
                width: '100%',
                height: '100%',
                playerFlashMP4: '/swf/StrobeMediaPlayback.swf?v=0'
            });
        }
        $this.find('.video-container').css('display', 'block');
        this.resize();
        this.addClip(id);
        return $(this).trigger(Projects.MOVIE_OPEN);
    };

    Projects.prototype.addClip = function(id) {
        if (W.clip) {
            return setTimeout((function(_this) {
                return function() {
                    W.clip.destroy();
                    return W.clip.glue('copyClipboard' + id);
                };
            })(this), 500);
        }
    };

    Projects.prototype.movie_close = function($this) {
        var carousel, content, front;
        content = $this.children('.content');
        carousel = $this.find('.carousel');
        $(this).trigger(Projects.MOVIE_CLOSE);
        if (this.player) {
            front = this.player.container.find('.front');
            front.css('z-index', 10);
            setTimeout(function() {
                return front.css('opacity', 1);
            }, 10);
            this.player.container.find('.video-container').css('display', 'none');
            if (projekktor('#' + this.player.videoId)) {
                projekktor('#' + this.player.videoId).selfDestruct();
            } else if (W.isTablet()) {
                $('#' + this.player.videoId)[0].currentTime = 0;
                $('#' + this.player.videoId)[0].pause();
            }
            this.player = null;
        }
        $this.removeClass('active');
        if (W.clip && !this.carousel) {
            return W.clip.destroy();
        }
    };

    Projects.prototype.resize = function() {
        clearTimeout(this.resizeTimer);
        if (this.player) {
            if (W.clip) {
                W.clip.destroy();
                return this.resizeTimer = setTimeout((function(_this) {
                    return function() {
                        return W.clip.glue('copyClipboard' + _this.player.id);
                    };
                })(this), 100);
            }
        }
    };

    Projects.prototype.destroy = function() {
        // $('.copy').attr('id', '');
        this.container.off('click', '.front');
        this.container.off('click', '.close_button');
        this.container.off('click', '.square');
        $(document).off('mouseenter', '.square');
        $(document).off('mouseleave', '.square');
        $('body, html').off('mousewheel');
        if (W.clip) {
            return W.clip.destroy();
        }
    };

    return Projects;

})();

Main = (function() {
    function Main() {
        this.update = __bind(this.update, this);
        this._onResize = __bind(this._onResize, this);
        this._onTransitionsSame = __bind(this._onTransitionsSame, this);
        this._onTransitionsMiddle = __bind(this._onTransitionsMiddle, this);
        this._onTransitionsStart = __bind(this._onTransitionsStart, this);
        this.window = $(window);
        this.menu = new Menu();
        ZeroClipboard.setMoviePath('/swf/ZeroClipboard.swf');
        W.clip = new ZeroClipboard.Client();
        W.clip.setText('');
        W.clip.addEventListener('mousedown', function(e) {
            return W.clip.setText($(e.domElement).parents('article').attr('data-href'));
        });
        W.clip.addEventListener('mouseover', function(client, args) {
            return $(client.domElement).children('b').css('display', 'block');
        });
        W.clip.addEventListener('mouseout', function(client, args) {
            return $(client.domElement).children('b').css('display', 'none');
        });
        this.transitions = new Transitions();
        $(this.transitions).on(Transitions.CALLSTART, this._onTransitionsStart);
        $(this.transitions).on(Transitions.CALLEND, this._onTransitionsEnd);
        $(this.transitions).on(Transitions.CALLMIDDLE, this._onTransitionsMiddle);
        $(this.transitions).on(Transitions.CALLSAME, this._onTransitionsSame);
        this._initSection();
        this.window.on('resize', this._onResize);
        this.wandaMenu = new WandaMenu();
    }

    Main.prototype._onTransitionsStart = function() {
        return this.menu.close_menu();
    };

    Main.prototype._onTransitionsMiddle = function() {
        this._initSection();
        return this._onResize();
    };

    Main.prototype._onTransitionsSame = function() {
        if (this.section.callDone) {
            return this.section.callDone();
        }
    };

    Main.prototype._onResize = function() {
        W.hh = $(window).height();
        W.ww = $(window).width();
        W.rw = W.ww * 0.9;
        if (this.section && this.section.resize) {
            this.section.resize();
        }
        if (W.isTablet()) {
            this.menu.menuW = W.ww * 0.8;
            this.menu.directorsNav.css({
                'left': '18%'
            });
            $('#body').css('width', W.ww - 31);
        } else if (W.rw > 1600) {
            this.menu.menuW = 1280;
            this.menu.directorsNav.css({
                'left': 320
            });
        } else {
            this.menu.menuW = W.ww * 0.72;
            this.menu.directorsNav.css({
                'left': '18%'
            });
        }
        if (this.menu.menuOpened) {
            this.menu.directorsNav.addClass('noAnim').css({
                'width': this.menu.menuW
            });
        }
        return this.menu.overview.css({
            'width': this.menu.menuW
        });
    };

    Main.prototype._initSection = function() {
        this.sectionId = this.transitions.sectionId;
        if (this.section && this.section.destroy()) {
            this.section.destroy();
        }
        switch (this.sectionId) {
        case 'home':
            this.section = new Home();
            break;
        case 'projects':
            this.section = new Projects();
            break;
        case 'directors':
            this.section = new Directors();
            break;
        case 'about':
            this.section = new About();
            break;
        case 'contact':
            this.section = new Contact();
            break;
        case 'search':
            this.section = new Search();
            break;
        case 'category':
            this.section = new Category();
        }
        return this._onResize();
    };

    Main.prototype.update = function() {
        W.scrollTop.real = $(window).scrollTop();
        W.scrollTop.calc += (W.scrollTop.real - W.scrollTop.calc) * 0.2;
        if (this.section.update) {
            return this.section.update();
        }
    };

    return Main;

})();

main = void 0;

$(function() {
    var tick;
    main = new Main();
    (tick = function() {
        main.update();
        return window.requestAnimationFrame(tick);
    })();
});

WandaMenu = (function() {
    function WandaMenu() {
        this.closeMenu = __bind(this.closeMenu, this);
        this.openMenu = __bind(this.openMenu, this);
        this.container = $('#wanda-menu');
        this.mask = this.container.find('.mask');
        this.body = $('#main_nav, #body');
        this.body.css({
            'left': '230px'
        });
        this.timer = null;
        setTimeout((function(_this) {
            return function() {
                $('body').removeClass('wandaMenuOpened').addClass('menuOk');
                return _this.body.css('left', '');
            };
        })(this), 1000);
        this.events();
    }

    WandaMenu.prototype.events = function() {
        var menuEvent;
        menuEvent = W.isTablet() ? 'touchstart' : 'mouseenter';
        this.container.on(menuEvent, (function(_this) {
            return function(e) {
                var klass, target, targetKlass;
                clearTimeout(_this.timer);
                klass = _this.container.attr('class') ? _this.container.attr('class') : '';
                target = $(e.target);
                targetKlass = target.attr('class') === 'close' || target.parent().attr('class') === 'close' ? 'close' : '';
                if (!klass.match('opened') && !targetKlass.match('close')) {
                    return _this.openMenu();
                }
            };
        })(this));
        this.container.find('.close').on('click', this.closeMenu);
        this.container.on('mouseleave', this.closeMenu);
        return $('#main_nav .network').on('click', this.openMenu);
    };

    WandaMenu.prototype.openMenu = function() {
        $('#directors_nav').removeClass('noAnim');
        return $('body').addClass('wandaMenuOpened');
    };

    WandaMenu.prototype.closeMenu = function() {
        return this.timer = setTimeout((function(_this) {
            return function() {
                $('body').removeClass('wandaMenuOpened');
                return _this.container.removeClass('opened');
            };
        })(this), 350);
    };

    return WandaMenu;

})();

About = (function() {
    function About() {
        var awardsHeight;
        this.container = $('#about');
        this.awards = new Carousel({
            container: $('#awards'),
            timestamp: 3000,
            paused: true,
            navback: (function(_this) {
                return function() {
                    var top;
                    top = $('#awards').position().top;
                    if ($(window).scrollTop() !== top) {
                        return $('html, body').stop().animate({
                            'scrollTop': $('#awards').position().top
                        }, 500);
                    }
                };
            })(this)
        });
        this.company = new Carousel({
            container: $('#company_pictures'),
            timestamp: 3000,
            paused: true,
            navback: (function(_this) {
                return function() {
                    var top;
                    top = $('#company_pictures').position().top;
                    if ($(window).scrollTop() !== top) {
                        return $('html, body').stop().animate({
                            'scrollTop': $('#company_pictures').position().top
                        }, 500);
                    }
                };
            })(this)
        });
        awardsHeight = 0;
        $('#awards li').each((function(_this) {
            return function(key, item) {
                var h;
                h = $(item).height();
                if (h > awardsHeight) {
                    return awardsHeight = h;
                }
            };
        })(this));
        $('#awards ul').height(awardsHeight);
        this.accordeons();
    }

    About.prototype.accordeons = function() {
        var details, launchers;
        details = $('#offices_details');
        launchers = details.children('ul').find('.title');
        return launchers.on('click', function() {
            var $this, klass, wrapper;
            $this = $(this);
            wrapper = $this.siblings('.wrapper');
            klass = $this.attr('class');
            launchers.removeClass('active').siblings('.wrapper').height(0);
            if (!klass.match('active')) {
                $this.addClass('active');
                return wrapper.height(wrapper.children().height() + 100);
            } else {
                $this.removeClass('active');
                return wrapper.height(0);
            }
        });
    };

    About.prototype.destroy = function() {
        this.awards.destroy();
        this.company.destroy();
        return $('#offices_details ul .title').off('click');
    };

    return About;

})();

Category = (function() {
    function Category() {
        this.update = __bind(this.update, this);
        this.resize = __bind(this.resize, this);
        this._onMouseWheel = __bind(this._onMouseWheel, this);
        this._closeNav = __bind(this._closeNav, this);
        this._openNav = __bind(this._openNav, this);
        this._initEvents = __bind(this._initEvents, this);
        this.container = $('#category');
        this.type = this.container.children().attr('class');
        this.projects = new Projects();
        this.header = this.container.children().children('header');
        this.intro = this.header.find('.intro');
        this.aside = this.header.find('aside');
        this.nav = this.container.find('nav');
        this.navOverview = this.nav.children('.nav-overview');
        this.navViewport = this.nav.find('.nav-viewport');
        this.navList = this.navOverview.find('ul, b');
        this.navTitle = this.navOverview.find('h2');
        this.navFixed = false;
        this.headerHeight = 0;
        this.navHeight = 0;
        this.navOpacity = 1;
        this.navEntered = false;
        this.sizesAndPos = [[641, 328, 0, 0], [320, 492, 0, 640], [320, 492, 328, 0], [320, 328, 328, 320], [320, 164, 656, 320], [320, 328, 492, 640], [321, 164, 820, 0], [640, 328, 820, 320], [320, 492, 984, 0], [320, 328, 1148, 320], [320, 492, 1148, 640], [640, 330, 1476, 0], [320, 328, 1640, 640], [320, 164, 1804, 0], [320, 164, 1804, 320]];
        console.log(this.type);
        if (this.type === 'music-video') {
            this.grid = $('.random-grid');
            this.pics = this.grid.find('a');
        } else {
            this.articles = this.container.find('article');
        }
        setTimeout((function(_this) {
            return function() {
                return _this.resize();
            };
        })(this), 10);
        this._initEvents();
    }

    Category.prototype._initEvents = function() {
        this.navOverview.on('mouseenter', this._openNav);
        this.navOverview.on('mouseleave', this._closeNav);
        return $('body').on('mousewheel', this._onMouseWheel);
    };

    Category.prototype._openNav = function() {
        if (this.navFixed) {
            this.navEntered = true;
            TweenLite.to(this.navList, 0.7, {
                'opacity': 1,
                'force3D': true,
                'ease': Expo.easeOut
            });
            TweenLite.to(this.navTitle, 0.7, {
                'opacity': 1,
                'force3D': true,
                'ease': Expo.easeOut
            });
            TweenLite.to(this.navOverview, 0.7, {
                'y': 0,
                'force3D': true,
                'ease': Expo.easeOut
            });
            return TweenLite.to(this.navViewport, 0.7, {
                'y': 0,
                'force3D': true,
                'ease': Expo.easeOut
            });
        }
    };

    Category.prototype._closeNav = function() {
        if (this.navFixed) {
            TweenLite.to(this.navList, 0.5, {
                'opacity': this.navOpacity,
                'force3D': true,
                'ease': Expo.easeInOut
            });
            TweenLite.to(this.navTitle, 0.5, {
                'opacity': this.navOpacity / 2 + 0.5,
                'force3D': true,
                'ease': Expo.easeInOut
            });
            TweenLite.to(this.navOverview, 0.5, {
                'y': this.navOverviewPos,
                'force3D': true,
                'ease': Expo.easeInOut
            });
            return TweenLite.to(this.navViewport, 0.5, {
                'y': this.navViewportPos,
                'force3D': true,
                'ease': Expo.easeInOut,
                onComplete: (function(_this) {
                    return function() {
                        return _this.navEntered = false;
                    };
                })(this)
            });
        }
    };

    Category.prototype._onMouseWheel = function(e) {
        if (this.navEntered === true) {
            return e.preventDefault();
        }
    };

    Category.prototype.resize = function() {
        var gh, gw, padding;
        if (this.type === 'music-video') {
            gw = this.container.width();
            gh = 0;
            this.pics.each((function(_this) {
                return function(key, item) {
                    var $this, h, index, w, x, y;
                    $this = $(item);
                    index = key % 15;
                    w = Math.ceil(_this.sizesAndPos[index][0] / 960 * gw);
                    h = Math.ceil(_this.sizesAndPos[index][1] / 960 * gw);
                    y = Math.ceil(_this.sizesAndPos[index][2] / 960 * gw);
                    x = Math.ceil(_this.sizesAndPos[index][3] / 960 * gw);
                    $this.css({
                        'width': w,
                        'height': h,
                        'top': y,
                        'left': x
                    });
                    if (x + h > gh) {
                        return gh = x + h;
                    }
                };
            })(this));
            this.container.find('.batch').each((function(_this) {
                return function(key, item) {
                    var $this, height, nb;
                    $this = $(item);
                    nb = $this.children().length;
                    height = 0;
                    $.each(_this.sizesAndPos, function(key, val) {
                        if (key < nb) {
                            return height = Math.max(val[1] + val[2], height);
                        }
                    });
                    return $this.css({
                        'height': height / 960 * gw
                    });
                };
            })(this));
        } else {
            this.articles.each((function(_this) {
                return function(key, item) {
                    var $this, caption;
                    $this = $(item);
                    caption = $(item).find('.caption');
                    return caption.css('margin-top', - (caption.height()) / 2);
                };
            })(this));
        }
        padding = Math.max(60, (this.aside.height() - this.intro.height()) / 2 + 10);
        this.intro.css('padding', padding + 'px 0');
        this.aside.css('margin-top', Math.max(0, (this.aside.parent().height() - this.aside.height()) / 2));
        this.headerHeight = this.header.height();
        this.navHeight = this.navOverview.height() - 1;
        return this.nav.height(this.navHeight);
    };

    Category.prototype.update = function() {
        if (W.isTablet() === false) {
            if (W.scrollTop.real > this.headerHeight && this.navFixed === false) {
                this.navFixed = true;
                this.nav.addClass('fixed');
            } else if (W.scrollTop.real <= this.headerHeight && this.navFixed === true) {
                this.navFixed = false;
                this.nav.removeClass('fixed');
            }
            if (this.navEntered === false) {
                if (this.navFixed === true && W.scrollTop.real <= this.headerHeight + this.navHeight - 60) {
                    this.navOpacity = 1 - (W.scrollTop.real - this.headerHeight - 1) / (this.navHeight - 60);
                    this.navOverviewPos = - (W.scrollTop.real - this.headerHeight - 1);
                } else if (W.scrollTop.real > this.headerHeight + this.navHeight - 60) {
                    this.navOpacity = 0;
                    this.navOverviewPos = - (this.navHeight - 60);
                } else {
                    this.navOpacity = 1;
                    this.navOverviewPos = 0;
                }
                if (W.scrollTop.real > this.headerHeight + this.navHeight - 60) {
                    this.navViewportPos = this.navHeight - 60 - 1 - 7;
                } else if (W.scrollTop.real > this.headerHeight + 7) {
                    this.navViewportPos = W.scrollTop.real - this.headerHeight - 1 - 7;
                } else {
                    this.navViewportPos = 0;
                }
                TweenLite.set(this.navList, {
                    'opacity': this.navOpacity,
                    'force3D': true
                });
                TweenLite.set(this.navTitle, {
                    'opacity': this.navOpacity / 2 + 0.5,
                    'force3D': true
                });
                TweenLite.set(this.navOverview, {
                    'y': this.navOverviewPos,
                    'force3D': true
                });
                return TweenLite.set(this.navViewport, {
                    'y': this.navViewportPos,
                    'force3D': true
                });
            }
        }
    };

    Category.prototype.destroy = function() {
        this.navOverview.off('mouseenter', this._openNav);
        this.navOverview.off('mouseleave', this._closeNav);
        return $('body').off('mousewheel', this._onMouseWheel);
    };

    return Category;

})();

Contact = (function() {
    function Contact() {
        this.container = $('#contact');
        this.accordeons();
    }

    Contact.prototype.accordeons = function() {
        var details, launchers;
        details = $('#offices_details');
        launchers = details.children('ul').find('.title');
        return launchers.on('click', function() {
            var $this, klass, wrapper;
            $this = $(this);
            wrapper = $this.siblings('.wrapper');
            klass = $this.attr('class');
            launchers.removeClass('active').siblings('.wrapper').height(0);
            if (!klass.match('active')) {
                $this.addClass('active');
                return wrapper.height(wrapper.children().height() + 100);
            } else {
                $this.removeClass('active');
                return wrapper.height(0);
            }
        });
    };

    Contact.prototype.destroy = function() {
        return $('#offices_details ul .title').off('click');
    };

    return Contact;

})();

Directors = (function() {
    function Directors() {
        this.events();
        this.projects = new Projects();
    }

    Directors.prototype.events = function() {
        this.content = $('.presentation .content');
        this.button = $('.view_profile');
        this.button.on('click', (function(_this) {
            return function(e) {
                var $this, klass;
                $this = $(e.currentTarget);
                klass = $this.attr('class') ? $this.attr('class') : '';
                if (klass.match('active')) {
                    return _this.profile_close();
                } else {
                    return _this.profile_open();
                }
            };
        })(this));
        return $('.presentation .close_button').on('click', (function(_this) {
            return function() {
                return _this.profile_close();
            };
        })(this));
    };

    Directors.prototype.profile_open = function() {
        this.button.addClass('active');
        return this.content.height(this.content.children().height() + 96);
    };

    Directors.prototype.profile_close = function() {
        this.button.removeClass('active');
        return this.content.height(0);
    };

    Directors.prototype.resize = function() {
        return this.projects.resize();
    };

    Directors.prototype.destroy = function() {
        return this.projects.destroy();
    };

    return Directors;

})();

Home = (function() {
    function Home() {
        this.infinite_scroll = __bind(this.infinite_scroll, this);
        this.container = $('#home');
        this.pH = this.container.height();
        this.events();
        this.projects = new Projects();
        if ($('.anchor').length === 1) {
            setTimeout(function() {
                return $('.load_prev_projects').trigger('click');
            }, 100);
        }
    }

    Home.prototype.events = function() {
        var self;
        self = this;

        /*
            		@container.on 'click', 'article', () ->
            
            			$this = $(this)
            			id = $this.attr 'id'
            			klass = if $this.attr('class') then $this.attr('class') else ''
            
            			if !id
            				if !klass.match('active')
            					@open_project($this)
             */
        this.loading = false;
        this.scroll_pos = {
            'prev': 0,
            'current': 0
        };
        return $(document).on('scroll', this.infinite_scroll);
    };

    Home.prototype.infinite_scroll = function(e) {
        var page;
        this.scroll_pos.prev = this.scroll_pos.current;
        this.scroll_pos.current = $(window).scrollTop();
        this.deltaY = this.scroll_pos.current - this.scroll_pos.prev;
        if (this.scroll_pos.prev !== 0 || 1) {
            if (!this.loading) {
                if (this.scroll_pos.current > this.pH - W.hh * 1.5) {
                    this.loading = true;
                    $('.load_next_projects').trigger('click');
                } else if (this.scroll_pos.current < W.hh * 1.5 && $('.load_prev_projects').length) {
                    this.loading = true;
                    $('.load_prev_projects').trigger('click');
                }
            }
            page = 0;
            return $('.anchor').each((function(_this) {
                return function(key, item) {
                    var $this, pos;
                    $this = $(item);
                    pos = $this.position().top - _this.scroll_pos.current;
                    if (pos < 0) {
                        return page = $this.attr('data-page');
                    }
                };
            })(this));
        }
    };

    Home.prototype.callDone = function() {
        this.pH = this.container.height();
        this.projects.pageInit();
        return setTimeout((function(_this) {
            return function() {
                var scrollPos;
                scrollPos = $(window).scrollTop();
                if (scrollPos > _this.pH - W.hh * 1.5) {
                    return $('.load_next_projects').trigger('click');
                } else {
                    return _this.loading = false;
                }
            };
        })(this), 500);
    };

    Home.prototype.changePage = function(page) {
        var current, href, path, url;
        url = document.location.href.split('/');
        path = document.location.pathname.split('/');
        current = parseInt(url[url.length - 1]);
        if (current !== page) {
            url.pop();
            path.pop();
            href = url.join('/') + '/' + page;
            return path = path.join('/') + '/' + page;
        }
    };

    Home.prototype.resize = function() {
        return this.projects.resize();
    };

    Home.prototype.destroy = function() {
        this.projects.destroy();
        return $(document).off('scroll');
    };

    return Home;

})();

Menu = (function() {
    function Menu() {
        this.setOverviewSize = __bind(this.setOverviewSize, this);
        this.active_menu_item = __bind(this.active_menu_item, this);
        this.clear_timers = __bind(this.clear_timers, this);
        this.close_menu = __bind(this.close_menu, this);
        this.open_menu = __bind(this.open_menu, this);
        this._onMenuClick = __bind(this._onMenuClick, this);
        this._onMouseWheel = __bind(this._onMouseWheel, this);
        var self;
        self = this;
        this.directorsNav = $('#directors_nav');
        this.overview = this.directorsNav.children();
        this.typeSelector = $('#type_selector ul');
        this.typeList = $('.type_list');
        this.categoryLinks = $('.category-link');
        this.menu = $('#menu');
        this.currentList = null;
        this.tempMenuItem = $('#menu .active');
        this.overviewSizeSet = false;
        this.timers = [];
        this.menuOpened = false;
        this.search = new SearchForm();
        this.newsletter = new NewsletterForm();
        this.events();
        setTimeout((function(_this) {
            return function() {
                return _this.setOverviewSize();
            };
        })(this), 10);
        this.directorsNav.removeClass('noAnim');
    }

    Menu.prototype.events = function() {
        var self;
        self = this;
        this.menu.on('click', 'a, span', this._onMenuClick);
        return this.directorsNav.find('.close_button').on('click', (function(_this) {
            return function() {
                return _this.close_menu();
            };
        })(this));
    };

    Menu.prototype._onMouseWheel = function(e) {
        return e.preventDefault();
    };

    Menu.prototype._onMenuClick = function(e) {
        var $this, isA, klass;
        $this = $(e.currentTarget);
        isA = $this.attr('href') || undefined;
        klass = $this.parent().attr('class') || '';
        $this.parent().addClass('active').siblings().removeClass('active');
        if (klass.match('active') && this.menuOpened) {
            return this.close_menu();
        } else if (!isA) {
            return this.open_menu();
        }
    };

    Menu.prototype.open_menu = function() {
        this.clear_timers();
        this.menuOpened = true;
        this.directorsNav.width(this.menuW);
        this.typeList.css({
            'display': 'block'
        });
        this.timers.push(setTimeout((function(_this) {
            return function() {
                return _this.typeList.css({
                    'opacity': 1
                });
            };
        })(this), 200));
        return $('body').on('mousewheel', this._onMouseWheel);
    };

    Menu.prototype.close_menu = function() {
        this.clear_timers();
        this.menuOpened = false;
        this.timers.push(setTimeout((function(_this) {
            return function() {
                _this.typeList.css('opacity', 0);
                return _this.directorsNav.width(0);
            };
        })(this), 100));
        this.timers.push(setTimeout((function(_this) {
            return function() {
                return _this.typeList.css('display', 'none');
            };
        })(this), 400));
        this.active_menu_item();
        this.search.clear();
        this.search.container.removeClass('opened');
        return $('body').off('mousewheel', this._onMouseWheel);
    };

    Menu.prototype.clear_timers = function() {
        $.each(this.timers, function() {
            return clearTimeout(this);
        });
        return this.timers.length = 0;
    };

    Menu.prototype.active_menu_item = function() {
        var itemActive, page, url;
        url = document.location.href.split('/');
        page = url[url.length - 1];
        itemActive = false;
        if (url[url.length - 1].length > 2) {
            $('#menu a').each((function(_this) {
                return function(key, item) {
                    var $this;
                    $this = $(item);
                    if ($this.attr('href').match(page)) {
                        $this.parent().addClass('active').siblings().removeClass('active');
                        return itemActive = true;
                    }
                };
            })(this));
        }
        if (itemActive === false) {
            return $('#menu li').removeClass('active');
        }
    };

    Menu.prototype.setOverviewSize = function() {
        return this.typeList.each(function() {
            var $this, overview;
            $this = $(this);
            overview = $this.children('.overview');
            return overview.css('margin-top', - overview.height() / 2);
        });
    };

    return Menu;

})();

NewsletterForm = (function() {
    function NewsletterForm() {
        this.events = __bind(this.events, this);
        this.ua = this.container = $('#newsletterContainer');
        this.form = this.container.find('form');
        this.field = this.container.find('input');
        this.submit = this.container.find('.submit');
        this.mask = this.container.find('.mask');
        this.error = this.container.find('.error');
        this.errorTimer = null;
        this.events();
    }

    NewsletterForm.prototype.events = function() {
        $('#newsletter_button').on('click', (function(_this) {
            return function() {
                _this.container.addClass('opened');
                return setTimeout(function() {
                    return _this.field.focus();
                }, 100);
            };
        })(this));
        this.container.find('.close_button').on('click', (function(_this) {
            return function() {
                _this.container.removeClass('opened');
                return _this.field.val('').blur();
            };
        })(this));
        this.currentResponseIndex = - 1;
        this.form.on('submit', (function(_this) {
            return function(e) {
                _this.sendEmail();
                return e.preventDefault();
            };
        })(this));
        return this.submit.on('click', (function(_this) {
            return function() {
                return _this.sendEmail();
            };
        })(this));
    };

    NewsletterForm.prototype.sendEmail = function(keyword) {
        if (this.request) {
            this.request.abort();
        }
        return $.ajax({
            url: ROOT_WEB + 'services/newsletter/save/15/' + this.field.val(),
            success: (function(_this) {
                return function(response) {
                    var result;
                    result = response.result.result;
                    return _this.displayError(result.message, result.passed);
                };
            })(this),
            error: (function(_this) {
                return function(response) {};
            })(this)
        });
    };

    NewsletterForm.prototype.displayError = function(message, status) {
        this.error.removeClass('valid');
        clearTimeout(this.errorTimer);
        this.error.text(message);
        if (status) {
            this.error.addClass('valid');
            return this.errorTimer = setTimeout((function(_this) {
                return function() {
                    _this.error.text('');
                    _this.field.val('');
                    return _this.container.removeClass('opened');
                };
            })(this), 2000);
        }
    };

    NewsletterForm.prototype.clear = function() {
        this.field.val('');
        this.list.html('');
        return this.form.blur();
    };

    return NewsletterForm;

})();

SearchForm = (function() {
    function SearchForm() {
        this.events = __bind(this.events, this);
        this.container = $('#searchContainer');
        this.form = this.container.find('form');
        this.field = this.container.find('input');
        this.list = this.container.find('ul');
        this.field.attr('autocomplete', 'off');
        this.events();
    }

    SearchForm.prototype.events = function() {
        $('#search_button').on('click', (function(_this) {
            return function() {
                _this.container.addClass('opened');
                return setTimeout(function() {
                    return _this.field.focus();
                }, 100);
            };
        })(this));
        this.container.find('.close_button').on('click', (function(_this) {
            return function() {
                _this.container.removeClass('opened');
                return _this.field.val('').blur();
            };
        })(this));
        this.currentResponseIndex = - 1;
        this.field.on('keyup', (function(_this) {
            return function(e) {
                var results, val, _ref;
                results = _this.list.children('li:not(.title)');
                val = _this.field.val();
                results.removeClass('hover');
                if (e.keyCode === 40) {
                    _this.currentResponseIndex++;
                } else if (e.keyCode === 38) {
                    _this.currentResponseIndex--;
                }
                if ((_ref = e.keyCode) === 40 || _ref === 38) {
                    if (_this.currentResponseIndex < 0) {
                        _this.currentResponseIndex = 0;
                    } else if (_this.currentResponseIndex > results.length - 1) {
                        _this.currentResponseIndex = results.length - 1;
                    }
                    results.eq(_this.currentResponseIndex).addClass('hover');
                    _this.field.val(val);
                    return e.preventDefault();
                } else {
                    _this.currentResponseIndex = - 1;
                    if (val !== '') {
                        return _this.getMatches(_this.field.val());
                    } else {
                        return _this.list.html('');
                    }
                }
            };
        })(this));
        return this.form.on('submit', (function(_this) {
            return function(e) {
                _this.list.find('.hover').children('a').trigger('click');
                return e.preventDefault();
            };
        })(this));
    };

    SearchForm.prototype.getMatches = function(keyword) {
        if (this.request) {
            this.request.abort();
        }
        return $.ajax({
            url: ROOT_WEB + 'services/search/list/' + entityId + '/' + keyword,
            success: (function(_this) {
                return function(response) {
                    return _this.displayResults(response.result);
                };
            })(this),
            error: (function(_this) {
                return function(response) {};
            })(this)
        });
    };

    SearchForm.prototype.displayResults = function(items) {
        var html;
        html = '';
        if (items) {
            if (items.directors.length) {
                html += '<li class="title">Directors</li>';
                $.each(items.directors, (function(_this) {
                    return function(key, director) {
                        return html += '<li><a href="' + ROOT_WEB + LANG + '/directors/' + director.lower + '-' + director.id + '">' + director.director + '</a></li>';
                    };
                })(this));
            }
            if (items.medias.length) {
                html += '<li class="title">Brands</li>';
                $.each(items.medias, (function(_this) {
                    return function(key, media) {
                        return html += '<li><a href="' + ROOT_WEB + LANG + '/brands/' + media.lower.toUpperCase() + '">' + media.title + '</a></li>';
                    };
                })(this));
            }
        }
        if (html === '') {
            html = '<li class="title">No results</li>';
        }
        return this.list.html(html);
    };

    SearchForm.prototype.clear = function() {
        this.field.val('');
        this.list.html('');
        return this.form.blur();
    };

    return SearchForm;

})();

Search = (function() {
    function Search() {
        this.container = $('#search');
        this.pages = this.container.find('.page');
        this.nav = this.container.find('nav');
        this.arrows = this.nav.find('.arrow');
        this.pageNav = this.nav.children('p').children('span');
        this.projects = new Projects();
        this.pageNb = 0;
        this.events();
    }

    Search.prototype.events = function() {
        return this.arrows.on('click', (function(_this) {
            return function(e) {
                var $this, klass, prev;
                $this = $(e.currentTarget);
                klass = $this.attr('class');
                if (_this.pageNb > 0 && klass.match('prev')) {
                    _this.pageNb--;
                } else if (_this.pageNb < _this.pages.length - 1 && klass.match('next')) {
                    _this.pageNb++;
                }
                _this.pages.css('display', 'none');
                _this.pages.eq(_this.pageNb).css('display', 'block');
                _this.pageNav.text(_this.pageNb + 1);
                prev = _this.pages.children('.active');
                if (prev.length) {
                    _this.projects.content_close(prev);
                    return _this.projects.movie_close(prev);
                }
            };
        })(this));
    };

    Search.prototype.destroy = function() {
        this.arrows.off('click');
        return this.projects.destroy();
    };

    return Search;

})();


