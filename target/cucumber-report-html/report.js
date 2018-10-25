$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Employee.feature");
formatter.feature({
  "line": 1,
  "name": "Employee",
  "description": "Responsible for verfiying Benefits, Create Employee,\r\nDelete employee and check if the functionality works",
  "id": "employee",
  "keyword": "Feature"
});
formatter.before({
  "duration": 23386037917,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Create Employee with all details",
  "description": "",
  "id": "employee;create-employee-with-all-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I ensure application opened",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click login link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter UserName and Password",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 10
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click employeeList link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click createnew button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I enter following details",
  "rows": [
    {
      "cells": [
        "Name",
        "Salary",
        "DurationWorked",
        "Grade",
        "Email"
      ],
      "line": 16
    },
    {
      "cells": [
        "AutoUser",
        "4000",
        "30",
        "1",
        "autouser@ea.com"
      ],
      "line": 17
    },
    {
      "cells": [
        "AutoUser2",
        "5000",
        "40",
        "1",
        "autouser@ea.com"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click create button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iEnsureApplicationOpened()"
});
formatter.result({
  "duration": 1376452492,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickLoginLink()"
});
formatter.result({
  "duration": 902786975,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterUserNameAndPassword(DataTable)"
});
formatter.result({
  "duration": 110515559,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickLoginButton()"
});
formatter.result({
  "duration": 1679826372,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeSteps.iClickEmployeeListLink()"
});
formatter.result({
  "duration": 609955058,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeSteps.iClickCreatenewButton()"
});
formatter.result({
  "duration": 436817150,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeSteps.iEnterFollowingDetails(DataTable)"
});
formatter.result({
  "duration": 164615868,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeSteps.iClickCreateButton()"
});
formatter.result({
  "duration": 22218786,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature is responsible for testing all the scenarios for Login of application",
  "id": "loginfeature",
  "keyword": "Feature"
});
});