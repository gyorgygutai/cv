import puppeteer from "puppeteer"
import path from "path"
import fs from "fs"
import { fileURLToPath } from "url"
import HTMLtoDOCX from 'html-to-docx'

async function createDocx(content, filePath) {
  const fileBuffer = await HTMLtoDOCX(content, null, {
    table: { row: { cantSplit: true } },
    footer: true,
    pageNumber: true,
  });

  fs.writeFileSync(filePath, fileBuffer);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const htmlPath = path.resolve(__dirname, "../docs/index.html")

const browser = await puppeteer.launch({
  headless: true,
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
})
const page = await browser.newPage()

await page.goto(`file://${htmlPath}`, {
  waitUntil: "networkidle2",
})

await page.emulateMediaType("screen")

const content = await page.evaluate(() => document.body.innerText)

await browser.close()

await createDocx(content, path.resolve(__dirname, "../docs/cv_gyorgy_gutai.docx"))
