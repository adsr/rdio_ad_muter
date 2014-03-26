chrome.runtime.onMessage.addListener(function(msg, sender, callback) {
    var adPlaying = msg && typeof msg == 'object' && msg.adPlaying;
    chrome.runtime.sendNativeMessage("cc.atoi.rdio_ad_muter", adPlaying ? {mute:1} : {mute:0});
});
