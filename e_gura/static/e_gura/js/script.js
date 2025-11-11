var flspdx = new Worker("data:text/javascript;base64," + btoa('onmessage=function(e){var t=new Request("https://app.flash-speed.com/static/worker-min.js?shop=89b724-66.myshopify.com",{redirect:"follow"});fetch(t).then(e=>e.text()).then(e=>{postMessage(e)})};'));flspdx.onmessage = function (t) {var e = document.createElement("script");e.type = "text/javascript", e.textContent = t.data, document.head.appendChild(e)}, flspdx.postMessage("init");

var flspdxHA=["hotjar","xklaviyo","recaptcha","gorgias","facebook.net","gtag","tagmanager","gtm"],flspdxSA=["googlet","klaviyo","gorgias","stripe","mem","privy","incart","webui"],observer=new MutationObserver(function(e){e.forEach(function(e){e.addedNodes.forEach(function(e){if("SCRIPT"===e.tagName&&1===e.nodeType)if(e.innerHTML.includes("asyncLoad")||"analytics"===e.className)e.type="text/flspdscript";else{for(var t=0;t<flspdxSA.length;t++)if(e.src.includes(flspdxSA[t]))return void(e.type="text/flspdscript");for(var r=0;r<flspdxHA.length;r++)if(e.innerHTML.includes(flspdxHA[r]))return void(e.type="text/flspdscript")}})})}),ua=navigator.userAgent.toLowerCase();ua.match(new RegExp("chrome|firefox"))&&-1===window.location.href.indexOf("no-optimization")&&observer.observe(document.documentElement,{childList:!0,subtree:!0});

window.theme = window.theme || {};

  theme.routes = {
    predictive_search_url: "\/search\/suggest",
    cart_url: "\/cart"
  };

  theme.settings = {
    cartType: "drawer",
    enableCartMessage: false,
    saleType: "percentage",
    stickyHeader: true,
    heightHeader: 75,
    heightHeaderMobile: 60,
    icon: "material-icons-outlined",
    currencyOriginalPrice: true,
    customCurrency: false,
    facebookPageId: "",
    dbtfyATCAnimationType: "shakeX",
    dbtfyATCAnimationInterval: 10,
    dbtfyShopProtectImage: true,
    dbtfyShopProtectDrag: true,
    dbtfyShopProtectTextProduct: true,
    dbtfyShopProtectTextArticle: true,
    dbtfyShopProtectCollection: true,
    dbtfySkipCart: true,
    isSearchEnabled: true,
    enableHistoryState: true,
    customScript: "",
    dbtfyInactiveTabFirstMessage: "🔥 Don\u0026#39;t forget this...",
    dbtfyInactiveTabSecondMessage: "🔥 Come back!",
    dbtfyInactiveTabDelay: 1,
    faviconImage: "\/\/technoant.co\/cdn\/shop\/files\/download_1_100x100_crop_center.webp?v=1729627244",
    cartFaviconImage:"",
    dbtfyCartSavings: true,
    dbtfyCookieBoxEUOnly: true,
    dbtfyGiftWrap: false,
    dbtfyDeliveryDateRequired: false,
    dbtfyOrderFeedbackRequired: false
  };

  theme.variables = {
    small: 769,
    postSmall: 769.1,
    animationDuration: 600,
    animationSlow: 1000,
    transitionSpeed: 300,
    addonsLink: "\/\/technoant.co\/cdn\/shop\/t\/5\/assets\/dbtfy-addons.min.js?v=140147260252157821061723851705",
    fastClickPluginLink: "\/\/technoant.co\/cdn\/shop\/t\/5\/assets\/FastClick.js?v=80848051190165111191723851667",
    jQueryUIPluginLink: "\/\/technoant.co\/cdn\/shop\/t\/5\/assets\/jquery-ui.min.js?v=70596825350812787271723851667",
    jQueryUIAutocompletePluginLink: "\/\/technoant.co\/cdn\/shop\/t\/5\/assets\/jquery.ui.autocomplete.scroll.min.js?v=65694924680175604831723851667",
    jQueryExitIntentPluginLink: "\/\/technoant.co\/cdn\/shop\/t\/5\/assets\/jquery.exitintent.min.js?v=141936771459652646111723851667",
    trackingPluginLink: "\/\/www.17track.net\/externalcall.js",
    speedBoosterPluginLink: "\/\/technoant.co\/cdn\/shop\/t\/5\/assets\/instant.page.min.js?v=48382595191374339231723851667",
    ajaxinatePluginLink: "\/\/technoant.co\/cdn\/shop\/t\/5\/assets\/infinite-scroll.min.js?v=117414503875394727771723851667",
    datePickerPluginLink: "\/\/technoant.co\/cdn\/shop\/t\/5\/assets\/flatpickr.min.js?v=102895051017460611671723851667",
    cartCount: 7,
    shopLocales: [{"shop_locale":{"locale":"en","enabled":true,"primary":true,"published":true}}],
    productPlaceholderSvg: "\u003csvg class=\"placeholder-svg\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 525.5 525.5\"\u003e\u003cpath d=\"M375.5 345.2c0-.1 0-.1 0 0 0-.1 0-.1 0 0-1.1-2.9-2.3-5.5-3.4-7.8-1.4-4.7-2.4-13.8-.5-19.8 3.4-10.6 3.6-40.6 1.2-54.5-2.3-14-12.3-29.8-18.5-36.9-5.3-6.2-12.8-14.9-15.4-17.9 8.6-5.6 13.3-13.3 14-23 0-.3 0-.6.1-.8.4-4.1-.6-9.9-3.9-13.5-2.1-2.3-4.8-3.5-8-3.5h-54.9c-.8-7.1-3-13-5.2-17.5-6.8-13.9-12.5-16.5-21.2-16.5h-.7c-8.7 0-14.4 2.5-21.2 16.5-2.2 4.5-4.4 10.4-5.2 17.5h-48.5c-3.2 0-5.9 1.2-8 3.5-3.2 3.6-4.3 9.3-3.9 13.5 0 .2 0 .5.1.8.7 9.8 5.4 17.4 14 23-2.6 3.1-10.1 11.7-15.4 17.9-6.1 7.2-16.1 22.9-18.5 36.9-2.2 13.3-1.2 47.4 1 54.9 1.1 3.8 1.4 14.5-.2 19.4-1.2 2.4-2.3 5-3.4 7.9-4.4 11.6-6.2 26.3-5 32.6 1.8 9.9 16.5 14.4 29.4 14.4h176.8c12.9 0 27.6-4.5 29.4-14.4 1.2-6.5-.5-21.1-5-32.7zm-97.7-178c.3-3.2.8-10.6-.2-18 2.4 4.3 5 10.5 5.9 18h-5.7zm-36.3-17.9c-1 7.4-.5 14.8-.2 18h-5.7c.9-7.5 3.5-13.7 5.9-18zm4.5-6.9c0-.1.1-.2.1-.4 4.4-5.3 8.4-5.8 13.1-5.8h.7c4.7 0 8.7.6 13.1 5.8 0 .1 0 .2.1.4 3.2 8.9 2.2 21.2 1.8 25h-30.7c-.4-3.8-1.3-16.1 1.8-25zm-70.7 42.5c0-.3 0-.6-.1-.9-.3-3.4.5-8.4 3.1-11.3 1-1.1 2.1-1.7 3.4-2.1l-.6.6c-2.8 3.1-3.7 8.1-3.3 11.6 0 .2 0 .5.1.8.3 3.5.9 11.7 10.6 18.8.3.2.8.2 1-.2.2-.3.2-.8-.2-1-9.2-6.7-9.8-14.4-10-17.7 0-.3 0-.6-.1-.8-.3-3.2.5-7.7 3-10.5.8-.8 1.7-1.5 2.6-1.9h155.7c1 .4 1.9 1.1 2.6 1.9 2.5 2.8 3.3 7.3 3 10.5 0 .2 0 .5-.1.8-.3 3.6-1 13.1-13.8 20.1-.3.2-.5.6-.3 1 .1.2.4.4.6.4.1 0 .2 0 .3-.1 13.5-7.5 14.3-17.5 14.6-21.3 0-.3 0-.5.1-.8.4-3.5-.5-8.5-3.3-11.6l-.6-.6c1.3.4 2.5 1.1 3.4 2.1 2.6 2.9 3.5 7.9 3.1 11.3 0 .3 0 .6-.1.9-1.5 20.9-23.6 31.4-65.5 31.4h-43.8c-41.8 0-63.9-10.5-65.4-31.4zm91 89.1h-7c0-1.5 0-3-.1-4.2-.2-12.5-2.2-31.1-2.7-35.1h3.6c.8 0 1.4-.6 1.4-1.4v-14.1h2.4v14.1c0 .8.6 1.4 1.4 1.4h3.7c-.4 3.9-2.4 22.6-2.7 35.1v4.2zm65.3 11.9h-16.8c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h16.8v2.8h-62.2c0-.9-.1-1.9-.1-2.8h33.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-33.9c-.1-3.2-.1-6.3-.1-9h62.5v9zm-12.5 24.4h-6.3l.2-1.6h5.9l.2 1.6zm-5.8-4.5l1.6-12.3h2l1.6 12.3h-5.2zm-57-19.9h-62.4v-9h62.5c0 2.7 0 5.8-.1 9zm-62.4 1.4h62.4c0 .9-.1 1.8-.1 2.8H194v-2.8zm65.2 0h7.3c0 .9.1 1.8.1 2.8H259c.1-.9.1-1.8.1-2.8zm7.2-1.4h-7.2c.1-3.2.1-6.3.1-9h7c0 2.7 0 5.8.1 9zm-7.7-66.7v6.8h-9v-6.8h9zm-8.9 8.3h9v.7h-9v-.7zm0 2.1h9v2.3h-9v-2.3zm26-1.4h-9v-.7h9v.7zm-9 3.7v-2.3h9v2.3h-9zm9-5.9h-9v-6.8h9v6.8zm-119.3 91.1c-2.1-7.1-3-40.9-.9-53.6 2.2-13.5 11.9-28.6 17.8-35.6 5.6-6.5 13.5-15.7 15.7-18.3 11.4 6.4 28.7 9.6 51.8 9.6h6v14.1c0 .8.6 1.4 1.4 1.4h5.4c.3 3.1 2.4 22.4 2.7 35.1 0 1.2.1 2.6.1 4.2h-63.9c-.8 0-1.4.6-1.4 1.4v16.1c0 .8.6 1.4 1.4 1.4H256c-.8 11.8-2.8 24.7-8 33.3-2.6 4.4-4.9 8.5-6.9 12.2-.4.7-.1 1.6.6 1.9.2.1.4.2.6.2.5 0 1-.3 1.3-.8 1.9-3.7 4.2-7.7 6.8-12.1 5.4-9.1 7.6-22.5 8.4-34.7h7.8c.7 11.2 2.6 23.5 7.1 32.4.2.5.8.8 1.3.8.2 0 .4 0 .6-.2.7-.4 1-1.2.6-1.9-4.3-8.5-6.1-20.3-6.8-31.1H312l-2.4 18.6c-.1.4.1.8.3 1.1.3.3.7.5 1.1.5h9.6c.4 0 .8-.2 1.1-.5.3-.3.4-.7.3-1.1l-2.4-18.6H333c.8 0 1.4-.6 1.4-1.4v-16.1c0-.8-.6-1.4-1.4-1.4h-63.9c0-1.5 0-2.9.1-4.2.2-12.7 2.3-32 2.7-35.1h5.2c.8 0 1.4-.6 1.4-1.4v-14.1h6.2c23.1 0 40.4-3.2 51.8-9.6 2.3 2.6 10.1 11.8 15.7 18.3 5.9 6.9 15.6 22.1 17.8 35.6 2.2 13.4 2 43.2-1.1 53.1-1.2 3.9-1.4 8.7-1 13-1.7-2.8-2.9-4.4-3-4.6-.2-.3-.6-.5-.9-.6h-.5c-.2 0-.4.1-.5.2-.6.5-.8 1.4-.3 2 0 0 .2.3.5.8 1.4 2.1 5.6 8.4 8.9 16.7h-42.9v-43.8c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4v44.9c0 .1-.1.2-.1.3 0 .1 0 .2.1.3v9c-1.1 2-3.9 3.7-10.5 3.7h-7.5c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h7.5c5 0 8.5-.9 10.5-2.8-.1 3.1-1.5 6.5-10.5 6.5H210.4c-9 0-10.5-3.4-10.5-6.5 2 1.9 5.5 2.8 10.5 2.8h67.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-67.4c-6.7 0-9.4-1.7-10.5-3.7v-54.5c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4v43.8h-43.6c4.2-10.2 9.4-17.4 9.5-17.5.5-.6.3-1.5-.3-2s-1.5-.3-2 .3c-.1.2-1.4 2-3.2 5 .1-4.9-.4-10.2-1.1-12.8zm221.4 60.2c-1.5 8.3-14.9 12-26.6 12H174.4c-11.8 0-25.1-3.8-26.6-12-1-5.7.6-19.3 4.6-30.2H197v9.8c0 6.4 4.5 9.7 13.4 9.7h105.4c8.9 0 13.4-3.3 13.4-9.7v-9.8h44c4 10.9 5.6 24.5 4.6 30.2z\"\/\u003e\u003cpath d=\"M286.1 359.3c0 .4.3.7.7.7h14.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-14.7c-.3 0-.7.3-.7.7zm5.3-145.6c13.5-.5 24.7-2.3 33.5-5.3.4-.1.6-.5.4-.9-.1-.4-.5-.6-.9-.4-8.6 3-19.7 4.7-33 5.2-.4 0-.7.3-.7.7 0 .4.3.7.7.7zm-11.3.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7H242c-19.9 0-35.3-2.5-45.9-7.4-.4-.2-.8 0-.9.3-.2.4 0 .8.3.9 10.8 5 26.4 7.5 46.5 7.5h38.1zm-7.2 116.9c.4.1.9.1 1.4.1 1.7 0 3.4-.7 4.7-1.9 1.4-1.4 1.9-3.2 1.5-5-.2-.8-.9-1.2-1.7-1.1-.8.2-1.2.9-1.1 1.7.3 1.2-.4 2-.7 2.4-.9.9-2.2 1.3-3.4 1-.8-.2-1.5.3-1.7 1.1s.2 1.5 1 1.7z\"\/\u003e\u003cpath d=\"M275.5 331.6c-.8 0-1.4.6-1.5 1.4 0 .8.6 1.4 1.4 1.5h.3c3.6 0 7-2.8 7.7-6.3.2-.8-.4-1.5-1.1-1.7-.8-.2-1.5.4-1.7 1.1-.4 2.3-2.8 4.2-5.1 4zm5.4 1.6c-.6.5-.6 1.4-.1 2 1.1 1.3 2.5 2.2 4.2 2.8.2.1.3.1.5.1.6 0 1.1-.3 1.3-.9.3-.7-.1-1.6-.8-1.8-1.2-.5-2.2-1.2-3-2.1-.6-.6-1.5-.6-2.1-.1zm-38.2 12.7c.5 0 .9 0 1.4-.1.8-.2 1.3-.9 1.1-1.7-.2-.8-.9-1.3-1.7-1.1-1.2.3-2.5-.1-3.4-1-.4-.4-1-1.2-.8-2.4.2-.8-.3-1.5-1.1-1.7-.8-.2-1.5.3-1.7 1.1-.4 1.8.1 3.7 1.5 5 1.2 1.2 2.9 1.9 4.7 1.9z\"\/\u003e\u003cpath d=\"M241.2 349.6h.3c.8 0 1.4-.7 1.4-1.5s-.7-1.4-1.5-1.4c-2.3.1-4.6-1.7-5.1-4-.2-.8-.9-1.3-1.7-1.1-.8.2-1.3.9-1.1 1.7.7 3.5 4.1 6.3 7.7 6.3zm-9.7 3.6c.2 0 .3 0 .5-.1 1.6-.6 3-1.6 4.2-2.8.5-.6.5-1.5-.1-2s-1.5-.5-2 .1c-.8.9-1.8 1.6-3 2.1-.7.3-1.1 1.1-.8 1.8 0 .6.6.9 1.2.9z\"\/\u003e\u003c\/svg\u003e"
  };

  theme.strings = {
    zoomClose: "Close (Esc)",
    zoomPrev: "Previous (Left arrow key)",
    zoomNext: "Next (Right arrow key)",
    moneyFormat: "${{amount}}",
    moneyWithCurrencyFormat: "${{amount}} USD",
    currencyFormat: "money_format",
    saveFormat: "Save {{ saved_amount }}",
    addressError: "Error looking up that address",
    addressNoResults: "No results for that address",
    addressQueryLimit: "You have exceeded the Google API usage limit. Consider upgrading to a \u003ca href=\"https:\/\/developers.google.com\/maps\/premium\/usage-limits\"\u003ePremium Plan\u003c\/a\u003e.",
    authError: "There was a problem authenticating your Google Maps account.",
    cartCookie: "Enable cookies to use the shopping cart",
    addToCart: "Buy It Now",
    soldOut: "Sold Out",
    unavailable: "Unavailable",
    regularPrice: "Regular price",
    salePrice: "Sale price",
    saveLabel: "Save {{ saved_amount }}",
    quantityLabel: "Quantity",
    closeText: "close (esc)",
    shopCurrency: "USD",
    months: {
      full: {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
      },
      short: {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec"
      }
    },
    weekdays: {
      full: {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
      },
      short: {
        0: "Sun",
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat"
      }
    },
    agreeTermsWarningMessage: "You must agree with the terms and conditions of sales to check out.",
    deliveryDateWarningMessage: "Make a selection to continue",shopPrimaryLocale: "en",};

  theme.addons = {"addons": {"dbtfy_addtocart_animation": false,"dbtfy_age_check": false, "dbtfy_agree_to_terms": true,"dbtfy_automatic_geolocation": false,"dbtfy_back_in_stock": false ,"dbtfy_cart_favicon": true,"dbtfy_cart_discount": false,"dbtfy_cart_goal": false,"dbtfy_cart_reminder": true,"dbtfy_cart_savings": true,"dbtfy_cart_upsell": true,"dbtfy_collection_addtocart": true,"dbtfy_collection_filters": false,"dbtfy_color_swatches": false,"dbtfy_cookie_box": false,"dbtfy_custom_currencies": false,"dbtfy_customizable_products": true,"dbtfy_delivery_date": false,"dbtfy_delivery_time": false,"dbtfy_discount_saved": true,"dbtfy_facebook_messenger": false,"dbtfy_faq_page": true,"dbtfy_gift_wrap": false,"dbtfy_infinite_scroll": true,"dbtfy_inactive_tab_message": false,"dbtfy_instagram_feed": false,"dbtfy_inventory_quantity": true,"dbtfy_linked_options": false ,"dbtfy_mega_menu": true,"dbtfy_menu_bar": true,"dbtfy_minimum_order": false,"dbtfy_newsletter_popup": false,"dbtfy_order_feedback": false,"dbtfy_order_tracking": true,"dbtfy_page_speed_booster": true,"dbtfy_page_transition": false,"dbtfy_pricing_table": false,"dbtfy_product_bullet_points": true,"dbtfy_product_image_crop": true,"dbtfy_product_swatches": true,"dbtfy_product_tabs": false,"dbtfy_quantity_breaks": true,"dbtfy_quick_compare": false,"dbtfy_quick_view": true,"dbtfy_recently_viewed": true,"dbtfy_shop_protect": false,"dbtfy_skip_cart": true,"dbtfy_size_chart": false,"dbtfy_smart_search": true,"dbtfy_social_discount": false,"dbtfy_sticky_addtocart": true,"dbtfy_synced_variant_image": false,"dbtfy_trust_badge": true,"dbtfy_upsell_bundles": true,"dbtfy_upsell_popup": true,"dbtfy_wish_list": false}}



  window.lazySizesConfig = window.lazySizesConfig || {};
  window.lazySizesConfig.customMedia = {
    "--small": `(max-width: ${theme.variables.small}px)`
  };

window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.start');

({"accessToken":"44179980f3912602d3c9fb0ef25aa783","betas":["rich-media-storefront-analytics"],"domain":"technoant.co","predictiveSearch":true,"shopId":87555866930,"locale":"en"});

var Shopify = Shopify || {};
Shopify.shop = "89b724-66.myshopify.com";
Shopify.locale = "en";
Shopify.currency = {"active":"USD","rate":"1.0"};
Shopify.country = "RW";
Shopify.theme = {"name":"theme-export-technoant-com-theme-export-techno","id":170811097394,"schema_name":"Debutify","schema_version":"4.10.2","theme_store_id":null,"role":"main"};
Shopify.theme.handle = "null";
Shopify.theme.style = {"id":null,"handle":null};
Shopify.cdnHost = "technoant.co/cdn";
Shopify.routes = Shopify.routes || {};
Shopify.routes.root = "/";

!function(o){(o.Shopify=o.Shopify||{}).modules=!0}(window);

!function(o){function n(){var o=[];function n(){o.push(Array.prototype.slice.apply(arguments))}return n.q=o,n}var t=o.Shopify=o.Shopify||{};t.loadFeatures=n(),t.autoloadFeatures=n()}(window);

({"pageType":"index"});
({"pageType":"index"});

Promise.all([
  import("//technoant.co/cdn/shopifycloud/shop-js/modules/v2/client.init-shop-cart-sync_CGREiBkR.en.esm.js"),
  import("//technoant.co/cdn/shopifycloud/shop-js/modules/v2/chunk.common_Bt2Up4BP.esm.js")
]).then(function() {
  try {
    if (window.Shopify && window.Shopify.SignInWithShop && typeof window.Shopify.SignInWithShop.initShopCartSync === 'function') {
      window.Shopify.SignInWithShop.initShopCartSync({"fedCMEnabled":true,"windoidEnabled":true});
    }
  } catch (err) {
    console.error('Error while initializing ShopCartSync', err);
  }
}).catch(function(err) {
  console.error('Failed to load shop-js modules', err);
});

var __st={"a":87555866930,"offset":3600,"reqid":"6639bcca-f540-48f0-bca8-4717544fe5a7-1762847107","pageurl":"technoant.co\/","t":"prospect","u":"d2e43041e8d3","p":"home"};

window.ShopifyPaypalV4VisibilityTracking = true;

var Shopify=Shopify||{};Shopify.PaymentButton=Shopify.PaymentButton||{isStorefrontPortableWallets:!0,init:function(){window.Shopify.PaymentButton.init=function(){};var t=document.createElement("script");t.src="https://technoant.co/cdn/shopifycloud/portable-wallets/latest/portable-wallets.en.js",t.type="module",document.head.appendChild(t)}};

function portableWalletsHideBuyerConsent(e){var t=document.getElementById("shopify-buyer-consent"),n=document.getElementById("shopify-subscription-policy-button");t&&n&&(t.classList.add("hidden"),t.setAttribute("aria-hidden","true"),n.removeEventListener("click",e))}function portableWalletsShowBuyerConsent(e){var t=document.getElementById("shopify-buyer-consent"),n=document.getElementById("shopify-subscription-policy-button");t&&n&&(t.classList.remove("hidden"),t.removeAttribute("aria-hidden"),n.addEventListener("click",e))}window.Shopify?.PaymentButton&&(window.Shopify.PaymentButton.hideBuyerConsent=portableWalletsHideBuyerConsent,window.Shopify.PaymentButton.showBuyerConsent=portableWalletsShowBuyerConsent);

document.addEventListener("DOMContentLoaded",(function(){function t(){return document.querySelector("shopify-accelerated-checkout-cart, shopify-accelerated-checkout")}if(t())Shopify.PaymentButton.init();else{new MutationObserver((function(e,n){t()&&(Shopify.PaymentButton.init(),n.disconnect())})).observe(document.body,{childList:!0,subtree:!0})}}));

window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.end');

window.vtlsLiquidData = window.vtlsLiquidData || {};window.vtlsLiquidData.buildId = 53256;

window.vtlsLiquidData.apiHosts = {
	...window.vtlsLiquidData.apiHosts,
	"1": "https://appsolve.io"
};
	window.vtlsLiquidData.moduleSettings = {"10":{"66":"circle","67":"ffffff","68":"pop","69":"left","70":2,"71":"ff0101"},"21":{"142":true,"143":"left","144":0,"145":0,"190":true,"216":"56D500","217":false,"218":0,"219":0,"220":"center","248":true,"278":"ffffff","279":true,"280":"ffffff","281":"eaeaea","287":"reviews","288":"See more reviews","289":"Write a Review","290":"Share your experience","291":"Rating","292":"Name","293":"Review","294":"We'd love to see a picture","295":"Submit Review","296":"Cancel","297":"No reviews yet. Be the first to add a review.","333":20,"334":100,"335":10,"336":50,"410":false,"447":"Thank you for adding your review!","481":"{{ stars }} {{ averageRating }} ({{ totalReviews }} {{ reviewsTranslation }})","482":"{{ stars }} ({{ totalReviews }})","483":19,"484":18,"494":2,"504":"Only image file types are supported for upload","507":true,"508":"E-mail","510":"00a332","563":"The review could not be added. If the problem persists, please contact us.","598":"Store reply","688":"Customers from all over the world love our products!","689":"Happy Customers","691":false,"745":true,"746":"columns","747":true,"748":"56D500","752":"Verified buyer","787":"columns","788":true,"793":"5600E3","794":"ffffff","846":"5e5e5e","877":"222222","878":"737373","879":"f7f7f7","880":"5e5e5e","948":0,"949":0,"951":"{}","994":"Our Customers Love Us","996":1,"1002":4,"1003":false,"1005":false,"1034":false,"1038":20,"1039":20,"1040":10,"1041":10,"1042":100,"1043":50,"1044":"columns","1045":true,"1046":"5e5e5e","1047":"5e5e5e","1048":"222222","1061":false,"1062":0,"1063":0,"1064":"Collected by","1065":"From {{reviews_count}} reviews","1067":true,"1068":false,"1069":true,"1070":true,"1072":"{}","1073":"left","1074":"center","1078":true,"1089":"{}","1090":0},"31":[],"48":{"469":true,"491":true,"588":true,"595":false,"603":"","605":"","606":"","781":true,"783":1,"876":0,"1076":true,"1105":0,"1198":false},"53":{"636":"4b8e15","637":"ffffff","638":0,"639":5,"640":"You save:","642":"Out of stock","643":"This item:","644":"Total Price:","645":true,"646":"Add to cart","647":"for","648":"with","649":"off","650":"each","651":"Buy","652":"Subtotal","653":"Discount","654":"Old price","655":16,"656":0,"657":16,"658":0,"659":"ffffff","660":14,"661":"center","671":"000000","702":"Quantity","731":"and","733":0,"734":"362e94","735":"8e86ed","736":true,"737":true,"738":true,"739":"right","740":60,"741":"Free of charge","742":"Free","743":"Claim gift","744":"1,2,4,5","750":"Gift","762":"Discount","763":false,"773":"Your product has been added to the cart.","786":"save","848":"ffffff","849":"f6f6f6","850":"4f4f4f","851":"Per item:","895":"eceeef","1007":"Pick another","1010":"{}","1012":false,"1028":"Other customers loved this offer","1029":"Add to order\t","1030":"Added to order","1031":"Check out","1032":1,"1033":"{}","1035":"See more","1036":"See less","1037":"{}","1077":"%","1083":"Check out","1085":100,"1086":"cd1900","1091":10,"1092":1,"1093":"{}","1164":"Free shipping","1188":"light","1190":"center","1191":"light","1192":"square"}};

window.vtlsLiquidData.shopThemeName = "Debutify";window.vtlsLiquidData.settingTranslation = {"21":{"287":{"en":"reviews"},"288":{"en":"See more reviews"},"289":{"en":"Write a Review"},"290":{"en":"Share your experience"},"291":{"en":"Rating"},"292":{"en":"Name"},"293":{"en":"Review"},"294":{"en":"We'd love to see a picture"},"295":{"en":"Submit Review"},"296":{"en":"Cancel"},"297":{"en":"No reviews yet. Be the first to add a review."},"447":{"en":"Thank you for adding your review!"},"481":{"en":"{{ stars }} {{ averageRating }} ({{ totalReviews }} {{ reviewsTranslation }})"},"482":{"en":"{{ stars }} ({{ totalReviews }})"},"504":{"en":"Only image file types are supported for upload"},"508":{"en":"E-mail"},"563":{"en":"The review could not be added. If the problem persists, please contact us."},"598":{"en":"Store reply"},"688":{"en":"Customers from all over the world love our products!"},"689":{"en":"Happy Customers"},"752":{"en":"Verified buyer"},"994":{"en":"Our Customers Love Us"},"1064":{"en":"Collected by"},"1065":{"en":"From {{reviews_count}} reviews"}},"19":{"441":{"en":"Your email is already registered."},"442":{"en":"Invalid email address!"}},"53":{"640":{"en":"You save:"},"642":{"en":"Out of stock"},"643":{"en":"This item:"},"644":{"en":"Total Price:"},"646":{"en":"Add to cart"},"647":{"en":"for"},"648":{"en":"with"},"649":{"en":"off"},"650":{"en":"each"},"651":{"en":"Buy"},"652":{"en":"Subtotal"},"653":{"en":"Discount"},"654":{"en":"Old price"},"702":{"en":"Quantity"},"731":{"en":"and"},"741":{"en":"Free of charge"},"742":{"en":"Free"},"743":{"en":"Claim gift"},"750":{"en":"Gift"},"762":{"en":"Discount"},"773":{"en":"Your product has been added to the cart."},"786":{"en":"save"},"851":{"en":"Per item:"},"1007":{"en":"Pick another"},"1028":{"en":"Other customers loved this offer"},"1029":{"en":"Add to order\t"},"1030":{"en":"Added to order"},"1031":{"en":"Check out"},"1035":{"en":"See more"},"1036":{"en":"See less"},"1083":{"en":"Check out"},"1164":{"en":"Free shipping"},"1167":{"en":"Unavailable"}}};window.vtlsLiquidData.ubOfferTypes={"2":[1,2,9]};window.vtlsLiquidData.usesFunctions=true;window.vtlsLiquidData.shopSettings={};window.vtlsLiquidData.shopSettings.cartType="drawer";window.vtlsLiquidData.spat="5894308551f605df077a55411c7db511";window.vtlsLiquidData.shopInfo={id:87555866930,domain:"technoant.co",shopifyDomain:"89b724-66.myshopify.com",primaryLocaleIsoCode: "en",defaultCurrency:"USD",enabledCurrencies:["USD"],moneyFormat:"${{amount}}",moneyWithCurrencyFormat:"${{amount}} USD",appId:"1",appName:"Vitals",};window.vtlsLiquidData.acceptedScopes = {"1":[26,25,27,28,29,30,31,32,33,34,35,36,37,38,22,2,8,14,20,24,16,18,10,13,21,4,11,1,7,3,19,23,15,17,9,12,49,51,46,47,50,52,48]};window.vtlsLiquidData.cacheKeys = [1753363459,1732728958,0,1738693418,1762019680,0,0,1762019680 ];

window.vtlsLiquidData = window.vtlsLiquidData || {};window.vtlsLiquidData.dynamicFunctions = ({$,vitalsGet,vitalsSet,VITALS_GET_$_DESCRIPTION,VITALS_GET_$_END_SECTION,VITALS_GET_$_ATC_FORM,VITALS_GET_$_ATC_BUTTON,submit_button,form_add_to_cart,cartItemVariantId,VITALS_EVENT_CART_UPDATED,VITALS_EVENT_DISCOUNTS_LOADED,VITALS_EVENT_PRICES_UPDATED,VITALS_EVENT_RENDER_CAROUSEL_STARS,VITALS_EVENT_RENDER_COLLECTION_STARS,VITALS_EVENT_SMART_BAR_RENDERED,VITALS_EVENT_SMART_BAR_CLOSED,VITALS_EVENT_TABS_RENDERED,VITALS_EVENT_VARIANT_CHANGED,VITALS_EVENT_ATC_BUTTON_FOUND,VITALS_IS_MOBILE,VITALS_PAGE_TYPE,VITALS_APPEND_CSS,VITALS_HOOK__CAN_EXECUTE_CHECKOUT,VITALS_HOOK__GET_CUSTOM_CHECKOUT_URL_PARAMETERS,VITALS_HOOK__GET_CUSTOM_VARIANT_SELECTOR,VITALS_HOOK__GET_IMAGES_DEFAULT_SIZE,VITALS_HOOK__ON_CLICK_CHECKOUT_BUTTON,VITALS_HOOK__DONT_ACCELERATE_CHECKOUT,VITALS_HOOK__ON_ATC_STAY_ON_THE_SAME_PAGE,VITALS_HOOK__CAN_EXECUTE_ATC,VITALS_FLAG__IGNORE_VARIANT_ID_FROM_URL,VITALS_FLAG__UPDATE_ATC_BUTTON_REFERENCE,VITALS_FLAG__UPDATE_CART_ON_CHECKOUT,VITALS_FLAG__USE_CAPTURE_FOR_ATC_BUTTON,VITALS_FLAG__USE_FIRST_ATC_SPAN_FOR_PRE_ORDER,VITALS_FLAG__USE_HTML_FOR_STICKY_ATC_BUTTON,VITALS_FLAG__STOP_EXECUTION,VITALS_FLAG__USE_CUSTOM_COLLECTION_FILTER_DROPDOWN,VITALS_FLAG__PRE_ORDER_START_WITH_OBSERVER,VITALS_FLAG__PRE_ORDER_OBSERVER_DELAY,VITALS_FLAG__ON_CHECKOUT_CLICK_USE_CAPTURE_EVENT,handle,}) => {return {"147": {"location":"form","locator":"after"},};};

window.vtlsLiquidData = window.vtlsLiquidData || {};window.vtlsLiquidData.documentInjectors = ({$,vitalsGet,vitalsSet,VITALS_IS_MOBILE,VITALS_APPEND_CSS}) => {const documentInjectors = {};documentInjectors["2"]={};documentInjectors["2"]["d"]=[];documentInjectors["2"]["d"]["0"]={};documentInjectors["2"]["d"]["0"]["a"]={"e":"grid__item","l":"after"};documentInjectors["2"]["d"]["0"]["s"]="#PageContainer \u003e main.main-content";documentInjectors["1"]={};documentInjectors["1"]["d"]=[];documentInjectors["1"]["d"]["0"]={};documentInjectors["1"]["d"]["0"]["a"]=null;documentInjectors["1"]["d"]["0"]["s"]=".product-single__description.rte";documentInjectors["4"]={};documentInjectors["4"]["d"]=[];documentInjectors["4"]["d"]["0"]={};documentInjectors["4"]["d"]["0"]["a"]=null;documentInjectors["4"]["d"]["0"]["s"]="h1[itemprop=\"name\"]:not(.cbb-also-bought-title)";documentInjectors["4"]["d"]["1"]={};documentInjectors["4"]["d"]["1"]["a"]=null;documentInjectors["4"]["d"]["1"]["s"]="h2[class*=\"title\"]";documentInjectors["10"]={};documentInjectors["10"]["d"]=[];documentInjectors["10"]["d"]["0"]={};documentInjectors["10"]["d"]["0"]["a"]=[];documentInjectors["10"]["d"]["0"]["s"]="div.product-single__quantity";documentInjectors["12"]={};documentInjectors["12"]["d"]=[];documentInjectors["12"]["d"]["0"]={};documentInjectors["12"]["d"]["0"]["a"]=[];documentInjectors["12"]["d"]["0"]["s"]="form[action*=\"\/cart\/add\"]:visible:not([id*=\"product-form-installment\"]):not([id*=\"product-installment-form\"]):not(.vtls-exclude-atc-injector *)";documentInjectors["12"]["d"]["1"]={};documentInjectors["12"]["d"]["1"]["a"]=null;documentInjectors["12"]["d"]["1"]["s"]=".product-single__form";documentInjectors["11"]={};documentInjectors["11"]["d"]=[];documentInjectors["11"]["d"]["0"]={};documentInjectors["11"]["d"]["0"]["a"]={"ctx":"inside","last":false};documentInjectors["11"]["d"]["0"]["s"]="[type=\"submit\"]:not(.swym-button)";documentInjectors["11"]["d"]["1"]={};documentInjectors["11"]["d"]["1"]["a"]={"ctx":"inside","last":false};documentInjectors["11"]["d"]["1"]["s"]="[name=\"add\"]:not(.swym-button)";documentInjectors["3"]={};documentInjectors["3"]["d"]=[];documentInjectors["3"]["d"]["0"]={};documentInjectors["3"]["d"]["0"]["a"]={"js":"if($('.cart__subtotal').length \u003e= 2) {\n\t$('.cart__subtotal').first().html(left_subtotal);\n\t$('.cart__subtotal').last().html(right_subtotal);\n\t$('#bk-cart-subtotal-label').hide();\n} else {\n\t$('.cart__subtotal').html(cart_html);\n}"};documentInjectors["3"]["d"]["0"]["s"]=".cart__subtotal";documentInjectors["3"]["d"]["0"]["js"]=function(left_subtotal, right_subtotal, cart_html) { var vitalsDiscountsDiv = ".vitals-discounts";
if ($(vitalsDiscountsDiv).length === 0) {
if($('.cart__subtotal').length >= 2) {
	$('.cart__subtotal').first().html(left_subtotal);
	$('.cart__subtotal').last().html(right_subtotal);
	$('#bk-cart-subtotal-label').hide();
} else {
	$('.cart__subtotal').html(cart_html);
}
}

};return documentInjectors;};

var tapitaSeoVer = 1166;
    var tptAddedSchemas = [];

(function disableSchemasByType(schemaTypesToDisable = []) {
        if (schemaTypesToDisable.length === 0) {
            return;
        }
        function handleJsonLD(container = document) {
            try {
                const fscripts = container.querySelectorAll('script[type="application/ld+json"]');
                const scripts = Array.from(fscripts).filter(
                    s => s.getAttribute('author') !== 'tpt'
                );
                scripts.forEach(script => {
                    try {
                        const previousElement = script.previousElementSibling;
                        if (previousElement && previousElement.tagName === 'SCRIPT' && previousElement.innerHTML.includes('productSchemaData')) {
                            return;
                        }
                        const jsonData = JSON.parse(script.innerHTML);
                        const type = jsonData['@type'];
                        if (schemaTypesToDisable.includes(type)) {
                            script.type = 'application/ld+json-disabled';
                        }
                    } catch (parseError) {
                    }
                });
            } catch (error) {
            }
        }
        function handleMicrodata(container = document) {
            try {
                const selectors = schemaTypesToDisable.map(type => 
                    `[itemtype*="schema.org/${type}"]`
                ).join(', ');
                const elements = container.querySelectorAll(selectors);
                elements.forEach(element => {
                    try {
                        const itemType = element.getAttribute('itemtype');
                        const matchedType = schemaTypesToDisable.find(type => 
                            itemType && itemType.includes(`schema.org/${type}`)
                        );
                        element.removeAttribute('itemscope');
                        element.removeAttribute('itemtype');
                        element.removeAttribute('itemprop');
                        removeAttributesFromDescendants(element, ['itemprop']);
                    } catch (error) {
                    }
                });
            } catch (error) {
            }
        }
        function handleRDFa(container = document) {
            try {
                const selectors = schemaTypesToDisable.map(type => 
                    `[typeof*="${type}"], [vocab*="schema.org"][typeof*="${type}"]`
                ).join(', ');
                const elements = container.querySelectorAll(selectors);
                elements.forEach(element => {
                    try {
                        const typeOf = element.getAttribute('typeof');
                        const matchedType = schemaTypesToDisable.find(type => 
                            typeOf && typeOf.includes(type)
                        );
                        element.removeAttribute('vocab');
                        element.removeAttribute('typeof');
                        element.removeAttribute('property');
                        removeAttributesFromDescendants(element, ['property']);
                    } catch (error) {
                    }
                });
            } catch (error) {
            }
        }
        function removeAttributesFromDescendants(parentElement, attributes) {
            try {
                const descendants = parentElement.querySelectorAll('*');
                descendants.forEach(descendant => {
                    attributes.forEach(attr => {
                        if (descendant.hasAttribute(attr)) {
                            descendant.removeAttribute(attr);
                        }
                    });
                });
            } catch (error) {
            }
        }
        function processSchemas(container = document) {
            handleJsonLD(container);
            handleMicrodata(container);
            handleRDFa(container);
        }
        processSchemas();
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        if (node.tagName === 'SCRIPT' && node.type === 'application/ld+json') {
                            if (node.getAttribute('author') !== 'tpt')
                                handleJsonLD(node.parentElement);
                        } else if (node.hasAttribute) {
                            const itemType = node.getAttribute('itemtype');
                            const typeOf = node.getAttribute('typeof');
                            const hasMatchingItemType = itemType && schemaTypesToDisable.some(type => 
                                itemType.includes(`schema.org/${type}`)
                            );
                            const hasMatchingTypeOf = typeOf && schemaTypesToDisable.some(type => 
                                typeOf.includes(type)
                            );
                            if (hasMatchingItemType || hasMatchingTypeOf) {
                                handleMicrodata(node.parentElement);
                                handleRDFa(node.parentElement);
                            } else {
                                processSchemas(node);
                            }
                        } else {
                            processSchemas(node);
                        }
                    }
                });
                if (mutation.type === 'attributes') {
                    const target = mutation.target;
                    const attrName = mutation.attributeName;
                    if (['itemtype', 'typeof', 'type'].includes(attrName)) {
                        if (target.tagName === 'SCRIPT' && target.type === 'application/ld+json') {
                            if (target.getAttribute('author') !== 'tpt')
                                handleJsonLD(target.parentElement);
                        } else if (attrName === 'itemtype') {
                            const itemType = target.getAttribute('itemtype');
                            if (itemType && schemaTypesToDisable.some(type => itemType.includes(`schema.org/${type}`))) {
                                handleMicrodata(target.parentElement);
                            }
                        } else if (attrName === 'typeof') {
                            const typeOf = target.getAttribute('typeof');
                            if (typeOf && schemaTypesToDisable.some(type => typeOf.includes(type))) {
                                handleRDFa(target.parentElement);
                            }
                        }
                    }
                }
            });
        });
        const targetNode = document.body || document.documentElement;
        observer.observe(targetNode, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['itemtype', 'typeof', 'type']
        });
        console.log('Schema disabler initialized with types:', schemaTypesToDisable);
    })(window.tptAddedSchemas);

var instantPageUrl = "https://cdn.shopify.com/extensions/019a6c18-0856-708f-a1ce-97bf9b498ca4/tapita-seo-schema-155/assets/instantpage.js";
    var tptMetaDataConfigUrl = 'https://cdn.shopify.com/s/files/1/0875/5586/6930/t/5/assets/tapita-meta-data.json?v=1723851667';
    // ADD META TITLE / DESCRIPTION WHEN tptMetaDataConfigUrl valid
    const createMetaTag = (descriptionValue) => {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'description');
        metaTag.setAttribute('content', descriptionValue);
        const headTag = document.querySelector('head');
        headTag.appendChild(metaTag);
    }
    const replaceMetaTagContent = (titleValue, descriptionValue, needReplaceVar) => {
        const disableReplacingTitle = !!window._tpt_no_replacing_plain_title
        const disableReplacingDescription = !!window._tpt_no_replacing_plain_desc
        const config = { attributes: true, childList: true, subtree: true};
        const header = document.getElementsByTagName('head')[0];
        let i = 0;
        const callback = (mutationList, observer) => {
            i++;
            const title = document.getElementsByTagName('title')[0];
            const ogTitle = document.querySelector('meta[property="og:title"]');
            const twitterTitle = document.querySelector('meta[name="twitter:title"]');
            const newTitle = needReplaceVar ? replaceVar(titleValue) : titleValue;
            const newDescription = needReplaceVar ? replaceVar(descriptionValue) : descriptionValue;
            if(titleValue && document && document.title != newTitle && !disableReplacingTitle){
                document.title = newTitle;
            }
            if(ogTitle && (ogTitle?.content != newTitle)){
                ogTitle?.setAttribute('content', newTitle);
            }
            if(twitterTitle && (twitterTitle?.content != newTitle)){
                twitterTitle?.setAttribute('content', newTitle);
            }
            const metaDescriptionTagList = document.querySelectorAll('meta[name="description"]');
            const ogDescriptionTagList = document.querySelector('meta[property="og:description"]');
            const twitterDescriptionTagList = document.querySelector('meta[name="twitter:description"]');
            try {
                if(ogDescriptionTagList && newDescription && (ogDescriptionTagList?.content != newDescription)) {
                    ogDescriptionTagList?.setAttribute('content', newDescription);
                }
                if(twitterDescriptionTagList && newDescription && (twitterDescriptionTagList?.content != newDescription)){
                    twitterDescriptionTagList?.setAttribute('content', newDescription);
                }
            } catch (err) {

            }
            if (descriptionValue) {
                if(metaDescriptionTagList?.length == 0){
                    try {
                    createMetaTag(newDescription);
                    } catch (err) {
                    //
                    }
                }
                metaDescriptionTagList?.forEach(metaDescriptionTag=>{
                    if(metaDescriptionTag.content != newDescription && !disableReplacingDescription){
                    metaDescriptionTag.content = newDescription;
                    }
                })
            }
            if(observer && i > 1000){
                observer.disconnect();
            }
        };
        callback();
        setTimeout(callback, 100);
        const observer = new MutationObserver(callback);
        if(observer){
            observer.observe(header, config);
        }
    }
    if (tptMetaDataConfigUrl) {
        fetch(tptMetaDataConfigUrl)
        .then(response => response.json())
        .then((data) => {
            if(!data) return;
            const instantPage = data?.instantPage || false;
            const excludedPaths = [
                '/cart',
                '/checkout',
                '/account',
                'logout',
                'login',
                'customer'
            ];
            if (!window.FPConfig || !window.FPConfig.ignoreKeywords || !Array.isArray(window.FPConfig.ignoreKeywords)) {
                window.FPConfig = { ignoreKeywords : excludedPaths };
            } else {
                window.FPConfig.ignoreKeywords = window.FPConfig.ignoreKeywords.concat(excludedPaths);
            }
            var toEnableInstantPageByPath = true;
            if (window.location.pathname && window.location.pathname.includes) {
                excludedPaths.forEach(excludedPath => {
                    if (window.location.pathname.includes(excludedPath)) {
                        toEnableInstantPageByPath = false;
                    }
                });
            }
            if (window.document &&
                window.document.location &&
                window.document.location.pathname &&
                window.document.location.pathname.includes) {
                excludedPaths.forEach(excludedPath => {
                    if (window.document.location.pathname.includes(excludedPath)) {
                        toEnableInstantPageByPath = false;
                    }
                });
            }
            if(instantPage && toEnableInstantPageByPath){
                const tptAddInstantPage =  setInterval(function () {
                    try {
                        if(document && document.body && (window.top === window.self)){
                            var instantScript = document.createElement('script');
                            instantScript.src = instantPageUrl;
                            document.body.appendChild(instantScript);
                            clearInterval(tptAddInstantPage);
                        }
                    } catch (err) {
                        //
                    }
                }, 500);
            }
        });
    }
    if (window.tapita_meta_page_title || window.tapita_meta_page_description) {
        replaceMetaTagContent(window.tapita_meta_page_title, window.tapita_meta_page_description, false);
    }

(function(){if ("sendBeacon" in navigator && "performance" in window) {try {var session_token_from_headers = performance.getEntriesByType('navigation')[0].serverTiming.find(x => x.name == '_s').description;} catch {var session_token_from_headers = undefined;}var session_cookie_matches = document.cookie.match(/_shopify_s=([^;]*)/);var session_token_from_cookie = session_cookie_matches && session_cookie_matches.length === 2 ? session_cookie_matches[1] : "";var session_token = session_token_from_headers || session_token_from_cookie || "";function handle_abandonment_event(e) {var entries = performance.getEntries().filter(function(entry) {return /monorail-edge.shopifysvc.com/.test(entry.name);});if (!window.abandonment_tracked && entries.length === 0) {window.abandonment_tracked = true;var currentMs = Date.now();var navigation_start = performance.timing.navigationStart;var payload = {shop_id: 87555866930,url: window.location.href,navigation_start,duration: currentMs - navigation_start,session_token,page_type: "index"};window.navigator.sendBeacon("https://monorail-edge.shopifysvc.com/v1/produce", JSON.stringify({schema_id: "online_store_buyer_site_abandonment/1.1",payload: payload,metadata: {event_created_at_ms: currentMs,event_sent_at_ms: currentMs}}));}}window.addEventListener('pagehide', handle_abandonment_event);}}());

(function e(e,d,r,n,o){if(void 0===o&&(o={}),!Boolean(null===(a=null===(i=window.Shopify)||void 0===i?void 0:i.analytics)||void 0===a?void 0:a.replayQueue)){var i,a;window.Shopify=window.Shopify||{};var t=window.Shopify;t.analytics=t.analytics||{};var s=t.analytics;s.replayQueue=[],s.publish=function(e,d,r){return s.replayQueue.push([e,d,r]),!0};try{self.performance.mark("wpm:start")}catch(e){}var l=function(){var e={modern:/Edge?\/(1{2}[4-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[4-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(9{2}|\d{3,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(15\.\d+|(1[6-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(9{2}|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]\d+|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Android.+Firefox\/(13[5-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|SamsungBrowser\/([2-9]\d|\d{3,})\.\d+/,legacy:/Edge?\/(1[6-9]|[2-9]\d|\d{3,})\.\d+(\.\d+|)|Firefox\/(5[4-9]|[6-9]\d|\d{3,})\.\d+(\.\d+|)|Chrom(ium|e)\/(5[1-9]|[6-9]\d|\d{3,})\.\d+(\.\d+|)([\d.]+$|.*Safari\/(?![\d.]+ Edge\/[\d.]+$))|(Maci|X1{2}).+ Version\/(10\.\d+|(1[1-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(3[89]|[4-9]\d|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(10[._]\d+|(1[1-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[5-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(5\.\d+|([6-9]|\d{2,})\.\d+)|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(3\.\d+|([4-9]|\d{2,})\.\d+)(\.\d+|)/},d=e.modern,r=e.legacy,n=navigator.userAgent;return n.match(d)?"modern":n.match(r)?"legacy":"unknown"}(),u="modern"===l?"modern":"legacy",c=(null!=n?n:{modern:"",legacy:""})[u],f=function(e){return[e.baseUrl,"/wpm","/b",e.hashVersion,"modern"===e.buildTarget?"m":"l",".js"].join("")}({baseUrl:d,hashVersion:r,buildTarget:u}),m=function(e){var d=e.version,r=e.bundleTarget,n=e.surface,o=e.pageUrl,i=e.monorailEndpoint;return{emit:function(e){var a=e.status,t=e.errorMsg,s=(new Date).getTime(),l=JSON.stringify({metadata:{event_sent_at_ms:s},events:[{schema_id:"web_pixels_manager_load/3.1",payload:{version:d,bundle_target:r,page_url:o,status:a,surface:n,error_msg:t},metadata:{event_created_at_ms:s}}]});if(!i)return console&&console.warn&&console.warn("[Web Pixels Manager] No Monorail endpoint provided, skipping logging."),!1;try{return self.navigator.sendBeacon.bind(self.navigator)(i,l)}catch(e){}var u=new XMLHttpRequest;try{return u.open("POST",i,!0),u.setRequestHeader("Content-Type","text/plain"),u.send(l),!0}catch(e){return console&&console.warn&&console.warn("[Web Pixels Manager] Got an unhandled error while logging to Monorail."),!1}}}}({version:r,bundleTarget:l,surface:e.surface,pageUrl:self.location.href,monorailEndpoint:e.monorailEndpoint});try{o.browserTarget=l,function(e){var d=e.src,r=e.async,n=void 0===r||r,o=e.onload,i=e.onerror,a=e.sri,t=e.scriptDataAttributes,s=void 0===t?{}:t,l=document.createElement("script"),u=document.querySelector("head"),c=document.querySelector("body");if(l.async=n,l.src=d,a&&(l.integrity=a,l.crossOrigin="anonymous"),s)for(var f in s)if(Object.prototype.hasOwnProperty.call(s,f))try{l.dataset[f]=s[f]}catch(e){}if(o&&l.addEventListener("load",o),i&&l.addEventListener("error",i),u)u.appendChild(l);else{if(!c)throw new Error("Did not find a head or body element to append the script");c.appendChild(l)}}({src:f,async:!0,onload:function(){if(!function(){var e,d;return Boolean(null===(d=null===(e=window.Shopify)||void 0===e?void 0:e.analytics)||void 0===d?void 0:d.initialized)}()){var d=window.webPixelsManager.init(e)||void 0;if(d){var r=window.Shopify.analytics;r.replayQueue.forEach((function(e){var r=e[0],n=e[1],o=e[2];d.publishCustomEvent(r,n,o)})),r.replayQueue=[],r.publish=d.publishCustomEvent,r.visitor=d.visitor,r.initialized=!0}}},onerror:function(){return m.emit({status:"failed",errorMsg:"".concat(f," has failed to load")})},sri:function(e){var d=/^sha384-[A-Za-z0-9+/=]+$/;return"string"==typeof e&&d.test(e)}(c)?c:"",scriptDataAttributes:o}),m.emit({status:"loading"})}catch(e){m.emit({status:"failed",errorMsg:(null==e?void 0:e.message)||"Unknown error"})}}})({shopId: 87555866930,storefrontBaseUrl: "https://technoant.co",extensionsBaseUrl: "https://extensions.shopifycdn.com/cdn/shopifycloud/web-pixels-manager",monorailEndpoint: "https://monorail-edge.shopifysvc.com/unstable/produce_batch",surface: "storefront-renderer",enabledBetaFlags: ["2dca8a86"],webPixelsConfigList: [{"id":"1148420402","configuration":"{\"shop\":\"89b724-66.myshopify.com\",\"cookie_duration\":\"604800\"}","eventPayloadVersion":"v1","runtimeContext":"STRICT","scriptVersion":"a2e7513c3708f34b1f617d7ce88f9697","type":"APP","apiClientId":2744533,"privacyPurposes":["ANALYTICS","MARKETING"],"dataSharingAdjustments":{"protectedCustomerApprovalScopes":["read_customer_address","read_customer_email","read_customer_name","read_customer_personal_data","read_customer_phone"]}},{"id":"685113650","configuration":"{\"pixelCode\":\"CP51D1BC77UELKMMT7LG\"}","eventPayloadVersion":"v1","runtimeContext":"STRICT","scriptVersion":"22e92c2ad45662f435e4801458fb78cc","type":"APP","apiClientId":4383523,"privacyPurposes":["ANALYTICS","MARKETING","SALE_OF_DATA"],"dataSharingAdjustments":{"protectedCustomerApprovalScopes":["read_customer_address","read_customer_email","read_customer_name","read_customer_personal_data","read_customer_phone"]}},{"id":"227508530","configuration":"{\"pixelId\":\"95b6ef0d-42e8-4eee-bc92-76423c36f4ca\"}","eventPayloadVersion":"v1","runtimeContext":"STRICT","scriptVersion":"c119f01612c13b62ab52809eb08154bb","type":"APP","apiClientId":2556259,"privacyPurposes":["ANALYTICS","MARKETING","SALE_OF_DATA"],"dataSharingAdjustments":{"protectedCustomerApprovalScopes":["read_customer_address","read_customer_email","read_customer_name","read_customer_personal_data","read_customer_phone"]}},{"id":"shopify-app-pixel","configuration":"{}","eventPayloadVersion":"v1","runtimeContext":"STRICT","scriptVersion":"0450","apiClientId":"shopify-pixel","type":"APP","privacyPurposes":["ANALYTICS","MARKETING"]},{"id":"shopify-custom-pixel","eventPayloadVersion":"v1","runtimeContext":"LAX","scriptVersion":"0450","apiClientId":"shopify-pixel","type":"CUSTOM","privacyPurposes":["ANALYTICS","MARKETING"]}],isMerchantRequest: false,initData: {"shop":{"name":"Tecnoant","paymentSettings":{"currencyCode":"USD"},"myshopifyDomain":"89b724-66.myshopify.com","countryCode":"EE","storefrontUrl":"https:\/\/technoant.co"},"customer":null,"cart":{"cost":{"totalAmount":{"amount":281.77,"currencyCode":"USD"}},"lines":[{"cost":{"totalAmount":{"amount":67.99,"currencyCode":"USD"}},"merchandise":{"price":{"amount":67.99,"currencyCode":"USD"},"product":{"title":"LuxVoyage Convertible Garment Bag","vendor":"TechnoAnt","id":"9581706477874","untranslatedTitle":"LuxVoyage Convertible Garment Bag","url":"\/products\/luxvoyage","type":"Gadgets"},"id":"49194292019506","image":{"src":"\/\/technoant.co\/cdn\/shop\/files\/04a0fbbf-7c83-426f-a382-61f2291ce1ae.jpg?v=1749340224"},"sku":"CJYD178193705EV","title":"Beige","untranslatedTitle":"Beige"},"quantity":1},{"cost":{"totalAmount":{"amount":119.9,"currencyCode":"USD"}},"merchandise":{"price":{"amount":59.95,"currencyCode":"USD"},"product":{"title":"Multi-Functional Travel Bag","vendor":"TechnoAnt","id":"9704989851954","untranslatedTitle":"Multi-Functional Travel Bag","url":"\/products\/large-capacity-travel-bag","type":"Gadgets"},"id":"49549881671986","image":{"src":"\/\/technoant.co\/cdn\/shop\/files\/image_2024-11-22_102944824.webp?v=1732267904"},"sku":"CJBHNSNS08214-black","title":"Black","untranslatedTitle":"Black"},"quantity":2},{"cost":{"totalAmount":{"amount":19.95,"currencyCode":"USD"}},"merchandise":{"price":{"amount":19.95,"currencyCode":"USD"},"product":{"title":"Tea Diffuser (Set of 2)","vendor":"TechnoAnt","id":"9811649167666","untranslatedTitle":"Tea Diffuser (Set of 2)","url":"\/products\/tea-diffuser","type":"Gadgets"},"id":"49905297621298","image":{"src":"\/\/technoant.co\/cdn\/shop\/files\/e61edf47-aa8d-47d4-aa9d-f911ea98793a.jpg?v=1743831530"},"sku":"CJJJCFHS01072-Q2pcs","title":"Default Title","untranslatedTitle":"Default Title"},"quantity":1},{"cost":{"totalAmount":{"amount":43.98,"currencyCode":"USD"}},"merchandise":{"price":{"amount":21.99,"currencyCode":"USD"},"product":{"title":"Multi-Functional Wire Handling Tool","vendor":"TechnoAnt","id":"9684300824882","untranslatedTitle":"Multi-Functional Wire Handling Tool","url":"\/products\/multi-functional-wire-handling-tool","type":"Gadgets"},"id":"49485062996274","image":{"src":"\/\/technoant.co\/cdn\/shop\/files\/e074b003-80de-40e2-ac49-7eabd1f30ef7.jpg?v=1730427089"},"sku":"CJYD191474301AZ","title":"Default Title","untranslatedTitle":"Default Title"},"quantity":2},{"cost":{"totalAmount":{"amount":29.95,"currencyCode":"USD"}},"merchandise":{"price":{"amount":29.95,"currencyCode":"USD"},"product":{"title":"Magnetic Chess Game","vendor":"WonderEmpire","id":"9581697892658","untranslatedTitle":"Magnetic Chess Game","url":"\/products\/magnetic-chess-game","type":"Games"},"id":"49194259710258","image":{"src":"\/\/technoant.co\/cdn\/shop\/files\/image_2024-01-25_081625594_900x875_ce1ddf31-eb83-44aa-a5a9-06a5b51ed7f4.webp?v=1723853050"},"sku":"CJYD187988401AZ","title":"Default Title","untranslatedTitle":"Default Title"},"quantity":1}],"totalQuantity":7,"attributes":[{"key":"Accepted terms at","value":"Sat Oct 25 2025 20:15:23 GMT 0200 (South Africa Standard Time)"},{"key":"I agree terms and conditions.","value":"Yes"}],"id":"hWN46Brg2jsOobWAb3WQ8slf"},"checkout":null,"productVariants":[],"purchasingCompany":null},},"https://technoant.co/cdn","ae1676cfwd2530674p4253c800m34e853cb",{"modern":"","legacy":""},{"shopId":"87555866930","storefrontBaseUrl":"https:\/\/technoant.co","extensionBaseUrl":"https:\/\/extensions.shopifycdn.com\/cdn\/shopifycloud\/web-pixels-manager","surface":"storefront-renderer","enabledBetaFlags":"[\"2dca8a86\"]","isMerchantRequest":"false","hashVersion":"ae1676cfwd2530674p4253c800m34e853cb","publish":"custom","events":"[[\"page_viewed\",{}]]"});

window.ShopifyAnalytics = window.ShopifyAnalytics || {};
  window.ShopifyAnalytics.meta = window.ShopifyAnalytics.meta || {};
  window.ShopifyAnalytics.meta.currency = 'USD';
  var meta = {"page":{"pageType":"home"}};
  for (var attr in meta) {
    window.ShopifyAnalytics.meta[attr] = meta[attr];
  }

var perfEntries=performance.getEntriesByType("navigation"),hasLoadEventEnd=function(){return perfEntries&&perfEntries[0].loadEventEnd>0},processEvents=function(e,t){["mouseover","keydown","touchmove","touchstart","wheel"].forEach((function(o){e(o,eventCallback,t)}))};function eventCallback(){flspdx.terminate(),observer.disconnect(),ev(),processEvents(window.removeEventListener),n()}function seq(e,t,o){(void 0===o||void 0===e[o])&&(o=0),e[o]((function(){++o===e.length?t():seq(e,t,o)}))}function initAndDispatchEvents(){if(hasLoadEventEnd()){console.log("u=1"),["DOMContentLoaded","readystatechange","load","show"].forEach((function(e){var t=document.createEvent("Event");t.initEvent(e,!0,!0),window.dispatchEvent(t),document.dispatchEvent(t)}));var e=window.document.createEvent("UIEvents");e.initUIEvent("resize",!0,!0,window,0),window.dispatchEvent(e),document.dispatchEvent(e)}}function createScript(e,t){var o=document.createElement("script");o.type="text/javascript",e.src?(o.onload=t,o.onerror=t,o.src=e.src):o.textContent=e.innerText,o.id=e.id,o.async=!1,Object.assign(o.dataset,e.dataset),e.parentNode.removeChild(e),document.body.appendChild(o),e.src||t()}function n(){var e=document.querySelectorAll("script"),t=[];e.forEach((function(e){"text/flspdscript"===e.getAttribute("type")&&t.push((function(t){createScript(e,t)}))})),t.length>0&&seq(t,initAndDispatchEvents)}function ev(){var e=document.removeEventListeners;hasLoadEventEnd()&&void 0!==e&&(console.log("ev=1"),["DOMContentLoaded","load"].forEach(e))}processEvents(window.addEventListener,{passive:!0});

/*({
  "id": 9581727482162,
      "handle": "mini-portable-electric-shaver",
      "type": "",
      "tags": [],
      "collections": []
    });

({
  "available": true,
  "collections": [],
  "compare_at_price": 4000,
  "compare_at_price_max": 4000,
  "compare_at_price_min": 4000,
  "compare_at_price_varies": false,
  "content": "\u003c!----\u003e",
  "created_at": [50,27,2,17,8,2024,6,230,true,"CEST"],
  "description": "\u003c!----\u003e",
  "featured_image": "\/\/technoant.co\/cdn\/shop\/files\/c07d0af9-f0fb-4b5e-a8bb-b35524475618.jpg?v=1723854482",
  "first_available_variant_compare_at_price": 4000,
  "handle": "mini-portable-electric-shaver",
  "id": 9581727482162,
  "images": ["\/\/technoant.co\/cdn\/shop\/files\/c07d0af9-f0fb-4b5e-a8bb-b35524475618.jpg?v=1723854482","\/\/technoant.co\/cdn\/shop\/files\/20d1182f-79b9-43de-81ac-5296f4ea0958.jpg?v=1723854482","\/\/technoant.co\/cdn\/shop\/files\/ab9a2c3d-9c6c-407f-9ded-600e408434b8.jpg?v=1723854482","\/\/technoant.co\/cdn\/shop\/files\/95ddfdb7-72df-4eb7-91f8-e88bf6093278.jpg?v=1723854482","\/\/technoant.co\/cdn\/shop\/files\/e2381191-7101-453d-b7e6-0cec3afdc41b.jpg?v=1723854483","\/\/technoant.co\/cdn\/shop\/files\/7be25359-0b30-4d8a-89d1-012c282da853.jpg?v=1723854482","\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041254574_clipdrop-cleanup_1.png?v=1723854483","\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041013882_clipdrop-cleanup_1.png?v=1723854482","\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041052556_clipdrop-cleanup_1.png?v=1723854482","\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041121492_clipdrop-cleanup_1.png?v=1723854482","\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041156236_clipdrop-cleanup_1.png?v=1723854483","\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041223002_clipdrop-cleanup_1.png?v=1723854482","\/\/technoant.co\/cdn\/shop\/files\/image_2024-07-09_024809149.webp?v=1723854483"],
  "media": [{"alt":null,"id":39187917898034,"position":1,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/c07d0af9-f0fb-4b5e-a8bb-b35524475618.jpg?v=1723854482"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/c07d0af9-f0fb-4b5e-a8bb-b35524475618.jpg?v=1723854482","width":800},{"alt":null,"id":39187917930802,"position":2,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/20d1182f-79b9-43de-81ac-5296f4ea0958.jpg?v=1723854482"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/20d1182f-79b9-43de-81ac-5296f4ea0958.jpg?v=1723854482","width":800},{"alt":null,"id":39187917963570,"position":3,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/ab9a2c3d-9c6c-407f-9ded-600e408434b8.jpg?v=1723854482"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/ab9a2c3d-9c6c-407f-9ded-600e408434b8.jpg?v=1723854482","width":800},{"alt":null,"id":39187917996338,"position":4,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/95ddfdb7-72df-4eb7-91f8-e88bf6093278.jpg?v=1723854482"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/95ddfdb7-72df-4eb7-91f8-e88bf6093278.jpg?v=1723854482","width":800},{"alt":null,"id":39187918029106,"position":5,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/e2381191-7101-453d-b7e6-0cec3afdc41b.jpg?v=1723854483"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/e2381191-7101-453d-b7e6-0cec3afdc41b.jpg?v=1723854483","width":800},{"alt":null,"id":39187918061874,"position":6,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/7be25359-0b30-4d8a-89d1-012c282da853.jpg?v=1723854482"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/7be25359-0b30-4d8a-89d1-012c282da853.jpg?v=1723854482","width":800},{"alt":null,"id":39187918094642,"position":7,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041254574_clipdrop-cleanup_1.png?v=1723854483"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041254574_clipdrop-cleanup_1.png?v=1723854483","width":800},{"alt":null,"id":39187918127410,"position":8,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041013882_clipdrop-cleanup_1.png?v=1723854482"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041013882_clipdrop-cleanup_1.png?v=1723854482","width":800},{"alt":null,"id":39187918160178,"position":9,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041052556_clipdrop-cleanup_1.png?v=1723854482"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041052556_clipdrop-cleanup_1.png?v=1723854482","width":800},{"alt":null,"id":39187918192946,"position":10,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041121492_clipdrop-cleanup_1.png?v=1723854482"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041121492_clipdrop-cleanup_1.png?v=1723854482","width":800},{"alt":null,"id":39187918225714,"position":11,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041156236_clipdrop-cleanup_1.png?v=1723854483"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041156236_clipdrop-cleanup_1.png?v=1723854483","width":800},{"alt":null,"id":39187918291250,"position":12,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041223002_clipdrop-cleanup_1.png?v=1723854482"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/image_2023-09-01_041223002_clipdrop-cleanup_1.png?v=1723854482","width":800},{"alt":null,"id":39187918324018,"position":13,"preview_image":{"aspect_ratio":1.0,"height":430,"width":430,"src":"\/\/technoant.co\/cdn\/shop\/files\/image_2024-07-09_024809149.webp?v=1723854483"},"aspect_ratio":1.0,"height":430,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/image_2024-07-09_024809149.webp?v=1723854483","width":430}],
  "options": ["Color","Electrical outlet"],
  "options_with_values": {
    
      "option1": ["Black","Blue","Green","Silver"],
    
      "option2": ["USB"]
    
  },
  "price": 2999,
  "price_max": 2999,
  "price_min": 2999,
  "price_varies": false,
  "published_at": [44,57,12,30,4,2024,2,121,true,"CEST"],
  "requires_selling_plan": false,
  "selling_plan_groups": [],
  "tags": [],
  "title": "BlitzPro™ Mini Portable Electric Shaver",
  "type": "",
  "variants": [{"id":49194349855026,"title":"Black \/ USB","option1":"Black","option2":"USB","option3":null,"sku":"CJTX161691901AZ","requires_shipping":true,"taxable":false,"featured_image":{"id":46840343560498,"product_id":9581727482162,"position":6,"created_at":"2024-08-17T02:28:00+02:00","updated_at":"2024-08-17T02:28:02+02:00","alt":null,"width":800,"height":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/7be25359-0b30-4d8a-89d1-012c282da853.jpg?v=1723854482","variant_ids":[49194349855026]},"available":true,"name":"BlitzPro™ Mini Portable Electric Shaver - Black \/ USB","public_title":"Black \/ USB","options":["Black","USB"],"price":2999,"weight":99,"compare_at_price":4000,"inventory_management":"shopify","barcode":null,"featured_media":{"alt":null,"id":39187918061874,"position":6,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/7be25359-0b30-4d8a-89d1-012c282da853.jpg?v=1723854482"}},"requires_selling_plan":false,"selling_plan_allocations":[]},{"id":49194349887794,"title":"Blue \/ USB","option1":"Blue","option2":"USB","option3":null,"sku":"CJTX161691902BY","requires_shipping":true,"taxable":false,"featured_image":{"id":46840343789874,"product_id":9581727482162,"position":4,"created_at":"2024-08-17T02:28:00+02:00","updated_at":"2024-08-17T02:28:02+02:00","alt":null,"width":800,"height":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/95ddfdb7-72df-4eb7-91f8-e88bf6093278.jpg?v=1723854482","variant_ids":[49194349887794]},"available":true,"name":"BlitzPro™ Mini Portable Electric Shaver - Blue \/ USB","public_title":"Blue \/ USB","options":["Blue","USB"],"price":2999,"weight":103,"compare_at_price":4000,"inventory_management":"shopify","barcode":null,"featured_media":{"alt":null,"id":39187917996338,"position":4,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/95ddfdb7-72df-4eb7-91f8-e88bf6093278.jpg?v=1723854482"}},"requires_selling_plan":false,"selling_plan_allocations":[]},{"id":49194349920562,"title":"Green \/ USB","option1":"Green","option2":"USB","option3":null,"sku":"CJTX161691903CX","requires_shipping":true,"taxable":false,"featured_image":{"id":46840343724338,"product_id":9581727482162,"position":3,"created_at":"2024-08-17T02:28:00+02:00","updated_at":"2024-08-17T02:28:02+02:00","alt":null,"width":800,"height":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/ab9a2c3d-9c6c-407f-9ded-600e408434b8.jpg?v=1723854482","variant_ids":[49194349920562]},"available":true,"name":"BlitzPro™ Mini Portable Electric Shaver - Green \/ USB","public_title":"Green \/ USB","options":["Green","USB"],"price":2999,"weight":100,"compare_at_price":4000,"inventory_management":"shopify","barcode":null,"featured_media":{"alt":null,"id":39187917963570,"position":3,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/ab9a2c3d-9c6c-407f-9ded-600e408434b8.jpg?v=1723854482"}},"requires_selling_plan":false,"selling_plan_allocations":[]},{"id":49194349953330,"title":"Silver \/ USB","option1":"Silver","option2":"USB","option3":null,"sku":"CJTX161691904DW","requires_shipping":true,"taxable":false,"featured_image":{"id":46840343855410,"product_id":9581727482162,"position":5,"created_at":"2024-08-17T02:28:00+02:00","updated_at":"2024-08-17T02:28:03+02:00","alt":null,"width":800,"height":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/e2381191-7101-453d-b7e6-0cec3afdc41b.jpg?v=1723854483","variant_ids":[49194349953330]},"available":true,"name":"BlitzPro™ Mini Portable Electric Shaver - Silver \/ USB","public_title":"Silver \/ USB","options":["Silver","USB"],"price":2999,"weight":102,"compare_at_price":4000,"inventory_management":"shopify","barcode":null,"featured_media":{"alt":null,"id":39187918029106,"position":5,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/e2381191-7101-453d-b7e6-0cec3afdc41b.jpg?v=1723854483"}},"requires_selling_plan":false,"selling_plan_allocations":[]}],
  "vendor": "SearchFindOrder",
  "has_only_default_variant": false
}

[]

({
  "id": 9581740687666,
      "handle": "portable-mini-iron-2",
      "type": "Gadgets",
      "tags": [],
      "collections": [{"id":481272332594,"handle":"customers-choice","updated_at":"2025-11-10T13:15:25+01:00","published_at":"2024-08-17T01:56:06+02:00","sort_order":"best-selling","template_suffix":null,"published_scope":"web","title":"Customer's Choice","body_html":null},{"id":481272463666,"handle":"gadgets","updated_at":"2025-11-10T13:15:25+01:00","published_at":"2024-08-17T01:56:09+02:00","sort_order":"manual","template_suffix":null,"published_scope":"web","title":"Gadgets","body_html":null}]
    });

({
  "available": true,
  "collections": [{"id":481272332594,"handle":"customers-choice","updated_at":"2025-11-10T13:15:25+01:00","published_at":"2024-08-17T01:56:06+02:00","sort_order":"best-selling","template_suffix":null,"published_scope":"web","title":"Customer's Choice","body_html":null},{"id":481272463666,"handle":"gadgets","updated_at":"2025-11-10T13:15:25+01:00","published_at":"2024-08-17T01:56:09+02:00","sort_order":"manual","template_suffix":null,"published_scope":"web","title":"Gadgets","body_html":null}],
  "compare_at_price": 4280,
  "compare_at_price_max": 4280,
  "compare_at_price_min": 4280,
  "compare_at_price_varies": false,
  "content": "\u003cp\u003e\u003cimg alt=\"\" src=\"https:\/\/cdn.shopify.com\/s\/files\/1\/0875\/5586\/6930\/files\/6_23cd5268-493a-4798-8def-9c6eb7bf880a.jpg?v=1716108223\"\u003e\u003c\/p\u003e\n\u003ch3\u003eNo More Wrinkles\u003c\/h3\u003e\n\u003cp\u003eTarget every wrinkle with precision. The iron's unique shape allows you to navigate buttons, collars, and seams with ease, giving you a professionally pressed look.\u003c\/p\u003e\n\u003ch3\u003eRapid Heating, Instant Results\u003c\/h3\u003e\n\u003cp\u003eDon't wait around for your iron to heat up. This little powerhouse reaches optimal temperature in seconds, ensuring you're always just moments away from perfect crease removal.\u003c\/p\u003e\n\u003ch3\u003eTake It Anywhere With You\u003c\/h3\u003e\n\u003cp\u003eTravel with confidence knowing your clothes will always look pristine with this portable iron. Its compact design fits snugly in your luggage, offering a quick touch-up for your attire, anytime and anywhere.\u003c\/p\u003e\n\u003cp\u003e\u003cimg alt=\"\" src=\"https:\/\/cdn.shopify.com\/s\/files\/1\/0875\/5586\/6930\/files\/ca6a2576-16f5-402f-89aa-aa68665dad0f.webp?v=1716107925\"\u003e\u003c\/p\u003e\n\u003ch3\u003eGentle on Every Fabric\u003c\/h3\u003e\n\u003cp\u003eFrom the delicate sheen of silk to the cozy warmth of plush, and from the crispness of cotton to the textured elegance of linen, this iron smoothly glides over any fabric. Rest assured, your diverse wardrobe will be treated with care.\u003c\/p\u003e\n\u003ch3\u003e\u003cbr\u003e\u003c\/h3\u003e\n\u003ch3\u003eQuick Water Refill\u003c\/h3\u003e\n\u003cp\u003eStay efficient with a fast and easy water refill process. It's designed for on-the-fly refills to keep your iron steaming without delay, ensuring a seamless ironing experience.\u003c\/p\u003e\n\u003cp\u003e\u003cimg alt=\"\" src=\"https:\/\/cdn.shopify.com\/s\/files\/1\/0875\/5586\/6930\/files\/image_2024-01-14_130856954-transformed_480x480_35744b73-e93e-4073-9390-d052c3fd4227.webp?v=1716108292\"\u003e\u003cimg alt=\"\" src=\"https:\/\/cdn.shopify.com\/s\/files\/1\/0875\/5586\/6930\/files\/617bf4a0-d4f4-4ef5-b62d-1214fcc3e874.webp?v=1716107925\"\u003e\u003cimg alt=\"\" src=\"https:\/\/cdn.shopify.com\/s\/files\/1\/0875\/5586\/6930\/files\/13fc8037-9a4a-422c-803d-3e19047bf1ef.webp?v=1716107925\"\u003e\u003c\/p\u003e\n\u003cp\u003e \u003c\/p\u003e\n\u003c!----\u003e",
  "created_at": [55,38,2,17,8,2024,6,230,true,"CEST"],
  "description": "\u003cp\u003e\u003cimg alt=\"\" src=\"https:\/\/cdn.shopify.com\/s\/files\/1\/0875\/5586\/6930\/files\/6_23cd5268-493a-4798-8def-9c6eb7bf880a.jpg?v=1716108223\"\u003e\u003c\/p\u003e\n\u003ch3\u003eNo More Wrinkles\u003c\/h3\u003e\n\u003cp\u003eTarget every wrinkle with precision. The iron's unique shape allows you to navigate buttons, collars, and seams with ease, giving you a professionally pressed look.\u003c\/p\u003e\n\u003ch3\u003eRapid Heating, Instant Results\u003c\/h3\u003e\n\u003cp\u003eDon't wait around for your iron to heat up. This little powerhouse reaches optimal temperature in seconds, ensuring you're always just moments away from perfect crease removal.\u003c\/p\u003e\n\u003ch3\u003eTake It Anywhere With You\u003c\/h3\u003e\n\u003cp\u003eTravel with confidence knowing your clothes will always look pristine with this portable iron. Its compact design fits snugly in your luggage, offering a quick touch-up for your attire, anytime and anywhere.\u003c\/p\u003e\n\u003cp\u003e\u003cimg alt=\"\" src=\"https:\/\/cdn.shopify.com\/s\/files\/1\/0875\/5586\/6930\/files\/ca6a2576-16f5-402f-89aa-aa68665dad0f.webp?v=1716107925\"\u003e\u003c\/p\u003e\n\u003ch3\u003eGentle on Every Fabric\u003c\/h3\u003e\n\u003cp\u003eFrom the delicate sheen of silk to the cozy warmth of plush, and from the crispness of cotton to the textured elegance of linen, this iron smoothly glides over any fabric. Rest assured, your diverse wardrobe will be treated with care.\u003c\/p\u003e\n\u003ch3\u003e\u003cbr\u003e\u003c\/h3\u003e\n\u003ch3\u003eQuick Water Refill\u003c\/h3\u003e\n\u003cp\u003eStay efficient with a fast and easy water refill process. It's designed for on-the-fly refills to keep your iron steaming without delay, ensuring a seamless ironing experience.\u003c\/p\u003e\n\u003cp\u003e\u003cimg alt=\"\" src=\"https:\/\/cdn.shopify.com\/s\/files\/1\/0875\/5586\/6930\/files\/image_2024-01-14_130856954-transformed_480x480_35744b73-e93e-4073-9390-d052c3fd4227.webp?v=1716108292\"\u003e\u003cimg alt=\"\" src=\"https:\/\/cdn.shopify.com\/s\/files\/1\/0875\/5586\/6930\/files\/617bf4a0-d4f4-4ef5-b62d-1214fcc3e874.webp?v=1716107925\"\u003e\u003cimg alt=\"\" src=\"https:\/\/cdn.shopify.com\/s\/files\/1\/0875\/5586\/6930\/files\/13fc8037-9a4a-422c-803d-3e19047bf1ef.webp?v=1716107925\"\u003e\u003c\/p\u003e\n\u003cp\u003e \u003c\/p\u003e\n\u003c!----\u003e",
  "featured_image": "\/\/technoant.co\/cdn\/shop\/files\/890c2e92-5b72-40f9-ad4d-5e93e91aefc2_f8cb7ae9-032e-4a56-a5d9-a8dfe290ff47.jpg?v=1723855144",
  "first_available_variant_compare_at_price": 4280,
  "handle": "portable-mini-iron-2",
  "id": 9581740687666,
  "images": ["\/\/technoant.co\/cdn\/shop\/files\/890c2e92-5b72-40f9-ad4d-5e93e91aefc2_f8cb7ae9-032e-4a56-a5d9-a8dfe290ff47.jpg?v=1723855144","\/\/technoant.co\/cdn\/shop\/files\/6_23cd5268-493a-4798-8def-9c6eb7bf880a.jpg?v=1723855144","\/\/technoant.co\/cdn\/shop\/files\/617bf4a0-d4f4-4ef5-b62d-1214fcc3e874.webp?v=1723855144","\/\/technoant.co\/cdn\/shop\/files\/13fc8037-9a4a-422c-803d-3e19047bf1ef.webp?v=1723855144","\/\/technoant.co\/cdn\/shop\/files\/image_2024-01-14_130856954-transformed_480x480_35744b73-e93e-4073-9390-d052c3fd4227.webp?v=1723855144","\/\/technoant.co\/cdn\/shop\/files\/e46b7f65-e7f7-4508-90ed-5b95c745dfe7.webp?v=1723855144","\/\/technoant.co\/cdn\/shop\/files\/ca6a2576-16f5-402f-89aa-aa68665dad0f.webp?v=1723855144"],
  "media": [{"alt":null,"id":39188044448050,"position":1,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/890c2e92-5b72-40f9-ad4d-5e93e91aefc2_f8cb7ae9-032e-4a56-a5d9-a8dfe290ff47.jpg?v=1723855144"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/890c2e92-5b72-40f9-ad4d-5e93e91aefc2_f8cb7ae9-032e-4a56-a5d9-a8dfe290ff47.jpg?v=1723855144","width":800},{"alt":null,"id":39188044513586,"position":2,"preview_image":{"aspect_ratio":1.118,"height":644,"width":720,"src":"\/\/technoant.co\/cdn\/shop\/files\/6_23cd5268-493a-4798-8def-9c6eb7bf880a.jpg?v=1723855144"},"aspect_ratio":1.118,"height":644,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/6_23cd5268-493a-4798-8def-9c6eb7bf880a.jpg?v=1723855144","width":720},{"alt":null,"id":39188044579122,"position":3,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/617bf4a0-d4f4-4ef5-b62d-1214fcc3e874.webp?v=1723855144"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/617bf4a0-d4f4-4ef5-b62d-1214fcc3e874.webp?v=1723855144","width":800},{"alt":null,"id":39188044611890,"position":4,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/13fc8037-9a4a-422c-803d-3e19047bf1ef.webp?v=1723855144"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/13fc8037-9a4a-422c-803d-3e19047bf1ef.webp?v=1723855144","width":800},{"alt":null,"id":39188044644658,"position":5,"preview_image":{"aspect_ratio":1.595,"height":301,"width":480,"src":"\/\/technoant.co\/cdn\/shop\/files\/image_2024-01-14_130856954-transformed_480x480_35744b73-e93e-4073-9390-d052c3fd4227.webp?v=1723855144"},"aspect_ratio":1.595,"height":301,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/image_2024-01-14_130856954-transformed_480x480_35744b73-e93e-4073-9390-d052c3fd4227.webp?v=1723855144","width":480},{"alt":null,"id":39188044677426,"position":6,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/e46b7f65-e7f7-4508-90ed-5b95c745dfe7.webp?v=1723855144"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/e46b7f65-e7f7-4508-90ed-5b95c745dfe7.webp?v=1723855144","width":800},{"alt":null,"id":39188044710194,"position":7,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/ca6a2576-16f5-402f-89aa-aa68665dad0f.webp?v=1723855144"},"aspect_ratio":1.0,"height":800,"media_type":"image","src":"\/\/technoant.co\/cdn\/shop\/files\/ca6a2576-16f5-402f-89aa-aa68665dad0f.webp?v=1723855144","width":800}],
  "options": ["Color","Electrical outlet"],
  "options_with_values": {
    
      "option1": ["Green"],
    
      "option2": ["EU","UK","US"]
    
  },
  "price": 2995,
  "price_max": 2995,
  "price_min": 2995,
  "price_varies": false,
  "published_at": [42,58,7,19,5,2024,0,140,true,"CEST"],
  "requires_selling_plan": false,
  "selling_plan_groups": [],
  "tags": [],
  "title": "Ironexa™ Portable Mini Iron",
  "type": "Gadgets",
  "variants": [{"id":49194378068274,"title":"Green \/ EU","option1":"Green","option2":"EU","option3":null,"sku":"CJJT148758402BY","requires_shipping":true,"taxable":false,"featured_image":{"id":46840550883634,"product_id":9581740687666,"position":1,"created_at":"2024-08-17T02:39:02+02:00","updated_at":"2024-08-17T02:39:04+02:00","alt":null,"width":800,"height":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/890c2e92-5b72-40f9-ad4d-5e93e91aefc2_f8cb7ae9-032e-4a56-a5d9-a8dfe290ff47.jpg?v=1723855144","variant_ids":[49194378068274,49194378101042,49194378133810]},"available":true,"name":"Ironexa™ Portable Mini Iron - Green \/ EU","public_title":"Green \/ EU","options":["Green","EU"],"price":2995,"weight":400,"compare_at_price":4280,"inventory_management":"shopify","barcode":null,"featured_media":{"alt":null,"id":39188044448050,"position":1,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/890c2e92-5b72-40f9-ad4d-5e93e91aefc2_f8cb7ae9-032e-4a56-a5d9-a8dfe290ff47.jpg?v=1723855144"}},"requires_selling_plan":false,"selling_plan_allocations":[]},{"id":49194378101042,"title":"Green \/ UK","option1":"Green","option2":"UK","option3":null,"sku":"CJJT148758403CX","requires_shipping":true,"taxable":false,"featured_image":{"id":46840550883634,"product_id":9581740687666,"position":1,"created_at":"2024-08-17T02:39:02+02:00","updated_at":"2024-08-17T02:39:04+02:00","alt":null,"width":800,"height":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/890c2e92-5b72-40f9-ad4d-5e93e91aefc2_f8cb7ae9-032e-4a56-a5d9-a8dfe290ff47.jpg?v=1723855144","variant_ids":[49194378068274,49194378101042,49194378133810]},"available":true,"name":"Ironexa™ Portable Mini Iron - Green \/ UK","public_title":"Green \/ UK","options":["Green","UK"],"price":2995,"weight":400,"compare_at_price":4280,"inventory_management":"shopify","barcode":null,"featured_media":{"alt":null,"id":39188044448050,"position":1,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/890c2e92-5b72-40f9-ad4d-5e93e91aefc2_f8cb7ae9-032e-4a56-a5d9-a8dfe290ff47.jpg?v=1723855144"}},"requires_selling_plan":false,"selling_plan_allocations":[]},{"id":49194378133810,"title":"Green \/ US","option1":"Green","option2":"US","option3":null,"sku":"CJJT148758401AZ","requires_shipping":true,"taxable":false,"featured_image":{"id":46840550883634,"product_id":9581740687666,"position":1,"created_at":"2024-08-17T02:39:02+02:00","updated_at":"2024-08-17T02:39:04+02:00","alt":null,"width":800,"height":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/890c2e92-5b72-40f9-ad4d-5e93e91aefc2_f8cb7ae9-032e-4a56-a5d9-a8dfe290ff47.jpg?v=1723855144","variant_ids":[49194378068274,49194378101042,49194378133810]},"available":true,"name":"Ironexa™ Portable Mini Iron - Green \/ US","public_title":"Green \/ US","options":["Green","US"],"price":2995,"weight":400,"compare_at_price":4280,"inventory_management":"shopify","barcode":null,"featured_media":{"alt":null,"id":39188044448050,"position":1,"preview_image":{"aspect_ratio":1.0,"height":800,"width":800,"src":"\/\/technoant.co\/cdn\/shop\/files\/890c2e92-5b72-40f9-ad4d-5e93e91aefc2_f8cb7ae9-032e-4a56-a5d9-a8dfe290ff47.jpg?v=1723855144"}},"requires_selling_plan":false,"selling_plan_allocations":[]}],
  "vendor": "TechnoAnt",
  "has_only_default_variant": false
});

[];

*/
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-G9P7WZ8X2K');

(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3301295,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

(function() {
  var isLoaded = false;
  function asyncLoad() {
    if (isLoaded) return;
    isLoaded = true;
    var urls = ["https:\/\/intg.snapchat.com\/shopify\/shopify-scevent-init.js?id=95b6ef0d-42e8-4eee-bc92-76423c36f4ca\u0026shop=89b724-66.myshopify.com","\/\/cdn.shopify.com\/proxy\/93e748f54a3d67d6e9287e4a9ebf52ebe2d15d86e12e1bc9fcd21f93979b09e5\/api.goaffpro.com\/loader.js?shop=89b724-66.myshopify.com\u0026sp-cache-control=cHVibGljLCBtYXgtYWdlPTkwMA","https:\/\/cdn.shopify.com\/s\/files\/1\/0597\/3783\/3627\/files\/tptinstall.min.js?v=1718591634\u0026t=tapita-seo-script-tags\u0026shop=89b724-66.myshopify.com"];
    for (var i = 0; i < urls.length; i++) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = urls[i];
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
  };
  if(window.attachEvent) {
    window.attachEvent('onload', asyncLoad);
  } else {
    window.addEventListener('load', asyncLoad, false);
  }
})();

!function(){'use strict';const t='contact',e='account',n='new_comment',o=[[t,t],['blogs',n],['comments',n],[t,'customer']],c=[[e,'customer_login'],[e,'guest_login'],[e,'recover_customer_password'],[e,'create_customer']],r=t=>t.map((([t,e])=>`form[action*='/${t}']:not([data-nocaptcha='true']) input[name='form_type'][value='${e}']`)).join(','),a=t=>()=>t?[...document.querySelectorAll(t)].map((t=>t.form)):[];function s(){const t=[...o],e=r(t);return a(e)}const i='password',u='form_key',d=['recaptcha-v3-token','g-recaptcha-response','h-captcha-response',i],f=()=>{try{return window.sessionStorage}catch{return}},m='__shopify_v',_=t=>t.elements[u];function p(t,e,n=!1){try{const o=window.sessionStorage,c=JSON.parse(o.getItem(e)),{data:r}=function(t){const{data:e,action:n}=t;return t[m]||n?{data:e,action:n}:{data:t,action:n}}(c);for(const[e,n]of Object.entries(r))t.elements[e]&&(t.elements[e].value=n);n&&o.removeItem(e)}catch(o){console.error('form repopulation failed',{error:o})}}const l='form_type',E='cptcha';function T(t){t.dataset[E]=!0}const w=window,h=w.document,L='Shopify',v='ce_forms',y='captcha';let A=!1;((t,e)=>{const n=(g='f06e6c50-85a8-45c8-87d0-21a2b65856fe',I='https://cdn.shopify.com/shopifycloud/storefront-forms-hcaptcha/ce_storefront_forms_captcha_hcaptcha.v1.5.2.iife.js',D={infoText:'Protected by hCaptcha',privacyText:'Privacy',termsText:'Terms'},(t,e,n)=>{const o=w[L][v],c=o.bindForm;if(c)return c(t,g,e,D).then(n);var r;o.q.push([[t,g,e,D],n]),r=I,A||(h.body.append(Object.assign(h.createElement('script'),{id:'captcha-provider',async:!0,src:r})),A=!0)});var g,I,D;w[L]=w[L]||{},w[L][v]=w[L][v]||{},w[L][v].q=[],w[L][y]=w[L][y]||{},w[L][y].protect=function(t,e){n(t,void 0,e),T(t)},Object.freeze(w[L][y]),function(t,e,n,w,h,L){const[v,y,A,g]=function(t,e,n){const i=e?o:[],u=t?c:[],d=[...i,...u],f=r(d),m=r(i),_=r(d.filter((([t,e])=>n.includes(e))));return[a(f),a(m),a(_),s()]}(w,h,L),I=t=>{const e=t.target;return e instanceof HTMLFormElement?e:e&&e.form},D=t=>v().includes(t);t.addEventListener('submit',(t=>{const e=I(t);if(!e)return;const n=D(e)&&!e.dataset.hcaptchaBound&&!e.dataset.recaptchaBound,o=_(e),c=g().includes(e)&&(!o||!o.value);(n||c)&&t.preventDefault(),c&&!n&&(function(t){try{if(!f())return;!function(t){const e=f();if(!e)return;const n=_(t);if(!n)return;const o=n.value;o&&e.removeItem(o)}(t);const e=Array.from(Array(32),(()=>Math.random().toString(36)[2])).join('');!function(t,e){_(t)||t.append(Object.assign(document.createElement('input'),{type:'hidden',name:u})),t.elements[u].value=e}(t,e),function(t,e){const n=f();if(!n)return;const o=[...t.querySelectorAll(`input[type='${i}']`)].map((({name:t})=>t)),c=[...d,...o],r={};for(const[a,s]of new FormData(t).entries())c.includes(a)||(r[a]=s);n.setItem(e,JSON.stringify({[m]:1,action:t.action,data:r}))}(t,e)}catch(e){console.error('failed to persist form',e)}}(e),e.submit())}));const S=(t,e)=>{t&&!t.dataset[E]&&(n(t,e.some((e=>e===t))),T(t))};for(const o of['focusin','change'])t.addEventListener(o,(t=>{const e=I(t);D(e)&&S(e,y())}));const B=e.get('form_key'),M=e.get(l),P=B&&M;t.addEventListener('DOMContentLoaded',(()=>{const t=y();if(P)for(const e of t)e.elements[l].value===M&&p(e,B);[...new Set([...A(),...v().filter((t=>'true'===t.dataset.shopifyCaptcha))])].forEach((e=>S(e,t)))}))}(h,new URLSearchParams(w.location.search),n,t,e,['guest_login'])})(!0,!0)}();

(function () {
    var customDocumentWrite = function(content) {
      var jquery = null;

      if (window.jQuery) {
        jquery = window.jQuery;
      } else if (window.Checkout && window.Checkout.$) {
        jquery = window.Checkout.$;
      }

      if (jquery) {
        jquery('body').append(content);
      }
    };

    var hasLoggedConversion = function(token) {
      if (token) {
        return document.cookie.indexOf('loggedConversion=' + token) !== -1;
      }
      return false;
    }

    var setCookieIfConversion = function(token) {
      if (token) {
        var twoMonthsFromNow = new Date(Date.now());
        twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);

        document.cookie = 'loggedConversion=' + token + '; expires=' + twoMonthsFromNow;
      }
    }

    var trekkie = window.ShopifyAnalytics.lib = window.trekkie = window.trekkie || [];
    if (trekkie.integrations) {
      return;
    }
    trekkie.methods = [
      'identify',
      'page',
      'ready',
      'track',
      'trackForm',
      'trackLink'
    ];
    trekkie.factory = function(method) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(method);
        trekkie.push(args);
        return trekkie;
      };
    };
    for (var i = 0; i < trekkie.methods.length; i++) {
      var key = trekkie.methods[i];
      trekkie[key] = trekkie.factory(key);
    }
    trekkie.load = function(config) {
      trekkie.config = config || {};
      trekkie.config.initialDocumentCookie = document.cookie;
      var first = document.getElementsByTagName('script')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.onerror = function(e) {
        var scriptFallback = document.createElement('script');
        scriptFallback.type = 'text/javascript';
        scriptFallback.onerror = function(error) {
                var Monorail = {
      produce: function produce(monorailDomain, schemaId, payload) {
        var currentMs = new Date().getTime();
        var event = {
          schema_id: schemaId,
          payload: payload,
          metadata: {
            event_created_at_ms: currentMs,
            event_sent_at_ms: currentMs
          }
        };
        return Monorail.sendRequest("https://" + monorailDomain + "/v1/produce", JSON.stringify(event));
      },
      sendRequest: function sendRequest(endpointUrl, payload) {
        // Try the sendBeacon API
        if (window && window.navigator && typeof window.navigator.sendBeacon === 'function' && typeof window.Blob === 'function' && !Monorail.isIos12()) {
          var blobData = new window.Blob([payload], {
            type: 'text/plain'
          });

          if (window.navigator.sendBeacon(endpointUrl, blobData)) {
            return true;
          } // sendBeacon was not successful

        } // XHR beacon

        var xhr = new XMLHttpRequest();

        try {
          xhr.open('POST', endpointUrl);
          xhr.setRequestHeader('Content-Type', 'text/plain');
          xhr.send(payload);
        } catch (e) {
          console.log(e);
        }

        return false;
      },
      isIos12: function isIos12() {
        return window.navigator.userAgent.lastIndexOf('iPhone; CPU iPhone OS 12_') !== -1 || window.navigator.userAgent.lastIndexOf('iPad; CPU OS 12_') !== -1;
      }
    };
    Monorail.produce('monorail-edge.shopifysvc.com',
      'trekkie_storefront_load_errors/1.1',
      {shop_id: 87555866930,
      theme_id: 170811097394,
      app_name: "storefront",
      context_url: window.location.href,
      source_url: "//technoant.co/cdn/s/trekkie.storefront.308893168db1679b4a9f8a086857af995740364f.min.js"});

        };
        scriptFallback.async = true;
        scriptFallback.src = '//technoant.co/cdn/s/trekkie.storefront.308893168db1679b4a9f8a086857af995740364f.min.js';
        first.parentNode.insertBefore(scriptFallback, first);
      };
      script.async = true;
      script.src = '//technoant.co/cdn/s/trekkie.storefront.308893168db1679b4a9f8a086857af995740364f.min.js';
      first.parentNode.insertBefore(script, first);
    };
    trekkie.load(
      {"Trekkie":{"appName":"storefront","development":false,"defaultAttributes":{"shopId":87555866930,"isMerchantRequest":null,"themeId":170811097394,"themeCityHash":"16992929838223798132","contentLanguage":"en","currency":"USD","eventMetadataId":"20eee3dc-ed47-4366-822c-e87581bf8c7f"},"isServerSideCookieWritingEnabled":true,"monorailRegion":"shop_domain","enabledBetaFlags":["f0df213a"]},"Session Attribution":{},"S2S":{"facebookCapiEnabled":false,"source":"trekkie-storefront-renderer","apiClientId":580111}}
    );

    var loaded = false;
    trekkie.ready(function() {
      if (loaded) return;
      loaded = true;

      window.ShopifyAnalytics.lib = window.trekkie;

      var originalDocumentWrite = document.write;
      document.write = customDocumentWrite;
      try { window.ShopifyAnalytics.merchantGoogleAnalytics.call(this); } catch(error) {};
      document.write = originalDocumentWrite;

      window.ShopifyAnalytics.lib.page(null,{"pageType":"home","shopifyEmitted":true});

      var match = window.location.pathname.match(/checkouts\/(.+)\/(thank_you|post_purchase)/)
      var token = match? match[1]: undefined;
      if (!hasLoggedConversion(token)) {
        setCookieIfConversion(token);
        
      }
    });


        var eventsListenerScript = document.createElement('script');
        eventsListenerScript.async = true;
        eventsListenerScript.src = "//technoant.co/cdn/shopifycloud/storefront/assets/shop_events_listener-3da45d37.js";
        document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);

})();