const _0x2d59cb = _0x39f5;
(function(_0x2e7fcc, _0x45d701) {
    const _0x2b9068 = _0x39f5,
        _0x2bf63c = _0x2e7fcc();
    while (!![]) {
        try {
            const _0x5262e4 = -parseInt(_0x2b9068(0x116)) / 0x1 * (parseInt(_0x2b9068(0x166)) / 0x2) + parseInt(_0x2b9068(0x149)) / 0x3 * (parseInt(_0x2b9068(0x135)) / 0x4) + -parseInt(_0x2b9068(0x11a)) / 0x5 + -parseInt(_0x2b9068(0x12e)) / 0x6 * (-parseInt(_0x2b9068(0x124)) / 0x7) + -parseInt(_0x2b9068(0x13a)) / 0x8 + -parseInt(_0x2b9068(0x15e)) / 0x9 * (-parseInt(_0x2b9068(0x11f)) / 0xa) + parseInt(_0x2b9068(0x147)) / 0xb;
            if (_0x5262e4 === _0x45d701) break;
            else _0x2bf63c['push'](_0x2bf63c['shift']());
        } catch (_0x4b32ec) {
            _0x2bf63c['push'](_0x2bf63c['shift']());
        }
    }
}(_0x5acd, 0x8c466));
import _0x375ddb from 'assets://js/lib/cheerio.min.js';
import 'assets://js/lib/crypto-js.js';
var m_js_1 = '',
    m_hken = '',
    m_hkens = '',
    m_token = '';
const config = {
    'picUrl': _0x2d59cb(0x15d),
    'classes': [],
    'headers': {
        'user-agent': _0x2d59cb(0x13e)
    },
    'headers2': {
        'user-agent': _0x2d59cb(0x154)
    },
    'player': {},
    'filter': {
        'myIPTV': [{
            'key': 0x1,
            'name': '类别',
            'value': [{
                'n': '央视',
                'v': 'ys'
            }, {
                'n': '体育',
                'v': 'ty'
            }, {
                'n': '卫视',
                'v': 'ws'
            }, {
                'n': '港澳',
                'v': 'gt'
            }, {
                'n': '其他',
                'v': 'other'
            }, {
                'n': '电影',
                'v': _0x2d59cb(0x13f)
            }, {
                'n': '咪咕视频',
                'v': _0x2d59cb(0x167)
            }, {
                'n': '北方IPTV',
                'v': _0x2d59cb(0x133)
            }, {
                'n': _0x2d59cb(0x11c),
                'v': 'ltiptv'
            }, {
                'n': '北京教育网IPTV',
                'v': 'bupt'
            }, {
                'n': '福建移动IPTV',
                'v': _0x2d59cb(0x137)
            }, {
                'n': _0x2d59cb(0x132),
                'v': 'hlitv'
            }, {
                'n': _0x2d59cb(0x14a),
                'v': _0x2d59cb(0x140)
            }]
        }],
        'movie': [{
            'key': 0x1,
            'name': '类别',
            'value': [{
                'n': '热门',
                'v': '热门'
            }, {
                'n': '最新',
                'v': '最新'
            }, {
                'n': '经典',
                'v': '经典'
            }, {
                'n': '华语',
                'v': '华语'
            }, {
                'n': '欧美',
                'v': '欧美'
            }, {
                'n': '韩国',
                'v': '韩国'
            }, {
                'n': '日本',
                'v': '日本'
            }, {
                'n': '动作',
                'v': '动作'
            }, {
                'n': '喜剧',
                'v': '喜剧'
            }, {
                'n': '爱情',
                'v': '爱情'
            }, {
                'n': '科幻',
                'v': '科幻'
            }, {
                'n': '悬疑',
                'v': '悬疑'
            }, {
                'n': '恐怖',
                'v': '恐怖'
            }, {
                'n': '成长',
                'v': '成长'
            }, {
                'n': _0x2d59cb(0x13b),
                'v': _0x2d59cb(0x13b)
            }, {
                'n': _0x2d59cb(0x168),
                'v': _0x2d59cb(0x168)
            }, {
                'n': _0x2d59cb(0x165),
                'v': _0x2d59cb(0x165)
            }]
        }],
        'tv': [{
            'key': 0x1,
            'name': '类别',
            'value': [{
                'n': '热门',
                'v': '热门'
            }, {
                'n': '美剧',
                'v': '美剧'
            }, {
                'n': '英剧',
                'v': '英剧'
            }, {
                'n': '韩剧',
                'v': '韩剧'
            }, {
                'n': '日剧',
                'v': '日剧'
            }, {
                'n': _0x2d59cb(0x150),
                'v': _0x2d59cb(0x150)
            }, {
                'n': '港剧',
                'v': '港剧'
            }, {
                'n': '动画',
                'v': _0x2d59cb(0x11b)
            }, {
                'n': '综艺',
                'v': '综艺'
            }, {
                'n': '纪录片',
                'v': _0x2d59cb(0x153)
            }]
        }]
    }
};

function parseSub(_0x4bcd5e) {
    const _0x94387f = _0x2d59cb,
        _0x16611b = /^#([^#\n]*?)\n([^#\n]+)/gm;
    let _0x408bf1 = '',
        _0x2a7284 = req(_0x4bcd5e, {
            'headers': config['headers']
        })[_0x94387f(0x152)];
    while ((_0x408bf1 = _0x16611b[_0x94387f(0x151)](_0x2a7284)) !== null) {
        _0x408bf1['index'] === _0x16611b[_0x94387f(0x155)] && _0x16611b[_0x94387f(0x155)]++;
        if (_0x408bf1[0x1] == '订阅名') continue;
        if (_0x408bf1[0x2][_0x94387f(0x122)](/^(\.)/)) {
            let _0x1e3b2d = _0x4bcd5e[_0x94387f(0x12d)](0x0, _0x4bcd5e[_0x94387f(0x143)]('/'));
            _0x408bf1[0x2] = _0x1e3b2d + _0x408bf1[0x2][_0x94387f(0x160)](/^\./, '');
        }
        _0x408bf1[0x2][_0x94387f(0x122)](/^(\/)/) && (_0x408bf1[0x2] = _0x94387f(0x14e) + _0x408bf1[0x2]), config[_0x94387f(0x14c)][_0x94387f(0x118)]({
            'type_id': _0x408bf1[0x2],
            'type_name': _0x408bf1[0x1]
        });
    }
}

function _0x39f5(_0x36089e, _0x4d8dad) {
    const _0x5acd2b = _0x5acd();
    return _0x39f5 = function(_0x39f538, _0x5bfcb7) {
        _0x39f538 = _0x39f538 - 0x115;
        let _0x2199d0 = _0x5acd2b[_0x39f538];
        return _0x2199d0;
    }, _0x39f5(_0x36089e, _0x4d8dad);
}

function init(_0x56cd4f) {
    const _0x4e0541 = _0x2d59cb;
    console[_0x4e0541(0x14d)](_0x56cd4f), parseSub(_0x56cd4f);
}

function home(_0x4cf106) {
    const _0x35f501 = _0x2d59cb;
    let _0x242651 = {};
    return _0x4cf106 && (_0x242651['filters'] = config[_0x35f501(0x129)]), _0x242651[_0x35f501(0x131)] = config[_0x35f501(0x14c)], JSON[_0x35f501(0x158)](_0x242651);
}

function homeVod() {
    const _0x51e42d = _0x2d59cb;
    let _0x566744 = {},
        _0xffc2d9 = [],
        _0x3d0e1d = req(_0x51e42d(0x159), {
            'headers': config['headers2']
        })['content'],
        _0x347459 = _0x375ddb[_0x51e42d(0x126)](_0x3d0e1d),
        _0xafe2d0 = _0x347459(_0x51e42d(0x123));
    return _0xafe2d0['each'](function(_0x579958) {
        const _0x368b0a = _0x51e42d;
        _0x347459('a', this)[_0x368b0a(0x127)]() != '' && _0xffc2d9[_0x368b0a(0x118)]({
            'vod_id': 'IPTV_' + _0x347459('a', this)[_0x368b0a(0x127)]() + _0x368b0a(0x138) + _0x347459('a', this)[_0x368b0a(0x144)]('href'),
            'vod_name': _0x347459('a', this)['text'](),
            'vod_pic': config[_0x368b0a(0x162)],
            'vod_remarks': ''
        });
    }), _0x566744 = {
        'list': _0xffc2d9
    }, JSON[_0x51e42d(0x158)](_0x566744);
}

function category(_0x222e1e, _0x3c37c3, _0x19dac9, _0x269b63) {
    const _0x1d9642 = _0x2d59cb;
    let _0x421f66 = {},
        _0x92586f = [],
        _0x3f0bcf = '',
        _0x473736 = [],
        _0x2589da = [];
    _0x3c37c3 = parseInt(_0x3c37c3);
    if (_0x3c37c3 >= 0x2) return JSON[_0x1d9642(0x158)]({});
    if (_0x222e1e == _0x1d9642(0x12a)) {
        JSON[_0x1d9642(0x158)](_0x269b63) != '{}' ? _0x3f0bcf = _0x269b63['1'] : _0x3f0bcf = 'ys';
        let _0x41458c = req('https://m.iptv807.com/?tid=' + _0x3f0bcf, {
                'headers': config[_0x1d9642(0x125)]
            })[_0x1d9642(0x152)],
            _0x24d615 = _0x375ddb['load'](_0x41458c),
            _0x51ccec = _0x24d615(_0x1d9642(0x123));
        _0x51ccec['each'](function(_0x2bb67f) {
            const _0x264779 = _0x1d9642;
            _0x24d615('a', this)['text']() != '' && _0x92586f[_0x264779(0x118)]({
                'vod_id': _0x264779(0x148) + _0x24d615('a', this)[_0x264779(0x127)]() + _0x264779(0x138) + _0x24d615('a', this)[_0x264779(0x144)](_0x264779(0x11d)),
                'vod_name': _0x24d615('a', this)[_0x264779(0x127)](),
                'vod_pic': config[_0x264779(0x162)],
                'vod_remarks': ''
            });
        });
    } else {
        let _0x5da6d5 = req(_0x222e1e, {
            'headers': config[_0x1d9642(0x13c)]
        })[_0x1d9642(0x152)];
        if (_0x5da6d5['indexOf'](_0x1d9642(0x15c)) == 0x0) {
            let _0x34f4ee = /(.*),(.*)\s*?((?:http|rtmp)[^#\s]*)/gm;
            while ((_0x2589da = _0x34f4ee[_0x1d9642(0x151)](_0x5da6d5)) !== null) {
                _0x2589da[_0x1d9642(0x139)] === _0x34f4ee[_0x1d9642(0x155)] && _0x34f4ee[_0x1d9642(0x155)]++;
                let _0x1231f0 = _0x1d9642(0x169);
                _0x1231f0 = (_0x2589da[0x1][_0x1d9642(0x122)](/group-title="(.*?)"/) || [null, _0x1231f0])[0x1], _0x473736[_0x1d9642(0x136)](_0x1231f0) == -0x1 && (_0x473736[_0x1d9642(0x118)](_0x1231f0), _0x92586f[_0x1d9642(0x118)]({
                    'vod_id': _0x1231f0 + _0x1d9642(0x138) + _0x222e1e,
                    'vod_name': _0x1231f0,
                    'vod_pic': config['picUrl'],
                    'vod_remarks': ''
                }));
            }
        } else {
            let _0x1f66ae = /()(?:\B\$c_start|\B#{1,2})?(.*?),?(##|头#|\$c_end|,?#genre#|(?:http|rtmp)[^\s]*)/gm;
            while ((_0x2589da = _0x1f66ae[_0x1d9642(0x151)](_0x5da6d5)) !== null) {
                _0x2589da[_0x1d9642(0x139)] === _0x1f66ae[_0x1d9642(0x155)] && _0x1f66ae[_0x1d9642(0x155)]++;
                if (['#genre#', '##', '头#', _0x1d9642(0x128)]['includes'](_0x2589da[0x3])) {
                    let _0x4b56a7 = _0x2589da[0x2];
                    _0x473736[_0x1d9642(0x136)](_0x4b56a7) == -0x1 && (_0x473736['push'](_0x4b56a7), _0x92586f[_0x1d9642(0x118)]({
                        'vod_id': _0x4b56a7 + _0x1d9642(0x138) + _0x222e1e,
                        'vod_name': _0x4b56a7,
                        'vod_pic': config[_0x1d9642(0x162)],
                        'vod_remarks': ''
                    }));
                }
            }
        }
    }
    return _0x421f66 = {
        'list': _0x92586f,
        'page': _0x3c37c3,
        'pagecount': 0x1,
        'limit': 0x64,
        'total': 0x3e7
    }, JSON[_0x1d9642(0x158)](_0x421f66);
}

function search(_0xb26de, _0x216744) {
    const _0x55433f = _0x2d59cb;
    let _0x2d09b4 = {},
        _0x49d9f4 = [];
    return JSON[_0x55433f(0x158)](_0x2d09b4);
}

function detail(_0x4b6d3e) {
    const _0x160b39 = _0x2d59cb;
    let _0x582415 = {},
        _0x5c412c = {},
        _0x1516f6 = [],
        _0x1636ab = _0x4b6d3e['split']('$$$')[0x1];
    _0x4b6d3e = _0x4b6d3e[_0x160b39(0x119)]('$$$')[0x0];
    let _0x1ee1fc = {
        'vod_id': _0x4b6d3e,
        'vod_name': _0x4b6d3e,
        'vod_pic': config[_0x160b39(0x162)],
        'type_name': '',
        'vod_year': '',
        'vod_area': '',
        'vod_remarks': '',
        'vod_actor': '',
        'vod_director': '',
        'vod_content': '',
        'vod_play_from': '',
        'vod_play_url': ''
    };
    if (_0x4b6d3e[_0x160b39(0x134)]('IPTV')) {
        let _0x550024 = '',
            _0x4b4477 = '';
        _0x1636ab = _0x160b39(0x115) + _0x1636ab;
        let _0x290344 = req(_0x1636ab, {
                'headers': config[_0x160b39(0x125)]
            })[_0x160b39(0x152)],
            _0x488aa9 = _0x375ddb[_0x160b39(0x126)](_0x290344),
            _0x4facf4 = _0x488aa9(_0x160b39(0x123));
        for (let _0x56cde6 = 0x1; _0x56cde6 < 0xb; _0x56cde6++) {
            _0x550024 = _0x550024 + _0x160b39(0x138) + '线路' + _0x56cde6, _0x4facf4[_0x160b39(0x11e)](function(_0x2c4003) {
                const _0x370942 = _0x160b39;
                _0x488aa9('a', this)['text']() != '' && (_0x4b4477 = _0x4b4477 + '#' + _0x488aa9('a', this)['text']() + '$' + _0x370942(0x115) + _0x488aa9('a', this)[_0x370942(0x144)]('href') + _0x370942(0x157) + (_0x56cde6 - 0x1));
            }), _0x4b4477 = _0x4b4477[_0x160b39(0x160)](/^#/, ''), _0x4b4477 = _0x4b4477 + _0x160b39(0x138);
        }
        _0x1ee1fc[_0x160b39(0x14f)] = _0x550024[_0x160b39(0x160)](/^\$\$\$/, ''), _0x1ee1fc[_0x160b39(0x15a)] = _0x4b4477[_0x160b39(0x160)](/\$\$\$#/g, '$$$$$$');
    } else {
        let _0x58fffc = req(_0x1636ab, {
            'headers': config[_0x160b39(0x13c)]
        })['content'];
        if (_0x58fffc[_0x160b39(0x136)](_0x160b39(0x15c)) == 0x0) {
            let _0x4c0d7e = /(.*),(.*)\s*?((?:http|rtmp)[^#\s]*)/gm;
            while ((_0x1516f6 = _0x4c0d7e['exec'](_0x58fffc)) !== null) {
                _0x1516f6['index'] === _0x4c0d7e[_0x160b39(0x155)] && _0x4c0d7e[_0x160b39(0x155)]++;
                let _0x3b6372 = '未分组';
                _0x3b6372 = (_0x1516f6[0x1][_0x160b39(0x122)](/group-title="(.*?)"/) || [null, _0x3b6372])[0x1];
                if (_0x3b6372 == _0x4b6d3e) {
                    if (_0x5c412c[_0x1516f6[0x2]]) {
                        let _0x4c9788 = '线路' + (_0x5c412c[_0x1516f6[0x2]] + 0x1);
                        _0x5c412c[_0x1516f6[0x2]][_0x160b39(0x118)]({
                            'name': _0x4c9788,
                            'url': _0x1516f6[0x3]
                        });
                    } else _0x5c412c[_0x1516f6[0x2]] = [], _0x5c412c[_0x1516f6[0x2]][_0x160b39(0x118)]({
                        'name': _0x160b39(0x12f),
                        'url': _0x1516f6[0x3]
                    });
                }
            }
        } else {
            let _0x232e49 = /()(?:\B\$c_start|\B#{1,2})?(.*?),?(##|头#|\$c_end|,?#genre#|(?:http|rtmp)[^\s]*)/gm,
                _0x349601 = !![];
            while ((_0x1516f6 = _0x232e49[_0x160b39(0x151)](_0x58fffc)) !== null) {
                _0x1516f6[_0x160b39(0x139)] === _0x232e49[_0x160b39(0x155)] && _0x232e49[_0x160b39(0x155)]++;
                if ([_0x160b39(0x156), '##', '头#', _0x160b39(0x128)][_0x160b39(0x130)](_0x1516f6[0x3])) {
                    if (_0x1516f6[0x2] == _0x4b6d3e) {
                        _0x349601 = ![];
                        continue;
                    } else {
                        if (!_0x349601) break;
                    }
                }
                if (_0x349601) continue;
                if (_0x5c412c[_0x1516f6[0x2]]) {
                    let _0x38b150 = '线路' + (_0x5c412c[_0x1516f6[0x2]] + 0x1);
                    _0x5c412c[_0x1516f6[0x2]][_0x160b39(0x118)]({
                        'name': _0x38b150,
                        'url': _0x1516f6[0x3]
                    });
                } else _0x5c412c[_0x1516f6[0x2]] = [], _0x5c412c[_0x1516f6[0x2]][_0x160b39(0x118)]({
                    'name': _0x160b39(0x12f),
                    'url': _0x1516f6[0x3]
                });
            }
        }
        let _0x90a91d = 0x0;
        for (let _0x13f101 in _0x5c412c) {
            _0x5c412c[_0x13f101][_0x160b39(0x145)] > _0x90a91d && (_0x90a91d = _0x5c412c[_0x13f101][_0x160b39(0x145)]);
        }
        let _0x2d2b93 = {};
        for (let _0x2b66f5 = 0x1; _0x2b66f5 <= _0x90a91d; _0x2b66f5++) {
            _0x2d2b93['线路' + _0x2b66f5] = [];
            for (let _0x28ef4b in _0x5c412c) {
                let _0x5dd869 = '';
                _0x2b66f5 <= _0x5c412c[_0x28ef4b][_0x160b39(0x145)] ? _0x5dd869 = _0x5c412c[_0x28ef4b][_0x2b66f5 - 0x1][_0x160b39(0x15f)] : _0x5dd869 = _0x5c412c[_0x28ef4b][_0x5c412c[_0x28ef4b][_0x160b39(0x145)] - 0x1]['url'], _0x2d2b93['线路' + _0x2b66f5][_0x160b39(0x118)]({
                    'name': _0x28ef4b,
                    'url': _0x5dd869
                });
            }
        }
        let _0x4af8b2 = make_detail_videos(_0x2d2b93);
        _0x1ee1fc[_0x160b39(0x14f)] = _0x4af8b2[_0x160b39(0x14f)], _0x1ee1fc['vod_play_url'] = _0x4af8b2[_0x160b39(0x15a)];
    }
    return _0x582415 = {
        'list': [_0x1ee1fc]
    }, JSON[_0x160b39(0x158)](_0x582415);
}

function play(_0x45d0ee, _0x3a4084, _0x9356f4) {
    const _0xde890c = _0x2d59cb;
    let _0x39bd07 = {};
    return _0x3a4084['indexOf'](_0xde890c(0x121)) != -0x1 && (_0x3a4084 = m_parse_url(_0x3a4084)), _0x39bd07 = {
        'parse': '0',
        'jx': '0',
        'headers': '',
        'playUrl': '',
        'url': _0x3a4084
    }, JSON[_0xde890c(0x158)](_0x39bd07);
}

function make_detail_videos(_0x3003a4) {
    const _0x5398a4 = _0x2d59cb;
    let _0xa7e75f = [],
        _0x21cbab = '',
        _0x2f7499 = '';
    for (let _0x3803fb in _0x3003a4) {
        _0x21cbab = _0x21cbab + '$$$' + _0x3803fb;
    }
    for (let _0x5e05fd in _0x3003a4) {
        _0x2f7499 = _0x2f7499 + _0x5398a4(0x138), _0x3003a4[_0x5e05fd][_0x5398a4(0x117)](_0x64bac9 => {
            const _0x149f96 = _0x5398a4;
            _0x2f7499 = _0x2f7499 + _0x64bac9[_0x149f96(0x142)] + '$' + _0x64bac9[_0x149f96(0x15f)] + '#';
        }), _0x2f7499 = _0x2f7499[_0x5398a4(0x160)](/#$/m, '');
    }
    return _0xa7e75f['vod_play_from'] = _0x21cbab[_0x5398a4(0x160)](/^\$\$\$/, ''), _0xa7e75f[_0x5398a4(0x15a)] = _0x2f7499[_0x5398a4(0x160)](/^\$\$\$/, ''), _0xa7e75f;
}

function m_parse_url(_0x44f19d) {
    const _0x59ca8e = _0x2d59cb;
    let _0x61ea92 = _0x44f19d[_0x59ca8e(0x119)](_0x59ca8e(0x157))[0x0],
        _0x367f06 = _0x44f19d[_0x59ca8e(0x119)]('&p=')[0x1],
        _0x4fd6aa = req(_0x61ea92, {
            'headers': config['headers2']
        })[_0x59ca8e(0x152)],
        _0x494248 = _0x375ddb[_0x59ca8e(0x126)](_0x4fd6aa);
    if (_0x367f06 >= _0x494248('select\x20option')[_0x59ca8e(0x145)]) return '';
    let _0x4e804c = _0x494248('select\x20option')['eq'](_0x367f06)[_0x59ca8e(0x146)](),
        _0x5d426a = _0x4fd6aa[_0x59ca8e(0x122)](/<script>(.*?var string.*?)<\/script>/);
    eval(_0x5d426a[0x1]['replace'](/$/gm, _0x59ca8e(0x12c)));
    var _0x503e63 = 'iptv222.com';
    m_js_1 = m_decode(m_js_1);
    let _0x4c5076 = _0x503e63['length'],
        _0x19b44d = '';
    for (let _0x3cfdf7 = 0x0; _0x3cfdf7 < m_js_1[_0x59ca8e(0x145)]; _0x3cfdf7++) {
        let _0x495d60 = _0x3cfdf7 % _0x4c5076;
        _0x19b44d += String[_0x59ca8e(0x161)](m_js_1[_0x59ca8e(0x141)](_0x3cfdf7) ^ _0x503e63[_0x59ca8e(0x141)](_0x495d60));
    }
    var _0x44f2b5 = m_decode(_0x19b44d);
    _0x44f2b5 = unescape(_0x44f2b5), _0x44f2b5 = _0x44f2b5[_0x59ca8e(0x122)](/<script>(var.*?)<\/script>/)[0x1], _0x44f2b5 = _0x44f2b5[_0x59ca8e(0x160)](/$/gm, _0x59ca8e(0x14b)), eval(_0x44f2b5);
    let _0x190f07 = startPlayer(_0x4e804c, m_hken, m_hkens, m_token);
    return _0x190f07 = _0x190f07, console['log'](_0x59ca8e(0x13d) + _0x190f07), _0x190f07;
}

function m_decode(_0x91af72) {
    const _0x578ae5 = _0x2d59cb;
    var _0x495434 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        _0x324c2b, _0x290bdc, _0x40aa46, _0xe647e, _0x3a6b2f, _0x13568f, _0x522d1, _0x8065e0, _0x3bf9df = 0x0,
        _0x520ffd = 0x0,
        _0x38d0d7 = '',
        _0x2b453c = [];
    if (!_0x91af72) return _0x91af72;
    _0x91af72 += '';
    do {
        _0xe647e = _0x495434[_0x578ae5(0x136)](_0x91af72['charAt'](_0x3bf9df++)), _0x3a6b2f = _0x495434['indexOf'](_0x91af72[_0x578ae5(0x15b)](_0x3bf9df++)), _0x13568f = _0x495434['indexOf'](_0x91af72['charAt'](_0x3bf9df++)), _0x522d1 = _0x495434[_0x578ae5(0x136)](_0x91af72[_0x578ae5(0x15b)](_0x3bf9df++)), _0x8065e0 = _0xe647e << 0x12 | _0x3a6b2f << 0xc | _0x13568f << 0x6 | _0x522d1, _0x324c2b = _0x8065e0 >> 0x10 & 0xff, _0x290bdc = _0x8065e0 >> 0x8 & 0xff, _0x40aa46 = _0x8065e0 & 0xff, _0x13568f == 0x40 ? _0x2b453c[_0x520ffd++] = String[_0x578ae5(0x161)](_0x324c2b) : _0x522d1 == 0x40 ? _0x2b453c[_0x520ffd++] = String[_0x578ae5(0x161)](_0x324c2b, _0x290bdc) : _0x2b453c[_0x520ffd++] = String[_0x578ae5(0x161)](_0x324c2b, _0x290bdc, _0x40aa46);
    } while (_0x3bf9df < _0x91af72[_0x578ae5(0x145)]);
    return _0x38d0d7 = _0x2b453c[_0x578ae5(0x120)](''), _0x38d0d7;
}

function startPlayer(_0x59e67b, _0x552ca7, _0x3bee21, _0x2a6de6) {
    const _0x24bcb5 = _0x2d59cb;

    function _0x16cf47(_0x1af0f6, _0x2e8472) {
        const _0x2d25a9 = _0x39f5;
        let _0x53ffe8 = _0x235f55(_0x1af0f6),
            _0x320e77 = _0x2e8472[_0x2d25a9(0x145)],
            _0x2d0312 = '';
        for (let _0x5f48fc = 0x0; _0x5f48fc < _0x53ffe8[_0x2d25a9(0x145)]; _0x5f48fc++) {
            let _0x52e21f = _0x5f48fc % _0x320e77;
            _0x2d0312 += String[_0x2d25a9(0x161)](_0x53ffe8[_0x2d25a9(0x141)](_0x5f48fc) ^ _0x2e8472[_0x2d25a9(0x141)](_0x52e21f));
        }
        let _0x56eb2e = _0x235f55(_0x2d0312);
        return _0x56eb2e;
    }

    function _0x235f55(_0x2d13f) {
        const _0x2f4d2d = _0x39f5;
        var _0x37aa9b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            _0x99f088, _0x2df632, _0x2a396e, _0x367c20, _0x17d38f, _0x3d8e3e, _0x410776, _0x2a1c14, _0x430a48 = 0x0,
            _0x31572f = 0x0,
            _0x22d096 = '',
            _0x2c3c97 = [];
        if (!_0x2d13f) return _0x2d13f;
        _0x2d13f += '';
        do {
            _0x367c20 = _0x37aa9b[_0x2f4d2d(0x136)](_0x2d13f['charAt'](_0x430a48++)), _0x17d38f = _0x37aa9b[_0x2f4d2d(0x136)](_0x2d13f['charAt'](_0x430a48++)), _0x3d8e3e = _0x37aa9b[_0x2f4d2d(0x136)](_0x2d13f[_0x2f4d2d(0x15b)](_0x430a48++)), _0x410776 = _0x37aa9b[_0x2f4d2d(0x136)](_0x2d13f[_0x2f4d2d(0x15b)](_0x430a48++)), _0x2a1c14 = _0x367c20 << 0x12 | _0x17d38f << 0xc | _0x3d8e3e << 0x6 | _0x410776, _0x99f088 = _0x2a1c14 >> 0x10 & 0xff, _0x2df632 = _0x2a1c14 >> 0x8 & 0xff, _0x2a396e = _0x2a1c14 & 0xff;
            if (_0x3d8e3e == 0x40) _0x2c3c97[_0x31572f++] = String[_0x2f4d2d(0x161)](_0x99f088);
            else _0x410776 == 0x40 ? _0x2c3c97[_0x31572f++] = String['fromCharCode'](_0x99f088, _0x2df632) : _0x2c3c97[_0x31572f++] = String[_0x2f4d2d(0x161)](_0x99f088, _0x2df632, _0x2a396e);
        } while (_0x430a48 < _0x2d13f[_0x2f4d2d(0x145)]);
        return _0x22d096 = _0x2c3c97['join'](''), _0x22d096;
    }
    return _0x59e67b = _0x59e67b['split']('')[_0x24bcb5(0x163)]()[_0x24bcb5(0x120)](''), _0x59e67b = _0x16cf47(_0x59e67b, _0x552ca7), _0x59e67b = _0x59e67b[_0x24bcb5(0x160)](_0x24bcb5(0x12b), _0x24bcb5(0x164) + _0x2a6de6), _0x59e67b = _0x59e67b[_0x24bcb5(0x160)]('token=' + _0x3bee21, 'token=' + _0x2a6de6), _0x59e67b = _0x59e67b[_0x24bcb5(0x160)](_0x552ca7, ''), _0x59e67b;
}
__JS_SPIDER__ = {
    'init': init,
    'home': home,
    'homeVod': homeVod,
    'category': category,
    'detail': detail,
    'play': play,
    'search': search
};

function _0x5acd() {
    const _0x1319b7 = ['split', '5028790LLpCfE', '日本动画', '广西联通IPTV', 'href', 'each', '10YYRQUD', 'join', 'iptv807', 'match', 'ul[data-role=\x22listview\x22]\x20li', '1924419waMumo', 'headers2', 'load', 'text', '$c_end', 'filter', 'myIPTV', 'token=123', ';m_js_1=string;', 'slice', '18meNzEm', '线路1', 'includes', 'class', '黑龙江移动IPTV', 'bfiptv', 'startsWith', '2692PUnRMI', 'indexOf', 'fjitv', '$$$', 'index', '5773872nPYdAN', '豆瓣高分', 'headers', '播放地址为:\x20', 'okhttp/3.12.10', 'movie', 'ipv6', 'charCodeAt', 'name', 'lastIndexOf', 'attr', 'length', 'val', '1119162CDmbre', 'IPTV_', '3171lwVyhP', 'IPv6网络电视(限IP6)', 'm_hken=hken;m_hkens=hkens;m_token=token;', 'classes', 'log', 'http://127.0.0.1:9978/file', 'vod_play_from', '国产剧', 'exec', 'content', '纪录片', 'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x209_2\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/601.1\x20(KHTML,\x20like\x20Gecko)\x20CriOS/47.0.2526.107\x20Mobile/13C75\x20Safari/601.1.46', 'lastIndex', '#genre#', '&p=', 'stringify', 'http://m.iptv807.com/?act=home', 'vod_play_url', 'charAt', '#EXTM3U', 'https://img2.baidu.com/it/u=651971012,3800349450&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', '10306773AWYaqG', 'url', 'replace', 'fromCharCode', 'picUrl', 'reverse', 'token=', '冷门佳片', '6FsrSGG', 'migu', '豆瓣Top250', '未分组', 'http://m.iptv807.com/', '160331OOAKpF', 'forEach', 'push'];
    _0x5acd = function() {
        return _0x1319b7;
    };
    return _0x5acd();
}