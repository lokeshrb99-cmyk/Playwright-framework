import { test, expect, Locator } from "@playwright/test";

test("Select dropdowns", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");


//Select option from the dropdown

await page.locator('#country').selectOption('India');   //visible text

await page.locator('#country').selectOption({value:'uk'});   //by using value attribute

await page.locator('#country').selectOption({index:4});   //By using index


//Check number of options in the dropdown
   const dropdownOptions:Locator=page.locator('#country>option');
   await expect(dropdownOptions).toHaveCount(10);



 //Check an option present in the option
 
 //const optionsText:string[]=await dropdownOptions.allTextContents();
// console.log(optionsText);

 //For the above one I am getting space with text(I want to remove the space)
//We need to use MAP{For that use below code}

const optionsText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
console.log(optionsText);

expect(optionsText).toContain('Japan');

//Multi Select dropdown

await page.locator('#colors').selectOption(['Red','Blue','Green']);



//Verify dropdow are sorted

const dropdownoptions:Locator=page.locator('#animal>options');
const optionText:string[]=(await dropdownoptions.allTextContents()).map(text=>text.trim());

//If I use the below 2lines of code there is no change in the result because array concept is the Immutable

//const originalText:string[]=optionText;
//const sortedlist:string[]=optionText.sort();

//To avoid that we use ...
const originalText:string[]=[...optionText];
const sortedlist:string[]=[...optionText].sort();

console.log(originalText);
console.log(sortedlist);

expect(originalText).toEqual(sortedlist);





await page.waitForTimeout(5000); 

}
)


