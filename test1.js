// Tethr coding interview practice

describe("Test on Tethr Webpage", function(){
    //This allows to practor run on regular websites and not specific to Angular
    browser.ignoreSynchronization = true;
    it("\t Test 1 : Navigate to Tethr webpage and verify the URL", function(){
        browser.get("https://tethr.com/");
        expect(browser.getCurrentUrl()).toEqual('https://tethr.com/');
    });

    it("\t Test 2 : Print the Title on the webpage", function(){
        browser.getTitle().then(function(Title){
            console.log("\t Title on the webpage present: ", Title);
        })
    });

    it("\t Test 3 : Verify the copyright at the footer", function(){
        browser.findElement(by.css('p.copyright')).getText().then(function(Copyright){
            console.log("\t Copyright on the webpage present: ", Copyright);
        })
    });
     it("\t Test 4 : To verify if the video is present", function(){
        browser.findElement(by.id('hero-video')).isDisplayed().then(function(){
            console.log("\t Video is present on the page");
        })
    });
    it("\t Test 5 : Click on contact and fill the form", function(){
        browser.findElement(by.linkText('Contact')).click();
        browser.sleep(1000);
        browser.findElement(by.id('contact-firstname')).sendKeys('AmrutaTest');
        browser.findElement(by.id('contact-lastname')).sendKeys('LastnameTest');
        browser.sleep(5000);
    });

});