$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/veera/Downloads/argos-bdd/BDDFramework/src/test/java/Feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM Login feature",
  "description": "",
  "id": "freecrm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "FreeCRM Login Test Scenario",
  "description": "",
  "id": "freecrm-login-feature;freecrm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 11879321621,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 24267502,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 260104332,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4953268481,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 16036360,
  "status": "passed"
});
});