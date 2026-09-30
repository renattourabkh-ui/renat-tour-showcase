import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("showcase contains every requested travel direction", async () => {
  const page = await read("../app/page.tsx");

  for (const destination of [
    "tour3days",
    "5dayapsny",
    "ozerorica",
    "gagra",
    "novyj-afon",
    "vodopady",
    "one-day-tours-adaptive",
    "drive.renat-tour.ru",
  ]) {
    assert.match(page, new RegExp(destination));
  }

  assert.match(page, /RENAT TOUR/);
  assert.match(page, /Написать Ренату/);
  assert.match(page, /\+7 988 251-88-77/);
});

test("metadata and social preview are configured", async () => {
  const layout = await read("../app/layout.tsx");
  assert.match(layout, /lang="ru"/);
  assert.match(layout, /openGraph/);
  assert.match(layout, /\/og\.png/);
  assert.match(layout, /renat-tour-abkhazia\.renat-tour-abkh\.chatgpt\.site/);
});
