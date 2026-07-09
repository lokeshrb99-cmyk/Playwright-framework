import{test,expect, Locator} from"@playwright/test"

test("Comparing Methods", async({page})=>
{

await page.goto("https://demowebshop.tricentis.com/");

const product:Locator=page.locator('.product-title'); //6

//1] InnerText() Vs Textcontent()

//console.log(await product.nth(1).innerText());
//console.log(await product.nth(1).textContent);
/*
const count=await product.count();

for(let i=0; i<count; i++)
    {
       //For InnerText(), string is required in innertext()
      //const ProductName:string=await product.nth(1).innerText();  // Extract plane text, Removes whitespace and line brakes
      //console.log(ProductName);

       //For textContent, null|string is required(If we not mention also fine)
     //  const ProductName=await product.nth(1).textContent(); //Extracts text including hiddenelements, includes whitespaces and line brakes.
     //  console.log(ProductName);

        const ProductName=await product.nth(1).textContent();//Want to trim
        console.log(ProductName?.trim);

    }


//2] allInnerText() Vs alltextContent()

//const ProductName:string[]=await product.allInnerTexts();
//console.log("Print all web elements captured by allInnerText() : ", ProductName);


const ProductName:string[]=await product.allTextContents();
console.log("Print all web elements captured by allTextContents() : ", ProductName);

//Here all like sapce other things also coming, need to remove
const TrimmedProductName:string[]=ProductName.map(text=>(text.trim()));
console.log("Trimmed Products name:  ", TrimmedProductName);

*/
//3] all()--->Converts locator to Locator[] type of an array

const productLocators:Locator[]=await product.all();
console.log(productLocators);

console.log(await productLocators[1].innerText());




//For the above one we can use For of loop
//Returns array of locator (store locator of products)/converts locator to array of locators(for iteration)

/*
for(let productLoc of productLocators)
    
    {
        console.log(await productLoc.innerText());

    }
*/
   //For in loop
   

  
   for(let i in productLocators)
    
    {
       console.log(await productLocators[i].innerText());
    }


    



}
)