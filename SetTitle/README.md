# SetTitle
_One framework. One place to define your website name. Instant changes to its content. Everywhere you define._

SetTitle is a simple but powerful framework that can easily rename your website. You only need to define the website's name and where it appears. Once you change the name your website instantly is updated to display the new title.

## How to implement
Code your normal HTML and add following line **at the end of your _body_ tag:**
```HTML
<script src="https://os-scratch.github.io/ScriptTools/SetTitle/SetTitle.js"></script>
<body />
_rest of the code goes here_
```
Then, modify your website's title as following:
```HTML
<h1 id="WebTitle">your site name goes here</h1>
````
Add the **_class="WebsiteName"_** attribute to everywhere you want your title to appear. Save your file and watch your website title change instantly!

## Why SetTitle?
Imagine a big company named TestHub is changing their website name on their website, in which the name appears 100 times. Sure, they could use Find and Replace, but then they would still have manually press Replace. With SetTitle installed, they just need to change their h1 tag or wherever their website name is defined and they're ready to go!

SetTitle also constantly receives updates, upgrading it with better functions and increasing the stability.

## Version History
v1.0 (current): Initial release.
