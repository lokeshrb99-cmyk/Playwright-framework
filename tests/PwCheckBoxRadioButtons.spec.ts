import { test, expect, Locator } from "@playwright/test";

test("xPath demo in playwright", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

 const maleradio:Locator=page.locator('#male');
 
await expect(maleradio).toBeVisible();
await expect(maleradio).toBeEnabled();

expect(maleradio.isChecked()).toBe(false);

await maleradio.check();
expect(maleradio.isChecked()).toBe(true);

await expect(maleradio).toBeChecked();

}

)
test.only("CheckBox actions", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

const SundayCheckbox:Locator=page.getByLabel('Sunday');
await SundayCheckbox.check();
await expect(SundayCheckbox).toBeChecked();


//Select all checck boxes

const days: string[]=['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];

const checkboxes:Locator[]=days.map(index=>page.getByLabel(index));

expect(checkboxes.length).toBe(7);

// for(const checkbox of checkboxes)

//     {

// await checkbox.check();
// await expect(checkbox).toBeChecked();
//     }

    //want to select first 3 then we need to use (Slice method JavaScript), like Starting ending{0,3}/{3}
//want to select last 3 then we need to use (Slice method JavaScript), like Starting ending{-3}


// for(const checkbox of checkboxes.slice(-3))

//     {

// await checkbox.check();
// await expect(checkbox).toBeChecked();
//     }


    //I want to select random checkbox(1,3,6)

    const indexes:number[]=[1,3,6];
for (const i of indexes)
{
   await checkboxes[i].check();
    await expect(checkboxes[i]).toBeChecked();

}
page.close();

}

)