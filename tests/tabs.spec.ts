import{test, expect, chromium} from"@playwright/test"
test("Handle tabs", async({})=>
{
const browser=await chromium.launch();
const context=await browser.newContext();

//Creating 1page
 const Parentpage=await context.newPage();
 //const page2=await context.newPage();

 await Parentpage.goto("https://testautomationpractice.blogspot.com/");


 //2 Statements should go parallely
 //context.waitForEvent('page');//pending, fullfilled, rejected
 //Parentpage.locator("button[onclick='myFunction()']").click();//New tab will open

const [Childpage]=await Promise.all([context.waitForEvent('page'),Parentpage.locator("button[onclick='myFunction()']").click()]);


//Approach1. Switch between pages and get title
const pages= context.pages(); //Returns an array
console.log("No. of pagescreated: ", pages.length);

//Fetch the title of the parent page
console.log("Title of the parent page: ",await pages[0].title());
console.log("Title of the child page: ",await pages[1].title());


//Approach 2. Alternate

console.log("Title of the parent page: ",await Parentpage.title());
console.log("Title of the child page: ",await Childpage.title());



 await Parentpage.waitForTimeout(3000);





}
)