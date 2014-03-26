(function() {
    var hookFunc = function() {
        var el = document.querySelector('.App_PlayerFooter');
        if (!el) {
            return false;
        }
        var curAdPlaying = false;
        el.addEventListener("DOMSubtreeModified", function() {
            var adPlaying = this.className && this.className.indexOf("playing_ad") != -1;
            if (adPlaying != curAdPlaying) {
                chrome.runtime.sendMessage({adPlaying: adPlaying});
                curAdPlaying = adPlaying;
            }
        }, false);
        return true;
    };
    (function reallyHookFunc() {
        if (!hookFunc()) {
            setTimeout(reallyHookFunc, 250);
        }
    })();
})();
