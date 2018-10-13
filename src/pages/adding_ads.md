---
title: Blog almost ready! Adding ads to static pages on gatsbyjs
date: "2018-09-04"
tags: testing, blog, ads, chitika, rendering scripts html
---

Testing to see if the blog works as expected by adding ads from <a href="https://chitika.com">Chitika.com</a>. All of this is done by setting html in the `<div>...</div>` tag of the post.

Code uses a property called `dangerouslySetInnerHTML` to set `__html` property of gatsbyjs and/or react ...

<!-- add placed below -->
<center>
<div>
    <script type="text/javascript">
    ( function() {
        if (window.CHITIKA === undefined) { window.CHITIKA = { 'units' : [] }; };
        var unit = {"calltype":"async[0]","publisher":"akarnawat","width":320,"height":50,"sid":"Chitika Default"};
        var placement_id = window.CHITIKA.units.length;
        window.CHITIKA.units.push(unit);
        document.write('<div id="chitikaAdBlock-' + placement_id + '"></div>');
    }());
    </script>
    <script type="text/javascript" src="//cdn.chitika.net/getads.js" async></script>
</div>
</center>

The page is then converted to a static page to become...

```html
<div>
    <script type="text/javascript">
    // function to render ad goes here
    </script>
    <script type="text/javascript" ... async></script>
</div>
```

As you can see the rendered ad appears below (or hit refresh!).

<br>