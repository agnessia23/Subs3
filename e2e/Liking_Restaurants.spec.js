const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/Favorites');
  });

Scenario('showing empty liked restaurants', ({ I }) => {
   //I.seeElement('#query');
   //I.see('There is no Favorit restaurant yet');
   I.waitForElement('.empty-resto-text');
   I.see('There is no Favorit restaurant yet', '.empty-resto-text');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForElement('.empty-resto-text', 5);
  I.see('There is no Favorit restaurant yet', '.empty-resto-text');

  I.amOnPage('#/list-restaurants');
  I.waitForElement('.restaurant-item-name', 10);
  I.seeElement('.restaurant-item-name');

  const firstRestaurants = locate('.restaurant-item-name').first();
  const firstRestaurantsTitle = await I.grabTextFrom(firstRestaurants);
  I.click(firstRestaurants);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  const likedRestaurantsTitle = await I.grabTextFrom('.restaurant-detail-name');

  assert.strictEqual(firstRestaurantsTitle, likedRestaurantsTitle);
});

Scenario('searching restaurants', async ({ I }) => {
  I.waitForElement('.empty-resto-text', 5);
  I.see('There is no Favorit restaurant yet', '.empty-resto-text');
 
  I.amOnPage('#/list-restaurants');
  I.waitForElement('.restaurant-item-name', 10);
  I.seeElement('.restaurant-item-name');
 
  const titles = [];
 
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant-item-name').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    titles.push(await I.grabTextFrom('.restaurant-detail-name'));
    I.amOnPage('/');
  }
 
  I.amOnPage('/#/favorites');
  I.seeElement('#query');
});