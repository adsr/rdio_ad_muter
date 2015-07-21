(function() {
    var hookFunc = function() {
        var el = document.querySelector('.App_PlayerFooter');
        if (!el) {
            return false;
        }
        var curAdPlaying = false;
        var observer = new WebKitMutationObserver(function (mutations) {
            for (var i in mutations) {
                var mutation = mutations[i].target;
                var adPlaying = mutation
                    && mutation.className
                    && mutation.className.indexOf("playing_ad") != -1;
                if (adPlaying != curAdPlaying) {
                    chrome.runtime.sendMessage({adPlaying: adPlaying});
                    curAdPlaying = adPlaying;
                    return;
                }
            }
        });
        observer.observe(el, {
            childList: false,
            attributes: true,
            characterData: false,
            subtree: false
        });
        return true;
    };
    (function reallyHookFunc() {
        if (!hookFunc()) {
            setTimeout(reallyHookFunc, 250);
        }
    })();
})();
