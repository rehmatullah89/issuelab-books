! function e(t, n, r) {
    function i(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var u = "function" == typeof require && require;
                if (!a && u) return u(s, !0);
                if (o) return o(s, !0);
                var l = new Error("Cannot find module '" + s + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = n[s] = {
                exports: {}
            };
            t[s][0].call(c.exports, function(e) {
                var n = t[s][1][e];
                return i(n ? n : e)
            }, c, c.exports, e, t, n, r)
        }
        return n[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) i(r[s]);
    return i
}({
    1: [function(e, t, n) {
        (function(t) {
            "use strict";
            var n = "undefined" != typeof window ? window.jQuery : "undefined" != typeof t ? t.jQuery : null,
                r = e("lodash");
            e("./polyfills"), e("bootstrap");
            var i = {
                    common: e("./modules/common"),
                    antispam: e("./modules/antispam.js"),
                    dateRangeFilter: e("./modules/date-range-filter"),
                    dateTimePicker: e("./modules/date-time-picker"),
                    deleteModal: e("./modules/delete-modal"),
                    multiSelect: e("./modules/multi-select"),
                    overlayModal: e("./modules/overlay-modal"),
                    repeater: e("./modules/repeater"),
                    searchInput: e("./modules/search-input"),
                    typeahead: e("./modules/typeahead"),
                    resourceSearch: e("./modules/resource-search"),
                    kcResourceSearch: e("./modules/kc-resource-search")
                },
                o = {
                    fire: function(e, t) {
                        var n = i;
                        "" !== e && n[e] && "function" == typeof n[e] && new n[e](t)
                    },
                    loadModules: function() {
                        var e = document.body.getAttribute("data-modules");
                        o.fire("common"), e && n.each(e.split(/\s+/), function(e, t) {
                            t = r.camelCase(t), o.fire(t)
                        })
                    }
                };
            n(document).ready(o.loadModules)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./modules/antispam.js": 84,
        "./modules/common": 85,
        "./modules/date-range-filter": 86,
        "./modules/date-time-picker": 87,
        "./modules/delete-modal": 88,
        "./modules/kc-resource-search": 90,
        "./modules/multi-select": 91,
        "./modules/overlay-modal": 92,
        "./modules/repeater": 93,
        "./modules/resource-search": 96,
        "./modules/search-input": 97,
        "./modules/typeahead": 98,
        "./polyfills": 99,
        bootstrap: 100,
        lodash: 9
    }],
    2: [function(e, t, n) {
        ! function(e, r) {
            "use strict";
            "object" == typeof n ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : e.IPv6 = r(e)
        }(this, function(e) {
            "use strict";

            function t(e) {
                var t = e.toLowerCase(),
                    n = t.split(":"),
                    r = n.length,
                    i = 8;
                "" === n[0] && "" === n[1] && "" === n[2] ? (n.shift(), n.shift()) : "" === n[0] && "" === n[1] ? n.shift() : "" === n[r - 1] && "" === n[r - 2] && n.pop(), r = n.length, -1 !== n[r - 1].indexOf(".") && (i = 7);
                var o;
                for (o = 0; r > o && "" !== n[o]; o++);
                if (i > o) {
                    for (n.splice(o, 1, "0000"); n.length < i;) n.splice(o, 0, "0000");
                    r = n.length
                }
                for (var s, a = 0; i > a; a++) {
                    s = n[a].split("");
                    for (var u = 0; 3 > u && ("0" === s[0] && s.length > 1); u++) s.splice(0, 1);
                    n[a] = s.join("")
                }
                var l = -1,
                    c = 0,
                    d = 0,
                    h = -1,
                    f = !1;
                for (a = 0; i > a; a++) f ? "0" === n[a] ? d += 1 : (f = !1, d > c && (l = h, c = d)) : "0" === n[a] && (f = !0, h = a, d = 1);
                d > c && (l = h, c = d), c > 1 && n.splice(l, c, ""), r = n.length;
                var p = "";
                for ("" === n[0] && (p = ":"), a = 0; r > a && (p += n[a], a !== r - 1); a++) p += ":";
                return "" === n[r - 1] && (p += ":"), p
            }

            function n() {
                return e.IPv6 === this && (e.IPv6 = r), this
            }
            var r = e && e.IPv6;
            return {
                best: t,
                noConflict: n
            }
        })
    }, {}],
    3: [function(e, t, n) {
        ! function(e, r) {
            "use strict";
            "object" == typeof n ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : e.SecondLevelDomains = r(e)
        }(this, function(e) {
            "use strict";
            var t = e && e.SecondLevelDomains,
                n = {
                    list: {
                        ac: " com gov mil net org ",
                        ae: " ac co gov mil name net org pro sch ",
                        af: " com edu gov net org ",
                        al: " com edu gov mil net org ",
                        ao: " co ed gv it og pb ",
                        ar: " com edu gob gov int mil net org tur ",
                        at: " ac co gv or ",
                        au: " asn com csiro edu gov id net org ",
                        ba: " co com edu gov mil net org rs unbi unmo unsa untz unze ",
                        bb: " biz co com edu gov info net org store tv ",
                        bh: " biz cc com edu gov info net org ",
                        bn: " com edu gov net org ",
                        bo: " com edu gob gov int mil net org tv ",
                        br: " adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",
                        bs: " com edu gov net org ",
                        bz: " du et om ov rg ",
                        ca: " ab bc mb nb nf nl ns nt nu on pe qc sk yk ",
                        ck: " biz co edu gen gov info net org ",
                        cn: " ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",
                        co: " com edu gov mil net nom org ",
                        cr: " ac c co ed fi go or sa ",
                        cy: " ac biz com ekloges gov ltd name net org parliament press pro tm ",
                        "do": " art com edu gob gov mil net org sld web ",
                        dz: " art asso com edu gov net org pol ",
                        ec: " com edu fin gov info med mil net org pro ",
                        eg: " com edu eun gov mil name net org sci ",
                        er: " com edu gov ind mil net org rochest w ",
                        es: " com edu gob nom org ",
                        et: " biz com edu gov info name net org ",
                        fj: " ac biz com info mil name net org pro ",
                        fk: " ac co gov net nom org ",
                        fr: " asso com f gouv nom prd presse tm ",
                        gg: " co net org ",
                        gh: " com edu gov mil org ",
                        gn: " ac com gov net org ",
                        gr: " com edu gov mil net org ",
                        gt: " com edu gob ind mil net org ",
                        gu: " com edu gov net org ",
                        hk: " com edu gov idv net org ",
                        hu: " 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",
                        id: " ac co go mil net or sch web ",
                        il: " ac co gov idf k12 muni net org ",
                        "in": " ac co edu ernet firm gen gov i ind mil net nic org res ",
                        iq: " com edu gov i mil net org ",
                        ir: " ac co dnssec gov i id net org sch ",
                        it: " edu gov ",
                        je: " co net org ",
                        jo: " com edu gov mil name net org sch ",
                        jp: " ac ad co ed go gr lg ne or ",
                        ke: " ac co go info me mobi ne or sc ",
                        kh: " com edu gov mil net org per ",
                        ki: " biz com de edu gov info mob net org tel ",
                        km: " asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",
                        kn: " edu gov net org ",
                        kr: " ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",
                        kw: " com edu gov net org ",
                        ky: " com edu gov net org ",
                        kz: " com edu gov mil net org ",
                        lb: " com edu gov net org ",
                        lk: " assn com edu gov grp hotel int ltd net ngo org sch soc web ",
                        lr: " com edu gov net org ",
                        lv: " asn com conf edu gov id mil net org ",
                        ly: " com edu gov id med net org plc sch ",
                        ma: " ac co gov m net org press ",
                        mc: " asso tm ",
                        me: " ac co edu gov its net org priv ",
                        mg: " com edu gov mil nom org prd tm ",
                        mk: " com edu gov inf name net org pro ",
                        ml: " com edu gov net org presse ",
                        mn: " edu gov org ",
                        mo: " com edu gov net org ",
                        mt: " com edu gov net org ",
                        mv: " aero biz com coop edu gov info int mil museum name net org pro ",
                        mw: " ac co com coop edu gov int museum net org ",
                        mx: " com edu gob net org ",
                        my: " com edu gov mil name net org sch ",
                        nf: " arts com firm info net other per rec store web ",
                        ng: " biz com edu gov mil mobi name net org sch ",
                        ni: " ac co com edu gob mil net nom org ",
                        np: " com edu gov mil net org ",
                        nr: " biz com edu gov info net org ",
                        om: " ac biz co com edu gov med mil museum net org pro sch ",
                        pe: " com edu gob mil net nom org sld ",
                        ph: " com edu gov i mil net ngo org ",
                        pk: " biz com edu fam gob gok gon gop gos gov net org web ",
                        pl: " art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",
                        pr: " ac biz com edu est gov info isla name net org pro prof ",
                        ps: " com edu gov net org plo sec ",
                        pw: " belau co ed go ne or ",
                        ro: " arts com firm info nom nt org rec store tm www ",
                        rs: " ac co edu gov in org ",
                        sb: " com edu gov net org ",
                        sc: " com edu gov net org ",
                        sh: " co com edu gov net nom org ",
                        sl: " com edu gov net org ",
                        st: " co com consulado edu embaixada gov mil net org principe saotome store ",
                        sv: " com edu gob org red ",
                        sz: " ac co org ",
                        tr: " av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",
                        tt: " aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",
                        tw: " club com ebiz edu game gov idv mil net org ",
                        mu: " ac co com gov net or org ",
                        mz: " ac co edu gov org ",
                        na: " co com ",
                        nz: " ac co cri geek gen govt health iwi maori mil net org parliament school ",
                        pa: " abo ac com edu gob ing med net nom org sld ",
                        pt: " com edu gov int net nome org publ ",
                        py: " com edu gov mil net org ",
                        qa: " com edu gov mil net org ",
                        re: " asso com nom ",
                        ru: " ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",
                        rw: " ac co com edu gouv gov int mil net ",
                        sa: " com edu gov med net org pub sch ",
                        sd: " com edu gov info med net org tv ",
                        se: " a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",
                        sg: " com edu gov idn net org per ",
                        sn: " art com edu gouv org perso univ ",
                        sy: " com edu gov mil net news org ",
                        th: " ac co go in mi net or ",
                        tj: " ac biz co com edu go gov info int mil name net nic org test web ",
                        tn: " agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",
                        tz: " ac co go ne or ",
                        ua: " biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",
                        ug: " ac co go ne or org sc ",
                        uk: " ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",
                        us: " dni fed isa kids nsn ",
                        uy: " com edu gub mil net org ",
                        ve: " co com edu gob info mil net org web ",
                        vi: " co com k12 net org ",
                        vn: " ac biz com edu gov health info int name net org pro ",
                        ye: " co com gov ltd me net org plc ",
                        yu: " ac co edu gov org ",
                        za: " ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",
                        zm: " ac co com edu gov net org sch "
                    },
                    has: function(e) {
                        var t = e.lastIndexOf(".");
                        if (0 >= t || t >= e.length - 1) return !1;
                        var r = e.lastIndexOf(".", t - 1);
                        if (0 >= r || r >= t - 1) return !1;
                        var i = n.list[e.slice(t + 1)];
                        return i ? i.indexOf(" " + e.slice(r + 1, t) + " ") >= 0 : !1
                    },
                    is: function(e) {
                        var t = e.lastIndexOf(".");
                        if (0 >= t || t >= e.length - 1) return !1;
                        var r = e.lastIndexOf(".", t - 1);
                        if (r >= 0) return !1;
                        var i = n.list[e.slice(t + 1)];
                        return i ? i.indexOf(" " + e.slice(0, t) + " ") >= 0 : !1
                    },
                    get: function(e) {
                        var t = e.lastIndexOf(".");
                        if (0 >= t || t >= e.length - 1) return null;
                        var r = e.lastIndexOf(".", t - 1);
                        if (0 >= r || r >= t - 1) return null;
                        var i = n.list[e.slice(t + 1)];
                        return i ? i.indexOf(" " + e.slice(r + 1, t) + " ") < 0 ? null : e.slice(r + 1) : null
                    },
                    noConflict: function() {
                        return e.SecondLevelDomains === this && (e.SecondLevelDomains = t), this
                    }
                };
            return n
        })
    }, {}],
    4: [function(e, t, n) {
        ! function(r, i) {
            "use strict";
            "object" == typeof n ? t.exports = i(e("./punycode"), e("./IPv6"), e("./SecondLevelDomains")) : "function" == typeof define && define.amd ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], i) : r.URI = i(r.punycode, r.IPv6, r.SecondLevelDomains, r)
        }(this, function(e, t, n, r) {
            "use strict";

            function i(e, t) {
                var n = arguments.length >= 1,
                    r = arguments.length >= 2;
                if (!(this instanceof i)) return n ? r ? new i(e, t) : new i(e) : new i;
                if (void 0 === e) {
                    if (n) throw new TypeError("undefined is not a valid argument for URI");
                    e = "undefined" != typeof location ? location.href + "" : ""
                }
                return this.href(e), void 0 !== t ? this.absoluteTo(t) : this
            }

            function o(e) {
                return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
            }

            function s(e) {
                return void 0 === e ? "Undefined" : String(Object.prototype.toString.call(e)).slice(8, -1)
            }

            function a(e) {
                return "Array" === s(e)
            }

            function u(e, t) {
                var n, r, i = {};
                if ("RegExp" === s(t)) i = null;
                else if (a(t))
                    for (n = 0, r = t.length; r > n; n++) i[t[n]] = !0;
                else i[t] = !0;
                for (n = 0, r = e.length; r > n; n++) {
                    var o = i && void 0 !== i[e[n]] || !i && t.test(e[n]);
                    o && (e.splice(n, 1), r--, n--)
                }
                return e
            }

            function l(e, t) {
                var n, r;
                if (a(t)) {
                    for (n = 0, r = t.length; r > n; n++)
                        if (!l(e, t[n])) return !1;
                    return !0
                }
                var i = s(t);
                for (n = 0, r = e.length; r > n; n++)
                    if ("RegExp" === i) {
                        if ("string" == typeof e[n] && e[n].match(t)) return !0
                    } else if (e[n] === t) return !0;
                return !1
            }

            function c(e, t) {
                if (!a(e) || !a(t)) return !1;
                if (e.length !== t.length) return !1;
                e.sort(), t.sort();
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function d(e) {
                return escape(e)
            }

            function h(e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, d).replace(/\*/g, "%2A")
            }

            function f(e) {
                return function(t, n) {
                    return void 0 === t ? this._parts[e] || "" : (this._parts[e] = t || null, this.build(!n), this)
                }
            }

            function p(e, t) {
                return function(n, r) {
                    return void 0 === n ? this._parts[e] || "" : (null !== n && (n += "", n.charAt(0) === t && (n = n.substring(1))), this._parts[e] = n, this.build(!r), this)
                }
            }
            var m = r && r.URI;
            i.version = "1.16.0";
            var g = i.prototype,
                v = Object.prototype.hasOwnProperty;
            i._parts = function() {
                return {
                    protocol: null,
                    username: null,
                    password: null,
                    hostname: null,
                    urn: null,
                    port: null,
                    path: null,
                    query: null,
                    fragment: null,
                    duplicateQueryParameters: i.duplicateQueryParameters,
                    escapeQuerySpace: i.escapeQuerySpace
                }
            }, i.duplicateQueryParameters = !1, i.escapeQuerySpace = !0, i.protocol_expression = /^[a-z][a-z0-9.+-]*$/i, i.idn_expression = /[^a-z0-9\.-]/i, i.punycode_expression = /(xn--)/i, i.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, i.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/, i.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?������]))/gi, i.findUri = {
                start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
                end: /[\s\r\n]|$/,
                trim: /[`!()\[\]{};:'".,<>?�������]+$/
            }, i.defaultPorts = {
                http: "80",
                https: "443",
                ftp: "21",
                gopher: "70",
                ws: "80",
                wss: "443"
            }, i.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/, i.domAttributes = {
                a: "href",
                blockquote: "cite",
                link: "href",
                base: "href",
                script: "src",
                form: "action",
                img: "src",
                area: "href",
                iframe: "src",
                embed: "src",
                source: "src",
                track: "src",
                input: "src",
                audio: "src",
                video: "src"
            }, i.getDomAttribute = function(e) {
                if (!e || !e.nodeName) return void 0;
                var t = e.nodeName.toLowerCase();
                return "input" === t && "image" !== e.type ? void 0 : i.domAttributes[t]
            }, i.encode = h, i.decode = decodeURIComponent, i.iso8859 = function() {
                i.encode = escape, i.decode = unescape
            }, i.unicode = function() {
                i.encode = h, i.decode = decodeURIComponent
            }, i.characters = {
                pathname: {
                    encode: {
                        expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
                        map: {
                            "%24": "$",
                            "%26": "&",
                            "%2B": "+",
                            "%2C": ",",
                            "%3B": ";",
                            "%3D": "=",
                            "%3A": ":",
                            "%40": "@"
                        }
                    },
                    decode: {
                        expression: /[\/\?#]/g,
                        map: {
                            "/": "%2F",
                            "?": "%3F",
                            "#": "%23"
                        }
                    }
                },
                reserved: {
                    encode: {
                        expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
                        map: {
                            "%3A": ":",
                            "%2F": "/",
                            "%3F": "?",
                            "%23": "#",
                            "%5B": "[",
                            "%5D": "]",
                            "%40": "@",
                            "%21": "!",
                            "%24": "$",
                            "%26": "&",
                            "%27": "'",
                            "%28": "(",
                            "%29": ")",
                            "%2A": "*",
                            "%2B": "+",
                            "%2C": ",",
                            "%3B": ";",
                            "%3D": "="
                        }
                    }
                },
                urnpath: {
                    encode: {
                        expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,
                        map: {
                            "%21": "!",
                            "%24": "$",
                            "%27": "'",
                            "%28": "(",
                            "%29": ")",
                            "%2A": "*",
                            "%2B": "+",
                            "%2C": ",",
                            "%3B": ";",
                            "%3D": "=",
                            "%40": "@"
                        }
                    },
                    decode: {
                        expression: /[\/\?#:]/g,
                        map: {
                            "/": "%2F",
                            "?": "%3F",
                            "#": "%23",
                            ":": "%3A"
                        }
                    }
                }
            }, i.encodeQuery = function(e, t) {
                var n = i.encode(e + "");
                return void 0 === t && (t = i.escapeQuerySpace), t ? n.replace(/%20/g, "+") : n
            }, i.decodeQuery = function(e, t) {
                e += "", void 0 === t && (t = i.escapeQuerySpace);
                try {
                    return i.decode(t ? e.replace(/\+/g, "%20") : e)
                } catch (n) {
                    return e
                }
            };
            var y, _ = {
                    encode: "encode",
                    decode: "decode"
                },
                b = function(e, t) {
                    return function(n) {
                        try {
                            return i[t](n + "").replace(i.characters[e][t].expression, function(n) {
                                return i.characters[e][t].map[n]
                            })
                        } catch (r) {
                            return n
                        }
                    }
                };
            for (y in _) i[y + "PathSegment"] = b("pathname", _[y]), i[y + "UrnPathSegment"] = b("urnpath", _[y]);
            var w = function(e, t, n) {
                return function(r) {
                    var o;
                    o = n ? function(e) {
                        return i[t](i[n](e))
                    } : i[t];
                    for (var s = (r + "").split(e), a = 0, u = s.length; u > a; a++) s[a] = o(s[a]);
                    return s.join(e)
                }
            };
            i.decodePath = w("/", "decodePathSegment"), i.decodeUrnPath = w(":", "decodeUrnPathSegment"), i.recodePath = w("/", "encodePathSegment", "decode"), i.recodeUrnPath = w(":", "encodeUrnPathSegment", "decode"), i.encodeReserved = b("reserved", "encode"), i.parse = function(e, t) {
                var n;
                return t || (t = {}), n = e.indexOf("#"), n > -1 && (t.fragment = e.substring(n + 1) || null, e = e.substring(0, n)), n = e.indexOf("?"), n > -1 && (t.query = e.substring(n + 1) || null, e = e.substring(0, n)), "//" === e.substring(0, 2) ? (t.protocol = null, e = e.substring(2), e = i.parseAuthority(e, t)) : (n = e.indexOf(":"), n > -1 && (t.protocol = e.substring(0, n) || null, t.protocol && !t.protocol.match(i.protocol_expression) ? t.protocol = void 0 : "//" === e.substring(n + 1, n + 3) ? (e = e.substring(n + 3), e = i.parseAuthority(e, t)) : (e = e.substring(n + 1), t.urn = !0))), t.path = e, t
            }, i.parseHost = function(e, t) {
                e = e.replace(/\\/g, "/");
                var n, r, i = e.indexOf("/");
                if (-1 === i && (i = e.length), "[" === e.charAt(0)) n = e.indexOf("]"), t.hostname = e.substring(1, n) || null, t.port = e.substring(n + 2, i) || null, "/" === t.port && (t.port = null);
                else {
                    var o = e.indexOf(":"),
                        s = e.indexOf("/"),
                        a = e.indexOf(":", o + 1); - 1 !== a && (-1 === s || s > a) ? (t.hostname = e.substring(0, i) || null, t.port = null) : (r = e.substring(0, i).split(":"), t.hostname = r[0] || null, t.port = r[1] || null)
                }
                return t.hostname && "/" !== e.substring(i).charAt(0) && (i++, e = "/" + e), e.substring(i) || "/"
            }, i.parseAuthority = function(e, t) {
                return e = i.parseUserinfo(e, t), i.parseHost(e, t)
            }, i.parseUserinfo = function(e, t) {
                var n, r = e.indexOf("/"),
                    o = e.lastIndexOf("@", r > -1 ? r : e.length - 1);
                return o > -1 && (-1 === r || r > o) ? (n = e.substring(0, o).split(":"), t.username = n[0] ? i.decode(n[0]) : null, n.shift(), t.password = n[0] ? i.decode(n.join(":")) : null, e = e.substring(o + 1)) : (t.username = null, t.password = null), e
            }, i.parseQuery = function(e, t) {
                if (!e) return {};
                if (e = e.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, ""), !e) return {};
                for (var n, r, o, s = {}, a = e.split("&"), u = a.length, l = 0; u > l; l++) n = a[l].split("="), r = i.decodeQuery(n.shift(), t), o = n.length ? i.decodeQuery(n.join("="), t) : null, v.call(s, r) ? (("string" == typeof s[r] || null === s[r]) && (s[r] = [s[r]]), s[r].push(o)) : s[r] = o;
                return s
            }, i.build = function(e) {
                var t = "";
                return e.protocol && (t += e.protocol + ":"), e.urn || !t && !e.hostname || (t += "//"), t += i.buildAuthority(e) || "", "string" == typeof e.path && ("/" !== e.path.charAt(0) && "string" == typeof e.hostname && (t += "/"), t += e.path), "string" == typeof e.query && e.query && (t += "?" + e.query), "string" == typeof e.fragment && e.fragment && (t += "#" + e.fragment), t
            }, i.buildHost = function(e) {
                var t = "";
                return e.hostname ? (t += i.ip6_expression.test(e.hostname) ? "[" + e.hostname + "]" : e.hostname, e.port && (t += ":" + e.port), t) : ""
            }, i.buildAuthority = function(e) {
                return i.buildUserinfo(e) + i.buildHost(e)
            }, i.buildUserinfo = function(e) {
                var t = "";
                return e.username && (t += i.encode(e.username), e.password && (t += ":" + i.encode(e.password)), t += "@"), t
            }, i.buildQuery = function(e, t, n) {
                var r, o, s, u, l = "";
                for (o in e)
                    if (v.call(e, o) && o)
                        if (a(e[o]))
                            for (r = {}, s = 0, u = e[o].length; u > s; s++) void 0 !== e[o][s] && void 0 === r[e[o][s] + ""] && (l += "&" + i.buildQueryParameter(o, e[o][s], n), t !== !0 && (r[e[o][s] + ""] = !0));
                        else void 0 !== e[o] && (l += "&" + i.buildQueryParameter(o, e[o], n));
                return l.substring(1)
            }, i.buildQueryParameter = function(e, t, n) {
                return i.encodeQuery(e, n) + (null !== t ? "=" + i.encodeQuery(t, n) : "")
            }, i.addQuery = function(e, t, n) {
                if ("object" == typeof t)
                    for (var r in t) v.call(t, r) && i.addQuery(e, r, t[r]);
                else {
                    if ("string" != typeof t) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
                    if (void 0 === e[t]) return void(e[t] = n);
                    "string" == typeof e[t] && (e[t] = [e[t]]), a(n) || (n = [n]), e[t] = (e[t] || []).concat(n)
                }
            }, i.removeQuery = function(e, t, n) {
                var r, o, l;
                if (a(t))
                    for (r = 0, o = t.length; o > r; r++) e[t[r]] = void 0;
                else if ("RegExp" === s(t))
                    for (l in e) t.test(l) && (e[l] = void 0);
                else if ("object" == typeof t)
                    for (l in t) v.call(t, l) && i.removeQuery(e, l, t[l]);
                else {
                    if ("string" != typeof t) throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");
                    void 0 !== n ? "RegExp" === s(n) ? e[t] = !a(e[t]) && n.test(e[t]) ? void 0 : u(e[t], n) : e[t] === n ? e[t] = void 0 : a(e[t]) && (e[t] = u(e[t], n)) : e[t] = void 0
                }
            }, i.hasQuery = function(e, t, n, r) {
                if ("object" == typeof t) {
                    for (var o in t)
                        if (v.call(t, o) && !i.hasQuery(e, o, t[o])) return !1;
                    return !0
                }
                if ("string" != typeof t) throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");
                switch (s(n)) {
                    case "Undefined":
                        return t in e;
                    case "Boolean":
                        var u = Boolean(a(e[t]) ? e[t].length : e[t]);
                        return n === u;
                    case "Function":
                        return !!n(e[t], t, e);
                    case "Array":
                        if (!a(e[t])) return !1;
                        var d = r ? l : c;
                        return d(e[t], n);
                    case "RegExp":
                        return a(e[t]) ? r ? l(e[t], n) : !1 : Boolean(e[t] && e[t].match(n));
                    case "Number":
                        n = String(n);
                    case "String":
                        return a(e[t]) ? r ? l(e[t], n) : !1 : e[t] === n;
                    default:
                        throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")
                }
            }, i.commonPath = function(e, t) {
                var n, r = Math.min(e.length, t.length);
                for (n = 0; r > n; n++)
                    if (e.charAt(n) !== t.charAt(n)) {
                        n--;
                        break
                    }
                return 1 > n ? e.charAt(0) === t.charAt(0) && "/" === e.charAt(0) ? "/" : "" : (("/" !== e.charAt(n) || "/" !== t.charAt(n)) && (n = e.substring(0, n).lastIndexOf("/")), e.substring(0, n + 1))
            }, i.withinString = function(e, t, n) {
                n || (n = {});
                var r = n.start || i.findUri.start,
                    o = n.end || i.findUri.end,
                    s = n.trim || i.findUri.trim,
                    a = /[a-z0-9-]=["']?$/i;
                for (r.lastIndex = 0;;) {
                    var u = r.exec(e);
                    if (!u) break;
                    var l = u.index;
                    if (n.ignoreHtml) {
                        var c = e.slice(Math.max(l - 3, 0), l);
                        if (c && a.test(c)) continue
                    }
                    var d = l + e.slice(l).search(o),
                        h = e.slice(l, d).replace(s, "");
                    if (!n.ignore || !n.ignore.test(h)) {
                        d = l + h.length;
                        var f = t(h, l, d, e);
                        e = e.slice(0, l) + f + e.slice(d), r.lastIndex = l + f.length
                    }
                }
                return r.lastIndex = 0, e
            }, i.ensureValidHostname = function(t) {
                if (t.match(i.invalid_hostname_characters)) {
                    if (!e) throw new TypeError('Hostname "' + t + '" contains characters other than [A-Z0-9.-] and Punycode.js is not available');
                    if (e.toASCII(t).match(i.invalid_hostname_characters)) throw new TypeError('Hostname "' + t + '" contains characters other than [A-Z0-9.-]')
                }
            }, i.noConflict = function(e) {
                if (e) {
                    var t = {
                        URI: this.noConflict()
                    };
                    return r.URITemplate && "function" == typeof r.URITemplate.noConflict && (t.URITemplate = r.URITemplate.noConflict()), r.IPv6 && "function" == typeof r.IPv6.noConflict && (t.IPv6 = r.IPv6.noConflict()), r.SecondLevelDomains && "function" == typeof r.SecondLevelDomains.noConflict && (t.SecondLevelDomains = r.SecondLevelDomains.noConflict()), t
                }
                return r.URI === this && (r.URI = m), this
            }, g.build = function(e) {
                return e === !0 ? this._deferred_build = !0 : (void 0 === e || this._deferred_build) && (this._string = i.build(this._parts), this._deferred_build = !1), this
            }, g.clone = function() {
                return new i(this)
            }, g.valueOf = g.toString = function() {
                return this.build(!1)._string
            }, g.protocol = f("protocol"), g.username = f("username"), g.password = f("password"), g.hostname = f("hostname"), g.port = f("port"), g.query = p("query", "?"), g.fragment = p("fragment", "#"), g.search = function(e, t) {
                var n = this.query(e, t);
                return "string" == typeof n && n.length ? "?" + n : n
            }, g.hash = function(e, t) {
                var n = this.fragment(e, t);
                return "string" == typeof n && n.length ? "#" + n : n
            }, g.pathname = function(e, t) {
                if (void 0 === e || e === !0) {
                    var n = this._parts.path || (this._parts.hostname ? "/" : "");
                    return e ? (this._parts.urn ? i.decodeUrnPath : i.decodePath)(n) : n
                }
                return this._parts.path = this._parts.urn ? e ? i.recodeUrnPath(e) : "" : e ? i.recodePath(e) : "/", this.build(!t), this
            }, g.path = g.pathname, g.href = function(e, t) {
                var n;
                if (void 0 === e) return this.toString();
                this._string = "", this._parts = i._parts();
                var r = e instanceof i,
                    o = "object" == typeof e && (e.hostname || e.path || e.pathname);
                if (e.nodeName) {
                    var s = i.getDomAttribute(e);
                    e = e[s] || "", o = !1
                }
                if (!r && o && void 0 !== e.pathname && (e = e.toString()), "string" == typeof e || e instanceof String) this._parts = i.parse(String(e), this._parts);
                else {
                    if (!r && !o) throw new TypeError("invalid input");
                    var a = r ? e._parts : e;
                    for (n in a) v.call(this._parts, n) && (this._parts[n] = a[n])
                }
                return this.build(!t), this
            }, g.is = function(e) {
                var t = !1,
                    r = !1,
                    o = !1,
                    s = !1,
                    a = !1,
                    u = !1,
                    l = !1,
                    c = !this._parts.urn;
                switch (this._parts.hostname && (c = !1, r = i.ip4_expression.test(this._parts.hostname), o = i.ip6_expression.test(this._parts.hostname), t = r || o, s = !t, a = s && n && n.has(this._parts.hostname), u = s && i.idn_expression.test(this._parts.hostname), l = s && i.punycode_expression.test(this._parts.hostname)), e.toLowerCase()) {
                    case "relative":
                        return c;
                    case "absolute":
                        return !c;
                    case "domain":
                    case "name":
                        return s;
                    case "sld":
                        return a;
                    case "ip":
                        return t;
                    case "ip4":
                    case "ipv4":
                    case "inet4":
                        return r;
                    case "ip6":
                    case "ipv6":
                    case "inet6":
                        return o;
                    case "idn":
                        return u;
                    case "url":
                        return !this._parts.urn;
                    case "urn":
                        return !!this._parts.urn;
                    case "punycode":
                        return l
                }
                return null
            };
            var x = g.protocol,
                k = g.port,
                C = g.hostname;
            g.protocol = function(e, t) {
                if (void 0 !== e && e && (e = e.replace(/:(\/\/)?$/, ""), !e.match(i.protocol_expression))) throw new TypeError('Protocol "' + e + "\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");
                return x.call(this, e, t)
            }, g.scheme = g.protocol, g.port = function(e, t) {
                if (this._parts.urn) return void 0 === e ? "" : this;
                if (void 0 !== e && (0 === e && (e = null), e && (e += "", ":" === e.charAt(0) && (e = e.substring(1)), e.match(/[^0-9]/)))) throw new TypeError('Port "' + e + '" contains characters other than [0-9]');
                return k.call(this, e, t)
            }, g.hostname = function(e, t) {
                if (this._parts.urn) return void 0 === e ? "" : this;
                if (void 0 !== e) {
                    var n = {},
                        r = i.parseHost(e, n);
                    if ("/" !== r) throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]');
                    e = n.hostname
                }
                return C.call(this, e, t)
            }, g.host = function(e, t) {
                if (this._parts.urn) return void 0 === e ? "" : this;
                if (void 0 === e) return this._parts.hostname ? i.buildHost(this._parts) : "";
                var n = i.parseHost(e, this._parts);
                if ("/" !== n) throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]');
                return this.build(!t), this
            }, g.authority = function(e, t) {
                if (this._parts.urn) return void 0 === e ? "" : this;
                if (void 0 === e) return this._parts.hostname ? i.buildAuthority(this._parts) : "";
                var n = i.parseAuthority(e, this._parts);
                if ("/" !== n) throw new TypeError('Hostname "' + e + '" contains characters other than [A-Z0-9.-]');
                return this.build(!t), this
            }, g.userinfo = function(e, t) {
                if (this._parts.urn) return void 0 === e ? "" : this;
                if (void 0 === e) {
                    if (!this._parts.username) return "";
                    var n = i.buildUserinfo(this._parts);
                    return n.substring(0, n.length - 1)
                }
                return "@" !== e[e.length - 1] && (e += "@"), i.parseUserinfo(e, this._parts), this.build(!t), this
            }, g.resource = function(e, t) {
                var n;
                return void 0 === e ? this.path() + this.search() + this.hash() : (n = i.parse(e), this._parts.path = n.path, this._parts.query = n.query, this._parts.fragment = n.fragment, this.build(!t), this)
            }, g.subdomain = function(e, t) {
                if (this._parts.urn) return void 0 === e ? "" : this;
                if (void 0 === e) {
                    if (!this._parts.hostname || this.is("IP")) return "";
                    var n = this._parts.hostname.length - this.domain().length - 1;
                    return this._parts.hostname.substring(0, n) || ""
                }
                var r = this._parts.hostname.length - this.domain().length,
                    s = this._parts.hostname.substring(0, r),
                    a = new RegExp("^" + o(s));
                return e && "." !== e.charAt(e.length - 1) && (e += "."), e && i.ensureValidHostname(e), this._parts.hostname = this._parts.hostname.replace(a, e), this.build(!t), this
            }, g.domain = function(e, t) {
                if (this._parts.urn) return void 0 === e ? "" : this;
                if ("boolean" == typeof e && (t = e, e = void 0), void 0 === e) {
                    if (!this._parts.hostname || this.is("IP")) return "";
                    var n = this._parts.hostname.match(/\./g);
                    if (n && n.length < 2) return this._parts.hostname;
                    var r = this._parts.hostname.length - this.tld(t).length - 1;
                    return r = this._parts.hostname.lastIndexOf(".", r - 1) + 1, this._parts.hostname.substring(r) || ""
                }
                if (!e) throw new TypeError("cannot set domain empty");
                if (i.ensureValidHostname(e), !this._parts.hostname || this.is("IP")) this._parts.hostname = e;
                else {
                    var s = new RegExp(o(this.domain()) + "$");
                    this._parts.hostname = this._parts.hostname.replace(s, e)
                }
                return this.build(!t), this
            }, g.tld = function(e, t) {
                if (this._parts.urn) return void 0 === e ? "" : this;
                if ("boolean" == typeof e && (t = e, e = void 0), void 0 === e) {
                    if (!this._parts.hostname || this.is("IP")) return "";
                    var r = this._parts.hostname.lastIndexOf("."),
                        i = this._parts.hostname.substring(r + 1);
                    return t !== !0 && n && n.list[i.toLowerCase()] ? n.get(this._parts.hostname) || i : i
                }
                var s;
                if (!e) throw new TypeError("cannot set TLD empty");
                if (e.match(/[^a-zA-Z0-9-]/)) {
                    if (!n || !n.is(e)) throw new TypeError('TLD "' + e + '" contains characters other than [A-Z0-9]');
                    s = new RegExp(o(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(s, e)
                } else {
                    if (!this._parts.hostname || this.is("IP")) throw new ReferenceError("cannot set TLD on non-domain host");
                    s = new RegExp(o(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(s, e)
                }
                return this.build(!t), this
            }, g.directory = function(e, t) {
                if (this._parts.urn) return void 0 === e ? "" : this;
                if (void 0 === e || e === !0) {
                    if (!this._parts.path && !this._parts.hostname) return "";
                    if ("/" === this._parts.path) return "/";
                    var n = this._parts.path.length - this.filename().length - 1,
                        r = this._parts.path.substring(0, n) || (this._parts.hostname ? "/" : "");
                    return e ? i.decodePath(r) : r
                }
                var s = this._parts.path.length - this.filename().length,
                    a = this._parts.path.substring(0, s),
                    u = new RegExp("^" + o(a));
                return this.is("relative") || (e || (e = "/"), "/" !== e.charAt(0) && (e = "/" + e)), e && "/" !== e.charAt(e.length - 1) && (e += "/"), e = i.recodePath(e), this._parts.path = this._parts.path.replace(u, e), this.build(!t), this
            }, g.filename = function(e, t) {
                if (this._parts.urn) return void 0 === e ? "" : this;
                if (void 0 === e || e === !0) {
                    if (!this._parts.path || "/" === this._parts.path) return "";
                    var n = this._parts.path.lastIndexOf("/"),
                        r = this._parts.path.substring(n + 1);
                    return e ? i.decodePathSegment(r) : r
                }
                var s = !1;
                "/" === e.charAt(0) && (e = e.substring(1)), e.match(/\.?\//) && (s = !0);
                var a = new RegExp(o(this.filename()) + "$");
                return e = i.recodePath(e), this._parts.path = this._parts.path.replace(a, e), s ? this.normalizePath(t) : this.build(!t), this
            }, g.suffix = function(e, t) {
                if (this._parts.urn) return void 0 === e ? "" : this;
                if (void 0 === e || e === !0) {
                    if (!this._parts.path || "/" === this._parts.path) return "";
                    var n, r, s = this.filename(),
                        a = s.lastIndexOf(".");
                    return -1 === a ? "" : (n = s.substring(a + 1), r = /^[a-z0-9%]+$/i.test(n) ? n : "", e ? i.decodePathSegment(r) : r)
                }
                "." === e.charAt(0) && (e = e.substring(1));
                var u, l = this.suffix();
                if (l) u = new RegExp(e ? o(l) + "$" : o("." + l) + "$");
                else {
                    if (!e) return this;
                    this._parts.path += "." + i.recodePath(e)
                }
                return u && (e = i.recodePath(e), this._parts.path = this._parts.path.replace(u, e)), this.build(!t), this
            }, g.segment = function(e, t, n) {
                var r = this._parts.urn ? ":" : "/",
                    i = this.path(),
                    o = "/" === i.substring(0, 1),
                    s = i.split(r);
                if (void 0 !== e && "number" != typeof e && (n = t, t = e, e = void 0), void 0 !== e && "number" != typeof e) throw new Error('Bad segment "' + e + '", must be 0-based integer');
                if (o && s.shift(), 0 > e && (e = Math.max(s.length + e, 0)), void 0 === t) return void 0 === e ? s : s[e];
                if (null === e || void 0 === s[e])
                    if (a(t)) {
                        s = [];
                        for (var u = 0, l = t.length; l > u; u++)(t[u].length || s.length && s[s.length - 1].length) && (s.length && !s[s.length - 1].length && s.pop(), s.push(t[u]))
                    } else(t || "string" == typeof t) && ("" === s[s.length - 1] ? s[s.length - 1] = t : s.push(t));
                else t ? s[e] = t : s.splice(e, 1);
                return o && s.unshift(""), this.path(s.join(r), n)
            }, g.segmentCoded = function(e, t, n) {
                var r, o, s;
                if ("number" != typeof e && (n = t, t = e, e = void 0), void 0 === t) {
                    if (r = this.segment(e, t, n), a(r))
                        for (o = 0, s = r.length; s > o; o++) r[o] = i.decode(r[o]);
                    else r = void 0 !== r ? i.decode(r) : void 0;
                    return r
                }
                if (a(t))
                    for (o = 0, s = t.length; s > o; o++) t[o] = i.encode(t[o]);
                else t = "string" == typeof t || t instanceof String ? i.encode(t) : t;
                return this.segment(e, t, n)
            };
            var D = g.query;
            return g.query = function(e, t) {
                if (e === !0) return i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);

                if ("function" == typeof e) {
                    var n = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace),
                        r = e.call(this, n);
                    return this._parts.query = i.buildQuery(r || n, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!t), this
                }
                return void 0 !== e && "string" != typeof e ? (this._parts.query = i.buildQuery(e, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!t), this) : D.call(this, e, t)
            }, g.setQuery = function(e, t, n) {
                var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
                if ("string" == typeof e || e instanceof String) r[e] = void 0 !== t ? t : null;
                else {
                    if ("object" != typeof e) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
                    for (var o in e) v.call(e, o) && (r[o] = e[o])
                }
                return this._parts.query = i.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof e && (n = t), this.build(!n), this
            }, g.addQuery = function(e, t, n) {
                var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
                return i.addQuery(r, e, void 0 === t ? null : t), this._parts.query = i.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof e && (n = t), this.build(!n), this
            }, g.removeQuery = function(e, t, n) {
                var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
                return i.removeQuery(r, e, t), this._parts.query = i.buildQuery(r, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof e && (n = t), this.build(!n), this
            }, g.hasQuery = function(e, t, n) {
                var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
                return i.hasQuery(r, e, t, n)
            }, g.setSearch = g.setQuery, g.addSearch = g.addQuery, g.removeSearch = g.removeQuery, g.hasSearch = g.hasQuery, g.normalize = function() {
                return this._parts.urn ? this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
            }, g.normalizeProtocol = function(e) {
                return "string" == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(), this.build(!e)), this
            }, g.normalizeHostname = function(n) {
                return this._parts.hostname && (this.is("IDN") && e ? this._parts.hostname = e.toASCII(this._parts.hostname) : this.is("IPv6") && t && (this._parts.hostname = t.best(this._parts.hostname)), this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!n)), this
            }, g.normalizePort = function(e) {
                return "string" == typeof this._parts.protocol && this._parts.port === i.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!e)), this
            }, g.normalizePath = function(e) {
                var t = this._parts.path;
                if (!t) return this;
                if (this._parts.urn) return this._parts.path = i.recodeUrnPath(this._parts.path), this.build(!e), this;
                if ("/" === this._parts.path) return this;
                var n, r, o, s = "";
                for ("/" !== t.charAt(0) && (n = !0, t = "/" + t), ("/.." === t.slice(-3) || "/." === t.slice(-2)) && (t += "/"), t = t.replace(/(\/(\.\/)+)|(\/\.$)/g, "/").replace(/\/{2,}/g, "/"), n && (s = t.substring(1).match(/^(\.\.\/)+/) || "", s && (s = s[0]));;) {
                    if (r = t.indexOf("/.."), -1 === r) break;
                    0 !== r ? (o = t.substring(0, r).lastIndexOf("/"), -1 === o && (o = r), t = t.substring(0, o) + t.substring(r + 3)) : t = t.substring(3)
                }
                return n && this.is("relative") && (t = s + t.substring(1)), t = i.recodePath(t), this._parts.path = t, this.build(!e), this
            }, g.normalizePathname = g.normalizePath, g.normalizeQuery = function(e) {
                return "string" == typeof this._parts.query && (this._parts.query.length ? this.query(i.parseQuery(this._parts.query, this._parts.escapeQuerySpace)) : this._parts.query = null, this.build(!e)), this
            }, g.normalizeFragment = function(e) {
                return this._parts.fragment || (this._parts.fragment = null, this.build(!e)), this
            }, g.normalizeSearch = g.normalizeQuery, g.normalizeHash = g.normalizeFragment, g.iso8859 = function() {
                var e = i.encode,
                    t = i.decode;
                i.encode = escape, i.decode = decodeURIComponent;
                try {
                    this.normalize()
                } finally {
                    i.encode = e, i.decode = t
                }
                return this
            }, g.unicode = function() {
                var e = i.encode,
                    t = i.decode;
                i.encode = h, i.decode = unescape;
                try {
                    this.normalize()
                } finally {
                    i.encode = e, i.decode = t
                }
                return this
            }, g.readable = function() {
                var t = this.clone();
                t.username("").password("").normalize();
                var n = "";
                if (t._parts.protocol && (n += t._parts.protocol + "://"), t._parts.hostname && (t.is("punycode") && e ? (n += e.toUnicode(t._parts.hostname), t._parts.port && (n += ":" + t._parts.port)) : n += t.host()), t._parts.hostname && t._parts.path && "/" !== t._parts.path.charAt(0) && (n += "/"), n += t.path(!0), t._parts.query) {
                    for (var r = "", o = 0, s = t._parts.query.split("&"), a = s.length; a > o; o++) {
                        var u = (s[o] || "").split("=");
                        r += "&" + i.decodeQuery(u[0], this._parts.escapeQuerySpace).replace(/&/g, "%26"), void 0 !== u[1] && (r += "=" + i.decodeQuery(u[1], this._parts.escapeQuerySpace).replace(/&/g, "%26"))
                    }
                    n += "?" + r.substring(1)
                }
                return n += i.decodeQuery(t.hash(), !0)
            }, g.absoluteTo = function(e) {
                var t, n, r, o = this.clone(),
                    s = ["protocol", "username", "password", "hostname", "port"];
                if (this._parts.urn) throw new Error("URNs do not have any generally defined hierarchical components");
                if (e instanceof i || (e = new i(e)), o._parts.protocol || (o._parts.protocol = e._parts.protocol), this._parts.hostname) return o;
                for (n = 0; r = s[n]; n++) o._parts[r] = e._parts[r];
                return o._parts.path ? ".." === o._parts.path.substring(-2) && (o._parts.path += "/") : (o._parts.path = e._parts.path, o._parts.query || (o._parts.query = e._parts.query)), "/" !== o.path().charAt(0) && (t = e.directory(), t = t ? t : 0 === e.path().indexOf("/") ? "/" : "", o._parts.path = (t ? t + "/" : "") + o._parts.path, o.normalizePath()), o.build(), o
            }, g.relativeTo = function(e) {
                var t, n, r, o, s, a = this.clone().normalize();
                if (a._parts.urn) throw new Error("URNs do not have any generally defined hierarchical components");
                if (e = new i(e).normalize(), t = a._parts, n = e._parts, o = a.path(), s = e.path(), "/" !== o.charAt(0)) throw new Error("URI is already relative");
                if ("/" !== s.charAt(0)) throw new Error("Cannot calculate a URI relative to another relative URI");
                if (t.protocol === n.protocol && (t.protocol = null), t.username !== n.username || t.password !== n.password) return a.build();
                if (null !== t.protocol || null !== t.username || null !== t.password) return a.build();
                if (t.hostname !== n.hostname || t.port !== n.port) return a.build();
                if (t.hostname = null, t.port = null, o === s) return t.path = "", a.build();
                if (r = i.commonPath(o, s), !r) return a.build();
                var u = n.path.substring(r.length).replace(/[^\/]*$/, "").replace(/.*?\//g, "../");
                return t.path = u + t.path.substring(r.length) || "./", a.build()
            }, g.equals = function(e) {
                var t, n, r, o = this.clone(),
                    s = new i(e),
                    u = {},
                    l = {},
                    d = {};
                if (o.normalize(), s.normalize(), o.toString() === s.toString()) return !0;
                if (t = o.query(), n = s.query(), o.query(""), s.query(""), o.toString() !== s.toString()) return !1;
                if (t.length !== n.length) return !1;
                u = i.parseQuery(t, this._parts.escapeQuerySpace), l = i.parseQuery(n, this._parts.escapeQuerySpace);
                for (r in u)
                    if (v.call(u, r)) {
                        if (a(u[r])) {
                            if (!c(u[r], l[r])) return !1
                        } else if (u[r] !== l[r]) return !1;
                        d[r] = !0
                    }
                for (r in l)
                    if (v.call(l, r) && !d[r]) return !1;
                return !0
            }, g.duplicateQueryParameters = function(e) {
                return this._parts.duplicateQueryParameters = !!e, this
            }, g.escapeQuerySpace = function(e) {
                return this._parts.escapeQuerySpace = !!e, this
            }, i
        })
    }, {
        "./IPv6": 2,
        "./SecondLevelDomains": 3,
        "./punycode": 5
    }],
    5: [function(e, t, n) {
        (function(e) {
            ! function(r) {
                function i(e) {
                    throw RangeError(j[e])
                }

                function o(e, t) {
                    for (var n = e.length; n--;) e[n] = t(e[n]);
                    return e
                }

                function s(e, t) {
                    return o(e.split(P), t).join(".")
                }

                function a(e) {
                    for (var t, n, r = [], i = 0, o = e.length; o > i;) t = e.charCodeAt(i++), t >= 55296 && 56319 >= t && o > i ? (n = e.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--)) : r.push(t);
                    return r
                }

                function u(e) {
                    return o(e, function(e) {
                        var t = "";
                        return e > 65535 && (e -= 65536, t += N(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += N(e)
                    }).join("")
                }

                function l(e) {
                    return 10 > e - 48 ? e - 22 : 26 > e - 65 ? e - 65 : 26 > e - 97 ? e - 97 : x
                }

                function c(e, t) {
                    return e + 22 + 75 * (26 > e) - ((0 != t) << 5)
                }

                function d(e, t, n) {
                    var r = 0;
                    for (e = n ? M(e / $) : e >> 1, e += M(e / t); e > I * C >> 1; r += x) e = M(e / I);
                    return M(r + (I + 1) * e / (e + D))
                }

                function h(e) {
                    var t, n, r, o, s, a, c, h, f, p, m = [],
                        g = e.length,
                        v = 0,
                        y = S,
                        _ = A;
                    for (n = e.lastIndexOf(T), 0 > n && (n = 0), r = 0; n > r; ++r) e.charCodeAt(r) >= 128 && i("not-basic"), m.push(e.charCodeAt(r));
                    for (o = n > 0 ? n + 1 : 0; g > o;) {
                        for (s = v, a = 1, c = x; o >= g && i("invalid-input"), h = l(e.charCodeAt(o++)), (h >= x || h > M((w - v) / a)) && i("overflow"), v += h * a, f = _ >= c ? k : c >= _ + C ? C : c - _, !(f > h); c += x) p = x - f, a > M(w / p) && i("overflow"), a *= p;
                        t = m.length + 1, _ = d(v - s, t, 0 == s), M(v / t) > w - y && i("overflow"), y += M(v / t), v %= t, m.splice(v++, 0, y)
                    }
                    return u(m)
                }

                function f(e) {
                    var t, n, r, o, s, u, l, h, f, p, m, g, v, y, _, b = [];
                    for (e = a(e), g = e.length, t = S, n = 0, s = A, u = 0; g > u; ++u) m = e[u], 128 > m && b.push(N(m));
                    for (r = o = b.length, o && b.push(T); g > r;) {
                        for (l = w, u = 0; g > u; ++u) m = e[u], m >= t && l > m && (l = m);
                        for (v = r + 1, l - t > M((w - n) / v) && i("overflow"), n += (l - t) * v, t = l, u = 0; g > u; ++u)
                            if (m = e[u], t > m && ++n > w && i("overflow"), m == t) {
                                for (h = n, f = x; p = s >= f ? k : f >= s + C ? C : f - s, !(p > h); f += x) _ = h - p, y = x - p, b.push(N(c(p + _ % y, 0))), h = M(_ / y);
                                b.push(N(c(h, 0))), s = d(n, v, r == o), n = 0, ++r
                            }++n, ++t
                    }
                    return b.join("")
                }

                function p(e) {
                    return s(e, function(e) {
                        return E.test(e) ? h(e.slice(4).toLowerCase()) : e
                    })
                }

                function m(e) {
                    return s(e, function(e) {
                        return O.test(e) ? "xn--" + f(e) : e
                    })
                }
                var g = "object" == typeof n && n,
                    v = "object" == typeof t && t && t.exports == g && t,
                    y = "object" == typeof e && e;
                (y.global === y || y.window === y) && (r = y);
                var _, b, w = 2147483647,
                    x = 36,
                    k = 1,
                    C = 26,
                    D = 38,
                    $ = 700,
                    A = 72,
                    S = 128,
                    T = "-",
                    E = /^xn--/,
                    O = /[^ -~]/,
                    P = /\x2E|\u3002|\uFF0E|\uFF61/g,
                    j = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    I = x - k,
                    M = Math.floor,
                    N = String.fromCharCode;
                if (_ = {
                        version: "1.2.3",
                        ucs2: {
                            decode: a,
                            encode: u
                        },
                        decode: h,
                        encode: f,
                        toASCII: m,
                        toUnicode: p
                    }, "function" == typeof define && "object" == typeof define.amd && define.amd) define(function() {
                    return _
                });
                else if (g && !g.nodeType)
                    if (v) v.exports = _;
                    else
                        for (b in _) _.hasOwnProperty(b) && (g[b] = _[b]);
                else r.punycode = _
            }(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    6: [function(e, t, n) {
        ! function(e) {
            if ("function" == typeof define && define.amd) {
                var r = "[history" + (new Date).getTime() + "]",
                    i = requirejs.onError;
                e.toString = function() {
                    return r
                }, requirejs.onError = function(e) {
                    -1 === e.message.indexOf(r) && i.call(requirejs, e)
                }, define([], e)
            }
            return "object" != typeof n || "undefined" == typeof t ? e() : void(t.exports = e())
        }(function() {
            function e() {}

            function t(e, n, r) {
                var i = /(?:(\w+\:))?(?:\/\/(?:[^@]*@)?([^\/:\?#]+)(?::([0-9]+))?)?([^\?#]*)(?:(\?[^#]+)|\?)?(?:(#.*))?/;
                if (null == e || "" === e || n) e = n ? e : x.href, (!A || r) && (e = e.replace(/^[^#]*/, "") || "#", e = x.protocol.replace(/:.*$|$/, ":") + "//" + x.host + q.basepath + e.replace(new RegExp("^#[/]?(?:" + q.type + ")?"), ""));
                else {
                    var o = t(),
                        s = y.getElementsByTagName("base")[0];
                    !r && s && s.getAttribute("href") && (s.href = s.href, o = t(s.href, null, !0));
                    var a = o._pathname,
                        u = o._protocol;
                    e = "" + e, e = /^(?:\w+\:)?\/\//.test(e) ? 0 === e.indexOf("/") ? u + e : e : u + "//" + o._host + (0 === e.indexOf("/") ? e : 0 === e.indexOf("?") ? a + e : 0 === e.indexOf("#") ? a + o._search + e : a.replace(/[^\/]+$/g, "") + e)
                }
                L.href = e;
                var l = i.exec(L.href),
                    c = l[2] + (l[3] ? ":" + l[3] : ""),
                    d = l[4] || "/",
                    h = l[5] || "",
                    f = "#" === l[6] ? "" : l[6] || "",
                    p = d + h + f,
                    m = d.replace(new RegExp("^" + q.basepath, "i"), q.type) + h;
                return {
                    _href: l[1] + "//" + c + p,
                    _protocol: l[1],
                    _host: c,
                    _hostname: l[2],
                    _port: l[3] || "",
                    _pathname: d,
                    _search: h,
                    _hash: f,
                    _relative: p,
                    _nohash: m,
                    _special: m + f
                }
            }

            function n() {
                var e;
                try {
                    e = v.sessionStorage, e.setItem(z + "t", "1"), e.removeItem(z + "t")
                } catch (t) {
                    e = {
                        getItem: function(e) {
                            var t = y.cookie.split(e + "=");
                            return t.length > 1 && t.pop().split(";").shift() || "null"
                        },
                        setItem: function(e, t) {
                            var n = {};
                            (n[x.href] = C.state) && (y.cookie = e + "=" + w.stringify(n))
                        }
                    }
                }
                try {
                    Q = w.parse(e.getItem(z)) || {}
                } catch (t) {
                    Q = {}
                }
                M(O + "unload", function() {
                    e.setItem(z, w.stringify(Q))
                }, !1)
            }

            function r(t, n, r, i) {
                var o = 0;
                r || (r = {
                    set: e
                }, o = 1);
                var s = !r.set,
                    a = !r.get,
                    u = {
                        configurable: !0,
                        set: function() {
                            s = 1
                        },
                        get: function() {
                            a = 1
                        }
                    };
                try {
                    T(t, n, u), t[n] = t[n], T(t, n, r)
                } catch (l) {}
                if (!(s && a || (t.__defineGetter__ && (t.__defineGetter__(n, u.get), t.__defineSetter__(n, u.set), t[n] = t[n], r.get && t.__defineGetter__(n, r.get), r.set && t.__defineSetter__(n, r.set)), s && a))) {
                    if (o) return !1;
                    if (t === v) {
                        try {
                            var c = t[n];
                            t[n] = null
                        } catch (l) {}
                        if ("execScript" in v) v.execScript("Public " + n, "VBScript"), v.execScript("var " + n + ";", "JavaScript");
                        else try {
                            T(t, n, {
                                value: e
                            })
                        } catch (l) {
                            "onpopstate" === n && (M("popstate", r = function() {
                                N("popstate", r, !1);
                                var e = t.onpopstate;
                                t.onpopstate = null, setTimeout(function() {
                                    t.onpopstate = e
                                }, 1)
                            }, !1), Y = 0)
                        }
                        t[n] = c
                    } else try {
                        try {
                            var d = b.create(t);
                            T(b.getPrototypeOf(d) === t ? d : t, n, r);
                            for (var h in t) "function" == typeof t[h] && (d[h] = t[h].bind(t));
                            try {
                                i.call(d, d, t)
                            } catch (l) {}
                            t = d
                        } catch (l) {
                            T(t.constructor.prototype, n, r)
                        }
                    } catch (l) {
                        return !1
                    }
                }
                return t
            }

            function i(e, t, n) {
                return n = n || {}, e = e === J ? x : e, n.set = n.set || function(n) {
                    e[t] = n
                }, n.get = n.get || function() {
                    return e[t]
                }, n
            }

            function o(e, t, n) {
                e in W ? W[e].push(t) : arguments.length > 3 ? M(e, t, n, arguments[3]) : M(e, t, n)
            }

            function s(e, t, n) {
                var r = W[e];
                if (r) {
                    for (var i = r.length; i--;)
                        if (r[i] === t) {
                            r.splice(i, 1);
                            break
                        }
                } else N(e, t, n)
            }

            function a(t, n) {
                var i = ("" + ("string" == typeof t ? t : t.type)).replace(/^on/, ""),
                    o = W[i];
                if (o) {
                    if (n = "string" == typeof t ? n : t, null == n.target)
                        for (var s = ["target", "currentTarget", "srcElement", "type"]; t = s.pop();) n = r(n, t, {
                            get: "type" === t ? function() {
                                return i
                            } : function() {
                                return v
                            }
                        });
                    Y && (("popstate" === i ? v.onpopstate : v.onhashchange) || e).call(v, n);
                    for (var a = 0, u = o.length; u > a; a++) o[a].call(v, n);
                    return !0
                }
                return R(t, n)
            }

            function u() {
                var e = y.createEvent ? y.createEvent("Event") : y.createEventObject();
                e.initEvent ? e.initEvent("popstate", !1, !1) : e.type = "popstate", e.state = C.state, a(e)
            }

            function l() {
                H && (H = !1, u())
            }

            function c(e, n, r, i) {
                if (A) F = x.href;
                else {
                    0 === V && (V = 2);
                    var o = t(n, 2 === V && -1 !== ("" + n).indexOf("#"));
                    o._relative !== t()._relative && (F = i, r ? x.replace("#" + o._special) : x.hash = o._special)
                }!S && e && (Q[x.href] = e), H = !1
            }

            function d(e) {
                var n = F;
                if (F = x.href, n) {
                    U !== x.href && u(), e = e || v.event;
                    var r = t(n, !0),
                        i = t();
                    e.oldURL || (e.oldURL = r._href, e.newURL = i._href), r._hash !== i._hash && a(e)
                }
            }

            function h(e) {
                setTimeout(function() {
                    M("popstate", function(e) {
                        U = x.href, S || (e = r(e, "state", {
                            get: function() {
                                return C.state
                            }
                        })), a(e)
                    }, !1)
                }, 0), !A && e !== !0 && "location" in C && (m(E.hash), l())
            }

            function f(e) {
                for (; e;) {
                    if ("A" === e.nodeName) return e;
                    e = e.parentNode
                }
            }

            function p(e) {
                var n = e || v.event,
                    r = f(n.target || n.srcElement),
                    i = "defaultPrevented" in n ? n.defaultPrevented : n.returnValue === !1;
                if (r && "A" === r.nodeName && !i) {
                    var o = t(),
                        s = t(r.getAttribute("href", 2)),
                        a = o._href.split("#").shift() === s._href.split("#").shift();
                    a && s._hash && (o._hash !== s._hash && (E.hash = s._hash), m(s._hash), n.preventDefault ? n.preventDefault() : n.returnValue = !1)
                }
            }

            function m(e) {
                var t = y.getElementById(e = (e || "").replace(/^#/, ""));
                if (t && t.id === e && "A" === t.nodeName) {
                    var n = t.getBoundingClientRect();
                    v.scrollTo(_.scrollLeft || 0, n.top + (_.scrollTop || 0) - (_.clientTop || 0))
                }
            }

            function g() {
                var e = y.getElementsByTagName("script"),
                    o = (e[e.length - 1] || {}).src || "",
                    s = -1 !== o.indexOf("?") ? o.split("?").pop() : "";
                s.replace(/(\w+)(?:=([^&]*))?/g, function(e, t, n) {
                    q[t] = (n || "").replace(/^(0|false)$/, "")
                }), M(O + "hashchange", d, !1);
                var a = [J, E, G, v, Z, C];
                S && delete Z.state;
                for (var u = 0; u < a.length; u += 2)
                    for (var l in a[u])
                        if (a[u].hasOwnProperty(l))
                            if ("function" == typeof a[u][l]) a[u + 1][l] = a[u][l];
                            else {
                                var c = i(a[u], l, a[u][l]);
                                if (!r(a[u + 1], l, c, function(e, t) {
                                        t === C && (v.history = C = a[u + 1] = e)
                                    })) return N(O + "hashchange", d, !1), !1;
                                a[u + 1] === v && (W[l] = W[l.substr(2)] = [])
                            }
                return C.setup(), q.redirect && C.redirect(), q.init && (V = 1), !S && w && n(), A || y[P](O + "click", p, !1), "complete" === y.readyState ? h(!0) : (A || t()._relative === q.basepath || (H = !0), M(O + "load", h, !1)), !0
            }
            var v = ("object" == typeof window ? window : this) || {};
            if (!v.history || "emulate" in v.history) return v.history;
            var y = v.document,
                _ = y.documentElement,
                b = v.Object,
                w = v.JSON,
                x = v.location,
                k = v.history,
                C = k,
                D = k.pushState,
                $ = k.replaceState,
                A = !!D,
                S = "state" in k,
                T = b.defineProperty,
                E = r({}, "t") ? {} : y.createElement("a"),
                O = "",
                P = v.addEventListener ? "addEventListener" : (O = "on") && "attachEvent",
                j = v.removeEventListener ? "removeEventListener" : "detachEvent",
                I = v.dispatchEvent ? "dispatchEvent" : "fireEvent",
                M = v[P],
                N = v[j],
                R = v[I],
                q = {
                    basepath: "/",
                    redirect: 0,
                    type: "/",
                    init: 0
                },
                z = "__historyAPI__",
                L = y.createElement("a"),
                F = x.href,
                U = "",
                Y = 1,
                H = !1,
                V = 0,
                Q = {},
                W = {},
                B = y.title,
                G = {
                    onhashchange: null,
                    onpopstate: null
                },
                K = function(e, t) {
                    var n = v.history !== k;
                    n && (v.history = k), e.apply(k, t), n && (v.history = C)
                },
                Z = {
                    setup: function(e, t, n) {
                        q.basepath = ("" + (null == e ? q.basepath : e)).replace(/(?:^|\/)[^\/]*$/, "/"), q.type = null == t ? q.type : t, q.redirect = null == n ? q.redirect : !!n
                    },
                    redirect: function(e, n) {
                        if (C.setup(n, e), n = q.basepath, v.top == v.self) {
                            var r = t(null, !1, !0)._relative,
                                i = x.pathname + x.search;
                            A ? (i = i.replace(/([^\/])$/, "$1/"), r != n && new RegExp("^" + n + "$", "i").test(i) && x.replace(r)) : i != n && (i = i.replace(/([^\/])\?/, "$1/?"), new RegExp("^" + n, "i").test(i) && x.replace(n + "#" + i.replace(new RegExp("^" + n, "i"), q.type) + x.hash))
                        }
                    },
                    pushState: function(e, t, n) {
                        var r = y.title;
                        null != B && (y.title = B), D && K(D, arguments), c(e, n), y.title = r, B = t
                    },
                    replaceState: function(e, t, n) {
                        var r = y.title;
                        null != B && (y.title = B), delete Q[x.href], $ && K($, arguments), c(e, n, !0), y.title = r, B = t
                    },
                    location: {
                        set: function(e) {
                            0 === V && (V = 1), v.location = e
                        },
                        get: function() {
                            return 0 === V && (V = 1), A ? x : E
                        }
                    },
                    state: {
                        get: function() {
                            return Q[x.href] || null
                        }
                    }
                },
                J = {
                    assign: function(e) {
                        0 === ("" + e).indexOf("#") ? c(null, e) : x.assign(e)
                    },
                    reload: function() {
                        x.reload()
                    },
                    replace: function(e) {
                        0 === ("" + e).indexOf("#") ? c(null, e, !0) : x.replace(e)
                    },
                    toString: function() {
                        return this.href
                    },
                    href: {
                        get: function() {
                            return t()._href
                        }
                    },
                    protocol: null,
                    host: null,
                    hostname: null,
                    port: null,
                    pathname: {
                        get: function() {
                            return t()._pathname
                        }
                    },
                    search: {
                        get: function() {
                            return t()._search
                        }
                    },
                    hash: {
                        set: function(e) {
                            c(null, ("" + e).replace(/^(#|)/, "#"), !1, F)
                        },
                        get: function() {
                            return t()._hash
                        }
                    }
                };
            return g() ? (C.emulate = !A, v[P] = o, v[j] = s, v[I] = a, C) : void 0
        })
    }, {}],
    7: [function(e, t, n) {
        ! function(e) {
            "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof n ? t.exports = e : e(jQuery)
        }(function(e) {
            function t(t) {
                var s = t || window.event,
                    a = u.call(arguments, 1),
                    l = 0,
                    c = 0,
                    d = 0,
                    h = 0;
                if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (d = -1 * s.detail), "wheelDelta" in s && (d = s.wheelDelta), "wheelDeltaY" in s && (d = s.wheelDeltaY), "wheelDeltaX" in s && (c = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (c = -1 * d, d = 0), l = 0 === d ? c : d, "deltaY" in s && (d = -1 * s.deltaY, l = d), "deltaX" in s && (c = s.deltaX, 0 === d && (l = -1 * c)), 0 !== d || 0 !== c) {
                    if (1 === s.deltaMode) {
                        var f = e.data(this, "mousewheel-line-height");
                        l *= f, d *= f, c *= f
                    } else if (2 === s.deltaMode) {
                        var p = e.data(this, "mousewheel-page-height");
                        l *= p, d *= p, c *= p
                    }
                    return h = Math.max(Math.abs(d), Math.abs(c)), (!o || o > h) && (o = h, r(s, h) && (o /= 40)), r(s, h) && (l /= 40, c /= 40, d /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / o), c = Math[c >= 1 ? "floor" : "ceil"](c / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), t.deltaX = c, t.deltaY = d, t.deltaFactor = o, t.deltaMode = 0, a.unshift(t, l, c, d), i && clearTimeout(i), i = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, a)
                }
            }

            function n() {
                o = null
            }

            function r(e, t) {
                return c.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
            }
            var i, o, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                u = Array.prototype.slice;
            if (e.event.fixHooks)
                for (var l = s.length; l;) e.event.fixHooks[s[--l]] = e.event.mouseHooks;
            var c = e.event.special.mousewheel = {
                version: "3.1.9",
                setup: function() {
                    if (this.addEventListener)
                        for (var n = a.length; n;) this.addEventListener(a[--n], t, !1);
                    else this.onmousewheel = t;
                    e.data(this, "mousewheel-line-height", c.getLineHeight(this)), e.data(this, "mousewheel-page-height", c.getPageHeight(this))
                },
                teardown: function() {
                    if (this.removeEventListener)
                        for (var e = a.length; e;) this.removeEventListener(a[--e], t, !1);
                    else this.onmousewheel = null
                },
                getLineHeight: function(t) {
                    return parseInt(e(t)["offsetParent" in e.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
                },
                getPageHeight: function(t) {
                    return e(t).height()
                },
                settings: {
                    adjustOldDeltas: !0
                }
            };
            e.fn.extend({
                mousewheel: function(e) {
                    return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                },
                unmousewheel: function(e) {
                    return this.unbind("mousewheel", e)
                }
            })
        })
    }, {}],
    8: [function(e, t, n) {
        function r() {
            if (!a) {
                a = !0;
                for (var e, t = s.length; t;) {
                    e = s, s = [];
                    for (var n = -1; ++n < t;) e[n]();
                    t = s.length
                }
                a = !1
            }
        }

        function i() {}
        var o = t.exports = {},
            s = [],
            a = !1;
        o.nextTick = function(e) {
            s.push(e), a || setTimeout(r, 0)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = i, o.addListener = i, o.once = i, o.off = i, o.removeListener = i, o.removeAllListeners = i, o.emit = i, o.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    }, {}],
    9: [function(e, t, n) {
        (function(e) {
            (function() {
                function r(e, t) {
                    if (e !== t) {
                        var n = null === e,
                            r = e === D,
                            i = e === e,
                            o = null === t,
                            s = t === D,
                            a = t === t;
                        if (e > t && !o || !i || n && !s && a || r && a) return 1;
                        if (t > e && !n || !a || o && !r && i || s && i) return -1
                    }
                    return 0
                }

                function i(e, t, n) {
                    for (var r = e.length, i = n ? r : -1; n ? i-- : ++i < r;)
                        if (t(e[i], i, e)) return i;
                    return -1
                }

                function o(e, t, n) {
                    if (t !== t) return g(e, n);
                    for (var r = n - 1, i = e.length; ++r < i;)
                        if (e[r] === t) return r;
                    return -1
                }

                function s(e) {
                    return "function" == typeof e || !1
                }

                function a(e) {
                    return null == e ? "" : e + ""
                }

                function u(e, t) {
                    for (var n = -1, r = e.length; ++n < r && t.indexOf(e.charAt(n)) > -1;);
                    return n
                }

                function l(e, t) {
                    for (var n = e.length; n-- && t.indexOf(e.charAt(n)) > -1;);
                    return n
                }

                function c(e, t) {
                    return r(e.criteria, t.criteria) || e.index - t.index
                }

                function d(e, t, n) {
                    for (var i = -1, o = e.criteria, s = t.criteria, a = o.length, u = n.length; ++i < a;) {
                        var l = r(o[i], s[i]);
                        if (l) {
                            if (i >= u) return l;
                            var c = n[i];
                            return l * ("asc" === c || c === !0 ? 1 : -1)
                        }
                    }
                    return e.index - t.index
                }

                function h(e) {
                    return He[e]
                }

                function f(e) {
                    return Ve[e]
                }

                function p(e, t, n) {
                    return t ? e = Be[e] : n && (e = Ge[e]), "\\" + e
                }

                function m(e) {
                    return "\\" + Ge[e]
                }

                function g(e, t, n) {
                    for (var r = e.length, i = t + (n ? 0 : -1); n ? i-- : ++i < r;) {
                        var o = e[i];
                        if (o !== o) return i
                    }
                    return -1
                }

                function v(e) {
                    return !!e && "object" == typeof e
                }

                function y(e) {
                    return 160 >= e && e >= 9 && 13 >= e || 32 == e || 160 == e || 5760 == e || 6158 == e || e >= 8192 && (8202 >= e || 8232 == e || 8233 == e || 8239 == e || 8287 == e || 12288 == e || 65279 == e)
                }

                function _(e, t) {
                    for (var n = -1, r = e.length, i = -1, o = []; ++n < r;) e[n] === t && (e[n] = H, o[++i] = n);
                    return o
                }

                function b(e, t) {
                    for (var n, r = -1, i = e.length, o = -1, s = []; ++r < i;) {
                        var a = e[r],
                            u = t ? t(a, r, e) : a;
                        r && n === u || (n = u, s[++o] = a)
                    }
                    return s
                }

                function w(e) {
                    for (var t = -1, n = e.length; ++t < n && y(e.charCodeAt(t)););
                    return t
                }

                function x(e) {
                    for (var t = e.length; t-- && y(e.charCodeAt(t)););
                    return t
                }

                function k(e) {
                    return Qe[e]
                }

                function C(e) {
                    function t(e) {
                        if (v(e) && !Ta(e) && !(e instanceof Z)) {
                            if (e instanceof y) return e;
                            if (ts.call(e, "__chain__") && ts.call(e, "__wrapped__")) return fr(e)
                        }
                        return new y(e)
                    }

                    function n() {}

                    function y(e, t, n) {
                        this.__wrapped__ = e, this.__actions__ = n || [], this.__chain__ = !!t
                    }

                    function Z(e) {
                        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ss, this.__views__ = []
                    }

                    function te() {
                        var e = new Z(this.__wrapped__);
                        return e.__actions__ = et(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = et(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = et(this.__views__), e
                    }

                    function re() {
                        if (this.__filtered__) {
                            var e = new Z(this);
                            e.__dir__ = -1, e.__filtered__ = !0
                        } else e = this.clone(), e.__dir__ *= -1;
                        return e
                    }

                    function He() {
                        var e = this.__wrapped__.value(),
                            t = this.__dir__,
                            n = Ta(e),
                            r = 0 > t,
                            i = n ? e.length : 0,
                            o = Qn(0, i, this.__views__),
                            s = o.start,
                            a = o.end,
                            u = a - s,
                            l = r ? a : s - 1,
                            c = this.__iteratees__,
                            d = c.length,
                            h = 0,
                            f = ks(u, this.__takeCount__);
                        if (!n || L > i || i == u && f == u) return nn(r && n ? e.reverse() : e, this.__actions__);
                        var p = [];
                        e: for (; u-- && f > h;) {
                            l += t;
                            for (var m = -1, g = e[l]; ++m < d;) {
                                var v = c[m],
                                    y = v.iteratee,
                                    _ = v.type,
                                    b = y(g);
                                if (_ == U) g = b;
                                else if (!b) {
                                    if (_ == F) continue e;
                                    break e
                                }
                            }
                            p[h++] = g
                        }
                        return p
                    }

                    function Ve() {
                        this.__data__ = {}
                    }

                    function Qe(e) {
                        return this.has(e) && delete this.__data__[e]
                    }

                    function We(e) {
                        return "__proto__" == e ? D : this.__data__[e]
                    }

                    function Be(e) {
                        return "__proto__" != e && ts.call(this.__data__, e)
                    }

                    function Ge(e, t) {
                        return "__proto__" != e && (this.__data__[e] = t), this
                    }

                    function Ke(e) {
                        var t = e ? e.length : 0;
                        for (this.data = {
                                hash: vs(null),
                                set: new ds
                            }; t--;) this.push(e[t])
                    }

                    function Ze(e, t) {
                        var n = e.data,
                            r = "string" == typeof t || Ii(t) ? n.set.has(t) : n.hash[t];
                        return r ? 0 : -1
                    }

                    function Je(e) {
                        var t = this.data;
                        "string" == typeof e || Ii(e) ? t.set.add(e) : t.hash[e] = !0
                    }

                    function Xe(e, t) {
                        for (var n = -1, r = e.length, i = -1, o = t.length, s = Fo(r + o); ++n < r;) s[n] = e[n];
                        for (; ++i < o;) s[n++] = t[i];
                        return s
                    }

                    function et(e, t) {
                        var n = -1,
                            r = e.length;
                        for (t || (t = Fo(r)); ++n < r;) t[n] = e[n];
                        return t
                    }

                    function tt(e, t) {
                        for (var n = -1, r = e.length; ++n < r && t(e[n], n, e) !== !1;);
                        return e
                    }

                    function it(e, t) {
                        for (var n = e.length; n-- && t(e[n], n, e) !== !1;);
                        return e
                    }

                    function ot(e, t) {
                        for (var n = -1, r = e.length; ++n < r;)
                            if (!t(e[n], n, e)) return !1;
                        return !0
                    }

                    function st(e, t, n, r) {
                        for (var i = -1, o = e.length, s = r, a = s; ++i < o;) {
                            var u = e[i],
                                l = +t(u);
                            n(l, s) && (s = l, a = u)
                        }
                        return a
                    }

                    function at(e, t) {
                        for (var n = -1, r = e.length, i = -1, o = []; ++n < r;) {
                            var s = e[n];
                            t(s, n, e) && (o[++i] = s)
                        }
                        return o
                    }

                    function ut(e, t) {
                        for (var n = -1, r = e.length, i = Fo(r); ++n < r;) i[n] = t(e[n], n, e);
                        return i
                    }

                    function lt(e, t) {
                        for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
                        return e
                    }

                    function ct(e, t, n, r) {
                        var i = -1,
                            o = e.length;
                        for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
                        return n
                    }

                    function dt(e, t, n, r) {
                        var i = e.length;
                        for (r && i && (n = e[--i]); i--;) n = t(n, e[i], i, e);
                        return n
                    }

                    function ht(e, t) {
                        for (var n = -1, r = e.length; ++n < r;)
                            if (t(e[n], n, e)) return !0;
                        return !1
                    }

                    function ft(e, t) {
                        for (var n = e.length, r = 0; n--;) r += +t(e[n]) || 0;
                        return r
                    }

                    function pt(e, t) {
                        return e === D ? t : e
                    }

                    function mt(e, t, n, r) {
                        return e !== D && ts.call(r, n) ? e : t
                    }

                    function gt(e, t, n) {
                        for (var r = -1, i = La(t), o = i.length; ++r < o;) {
                            var s = i[r],
                                a = e[s],
                                u = n(a, t[s], s, e, t);
                            (u === u ? u === a : a !== a) && (a !== D || s in e) || (e[s] = u)
                        }
                        return e
                    }

                    function vt(e, t) {
                        return null == t ? e : _t(t, La(t), e)
                    }

                    function yt(e, t) {
                        for (var n = -1, r = null == e, i = !r && Zn(e), o = i ? e.length : 0, s = t.length, a = Fo(s); ++n < s;) {
                            var u = t[n];
                            a[n] = i ? Jn(u, o) ? e[u] : D : r ? D : e[u]
                        }
                        return a
                    }

                    function _t(e, t, n) {
                        n || (n = {});
                        for (var r = -1, i = t.length; ++r < i;) {
                            var o = t[r];
                            n[o] = e[o]
                        }
                        return n
                    }

                    function bt(e, t, n) {
                        var r = typeof e;
                        return "function" == r ? t === D ? e : sn(e, t, n) : null == e ? So : "object" == r ? zt(e) : t === D ? Io(e) : Lt(e, t)
                    }

                    function wt(e, t, n, r, i, o, s) {
                        var a;
                        if (n && (a = i ? n(e, r, i) : n(e)), a !== D) return a;
                        if (!Ii(e)) return e;
                        var u = Ta(e);
                        if (u) {
                            if (a = Wn(e), !t) return et(e, a)
                        } else {
                            var l = rs.call(e),
                                c = l == K;
                            if (l != X && l != V && (!c || i)) return Ye[l] ? Gn(e, l, t) : i ? e : {};
                            if (a = Bn(c ? {} : e), !t) return vt(a, e)
                        }
                        o || (o = []), s || (s = []);
                        for (var d = o.length; d--;)
                            if (o[d] == e) return s[d];
                        return o.push(e), s.push(a), (u ? tt : Ot)(e, function(r, i) {
                            a[i] = wt(r, t, n, i, e, o, s)
                        }), a
                    }

                    function xt(e, t, n) {
                        if ("function" != typeof e) throw new Ko(Y);
                        return hs(function() {
                            e.apply(D, n)
                        }, t)
                    }

                    function kt(e, t) {
                        var n = e ? e.length : 0,
                            r = [];
                        if (!n) return r;
                        var i = -1,
                            s = Yn(),
                            a = s == o,
                            u = a && t.length >= L ? mn(t) : null,
                            l = t.length;
                        u && (s = Ze, a = !1, t = u);
                        e: for (; ++i < n;) {
                            var c = e[i];
                            if (a && c === c) {
                                for (var d = l; d--;)
                                    if (t[d] === c) continue e;
                                r.push(c)
                            } else s(t, c, 0) < 0 && r.push(c)
                        }
                        return r
                    }

                    function Ct(e, t) {
                        var n = !0;
                        return Ns(e, function(e, r, i) {
                            return n = !!t(e, r, i)
                        }), n
                    }

                    function Dt(e, t, n, r) {
                        var i = r,
                            o = i;
                        return Ns(e, function(e, s, a) {
                            var u = +t(e, s, a);
                            (n(u, i) || u === r && u === o) && (i = u, o = e)
                        }), o
                    }

                    function $t(e, t, n, r) {
                        var i = e.length;
                        for (n = null == n ? 0 : +n || 0, 0 > n && (n = -n > i ? 0 : i + n), r = r === D || r > i ? i : +r || 0, 0 > r && (r += i), i = n > r ? 0 : r >>> 0, n >>>= 0; i > n;) e[n++] = t;
                        return e
                    }

                    function At(e, t) {
                        var n = [];
                        return Ns(e, function(e, r, i) {
                            t(e, r, i) && n.push(e)
                        }), n
                    }

                    function St(e, t, n, r) {
                        var i;
                        return n(e, function(e, n, o) {
                            return t(e, n, o) ? (i = r ? n : e, !1) : void 0
                        }), i
                    }

                    function Tt(e, t, n, r) {
                        r || (r = []);
                        for (var i = -1, o = e.length; ++i < o;) {
                            var s = e[i];
                            v(s) && Zn(s) && (n || Ta(s) || Di(s)) ? t ? Tt(s, t, n, r) : lt(r, s) : n || (r[r.length] = s)
                        }
                        return r
                    }

                    function Et(e, t) {
                        return qs(e, t, eo)
                    }

                    function Ot(e, t) {
                        return qs(e, t, La)
                    }

                    function Pt(e, t) {
                        return zs(e, t, La)
                    }

                    function jt(e, t) {
                        for (var n = -1, r = t.length, i = -1, o = []; ++n < r;) {
                            var s = t[n];
                            ji(e[s]) && (o[++i] = s)
                        }
                        return o
                    }

                    function It(e, t, n) {
                        if (null != e) {
                            n !== D && n in dr(e) && (t = [n]);
                            for (var r = 0, i = t.length; null != e && i > r;) e = e[t[r++]];
                            return r && r == i ? e : D
                        }
                    }

                    function Mt(e, t, n, r, i, o) {
                        return e === t ? !0 : null == e || null == t || !Ii(e) && !v(t) ? e !== e && t !== t : Nt(e, t, Mt, n, r, i, o)
                    }

                    function Nt(e, t, n, r, i, o, s) {
                        var a = Ta(e),
                            u = Ta(t),
                            l = Q,
                            c = Q;
                        a || (l = rs.call(e), l == V ? l = X : l != X && (a = Yi(e))), u || (c = rs.call(t), c == V ? c = X : c != X && (u = Yi(t)));
                        var d = l == X,
                            h = c == X,
                            f = l == c;
                        if (f && !a && !d) return zn(e, t, l);
                        if (!i) {
                            var p = d && ts.call(e, "__wrapped__"),
                                m = h && ts.call(t, "__wrapped__");
                            if (p || m) return n(p ? e.value() : e, m ? t.value() : t, r, i, o, s)
                        }
                        if (!f) return !1;
                        o || (o = []), s || (s = []);
                        for (var g = o.length; g--;)
                            if (o[g] == e) return s[g] == t;
                        o.push(e), s.push(t);
                        var v = (a ? qn : Ln)(e, t, n, r, i, o, s);
                        return o.pop(), s.pop(), v
                    }

                    function Rt(e, t, n) {
                        var r = t.length,
                            i = r,
                            o = !n;
                        if (null == e) return !i;
                        for (e = dr(e); r--;) {
                            var s = t[r];
                            if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
                        }
                        for (; ++r < i;) {
                            s = t[r];
                            var a = s[0],
                                u = e[a],
                                l = s[1];
                            if (o && s[2]) {
                                if (u === D && !(a in e)) return !1
                            } else {
                                var c = n ? n(u, l, a) : D;
                                if (!(c === D ? Mt(l, u, n, !0) : c)) return !1
                            }
                        }
                        return !0
                    }

                    function qt(e, t) {
                        var n = -1,
                            r = Zn(e) ? Fo(e.length) : [];
                        return Ns(e, function(e, i, o) {
                            r[++n] = t(e, i, o)
                        }), r
                    }

                    function zt(e) {
                        var t = Hn(e);
                        if (1 == t.length && t[0][2]) {
                            var n = t[0][0],
                                r = t[0][1];
                            return function(e) {
                                return null == e ? !1 : e[n] === r && (r !== D || n in dr(e))
                            }
                        }
                        return function(e) {
                            return Rt(e, t)
                        }
                    }

                    function Lt(e, t) {
                        var n = Ta(e),
                            r = er(e) && rr(t),
                            i = e + "";
                        return e = hr(e),
                            function(o) {
                                if (null == o) return !1;
                                var s = i;
                                if (o = dr(o), !(!n && r || s in o)) {
                                    if (o = 1 == e.length ? o : It(o, Bt(e, 0, -1)), null == o) return !1;
                                    s = $r(e), o = dr(o)
                                }
                                return o[s] === t ? t !== D || s in o : Mt(t, o[s], D, !0)
                            }
                    }

                    function Ft(e, t, n, r, i) {
                        if (!Ii(e)) return e;
                        var o = Zn(t) && (Ta(t) || Yi(t)),
                            s = o ? D : La(t);
                        return tt(s || t, function(a, u) {
                            if (s && (u = a, a = t[u]), v(a)) r || (r = []), i || (i = []), Ut(e, t, u, Ft, n, r, i);
                            else {
                                var l = e[u],
                                    c = n ? n(l, a, u, e, t) : D,
                                    d = c === D;
                                d && (c = a), c === D && (!o || u in e) || !d && (c === c ? c === l : l !== l) || (e[u] = c)
                            }
                        }), e
                    }

                    function Ut(e, t, n, r, i, o, s) {
                        for (var a = o.length, u = t[n]; a--;)
                            if (o[a] == u) return void(e[n] = s[a]);
                        var l = e[n],
                            c = i ? i(l, u, n, e, t) : D,
                            d = c === D;
                        d && (c = u, Zn(u) && (Ta(u) || Yi(u)) ? c = Ta(l) ? l : Zn(l) ? et(l) : [] : Li(u) || Di(u) ? c = Di(l) ? Bi(l) : Li(l) ? l : {} : d = !1), o.push(u), s.push(c), d ? e[n] = r(c, u, i, o, s) : (c === c ? c !== l : l === l) && (e[n] = c)
                    }

                    function Yt(e) {
                        return function(t) {
                            return null == t ? D : t[e]
                        }
                    }

                    function Ht(e) {
                        var t = e + "";
                        return e = hr(e),
                            function(n) {
                                return It(n, e, t)
                            }
                    }

                    function Vt(e, t) {
                        for (var n = e ? t.length : 0; n--;) {
                            var r = t[n];
                            if (r != i && Jn(r)) {
                                var i = r;
                                fs.call(e, r, 1)
                            }
                        }
                        return e
                    }

                    function Qt(e, t) {
                        return e + ys($s() * (t - e + 1))
                    }

                    function Wt(e, t, n, r, i) {
                        return i(e, function(e, i, o) {
                            n = r ? (r = !1, e) : t(n, e, i, o)
                        }), n
                    }

                    function Bt(e, t, n) {
                        var r = -1,
                            i = e.length;
                        t = null == t ? 0 : +t || 0, 0 > t && (t = -t > i ? 0 : i + t), n = n === D || n > i ? i : +n || 0, 0 > n && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
                        for (var o = Fo(i); ++r < i;) o[r] = e[r + t];
                        return o
                    }

                    function Gt(e, t) {
                        var n;
                        return Ns(e, function(e, r, i) {
                            return n = t(e, r, i), !n
                        }), !!n
                    }

                    function Kt(e, t) {
                        var n = e.length;
                        for (e.sort(t); n--;) e[n] = e[n].value;
                        return e
                    }

                    function Zt(e, t, n) {
                        var r = Fn(),
                            i = -1;
                        t = ut(t, function(e) {
                            return r(e)
                        });
                        var o = qt(e, function(e) {
                            var n = ut(t, function(t) {
                                return t(e)
                            });
                            return {
                                criteria: n,
                                index: ++i,
                                value: e
                            }
                        });
                        return Kt(o, function(e, t) {
                            return d(e, t, n)
                        })
                    }

                    function Jt(e, t) {
                        var n = 0;
                        return Ns(e, function(e, r, i) {
                            n += +t(e, r, i) || 0
                        }), n
                    }

                    function Xt(e, t) {
                        var n = -1,
                            r = Yn(),
                            i = e.length,
                            s = r == o,
                            a = s && i >= L,
                            u = a ? mn() : null,
                            l = [];
                        u ? (r = Ze, s = !1) : (a = !1, u = t ? [] : l);
                        e: for (; ++n < i;) {
                            var c = e[n],
                                d = t ? t(c, n, e) : c;
                            if (s && c === c) {
                                for (var h = u.length; h--;)
                                    if (u[h] === d) continue e;
                                t && u.push(d), l.push(c)
                            } else r(u, d, 0) < 0 && ((t || a) && u.push(d), l.push(c))
                        }
                        return l
                    }

                    function en(e, t) {
                        for (var n = -1, r = t.length, i = Fo(r); ++n < r;) i[n] = e[t[n]];
                        return i
                    }

                    function tn(e, t, n, r) {
                        for (var i = e.length, o = r ? i : -1;
                            (r ? o-- : ++o < i) && t(e[o], o, e););
                        return n ? Bt(e, r ? 0 : o, r ? o + 1 : i) : Bt(e, r ? o + 1 : 0, r ? i : o)
                    }

                    function nn(e, t) {
                        var n = e;
                        n instanceof Z && (n = n.value());
                        for (var r = -1, i = t.length; ++r < i;) {
                            var o = t[r];
                            n = o.func.apply(o.thisArg, lt([n], o.args))
                        }
                        return n
                    }

                    function rn(e, t, n) {
                        var r = 0,
                            i = e ? e.length : r;
                        if ("number" == typeof t && t === t && Os >= i) {
                            for (; i > r;) {
                                var o = r + i >>> 1,
                                    s = e[o];
                                (n ? t >= s : t > s) && null !== s ? r = o + 1 : i = o
                            }
                            return i
                        }
                        return on(e, t, So, n)
                    }

                    function on(e, t, n, r) {
                        t = n(t);
                        for (var i = 0, o = e ? e.length : 0, s = t !== t, a = null === t, u = t === D; o > i;) {
                            var l = ys((i + o) / 2),
                                c = n(e[l]),
                                d = c !== D,
                                h = c === c;
                            if (s) var f = h || r;
                            else f = a ? h && d && (r || null != c) : u ? h && (r || d) : null == c ? !1 : r ? t >= c : t > c;
                            f ? i = l + 1 : o = l
                        }
                        return ks(o, Es)
                    }

                    function sn(e, t, n) {
                        if ("function" != typeof e) return So;
                        if (t === D) return e;
                        switch (n) {
                            case 1:
                                return function(n) {
                                    return e.call(t, n)
                                };
                            case 3:
                                return function(n, r, i) {
                                    return e.call(t, n, r, i)
                                };
                            case 4:
                                return function(n, r, i, o) {
                                    return e.call(t, n, r, i, o)
                                };
                            case 5:
                                return function(n, r, i, o, s) {
                                    return e.call(t, n, r, i, o, s)
                                }
                        }
                        return function() {
                            return e.apply(t, arguments)
                        }
                    }

                    function an(e) {
                        var t = new ss(e.byteLength),
                            n = new ps(t);
                        return n.set(new ps(e)), t
                    }

                    function un(e, t, n) {
                        for (var r = n.length, i = -1, o = xs(e.length - r, 0), s = -1, a = t.length, u = Fo(a + o); ++s < a;) u[s] = t[s];
                        for (; ++i < r;) u[n[i]] = e[i];
                        for (; o--;) u[s++] = e[i++];
                        return u
                    }

                    function ln(e, t, n) {
                        for (var r = -1, i = n.length, o = -1, s = xs(e.length - i, 0), a = -1, u = t.length, l = Fo(s + u); ++o < s;) l[o] = e[o];
                        for (var c = o; ++a < u;) l[c + a] = t[a];
                        for (; ++r < i;) l[c + n[r]] = e[o++];
                        return l
                    }

                    function cn(e, t) {
                        return function(n, r, i) {
                            var o = t ? t() : {};
                            if (r = Fn(r, i, 3), Ta(n))
                                for (var s = -1, a = n.length; ++s < a;) {
                                    var u = n[s];
                                    e(o, u, r(u, s, n), n)
                                } else Ns(n, function(t, n, i) {
                                    e(o, t, r(t, n, i), i)
                                });
                            return o
                        }
                    }

                    function dn(e) {
                        return vi(function(t, n) {
                            var r = -1,
                                i = null == t ? 0 : n.length,
                                o = i > 2 ? n[i - 2] : D,
                                s = i > 2 ? n[2] : D,
                                a = i > 1 ? n[i - 1] : D;
                            for ("function" == typeof o ? (o = sn(o, a, 5), i -= 2) : (o = "function" == typeof a ? a : D, i -= o ? 1 : 0), s && Xn(n[0], n[1], s) && (o = 3 > i ? D : o, i = 1); ++r < i;) {
                                var u = n[r];
                                u && e(t, u, o)
                            }
                            return t
                        })
                    }

                    function hn(e, t) {
                        return function(n, r) {
                            var i = n ? Us(n) : 0;
                            if (!nr(i)) return e(n, r);
                            for (var o = t ? i : -1, s = dr(n);
                                (t ? o-- : ++o < i) && r(s[o], o, s) !== !1;);
                            return n
                        }
                    }

                    function fn(e) {
                        return function(t, n, r) {
                            for (var i = dr(t), o = r(t), s = o.length, a = e ? s : -1; e ? a-- : ++a < s;) {
                                var u = o[a];
                                if (n(i[u], u, i) === !1) break
                            }
                            return t
                        }
                    }

                    function pn(e, t) {
                        function n() {
                            var i = this && this !== nt && this instanceof n ? r : e;
                            return i.apply(t, arguments)
                        }
                        var r = vn(e);
                        return n
                    }

                    function mn(e) {
                        return vs && ds ? new Ke(e) : null
                    }

                    function gn(e) {
                        return function(t) {
                            for (var n = -1, r = Do(co(t)), i = r.length, o = ""; ++n < i;) o = e(o, r[n], n);
                            return o
                        }
                    }

                    function vn(e) {
                        return function() {
                            var t = arguments;
                            switch (t.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t[0]);
                                case 2:
                                    return new e(t[0], t[1]);
                                case 3:
                                    return new e(t[0], t[1], t[2]);
                                case 4:
                                    return new e(t[0], t[1], t[2], t[3]);
                                case 5:
                                    return new e(t[0], t[1], t[2], t[3], t[4]);
                                case 6:
                                    return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                case 7:
                                    return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                            }
                            var n = Ms(e.prototype),
                                r = e.apply(n, t);
                            return Ii(r) ? r : n
                        }
                    }

                    function yn(e) {
                        function t(n, r, i) {
                            i && Xn(n, r, i) && (r = D);
                            var o = Rn(n, e, D, D, D, D, D, r);
                            return o.placeholder = t.placeholder, o
                        }
                        return t
                    }

                    function _n(e, t) {
                        return vi(function(n) {
                            var r = n[0];
                            return null == r ? r : (n.push(t), e.apply(D, n))
                        })
                    }

                    function bn(e, t) {
                        return function(n, r, i) {
                            if (i && Xn(n, r, i) && (r = D), r = Fn(r, i, 3), 1 == r.length) {
                                n = Ta(n) ? n : cr(n);
                                var o = st(n, r, e, t);
                                if (!n.length || o !== t) return o
                            }
                            return Dt(n, r, e, t)
                        }
                    }

                    function wn(e, t) {
                        return function(n, r, o) {
                            if (r = Fn(r, o, 3), Ta(n)) {
                                var s = i(n, r, t);
                                return s > -1 ? n[s] : D
                            }
                            return St(n, r, e)
                        }
                    }

                    function xn(e) {
                        return function(t, n, r) {
                            return t && t.length ? (n = Fn(n, r, 3), i(t, n, e)) : -1
                        }
                    }

                    function kn(e) {
                        return function(t, n, r) {
                            return n = Fn(n, r, 3), St(t, n, e, !0)
                        }
                    }

                    function Cn(e) {
                        return function() {
                            for (var t, n = arguments.length, r = e ? n : -1, i = 0, o = Fo(n); e ? r-- : ++r < n;) {
                                var s = o[i++] = arguments[r];
                                if ("function" != typeof s) throw new Ko(Y);
                                !t && y.prototype.thru && "wrapper" == Un(s) && (t = new y([], !0))
                            }
                            for (r = t ? -1 : n; ++r < n;) {
                                s = o[r];
                                var a = Un(s),
                                    u = "wrapper" == a ? Fs(s) : D;
                                t = u && tr(u[0]) && u[1] == (I | E | P | M) && !u[4].length && 1 == u[9] ? t[Un(u[0])].apply(t, u[3]) : 1 == s.length && tr(s) ? t[a]() : t.thru(s)
                            }
                            return function() {
                                var e = arguments,
                                    r = e[0];
                                if (t && 1 == e.length && Ta(r) && r.length >= L) return t.plant(r).value();
                                for (var i = 0, s = n ? o[i].apply(this, e) : r; ++i < n;) s = o[i].call(this, s);
                                return s
                            }
                        }
                    }

                    function Dn(e, t) {
                        return function(n, r, i) {
                            return "function" == typeof r && i === D && Ta(n) ? e(n, r) : t(n, sn(r, i, 3))
                        }
                    }

                    function $n(e) {
                        return function(t, n, r) {
                            return ("function" != typeof n || r !== D) && (n = sn(n, r, 3)), e(t, n, eo)
                        }
                    }

                    function An(e) {
                        return function(t, n, r) {
                            return ("function" != typeof n || r !== D) && (n = sn(n, r, 3)), e(t, n)
                        }
                    }

                    function Sn(e) {
                        return function(t, n, r) {
                            var i = {};
                            return n = Fn(n, r, 3), Ot(t, function(t, r, o) {
                                var s = n(t, r, o);
                                r = e ? s : r, t = e ? t : s, i[r] = t
                            }), i
                        }
                    }

                    function Tn(e) {
                        return function(t, n, r) {
                            return t = a(t), (e ? t : "") + jn(t, n, r) + (e ? "" : t)
                        }
                    }

                    function En(e) {
                        var t = vi(function(n, r) {
                            var i = _(r, t.placeholder);
                            return Rn(n, e, D, r, i)
                        });
                        return t
                    }

                    function On(e, t) {
                        return function(n, r, i, o) {
                            var s = arguments.length < 3;
                            return "function" == typeof r && o === D && Ta(n) ? e(n, r, i, s) : Wt(n, Fn(r, o, 4), i, s, t)
                        }
                    }

                    function Pn(e, t, n, r, i, o, s, a, u, l) {
                        function c() {
                            for (var y = arguments.length, b = y, w = Fo(y); b--;) w[b] = arguments[b];
                            if (r && (w = un(w, r, i)), o && (w = ln(w, o, s)), p || g) {
                                var x = c.placeholder,
                                    k = _(w, x);
                                if (y -= k.length, l > y) {
                                    var C = a ? et(a) : D,
                                        $ = xs(l - y, 0),
                                        T = p ? k : D,
                                        E = p ? D : k,
                                        O = p ? w : D,
                                        I = p ? D : w;
                                    t |= p ? P : j, t &= ~(p ? j : P), m || (t &= ~(A | S));
                                    var M = [e, t, n, O, T, I, E, C, u, $],
                                        N = Pn.apply(D, M);
                                    return tr(e) && Ys(N, M), N.placeholder = x, N
                                }
                            }
                            var R = h ? n : this,
                                q = f ? R[e] : e;
                            return a && (w = ur(w, a)), d && u < w.length && (w.length = u), this && this !== nt && this instanceof c && (q = v || vn(e)), q.apply(R, w)
                        }
                        var d = t & I,
                            h = t & A,
                            f = t & S,
                            p = t & E,
                            m = t & T,
                            g = t & O,
                            v = f ? D : vn(e);
                        return c
                    }

                    function jn(e, t, n) {
                        var r = e.length;
                        if (t = +t, r >= t || !bs(t)) return "";
                        var i = t - r;
                        return n = null == n ? " " : n + "", vo(n, gs(i / n.length)).slice(0, i)
                    }

                    function In(e, t, n, r) {
                        function i() {
                            for (var t = -1, a = arguments.length, u = -1, l = r.length, c = Fo(l + a); ++u < l;) c[u] = r[u];
                            for (; a--;) c[u++] = arguments[++t];
                            var d = this && this !== nt && this instanceof i ? s : e;
                            return d.apply(o ? n : this, c)
                        }
                        var o = t & A,
                            s = vn(e);
                        return i
                    }

                    function Mn(e) {
                        var t = Vo[e];
                        return function(e, n) {
                            return n = n === D ? 0 : +n || 0, n ? (n = ls(10, n), t(e * n) / n) : t(e)
                        }
                    }

                    function Nn(e) {
                        return function(t, n, r, i) {
                            var o = Fn(r);
                            return null == r && o === bt ? rn(t, n, e) : on(t, n, o(r, i, 1), e)
                        }
                    }

                    function Rn(e, t, n, r, i, o, s, a) {
                        var u = t & S;
                        if (!u && "function" != typeof e) throw new Ko(Y);
                        var l = r ? r.length : 0;
                        if (l || (t &= ~(P | j), r = i = D), l -= i ? i.length : 0, t & j) {
                            var c = r,
                                d = i;
                            r = i = D
                        }
                        var h = u ? D : Fs(e),
                            f = [e, t, n, r, i, c, d, o, s, a];
                        if (h && (ir(f, h), t = f[1], a = f[9]), f[9] = null == a ? u ? 0 : e.length : xs(a - l, 0) || 0, t == A) var p = pn(f[0], f[2]);
                        else p = t != P && t != (A | P) || f[4].length ? Pn.apply(D, f) : In.apply(D, f);
                        var m = h ? Ls : Ys;
                        return m(p, f)
                    }

                    function qn(e, t, n, r, i, o, s) {
                        var a = -1,
                            u = e.length,
                            l = t.length;
                        if (u != l && !(i && l > u)) return !1;
                        for (; ++a < u;) {
                            var c = e[a],
                                d = t[a],
                                h = r ? r(i ? d : c, i ? c : d, a) : D;
                            if (h !== D) {
                                if (h) continue;
                                return !1
                            }
                            if (i) {
                                if (!ht(t, function(e) {
                                        return c === e || n(c, e, r, i, o, s)
                                    })) return !1
                            } else if (c !== d && !n(c, d, r, i, o, s)) return !1
                        }
                        return !0
                    }

                    function zn(e, t, n) {
                        switch (n) {
                            case W:
                            case B:
                                return +e == +t;
                            case G:
                                return e.name == t.name && e.message == t.message;
                            case J:
                                return e != +e ? t != +t : e == +t;
                            case ee:
                            case ne:
                                return e == t + ""
                        }
                        return !1
                    }

                    function Ln(e, t, n, r, i, o, s) {
                        var a = La(e),
                            u = a.length,
                            l = La(t),
                            c = l.length;
                        if (u != c && !i) return !1;
                        for (var d = u; d--;) {
                            var h = a[d];
                            if (!(i ? h in t : ts.call(t, h))) return !1
                        }
                        for (var f = i; ++d < u;) {
                            h = a[d];
                            var p = e[h],
                                m = t[h],
                                g = r ? r(i ? m : p, i ? p : m, h) : D;
                            if (!(g === D ? n(p, m, r, i, o, s) : g)) return !1;
                            f || (f = "constructor" == h)
                        }
                        if (!f) {
                            var v = e.constructor,
                                y = t.constructor;
                            if (v != y && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof y && y instanceof y)) return !1
                        }
                        return !0
                    }

                    function Fn(e, n, r) {
                        var i = t.callback || $o;
                        return i = i === $o ? bt : i, r ? i(e, n, r) : i
                    }

                    function Un(e) {
                        for (var t = e.name, n = Is[t], r = n ? n.length : 0; r--;) {
                            var i = n[r],
                                o = i.func;
                            if (null == o || o == e) return i.name
                        }
                        return t
                    }

                    function Yn(e, n, r) {
                        var i = t.indexOf || Cr;
                        return i = i === Cr ? o : i, e ? i(e, n, r) : i
                    }

                    function Hn(e) {
                        for (var t = to(e), n = t.length; n--;) t[n][2] = rr(t[n][1]);
                        return t
                    }

                    function Vn(e, t) {
                        var n = null == e ? D : e[t];
                        return Ri(n) ? n : D
                    }

                    function Qn(e, t, n) {
                        for (var r = -1, i = n.length; ++r < i;) {
                            var o = n[r],
                                s = o.size;
                            switch (o.type) {
                                case "drop":
                                    e += s;
                                    break;
                                case "dropRight":
                                    t -= s;
                                    break;
                                case "take":
                                    t = ks(t, e + s);
                                    break;
                                case "takeRight":
                                    e = xs(e, t - s)
                            }
                        }
                        return {
                            start: e,
                            end: t
                        }
                    }

                    function Wn(e) {
                        var t = e.length,
                            n = new e.constructor(t);
                        return t && "string" == typeof e[0] && ts.call(e, "index") && (n.index = e.index, n.input = e.input), n
                    }

                    function Bn(e) {
                        var t = e.constructor;
                        return "function" == typeof t && t instanceof t || (t = Wo), new t
                    }

                    function Gn(e, t, n) {
                        var r = e.constructor;
                        switch (t) {
                            case ie:
                                return an(e);
                            case W:
                            case B:
                                return new r(+e);
                            case oe:
                            case se:
                            case ae:
                            case ue:
                            case le:
                            case ce:
                            case de:
                            case he:
                            case fe:
                                var i = e.buffer;
                                return new r(n ? an(i) : i, e.byteOffset, e.length);
                            case J:
                            case ne:
                                return new r(e);
                            case ee:
                                var o = new r(e.source, Pe.exec(e));
                                o.lastIndex = e.lastIndex
                        }
                        return o
                    }

                    function Kn(e, t, n) {
                        null == e || er(t, e) || (t = hr(t), e = 1 == t.length ? e : It(e, Bt(t, 0, -1)), t = $r(t));
                        var r = null == e ? e : e[t];
                        return null == r ? D : r.apply(e, n)
                    }

                    function Zn(e) {
                        return null != e && nr(Us(e))
                    }

                    function Jn(e, t) {
                        return e = "number" == typeof e || Me.test(e) ? +e : -1, t = null == t ? Ps : t, e > -1 && e % 1 == 0 && t > e
                    }

                    function Xn(e, t, n) {
                        if (!Ii(n)) return !1;
                        var r = typeof t;
                        if ("number" == r ? Zn(n) && Jn(t, n.length) : "string" == r && t in n) {
                            var i = n[t];
                            return e === e ? e === i : i !== i
                        }
                        return !1
                    }

                    function er(e, t) {
                        var n = typeof e;
                        if ("string" == n && De.test(e) || "number" == n) return !0;
                        if (Ta(e)) return !1;
                        var r = !Ce.test(e);
                        return r || null != t && e in dr(t)
                    }

                    function tr(e) {
                        var n = Un(e);
                        if (!(n in Z.prototype)) return !1;
                        var r = t[n];
                        if (e === r) return !0;
                        var i = Fs(r);
                        return !!i && e === i[0]
                    }

                    function nr(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && Ps >= e
                    }

                    function rr(e) {
                        return e === e && !Ii(e)
                    }

                    function ir(e, t) {
                        var n = e[1],
                            r = t[1],
                            i = n | r,
                            o = I > i,
                            s = r == I && n == E || r == I && n == M && e[7].length <= t[8] || r == (I | M) && n == E;
                        if (!o && !s) return e;
                        r & A && (e[2] = t[2], i |= n & A ? 0 : T);
                        var a = t[3];
                        if (a) {
                            var u = e[3];
                            e[3] = u ? un(u, a, t[4]) : et(a), e[4] = u ? _(e[3], H) : et(t[4])
                        }
                        return a = t[5], a && (u = e[5], e[5] = u ? ln(u, a, t[6]) : et(a), e[6] = u ? _(e[5], H) : et(t[6])), a = t[7], a && (e[7] = et(a)), r & I && (e[8] = null == e[8] ? t[8] : ks(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = i, e
                    }

                    function or(e, t) {
                        return e === D ? t : Ea(e, t, or)
                    }

                    function sr(e, t) {
                        e = dr(e);
                        for (var n = -1, r = t.length, i = {}; ++n < r;) {
                            var o = t[n];
                            o in e && (i[o] = e[o])
                        }
                        return i
                    }

                    function ar(e, t) {
                        var n = {};
                        return Et(e, function(e, r, i) {
                            t(e, r, i) && (n[r] = e)
                        }), n
                    }

                    function ur(e, t) {
                        for (var n = e.length, r = ks(t.length, n), i = et(e); r--;) {
                            var o = t[r];
                            e[r] = Jn(o, n) ? i[o] : D
                        }
                        return e
                    }

                    function lr(e) {
                        for (var t = eo(e), n = t.length, r = n && e.length, i = !!r && nr(r) && (Ta(e) || Di(e)), o = -1, s = []; ++o < n;) {
                            var a = t[o];
                            (i && Jn(a, r) || ts.call(e, a)) && s.push(a)
                        }
                        return s
                    }

                    function cr(e) {
                        return null == e ? [] : Zn(e) ? Ii(e) ? e : Wo(e) : oo(e)
                    }

                    function dr(e) {
                        return Ii(e) ? e : Wo(e)
                    }

                    function hr(e) {
                        if (Ta(e)) return e;
                        var t = [];
                        return a(e).replace($e, function(e, n, r, i) {
                            t.push(r ? i.replace(Ee, "$1") : n || e)
                        }), t
                    }

                    function fr(e) {
                        return e instanceof Z ? e.clone() : new y(e.__wrapped__, e.__chain__, et(e.__actions__))
                    }

                    function pr(e, t, n) {
                        t = (n ? Xn(e, t, n) : null == t) ? 1 : xs(ys(t) || 1, 1);
                        for (var r = 0, i = e ? e.length : 0, o = -1, s = Fo(gs(i / t)); i > r;) s[++o] = Bt(e, r, r += t);
                        return s
                    }

                    function mr(e) {
                        for (var t = -1, n = e ? e.length : 0, r = -1, i = []; ++t < n;) {
                            var o = e[t];
                            o && (i[++r] = o)
                        }
                        return i
                    }

                    function gr(e, t, n) {
                        var r = e ? e.length : 0;
                        return r ? ((n ? Xn(e, t, n) : null == t) && (t = 1), Bt(e, 0 > t ? 0 : t)) : []
                    }

                    function vr(e, t, n) {
                        var r = e ? e.length : 0;
                        return r ? ((n ? Xn(e, t, n) : null == t) && (t = 1), t = r - (+t || 0), Bt(e, 0, 0 > t ? 0 : t)) : []
                    }

                    function yr(e, t, n) {
                        return e && e.length ? tn(e, Fn(t, n, 3), !0, !0) : []
                    }

                    function _r(e, t, n) {
                        return e && e.length ? tn(e, Fn(t, n, 3), !0) : []
                    }

                    function br(e, t, n, r) {
                        var i = e ? e.length : 0;
                        return i ? (n && "number" != typeof n && Xn(e, t, n) && (n = 0, r = i), $t(e, t, n, r)) : []
                    }

                    function wr(e) {
                        return e ? e[0] : D
                    }

                    function xr(e, t, n) {
                        var r = e ? e.length : 0;
                        return n && Xn(e, t, n) && (t = !1), r ? Tt(e, t) : []
                    }

                    function kr(e) {
                        var t = e ? e.length : 0;
                        return t ? Tt(e, !0) : []
                    }

                    function Cr(e, t, n) {
                        var r = e ? e.length : 0;
                        if (!r) return -1;
                        if ("number" == typeof n) n = 0 > n ? xs(r + n, 0) : n;
                        else if (n) {
                            var i = rn(e, t);
                            return r > i && (t === t ? t === e[i] : e[i] !== e[i]) ? i : -1
                        }
                        return o(e, t, n || 0)
                    }

                    function Dr(e) {
                        return vr(e, 1)
                    }

                    function $r(e) {
                        var t = e ? e.length : 0;
                        return t ? e[t - 1] : D
                    }

                    function Ar(e, t, n) {
                        var r = e ? e.length : 0;
                        if (!r) return -1;
                        var i = r;
                        if ("number" == typeof n) i = (0 > n ? xs(r + n, 0) : ks(n || 0, r - 1)) + 1;
                        else if (n) {
                            i = rn(e, t, !0) - 1;
                            var o = e[i];
                            return (t === t ? t === o : o !== o) ? i : -1
                        }
                        if (t !== t) return g(e, i, !0);
                        for (; i--;)
                            if (e[i] === t) return i;
                        return -1
                    }

                    function Sr() {
                        var e = arguments,
                            t = e[0];
                        if (!t || !t.length) return t;
                        for (var n = 0, r = Yn(), i = e.length; ++n < i;)
                            for (var o = 0, s = e[n];
                                (o = r(t, s, o)) > -1;) fs.call(t, o, 1);
                        return t
                    }

                    function Tr(e, t, n) {
                        var r = [];
                        if (!e || !e.length) return r;
                        var i = -1,
                            o = [],
                            s = e.length;
                        for (t = Fn(t, n, 3); ++i < s;) {
                            var a = e[i];
                            t(a, i, e) && (r.push(a), o.push(i))
                        }
                        return Vt(e, o), r
                    }

                    function Er(e) {
                        return gr(e, 1)
                    }

                    function Or(e, t, n) {
                        var r = e ? e.length : 0;
                        return r ? (n && "number" != typeof n && Xn(e, t, n) && (t = 0, n = r), Bt(e, t, n)) : []
                    }

                    function Pr(e, t, n) {
                        var r = e ? e.length : 0;
                        return r ? ((n ? Xn(e, t, n) : null == t) && (t = 1), Bt(e, 0, 0 > t ? 0 : t)) : []
                    }

                    function jr(e, t, n) {
                        var r = e ? e.length : 0;
                        return r ? ((n ? Xn(e, t, n) : null == t) && (t = 1), t = r - (+t || 0), Bt(e, 0 > t ? 0 : t)) : []
                    }

                    function Ir(e, t, n) {
                        return e && e.length ? tn(e, Fn(t, n, 3), !1, !0) : []
                    }

                    function Mr(e, t, n) {
                        return e && e.length ? tn(e, Fn(t, n, 3)) : []
                    }

                    function Nr(e, t, n, r) {
                        var i = e ? e.length : 0;
                        if (!i) return [];
                        null != t && "boolean" != typeof t && (r = n, n = Xn(e, t, r) ? D : t, t = !1);
                        var s = Fn();
                        return (null != n || s !== bt) && (n = s(n, r, 3)), t && Yn() == o ? b(e, n) : Xt(e, n)
                    }

                    function Rr(e) {
                        if (!e || !e.length) return [];
                        var t = -1,
                            n = 0;
                        e = at(e, function(e) {
                            return Zn(e) ? (n = xs(e.length, n), !0) : void 0
                        });
                        for (var r = Fo(n); ++t < n;) r[t] = ut(e, Yt(t));
                        return r
                    }

                    function qr(e, t, n) {
                        var r = e ? e.length : 0;
                        if (!r) return [];
                        var i = Rr(e);
                        return null == t ? i : (t = sn(t, n, 4), ut(i, function(e) {
                            return ct(e, t, D, !0)
                        }))
                    }

                    function zr() {
                        for (var e = -1, t = arguments.length; ++e < t;) {
                            var n = arguments[e];
                            if (Zn(n)) var r = r ? lt(kt(r, n), kt(n, r)) : n
                        }
                        return r ? Xt(r) : []
                    }

                    function Lr(e, t) {
                        var n = -1,
                            r = e ? e.length : 0,
                            i = {};
                        for (!r || t || Ta(e[0]) || (t = []); ++n < r;) {
                            var o = e[n];
                            t ? i[o] = t[n] : o && (i[o[0]] = o[1])
                        }
                        return i
                    }

                    function Fr(e) {
                        var n = t(e);
                        return n.__chain__ = !0, n
                    }

                    function Ur(e, t, n) {
                        return t.call(n, e), e
                    }

                    function Yr(e, t, n) {
                        return t.call(n, e)
                    }

                    function Hr() {
                        return Fr(this)
                    }

                    function Vr() {
                        return new y(this.value(), this.__chain__)
                    }

                    function Qr(e) {
                        for (var t, r = this; r instanceof n;) {
                            var i = fr(r);
                            t ? o.__wrapped__ = i : t = i;
                            var o = i;
                            r = r.__wrapped__
                        }
                        return o.__wrapped__ = e, t
                    }

                    function Wr() {
                        var e = this.__wrapped__,
                            t = function(e) {
                                return n && n.__dir__ < 0 ? e : e.reverse()
                            };
                        if (e instanceof Z) {
                            var n = e;
                            return this.__actions__.length && (n = new Z(this)), n = n.reverse(), n.__actions__.push({
                                func: Yr,
                                args: [t],
                                thisArg: D
                            }), new y(n, this.__chain__)
                        }
                        return this.thru(t)
                    }

                    function Br() {
                        return this.value() + ""
                    }

                    function Gr() {
                        return nn(this.__wrapped__, this.__actions__)
                    }

                    function Kr(e, t, n) {
                        var r = Ta(e) ? ot : Ct;
                        return n && Xn(e, t, n) && (t = D), ("function" != typeof t || n !== D) && (t = Fn(t, n, 3)), r(e, t)
                    }

                    function Zr(e, t, n) {
                        var r = Ta(e) ? at : At;
                        return t = Fn(t, n, 3), r(e, t)
                    }

                    function Jr(e, t) {
                        return ia(e, zt(t))
                    }

                    function Xr(e, t, n, r) {
                        var i = e ? Us(e) : 0;
                        return nr(i) || (e = oo(e), i = e.length), n = "number" != typeof n || r && Xn(t, n, r) ? 0 : 0 > n ? xs(i + n, 0) : n || 0, "string" == typeof e || !Ta(e) && Ui(e) ? i >= n && e.indexOf(t, n) > -1 : !!i && Yn(e, t, n) > -1
                    }

                    function ei(e, t, n) {
                        var r = Ta(e) ? ut : qt;
                        return t = Fn(t, n, 3), r(e, t)
                    }

                    function ti(e, t) {
                        return ei(e, Io(t))
                    }

                    function ni(e, t, n) {
                        var r = Ta(e) ? at : At;
                        return t = Fn(t, n, 3), r(e, function(e, n, r) {
                            return !t(e, n, r)
                        })
                    }

                    function ri(e, t, n) {
                        if (n ? Xn(e, t, n) : null == t) {
                            e = cr(e);
                            var r = e.length;
                            return r > 0 ? e[Qt(0, r - 1)] : D
                        }
                        var i = -1,
                            o = Wi(e),
                            r = o.length,
                            s = r - 1;
                        for (t = ks(0 > t ? 0 : +t || 0, r); ++i < t;) {
                            var a = Qt(i, s),
                                u = o[a];
                            o[a] = o[i], o[i] = u
                        }
                        return o.length = t, o
                    }

                    function ii(e) {
                        return ri(e, Ss)
                    }

                    function oi(e) {
                        var t = e ? Us(e) : 0;
                        return nr(t) ? t : La(e).length
                    }

                    function si(e, t, n) {
                        var r = Ta(e) ? ht : Gt;
                        return n && Xn(e, t, n) && (t = D), ("function" != typeof t || n !== D) && (t = Fn(t, n, 3)), r(e, t)
                    }

                    function ai(e, t, n) {
                        if (null == e) return [];
                        n && Xn(e, t, n) && (t = D);
                        var r = -1;
                        t = Fn(t, n, 3);
                        var i = qt(e, function(e, n, i) {
                            return {
                                criteria: t(e, n, i),
                                index: ++r,
                                value: e
                            }
                        });
                        return Kt(i, c)
                    }

                    function ui(e, t, n, r) {
                        return null == e ? [] : (r && Xn(t, n, r) && (n = D), Ta(t) || (t = null == t ? [] : [t]), Ta(n) || (n = null == n ? [] : [n]), Zt(e, t, n))
                    }

                    function li(e, t) {
                        return Zr(e, zt(t))
                    }

                    function ci(e, t) {
                        if ("function" != typeof t) {
                            if ("function" != typeof e) throw new Ko(Y);
                            var n = e;
                            e = t, t = n
                        }
                        return e = bs(e = +e) ? e : 0,
                            function() {
                                return --e < 1 ? t.apply(this, arguments) : void 0
                            }
                    }

                    function di(e, t, n) {
                        return n && Xn(e, t, n) && (t = D), t = e && null == t ? e.length : xs(+t || 0, 0), Rn(e, I, D, D, D, D, t)
                    }

                    function hi(e, t) {
                        var n;
                        if ("function" != typeof t) {
                            if ("function" != typeof e) throw new Ko(Y);
                            var r = e;
                            e = t, t = r
                        }
                        return function() {
                            return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = D), n
                        }
                    }

                    function fi(e, t, n) {
                        function r() {
                            f && as(f), l && as(l), m = 0, l = f = p = D
                        }

                        function i(t, n) {
                            n && as(n), l = f = p = D, t && (m = ma(), c = e.apply(h, u), f || l || (u = h = D))
                        }

                        function o() {
                            var e = t - (ma() - d);
                            0 >= e || e > t ? i(p, l) : f = hs(o, e)
                        }

                        function s() {
                            i(v, f)
                        }

                        function a() {
                            if (u = arguments, d = ma(), h = this, p = v && (f || !y), g === !1) var n = y && !f;
                            else {
                                l || y || (m = d);
                                var r = g - (d - m),
                                    i = 0 >= r || r > g;
                                i ? (l && (l = as(l)), m = d, c = e.apply(h, u)) : l || (l = hs(s, r))
                            }
                            return i && f ? f = as(f) : f || t === g || (f = hs(o, t)), n && (i = !0, c = e.apply(h, u)), !i || f || l || (u = h = D), c
                        }
                        var u, l, c, d, h, f, p, m = 0,
                            g = !1,
                            v = !0;
                        if ("function" != typeof e) throw new Ko(Y);
                        if (t = 0 > t ? 0 : +t || 0, n === !0) {
                            var y = !0;
                            v = !1
                        } else Ii(n) && (y = !!n.leading, g = "maxWait" in n && xs(+n.maxWait || 0, t), v = "trailing" in n ? !!n.trailing : v);
                        return a.cancel = r, a
                    }

                    function pi(e, t) {
                        if ("function" != typeof e || t && "function" != typeof t) throw new Ko(Y);
                        var n = function() {
                            var r = arguments,
                                i = t ? t.apply(this, r) : r[0],
                                o = n.cache;
                            if (o.has(i)) return o.get(i);
                            var s = e.apply(this, r);
                            return n.cache = o.set(i, s), s
                        };
                        return n.cache = new pi.Cache, n
                    }

                    function mi(e) {
                        if ("function" != typeof e) throw new Ko(Y);
                        return function() {
                            return !e.apply(this, arguments)
                        }
                    }

                    function gi(e) {
                        return hi(2, e)
                    }

                    function vi(e, t) {
                        if ("function" != typeof e) throw new Ko(Y);
                        return t = xs(t === D ? e.length - 1 : +t || 0, 0),
                            function() {
                                for (var n = arguments, r = -1, i = xs(n.length - t, 0), o = Fo(i); ++r < i;) o[r] = n[t + r];
                                switch (t) {
                                    case 0:
                                        return e.call(this, o);
                                    case 1:
                                        return e.call(this, n[0], o);
                                    case 2:
                                        return e.call(this, n[0], n[1], o)
                                }
                                var s = Fo(t + 1);
                                for (r = -1; ++r < t;) s[r] = n[r];
                                return s[t] = o, e.apply(this, s)
                            }
                    }

                    function yi(e) {
                        if ("function" != typeof e) throw new Ko(Y);
                        return function(t) {
                            return e.apply(this, t)
                        }
                    }

                    function _i(e, t, n) {
                        var r = !0,
                            i = !0;
                        if ("function" != typeof e) throw new Ko(Y);
                        return n === !1 ? r = !1 : Ii(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), fi(e, t, {
                            leading: r,
                            maxWait: +t,
                            trailing: i
                        })
                    }

                    function bi(e, t) {
                        return t = null == t ? So : t, Rn(t, P, D, [e], [])
                    }

                    function wi(e, t, n, r) {
                        return t && "boolean" != typeof t && Xn(e, t, n) ? t = !1 : "function" == typeof t && (r = n, n = t, t = !1), "function" == typeof n ? wt(e, t, sn(n, r, 1)) : wt(e, t)
                    }

                    function xi(e, t, n) {
                        return "function" == typeof t ? wt(e, !0, sn(t, n, 1)) : wt(e, !0)
                    }

                    function ki(e, t) {
                        return e > t
                    }

                    function Ci(e, t) {
                        return e >= t
                    }

                    function Di(e) {
                        return v(e) && Zn(e) && ts.call(e, "callee") && !cs.call(e, "callee")
                    }

                    function $i(e) {
                        return e === !0 || e === !1 || v(e) && rs.call(e) == W
                    }

                    function Ai(e) {
                        return v(e) && rs.call(e) == B
                    }

                    function Si(e) {
                        return !!e && 1 === e.nodeType && v(e) && !Li(e)
                    }

                    function Ti(e) {
                        return null == e ? !0 : Zn(e) && (Ta(e) || Ui(e) || Di(e) || v(e) && ji(e.splice)) ? !e.length : !La(e).length
                    }

                    function Ei(e, t, n, r) {
                        n = "function" == typeof n ? sn(n, r, 3) : D;
                        var i = n ? n(e, t) : D;
                        return i === D ? Mt(e, t, n) : !!i
                    }

                    function Oi(e) {
                        return v(e) && "string" == typeof e.message && rs.call(e) == G
                    }

                    function Pi(e) {
                        return "number" == typeof e && bs(e)
                    }

                    function ji(e) {
                        return Ii(e) && rs.call(e) == K
                    }

                    function Ii(e) {
                        var t = typeof e;
                        return !!e && ("object" == t || "function" == t)
                    }

                    function Mi(e, t, n, r) {
                        return n = "function" == typeof n ? sn(n, r, 3) : D, Rt(e, Hn(t), n)
                    }

                    function Ni(e) {
                        return zi(e) && e != +e
                    }

                    function Ri(e) {
                        return null == e ? !1 : ji(e) ? os.test(es.call(e)) : v(e) && Ie.test(e)
                    }

                    function qi(e) {
                        return null === e
                    }

                    function zi(e) {
                        return "number" == typeof e || v(e) && rs.call(e) == J
                    }

                    function Li(e) {
                        var t;
                        if (!v(e) || rs.call(e) != X || Di(e) || !ts.call(e, "constructor") && (t = e.constructor, "function" == typeof t && !(t instanceof t))) return !1;
                        var n;
                        return Et(e, function(e, t) {
                            n = t
                        }), n === D || ts.call(e, n)
                    }

                    function Fi(e) {
                        return Ii(e) && rs.call(e) == ee
                    }

                    function Ui(e) {
                        return "string" == typeof e || v(e) && rs.call(e) == ne
                    }

                    function Yi(e) {
                        return v(e) && nr(e.length) && !!Ue[rs.call(e)]
                    }

                    function Hi(e) {
                        return e === D
                    }

                    function Vi(e, t) {
                        return t > e
                    }

                    function Qi(e, t) {
                        return t >= e
                    }

                    function Wi(e) {
                        var t = e ? Us(e) : 0;
                        return nr(t) ? t ? et(e) : [] : oo(e)
                    }

                    function Bi(e) {
                        return _t(e, eo(e))
                    }

                    function Gi(e, t, n) {
                        var r = Ms(e);
                        return n && Xn(e, t, n) && (t = D), t ? vt(r, t) : r
                    }

                    function Ki(e) {
                        return jt(e, eo(e))
                    }

                    function Zi(e, t, n) {
                        var r = null == e ? D : It(e, hr(t), t + "");
                        return r === D ? n : r
                    }

                    function Ji(e, t) {
                        if (null == e) return !1;
                        var n = ts.call(e, t);
                        if (!n && !er(t)) {
                            if (t = hr(t), e = 1 == t.length ? e : It(e, Bt(t, 0, -1)), null == e) return !1;
                            t = $r(t), n = ts.call(e, t)
                        }
                        return n || nr(e.length) && Jn(t, e.length) && (Ta(e) || Di(e))
                    }

                    function Xi(e, t, n) {
                        n && Xn(e, t, n) && (t = D);
                        for (var r = -1, i = La(e), o = i.length, s = {}; ++r < o;) {
                            var a = i[r],
                                u = e[a];
                            t ? ts.call(s, u) ? s[u].push(a) : s[u] = [a] : s[u] = a
                        }
                        return s
                    }

                    function eo(e) {
                        if (null == e) return [];
                        Ii(e) || (e = Wo(e));
                        var t = e.length;
                        t = t && nr(t) && (Ta(e) || Di(e)) && t || 0;
                        for (var n = e.constructor, r = -1, i = "function" == typeof n && n.prototype === e, o = Fo(t), s = t > 0; ++r < t;) o[r] = r + "";
                        for (var a in e) s && Jn(a, t) || "constructor" == a && (i || !ts.call(e, a)) || o.push(a);
                        return o
                    }

                    function to(e) {
                        e = dr(e);
                        for (var t = -1, n = La(e), r = n.length, i = Fo(r); ++t < r;) {
                            var o = n[t];
                            i[t] = [o, e[o]]
                        }
                        return i
                    }

                    function no(e, t, n) {
                        var r = null == e ? D : e[t];
                        return r === D && (null == e || er(t, e) || (t = hr(t), e = 1 == t.length ? e : It(e, Bt(t, 0, -1)), r = null == e ? D : e[$r(t)]), r = r === D ? n : r), ji(r) ? r.call(e) : r
                    }

                    function ro(e, t, n) {
                        if (null == e) return e;
                        var r = t + "";
                        t = null != e[r] || er(t, e) ? [r] : hr(t);
                        for (var i = -1, o = t.length, s = o - 1, a = e; null != a && ++i < o;) {
                            var u = t[i];
                            Ii(a) && (i == s ? a[u] = n : null == a[u] && (a[u] = Jn(t[i + 1]) ? [] : {})), a = a[u]
                        }
                        return e
                    }

                    function io(e, t, n, r) {
                        var i = Ta(e) || Yi(e);
                        if (t = Fn(t, r, 4), null == n)
                            if (i || Ii(e)) {
                                var o = e.constructor;
                                n = i ? Ta(e) ? new o : [] : Ms(ji(o) ? o.prototype : D)
                            } else n = {};
                        return (i ? tt : Ot)(e, function(e, r, i) {
                            return t(n, e, r, i)
                        }), n
                    }

                    function oo(e) {
                        return en(e, La(e))
                    }

                    function so(e) {
                        return en(e, eo(e))
                    }

                    function ao(e, t, n) {
                        return t = +t || 0, n === D ? (n = t, t = 0) : n = +n || 0, e >= ks(t, n) && e < xs(t, n)
                    }

                    function uo(e, t, n) {
                        n && Xn(e, t, n) && (t = n = D);
                        var r = null == e,
                            i = null == t;
                        if (null == n && (i && "boolean" == typeof e ? (n = e, e = 1) : "boolean" == typeof t && (n = t, i = !0)), r && i && (t = 1, i = !1), e = +e || 0, i ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1) {
                            var o = $s();
                            return ks(e + o * (t - e + us("1e-" + ((o + "").length - 1))), t)
                        }
                        return Qt(e, t)
                    }

                    function lo(e) {
                        return e = a(e), e && e.charAt(0).toUpperCase() + e.slice(1)
                    }

                    function co(e) {
                        return e = a(e), e && e.replace(Ne, h).replace(Te, "")
                    }

                    function ho(e, t, n) {
                        e = a(e), t += "";
                        var r = e.length;
                        return n = n === D ? r : ks(0 > n ? 0 : +n || 0, r), n -= t.length, n >= 0 && e.indexOf(t, n) == n
                    }

                    function fo(e) {
                        return e = a(e), e && be.test(e) ? e.replace(ye, f) : e
                    }

                    function po(e) {
                        return e = a(e), e && Se.test(e) ? e.replace(Ae, p) : e || "(?:)"
                    }

                    function mo(e, t, n) {
                        e = a(e), t = +t;
                        var r = e.length;
                        if (r >= t || !bs(t)) return e;
                        var i = (t - r) / 2,
                            o = ys(i),
                            s = gs(i);
                        return n = jn("", s, n), n.slice(0, o) + e + n
                    }

                    function go(e, t, n) {
                        return (n ? Xn(e, t, n) : null == t) ? t = 0 : t && (t = +t), e = bo(e), Ds(e, t || (je.test(e) ? 16 : 10))
                    }

                    function vo(e, t) {
                        var n = "";
                        if (e = a(e), t = +t, 1 > t || !e || !bs(t)) return n;
                        do t % 2 && (n += e), t = ys(t / 2), e += e; while (t);
                        return n
                    }

                    function yo(e, t, n) {
                        return e = a(e), n = null == n ? 0 : ks(0 > n ? 0 : +n || 0, e.length), e.lastIndexOf(t, n) == n
                    }

                    function _o(e, n, r) {
                        var i = t.templateSettings;
                        r && Xn(e, n, r) && (n = r = D), e = a(e), n = gt(vt({}, r || n), i, mt);
                        var o, s, u = gt(vt({}, n.imports), i.imports, mt),
                            l = La(u),
                            c = en(u, l),
                            d = 0,
                            h = n.interpolate || Re,
                            f = "__p += '",
                            p = Bo((n.escape || Re).source + "|" + h.source + "|" + (h === ke ? Oe : Re).source + "|" + (n.evaluate || Re).source + "|$", "g"),
                            g = "//# sourceURL=" + ("sourceURL" in n ? n.sourceURL : "lodash.templateSources[" + ++Fe + "]") + "\n";
                        e.replace(p, function(t, n, r, i, a, u) {
                            return r || (r = i), f += e.slice(d, u).replace(qe, m), n && (o = !0, f += "' +\n__e(" + n + ") +\n'"), a && (s = !0, f += "';\n" + a + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), d = u + t.length, t
                        }), f += "';\n";
                        var v = n.variable;
                        v || (f = "with (obj) {\n" + f + "\n}\n"), f = (s ? f.replace(pe, "") : f).replace(me, "$1").replace(ge, "$1;"), f = "function(" + (v || "obj") + ") {\n" + (v ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
                        var y = Za(function() {
                            return Ho(l, g + "return " + f).apply(D, c)
                        });
                        if (y.source = f, Oi(y)) throw y;
                        return y
                    }

                    function bo(e, t, n) {
                        var r = e;
                        return (e = a(e)) ? (n ? Xn(r, t, n) : null == t) ? e.slice(w(e), x(e) + 1) : (t += "", e.slice(u(e, t), l(e, t) + 1)) : e
                    }

                    function wo(e, t, n) {
                        var r = e;
                        return e = a(e), e ? e.slice((n ? Xn(r, t, n) : null == t) ? w(e) : u(e, t + "")) : e
                    }

                    function xo(e, t, n) {
                        var r = e;
                        return e = a(e), e ? (n ? Xn(r, t, n) : null == t) ? e.slice(0, x(e) + 1) : e.slice(0, l(e, t + "") + 1) : e
                    }

                    function ko(e, t, n) {
                        n && Xn(e, t, n) && (t = D);
                        var r = N,
                            i = R;
                        if (null != t)
                            if (Ii(t)) {
                                var o = "separator" in t ? t.separator : o;
                                r = "length" in t ? +t.length || 0 : r, i = "omission" in t ? a(t.omission) : i
                            } else r = +t || 0;
                        if (e = a(e), r >= e.length) return e;
                        var s = r - i.length;
                        if (1 > s) return i;
                        var u = e.slice(0, s);
                        if (null == o) return u + i;
                        if (Fi(o)) {
                            if (e.slice(s).search(o)) {
                                var l, c, d = e.slice(0, s);
                                for (o.global || (o = Bo(o.source, (Pe.exec(o) || "") + "g")), o.lastIndex = 0; l = o.exec(d);) c = l.index;
                                u = u.slice(0, null == c ? s : c)
                            }
                        } else if (e.indexOf(o, s) != s) {
                            var h = u.lastIndexOf(o);
                            h > -1 && (u = u.slice(0, h))
                        }
                        return u + i
                    }

                    function Co(e) {
                        return e = a(e), e && _e.test(e) ? e.replace(ve, k) : e
                    }

                    function Do(e, t, n) {
                        return n && Xn(e, t, n) && (t = D), e = a(e), e.match(t || ze) || []
                    }

                    function $o(e, t, n) {
                        return n && Xn(e, t, n) && (t = D), v(e) ? To(e) : bt(e, t)
                    }

                    function Ao(e) {
                        return function() {
                            return e
                        }
                    }

                    function So(e) {
                        return e
                    }

                    function To(e) {
                        return zt(wt(e, !0))
                    }

                    function Eo(e, t) {
                        return Lt(e, wt(t, !0))
                    }

                    function Oo(e, t, n) {
                        if (null == n) {
                            var r = Ii(t),
                                i = r ? La(t) : D,
                                o = i && i.length ? jt(t, i) : D;
                            (o ? o.length : r) || (o = !1, n = t, t = e, e = this)
                        }
                        o || (o = jt(t, La(t)));
                        var s = !0,
                            a = -1,
                            u = ji(e),
                            l = o.length;
                        n === !1 ? s = !1 : Ii(n) && "chain" in n && (s = n.chain);
                        for (; ++a < l;) {
                            var c = o[a],
                                d = t[c];
                            e[c] = d, u && (e.prototype[c] = function(t) {
                                return function() {
                                    var n = this.__chain__;
                                    if (s || n) {
                                        var r = e(this.__wrapped__),
                                            i = r.__actions__ = et(this.__actions__);
                                        return i.push({
                                            func: t,
                                            args: arguments,
                                            thisArg: e
                                        }), r.__chain__ = n, r
                                    }
                                    return t.apply(e, lt([this.value()], arguments))
                                }
                            }(d))
                        }
                        return e
                    }

                    function Po() {
                        return nt._ = is, this
                    }

                    function jo() {}

                    function Io(e) {
                        return er(e) ? Yt(e) : Ht(e)
                    }

                    function Mo(e) {
                        return function(t) {
                            return It(e, hr(t), t + "")
                        }
                    }

                    function No(e, t, n) {
                        n && Xn(e, t, n) && (t = n = D), e = +e || 0, n = null == n ? 1 : +n || 0, null == t ? (t = e, e = 0) : t = +t || 0;
                        for (var r = -1, i = xs(gs((t - e) / (n || 1)), 0), o = Fo(i); ++r < i;) o[r] = e, e += n;
                        return o
                    }

                    function Ro(e, t, n) {
                        if (e = ys(e), 1 > e || !bs(e)) return [];
                        var r = -1,
                            i = Fo(ks(e, Ts));
                        for (t = sn(t, n, 1); ++r < e;) Ts > r ? i[r] = t(r) : t(r);
                        return i
                    }

                    function qo(e) {
                        var t = ++ns;
                        return a(e) + t
                    }

                    function zo(e, t) {
                        return (+e || 0) + (+t || 0)
                    }

                    function Lo(e, t, n) {
                        return n && Xn(e, t, n) && (t = D), t = Fn(t, n, 3), 1 == t.length ? ft(Ta(e) ? e : cr(e), t) : Jt(e, t)
                    }
                    e = e ? rt.defaults(nt.Object(), e, rt.pick(nt, Le)) : nt; {
                        var Fo = e.Array,
                            Uo = e.Date,
                            Yo = e.Error,
                            Ho = e.Function,
                            Vo = e.Math,
                            Qo = e.Number,
                            Wo = e.Object,
                            Bo = e.RegExp,
                            Go = e.String,
                            Ko = e.TypeError,
                            Zo = Fo.prototype,
                            Jo = Wo.prototype,
                            Xo = Go.prototype,
                            es = Ho.prototype.toString,
                            ts = Jo.hasOwnProperty,
                            ns = 0,
                            rs = Jo.toString,
                            is = nt._,
                            os = Bo("^" + es.call(ts).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            ss = e.ArrayBuffer,
                            as = e.clearTimeout,
                            us = e.parseFloat,
                            ls = Vo.pow,
                            cs = Jo.propertyIsEnumerable,
                            ds = Vn(e, "Set"),
                            hs = e.setTimeout,
                            fs = Zo.splice,
                            ps = e.Uint8Array,
                            ms = Vn(e, "WeakMap"),
                            gs = Vo.ceil,
                            vs = Vn(Wo, "create"),
                            ys = Vo.floor,
                            _s = Vn(Fo, "isArray"),
                            bs = e.isFinite,
                            ws = Vn(Wo, "keys"),
                            xs = Vo.max,
                            ks = Vo.min,
                            Cs = Vn(Uo, "now"),
                            Ds = e.parseInt,
                            $s = Vo.random,
                            As = Qo.NEGATIVE_INFINITY,
                            Ss = Qo.POSITIVE_INFINITY,
                            Ts = 4294967295,
                            Es = Ts - 1,
                            Os = Ts >>> 1,
                            Ps = 9007199254740991,
                            js = ms && new ms,
                            Is = {};
                        t.support = {}
                    }
                    t.templateSettings = {
                        escape: we,
                        evaluate: xe,
                        interpolate: ke,
                        variable: "",
                        imports: {
                            _: t
                        }
                    };
                    var Ms = function() {
                            function e() {}
                            return function(t) {
                                if (Ii(t)) {
                                    e.prototype = t;
                                    var n = new e;
                                    e.prototype = D
                                }
                                return n || {}
                            }
                        }(),
                        Ns = hn(Ot),
                        Rs = hn(Pt, !0),
                        qs = fn(),
                        zs = fn(!0),
                        Ls = js ? function(e, t) {
                            return js.set(e, t), e
                        } : So,
                        Fs = js ? function(e) {
                            return js.get(e)
                        } : jo,
                        Us = Yt("length"),
                        Ys = function() {
                            var e = 0,
                                t = 0;
                            return function(n, r) {
                                var i = ma(),
                                    o = z - (i - t);
                                if (t = i, o > 0) {
                                    if (++e >= q) return n
                                } else e = 0;
                                return Ls(n, r)
                            }
                        }(),
                        Hs = vi(function(e, t) {
                            return v(e) && Zn(e) ? kt(e, Tt(t, !1, !0)) : []
                        }),
                        Vs = xn(),
                        Qs = xn(!0),
                        Ws = vi(function(e) {
                            for (var t = e.length, n = t, r = Fo(d), i = Yn(), s = i == o, a = []; n--;) {
                                var u = e[n] = Zn(u = e[n]) ? u : [];
                                r[n] = s && u.length >= 120 ? mn(n && u) : null
                            }
                            var l = e[0],
                                c = -1,
                                d = l ? l.length : 0,
                                h = r[0];
                            e: for (; ++c < d;)
                                if (u = l[c], (h ? Ze(h, u) : i(a, u, 0)) < 0) {
                                    for (var n = t; --n;) {
                                        var f = r[n];
                                        if ((f ? Ze(f, u) : i(e[n], u, 0)) < 0) continue e
                                    }
                                    h && h.push(u), a.push(u)
                                }
                            return a
                        }),
                        Bs = vi(function(e, t) {
                            t = Tt(t);
                            var n = yt(e, t);
                            return Vt(e, t.sort(r)), n
                        }),
                        Gs = Nn(),
                        Ks = Nn(!0),
                        Zs = vi(function(e) {
                            return Xt(Tt(e, !1, !0))
                        }),
                        Js = vi(function(e, t) {
                            return Zn(e) ? kt(e, t) : []
                        }),
                        Xs = vi(Rr),
                        ea = vi(function(e) {
                            var t = e.length,
                                n = t > 2 ? e[t - 2] : D,
                                r = t > 1 ? e[t - 1] : D;
                            return t > 2 && "function" == typeof n ? t -= 2 : (n = t > 1 && "function" == typeof r ? (--t, r) : D, r = D), e.length = t, qr(e, n, r)
                        }),
                        ta = vi(function(e) {
                            return e = Tt(e), this.thru(function(t) {
                                return Xe(Ta(t) ? t : [dr(t)], e)
                            })
                        }),
                        na = vi(function(e, t) {
                            return yt(e, Tt(t))
                        }),
                        ra = cn(function(e, t, n) {
                            ts.call(e, n) ? ++e[n] : e[n] = 1
                        }),
                        ia = wn(Ns),
                        oa = wn(Rs, !0),
                        sa = Dn(tt, Ns),
                        aa = Dn(it, Rs),
                        ua = cn(function(e, t, n) {
                            ts.call(e, n) ? e[n].push(t) : e[n] = [t]
                        }),
                        la = cn(function(e, t, n) {
                            e[n] = t
                        }),
                        ca = vi(function(e, t, n) {
                            var r = -1,
                                i = "function" == typeof t,
                                o = er(t),
                                s = Zn(e) ? Fo(e.length) : [];
                            return Ns(e, function(e) {
                                var a = i ? t : o && null != e ? e[t] : D;
                                s[++r] = a ? a.apply(e, n) : Kn(e, t, n)
                            }), s
                        }),
                        da = cn(function(e, t, n) {
                            e[n ? 0 : 1].push(t)
                        }, function() {
                            return [
                                [],
                                []
                            ]
                        }),
                        ha = On(ct, Ns),
                        fa = On(dt, Rs),
                        pa = vi(function(e, t) {
                            if (null == e) return [];
                            var n = t[2];
                            return n && Xn(t[0], t[1], n) && (t.length = 1), Zt(e, Tt(t), [])
                        }),
                        ma = Cs || function() {
                            return (new Uo).getTime()
                        },
                        ga = vi(function(e, t, n) {
                            var r = A;
                            if (n.length) {
                                var i = _(n, ga.placeholder);
                                r |= P
                            }
                            return Rn(e, r, t, n, i)
                        }),
                        va = vi(function(e, t) {
                            t = t.length ? Tt(t) : Ki(e);
                            for (var n = -1, r = t.length; ++n < r;) {
                                var i = t[n];
                                e[i] = Rn(e[i], A, e)
                            }
                            return e
                        }),
                        ya = vi(function(e, t, n) {
                            var r = A | S;
                            if (n.length) {
                                var i = _(n, ya.placeholder);
                                r |= P
                            }
                            return Rn(t, r, e, n, i)
                        }),
                        _a = yn(E),
                        ba = yn(O),
                        wa = vi(function(e, t) {
                            return xt(e, 1, t)
                        }),
                        xa = vi(function(e, t, n) {
                            return xt(e, t, n)
                        }),
                        ka = Cn(),
                        Ca = Cn(!0),
                        Da = vi(function(e, t) {
                            if (t = Tt(t), "function" != typeof e || !ot(t, s)) throw new Ko(Y);
                            var n = t.length;
                            return vi(function(r) {
                                for (var i = ks(r.length, n); i--;) r[i] = t[i](r[i]);
                                return e.apply(this, r)
                            })
                        }),
                        $a = En(P),
                        Aa = En(j),
                        Sa = vi(function(e, t) {
                            return Rn(e, M, D, D, D, Tt(t))
                        }),
                        Ta = _s || function(e) {
                            return v(e) && nr(e.length) && rs.call(e) == Q
                        },
                        Ea = dn(Ft),
                        Oa = dn(function(e, t, n) {
                            return n ? gt(e, t, n) : vt(e, t)
                        }),
                        Pa = _n(Oa, pt),
                        ja = _n(Ea, or),
                        Ia = kn(Ot),
                        Ma = kn(Pt),
                        Na = $n(qs),
                        Ra = $n(zs),
                        qa = An(Ot),
                        za = An(Pt),
                        La = ws ? function(e) {
                            var t = null == e ? D : e.constructor;
                            return "function" == typeof t && t.prototype === e || "function" != typeof e && Zn(e) ? lr(e) : Ii(e) ? ws(e) : []
                        } : lr,
                        Fa = Sn(!0),
                        Ua = Sn(),
                        Ya = vi(function(e, t) {
                            if (null == e) return {};
                            if ("function" != typeof t[0]) {
                                var t = ut(Tt(t), Go);
                                return sr(e, kt(eo(e), t))
                            }
                            var n = sn(t[0], t[1], 3);
                            return ar(e, function(e, t, r) {
                                return !n(e, t, r)
                            })
                        }),
                        Ha = vi(function(e, t) {
                            return null == e ? {} : "function" == typeof t[0] ? ar(e, sn(t[0], t[1], 3)) : sr(e, Tt(t))
                        }),
                        Va = gn(function(e, t, n) {
                            return t = t.toLowerCase(), e + (n ? t.charAt(0).toUpperCase() + t.slice(1) : t)
                        }),
                        Qa = gn(function(e, t, n) {
                            return e + (n ? "-" : "") + t.toLowerCase()
                        }),
                        Wa = Tn(),
                        Ba = Tn(!0),
                        Ga = gn(function(e, t, n) {
                            return e + (n ? "_" : "") + t.toLowerCase()
                        }),
                        Ka = gn(function(e, t, n) {
                            return e + (n ? " " : "") + (t.charAt(0).toUpperCase() + t.slice(1))
                        }),
                        Za = vi(function(e, t) {
                            try {
                                return e.apply(D, t)
                            } catch (n) {
                                return Oi(n) ? n : new Yo(n)
                            }
                        }),
                        Ja = vi(function(e, t) {
                            return function(n) {
                                return Kn(n, e, t)
                            }
                        }),
                        Xa = vi(function(e, t) {
                            return function(n) {
                                return Kn(e, n, t)
                            }
                        }),
                        eu = Mn("ceil"),
                        tu = Mn("floor"),
                        nu = bn(ki, As),
                        ru = bn(Vi, Ss),
                        iu = Mn("round");
                    return t.prototype = n.prototype, y.prototype = Ms(n.prototype), y.prototype.constructor = y, Z.prototype = Ms(n.prototype), Z.prototype.constructor = Z, Ve.prototype["delete"] = Qe, Ve.prototype.get = We, Ve.prototype.has = Be, Ve.prototype.set = Ge, Ke.prototype.push = Je, pi.Cache = Ve, t.after = ci, t.ary = di, t.assign = Oa, t.at = na, t.before = hi, t.bind = ga, t.bindAll = va, t.bindKey = ya, t.callback = $o, t.chain = Fr, t.chunk = pr, t.compact = mr, t.constant = Ao, t.countBy = ra, t.create = Gi, t.curry = _a, t.curryRight = ba, t.debounce = fi, t.defaults = Pa, t.defaultsDeep = ja, t.defer = wa, t.delay = xa, t.difference = Hs, t.drop = gr, t.dropRight = vr, t.dropRightWhile = yr, t.dropWhile = _r, t.fill = br, t.filter = Zr, t.flatten = xr, t.flattenDeep = kr, t.flow = ka, t.flowRight = Ca, t.forEach = sa, t.forEachRight = aa, t.forIn = Na, t.forInRight = Ra, t.forOwn = qa, t.forOwnRight = za, t.functions = Ki, t.groupBy = ua, t.indexBy = la, t.initial = Dr, t.intersection = Ws, t.invert = Xi, t.invoke = ca, t.keys = La, t.keysIn = eo, t.map = ei, t.mapKeys = Fa, t.mapValues = Ua, t.matches = To, t.matchesProperty = Eo, t.memoize = pi, t.merge = Ea, t.method = Ja, t.methodOf = Xa, t.mixin = Oo, t.modArgs = Da, t.negate = mi, t.omit = Ya, t.once = gi, t.pairs = to, t.partial = $a, t.partialRight = Aa, t.partition = da, t.pick = Ha, t.pluck = ti, t.property = Io, t.propertyOf = Mo, t.pull = Sr, t.pullAt = Bs, t.range = No, t.rearg = Sa, t.reject = ni, t.remove = Tr, t.rest = Er, t.restParam = vi, t.set = ro, t.shuffle = ii, t.slice = Or, t.sortBy = ai, t.sortByAll = pa, t.sortByOrder = ui, t.spread = yi, t.take = Pr, t.takeRight = jr, t.takeRightWhile = Ir, t.takeWhile = Mr, t.tap = Ur, t.throttle = _i, t.thru = Yr, t.times = Ro, t.toArray = Wi, t.toPlainObject = Bi, t.transform = io, t.union = Zs, t.uniq = Nr, t.unzip = Rr, t.unzipWith = qr, t.values = oo, t.valuesIn = so, t.where = li, t.without = Js, t.wrap = bi, t.xor = zr, t.zip = Xs, t.zipObject = Lr, t.zipWith = ea, t.backflow = Ca, t.collect = ei, t.compose = Ca, t.each = sa, t.eachRight = aa, t.extend = Oa, t.iteratee = $o, t.methods = Ki, t.object = Lr, t.select = Zr, t.tail = Er, t.unique = Nr, Oo(t, t), t.add = zo, t.attempt = Za, t.camelCase = Va, t.capitalize = lo, t.ceil = eu, t.clone = wi, t.cloneDeep = xi, t.deburr = co, t.endsWith = ho, t.escape = fo, t.escapeRegExp = po, t.every = Kr, t.find = ia, t.findIndex = Vs, t.findKey = Ia, t.findLast = oa, t.findLastIndex = Qs, t.findLastKey = Ma, t.findWhere = Jr, t.first = wr, t.floor = tu, t.get = Zi, t.gt = ki, t.gte = Ci, t.has = Ji, t.identity = So, t.includes = Xr, t.indexOf = Cr, t.inRange = ao, t.isArguments = Di, t.isArray = Ta, t.isBoolean = $i, t.isDate = Ai, t.isElement = Si, t.isEmpty = Ti, t.isEqual = Ei, t.isError = Oi, t.isFinite = Pi, t.isFunction = ji, t.isMatch = Mi, t.isNaN = Ni, t.isNative = Ri, t.isNull = qi, t.isNumber = zi, t.isObject = Ii, t.isPlainObject = Li, t.isRegExp = Fi, t.isString = Ui, t.isTypedArray = Yi, t.isUndefined = Hi, t.kebabCase = Qa, t.last = $r, t.lastIndexOf = Ar, t.lt = Vi, t.lte = Qi, t.max = nu, t.min = ru, t.noConflict = Po, t.noop = jo, t.now = ma, t.pad = mo, t.padLeft = Wa, t.padRight = Ba, t.parseInt = go, t.random = uo, t.reduce = ha, t.reduceRight = fa, t.repeat = vo, t.result = no, t.round = iu, t.runInContext = C, t.size = oi, t.snakeCase = Ga, t.some = si, t.sortedIndex = Gs, t.sortedLastIndex = Ks, t.startCase = Ka, t.startsWith = yo, t.sum = Lo, t.template = _o, t.trim = bo, t.trimLeft = wo, t.trimRight = xo, t.trunc = ko, t.unescape = Co, t.uniqueId = qo, t.words = Do, t.all = Kr,
                        t.any = si, t.contains = Xr, t.eq = Ei, t.detect = ia, t.foldl = ha, t.foldr = fa, t.head = wr, t.include = Xr, t.inject = ha, Oo(t, function() {
                            var e = {};
                            return Ot(t, function(n, r) {
                                t.prototype[r] || (e[r] = n)
                            }), e
                        }(), !1), t.sample = ri, t.prototype.sample = function(e) {
                            return this.__chain__ || null != e ? this.thru(function(t) {
                                return ri(t, e)
                            }) : ri(this.value())
                        }, t.VERSION = $, tt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                            t[e].placeholder = t
                        }), tt(["drop", "take"], function(e, t) {
                            Z.prototype[e] = function(n) {
                                var r = this.__filtered__;
                                if (r && !t) return new Z(this);
                                n = null == n ? 1 : xs(ys(n) || 0, 0);
                                var i = this.clone();
                                return r ? i.__takeCount__ = ks(i.__takeCount__, n) : i.__views__.push({
                                    size: n,
                                    type: e + (i.__dir__ < 0 ? "Right" : "")
                                }), i
                            }, Z.prototype[e + "Right"] = function(t) {
                                return this.reverse()[e](t).reverse()
                            }
                        }), tt(["filter", "map", "takeWhile"], function(e, t) {
                            var n = t + 1,
                                r = n != U;
                            Z.prototype[e] = function(e, t) {
                                var i = this.clone();
                                return i.__iteratees__.push({
                                    iteratee: Fn(e, t, 1),
                                    type: n
                                }), i.__filtered__ = i.__filtered__ || r, i
                            }
                        }), tt(["first", "last"], function(e, t) {
                            var n = "take" + (t ? "Right" : "");
                            Z.prototype[e] = function() {
                                return this[n](1).value()[0]
                            }
                        }), tt(["initial", "rest"], function(e, t) {
                            var n = "drop" + (t ? "" : "Right");
                            Z.prototype[e] = function() {
                                return this.__filtered__ ? new Z(this) : this[n](1)
                            }
                        }), tt(["pluck", "where"], function(e, t) {
                            var n = t ? "filter" : "map",
                                r = t ? zt : Io;
                            Z.prototype[e] = function(e) {
                                return this[n](r(e))
                            }
                        }), Z.prototype.compact = function() {
                            return this.filter(So)
                        }, Z.prototype.reject = function(e, t) {
                            return e = Fn(e, t, 1), this.filter(function(t) {
                                return !e(t)
                            })
                        }, Z.prototype.slice = function(e, t) {
                            e = null == e ? 0 : +e || 0;
                            var n = this;
                            return n.__filtered__ && (e > 0 || 0 > t) ? new Z(n) : (0 > e ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== D && (t = +t || 0, n = 0 > t ? n.dropRight(-t) : n.take(t - e)), n)
                        }, Z.prototype.takeRightWhile = function(e, t) {
                            return this.reverse().takeWhile(e, t).reverse()
                        }, Z.prototype.toArray = function() {
                            return this.take(Ss)
                        }, Ot(Z.prototype, function(e, n) {
                            var r = /^(?:filter|map|reject)|While$/.test(n),
                                i = /^(?:first|last)$/.test(n),
                                o = t[i ? "take" + ("last" == n ? "Right" : "") : n];
                            o && (t.prototype[n] = function() {
                                var t = i ? [1] : arguments,
                                    n = this.__chain__,
                                    s = this.__wrapped__,
                                    a = !!this.__actions__.length,
                                    u = s instanceof Z,
                                    l = t[0],
                                    c = u || Ta(s);
                                c && r && "function" == typeof l && 1 != l.length && (u = c = !1);
                                var d = function(e) {
                                        return i && n ? o(e, 1)[0] : o.apply(D, lt([e], t))
                                    },
                                    h = {
                                        func: Yr,
                                        args: [d],
                                        thisArg: D
                                    },
                                    f = u && !a;
                                if (i && !n) return f ? (s = s.clone(), s.__actions__.push(h), e.call(s)) : o.call(D, this.value())[0];
                                if (!i && c) {
                                    s = f ? s : new Z(this);
                                    var p = e.apply(s, t);
                                    return p.__actions__.push(h), new y(p, n)
                                }
                                return this.thru(d)
                            })
                        }), tt(["join", "pop", "push", "replace", "shift", "sort", "splice", "split", "unshift"], function(e) {
                            var n = (/^(?:replace|split)$/.test(e) ? Xo : Zo)[e],
                                r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                i = /^(?:join|pop|replace|shift)$/.test(e);
                            t.prototype[e] = function() {
                                var e = arguments;
                                return i && !this.__chain__ ? n.apply(this.value(), e) : this[r](function(t) {
                                    return n.apply(t, e)
                                })
                            }
                        }), Ot(Z.prototype, function(e, n) {
                            var r = t[n];
                            if (r) {
                                var i = r.name,
                                    o = Is[i] || (Is[i] = []);
                                o.push({
                                    name: n,
                                    func: r
                                })
                            }
                        }), Is[Pn(D, S).name] = [{
                            name: "wrapper",
                            func: D
                        }], Z.prototype.clone = te, Z.prototype.reverse = re, Z.prototype.value = He, t.prototype.chain = Hr, t.prototype.commit = Vr, t.prototype.concat = ta, t.prototype.plant = Qr, t.prototype.reverse = Wr, t.prototype.toString = Br, t.prototype.run = t.prototype.toJSON = t.prototype.valueOf = t.prototype.value = Gr, t.prototype.collect = t.prototype.map, t.prototype.head = t.prototype.first, t.prototype.select = t.prototype.filter, t.prototype.tail = t.prototype.rest, t
                }
                var D, $ = "3.10.0",
                    A = 1,
                    S = 2,
                    T = 4,
                    E = 8,
                    O = 16,
                    P = 32,
                    j = 64,
                    I = 128,
                    M = 256,
                    N = 30,
                    R = "...",
                    q = 150,
                    z = 16,
                    L = 200,
                    F = 1,
                    U = 2,
                    Y = "Expected a function",
                    H = "__lodash_placeholder__",
                    V = "[object Arguments]",
                    Q = "[object Array]",
                    W = "[object Boolean]",
                    B = "[object Date]",
                    G = "[object Error]",
                    K = "[object Function]",
                    Z = "[object Map]",
                    J = "[object Number]",
                    X = "[object Object]",
                    ee = "[object RegExp]",
                    te = "[object Set]",
                    ne = "[object String]",
                    re = "[object WeakMap]",
                    ie = "[object ArrayBuffer]",
                    oe = "[object Float32Array]",
                    se = "[object Float64Array]",
                    ae = "[object Int8Array]",
                    ue = "[object Int16Array]",
                    le = "[object Int32Array]",
                    ce = "[object Uint8Array]",
                    de = "[object Uint8ClampedArray]",
                    he = "[object Uint16Array]",
                    fe = "[object Uint32Array]",
                    pe = /\b__p \+= '';/g,
                    me = /\b(__p \+=) '' \+/g,
                    ge = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                    ve = /&(?:amp|lt|gt|quot|#39|#96);/g,
                    ye = /[&<>"'`]/g,
                    _e = RegExp(ve.source),
                    be = RegExp(ye.source),
                    we = /<%-([\s\S]+?)%>/g,
                    xe = /<%([\s\S]+?)%>/g,
                    ke = /<%=([\s\S]+?)%>/g,
                    Ce = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
                    De = /^\w*$/,
                    $e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
                    Ae = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
                    Se = RegExp(Ae.source),
                    Te = /[\u0300-\u036f\ufe20-\ufe23]/g,
                    Ee = /\\(\\)?/g,
                    Oe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                    Pe = /\w*$/,
                    je = /^0[xX]/,
                    Ie = /^\[object .+?Constructor\]$/,
                    Me = /^\d+$/,
                    Ne = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
                    Re = /($^)/,
                    qe = /['\n\r\u2028\u2029\\]/g,
                    ze = function() {
                        var e = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                            t = "[a-z\\xdf-\\xf6\\xf8-\\xff]+";
                        return RegExp(e + "+(?=" + e + t + ")|" + e + "?" + t + "|" + e + "+|[0-9]+", "g")
                    }(),
                    Le = ["Array", "ArrayBuffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Math", "Number", "Object", "RegExp", "Set", "String", "_", "clearTimeout", "isFinite", "parseFloat", "parseInt", "setTimeout", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap"],
                    Fe = -1,
                    Ue = {};
                Ue[oe] = Ue[se] = Ue[ae] = Ue[ue] = Ue[le] = Ue[ce] = Ue[de] = Ue[he] = Ue[fe] = !0, Ue[V] = Ue[Q] = Ue[ie] = Ue[W] = Ue[B] = Ue[G] = Ue[K] = Ue[Z] = Ue[J] = Ue[X] = Ue[ee] = Ue[te] = Ue[ne] = Ue[re] = !1;
                var Ye = {};
                Ye[V] = Ye[Q] = Ye[ie] = Ye[W] = Ye[B] = Ye[oe] = Ye[se] = Ye[ae] = Ye[ue] = Ye[le] = Ye[J] = Ye[X] = Ye[ee] = Ye[ne] = Ye[ce] = Ye[de] = Ye[he] = Ye[fe] = !0, Ye[G] = Ye[K] = Ye[Z] = Ye[te] = Ye[re] = !1;
                var He = {
                        "�": "A",
                        "�": "A",
                        "�": "A",
                        "�": "A",
                        "�": "A",
                        "�": "A",
                        "�": "a",
                        "�": "a",
                        "�": "a",
                        "�": "a",
                        "�": "a",
                        "�": "a",
                        "�": "C",
                        "�": "c",
                        "�": "D",
                        "�": "d",
                        "�": "E",
                        "�": "E",
                        "�": "E",
                        "�": "E",
                        "�": "e",
                        "�": "e",
                        "�": "e",
                        "�": "e",
                        "�": "I",
                        "�": "I",
                        "�": "I",
                        "�": "I",
                        "�": "i",
                        "�": "i",
                        "�": "i",
                        "�": "i",
                        "�": "N",
                        "�": "n",
                        "�": "O",
                        "�": "O",
                        "�": "O",
                        "�": "O",
                        "�": "O",
                        "�": "O",
                        "�": "o",
                        "�": "o",
                        "�": "o",
                        "�": "o",
                        "�": "o",
                        "�": "o",
                        "�": "U",
                        "�": "U",
                        "�": "U",
                        "�": "U",
                        "�": "u",
                        "�": "u",
                        "�": "u",
                        "�": "u",
                        "�": "Y",
                        "�": "y",
                        "�": "y",
                        "�": "Ae",
                        "�": "ae",
                        "�": "Th",
                        "�": "th",
                        "�": "ss"
                    },
                    Ve = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "`": "&#96;"
                    },
                    Qe = {
                        "&amp;": "&",
                        "&lt;": "<",
                        "&gt;": ">",
                        "&quot;": '"',
                        "&#39;": "'",
                        "&#96;": "`"
                    },
                    We = {
                        "function": !0,
                        object: !0
                    },
                    Be = {
                        0: "x30",
                        1: "x31",
                        2: "x32",
                        3: "x33",
                        4: "x34",
                        5: "x35",
                        6: "x36",
                        7: "x37",
                        8: "x38",
                        9: "x39",
                        A: "x41",
                        B: "x42",
                        C: "x43",
                        D: "x44",
                        E: "x45",
                        F: "x46",
                        a: "x61",
                        b: "x62",
                        c: "x63",
                        d: "x64",
                        e: "x65",
                        f: "x66",
                        n: "x6e",
                        r: "x72",
                        t: "x74",
                        u: "x75",
                        v: "x76",
                        x: "x78"
                    },
                    Ge = {
                        "\\": "\\",
                        "'": "'",
                        "\n": "n",
                        "\r": "r",
                        "\u2028": "u2028",
                        "\u2029": "u2029"
                    },
                    Ke = We[typeof n] && n && !n.nodeType && n,
                    Ze = We[typeof t] && t && !t.nodeType && t,
                    Je = Ke && Ze && "object" == typeof e && e && e.Object && e,
                    Xe = We[typeof self] && self && self.Object && self,
                    et = We[typeof window] && window && window.Object && window,
                    tt = Ze && Ze.exports === Ke && Ke,
                    nt = Je || et !== (this && this.window) && et || Xe || this,
                    rt = C();
                "function" == typeof define && "object" == typeof define.amd && define.amd ? (nt._ = rt, define(function() {
                    return rt
                })) : Ke && Ze ? tt ? (Ze.exports = rt)._ = rt : Ke._ = rt : nt._ = rt
            }).call(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    10: [function(e, t, n) {
        ! function(e, r) {
            "object" == typeof n && "undefined" != typeof t ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : e.moment = r()
        }(this, function() {
            "use strict";

            function n() {
                return Nn.apply(null, arguments)
            }

            function r(e) {
                Nn = e
            }

            function i(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }

            function o(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }

            function s(e, t) {
                var n, r = [];
                for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
                return r
            }

            function a(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function u(e, t) {
                for (var n in t) a(t, n) && (e[n] = t[n]);
                return a(t, "toString") && (e.toString = t.toString), a(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function l(e, t, n, r) {
                return Ee(e, t, n, r, !0).utc()
            }

            function c() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1
                }
            }

            function d(e) {
                return null == e._pf && (e._pf = c()), e._pf
            }

            function h(e) {
                if (null == e._isValid) {
                    var t = d(e);
                    e._isValid = !(isNaN(e._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.nullInput || t.invalidFormat || t.userInvalidated), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
                }
                return e._isValid
            }

            function f(e) {
                var t = l(0 / 0);
                return null != e ? u(d(t), e) : d(t).userInvalidated = !0, t
            }

            function p(e, t) {
                var n, r, i;
                if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = d(t)), "undefined" != typeof t._locale && (e._locale = t._locale), qn.length > 0)
                    for (n in qn) r = qn[n], i = t[r], "undefined" != typeof i && (e[r] = i);
                return e
            }

            function m(e) {
                p(this, e), this._d = new Date(null != e._d ? e._d.getTime() : 0 / 0), zn === !1 && (zn = !0, n.updateOffset(this), zn = !1)
            }

            function g(e) {
                return e instanceof m || null != e && null != e._isAMomentObject
            }

            function v(e) {
                return 0 > e ? Math.ceil(e) : Math.floor(e)
            }

            function y(e) {
                var t = +e,
                    n = 0;
                return 0 !== t && isFinite(t) && (n = v(t)), n
            }

            function _(e, t, n) {
                var r, i = Math.min(e.length, t.length),
                    o = Math.abs(e.length - t.length),
                    s = 0;
                for (r = 0; i > r; r++)(n && e[r] !== t[r] || !n && y(e[r]) !== y(t[r])) && s++;
                return s + o
            }

            function b() {}

            function w(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function x(e) {
                for (var t, n, r, i, o = 0; o < e.length;) {
                    for (i = w(e[o]).split("-"), t = i.length, n = w(e[o + 1]), n = n ? n.split("-") : null; t > 0;) {
                        if (r = k(i.slice(0, t).join("-"))) return r;
                        if (n && n.length >= t && _(i, n, !0) >= t - 1) break;
                        t--
                    }
                    o++
                }
                return null
            }

            function k(n) {
                var r = null;
                if (!Ln[n] && "undefined" != typeof t && t && t.exports) try {
                    r = Rn._abbr, e("./locale/" + n), C(r)
                } catch (i) {}
                return Ln[n]
            }

            function C(e, t) {
                var n;
                return e && (n = "undefined" == typeof t ? $(e) : D(e, t), n && (Rn = n)), Rn._abbr
            }

            function D(e, t) {
                return null !== t ? (t.abbr = e, Ln[e] = Ln[e] || new b, Ln[e].set(t), C(e), Ln[e]) : (delete Ln[e], null)
            }

            function $(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Rn;
                if (!i(e)) {
                    if (t = k(e)) return t;
                    e = [e]
                }
                return x(e)
            }

            function A(e, t) {
                var n = e.toLowerCase();
                Fn[n] = Fn[n + "s"] = Fn[t] = e
            }

            function S(e) {
                return "string" == typeof e ? Fn[e] || Fn[e.toLowerCase()] : void 0
            }

            function T(e) {
                var t, n, r = {};
                for (n in e) a(e, n) && (t = S(n), t && (r[t] = e[n]));
                return r
            }

            function E(e, t) {
                return function(r) {
                    return null != r ? (P(this, e, r), n.updateOffset(this, t), this) : O(this, e)
                }
            }

            function O(e, t) {
                return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
            }

            function P(e, t, n) {
                return e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
            }

            function j(e, t) {
                var n;
                if ("object" == typeof e)
                    for (n in e) this.set(n, e[n]);
                else if (e = S(e), "function" == typeof this[e]) return this[e](t);
                return this
            }

            function I(e, t, n) {
                var r = "" + Math.abs(e),
                    i = t - r.length,
                    o = e >= 0;
                return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
            }

            function M(e, t, n, r) {
                var i = r;
                "string" == typeof r && (i = function() {
                    return this[r]()
                }), e && (Vn[e] = i), t && (Vn[t[0]] = function() {
                    return I(i.apply(this, arguments), t[1], t[2])
                }), n && (Vn[n] = function() {
                    return this.localeData().ordinal(i.apply(this, arguments), e)
                })
            }

            function N(e) {
                return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
            }

            function R(e) {
                var t, n, r = e.match(Un);
                for (t = 0, n = r.length; n > t; t++) r[t] = Vn[r[t]] ? Vn[r[t]] : N(r[t]);
                return function(i) {
                    var o = "";
                    for (t = 0; n > t; t++) o += r[t] instanceof Function ? r[t].call(i, e) : r[t];
                    return o
                }
            }

            function q(e, t) {
                return e.isValid() ? (t = z(t, e.localeData()), Hn[t] = Hn[t] || R(t), Hn[t](e)) : e.localeData().invalidDate()
            }

            function z(e, t) {
                function n(e) {
                    return t.longDateFormat(e) || e
                }
                var r = 5;
                for (Yn.lastIndex = 0; r >= 0 && Yn.test(e);) e = e.replace(Yn, n), Yn.lastIndex = 0, r -= 1;
                return e
            }

            function L(e) {
                return "function" == typeof e && "[object Function]" === Object.prototype.toString.call(e)
            }

            function F(e, t, n) {
                sr[e] = L(t) ? t : function(e) {
                    return e && n ? n : t
                }
            }

            function U(e, t) {
                return a(sr, e) ? sr[e](t._strict, t._locale) : new RegExp(Y(e))
            }

            function Y(e) {
                return e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
                    return t || n || r || i
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function H(e, t) {
                var n, r = t;
                for ("string" == typeof e && (e = [e]), "number" == typeof t && (r = function(e, n) {
                        n[t] = y(e)
                    }), n = 0; n < e.length; n++) ar[e[n]] = r
            }

            function V(e, t) {
                H(e, function(e, n, r, i) {
                    r._w = r._w || {}, t(e, r._w, r, i)
                })
            }

            function Q(e, t, n) {
                null != t && a(ar, e) && ar[e](t, n._a, n, e)
            }

            function W(e, t) {
                return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
            }

            function B(e) {
                return this._months[e.month()]
            }

            function G(e) {
                return this._monthsShort[e.month()]
            }

            function K(e, t, n) {
                var r, i, o;
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; 12 > r; r++) {
                    if (i = l([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
                    if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
                    if (!n && this._monthsParse[r].test(e)) return r
                }
            }

            function Z(e, t) {
                var n;
                return "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), W(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
            }

            function J(e) {
                return null != e ? (Z(this, e), n.updateOffset(this, !0), this) : O(this, "Month")
            }

            function X() {
                return W(this.year(), this.month())
            }

            function ee(e) {
                var t, n = e._a;
                return n && -2 === d(e).overflow && (t = n[lr] < 0 || n[lr] > 11 ? lr : n[cr] < 1 || n[cr] > W(n[ur], n[lr]) ? cr : n[dr] < 0 || n[dr] > 24 || 24 === n[dr] && (0 !== n[hr] || 0 !== n[fr] || 0 !== n[pr]) ? dr : n[hr] < 0 || n[hr] > 59 ? hr : n[fr] < 0 || n[fr] > 59 ? fr : n[pr] < 0 || n[pr] > 999 ? pr : -1, d(e)._overflowDayOfYear && (ur > t || t > cr) && (t = cr), d(e).overflow = t), e
            }

            function te(e) {
                n.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }

            function ne(e, t) {
                var n = !0;
                return u(function() {
                    return n && (te(e + "\n" + (new Error).stack), n = !1), t.apply(this, arguments)
                }, t)
            }

            function re(e, t) {
                vr[e] || (te(t), vr[e] = !0)
            }

            function ie(e) {
                var t, n, r = e._i,
                    i = yr.exec(r);
                if (i) {
                    for (d(e).iso = !0, t = 0, n = _r.length; n > t; t++)
                        if (_r[t][1].exec(r)) {
                            e._f = _r[t][0];
                            break
                        }
                    for (t = 0, n = br.length; n > t; t++)
                        if (br[t][1].exec(r)) {
                            e._f += (i[6] || " ") + br[t][0];
                            break
                        }
                    r.match(rr) && (e._f += "Z"), ke(e)
                } else e._isValid = !1
            }

            function oe(e) {
                var t = wr.exec(e._i);
                return null !== t ? void(e._d = new Date(+t[1])) : (ie(e), void(e._isValid === !1 && (delete e._isValid, n.createFromInputFallback(e))))
            }

            function se(e, t, n, r, i, o, s) {
                var a = new Date(e, t, n, r, i, o, s);
                return 1970 > e && a.setFullYear(e), a
            }

            function ae(e) {
                var t = new Date(Date.UTC.apply(null, arguments));
                return 1970 > e && t.setUTCFullYear(e), t
            }

            function ue(e) {
                return le(e) ? 366 : 365
            }

            function le(e) {
                return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
            }

            function ce() {
                return le(this.year())
            }

            function de(e, t, n) {
                var r, i = n - t,
                    o = n - e.day();
                return o > i && (o -= 7), i - 7 > o && (o += 7), r = Oe(e).add(o, "d"), {
                    week: Math.ceil(r.dayOfYear() / 7),
                    year: r.year()
                }
            }

            function he(e) {
                return de(e, this._week.dow, this._week.doy).week
            }

            function fe() {
                return this._week.dow
            }

            function pe() {
                return this._week.doy
            }

            function me(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }

            function ge(e) {
                var t = de(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }

            function ve(e, t, n, r, i) {
                var o, s = 6 + i - r,
                    a = ae(e, 0, 1 + s),
                    u = a.getUTCDay();
                return i > u && (u += 7), n = null != n ? 1 * n : i, o = 1 + s + 7 * (t - 1) - u + n, {
                    year: o > 0 ? e : e - 1,
                    dayOfYear: o > 0 ? o : ue(e - 1) + o
                }
            }

            function ye(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }

            function _e(e, t, n) {
                return null != e ? e : null != t ? t : n
            }

            function be(e) {
                var t = new Date;
                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }

            function we(e) {
                var t, n, r, i, o = [];
                if (!e._d) {
                    for (r = be(e), e._w && null == e._a[cr] && null == e._a[lr] && xe(e), e._dayOfYear && (i = _e(e._a[ur], r[ur]), e._dayOfYear > ue(i) && (d(e)._overflowDayOfYear = !0), n = ae(i, 0, e._dayOfYear), e._a[lr] = n.getUTCMonth(), e._a[cr] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = o[t] = r[t];
                    for (; 7 > t; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[dr] && 0 === e._a[hr] && 0 === e._a[fr] && 0 === e._a[pr] && (e._nextDay = !0, e._a[dr] = 0), e._d = (e._useUTC ? ae : se).apply(null, o), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[dr] = 24)
                }
            }

            function xe(e) {
                var t, n, r, i, o, s, a;
                t = e._w, null != t.GG || null != t.W || null != t.E ? (o = 1, s = 4, n = _e(t.GG, e._a[ur], de(Oe(), 1, 4).year), r = _e(t.W, 1), i = _e(t.E, 1)) : (o = e._locale._week.dow, s = e._locale._week.doy, n = _e(t.gg, e._a[ur], de(Oe(), o, s).year), r = _e(t.w, 1), null != t.d ? (i = t.d, o > i && ++r) : i = null != t.e ? t.e + o : o), a = ve(n, r, i, s, o), e._a[ur] = a.year, e._dayOfYear = a.dayOfYear
            }

            function ke(e) {
                if (e._f === n.ISO_8601) return void ie(e);
                e._a = [], d(e).empty = !0;
                var t, r, i, o, s, a = "" + e._i,
                    u = a.length,
                    l = 0;
                for (i = z(e._f, e._locale).match(Un) || [], t = 0; t < i.length; t++) o = i[t], r = (a.match(U(o, e)) || [])[0], r && (s = a.substr(0, a.indexOf(r)), s.length > 0 && d(e).unusedInput.push(s), a = a.slice(a.indexOf(r) + r.length), l += r.length), Vn[o] ? (r ? d(e).empty = !1 : d(e).unusedTokens.push(o), Q(o, r, e)) : e._strict && !r && d(e).unusedTokens.push(o);
                d(e).charsLeftOver = u - l, a.length > 0 && d(e).unusedInput.push(a), d(e).bigHour === !0 && e._a[dr] <= 12 && e._a[dr] > 0 && (d(e).bigHour = void 0), e._a[dr] = Ce(e._locale, e._a[dr], e._meridiem), we(e), ee(e)
            }

            function Ce(e, t, n) {
                var r;
                return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (r = e.isPM(n), r && 12 > t && (t += 12), r || 12 !== t || (t = 0), t) : t
            }

            function De(e) {
                var t, n, r, i, o;
                if (0 === e._f.length) return d(e).invalidFormat = !0, void(e._d = new Date(0 / 0));
                for (i = 0; i < e._f.length; i++) o = 0, t = p({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], ke(t), h(t) && (o += d(t).charsLeftOver, o += 10 * d(t).unusedTokens.length, d(t).score = o, (null == r || r > o) && (r = o, n = t));
                u(e, n || t)
            }

            function $e(e) {
                if (!e._d) {
                    var t = T(e._i);
                    e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], we(e)
                }
            }

            function Ae(e) {
                var t = new m(ee(Se(e)));
                return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
            }

            function Se(e) {
                var t = e._i,
                    n = e._f;
                return e._locale = e._locale || $(e._l), null === t || void 0 === n && "" === t ? f({
                    nullInput: !0
                }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), g(t) ? new m(ee(t)) : (i(n) ? De(e) : n ? ke(e) : o(t) ? e._d = t : Te(e), e))
            }

            function Te(e) {
                var t = e._i;
                void 0 === t ? e._d = new Date : o(t) ? e._d = new Date(+t) : "string" == typeof t ? oe(e) : i(t) ? (e._a = s(t.slice(0), function(e) {
                    return parseInt(e, 10)
                }), we(e)) : "object" == typeof t ? $e(e) : "number" == typeof t ? e._d = new Date(t) : n.createFromInputFallback(e)
            }

            function Ee(e, t, n, r, i) {
                var o = {};
                return "boolean" == typeof n && (r = n, n = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = i, o._l = n, o._i = e, o._f = t, o._strict = r, Ae(o)
            }

            function Oe(e, t, n, r) {
                return Ee(e, t, n, r, !1)
            }

            function Pe(e, t) {
                var n, r;
                if (1 === t.length && i(t[0]) && (t = t[0]), !t.length) return Oe();
                for (n = t[0], r = 1; r < t.length; ++r)(!t[r].isValid() || t[r][e](n)) && (n = t[r]);
                return n
            }

            function je() {
                var e = [].slice.call(arguments, 0);
                return Pe("isBefore", e)
            }

            function Ie() {
                var e = [].slice.call(arguments, 0);
                return Pe("isAfter", e)
            }

            function Me(e) {
                var t = T(e),
                    n = t.year || 0,
                    r = t.quarter || 0,
                    i = t.month || 0,
                    o = t.week || 0,
                    s = t.day || 0,
                    a = t.hour || 0,
                    u = t.minute || 0,
                    l = t.second || 0,
                    c = t.millisecond || 0;
                this._milliseconds = +c + 1e3 * l + 6e4 * u + 36e5 * a, this._days = +s + 7 * o, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = $(), this._bubble()
            }

            function Ne(e) {
                return e instanceof Me
            }

            function Re(e, t) {
                M(e, 0, 0, function() {
                    var e = this.utcOffset(),
                        n = "+";
                    return 0 > e && (e = -e, n = "-"), n + I(~~(e / 60), 2) + t + I(~~e % 60, 2)
                })
            }

            function qe(e) {
                var t = (e || "").match(rr) || [],
                    n = t[t.length - 1] || [],
                    r = (n + "").match($r) || ["-", 0, 0],
                    i = +(60 * r[1]) + y(r[2]);
                return "+" === r[0] ? i : -i
            }

            function ze(e, t) {
                var r, i;
                return t._isUTC ? (r = t.clone(), i = (g(e) || o(e) ? +e : +Oe(e)) - +r, r._d.setTime(+r._d + i), n.updateOffset(r, !1), r) : Oe(e).local()
            }

            function Le(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
            }

            function Fe(e, t) {
                var r, i = this._offset || 0;
                return null != e ? ("string" == typeof e && (e = qe(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && t && (r = Le(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), i !== e && (!t || this._changeInProgress ? rt(this, Je(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? i : Le(this)
            }

            function Ue(e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            }

            function Ye(e) {
                return this.utcOffset(0, e)
            }

            function He(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Le(this), "m")), this
            }

            function Ve() {
                return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(qe(this._i)), this
            }

            function Qe(e) {
                return e = e ? Oe(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0
            }

            function We() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function Be() {
                if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted;
                var e = {};
                if (p(e, this), e = Se(e), e._a) {
                    var t = e._isUTC ? l(e._a) : Oe(e._a);
                    this._isDSTShifted = this.isValid() && _(e._a, t.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function Ge() {
                return !this._isUTC
            }

            function Ke() {
                return this._isUTC
            }

            function Ze() {
                return this._isUTC && 0 === this._offset
            }

            function Je(e, t) {
                var n, r, i, o = e,
                    s = null;
                return Ne(e) ? o = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : "number" == typeof e ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (s = Ar.exec(e)) ? (n = "-" === s[1] ? -1 : 1, o = {
                    y: 0,
                    d: y(s[cr]) * n,
                    h: y(s[dr]) * n,
                    m: y(s[hr]) * n,
                    s: y(s[fr]) * n,
                    ms: y(s[pr]) * n
                }) : (s = Sr.exec(e)) ? (n = "-" === s[1] ? -1 : 1, o = {
                    y: Xe(s[2], n),
                    M: Xe(s[3], n),
                    d: Xe(s[4], n),
                    h: Xe(s[5], n),
                    m: Xe(s[6], n),
                    s: Xe(s[7], n),
                    w: Xe(s[8], n)
                }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (i = tt(Oe(o.from), Oe(o.to)), o = {}, o.ms = i.milliseconds, o.M = i.months), r = new Me(o), Ne(e) && a(e, "_locale") && (r._locale = e._locale), r
            }

            function Xe(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }

            function et(e, t) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
            }

            function tt(e, t) {
                var n;
                return t = ze(t, e), e.isBefore(t) ? n = et(e, t) : (n = et(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n
            }

            function nt(e, t) {
                return function(n, r) {
                    var i, o;
                    return null === r || isNaN(+r) || (re(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), o = n, n = r, r = o), n = "string" == typeof n ? +n : n, i = Je(n, r), rt(this, i, e), this
                }
            }

            function rt(e, t, r, i) {
                var o = t._milliseconds,
                    s = t._days,
                    a = t._months;
                i = null == i ? !0 : i, o && e._d.setTime(+e._d + o * r), s && P(e, "Date", O(e, "Date") + s * r), a && Z(e, O(e, "Month") + a * r), i && n.updateOffset(e, s || a)
            }

            function it(e, t) {
                var n = e || Oe(),
                    r = ze(n, this).startOf("day"),
                    i = this.diff(r, "days", !0),
                    o = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse";
                return this.format(t && t[o] || this.localeData().calendar(o, this, Oe(n)))
            }

            function ot() {
                return new m(this)
            }

            function st(e, t) {
                var n;
                return t = S("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = g(e) ? e : Oe(e), +this > +e) : (n = g(e) ? +e : +Oe(e), n < +this.clone().startOf(t))
            }

            function at(e, t) {
                var n;
                return t = S("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = g(e) ? e : Oe(e), +e > +this) : (n = g(e) ? +e : +Oe(e), +this.clone().endOf(t) < n)
            }

            function ut(e, t, n) {
                return this.isAfter(e, n) && this.isBefore(t, n)
            }

            function lt(e, t) {
                var n;
                return t = S(t || "millisecond"), "millisecond" === t ? (e = g(e) ? e : Oe(e), +this === +e) : (n = +Oe(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
            }

            function ct(e, t, n) {
                var r, i, o = ze(e, this),
                    s = 6e4 * (o.utcOffset() - this.utcOffset());
                return t = S(t), "year" === t || "month" === t || "quarter" === t ? (i = dt(this, o), "quarter" === t ? i /= 3 : "year" === t && (i /= 12)) : (r = this - o, i = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - s) / 864e5 : "week" === t ? (r - s) / 6048e5 : r), n ? i : v(i)
            }

            function dt(e, t) {
                var n, r, i = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                    o = e.clone().add(i, "months");
                return 0 > t - o ? (n = e.clone().add(i - 1, "months"), r = (t - o) / (o - n)) : (n = e.clone().add(i + 1, "months"), r = (t - o) / (n - o)), -(i + r)
            }

            function ht() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function ft() {
                var e = this.clone().utc();
                return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : q(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : q(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }

            function pt(e) {
                var t = q(this, e || n.defaultFormat);
                return this.localeData().postformat(t)
            }

            function mt(e, t) {
                return this.isValid() ? Je({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }

            function gt(e) {
                return this.from(Oe(), e)
            }

            function vt(e, t) {
                return this.isValid() ? Je({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }

            function yt(e) {
                return this.to(Oe(), e)
            }

            function _t(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (t = $(e), null != t && (this._locale = t), this)
            }

            function bt() {
                return this._locale
            }

            function wt(e) {
                switch (e = S(e)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function xt(e) {
                return e = S(e), void 0 === e || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
            }

            function kt() {
                return +this._d - 6e4 * (this._offset || 0)
            }

            function Ct() {
                return Math.floor(+this / 1e3)
            }

            function Dt() {
                return this._offset ? new Date(+this) : this._d
            }

            function $t() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }

            function At() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }

            function St() {
                return h(this)
            }

            function Tt() {
                return u({}, d(this))
            }

            function Et() {
                return d(this).overflow
            }

            function Ot(e, t) {
                M(0, [e, e.length], 0, t)
            }

            function Pt(e, t, n) {
                return de(Oe([e, 11, 31 + t - n]), t, n).week
            }

            function jt(e) {
                var t = de(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                return null == e ? t : this.add(e - t, "y")
            }

            function It(e) {
                var t = de(this, 1, 4).year;
                return null == e ? t : this.add(e - t, "y")
            }

            function Mt() {
                return Pt(this.year(), 1, 4)
            }

            function Nt() {
                var e = this.localeData()._week;
                return Pt(this.year(), e.dow, e.doy)
            }

            function Rt(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }

            function qt(e, t) {
                return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
            }

            function zt(e) {
                return this._weekdays[e.day()]
            }

            function Lt(e) {
                return this._weekdaysShort[e.day()]
            }

            function Ft(e) {
                return this._weekdaysMin[e.day()]
            }

            function Ut(e) {
                var t, n, r;
                for (this._weekdaysParse = this._weekdaysParse || [], t = 0; 7 > t; t++)
                    if (this._weekdaysParse[t] || (n = Oe([2e3, 1]).day(t), r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(r.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
            }

            function Yt(e) {
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = qt(e, this.localeData()), this.add(e - t, "d")) : t
            }

            function Ht(e) {
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }

            function Vt(e) {
                return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
            }

            function Qt(e, t) {
                M(e, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                })
            }

            function Wt(e, t) {
                return t._meridiemParse
            }

            function Bt(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }

            function Gt(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }

            function Kt(e, t) {
                t[pr] = y(1e3 * ("0." + e))
            }

            function Zt() {
                return this._isUTC ? "UTC" : ""
            }

            function Jt() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }

            function Xt(e) {
                return Oe(1e3 * e)
            }

            function en() {
                return Oe.apply(null, arguments).parseZone()
            }

            function tn(e, t, n) {
                var r = this._calendar[e];
                return "function" == typeof r ? r.call(t, n) : r
            }

            function nn(e) {
                var t = this._longDateFormat[e],
                    n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                    return e.slice(1)
                }), this._longDateFormat[e])
            }

            function rn() {
                return this._invalidDate
            }

            function on(e) {
                return this._ordinal.replace("%d", e)
            }

            function sn(e) {
                return e
            }

            function an(e, t, n, r) {
                var i = this._relativeTime[n];
                return "function" == typeof i ? i(e, t, n, r) : i.replace(/%d/i, e)
            }

            function un(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
            }

            function ln(e) {
                var t, n;
                for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t;
                this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }

            function cn(e, t, n, r) {
                var i = $(),
                    o = l().set(r, t);
                return i[n](o, e)
            }

            function dn(e, t, n, r, i) {
                if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return cn(e, t, n, i);
                var o, s = [];
                for (o = 0; r > o; o++) s[o] = cn(e, o, n, i);
                return s
            }

            function hn(e, t) {
                return dn(e, t, "months", 12, "month")
            }

            function fn(e, t) {
                return dn(e, t, "monthsShort", 12, "month")
            }

            function pn(e, t) {
                return dn(e, t, "weekdays", 7, "day")
            }

            function mn(e, t) {
                return dn(e, t, "weekdaysShort", 7, "day")
            }

            function gn(e, t) {
                return dn(e, t, "weekdaysMin", 7, "day")
            }

            function vn() {
                var e = this._data;
                return this._milliseconds = Zr(this._milliseconds), this._days = Zr(this._days), this._months = Zr(this._months), e.milliseconds = Zr(e.milliseconds), e.seconds = Zr(e.seconds), e.minutes = Zr(e.minutes), e.hours = Zr(e.hours), e.months = Zr(e.months), e.years = Zr(e.years), this
            }

            function yn(e, t, n, r) {
                var i = Je(t, n);
                return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble()
            }

            function _n(e, t) {
                return yn(this, e, t, 1)
            }

            function bn(e, t) {
                return yn(this, e, t, -1)
            }

            function wn(e) {
                return 0 > e ? Math.floor(e) : Math.ceil(e)
            }

            function xn() {
                var e, t, n, r, i, o = this._milliseconds,
                    s = this._days,
                    a = this._months,
                    u = this._data;
                return o >= 0 && s >= 0 && a >= 0 || 0 >= o && 0 >= s && 0 >= a || (o += 864e5 * wn(Cn(a) + s), s = 0, a = 0), u.milliseconds = o % 1e3, e = v(o / 1e3), u.seconds = e % 60, t = v(e / 60), u.minutes = t % 60, n = v(t / 60), u.hours = n % 24, s += v(n / 24), i = v(kn(s)), a += i, s -= wn(Cn(i)), r = v(a / 12), a %= 12, u.days = s, u.months = a, u.years = r, this
            }

            function kn(e) {
                return 4800 * e / 146097
            }

            function Cn(e) {
                return 146097 * e / 4800
            }

            function Dn(e) {
                var t, n, r = this._milliseconds;
                if (e = S(e), "month" === e || "year" === e) return t = this._days + r / 864e5, n = this._months + kn(t), "month" === e ? n : n / 12;
                switch (t = this._days + Math.round(Cn(this._months)), e) {
                    case "week":
                        return t / 7 + r / 6048e5;
                    case "day":
                        return t + r / 864e5;
                    case "hour":
                        return 24 * t + r / 36e5;
                    case "minute":
                        return 1440 * t + r / 6e4;
                    case "second":
                        return 86400 * t + r / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + r;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }

            function $n() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * y(this._months / 12)
            }

            function An(e) {
                return function() {
                    return this.as(e)
                }
            }

            function Sn(e) {
                return e = S(e), this[e + "s"]()
            }

            function Tn(e) {
                return function() {
                    return this._data[e]
                }
            }

            function En() {
                return v(this.days() / 7)
            }

            function On(e, t, n, r, i) {
                return i.relativeTime(t || 1, !!n, e, r)
            }

            function Pn(e, t, n) {
                var r = Je(e).abs(),
                    i = fi(r.as("s")),
                    o = fi(r.as("m")),
                    s = fi(r.as("h")),
                    a = fi(r.as("d")),
                    u = fi(r.as("M")),
                    l = fi(r.as("y")),
                    c = i < pi.s && ["s", i] || 1 === o && ["m"] || o < pi.m && ["mm", o] || 1 === s && ["h"] || s < pi.h && ["hh", s] || 1 === a && ["d"] || a < pi.d && ["dd", a] || 1 === u && ["M"] || u < pi.M && ["MM", u] || 1 === l && ["y"] || ["yy", l];
                return c[2] = t, c[3] = +e > 0, c[4] = n, On.apply(null, c)
            }

            function jn(e, t) {
                return void 0 === pi[e] ? !1 : void 0 === t ? pi[e] : (pi[e] = t, !0)
            }

            function In(e) {
                var t = this.localeData(),
                    n = Pn(this, !e, t);
                return e && (n = t.pastFuture(+this, n)), t.postformat(n)
            }

            function Mn() {
                var e, t, n, r = mi(this._milliseconds) / 1e3,
                    i = mi(this._days),
                    o = mi(this._months);
                e = v(r / 60), t = v(e / 60), r %= 60, e %= 60, n = v(o / 12), o %= 12;
                var s = n,
                    a = o,
                    u = i,
                    l = t,
                    c = e,
                    d = r,
                    h = this.asSeconds();
                return h ? (0 > h ? "-" : "") + "P" + (s ? s + "Y" : "") + (a ? a + "M" : "") + (u ? u + "D" : "") + (l || c || d ? "T" : "") + (l ? l + "H" : "") + (c ? c + "M" : "") + (d ? d + "S" : "") : "P0D"
            }
            var Nn, Rn, qn = n.momentProperties = [],
                zn = !1,
                Ln = {},
                Fn = {},
                Un = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                Yn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                Hn = {},
                Vn = {},
                Qn = /\d/,
                Wn = /\d\d/,
                Bn = /\d{3}/,
                Gn = /\d{4}/,
                Kn = /[+-]?\d{6}/,
                Zn = /\d\d?/,
                Jn = /\d{1,3}/,
                Xn = /\d{1,4}/,
                er = /[+-]?\d{1,6}/,
                tr = /\d+/,
                nr = /[+-]?\d+/,
                rr = /Z|[+-]\d\d:?\d\d/gi,
                ir = /[+-]?\d+(\.\d{1,3})?/,
                or = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                sr = {},
                ar = {},
                ur = 0,
                lr = 1,
                cr = 2,
                dr = 3,
                hr = 4,
                fr = 5,
                pr = 6;

            M("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }), M("MMM", 0, 0, function(e) {
                return this.localeData().monthsShort(this, e)
            }), M("MMMM", 0, 0, function(e) {
                return this.localeData().months(this, e)
            }), A("month", "M"), F("M", Zn), F("MM", Zn, Wn), F("MMM", or), F("MMMM", or), H(["M", "MM"], function(e, t) {
                t[lr] = y(e) - 1
            }), H(["MMM", "MMMM"], function(e, t, n, r) {
                var i = n._locale.monthsParse(e, r, n._strict);
                null != i ? t[lr] = i : d(n).invalidMonth = e
            });
            var mr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                gr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                vr = {};
            n.suppressDeprecationWarnings = !1;
            var yr = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                _r = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                    ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                    ["YYYY-DDD", /\d{4}-\d{3}/]
                ],
                br = [
                    ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                    ["HH:mm", /(T| )\d\d:\d\d/],
                    ["HH", /(T| )\d\d/]
                ],
                wr = /^\/?Date\((\-?\d+)/i;
            n.createFromInputFallback = ne("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }), M(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }), M(0, ["YYYY", 4], 0, "year"), M(0, ["YYYYY", 5], 0, "year"), M(0, ["YYYYYY", 6, !0], 0, "year"), A("year", "y"), F("Y", nr), F("YY", Zn, Wn), F("YYYY", Xn, Gn), F("YYYYY", er, Kn), F("YYYYYY", er, Kn), H(["YYYYY", "YYYYYY"], ur), H("YYYY", function(e, t) {
                t[ur] = 2 === e.length ? n.parseTwoDigitYear(e) : y(e)
            }), H("YY", function(e, t) {
                t[ur] = n.parseTwoDigitYear(e)
            }), n.parseTwoDigitYear = function(e) {
                return y(e) + (y(e) > 68 ? 1900 : 2e3)
            };
            var xr = E("FullYear", !1);
            M("w", ["ww", 2], "wo", "week"), M("W", ["WW", 2], "Wo", "isoWeek"), A("week", "w"), A("isoWeek", "W"), F("w", Zn), F("ww", Zn, Wn), F("W", Zn), F("WW", Zn, Wn), V(["w", "ww", "W", "WW"], function(e, t, n, r) {
                t[r.substr(0, 1)] = y(e)
            });
            var kr = {
                dow: 0,
                doy: 6
            };
            M("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), F("DDD", Jn), F("DDDD", Bn), H(["DDD", "DDDD"], function(e, t, n) {
                n._dayOfYear = y(e)
            }), n.ISO_8601 = function() {};
            var Cr = ne("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
                    var e = Oe.apply(null, arguments);
                    return this > e ? this : e
                }),
                Dr = ne("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
                    var e = Oe.apply(null, arguments);
                    return e > this ? this : e
                });
            Re("Z", ":"), Re("ZZ", ""), F("Z", rr), F("ZZ", rr), H(["Z", "ZZ"], function(e, t, n) {
                n._useUTC = !0, n._tzm = qe(e)
            });
            var $r = /([\+\-]|\d\d)/gi;
            n.updateOffset = function() {};
            var Ar = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
                Sr = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
            Je.fn = Me.prototype;
            var Tr = nt(1, "add"),
                Er = nt(-1, "subtract");
            n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
            var Or = ne("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            });
            M(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }), M(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }), Ot("gggg", "weekYear"), Ot("ggggg", "weekYear"), Ot("GGGG", "isoWeekYear"), Ot("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), F("G", nr), F("g", nr), F("GG", Zn, Wn), F("gg", Zn, Wn), F("GGGG", Xn, Gn), F("gggg", Xn, Gn), F("GGGGG", er, Kn), F("ggggg", er, Kn), V(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) {
                t[r.substr(0, 2)] = y(e)
            }), V(["gg", "GG"], function(e, t, r, i) {
                t[i] = n.parseTwoDigitYear(e)
            }), M("Q", 0, 0, "quarter"), A("quarter", "Q"), F("Q", Qn), H("Q", function(e, t) {
                t[lr] = 3 * (y(e) - 1)
            }), M("D", ["DD", 2], "Do", "date"), A("date", "D"), F("D", Zn), F("DD", Zn, Wn), F("Do", function(e, t) {
                return e ? t._ordinalParse : t._ordinalParseLenient
            }), H(["D", "DD"], cr), H("Do", function(e, t) {
                t[cr] = y(e.match(Zn)[0], 10)
            });
            var Pr = E("Date", !0);
            M("d", 0, "do", "day"), M("dd", 0, 0, function(e) {
                return this.localeData().weekdaysMin(this, e)
            }), M("ddd", 0, 0, function(e) {
                return this.localeData().weekdaysShort(this, e)
            }), M("dddd", 0, 0, function(e) {
                return this.localeData().weekdays(this, e)
            }), M("e", 0, 0, "weekday"), M("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), A("isoWeekday", "E"), F("d", Zn), F("e", Zn), F("E", Zn), F("dd", or), F("ddd", or), F("dddd", or), V(["dd", "ddd", "dddd"], function(e, t, n) {
                var r = n._locale.weekdaysParse(e);
                null != r ? t.d = r : d(n).invalidWeekday = e
            }), V(["d", "e", "E"], function(e, t, n, r) {
                t[r] = y(e)
            });
            var jr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Ir = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Mr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
            M("H", ["HH", 2], 0, "hour"), M("h", ["hh", 2], 0, function() {
                return this.hours() % 12 || 12
            }), Qt("a", !0), Qt("A", !1), A("hour", "h"), F("a", Wt), F("A", Wt), F("H", Zn), F("h", Zn), F("HH", Zn, Wn), F("hh", Zn, Wn), H(["H", "HH"], dr), H(["a", "A"], function(e, t, n) {
                n._isPm = n._locale.isPM(e), n._meridiem = e
            }), H(["h", "hh"], function(e, t, n) {
                t[dr] = y(e), d(n).bigHour = !0
            });
            var Nr = /[ap]\.?m?\.?/i,
                Rr = E("Hours", !0);
            M("m", ["mm", 2], 0, "minute"), A("minute", "m"), F("m", Zn), F("mm", Zn, Wn), H(["m", "mm"], hr);
            var qr = E("Minutes", !1);
            M("s", ["ss", 2], 0, "second"), A("second", "s"), F("s", Zn), F("ss", Zn, Wn), H(["s", "ss"], fr);
            var zr = E("Seconds", !1);
            M("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }), M(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }), M(0, ["SSS", 3], 0, "millisecond"), M(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }), M(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }), M(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }), M(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }), M(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }), M(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }), A("millisecond", "ms"), F("S", Jn, Qn), F("SS", Jn, Wn), F("SSS", Jn, Bn);
            var Lr;
            for (Lr = "SSSS"; Lr.length <= 9; Lr += "S") F(Lr, tr);
            for (Lr = "S"; Lr.length <= 9; Lr += "S") H(Lr, Kt);
            var Fr = E("Milliseconds", !1);
            M("z", 0, 0, "zoneAbbr"), M("zz", 0, 0, "zoneName");
            var Ur = m.prototype;
            Ur.add = Tr, Ur.calendar = it, Ur.clone = ot, Ur.diff = ct, Ur.endOf = xt, Ur.format = pt, Ur.from = mt, Ur.fromNow = gt, Ur.to = vt, Ur.toNow = yt, Ur.get = j, Ur.invalidAt = Et, Ur.isAfter = st, Ur.isBefore = at, Ur.isBetween = ut, Ur.isSame = lt, Ur.isValid = St, Ur.lang = Or, Ur.locale = _t, Ur.localeData = bt, Ur.max = Dr, Ur.min = Cr, Ur.parsingFlags = Tt, Ur.set = j, Ur.startOf = wt, Ur.subtract = Er, Ur.toArray = $t, Ur.toObject = At, Ur.toDate = Dt, Ur.toISOString = ft, Ur.toJSON = ft, Ur.toString = ht, Ur.unix = Ct, Ur.valueOf = kt, Ur.year = xr, Ur.isLeapYear = ce, Ur.weekYear = jt, Ur.isoWeekYear = It, Ur.quarter = Ur.quarters = Rt, Ur.month = J, Ur.daysInMonth = X, Ur.week = Ur.weeks = me, Ur.isoWeek = Ur.isoWeeks = ge, Ur.weeksInYear = Nt, Ur.isoWeeksInYear = Mt, Ur.date = Pr, Ur.day = Ur.days = Yt, Ur.weekday = Ht, Ur.isoWeekday = Vt, Ur.dayOfYear = ye, Ur.hour = Ur.hours = Rr, Ur.minute = Ur.minutes = qr, Ur.second = Ur.seconds = zr, Ur.millisecond = Ur.milliseconds = Fr, Ur.utcOffset = Fe, Ur.utc = Ye, Ur.local = He, Ur.parseZone = Ve, Ur.hasAlignedHourOffset = Qe, Ur.isDST = We, Ur.isDSTShifted = Be, Ur.isLocal = Ge, Ur.isUtcOffset = Ke, Ur.isUtc = Ze, Ur.isUTC = Ze, Ur.zoneAbbr = Zt, Ur.zoneName = Jt, Ur.dates = ne("dates accessor is deprecated. Use date instead.", Pr), Ur.months = ne("months accessor is deprecated. Use month instead", J), Ur.years = ne("years accessor is deprecated. Use year instead", xr), Ur.zone = ne("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Ue);
            var Yr = Ur,
                Hr = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                Vr = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                Qr = "Invalid date",
                Wr = "%d",
                Br = /\d{1,2}/,
                Gr = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                Kr = b.prototype;
            Kr._calendar = Hr, Kr.calendar = tn, Kr._longDateFormat = Vr, Kr.longDateFormat = nn, Kr._invalidDate = Qr, Kr.invalidDate = rn, Kr._ordinal = Wr, Kr.ordinal = on, Kr._ordinalParse = Br, Kr.preparse = sn, Kr.postformat = sn, Kr._relativeTime = Gr, Kr.relativeTime = an, Kr.pastFuture = un, Kr.set = ln, Kr.months = B, Kr._months = mr, Kr.monthsShort = G, Kr._monthsShort = gr, Kr.monthsParse = K, Kr.week = he, Kr._week = kr, Kr.firstDayOfYear = pe, Kr.firstDayOfWeek = fe, Kr.weekdays = zt, Kr._weekdays = jr, Kr.weekdaysMin = Ft, Kr._weekdaysMin = Mr, Kr.weekdaysShort = Lt, Kr._weekdaysShort = Ir, Kr.weekdaysParse = Ut, Kr.isPM = Bt, Kr._meridiemParse = Nr, Kr.meridiem = Gt, C("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === y(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                }
            }), n.lang = ne("moment.lang is deprecated. Use moment.locale instead.", C), n.langData = ne("moment.langData is deprecated. Use moment.localeData instead.", $);
            var Zr = Math.abs,
                Jr = An("ms"),
                Xr = An("s"),
                ei = An("m"),
                ti = An("h"),
                ni = An("d"),
                ri = An("w"),
                ii = An("M"),
                oi = An("y"),
                si = Tn("milliseconds"),
                ai = Tn("seconds"),
                ui = Tn("minutes"),
                li = Tn("hours"),
                ci = Tn("days"),
                di = Tn("months"),
                hi = Tn("years"),
                fi = Math.round,
                pi = {
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                mi = Math.abs,
                gi = Me.prototype;
            gi.abs = vn, gi.add = _n, gi.subtract = bn, gi.as = Dn, gi.asMilliseconds = Jr, gi.asSeconds = Xr, gi.asMinutes = ei, gi.asHours = ti, gi.asDays = ni, gi.asWeeks = ri, gi.asMonths = ii, gi.asYears = oi, gi.valueOf = $n, gi._bubble = xn, gi.get = Sn, gi.milliseconds = si, gi.seconds = ai, gi.minutes = ui, gi.hours = li, gi.days = ci, gi.weeks = En, gi.months = di, gi.years = hi, gi.humanize = In, gi.toISOString = Mn, gi.toString = Mn, gi.toJSON = Mn, gi.locale = _t, gi.localeData = bt, gi.toIsoString = ne("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Mn), gi.lang = Or, M("X", 0, 0, "unix"), M("x", 0, 0, "valueOf"), F("x", nr), F("X", ir), H("X", function(e, t, n) {
                n._d = new Date(1e3 * parseFloat(e, 10))
            }), H("x", function(e, t, n) {
                n._d = new Date(y(e))
            }), n.version = "2.10.6", r(Oe), n.fn = Yr, n.min = je, n.max = Ie, n.utc = l, n.unix = Xt, n.months = hn, n.isDate = o, n.locale = C, n.invalid = f, n.duration = Je, n.isMoment = g, n.weekdays = pn, n.parseZone = en, n.localeData = $, n.isDuration = Ne, n.monthsShort = fn, n.weekdaysMin = gn, n.defineLocale = D, n.weekdaysShort = mn, n.normalizeUnits = S, n.relativeTimeThreshold = jn;
            var vi = n;
            return vi
        })
    }, {}],
    11: [function(e, t, n) {
        var r = e("../util");
        n.$addChild = function(e, t) {
            t = t || r.Vue, e = e || {};
            var n, i = this,
                o = e._context || i,
                s = void 0 !== e.inherit ? e.inherit : t.options.inherit;
            if (s) {
                var a = o._childCtors;
                if (n = a[t.cid], !n) {
                    var u = t.options.name,
                        l = u ? r.classify(u) : "VueComponent";
                    n = new Function("return function " + l + " (options) {this.constructor = " + l + ";this._init(options) }")(), n.options = t.options, n.linker = t.linker, n.prototype = o, a[t.cid] = n
                }
            } else n = t;
            e._parent = i, e._root = i.$root;
            var c = new n(e);
            return c
        }
    }, {
        "../util": 72
    }],
    12: [function(e, t, n) {
        var r = e("../watcher"),
            i = e("../parsers/path"),
            o = e("../parsers/text"),
            s = e("../parsers/directive"),
            a = e("../parsers/expression"),
            u = /[^|]\|[^|]/;
        n.$get = function(e) {
            var t = a.parse(e);
            if (t) try {
                return t.get.call(this, this)
            } catch (n) {}
        }, n.$set = function(e, t) {
            var n = a.parse(e, !0);
            n && n.set && n.set.call(this, this, t)
        }, n.$add = function(e, t) {
            this._data.$add(e, t)
        }, n.$delete = function(e) {
            this._data.$delete(e)
        }, n.$watch = function(e, t, n) {
            var i, o = this;
            "string" == typeof e && (i = s.parse(e)[0], e = i.expression);
            var a = new r(o, e, t, {
                deep: n && n.deep,
                user: !n || n.user !== !1,
                filters: i && i.filters
            });
            return n && n.immediate && t.call(o, a.value),
                function() {
                    a.teardown()
                }
        }, n.$eval = function(e) {
            if (u.test(e)) {
                var t = s.parse(e)[0],
                    n = this.$get(t.expression);
                return t.filters ? this._applyFilters(n, null, t.filters) : n
            }
            return this.$get(e)
        }, n.$interpolate = function(e) {
            var t = o.parse(e),
                n = this;
            return t ? 1 === t.length ? n.$eval(t[0].value) + "" : t.map(function(e) {
                return e.tag ? n.$eval(e.value) : e.value
            }).join("") : e
        }, n.$log = function(e) {
            var t = e ? i.get(this._data, e) : this._data;
            t && (t = JSON.parse(JSON.stringify(t))), console.log(t)
        }
    }, {
        "../parsers/directive": 60,
        "../parsers/expression": 61,
        "../parsers/path": 62,
        "../parsers/text": 64,
        "../watcher": 76
    }],
    13: [function(e, t, n) {
        function r(e, t, n, r, s, a) {
            t = o(t);
            var u = !l.inDoc(t),
                c = r === !1 || u ? s : a,
                d = !u && !e._isAttached && !l.inDoc(e.$el);
            return e._isFragment ? i(e, t, c, n) : c(e.$el, t, e, n), d && e._callHook("attached"), e
        }

        function i(e, t, n, r) {
            for (var i, o = e._fragmentStart, s = e._fragmentEnd; i !== s;) i = o.nextSibling, n(o, t, e), o = i;
            n(s, t, e, r)
        }

        function o(e) {
            return "string" == typeof e ? document.querySelector(e) : e
        }

        function s(e, t, n, r) {
            t.appendChild(e), r && r()
        }

        function a(e, t, n, r) {
            l.before(e, t), r && r()
        }

        function u(e, t, n) {
            l.remove(e), n && n()
        }
        var l = e("../util"),
            c = e("../transition");
        n.$nextTick = function(e) {
            l.nextTick(e, this)
        }, n.$appendTo = function(e, t, n) {
            return r(this, e, t, n, s, c.append)
        }, n.$prependTo = function(e, t, n) {
            return e = o(e), e.hasChildNodes() ? this.$before(e.firstChild, t, n) : this.$appendTo(e, t, n), this
        }, n.$before = function(e, t, n) {
            return r(this, e, t, n, a, c.before)
        }, n.$after = function(e, t, n) {
            return e = o(e), e.nextSibling ? this.$before(e.nextSibling, t, n) : this.$appendTo(e.parentNode, t, n), this
        }, n.$remove = function(e, t) {
            if (!this.$el.parentNode) return e && e();
            var n = this._isAttached && l.inDoc(this.$el);
            n || (t = !1);
            var r, o = this,
                a = function() {
                    n && o._callHook("detached"), e && e()
                };
            return this._isFragment && !this._blockFragment.hasChildNodes() ? (r = t === !1 ? s : c.removeThenAppend, i(this, this._blockFragment, r, a)) : (r = t === !1 ? u : c.remove)(this.$el, this, a), this
        }
    }, {
        "../transition": 65,
        "../util": 72
    }],
    14: [function(e, t, n) {
        function r(e, t, n) {
            var r = e.$parent;
            if (r && n && !o.test(t))
                for (; r;) r._eventsCount[t] = (r._eventsCount[t] || 0) + n, r = r.$parent
        }
        var i = e("../util");
        n.$on = function(e, t) {
            return (this._events[e] || (this._events[e] = [])).push(t), r(this, e, 1), this
        }, n.$once = function(e, t) {
            function n() {
                r.$off(e, n), t.apply(this, arguments)
            }
            var r = this;
            return n.fn = t, this.$on(e, n), this
        }, n.$off = function(e, t) {
            var n;
            if (!arguments.length) {
                if (this.$parent)
                    for (e in this._events) n = this._events[e], n && r(this, e, -n.length);
                return this._events = {}, this
            }
            if (n = this._events[e], !n) return this;
            if (1 === arguments.length) return r(this, e, -n.length), this._events[e] = null, this;
            for (var i, o = n.length; o--;)
                if (i = n[o], i === t || i.fn === t) {
                    r(this, e, -1), n.splice(o, 1);
                    break
                }
            return this
        }, n.$emit = function(e) {
            this._eventCancelled = !1;
            var t = this._events[e];
            if (t) {
                for (var n = arguments.length - 1, r = new Array(n); n--;) r[n] = arguments[n + 1];
                n = 0, t = t.length > 1 ? i.toArray(t) : t;
                for (var o = t.length; o > n; n++) t[n].apply(this, r) === !1 && (this._eventCancelled = !0)
            }
            return this
        }, n.$broadcast = function(e) {
            if (this._eventsCount[e]) {
                for (var t = this.$children, n = 0, r = t.length; r > n; n++) {
                    var i = t[n];
                    i.$emit.apply(i, arguments), i._eventCancelled || i.$broadcast.apply(i, arguments)
                }
                return this
            }
        }, n.$dispatch = function() {
            for (var e = this.$parent; e;) e.$emit.apply(e, arguments), e = e._eventCancelled ? null : e.$parent;
            return this
        };
        var o = /^hook:/
    }, {
        "../util": 72
    }],
    15: [function(e, t, n) {
        function r(e) {
            return new Function("return function " + i.classify(e) + " (options) { this._init(options) }")()
        }
        var i = e("../util"),
            o = e("../config");
        n.util = i, n.config = o, n.nextTick = i.nextTick, n.compiler = e("../compiler"), n.parsers = {
            path: e("../parsers/path"),
            text: e("../parsers/text"),
            template: e("../parsers/template"),
            directive: e("../parsers/directive"),
            expression: e("../parsers/expression")
        }, n.cid = 0;
        var s = 1;
        n.extend = function(e) {
            e = e || {};
            var t = this,
                n = r(e.name || t.options.name || "VueComponent");
            return n.prototype = Object.create(t.prototype), n.prototype.constructor = n, n.cid = s++, n.options = i.mergeOptions(t.options, e), n["super"] = t, n.extend = t.extend, o._assetTypes.forEach(function(e) {
                n[e] = t[e]
            }), n
        }, n.use = function(e) {
            var t = i.toArray(arguments, 1);
            return t.unshift(this), "function" == typeof e.install ? e.install.apply(e, t) : e.apply(null, t), this
        }, n.mixin = function(e) {
            var t = i.Vue;
            t.options = i.mergeOptions(t.options, e)
        }, o._assetTypes.forEach(function(e) {
            n[e] = function(t, n) {
                return n ? ("component" === e && i.isPlainObject(n) && (n.name = t, n = i.Vue.extend(n)), void(this.options[e + "s"][t] = n)) : this.options[e + "s"][t]
            }
        })
    }, {
        "../compiler": 21,
        "../config": 23,
        "../parsers/directive": 60,
        "../parsers/expression": 61,
        "../parsers/path": 62,
        "../parsers/template": 63,
        "../parsers/text": 64,
        "../util": 72
    }],
    16: [function(e, t, n) {
        (function(t) {
            function r() {
                this._isAttached = !0, this._isReady = !0, this._callHook("ready")
            }
            var i = e("../util"),
                o = e("../compiler");
            n.$mount = function(e) {
                return this._isCompiled ? void("production" !== t.env.NODE_ENV && i.warn("$mount() should be called only once.")) : (e = i.query(e), e || (e = document.createElement("div")), this._compile(e), this._isCompiled = !0, this._callHook("compiled"), this._initDOMHooks(), i.inDoc(this.$el) ? (this._callHook("attached"), r.call(this)) : this.$once("hook:attached", r), this)
            }, n.$destroy = function(e, t) {
                this._destroy(e, t)
            }, n.$compile = function(e, t) {
                return o.compile(e, this.$options, !0)(this, e, t)
            }
        }).call(this, e("_process"))
    }, {
        "../compiler": 21,
        "../util": 72,
        _process: 8
    }],
    17: [function(e, t, n) {
        (function(t) {
            function r() {
                u = [], l = [], c = {}, d = {}, h = f = !1
            }

            function i() {
                o(u), f = !0, o(l), r()
            }

            function o(e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        i = r.id;
                    c[i] = null, r.run(), "production" !== t.env.NODE_ENV && null != c[i] && (d[i] = (d[i] || 0) + 1, d[i] > a._maxUpdateCount && (e.splice(c[i], 1), s.warn("You may have an infinite update loop for watcher with expression: " + r.expression)))
                }
            }
            var s = e("./util"),
                a = e("./config"),
                u = [],
                l = [],
                c = {},
                d = {},
                h = !1,
                f = !1;
            n.push = function(e) {
                var t = e.id;
                if (null == c[t]) {
                    if (f && !e.user) return void e.run();
                    var n = e.user ? l : u;
                    c[t] = n.length, n.push(e), h || (h = !0, s.nextTick(i))
                }
            }
        }).call(this, e("_process"))
    }, {
        "./config": 23,
        "./util": 72,
        _process: 8
    }],
    18: [function(e, t, n) {
        function r(e) {
            this.size = 0, this.limit = e, this.head = this.tail = void 0, this._keymap = Object.create(null)
        }
        var i = r.prototype;
        i.put = function(e, t) {
            var n = {
                key: e,
                value: t
            };
            return this._keymap[e] = n, this.tail ? (this.tail.newer = n, n.older = this.tail) : this.head = n, this.tail = n, this.size === this.limit ? this.shift() : void this.size++
        }, i.shift = function() {
            var e = this.head;
            return e && (this.head = this.head.newer, this.head.older = void 0, e.newer = e.older = void 0, this._keymap[e.key] = void 0), e
        }, i.get = function(e, t) {
            var n = this._keymap[e];
            if (void 0 !== n) return n === this.tail ? t ? n : n.value : (n.newer && (n === this.head && (this.head = n.newer), n.newer.older = n.older), n.older && (n.older.newer = n.newer), n.newer = void 0, n.older = this.tail, this.tail && (this.tail.newer = n), this.tail = n, t ? n : n.value)
        }, t.exports = r
    }, {}],
    19: [function(e, t, n) {
        (function(n) {
            function r(e) {
                return function(t, r) {
                    t._props = {};
                    for (var s, l, c, d, h = e.length; h--;)
                        if (s = e[h], l = s.path, t._props[l] = s, c = s.options, null === s.raw) o.initProp(t, s, i(c));
                        else if (s.dynamic) t._context ? s.mode === u.ONE_TIME ? (d = t._context.$get(s.parentPath), o.initProp(t, s, d)) : t._bindDir("prop", r, s, a) : "production" !== n.env.NODE_ENV && o.warn("Cannot bind dynamic prop on a root instance with no parent: " + s.name + '="' + s.raw + '"');
                    else {
                        var f = s.raw;
                        d = c.type === Boolean && "" === f ? !0 : f.trim() ? o.toBoolean(o.toNumber(f)) : f, o.initProp(t, s, d)
                    }
                }
            }

            function i(e) {
                if (!e.hasOwnProperty("default")) return e.type === Boolean ? !1 : void 0;
                var t = e["default"];
                return o.isObject(t) && "production" !== n.env.NODE_ENV && o.warn("Object/Array as default prop values will be shared across multiple instances. Use a factory function to return the default value instead."), "function" == typeof t && e.type !== Function ? t() : t
            }
            var o = e("../util"),
                s = e("../parsers/text"),
                a = e("../directives/prop"),
                u = e("../config")._propBindingModes,
                l = e("../parsers/path").identRE,
                c = /^data-/,
                d = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/,
                h = /^(true|false)$|^\d.*/;
            t.exports = function(e, t) {
                for (var i, a, f, p, m, g, v, y, _ = [], b = t.length; b--;)
                    if (i = t[b], a = i.name, m = o.camelize(a.replace(c, "")), l.test(m)) {
                        if (f = o.hyphenate(a), p = e.getAttribute(f), null === p && (f = "data-" + f, p = e.getAttribute(f)), g = {
                                name: a,
                                raw: p,
                                path: m,
                                options: i,
                                mode: u.ONE_WAY
                            }, null !== p) {
                            e.removeAttribute(f);
                            var w = s.parse(p);
                            w && (g.dynamic = !0, g.parentPath = s.tokensToExp(w), y = 1 === w.length, v = h.test(g.parentPath), v || y && w[0].oneTime ? g.mode = u.ONE_TIME : !v && y && w[0].twoWay && (d.test(g.parentPath) ? g.mode = u.TWO_WAY : "production" !== n.env.NODE_ENV && o.warn("Cannot bind two-way prop with non-settable parent path: " + g.parentPath)), "production" !== n.env.NODE_ENV && i.twoWay && g.mode !== u.TWO_WAY && o.warn('Prop "' + a + '" expects a two-way binding type.'))
                        } else i && i.required && "production" !== n.env.NODE_ENV && o.warn("Missing required prop: " + a);
                        _.push(g)
                    } else "production" !== n.env.NODE_ENV && o.warn('Invalid prop key: "' + a + '". Prop keys must be valid identifiers.');
                return r(_)
            }
        }).call(this, e("_process"))
    }, {
        "../config": 23,
        "../directives/prop": 39,
        "../parsers/path": 62,
        "../parsers/text": 64,
        "../util": 72,
        _process: 8
    }],
    20: [function(e, t, n) {
        (function(t) {
            function r(e, t) {
                var n = t._directives.length;
                return e(), t._directives.slice(n)
            }

            function i(e, t, n, r) {
                return function(i) {
                    o(e, t, i), n && r && o(n, r)
                }
            }

            function o(e, t, n) {
                for (var r = t.length; r--;) t[r]._teardown(), n || e._directives.$remove(t[r])
            }

            function s(e, t) {
                var n = e.nodeType;
                return 1 === n && "SCRIPT" !== e.tagName ? a(e, t) : 3 === n && C.interpolate && e.data.trim() ? u(e, t) : null
            }

            function a(e, t) {
                "TEXTAREA" === e.tagName && D.parse(e.value) && e.setAttribute("value", e.value);
                var n, r = e.hasAttributes();
                return r && (n = m(e, t)), n || (n = f(e, t)), n || (n = p(e, t)), !n && r && (n = y(e.attributes, t)), n
            }

            function u(e, t) {
                var n = D.parse(e.data);
                if (!n) return null;
                for (var r, i, o = document.createDocumentFragment(), s = 0, a = n.length; a > s; s++) i = n[s], r = i.tag ? l(i, t) : document.createTextNode(i.value), o.appendChild(r);
                return c(n, o, t)
            }

            function l(e, t) {
                function n(n) {
                    e.type = n, e.def = S(t, "directives", n), e.descriptor = $.parse(e.value)[0]
                }
                var r;
                return e.oneTime ? r = document.createTextNode(e.value) : e.html ? (r = document.createComment("v-html"), n("html")) : (r = document.createTextNode(" "), n("text")), r
            }

            function c(e, t) {
                return function(n, r) {
                    for (var i, o, s, a = t.cloneNode(!0), u = x.toArray(a.childNodes), l = 0, c = e.length; c > l; l++) i = e[l], o = i.value, i.tag && (s = u[l], i.oneTime ? (o = n.$eval(o), i.html ? x.replace(s, A.parse(o, !0)) : s.data = o) : n._bindDir(i.type, s, i.descriptor, i.def));
                    x.replace(r, a)
                }
            }

            function d(e, t) {
                for (var n, r, i, o = [], a = 0, u = e.length; u > a; a++) i = e[a], n = s(i, t), r = n && n.terminal || "SCRIPT" === i.tagName || !i.hasChildNodes() ? null : d(i.childNodes, t), o.push(n, r);
                return o.length ? h(o) : null
            }

            function h(e) {
                return function(t, n, r) {
                    for (var i, o, s, a = 0, u = 0, l = e.length; l > a; u++) {
                        i = n[u], o = e[a++], s = e[a++];
                        var c = x.toArray(i.childNodes);
                        o && o(t, i, r), s && s(t, c, r)
                    }
                }
            }

            function f(e, t) {
                var n = e.tagName.toLowerCase();
                if (!x.commonTagRE.test(n)) {
                    var r = S(t, "elementDirectives", n);
                    return r ? v(e, n, "", t, r) : void 0
                }
            }

            function p(e, t, n) {
                var r = x.checkComponent(e, t, n);
                if (r) {
                    var i = function(e, t, n) {
                        e._bindDir("component", t, {
                            expression: r
                        }, T, n)
                    };
                    return i.terminal = !0, i
                }
            }

            function m(e, t) {
                if (null !== x.attr(e, "pre")) return g;
                for (var n, r, i = 0, o = E.length; o > i; i++)
                    if (r = E[i], null !== (n = x.attr(e, r))) return v(e, r, n, t)
            }

            function g() {}

            function v(e, t, n, r, i) {
                var o = $.parse(n)[0];
                i = i || r.directives[t];
                var s = function(e, n, r) {
                    e._bindDir(t, n, o, i, r)
                };
                return s.terminal = !0, s
            }

            function y(e, n) {
                for (var r, i, o, s, a, u, l = e.length, c = []; l--;) r = e[l], i = r.name, o = r.value, 0 === i.indexOf(C.prefix) ? (a = i.slice(C.prefix.length), u = S(n, "directives", a), "production" !== t.env.NODE_ENV && x.assertAsset(u, "directive", a), u && c.push({
                    name: a,
                    descriptors: $.parse(o),
                    def: u
                })) : C.interpolate && (s = b(i, o, n), s && c.push(s));
                return c.length ? (c.sort(w), _(c)) : void 0
            }

            function _(e) {
                return function(t, n, r) {
                    for (var i, o, s, a = e.length; a--;)
                        if (i = e[a], i._link) i._link(t, n);
                        else
                            for (s = i.descriptors.length, o = 0; s > o; o++) t._bindDir(i.name, n, i.descriptors[o], i.def, r)
                }
            }

            function b(e, t, n) {
                var r = D.parse(t),
                    i = "class" === e;
                if (r) {
                    for (var o = i ? "class" : "attr", s = n.directives[o], a = r.length, u = !0; a--;) {
                        var l = r[a];
                        l.tag && !l.oneTime && (u = !1)
                    }
                    var c;
                    return c = u ? function(n, r) {
                        r.setAttribute(e, n.$interpolate(t))
                    } : function(n, a) {
                        var u = D.tokensToExp(r, n),
                            l = i ? $.parse(u)[0] : $.parse(e + ":" + u)[0];
                        i && (l._rawClass = t), n._bindDir(o, a, l, s)
                    }, {
                        def: s,
                        _link: c
                    }
                }
            }

            function w(e, t) {
                return e = e.def.priority || 0, t = t.def.priority || 0, e > t ? 1 : -1
            }
            var x = e("../util"),
                k = e("./compile-props"),
                C = e("../config"),
                D = e("../parsers/text"),
                $ = e("../parsers/directive"),
                A = e("../parsers/template"),
                S = x.resolveAsset,
                T = e("../directives/component"),
                E = ["repeat", "if"];
            n.compile = function(e, t, n) {
                var o = n || !t._asComponent ? s(e, t) : null,
                    a = o && o.terminal || "SCRIPT" === e.tagName || !e.hasChildNodes() ? null : d(e.childNodes, t);
                return function(e, t, n) {
                    var s = x.toArray(t.childNodes),
                        u = r(function() {
                            o && o(e, t, n), a && a(e, s, n)
                        }, e);
                    return i(e, u)
                }
            }, n.compileAndLinkProps = function(e, t, n) {
                var o = k(t, n),
                    s = r(function() {
                        o(e, null)
                    }, e);
                return i(e, s)
            }, n.compileRoot = function(e, t) {
                var n, o, s = t._containerAttrs,
                    a = t._replacerAttrs;
                return 11 !== e.nodeType && (t._asComponent ? (s && (n = y(s, t)), a && (o = y(a, t))) : o = y(e.attributes, t)),
                    function(e, t) {
                        var s, a = e._context;
                        a && n && (s = r(function() {
                            n(a, t)
                        }, a));
                        var u = r(function() {
                            o && o(e, t)
                        }, e);
                        return i(e, u, a, s)
                    }
            }, g.terminal = !0
        }).call(this, e("_process"))
    }, {
        "../config": 23,
        "../directives/component": 28,
        "../parsers/directive": 60,
        "../parsers/template": 63,
        "../parsers/text": 64,
        "../util": 72,
        "./compile-props": 19,
        _process: 8
    }],
    21: [function(e, t, n) {
        var r = e("../util");
        r.extend(n, e("./compile")), r.extend(n, e("./transclude"))
    }, {
        "../util": 72,
        "./compile": 20,
        "./transclude": 22
    }],
    22: [function(e, t, n) {
        (function(t) {
            function r(e, n) {
                var r = n.template,
                    l = u.parse(r, !0);
                if (l) {
                    var c = l.firstChild,
                        d = c.tagName && c.tagName.toLowerCase();
                    return n.replace ? (e === document.body && "production" !== t.env.NODE_ENV && s.warn("You are mounting an instance with a template to <body>. This will replace <body> entirely. You should probably use `replace: false` here."), l.childNodes.length > 1 || 1 !== c.nodeType || "component" === d || s.resolveAsset(n, "components", d) || c.hasAttribute(a.prefix + "component") || s.resolveAsset(n, "elementDirectives", d) || c.hasAttribute(a.prefix + "repeat") ? l : (n._replacerAttrs = i(c), o(e, c), c)) : (e.appendChild(l), e)
                }
                "production" !== t.env.NODE_ENV && s.warn("Invalid template option: " + r)
            }

            function i(e) {
                return 1 === e.nodeType && e.hasAttributes() ? s.toArray(e.attributes) : void 0
            }

            function o(e, t) {
                for (var n, r, i = e.attributes, o = i.length; o--;) n = i[o].name, r = i[o].value, t.hasAttribute(n) ? "class" === n && (r = t.getAttribute(n) + " " + r, t.setAttribute(n, r)) : t.setAttribute(n, r)
            }
            var s = e("../util"),
                a = e("../config"),
                u = e("../parsers/template");
            n.transclude = function(e, t) {
                return t && (t._containerAttrs = i(e)), s.isTemplate(e) && (e = u.parse(e)), t && (t._asComponent && !t.template && (t.template = "<content></content>"), t.template && (t._content = s.extractContent(e), e = r(e, t))), e instanceof DocumentFragment && (s.prepend(s.createAnchor("v-start", !0), e), e.appendChild(s.createAnchor("v-end", !0))), e
            }
        }).call(this, e("_process"))
    }, {
        "../config": 23,
        "../parsers/template": 63,
        "../util": 72,
        _process: 8
    }],
    23: [function(e, t, n) {
        t.exports = {
            prefix: "v-",
            debug: !1,
            strict: !1,
            silent: !1,
            proto: !0,
            interpolate: !0,
            async: !0,
            warnExpressionErrors: !0,
            _delimitersChanged: !0,
            _assetTypes: ["component", "directive", "elementDirective", "filter", "transition", "partial"],
            _propBindingModes: {
                ONE_WAY: 0,
                TWO_WAY: 1,
                ONE_TIME: 2
            },
            _maxUpdateCount: 100
        };
        var r = ["{{", "}}"];
        Object.defineProperty(t.exports, "delimiters", {
            get: function() {
                return r
            },
            set: function(e) {
                r = e, this._delimitersChanged = !0
            }
        })
    }, {}],
    24: [function(e, t, n) {
        (function(n) {
            function r() {}

            function i(e, t, n, r, i, o) {
                this.name = e, this.el = t, this.vm = n, this.raw = r.raw, this.expression = r.expression, this.arg = r.arg, this.filters = r.filters, this._descriptor = r, this._host = o, this._locked = !1, this._bound = !1, this._listeners = null, this._bind(i)
            }
            var o = e("./util"),
                s = e("./config"),
                a = e("./watcher"),
                u = e("./parsers/text"),
                l = e("./parsers/expression");
            i.prototype._bind = function(e) {
                if (("cloak" !== this.name || this.vm._isCompiled) && this.el && this.el.removeAttribute && this.el.removeAttribute(s.prefix + this.name), "function" == typeof e ? this.update = e : o.extend(this, e), this._watcherExp = this.expression, this._checkDynamicLiteral(), this.bind && this.bind(), this._watcherExp && (this.update || this.twoWay) && (!this.isLiteral || this._isDynamicLiteral) && !this._checkStatement()) {
                    var t = this;
                    this._update = this.update ? function(e, n) {
                        t._locked || t.update(e, n)
                    } : r;
                    var n = this._preProcess ? o.bind(this._preProcess, this) : null,
                        i = this._watcher = new a(this.vm, this._watcherExp, this._update, {
                            filters: this.filters,
                            twoWay: this.twoWay,
                            deep: this.deep,
                            preProcess: n
                        });
                    null != this._initValue ? i.set(this._initValue) : this.update && this.update(i.value)
                }
                this._bound = !0
            }, i.prototype._checkDynamicLiteral = function() {
                var e = this.expression;
                if (e && this.isLiteral) {
                    var t = u.parse(e);
                    if (t) {
                        var n = u.tokensToExp(t);
                        this.expression = this.vm.$get(n), this._watcherExp = n, this._isDynamicLiteral = !0
                    }
                }
            }, i.prototype._checkStatement = function() {
                var e = this.expression;
                if (e && this.acceptStatement && !l.isSimplePath(e)) {
                    var t = l.parse(e).get,
                        n = this.vm,
                        r = function() {
                            t.call(n, n)
                        };
                    return this.filters && (r = n._applyFilters(r, null, this.filters)), this.update(r), !0
                }
            }, i.prototype._checkParam = function(e) {
                var t = this.el.getAttribute(e);
                return null !== t && (this.el.removeAttribute(e), t = this.vm.$interpolate(t)), t
            }, i.prototype.set = function(e) {
                this.twoWay ? this._withLock(function() {
                    this._watcher.set(e)
                }) : "production" !== n.env.NODE_ENV && o.warn("Directive.set() can only be used inside twoWaydirectives.")
            }, i.prototype._withLock = function(e) {
                var t = this;
                t._locked = !0, e.call(t), o.nextTick(function() {
                    t._locked = !1
                })
            }, i.prototype.on = function(e, t) {
                o.on(this.el, e, t), (this._listeners || (this._listeners = [])).push([e, t])
            }, i.prototype._teardown = function() {
                if (this._bound) {
                    this._bound = !1, this.unbind && this.unbind(), this._watcher && this._watcher.teardown();
                    var e = this._listeners;
                    if (e)
                        for (var t = 0; t < e.length; t++) o.off(this.el, e[t][0], e[t][1]);
                    this.vm = this.el = this._watcher = this._listeners = null
                }
            }, t.exports = i
        }).call(this, e("_process"))
    }, {
        "./config": 23,
        "./parsers/expression": 61,
        "./parsers/text": 64,
        "./util": 72,
        "./watcher": 76,
        _process: 8
    }],
    25: [function(e, t, n) {
        var r = "http://www.w3.org/1999/xlink",
            i = /^xlink:/,
            o = {
                value: 1,
                checked: 1,
                selected: 1
            };
        t.exports = {
            priority: 850,
            update: function(e) {
                this.arg ? this.setAttr(this.arg, e) : "object" == typeof e && this.objectHandler(e)
            },
            objectHandler: function(e) {
                var t, n, r = this.cache || (this.cache = {});
                for (t in r) t in e || (this.setAttr(t, null), delete r[t]);
                for (t in e) n = e[t], n !== r[t] && (r[t] = n, this.setAttr(t, n))
            },
            setAttr: function(e, t) {
                o[e] && e in this.el ? (this.valueRemoved || (this.el.removeAttribute(e), this.valueRemoved = !0), this.el[e] = t) : null != t && t !== !1 ? i.test(e) ? this.el.setAttributeNS(r, e, t) : this.el.setAttribute(e, t) : this.el.removeAttribute(e)
            }
        }
    }, {}],
    26: [function(e, t, n) {
        function r(e) {
            for (var t = {}, n = e.trim().split(/\s+/), r = n.length; r--;) t[n[r]] = !0;
            return t
        }
        var i = e("../util"),
            o = i.addClass,
            s = i.removeClass;
        t.exports = {
            bind: function() {
                var e = this._descriptor._rawClass;
                e && (this.prevKeys = e.trim().split(/\s+/))
            },
            update: function(e) {
                this.arg ? e ? o(this.el, this.arg) : s(this.el, this.arg) : e && "string" == typeof e ? this.handleObject(r(e)) : i.isPlainObject(e) ? this.handleObject(e) : this.cleanup()
            },
            handleObject: function(e) {
                this.cleanup(e);
                for (var t = this.prevKeys = Object.keys(e), n = 0, r = t.length; r > n; n++) {
                    var i = t[n];
                    e[i] ? o(this.el, i) : s(this.el, i)
                }
            },
            cleanup: function(e) {
                if (this.prevKeys)
                    for (var t = this.prevKeys.length; t--;) {
                        var n = this.prevKeys[t];
                        e && e.hasOwnProperty(n) || s(this.el, n)
                    }
            }
        }
    }, {
        "../util": 72
    }],
    27: [function(e, t, n) {
        var r = e("../config");
        t.exports = {
            bind: function() {
                var e = this.el;
                this.vm.$once("hook:compiled", function() {
                    e.removeAttribute(r.prefix + "cloak")
                })
            }
        }
    }, {
        "../config": 23
    }],
    28: [function(e, t, n) {
        (function(n) {
            var r = e("../util"),
                i = e("../config"),
                o = e("../parsers/template");
            t.exports = {
                isLiteral: !0,
                bind: function() {
                    this.el.__vue__ ? "production" !== n.env.NODE_ENV && r.warn('cannot mount component "' + this.expression + '" on already mounted element: ' + this.el) : (this.anchor = r.createAnchor("v-component"), r.replace(this.el, this.anchor), this.keepAlive = null != this._checkParam("keep-alive"), this.waitForEvent = this._checkParam("wait-for"), this.refID = this._checkParam(i.prefix + "ref"), this.keepAlive && (this.cache = {}), null !== this._checkParam("inline-template") && (this.template = r.extractContent(this.el, !0)), this.pendingComponentCb = this.Component = null, this.pendingRemovals = 0, this.pendingRemovalCb = null, this._isDynamicLiteral ? this.transMode = this._checkParam("transition-mode") : this.resolveComponent(this.expression, r.bind(this.initStatic, this)))
                },
                initStatic: function() {
                    var e, t = this.anchor,
                        n = this.waitForEvent;
                    n && (e = {
                        created: function() {
                            this.$once(n, function() {
                                this.$before(t)
                            })
                        }
                    });
                    var r = this.build(e);
                    this.setCurrent(r), this.waitForEvent || r.$before(t)
                },
                update: function(e) {
                    this.setComponent(e)
                },
                setComponent: function(e, t) {
                    this.invalidatePending(), e ? this.resolveComponent(e, r.bind(function() {
                        this.unbuild(!0);
                        var e, n = this,
                            r = this.waitForEvent;
                        r && (e = {
                            created: function() {
                                this.$once(r, function() {
                                    n.waitingFor = null, n.transition(this, t)
                                })
                            }
                        });
                        var i = this.getCached(),
                            o = this.build(e);
                        !r || i ? this.transition(o, t) : this.waitingFor = o
                    }, this)) : (this.unbuild(!0),
                        this.remove(this.childVM, t), this.unsetCurrent())
                },
                resolveComponent: function(e, t) {
                    var n = this;
                    this.pendingComponentCb = r.cancellable(function(e) {
                        n.Component = e, t()
                    }), this.vm._resolveComponent(e, this.pendingComponentCb)
                },
                invalidatePending: function() {
                    this.pendingComponentCb && (this.pendingComponentCb.cancel(), this.pendingComponentCb = null)
                },
                build: function(e) {
                    var t = this.getCached();
                    if (t) return t;
                    if (this.Component) {
                        var n = {
                            el: o.clone(this.el),
                            template: this.template,
                            _linkerCachable: !this.template,
                            _asComponent: !0,
                            _isRouterView: this._isRouterView,
                            _context: this.vm
                        };
                        e && r.extend(n, e);
                        var i = this._host || this.vm,
                            s = i.$addChild(n, this.Component);
                        return this.keepAlive && (this.cache[this.Component.cid] = s), s
                    }
                },
                getCached: function() {
                    return this.keepAlive && this.cache[this.Component.cid]
                },
                unbuild: function(e) {
                    this.waitingFor && (this.waitingFor.$destroy(), this.waitingFor = null);
                    var t = this.childVM;
                    t && !this.keepAlive && t.$destroy(!1, e)
                },
                remove: function(e, t) {
                    var n = this.keepAlive;
                    if (e) {
                        this.pendingRemovals++, this.pendingRemovalCb = t;
                        var r = this;
                        e.$remove(function() {
                            r.pendingRemovals--, n || e._cleanup(), !r.pendingRemovals && r.pendingRemovalCb && (r.pendingRemovalCb(), r.pendingRemovalCb = null)
                        })
                    } else t && t()
                },
                transition: function(e, t) {
                    var n = this,
                        r = this.childVM;
                    switch (this.setCurrent(e), n.transMode) {
                        case "in-out":
                            e.$before(n.anchor, function() {
                                n.remove(r, t)
                            });
                            break;
                        case "out-in":
                            n.remove(r, function() {
                                e.$before(n.anchor, t)
                            });
                            break;
                        default:
                            n.remove(r), e.$before(n.anchor, t)
                    }
                },
                setCurrent: function(e) {
                    this.unsetCurrent(), this.childVM = e;
                    var t = e._refID || this.refID;
                    t && (this.vm.$[t] = e)
                },
                unsetCurrent: function() {
                    var e = this.childVM;
                    this.childVM = null;
                    var t = e && e._refID || this.refID;
                    t && (this.vm.$[t] = null)
                },
                unbind: function() {
                    if (this.invalidatePending(), this.unbuild(), this.unsetCurrent(), this.cache) {
                        for (var e in this.cache) this.cache[e].$destroy();
                        this.cache = null
                    }
                }
            }
        }).call(this, e("_process"))
    }, {
        "../config": 23,
        "../parsers/template": 63,
        "../util": 72,
        _process: 8
    }],
    29: [function(e, t, n) {
        t.exports = {
            isLiteral: !0,
            bind: function() {
                this.vm.$$[this.expression] = this.el
            },
            unbind: function() {
                delete this.vm.$$[this.expression]
            }
        }
    }, {}],
    30: [function(e, t, n) {
        var r = e("../util"),
            i = e("../parsers/template");
        t.exports = {
            bind: function() {
                8 === this.el.nodeType && (this.nodes = [], this.anchor = r.createAnchor("v-html"), r.replace(this.el, this.anchor))
            },
            update: function(e) {
                e = r.toString(e), this.nodes ? this.swap(e) : this.el.innerHTML = e
            },
            swap: function(e) {
                for (var t = this.nodes.length; t--;) r.remove(this.nodes[t]);
                var n = i.parse(e, !0, !0);
                this.nodes = r.toArray(n.childNodes), r.before(n, this.anchor)
            }
        }
    }, {
        "../parsers/template": 63,
        "../util": 72
    }],
    31: [function(e, t, n) {
        (function(n) {
            function r(e) {
                e._isAttached || e._callHook("attached")
            }

            function i(e) {
                e._isAttached && e._callHook("detached")
            }
            var o = e("../util"),
                s = e("../compiler"),
                a = e("../parsers/template"),
                u = e("../transition"),
                l = e("../cache"),
                c = new l(1e3);
            t.exports = {
                bind: function() {
                    var e = this.el;
                    if (e.__vue__) "production" !== n.env.NODE_ENV && o.warn('v-if="' + this.expression + '" cannot be used on an instance root element.'), this.invalid = !0;
                    else {
                        this.start = o.createAnchor("v-if-start"), this.end = o.createAnchor("v-if-end"), o.replace(e, this.end), o.before(this.start, this.end), o.isTemplate(e) ? this.template = a.parse(e, !0) : (this.template = document.createDocumentFragment(), this.template.appendChild(a.clone(e)));
                        var t = (this.vm.constructor.cid || "") + e.outerHTML;
                        this.linker = c.get(t), this.linker || (this.linker = s.compile(this.template, this.vm.$options, !0), c.put(t, this.linker))
                    }
                },
                update: function(e) {
                    this.invalid || (e ? this.unlink || this.link(a.clone(this.template), this.linker) : this.teardown())
                },
                link: function(e, t) {
                    var n = this.vm;
                    if (this.unlink = t(n, e, this._host), u.blockAppend(e, this.end, n), o.inDoc(n.$el)) {
                        var i = this.getContainedComponents();
                        i && i.forEach(r)
                    }
                },
                teardown: function() {
                    if (this.unlink) {
                        var e;
                        o.inDoc(this.vm.$el) && (e = this.getContainedComponents()), u.blockRemove(this.start, this.end, this.vm), e && e.forEach(i), this.unlink(), this.unlink = null
                    }
                },
                getContainedComponents: function() {
                    function e(e) {
                        for (var t, i = n; t !== r;) {
                            if (t = i.nextSibling, i === e.$el || i.contains && i.contains(e.$el)) return !0;
                            i = t
                        }
                        return !1
                    }
                    var t = this._host || this.vm,
                        n = this.start.nextSibling,
                        r = this.end;
                    return t.$children.length && t.$children.filter(e)
                },
                unbind: function() {
                    this.unlink && this.unlink()
                }
            }
        }).call(this, e("_process"))
    }, {
        "../cache": 18,
        "../compiler": 21,
        "../parsers/template": 63,
        "../transition": 65,
        "../util": 72,
        _process: 8
    }],
    32: [function(e, t, n) {
        n.text = e("./text"), n.html = e("./html"), n.attr = e("./attr"), n.show = e("./show"), n["class"] = e("./class"), n.el = e("./el"), n.ref = e("./ref"), n.cloak = e("./cloak"), n.style = e("./style"), n.transition = e("./transition"), n.on = e("./on"), n.model = e("./model"), n.repeat = e("./repeat"), n["if"] = e("./if"), n._component = e("./component"), n._prop = e("./prop")
    }, {
        "./attr": 25,
        "./class": 26,
        "./cloak": 27,
        "./component": 28,
        "./el": 29,
        "./html": 30,
        "./if": 31,
        "./model": 34,
        "./on": 38,
        "./prop": 39,
        "./ref": 40,
        "./repeat": 41,
        "./show": 42,
        "./style": 43,
        "./text": 44,
        "./transition": 45
    }],
    33: [function(e, t, n) {
        var r = e("../../util");
        t.exports = {
            bind: function() {
                function e() {
                    var e = n.checked;
                    return e && null !== i && (e = t.vm.$eval(i)), e || null === o || (e = t.vm.$eval(o)), e
                }
                var t = this,
                    n = this.el,
                    i = this._checkParam("true-exp"),
                    o = this._checkParam("false-exp");
                this._matchValue = function(e) {
                    return null !== i ? r.looseEqual(e, t.vm.$eval(i)) : !!e
                }, this.on("change", function() {
                    t.set(e())
                }), n.checked && (this._initValue = e())
            },
            update: function(e) {
                this.el.checked = this._matchValue(e)
            }
        }
    }, {
        "../../util": 72
    }],
    34: [function(e, t, n) {
        (function(n) {
            var r = e("../../util"),
                i = {
                    text: e("./text"),
                    radio: e("./radio"),
                    select: e("./select"),
                    checkbox: e("./checkbox")
                };
            t.exports = {
                priority: 800,
                twoWay: !0,
                handlers: i,
                bind: function() {
                    this.checkFilters(), this.hasRead && !this.hasWrite && "production" !== n.env.NODE_ENV && r.warn("It seems you are using a read-only filter with v-model. You might want to use a two-way filter to ensure correct behavior.");
                    var e, t = this.el,
                        o = t.tagName;
                    if ("INPUT" === o) e = i[t.type] || i.text;
                    else if ("SELECT" === o) e = i.select;
                    else {
                        if ("TEXTAREA" !== o) return void("production" !== n.env.NODE_ENV && r.warn("v-model does not support element type: " + o));
                        e = i.text
                    }
                    t.__v_model = this, e.bind.call(this), this.update = e.update, this._unbind = e.unbind
                },
                checkFilters: function() {
                    var e = this.filters;
                    if (e)
                        for (var t = e.length; t--;) {
                            var n = r.resolveAsset(this.vm.$options, "filters", e[t].name);
                            ("function" == typeof n || n.read) && (this.hasRead = !0), n.write && (this.hasWrite = !0)
                        }
                },
                unbind: function() {
                    this.el.__v_model = null, this._unbind && this._unbind()
                }
            }
        }).call(this, e("_process"))
    }, {
        "../../util": 72,
        "./checkbox": 33,
        "./radio": 35,
        "./select": 36,
        "./text": 37,
        _process: 8
    }],
    35: [function(e, t, n) {
        var r = e("../../util");
        t.exports = {
            bind: function() {
                var e = this,
                    t = this.el,
                    n = null != this._checkParam("number"),
                    i = this._checkParam("exp");
                this.getValue = function() {
                    var o = t.value;
                    return n ? o = r.toNumber(o) : null !== i && (o = e.vm.$eval(i)), o
                }, this.on("change", function() {
                    e.set(e.getValue())
                }), t.checked && (this._initValue = this.getValue())
            },
            update: function(e) {
                this.el.checked = r.looseEqual(e, this.getValue())
            }
        }
    }, {
        "../../util": 72
    }],
    36: [function(e, t, n) {
        (function(n) {
            function r(e) {
                function t(e) {
                    if (u.isArray(e)) {
                        for (var t = o.options.length; t--;) {
                            var a = o.options[t];
                            if (a !== s) {
                                var l = a.parentNode;
                                l === o ? l.removeChild(a) : (o.removeChild(l), t = o.options.length)
                            }
                        }
                        i(o, e), r.forceUpdate()
                    } else "production" !== n.env.NODE_ENV && u.warn("Invalid options value for v-model: " + e)
                }
                var r = this,
                    o = r.el,
                    s = r.defaultOption = r.el.options[0],
                    a = c.parse(e)[0];
                this.optionWatcher = new l(this.vm, a.expression, t, {
                    deep: !0,
                    filters: a.filters
                }), t(this.optionWatcher.value)
            }

            function i(e, t) {
                for (var n, r, o = 0, s = t.length; s > o; o++) n = t[o], n.options ? (r = document.createElement("optgroup"), r.label = n.label, i(r, n.options)) : (r = document.createElement("option"), "string" == typeof n || "number" == typeof n ? r.text = r.value = n : (null == n.value || u.isObject(n.value) || (r.value = n.value), r._value = n.value, r.text = n.text || "", n.disabled && (r.disabled = !0))), e.appendChild(r)
            }

            function o() {
                for (var e, t = this.el.options, n = 0, r = t.length; r > n; n++) t[n].hasAttribute("selected") && (this.multiple ? (e || (e = [])).push(t[n].value) : e = t[n].value);
                "undefined" != typeof e && (this._initValue = this.number ? u.toNumber(e) : e)
            }

            function s(e, t) {
                for (var n, r, i = t ? [] : null, o = 0, s = e.options.length; s > o; o++)
                    if (n = e.options[o], n.selected) {
                        if (r = n.hasOwnProperty("_value") ? n._value : n.value, !t) return r;
                        i.push(r)
                    }
                return i
            }

            function a(e, t) {
                for (var n = e.length; n--;)
                    if (u.looseEqual(e[n], t)) return n;
                return -1
            }
            var u = e("../../util"),
                l = e("../../watcher"),
                c = e("../../parsers/directive");
            t.exports = {
                bind: function() {
                    var e = this,
                        t = this.el;
                    this.forceUpdate = function() {
                        e._watcher && e.update(e._watcher.get())
                    };
                    var n = this._checkParam("options");
                    n && r.call(this, n), this.number = null != this._checkParam("number"), this.multiple = t.hasAttribute("multiple"), this.on("change", function() {
                        var n = s(t, e.multiple);
                        n = e.number ? u.isArray(n) ? n.map(u.toNumber) : u.toNumber(n) : n, e.set(n)
                    }), o.call(this), this.vm.$on("hook:attached", this.forceUpdate)
                },
                update: function(e) {
                    var t = this.el;
                    if (t.selectedIndex = -1, null == e) return void(this.defaultOption && (this.defaultOption.selected = !0));
                    for (var n, r, i = this.multiple && u.isArray(e), o = t.options, s = o.length; s--;) n = o[s], r = n.hasOwnProperty("_value") ? n._value : n.value, n.selected = i ? a(e, r) > -1 : u.looseEqual(e, r)
                },
                unbind: function() {
                    this.vm.$off("hook:attached", this.forceUpdate), this.optionWatcher && this.optionWatcher.teardown()
                }
            }
        }).call(this, e("_process"))
    }, {
        "../../parsers/directive": 60,
        "../../util": 72,
        "../../watcher": 76,
        _process: 8
    }],
    37: [function(e, t, n) {
        var r = e("../../util");
        t.exports = {
            bind: function() {
                var e = this,
                    t = this.el,
                    n = "range" === t.type,
                    i = null != this._checkParam("lazy"),
                    o = null != this._checkParam("number"),
                    s = parseInt(this._checkParam("debounce"), 10),
                    a = !1;
                r.isAndroid || n || (this.on("compositionstart", function() {
                    a = !0
                }), this.on("compositionend", function() {
                    a = !1, i || e.listener()
                })), this.focused = !1, n || (this.on("focus", function() {
                    e.focused = !0
                }), this.on("blur", function() {
                    e.focused = !1, e.listener()
                })), this.listener = function() {
                    if (!a) {
                        var i = o || n ? r.toNumber(t.value) : t.value;
                        e.set(i), r.nextTick(function() {
                            e._bound && !e.focused && e.update(e._watcher.value)
                        })
                    }
                }, s && (this.listener = r.debounce(this.listener, s)), this.hasjQuery = "function" == typeof jQuery, this.hasjQuery ? (jQuery(t).on("change", this.listener), i || jQuery(t).on("input", this.listener)) : (this.on("change", this.listener), i || this.on("input", this.listener)), !i && r.isIE9 && (this.on("cut", function() {
                    r.nextTick(e.listener)
                }), this.on("keyup", function(t) {
                    (46 === t.keyCode || 8 === t.keyCode) && e.listener()
                })), (t.hasAttribute("value") || "TEXTAREA" === t.tagName && t.value.trim()) && (this._initValue = o ? r.toNumber(t.value) : t.value)
            },
            update: function(e) {
                this.el.value = r.toString(e)
            },
            unbind: function() {
                var e = this.el;
                this.hasjQuery && (jQuery(e).off("change", this.listener), jQuery(e).off("input", this.listener))
            }
        }
    }, {
        "../../util": 72
    }],
    38: [function(e, t, n) {
        (function(n) {
            var r = e("../util");
            t.exports = {
                acceptStatement: !0,
                priority: 700,
                bind: function() {
                    if ("IFRAME" === this.el.tagName && "load" !== this.arg) {
                        var e = this;
                        this.iframeBind = function() {
                            r.on(e.el.contentWindow, e.arg, e.handler)
                        }, this.on("load", this.iframeBind)
                    }
                },
                update: function(e) {
                    if ("function" != typeof e) return void("production" !== n.env.NODE_ENV && r.warn('Directive v-on="' + this.arg + ": " + this.expression + '" expects a function value, got ' + e));
                    this.reset();
                    var t = this.vm;
                    this.handler = function(n) {
                        n.targetVM = t, t.$event = n;
                        var r = e(n);
                        return t.$event = null, r
                    }, this.iframeBind ? this.iframeBind() : r.on(this.el, this.arg, this.handler)
                },
                reset: function() {
                    var e = this.iframeBind ? this.el.contentWindow : this.el;
                    this.handler && r.off(e, this.arg, this.handler)
                },
                unbind: function() {
                    this.reset()
                }
            }
        }).call(this, e("_process"))
    }, {
        "../util": 72,
        _process: 8
    }],
    39: [function(e, t, n) {
        var r = e("../util"),
            i = e("../watcher"),
            o = e("../config")._propBindingModes;
        t.exports = {
            bind: function() {
                var e = this.vm,
                    t = e._context,
                    n = this._descriptor,
                    s = n.path,
                    a = n.parentPath;
                this.parentWatcher = new i(t, a, function(t) {
                    r.assertProp(n, t) && (e[s] = t)
                }, {
                    sync: !0
                });
                var u = this.parentWatcher.value;
                if ("$data" === s ? e._data = u : r.initProp(e, n, u), n.mode === o.TWO_WAY) {
                    var l = this;
                    e.$once("hook:created", function() {
                        l.childWatcher = new i(e, s, function(e) {
                            t.$set(a, e)
                        }, {
                            sync: !0
                        })
                    })
                }
            },
            unbind: function() {
                this.parentWatcher.teardown(), this.childWatcher && this.childWatcher.teardown()
            }
        }
    }, {
        "../config": 23,
        "../util": 72,
        "../watcher": 76
    }],
    40: [function(e, t, n) {
        (function(n) {
            var r = e("../util");
            t.exports = {
                isLiteral: !0,
                bind: function() {
                    var e = this.el.__vue__;
                    return e ? void(e._refID = this.expression) : void("production" !== n.env.NODE_ENV && r.warn("v-ref should only be used on a component root element."))
                }
            }
        }).call(this, e("_process"))
    }, {
        "../util": 72,
        _process: 8
    }],
    41: [function(e, t, n) {
        (function(n) {
            function r(e, t, n) {
                var r = e.$el.previousSibling;
                if (r) {
                    for (;
                        (!r.__vue__ || r.__vue__.$options._repeatId !== n) && r !== t;) r = r.previousSibling;
                    return r.__vue__
                }
            }

            function i(e) {
                for (var t = -1, n = new Array(e); ++t < e;) n[t] = t;
                return n
            }

            function o(e) {
                for (var t = {}, n = 0, r = e.length; r > n; n++) t[e[n].$key] = e[n];
                return t
            }

            function s(e) {
                var t = typeof e;
                return null == e || "string" === t || "number" === t || "boolean" === t
            }
            var a = e("../util"),
                u = e("../config"),
                l = a.isObject,
                c = a.isPlainObject,
                d = e("../parsers/text"),
                h = e("../parsers/expression"),
                f = e("../parsers/template"),
                p = e("../compiler"),
                m = 0,
                g = 0,
                v = 1,
                y = 2,
                _ = 3;
            t.exports = {
                bind: function() {
                    "production" !== n.env.NODE_ENV && "OPTION" === this.el.tagName && this.el.parentNode && this.el.parentNode.__v_model && a.warn("Don't use v-repeat for v-model options; use the `options` param instead: http://vuejs.org/guide/forms.html#Dynamic_Select_Options");
                    var e = this.expression.match(/(.*) in (.*)/);
                    e && (this.arg = e[1], this._watcherExp = e[2]), this.id = "__v_repeat_" + ++m, this.start = a.createAnchor("v-repeat-start"), this.end = a.createAnchor("v-repeat-end"), a.replace(this.el, this.end), a.before(this.start, this.end), this.template = a.isTemplate(this.el) ? f.parse(this.el, !0) : this.el, this.idKey = this._checkParam("track-by");
                    var t = +this._checkParam("stagger");
                    this.enterStagger = +this._checkParam("enter-stagger") || t, this.leaveStagger = +this._checkParam("leave-stagger") || t, this.refID = this._checkParam(u.prefix + "ref"), this.elID = this._checkParam(u.prefix + "el"), this.checkIf(), this.checkComponent(), this.cache = Object.create(null)
                },
                checkIf: function() {
                    null !== a.attr(this.el, "if") && "production" !== n.env.NODE_ENV && a.warn('Don\'t use v-if with v-repeat. Use v-show or the "filterBy" filter instead.')
                },
                checkComponent: function() {
                    this.componentState = g;
                    var e = this.vm.$options,
                        t = a.checkComponent(this.el, e);
                    if (t) {
                        this.Component = null, this.asComponent = !0, null !== this._checkParam("inline-template") && (this.inlineTemplate = a.extractContent(this.el, !0));
                        var n = d.parse(t);
                        if (n) {
                            var r = d.tokensToExp(n);
                            this.componentGetter = h.parse(r).get
                        } else this.componentId = t, this.pendingData = null
                    } else {
                        this.Component = a.Vue, this.inline = !0, this.template = p.transclude(this.template);
                        var i = a.extend({}, e);
                        i._asComponent = !1, this._linkFn = p.compile(this.template, i)
                    }
                },
                resolveComponent: function() {
                    this.componentState = v, this.vm._resolveComponent(this.componentId, a.bind(function(e) {
                        this.componentState !== _ && (this.Component = e, this.componentState = y, this.realUpdate(this.pendingData), this.pendingData = null)
                    }, this))
                },
                resolveDynamicComponent: function(e, t) {
                    var r, i = Object.create(this.vm);
                    for (r in e) a.define(i, r, e[r]);
                    for (r in t) a.define(i, r, t[r]);
                    var o = this.componentGetter.call(i, i),
                        s = a.resolveAsset(this.vm.$options, "components", o);
                    return "production" !== n.env.NODE_ENV && a.assertAsset(s, "component", o), s.options ? s : ("production" !== n.env.NODE_ENV && a.warn("Async resolution is not supported for v-repeat + dynamic component. (component: " + o + ")"), a.Vue)
                },
                update: function(e) {
                    if ("production" === n.env.NODE_ENV || a.isArray(e) || a.warn("v-repeat pre-converts Objects into Arrays, and v-repeat filters should always return Arrays."), this.componentId) {
                        var t = this.componentState;
                        t === g ? (this.pendingData = e, this.resolveComponent()) : t === v ? this.pendingData = e : t === y && this.realUpdate(e)
                    } else this.realUpdate(e)
                },
                realUpdate: function(e) {
                    this.vms = this.diff(e, this.vms), this.refID && (this.vm.$[this.refID] = this.converted ? o(this.vms) : this.vms), this.elID && (this.vm.$$[this.elID] = this.vms.map(function(e) {
                        return e.$el
                    }))
                },
                diff: function(e, t) {
                    var i, o, s, u, c, d, h = this.idKey,
                        f = this.converted,
                        p = this.start,
                        m = this.end,
                        g = a.inDoc(p),
                        v = this.arg,
                        y = !t,
                        _ = new Array(e.length);
                    for (u = 0, c = e.length; c > u; u++) i = e[u], o = f ? i.$value : i, d = !l(o), s = !y && this.getVm(o, u, f ? i.$key : null), s ? ("production" !== n.env.NODE_ENV && s._reused && a.warn('Duplicate objects found in v-repeat="' + this.expression + '": ' + JSON.stringify(o)), s._reused = !0, s.$index = u, (h || f || d) && (v ? s[v] = o : a.isPlainObject(o) ? s.$data = o : s.$value = o)) : (s = this.build(i, u, !0), s._reused = !1), _[u] = s, y && s.$before(m);
                    if (y) return _;
                    var b = 0,
                        w = t.length - _.length;
                    for (u = 0, c = t.length; c > u; u++) s = t[u], s._reused || (this.uncacheVm(s), s.$destroy(!1, !0), this.remove(s, b++, w, g));
                    var x, k, C, D = 0;
                    for (u = 0, c = _.length; c > u; u++) s = _[u], x = _[u - 1], k = x ? x._staggerCb ? x._staggerAnchor : x._fragmentEnd || x.$el : p, s._reused && !s._staggerCb ? (C = r(s, p, this.id), C !== x && this.move(s, k)) : this.insert(s, D++, k, g), s._reused = !1;
                    return _
                },
                build: function(e, t, r) {
                    var i = {
                        $index: t
                    };
                    this.converted && (i.$key = e.$key);
                    var o = this.converted ? e.$value : e,
                        u = this.arg;
                    u ? (e = {}, e[u] = o) : c(o) ? e = o : (e = {}, i.$value = o);
                    var l = this.Component || this.resolveDynamicComponent(e, i),
                        d = this._host || this.vm,
                        h = d.$addChild({
                            el: f.clone(this.template),
                            data: e,
                            inherit: this.inline,
                            template: this.inlineTemplate,
                            _meta: i,
                            _repeat: this.inline,
                            _asComponent: this.asComponent,
                            _linkerCachable: !this.inlineTemplate && l !== a.Vue,
                            _linkFn: this._linkFn,
                            _repeatId: this.id,
                            _context: this.vm
                        }, l);
                    r && this.cacheVm(o, h, t, this.converted ? i.$key : null);
                    var p = this;
                    return "object" === this.rawType && s(o) && h.$watch(u || "$value", function(e) {
                        p.filters && "production" !== n.env.NODE_ENV && a.warn("You seem to be mutating the $value reference of a v-repeat instance (likely through v-model) and filtering the v-repeat at the same time. This will not work properly with an Array of primitive values. Please use an Array of Objects instead."), p._withLock(function() {
                            p.converted ? p.rawValue[h.$key] = e : p.rawValue.$set(h.$index, e)
                        })
                    }), h
                },
                unbind: function() {
                    if (this.componentState = _, this.refID && (this.vm.$[this.refID] = null), this.vms)
                        for (var e, t = this.vms.length; t--;) e = this.vms[t], this.uncacheVm(e), e.$destroy()
                },
                cacheVm: function(e, t, r, i) {
                    var o, s = this.idKey,
                        u = this.cache,
                        c = !l(e);
                    i || s || c ? (o = s ? "$index" === s ? r : e[s] : i || r, u[o] ? c || "$index" === s || "production" !== n.env.NODE_ENV && a.warn("Duplicate objects with the same track-by key in v-repeat: " + o) : u[o] = t) : (o = this.id, e.hasOwnProperty(o) ? null === e[o] ? e[o] = t : "production" !== n.env.NODE_ENV && a.warn('Duplicate objects found in v-repeat="' + this.expression + '": ' + JSON.stringify(e)) : a.define(e, o, t)), t._raw = e
                },
                getVm: function(e, t, n) {
                    var r = this.idKey,
                        i = !l(e);
                    if (n || r || i) {
                        var o = r ? "$index" === r ? t : e[r] : n || t;
                        return this.cache[o]
                    }
                    return e[this.id]
                },
                uncacheVm: function(e) {
                    var t = e._raw,
                        n = this.idKey,
                        r = e.$index,
                        i = e.hasOwnProperty("$key") && e.$key,
                        o = !l(t);
                    if (n || i || o) {
                        var s = n ? "$index" === n ? r : t[n] : i || r;
                        this.cache[s] = null
                    } else t[this.id] = null, e._raw = null
                },
                insert: function(e, t, n, r) {
                    e._staggerCb && (e._staggerCb.cancel(), e._staggerCb = null);
                    var i = this.getStagger(e, t, null, "enter");
                    if (r && i) {
                        var o = e._staggerAnchor;
                        o || (o = e._staggerAnchor = a.createAnchor("stagger-anchor"), o.__vue__ = e), a.after(o, n);
                        var s = e._staggerCb = a.cancellable(function() {
                            e._staggerCb = null, e.$before(o), a.remove(o)
                        });
                        setTimeout(s, i)
                    } else e.$after(n)
                },
                move: function(e, t) {
                    e.$after(t, null, !1)
                },
                remove: function(e, t, n, r) {
                    function i() {
                        e.$remove(function() {
                            e._cleanup()
                        })
                    }
                    if (e._staggerCb) return e._staggerCb.cancel(), void(e._staggerCb = null);
                    var o = this.getStagger(e, t, n, "leave");
                    if (r && o) {
                        var s = e._staggerCb = a.cancellable(function() {
                            e._staggerCb = null, i()
                        });
                        setTimeout(s, o)
                    } else i()
                },
                getStagger: function(e, t, n, r) {
                    r += "Stagger";
                    var i = e.$el.__v_trans,
                        o = i && i.hooks,
                        s = o && (o[r] || o.stagger);
                    return s ? s.call(e, t, n) : t * this[r]
                },
                _preProcess: function(e) {
                    this.rawValue = e;
                    var t = this.rawType = typeof e;
                    if (c(e)) {
                        for (var n, r = Object.keys(e), o = r.length, s = new Array(o); o--;) n = r[o], s[o] = {
                            $key: n,
                            $value: e[n]
                        };
                        return this.converted = !0, s
                    }
                    return this.converted = !1, "number" === t ? e = i(e) : "string" === t && (e = a.toArray(e)), e || []
                }
            }
        }).call(this, e("_process"))
    }, {
        "../compiler": 21,
        "../config": 23,
        "../parsers/expression": 61,
        "../parsers/template": 63,
        "../parsers/text": 64,
        "../util": 72,
        _process: 8
    }],
    42: [function(e, t, n) {
        var r = e("../transition");
        t.exports = function(e) {
            var t = this.el;
            r.apply(t, e ? 1 : -1, function() {
                t.style.display = e ? "" : "none"
            }, this.vm)
        }
    }, {
        "../transition": 65
    }],
    43: [function(e, t, n) {
        function r(e) {
            if (d[e]) return d[e];
            var t = i(e);
            return d[e] = d[t] = t, t
        }

        function i(e) {
            e = e.replace(l, "$1-$2").toLowerCase();
            var t = o.camelize(e),
                n = t.charAt(0).toUpperCase() + t.slice(1);
            if (c || (c = document.createElement("div")), t in c.style) return e;
            for (var r, i = s.length; i--;)
                if (r = a[i] + n, r in c.style) return s[i] + e
        }
        var o = e("../util"),
            s = ["-webkit-", "-moz-", "-ms-"],
            a = ["Webkit", "Moz", "ms"],
            u = /!important;?$/,
            l = /([a-z])([A-Z])/g,
            c = null,
            d = {};
        t.exports = {
            deep: !0,
            update: function(e) {
                this.arg ? this.setProp(this.arg, e) : "object" == typeof e ? this.objectHandler(e) : this.el.style.cssText = e
            },
            objectHandler: function(e) {
                var t, n, r = this.cache || (this.cache = {});
                for (t in r) t in e || (this.setProp(t, null), delete r[t]);
                for (t in e) n = e[t], n !== r[t] && (r[t] = n, this.setProp(t, n))
            },
            setProp: function(e, t) {
                if (e = r(e))
                    if (null != t && (t += ""), t) {
                        var n = u.test(t) ? "important" : "";
                        n && (t = t.replace(u, "").trim()), this.el.style.setProperty(e, t, n)
                    } else this.el.style.removeProperty(e)
            }
        }
    }, {
        "../util": 72
    }],
    44: [function(e, t, n) {
        var r = e("../util");
        t.exports = {
            bind: function() {
                this.attr = 3 === this.el.nodeType ? "data" : "textContent"
            },
            update: function(e) {
                this.el[this.attr] = r.toString(e)
            }
        }
    }, {
        "../util": 72
    }],
    45: [function(e, t, n) {
        var r = e("../util"),
            i = e("../transition/transition");
        t.exports = {
            priority: 1e3,
            isLiteral: !0,
            bind: function() {
                this._isDynamicLiteral || this.update(this.expression)
            },
            update: function(e, t) {
                var n = this.el,
                    o = this.el.__vue__ || this.vm,
                    s = r.resolveAsset(o.$options, "transitions", e);
                e = e || "v", n.__v_trans = new i(n, e, s, o), t && r.removeClass(n, t + "-transition"), r.addClass(n, e + "-transition")
            }
        }
    }, {
        "../transition/transition": 67,
        "../util": 72
    }],
    46: [function(e, t, n) {
        function r(e, t, n) {
            for (var r = document.createDocumentFragment(), i = 0, s = e.length; s > i; i++) {
                var a = e[i];
                n && !a.__v_selected ? r.appendChild(o(a)) : n || a.parentNode !== t || (a.__v_selected = !0, r.appendChild(o(a)))
            }
            return r
        }
        var i = e("../util"),
            o = e("../parsers/template").clone;
        t.exports = {
            bind: function() {
                for (var e = this.vm, t = e; t.$options._repeat;) t = t.$parent;
                var n, i = t.$options._content;
                if (!i) return void this.fallback();
                var o = t._context,
                    s = this._checkParam("select");
                if (s) {
                    var a = i.querySelectorAll(s);
                    a.length ? (n = r(a, i), n.hasChildNodes() ? this.compile(n, o, e) : this.fallback()) : this.fallback()
                } else {
                    var u = this,
                        l = function() {
                            u.compile(r(i.childNodes, i, !0), o, e)
                        };
                    t._isCompiled ? l() : t.$once("hook:compiled", l)
                }
            },
            fallback: function() {
                this.compile(i.extractContent(this.el, !0), this.vm)
            },
            compile: function(e, t, n) {
                e && t && (this.unlink = t.$compile(e, n)), e ? i.replace(this.el, e) : i.remove(this.el)
            },
            unbind: function() {
                this.unlink && this.unlink()
            }
        }
    }, {
        "../parsers/template": 63,
        "../util": 72
    }],
    47: [function(e, t, n) {
        n.content = e("./content"), n.partial = e("./partial")
    }, {
        "./content": 46,
        "./partial": 48
    }],
    48: [function(e, t, n) {
        (function(n) {
            var r = e("../util"),
                i = e("../parsers/template"),
                o = e("../parsers/text"),
                s = e("../compiler"),
                a = e("../cache"),
                u = new a(1e3),
                l = e("../directives/if");
            t.exports = {
                link: l.link,
                teardown: l.teardown,
                getContainedComponents: l.getContainedComponents,
                bind: function() {
                    var e = this.el;
                    this.start = r.createAnchor("v-partial-start"), this.end = r.createAnchor("v-partial-end"), r.replace(e, this.end), r.before(this.start, this.end);
                    var t = e.getAttribute("name"),
                        n = o.parse(t);
                    n ? this.setupDynamic(n) : this.insert(t)
                },
                setupDynamic: function(e) {
                    var t = this,
                        n = o.tokensToExp(e);
                    this.unwatch = this.vm.$watch(n, function(e) {
                        t.teardown(), t.insert(e)
                    }, {
                        immediate: !0,
                        user: !1
                    })
                },
                insert: function(e) {
                    var t = r.resolveAsset(this.vm.$options, "partials", e);
                    if ("production" !== n.env.NODE_ENV && r.assertAsset(t, "partial", e), t) {
                        var o = i.parse(t, !0),
                            s = (this.vm.constructor.cid || "") + t,
                            a = this.compile(o, s);
                        this.link(o, a)
                    }
                },
                compile: function(e, t) {
                    var n = u.get(t);
                    if (n) return n;
                    var r = s.compile(e, this.vm.$options, !0);
                    return u.put(t, r), r
                },
                unbind: function() {
                    this.unlink && this.unlink(), this.unwatch && this.unwatch()
                }
            }
        }).call(this, e("_process"))
    }, {
        "../cache": 18,
        "../compiler": 21,
        "../directives/if": 31,
        "../parsers/template": 63,
        "../parsers/text": 64,
        "../util": 72,
        _process: 8
    }],
    49: [function(e, t, n) {
        function r(e, t) {
            var n;
            if (i.isPlainObject(e)) {
                var o = Object.keys(e);
                for (n = o.length; n--;)
                    if (r(e[o[n]], t)) return !0
            } else if (i.isArray(e)) {
                for (n = e.length; n--;)
                    if (r(e[n], t)) return !0
            } else if (null != e) return e.toString().toLowerCase().indexOf(t) > -1
        }
        var i = e("../util"),
            o = e("../parsers/path");
        n.filterBy = function(e, t, n) {
            if (null == t) return e;
            if ("function" == typeof t) return e.filter(t);
            t = ("" + t).toLowerCase();
            var s = "in" === n ? 3 : 2,
                a = i.toArray(arguments, s).reduce(function(e, t) {
                    return e.concat(t)
                }, []);
            return e.filter(function(e) {
                return a.length ? a.some(function(n) {
                    return r(o.get(e, n), t)
                }) : r(e, t)
            })
        }, n.orderBy = function(e, t, n) {
            if (!t) return e;
            var r = 1;
            return arguments.length > 2 && (r = "-1" === n ? -1 : n ? -1 : 1), e.slice().sort(function(e, n) {
                return "$key" !== t && "$value" !== t && (e && "$value" in e && (e = e.$value), n && "$value" in n && (n = n.$value)), e = i.isObject(e) ? o.get(e, t) : e, n = i.isObject(n) ? o.get(n, t) : n, e === n ? 0 : e > n ? r : -r
            })
        }
    }, {
        "../parsers/path": 62,
        "../util": 72
    }],
    50: [function(e, t, n) {
        var r = e("../util");
        n.json = {
            read: function(e, t) {
                return "string" == typeof e ? e : JSON.stringify(e, null, Number(t) || 2)
            },
            write: function(e) {
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            }
        }, n.capitalize = function(e) {
            return e || 0 === e ? (e = e.toString(), e.charAt(0).toUpperCase() + e.slice(1)) : ""
        }, n.uppercase = function(e) {
            return e || 0 === e ? e.toString().toUpperCase() : ""
        }, n.lowercase = function(e) {
            return e || 0 === e ? e.toString().toLowerCase() : ""
        };
        var i = /(\d{3})(?=\d)/g;
        n.currency = function(e, t) {
            if (e = parseFloat(e), !isFinite(e) || !e && 0 !== e) return "";
            t = null != t ? t : "$";
            var n = Math.abs(e).toFixed(2),
                r = n.slice(0, -3),
                o = r.length % 3,
                s = o > 0 ? r.slice(0, o) + (r.length > 3 ? "," : "") : "",
                a = n.slice(-3),
                u = 0 > e ? "-" : "";
            return t + u + s + r.slice(o).replace(i, "$1,") + a
        }, n.pluralize = function(e) {
            var t = r.toArray(arguments, 1);
            return t.length > 1 ? t[e % 10 - 1] || t[t.length - 1] : t[0] + (1 === e ? "" : "s")
        };
        var o = {
            esc: 27,
            tab: 9,
            enter: 13,
            space: 32,
            "delete": 46,
            up: 38,
            left: 37,
            right: 39,
            down: 40
        };
        n.key = function(e, t) {
            if (e) {
                var n = o[t];
                return n || (n = parseInt(t, 10)),
                    function(t) {
                        return t.keyCode === n ? e.call(this, t) : void 0
                    }
            }
        }, n.key.keyCodes = o, n.debounce = function(e, t) {
            return e ? (t || (t = 300), r.debounce(e, t)) : void 0
        }, r.extend(n, e("./array-filters"))
    }, {
        "../util": 72,
        "./array-filters": 49
    }],
    51: [function(e, t, n) {
        var r = e("../util"),
            i = e("../directive"),
            o = e("../compiler");
        n._compile = function(e) {
            var t = this.$options,
                n = this._host;
            if (t._linkFn) this._initElement(e), this._unlinkFn = t._linkFn(this, e, n);
            else {
                var i = e;
                e = o.transclude(e, t), this._initElement(e);
                var s, a = o.compileRoot(e, t),
                    u = this.constructor;
                t._linkerCachable && (s = u.linker, s || (s = u.linker = o.compile(e, t)));
                var l = a(this, e),
                    c = s ? s(this, e) : o.compile(e, t)(this, e, n);
                this._unlinkFn = function() {
                    l(), c(!0)
                }, t.replace && r.replace(i, e)
            }
            return e
        }, n._initElement = function(e) {
            e instanceof DocumentFragment ? (this._isFragment = !0, this.$el = this._fragmentStart = e.firstChild, this._fragmentEnd = e.lastChild, 3 === this._fragmentStart.nodeType && (this._fragmentStart.data = this._fragmentEnd.data = ""), this._blockFragment = e) : this.$el = e, this.$el.__vue__ = this, this._callHook("beforeCompile")
        }, n._bindDir = function(e, t, n, r, o) {
            this._directives.push(new i(e, t, this, n, r, o))
        }, n._destroy = function(e, t) {
            if (!this._isBeingDestroyed) {
                this._callHook("beforeDestroy"), this._isBeingDestroyed = !0;
                var n, r = this.$parent;
                for (r && !r._isBeingDestroyed && r.$children.$remove(this), n = this.$children.length; n--;) this.$children[n].$destroy();
                for (this._propsUnlinkFn && this._propsUnlinkFn(), this._unlinkFn && this._unlinkFn(), n = this._watchers.length; n--;) this._watchers[n].teardown();
                this.$el && (this.$el.__vue__ = null);
                var i = this;
                e && this.$el ? this.$remove(function() {
                    i._cleanup()
                }) : t || this._cleanup()
            }
        }, n._cleanup = function() {
            this._data.__ob__ && this._data.__ob__.removeVm(this), this.$el = this.$parent = this.$root = this.$children = this._watchers = this._directives = null, this._isDestroyed = !0, this._callHook("destroyed"), this.$off()
        }
    }, {
        "../compiler": 21,
        "../directive": 24,
        "../util": 72
    }],
    52: [function(e, t, n) {
        (function(t) {
            function r(e, t, n) {
                if (n) {
                    var r, o, s, a;
                    for (o in n)
                        if (r = n[o], l.isArray(r))
                            for (s = 0, a = r.length; a > s; s++) i(e, t, o, r[s]);
                        else i(e, t, o, r)
                }
            }

            function i(e, n, r, o, s) {
                var a = typeof o;
                if ("function" === a) e[n](r, o, s);
                else if ("string" === a) {
                    var u = e.$options.methods,
                        c = u && u[o];
                    c ? e[n](r, c, s) : "production" !== t.env.NODE_ENV && l.warn('Unknown method: "' + o + '" when registering callback for ' + n + ': "' + r + '".')
                } else o && "object" === a && i(e, n, r, o.handler, o)
            }

            function o() {
                this._isAttached || (this._isAttached = !0, this.$children.forEach(s))
            }

            function s(e) {
                !e._isAttached && c(e.$el) && e._callHook("attached")
            }

            function a() {
                this._isAttached && (this._isAttached = !1, this.$children.forEach(u))
            }

            function u(e) {
                e._isAttached && !c(e.$el) && e._callHook("detached")
            }
            var l = e("../util"),
                c = l.inDoc;
            n._initEvents = function() {
                var e = this.$options;
                r(this, "$on", e.events), r(this, "$watch", e.watch)
            }, n._initDOMHooks = function() {
                this.$on("hook:attached", o), this.$on("hook:detached", a)
            }, n._callHook = function(e) {
                var t = this.$options[e];
                if (t)
                    for (var n = 0, r = t.length; r > n; n++) t[n].call(this);
                this.$emit("hook:" + e)
            }
        }).call(this, e("_process"))
    }, {
        "../util": 72,
        _process: 8
    }],
    53: [function(e, t, n) {
        var r = e("../util").mergeOptions;
        n._init = function(e) {
            e = e || {}, this.$el = null, this.$parent = e._parent, this.$root = e._root || this, this.$children = [], this.$ = {}, this.$$ = {}, this._watchers = [], this._directives = [], this._childCtors = {}, this._isVue = !0, this._events = {}, this._eventsCount = {}, this._eventCancelled = !1, this._isFragment = !1, this._fragmentStart = this._fragmentEnd = null, this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = !1, this._unlinkFn = null, this._context = e._context || e._parent, this.$parent && this.$parent.$children.push(this), this._reused = !1, this._staggerOp = null, e = this.$options = r(this.constructor.options, e, this), this._data = {}, this._initScope(), this._initEvents(), this._callHook("created"), e.el && this.$mount(e.el)
        }
    }, {
        "../util": 72
    }],
    54: [function(e, t, n) {
        (function(t) {
            var r = e("../util");
            n._applyFilters = function(e, n, i, o) {
                var s, a, u, l, c, d, h, f, p;
                for (d = 0, h = i.length; h > d; d++)
                    if (s = i[d], a = r.resolveAsset(this.$options, "filters", s.name), "production" !== t.env.NODE_ENV && r.assertAsset(a, "filter", s.name), a && (a = o ? a.write : a.read || a, "function" == typeof a)) {
                        if (u = o ? [e, n] : [e], c = o ? 2 : 1, s.args)
                            for (f = 0, p = s.args.length; p > f; f++) l = s.args[f], u[f + c] = l.dynamic ? this.$get(l.value) : l.value;
                        e = a.apply(this, u)
                    }
                return e
            }, n._resolveComponent = function(e, n) {
                var i = r.resolveAsset(this.$options, "components", e);
                if ("production" !== t.env.NODE_ENV && r.assertAsset(i, "component", e), i)
                    if (i.options) n(i);
                    else if (i.resolved) n(i.resolved);
                else if (i.requested) i.pendingCallbacks.push(n);
                else {
                    i.requested = !0;
                    var o = i.pendingCallbacks = [n];
                    i(function(e) {
                        r.isPlainObject(e) && (e = r.Vue.extend(e)), i.resolved = e;
                        for (var t = 0, n = o.length; n > t; t++) o[t](e)
                    }, function(n) {
                        "production" !== t.env.NODE_ENV && r.warn("Failed to resolve async component: " + e + ". " + (n ? "\nReason: " + n : ""))
                    })
                }
            }
        }).call(this, e("_process"))
    }, {
        "../util": 72,
        _process: 8
    }],
    55: [function(e, t, n) {
        (function(t) {
            function r() {}

            function i(e, t) {
                var n = new l(t, e, null, {
                    lazy: !0
                });
                return function() {
                    return n.dirty && n.evaluate(), u.target && n.depend(), n.value
                }
            }
            var o = e("../util"),
                s = e("../compiler"),
                a = e("../observer"),
                u = e("../observer/dep"),
                l = e("../watcher");
            n._initScope = function() {
                this._initProps(), this._initMeta(), this._initMethods(), this._initData(), this._initComputed()
            }, n._initProps = function() {
                var e = this.$options,
                    n = e.el,
                    r = e.props;
                r && !n && "production" !== t.env.NODE_ENV && o.warn("Props will not be compiled if no `el` option is provided at instantiation."), n = e.el = o.query(n), this._propsUnlinkFn = n && 1 === n.nodeType && r ? s.compileAndLinkProps(this, n, r) : null
            }, n._initData = function() {
                var e = this._data,
                    t = this.$options.data,
                    n = t && t();
                if (n) {
                    this._data = n;
                    for (var r in e) null === this._props[r].raw && n.hasOwnProperty(r) || n.$set(r, e[r])
                }
                var i, s, u = this._data,
                    l = Object.keys(u);
                for (i = l.length; i--;) s = l[i], o.isReserved(s) || this._proxy(s);
                a.create(u, this)
            }, n._setData = function(e) {
                e = e || {};
                var t = this._data;
                this._data = e;
                var n, r, i, s = this.$options.props;
                if (s)
                    for (i = s.length; i--;) r = s[i].name, "$data" === r || e.hasOwnProperty(r) || e.$set(r, t[r]);
                for (n = Object.keys(t), i = n.length; i--;) r = n[i], o.isReserved(r) || r in e || this._unproxy(r);
                for (n = Object.keys(e), i = n.length; i--;) r = n[i],
                    this.hasOwnProperty(r) || o.isReserved(r) || this._proxy(r);
                t.__ob__.removeVm(this), a.create(e, this), this._digest()
            }, n._proxy = function(e) {
                var t = this;
                Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return t._data[e]
                    },
                    set: function(n) {
                        t._data[e] = n
                    }
                })
            }, n._unproxy = function(e) {
                delete this[e]
            }, n._digest = function() {
                for (var e = this._watchers.length; e--;) this._watchers[e].update(!0);
                var t = this.$children;
                for (e = t.length; e--;) {
                    var n = t[e];
                    n.$options.inherit && n._digest()
                }
            }, n._initComputed = function() {
                var e = this.$options.computed;
                if (e)
                    for (var t in e) {
                        var n = e[t],
                            s = {
                                enumerable: !0,
                                configurable: !0
                            };
                        "function" == typeof n ? (s.get = i(n, this), s.set = r) : (s.get = n.get ? n.cache !== !1 ? i(n.get, this) : o.bind(n.get, this) : r, s.set = n.set ? o.bind(n.set, this) : r), Object.defineProperty(this, t, s)
                    }
            }, n._initMethods = function() {
                var e = this.$options.methods;
                if (e)
                    for (var t in e) this[t] = o.bind(e[t], this)
            }, n._initMeta = function() {
                var e = this.$options._meta;
                if (e)
                    for (var t in e) this._defineMeta(t, e[t])
            }, n._defineMeta = function(e, t) {
                var n = new u;
                Object.defineProperty(this, e, {
                    get: function() {
                        return u.target && n.depend(), t
                    },
                    set: function(e) {
                        e !== t && (t = e, n.notify())
                    }
                })
            }
        }).call(this, e("_process"))
    }, {
        "../compiler": 21,
        "../observer": 58,
        "../observer/dep": 57,
        "../util": 72,
        "../watcher": 76,
        _process: 8
    }],
    56: [function(e, t, n) {
        var r = e("../util"),
            i = Array.prototype,
            o = Object.create(i);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
            var t = i[e];
            r.define(o, e, function() {
                for (var n = arguments.length, r = new Array(n); n--;) r[n] = arguments[n];
                var i, o, s = t.apply(this, r),
                    a = this.__ob__;
                switch (e) {
                    case "push":
                        i = r;
                        break;
                    case "unshift":
                        i = r;
                        break;
                    case "splice":
                        i = r.slice(2), o = s;
                        break;
                    case "pop":
                    case "shift":
                        o = [s]
                }
                return i && a.observeArray(i), o && a.unobserveArray(o), a.notify(), s
            })
        }), r.define(i, "$set", function(e, t) {
            return e >= this.length && (this.length = e + 1), this.splice(e, 1, t)[0]
        }), r.define(i, "$remove", function(e) {
            return this.length ? ("number" != typeof e && (e = r.indexOf(this, e)), e > -1 ? this.splice(e, 1) : void 0) : void 0
        }), t.exports = o
    }, {
        "../util": 72
    }],
    57: [function(e, t, n) {
        function r() {
            this.id = o++, this.subs = []
        }
        var i = e("../util"),
            o = 0;
        r.target = null, r.prototype.addSub = function(e) {
            this.subs.push(e)
        }, r.prototype.removeSub = function(e) {
            this.subs.$remove(e)
        }, r.prototype.depend = function() {
            r.target.addDep(this)
        }, r.prototype.notify = function() {
            for (var e = i.toArray(this.subs), t = 0, n = e.length; n > t; t++) e[t].update()
        }, t.exports = r
    }, {
        "../util": 72
    }],
    58: [function(e, t, n) {
        function r(e) {
            if (this.value = e, this.dep = new u, s.define(e, "__ob__", this), s.isArray(e)) {
                var t = a.proto && s.hasProto ? i : o;
                t(e, l, c), this.observeArray(e)
            } else this.walk(e)
        }

        function i(e, t) {
            e.__proto__ = t
        }

        function o(e, t, n) {
            for (var r, i = n.length; i--;) r = n[i], s.define(e, r, t[r])
        }
        var s = e("../util"),
            a = e("../config"),
            u = e("./dep"),
            l = e("./array"),
            c = Object.getOwnPropertyNames(l);
        e("./object"), r.create = function(e, t) {
            var n;
            return e && e.hasOwnProperty("__ob__") && e.__ob__ instanceof r ? n = e.__ob__ : !s.isArray(e) && !s.isPlainObject(e) || Object.isFrozen(e) || e._isVue || (n = new r(e)), n && t && n.addVm(t), n
        }, r.prototype.walk = function(e) {
            for (var t = Object.keys(e), n = t.length; n--;) this.convert(t[n], e[t[n]])
        }, r.prototype.observe = function(e) {
            return r.create(e)
        }, r.prototype.observeArray = function(e) {
            for (var t = e.length; t--;) {
                var n = this.observe(e[t]);
                n && (n.parents || (n.parents = [])).push(this)
            }
        }, r.prototype.unobserveArray = function(e) {
            for (var t = e.length; t--;) {
                var n = e[t] && e[t].__ob__;
                n && n.parents.$remove(this)
            }
        }, r.prototype.notify = function() {
            this.dep.notify();
            var e = this.parents;
            if (e)
                for (var t = e.length; t--;) e[t].notify()
        }, r.prototype.convert = function(e, t) {
            var n = this,
                r = n.observe(t),
                i = new u;
            Object.defineProperty(n.value, e, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return u.target && (i.depend(), r && r.dep.depend()), t
                },
                set: function(e) {
                    e !== t && (t = e, r = n.observe(e), i.notify())
                }
            })
        }, r.prototype.addVm = function(e) {
            (this.vms || (this.vms = [])).push(e)
        }, r.prototype.removeVm = function(e) {
            this.vms.$remove(e)
        }, t.exports = r
    }, {
        "../config": 23,
        "../util": 72,
        "./array": 56,
        "./dep": 57,
        "./object": 59
    }],
    59: [function(e, t, n) {
        var r = e("../util"),
            i = Object.prototype;
        r.define(i, "$add", function(e, t) {
            if (!this.hasOwnProperty(e)) {
                var n = this.__ob__;
                if (!n || r.isReserved(e)) return void(this[e] = t);
                if (n.convert(e, t), n.notify(), n.vms)
                    for (var i = n.vms.length; i--;) {
                        var o = n.vms[i];
                        o._proxy(e), o._digest()
                    }
            }
        }), r.define(i, "$set", function(e, t) {
            this.$add(e, t), this[e] = t
        }), r.define(i, "$delete", function(e) {
            if (this.hasOwnProperty(e)) {
                delete this[e];
                var t = this.__ob__;
                if (t && !r.isReserved(e) && (t.notify(), t.vms))
                    for (var n = t.vms.length; n--;) {
                        var i = t.vms[n];
                        i._unproxy(e), i._digest()
                    }
            }
        })
    }, {
        "../util": 72
    }],
    60: [function(e, t, n) {
        function r() {
            y.raw = s.slice(m, u).trim(), void 0 === y.expression ? y.expression = s.slice(g, u).trim() : _ !== m && i(), (0 === u || y.expression) && v.push(y)
        }

        function i() {
            var e, t = s.slice(_, u).trim();
            if (t) {
                e = {};
                var n = t.match(D);
                e.name = n[0], n.length > 1 && (e.args = n.slice(1).map(o))
            }
            e && (y.filters = y.filters || []).push(e), _ = u + 1
        }

        function o(e) {
            var t = $.test(e) ? e : w.stripQuotes(e),
                n = t === !1;
            return {
                value: n ? e : t,
                dynamic: n
            }
        }
        var s, a, u, l, c, d, h, f, p, m, g, v, y, _, b, w = e("../util"),
            x = e("../cache"),
            k = new x(1e3),
            C = /^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/,
            D = /[^\s'"]+|'[^']*'|"[^"]*"/g,
            $ = /^in$|^-?\d+/;
        n.parse = function(e) {
            var t = k.get(e);
            if (t) return t;
            for (s = e, c = d = !1, h = f = p = m = g = 0, _ = 0, v = [], y = {}, b = null, u = 0, l = s.length; l > u; u++)
                if (a = s.charCodeAt(u), c) 39 === a && (c = !c);
                else if (d) 34 === a && (d = !d);
            else if (44 !== a || p || h || f)
                if (58 !== a || y.expression || y.arg)
                    if (124 === a && 124 !== s.charCodeAt(u + 1) && 124 !== s.charCodeAt(u - 1)) void 0 === y.expression ? (_ = u + 1, y.expression = s.slice(g, u).trim()) : i();
                    else switch (a) {
                        case 34:
                            d = !0;
                            break;
                        case 39:
                            c = !0;
                            break;
                        case 40:
                            p++;
                            break;
                        case 41:
                            p--;
                            break;
                        case 91:
                            f++;
                            break;
                        case 93:
                            f--;
                            break;
                        case 123:
                            h++;
                            break;
                        case 125:
                            h--
                    } else b = s.slice(m, u).trim(), C.test(b) && (g = u + 1, y.arg = w.stripQuotes(b) || b);
            else r(), y = {}, m = g = _ = u + 1;
            return (0 === u || m !== u) && r(), k.put(e, v), v
        }
    }, {
        "../cache": 18,
        "../util": 72
    }],
    61: [function(e, t, n) {
        (function(t) {
            function r(e, t) {
                var n = $.length;
                return $[n] = t ? e.replace(b, "\\n") : e, '"' + n + '"'
            }

            function i(e) {
                var t = e.charAt(0),
                    n = e.slice(1);
                return g.test(n) ? e : (n = n.indexOf('"') > -1 ? n.replace(x, o) : n, t + "scope." + n)
            }

            function o(e, t) {
                return $[t]
            }

            function s(e, n) {
                y.test(e) && "production" !== t.env.NODE_ENV && d.warn("Avoid using reserved keywords in expression: " + e), $.length = 0;
                var s = e.replace(w, r).replace(_, "");
                s = (" " + s).replace(C, i).replace(x, o);
                var a = u(s);
                return a ? {
                    get: a,
                    body: s,
                    set: n ? l(s) : null
                } : void 0
            }

            function a(e) {
                var t, n;
                return e.indexOf("[") < 0 ? (n = e.split("."), n.raw = e, t = h.compileGetter(n)) : (n = h.parse(e), t = n.get), {
                    get: t,
                    set: function(e, t) {
                        h.set(e, n, t)
                    }
                }
            }

            function u(e) {
                try {
                    return new Function("scope", "return " + e + ";")
                } catch (n) {
                    "production" !== t.env.NODE_ENV && d.warn("Invalid expression. Generated function body: " + e)
                }
            }

            function l(e) {
                try {
                    return new Function("scope", "value", e + "=value;")
                } catch (n) {
                    "production" !== t.env.NODE_ENV && d.warn("Invalid setter function body: " + e)
                }
            }

            function c(e) {
                e.set || (e.set = l(e.body))
            }
            var d = e("../util"),
                h = e("./path"),
                f = e("../cache"),
                p = new f(1e3),
                m = "Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",
                g = new RegExp("^(" + m.replace(/,/g, "\\b|") + "\\b)"),
                v = "break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,proctected,static,interface,private,public",
                y = new RegExp("^(" + v.replace(/,/g, "\\b|") + "\\b)"),
                _ = /\s/g,
                b = /\n/g,
                w = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g,
                x = /"(\d+)"/g,
                k = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,
                C = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g,
                D = /^(true|false)$/,
                $ = [];
            n.parse = function(e, t) {
                e = e.trim();
                var r = p.get(e);
                if (r) return t && c(r), r;
                var i = n.isSimplePath(e) ? a(e) : s(e, t);
                return p.put(e, i), i
            }, n.isSimplePath = function(e) {
                return k.test(e) && !D.test(e) && "Math." !== e.slice(0, 5)
            }
        }).call(this, e("_process"))
    }, {
        "../cache": 18,
        "../util": 72,
        "./path": 62,
        _process: 8
    }],
    62: [function(e, t, n) {
        (function(t) {
            function r(e) {
                if (void 0 === e) return "eof";
                var t = e.charCodeAt(0);
                switch (t) {
                    case 91:
                    case 93:
                    case 46:
                    case 34:
                    case 39:
                    case 48:
                        return e;
                    case 95:
                    case 36:
                        return "ident";
                    case 32:
                    case 9:
                    case 10:
                    case 13:
                    case 160:
                    case 65279:
                    case 8232:
                    case 8233:
                        return "ws"
                }
                return t >= 97 && 122 >= t || t >= 65 && 90 >= t ? "ident" : t >= 49 && 57 >= t ? "number" : "else"
            }

            function i(e) {
                function t() {
                    var t = e[p + 1];
                    return m === b && "'" === t || m === w && '"' === t ? (p++, i = t, g[d](), !0) : void 0
                }
                var n, i, o, s, a, u, l, c = [],
                    p = -1,
                    m = f,
                    g = [];
                for (g[h] = function() {
                        void 0 !== o && (c.push(o), o = void 0)
                    }, g[d] = function() {
                        void 0 === o ? o = i : o += i
                    }; null != m;)
                    if (p++, n = e[p], "\\" !== n || !t()) {
                        if (s = r(n), l = $[m], a = l[s] || l["else"] || D, a === D) return;
                        if (m = a[0], u = g[a[1]], u && (i = a[2], i = void 0 === i ? n : "*" === i ? i + n : i, u()), m === C) return c.raw = e, c
                    }
            }

            function o(e) {
                return c.test(e) ? "." + e : +e === e >>> 0 ? "[" + e + "]" : "*" === e.charAt(0) ? "[o" + o(e.slice(1)) + "]" : '["' + e.replace(/"/g, '\\"') + '"]'
            }

            function s(e) {
                "production" !== t.env.NODE_ENV && a.warn('You are setting a non-existent path "' + e.raw + '" on a vm instance. Consider pre-initializing the property with the "data" option for more reliable reactivity and better performance.')
            }
            var a = e("../util"),
                u = e("../cache"),
                l = new u(1e3),
                c = n.identRE = /^[$_a-zA-Z]+[\w$]*$/,
                d = 0,
                h = 1,
                f = 0,
                p = 1,
                m = 2,
                g = 3,
                v = 4,
                y = 5,
                _ = 6,
                b = 7,
                w = 8,
                x = 9,
                k = 10,
                C = 11,
                D = 12,
                $ = [];
            $[f] = {
                ws: [f],
                ident: [g, d],
                "[": [v],
                eof: [C]
            }, $[p] = {
                ws: [p],
                ".": [m],
                "[": [v],
                eof: [C]
            }, $[m] = {
                ws: [m],
                ident: [g, d]
            }, $[g] = {
                ident: [g, d],
                0: [g, d],
                number: [g, d],
                ws: [p, h],
                ".": [m, h],
                "[": [v, h],
                eof: [C, h]
            }, $[v] = {
                ws: [v],
                0: [y, d],
                number: [_, d],
                "'": [b, d, ""],
                '"': [w, d, ""],
                ident: [x, d, "*"]
            }, $[y] = {
                ws: [k, h],
                "]": [p, h]
            }, $[_] = {
                0: [_, d],
                number: [_, d],
                ws: [k],
                "]": [p, h]
            }, $[b] = {
                "'": [k],
                eof: D,
                "else": [b, d]
            }, $[w] = {
                '"': [k],
                eof: D,
                "else": [w, d]
            }, $[x] = {
                ident: [x, d],
                0: [x, d],
                number: [x, d],
                ws: [k],
                "]": [p, h]
            }, $[k] = {
                ws: [k],
                "]": [p, h]
            }, n.compileGetter = function(e) {
                var t = "return o" + e.map(o).join("");
                return new Function("o", t)
            }, n.parse = function(e) {
                var t = l.get(e);
                return t || (t = i(e), t && (t.get = n.compileGetter(t), l.put(e, t))), t
            }, n.get = function(e, t) {
                return t = n.parse(t), t ? t.get(e) : void 0
            }, n.set = function(e, t, r) {
                var i = e;
                if ("string" == typeof t && (t = n.parse(t)), !t || !a.isObject(e)) return !1;
                for (var o, u, l = 0, c = t.length; c > l; l++) o = e, u = t[l], "*" === u.charAt(0) && (u = i[u.slice(1)]), c - 1 > l ? (e = e[u], a.isObject(e) || (s(t), e = {}, o.$add(u, e))) : a.isArray(e) ? e.$set(u, r) : u in e ? e[u] = r : (s(t), e.$add(u, r));
                return !0
            }
        }).call(this, e("_process"))
    }, {
        "../cache": 18,
        "../util": 72,
        _process: 8
    }],
    63: [function(e, t, n) {
        function r(e) {
            return s.isTemplate(e) && e.content instanceof DocumentFragment
        }

        function i(e) {
            var t = u.get(e);
            if (t) return t;
            var n = document.createDocumentFragment(),
                r = e.match(d),
                i = h.test(e);
            if (r || i) {
                var o = r && r[1],
                    s = c[o] || c._default,
                    a = s[0],
                    l = s[1],
                    f = s[2],
                    p = document.createElement("div");
                for (p.innerHTML = l + e.trim() + f; a--;) p = p.lastChild;
                for (var m; m = p.firstChild;) n.appendChild(m)
            } else n.appendChild(document.createTextNode(e));
            return u.put(e, n), n
        }

        function o(e) {
            if (r(e)) return s.trimNode(e.content), e.content;
            if ("SCRIPT" === e.tagName) return i(e.textContent);
            for (var t, o = n.clone(e), a = document.createDocumentFragment(); t = o.firstChild;) a.appendChild(t);
            return s.trimNode(a), a
        }
        var s = e("../util"),
            a = e("../cache"),
            u = new a(1e3),
            l = new a(1e3),
            c = {
                _default: [0, "", ""],
                legend: [1, "<fieldset>", "</fieldset>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]
            };
        c.td = c.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], c.option = c.optgroup = [1, '<select multiple="multiple">', "</select>"], c.thead = c.tbody = c.colgroup = c.caption = c.tfoot = [1, "<table>", "</table>"], c.g = c.defs = c.symbol = c.use = c.image = c.text = c.circle = c.ellipse = c.line = c.path = c.polygon = c.polyline = c.rect = [1, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">', "</svg>"];
        var d = /<([\w:]+)/,
            h = /&\w+;|&#\d+;|&#x[\dA-F]+;/,
            f = function() {
                if (s.inBrowser) {
                    var e = document.createElement("div");
                    return e.innerHTML = "<template>1</template>", !e.cloneNode(!0).firstChild.innerHTML
                }
                return !1
            }(),
            p = function() {
                if (s.inBrowser) {
                    var e = document.createElement("textarea");
                    return e.placeholder = "t", "t" === e.cloneNode(!0).value
                }
                return !1
            }();
        n.clone = function(e) {
            if (!e.querySelectorAll) return e.cloneNode();
            var t, i, o, s = e.cloneNode(!0);
            if (f) {
                var a = s;
                if (r(e) && (e = e.content, a = s.content), i = e.querySelectorAll("template"), i.length)
                    for (o = a.querySelectorAll("template"), t = o.length; t--;) o[t].parentNode.replaceChild(n.clone(i[t]), o[t])
            }
            if (p)
                if ("TEXTAREA" === e.tagName) s.value = e.value;
                else if (i = e.querySelectorAll("textarea"), i.length)
                for (o = s.querySelectorAll("textarea"), t = o.length; t--;) o[t].value = i[t].value;
            return s
        }, n.parse = function(e, t, r) {
            var a, u;
            return e instanceof DocumentFragment ? (s.trimNode(e), t ? n.clone(e) : e) : ("string" == typeof e ? r || "#" !== e.charAt(0) ? u = i(e) : (u = l.get(e), u || (a = document.getElementById(e.slice(1)), a && (u = o(a), l.put(e, u)))) : e.nodeType && (u = o(e)), u && t ? n.clone(u) : u)
        }
    }, {
        "../cache": 18,
        "../util": 72
    }],
    64: [function(e, t, n) {
        function r(e) {
            return e.replace(m, "\\$&")
        }

        function i() {
            f._delimitersChanged = !1;
            var e = f.delimiters[0],
                t = f.delimiters[1];
            c = e.charAt(0), d = t.charAt(t.length - 1);
            var n = r(c),
                i = r(d),
                o = r(e),
                s = r(t);
            u = new RegExp(n + "?" + o + "(.+?)" + s + i + "?", "g"), l = new RegExp("^" + n + o + ".*" + s + i + "$"), a = new h(1e3)
        }

        function o(e, t, n) {
            return e.tag ? t && e.oneTime ? '"' + t.$eval(e.value) + '"' : s(e.value, n) : '"' + e.value + '"'
        }

        function s(e, t) {
            if (g.test(e)) {
                var n = p.parse(e)[0];
                return n.filters ? "this._applyFilters(" + n.expression + ",null," + JSON.stringify(n.filters) + ",false)" : "(" + e + ")"
            }
            return t ? e : "(" + e + ")"
        }
        var a, u, l, c, d, h = e("../cache"),
            f = e("../config"),
            p = e("./directive"),
            m = /[-.*+?^${}()|[\]\/\\]/g;
        n.parse = function(e) {
            f._delimitersChanged && i();
            var t = a.get(e);
            if (t) return t;
            if (e = e.replace(/\n/g, ""), !u.test(e)) return null;
            for (var n, r, o, s, c, d, h = [], p = u.lastIndex = 0; n = u.exec(e);) r = n.index, r > p && h.push({
                value: e.slice(p, r)
            }), s = n[1].charCodeAt(0), c = 42 === s, d = 64 === s, o = c || d ? n[1].slice(1) : n[1], h.push({
                tag: !0,
                value: o.trim(),
                html: l.test(n[0]),
                oneTime: c,
                twoWay: d
            }), p = r + n[0].length;
            return p < e.length && h.push({
                value: e.slice(p)
            }), a.put(e, h), h
        }, n.tokensToExp = function(e, t) {
            return e.length > 1 ? e.map(function(e) {
                return o(e, t)
            }).join("+") : o(e[0], t, !0)
        };
        var g = /[^|]\|[^|]/
    }, {
        "../cache": 18,
        "../config": 23,
        "./directive": 60
    }],
    65: [function(e, t, n) {
        var r = e("../util");
        n.append = function(e, t, n, r) {
            i(e, 1, function() {
                t.appendChild(e)
            }, n, r)
        }, n.before = function(e, t, n, o) {
            i(e, 1, function() {
                r.before(e, t)
            }, n, o)
        }, n.remove = function(e, t, n) {
            i(e, -1, function() {
                r.remove(e)
            }, t, n)
        }, n.removeThenAppend = function(e, t, n, r) {
            i(e, -1, function() {
                t.appendChild(e)
            }, n, r)
        }, n.blockAppend = function(e, t, i) {
            for (var o = r.toArray(e.childNodes), s = 0, a = o.length; a > s; s++) n.before(o[s], t, i)
        }, n.blockRemove = function(e, t, r) {
            for (var i, o = e.nextSibling; o !== t;) i = o.nextSibling, n.remove(o, r), o = i
        };
        var i = n.apply = function(e, t, n, i, o) {
            var s = e.__v_trans;
            if (!s || !s.hooks && !r.transitionEndEvent || !i._isCompiled || i.$parent && !i.$parent._isCompiled) return n(), void(o && o());
            var a = t > 0 ? "enter" : "leave";
            s[a](n, o)
        }
    }, {
        "../util": 72
    }],
    66: [function(e, t, n) {
        function r() {
            for (var e = document.documentElement.offsetHeight, t = 0; t < o.length; t++) o[t]();
            return o = [], s = !1, e
        }
        var i = e("../util"),
            o = [],
            s = !1;
        n.push = function(e) {
            o.push(e), s || (s = !0, i.nextTick(r))
        }
    }, {
        "../util": 72
    }],
    67: [function(e, t, n) {
        function r(e, t, n, r) {
            this.id = m++, this.el = e, this.enterClass = t + "-enter", this.leaveClass = t + "-leave", this.hooks = n, this.vm = r, this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null, this.justEntered = !1, this.entered = this.left = !1, this.typeCache = {};
            var i = this;
            ["enterNextTick", "enterDone", "leaveNextTick", "leaveDone"].forEach(function(e) {
                i[e] = o.bind(i[e], i)
            })
        }

        function i(e) {
            return "none" === e.style.display || "hidden" === e.style.visibility || e.hidden
        }
        var o = e("../util"),
            s = e("./queue"),
            a = o.addClass,
            u = o.removeClass,
            l = o.transitionEndEvent,
            c = o.animationEndEvent,
            d = o.transitionProp + "Duration",
            h = o.animationProp + "Duration",
            f = 1,
            p = 2,
            m = 0,
            g = r.prototype;
        g.enter = function(e, t) {
            this.cancelPending(), this.callHook("beforeEnter"), this.cb = t, a(this.el, this.enterClass), e(), this.entered = !1, this.callHookWithCb("enter"), this.entered || (this.cancel = this.hooks && this.hooks.enterCancelled, s.push(this.enterNextTick))
        }, g.enterNextTick = function() {
            this.justEntered = !0, o.nextTick(function() {
                this.justEntered = !1
            }, this);
            var e = this.enterDone,
                t = this.getCssTransitionType(this.enterClass);
            this.pendingJsCb ? t === f && u(this.el, this.enterClass) : t === f ? (u(this.el, this.enterClass), this.setupCssCb(l, e)) : t === p ? this.setupCssCb(c, e) : e()
        }, g.enterDone = function() {
            this.entered = !0, this.cancel = this.pendingJsCb = null, u(this.el, this.enterClass), this.callHook("afterEnter"), this.cb && this.cb()
        }, g.leave = function(e, t) {
            this.cancelPending(), this.callHook("beforeLeave"), this.op = e, this.cb = t, a(this.el, this.leaveClass), this.left = !1, this.callHookWithCb("leave"), this.left || (this.cancel = this.hooks && this.hooks.leaveCancelled, this.op && !this.pendingJsCb && (this.justEntered ? this.leaveDone() : s.push(this.leaveNextTick)))
        }, g.leaveNextTick = function() {
            var e = this.getCssTransitionType(this.leaveClass);
            if (e) {
                var t = e === f ? l : c;
                this.setupCssCb(t, this.leaveDone)
            } else this.leaveDone()
        }, g.leaveDone = function() {
            this.left = !0, this.cancel = this.pendingJsCb = null, this.op(), u(this.el, this.leaveClass), this.callHook("afterLeave"), this.cb && this.cb(), this.op = null
        }, g.cancelPending = function() {
            this.op = this.cb = null;
            var e = !1;
            this.pendingCssCb && (e = !0, o.off(this.el, this.pendingCssEvent, this.pendingCssCb), this.pendingCssEvent = this.pendingCssCb = null), this.pendingJsCb && (e = !0, this.pendingJsCb.cancel(), this.pendingJsCb = null), e && (u(this.el, this.enterClass), u(this.el, this.leaveClass)), this.cancel && (this.cancel.call(this.vm, this.el), this.cancel = null)
        }, g.callHook = function(e) {
            this.hooks && this.hooks[e] && this.hooks[e].call(this.vm, this.el)
        }, g.callHookWithCb = function(e) {
            var t = this.hooks && this.hooks[e];
            t && (t.length > 1 && (this.pendingJsCb = o.cancellable(this[e + "Done"])), t.call(this.vm, this.el, this.pendingJsCb))
        }, g.getCssTransitionType = function(e) {
            if (!(!l || document.hidden || this.hooks && this.hooks.css === !1 || i(this.el))) {
                var t = this.typeCache[e];
                if (t) return t;
                var n = this.el.style,
                    r = window.getComputedStyle(this.el),
                    o = n[d] || r[d];
                if (o && "0s" !== o) t = f;
                else {
                    var s = n[h] || r[h];
                    s && "0s" !== s && (t = p)
                }
                return t && (this.typeCache[e] = t), t
            }
        }, g.setupCssCb = function(e, t) {
            this.pendingCssEvent = e;
            var n = this,
                r = this.el,
                i = this.pendingCssCb = function(s) {
                    s.target === r && (o.off(r, e, i), n.pendingCssEvent = n.pendingCssCb = null, !n.pendingJsCb && t && t())
                };
            o.on(r, e, i)
        }, t.exports = r
    }, {
        "../util": 72,
        "./queue": 66
    }],
    68: [function(e, t, n) {
        (function(t) {
            function r(e) {
                return e ? e.charAt(0).toUpperCase() + e.slice(1) : "custom type"
            }

            function i(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            }
            var o = e("./index");
            n.commonTagRE = /^(div|p|span|img|a|br|ul|ol|li|h1|h2|h3|h4|h5|code|pre)$/, n.checkComponent = function(e, t) {
                var r = e.tagName.toLowerCase();
                if ("component" === r) {
                    var i = e.getAttribute("is");
                    return e.removeAttribute("is"), i
                }
                return !n.commonTagRE.test(r) && o.resolveAsset(t, "components", r) ? r : (r = o.attr(e, "component")) ? r : void 0
            }, n.initProp = function(e, t, r) {
                if (n.assertProp(t, r)) {
                    var i = t.path;
                    i in e ? o.define(e, i, r, !0) : e[i] = r, e._data[i] = r
                }
            }, n.assertProp = function(e, n) {
                if (null === e.raw && !e.required) return !0;
                var s, a = e.options,
                    u = a.type,
                    l = !0;
                if (u && (u === String ? (s = "string", l = typeof n === s) : u === Number ? (s = "number", l = "number" == typeof n) : u === Boolean ? (s = "boolean", l = "boolean" == typeof n) : u === Function ? (s = "function", l = "function" == typeof n) : u === Object ? (s = "object", l = o.isPlainObject(n)) : u === Array ? (s = "array", l = o.isArray(n)) : l = n instanceof u), !l) return "production" !== t.env.NODE_ENV && o.warn("Invalid prop: type check failed for " + e.path + '="' + e.raw + '". Expected ' + r(s) + ", got " + i(n) + "."), !1;
                var c = a.validator;
                return c && !c.call(null, n) ? ("production" !== t.env.NODE_ENV && o.warn("Invalid prop: custom validator check failed for " + e.path + '="' + e.raw + '"'), !1) : !0
            }
        }).call(this, e("_process"))
    }, {
        "./index": 72,
        _process: 8
    }],
    69: [function(e, t, n) {
        (function(t) {
            if ("production" !== t.env.NODE_ENV) {
                var r = e("../config"),
                    i = "undefined" != typeof console;
                n.log = function(e) {
                    i && r.debug && console.log("[Vue info]: " + e)
                }, n.warn = function(e, t) {
                    !i || r.silent && !r.debug || (console.warn("[Vue warn]: " + e), r.debug && console.warn((t || new Error("Warning Stack Trace")).stack))
                }, n.assertAsset = function(e, t, r) {
                    if ("directive" === t) {
                        if ("with" === r) return void n.warn("v-with has been deprecated in ^0.12.0. Use props instead.");
                        if ("events" === r) return void n.warn("v-events has been deprecated in ^0.12.0. Pass down methods as callback props instead.")
                    }
                    e || n.warn("Failed to resolve " + t + ": " + r)
                }
            }
        }).call(this, e("_process"))
    }, {
        "../config": 23,
        _process: 8
    }],
    70: [function(e, t, n) {
        (function(t) {
            function r(e, t) {
                t && 3 === t.nodeType && !t.data.trim() && e.removeChild(t)
            }
            var i = e("./index"),
                o = e("../config");
            n.query = function(e) {
                if ("string" == typeof e) {
                    var n = e;
                    e = document.querySelector(e), e || "production" !== t.env.NODE_ENV && i.warn("Cannot find element: " + n)
                }
                return e
            }, n.inDoc = function(e) {
                var t = document.documentElement,
                    n = e && e.parentNode;
                return t === e || t === n || !(!n || 1 !== n.nodeType || !t.contains(n))
            }, n.attr = function(e, t) {
                t = o.prefix + t;
                var n = e.getAttribute(t);
                return null !== n && e.removeAttribute(t), n
            }, n.before = function(e, t) {
                t.parentNode.insertBefore(e, t)
            }, n.after = function(e, t) {
                t.nextSibling ? n.before(e, t.nextSibling) : t.parentNode.appendChild(e)
            }, n.remove = function(e) {
                e.parentNode.removeChild(e)
            }, n.prepend = function(e, t) {
                t.firstChild ? n.before(e, t.firstChild) : t.appendChild(e)
            }, n.replace = function(e, t) {
                var n = e.parentNode;
                n && n.replaceChild(t, e)
            }, n.on = function(e, t, n) {
                e.addEventListener(t, n)
            }, n.off = function(e, t, n) {
                e.removeEventListener(t, n)
            }, n.addClass = function(e, t) {
                if (e.classList) e.classList.add(t);
                else {
                    var n = " " + (e.getAttribute("class") || "") + " ";
                    n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
                }
            }, n.removeClass = function(e, t) {
                if (e.classList) e.classList.remove(t);
                else {
                    for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                    e.setAttribute("class", n.trim())
                }
            }, n.extractContent = function(e, t) {
                var r, i;
                if (n.isTemplate(e) && e.content instanceof DocumentFragment && (e = e.content), e.hasChildNodes())
                    for (n.trimNode(e), i = t ? document.createDocumentFragment() : document.createElement("div"); r = e.firstChild;) i.appendChild(r);
                return i
            }, n.trimNode = function(e) {
                r(e, e.firstChild), r(e, e.lastChild)
            }, n.isTemplate = function(e) {
                return e.tagName && "template" === e.tagName.toLowerCase()
            }, n.createAnchor = function(e, t) {
                return o.debug ? document.createComment(e) : document.createTextNode(t ? " " : "")
            }
        }).call(this, e("_process"))
    }, {
        "../config": 23,
        "./index": 72,
        _process: 8
    }],
    71: [function(e, t, n) {
        n.hasProto = "__proto__" in {};
        var r = n.inBrowser = "undefined" != typeof window && "[object Object]" !== Object.prototype.toString.call(window);
        if (n.isIE9 = r && navigator.userAgent.toLowerCase().indexOf("msie 9.0") > 0, n.isAndroid = r && navigator.userAgent.toLowerCase().indexOf("android") > 0, r && !n.isIE9) {
            var i = void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend,
                o = void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend;
            n.transitionProp = i ? "WebkitTransition" : "transition", n.transitionEndEvent = i ? "webkitTransitionEnd" : "transitionend", n.animationProp = o ? "WebkitAnimation" : "animation", n.animationEndEvent = o ? "webkitAnimationEnd" : "animationend"
        }
        n.nextTick = function() {
            function e() {
                r = !1;
                var e = n.slice(0);
                n = [];
                for (var t = 0; t < e.length; t++) e[t]()
            }
            var t, n = [],
                r = !1;
            if ("undefined" != typeof MutationObserver) {
                var i = 1,
                    o = new MutationObserver(e),
                    s = document.createTextNode(i);
                o.observe(s, {
                    characterData: !0
                }), t = function() {
                    i = (i + 1) % 2, s.data = i
                }
            } else t = setTimeout;
            return function(i, o) {
                var s = o ? function() {
                    i.call(o)
                } : i;
                n.push(s), r || (r = !0, t(e, 0))
            }
        }()
    }, {}],
    72: [function(e, t, n) {
        var r = e("./lang"),
            i = r.extend;
        i(n, r), i(n, e("./env")), i(n, e("./dom")), i(n, e("./options")), i(n, e("./component")), i(n, e("./debug"))
    }, {
        "./component": 68,
        "./debug": 69,
        "./dom": 70,
        "./env": 71,
        "./lang": 73,
        "./options": 74
    }],
    73: [function(e, t, n) {
        function r(e, t) {
            return t ? t.toUpperCase() : ""
        }
        n.isReserved = function(e) {
            var t = (e + "").charCodeAt(0);
            return 36 === t || 95 === t
        }, n.toString = function(e) {
            return null == e ? "" : e.toString()
        }, n.toNumber = function(e) {
            if ("string" != typeof e) return e;
            var t = Number(e);
            return isNaN(t) ? e : t
        }, n.toBoolean = function(e) {
            return "true" === e ? !0 : "false" === e ? !1 : e
        }, n.stripQuotes = function(e) {
            var t = e.charCodeAt(0),
                n = e.charCodeAt(e.length - 1);
            return t !== n || 34 !== t && 39 !== t ? !1 : e.slice(1, -1)
        }, n.camelize = function(e) {
            return e.replace(/-(\w)/g, r)
        }, n.hyphenate = function(e) {
            return e.replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase()
        };
        var i = /(?:^|[-_\/])(\w)/g;
        n.classify = function(e) {
            return e.replace(i, r)
        }, n.bind = function(e, t) {
            return function(n) {
                var r = arguments.length;
                return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
            }
        }, n.toArray = function(e, t) {
            t = t || 0;
            for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
            return r
        }, n.extend = function(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }, n.isObject = function(e) {
            return null !== e && "object" == typeof e
        };
        var o = Object.prototype.toString,
            s = "[object Object]";
        n.isPlainObject = function(e) {
            return o.call(e) === s
        }, n.isArray = Array.isArray, n.define = function(e, t, n, r) {
            Object.defineProperty(e, t, {
                value: n,
                enumerable: !!r,
                writable: !0,
                configurable: !0
            })
        }, n.debounce = function(e, t) {
            var n, r, i, o, s, a = function() {
                var u = Date.now() - o;
                t > u && u >= 0 ? n = setTimeout(a, t - u) : (n = null, s = e.apply(i, r), n || (i = r = null))
            };
            return function() {
                return i = this, r = arguments, o = Date.now(), n || (n = setTimeout(a, t)), s
            }
        }, n.indexOf = function(e, t) {
            for (var n = e.length; n--;)
                if (e[n] === t) return n;
            return -1
        }, n.cancellable = function(e) {
            var t = function() {
                return t.cancelled ? void 0 : e.apply(this, arguments)
            };
            return t.cancel = function() {
                t.cancelled = !0
            }, t
        }, n.looseEqual = function(e, t) {
            return e == t || (n.isObject(e) && n.isObject(t) ? JSON.stringify(e) === JSON.stringify(t) : !1)
        }
    }, {}],
    74: [function(e, t, n) {
        (function(t) {
            function r(e, t) {
                var n, i, o;
                for (n in t) i = e[n], o = t[n], e.hasOwnProperty(n) ? u.isObject(i) && u.isObject(o) && r(i, o) : e.$add(n, o);
                return e
            }

            function i(e, t) {
                var n = Object.create(e);
                return t ? c(n, a(t)) : n
            }

            function o(e) {
                if (e.components)
                    for (var n, r = e.components = a(e.components), i = Object.keys(r), o = 0, s = i.length; s > o; o++) {
                        var l = i[o];
                        u.commonTagRE.test(l) ? "production" !== t.env.NODE_ENV && u.warn("Do not use built-in HTML elements as component id: " + l) : (n = r[l], u.isPlainObject(n) && (n.id = n.id || l, r[l] = n._Ctor || (n._Ctor = u.Vue.extend(n))))
                    }
            }

            function s(e) {
                var t = e.props;
                u.isPlainObject(t) ? e.props = Object.keys(t).map(function(e) {
                    var n = t[e];
                    return u.isPlainObject(n) || (n = {
                        type: n
                    }), n.name = e, n
                }) : u.isArray(t) && (e.props = t.map(function(e) {
                    return "string" == typeof e ? {
                        name: e
                    } : e
                }))
            }

            function a(e) {
                if (u.isArray(e)) {
                    for (var n, r = {}, i = e.length; i--;) {
                        n = e[i];
                        var o = n.id || n.options && n.options.id;
                        o ? r[o] = n : "production" !== t.env.NODE_ENV && u.warn("Array-syntax assets must provide an id field.")
                    }
                    return r
                }
                return e
            }
            var u = e("./index"),
                l = e("../config"),
                c = u.extend,
                d = l.optionMergeStrategies = Object.create(null);
            d.data = function(e, n, i) {
                return i ? e || n ? function() {
                    var t = "function" == typeof n ? n.call(i) : n,
                        o = "function" == typeof e ? e.call(i) : void 0;
                    return t ? r(t, o) : o
                } : void 0 : n ? "function" != typeof n ? ("production" !== t.env.NODE_ENV && u.warn('The "data" option should be a function that returns a per-instance value in component definitions.'), e) : e ? function() {
                    return r(n.call(this), e.call(this))
                } : n : e
            }, d.el = function(e, n, r) {
                if (!r && n && "function" != typeof n) return void("production" !== t.env.NODE_ENV && u.warn('The "el" option should be a function that returns a per-instance value in component definitions.'));
                var i = n || e;
                return r && "function" == typeof i ? i.call(r) : i
            }, d.created = d.ready = d.attached = d.detached = d.beforeCompile = d.compiled = d.beforeDestroy = d.destroyed = d.props = function(e, t) {
                return t ? e ? e.concat(t) : u.isArray(t) ? t : [t] : e
            }, d.paramAttributes = function() {
                "production" !== t.env.NODE_ENV && u.warn('"paramAttributes" option has been deprecated in 0.12. Use "props" instead.')
            }, l._assetTypes.forEach(function(e) {
                d[e + "s"] = i
            }), d.watch = d.events = function(e, t) {
                if (!t) return e;
                if (!e) return t;
                var n = {};
                c(n, e);
                for (var r in t) {
                    var i = n[r],
                        o = t[r];
                    i && !u.isArray(i) && (i = [i]), n[r] = i ? i.concat(o) : [o]
                }
                return n
            }, d.methods = d.computed = function(e, t) {
                if (!t) return e;
                if (!e) return t;
                var n = Object.create(e);
                return c(n, t), n
            };
            var h = function(e, t) {
                return void 0 === t ? e : t
            };
            n.mergeOptions = function f(e, t, n) {
                function r(r) {
                    var i = d[r] || h;
                    a[r] = i(e[r], t[r], n, r)
                }
                o(t), s(t);
                var i, a = {};
                if (t.mixins)
                    for (var u = 0, l = t.mixins.length; l > u; u++) e = f(e, t.mixins[u], n);
                for (i in e) r(i);
                for (i in t) e.hasOwnProperty(i) || r(i);
                return a
            }, n.resolveAsset = function(e, t, n) {
                for (var r = u.camelize(n), i = r.charAt(0).toUpperCase() + r.slice(1), o = e[t], s = o[n] || o[r] || o[i]; !s && e._parent && (!l.strict || e._repeat);) e = (e._context || e._parent).$options, o = e[t], s = o[n] || o[r] || o[i];
                return s
            }
        }).call(this, e("_process"))
    }, {
        "../config": 23,
        "./index": 72,
        _process: 8
    }],
    75: [function(e, t, n) {
        function r(e) {
            this._init(e)
        }
        var i = e("./util"),
            o = i.extend;
        o(r, e("./api/global")), r.options = {
            replace: !0,
            directives: e("./directives"),
            elementDirectives: e("./element-directives"),
            filters: e("./filters"),
            transitions: {},
            components: {},
            partials: {}
        };
        var s = r.prototype;
        Object.defineProperty(s, "$data", {
            get: function() {
                return this._data
            },
            set: function(e) {
                e !== this._data && this._setData(e)
            }
        }), o(s, e("./instance/init")), o(s, e("./instance/events")), o(s, e("./instance/scope")), o(s, e("./instance/compile")), o(s, e("./instance/misc")), o(s, e("./api/data")), o(s, e("./api/dom")), o(s, e("./api/events")), o(s, e("./api/child")), o(s, e("./api/lifecycle")), t.exports = i.Vue = r
    }, {
        "./api/child": 11,
        "./api/data": 12,
        "./api/dom": 13,
        "./api/events": 14,
        "./api/global": 15,
        "./api/lifecycle": 16,
        "./directives": 32,
        "./element-directives": 47,
        "./filters": 50,
        "./instance/compile": 51,
        "./instance/events": 52,
        "./instance/init": 53,
        "./instance/misc": 54,
        "./instance/scope": 55,
        "./util": 72
    }],
    76: [function(e, t, n) {
        (function(n) {
            function r(e, t, n, r) {
                r && o.extend(this, r);
                var i = "function" == typeof t;
                if (this.vm = e, e._watchers.push(this), this.expression = i ? t.toString() : t, this.cb = n, this.id = ++c, this.active = !0, this.dirty = this.lazy, this.deps = Object.create(null), this.newDeps = null, this.prevError = null, i) this.getter = t, this.setter = void 0;
                else {
                    var s = u.parse(t, this.twoWay);
                    this.getter = s.get, this.setter = s.set
                }
                this.value = this.lazy ? void 0 : this.get(), this.queued = this.shallow = !1
            }

            function i(e) {
                var t, n, r;
                for (t in e)
                    if (n = e[t], o.isArray(n))
                        for (r = n.length; r--;) i(n[r]);
                    else o.isObject(n) && i(n)
            }
            var o = e("./util"),
                s = e("./config"),
                a = e("./observer/dep"),
                u = e("./parsers/expression"),
                l = e("./batcher"),
                c = 0;
            r.prototype.addDep = function(e) {
                var t = e.id;
                this.newDeps[t] || (this.newDeps[t] = e, this.deps[t] || (this.deps[t] = e, e.addSub(this)))
            }, r.prototype.get = function() {
                this.beforeGet();
                var e, t = this.vm;
                try {
                    e = this.getter.call(t, t)
                } catch (r) {
                    "production" !== n.env.NODE_ENV && s.warnExpressionErrors && o.warn('Error when evaluating expression "' + this.expression + '". ' + (s.debug ? "" : "Turn on debug mode to see stack trace."), r)
                }
                return this.deep && i(e), this.preProcess && (e = this.preProcess(e)), this.filters && (e = t._applyFilters(e, null, this.filters, !1)), this.afterGet(), e
            }, r.prototype.set = function(e) {
                var t = this.vm;
                this.filters && (e = t._applyFilters(e, this.value, this.filters, !0));
                try {
                    this.setter.call(t, t, e)
                } catch (r) {
                    "production" !== n.env.NODE_ENV && s.warnExpressionErrors && o.warn('Error when evaluating setter "' + this.expression + '"', r)
                }
            }, r.prototype.beforeGet = function() {
                a.target = this, this.newDeps = Object.create(null)
            }, r.prototype.afterGet = function() {
                a.target = null;
                for (var e = Object.keys(this.deps), t = e.length; t--;) {
                    var n = e[t];
                    this.newDeps[n] || this.deps[n].removeSub(this)
                }
                this.deps = this.newDeps
            }, r.prototype.update = function(e) {
                this.lazy ? this.dirty = !0 : this.sync || !s.async ? this.run() : (this.shallow = this.queued ? e ? this.shallow : !1 : !!e, this.queued = !0, "production" !== n.env.NODE_ENV && s.debug && (this.prevError = new Error("[vue] async stack trace")), l.push(this))
            }, r.prototype.run = function() {
                if (this.active) {
                    var e = this.get();
                    if (e !== this.value || (o.isArray(e) || this.deep) && !this.shallow) {
                        var t = this.value;
                        this.value = e;
                        var r = this.prevError;
                        if ("production" !== n.env.NODE_ENV && s.debug && r) {
                            this.prevError = null;
                            try {
                                this.cb.call(this.vm, e, t)
                            } catch (i) {
                                throw o.nextTick(function() {
                                    throw r
                                }, 0), i
                            }
                        } else this.cb.call(this.vm, e, t)
                    }
                    this.queued = this.shallow = !1
                }
            }, r.prototype.evaluate = function() {
                var e = a.target;
                this.value = this.get(), this.dirty = !1, a.target = e
            }, r.prototype.depend = function() {
                for (var e = Object.keys(this.deps), t = e.length; t--;) this.deps[e[t]].depend()
            }, r.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || this.vm._watchers.$remove(this);
                    for (var e = Object.keys(this.deps), t = e.length; t--;) this.deps[e[t]].removeSub(this);
                    this.active = !1, this.vm = this.cb = this.value = null;

                }
            }, t.exports = r
        }).call(this, e("_process"))
    }, {
        "./batcher": 17,
        "./config": 23,
        "./observer/dep": 57,
        "./parsers/expression": 61,
        "./util": 72,
        _process: 8
    }],
    77: [function(e, t, n) {
        "use strict";
        t.exports = {
            template: '<div class="modal" tabindex="-1" role="dialog" v-show="show" v-transition="modal"><div class="modal-dialog" role="document"><div class="modal-content"><content select=".modal-header"><div class="modal-header"><h4 class="modal-title">default header</h4></div></content><content select=".modal-body"><div class="modal-body"><p>default body</p></div></content><content select=".modal-footer"><div class="modal-footer"><button type="button" class="btn btn-default"v-on="click: show = false">Close</button></div></content></div></div></div>',
            props: {
                show: {
                    type: Boolean,
                    required: !0,
                    twoWay: !0
                }
            }
        }
    }, {}],
    78: [function(e, t, n) {
        "use strict";
        var r = e("lodash");
        t.exports = {
            template: '<nav><ul class="pagination"><li v-if="boundaryLinks" v-class="disabled: currentPage === 1"><a href="#" aria-label="First" v-on="click: setPage(1, $event)"><span aria-hidden="true">{{{ firstText }}}</span></a></li><li v-if="directionLinks" v-class="disabled: currentPage === 1"><a href="#" aria-label="Previous" v-on="click: setPage(currentPage - 1, $event)"><span aria-hidden="true">{{{ prevText }}}</span></a></li><li v-class="active : page.value == this.currentPage" v-repeat="page in pages" v-on="click: setPage(page.value, $event)"><a href="#">{{ page.label }}</a></li><li v-if="directionLinks" v-class="disabled: currentPage === totalPages"><a href="#" aria-label="Next" v-on="click: setPage(currentPage + 1, $event)"><span aria-hidden="true">{{{ nextText }}}</span></a></li><li v-if="boundaryLinks" v-class="disabled: currentPage === totalPages"><a href="#" aria-label="Last" v-on="click: setPage(totalPages, $event)"><span aria-hidden="true">{{{ lastText }}}</span></a></li></ul></nav>',
            props: {
                currentPage: {
                    type: Number,
                    required: !0,
                    twoWay: !0,
                    "default": 1
                },
                totalItems: {
                    type: Number,
                    required: !0
                },
                perPage: {
                    type: Number,
                    "default": 10
                },
                displayRange: {
                    type: Number,
                    "default": 3
                },
                directionLinks: {
                    type: Boolean,
                    "default": !0
                },
                nextText: {
                    type: String,
                    "default": "Next"
                },
                prevText: {
                    type: String,
                    "default": "Prev"
                },
                boundaryLinks: {
                    type: Boolean,
                    "default": !0
                },
                firstText: {
                    type: String,
                    "default": "First"
                },
                lastText: {
                    type: String,
                    "default": "Last"
                }
            },
            computed: {
                totalPages: function() {
                    return Math.ceil(this.totalItems / this.perPage)
                },
                pages: function() {
                    return this.paginate()
                },
                showDirectionLinks: function() {
                    return console.log(this.directionLinks), this.directionLinks
                }
            },
            methods: {
                paginate: function() {
                    var e, t, n, i = 2 * this.displayRange + 3,
                        o = this.displayRange + 3,
                        s = this.totalPages - this.displayRange - 2,
                        a = "...",
                        u = [];
                    this.totalPages > i ? this.currentPage < o ? (n = "lower", e = 1, t = i) : s < this.currentPage ? (n = "upper", e = this.totalPages - 2 * this.displayRange - 1, t = this.totalPages + 1) : (n = "middle", e = this.currentPage - this.displayRange, t = this.currentPage + this.displayRange + 1) : (n = "n/a", e = 1, t = this.totalPages + 1), ("middle" === n || "upper" === n) && u.push({
                        label: a,
                        value: this.currentPage - this.displayRange - 2
                    });
                    var l = !0,
                        c = !1,
                        d = void 0;
                    try {
                        for (var h, f = r.range(e, t)[Symbol.iterator](); !(l = (h = f.next()).done); l = !0) {
                            var p = h.value;
                            u.push({
                                label: p,
                                value: p
                            })
                        }
                    } catch (m) {
                        c = !0, d = m
                    } finally {
                        try {
                            !l && f["return"] && f["return"]()
                        } finally {
                            if (c) throw d
                        }
                    }
                    return ("lower" === n || "middle" === n) && u.push({
                        label: a,
                        value: this.currentPage + this.displayRange + 2
                    }), u
                },
                setPage: function(e, t) {
                    t.preventDefault(), "" == e || 1 > e || e > this.totalPages || this.currentPage != e && (this.currentPage = e, this.$dispatch("pageChange"))
                }
            }
        }
    }, {
        lodash: 9
    }],
    79: [function(e, t, n) {
        (function(e) {
            "use strict";
            $ = "undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null, t.exports = {
                twoWay: !0,
                bind: function() {
                    this.handler = function() {
                        this.set($(this.el).val())
                    }.bind(this), $(this.el).on("blur", this.handler)
                },
                update: function(e) {
                    $(this.el).val(e).trigger("change")
                },
                unbind: function() {
                    $(this.el).off("blur", this.handler)
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    80: [function(e, t, n) {
        (function(n) {
            "use strict";
            var r = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null;
            e("select2"), t.exports = {
                twoWay: !0,
                bind: function() {
                    var e, t = this,
                        n = this.el.getAttribute("options");
                    n && (e = this.vm.$eval(n));
                    var i = r(this.el),
                        o = i.data("placeholder"),
                        s = i.data("allow-clear");
                    i.select2({
                        placeholder: "undefined" != typeof o && o ? o : null,
                        allowClear: "undefined" != typeof s && "" !== s ? s : !1
                    }).on("change", function(e) {
                        t.set(r(e.target).val())
                    })
                },
                update: function(e) {
                    r(this.el).val(e).trigger("change")
                },
                unbind: function() {
                    r(this.el).off().select2("destroy")
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        select2: 103
    }],
    81: [function(e, t, n) {
        "use strict";
        var r = e("moment");
        t.exports = function(e, t) {
            return r(e).format(t)
        }
    }, {
        moment: 10
    }],
    82: [function(e, t, n) {
        "use strict";
        t.exports = function(e, t) {
            if ("undefined" == typeof e) return "";
            "undefined" == typeof t && (t = 100);
            var n = e.split(" "),
                r = n.splice(0, t);
            return r.join(" ") + (r.length < n.length ? "..." : "")
        }
    }, {}],
    83: [function(e, t, n) {
        (function(n) {
            "use strict";
            var r = (e("vue"), "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null),
                i = e("lodash"),
                o = e("../modules/helpers"),
                s = e("URIjs"),
                a = new s(window.location),
                u = (o.getQuery(), e("../modules/resource-repository")),
                l = e("../modules/date-range-filter");
            t.exports = {
                computed: {
                    doctypesCount: function() {
                        return this.countFilter("doctypes")
                    },
                    issueAreasCount: function() {
                        return this.countFilter("issueAreas")
                    },
                    languagesCount: function() {
                        return this.countFilter("languages")
                    },
                    relatedNumFound: function() {
                        return this.related.authors.items.length + this.related.special_collections.items.length + this.related.publishers.items.length + this.related.funders.items.length
                    },
                    relatedAuthorsPaged: function() {
                        var e = this,
                            t = this.getRelatedPageItems(this.related.authors, "authors"),
                            n = i.map(t, function(e) {
                                return e.name
                            });
                        return this.loadRelatedItemTitles(t, "author"), this.loadRelatedItemsData("/search/authors", {
                            fullname: n
                        }, function(t) {
                            var n = i.find(e.related.authors.items, {
                                name: t.fullname
                            });
                            "undefined" != typeof n && (n.url = "/authors/profile/" + t.identifier)
                        }), t
                    },
                    relatedPublishersPaged: function() {
                        var e = this.getRelatedPageItems(this.related.publishers, "publishers"),
                            t = i.map(e, function(e) {
                                return e.name
                            });
                        return this.loadRelatedItemTitles(e, "publisher"), this.loadRelatedItemsData("/search/organizations", {
                            organization: t
                        }, function(e) {
                            var t = i.find(this.related.publishers.items, {
                                name: e.organization
                            });
                            "undefined" != typeof t && (t.description = e.mission_statement, t.url = "/publishers/profile/" + e.identifier)
                        }), e
                    },
                    relatedSpecialCollectionsPaged: function() {
                        var e = this.getRelatedPageItems(this.related.special_collections, "special_collections"),
                            t = i.map(e, function(e) {
                                return e.name
                            });
                        return this.loadRelatedItemTitles(e, "subdomain"), this.loadRelatedItemsData("/search/knowledge-centers", {
                            subdomain: t
                        }, function(e) {
                            var t = i.find(this.related.special_collections.items, {
                                name: e.subdomain
                            });
                            "undefined" != typeof t && (t.description = e.description, t.name = e.title, t.url = "http://" + e.subdomain + ".issuelab.org/")
                        }), e
                    },
                    relatedFundersPaged: function() {
                        var e = this.getRelatedPageItems(this.related.funders, "funders"),
                            t = i.map(e, function(e) {
                                return e.name
                            });
                        return this.loadRelatedItemTitles(e, "funder"), this.loadRelatedItemsData("/search/organizations", {
                            organization: t
                        }, function(e) {
                            var t = i.find(this.related.funders.items, {
                                name: e.funder
                            });
                            "undefined" != typeof t && (t.url = "/funders/profile/" + e.identifier)
                        }), e
                    }
                },
                created: function() {
                    r(".vue-loading").removeClass("vue-loading"), new l
                },
                ready: function() {
                    this.resetRelated(), this.resolveView(), this.buildPath(), this.setEvents(), this.$emit("search")
                },
                events: {
                    pageChange: function() {
                        this.buildPath()
                    },
                    search: function() {
                        var e = this;
                        this.isFiltered() && r.post("/search/records/create", this.buildRecord()).fail(function(e, t, n) {
                            console.log(e, t, n)
                        }), this.searchLoading = !0, r.ajax({
                            url: u.buildRequest(this.currentPage, this.perPage, this.getMainQueryFilters(), this.shouldGetFacets()),
                            dataType: "jsonp",
                            jsonp: "json.wrf",
                            success: function(t, n, r) {
                                if (console.log(t), "undefined" != typeof t.response.docs && i.forEach(t.response.docs, function(t) {
                                        e.resources.push(t)
                                    }), e.$set("numFound", t.response.numFound), "undefined" != typeof t.facet_counts && 1 == e.loadRelated) {
                                    var o = t.facet_counts.facet_fields;
                                    "undefined" != typeof o.author && e.setupRelatedItems(o.author, "authors"), "undefined" != typeof o.subdomain && e.setupRelatedItems(o.subdomain, "special_collections", window.Data.specialCollections), "undefined" != typeof o.publisher_ss && e.setupRelatedItems(o.publisher_ss, "publishers"), "undefined" != typeof o.funder_ss && e.setupRelatedItems(o.funder_ss, "funders"), e.loadRelated = !1
                                }
                                e.searchLoading = !1
                            }
                        })
                    }
                },
                components: {
                    modal: e("../components/modal"),
                    resource: {
                        template: "#resource-template",
                        props: {
                            "class": {
                                type: String,
                                "default": "col-xs-4"
                            }
                        }
                    },
                    related: {
                        template: "#related-template",
                        props: {
                            "class": {
                                type: String,
                                "default": "col-xs-6"
                            }
                        }
                    },
                    pagination: e("../components/pagination")
                },
                directives: {
                    date: e("../directives/date"),
                    select: e("../directives/select")
                },
                filters: {
                    date: e("../filters/date"),
                    truncate: e("../filters/truncate")
                },
                methods: {
                    getMainQueryFilters: function() {
                        return {}
                    },
                    shouldGetFacets: function() {
                        return this.isFiltered() && this.loadRelated
                    },
                    getRelatedPageItems: function(e, t) {
                        if (this.currentRelatedView == t) var n = (e.currentPage - 1) * this.relatedPerPage,
                            r = e.items.slice(n, n + this.relatedPerPage);
                        else var r = e.items.slice(0, 2);
                        return r
                    },
                    setupRelatedItems: function(e, t, n) {
                        for (var r = 0; r < e.length; r += 2)("undefined" == typeof n || i.contains(n, e[r])) && this.related[t].items.push({
                            name: e[r],
                            occurrences: e[r + 1],
                            resources: [],
                            loaded: 0,
                            url: "#"
                        })
                    },
                    loadRelatedItemsData: function(e, t, n) {
                        var o = this;
                        r.get(e, t, function(e, t, r) {
                            e && e.length && i.forEach(e, function(e) {
                                n.apply(o, [e])
                            })
                        }).fail(function(e, t, n) {
                            console.log(e, t, n)
                        })
                    },
                    loadRelatedItemTitles: function(e, t) {
                        var n = this;
                        i.each(e, function(e) {
                            if (0 == e.loaded) {
                                var r = {};
                                r[t] = e.name, n.loadSingleRelatedItemTitles(e, r), e.loaded = 1
                            }
                        })
                    },
                    loadSingleRelatedItemTitles: function(e, t) {
                        r.ajax({
                            url: u.buildRequest(1, 2, t),
                            dataType: "jsonp",
                            jsonp: "json.wrf",
                            success: function(t, n, r) {
                                "undefined" != typeof t.response.docs && (i.forEach(t.response.docs, function(t) {
                                    e.resources.push(t)
                                }), e.loaded = 2)
                            }
                        })
                    },
                    setEvents: function() {
                        var e = this;
                        window.onpopstate = function(t) {
                            e.resolveView(), console.log("PopState", window.location.href, t), "titles" == e.currentView && (e.setSearchFilters(o.getQuery()), e.resetRelated(), e.resources = [], e.$emit("search"))
                        }, this.$watch("sort", this.sortChange), this.$watch("currentPage", function(t) {
                            e.resources = [], e.$emit("search")
                        })
                    },
                    sortChange: function() {
                        this.buildPath(), this.resources = [], this.$emit("search")
                    },
                    switchView: function(e) {
                        this.currentView = e, this.buildPath()
                    },
                    switchRelatedView: function(e) {
                        this.currentRelatedView = e, this.buildPath()
                    },
                    resolveView: function() {
                        var e = i.filter(window.location.pathname.split("/"), function(e) {
                            return "" != e
                        });
                        e.length >= 2 && "related" == e[1] ? (this.currentView = "related", e.length >= 3 ? (this.currentRelatedView = e[2], this.related[this.currentRelatedView].currentPage = e.length >= 4 ? parseInt(e[3]) : 1) : this.currentRelatedView = "overview") : (this.currentView = "titles", this.currentPage = e.length >= 2 ? parseInt(e[1]) : 1)
                    },
                    buildPath: function() {
                        var e = [""];
                        if (e.push("search"), "titles" != this.currentView) {
                            if (e.push(this.currentView), "overview" != this.currentRelatedView) {
                                e.push(this.currentRelatedView);
                                var t = this.related[this.currentRelatedView].currentPage;
                                t > 1 && e.push(t)
                            }
                        } else 1 != this.currentPage && e.push(this.currentPage);
                        history.pushState(null, "", e.join("/") + "?" + a.query(this.buildQuery()).query()), this.query = o.getQuery()
                    },
                    resetRelated: function() {
                        this.loadRelated = !0;
                        var e = ["authors", "publishers", "special_collections", "funders"];
                        for (var t in e) this.related[e[t]].items = [], this.related[e[t]].currentPage = 1
                    },
                    submit: function(e) {
                        e.preventDefault(), this.resetModals(), this.resetRelated(), this.resources = [], this.currentPage = 1, this.buildPath(), this.$emit("search")
                    },
                    nextPage: function() {
                        this.currentPage += 1, this.$emit("search")
                    },
                    buildQuery: function() {
                        var c = [];
                        if(this.categories == ""){
                            var ii=0;
                            var cats = [];
                            var cat_val = '';
                            while(ii < 9999){
                                cat_val = $('#categories_'+ii).val();
                                if(typeof cat_val == 'undefined'){
                                    break;
                                }
                                if(cat_val != '' && cat_val != null)
                                    cats.push(cat_val);
                                ii = parseInt(ii) + parseInt(1);
                            }
                            c = cats;
                        }
                        c = this.categories == ''?c:this.categories;
                        return {
                            "copyright[]": i.map(this.copyrights, function(e, t) {
                                return !0 === e ? t : void 0
                            }),
                            coverage: this.coverage,
                            author: this.author, //start1
                            funder: this.funder,
                            publisher: this.publisher,
                            categories: c,
                            "doctype[]": i.map(this.doctypes, function(e, t) {
                                return !0 === e ? t : void 0
                            }),
                            "issue_area[]": i.map(this.issueAreas, function(e, t) {
                                return !0 === e ? t : void 0
                            }),
                            keywords: this.keywords,
                            "language[]": i.map(this.languages, function(e, t) {
                                return !0 === e ? t : void 0
                            }),
                            pubdate_start_year: this.pubdate.start.year,
                            pubdate_start_month: this.pubdate.start.month,
                            pubdate_start_day: this.pubdate.start.day,
                            pubdate_end_year: this.pubdate.end.year,
                            pubdate_end_month: this.pubdate.end.month,
                            pubdate_end_day: this.pubdate.end.day,
                            sort: this.sort
                        }
                    },
                    buildRecord: function() {
                        return {
                            keywords: this.query.keywords,
                            date_published_start: this.query.pubdate_start_year + "-" + this.query.pubdate_start_month + "-" + this.query.pubdate_start_day,
                            date_published_end: this.query.pubdate_end_year + "-" + this.query.pubdate_end_month + "-" + this.query.pubdate_end_day,
                            doctypes: this.query["doctype[]"],
                            issue_areas: this.query["issue_area[]"],
                            languages: this.query["language[]"],
                            coverage: this.query.coverage,
                            author: this.query.author, //start2
                            funder: this.query.funder,
                            publisher: this.query.publisher,
                            categories: this.query.categories,
                            copyrights: this.query["copyright[]"],
                            sort: this.query.sort
                        }
                    },
                    reset: function() { //start5
                        var e = this,
                            t = ["copyrights", "coverage", "author", "funder", "publisher","doctypes", "issueAreas", "keywords", "languages", "pubdate", "categories"];
                        i.each(t, function(t) {
                            e.resetFilter(t)
                        })
                    },
                    resetFilter: function(e) {
                        "pubdate" === e ? (this[e] = {
                            start: {
                                year: window.Data.earliestPubdate.year,
                                month: window.Data.earliestPubdate.month,
                                day: window.Data.earliestPubdate.day
                            },
                            end: {
                                year: window.Data.now.year,
                                month: window.Data.now.month,
                                day: window.Data.now.day
                            }
                        }, this.setSelected("pubdate_start_year", window.Data.earliestPubdate.year), this.setSelected("pubdate_start_month", window.Data.earliestPubdate.month), this.setSelected("pubdate_start_day", window.Data.earliestPubdate.day), this.setSelected("pubdate_end_year", window.Data.now.year), this.setSelected("pubdate_end_month", window.Data.now.month), this.setSelected("pubdate_end_day", window.Data.now.day)) : this[e] = null !== this[e] && "object" == typeof this[e] ? i.mapValues(this[e], function(e, t) {
                            return !1
                        }) : ""
                    },
                    setSelected: function(e, t) {
                        r(document.getElementById(e)).find("option").each(function(e, n) {
                            var i = r(n);
                            i.removeAttr("selected"), t == i.attr("value") && i.attr("selected", "selected")
                        })
                    },
                    setSearchFilters: function(e) { //start3
                        console.log(e), this.keywords = "undefined" != typeof e.keywords ? e.keywords : "", this.categories = "undefined" != typeof e.categories ? e.categories : "", this.coverage = "undefined" != typeof e.coverage ? e.coverage : "", this.author = "undefined" != typeof e.author ? e.author : "",this.funder = "undefined" != typeof e.funder ? e.funder : "",this.publisher = "undefined" != typeof e.publisher ? e.publisher : "", this.copyrights = i.mapValues(this.copyrights, function(t, n) {
                            return i.contains(e["copyright[]"], n) ? !0 : !1
                        }), this.doctypes = i.mapValues(this.doctypes, function(t, n) {
                            return i.contains(e["doctype[]"], n) ? !0 : !1
                        }), this.issueAreas = i.mapValues(this.issueAreas, function(t, n) {
                            return i.contains(e["issue_area[]"], n) ? !0 : !1
                        }), this.languages = i.mapValues(this.languages, function(t, n) {
                            return i.contains(e["language[]"], n) ? !0 : !1
                        }), this.pubdate = {
                            start: {
                                year: "undefined" != typeof e.pubdate_start_year ? e.pubdate_start_year : window.Data.earliestPubdate.year,
                                month: "undefined" != typeof e.pubdate_start_month ? e.pubdate_start_month : window.Data.earliestPubdate.month,
                                day: "undefined" != typeof e.pubdate_start_day ? e.pubdate_start_day : window.Data.earliestPubdate.day
                            },
                            end: {
                                year: "undefined" != typeof e.pubdate_end_year ? e.pubdate_end_year : window.Data.now.year,
                                month: "undefined" != typeof e.pubdate_end_month ? e.pubdate_end_month : window.Data.now.month,
                                day: "undefined" != typeof e.pubdate_end_day ? e.pubdate_end_day : window.Data.now.day
                            }
                        }, this.sort = "undefined" != typeof e.sort ? e.sort : ""
                    },
                    isFiltered: function() {
                        var e = !1,
                            t = this.query;
                        for (var n in t) t.hasOwnProperty(n) && "undefined" != typeof t[n] && t[n] && "sort" !== n && (e = !0);
                        return e
                    },
                    resetModals: function() {
                        i.each(this.show, function(e, t, n) {
                            n[t] = !1
                        })
                    },
                    countFilter: function(e) {
                        var t = 0;
                        return i.each(this[e], function(e, n, r) {
                            !0 === e && t++
                        }), t > 0 ? "(" + t + ")" : ""
                    }
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../components/modal": 77,
        "../components/pagination": 78,
        "../directives/date": 79,
        "../directives/select": 80,
        "../filters/date": 81,
        "../filters/truncate": 82,
        "../modules/date-range-filter": 86,
        "../modules/helpers": 89,
        "../modules/resource-repository": 94,
        URIjs: 4,
        lodash: 9,
        vue: 75
    }],
    84: [function(e, t, n) {
        (function(e) {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var r = "undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null,
                i = function o() {
                    n(this, o), r("input[type=submit]").removeAttr("disabled")
                };
            t.exports = i
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    85: [function(e, t, n) {
        (function(e) {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var r = ("undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null, function i() {
                n(this, i)
            });
            t.exports = r
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    86: [function(e, t, n) {
        (function(n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                o = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null,
                s = (e("lodash"), e("moment")),
                a = function() {
                    function e() {
                        r(this, e);
                        var t = o(".date-range-filter");
                        this.dates = {}, this.initDateRanges(t), this.initEvents()
                    }
                    return i(e, [{
                        key: "initDateRanges",
                        value: function(e) {
                            var t = this;
                            e.each(function(e, n) {
                                var r = o(n);
                                t.setDate(r.find(".date-range-start")), t.setDate(r.find(".date-range-end")), t.checkDates(r)
                            })
                        }
                    }, {
                        key: "initEvents",
                        value: function() {
                            var e = this,
                                t = o(document);
                            t.on("change", ".date-range-filter select", function(t) {
                                e.setDate(o(t.target).parent()), e.checkDates(o(t.target))
                            })
                        }
                    }, {
                        key: "setDate",
                        value: function(e) {
                            var t = e.find(".year").val(),
                                n = e.find(".month").val(),
                                r = e.find(".day").val(),
                                i = e.data("key");
                            this.dates[i] = s(t + "-" + n + "-" + r, "YYYY-MM-DD")
                        }
                    }, {
                        key: "getDate",
                        value: function(e) {
                            return this.dates[e.data("key")]
                        }
                    }, {
                        key: "checkDates",
                        value: function(e) {
                            var t = e.hasClass("date-range-filter") ? e : e.parents(".date-range-filter"),
                                n = t.find(".date-range-start"),
                                r = t.find(".date-range-end"),
                                i = this.getDate(n),
                                o = this.getDate(r),
                                a = s(),
                                u = i.year() === o.year(),
                                l = i.month() === o.month();
                            this.setValidDateOptions(r.find(".year"), i.year(), a.year()), this.setValidDateOptions(r.find(".month"), i.month() + 1, a.month() + 1, u, o.year() === a.year()), this.setValidDateOptions(r.find(".day"), i.date(), a.date(), u && l, o.year() === a.year() && o.month() === a.month()), this.setValidDateOptions(n.find(".year"), null, o.year()), this.setValidDateOptions(n.find(".month"), null, o.month() + 1, !1, u), this.setValidDateOptions(n.find(".day"), null, o.date(), !1, u && l)
                        }
                    }, {
                        key: "setValidDateOptions",
                        value: function(e) {
                            var t = void 0 === arguments[1] ? null : arguments[1],
                                n = void 0 === arguments[2] ? null : arguments[2],
                                r = void 0 === arguments[3] ? !0 : arguments[3],
                                i = void 0 === arguments[4] ? !0 : arguments[4],
                                s = "null" != typeof t && r ? !0 : !1,
                                a = "null" != typeof n && i ? !0 : !1,
                                u = e.hasClass("day"),
                                l = parseInt(e.siblings(".month").val(), 10),
                                c = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                            e.find("option").each(function(e, r) {
                                var i = o(r),
                                    d = parseInt(i.val(), 10);
                                i.removeAttr("disabled"), (s && t > d || a && d > n || u && d > c[l - 1]) && i.attr("disabled", "disabled")
                            })
                        }
                    }]), e
                }();
            t.exports = a
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        lodash: 9,
        moment: 10
    }],
    87: [function(e, t, n) {
        (function(n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                o = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null,
                s = e("moment");
            e("datetimepicker");
            var a = function() {
                function e() {
                    r(this, e);
                    var t = o(".date .input-group");
                    t.datetimepicker({
                        format: "YYYY-MM-DD",
                        maxDate: s(),
                        viewMode: "months",
                        showClear: !0,
                        showClose: !0
                    }), this.initDateRange(o(".date-range"))
                }
                return i(e, [{
                    key: "initDateRange",
                    value: function(e) {
                        var t = e.find(".input-group"),
                            n = t.first(),
                            r = t.last();
                        n.on("dp.change", function(e) {
                            r.data("DateTimePicker").minDate(e.date)
                        }), r.on("dp.change", function(e) {
                            var t = !0;
                            n.data("DateTimePicker").date() && (t = !1), n.data("DateTimePicker").maxDate(e.date), t && n.data("DateTimePicker").date(null)
                        })
                    }
                }]), e
            }();
            t.exports = a
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        datetimepicker: 101,
        moment: 10
    }],
    88: [function(e, t, n) {
        (function(n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                o = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null,
                s = e("lodash"),
                a = function() {
                    function e() {
                        r(this, e), this.deleteModal()
                    }
                    return i(e, [{
                        key: "deleteModal",
                        value: function() {
                            o(".delete-modal").on("show.bs.modal", function(e) {
                                var t = o(e.relatedTarget),
                                    n = t.data("name"),
                                    r = t.data("action"),
                                    i = o(this);
                                i.find(".modal-body").html("You are about to delete <strong>" + s.escape(n) + "</strong>"), i.find("form").prop("action", r)
                            })
                        }
                    }]), e
                }();
            t.exports = a
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        lodash: 9
    }],
    89: [function(e, t, n) {
        "use strict";
        var r = e("lodash"),
            i = e("URIjs");
        t.exports = {
            toArray: function(e) {
                return r.isArray(e) ? e : [e]
            },
            getQuery: function() {
                if (window.location.hash) {
                    var e = new i(window.location).fragment();
                    return e = e.substr(e.indexOf("?")), new i(e).query(!0)
                }
                return new i(window.location).query(!0)
            }
        }
    }, {
        URIjs: 4,
        lodash: 9
    }],
    90: [function(e, t, n) {
        (function(n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var i = e("vue"),
                o = e("../mixins/resource-search"),
                s = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null,
                a = e("lodash"),
                u = e("./helpers"),
                l = e("URIjs"),
                c = new l(window.location),
                d = (u.getQuery(), function h() {
                    r(this, h), s.ajaxSetup({
                        beforeSend: function(e) {
                            e.setRequestHeader("X-CSRF-TOKEN", document.querySelector("#token").getAttribute("value"))
                        }
                    }), new i({
                        el: "#resource-search",
                        data: e("./resource-search-data"),
                        methods: {
                            shouldGetFacets: function() {
                                return !1
                            },
                            getMainQueryFilters: function() {
                                var e = {};
                                return e["client_include_" + Data.subdomain] = 1, e
                            },
                            resolveView: function() {
                                var e = a.filter(window.location.pathname.split("/"), function(e) {
                                    return "" != e
                                });
                                this.currentView = "titles", this.currentPage = 1 == e.length ? parseInt(e[0]) : 1
                            },
                            buildPath: function() {
                                var e = [""];
                                1 != this.currentPage && e.push(this.currentPage), history.pushState(null, "", e.join("/") + "?" + c.query(this.buildQuery()).query()), this.query = u.getQuery()
                            }
                        },
                        mixins: [o]
                    })
                });
            t.exports = d
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../mixins/resource-search": 83,
        "./helpers": 89,
        "./resource-search-data": 95,
        URIjs: 4,
        lodash: 9,
        vue: 75
    }],
    91: [function(e, t, n) {
        (function(n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var i = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null;
            e("select2");
            var o = function s() {
                r(this, s), i(".select2").select2()
            };
            t.exports = o
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        select2: 103
    }],
    92: [function(e, t, n) {
        (function(e) {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var r = "undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null,
                i = function o() {
                    n(this, o);
                    var e = r(".modal-overlay");
                    e.on("show.bs.modal", function(e) {
                        r(document.body).addClass("overlay")
                    }), e.on("hide.bs.modal", function(e) {
                        r(document.body).removeClass("overlay")
                    })
                };
            t.exports = i
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    93: [function(e, t, n) {
        (function(n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var i = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null;
            e("repeater");
            var o = function s() {
                r(this, s);
                var e = i(".form-group.repeater");
                e.repeater()
            };
            t.exports = o
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        repeater: 102
    }],
    94: [function(e, t, n) {
        "use strict";
        var r = e("./helpers");
//        return
            t.exports = {
            url: "http://admin:geeks3123@issuelab-solr-dev.geekschicagolabs.com/solr/issuelab/select?",
            query: r.getQuery(),
            buildRequest: function(e, t, n, i) {
                this.query = r.getQuery();
                var o = {
                    wt: "json",
                    defType: "edismax",
                    rows: kc_per_page,
                    start: (e - 1) * kc_per_page,
                    fl: "title,date_published,publisher,cover_graphic,id,resource_listing_feature_"+kc_name,
                    cache:false,
                    fq: this.buildFilters(n),
                    sort: this.sort(),
                    q: this.keywords()
                };
                i && (o.facet = !0, o["facet.field"] = ["author", "subdomain", "publisher_ss", "funder_ss"], o["facet.mincount"] = 1, o["facet.limit"] = 2e3);
                var s = [];
                for (var a in o) {
                    var u = o[a];
                    if ("object" == typeof u)
                        for (var l in u) s.push(a + "=" + u[l]);
                    else s.push(a + "=" + o[a])
                }
                return this.url + s.join("&")
            },
            buildFilters: function(e) {
                return this.addExternalFilters([this.categories() ,this.copyright(), this.coverage(), this.languageCodes(), this.pubdates(), this.pubtypes(), this.subjects(), this.author(), this.funder(), this.publisher()], e).filter(function(e) {
                    return e ? e : null
                }).join(" AND ")
            },
            addExternalFilters: function(e, t) {
                for (var n in t) {
                    var r = t[n];
                    e.push(n + ':"' + r + '"')
                }
                return e
            },
            copyright: function i() {
                var i = this.query["copyright[]"];
                if ("undefined" !== i && i) return "rights:(Creative*)"
            },
            coverage: function o() {
                var o = this.query.coverage;
                if ("undefined" != typeof o && o) return 'coverage:"' + o + '"'
            },
            categories: function() {
                var c = this.query.categories;
                if(c == ""){
                    var ii=0;
                    var cats = [];
                    var cat_val = '';
                    while(ii < 9999){
                        cat_val = $('#categories_'+ii).val();
                        if(typeof cat_val == 'undefined'){
                            break;
                        }
                        if(cat_val != '' && cat_val != null)
                            cats.push(cat_val);
                        ii = parseInt(ii) + parseInt(1);
                    }
                    c = cats;
                }
                if ("undefined" != typeof c && c) return 'client_cat_'+kc_name+':"' + c + '"'
            },
            author: function() {
                var a = this.query.author;
                if ("undefined" != typeof a && a) return 'author:"' + a + '"'
            },
            funder: function() {
                var funder = this.query['funder'];
                if ('undefined' === typeof(funder) || !funder) return;
                return `funder:"${funder}"`
            },
            publisher: function() {
                var publisher = this.query['publisher'];
                if ('undefined' === typeof(publisher) || !publisher) return;
                return `publisher:"${publisher}"`
            },
            keywords: function s() {
                var s = this.query.keywords;
                return "undefined" != typeof s && "" !== s ? s : "*.*"
            },
            languageCodes: function() {
                var e = this.query["language[]"];
                if ("undefined" != typeof e && e) {
                    var t = r.toArray(e).join(" OR ");
                    return "language_code:(" + t + ")"
                }
            },
            pubdates: function() {
                var e = this.defaultDate("pubdate_start"),
                    t = this.defaultDate("pubdate_end");
                return "date_published:[" + e + " TO " + t + "]"
            },
            defaultDate: function(e) {
                var t = ["year", "month", "day"],
                    n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                        var a = o.value,
                            u = e + "_" + a;
                        if ("undefined" == typeof this.query[u] || !this.query[u]) return "*"
                    }
                } catch (l) {
                    r = !0, i = l
                } finally {
                    try {
                        !n && s["return"] && s["return"]()
                    } finally {
                        if (r) throw i
                    }
                }
                return this.query[e + "_year"] + "-" + this.query[e + "_month"] + "-" + this.query[e + "_day"]
            },
            pubtypes: function() {
                var e = this.query["doctype[]"];
                if ("undefined" != typeof e && e) {
                    var t = r.toArray(e).map(function(e) {
                        var t = window.Data.Doctypes[e];
                        return '"' + t + '"'
                    }).join(" OR ");
                    return "pubtype:(" + t + ")"
                }
            },
            subjects: function() {
                var e = this.query["issue_area[]"];
                if ("undefined" != typeof e && e) {
                    var t = r.toArray(e).map(function(e) {
                        var t = window.Data.IssueAreas[e];
                        return '"' + t + '"'
                    }).join(" AND ");
                    return "subject:(" + t + ")"
                }
            },
            sort: function a() {
                var a = this.query.sort;
                if(a.length == 0){
                    return "resource_listing_feature_"+kc_name+"+desc";
                }
                if ("undefined" != typeof a) return a
            }
        }
    }, {
        "./helpers": 89
    }],
    95: [function(e, t, n) {
        "use strict";
        var r = e("lodash"),
            i = e("./helpers"),
            o = i.getQuery();
        t.exports = {
            keywords: "undefined" != typeof o.keywords ? o.keywords : "",
            coverage: "undefined" != typeof o.coverage ? o.coverage : "",
            author: "undefined" != typeof o.author ? o.author : "", //start4
            funder: "undefined" != typeof o.funder ? o.funder : "",
            publisher: "undefined" != typeof o.publisher ? o.publisher : "",
            categories: "undefined" != typeof o.categories ? o.categories : "",
            copyrights: r.mapValues(Data.Copyrights, function(e, t) {
                return r.contains(o["copyright[]"], t) ? !0 : !1
            }),
            doctypes: r.mapValues(Data.Doctypes, function(e, t) {
                return r.contains(o["doctype[]"], t) ? !0 : !1
            }),
            issueAreas: r.mapValues(Data.IssueAreas, function(e, t) {
                return r.contains(o["issue_area[]"], t) ? !0 : !1
            }),
            languages: r.mapValues(Data.Languages, function(e, t) {
                return r.contains(o["language[]"], t) ? !0 : !1
            }),
            pubdate: {
                start: {
                    year: "undefined" != typeof o.pubdate_start_year ? o.pubdate_start_year : window.Data.earliestPubdate.year,
                    month: "undefined" != typeof o.pubdate_start_month ? o.pubdate_start_month : window.Data.earliestPubdate.month,
                    day: "undefined" != typeof o.pubdate_start_day ? o.pubdate_start_day : window.Data.earliestPubdate.day
                },
                end: {
                    year: "undefined" != typeof o.pubdate_end_year ? o.pubdate_end_year : window.Data.now.year,
                    month: "undefined" != typeof o.pubdate_end_month ? o.pubdate_end_month : window.Data.now.month,
                    day: "undefined" != typeof o.pubdate_end_day ? o.pubdate_end_day : window.Data.now.day
                }
            },
            resources: [],
            related: {
                authors: {
                    items: [],
                    currentPage: 1
                },
                special_collections: {
                    items: [],
                    currentPage: 1
                },
                publishers: {
                    items: [],
                    currentPage: 1
                },
                funders: {
                    items: [],
                    currentPage: 1
                }
            },
            loadRelated: !0,
            sort: "undefined" != typeof o.sort ? o.sort : "",
            perPage: 12,
            currentPage: 1,
            numFound: 0,
            query: o,
            showFilters: !1,
            currentView: "",
            currentRelatedView: "overview",
            relatedPerPage: 6,
            searchLoading: !1,
            show: {
                doctypes: !1,
                issueAreas: !1,
                languages: !1
            }
        }
    }, {
        "./helpers": 89,
        lodash: 9
    }],
    96: [function(e, t, n) {
        (function(n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var i = e("vue"),
                o = e("../mixins/resource-search"),
                s = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null,
                a = (e("lodash"), e("./helpers")),
                u = (a.getQuery(), function l() {
                    r(this, l), s.ajaxSetup({
                        beforeSend: function(e) {
                            e.setRequestHeader("X-CSRF-TOKEN", document.querySelector("#token").getAttribute("value"))
                        }
                    }), new i({
                        el: "#resource-search",
                        data: e("./resource-search-data"),
                        mixins: [o]
                    })
                });
            t.exports = u
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../mixins/resource-search": 83,
        "./helpers": 89,
        "./resource-search-data": 95,
        lodash: 9,
        vue: 75
    }],
    97: [function(e, t, n) {
        (function(n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                o = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null,
                s = e("lodash"),
                a = function() {
                    function e() {
                        r(this, e);
                        var t = o("input.search");
                        this.init(t)
                    }
                    return i(e, [{
                        key: "init",
                        value: function(e) {
                            var t = this;
                            e.each(function(e, n) {
                                var r = o(n),
                                    i = void 0,
                                    s = void 0;
                                r.hasClass("typeahead") ? r.on("typeahead:ready", function(e) {
                                    i = o(e.target), s = i.parents(".form-group").find(".glyphicon-remove"), t.renderCloseIcon(i, s), t.registerEvents(i, s)
                                }) : (i = r, s = i.siblings(".glyphicon-remove"), t.renderCloseIcon(i, s), t.registerEvents(i, s))
                            })
                        }
                    }, {
                        key: "registerEvents",
                        value: function(e, t) {
                            var n = this;
                            e.on("keyup", s.debounce(function(r) {
                                n.renderCloseIcon(e, t)
                            }, 200, {
                                leading: !0,
                                trailing: !1
                            })), t.on("click", function(r) {
                                r.preventDefault, n.clearInput(e, t)
                            })
                        }
                    }, {
                        key: "renderCloseIcon",
                        value: function(e, t) {
                            "" === e.val() ? this.hide(t) : this.show(t)
                        }
                    }, {
                        key: "clearInput",
                        value: function(e, t) {
                            e.val("").trigger("input").focus(), this.hide(t)
                        }
                    }, {
                        key: "hide",
                        value: function(e) {
                            e.addClass("hidden")
                        }
                    }, {
                        key: "show",
                        value: function(e) {
                            e.removeClass("hidden")
                        }
                    }]), e
                }();
            t.exports = a
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        lodash: 9
    }],
    98: [function(e, t, n) {
        (function(n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                o = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null,
                s = "undefined" != typeof window ? window.Modernizr : "undefined" != typeof n ? n.Modernizr : null,
                a = e("bloodhound");
            e("typeahead");
            var u = function() {
                function e() {
                    r(this, e);
                    var t = o(".typeahead");
                    this.datasources = this.initDatasources(t), this.init(t), this.initRepeater()
                }
                return i(e, [{
                    key: "init",
                    value: function(e) {
                        var t = this;
                        e.each(function(e, n) {
                            var r = o(n),
                                i = t.getData(r);
                            r.typeahead({
                                minLength: 3,
                                highlight: !0
                            }, {
                                name: i.name,
                                source: t.datasources[i.name]
                            }), t.emitReadyEvent(r), t.registerEvents(r)
                        })
                    }
                }, {
                    key: "initDatasources",
                    value: function(e) {
                        var t = this,
                            n = {};
                        return e.each(function(e, r) {
                            var i = o(r),
                                s = t.getData(i);
                            "undefined" != typeof n[name] && n[name] || (n[s.name] = t.initBloodhound(s.local, s.remote));

                        }), n
                    }
                }, {
                    key: "initBloodhound",
                    value: function(e, t) {
                        var n = {
                            queryTokenizer: a.tokenizers.whitespace,
                            datumTokenizer: a.tokenizers.whitespace,
                            local: "undefined" != typeof e && e ? window.Data[e] : []
                        };
                        return "undefined" != typeof t && t && (n.remote = {
                            url: t + "%QUERY",
                            wildcard: "%QUERY"
                        }), new a(n)
                    }
                }, {
                    key: "getData",
                    value: function(e) {
                        var t = e.data("local"),
                            n = e.data("remote"),
                            r = e.data("name"),
                            i = void 0;
                        if ("undefined" != typeof r && r) i = r;
                        else {
                            if ("undefined" == typeof t || !t) throw "error: data-name property is required for typeahead module";
                            i = t
                        }
                        return {
                            name: i,
                            local: t,
                            remote: n
                        }
                    }
                }, {
                    key: "registerEvents",
                    value: function(e) {
                        e.on("typeahead:render", function(e) {
                            o(e.target).addClass("with-suggestions")
                        }), e.on("typeahead:select", function(e, t) {
                            o(e.target).trigger("input")
                        }), e.on("typeahead:close", function(e) {
                            o(e.target).removeClass("with-suggestions")
                        }), e.closest("[data-repeater-item]").find("[data-repeater-delete]").on("click", function(t) {
                            o(e).typeahead("destroy")
                        })
                    }
                }, {
                    key: "initRepeater",
                    value: function() {
                        var e = this;
                        o(".form-group.repeater") && o(document).on("click", "[data-repeater-create]", function(t) {
                            var n = o(t.target).parents(".form-group.repeater").find(".typeahead").last();
                            e.init(n), n.focus()
                        })
                    }
                }, {
                    key: "emitReadyEvent",
                    value: function(e) {
                        s.on("mutationobserver", function(t) {
                            t && e.each(function(e, t) {
                                var n = !1,
                                    r = o(t),
                                    i = new window.MutationObserver(function(e) {
                                        e.forEach(function(e) {
                                            "attributes" === e.type && !1 === n && r.hasClass("tt-input") && (n = !0, r.trigger("typeahead:ready"))
                                        })
                                    });
                                i.observe(t, {
                                    attributes: !0,
                                    childList: !0,
                                    characterData: !0
                                }), r.on("typeahead:ready", function(e) {
                                    i.disconnect()
                                })
                            })
                        })
                    }
                }]), e
            }();
            t.exports = u
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        bloodhound: 104,
        typeahead: 105
    }],
    99: [function(e, t, n) {
        (function(t) {
            "use strict";
            var n = "undefined" != typeof window ? window.Modernizr : "undefined" != typeof t ? t.Modernizr : null;
            n.on("history", function(t) {
                t || e("html5-history-api")
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "html5-history-api": 6
    }],
    100: [function(e, t, n) {
        "use strict"; + function(e) {
            function t() {
                var e = document.createElement("bootstrap"),
                    t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                for (var n in t)
                    if (void 0 !== e.style[n]) return {
                        end: t[n]
                    };
                return !1
            }
            e.fn.emulateTransitionEnd = function(t) {
                var n = !1,
                    r = this;
                e(this).one("bsTransitionEnd", function() {
                    n = !0
                });
                var i = function() {
                    n || e(r).trigger(e.support.transition.end)
                };
                return setTimeout(i, t), this
            }, e(function() {
                e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
                    bindType: e.support.transition.end,
                    delegateType: e.support.transition.end,
                    handle: function(t) {
                        return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
                    }
                })
            })
        }(jQuery), + function(e) {
            function t(t, r) {
                return this.each(function() {
                    var i = e(this),
                        o = i.data("bs.modal"),
                        s = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
                    o || i.data("bs.modal", o = new n(this, s)), "string" == typeof t ? o[t](r) : s.show && o.show(r)
                })
            }
            var n = function(e) {
                function t(t, n) {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                }, t
            }(function(t, n) {
                this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
                    this.$element.trigger("loaded.bs.modal")
                }, this))
            });
            n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
                backdrop: !0,
                keyboard: !0,
                show: !0
            }, n.prototype.toggle = function(e) {
                return this.isShown ? this.hide() : this.show(e)
            }, n.prototype.show = function(t) {
                var r = this,
                    i = e.Event("show.bs.modal", {
                        relatedTarget: t
                    });
                this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                    r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                        e(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
                    })
                }), this.backdrop(function() {
                    var i = e.support.transition && r.$element.hasClass("fade");
                    r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), i && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus();
                    var o = e.Event("shown.bs.modal", {
                        relatedTarget: t
                    });
                    i ? r.$dialog.one("bsTransitionEnd", function() {
                        r.$element.trigger("focus").trigger(o)
                    }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o)
                }))
            }, n.prototype.hide = function(t) {
                t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
            }, n.prototype.enforceFocus = function() {
                e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
                    this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
                }, this))
            }, n.prototype.escape = function() {
                this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
                    27 == e.which && this.hide()
                }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
            }, n.prototype.resize = function() {
                this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
            }, n.prototype.hideModal = function() {
                var e = this;
                this.$element.hide(), this.backdrop(function() {
                    e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
                })
            }, n.prototype.removeBackdrop = function() {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            }, n.prototype.backdrop = function(t) {
                var r = this,
                    i = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var o = e.support.transition && i;
                    if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                            return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                        }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                    o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var s = function() {
                        r.removeBackdrop(), t && t()
                    };
                    e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
                } else t && t()
            }, n.prototype.handleUpdate = function() {
                this.adjustDialog()
            }, n.prototype.adjustDialog = function() {
                var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({
                    paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
                    paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
                })
            }, n.prototype.resetAdjustments = function() {
                this.$element.css({
                    paddingLeft: "",
                    paddingRight: ""
                })
            }, n.prototype.checkScrollbar = function() {
                var e = window.innerWidth;
                if (!e) {
                    var t = document.documentElement.getBoundingClientRect();
                    e = t.right - Math.abs(t.left)
                }
                this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
            }, n.prototype.setScrollbar = function() {
                var e = parseInt(this.$body.css("padding-right") || 0, 10);
                this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
            }, n.prototype.resetScrollbar = function() {
                this.$body.css("padding-right", this.originalBodyPad)
            }, n.prototype.measureScrollbar = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", this.$body.append(e);
                var t = e.offsetWidth - e.clientWidth;
                return this.$body[0].removeChild(e), t
            };
            var r = e.fn.modal;
            e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
                return e.fn.modal = r, this
            }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
                var r = e(this),
                    i = r.attr("href"),
                    o = e(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
                    s = o.data("bs.modal") ? "toggle" : e.extend({
                        remote: !/#/.test(i) && i
                    }, o.data(), r.data());
                r.is("a") && n.preventDefault(), o.one("show.bs.modal", function(e) {
                    e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                        r.is(":visible") && r.trigger("focus")
                    })
                }), t.call(o, s, this)
            })
        }(jQuery), + function(e) {
            function t(t) {
                var n = t.attr("data-target");
                n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
                var r = n && e(n);
                return r && r.length ? r : t.parent()
            }

            function n(n) {
                n && 3 === n.which || (e(i).remove(), e(o).each(function() {
                    var r = e(this),
                        i = t(r),
                        o = {
                            relatedTarget: this
                        };
                    i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(i[0], n.target) || (i.trigger(n = e.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", o))))
                }))
            }

            function r(t) {
                return this.each(function() {
                    var n = e(this),
                        r = n.data("bs.dropdown");
                    r || n.data("bs.dropdown", r = new s(this)), "string" == typeof t && r[t].call(n)
                })
            }
            var i = ".dropdown-backdrop",
                o = '[data-toggle="dropdown"]',
                s = function(t) {
                    e(t).on("click.bs.dropdown", this.toggle)
                };
            s.VERSION = "3.3.5", s.prototype.toggle = function(r) {
                var i = e(this);
                if (!i.is(".disabled, :disabled")) {
                    var o = t(i),
                        s = o.hasClass("open");
                    if (n(), !s) {
                        "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                        var a = {
                            relatedTarget: this
                        };
                        if (o.trigger(r = e.Event("show.bs.dropdown", a)), r.isDefaultPrevented()) return;
                        i.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", a)
                    }
                    return !1
                }
            }, s.prototype.keydown = function(n) {
                if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                    var r = e(this);
                    if (n.preventDefault(), n.stopPropagation(), !r.is(".disabled, :disabled")) {
                        var i = t(r),
                            s = i.hasClass("open");
                        if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && i.find(o).trigger("focus"), r.trigger("click");
                        var a = " li:not(.disabled):visible a",
                            u = i.find(".dropdown-menu" + a);
                        if (u.length) {
                            var l = u.index(n.target);
                            38 == n.which && l > 0 && l--, 40 == n.which && l < u.length - 1 && l++, ~l || (l = 0), u.eq(l).trigger("focus")
                        }
                    }
                }
            };
            var a = e.fn.dropdown;
            e.fn.dropdown = r, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function() {
                return e.fn.dropdown = a, this
            }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
                e.stopPropagation()
            }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
        }(jQuery), + function(e) {
            function t(t) {
                return this.each(function() {
                    var n = e(this),
                        i = n.data("bs.alert");
                    i || n.data("bs.alert", i = new r(this)), "string" == typeof t && i[t].call(n)
                })
            }
            var n = '[data-dismiss="alert"]',
                r = function(t) {
                    e(t).on("click", n, this.close)
                };
            r.VERSION = "3.3.5", r.TRANSITION_DURATION = 150, r.prototype.close = function(t) {
                function n() {
                    s.detach().trigger("closed.bs.alert").remove()
                }
                var i = e(this),
                    o = i.attr("data-target");
                o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
                var s = e(o);
                t && t.preventDefault(), s.length || (s = i.closest(".alert")), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n())
            };
            var i = e.fn.alert;
            e.fn.alert = t, e.fn.alert.Constructor = r, e.fn.alert.noConflict = function() {
                return e.fn.alert = i, this
            }, e(document).on("click.bs.alert.data-api", n, r.prototype.close)
        }(jQuery), + function(e) {
            function t(t) {
                var n, r = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
                return e(r)
            }

            function n(t) {
                return this.each(function() {
                    var n = e(this),
                        i = n.data("bs.collapse"),
                        o = e.extend({}, r.DEFAULTS, n.data(), "object" == typeof t && t);
                    !i && o.toggle && /show|hide/.test(t) && (o.toggle = !1), i || n.data("bs.collapse", i = new r(this, o)), "string" == typeof t && i[t]()
                })
            }
            var r = function o(t, n) {
                this.$element = e(t), this.options = e.extend({}, o.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
            };
            r.VERSION = "3.3.5", r.TRANSITION_DURATION = 350, r.DEFAULTS = {
                toggle: !0
            }, r.prototype.dimension = function() {
                var e = this.$element.hasClass("width");
                return e ? "width" : "height"
            }, r.prototype.show = function() {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var t, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(i && i.length && (t = i.data("bs.collapse"), t && t.transitioning))) {
                        var o = e.Event("show.bs.collapse");
                        if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                            i && i.length && (n.call(i, "hide"), t || i.data("bs.collapse", null));
                            var s = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                            var a = function() {
                                this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                            };
                            if (!e.support.transition) return a.call(this);
                            var u = e.camelCase(["scroll", s].join("-"));
                            this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[s](this.$element[0][u])
                        }
                    }
                }
            }, r.prototype.hide = function() {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var t = e.Event("hide.bs.collapse");
                    if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                        var n = this.dimension();
                        this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                        var i = function() {
                            this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        };
                        return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : i.call(this)
                    }
                }
            }, r.prototype.toggle = function() {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }, r.prototype.getParent = function() {
                return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, r) {
                    var i = e(r);
                    this.addAriaAndCollapsedClass(t(i), i)
                }, this)).end()
            }, r.prototype.addAriaAndCollapsedClass = function(e, t) {
                var n = e.hasClass("in");
                e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
            };
            var i = e.fn.collapse;
            e.fn.collapse = n, e.fn.collapse.Constructor = r, e.fn.collapse.noConflict = function() {
                return e.fn.collapse = i, this
            }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(r) {
                var i = e(this);
                i.attr("data-target") || r.preventDefault();
                var o = t(i),
                    s = o.data("bs.collapse"),
                    a = s ? "toggle" : i.data();
                n.call(o, a)
            })
        }(jQuery), + function(e) {
            function t(t) {
                return this.each(function() {
                    var r = e(this),
                        i = r.data("bs.affix"),
                        o = "object" == typeof t && t;
                    i || r.data("bs.affix", i = new n(this, o)), "string" == typeof t && i[t]()
                })
            }
            var n = function i(t, n) {
                this.options = e.extend({}, i.DEFAULTS, n), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
            };
            n.VERSION = "3.3.5", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
                offset: 0,
                target: window
            }, n.prototype.getState = function(e, t, n, r) {
                var i = this.$target.scrollTop(),
                    o = this.$element.offset(),
                    s = this.$target.height();
                if (null != n && "top" == this.affixed) return n > i ? "top" : !1;
                if ("bottom" == this.affixed) return null != n ? i + this.unpin <= o.top ? !1 : "bottom" : e - r >= i + s ? !1 : "bottom";
                var a = null == this.affixed,
                    u = a ? i : o.top,
                    l = a ? s : t;
                return null != n && n >= i ? "top" : null != r && u + l >= e - r ? "bottom" : !1
            }, n.prototype.getPinnedOffset = function() {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(n.RESET).addClass("affix");
                var e = this.$target.scrollTop(),
                    t = this.$element.offset();
                return this.pinnedOffset = t.top - e
            }, n.prototype.checkPositionWithEventLoop = function() {
                setTimeout(e.proxy(this.checkPosition, this), 1)
            }, n.prototype.checkPosition = function() {
                if (this.$element.is(":visible")) {
                    var t = this.$element.height(),
                        r = this.options.offset,
                        i = r.top,
                        o = r.bottom,
                        s = Math.max(e(document).height(), e(document.body).height());
                    "object" != typeof r && (o = i = r), "function" == typeof i && (i = r.top(this.$element)), "function" == typeof o && (o = r.bottom(this.$element));
                    var a = this.getState(s, t, i, o);
                    if (this.affixed != a) {
                        null != this.unpin && this.$element.css("top", "");
                        var u = "affix" + (a ? "-" + a : ""),
                            l = e.Event(u + ".bs.affix");
                        if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                        this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(u.replace("affix", "affixed") + ".bs.affix")
                    }
                    "bottom" == a && this.$element.offset({
                        top: s - t - o
                    })
                }
            };
            var r = e.fn.affix;
            e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
                return e.fn.affix = r, this
            }, e(window).on("load", function() {
                e('[data-spy="affix"]').each(function() {
                    var n = e(this),
                        r = n.data();
                    r.offset = r.offset || {}, null != r.offsetBottom && (r.offset.bottom = r.offsetBottom), null != r.offsetTop && (r.offset.top = r.offsetTop), t.call(n, r)
                })
            })
        }(jQuery)
    }, {}],
    101: [function(e, t, n) {
        (function(t) {
            "use strict";
            ! function(r) {
                if ("function" == typeof define && define.amd) define(["jquery", "moment"], r);
                else if ("object" == typeof n) r("undefined" != typeof window ? window.jQuery : "undefined" != typeof t ? t.jQuery : null, e("moment"));
                else {
                    if ("undefined" == typeof jQuery) throw "bootstrap-datetimepicker requires jQuery to be loaded first";
                    if ("undefined" == typeof moment) throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
                    r(jQuery, moment)
                }
            }(function(e, t) {
                if (!t) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
                var n = function(n, r) {
                    var i, o, s, a, u, l = {},
                        c = t().startOf("d"),
                        d = c.clone(),
                        h = !0,
                        f = !1,
                        p = !1,
                        m = 0,
                        g = [{
                            clsName: "days",
                            navFnc: "M",
                            navStep: 1
                        }, {
                            clsName: "months",
                            navFnc: "y",
                            navStep: 1
                        }, {
                            clsName: "years",
                            navFnc: "y",
                            navStep: 10
                        }, {
                            clsName: "decades",
                            navFnc: "y",
                            navStep: 100
                        }],
                        v = ["days", "months", "years", "decades"],
                        y = ["top", "bottom", "auto"],
                        _ = ["left", "right", "auto"],
                        b = ["default", "top", "bottom"],
                        w = {
                            up: 38,
                            38: "up",
                            down: 40,
                            40: "down",
                            left: 37,
                            37: "left",
                            right: 39,
                            39: "right",
                            tab: 9,
                            9: "tab",
                            escape: 27,
                            27: "escape",
                            enter: 13,
                            13: "enter",
                            pageUp: 33,
                            33: "pageUp",
                            pageDown: 34,
                            34: "pageDown",
                            shift: 16,
                            16: "shift",
                            control: 17,
                            17: "control",
                            space: 32,
                            32: "space",
                            t: 84,
                            84: "t",
                            "delete": 46,
                            46: "delete"
                        },
                        x = {},
                        k = function(e) {
                            if ("string" != typeof e || e.length > 1) throw new TypeError("isEnabled expects a single character string parameter");
                            switch (e) {
                                case "y":
                                    return -1 !== s.indexOf("Y");
                                case "M":
                                    return -1 !== s.indexOf("M");
                                case "d":
                                    return -1 !== s.toLowerCase().indexOf("d");
                                case "h":
                                case "H":
                                    return -1 !== s.toLowerCase().indexOf("h");
                                case "m":
                                    return -1 !== s.indexOf("m");
                                case "s":
                                    return -1 !== s.indexOf("s");
                                default:
                                    return !1
                            }
                        },
                        C = function() {
                            return k("h") || k("m") || k("s")
                        },
                        D = function() {
                            return k("y") || k("M") || k("d")
                        },
                        $ = function() {
                            var t = e("<thead>").append(e("<tr>").append(e("<th>").addClass("prev").attr("data-action", "previous").append(e("<span>").addClass(r.icons.previous))).append(e("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", r.calendarWeeks ? "6" : "5")).append(e("<th>").addClass("next").attr("data-action", "next").append(e("<span>").addClass(r.icons.next)))),
                                n = e("<tbody>").append(e("<tr>").append(e("<td>").attr("colspan", r.calendarWeeks ? "8" : "7")));
                            return [e("<div>").addClass("datepicker-days").append(e("<table>").addClass("table-condensed").append(t).append(e("<tbody>"))), e("<div>").addClass("datepicker-months").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone())), e("<div>").addClass("datepicker-years").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone())), e("<div>").addClass("datepicker-decades").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone()))]
                        },
                        A = function() {
                            var t = e("<tr>"),
                                n = e("<tr>"),
                                i = e("<tr>");
                            return k("h") && (t.append(e("<td>").append(e("<a>").attr({
                                href: "#",
                                tabindex: "-1",
                                title: "Increment Hour"
                            }).addClass("btn").attr("data-action", "incrementHours").append(e("<span>").addClass(r.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-hour").attr({
                                "data-time-component": "hours",
                                title: "Pick Hour"
                            }).attr("data-action", "showHours"))), i.append(e("<td>").append(e("<a>").attr({
                                href: "#",
                                tabindex: "-1",
                                title: "Decrement Hour"
                            }).addClass("btn").attr("data-action", "decrementHours").append(e("<span>").addClass(r.icons.down))))), k("m") && (k("h") && (t.append(e("<td>").addClass("separator")), n.append(e("<td>").addClass("separator").html(":")), i.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr({
                                href: "#",
                                tabindex: "-1",
                                title: "Increment Minute"
                            }).addClass("btn").attr("data-action", "incrementMinutes").append(e("<span>").addClass(r.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-minute").attr({
                                "data-time-component": "minutes",
                                title: "Pick Minute"
                            }).attr("data-action", "showMinutes"))), i.append(e("<td>").append(e("<a>").attr({
                                href: "#",
                                tabindex: "-1",
                                title: "Decrement Minute"
                            }).addClass("btn").attr("data-action", "decrementMinutes").append(e("<span>").addClass(r.icons.down))))), k("s") && (k("m") && (t.append(e("<td>").addClass("separator")), n.append(e("<td>").addClass("separator").html(":")), i.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr({
                                href: "#",
                                tabindex: "-1",
                                title: "Increment Second"
                            }).addClass("btn").attr("data-action", "incrementSeconds").append(e("<span>").addClass(r.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-second").attr({
                                "data-time-component": "seconds",
                                title: "Pick Second"
                            }).attr("data-action", "showSeconds"))), i.append(e("<td>").append(e("<a>").attr({
                                href: "#",
                                tabindex: "-1",
                                title: "Decrement Second"
                            }).addClass("btn").attr("data-action", "decrementSeconds").append(e("<span>").addClass(r.icons.down))))), o || (t.append(e("<td>").addClass("separator")), n.append(e("<td>").append(e("<button>").addClass("btn btn-primary").attr({
                                "data-action": "togglePeriod",
                                tabindex: "-1",
                                title: "Toggle Period"
                            }))), i.append(e("<td>").addClass("separator"))), e("<div>").addClass("timepicker-picker").append(e("<table>").addClass("table-condensed").append([t, n, i]))
                        },
                        S = function() {
                            var t = e("<div>").addClass("timepicker-hours").append(e("<table>").addClass("table-condensed")),
                                n = e("<div>").addClass("timepicker-minutes").append(e("<table>").addClass("table-condensed")),
                                r = e("<div>").addClass("timepicker-seconds").append(e("<table>").addClass("table-condensed")),
                                i = [A()];
                            return k("h") && i.push(t), k("m") && i.push(n), k("s") && i.push(r), i
                        },
                        T = function() {
                            var t = [];
                            return r.showTodayButton && t.push(e("<td>").append(e("<a>").attr({
                                "data-action": "today",
                                title: r.tooltips.today
                            }).append(e("<span>").addClass(r.icons.today)))), !r.sideBySide && D() && C() && t.push(e("<td>").append(e("<a>").attr({
                                "data-action": "togglePicker",
                                title: "Select Time"
                            }).append(e("<span>").addClass(r.icons.time)))), r.showClear && t.push(e("<td>").append(e("<a>").attr({
                                "data-action": "clear",
                                title: r.tooltips.clear
                            }).append(e("<span>").addClass(r.icons.clear)))), r.showClose && t.push(e("<td>").append(e("<a>").attr({
                                "data-action": "close",
                                title: r.tooltips.close
                            }).append(e("<span>").addClass(r.icons.close)))), e("<table>").addClass("table-condensed").append(e("<tbody>").append(e("<tr>").append(t)))
                        },
                        E = function() {
                            var t = e("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
                                n = e("<div>").addClass("datepicker").append($()),
                                i = e("<div>").addClass("timepicker").append(S()),
                                s = e("<ul>").addClass("list-unstyled"),
                                a = e("<li>").addClass("picker-switch" + (r.collapse ? " accordion-toggle" : "")).append(T());
                            return r.inline && t.removeClass("dropdown-menu"), o && t.addClass("usetwentyfour"), k("s") && !o && t.addClass("wider"), r.sideBySide && D() && C() ? (t.addClass("timepicker-sbs"), "top" === r.toolbarPlacement && t.append(a), t.append(e("<div>").addClass("row").append(n.addClass("col-md-6")).append(i.addClass("col-md-6"))), "bottom" === r.toolbarPlacement && t.append(a), t) : ("top" === r.toolbarPlacement && s.append(a), D() && s.append(e("<li>").addClass(r.collapse && C() ? "collapse in" : "").append(n)), "default" === r.toolbarPlacement && s.append(a), C() && s.append(e("<li>").addClass(r.collapse && D() ? "collapse" : "").append(i)), "bottom" === r.toolbarPlacement && s.append(a), t.append(s))
                        },
                        O = function() {
                            var t, i = {};
                            return t = n.is("input") || r.inline ? n.data() : n.find("input").data(), t.dateOptions && t.dateOptions instanceof Object && (i = e.extend(!0, i, t.dateOptions)), e.each(r, function(e) {
                                var n = "date" + e.charAt(0).toUpperCase() + e.slice(1);
                                void 0 !== t[n] && (i[e] = t[n])
                            }), i
                        },
                        P = function() {
                            var t, i = (f || n).position(),
                                o = (f || n).offset(),
                                s = r.widgetPositioning.vertical,
                                a = r.widgetPositioning.horizontal;
                            if (r.widgetParent) t = r.widgetParent.append(p);
                            else if (n.is("input")) t = n.after(p).parent();
                            else {
                                if (r.inline) return void(t = n.append(p));
                                t = n, n.children().first().after(p)
                            }
                            if ("auto" === s && (s = o.top + 1.5 * p.height() >= e(window).height() + e(window).scrollTop() && p.height() + n.outerHeight() < o.top ? "top" : "bottom"), "auto" === a && (a = t.width() < o.left + p.outerWidth() / 2 && o.left + p.outerWidth() > e(window).width() ? "right" : "left"), "top" === s ? p.addClass("top").removeClass("bottom") : p.addClass("bottom").removeClass("top"), "right" === a ? p.addClass("pull-right") : p.removeClass("pull-right"), "relative" !== t.css("position") && (t = t.parents().filter(function() {
                                    return "relative" === e(this).css("position")
                                }).first()), 0 === t.length) throw new Error("datetimepicker component should be placed within a relative positioned container");
                            p.css({
                                top: "top" === s ? "auto" : i.top + n.outerHeight(),
                                bottom: "top" === s ? i.top + n.outerHeight() : "auto",
                                left: "left" === a ? t === n ? 0 : i.left : "auto",
                                right: "left" === a ? "auto" : t.outerWidth() - n.outerWidth() - (t === n ? 0 : i.left)
                            })
                        },
                        j = function(e) {
                            "dp.change" === e.type && (e.date && e.date.isSame(e.oldDate) || !e.date && !e.oldDate) || n.trigger(e)
                        },
                        I = function(e) {
                            "y" === e && (e = "YYYY"), j({
                                type: "dp.update",
                                change: e,
                                viewDate: d.clone()
                            })
                        },
                        M = function(e) {
                            p && (e && (u = Math.max(m, Math.min(3, u + e))), p.find(".datepicker > div").hide().filter(".datepicker-" + g[u].clsName).show())
                        },
                        N = function() {
                            var t = e("<tr>"),
                                n = d.clone().startOf("w").startOf("d");
                            for (r.calendarWeeks === !0 && t.append(e("<th>").addClass("cw").text("#")); n.isBefore(d.clone().endOf("w"));) t.append(e("<th>").addClass("dow").text(n.format("dd"))), n.add(1, "d");
                            p.find(".datepicker-days thead").append(t)
                        },
                        R = function(e) {
                            return r.disabledDates[e.format("YYYY-MM-DD")] === !0
                        },
                        q = function(e) {
                            return r.enabledDates[e.format("YYYY-MM-DD")] === !0
                        },
                        z = function(e) {
                            return r.disabledHours[e.format("H")] === !0
                        },
                        L = function(e) {
                            return r.enabledHours[e.format("H")] === !0
                        },
                        F = function(t, n) {
                            if (!t.isValid()) return !1;
                            if (r.disabledDates && "d" === n && R(t)) return !1;
                            if (r.enabledDates && "d" === n && !q(t)) return !1;
                            if (r.minDate && t.isBefore(r.minDate, n)) return !1;
                            if (r.maxDate && t.isAfter(r.maxDate, n)) return !1;
                            if (r.daysOfWeekDisabled && "d" === n && -1 !== r.daysOfWeekDisabled.indexOf(t.day())) return !1;
                            if (r.disabledHours && ("h" === n || "m" === n || "s" === n) && z(t)) return !1;
                            if (r.enabledHours && ("h" === n || "m" === n || "s" === n) && !L(t)) return !1;
                            if (r.disabledTimeIntervals && ("h" === n || "m" === n || "s" === n)) {
                                var i = !1;
                                if (e.each(r.disabledTimeIntervals, function() {
                                        return t.isBetween(this[0], this[1]) ? (i = !0, !1) : void 0
                                    }), i) return !1
                            }
                            return !0
                        },
                        U = function() {
                            for (var t = [], n = d.clone().startOf("y").startOf("d"); n.isSame(d, "y");) t.push(e("<span>").attr("data-action", "selectMonth").addClass("month").text(n.format("MMM"))), n.add(1, "M");
                            p.find(".datepicker-months td").empty().append(t)
                        },
                        Y = function() {
                            var t = p.find(".datepicker-months"),
                                n = t.find("th"),
                                i = t.find("tbody").find("span");
                            n.eq(0).find("span").attr("title", r.tooltips.prevYear), n.eq(1).attr("title", r.tooltips.selectYear), n.eq(2).find("span").attr("title", r.tooltips.nextYear), t.find(".disabled").removeClass("disabled"), F(d.clone().subtract(1, "y"), "y") || n.eq(0).addClass("disabled"), n.eq(1).text(d.year()), F(d.clone().add(1, "y"), "y") || n.eq(2).addClass("disabled"), i.removeClass("active"), c.isSame(d, "y") && !h && i.eq(c.month()).addClass("active"), i.each(function(t) {
                                F(d.clone().month(t), "M") || e(this).addClass("disabled")
                            })
                        },
                        H = function() {
                            var e = p.find(".datepicker-years"),
                                t = e.find("th"),
                                n = d.clone().subtract(5, "y"),
                                i = d.clone().add(6, "y"),
                                o = "";
                            for (t.eq(0).find("span").attr("title", r.tooltips.nextDecade), t.eq(1).attr("title", r.tooltips.selectDecade), t.eq(2).find("span").attr("title", r.tooltips.prevDecade), e.find(".disabled").removeClass("disabled"), r.minDate && r.minDate.isAfter(n, "y") && t.eq(0).addClass("disabled"), t.eq(1).text(n.year() + "-" + i.year()), r.maxDate && r.maxDate.isBefore(i, "y") && t.eq(2).addClass("disabled"); !n.isAfter(i, "y");) o += '<span data-action="selectYear" class="year' + (n.isSame(c, "y") && !h ? " active" : "") + (F(n, "y") ? "" : " disabled") + '">' + n.year() + "</span>", n.add(1, "y");
                            e.find("td").html(o)
                        },
                        V = function() {
                            var e = p.find(".datepicker-decades"),
                                n = e.find("th"),
                                i = t(d.isBefore(t({
                                    y: 1999
                                })) ? {
                                    y: 1899
                                } : {
                                    y: 1999
                                }),
                                o = i.clone().add(100, "y"),
                                s = "";
                            for (n.eq(0).find("span").attr("title", r.tooltips.prevCentury), n.eq(2).find("span").attr("title", r.tooltips.nextCentury), e.find(".disabled").removeClass("disabled"), (i.isSame(t({
                                    y: 1900
                                })) || r.minDate && r.minDate.isAfter(i, "y")) && n.eq(0).addClass("disabled"), n.eq(1).text(i.year() + "-" + o.year()), (i.isSame(t({
                                    y: 2e3
                                })) || r.maxDate && r.maxDate.isBefore(o, "y")) && n.eq(2).addClass("disabled"); !i.isAfter(o, "y");) s += '<span data-action="selectDecade" class="decade' + (i.isSame(c, "y") ? " active" : "") + (F(i, "y") ? "" : " disabled") + '" data-selection="' + (i.year() + 6) + '">' + (i.year() + 1) + " - " + (i.year() + 12) + "</span>", i.add(12, "y");
                            s += "<span></span><span></span><span></span>", e.find("td").html(s)
                        },
                        Q = function() {
                            var n, i, o, s, a = p.find(".datepicker-days"),
                                u = a.find("th"),
                                l = [];
                            if (D()) {
                                for (u.eq(0).find("span").attr("title", r.tooltips.prevMonth), u.eq(1).attr("title", r.tooltips.selectMonth), u.eq(2).find("span").attr("title", r.tooltips.nextMonth), a.find(".disabled").removeClass("disabled"), u.eq(1).text(d.format(r.dayViewHeaderFormat)), F(d.clone().subtract(1, "M"), "M") || u.eq(0).addClass("disabled"), F(d.clone().add(1, "M"), "M") || u.eq(2).addClass("disabled"), n = d.clone().startOf("M").startOf("w").startOf("d"), s = 0; 42 > s; s++) 0 === n.weekday() && (i = e("<tr>"), r.calendarWeeks && i.append('<td class="cw">' + n.week() + "</td>"), l.push(i)), o = "", n.isBefore(d, "M") && (o += " old"), n.isAfter(d, "M") && (o += " new"), n.isSame(c, "d") && !h && (o += " active"), F(n, "d") || (o += " disabled"), n.isSame(t(), "d") && (o += " today"), (0 === n.day() || 6 === n.day()) && (o += " weekend"), i.append('<td data-action="selectDay" data-day="' + n.format("L") + '" class="day' + o + '">' + n.date() + "</td>"), n.add(1, "d");
                                a.find("tbody").empty().append(l), Y(), H(), V()
                            }
                        },
                        W = function() {
                            var t = p.find(".timepicker-hours table"),
                                n = d.clone().startOf("d"),
                                r = [],
                                i = e("<tr>");
                            for (d.hour() > 11 && !o && n.hour(12); n.isSame(d, "d") && (o || d.hour() < 12 && n.hour() < 12 || d.hour() > 11);) n.hour() % 4 === 0 && (i = e("<tr>"), r.push(i)), i.append('<td data-action="selectHour" class="hour' + (F(n, "h") ? "" : " disabled") + '">' + n.format(o ? "HH" : "hh") + "</td>"), n.add(1, "h");
                            t.empty().append(r)
                        },
                        B = function() {
                            for (var t = p.find(".timepicker-minutes table"), n = d.clone().startOf("h"), i = [], o = e("<tr>"), s = 1 === r.stepping ? 5 : r.stepping; d.isSame(n, "h");) n.minute() % (4 * s) === 0 && (o = e("<tr>"), i.push(o)), o.append('<td data-action="selectMinute" class="minute' + (F(n, "m") ? "" : " disabled") + '">' + n.format("mm") + "</td>"), n.add(s, "m");
                            t.empty().append(i)
                        },
                        G = function() {
                            for (var t = p.find(".timepicker-seconds table"), n = d.clone().startOf("m"), r = [], i = e("<tr>"); d.isSame(n, "m");) n.second() % 20 === 0 && (i = e("<tr>"),
                                r.push(i)), i.append('<td data-action="selectSecond" class="second' + (F(n, "s") ? "" : " disabled") + '">' + n.format("ss") + "</td>"), n.add(5, "s");
                            t.empty().append(r)
                        },
                        K = function() {
                            var e, t, n = p.find(".timepicker span[data-time-component]");
                            o || (e = p.find(".timepicker [data-action=togglePeriod]"), t = c.clone().add(c.hours() >= 12 ? -12 : 12, "h"), e.text(c.format("A")), F(t, "h") ? e.removeClass("disabled") : e.addClass("disabled")), n.filter("[data-time-component=hours]").text(c.format(o ? "HH" : "hh")), n.filter("[data-time-component=minutes]").text(c.format("mm")), n.filter("[data-time-component=seconds]").text(c.format("ss")), W(), B(), G()
                        },
                        Z = function() {
                            p && (Q(), K())
                        },
                        J = function(e) {
                            var t = h ? null : c;
                            return e ? (e = e.clone().locale(r.locale), 1 !== r.stepping && e.minutes(Math.round(e.minutes() / r.stepping) * r.stepping % 60).seconds(0), void(F(e) ? (c = e, d = c.clone(), i.val(c.format(s)), n.data("date", c.format(s)), h = !1, Z(), j({
                                type: "dp.change",
                                date: c.clone(),
                                oldDate: t
                            })) : (r.keepInvalid || i.val(h ? "" : c.format(s)), j({
                                type: "dp.error",
                                date: e
                            })))) : (h = !0, i.val(""), n.data("date", ""), j({
                                type: "dp.change",
                                date: !1,
                                oldDate: t
                            }), void Z())
                        },
                        X = function() {
                            var t = !1;
                            return p ? (p.find(".collapse").each(function() {
                                var n = e(this).data("collapse");
                                return n && n.transitioning ? (t = !0, !1) : !0
                            }), t ? l : (f && f.hasClass("btn") && f.toggleClass("active"), p.hide(), e(window).off("resize", P), p.off("click", "[data-action]"), p.off("mousedown", !1), p.remove(), p = !1, j({
                                type: "dp.hide",
                                date: c.clone()
                            }), i.blur(), l)) : l
                        },
                        ee = function() {
                            J(null)
                        },
                        te = {
                            next: function() {
                                var e = g[u].navFnc;
                                d.add(g[u].navStep, e), Q(), I(e)
                            },
                            previous: function() {
                                var e = g[u].navFnc;
                                d.subtract(g[u].navStep, e), Q(), I(e)
                            },
                            pickerSwitch: function() {
                                M(1)
                            },
                            selectMonth: function(t) {
                                var n = e(t.target).closest("tbody").find("span").index(e(t.target));
                                d.month(n), u === m ? (J(c.clone().year(d.year()).month(d.month())), r.inline || X()) : (M(-1), Q()), I("M")
                            },
                            selectYear: function(t) {
                                var n = parseInt(e(t.target).text(), 10) || 0;
                                d.year(n), u === m ? (J(c.clone().year(d.year())), r.inline || X()) : (M(-1), Q()), I("YYYY")
                            },
                            selectDecade: function(t) {
                                var n = parseInt(e(t.target).data("selection"), 10) || 0;
                                d.year(n), u === m ? (J(c.clone().year(d.year())), r.inline || X()) : (M(-1), Q()), I("YYYY")
                            },
                            selectDay: function(t) {
                                var n = d.clone();
                                e(t.target).is(".old") && n.subtract(1, "M"), e(t.target).is(".new") && n.add(1, "M"), J(n.date(parseInt(e(t.target).text(), 10))), C() || r.keepOpen || r.inline || X()
                            },
                            incrementHours: function() {
                                var e = c.clone().add(1, "h");
                                F(e, "h") && J(e)
                            },
                            incrementMinutes: function() {
                                var e = c.clone().add(r.stepping, "m");
                                F(e, "m") && J(e)
                            },
                            incrementSeconds: function() {
                                var e = c.clone().add(1, "s");
                                F(e, "s") && J(e)
                            },
                            decrementHours: function() {
                                var e = c.clone().subtract(1, "h");
                                F(e, "h") && J(e)
                            },
                            decrementMinutes: function() {
                                var e = c.clone().subtract(r.stepping, "m");
                                F(e, "m") && J(e)
                            },
                            decrementSeconds: function() {
                                var e = c.clone().subtract(1, "s");
                                F(e, "s") && J(e)
                            },
                            togglePeriod: function() {
                                J(c.clone().add(c.hours() >= 12 ? -12 : 12, "h"))
                            },
                            togglePicker: function(t) {
                                var n, i = e(t.target),
                                    o = i.closest("ul"),
                                    s = o.find(".in"),
                                    a = o.find(".collapse:not(.in)");
                                if (s && s.length) {
                                    if (n = s.data("collapse"), n && n.transitioning) return;
                                    s.collapse ? (s.collapse("hide"), a.collapse("show")) : (s.removeClass("in"), a.addClass("in")), i.is("span") ? i.toggleClass(r.icons.time + " " + r.icons.date) : i.find("span").toggleClass(r.icons.time + " " + r.icons.date)
                                }
                            },
                            showPicker: function() {
                                p.find(".timepicker > div:not(.timepicker-picker)").hide(), p.find(".timepicker .timepicker-picker").show()
                            },
                            showHours: function() {
                                p.find(".timepicker .timepicker-picker").hide(), p.find(".timepicker .timepicker-hours").show()
                            },
                            showMinutes: function() {
                                p.find(".timepicker .timepicker-picker").hide(), p.find(".timepicker .timepicker-minutes").show()
                            },
                            showSeconds: function() {
                                p.find(".timepicker .timepicker-picker").hide(), p.find(".timepicker .timepicker-seconds").show()
                            },
                            selectHour: function(t) {
                                var n = parseInt(e(t.target).text(), 10);
                                o || (c.hours() >= 12 ? 12 !== n && (n += 12) : 12 === n && (n = 0)), J(c.clone().hours(n)), te.showPicker.call(l)
                            },
                            selectMinute: function(t) {
                                J(c.clone().minutes(parseInt(e(t.target).text(), 10))), te.showPicker.call(l)
                            },
                            selectSecond: function(t) {
                                J(c.clone().seconds(parseInt(e(t.target).text(), 10))), te.showPicker.call(l)
                            },
                            clear: ee,
                            today: function() {
                                F(t(), "d") && J(t())
                            },
                            close: X
                        },
                        ne = function(t) {
                            return e(t.currentTarget).is(".disabled") ? !1 : (te[e(t.currentTarget).data("action")].apply(l, arguments), !1)
                        },
                        re = function() {
                            var n, o = {
                                year: function(e) {
                                    return e.month(0).date(1).hours(0).seconds(0).minutes(0)
                                },
                                month: function(e) {
                                    return e.date(1).hours(0).seconds(0).minutes(0)
                                },
                                day: function(e) {
                                    return e.hours(0).seconds(0).minutes(0)
                                },
                                hour: function(e) {
                                    return e.seconds(0).minutes(0)
                                },
                                minute: function(e) {
                                    return e.seconds(0)
                                }
                            };
                            return i.prop("disabled") || !r.ignoreReadonly && i.prop("readonly") || p ? l : (void 0 !== i.val() && 0 !== i.val().trim().length ? J(oe(i.val().trim())) : r.useCurrent && h && (i.is("input") && 0 === i.val().trim().length || r.inline) && (n = t(), "string" == typeof r.useCurrent && (n = o[r.useCurrent](n)), J(n)), p = E(), N(), U(), p.find(".timepicker-hours").hide(), p.find(".timepicker-minutes").hide(), p.find(".timepicker-seconds").hide(), Z(), M(), e(window).on("resize", P), p.on("click", "[data-action]", ne), p.on("mousedown", !1), f && f.hasClass("btn") && f.toggleClass("active"), p.show(), P(), r.focusOnShow && !i.is(":focus") && i.focus(), j({
                                type: "dp.show"
                            }), l)
                        },
                        ie = function() {
                            return p ? X() : re()
                        },
                        oe = function(e) {
                            return e = void 0 === r.parseInputDate ? t.isMoment(e) || e instanceof Date ? t(e) : t(e, a, r.useStrict) : r.parseInputDate(e), e.locale(r.locale), e
                        },
                        se = function(e) {
                            var t, n, i, o, s = null,
                                a = [],
                                u = {},
                                c = e.which,
                                d = "p";
                            x[c] = d;
                            for (t in x) x.hasOwnProperty(t) && x[t] === d && (a.push(t), parseInt(t, 10) !== c && (u[t] = !0));
                            for (t in r.keyBinds)
                                if (r.keyBinds.hasOwnProperty(t) && "function" == typeof r.keyBinds[t] && (i = t.split(" "), i.length === a.length && w[c] === i[i.length - 1])) {
                                    for (o = !0, n = i.length - 2; n >= 0; n--)
                                        if (!(w[i[n]] in u)) {
                                            o = !1;
                                            break
                                        }
                                    if (o) {
                                        s = r.keyBinds[t];
                                        break
                                    }
                                }
                            s && (s.call(l, p), e.stopPropagation(), e.preventDefault())
                        },
                        ae = function(e) {
                            x[e.which] = "r", e.stopPropagation(), e.preventDefault()
                        },
                        ue = function(t) {
                            var n = e(t.target).val().trim(),
                                r = n ? oe(n) : null;
                            return J(r), t.stopImmediatePropagation(), !1
                        },
                        le = function() {
                            i.on({
                                change: ue,
                                blur: r.debug ? "" : X,
                                keydown: se,
                                keyup: ae,
                                focus: r.allowInputToggle ? re : ""
                            }), n.is("input") ? i.on({
                                focus: re
                            }) : f && (f.on("click", ie), f.on("mousedown", !1))
                        },
                        ce = function() {
                            i.off({
                                change: ue,
                                blur: blur,
                                keydown: se,
                                keyup: ae,
                                focus: r.allowInputToggle ? X : ""
                            }), n.is("input") ? i.off({
                                focus: re
                            }) : f && (f.off("click", ie), f.off("mousedown", !1))
                        },
                        de = function(t) {
                            var n = {};
                            return e.each(t, function() {
                                var e = oe(this);
                                e.isValid() && (n[e.format("YYYY-MM-DD")] = !0)
                            }), Object.keys(n).length ? n : !1
                        },
                        he = function(t) {
                            var n = {};
                            return e.each(t, function() {
                                n[this] = !0
                            }), Object.keys(n).length ? n : !1
                        },
                        fe = function() {
                            var e = r.format || "L LT";
                            s = e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(e) {
                                var t = c.localeData().longDateFormat(e) || e;
                                return t.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(e) {
                                    return c.localeData().longDateFormat(e) || e
                                })
                            }), a = r.extraFormats ? r.extraFormats.slice() : [], a.indexOf(e) < 0 && a.indexOf(s) < 0 && a.push(s), o = s.toLowerCase().indexOf("a") < 1 && s.replace(/\[.*?\]/g, "").indexOf("h") < 1, k("y") && (m = 2), k("M") && (m = 1), k("d") && (m = 0), u = Math.max(m, u), h || J(c)
                        };
                    if (l.destroy = function() {
                            X(), ce(), n.removeData("DateTimePicker"), n.removeData("date")
                        }, l.toggle = ie, l.show = re, l.hide = X, l.disable = function() {
                            return X(), f && f.hasClass("btn") && f.addClass("disabled"), i.prop("disabled", !0), l
                        }, l.enable = function() {
                            return f && f.hasClass("btn") && f.removeClass("disabled"), i.prop("disabled", !1), l
                        }, l.ignoreReadonly = function(e) {
                            if (0 === arguments.length) return r.ignoreReadonly;
                            if ("boolean" != typeof e) throw new TypeError("ignoreReadonly () expects a boolean parameter");
                            return r.ignoreReadonly = e, l
                        }, l.options = function(t) {
                            if (0 === arguments.length) return e.extend(!0, {}, r);
                            if (!(t instanceof Object)) throw new TypeError("options() options parameter should be an object");
                            return e.extend(!0, r, t), e.each(r, function(e, t) {
                                if (void 0 === l[e]) throw new TypeError("option " + e + " is not recognized!");
                                l[e](t)
                            }), l
                        }, l.date = function(e) {
                            if (0 === arguments.length) return h ? null : c.clone();
                            if (!(null === e || "string" == typeof e || t.isMoment(e) || e instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
                            return J(null === e ? null : oe(e)), l
                        }, l.format = function(e) {
                            if (0 === arguments.length) return r.format;
                            if ("string" != typeof e && ("boolean" != typeof e || e !== !1)) throw new TypeError("format() expects a sting or boolean:false parameter " + e);
                            return r.format = e, s && fe(), l
                        }, l.dayViewHeaderFormat = function(e) {
                            if (0 === arguments.length) return r.dayViewHeaderFormat;
                            if ("string" != typeof e) throw new TypeError("dayViewHeaderFormat() expects a string parameter");
                            return r.dayViewHeaderFormat = e, l
                        }, l.extraFormats = function(e) {
                            if (0 === arguments.length) return r.extraFormats;
                            if (e !== !1 && !(e instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter");
                            return r.extraFormats = e, a && fe(), l
                        }, l.disabledDates = function(t) {
                            if (0 === arguments.length) return r.disabledDates ? e.extend({}, r.disabledDates) : r.disabledDates;
                            if (!t) return r.disabledDates = !1, Z(), l;
                            if (!(t instanceof Array)) throw new TypeError("disabledDates() expects an array parameter");
                            return r.disabledDates = de(t), r.enabledDates = !1, Z(), l
                        }, l.enabledDates = function(t) {
                            if (0 === arguments.length) return r.enabledDates ? e.extend({}, r.enabledDates) : r.enabledDates;
                            if (!t) return r.enabledDates = !1, Z(), l;
                            if (!(t instanceof Array)) throw new TypeError("enabledDates() expects an array parameter");
                            return r.enabledDates = de(t), r.disabledDates = !1, Z(), l
                        }, l.daysOfWeekDisabled = function(e) {
                            if (0 === arguments.length) return r.daysOfWeekDisabled.splice(0);
                            if ("boolean" == typeof e && !e) return r.daysOfWeekDisabled = !1, Z(), l;
                            if (!(e instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");
                            if (r.daysOfWeekDisabled = e.reduce(function(e, t) {
                                    return t = parseInt(t, 10), t > 6 || 0 > t || isNaN(t) ? e : (-1 === e.indexOf(t) && e.push(t), e)
                                }, []).sort(), r.useCurrent && !r.keepInvalid) {
                                for (var t = 0; !F(c, "d");) {
                                    if (c.add(1, "d"), 7 === t) throw "Tried 7 times to find a valid date";
                                    t++
                                }
                                J(c)
                            }
                            return Z(), l
                        }, l.maxDate = function(e) {
                            if (0 === arguments.length) return r.maxDate ? r.maxDate.clone() : r.maxDate;
                            if ("boolean" == typeof e && e === !1) return r.maxDate = !1, Z(), l;
                            "string" == typeof e && ("now" === e || "moment" === e) && (e = t());
                            var n = oe(e);
                            if (!n.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + e);
                            if (r.minDate && n.isBefore(r.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + n.format(s));
                            return r.maxDate = n, r.useCurrent && !r.keepInvalid && c.isAfter(e) && J(r.maxDate), d.isAfter(n) && (d = n.clone().subtract(r.stepping, "m")), Z(), l
                        }, l.minDate = function(e) {
                            if (0 === arguments.length) return r.minDate ? r.minDate.clone() : r.minDate;
                            if ("boolean" == typeof e && e === !1) return r.minDate = !1, Z(), l;
                            "string" == typeof e && ("now" === e || "moment" === e) && (e = t());
                            var n = oe(e);
                            if (!n.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + e);
                            if (r.maxDate && n.isAfter(r.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + n.format(s));
                            return r.minDate = n, r.useCurrent && !r.keepInvalid && c.isBefore(e) && J(r.minDate), d.isBefore(n) && (d = n.clone().add(r.stepping, "m")), Z(), l
                        }, l.defaultDate = function(e) {
                            if (0 === arguments.length) return r.defaultDate ? r.defaultDate.clone() : r.defaultDate;
                            if (!e) return r.defaultDate = !1, l;
                            "string" == typeof e && ("now" === e || "moment" === e) && (e = t());
                            var n = oe(e);
                            if (!n.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + e);
                            if (!F(n)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
                            return r.defaultDate = n, (r.defaultDate && r.inline || "" === i.val().trim() && void 0 === i.attr("placeholder")) && J(r.defaultDate), l
                        }, l.locale = function(e) {
                            if (0 === arguments.length) return r.locale;
                            if (!t.localeData(e)) throw new TypeError("locale() locale " + e + " is not loaded from moment locales!");
                            return r.locale = e, c.locale(r.locale), d.locale(r.locale), s && fe(), p && (X(), re()), l
                        }, l.stepping = function(e) {
                            return 0 === arguments.length ? r.stepping : (e = parseInt(e, 10), (isNaN(e) || 1 > e) && (e = 1), r.stepping = e, l)
                        }, l.useCurrent = function(e) {
                            var t = ["year", "month", "day", "hour", "minute"];
                            if (0 === arguments.length) return r.useCurrent;
                            if ("boolean" != typeof e && "string" != typeof e) throw new TypeError("useCurrent() expects a boolean or string parameter");
                            if ("string" == typeof e && -1 === t.indexOf(e.toLowerCase())) throw new TypeError("useCurrent() expects a string parameter of " + t.join(", "));
                            return r.useCurrent = e, l
                        }, l.collapse = function(e) {
                            if (0 === arguments.length) return r.collapse;
                            if ("boolean" != typeof e) throw new TypeError("collapse() expects a boolean parameter");
                            return r.collapse === e ? l : (r.collapse = e, p && (X(), re()), l)
                        }, l.icons = function(t) {
                            if (0 === arguments.length) return e.extend({}, r.icons);
                            if (!(t instanceof Object)) throw new TypeError("icons() expects parameter to be an Object");
                            return e.extend(r.icons, t), p && (X(), re()), l
                        }, l.tooltips = function(t) {
                            if (0 === arguments.length) return e.extend({}, r.tooltips);
                            if (!(t instanceof Object)) throw new TypeError("tooltips() expects parameter to be an Object");
                            return e.extend(r.tooltips, t), p && (X(), re()), l
                        }, l.useStrict = function(e) {
                            if (0 === arguments.length) return r.useStrict;
                            if ("boolean" != typeof e) throw new TypeError("useStrict() expects a boolean parameter");
                            return r.useStrict = e, l
                        }, l.sideBySide = function(e) {
                            if (0 === arguments.length) return r.sideBySide;
                            if ("boolean" != typeof e) throw new TypeError("sideBySide() expects a boolean parameter");
                            return r.sideBySide = e, p && (X(), re()), l
                        }, l.viewMode = function(e) {
                            if (0 === arguments.length) return r.viewMode;
                            if ("string" != typeof e) throw new TypeError("viewMode() expects a string parameter");
                            if (-1 === v.indexOf(e)) throw new TypeError("viewMode() parameter must be one of (" + v.join(", ") + ") value");
                            return r.viewMode = e, u = Math.max(v.indexOf(e), m), M(), l
                        }, l.toolbarPlacement = function(e) {
                            if (0 === arguments.length) return r.toolbarPlacement;
                            if ("string" != typeof e) throw new TypeError("toolbarPlacement() expects a string parameter");
                            if (-1 === b.indexOf(e)) throw new TypeError("toolbarPlacement() parameter must be one of (" + b.join(", ") + ") value");
                            return r.toolbarPlacement = e, p && (X(), re()), l
                        }, l.widgetPositioning = function(t) {
                            if (0 === arguments.length) return e.extend({}, r.widgetPositioning);
                            if ("[object Object]" !== {}.toString.call(t)) throw new TypeError("widgetPositioning() expects an object variable");
                            if (t.horizontal) {
                                if ("string" != typeof t.horizontal) throw new TypeError("widgetPositioning() horizontal variable must be a string");
                                if (t.horizontal = t.horizontal.toLowerCase(), -1 === _.indexOf(t.horizontal)) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + _.join(", ") + ")");
                                r.widgetPositioning.horizontal = t.horizontal
                            }
                            if (t.vertical) {
                                if ("string" != typeof t.vertical) throw new TypeError("widgetPositioning() vertical variable must be a string");
                                if (t.vertical = t.vertical.toLowerCase(), -1 === y.indexOf(t.vertical)) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + y.join(", ") + ")");
                                r.widgetPositioning.vertical = t.vertical
                            }
                            return Z(), l
                        }, l.calendarWeeks = function(e) {
                            if (0 === arguments.length) return r.calendarWeeks;
                            if ("boolean" != typeof e) throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
                            return r.calendarWeeks = e, Z(), l
                        }, l.showTodayButton = function(e) {
                            if (0 === arguments.length) return r.showTodayButton;
                            if ("boolean" != typeof e) throw new TypeError("showTodayButton() expects a boolean parameter");
                            return r.showTodayButton = e, p && (X(), re()), l
                        }, l.showClear = function(e) {
                            if (0 === arguments.length) return r.showClear;
                            if ("boolean" != typeof e) throw new TypeError("showClear() expects a boolean parameter");
                            return r.showClear = e, p && (X(), re()), l
                        }, l.widgetParent = function(t) {
                            if (0 === arguments.length) return r.widgetParent;
                            if ("string" == typeof t && (t = e(t)), null !== t && "string" != typeof t && !(t instanceof e)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
                            return r.widgetParent = t, p && (X(), re()), l
                        }, l.keepOpen = function(e) {
                            if (0 === arguments.length) return r.keepOpen;
                            if ("boolean" != typeof e) throw new TypeError("keepOpen() expects a boolean parameter");
                            return r.keepOpen = e, l
                        }, l.focusOnShow = function(e) {
                            if (0 === arguments.length) return r.focusOnShow;
                            if ("boolean" != typeof e) throw new TypeError("focusOnShow() expects a boolean parameter");
                            return r.focusOnShow = e, l
                        }, l.inline = function(e) {
                            if (0 === arguments.length) return r.inline;
                            if ("boolean" != typeof e) throw new TypeError("inline() expects a boolean parameter");
                            return r.inline = e, l
                        }, l.clear = function() {
                            return ee(), l
                        }, l.keyBinds = function(e) {
                            return r.keyBinds = e, l
                        }, l.debug = function(e) {
                            if ("boolean" != typeof e) throw new TypeError("debug() expects a boolean parameter");
                            return r.debug = e, l
                        }, l.allowInputToggle = function(e) {
                            if (0 === arguments.length) return r.allowInputToggle;
                            if ("boolean" != typeof e) throw new TypeError("allowInputToggle() expects a boolean parameter");
                            return r.allowInputToggle = e, l
                        }, l.showClose = function(e) {
                            if (0 === arguments.length) return r.showClose;
                            if ("boolean" != typeof e) throw new TypeError("showClose() expects a boolean parameter");
                            return r.showClose = e, l
                        }, l.keepInvalid = function(e) {
                            if (0 === arguments.length) return r.keepInvalid;
                            if ("boolean" != typeof e) throw new TypeError("keepInvalid() expects a boolean parameter");
                            return r.keepInvalid = e, l
                        }, l.datepickerInput = function(e) {
                            if (0 === arguments.length) return r.datepickerInput;
                            if ("string" != typeof e) throw new TypeError("datepickerInput() expects a string parameter");
                            return r.datepickerInput = e, l
                        }, l.parseInputDate = function(e) {
                            if (0 === arguments.length) return r.parseInputDate;
                            if ("function" != typeof e) throw new TypeError("parseInputDate() sholud be as function");
                            return r.parseInputDate = e, l
                        }, l.disabledTimeIntervals = function(t) {
                            if (0 === arguments.length) return r.disabledTimeIntervals ? e.extend({}, r.disabledTimeIntervals) : r.disabledTimeIntervals;
                            if (!t) return r.disabledTimeIntervals = !1, Z(), l;
                            if (!(t instanceof Array)) throw new TypeError("disabledTimeIntervals() expects an array parameter");
                            return r.disabledTimeIntervals = t, Z(), l
                        }, l.disabledHours = function(t) {
                            if (0 === arguments.length) return r.disabledHours ? e.extend({}, r.disabledHours) : r.disabledHours;
                            if (!t) return r.disabledHours = !1, Z(), l;
                            if (!(t instanceof Array)) throw new TypeError("disabledHours() expects an array parameter");
                            if (r.disabledHours = he(t), r.enabledHours = !1, r.useCurrent && !r.keepInvalid) {
                                for (var n = 0; !F(c, "h");) {
                                    if (c.add(1, "h"), 24 === n) throw "Tried 24 times to find a valid date";
                                    n++
                                }
                                J(c)
                            }
                            return Z(), l
                        }, l.enabledHours = function(t) {
                            if (0 === arguments.length) return r.enabledHours ? e.extend({}, r.enabledHours) : r.enabledHours;
                            if (!t) return r.enabledHours = !1, Z(), l;
                            if (!(t instanceof Array)) throw new TypeError("enabledHours() expects an array parameter");
                            if (r.enabledHours = he(t), r.disabledHours = !1, r.useCurrent && !r.keepInvalid) {
                                for (var n = 0; !F(c, "h");) {
                                    if (c.add(1, "h"), 24 === n) throw "Tried 24 times to find a valid date";
                                    n++
                                }
                                J(c)
                            }
                            return Z(), l
                        }, l.viewDate = function(e) {
                            if (0 === arguments.length) return d.clone();
                            if (!e) return d = c.clone(), l;
                            if (!("string" == typeof e || t.isMoment(e) || e instanceof Date)) throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
                            return d = oe(e), I(), l
                        }, n.is("input")) i = n;
                    else if (i = n.find(r.datepickerInput), 0 === i.size()) i = n.find("input");
                    else if (!i.is("input")) throw new Error('CSS class "' + r.datepickerInput + '" cannot be applied to non input element');
                    if (n.hasClass("input-group") && (f = n.find(0 === n.find(".datepickerbutton").size() ? ".input-group-addon" : ".datepickerbutton")), !r.inline && !i.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");
                    return e.extend(!0, r, O()), l.options(r), fe(), le(), i.prop("disabled") && l.disable(), i.is("input") && 0 !== i.val().trim().length ? J(oe(i.val().trim())) : r.defaultDate && void 0 === i.attr("placeholder") && J(r.defaultDate), r.inline && re(), l
                };
                e.fn.datetimepicker = function(t) {
                    return this.each(function() {
                        var r = e(this);
                        r.data("DateTimePicker") || (t = e.extend(!0, {}, e.fn.datetimepicker.defaults, t), r.data("DateTimePicker", n(r, t)))
                    })
                }, e.fn.datetimepicker.defaults = {
                    format: !1,
                    dayViewHeaderFormat: "MMMM YYYY",
                    extraFormats: !1,
                    stepping: 1,
                    minDate: !1,
                    maxDate: !1,
                    useCurrent: !0,
                    collapse: !0,
                    locale: t.locale(),
                    defaultDate: !1,
                    disabledDates: !1,
                    enabledDates: !1,
                    icons: {
                        time: "glyphicon glyphicon-time",
                        date: "glyphicon glyphicon-calendar",
                        up: "glyphicon glyphicon-chevron-up",
                        down: "glyphicon glyphicon-chevron-down",
                        previous: "glyphicon glyphicon-chevron-left",
                        next: "glyphicon glyphicon-chevron-right",
                        today: "glyphicon glyphicon-screenshot",
                        clear: "glyphicon glyphicon-trash",
                        close: "glyphicon glyphicon-remove"
                    },
                    tooltips: {
                        today: "Go to today",
                        clear: "Clear selection",
                        close: "Close the picker",
                        selectMonth: "Select Month",
                        prevMonth: "Previous Month",
                        nextMonth: "Next Month",
                        selectYear: "Select Year",
                        prevYear: "Previous Year",
                        nextYear: "Next Year",
                        selectDecade: "Select Decade",
                        prevDecade: "Previous Decade",
                        nextDecade: "Next Decade",
                        prevCentury: "Previous Century",
                        nextCentury: "Next Century"
                    },
                    useStrict: !1,
                    sideBySide: !1,
                    daysOfWeekDisabled: !1,
                    calendarWeeks: !1,
                    viewMode: "days",
                    toolbarPlacement: "default",
                    showTodayButton: !1,
                    showClear: !1,
                    showClose: !1,
                    widgetPositioning: {
                        horizontal: "auto",
                        vertical: "auto"
                    },
                    widgetParent: null,
                    ignoreReadonly: !1,
                    keepOpen: !1,
                    focusOnShow: !0,
                    inline: !1,
                    keepInvalid: !1,
                    datepickerInput: ".datepickerinput",
                    keyBinds: {
                        up: function(e) {
                            if (e) {
                                var n = this.date() || t();
                                this.date(e.find(".datepicker").is(":visible") ? n.clone().subtract(7, "d") : n.clone().add(this.stepping(), "m"))
                            }
                        },
                        down: function(e) {
                            if (!e) return void this.show();
                            var n = this.date() || t();
                            this.date(e.find(".datepicker").is(":visible") ? n.clone().add(7, "d") : n.clone().subtract(this.stepping(), "m"))
                        },
                        "control up": function(e) {
                            if (e) {
                                var n = this.date() || t();
                                this.date(e.find(".datepicker").is(":visible") ? n.clone().subtract(1, "y") : n.clone().add(1, "h"))
                            }
                        },
                        "control down": function(e) {
                            if (e) {
                                var n = this.date() || t();
                                this.date(e.find(".datepicker").is(":visible") ? n.clone().add(1, "y") : n.clone().subtract(1, "h"))
                            }
                        },
                        left: function(e) {
                            if (e) {
                                var n = this.date() || t();
                                e.find(".datepicker").is(":visible") && this.date(n.clone().subtract(1, "d"))
                            }
                        },
                        right: function(e) {
                            if (e) {
                                var n = this.date() || t();
                                e.find(".datepicker").is(":visible") && this.date(n.clone().add(1, "d"))
                            }
                        },
                        pageUp: function(e) {
                            if (e) {
                                var n = this.date() || t();
                                e.find(".datepicker").is(":visible") && this.date(n.clone().subtract(1, "M"))
                            }
                        },
                        pageDown: function(e) {
                            if (e) {
                                var n = this.date() || t();
                                e.find(".datepicker").is(":visible") && this.date(n.clone().add(1, "M"))
                            }
                        },
                        enter: function() {
                            this.hide()
                        },
                        escape: function() {
                            this.hide()
                        },
                        "control space": function(e) {
                            e.find(".timepicker").is(":visible") && e.find('.btn[data-action="togglePeriod"]').click()
                        },
                        t: function() {
                            this.date(t())
                        },
                        "delete": function() {
                            this.clear()
                        }
                    },
                    debug: !1,
                    allowInputToggle: !1,
                    disabledTimeIntervals: !1,
                    disabledHours: !1,
                    enabledHours: !1,
                    viewDate: !1
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        moment: 10
    }],
    102: [function(e, t, n) {
        "use strict";
        ! function(e) {
            var t = function(e) {
                    return e
                },
                n = function(t) {
                    return e.isArray(t)
                },
                r = function(e) {
                    return !n(e) && e instanceof Object
                },
                i = function(t, n) {
                    return e.inArray(n, t)
                },
                o = function(e, t) {
                    return -1 !== i(e, t)
                },
                s = function(e, t) {
                    for (var n in e) e.hasOwnProperty(n) && t(e[n], n, e)
                },
                a = function(e) {
                    return e[e.length - 1]
                },
                u = function(e, t) {
                    var n = [];
                    return s(e, function(e, r, i) {
                        n.push(t(e, r, i))
                    }), n
                },
                l = function(e, t, n) {
                    var r = {};
                    return s(e, function(e, i, o) {
                        i = n ? n(i, e) : i, r[i] = t(e, i, o)
                    }), r
                },
                c = function(e, t, r) {
                    return n(e) ? u(e, t) : l(e, t, r)
                },
                d = function(e, t, n) {
                    return c(e, function(e, r) {
                        return e[t].apply(e, n || [])
                    })
                },
                h = function(e) {
                    e = e || {};
                    var t = {};
                    return e.publish = function(e, n) {
                        s(t[e], function(e) {
                            e(n)
                        })
                    }, e.subscribe = function(e, n) {
                        t[e] = t[e] || [], t[e].push(n)
                    }, e.unsubscribe = function(e) {
                        s(t, function(t) {
                            var n = i(t, e); - 1 !== n && t.splice(n, 1)
                        })
                    }, e
                };
            ! function(e) {
                var t = function(e, t) {
                        var n = h(),
                            r = e.$;
                        return n.getType = function() {
                            throw 'implement me (return type. "text", "radio", etc.)'
                        }, n.$ = function(e) {
                            return e ? r.find(e) : r
                        }, n.disable = function() {
                            n.$().prop("disabled", !0), n.publish("isEnabled", !1)
                        }, n.enable = function() {
                            n.$().prop("disabled", !1), n.publish("isEnabled", !0)
                        }, t.equalTo = function(e, t) {
                            return e === t
                        }, t.publishChange = function() {
                            var e;
                            return function(r, i) {
                                var o = n.get();
                                t.equalTo(o, e) || n.publish("change", {
                                    e: r,
                                    domElement: i
                                }), e = o
                            }
                        }(), n
                    },
                    u = function(e, n) {
                        var r = t(e, n);
                        return r.get = function() {
                            return r.$().val()
                        }, r.set = function(e) {
                            r.$().val(e)
                        }, r.clear = function() {
                            r.set("")
                        }, n.buildSetter = function(e) {
                            return function(t) {
                                e.call(r, t)
                            }
                        }, r
                    },
                    l = function(e, t) {
                        e = n(e) ? e : [e], t = n(t) ? t : [t];
                        var r = !0;
                        return e.length !== t.length ? r = !1 : s(e, function(e) {
                            o(t, e) || (r = !1)
                        }), r
                    },
                    c = function(e) {
                        var t = {},
                            n = u(e, t);
                        return n.getType = function() {
                            return "button"
                        }, n.$().on("change", function(e) {
                            t.publishChange(e, this)
                        }), n
                    },
                    f = function(t) {
                        var r = {},
                            i = u(t, r);
                        return i.getType = function() {
                            return "checkbox"
                        }, i.get = function() {
                            var t = [];
                            return i.$().filter(":checked").each(function() {
                                t.push(e(this).val())
                            }), t
                        }, i.set = function(t) {
                            t = n(t) ? t : [t], i.$().each(function() {
                                e(this).prop("checked", !1)
                            }), s(t, function(e) {
                                i.$().filter('[value="' + e + '"]').prop("checked", !0)
                            })
                        }, r.equalTo = l, i.$().change(function(e) {
                            r.publishChange(e, this)
                        }), i
                    },
                    p = function(e) {
                        var t = {},
                            n = k(e, t);
                        return n.getType = function() {
                            return "email"
                        }, n
                    },
                    m = function(n) {
                        var r = {},
                            i = t(n, r);
                        return i.getType = function() {
                            return "file"
                        }, i.get = function() {
                            return a(i.$().val().split("\\"))
                        }, i.clear = function() {
                            this.$().each(function() {
                                e(this).wrap("<form>").closest("form").get(0).reset(), e(this).unwrap()
                            })
                        }, i.$().change(function(e) {
                            r.publishChange(e, this)
                        }), i
                    },
                    g = function(e) {
                        var t = {},
                            n = u(e, t);
                        return n.getType = function() {
                            return "hidden"
                        }, n.$().change(function(e) {
                            t.publishChange(e, this)
                        }), n
                    },
                    v = function(n) {
                        var r = {},
                            i = t(n, r);
                        return i.getType = function() {
                            return "file[multiple]"
                        }, i.get = function() {
                            var e, t = i.$().get(0).files || [],
                                n = [];
                            for (e = 0; e < (t.length || 0); e += 1) n.push(t[e].name);
                            return n
                        }, i.clear = function() {
                            this.$().each(function() {
                                e(this).wrap("<form>").closest("form").get(0).reset(), e(this).unwrap()
                            })
                        }, i.$().change(function(e) {
                            r.publishChange(e, this)
                        }), i
                    },
                    y = function(e) {
                        var t = {},
                            r = u(e, t);
                        return r.getType = function() {
                            return "select[multiple]"
                        }, r.get = function() {
                            return r.$().val() || []
                        }, r.set = function(e) {
                            r.$().val("" === e ? [] : n(e) ? e : [e])
                        }, t.equalTo = l, r.$().change(function(e) {
                            t.publishChange(e, this)
                        }), r
                    },
                    _ = function(e) {
                        var t = {},
                            n = k(e, t);
                        return n.getType = function() {
                            return "password"
                        }, n
                    },
                    b = function(t) {
                        var n = {},
                            r = u(t, n);
                        return r.getType = function() {
                            return "radio"
                        }, r.get = function() {
                            return r.$().filter(":checked").val() || null
                        }, r.set = function(t) {
                            t ? r.$().filter('[value="' + t + '"]').prop("checked", !0) : r.$().each(function() {
                                e(this).prop("checked", !1)
                            })
                        }, r.$().change(function(e) {
                            n.publishChange(e, this)
                        }), r
                    },
                    w = function(e) {
                        var t = {},
                            n = u(e, t);
                        return n.getType = function() {
                            return "range"
                        }, n.$().change(function(e) {
                            t.publishChange(e, this)
                        }), n
                    },
                    x = function(e) {
                        var t = {},
                            n = u(e, t);
                        return n.getType = function() {
                            return "select"
                        }, n.$().change(function(e) {
                            t.publishChange(e, this)
                        }), n
                    },
                    k = function(e) {
                        var t = {},
                            n = u(e, t);
                        return n.getType = function() {
                            return "text"
                        }, n.$().on("change keyup keydown", function(e) {
                            t.publishChange(e, this)
                        }), n
                    },
                    C = function(e) {
                        var t = {},
                            n = u(e, t);
                        return n.getType = function() {
                            return "textarea"
                        }, n.$().on("change keyup keydown", function(e) {
                            t.publishChange(e, this)
                        }), n
                    },
                    D = function(e) {
                        var t = {},
                            n = k(e, t);
                        return n.getType = function() {
                            return "url"
                        }, n
                    },
                    $ = function(t) {
                        var n = {},
                            o = t.$,
                            a = t.constructorOverride || {
                                button: c,
                                text: k,
                                url: D,
                                email: p,
                                password: _,
                                range: w,
                                textarea: C,
                                select: x,
                                "select[multiple]": y,
                                radio: b,
                                checkbox: f,
                                file: m,
                                "file[multiple]": v,
                                hidden: g
                            },
                            u = function(t, i) {
                                var s = r(i) ? i : o.find(i);
                                s.each(function() {
                                    var r = e(this).attr("name");
                                    n[r] = a[t]({
                                        $: e(this)
                                    })
                                })
                            },
                            l = function(t, u) {
                                var l = [],
                                    c = r(u) ? u : o.find(u);
                                r(u) ? n[c.attr("name")] = a[t]({
                                    $: c
                                }) : (c.each(function() {
                                    -1 === i(l, e(this).attr("name")) && l.push(e(this).attr("name"))
                                }), s(l, function(e) {
                                    n[e] = a[t]({
                                        $: o.find('input[name="' + e + '"]')
                                    })
                                }))
                            };
                        return o.is("input, select, textarea") ? o.is('input[type="button"], button, input[type="submit"]') ? u("button", o) : o.is("textarea") ? u("textarea", o) : o.is('input[type="text"]') || o.is("input") && !o.attr("type") ? u("text", o) : o.is('input[type="password"]') ? u("password", o) : o.is('input[type="email"]') ? u("email", o) : o.is('input[type="url"]') ? u("url", o) : o.is('input[type="range"]') ? u("range", o) : o.is("select") ? o.is("[multiple]") ? u("select[multiple]", o) : u("select", o) : o.is('input[type="file"]') ? o.is("[multiple]") ? u("file[multiple]", o) : u("file", o) : o.is('input[type="hidden"]') ? u("hidden", o) : o.is('input[type="radio"]') ? l("radio", o) : o.is('input[type="checkbox"]') ? l("checkbox", o) : u("text", o) : (u("button", 'input[type="button"], button, input[type="submit"]'), u("text", 'input[type="text"]'), u("password", 'input[type="password"]'), u("email", 'input[type="email"]'), u("url", 'input[type="url"]'), u("range", 'input[type="range"]'), u("textarea", "textarea"), u("select", "select:not([multiple])"), u("select[multiple]", "select[multiple]"), u("file", 'input[type="file"]:not([multiple])'), u("file[multiple]", 'input[type="file"][multiple]'), u("hidden", 'input[type="hidden"]'), l("radio", 'input[type="radio"]'), l("checkbox", 'input[type="checkbox"]')), n
                    };
                e.fn.inputVal = function(t) {
                    var n = e(this),
                        r = $({
                            $: n
                        });
                    return n.is("input, textarea, select") ? "undefined" == typeof t ? r[n.attr("name")].get() : (r[n.attr("name")].set(t), n) : "undefined" == typeof t ? d(r, "get") : (s(t, function(e, t) {
                        r[t].set(e)
                    }), n)
                }, e.fn.inputOnChange = function(t) {
                    var n = e(this),
                        r = $({
                            $: n
                        });
                    return s(r, function(e) {
                        e.subscribe("change", function(e) {
                            t.call(e.domElement, e.e)
                        })
                    }), n
                }, e.fn.inputDisable = function() {
                    var t = e(this);
                    return d($({
                        $: t
                    }), "disable"), t
                }, e.fn.inputEnable = function() {
                    var t = e(this);
                    return d($({
                        $: t
                    }), "enable"), t
                }, e.fn.inputClear = function() {
                    var t = e(this);
                    return d($({
                        $: t
                    }), "clear"), t
                }
            }(jQuery), e.fn.repeater = function(n) {
                n = n || {};
                return e(this).each(function() {
                    var r = e(this),
                        i = n.show || function() {
                            e(this).show()
                        },
                        o = n.hide || function(e) {
                            e()
                        },
                        s = r.find("[data-repeater-list]"),
                        u = s.find("[data-repeater-item]").first().clone().hide(),
                        l = e(this).find("[data-repeater-item]").first().find("[data-repeater-delete]");
                    n.isFirstItemUndeletable && l && l.remove();
                    var d = s.data("repeater-list"),
                        h = function() {
                            s.find("[data-repeater-item]").each(function(t) {
                                e(this).find("[name]").each(function() {
                                    var n = e(this).attr("name").match(/\[[^\]]+\]/g),
                                        r = n ? a(n).replace(/\[|\]/g, "") : e(this).attr("name"),
                                        i = d + "[" + t + "][" + r + "]" + (e(this).is(":checkbox") ? "[]" : "");
                                    e(this).attr("name", i)
                                })
                            }), s.find("input[name][checked]").removeAttr("checked").prop("checked", !0)
                        };
                    h();
                    var f = function(e, n) {
                            var r;
                            r = e.find("[name]").first().attr("name").match(/\[([0-9]*)\]/)[1], e.inputVal(c(n, t, function(t) {
                                var n = d + "[" + r + "][" + t + "]";
                                return e.find('[name="' + n + '"]').length ? n : n + "[]"
                            }))
                        },
                        p = function() {
                            var t = function(t) {
                                var r = n.defaultValues;
                                t.find("[name]").each(function() {
                                    e(this).inputClear()
                                }), r && f(t, r)
                            };
                            return function(e) {
                                s.append(e), h(), t(e)
                            }
                        }();
                    r.find("[data-repeater-create]").click(function() {
                        var e = u.clone();
                        p(e), i.call(e.get(0))
                    }), s.on("click", "[data-repeater-delete]", function() {
                        var t = e(this).closest("[data-repeater-item]").get(0);
                        o.call(t, function() {
                            e(t).remove(), h()
                        })
                    })
                }), this
            }
        }(jQuery)
    }, {}],
    103: [function(e, t, n) {
        (function(e) {
            "use strict";
            ! function(t) {
                "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof n ? "undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null : jQuery)
            }(function(e) {
                var t = function() {
                        if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
                        var t;
                        return function() {
                            if (!t || !t.requirejs) {
                                t ? n = t : t = {};
                                var e, n, r;
                                ! function(t) {
                                    function i(e, t) {
                                        return b.call(e, t)
                                    }

                                    function o(e, t) {
                                        var n, r, i, o, s, a, u, l, c, d, h, f = t && t.split("/"),
                                            p = y.map,
                                            m = p && p["*"] || {};
                                        if (e && "." === e.charAt(0))
                                            if (t) {
                                                for (f = f.slice(0, f.length - 1), e = e.split("/"), s = e.length - 1, y.nodeIdCompat && x.test(e[s]) && (e[s] = e[s].replace(x, "")), e = f.concat(e), c = 0; c < e.length; c += 1)
                                                    if (h = e[c], "." === h) e.splice(c, 1), c -= 1;
                                                    else if (".." === h) {
                                                    if (1 === c && (".." === e[2] || ".." === e[0])) break;
                                                    c > 0 && (e.splice(c - 1, 2), c -= 2)
                                                }
                                                e = e.join("/")
                                            } else 0 === e.indexOf("./") && (e = e.substring(2));
                                        if ((f || m) && p) {
                                            for (n = e.split("/"), c = n.length; c > 0; c -= 1) {
                                                if (r = n.slice(0, c).join("/"), f)
                                                    for (d = f.length; d > 0; d -= 1)
                                                        if (i = p[f.slice(0, d).join("/")], i && (i = i[r])) {
                                                            o = i, a = c;
                                                            break
                                                        }
                                                if (o) break;
                                                !u && m && m[r] && (u = m[r], l = c)
                                            }!o && u && (o = u, a = l), o && (n.splice(0, a, o), e = n.join("/"))
                                        }
                                        return e
                                    }

                                    function s(e, n) {
                                        return function() {
                                            return f.apply(t, w.call(arguments, 0).concat([e, n]))
                                        }
                                    }

                                    function a(e) {
                                        return function(t) {
                                            return o(t, e)
                                        }
                                    }

                                    function u(e) {
                                        return function(t) {
                                            g[e] = t
                                        }
                                    }

                                    function l(e) {
                                        if (i(v, e)) {
                                            var n = v[e];
                                            delete v[e], _[e] = !0, h.apply(t, n);

                                        }
                                        if (!i(g, e) && !i(_, e)) throw new Error("No " + e);
                                        return g[e]
                                    }

                                    function c(e) {
                                        var t, n = e ? e.indexOf("!") : -1;
                                        return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                                    }

                                    function d(e) {
                                        return function() {
                                            return y && y.config && y.config[e] || {}
                                        }
                                    }
                                    var h, f, p, m, g = {},
                                        v = {},
                                        y = {},
                                        _ = {},
                                        b = Object.prototype.hasOwnProperty,
                                        w = [].slice,
                                        x = /\.js$/;
                                    p = function(e, t) {
                                        var n, r = c(e),
                                            i = r[0];
                                        return e = r[1], i && (i = o(i, t), n = l(i)), i ? e = n && n.normalize ? n.normalize(e, a(t)) : o(e, t) : (e = o(e, t), r = c(e), i = r[0], e = r[1], i && (n = l(i))), {
                                            f: i ? i + "!" + e : e,
                                            n: e,
                                            pr: i,
                                            p: n
                                        }
                                    }, m = {
                                        require: function(e) {
                                            return s(e)
                                        },
                                        exports: function(e) {
                                            var t = g[e];
                                            return "undefined" != typeof t ? t : g[e] = {}
                                        },
                                        module: function(e) {
                                            return {
                                                id: e,
                                                uri: "",
                                                exports: g[e],
                                                config: d(e)
                                            }
                                        }
                                    }, h = function(e, n, r, o) {
                                        var a, c, d, h, f, y, b = [],
                                            w = typeof r;
                                        if (o = o || e, "undefined" === w || "function" === w) {
                                            for (n = !n.length && r.length ? ["require", "exports", "module"] : n, f = 0; f < n.length; f += 1)
                                                if (h = p(n[f], o), c = h.f, "require" === c) b[f] = m.require(e);
                                                else if ("exports" === c) b[f] = m.exports(e), y = !0;
                                            else if ("module" === c) a = b[f] = m.module(e);
                                            else if (i(g, c) || i(v, c) || i(_, c)) b[f] = l(c);
                                            else {
                                                if (!h.p) throw new Error(e + " missing " + c);
                                                h.p.load(h.n, s(o, !0), u(c), {}), b[f] = g[c]
                                            }
                                            d = r ? r.apply(g[e], b) : void 0, e && (a && a.exports !== t && a.exports !== g[e] ? g[e] = a.exports : d === t && y || (g[e] = d))
                                        } else e && (g[e] = r)
                                    }, e = n = f = function(e, n, r, i, o) {
                                        if ("string" == typeof e) return m[e] ? m[e](n) : l(p(e, n).f);
                                        if (!e.splice) {
                                            if (y = e, y.deps && f(y.deps, y.callback), !n) return;
                                            n.splice ? (e = n, n = r, r = null) : e = t
                                        }
                                        return n = n || function() {}, "function" == typeof r && (r = i, i = o), i ? h(t, e, n, r) : setTimeout(function() {
                                            h(t, e, n, r)
                                        }, 4), f
                                    }, f.config = function(e) {
                                        return f(e)
                                    }, e._defined = g, r = function(e, t, n) {
                                        t.splice || (n = t, t = []), i(g, e) || i(v, e) || (v[e] = [e, t, n])
                                    }, r.amd = {
                                        jQuery: !0
                                    }
                                }(), t.requirejs = e, t.require = n, t.define = r
                            }
                        }(), t.define("almond", function() {}), t.define("jquery", [], function() {
                            var t = e || $;
                            return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
                        }), t.define("select2/utils", ["jquery"], function(e) {
                            function t(e) {
                                var t = e.prototype,
                                    n = [];
                                for (var r in t) {
                                    var i = t[r];
                                    "function" == typeof i && "constructor" !== r && n.push(r)
                                }
                                return n
                            }
                            var n = {};
                            n.Extend = function(e, t) {
                                function n() {
                                    this.constructor = e
                                }
                                var r = {}.hasOwnProperty;
                                for (var i in t) r.call(t, i) && (e[i] = t[i]);
                                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                            }, n.Decorate = function(e, n) {
                                function r() {
                                    var t = Array.prototype.unshift,
                                        r = n.prototype.constructor.length,
                                        i = e.prototype.constructor;
                                    r > 0 && (t.call(arguments, e.prototype.constructor), i = n.prototype.constructor), i.apply(this, arguments)
                                }

                                function i() {
                                    this.constructor = r
                                }
                                var o = t(n),
                                    s = t(e);
                                n.displayName = e.displayName, r.prototype = new i;
                                for (var a = 0; a < s.length; a++) {
                                    var u = s[a];
                                    r.prototype[u] = e.prototype[u]
                                }
                                for (var l = (function(e) {
                                        var t = function() {};
                                        e in r.prototype && (t = r.prototype[e]);
                                        var i = n.prototype[e];
                                        return function() {
                                            var e = Array.prototype.unshift;
                                            return e.call(arguments, t), i.apply(this, arguments)
                                        }
                                    }), c = 0; c < o.length; c++) {
                                    var d = o[c];
                                    r.prototype[d] = l(d)
                                }
                                return r
                            };
                            var r = function() {
                                this.listeners = {}
                            };
                            return r.prototype.on = function(e, t) {
                                this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                            }, r.prototype.trigger = function(e) {
                                var t = Array.prototype.slice;
                                this.listeners = this.listeners || {}, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                            }, r.prototype.invoke = function(e, t) {
                                for (var n = 0, r = e.length; r > n; n++) e[n].apply(this, t)
                            }, n.Observable = r, n.generateChars = function(e) {
                                for (var t = "", n = 0; e > n; n++) {
                                    var r = Math.floor(36 * Math.random());
                                    t += r.toString(36)
                                }
                                return t
                            }, n.bind = function(e, t) {
                                return function() {
                                    e.apply(t, arguments)
                                }
                            }, n._convertData = function(e) {
                                for (var t in e) {
                                    var n = t.split("-"),
                                        r = e;
                                    if (1 !== n.length) {
                                        for (var i = 0; i < n.length; i++) {
                                            var o = n[i];
                                            o = o.substring(0, 1).toLowerCase() + o.substring(1), o in r || (r[o] = {}), i == n.length - 1 && (r[o] = e[t]), r = r[o]
                                        }
                                        delete e[t]
                                    }
                                }
                                return e
                            }, n.hasScroll = function(t, n) {
                                var r = e(n),
                                    i = n.style.overflowX,
                                    o = n.style.overflowY;
                                return i !== o || "hidden" !== o && "visible" !== o ? "scroll" === i || "scroll" === o ? !0 : r.innerHeight() < n.scrollHeight || r.innerWidth() < n.scrollWidth : !1
                            }, n.escapeMarkup = function(e) {
                                var t = {
                                    "\\": "&#92;",
                                    "&": "&amp;",
                                    "<": "&lt;",
                                    ">": "&gt;",
                                    '"': "&quot;",
                                    "'": "&#39;",
                                    "/": "&#47;"
                                };
                                return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                                    return t[e]
                                })
                            }, n.appendMany = function(t, n) {
                                if ("1.7" === e.fn.jquery.substr(0, 3)) {
                                    var r = e();
                                    e.map(n, function(e) {
                                        r = r.add(e)
                                    }), n = r
                                }
                                t.append(n)
                            }, n
                        }), t.define("select2/results", ["jquery", "./utils"], function(e, t) {
                            function n(e, t, r) {
                                this.$element = e, this.data = r, this.options = t, n.__super__.constructor.call(this)
                            }
                            return t.Extend(n, t.Observable), n.prototype.render = function() {
                                var t = e('<ul class="select2-results__options" role="tree"></ul>');
                                return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
                            }, n.prototype.clear = function() {
                                this.$results.empty()
                            }, n.prototype.displayMessage = function(t) {
                                var n = this.options.get("escapeMarkup");
                                this.clear(), this.hideLoading();
                                var r = e('<li role="treeitem" class="select2-results__option"></li>'),
                                    i = this.options.get("translations").get(t.message);
                                r.append(n(i(t.args))), this.$results.append(r)
                            }, n.prototype.append = function(e) {
                                this.hideLoading();
                                var t = [];
                                if (null == e.results || 0 === e.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                                    message: "noResults"
                                }));
                                e.results = this.sort(e.results);
                                for (var n = 0; n < e.results.length; n++) {
                                    var r = e.results[n],
                                        i = this.option(r);
                                    t.push(i)
                                }
                                this.$results.append(t)
                            }, n.prototype.position = function(e, t) {
                                var n = t.find(".select2-results");
                                n.append(e)
                            }, n.prototype.sort = function(e) {
                                var t = this.options.get("sorter");
                                return t(e)
                            }, n.prototype.setClasses = function() {
                                var t = this;
                                this.data.current(function(n) {
                                    var r = e.map(n, function(e) {
                                            return e.id.toString()
                                        }),
                                        i = t.$results.find(".select2-results__option[aria-selected]");
                                    i.each(function() {
                                        var t = e(this),
                                            n = e.data(this, "data"),
                                            i = "" + n.id;
                                        null != n.element && n.element.selected || null == n.element && e.inArray(i, r) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                                    });
                                    var o = i.filter("[aria-selected=true]");
                                    o.length > 0 ? o.first().trigger("mouseenter") : i.first().trigger("mouseenter")
                                })
                            }, n.prototype.showLoading = function(e) {
                                this.hideLoading();
                                var t = this.options.get("translations").get("searching"),
                                    n = {
                                        disabled: !0,
                                        loading: !0,
                                        text: t(e)
                                    },
                                    r = this.option(n);
                                r.className += " loading-results", this.$results.prepend(r)
                            }, n.prototype.hideLoading = function() {
                                this.$results.find(".loading-results").remove()
                            }, n.prototype.option = function(t) {
                                var n = document.createElement("li");
                                n.className = "select2-results__option";
                                var r = {
                                    role: "treeitem",
                                    "aria-selected": "false"
                                };
                                t.disabled && (delete r["aria-selected"], r["aria-disabled"] = "true"), null == t.id && delete r["aria-selected"], null != t._resultId && (n.id = t._resultId), t.title && (n.title = t.title), t.children && (r.role = "group", r["aria-label"] = t.text, delete r["aria-selected"]);
                                for (var i in r) {
                                    var o = r[i];
                                    n.setAttribute(i, o)
                                }
                                if (t.children) {
                                    var s = e(n),
                                        a = document.createElement("strong");
                                    a.className = "select2-results__group"; {
                                        e(a)
                                    }
                                    this.template(t, a);
                                    for (var u = [], l = 0; l < t.children.length; l++) {
                                        var c = t.children[l],
                                            d = this.option(c);
                                        u.push(d)
                                    }
                                    var h = e("<ul></ul>", {
                                        "class": "select2-results__options select2-results__options--nested"
                                    });
                                    h.append(u), s.append(a), s.append(h)
                                } else this.template(t, n);
                                return e.data(n, "data", t), n
                            }, n.prototype.bind = function(t, n) {
                                var r = this,
                                    i = t.id + "-results";
                                this.$results.attr("id", i), t.on("results:all", function(e) {
                                    r.clear(), r.append(e.data), t.isOpen() && r.setClasses()
                                }), t.on("results:append", function(e) {
                                    r.append(e.data), t.isOpen() && r.setClasses()
                                }), t.on("query", function(e) {
                                    r.showLoading(e)
                                }), t.on("select", function() {
                                    t.isOpen() && r.setClasses()
                                }), t.on("unselect", function() {
                                    t.isOpen() && r.setClasses()
                                }), t.on("open", function() {
                                    r.$results.attr("aria-expanded", "true"), r.$results.attr("aria-hidden", "false"), r.setClasses(), r.ensureHighlightVisible()
                                }), t.on("close", function() {
                                    r.$results.attr("aria-expanded", "false"), r.$results.attr("aria-hidden", "true"), r.$results.removeAttr("aria-activedescendant")
                                }), t.on("results:toggle", function() {
                                    var e = r.getHighlightedResults();
                                    0 !== e.length && e.trigger("mouseup")
                                }), t.on("results:select", function() {
                                    var e = r.getHighlightedResults();
                                    if (0 !== e.length) {
                                        var t = e.data("data");
                                        "true" == e.attr("aria-selected") ? r.trigger("close") : r.trigger("select", {
                                            data: t
                                        })
                                    }
                                }), t.on("results:previous", function() {
                                    var e = r.getHighlightedResults(),
                                        t = r.$results.find("[aria-selected]"),
                                        n = t.index(e);
                                    if (0 !== n) {
                                        var i = n - 1;
                                        0 === e.length && (i = 0);
                                        var o = t.eq(i);
                                        o.trigger("mouseenter");
                                        var s = r.$results.offset().top,
                                            a = o.offset().top,
                                            u = r.$results.scrollTop() + (a - s);
                                        0 === i ? r.$results.scrollTop(0) : 0 > a - s && r.$results.scrollTop(u)
                                    }
                                }), t.on("results:next", function() {
                                    var e = r.getHighlightedResults(),
                                        t = r.$results.find("[aria-selected]"),
                                        n = t.index(e),
                                        i = n + 1;
                                    if (!(i >= t.length)) {
                                        var o = t.eq(i);
                                        o.trigger("mouseenter");
                                        var s = r.$results.offset().top + r.$results.outerHeight(!1),
                                            a = o.offset().top + o.outerHeight(!1),
                                            u = r.$results.scrollTop() + a - s;
                                        0 === i ? r.$results.scrollTop(0) : a > s && r.$results.scrollTop(u)
                                    }
                                }), t.on("results:focus", function(e) {
                                    e.element.addClass("select2-results__option--highlighted")
                                }), t.on("results:message", function(e) {
                                    r.displayMessage(e)
                                }), e.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                                    var t = r.$results.scrollTop(),
                                        n = r.$results.get(0).scrollHeight - r.$results.scrollTop() + e.deltaY,
                                        i = e.deltaY > 0 && t - e.deltaY <= 0,
                                        o = e.deltaY < 0 && n <= r.$results.height();
                                    i ? (r.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()), e.preventDefault(), e.stopPropagation())
                                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(t) {
                                    var n = e(this),
                                        i = n.data("data");
                                    return "true" === n.attr("aria-selected") ? void(r.options.get("multiple") ? r.trigger("unselect", {
                                        originalEvent: t,
                                        data: i
                                    }) : r.trigger("close")) : void r.trigger("select", {
                                        originalEvent: t,
                                        data: i
                                    })
                                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(t) {
                                    var n = e(this).data("data");
                                    r.getHighlightedResults().removeClass("select2-results__option--highlighted"), r.trigger("results:focus", {
                                        data: n,
                                        element: e(this)
                                    })
                                })
                            }, n.prototype.getHighlightedResults = function() {
                                var e = this.$results.find(".select2-results__option--highlighted");
                                return e
                            }, n.prototype.destroy = function() {
                                this.$results.remove()
                            }, n.prototype.ensureHighlightVisible = function() {
                                var e = this.getHighlightedResults();
                                if (0 !== e.length) {
                                    var t = this.$results.find("[aria-selected]"),
                                        n = t.index(e),
                                        r = this.$results.offset().top,
                                        i = e.offset().top,
                                        o = this.$results.scrollTop() + (i - r),
                                        s = i - r;
                                    o -= 2 * e.outerHeight(!1), 2 >= n ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || 0 > s) && this.$results.scrollTop(o)
                                }
                            }, n.prototype.template = function(t, n) {
                                var r = this.options.get("templateResult"),
                                    i = this.options.get("escapeMarkup"),
                                    o = r(t);
                                null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = i(o) : e(n).append(o)
                            }, n
                        }), t.define("select2/keys", [], function() {
                            var e = {
                                BACKSPACE: 8,
                                TAB: 9,
                                ENTER: 13,
                                SHIFT: 16,
                                CTRL: 17,
                                ALT: 18,
                                ESC: 27,
                                SPACE: 32,
                                PAGE_UP: 33,
                                PAGE_DOWN: 34,
                                END: 35,
                                HOME: 36,
                                LEFT: 37,
                                UP: 38,
                                RIGHT: 39,
                                DOWN: 40,
                                DELETE: 46
                            };
                            return e
                        }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(e, t, n) {
                            function r(e, t) {
                                this.$element = e, this.options = t, r.__super__.constructor.call(this)
                            }
                            return t.Extend(r, t.Observable), r.prototype.render = function() {
                                var t = e('<span class="select2-selection" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></span>');
                                return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t
                            }, r.prototype.bind = function(e, t) {
                                var r = this,
                                    i = (e.id + "-container", e.id + "-results");
                                this.container = e, this.$selection.on("focus", function(e) {
                                    r.trigger("focus", e)
                                }), this.$selection.on("blur", function(e) {
                                    r.trigger("blur", e)
                                }), this.$selection.on("keydown", function(e) {
                                    r.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                                }), e.on("results:focus", function(e) {
                                    r.$selection.attr("aria-activedescendant", e.data._resultId)
                                }), e.on("selection:update", function(e) {
                                    r.update(e.data)
                                }), e.on("open", function() {
                                    r.$selection.attr("aria-expanded", "true"), r.$selection.attr("aria-owns", i), r._attachCloseHandler(e)
                                }), e.on("close", function() {
                                    r.$selection.attr("aria-expanded", "false"), r.$selection.removeAttr("aria-activedescendant"), r.$selection.removeAttr("aria-owns"), r.$selection.focus(), r._detachCloseHandler(e)
                                }), e.on("enable", function() {
                                    r.$selection.attr("tabindex", r._tabindex)
                                }), e.on("disable", function() {
                                    r.$selection.attr("tabindex", "-1")
                                })
                            }, r.prototype._attachCloseHandler = function(t) {
                                e(document.body).on("mousedown.select2." + t.id, function(t) {
                                    var n = e(t.target),
                                        r = n.closest(".select2"),
                                        i = e(".select2.select2-container--open");
                                    i.each(function() {
                                        var t = e(this);
                                        if (this != r[0]) {
                                            var n = t.data("element");
                                            n.select2("close")
                                        }
                                    })
                                })
                            }, r.prototype._detachCloseHandler = function(t) {
                                e(document.body).off("mousedown.select2." + t.id)
                            }, r.prototype.position = function(e, t) {
                                var n = t.find(".selection");
                                n.append(e)
                            }, r.prototype.destroy = function() {
                                this._detachCloseHandler(this.container)
                            }, r.prototype.update = function(e) {
                                throw new Error("The `update` method must be defined in child classes.")
                            }, r
                        }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n, r) {
                            function i() {
                                i.__super__.constructor.apply(this, arguments)
                            }
                            return n.Extend(i, t), i.prototype.render = function() {
                                var e = i.__super__.render.call(this);
                                return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                            }, i.prototype.bind = function(e, t) {
                                var n = this;
                                i.__super__.bind.apply(this, arguments);
                                var r = e.id + "-container";
                                this.$selection.find(".select2-selection__rendered").attr("id", r), this.$selection.attr("aria-labelledby", r), this.$selection.on("mousedown", function(e) {
                                    1 === e.which && n.trigger("toggle", {
                                        originalEvent: e
                                    })
                                }), this.$selection.on("focus", function(e) {}), this.$selection.on("blur", function(e) {}), e.on("selection:update", function(e) {
                                    n.update(e.data)
                                })
                            }, i.prototype.clear = function() {
                                this.$selection.find(".select2-selection__rendered").empty()
                            }, i.prototype.display = function(e) {
                                var t = this.options.get("templateSelection"),
                                    n = this.options.get("escapeMarkup");
                                return n(t(e))
                            }, i.prototype.selectionContainer = function() {
                                return e("<span></span>")
                            }, i.prototype.update = function(e) {
                                if (0 === e.length) return void this.clear();
                                var t = e[0],
                                    n = this.display(t),
                                    r = this.$selection.find(".select2-selection__rendered");
                                r.empty().append(n), r.prop("title", t.title || t.text)
                            }, i
                        }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(e, t, n) {
                            function r(e, t) {
                                r.__super__.constructor.apply(this, arguments)
                            }
                            return n.Extend(r, t), r.prototype.render = function() {
                                var e = r.__super__.render.call(this);
                                return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                            }, r.prototype.bind = function(t, n) {
                                var i = this;
                                r.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) {
                                    i.trigger("toggle", {
                                        originalEvent: e
                                    })
                                }), this.$selection.on("click", ".select2-selection__choice__remove", function(t) {
                                    var n = e(this),
                                        r = n.parent(),
                                        o = r.data("data");
                                    i.trigger("unselect", {
                                        originalEvent: t,
                                        data: o
                                    })
                                })
                            }, r.prototype.clear = function() {
                                this.$selection.find(".select2-selection__rendered").empty()
                            }, r.prototype.display = function(e) {
                                var t = this.options.get("templateSelection"),
                                    n = this.options.get("escapeMarkup");
                                return n(t(e))
                            }, r.prototype.selectionContainer = function() {
                                var t = e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                                return t
                            }, r.prototype.update = function(e) {
                                if (this.clear(), 0 !== e.length) {
                                    for (var t = [], r = 0; r < e.length; r++) {
                                        var i = e[r],
                                            o = this.display(i),
                                            s = this.selectionContainer();
                                        s.append(o), s.prop("title", i.title || i.text), s.data("data", i), t.push(s)
                                    }
                                    var a = this.$selection.find(".select2-selection__rendered");
                                    n.appendMany(a, t)
                                }
                            }, r
                        }), t.define("select2/selection/placeholder", ["../utils"], function(e) {
                            function t(e, t, n) {
                                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                            }
                            return t.prototype.normalizePlaceholder = function(e, t) {
                                return "string" == typeof t && (t = {
                                    id: "",
                                    text: t
                                }), t
                            }, t.prototype.createPlaceholder = function(e, t) {
                                var n = this.selectionContainer();
                                return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                            }, t.prototype.update = function(e, t) {
                                var n = 1 == t.length && t[0].id != this.placeholder.id,
                                    r = t.length > 1;
                                if (r || n) return e.call(this, t);
                                this.clear();
                                var i = this.createPlaceholder(this.placeholder);
                                this.$selection.find(".select2-selection__rendered").append(i)
                            }, t
                        }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function(e, t) {
                            function n() {}
                            return n.prototype.bind = function(e, t, n) {
                                var r = this;
                                e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                                    r._handleClear(e)
                                }), t.on("keypress", function(e) {
                                    r._handleKeyboardClear(e, t)
                                })
                            }, n.prototype._handleClear = function(e, t) {
                                if (!this.options.get("disabled")) {
                                    var n = this.$selection.find(".select2-selection__clear");
                                    if (0 !== n.length) {
                                        t.stopPropagation();
                                        for (var r = n.data("data"), i = 0; i < r.length; i++) {
                                            var o = {
                                                data: r[i]
                                            };
                                            if (this.trigger("unselect", o), o.prevented) return
                                        }
                                        this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle")
                                    }
                                }
                            }, n.prototype._handleKeyboardClear = function(e, n, r) {
                                r.isOpen() || (n.which == t.DELETE || n.which == t.BACKSPACE) && this._handleClear(n)
                            }, n.prototype.update = function(t, n) {
                                if (t.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                                    var r = e('<span class="select2-selection__clear">&times;</span>');
                                    r.data("data", n), this.$selection.find(".select2-selection__rendered").prepend(r)
                                }
                            }, n
                        }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(e, t, n) {
                            function r(e, t, n) {
                                e.call(this, t, n)
                            }
                            return r.prototype.render = function(t) {
                                var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></li>');
                                this.$searchContainer = n, this.$search = n.find("input");
                                var r = t.call(this);
                                return r
                            }, r.prototype.bind = function(e, t, r) {
                                var i = this;
                                e.call(this, t, r), t.on("open", function() {
                                    i.$search.attr("tabindex", 0), i.$search.focus()
                                }), t.on("close", function() {
                                    i.$search.attr("tabindex", -1), i.$search.val(""), i.$search.focus()
                                }), t.on("enable", function() {
                                    i.$search.prop("disabled", !1)
                                }), t.on("disable", function() {
                                    i.$search.prop("disabled", !0)
                                }), this.$selection.on("focusin", ".select2-search--inline", function(e) {
                                    i.trigger("focus", e)
                                }), this.$selection.on("focusout", ".select2-search--inline", function(e) {
                                    i.trigger("blur", e)
                                }), this.$selection.on("keydown", ".select2-search--inline", function(e) {
                                    e.stopPropagation(), i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented();
                                    var t = e.which;
                                    if (t === n.BACKSPACE && "" === i.$search.val()) {
                                        var r = i.$searchContainer.prev(".select2-selection__choice");
                                        if (r.length > 0) {
                                            var o = r.data("data");
                                            i.searchRemoveChoice(o), e.preventDefault()
                                        }
                                    }
                                }), this.$selection.on("input", ".select2-search--inline", function(e) {
                                    i.$selection.off("keyup.search")
                                }), this.$selection.on("keyup.search input", ".select2-search--inline", function(e) {
                                    i.handleSearch(e)
                                })
                            }, r.prototype.createPlaceholder = function(e, t) {
                                this.$search.attr("placeholder", t.text)
                            }, r.prototype.update = function(e, t) {
                                this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch()
                            }, r.prototype.handleSearch = function() {
                                if (this.resizeSearch(), !this._keyUpPrevented) {
                                    var e = this.$search.val();
                                    this.trigger("query", {
                                        term: e
                                    })
                                }
                                this._keyUpPrevented = !1
                            }, r.prototype.searchRemoveChoice = function(e, t) {
                                this.trigger("unselect", {
                                    data: t
                                }), this.trigger("open"), this.$search.val(t.text + " ")
                            }, r.prototype.resizeSearch = function() {
                                this.$search.css("width", "25px");
                                var e = "";
                                if ("" !== this.$search.attr("placeholder")) e = this.$selection.find(".select2-selection__rendered").innerWidth();
                                else {
                                    var t = this.$search.val().length + 1;
                                    e = .75 * t + "em"
                                }
                                this.$search.css("width", e)
                            }, r
                        }), t.define("select2/selection/eventRelay", ["jquery"], function(e) {
                            function t() {}
                            return t.prototype.bind = function(t, n, r) {
                                var i = this,
                                    o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                                    s = ["opening", "closing", "selecting", "unselecting"];
                                t.call(this, n, r), n.on("*", function(t, n) {
                                    if (-1 !== e.inArray(t, o)) {
                                        n = n || {};
                                        var r = e.Event("select2:" + t, {
                                            params: n
                                        });
                                        i.$element.trigger(r), -1 !== e.inArray(t, s) && (n.prevented = r.isDefaultPrevented())
                                    }
                                })
                            }, t
                        }), t.define("select2/translation", ["jquery", "require"], function(e, t) {
                            function n(e) {
                                this.dict = e || {}
                            }
                            return n.prototype.all = function() {
                                return this.dict
                            }, n.prototype.get = function(e) {
                                return this.dict[e]
                            }, n.prototype.extend = function(t) {
                                this.dict = e.extend({}, t.all(), this.dict)
                            }, n._cache = {}, n.loadPath = function(e) {
                                if (!(e in n._cache)) {
                                    var r = t(e);
                                    n._cache[e] = r
                                }
                                return new n(n._cache[e])
                            }, n
                        }), t.define("select2/diacritics", [], function() {
                            var e = {
                                "?": "A",
                                "A": "A",
                                "�": "A",
                                "�": "A",
                                "�": "A",
                                "?": "A",
                                "?": "A",
                                "?": "A",
                                "?": "A",
                                "�": "A",
                                "A": "A",
                                "A": "A",
                                "?": "A",
                                "?": "A",
                                "?": "A",
                                "?": "A",
                                "?": "A",
                                "?": "A",
                                "�": "A",
                                "A": "A",
                                "?": "A",
                                "�": "A",
                                "?": "A",
                                "A": "A",
                                "?": "A",
                                "?": "A",
                                "?": "A",
                                "?": "A",
                                "?": "A",
                                "?": "A",
                                "A": "A",
                                "?": "A",
                                "?": "A",
                                "?": "AA",
                                "�": "AE",
                                "?": "AE",
                                "?": "AE",
                                "?": "AO",
                                "?": "AU",
                                "?": "AV",
                                "?": "AV",
                                "?": "AY",
                                "?": "B",
                                "B": "B",
                                "?": "B",
                                "?": "B",
                                "?": "B",
                                "?": "B",
                                "?": "B",
                                "?": "B",
                                "?": "C",
                                "C": "C",
                                "C": "C",
                                "C": "C",
                                "C": "C",
                                "C": "C",
                                "�": "C",
                                "?": "C",
                                "?": "C",
                                "?": "C",
                                "?": "C",
                                "?": "D",
                                "D": "D",
                                "?": "D",
                                "D": "D",
                                "?": "D",
                                "?": "D",
                                "?": "D",
                                "?": "D",
                                "�": "D",
                                "?": "D",
                                "?": "D",
                                "�": "D",
                                "?": "D",
                                "?": "DZ",
                                "?": "DZ",
                                "?": "Dz",
                                "?": "Dz",
                                "?": "E",
                                "E": "E",
                                "�": "E",
                                "�": "E",
                                "�": "E",
                                "?": "E",
                                "?": "E",
                                "?": "E",
                                "?": "E",
                                "?": "E",
                                "E": "E",
                                "?": "E",
                                "?": "E",
                                "E": "E",
                                "E": "E",
                                "�": "E",
                                "?": "E",
                                "E": "E",
                                "?": "E",
                                "?": "E",
                                "?": "E",
                                "?": "E",
                                "?": "E",
                                "?": "E",
                                "E": "E",
                                "?": "E",
                                "?": "E",
                                "?": "E",
                                "?": "E",
                                "?": "F",
                                "F": "F",
                                "?": "F",
                                "�": "F",
                                "?": "F",
                                "?": "G",
                                "G": "G",
                                "?": "G",
                                "G": "G",
                                "?": "G",
                                "G": "G",
                                "G": "G",
                                "G": "G",
                                "G": "G",
                                "G": "G",
                                "?": "G",
                                "?": "G",
                                "?": "G",
                                "?": "G",
                                "?": "H",
                                "H": "H",
                                "H": "H",
                                "?": "H",
                                "?": "H",
                                "?": "H",
                                "?": "H",
                                "?": "H",
                                "?": "H",
                                "H": "H",
                                "?": "H",
                                "?": "H",
                                "?": "H",
                                "?": "I",
                                "I": "I",
                                "�": "I",
                                "�": "I",
                                "�": "I",
                                "I": "I",
                                "I": "I",
                                "I": "I",
                                "I": "I",
                                "�": "I",
                                "?": "I",
                                "?": "I",
                                "I": "I",
                                "?": "I",
                                "?": "I",
                                "?": "I",
                                "I": "I",
                                "?": "I",
                                "I": "I",
                                "?": "J",
                                "J": "J",
                                "J": "J",
                                "?": "J",
                                "?": "K",
                                "K": "K",
                                "?": "K",
                                "K": "K",
                                "?": "K",
                                "K": "K",
                                "?": "K",
                                "?": "K",
                                "?": "K",
                                "?": "K",
                                "?": "K",
                                "?": "K",
                                "?": "K",
                                "?": "L",
                                "L": "L",
                                "?": "L",
                                "L": "L",
                                "L": "L",
                                "?": "L",
                                "?": "L",
                                "L": "L",
                                "?": "L",
                                "?": "L",
                                "L": "L",
                                "?": "L",
                                "?": "L",
                                "?": "L",
                                "?": "L",
                                "?": "L",
                                "?": "L",
                                "?": "LJ",
                                "?": "Lj",
                                "?": "M",
                                "M": "M",
                                "?": "M",
                                "?": "M",
                                "?": "M",
                                "?": "M",
                                "?": "M",
                                "?": "N",
                                "N": "N",
                                "?": "N",
                                "N": "N",
                                "�": "N",
                                "?": "N",
                                "N": "N",
                                "?": "N",
                                "N": "N",
                                "?": "N",
                                "?": "N",
                                "?": "N",
                                "?": "N",
                                "?": "N",
                                "?": "N",
                                "?": "NJ",
                                "?": "Nj",
                                "?": "O",
                                "O": "O",
                                "�": "O",
                                "�": "O",
                                "�": "O",
                                "?": "O",
                                "?": "O",
                                "?": "O",
                                "?": "O",
                                "�": "O",
                                "?": "O",
                                "?": "O",
                                "?": "O",
                                "O": "O",
                                "?": "O",
                                "?": "O",
                                "O": "O",
                                "?": "O",
                                "?": "O",
                                "�": "O",
                                "?": "O",
                                "?": "O",
                                "O": "O",
                                "O": "O",
                                "?": "O",
                                "?": "O",
                                "O": "O",
                                "?": "O",
                                "?": "O",
                                "?": "O",
                                "?": "O",
                                "?": "O",
                                "?": "O",
                                "?": "O",
                                "O": "O",
                                "O": "O",
                                "�": "O",
                                "?": "O",
                                "?": "O",
                                "O": "O",
                                "?": "O",
                                "?": "O",
                                "?": "OI",
                                "?": "OO",
                                "?": "OU",
                                "?": "P",
                                "P": "P",
                                "?": "P",
                                "?": "P",
                                "?": "P",
                                "?": "P",
                                "?": "P",
                                "?": "P",
                                "?": "P",
                                "?": "Q",
                                "Q": "Q",
                                "?": "Q",
                                "?": "Q",
                                "?": "Q",
                                "?": "R",
                                "R": "R",
                                "R": "R",
                                "?": "R",
                                "R": "R",
                                "?": "R",
                                "?": "R",
                                "?": "R",
                                "?": "R",
                                "R": "R",
                                "?": "R",
                                "?": "R",
                                "?": "R",
                                "?": "R",
                                "?": "R",
                                "?": "R",
                                "?": "S",
                                "S": "S",
                                "?": "S",
                                "S": "S",
                                "?": "S",
                                "S": "S",
                                "?": "S",
                                "�": "S",
                                "?": "S",
                                "?": "S",
                                "?": "S",
                                "?": "S",
                                "S": "S",
                                "?": "S",
                                "?": "S",
                                "?": "S",
                                "?": "T",
                                "T": "T",
                                "?": "T",
                                "T": "T",
                                "?": "T",
                                "?": "T",
                                "T": "T",
                                "?": "T",
                                "?": "T",
                                "T": "T",
                                "?": "T",
                                "T": "T",
                                "?": "T",
                                "?": "T",
                                "?": "TZ",
                                "?": "U",
                                "U": "U",
                                "�": "U",
                                "�": "U",
                                "�": "U",
                                "U": "U",
                                "?": "U",
                                "U": "U",
                                "?": "U",
                                "U": "U",
                                "�": "U",
                                "U": "U",
                                "U": "U",
                                "U": "U",
                                "U": "U",
                                "?": "U",
                                "U": "U",
                                "U": "U",
                                "U": "U",
                                "?": "U",
                                "?": "U",
                                "U": "U",
                                "?": "U",
                                "?": "U",
                                "?": "U",
                                "?": "U",
                                "?": "U",
                                "?": "U",
                                "?": "U",
                                "U": "U",
                                "?": "U",
                                "?": "U",
                                "?": "U",
                                "?": "V",
                                "V": "V",
                                "?": "V",
                                "?": "V",
                                "?": "V",
                                "?": "V",
                                "?": "V",
                                "?": "VY",
                                "?": "W",
                                "W": "W",
                                "?": "W",
                                "?": "W",
                                "W": "W",
                                "?": "W",
                                "?": "W",
                                "?": "W",
                                "?": "W",
                                "?": "X",
                                "X": "X",
                                "?": "X",
                                "?": "X",
                                "?": "Y",
                                "Y": "Y",
                                "?": "Y",
                                "�": "Y",
                                "Y": "Y",
                                "?": "Y",
                                "?": "Y",
                                "?": "Y",
                                "�": "Y",
                                "?": "Y",
                                "?": "Y",
                                "?": "Y",
                                "?": "Y",
                                "?": "Y",
                                "?": "Z",
                                "Z": "Z",
                                "Z": "Z",
                                "?": "Z",
                                "Z": "Z",
                                "�": "Z",
                                "?": "Z",
                                "?": "Z",
                                "?": "Z",
                                "?": "Z",
                                "?": "Z",
                                "?": "Z",
                                "?": "Z",
                                "?": "a",
                                "a": "a",
                                "?": "a",
                                "�": "a",
                                "�": "a",
                                "�": "a",
                                "?": "a",
                                "?": "a",
                                "?": "a",
                                "?": "a",
                                "�": "a",
                                "a": "a",
                                "a": "a",
                                "?": "a",
                                "?": "a",
                                "?": "a",
                                "?": "a",
                                "?": "a",
                                "?": "a",
                                "�": "a",
                                "a": "a",
                                "?": "a",
                                "�": "a",
                                "?": "a",
                                "a": "a",
                                "?": "a",
                                "?": "a",
                                "?": "a",
                                "?": "a",
                                "?": "a",
                                "?": "a",
                                "a": "a",
                                "?": "a",
                                "?": "a",
                                "?": "aa",
                                "�": "ae",
                                "?": "ae",
                                "?": "ae",
                                "?": "ao",
                                "?": "au",
                                "?": "av",
                                "?": "av",
                                "?": "ay",
                                "?": "b",
                                "b": "b",
                                "?": "b",
                                "?": "b",
                                "?": "b",
                                "b": "b",
                                "?": "b",
                                "?": "b",
                                "?": "c",
                                "c": "c",
                                "c": "c",
                                "c": "c",
                                "c": "c",
                                "c": "c",
                                "�": "c",
                                "?": "c",
                                "?": "c",
                                "?": "c",
                                "?": "c",
                                "?": "c",
                                "?": "d",
                                "d": "d",
                                "?": "d",
                                "d": "d",
                                "?": "d",
                                "?": "d",
                                "?": "d",
                                "?": "d",
                                "d": "d",
                                "?": "d",
                                "?": "d",
                                "?": "d",
                                "?": "d",
                                "?": "dz",
                                "?": "dz",
                                "?": "e",
                                "e": "e",
                                "�": "e",
                                "�": "e",
                                "�": "e",
                                "?": "e",
                                "?": "e",
                                "?": "e",
                                "?": "e",
                                "?": "e",
                                "e": "e",
                                "?": "e",
                                "?": "e",
                                "e": "e",
                                "e": "e",
                                "�": "e",
                                "?": "e",
                                "e": "e",
                                "?": "e",
                                "?": "e",
                                "?": "e",
                                "?": "e",
                                "?": "e",
                                "?": "e",
                                "e": "e",
                                "?": "e",
                                "?": "e",
                                "?": "e",
                                "?": "e",
                                "?": "e",
                                "?": "f",
                                "f": "f",
                                "?": "f",
                                "�": "f",
                                "?": "f",
                                "?": "g",
                                "g": "g",
                                "?": "g",
                                "g": "g",
                                "?": "g",
                                "g": "g",
                                "g": "g",
                                "g": "g",
                                "g": "g",
                                "g": "g",
                                "?": "g",
                                "?": "g",
                                "?": "g",
                                "?": "g",
                                "?": "h",
                                "h": "h",
                                "h": "h",
                                "?": "h",
                                "?": "h",
                                "?": "h",
                                "?": "h",
                                "?": "h",
                                "?": "h",
                                "?": "h",
                                "h": "h",
                                "?": "h",
                                "?": "h",
                                "?": "h",
                                "?": "hv",
                                "?": "i",
                                "i": "i",
                                "�": "i",
                                "�": "i",
                                "�": "i",
                                "i": "i",
                                "i": "i",
                                "i": "i",
                                "�": "i",
                                "?": "i",
                                "?": "i",
                                "i": "i",
                                "?": "i",
                                "?": "i",
                                "?": "i",
                                "i": "i",
                                "?": "i",
                                "?": "i",
                                "i": "i",
                                "?": "j",
                                "j": "j",
                                "j": "j",
                                "j": "j",
                                "?": "j",
                                "?": "k",
                                "k": "k",
                                "?": "k",
                                "k": "k",
                                "?": "k",
                                "k": "k",
                                "?": "k",
                                "?": "k",
                                "?": "k",
                                "?": "k",
                                "?": "k",
                                "?": "k",
                                "?": "k",
                                "?": "l",
                                "l": "l",
                                "?": "l",
                                "l": "l",
                                "l": "l",
                                "?": "l",
                                "?": "l",
                                "l": "l",
                                "?": "l",
                                "?": "l",
                                "?": "l",
                                "l": "l",
                                "l": "l",
                                "?": "l",
                                "?": "l",
                                "?": "l",
                                "?": "l",
                                "?": "l",
                                "?": "lj",
                                "?": "m",
                                "m": "m",
                                "?": "m",
                                "?": "m",
                                "?": "m",
                                "?": "m",
                                "?": "m",
                                "?": "n",
                                "n": "n",
                                "?": "n",
                                "n": "n",
                                "�": "n",
                                "?": "n",
                                "n": "n",
                                "?": "n",
                                "n": "n",
                                "?": "n",
                                "?": "n",
                                "?": "n",
                                "?": "n",
                                "?": "n",
                                "?": "n",
                                "?": "n",
                                "?": "nj",
                                "?": "o",
                                "o": "o",
                                "�": "o",
                                "�": "o",
                                "�": "o",
                                "?": "o",
                                "?": "o",
                                "?": "o",
                                "?": "o",
                                "�": "o",
                                "?": "o",
                                "?": "o",
                                "?": "o",
                                "o": "o",
                                "?": "o",
                                "?": "o",
                                "o": "o",
                                "?": "o",
                                "?": "o",
                                "�": "o",
                                "?": "o",
                                "?": "o",
                                "o": "o",
                                "o": "o",
                                "?": "o",
                                "?": "o",
                                "o": "o",
                                "?": "o",
                                "?": "o",
                                "?": "o",
                                "?": "o",
                                "?": "o",
                                "?": "o",
                                "?": "o",
                                "o": "o",
                                "o": "o",
                                "�": "o",
                                "?": "o",
                                "?": "o",
                                "?": "o",
                                "?": "o",
                                "?": "o",
                                "?": "oi",
                                "?": "ou",
                                "?": "oo",
                                "?": "p",
                                "p": "p",
                                "?": "p",
                                "?": "p",
                                "?": "p",
                                "?": "p",
                                "?": "p",
                                "?": "p",
                                "?": "p",
                                "?": "q",
                                "q": "q",
                                "?": "q",
                                "?": "q",
                                "?": "q",
                                "?": "r",
                                "r": "r",
                                "r": "r",
                                "?": "r",
                                "r": "r",
                                "?": "r",
                                "?": "r",
                                "?": "r",
                                "?": "r",
                                "r": "r",
                                "?": "r",
                                "?": "r",
                                "?": "r",
                                "?": "r",
                                "?": "r",
                                "?": "r",
                                "?": "s",
                                "s": "s",
                                "�": "s",
                                "s": "s",
                                "?": "s",
                                "s": "s",
                                "?": "s",
                                "�": "s",
                                "?": "s",
                                "?": "s",
                                "?": "s",
                                "?": "s",
                                "s": "s",
                                "?": "s",
                                "?": "s",
                                "?": "s",
                                "?": "s",
                                "?": "t",
                                "t": "t",
                                "?": "t",
                                "?": "t",
                                "t": "t",
                                "?": "t",
                                "?": "t",
                                "t": "t",
                                "?": "t",
                                "?": "t",
                                "t": "t",
                                "?": "t",
                                "?": "t",
                                "?": "t",
                                "?": "t",
                                "?": "tz",
                                "?": "u",
                                "u": "u",
                                "�": "u",
                                "�": "u",
                                "�": "u",
                                "u": "u",
                                "?": "u",
                                "u": "u",
                                "?": "u",
                                "u": "u",
                                "�": "u",
                                "u": "u",
                                "u": "u",
                                "u": "u",
                                "u": "u",
                                "?": "u",
                                "u": "u",
                                "u": "u",
                                "u": "u",
                                "?": "u",
                                "?": "u",
                                "u": "u",
                                "?": "u",
                                "?": "u",
                                "?": "u",
                                "?": "u",
                                "?": "u",
                                "?": "u",
                                "?": "u",
                                "u": "u",
                                "?": "u",
                                "?": "u",
                                "?": "u",
                                "?": "v",
                                "v": "v",
                                "?": "v",
                                "?": "v",
                                "?": "v",
                                "?": "v",
                                "?": "v",
                                "?": "vy",
                                "?": "w",
                                "w": "w",
                                "?": "w",
                                "?": "w",
                                "w": "w",
                                "?": "w",
                                "?": "w",
                                "?": "w",
                                "?": "w",
                                "?": "w",
                                "?": "x",
                                "x": "x",
                                "?": "x",
                                "?": "x",
                                "?": "y",
                                "y": "y",
                                "?": "y",
                                "�": "y",
                                "y": "y",
                                "?": "y",
                                "?": "y",
                                "?": "y",
                                "�": "y",
                                "?": "y",
                                "?": "y",
                                "?": "y",
                                "?": "y",
                                "?": "y",
                                "?": "y",
                                "?": "z",
                                "z": "z",
                                "z": "z",
                                "?": "z",
                                "z": "z",
                                "�": "z",
                                "?": "z",
                                "?": "z",
                                "z": "z",
                                "?": "z",
                                "?": "z",
                                "?": "z",
                                "?": "z",
                                "?": "?",
                                "?": "?",
                                "?": "?",
                                "?": "?",
                                "?": "?",
                                "?": "?",
                                "?": "?",
                                "?": "?",
                                "?": "O",
                                "?": "a",
                                "?": "e",
                                "?": "?",
                                "?": "?",
                                "?": "?",
                                "?": "?",
                                "?": "?",
                                "?": "?",
                                "?": "?",
                                "?": "?",
                                "?": "?",
                                "?": "s"
                            };
                            return e
                        }), t.define("select2/data/base", ["../utils"], function(e) {
                            function t(e, n) {
                                t.__super__.constructor.call(this)
                            }
                            return e.Extend(t, e.Observable), t.prototype.current = function(e) {
                                throw new Error("The `current` method must be defined in child classes.")
                            }, t.prototype.query = function(e, t) {
                                throw new Error("The `query` method must be defined in child classes.")
                            }, t.prototype.bind = function(e, t) {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, n) {
                                var r = t.id + "-result-";
                                return r += e.generateChars(4), r += null != n.id ? "-" + n.id.toString() : "-" + e.generateChars(4)
                            }, t
                        }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, n) {
                            function r(e, t) {
                                this.$element = e, this.options = t, r.__super__.constructor.call(this)
                            }
                            return t.Extend(r, e), r.prototype.current = function(e) {
                                var t = [],
                                    r = this;
                                this.$element.find(":selected").each(function() {
                                    var e = n(this),
                                        i = r.item(e);
                                    t.push(i)
                                }), e(t)
                            }, r.prototype.select = function(e) {
                                var t = this;
                                if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
                                if (this.$element.prop("multiple")) this.current(function(r) {
                                    var i = [];
                                    e = [e], e.push.apply(e, r);
                                    for (var o = 0; o < e.length; o++) {
                                        var s = e[o].id; - 1 === n.inArray(s, i) && i.push(s)
                                    }
                                    t.$element.val(i), t.$element.trigger("change")
                                });
                                else {
                                    var r = e.id;
                                    this.$element.val(r), this.$element.trigger("change")
                                }
                            }, r.prototype.unselect = function(e) {
                                var t = this;
                                if (this.$element.prop("multiple")) return e.selected = !1, n(e.element).is("option") ? (e.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(r) {
                                    for (var i = [], o = 0; o < r.length; o++) {
                                        var s = r[o].id;
                                        s !== e.id && -1 === n.inArray(s, i) && i.push(s)
                                    }
                                    t.$element.val(i), t.$element.trigger("change")
                                })
                            }, r.prototype.bind = function(e, t) {
                                var n = this;
                                this.container = e, e.on("select", function(e) {
                                    n.select(e.data)
                                }), e.on("unselect", function(e) {
                                    n.unselect(e.data)
                                })
                            }, r.prototype.destroy = function() {
                                this.$element.find("*").each(function() {
                                    n.removeData(this, "data")
                                })
                            }, r.prototype.query = function(e, t) {
                                var r = [],
                                    i = this,
                                    o = this.$element.children();
                                o.each(function() {
                                    var t = n(this);
                                    if (t.is("option") || t.is("optgroup")) {
                                        var o = i.item(t),
                                            s = i.matches(e, o);
                                        null !== s && r.push(s)
                                    }
                                }), t({
                                    results: r
                                })
                            }, r.prototype.addOptions = function(e) {
                                t.appendMany(this.$element, e)
                            }, r.prototype.option = function(e) {
                                var t;
                                e.children ? (t = document.createElement("optgroup"), t.label = e.text) : (t = document.createElement("option"), void 0 !== t.textContent ? t.textContent = e.text : t.innerText = e.text), e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                                var r = n(t),
                                    i = this._normalizeItem(e);
                                return i.element = t, n.data(t, "data", i), r
                            }, r.prototype.item = function(e) {
                                var t = {};
                                if (t = n.data(e[0], "data"), null != t) return t;
                                if (e.is("option")) t = {
                                    id: e.val(),
                                    text: e.text(),
                                    disabled: e.prop("disabled"),
                                    selected: e.prop("selected"),
                                    title: e.prop("title")
                                };
                                else if (e.is("optgroup")) {
                                    t = {
                                        text: e.prop("label"),
                                        children: [],
                                        title: e.prop("title")
                                    };
                                    for (var r = e.children("option"), i = [], o = 0; o < r.length; o++) {
                                        var s = n(r[o]),
                                            a = this.item(s);
                                        i.push(a)
                                    }
                                    t.children = i
                                }
                                return t = this._normalizeItem(t), t.element = e[0], n.data(e[0], "data", t), t
                            }, r.prototype._normalizeItem = function(e) {
                                n.isPlainObject(e) || (e = {
                                    id: e,
                                    text: e
                                }), e = n.extend({}, {
                                    text: ""
                                }, e);
                                var t = {
                                    selected: !1,
                                    disabled: !1
                                };
                                return null != e.id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, t, e)
                            }, r.prototype.matches = function(e, t) {
                                var n = this.options.get("matcher");
                                return n(e, t)
                            }, r
                        }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, t, n) {
                            function r(e, t) {
                                var n = t.get("data") || [];
                                r.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
                            }
                            return t.Extend(r, e), r.prototype.select = function(e) {
                                var t = this.$element.find("option").filter(function(t, n) {
                                    return n.value == e.id.toString()
                                });
                                0 === t.length && (t = this.option(e), this.addOptions(t)),
                                    r.__super__.select.call(this, e)
                            }, r.prototype.convertToOptions = function(e) {
                                function r(e) {
                                    return function() {
                                        return n(this).val() == e.id
                                    }
                                }
                                for (var i = this, o = this.$element.find("option"), s = o.map(function() {
                                        return i.item(n(this)).id
                                    }).get(), a = [], u = 0; u < e.length; u++) {
                                    var l = this._normalizeItem(e[u]);
                                    if (n.inArray(l.id, s) >= 0) {
                                        var c = o.filter(r(l)),
                                            d = this.item(c),
                                            h = (n.extend(!0, {}, d, l), this.option(d));
                                        c.replaceWith(h)
                                    } else {
                                        var f = this.option(l);
                                        if (l.children) {
                                            var p = this.convertToOptions(l.children);
                                            t.appendMany(f, p)
                                        }
                                        a.push(f)
                                    }
                                }
                                return a
                            }, r
                        }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, n) {
                            function r(t, n) {
                                this.ajaxOptions = this._applyDefaults(n.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), e.__super__.constructor.call(this, t, n)
                            }
                            return t.Extend(r, e), r.prototype._applyDefaults = function(e) {
                                var t = {
                                    data: function(e) {
                                        return {
                                            q: e.term
                                        }
                                    },
                                    transport: function(e, t, r) {
                                        var i = n.ajax(e);
                                        return i.then(t), i.fail(r), i
                                    }
                                };
                                return n.extend({}, t, e, !0)
                            }, r.prototype.processResults = function(e) {
                                return e
                            }, r.prototype.query = function(e, t) {
                                function r() {
                                    var r = o.transport(o, function(r) {
                                        var o = i.processResults(r, e);
                                        i.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(o)
                                    }, function() {});
                                    i._request = r
                                }
                                var i = this;
                                null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                                var o = n.extend({
                                    type: "GET",
                                    dataType: 'jsonp',
//                                    jsonp: 'json.wrf',
                                }, this.ajaxOptions);
                                "function" == typeof o.url && (o.url = o.url(e)), "function" == typeof o.data && (o.data = o.data(e)), this.ajaxOptions.delay && "" !== e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(r, this.ajaxOptions.delay)) : r()
                            }, r
                        }), t.define("select2/data/tags", ["jquery"], function(e) {
                            function t(t, n, r) {
                                var i = r.get("tags"),
                                    o = r.get("createTag");
                                if (void 0 !== o && (this.createTag = o), t.call(this, n, r), e.isArray(i))
                                    for (var s = 0; s < i.length; s++) {
                                        var a = i[s],
                                            u = this._normalizeItem(a),
                                            l = this.option(u);
                                        this.$element.append(l)
                                    }
                            }
                            return t.prototype.query = function(e, t, n) {
                                function r(e, o) {
                                    for (var s = e.results, a = 0; a < s.length; a++) {
                                        var u = s[a],
                                            l = null != u.children && !r({
                                                results: u.children
                                            }, !0),
                                            c = u.text === t.term;
                                        if (c || l) return o ? !1 : (e.data = s, void n(e))
                                    }
                                    if (o) return !0;
                                    var d = i.createTag(t);
                                    if (null != d) {
                                        var h = i.option(d);
                                        h.attr("data-select2-tag", !0), i.addOptions([h]), i.insertTag(s, d)
                                    }
                                    e.results = s, n(e)
                                }
                                var i = this;
                                return this._removeOldTags(), null == t.term || null != t.page ? void e.call(this, t, n) : void e.call(this, t, r)
                            }, t.prototype.createTag = function(t, n) {
                                var r = e.trim(n.term);
                                return "" === r ? null : {
                                    id: r,
                                    text: r
                                }
                            }, t.prototype.insertTag = function(e, t, n) {
                                t.unshift(n)
                            }, t.prototype._removeOldTags = function(t) {
                                var n = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                                n.each(function() {
                                    this.selected || e(this).remove()
                                })
                            }, t
                        }), t.define("select2/data/tokenizer", ["jquery"], function(e) {
                            function t(e, t, n) {
                                var r = n.get("tokenizer");
                                void 0 !== r && (this.tokenizer = r), e.call(this, t, n)
                            }
                            return t.prototype.bind = function(e, t, n) {
                                e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                            }, t.prototype.query = function(e, t, n) {
                                function r(e) {
                                    i.select(e)
                                }
                                var i = this;
                                t.term = t.term || "";
                                var o = this.tokenizer(t, this.options, r);
                                o.term !== t.term && (this.$search.length && (this.$search.val(o.term), this.$search.focus()), t.term = o.term), e.call(this, t, n)
                            }, t.prototype.tokenizer = function(t, n, r, i) {
                                for (var o = r.get("tokenSeparators") || [], s = n.term, a = 0, u = this.createTag || function(e) {
                                        return {
                                            id: e.term,
                                            text: e.term
                                        }
                                    }; a < s.length;) {
                                    var l = s[a];
                                    if (-1 !== e.inArray(l, o)) {
                                        var c = s.substr(0, a),
                                            d = e.extend({}, n, {
                                                term: c
                                            }),
                                            h = u(d);
                                        i(h), s = s.substr(a + 1) || "", a = 0
                                    } else a++
                                }
                                return {
                                    term: s
                                }
                            }, t
                        }), t.define("select2/data/minimumInputLength", [], function() {
                            function e(e, t, n) {
                                this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                            }
                            return e.prototype.query = function(e, t, n) {
                                return t.term = t.term || "", t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                                    message: "inputTooShort",
                                    args: {
                                        minimum: this.minimumInputLength,
                                        input: t.term,
                                        params: t
                                    }
                                }) : void e.call(this, t, n)
                            }, e
                        }), t.define("select2/data/maximumInputLength", [], function() {
                            function e(e, t, n) {
                                this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                            }
                            return e.prototype.query = function(e, t, n) {
                                return t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                                    message: "inputTooLong",
                                    args: {
                                        maximum: this.maximumInputLength,
                                        input: t.term,
                                        params: t
                                    }
                                }) : void e.call(this, t, n)
                            }, e
                        }), t.define("select2/data/maximumSelectionLength", [], function() {
                            function e(e, t, n) {
                                this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                            }
                            return e.prototype.query = function(e, t, n) {
                                var r = this;
                                this.current(function(i) {
                                    var o = null != i ? i.length : 0;
                                    return r.maximumSelectionLength > 0 && o >= r.maximumSelectionLength ? void r.trigger("results:message", {
                                        message: "maximumSelected",
                                        args: {
                                            maximum: r.maximumSelectionLength
                                        }
                                    }) : void e.call(r, t, n)
                                })
                            }, e
                        }), t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
                            function n(e, t) {
                                this.$element = e, this.options = t, n.__super__.constructor.call(this)
                            }
                            return t.Extend(n, t.Observable), n.prototype.render = function() {
                                var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                                return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
                            }, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() {
                                this.$dropdown.remove()
                            }, n
                        }), t.define("select2/dropdown/search", ["jquery", "../utils"], function(e, t) {
                            function n() {}
                            return n.prototype.render = function(t) {
                                var n = t.call(this),
                                    r = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                                return this.$searchContainer = r, this.$search = r.find("input"), n.prepend(r), n
                            }, n.prototype.bind = function(t, n, r) {
                                var i = this;
                                t.call(this, n, r), this.$search.on("keydown", function(e) {
                                    i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented()
                                }), this.$search.on("input", function(t) {
                                    e(this).off("keyup")
                                }), this.$search.on("keyup input", function(e) {
                                    i.handleSearch(e)
                                }), n.on("open", function() {
                                    i.$search.attr("tabindex", 0), i.$search.focus(), window.setTimeout(function() {
                                        i.$search.focus()
                                    }, 0)
                                }), n.on("close", function() {
                                    i.$search.attr("tabindex", -1), i.$search.val("")
                                }), n.on("results:all", function(e) {
                                    if (null == e.query.term || "" === e.query.term) {
                                        var t = i.showSearch(e);
                                        t ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide")
                                    }
                                })
                            }, n.prototype.handleSearch = function(e) {
                                if (!this._keyUpPrevented) {
                                    var t = this.$search.val();
                                    this.trigger("query", {
                                        term: t
                                    })
                                }
                                this._keyUpPrevented = !1
                            }, n.prototype.showSearch = function(e, t) {
                                return !0
                            }, n
                        }), t.define("select2/dropdown/hidePlaceholder", [], function() {
                            function e(e, t, n, r) {
                                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, r)
                            }
                            return e.prototype.append = function(e, t) {
                                //console.log(t);
                                t.results = this.removePlaceholder(t), e.call(this, t)
                            }, e.prototype.normalizePlaceholder = function(e, t) {
                                return "string" == typeof t && (t = {
                                    id: "",
                                    text: t
                                }), t
                            }, e.prototype.removePlaceholder = function(e, t) {
                                if (typeof t.results != 'undefined')
                                    t = t.results;
                                for (var n = t.slice(0), r = t.length - 1; r >= 0; r--) {
                                    var i = t[r];
                                    this.placeholder.id === i.id && n.splice(r, 1)
                                }
                                return n
                            }, e
                        }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function(e) {
                            function t(e, t, n, r) {
                                this.lastParams = {}, e.call(this, t, n, r), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                            }
                            return t.prototype.append = function(e, t) {
                                this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                            }, t.prototype.bind = function(t, n, r) {
                                var i = this;
                                t.call(this, n, r), n.on("query", function(e) {
                                    i.lastParams = e, i.loading = !0
                                }), n.on("query:append", function(e) {
                                    i.lastParams = e, i.loading = !0
                                }), this.$results.on("scroll", function() {
                                    var t = e.contains(document.documentElement, i.$loadingMore[0]);
                                    if (!i.loading && t) {
                                        var n = i.$results.offset().top + i.$results.outerHeight(!1),
                                            r = i.$loadingMore.offset().top + i.$loadingMore.outerHeight(!1);
                                        n + 50 >= r && i.loadMore()
                                    }
                                })
                            }, t.prototype.loadMore = function() {
                                this.loading = !0;
                                var t = e.extend({}, {
                                    page: 1
                                }, this.lastParams);
                                t.page++, this.trigger("query:append", t)
                            }, t.prototype.showLoadingMore = function(e, t) {
                                return t.pagination && t.pagination.more
                            }, t.prototype.createLoadingMore = function() {
                                var t = e('<li class="option load-more" role="treeitem"></li>'),
                                    n = this.options.get("translations").get("loadingMore");
                                return t.html(n(this.lastParams)), t
                            }, t
                        }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(e, t) {
                            function n(e, t, n) {
                                this.$dropdownParent = n.get("dropdownParent") || document.body, e.call(this, t, n)
                            }
                            return n.prototype.bind = function(e, t, n) {
                                var r = this,
                                    i = !1;
                                e.call(this, t, n), t.on("open", function() {
                                    r._showDropdown(), r._attachPositioningHandler(t), i || (i = !0, t.on("results:all", function() {
                                        r._positionDropdown(), r._resizeDropdown()
                                    }), t.on("results:append", function() {
                                        r._positionDropdown(), r._resizeDropdown()
                                    }))
                                }), t.on("close", function() {
                                    r._hideDropdown(), r._detachPositioningHandler(t)
                                }), this.$dropdownContainer.on("mousedown", function(e) {
                                    e.stopPropagation()
                                })
                            }, n.prototype.position = function(e, t, n) {
                                t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                                    position: "absolute",
                                    top: -999999
                                }), this.$container = n
                            }, n.prototype.render = function(t) {
                                var n = e("<span></span>"),
                                    r = t.call(this);
                                return n.append(r), this.$dropdownContainer = n, n
                            }, n.prototype._hideDropdown = function(e) {
                                this.$dropdownContainer.detach()
                            }, n.prototype._attachPositioningHandler = function(n) {
                                var r = this,
                                    i = "scroll.select2." + n.id,
                                    o = "resize.select2." + n.id,
                                    s = "orientationchange.select2." + n.id,
                                    a = this.$container.parents().filter(t.hasScroll);
                                a.each(function() {
                                    e(this).data("select2-scroll-position", {
                                        x: e(this).scrollLeft(),
                                        y: e(this).scrollTop()
                                    })
                                }), a.on(i, function(t) {
                                    var n = e(this).data("select2-scroll-position");
                                    e(this).scrollTop(n.y)
                                }), e(window).on(i + " " + o + " " + s, function(e) {
                                    r._positionDropdown(), r._resizeDropdown()
                                })
                            }, n.prototype._detachPositioningHandler = function(n) {
                                var r = "scroll.select2." + n.id,
                                    i = "resize.select2." + n.id,
                                    o = "orientationchange.select2." + n.id,
                                    s = this.$container.parents().filter(t.hasScroll);
                                s.off(r), e(window).off(r + " " + i + " " + o)
                            }, n.prototype._positionDropdown = function() {
                                var t = e(window),
                                    n = this.$dropdown.hasClass("select2-dropdown--above"),
                                    r = this.$dropdown.hasClass("select2-dropdown--below"),
                                    i = null,
                                    o = (this.$container.position(), this.$container.offset());
                                o.bottom = o.top + this.$container.outerHeight(!1);
                                var s = {
                                    height: this.$container.outerHeight(!1)
                                };
                                s.top = o.top, s.bottom = o.top + s.height;
                                var a = {
                                        height: this.$dropdown.outerHeight(!1)
                                    },
                                    u = {
                                        top: t.scrollTop(),
                                        bottom: t.scrollTop() + t.height()
                                    },
                                    l = u.top < o.top - a.height,
                                    c = u.bottom > o.bottom + a.height,
                                    d = {
                                        left: o.left,
                                        top: s.bottom
                                    };
                                n || r || (i = "below"), c || !l || n ? !l && c && n && (i = "below") : i = "above", ("above" == i || n && "below" !== i) && (d.top = s.top - a.height), null != i && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)), this.$dropdownContainer.css(d)
                            }, n.prototype._resizeDropdown = function() {
                                this.$dropdownContainer.width();
                                var e = {
                                    width: this.$container.outerWidth(!1) + "px"
                                };
                                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.width = "auto"), this.$dropdown.css(e)
                            }, n.prototype._showDropdown = function(e) {
                                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                            }, n
                        }), t.define("select2/dropdown/minimumResultsForSearch", [], function() {
                            function e(t) {
                                for (var n = 0, r = 0; r < t.length; r++) {
                                    var i = t[r];
                                    i.children ? n += e(i.children) : n++
                                }
                                return n
                            }

                            function t(e, t, n, r) {
                                this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, r)
                            }
                            return t.prototype.showSearch = function(t, n) {
                                return e(n.data.results) < this.minimumResultsForSearch ? !1 : t.call(this, n)
                            }, t
                        }), t.define("select2/dropdown/selectOnClose", [], function() {
                            function e() {}
                            return e.prototype.bind = function(e, t, n) {
                                var r = this;
                                e.call(this, t, n), t.on("close", function() {
                                    r._handleSelectOnClose()
                                })
                            }, e.prototype._handleSelectOnClose = function() {
                                var e = this.getHighlightedResults();
                                e.length < 1 || this.trigger("select", {
                                    data: e.data("data")
                                })
                            }, e
                        }), t.define("select2/dropdown/closeOnSelect", [], function() {
                            function e() {}
                            return e.prototype.bind = function(e, t, n) {
                                var r = this;
                                e.call(this, t, n), t.on("select", function(e) {
                                    r._selectTriggered(e)
                                }), t.on("unselect", function(e) {
                                    r._selectTriggered(e)
                                })
                            }, e.prototype._selectTriggered = function(e, t) {
                                var n = t.originalEvent;
                                n && n.ctrlKey || this.trigger("close")
                            }, e
                        }), t.define("select2/i18n/en", [], function() {
                            return {
                                errorLoading: function() {
                                    return "The results could not be loaded."
                                },
                                inputTooLong: function(e) {
                                    var t = e.input.length - e.maximum,
                                        n = "Please delete " + t + " character";
                                    return 1 != t && (n += "s"), n
                                },
                                inputTooShort: function(e) {
                                    var t = e.minimum - e.input.length,
                                        n = "Please enter " + t + " or more characters";
                                    return n
                                },
                                loadingMore: function() {
                                    return "Loading more results�"
                                },
                                maximumSelected: function(e) {
                                    var t = "You can only select " + e.maximum + " item";
                                    return 1 != e.maximum && (t += "s"), t
                                },
                                noResults: function() {
                                    return "No results found"
                                },
                                searching: function() {
                                    return "Searching�"
                                }
                            }
                        }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(e, t, n, r, i, o, s, a, u, l, c, d, h, f, p, m, g, v, y, _, b, w, x, k, C, D, $, A, S) {
                            function T() {
                                this.reset()
                            }
                            T.prototype.apply = function(d) {
                                if (d = e.extend({}, this.defaults, d), null == d.dataAdapter) {
                                    if (d.dataAdapter = null != d.ajax ? p : null != d.data ? f : h, d.minimumInputLength > 0 && (d.dataAdapter = l.Decorate(d.dataAdapter, v)), d.maximumInputLength > 0 && (d.dataAdapter = l.Decorate(d.dataAdapter, y)), d.maximumSelectionLength > 0 && (d.dataAdapter = l.Decorate(d.dataAdapter, _)), d.tags && (d.dataAdapter = l.Decorate(d.dataAdapter, m)), (null != d.tokenSeparators || null != d.tokenizer) && (d.dataAdapter = l.Decorate(d.dataAdapter, g)), null != d.query) {
                                        var S = t(d.amdBase + "compat/query");
                                        d.dataAdapter = l.Decorate(d.dataAdapter, S)
                                    }
                                    if (null != d.initSelection) {
                                        var T = t(d.amdBase + "compat/initSelection");
                                        d.dataAdapter = l.Decorate(d.dataAdapter, T)
                                    }
                                }
                                if (null == d.resultsAdapter && (d.resultsAdapter = n, null != d.ajax && (d.resultsAdapter = l.Decorate(d.resultsAdapter, k)), null != d.placeholder && (d.resultsAdapter = l.Decorate(d.resultsAdapter, x)), d.selectOnClose && (d.resultsAdapter = l.Decorate(d.resultsAdapter, $))), null == d.dropdownAdapter) {
                                    if (d.multiple) d.dropdownAdapter = b;
                                    else {
                                        var E = l.Decorate(b, w);
                                        d.dropdownAdapter = E
                                    }
                                    if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = l.Decorate(d.dropdownAdapter, D)), d.closeOnSelect && (d.dropdownAdapter = l.Decorate(d.dropdownAdapter, A)), null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                                        var O = t(d.amdBase + "compat/dropdownCss");
                                        d.dropdownAdapter = l.Decorate(d.dropdownAdapter, O)
                                    }
                                    d.dropdownAdapter = l.Decorate(d.dropdownAdapter, C)
                                }
                                if (null == d.selectionAdapter) {
                                    if (d.selectionAdapter = d.multiple ? i : r, null != d.placeholder && (d.selectionAdapter = l.Decorate(d.selectionAdapter, o)), d.allowClear && (d.selectionAdapter = l.Decorate(d.selectionAdapter, s)), d.multiple && (d.selectionAdapter = l.Decorate(d.selectionAdapter, a)), null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                                        var P = t(d.amdBase + "compat/containerCss");
                                        d.selectionAdapter = l.Decorate(d.selectionAdapter, P)
                                    }
                                    d.selectionAdapter = l.Decorate(d.selectionAdapter, u)
                                }
                                if ("string" == typeof d.language)
                                    if (d.language.indexOf("-") > 0) {
                                        var j = d.language.split("-"),
                                            I = j[0];
                                        d.language = [d.language, I]
                                    } else d.language = [d.language];
                                if (e.isArray(d.language)) {
                                    var M = new c;
                                    d.language.push("en");
                                    for (var N = d.language, R = 0; R < N.length; R++) {
                                        var q = N[R],
                                            z = {};
                                        try {
                                            z = c.loadPath(q)
                                        } catch (L) {
                                            try {
                                                q = this.defaults.amdLanguageBase + q, z = c.loadPath(q)
                                            } catch (F) {
                                                d.debug && window.console && console.warn && console.warn('Select2: The language file for "' + q + '" could not be automatically loaded. A fallback will be used instead.');
                                                continue
                                            }
                                        }
                                        M.extend(z)
                                    }
                                    d.translations = M
                                } else {
                                    var U = c.loadPath(this.defaults.amdLanguageBase + "en"),
                                        Y = new c(d.language);
                                    Y.extend(U), d.translations = Y
                                }
                                return d
                            }, T.prototype.reset = function() {
                                function t(e) {
                                    function t(e) {
                                        return d[e] || e
                                    }
                                    return e.replace(/[^\u0000-\u007E]/g, t)
                                }

                                function n(r, i) {
                                    for (var o = !0; o;) {
                                        var s = r,
                                            a = i;
                                        if (c = d = h = f = u = l = void 0, o = !1, "" === e.trim(s.term)) return a;
                                        if (!(a.children && a.children.length > 0)) {
                                            var u = t(a.text).toUpperCase(),
                                                l = t(s.term).toUpperCase();
                                            return u.indexOf(l) > -1 ? a : null
                                        }
                                        for (var c = e.extend(!0, {}, a), d = a.children.length - 1; d >= 0; d--) {
                                            var h = a.children[d],
                                                f = n(s, h);
                                            null == f && c.children.splice(d, 1)
                                        }
                                        if (c.children.length > 0) return c;
                                        r = s, i = c, o = !0
                                    }
                                }
                                this.defaults = {
                                    amdBase: "./",
                                    amdLanguageBase: "./i18n/",
                                    closeOnSelect: !0,
                                    debug: !1,
                                    dropdownAutoWidth: !1,
                                    escapeMarkup: l.escapeMarkup,
                                    language: S,
                                    matcher: n,
                                    minimumInputLength: 0,
                                    maximumInputLength: 0,
                                    maximumSelectionLength: 0,
                                    minimumResultsForSearch: 0,
                                    selectOnClose: !1,
                                    sorter: function(e) {
                                        return e
                                    },
                                    templateResult: function(e) {
                                        return e.text
                                    },
                                    templateSelection: function(e) {
                                        return e.text
                                    },
                                    theme: "default",
                                    width: "resolve"
                                }
                            }, T.prototype.set = function(t, n) {
                                var r = e.camelCase(t),
                                    i = {};
                                i[r] = n;
                                var o = l._convertData(i);
                                e.extend(this.defaults, o)
                            };
                            var E = new T;
                            return E
                        }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(e, t, n, r) {
                            function i(t, i) {
                                if (this.options = t, null != i && this.fromElement(i), this.options = n.apply(this.options), i && i.is("input")) {
                                    var o = e(this.get("amdBase") + "compat/inputData");
                                    this.options.dataAdapter = r.Decorate(this.options.dataAdapter, o)
                                }
                            }
                            return i.prototype.fromElement = function(e) {
                                var n = ["select2"];
                                null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (this.options.dir = e.prop("dir") ? e.prop("dir") : e.closest("[dir]").prop("dir") ? e.closest("[dir]").prop("dir") : "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                                var i = {};
                                i = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                                var o = t.extend(!0, {}, i);
                                o = r._convertData(o);
                                for (var s in o) t.inArray(s, n) > -1 || (t.isPlainObject(this.options[s]) ? t.extend(this.options[s], o[s]) : this.options[s] = o[s]);
                                return this
                            }, i.prototype.get = function(e) {
                                return this.options[e]
                            }, i.prototype.set = function(e, t) {
                                this.options[e] = t
                            }, i
                        }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(e, t, n, r) {
                            var i = function o(e, n) {
                                null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), n = n || {}, this.options = new t(n, e), o.__super__.constructor.call(this);
                                var r = e.attr("tabindex") || 0;
                                e.data("old-tabindex", r), e.attr("tabindex", "-1");
                                var i = this.options.get("dataAdapter");
                                this.dataAdapter = new i(e, this.options);
                                var s = this.render();
                                this._placeContainer(s);
                                var a = this.options.get("selectionAdapter");
                                this.selection = new a(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, s);
                                var u = this.options.get("dropdownAdapter");
                                this.dropdown = new u(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, s);
                                var l = this.options.get("resultsAdapter");
                                this.results = new l(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                                var c = this;
                                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) {
                                    c.trigger("selection:update", {
                                        data: e
                                    })
                                }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
                            };
                            return n.Extend(i, n.Observable), i.prototype._generateId = function(e) {
                                var t = "";
                                return t = null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), t = "select2-" + t
                            }, i.prototype._placeContainer = function(e) {
                                e.insertAfter(this.$element);
                                var t = this._resolveWidth(this.$element, this.options.get("width"));
                                null != t && e.css("width", t)
                            }, i.prototype._resolveWidth = function(e, t) {
                                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                                if ("resolve" == t) {
                                    var r = this._resolveWidth(e, "style");
                                    return null != r ? r : this._resolveWidth(e, "element")
                                }
                                if ("element" == t) {
                                    var i = e.outerWidth(!1);
                                    return 0 >= i ? "auto" : i + "px"
                                }
                                if ("style" == t) {
                                    var o = e.attr("style");
                                    if ("string" != typeof o) return null;
                                    for (var s = o.split(";"), a = 0, u = s.length; u > a; a += 1) {
                                        var l = s[a].replace(/\s/g, ""),
                                            c = l.match(n);
                                        if (null !== c && c.length >= 1) return c[1]
                                    }
                                    return null
                                }
                                return t
                            }, i.prototype._bindAdapters = function() {
                                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                            }, i.prototype._registerDomEvents = function() {
                                var t = this;
                                this.$element.on("change.select2", function() {
                                    t.dataAdapter.current(function(e) {
                                        t.trigger("selection:update", {
                                            data: e
                                        })
                                    })
                                }), this._sync = n.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                                var r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                                null != r ? (this._observer = new r(function(n) {
                                    e.each(n, t._sync)
                                }), this._observer.observe(this.$element[0], {
                                    attributes: !0,
                                    subtree: !1
                                })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", t._sync, !1)
                            }, i.prototype._registerDataEvents = function() {
                                var e = this;
                                this.dataAdapter.on("*", function(t, n) {
                                    e.trigger(t, n)
                                })
                            }, i.prototype._registerSelectionEvents = function() {
                                var t = this,
                                    n = ["toggle"];
                                this.selection.on("toggle", function() {
                                    t.toggleDropdown()
                                }), this.selection.on("*", function(r, i) {
                                    -1 === e.inArray(r, n) && t.trigger(r, i)
                                })
                            }, i.prototype._registerDropdownEvents = function() {
                                var e = this;
                                this.dropdown.on("*", function(t, n) {
                                    e.trigger(t, n)
                                })
                            }, i.prototype._registerResultsEvents = function() {
                                var e = this;
                                this.results.on("*", function(t, n) {
                                    e.trigger(t, n)
                                })
                            }, i.prototype._registerEvents = function() {
                                var e = this;
                                this.on("open", function() {
                                    e.$container.addClass("select2-container--open")
                                }), this.on("close", function() {
                                    e.$container.removeClass("select2-container--open")
                                }), this.on("enable", function() {
                                    e.$container.removeClass("select2-container--disabled")
                                }), this.on("disable", function() {
                                    e.$container.addClass("select2-container--disabled")
                                }), this.on("focus", function() {
                                    e.$container.addClass("select2-container--focus")
                                }), this.on("blur", function() {
                                    e.$container.removeClass("select2-container--focus")
                                }), this.on("query", function(t) {
                                    e.isOpen() || e.trigger("open"), this.dataAdapter.query(t, function(n) {
                                        e.trigger("results:all", {
                                            data: n,
                                            query: t
                                        })
                                    })
                                }), this.on("query:append", function(t) {
                                    this.dataAdapter.query(t, function(n) {
                                        e.trigger("results:append", {
                                            data: n,
                                            query: t
                                        })
                                    })
                                }), this.on("keypress", function(t) {
                                    var n = t.which;
                                    e.isOpen() ? n === r.ENTER ? (e.trigger("results:select"), t.preventDefault()) : n === r.SPACE && t.ctrlKey ? (e.trigger("results:toggle"), t.preventDefault()) : n === r.UP ? (e.trigger("results:previous"), t.preventDefault()) : n === r.DOWN ? (e.trigger("results:next"), t.preventDefault()) : (n === r.ESC || n === r.TAB) && (e.close(), t.preventDefault()) : (n === r.ENTER || n === r.SPACE || (n === r.DOWN || n === r.UP) && t.altKey) && (e.open(), t.preventDefault())
                                })
                            }, i.prototype._syncAttributes = function() {
                                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable")) : this.trigger("enable")
                            }, i.prototype.trigger = function(e, t) {
                                var n = i.__super__.trigger,
                                    r = {
                                        open: "opening",
                                        close: "closing",
                                        select: "selecting",
                                        unselect: "unselecting"
                                    };
                                if (e in r) {
                                    var o = r[e],
                                        s = {
                                            prevented: !1,
                                            name: e,
                                            args: t
                                        };
                                    if (n.call(this, o, s), s.prevented) return void(t.prevented = !0)
                                }
                                n.call(this, e, t)
                            }, i.prototype.toggleDropdown = function() {
                                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                            }, i.prototype.open = function() {
                                this.isOpen() || (this.trigger("query", {}), this.trigger("open"))
                            }, i.prototype.close = function() {
                                this.isOpen() && this.trigger("close")
                            }, i.prototype.isOpen = function() {
                                return this.$container.hasClass("select2-container--open")
                            }, i.prototype.enable = function(e) {
                                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == e || 0 === e.length) && (e = [!0]);
                                var t = !e[0];
                                this.$element.prop("disabled", t)
                            }, i.prototype.data = function() {
                                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                                var e = [];
                                return this.dataAdapter.current(function(t) {
                                    e = t
                                }), e
                            }, i.prototype.val = function(t) {
                                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                                var n = t[0];
                                e.isArray(n) && (n = e.map(n, function(e) {
                                    return e.toString()
                                })), this.$element.val(n).trigger("change")
                            }, i.prototype.destroy = function() {
                                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                            }, i.prototype.render = function() {
                                var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                                return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
                            }, i
                        }), t.define("jquery.select2", ["jquery", "require", "./select2/core", "./select2/defaults"], function(e, t, n, r) {
                            if (t("jquery.mousewheel"), null == e.fn.select2) {
                                var i = ["open", "close", "destroy"];
                                e.fn.select2 = function(t) {
                                    if (t = t || {}, "object" == typeof t) return this.each(function() {
                                        {
                                            var r = e.extend({}, t, !0);
                                            new n(e(this), r)
                                        }
                                    }), this;
                                    if ("string" == typeof t) {
                                        var r = this.data("select2");
                                        null == r && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2.");
                                        var o = Array.prototype.slice.call(arguments, 1),
                                            s = r[t](o);
                                        return e.inArray(t, i) > -1 ? this : s
                                    }
                                    throw new Error("Invalid arguments for Select2: " + t)
                                }
                            }
                            return null == e.fn.select2.defaults && (e.fn.select2.defaults = r), n
                        }), t.define("jquery.mousewheel", ["jquery"], function(e) {
                            return e
                        }), {
                            define: t.define,
                            require: t.require
                        }
                    }(),
                    n = t.require("jquery.select2");
                return e.fn.select2.amd = t, n
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "jquery.mousewheel": 7
    }],
    104: [function(e, t, n) {
        (function(e) {
            "use strict";
            ! function(r, i) {
                "function" == typeof define && define.amd ? define("bloodhound", ["jquery"], function(e) {
                    return r.Bloodhound = i(e)
                }) : "object" == typeof n ? t.exports = i("undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null) : r.Bloodhound = i(jQuery)
            }(void 0, function(e) {
                var t = function() {
                        return {
                            isMsie: function() {
                                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
                            },
                            isBlankString: function(e) {
                                return !e || /^\s*$/.test(e)
                            },
                            escapeRegExChars: function(e) {
                                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                            },
                            isString: function(e) {
                                return "string" == typeof e
                            },
                            isNumber: function(e) {
                                return "number" == typeof e
                            },
                            isArray: e.isArray,
                            isFunction: e.isFunction,
                            isObject: e.isPlainObject,
                            isUndefined: function(e) {
                                return "undefined" == typeof e
                            },
                            isElement: function(e) {
                                return !(!e || 1 !== e.nodeType)
                            },
                            isJQuery: function(t) {
                                return t instanceof e
                            },
                            toStr: function(e) {
                                return t.isUndefined(e) || null === e ? "" : e + ""
                            },
                            bind: e.proxy,
                            each: function(t, n) {
                                function r(e, t) {
                                    return n(t, e)
                                }
                                e.each(t, r)
                            },
                            map: e.map,
                            filter: e.grep,
                            every: function(t, n) {
                                var r = !0;
                                return t ? (e.each(t, function(e, i) {
                                    return (r = n.call(null, i, e, t)) ? void 0 : !1
                                }), !!r) : r
                            },
                            some: function(t, n) {
                                var r = !1;
                                return t ? (e.each(t, function(e, i) {
                                    return (r = n.call(null, i, e, t)) ? !1 : void 0
                                }), !!r) : r
                            },
                            mixin: e.extend,
                            identity: function(e) {
                                return e
                            },
                            clone: function(t) {
                                return e.extend(!0, {}, t)
                            },
                            getIdGenerator: function() {
                                var e = 0;
                                return function() {
                                    return e++
                                }
                            },
                            templatify: function(t) {
                                function n() {
                                    return String(t)
                                }
                                return e.isFunction(t) ? t : n
                            },
                            defer: function(e) {
                                setTimeout(e, 0)
                            },
                            debounce: function(e, t, n) {
                                var r, i;
                                return function() {
                                    var o, s, a = this,
                                        u = arguments;
                                    return o = function() {
                                        r = null, n || (i = e.apply(a, u))
                                    }, s = n && !r, clearTimeout(r), r = setTimeout(o, t), s && (i = e.apply(a, u)), i
                                }
                            },
                            throttle: function(e, t) {
                                var n, r, i, o, s, a;
                                return s = 0, a = function() {
                                        s = new Date, i = null, o = e.apply(n, r)
                                    },
                                    function() {
                                        var u = new Date,
                                            l = t - (u - s);
                                        return n = this, r = arguments, 0 >= l ? (clearTimeout(i), i = null, s = u, o = e.apply(n, r)) : i || (i = setTimeout(a, l)), o
                                    }
                            },
                            stringify: function(e) {
                                return t.isString(e) ? e : JSON.stringify(e)
                            },
                            noop: function() {}
                        }
                    }(),
                    n = "0.11.1",
                    r = function() {
                        function e(e) {
                            return e = t.toStr(e), e ? e.split(/\s+/) : []
                        }

                        function n(e) {
                            return e = t.toStr(e), e ? e.split(/\W+/) : []
                        }

                        function r(e) {
                            return function(n) {
                                return n = t.isArray(n) ? n : [].slice.call(arguments, 0),
                                    function(r) {
                                        var i = [];
                                        return t.each(n, function(n) {
                                            i = i.concat(e(t.toStr(r[n])))
                                        }), i
                                    }
                            }
                        }
                        return {
                            nonword: n,
                            whitespace: e,
                            obj: {
                                nonword: r(n),
                                whitespace: r(e)
                            }
                        }
                    }(),
                    i = function() {
                        function n(n) {
                            this.maxSize = t.isNumber(n) ? n : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = e.noop)
                        }

                        function r() {
                            this.head = this.tail = null
                        }

                        function i(e, t) {
                            this.key = e, this.val = t, this.prev = this.next = null
                        }
                        return t.mixin(n.prototype, {
                            set: function(e, t) {
                                var n, r = this.list.tail;
                                this.size >= this.maxSize && (this.list.remove(r), delete this.hash[r.key], this.size--), (n = this.hash[e]) ? (n.val = t, this.list.moveToFront(n)) : (n = new i(e, t), this.list.add(n), this.hash[e] = n, this.size++)
                            },
                            get: function(e) {
                                var t = this.hash[e];
                                return t ? (this.list.moveToFront(t), t.val) : void 0
                            },
                            reset: function() {
                                this.size = 0, this.hash = {}, this.list = new r
                            }
                        }), t.mixin(r.prototype, {
                            add: function(e) {
                                this.head && (e.next = this.head, this.head.prev = e), this.head = e, this.tail = this.tail || e
                            },
                            remove: function(e) {
                                e.prev ? e.prev.next = e.next : this.head = e.next, e.next ? e.next.prev = e.prev : this.tail = e.prev
                            },
                            moveToFront: function(e) {
                                this.remove(e), this.add(e)
                            }
                        }), n
                    }(),
                    o = function() {
                        function n(e, n) {
                            this.prefix = ["__", e, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + t.escapeRegExChars(this.prefix)), this.ls = n || a, !this.ls && this._noop()
                        }

                        function r() {
                            return (new Date).getTime()
                        }

                        function i(e) {
                            return JSON.stringify(t.isUndefined(e) ? null : e)
                        }

                        function o(t) {
                            return e.parseJSON(t)
                        }

                        function s(e) {
                            var t, n, r = [],
                                i = a.length;
                            for (t = 0; i > t; t++)(n = a.key(t)).match(e) && r.push(n.replace(e, ""));
                            return r
                        }
                        var a;
                        try {
                            a = window.localStorage, a.setItem("~~~", "!"), a.removeItem("~~~")
                        } catch (u) {
                            a = null
                        }
                        return t.mixin(n.prototype, {
                            _prefix: function(e) {
                                return this.prefix + e
                            },
                            _ttlKey: function(e) {
                                return this._prefix(e) + this.ttlKey
                            },
                            _noop: function() {
                                this.get = this.set = this.remove = this.clear = this.isExpired = t.noop
                            },
                            _safeSet: function(e, t) {
                                try {
                                    this.ls.setItem(e, t)
                                } catch (n) {
                                    "QuotaExceededError" === n.name && (this.clear(), this._noop())
                                }
                            },
                            get: function(e) {
                                return this.isExpired(e) && this.remove(e), o(this.ls.getItem(this._prefix(e)))
                            },
                            set: function(e, n, o) {
                                return t.isNumber(o) ? this._safeSet(this._ttlKey(e), i(r() + o)) : this.ls.removeItem(this._ttlKey(e)), this._safeSet(this._prefix(e), i(n))
                            },
                            remove: function(e) {
                                return this.ls.removeItem(this._ttlKey(e)), this.ls.removeItem(this._prefix(e)), this
                            },
                            clear: function() {
                                var e, t = s(this.keyMatcher);
                                for (e = t.length; e--;) this.remove(t[e]);
                                return this
                            },
                            isExpired: function(e) {
                                var n = o(this.ls.getItem(this._ttlKey(e)));
                                return t.isNumber(n) && r() > n ? !0 : !1
                            }
                        }), n
                    }(),
                    s = function() {
                        function n(e) {
                            e = e || {}, this.cancelled = !1, this.lastReq = null, this._send = e.transport, this._get = e.limiter ? e.limiter(this._get) : this._get, this._cache = e.cache === !1 ? new i(0) : a
                        }
                        var r = 0,
                            o = {},
                            s = 6,
                            a = new i(10);
                        return n.setMaxPendingRequests = function(e) {
                            s = e
                        }, n.resetCache = function() {
                            a.reset()
                        }, t.mixin(n.prototype, {
                            _fingerprint: function(t) {
                                return t = t || {}, t.url + t.type + e.param(t.data || {})
                            },
                            _get: function(e, t) {
                                function n(e) {
                                    t(null, e), c._cache.set(u, e)
                                }

                                function i() {
                                    t(!0)
                                }

                                function a() {
                                    r--, delete o[u], c.onDeckRequestArgs && (c._get.apply(c, c.onDeckRequestArgs), c.onDeckRequestArgs = null)
                                }
                                var u, l, c = this;
                                u = this._fingerprint(e), this.cancelled || u !== this.lastReq || ((l = o[u]) ? l.done(n).fail(i) : s > r ? (r++, o[u] = this._send(e).done(n).fail(i).always(a)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
                            },
                            get: function(n, r) {
                                var i, o;
                                r = r || e.noop, n = t.isString(n) ? {
                                    url: n
                                } : n || {}, o = this._fingerprint(n), this.cancelled = !1, this.lastReq = o, (i = this._cache.get(o)) ? r(null, i) : this._get(n, r)
                            },
                            cancel: function() {
                                this.cancelled = !0
                            }
                        }), n
                    }(),
                    a = window.SearchIndex = function() {
                        function n(n) {
                            n = n || {}, n.datumTokenizer && n.queryTokenizer || e.error("datumTokenizer and queryTokenizer are both required"), this.identify = n.identify || t.stringify, this.datumTokenizer = n.datumTokenizer, this.queryTokenizer = n.queryTokenizer, this.reset()
                        }

                        function r(e) {
                            return e = t.filter(e, function(e) {
                                return !!e
                            }), e = t.map(e, function(e) {
                                return e.toLowerCase()
                            })
                        }

                        function i() {
                            var e = {};
                            return e[u] = [], e[a] = {}, e
                        }

                        function o(e) {
                            for (var t = {}, n = [], r = 0, i = e.length; i > r; r++) t[e[r]] || (t[e[r]] = !0, n.push(e[r]));
                            return n
                        }

                        function s(e, t) {
                            var n = 0,
                                r = 0,
                                i = [];
                            e = e.sort(), t = t.sort();
                            for (var o = e.length, s = t.length; o > n && s > r;) e[n] < t[r] ? n++ : e[n] > t[r] ? r++ : (i.push(e[n]), n++, r++);
                            return i
                        }
                        var a = "c",
                            u = "i";
                        return t.mixin(n.prototype, {
                            bootstrap: function(e) {
                                this.datums = e.datums, this.trie = e.trie
                            },
                            add: function(e) {
                                var n = this;
                                e = t.isArray(e) ? e : [e], t.each(e, function(e) {
                                    var o, s;
                                    n.datums[o = n.identify(e)] = e, s = r(n.datumTokenizer(e)), t.each(s, function(e) {
                                        var t, r, s;
                                        for (t = n.trie, r = e.split(""); s = r.shift();) t = t[a][s] || (t[a][s] = i()), t[u].push(o)
                                    })
                                })
                            },
                            get: function(e) {
                                var n = this;
                                return t.map(e, function(e) {
                                    return n.datums[e]
                                })
                            },
                            search: function(e) {
                                var n, i, l = this;
                                return n = r(this.queryTokenizer(e)), t.each(n, function(e) {
                                    var t, n, r, o;
                                    if (i && 0 === i.length) return !1;
                                    for (t = l.trie, n = e.split(""); t && (r = n.shift());) t = t[a][r];
                                    return t && 0 === n.length ? (o = t[u].slice(0), void(i = i ? s(i, o) : o)) : (i = [], !1)
                                }), i ? t.map(o(i), function(e) {
                                    return l.datums[e]
                                }) : []
                            },
                            all: function() {
                                var e = [];
                                for (var t in this.datums) e.push(this.datums[t]);
                                return e
                            },
                            reset: function() {
                                this.datums = {}, this.trie = i()
                            },
                            serialize: function() {
                                return {
                                    datums: this.datums,
                                    trie: this.trie
                                }
                            }
                        }), n
                    }(),
                    u = function() {
                        function e(e) {
                            this.url = e.url, this.ttl = e.ttl, this.cache = e.cache, this.prepare = e.prepare, this.transform = e.transform, this.transport = e.transport, this.thumbprint = e.thumbprint, this.storage = new o(e.cacheKey)
                        }
                        var n;
                        return n = {
                            data: "data",
                            protocol: "protocol",
                            thumbprint: "thumbprint"
                        }, t.mixin(e.prototype, {
                            _settings: function() {
                                return {
                                    url: this.url,
                                    type: "GET",
                                    dataType: "json"
                                }
                            },
                            store: function(e) {
                                this.cache && (this.storage.set(n.data, e, this.ttl), this.storage.set(n.protocol, location.protocol, this.ttl), this.storage.set(n.thumbprint, this.thumbprint, this.ttl))
                            },
                            fromCache: function() {
                                var e, t = {};
                                return this.cache ? (t.data = this.storage.get(n.data), t.protocol = this.storage.get(n.protocol), t.thumbprint = this.storage.get(n.thumbprint), e = t.thumbprint !== this.thumbprint || t.protocol !== location.protocol, t.data && !e ? t.data : null) : null
                            },
                            fromNetwork: function(e) {
                                function t() {
                                    e(!0)
                                }

                                function n(t) {
                                    e(null, i.transform(t))
                                }
                                var r, i = this;
                                e && (r = this.prepare(this._settings()), this.transport(r).fail(t).done(n))
                            },
                            clear: function() {
                                return this.storage.clear(), this
                            }
                        }), e
                    }(),
                    l = function() {
                        function e(e) {
                            this.url = e.url, this.prepare = e.prepare, this.transform = e.transform, this.transport = new s({
                                cache: e.cache,
                                limiter: e.limiter,
                                transport: e.transport
                            })
                        }
                        return t.mixin(e.prototype, {
                            _settings: function() {
                                return {
                                    url: this.url,
                                    type: "GET",
                                    dataType: "json"
                                }
                            },
                            get: function(e, t) {
                                function n(e, n) {
                                    t(e ? [] : i.transform(n))
                                }
                                var r, i = this;
                                if (t) return e = e || "", r = this.prepare(e, this._settings()), this.transport.get(r, n)
                            },
                            cancelLastRequest: function() {
                                this.transport.cancel()
                            }
                        }), e
                    }(),
                    c = function() {
                        function r(r) {
                            var i;
                            return r ? (i = {
                                url: null,
                                ttl: 864e5,
                                cache: !0,
                                cacheKey: null,
                                thumbprint: "",
                                prepare: t.identity,
                                transform: t.identity,
                                transport: null
                            }, r = t.isString(r) ? {
                                url: r
                            } : r, r = t.mixin(i, r), !r.url && e.error("prefetch requires url to be set"), r.transform = r.filter || r.transform, r.cacheKey = r.cacheKey || r.url, r.thumbprint = n + r.thumbprint, r.transport = r.transport ? a(r.transport) : e.ajax, r) : null
                        }

                        function i(n) {
                            var r;
                            if (n) return r = {
                                url: null,
                                cache: !0,
                                prepare: null,
                                replace: null,
                                wildcard: null,
                                limiter: null,
                                rateLimitBy: "debounce",
                                rateLimitWait: 300,
                                transform: t.identity,
                                transport: null
                            }, n = t.isString(n) ? {
                                url: n
                            } : n, n = t.mixin(r, n), !n.url && e.error("remote requires url to be set"), n.transform = n.filter || n.transform, n.prepare = o(n), n.limiter = s(n), n.transport = n.transport ? a(n.transport) : e.ajax, delete n.replace, delete n.wildcard, delete n.rateLimitBy, delete n.rateLimitWait, n
                        }

                        function o(e) {
                            function t(e, t) {
                                return t.url = o(t.url, e), t
                            }

                            function n(e, t) {
                                return t.url = t.url.replace(s, encodeURIComponent(e)), t
                            }

                            function r(e, t) {
                                return t
                            }
                            var i, o, s;
                            return i = e.prepare, o = e.replace, s = e.wildcard, i ? i : i = o ? t : e.wildcard ? n : r
                        }

                        function s(e) {
                            function n(e) {
                                return function(n) {
                                    return t.debounce(n, e)
                                }
                            }

                            function r(e) {
                                return function(n) {
                                    return t.throttle(n, e)
                                }
                            }
                            var i, o, s;
                            return i = e.limiter, o = e.rateLimitBy, s = e.rateLimitWait, i || (i = /^throttle$/i.test(o) ? r(s) : n(s)), i
                        }

                        function a(n) {
                            return function(r) {
                                function i(e) {
                                    t.defer(function() {
                                        s.resolve(e)
                                    })
                                }

                                function o(e) {
                                    t.defer(function() {
                                        s.reject(e)
                                    })
                                }
                                var s = e.Deferred();
                                return n(r, i, o), s
                            }
                        }
                        return function(n) {
                            var o, s;
                            return o = {
                                initialize: !0,
                                identify: t.stringify,
                                datumTokenizer: null,
                                queryTokenizer: null,
                                sufficient: 5,
                                sorter: null,
                                local: [],
                                prefetch: null,
                                remote: null
                            }, n = t.mixin(o, n || {}), !n.datumTokenizer && e.error("datumTokenizer is required"), !n.queryTokenizer && e.error("queryTokenizer is required"), s = n.sorter, n.sorter = s ? function(e) {
                                return e.sort(s)
                            } : t.identity, n.local = t.isFunction(n.local) ? n.local() : n.local, n.prefetch = r(n.prefetch), n.remote = i(n.remote), n
                        }
                    }(),
                    d = function() {
                        function n(e) {
                            e = c(e), this.sorter = e.sorter, this.identify = e.identify, this.sufficient = e.sufficient, this.local = e.local, this.remote = e.remote ? new l(e.remote) : null, this.prefetch = e.prefetch ? new u(e.prefetch) : null, this.index = new a({
                                identify: this.identify,
                                datumTokenizer: e.datumTokenizer,
                                queryTokenizer: e.queryTokenizer
                            }), e.initialize !== !1 && this.initialize()
                        }
                        var i;
                        return i = window && window.Bloodhound, n.noConflict = function() {
                            return window && (window.Bloodhound = i), n
                        }, n.tokenizers = r, t.mixin(n.prototype, {
                            __ttAdapter: function() {
                                function e(e, t, r) {
                                    return n.search(e, t, r)
                                }

                                function t(e, t) {
                                    return n.search(e, t)
                                }
                                var n = this;
                                return this.remote ? e : t
                            },
                            _loadPrefetch: function() {
                                function t(e, t) {
                                    return e ? n.reject() : (i.add(t), i.prefetch.store(i.index.serialize()), void n.resolve())
                                }
                                var n, r, i = this;
                                return n = e.Deferred(), this.prefetch ? (r = this.prefetch.fromCache()) ? (this.index.bootstrap(r), n.resolve()) : this.prefetch.fromNetwork(t) : n.resolve(), n.promise()
                            },
                            _initialize: function() {
                                function e() {
                                    t.add(t.local)
                                }
                                var t = this;
                                return this.clear(), (this.initPromise = this._loadPrefetch()).done(e), this.initPromise
                            },
                            initialize: function(e) {
                                return !this.initPromise || e ? this._initialize() : this.initPromise
                            },
                            add: function(e) {
                                return this.index.add(e), this
                            },
                            get: function(e) {
                                return e = t.isArray(e) ? e : [].slice.call(arguments), this.index.get(e)
                            },
                            search: function(e, n, r) {
                                function i(e) {
                                    var n = [];
                                    t.each(e, function(e) {
                                        !t.some(o, function(t) {
                                            return s.identify(e) === s.identify(t)
                                        }) && n.push(e)
                                    }), r && r(n)
                                }
                                var o, s = this;
                                return o = this.sorter(this.index.search(e)), n(this.remote ? o.slice() : o), this.remote && o.length < this.sufficient ? this.remote.get(e, i) : this.remote && this.remote.cancelLastRequest(), this
                            },
                            all: function() {
                                return this.index.all()
                            },
                            clear: function() {
                                return this.index.reset(), this
                            },
                            clearPrefetchCache: function() {
                                return this.prefetch && this.prefetch.clear(), this
                            },
                            clearRemoteCache: function() {
                                return s.resetCache(), this
                            },
                            ttAdapter: function() {
                                return this.__ttAdapter()
                            }
                        }), n
                    }();
                return d
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    105: [function(e, t, n) {
        (function(e) {
            "use strict";
            ! function(r, i) {
                "function" == typeof define && define.amd ? define("typeahead.js", ["jquery"], function(e) {
                    return i(e)
                }) : "object" == typeof n ? t.exports = i("undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null) : i(jQuery)
            }(void 0, function(e) {
                var t = function() {
                        return {
                            isMsie: function() {
                                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
                            },
                            isBlankString: function(e) {
                                return !e || /^\s*$/.test(e)
                            },
                            escapeRegExChars: function(e) {
                                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                            },
                            isString: function(e) {
                                return "string" == typeof e
                            },
                            isNumber: function(e) {
                                return "number" == typeof e
                            },
                            isArray: e.isArray,
                            isFunction: e.isFunction,
                            isObject: e.isPlainObject,
                            isUndefined: function(e) {
                                return "undefined" == typeof e
                            },
                            isElement: function(e) {
                                return !(!e || 1 !== e.nodeType)
                            },
                            isJQuery: function(t) {
                                return t instanceof e
                            },
                            toStr: function(e) {
                                return t.isUndefined(e) || null === e ? "" : e + ""
                            },
                            bind: e.proxy,
                            each: function(t, n) {
                                function r(e, t) {
                                    return n(t, e)
                                }
                                e.each(t, r)
                            },
                            map: e.map,
                            filter: e.grep,
                            every: function(t, n) {
                                var r = !0;
                                return t ? (e.each(t, function(e, i) {
                                    return (r = n.call(null, i, e, t)) ? void 0 : !1
                                }), !!r) : r
                            },
                            some: function(t, n) {
                                var r = !1;
                                return t ? (e.each(t, function(e, i) {
                                    return (r = n.call(null, i, e, t)) ? !1 : void 0
                                }), !!r) : r
                            },
                            mixin: e.extend,
                            identity: function(e) {
                                return e
                            },
                            clone: function(t) {
                                return e.extend(!0, {}, t)
                            },
                            getIdGenerator: function() {
                                var e = 0;
                                return function() {
                                    return e++
                                }
                            },
                            templatify: function(t) {
                                function n() {
                                    return String(t)
                                }
                                return e.isFunction(t) ? t : n
                            },
                            defer: function(e) {
                                setTimeout(e, 0)
                            },
                            debounce: function(e, t, n) {
                                var r, i;
                                return function() {
                                    var o, s, a = this,
                                        u = arguments;
                                    return o = function() {
                                        r = null, n || (i = e.apply(a, u))
                                    }, s = n && !r, clearTimeout(r), r = setTimeout(o, t), s && (i = e.apply(a, u)), i
                                }
                            },
                            throttle: function(e, t) {
                                var n, r, i, o, s, a;
                                return s = 0, a = function() {
                                        s = new Date, i = null, o = e.apply(n, r)
                                    },
                                    function() {
                                        var u = new Date,
                                            l = t - (u - s);
                                        return n = this, r = arguments, 0 >= l ? (clearTimeout(i), i = null, s = u, o = e.apply(n, r)) : i || (i = setTimeout(a, l)), o
                                    }
                            },
                            stringify: function(e) {
                                return t.isString(e) ? e : JSON.stringify(e)
                            },
                            noop: function() {}
                        }
                    }(),
                    n = function() {
                        function e(e) {
                            var s, a;
                            return a = t.mixin({}, o, e), s = {
                                css: i(),
                                classes: a,
                                html: n(a),
                                selectors: r(a)
                            }, {
                                css: s.css,
                                html: s.html,
                                classes: s.classes,
                                selectors: s.selectors,
                                mixin: function(e) {
                                    t.mixin(e, s)
                                }
                            }
                        }

                        function n(e) {
                            return {
                                wrapper: '<span class="' + e.wrapper + '"></span>',
                                menu: '<div class="' + e.menu + '"></div>'
                            }
                        }

                        function r(e) {
                            var n = {};
                            return t.each(e, function(e, t) {
                                n[t] = "." + e
                            }), n
                        }

                        function i() {
                            var e = {
                                wrapper: {
                                    position: "relative",
                                    display: "inline-block"
                                },
                                hint: {
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    borderColor: "transparent",
                                    boxShadow: "none",
                                    opacity: "1"
                                },
                                input: {
                                    position: "relative",
                                    verticalAlign: "top",
                                    backgroundColor: "transparent"
                                },
                                inputWithNoHint: {
                                    position: "relative",
                                    verticalAlign: "top"
                                },
                                menu: {
                                    position: "absolute",
                                    top: "100%",
                                    left: "0",
                                    zIndex: "100",
                                    display: "none"
                                },
                                ltr: {
                                    left: "0",
                                    right: "auto"
                                },
                                rtl: {
                                    left: "auto",
                                    right: " 0"
                                }
                            };
                            return t.isMsie() && t.mixin(e.input, {
                                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                            }), e
                        }
                        var o = {
                            wrapper: "twitter-typeahead",
                            input: "tt-input",
                            hint: "tt-hint",
                            menu: "tt-menu",
                            dataset: "tt-dataset",
                            suggestion: "tt-suggestion",
                            selectable: "tt-selectable",
                            empty: "tt-empty",
                            open: "tt-open",
                            cursor: "tt-cursor",
                            highlight: "tt-highlight"
                        };
                        return e
                    }(),
                    r = function() {
                        function n(t) {
                            t && t.el || e.error("EventBus initialized without el"), this.$el = e(t.el)
                        }
                        var r, i;
                        return r = "typeahead:", i = {
                            render: "rendered",
                            cursorchange: "cursorchanged",
                            select: "selected",
                            autocomplete: "autocompleted"
                        }, t.mixin(n.prototype, {
                            _trigger: function(t, n) {
                                var i;
                                return i = e.Event(r + t), (n = n || []).unshift(i), this.$el.trigger.apply(this.$el, n), i
                            },
                            before: function(e) {
                                var t, n;
                                return t = [].slice.call(arguments, 1), n = this._trigger("before" + e, t), n.isDefaultPrevented()
                            },
                            trigger: function(e) {
                                var t;
                                this._trigger(e, [].slice.call(arguments, 1)), (t = i[e]) && this._trigger(t, [].slice.call(arguments, 1))
                            }
                        }), n
                    }(),
                    i = function() {
                        function e(e, t, n, r) {
                            var i;
                            if (!n) return this;
                            for (t = t.split(u), n = r ? a(n, r) : n, this._callbacks = this._callbacks || {}; i = t.shift();) this._callbacks[i] = this._callbacks[i] || {
                                sync: [],
                                async: []
                            }, this._callbacks[i][e].push(n);
                            return this
                        }

                        function t(t, n, r) {
                            return e.call(this, "async", t, n, r)
                        }

                        function n(t, n, r) {
                            return e.call(this, "sync", t, n, r)
                        }

                        function r(e) {
                            var t;
                            if (!this._callbacks) return this;
                            for (e = e.split(u); t = e.shift();) delete this._callbacks[t];
                            return this
                        }

                        function i(e) {
                            var t, n, r, i, s;
                            if (!this._callbacks) return this;
                            for (e = e.split(u), r = [].slice.call(arguments, 1);
                                (t = e.shift()) && (n = this._callbacks[t]);) i = o(n.sync, this, [t].concat(r)), s = o(n.async, this, [t].concat(r)), i() && l(s);
                            return this
                        }

                        function o(e, t, n) {
                            function r() {
                                for (var r, i = 0, o = e.length; !r && o > i; i += 1) r = e[i].apply(t, n) === !1;
                                return !r
                            }
                            return r
                        }

                        function s() {
                            var e;
                            return e = window.setImmediate ? function(e) {
                                setImmediate(function() {
                                    e()
                                })
                            } : function(e) {
                                setTimeout(function() {
                                    e()
                                }, 0)
                            }
                        }

                        function a(e, t) {
                            return e.bind ? e.bind(t) : function() {
                                e.apply(t, [].slice.call(arguments, 0))
                            }
                        }
                        var u = /\s+/,
                            l = s();
                        return {
                            onSync: n,
                            onAsync: t,
                            off: r,
                            trigger: i
                        }
                    }(),
                    o = function(e) {
                        function n(e, n, r) {
                            for (var i, o = [], s = 0, a = e.length; a > s; s++) o.push(t.escapeRegExChars(e[s]));
                            return i = r ? "\\b(" + o.join("|") + ")\\b" : "(" + o.join("|") + ")", n ? new RegExp(i) : new RegExp(i, "i")
                        }
                        var r = {
                            node: null,
                            pattern: null,
                            tagName: "strong",
                            className: null,
                            wordsOnly: !1,
                            caseSensitive: !1
                        };
                        return function(i) {
                            function o(t) {
                                var n, r, o;
                                return (n = a.exec(t.data)) && (o = e.createElement(i.tagName), i.className && (o.className = i.className), r = t.splitText(n.index), r.splitText(n[0].length), o.appendChild(r.cloneNode(!0)), t.parentNode.replaceChild(o, r)), !!n
                            }

                            function s(e, t) {
                                for (var n, r = 3, i = 0; i < e.childNodes.length; i++) n = e.childNodes[i], n.nodeType === r ? i += t(n) ? 1 : 0 : s(n, t)
                            }
                            var a;
                            i = t.mixin({}, r, i), i.node && i.pattern && (i.pattern = t.isArray(i.pattern) ? i.pattern : [i.pattern], a = n(i.pattern, i.caseSensitive, i.wordsOnly), s(i.node, o))
                        }
                    }(window.document),
                    s = function() {
                        function n(n, i) {
                            n = n || {}, n.input || e.error("input is missing"), i.mixin(this), this.$hint = e(n.hint), this.$input = e(n.input), this.query = this.$input.val(), this.queryWhenFocused = this.hasFocus() ? this.query : null, this.$overflowHelper = r(this.$input), this._checkLanguageDirection(), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = t.noop)
                        }

                        function r(t) {
                            return e('<pre aria-hidden="true"></pre>').css({
                                position: "absolute",
                                visibility: "hidden",
                                whiteSpace: "pre",
                                fontFamily: t.css("font-family"),
                                fontSize: t.css("font-size"),
                                fontStyle: t.css("font-style"),
                                fontVariant: t.css("font-variant"),
                                fontWeight: t.css("font-weight"),
                                wordSpacing: t.css("word-spacing"),
                                letterSpacing: t.css("letter-spacing"),
                                textIndent: t.css("text-indent"),
                                textRendering: t.css("text-rendering"),
                                textTransform: t.css("text-transform")
                            }).insertAfter(t)
                        }

                        function o(e, t) {
                            return n.normalizeQuery(e) === n.normalizeQuery(t)
                        }

                        function s(e) {
                            return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
                        }
                        var a;
                        return a = {
                            9: "tab",
                            27: "esc",
                            37: "left",
                            39: "right",
                            13: "enter",
                            38: "up",
                            40: "down"
                        }, n.normalizeQuery = function(e) {
                            return t.toStr(e).replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
                        }, t.mixin(n.prototype, i, {
                            _onBlur: function() {
                                this.resetInputValue(), this.trigger("blurred")
                            },
                            _onFocus: function() {
                                this.queryWhenFocused = this.query, this.trigger("focused")
                            },
                            _onKeydown: function(e) {
                                var t = a[e.which || e.keyCode];
                                this._managePreventDefault(t, e), t && this._shouldTrigger(t, e) && this.trigger(t + "Keyed", e)
                            },
                            _onInput: function() {
                                this._setQuery(this.getInputValue()), this.clearHintIfInvalid(), this._checkLanguageDirection()
                            },
                            _managePreventDefault: function(e, t) {
                                var n;
                                switch (e) {
                                    case "up":
                                    case "down":
                                        n = !s(t);
                                        break;
                                    default:
                                        n = !1
                                }
                                n && t.preventDefault()
                            },
                            _shouldTrigger: function(e, t) {
                                var n;
                                switch (e) {
                                    case "tab":
                                        n = !s(t);
                                        break;
                                    default:
                                        n = !0
                                }
                                return n
                            },
                            _checkLanguageDirection: function() {
                                var e = (this.$input.css("direction") || "ltr").toLowerCase();
                                this.dir !== e && (this.dir = e, this.$hint.attr("dir", e), this.trigger("langDirChanged", e))
                            },
                            _setQuery: function(e, t) {
                                var n, r;
                                n = o(e, this.query), r = n ? this.query.length !== e.length : !1, this.query = e, t || n ? !t && r && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
                            },
                            bind: function() {
                                var e, n, r, i, o = this;
                                return e = t.bind(this._onBlur, this), n = t.bind(this._onFocus, this), r = t.bind(this._onKeydown, this), i = t.bind(this._onInput, this), this.$input.on("blur.tt", e).on("focus.tt", n).on("keydown.tt", r), !t.isMsie() || t.isMsie() > 9 ? this.$input.on("input.tt", i) : this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(e) {
                                    a[e.which || e.keyCode] || t.defer(t.bind(o._onInput, o, e))
                                }), this
                            },
                            focus: function() {
                                this.$input.focus()
                            },
                            blur: function() {
                                this.$input.blur()
                            },
                            getLangDir: function() {
                                return this.dir
                            },
                            getQuery: function() {
                                return this.query || ""
                            },
                            setQuery: function(e, t) {
                                this.setInputValue(e), this._setQuery(e, t)
                            },
                            hasQueryChangedSinceLastFocus: function() {
                                return this.query !== this.queryWhenFocused
                            },
                            getInputValue: function() {
                                return this.$input.val()
                            },
                            setInputValue: function(e) {
                                this.$input.val(e), this.clearHintIfInvalid(), this._checkLanguageDirection()
                            },
                            resetInputValue: function() {
                                this.setInputValue(this.query)
                            },
                            getHint: function() {
                                return this.$hint.val()
                            },
                            setHint: function(e) {
                                this.$hint.val(e)
                            },
                            clearHint: function() {
                                this.setHint("")
                            },
                            clearHintIfInvalid: function() {
                                var e, t, n, r;
                                e = this.getInputValue(), t = this.getHint(), n = e !== t && 0 === t.indexOf(e), r = "" !== e && n && !this.hasOverflow(), !r && this.clearHint()
                            },
                            hasFocus: function() {
                                return this.$input.is(":focus")
                            },
                            hasOverflow: function() {
                                var e = this.$input.width() - 2;
                                return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= e
                            },
                            isCursorAtEnd: function() {
                                var e, n, r;
                                return e = this.$input.val().length, n = this.$input[0].selectionStart, t.isNumber(n) ? n === e : document.selection ? (r = document.selection.createRange(), r.moveStart("character", -e), e === r.text.length) : !0
                            },
                            destroy: function() {
                                this.$hint.off(".tt"), this.$input.off(".tt"), this.$overflowHelper.remove(), this.$hint = this.$input = this.$overflowHelper = e("<div>")
                            }
                        }), n
                    }(),
                    a = function() {
                        function n(n, i) {
                            n = n || {}, n.templates = n.templates || {}, n.templates.notFound = n.templates.notFound || n.templates.empty, n.source || e.error("missing source"), n.node || e.error("missing node"), n.name && !a(n.name) && e.error("invalid dataset name: " + n.name), i.mixin(this), this.highlight = !!n.highlight, this.name = n.name || l(), this.limit = n.limit || 5, this.displayFn = r(n.display || n.displayKey), this.templates = s(n.templates, this.displayFn), this.source = n.source.__ttAdapter ? n.source.__ttAdapter() : n.source, this.async = t.isUndefined(n.async) ? this.source.length > 2 : !!n.async, this._resetLastSuggestion(), this.$el = e(n.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name)
                        }

                        function r(e) {
                            function n(t) {
                                return t[e]
                            }
                            return e = e || t.stringify, t.isFunction(e) ? e : n
                        }

                        function s(n, r) {
                            function i(t) {
                                return e("<div>").text(r(t))
                            }
                            return {
                                notFound: n.notFound && t.templatify(n.notFound),
                                pending: n.pending && t.templatify(n.pending),
                                header: n.header && t.templatify(n.header),
                                footer: n.footer && t.templatify(n.footer),
                                suggestion: n.suggestion || i
                            }
                        }

                        function a(e) {
                            return /^[_a-zA-Z0-9-]+$/.test(e)
                        }
                        var u, l;
                        return u = {
                            val: "tt-selectable-display",
                            obj: "tt-selectable-object"
                        }, l = t.getIdGenerator(), n.extractData = function(t) {
                            var n = e(t);
                            return n.data(u.obj) ? {
                                val: n.data(u.val) || "",
                                obj: n.data(u.obj) || null
                            } : null
                        }, t.mixin(n.prototype, i, {
                            _overwrite: function(e, t) {
                                t = t || [], t.length ? this._renderSuggestions(e, t) : this.async && this.templates.pending ? this._renderPending(e) : !this.async && this.templates.notFound ? this._renderNotFound(e) : this._empty(), this.trigger("rendered", this.name, t, !1)
                            },
                            _append: function(e, t) {
                                t = t || [], t.length && this.$lastSuggestion.length ? this._appendSuggestions(e, t) : t.length ? this._renderSuggestions(e, t) : !this.$lastSuggestion.length && this.templates.notFound && this._renderNotFound(e), this.trigger("rendered", this.name, t, !0)
                            },
                            _renderSuggestions: function(e, t) {
                                var n;
                                n = this._getSuggestionsFragment(e, t), this.$lastSuggestion = n.children().last(), this.$el.html(n).prepend(this._getHeader(e, t)).append(this._getFooter(e, t))
                            },
                            _appendSuggestions: function(e, t) {
                                var n, r;
                                n = this._getSuggestionsFragment(e, t), r = n.children().last(), this.$lastSuggestion.after(n), this.$lastSuggestion = r
                            },
                            _renderPending: function(e) {
                                var t = this.templates.pending;
                                this._resetLastSuggestion(), t && this.$el.html(t({
                                    query: e,
                                    dataset: this.name
                                }))
                            },
                            _renderNotFound: function(e) {
                                var t = this.templates.notFound;
                                this._resetLastSuggestion(), t && this.$el.html(t({
                                    query: e,
                                    dataset: this.name
                                }))
                            },
                            _empty: function() {
                                this.$el.empty(), this._resetLastSuggestion()
                            },
                            _getSuggestionsFragment: function(n, r) {
                                var i, s = this;
                                return i = document.createDocumentFragment(), t.each(r, function(t) {
                                    var r, o;
                                    o = s._injectQuery(n, t), r = e(s.templates.suggestion(o)).data(u.obj, t).data(u.val, s.displayFn(t)).addClass(s.classes.suggestion + " " + s.classes.selectable), i.appendChild(r[0])
                                }), this.highlight && o({
                                    className: this.classes.highlight,
                                    node: i,
                                    pattern: n
                                }), e(i)
                            },
                            _getFooter: function(e, t) {
                                return this.templates.footer ? this.templates.footer({
                                    query: e,
                                    suggestions: t,
                                    dataset: this.name
                                }) : null
                            },
                            _getHeader: function(e, t) {
                                return this.templates.header ? this.templates.header({
                                    query: e,
                                    suggestions: t,
                                    dataset: this.name
                                }) : null
                            },
                            _resetLastSuggestion: function() {
                                this.$lastSuggestion = e()
                            },
                            _injectQuery: function(e, n) {
                                return t.isObject(n) ? t.mixin({
                                    _query: e
                                }, n) : n
                            },
                            update: function(t) {
                                function n(e) {
                                    s || (s = !0, e = (e || []).slice(0, i.limit), a = e.length, i._overwrite(t, e), a < i.limit && i.async && i.trigger("asyncRequested", t))
                                }

                                function r(n) {
                                    n = n || [], !o && a < i.limit && (i.cancel = e.noop, a += n.length, i._append(t, n.slice(0, i.limit - a)), i.async && i.trigger("asyncReceived", t))
                                }
                                var i = this,
                                    o = !1,
                                    s = !1,
                                    a = 0;
                                this.cancel(), this.cancel = function() {
                                    o = !0, i.cancel = e.noop, i.async && i.trigger("asyncCanceled", t)
                                }, this.source(t, n, r), !s && n([])
                            },
                            cancel: e.noop,
                            clear: function() {
                                this._empty(), this.cancel(), this.trigger("cleared")
                            },
                            isEmpty: function() {
                                return this.$el.is(":empty")
                            },
                            destroy: function() {
                                this.$el = e("<div>")
                            }
                        }), n
                    }(),
                    u = function() {
                        function n(n, r) {
                            function i(t) {
                                var n = o.$node.find(t.node).first();
                                return t.node = n.length ? n : e("<div>").appendTo(o.$node), new a(t, r)
                            }
                            var o = this;
                            n = n || {}, n.node || e.error("node is required"), r.mixin(this), this.$node = e(n.node), this.query = null, this.datasets = t.map(n.datasets, i)
                        }
                        return t.mixin(n.prototype, i, {
                            _onSelectableClick: function(t) {
                                this.trigger("selectableClicked", e(t.currentTarget))
                            },
                            _onRendered: function(e, t, n, r) {
                                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetRendered", t, n, r)
                            },
                            _onCleared: function() {
                                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetCleared")
                            },
                            _propagate: function() {
                                this.trigger.apply(this, arguments)
                            },
                            _allDatasetsEmpty: function() {
                                function e(e) {
                                    return e.isEmpty()
                                }
                                return t.every(this.datasets, e)
                            },
                            _getSelectables: function() {
                                return this.$node.find(this.selectors.selectable)
                            },
                            _removeCursor: function() {
                                var e = this.getActiveSelectable();
                                e && e.removeClass(this.classes.cursor)
                            },
                            _ensureVisible: function(e) {
                                var t, n, r, i;
                                t = e.position().top, n = t + e.outerHeight(!0), r = this.$node.scrollTop(), i = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10), 0 > t ? this.$node.scrollTop(r + t) : n > i && this.$node.scrollTop(r + (n - i))
                            },
                            bind: function() {
                                var e, n = this;
                                return e = t.bind(this._onSelectableClick, this), this.$node.on("click.tt", this.selectors.selectable, e), t.each(this.datasets, function(e) {
                                    e.onSync("asyncRequested", n._propagate, n).onSync("asyncCanceled", n._propagate, n).onSync("asyncReceived", n._propagate, n).onSync("rendered", n._onRendered, n).onSync("cleared", n._onCleared, n)
                                }), this
                            },
                            isOpen: function() {
                                return this.$node.hasClass(this.classes.open)
                            },
                            open: function() {
                                this.$node.addClass(this.classes.open)
                            },
                            close: function() {
                                this.$node.removeClass(this.classes.open), this._removeCursor()
                            },
                            setLanguageDirection: function(e) {
                                this.$node.attr("dir", e)
                            },
                            selectableRelativeToCursor: function(e) {
                                var t, n, r, i;
                                return n = this.getActiveSelectable(), t = this._getSelectables(), r = n ? t.index(n) : -1, i = r + e, i = (i + 1) % (t.length + 1) - 1, i = -1 > i ? t.length - 1 : i, -1 === i ? null : t.eq(i)
                            },
                            setCursor: function(e) {
                                this._removeCursor(), (e = e && e.first()) && (e.addClass(this.classes.cursor), this._ensureVisible(e))
                            },
                            getSelectableData: function(e) {
                                return e && e.length ? a.extractData(e) : null
                            },
                            getActiveSelectable: function() {
                                var e = this._getSelectables().filter(this.selectors.cursor).first();
                                return e.length ? e : null
                            },
                            getTopSelectable: function() {
                                var e = this._getSelectables().first();
                                return e.length ? e : null
                            },
                            update: function(e) {
                                function n(t) {
                                    t.update(e)
                                }
                                var r = e !== this.query;
                                return r && (this.query = e, t.each(this.datasets, n)), r
                            },
                            empty: function() {
                                function e(e) {
                                    e.clear()
                                }
                                t.each(this.datasets, e), this.query = null, this.$node.addClass(this.classes.empty)
                            },
                            destroy: function() {
                                function n(e) {
                                    e.destroy()
                                }
                                this.$node.off(".tt"), this.$node = e("<div>"), t.each(this.datasets, n)
                            }
                        }), n
                    }(),
                    l = function() {
                        function e() {
                            u.apply(this, [].slice.call(arguments, 0))
                        }
                        var n = u.prototype;
                        return t.mixin(e.prototype, u.prototype, {
                            open: function() {
                                return !this._allDatasetsEmpty() && this._show(), n.open.apply(this, [].slice.call(arguments, 0))
                            },
                            close: function() {
                                return this._hide(), n.close.apply(this, [].slice.call(arguments, 0))
                            },
                            _onRendered: function() {
                                return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), n._onRendered.apply(this, [].slice.call(arguments, 0))
                            },
                            _onCleared: function() {
                                return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), n._onCleared.apply(this, [].slice.call(arguments, 0))
                            },
                            setLanguageDirection: function(e) {
                                return this.$node.css("ltr" === e ? this.css.ltr : this.css.rtl), n.setLanguageDirection.apply(this, [].slice.call(arguments, 0))
                            },
                            _hide: function() {
                                this.$node.hide()
                            },
                            _show: function() {
                                this.$node.css("display", "block")
                            }
                        }), e
                    }(),
                    c = function() {
                        function n(n, i) {
                            var o, s, a, u, l, c, d, h, f, p, m;
                            n = n || {}, n.input || e.error("missing input"), n.menu || e.error("missing menu"), n.eventBus || e.error("missing event bus"), i.mixin(this), this.eventBus = n.eventBus, this.minLength = t.isNumber(n.minLength) ? n.minLength : 1, this.input = n.input, this.menu = n.menu, this.enabled = !0, this.active = !1, this.input.hasFocus() && this.activate(), this.dir = this.input.getLangDir(), this._hacks(), this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this), o = r(this, "activate", "open", "_onFocused"), s = r(this, "deactivate", "_onBlurred"), a = r(this, "isActive", "isOpen", "_onEnterKeyed"), u = r(this, "isActive", "isOpen", "_onTabKeyed"), l = r(this, "isActive", "_onEscKeyed"), c = r(this, "isActive", "open", "_onUpKeyed"), d = r(this, "isActive", "open", "_onDownKeyed"), h = r(this, "isActive", "isOpen", "_onLeftKeyed"), f = r(this, "isActive", "isOpen", "_onRightKeyed"), p = r(this, "_openIfActive", "_onQueryChanged"), m = r(this, "_openIfActive", "_onWhitespaceChanged"), this.input.bind().onSync("focused", o, this).onSync("blurred", s, this).onSync("enterKeyed", a, this).onSync("tabKeyed", u, this).onSync("escKeyed", l, this).onSync("upKeyed", c, this).onSync("downKeyed", d, this).onSync("leftKeyed", h, this).onSync("rightKeyed", f, this).onSync("queryChanged", p, this).onSync("whitespaceChanged", m, this).onSync("langDirChanged", this._onLangDirChanged, this)
                        }

                        function r(e) {
                            var n = [].slice.call(arguments, 1);
                            return function() {
                                var r = [].slice.call(arguments);
                                t.each(n, function(t) {
                                    return e[t].apply(e, r)
                                })
                            }
                        }
                        return t.mixin(n.prototype, {
                            _hacks: function() {
                                var n, r;
                                n = this.input.$input || e("<div>"), r = this.menu.$node || e("<div>"), n.on("blur.tt", function(e) {
                                    var i, o, s;
                                    i = document.activeElement, o = r.is(i), s = r.has(i).length > 0, t.isMsie() && (o || s) && (e.preventDefault(), e.stopImmediatePropagation(), t.defer(function() {
                                        n.focus()
                                    }))
                                }), r.on("mousedown.tt", function(e) {
                                    e.preventDefault()
                                })
                            },
                            _onSelectableClicked: function(e, t) {
                                this.select(t)
                            },
                            _onDatasetCleared: function() {
                                this._updateHint()
                            },
                            _onDatasetRendered: function(e, t, n, r) {
                                this._updateHint(), this.eventBus.trigger("render", n, r, t)
                            },
                            _onAsyncRequested: function(e, t, n) {
                                this.eventBus.trigger("asyncrequest", n, t)
                            },
                            _onAsyncCanceled: function(e, t, n) {
                                this.eventBus.trigger("asynccancel", n, t)
                            },
                            _onAsyncReceived: function(e, t, n) {
                                this.eventBus.trigger("asyncreceive", n, t)
                            },
                            _onFocused: function() {
                                this._minLengthMet() && this.menu.update(this.input.getQuery())
                            },
                            _onBlurred: function() {
                                this.input.hasQueryChangedSinceLastFocus() && this.eventBus.trigger("change", this.input.getQuery())
                            },
                            _onEnterKeyed: function(e, t) {
                                var n;
                                (n = this.menu.getActiveSelectable()) && this.select(n) && t.preventDefault()
                            },
                            _onTabKeyed: function(e, t) {
                                var n;
                                (n = this.menu.getActiveSelectable()) ? this.select(n) && t.preventDefault(): (n = this.menu.getTopSelectable()) && this.autocomplete(n) && t.preventDefault()
                            },
                            _onEscKeyed: function() {
                                this.close()
                            },
                            _onUpKeyed: function() {
                                this.moveCursor(-1)
                            },
                            _onDownKeyed: function() {
                                this.moveCursor(1)
                            },
                            _onLeftKeyed: function() {
                                "rtl" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
                            },
                            _onRightKeyed: function() {
                                "ltr" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
                            },
                            _onQueryChanged: function(e, t) {
                                this._minLengthMet(t) ? this.menu.update(t) : this.menu.empty()
                            },
                            _onWhitespaceChanged: function() {
                                this._updateHint()
                            },
                            _onLangDirChanged: function(e, t) {
                                this.dir !== t && (this.dir = t, this.menu.setLanguageDirection(t))
                            },
                            _openIfActive: function() {
                                this.isActive() && this.open()
                            },
                            _minLengthMet: function(e) {
                                return e = t.isString(e) ? e : this.input.getQuery() || "", e.length >= this.minLength
                            },
                            _updateHint: function() {
                                var e, n, r, i, o, a, u;
                                e = this.menu.getTopSelectable(), n = this.menu.getSelectableData(e), r = this.input.getInputValue(), !n || t.isBlankString(r) || this.input.hasOverflow() ? this.input.clearHint() : (i = s.normalizeQuery(r), o = t.escapeRegExChars(i), a = new RegExp("^(?:" + o + ")(.+$)", "i"), u = a.exec(n.val), u && this.input.setHint(r + u[1]))
                            },
                            isEnabled: function() {
                                return this.enabled
                            },
                            enable: function() {
                                this.enabled = !0
                            },
                            disable: function() {
                                this.enabled = !1
                            },
                            isActive: function() {
                                return this.active
                            },
                            activate: function() {
                                return this.isActive() ? !0 : !this.isEnabled() || this.eventBus.before("active") ? !1 : (this.active = !0, this.eventBus.trigger("active"), !0)
                            },
                            deactivate: function() {
                                return this.isActive() ? this.eventBus.before("idle") ? !1 : (this.active = !1, this.close(), this.eventBus.trigger("idle"), !0) : !0
                            },
                            isOpen: function() {
                                return this.menu.isOpen()
                            },
                            open: function() {
                                return this.isOpen() || this.eventBus.before("open") || (this.menu.open(), this._updateHint(), this.eventBus.trigger("open")), this.isOpen()
                            },
                            close: function() {
                                return this.isOpen() && !this.eventBus.before("close") && (this.menu.close(), this.input.clearHint(), this.input.resetInputValue(), this.eventBus.trigger("close")), !this.isOpen()
                            },
                            setVal: function(e) {
                                this.input.setQuery(t.toStr(e))
                            },
                            getVal: function() {
                                return this.input.getQuery()
                            },
                            select: function(e) {
                                var t = this.menu.getSelectableData(e);
                                return t && !this.eventBus.before("select", t.obj) ? (this.input.setQuery(t.val, !0), this.eventBus.trigger("select", t.obj), this.close(), !0) : !1
                            },
                            autocomplete: function(e) {
                                var t, n, r;
                                return t = this.input.getQuery(), n = this.menu.getSelectableData(e), r = n && t !== n.val, r && !this.eventBus.before("autocomplete", n.obj) ? (this.input.setQuery(n.val),
                                    this.eventBus.trigger("autocomplete", n.obj), !0) : !1
                            },
                            moveCursor: function(e) {
                                var t, n, r, i, o;
                                return t = this.input.getQuery(), n = this.menu.selectableRelativeToCursor(e), r = this.menu.getSelectableData(n), i = r ? r.obj : null, o = this._minLengthMet() && this.menu.update(t), o || this.eventBus.before("cursorchange", i) ? !1 : (this.menu.setCursor(n), r ? this.input.setInputValue(r.val) : (this.input.resetInputValue(), this._updateHint()), this.eventBus.trigger("cursorchange", i), !0)
                            },
                            destroy: function() {
                                this.input.destroy(), this.menu.destroy()
                            }
                        }), n
                    }();
                ! function() {
                    function i(t, n) {
                        t.each(function() {
                            var t, r = e(this);
                            (t = r.data(m.typeahead)) && n(t, r)
                        })
                    }

                    function o(e, t) {
                        return e.clone().addClass(t.classes.hint).removeData().css(t.css.hint).css(d(e)).prop("readonly", !0).removeAttr("id name placeholder required").attr({
                            autocomplete: "off",
                            spellcheck: "false",
                            tabindex: -1
                        })
                    }

                    function a(e, t) {
                        e.data(m.attrs, {
                            dir: e.attr("dir"),
                            autocomplete: e.attr("autocomplete"),
                            spellcheck: e.attr("spellcheck"),
                            style: e.attr("style")
                        }), e.addClass(t.classes.input).attr({
                            autocomplete: "off",
                            spellcheck: !1
                        });
                        try {
                            !e.attr("dir") && e.attr("dir", "auto")
                        } catch (n) {}
                        return e
                    }

                    function d(e) {
                        return {
                            backgroundAttachment: e.css("background-attachment"),
                            backgroundClip: e.css("background-clip"),
                            backgroundColor: e.css("background-color"),
                            backgroundImage: e.css("background-image"),
                            backgroundOrigin: e.css("background-origin"),
                            backgroundPosition: e.css("background-position"),
                            backgroundRepeat: e.css("background-repeat"),
                            backgroundSize: e.css("background-size")
                        }
                    }

                    function h(e) {
                        var n, r;
                        n = e.data(m.www), r = e.parent().filter(n.selectors.wrapper), t.each(e.data(m.attrs), function(n, r) {
                            t.isUndefined(n) ? e.removeAttr(r) : e.attr(r, n)
                        }), e.removeData(m.typeahead).removeData(m.www).removeData(m.attr).removeClass(n.classes.input), r.length && (e.detach().insertAfter(r), r.remove())
                    }

                    function f(n) {
                        var r, i;
                        return r = t.isJQuery(n) || t.isElement(n), i = r ? e(n).first() : [], i.length ? i : null
                    }
                    var p, m, g;
                    p = e.fn.typeahead, m = {
                        www: "tt-www",
                        attrs: "tt-attrs",
                        typeahead: "tt-typeahead"
                    }, g = {
                        initialize: function(i, d) {
                            function h() {
                                var n, h, g, v, y, _, b, w, x, k, C;
                                t.each(d, function(e) {
                                    e.highlight = !!i.highlight
                                }), n = e(this), h = e(p.html.wrapper), g = f(i.hint), v = f(i.menu), y = i.hint !== !1 && !g, _ = i.menu !== !1 && !v, y && (g = o(n, p)), _ && (v = e(p.html.menu).css(p.css.menu)), g && g.val(""), n = a(n, p), (y || _) && (h.css(p.css.wrapper), n.css(y ? p.css.input : p.css.inputWithNoHint), n.wrap(h).parent().prepend(y ? g : null).append(_ ? v : null)), C = _ ? l : u, b = new r({
                                    el: n
                                }), w = new s({
                                    hint: g,
                                    input: n
                                }, p), x = new C({
                                    node: v,
                                    datasets: d
                                }, p), k = new c({
                                    input: w,
                                    menu: x,
                                    eventBus: b,
                                    minLength: i.minLength
                                }, p), n.data(m.www, p), n.data(m.typeahead, k)
                            }
                            var p;
                            return d = t.isArray(d) ? d : [].slice.call(arguments, 1), i = i || {}, p = n(i.classNames), this.each(h)
                        },
                        isEnabled: function() {
                            var e;
                            return i(this.first(), function(t) {
                                e = t.isEnabled()
                            }), e
                        },
                        enable: function() {
                            return i(this, function(e) {
                                e.enable()
                            }), this
                        },
                        disable: function() {
                            return i(this, function(e) {
                                e.disable()
                            }), this
                        },
                        isActive: function() {
                            var e;
                            return i(this.first(), function(t) {
                                e = t.isActive()
                            }), e
                        },
                        activate: function() {
                            return i(this, function(e) {
                                e.activate()
                            }), this
                        },
                        deactivate: function() {
                            return i(this, function(e) {
                                e.deactivate()
                            }), this
                        },
                        isOpen: function() {
                            var e;
                            return i(this.first(), function(t) {
                                e = t.isOpen()
                            }), e
                        },
                        open: function() {
                            return i(this, function(e) {
                                e.open()
                            }), this
                        },
                        close: function() {
                            return i(this, function(e) {
                                e.close()
                            }), this
                        },
                        select: function(t) {
                            var n = !1,
                                r = e(t);
                            return i(this.first(), function(e) {
                                n = e.select(r)
                            }), n
                        },
                        autocomplete: function(t) {
                            var n = !1,
                                r = e(t);
                            return i(this.first(), function(e) {
                                n = e.autocomplete(r)
                            }), n
                        },
                        moveCursor: function(e) {
                            var t = !1;
                            return i(this.first(), function(n) {
                                t = n.moveCursor(e)
                            }), t
                        },
                        val: function(e) {
                            var t;
                            return arguments.length ? (i(this, function(t) {
                                t.setVal(e)
                            }), this) : (i(this.first(), function(e) {
                                t = e.getVal()
                            }), t)
                        },
                        destroy: function() {
                            return i(this, function(e, t) {
                                h(t), e.destroy()
                            }), this
                        }
                    }, e.fn.typeahead = function(e) {
                        return g[e] ? g[e].apply(this, [].slice.call(arguments, 1)) : g.initialize.apply(this, arguments)
                    }, e.fn.typeahead.noConflict = function() {
                        return e.fn.typeahead = p, this
                    }
                }()
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}]
}, {}, [1]);