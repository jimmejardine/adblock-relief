(function () {

    // This will be true if the /ads/ads.js file managed to load - in which case there is no ad blocker...
    if (document["adblock-relief"]) return;

    // Use the specified template, otherwise fall back on the default...
    var TEMPLATE = document["adblock-relief-template"];
    if (!TEMPLATE) TEMPLATE = '/adblock-relief/template.html';

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