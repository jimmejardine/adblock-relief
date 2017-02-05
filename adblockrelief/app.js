(function () {

    // This will be true if the /ads/ads.js file managed to load - in which case there is no ad blocker...
    if (document["ADBLOCKRELIEF"]) return;

    // Use the specified template, otherwise fall back on the default...
    var TEMPLATE = document["ABR_TEMPLATE"];
    if (!TEMPLATE) {
        console.error("You need to please specify ADBLOCK_RELIEF_TEMPLATE.  See https://github.com/jimmejardine/adblock-relief for details.");
        return;
    }

    // Check if there has been a purchase
    var COOKIE_NAME = "ABR-" + location.hostname;
    var cookies = document.cookie;    
    if (cookies && -1 != cookies.indexOf(COOKIE_NAME)) {
        return;
    }

    // Add the purchase handler
    {
        if ('undefined' === typeof JAMATTO_ON_INITIALISED_CALLBACKS) JAMATTO_ON_INITIALISED_CALLBACKS = [];
        JAMATTO_ON_INITIALISED_CALLBACKS.push(function() {
            jamatto.OnPurchase(function (purchase, authentication) {
                var extension = 0;
                if ("AdBlock-15min" == purchase.item) extension = 15 * 60 * 1000;
                if ("AdBlock-24hour" == purchase.item) extension = 24 * 60 * 60 * 1000;
                if (extension) {
                    var expires = (new Date((new Date()).getTime() + extension)).toUTCString();
                    console.log(expires);
                    var new_cookie = COOKIE_NAME + "=true; expires=" + expires + "; path=/";
                    console.log(new_cookie);
                    document.cookie = new_cookie;
                }
            });
        });
    }

    // If we get this far, there is an ad blocker, so load the template
    jQuery.get(TEMPLATE, function (body) {

        // Add the cover
        var cover = jQuery(body);
        jQuery('body').append(cover);

        // Load Jamatto - once it loads, it will automatically make live any Jamatto buttons in the template.
        var e = document.createElement('script');
        e.type = 'text/javascript';
        e.src = '//cdn.jamatto.com/api/js/jamatto.min.js';
        document.body.appendChild(e);

    });
})();