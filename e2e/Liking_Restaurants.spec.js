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
  const firstResto = locate('.restaurant-item-name').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.waitForElement('.restaurant-item-name');
  I.seeElement('.restaurant-item');
  const likedRestoTitle = await I.grabTextFrom('.restaurant-item-name');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
  // … kita akan mengisi uji coba berikutnya …
});
