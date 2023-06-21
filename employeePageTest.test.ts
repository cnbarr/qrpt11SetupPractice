import {
    Builder, 
    By, 
    Capabilities, 
    until, 
    WebDriver
} from "selenium-webdriver"; 
const chromedriver =  require('chromedriver');

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome()).build();

import {emObject} from './employeeManagerPage'
const emPage = new emObject(driver)

test("adding employee", async () => {
    await emPage.navigate();
    await emPage.click(emPage.addEmployee); 
    await emPage.click(emPage.newEmployee); 
    await emPage.click(emPage.nameInput); 
    await emPage.sendKeys(emPage.nameInput, "Homie Da Clown");
    await emPage.click(emPage.saveBtn)
    await emPage.driver.quit()
})