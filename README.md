# Optimizing volkswagen.nl

## Summary
Research of Volkswagen's website to improve the accesibility and performance. 
This readme contains the research of the website and advice on how to improve it.

### Table of contents
TODO

### Optimizations

#### 1. Adding brotli compression

Most of the assets of the website are compressed with gzip. 
To reduce the size even further, Brotli compression can be used.
I took the HTML, CSS and JavaScript files of the website, 
added brotli compression and compared the files with the gzipped version of the website.

##### Results

![brotli-compression](../master/docs/images/1.png)
