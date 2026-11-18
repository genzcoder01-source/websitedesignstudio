const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:3005', { waitUntil: 'networkidle0' });

  const letterInfo = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.title.hero span[class*="_"]')).map(el => {
      const r = el.getBoundingClientRect();
      return {
        text: el.textContent.trim(),
        class: el.className,
        x: Math.round(r.left),
        y: Math.round(r.top),
        w: Math.round(r.width),
        h: Math.round(r.height),
        font: window.getComputedStyle(el).fontFamily.split(',')[0].replace(/"/g, '')
      };
    });
  });
  console.log('Hero letters positioning:', JSON.stringify(letterInfo, null, 2));
  await browser.close();
})();
