import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";
import { test } from "node:test";
import assert from "node:assert/strict";

const html = readFileSync("./index.html", "utf-8");
const dom = new JSDOM(html);
const document = dom.window.document;

test("HTML <head> checks", () => {
  const title = document.querySelector("head > title");
  assert.ok(title, "Missing <title> in <head>");
});

test("HTML <body> checks", () => {
  const header = document.querySelector("header");
  assert.ok(header, "Missing <header>");
  assert.ok(header.querySelector("h1"), "<header> does not contain <h1>");
});

