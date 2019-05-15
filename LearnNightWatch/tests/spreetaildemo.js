var pom = require('../pages/pageobjmodel');

module.exports = {
    '@tags' : ['demo'],

    before : function(browser){
      pom(browser).navigateToSpreetail();
    },
     'Title Test': function(browser) {
      // Browser is the browser that is being controlled
      browser
        .verify.title('Spreetail | Shop Online for Your Home, Backyard, Garage and More') // Verify that the title is 'Spreetail | Shop Online for Your Home, Backyard, Garage and More'
        .pause(2000)
      },

       'Footer Test' : function(browser){
          browser
            .assert.containsText('#app > div > footer > div > div > div.Typography__DivText-rz6iur-5.Typography__SBodyDiv-rz6iur-26.Footer__Appendix-sc-1wzs9u1-3.YeuSg > span:nth-child(1)', '© 2019 Spreetail Inc. All rights reserved.')
      }, 

      'Add To Cart' : function(browser){
        pom(browser).addToCart();
    }, 

    after : function(browser){
      browser
          .pause(5000)
          .end()
    },
      
  }