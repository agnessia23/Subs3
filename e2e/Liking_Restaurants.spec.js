const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorites');
  });

Scenario('showing empty liked restaurants', ({ I }) => {
   //I.seeElement('#query');
    I.see('There is no Favorit restaurant yet');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('There is no Favorit restaurant yet');
  
  I.amOnPage('/');

  I.waitForElement('.restaurant-item-name');
  I.see('.restaurant-item-name');

  const firstRestaurants = locate('.restaurant-item-name').first();
  const firstRestaurantsTitle = await I.grabTextFrom(firstRestaurants);
  I.click(firstRestaurants);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  const likedRestaurantsTitle = await I.grabTextFrom('.restaurant-item-name');

  assert.strictEqual(firstRestaurantsTitle, likedRestaurantsTitle);
  

  // … kita akan mengisi uji coba berikutnya …
});
