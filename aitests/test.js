import { Selector } from "testcafe";

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture("First Fixture Test")
.page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t =>{
    await t
    .typeText("#developer-name","TAU")
    .click("#macos")
    .click("#submit-button");
});