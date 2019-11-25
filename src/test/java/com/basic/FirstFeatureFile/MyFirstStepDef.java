package com.basic.FirstFeatureFile;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyFirstStepDef {

	WebDriver driver;
	
	@Given("^User needs to be on the Facebook login page$")
	public void user_needs_to_be_on_the_Facebook_login_page() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\CucumberSetup\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");
		
	}
	
	@When("^User enters first name$")
	public void user_enters_first_name() {
		
		driver.findElement(By.xpath("//*[@id=\"u_0_o\"]")).sendKeys("David");
		
	}
	
	@Then("^User checks if first name is present$")
	public void user_checks_if_first_name_is_present() {
		String userNameActual = driver.findElement(By.xpath("//*[@id=\"u_0_o\"]")).getAttribute("value");
		Assert.assertEquals("David", userNameActual);
	}
	
}
