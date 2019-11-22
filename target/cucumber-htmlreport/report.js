$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MultipleScenarioFF.feature");
formatter.feature({
  "line": 1,
  "name": "Create an account in Facebook",
  "description": "As a user you need to open Facebook home page and do the validations",
  "id": "create-an-account-in-facebook",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate First Name field",
  "description": "",
  "id": "create-an-account-in-facebook;validate-first-name-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User needs to be on the Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters first name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User checks if first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MultipleScenarioStepDef.user_needs_to_be_on_the_Facebook_login_page()"
});
formatter.result({
  "duration": 6414861500,
  "status": "passed"
});
formatter.match({
  "location": "MultipleScenarioStepDef.user_enters_first_name()"
});
formatter.result({
  "duration": 1069837500,
  "status": "passed"
});
formatter.match({
  "location": "MultipleScenarioStepDef.user_checks_if_first_name_is_present()"
});
formatter.result({
  "duration": 1052636700,
  "status": "passed"
});
formatter.match({
  "location": "MultipleScenarioStepDef.close_browser()"
});
formatter.result({
  "duration": 1591555100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate create user multiple fields",
  "description": "",
  "id": "create-an-account-in-facebook;validate-create-user-multiple-fields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User needs to be on the Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters first name",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters surname",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User checks if first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User mobile number field should be blank",
  "keyword": "But "
});
formatter.step({
  "line": 17,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MultipleScenarioStepDef.user_needs_to_be_on_the_Facebook_login_page()"
});
formatter.result({
  "duration": 4368139900,
  "status": "passed"
});
formatter.match({
  "location": "MultipleScenarioStepDef.user_enters_first_name()"
});
formatter.result({
  "duration": 1053292000,
  "status": "passed"
});
formatter.match({
  "location": "MultipleScenarioStepDef.user_enters_surname()"
});
formatter.result({
  "duration": 25606900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //input[@id\u003d\u0027u_0_s\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DESKTOP-EM5FD9K\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\FLABON-W530-GOLD\\AppData\\Local\\Temp\\rust_mozprofileS4LsW3, rotatable\u003dfalse, moz:geckodriverVersion\u003d0.26.0, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d68.0.2, moz:shutdownTimeout\u003d60000, platformVersion\u003d10.0, moz:processID\u003d12832, browserName\u003dfirefox, moz:buildID\u003d20190813150448, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: 6878b7b1-68d6-40bd-98c2-0c18ce77fa7e\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027u_0_s\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:513)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat com.basic.multiplescenarioSD.MultipleScenarioStepDef.user_enters_surname(MultipleScenarioStepDef.java:44)\r\n\tat ✽.And User enters surname(MultipleScenarioFF.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MultipleScenarioStepDef.user_checks_if_first_name_is_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MultipleScenarioStepDef.user_mobile_number_field_should_be_blank()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MultipleScenarioStepDef.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});