module.exports = {
    '@tags': ['demo1'],
  
    'Naviaget to Spreetail' : function (browser) {
      browser
        .url('https://www.spreetail.com/')
        .waitForElementPresent('body', 1000)
        .pause(5000)
        .click('[data-id="shop-for-menu"]')
        .click('[data-value="Lawn & Garden"]')
        .pause(2000)
        .click('[data-value="Gardening"]')
        .pause(1000)
        .assert.containsText('#app-main > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > h1','Gardening')
        .click('[data-id="product-link"]:nth-child(1)')
        .assert.visible('[data-id="product-title"]')
        .end()
    },
  
    
  };