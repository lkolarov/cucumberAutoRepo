package com.basic.multiSD;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class GoogleStepDef {

	
WebDriver driver;
	
	@Given("^User needs to be on google page$")
	public void user_needs_to_be_on_google_page() {
		
		System.setProperty("webdriver.gecko.driver", "C:\\CucumberSetup\\geckodriver-v0.26.0-win64\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://www.google.com/");
		
	}
	
	@When("^User enters search string$")
	public void user_enters_search_string() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input")).sendKeys("selenium");
		Thread.sleep(1000);
	}
	
}
