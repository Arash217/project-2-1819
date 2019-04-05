# Optimizing volkswagen.nl

## Summary
This readme contains my research on Volkswagen's website and advice on how to improve the accesibility and performance of the website.

### Table of contents
TODO

### Optimizations

#### 1. Adding Brotli compression

Most of the assets of the website are compressed with Gzip. 
To reduce the size even further, Brotli compression can be used.
I took the HTML, CSS and JavaScript files of the website, 
added Brotli compression and compared them with the Gzipped version of the website. 

##### Results

<p align="center">
  <img src="https://github.com/Arash217/project-2-1819/blob/master/docs/images/1.png">
</p>

Note: I only took three files, to show the difference between Gzip and Brotli compression. 
The website still has other files that can be compressed with Brotli.

#### 2. Minifying and compressing SVG files

The SVG files of the website aren't minified or compressed. 
Minifying them and adding Gzip and/or Brotli compression can be used to further reduce the sizes of the SVG files.

##### Results

<p align="center">
  <img src="https://github.com/Arash217/project-2-1819/blob/master/docs/images/2.png">
</p>

Note: I only took the SVG files on the homepage to minify and compress.
I didn't test the SVG files on the other pages.

#### 3. WebP images

The images on the website are mostly jpg, with the exception of some png, gif and svg.
Converting these images to WebP can reduce the size significantly.

##### Results

<p align="center">
  <img src="https://github.com/Arash217/project-2-1819/blob/master/docs/images/3.png">
</p>

Note: I only took the JPG and PNG images on the homepage to convert to WebP.
I didn't test the images on the other pages.

#### 4. FOIT

The website uses a custom font which is applied when it's loaded.
However, because of this loading, the text will be invisible until the custom font is loaded, causing Flash of Invisible Text (FOIT).

##### Original

<p align="center">
  <img src="https://github.com/Arash217/project-2-1819/blob/master/docs/images/foit.gif">
</p>

##### Fix

This issue can be solved by adding 'font-display: swap;' to all '@font-face' rules.

```diff
@font-face {
    font-family: VWHeadWeb;
    src: url(../../../Fonts/VW-PKW/VWHeadWeb-Light.woff2) format("woff2"), 
         url(../../../Fonts/VW-PKW/VWHeadWeb-Light.woff) format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
...
```

This, however caused the anchor tags to be unstyled until the CSS file was loaded.
I solved this issue by adding an inline style:

```diff
<style>
a {
  color: #41494c;
}
</style>
```

It also could have been in a separate CSS file but I didn't test this.

##### Result

<p align="center">
  <img src="https://github.com/Arash217/project-2-1819/blob/master/docs/images/foit-fix.gif">
</p>

##### Reflow

While 'font-display: swap;' works, 
it might cause reflow, since the fallback font family and the custom font family have different font sizes.
This issue can be solved by making sure that the font sizes match. 
[Font style matcher](https://meowni.ca/font-style-matcher/) for example, can be used for this.

#### 5. Service Worker

TODO

##### Results

TODO

## Licence
MIT © [Arash Paknezad](https://github.com/Arash217)
