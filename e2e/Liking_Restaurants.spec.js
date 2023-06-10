Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/like');
  });

Scenario('showing empty liked restaurants', ({ I }) => {
    //I.seeElement('#query');
    I.see('There is no Favorit restaurant yet');
});
