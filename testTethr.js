
//Test for Login password demo

describe ("Test for Tethr Automation", function(){
    it("Send email and password for Sign in", function(){
        browser.get('https://qetest.labs.tethr.io');
        var userName = element(by.id('login__input_userName')).click();
        userName.sendKeys("apitestuser@collabip.com");
        var password = element(by.id('login__input_password')).click();
        password.sendKeys("password123");
        browser.sleep(5000);
        element(by.id('login__button_login')).click();
        browser.sleep(1000);
        //Check if invalid message prompts
        element(by.css("div.red")).getText().then(function(errortext){
            console.log(errortext);
        });
    });  

});