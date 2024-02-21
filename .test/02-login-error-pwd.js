// carreguem les llibreries
const { BaseCordovaTest } = require("./BaseCordovaTest.js")
const { By, until } = require("selenium-webdriver");
const assert = require('assert');

// heredem una classe amb un sol mètode test()
// emprem this.driver per utilitzar Selenium

class MyTest extends BaseCordovaTest
{
	async test() {
        // testejem LOGIN INCORRECTE usuari predefinit
        //////////////////////////////////////////////////////
        await this.driver.get("http://localhost:8000/browser/www/");
        await this.driver.findElement(By.id("usuari")).sendKeys("ieti");
        await this.driver.findElement(By.id("contrasenya")).sendKeys("h378h8327g");
        await this.driver.findElement(By.xpath("//button[text()='Login']")).click();

        // comprovem que l'alert message és ERRONI
        await this.driver.wait(until.alertIsPresent(),2000,"ERROR TEST: després del login ha d'aparèixer un alert amb el resultat de la validació de la contrasenya.");
        let alert = await this.driver.switchTo().alert();
        let alertText = await alert.getText();
        let assertMessage = "Login incorrecte";
        assert(alertText==assertMessage,"ERROR TEST: l'usuari ieti/h378h8327g hauria de fallar amb el missatge '"+assertMessage+"' en un alert.");
        await alert.accept();

        console.log("TEST OK");
	}
}

// executem el test

(async function test_example() {
	const test = new MyTest();
	await test.run();
	console.log("END")
})();

