---
title: Blog almost ready! Adding ads to static pages on gatsbyjs
date: "2018-09-04"
tags: testing, blog, ads, chitika, rendering scripts html
---

Testing to see if the blog works as expected by adding ads from <a href="https://chitika.com">Chitika.com</a>. All of this is done by setting html in the `<div>...</div>` tag of the post.

Code fragment looks something like this below for rendering with gatsbyjs and react ...

```html
<div style={{height: '250px', width: '500px'}} 
    dangerouslySetInnerHTML={{
        __html: `   
                    var world = "world";
                    console.log("hello " + world);

                    // <script>
                    //      {{code for ads go here}}
                    // </script>
                `
    }}>
</div>
```

As you can see the rendered ad appears below (or hit refresh!).

<br/><br/>
<!-- add placed below -->
<div style="height: 250px; weight:550px;">
    <script type="text/javascript">
        ( function() {
        if (window.CHITIKA === undefined) { window.CHITIKA = { 'units' : [] }; };
        var unit = {"calltype":"async[2]","publisher":"akarnawat","width":550,"height":250,"sid":"Chitika Default"};
        var placement_id = window.CHITIKA.units.length;
        window.CHITIKA.units.push(unit);
        document.write('<div id="chitikaAdBlock-' + placement_id + '"></div>');
        }());
    </script>
    <script type="text/javascript" src="//cdn.chitika.net/getads.js" async></script>
</div>