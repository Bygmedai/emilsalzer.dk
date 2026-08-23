const markdownIt = require("markdown-it");

/** Sorteringsår. «2020–2022» sorteres på 2022 — sidste årstal i teksten. */
function aarTal(data) {
  if (typeof data.listYear === "number") return data.listYear;
  const fundne = String(data.year ?? "").match(/\d{4}/g);
  return fundne ? Number(fundne[fundne.length - 1]) : 0;
}

module.exports = function(eleventyConfig) {
  // Markdown: breaks:true så enkelt linjeskift → <br> (kritisk for poesi)
  const md = markdownIt({ html: true, breaks: true });
  eleventyConfig.setLibrary("md", md);

  // Poesi collection sorted by order field
  eleventyConfig.addCollection("poesi", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/poesi/*.md")
      .sort((a, b) => (a.data.order || 99) - (b.data.order || 99));
  });

  // Bøgerne. Én bog = én fil i src/boeger/. Oversigten på /boeger/ bygges
  // AF denne samling — Emil skriver altså bogen ét sted, ikke to.
  // «udkast: true» holder en bog ude af sitet, indtil teksten er skrevet.
  eleventyConfig.addCollection("boeger", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/boeger/*.md")
      .filter((b) => b.data.udkast !== true)
      .sort((a, b) => aarTal(b.data) - aarTal(a.data));
  });

  // Noten under et digt skal kunne indeholde links. Den skrives i markdown
  // og renderes her — uden <p> udenom, så den bliver i sin egen linje.
  eleventyConfig.addFilter("markdownInline", (v) => v ? md.renderInline(String(v)) : "");

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/sitemap.xml": "sitemap.xml" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
