# adblock-relief
Monetise your ad-block users by allowing them to pay you with micropayments.

If you're a content producer, you are by now well aware of the rise in use of ad-blocking across the Internet, especially amongst millennials.  Depending on your country and target audience, you could be seeing **over 60% of your readers using ad-blockers**.  Making matters worse, the Opera browser now comes with ad-blocking enabled by default and who knows how long until Firefox follows suit.

Trying to thwart the ad-blockers is a battle where everyone loses.

Instead, why not have an open dialog with your readers.  Most people running ad-blockers do so because they feel ads destroy their internet experience.  Indeed, some newspapers have 2Mb+ of ad content (excluding videos) for just 2kb of news.  How about instead asking your readers to contribute towards funding your journalism with a frictionless micropayments solution - Jamatto.com.

**You can be up and running on your newspaper, magazine or website in less than 2 minutes**.

## Your two-minute installation guide

### Install the adblock-relief files

Download the `/ads` and `/adblock-relief` directories and place them in the root of your web server.

### Enable adblock-relief on your web server
Add the following lines to the end of your web page `<body>`.  The first line is optional if you have already included jQuery.
```html
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" type="text/javascript"></script>
<script src="/ads/ads.js" type="text/javascript"></script>
<script src="/adblock-relief/adblock-relief.js" type="text/javascript"></script>
```

### And you're done!
Your readers with an ad-blocker installed will be presented with a message that offers for them to pay you a small contribution for your content.
