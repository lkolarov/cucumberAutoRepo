$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TagsFF.feature");
formatter.feature({
  "line": 2,
  "name": "Create an account in Facebook12",
  "description": "As a user you need to open Facebook home page and do the validations",
  "id": "create-an-account-in-facebook12",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Important"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Validate First Name field121",
  "description": "",
  "id": "create-an-account-in-facebook12;validate-first-name-field121",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User needs to be on the Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \"David\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User checks \"David\" if first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsStepDef.user_needs_to_be_on_the_Facebook_login_page()"
});
formatter.result({
  "duration": 4467214500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 13
    }
  ],
  "location": "TagsStepDef.user_enters_first_name(String)"
});
formatter.result({
  "duration": 1047881700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 13
    }
  ],
  "location": "TagsStepDef.user_checks_if_first_name_is_present(String)"
});
formatter.result({
  "duration": 1042599200,
  "status": "passed"
});
formatter.match({
  "location": "TagsStepDef.close_browser()"
});
formatter.result({
  "duration": 1527240300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate create user multiple fields123",
  "description": "",
  "id": "create-an-account-in-facebook12;validate-create-user-multiple-fields123",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Smoke"
    },
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User needs to be on the Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User enters \"Ryan\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters \"Jack\" surname",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User checks \"Ryan\" if first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User mobile number field should be blank",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsStepDef.user_needs_to_be_on_the_Facebook_login_page()"
});
formatter.result({
  "duration": 4373820700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ryan",
      "offset": 13
    }
  ],
  "location": "TagsStepDef.user_enters_first_name(String)"
});
formatter.result({
  "duration": 1046937400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jack",
      "offset": 13
    }
  ],
  "location": "TagsStepDef.user_enters_surname(String)"
});
formatter.result({
  "duration": 1052897400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ryan",
      "offset": 13
    }
  ],
  "location": "TagsStepDef.user_checks_if_first_name_is_present(String)"
});
formatter.result({
  "duration": 1036425400,
  "status": "passed"
});
formatter.match({
  "location": "TagsStepDef.user_mobile_number_field_should_be_blank()"
});
formatter.result({
  "duration": 1037440000,
  "status": "passed"
});
formatter.match({
  "location": "TagsStepDef.close_browser()"
});
formatter.result({
  "duration": 1705472000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Validate First Name field125",
  "description": "",
  "id": "create-an-account-in-facebook12;validate-first-name-field125",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User needs to be on the Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User enters \"David\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User checks \"David\" if first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsStepDef.user_needs_to_be_on_the_Facebook_login_page()"
});
formatter.result({
  "duration": 4329546500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 13
    }
  ],
  "location": "TagsStepDef.user_enters_first_name(String)"
});
formatter.result({
  "duration": 8839600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //*[@id\u003d\"u_0_o\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DESKTOP-EM5FD9K\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\FLABON-W530-GOLD\\AppData\\Local\\Temp\\rust_mozprofile0yENgd, rotatable\u003dfalse, moz:geckodriverVersion\u003d0.26.0, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d68.0.2, moz:shutdownTimeout\u003d60000, platformVersion\u003d10.0, moz:processID\u003d10604, browserName\u003dfirefox, moz:buildID\u003d20190813150448, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: 7b585fad-f130-4e55-8784-fb3c217fdcd8\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"u_0_o\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:513)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat com.basic.tagsSD.TagsStepDef.user_enters_first_name(TagsStepDef.java:30)\r\n\tat ✽.When User enters \"David\" first name(TagsFF.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 13
    }
  ],
  "location": "TagsStepDef.user_checks_if_first_name_is_present(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TagsStepDef.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "Validate First Name field126",
  "description": "",
  "id": "create-an-account-in-facebook12;validate-first-name-field126",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User needs to be on the Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User enters \"David\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User checks \"David\" if first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TagsStepDef.user_needs_to_be_on_the_Facebook_login_page()"
});
formatter.result({
  "duration": 4346797400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 13
    }
  ],
  "location": "TagsStepDef.user_enters_first_name(String)"
});
formatter.result({
  "duration": 1117083000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 13
    }
  ],
  "location": "TagsStepDef.user_checks_if_first_name_is_present(String)"
});
formatter.result({
  "duration": 1018824000,
  "status": "passed"
});
formatter.match({
  "location": "TagsStepDef.close_browser()"
});
formatter.result({
  "duration": 1572047300,
  "status": "passed"
});
});