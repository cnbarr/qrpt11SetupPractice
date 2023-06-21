import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver
} from 'selenium-webdriver'; 
import { threadId } from 'worker_threads';

const chromedriver = require('chromedriver');


 export class emObject {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
    //LOCATORS
      header: By = By.css('.titleText');
      addEmployee: By= By.xpath('//li[@name="addEmployee"]');
      newEmployee: By = By.css('[name="employee11"]');
      nameInput: By = By.name('nameEntry');
      phoneInput: By = By.name('phoneEntry');
      titleInput: By = By.name('titleEntry');
      saveBtn: By = By.id('saveBtn')

      constructor(driver:WebDriver) {
          this.driver = driver 
      }

      async navigate() {
          await this.driver.get(this.url);
          await this.driver.wait(until.elementLocated(this.header))
      }; 
      async click(elementBy: By) {
          await this.driver.wait(until.elementLocated(elementBy));
          return (await this.driver.findElement(elementBy)).click()
      }
      async sendKeys(elementBy: By, keys) {
          await this.driver.wait(until.elementLocated(elementBy))
          await this.driver.findElement(elementBy).clear()
          return this.driver.findElement(elementBy).sendKeys(keys)
      }
      async getText(elementBy) {
          await this.driver.wait(until.elementLocated(elementBy))
          return this.driver.findElement(elementBy).getText()
      }
}