import { test, expect, Locator } from "@playwright/test";

test("Select dropdowns", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");


//We are checking the duplicate values are present in the dropdown options
const dropdownoptions:Locator=page.locator('#colors>option');

const optionsText:string[]=(await dropdownoptions.allTextContents()).map(text=>text.trim());


const myset=new Set<string>();    //Set duplicates not allowed
const duplicates:string[]=[];    //array duplicates allowed

for(const text of optionsText)
{
    if(myset.has(text))
     {
         duplicates.push(text);
     }
else
    {
      myset.add(text);
    }

    console.log("Duplicate options:  ", duplicates);
expect(duplicates.length).toBe(0);



}














}
)