import fetch from "node-fetch";
import json_report from "../../reports/mochareports/report.json" assert { type: "json" };
// console.log(json_report.results[0].suites);

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth()).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
console.log(mm);
today = mm + "/" + dd + "/" + yyyy;

const text = `#### Test Results for Aeon Project as of ${today}\n@Channel please review failed tests. \n\n| Test Cases Name  | Total Tests Run   | Tests Failed  |\n|:-----------|:-----------:|:-----------------------------------------------|\n|  Aeon Automation| :white_check_mark: ${json_report.stats.tests} | :warning:  ${json_report.stats.failures} |\n|`;

const messageBody = {
  text: text,
};

console.log(text);

// this will hit api for webhooks and will send message about failed and passed test cases to mattermost channel.

// let response = fetch(
//   "https://ekbana.letsperk.com/hooks/7oo4ta4kotnwxfn691nzcj5hqe",
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;",
//     },
//     body: JSON.stringify(messageBody),
//   }
// );

// let result = response;
// console.log(result);
