import json_report from "../../reports/mochareports/report.json" assert { type: "json" };
import fetch from "node-fetch";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

const text = `#### Test results for Aeon Automation as of ${today}\n@channel please review failed tests. \n\n| Test Cases Name  | Test Passed   | Test Failed  | Test Pending | Test Skipped | Test Duration |\n|:-----------|:-----------|:-----------|:-----------|:-----------|:-----------------|\n`;

const arr = [];

json_report.results.map((data) => {
  data.suites.map((dat) => {
    arr.push(
      `|${dat.title}| :white_check_mark: ${dat.passes.length} | :x:   ${
        dat.failures.length
      } | :pending: ${dat.pending.length} |:skip: ${
        dat.skipped.length
      }| :stopwatch: ${dat.duration / 1000} ms|\n`
    );
  });
});

const final_result = text + arr.join("");
console.log(final_result);
const messageBody = {
  text: final_result,
};

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
console.log("success !!!");
