module.exports = function(browser) {
    this.navigateToSpreetail = function() {
        // Browser is the browser that is being controlled
        browser
          .windowMaximize()
          .url('https://www.spreetail.com') // Navigate to the url
          .waitForElementVisible('body', 3000) // Wait until you can see the body element.
          .pause(2000)
        };
        
     this.addToCart = function (){
       browser
       .elementIdClick('#navigation-item2')
        .click('#navigation-item2 > a')
        .verify.title('Indoor Living | Spreetail')
        .pause(3000)
        .click('#app-main > div > div > div > div:nth-child(3) > div > div.grid__Row-sc-1rvvwtq-0.ProductList__ProductRow-sc-1rxzon9-3.hexzbD > div.grid__Column-sc-1rvvwtq-1.eiZcIj > div > a:nth-child(1) > div > div.ProductCard__ProductCardImageContainer-sc-1ihkjx9-1.iMmmpK > div > picture > img')
        .pause(2000)
        .click('#app-main > div > div > div:nth-child(2) > div.grid__Column-sc-1rvvwtq-1.jZaCSu > div > button')
        .pause(2000)
        .click('#app > div > div.Modal__ModalWrapper-sc-3a57sb-0.cLjvaA > div.spree-modal-card.cart-card > div > footer > a > button')
        .pause(2000)

      };   
    return this;
        
  }

    