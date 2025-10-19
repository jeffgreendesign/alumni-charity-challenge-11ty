const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {

  // Ignore CLAUDE.md to prevent Liquid syntax processing
  eleventyConfig.ignores.add("CLAUDE.md");

  eleventyConfig.addPassthroughCopy("bundle.css");
	eleventyConfig.addPassthroughCopy("main.js");
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addTransform("htmlmin", function(content) {
    // Prior to Eleventy 2.0: use this.outputPath instead
    if( this.page.outputPath && this.page.outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });
};