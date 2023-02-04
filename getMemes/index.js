import puppeteer from 'puppeteer'; // set type : module in package.json to use import 


(async () => {

    const url = 'https://www.memedroid.com/search?query='
    const searchKeywords = ['programming+memes', 'meme', 'memes', 'best+memes', 'funny', 'funny+memes', 'dank+memes', 'offensive+memes', 'funniest+memes', 'dank', 'jokes', 'humor', 'lmao', 'dark+humor', 'dark', 'lol', 'batman+memes', 'batman', 'star+wars+memes', 'relatable+memes', 'funny+posts', 'silly+memes', 'meme+time'];
    const divClassForMemes = 'item-aux-container';

    const browser = await puppeteer.launch(); // launches a browser instance
    const page = await browser.newPage(); //opens up a new page using the browser instance
    await page.goto(url + searchKeywords[Math.floor(Math.random() * searchKeywords.length)]);// opens up the meme site with random keyword as search query
    const getMemes = await page.$$eval('div.item-aux-container img[src]', memes =>
        memes.map(meme => {
            if (
                meme.getAttribute('src').startsWith('http') &&
                meme.getAttribute('src').endsWith('jpeg')
            ) {
                return meme.getAttribute('src');
            }
        })); // this gets all the image urls from the divs
    const memes = getMemes.filter(meme => meme !== null);
    const meme = memes[Math.floor(Math.random() * memes.length)];
    await page.goto(meme); // goes to one of that url 
    const memeName = meme.split('/')[5].split('.')[0];
    await page.screenshot({ path: './getMemes/memes/' + memeName + '.png' }); // saves screenshot
    await browser.close()
})();