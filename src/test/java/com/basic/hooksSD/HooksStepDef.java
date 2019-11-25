package com.basic.hooksSD;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HooksStepDef {

	WebDriver driver = null;
	
	@Before(order=1)
	public void beforeSetup1() {
		System.out.println("in Before1");
		System.setProperty("webdriver.gecko.driver", "C:\\CucumberSetup\\geckodriver-v0.26.0-win64\\geckodriver.exe");
		driver = new FirefoxDriver();
	}
	
	@Before(order=2)
	public void beforeSetup2() {
		System.out.println("in Before2");
		
	}
	
	@Given("^User needs to be on the Facebook login page$")
	public void user_needs_to_be_on_the_Facebook_login_page() {
		driver.get("https://www.facebook.com/");
		
	}
	
	@When("^User enters \"([^\"]*)\" first name$")
	public void user_enters_first_name(String userName) throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"u_0_o\"]")).sendKeys(userName);
		Thread.sleep(1000);
		
	}
	
	@Then("^User checks \"([^\"]*)\" if first name is present$")
	public void user_checks_if_first_name_is_present(String userName) throws InterruptedException {
		String userNameActual = driver.findElement(By.xpath("//*[@id=\"u_0_o\"]")).getAttribute("value");
		Assert.assertEquals(userName, userNameActual);
		Thread.sleep(1000);
	}
	
	@And("^User enters \"([^\"]*)\" surname$")
	public void user_enters_surname(String surName) throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"u_0_q\"]")).sendKeys(surName);
		Thread.sleep(1000);
	}
	
	@Then("^User mobile number field should be blank$")
	public void user_mobile_number_field_should_be_blank() throws InterruptedException {
		String mobileNumberActual = driver.findElement(By.xpath("//*[@id=\"u_0_t\"]")).getAttribute("value");
		Assert.assertEquals("", mobileNumberActual);
		Thread.sleep(1000);
	}
	
//	@Then("^close browser$")
//	public void close_browser() {
//		driver.quit();
//		driver = null;
//	}
	
	@After(order=2)
	public void tearDown1() {
		System.out.println("in After1");
		driver.quit();
		driver = null;
	}
	
	@After(order=1)
	public void tearDown2() {
		System.out.println("in After2");
	}
	
}
