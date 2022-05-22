
const {chromium, test, expect} = require('@playwright/test');
//importing URLs from another file 
const { urlScraped } = require('../../fixtures/mindmeister-urls');
const { locales } = require('../../fixtures/locales');
for(const location of locales){
for (const url of urlScraped ){
test('mindmeister'+url+location,async () => {
   
    const browser = await chromium.launch();
   
    	const context = await browser.newContext({
        locale: location,
      });
    //opened a page using the above context
	const page = await context.newPage();
   
    //navigate to the desired url 
    await page.goto(url);
    //cfirst run created golden state and the compares
    await expect(page).toHaveScreenshot({fullPage: true});

    // await page.screenshot({ path: screenshotPath, fullPage:true, type:"png"});
	await browser.close();
    
});

};
}