// Web setup. Makes ToneDen a global variable.
if(typeof window !== 'undefined') {
    exports = window;

    if(!window.ToneDen) {
        window.ToneDen = {};
    }

    ToneDen = window.ToneDen;
}

if(env === 'local') {
    __webpack_public_path__ = '//widget.dev/';
} else if(env === 'staging') {
    __webpack_public_path__ = '//sd.toneden.io/dev/';
} else if(env === 'production') {
    __webpack_public_path__ = '//sd.toneden.io/';
}

require.ensure([], function() {
    window.ToneDen = require('../sdk/js/index');

    if(window.ToneDenReady && window.ToneDenReady.length > 0) {
        for(var i = 0; i < ToneDenReady.length; i++) {
            ToneDenReady[i]();
        }
    }
}, 'toneden');