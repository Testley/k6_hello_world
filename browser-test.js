import { browser } from 'k6/browser';

export const options = {
    scenarios: {
        browser_test: {
            executor: 'constant-vus',
            vus: 1,
            duration: '5s',
            options: {
                browser: {
                    type: 'chromium'
                }
            }
        }
    }
}

export default async function () {
    const page = await browser.newPage();

    //Correct way to set viewport size in k6 browser module
    await page.setViewportSize({
        width: 375,
        height: 812
    });

    await page.goto('https://www.google.com');
    await page.screenshot({
        fullPage: true,
        path: 'screenshots/test2.png'
    });
    page.close();
}