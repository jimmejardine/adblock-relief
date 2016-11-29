# adblock-relief
Monetise your ad-block users by allowing them to pay you with micropayments.

If you're a content producer, you are by now well aware of the rise in use of ad-blocking across the Internet, especially amongst millennials.  Depending on your country and target audience, you could be seeing **over 60% of your readers using ad-blockers**.  Making matters worse, the Opera browser now comes with ad-blocking enabled by default and who knows how long until Firefox follows suit.

Trying to thwart the ad-blockers is a battle where everyone loses.

Instead, why not have an open dialog with your readers.  Most people running ad-blockers do so not because they're bad people, but because they feel that ads destroy their internet experience.  Indeed, some newspapers have 2Mb+ of ad content (excluding videos) for just 2kb of news.  How about instead asking your readers to contribute towards funding your journalism with a frictionless micropayments solution - [Jamatto.com](https://jamatto.com).

**You can be up and running on your newspaper, magazine or website in less than 2 minutes**.

![Growth of ad-blocking](adblocking-growth.png)

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

## Customising your experience
You know your readers best, so it is probably worth your while to modify `/adblock-relief/template.html` to be in line with your website's style and personality.  It is a simple HTML file, so get your designers to jump in.  It will use the same CSS file as the parent page you are monetising.

At the same time, you can alter this line in the template with your preferences: like currency, price and messaging.
```html
<i class="jamatto-purchase" jamatto-bid="adblock-relief" jamatto-ccy="GBP" jamatto-amount="0.01" jamatto-title="Remove ads" jamatto-caption="Enjoy ad-free for" jamatto-prompt="Enjoy ad-free for" jamatto-make-invisible-id="jammie_adblocker_purchase_div"></i>
```
NB: to receive your payouts you will have to replace the `jamatto-bid="adblock-relief"` attribute with your own Business ID that you can get from your [Jamatto Seller's Dashboard](https://jamatto.com/#/Seller).

## Ramping up
It probably makes sense to test this out on a few of your readers to choose the right messaging and price point and to get a sense of their reaction to it.  Just include the `<script>` tags for the subset of users you want to trial using pretty much any A/B testing library.

You can then slowly grow this test audience as you become more confident.
