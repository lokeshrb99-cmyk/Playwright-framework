import{test, expect, Locator} from"@playwright/test"

test("Assertions", async({page})=>
{

    await page.goto("https://demowebshop.tricentis.com/");

    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

    //Auto retry: waits for the element to be visible and have the expected text

await expect(page.locator('text=Welcome to our store')).toBeVisible();
await expect(page.locator("div[class='product-grid home-page-product-grid'] strong")).toHaveText("Featured products");
//If I want to put timeout except config file we can do like this
//await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:10000});

//Non retrying assertions (executes immediately no retry)
//Git changes
const title=await page.title();
expect(title.includes("Demo Web Shop")).toBeTruthy();//No autp retry

const welcometext=await page.locator('text=Welcome to our store').textContent();
expect(welcometext).toContain("Welcome");//non retry

//Negating matcher(Applicable for auto retying and non auto retrying)

await expect(page.locator('text=Welcome to our store')).not.toBeVisible();//auto retry
expect(welcometext).not.toContain("Welcome");//Non auto retry

await page.waitForTimeout(3000);





}
)