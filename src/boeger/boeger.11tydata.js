/**
 * Fælles data for alle bøger i src/boeger/.
 * En bog med «udkast: true» får hverken en side eller en plads i oversigten.
 * Det er sikkerhedsnettet: en halvfærdig bog kan ikke nå ud på sitet ved et uheld.
 */
module.exports = {
  eleventyComputed: {
    permalink: (data) => (data.udkast === true ? false : data.permalink),
    eleventyExcludeFromCollections: (data) => data.udkast === true,
  },
};
