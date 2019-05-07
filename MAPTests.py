from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome(executable_path='/usr/local/bin/chromedriver')
driver.get('http://www.thisismap.com/')
#Test 1 : Verify the Title
try:
    assert 'Behavioral Health Population Management | MAP Health Management' in driver.title
    print("Test 1 : Check Title on the page : PASS") 
except Exception as e:
    print("Test 1 : Check Title on the page : FAIL",format(e))

#Test 2 : Verify the contact link present
try:
    ConatctLink = driver.find_element_by_link_text('Contact')
    print('Test 2 : Verify contact link prensence on the home page : PASS')
except Exception as e:
    print("Test 2 : Verify contact link prensence on the home page : FAIL",format(e))

driver.find_element_by_link_text('Contact').click()
#wait for page to load
wait = WebDriverWait(driver,10)
driver.switch_to.frame(driver.find_element_by_xpath('//*[@id="HTMLBlock5964"]/iframe'))
driver.find_element_by_css_selector(".submit>input").click()
wait = WebDriverWait(driver,10)

#Test 3 : When no data in form, test form validation
errMsg = driver.find_element_by_xpath('//*[@id="pardot-form"]/p[1]').text;
#wait for some time to load the page
wait = WebDriverWait(driver,10)
if errMsg == 'Please correct the errors below:':
    print("Test 3 : Empty form error message appears on submit : PASS")
else:
    print ("Test 3 : Empty form error message appears on submit : FAIL")
    
#send key input to form fields 
FirstName = driver.find_element_by_xpath('//*[@id="188422_3176pi_188422_3176"]')
FirstName.send_keys('TestDataFN')
LastName = driver.find_element_by_xpath('//*[@id="188422_3178pi_188422_3178"]')
LastName.send_keys('TestDataLN')
Email = driver.find_element_by_xpath('//*[@id="188422_3180pi_188422_3180"]')
Email.send_keys('test@email.com')
Company = driver.find_element_by_xpath('//*[@id="188422_3182pi_188422_3182"]')
Company.send_keys('TestCompany')
NoEmployees = driver.find_element_by_xpath('//*[@id="188422_7040pi_188422_7040"]')
for option in NoEmployees.find_elements_by_tag_name('option'):
    if option.text == '1-10':
        option.click()
        
JobFunction = driver.find_element_by_xpath('//*[@id="188422_7036pi_188422_7036"]')
for option in JobFunction.find_elements_by_tag_name('option'):
    if option.text == 'Board Member':
        option.click()
        
PhoneNo = driver.find_element_by_xpath('//*[@id="188422_3184pi_188422_3184"]')
PhoneNo.send_keys('TestPhoneNumber')
State = driver.find_element_by_xpath('//*[@id="188422_3340pi_188422_3340"]')
for option in State.find_elements_by_tag_name('option'):
    if option.text == 'Texas':
        option.click()
        
Inquiry = driver.find_element_by_xpath('//*[@id="188422_3186pi_188422_3186"]')
for option in Inquiry.find_elements_by_tag_name('option'):
    if option.text == 'General Inquiry':
        option.click()

driver.find_element_by_css_selector(".submit>input").click()
#wait for some time to load the page
wait = WebDriverWait(driver,10)

ThankyouTag = driver.find_element_by_tag_name('h1').text
if ThankyouTag == 'Thank you!':
    print ("Test 4 : Form validation alphanumeric phone number: FAIL")
else:
    print ("Test 4 : Form validation alphanumeric phone number: PASS")

    

