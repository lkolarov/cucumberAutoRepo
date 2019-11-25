package com.basic.multiSD;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class DemoStepDef {

WebDriver driver;
	
	@Given("^User needs to be on demo site page$")
	public void user_needs_to_be_on_demo_page() {
		
		System.setProperty("webdriver.gecko.driver", "C:\\CucumberSetup\\geckodriver-v0.26.0-win64\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("http://demo.automationtesting.in/Register.html");
		
	}
	
	@When("^User enters first name$")
	public void user_enters_first_name() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"basicBootstrapForm\"]/div[1]/div[1]/input")).sendKeys("Tom");
		Thread.sleep(1000);
	}
	
	@When("^User enters last name$")
	public void user_enters_last_name() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"basicBootstrapForm\"]/div[1]/div[2]/input")).sendKeys("Jerry");
		Thread.sleep(1000);
	}
	
}
