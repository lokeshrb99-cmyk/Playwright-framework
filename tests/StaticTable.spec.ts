import{test,expect,Locator} from"@playwright/test"

test("StaticTable", async({page})=>

{
await page.goto("https://testautomationpractice.blogspot.com/");


const table:Locator=page.locator("table[name='BookTable']>tbody");

await page.waitForTimeout(3000);

await expect(table).toBeVisible();

//Count no of rows in a table


const rows:Locator=page.locator("table[name='BookTable'] tbody tr"); //Returns all the rows in the table(Include header)
await expect(rows).toHaveCount(7);


const rowscount:number=await rows.count();

console.log("No of rows in a table: ", rowscount);
expect(rowscount).toBe(7);


//Count no of columns in a table
//table variable contains locator="table[name='Booktable']>tbody>tr"

const columns:Locator=table.locator("th");
await expect(columns).toHaveCount(4);

const columnscount:number=await columns.count();
console.log("No of columns: ", columnscount);

expect(columnscount).toBe(4);


// 3] Read all data from 2nd row (Index 2 means 3rd rowincluding header)
//Always data starts from the 1st row in the table

const SecondRowCells:Locator=rows.nth(2).locator('td');
const SecondRowText:string[]=await SecondRowCells.allInnerTexts();

console.log("2nd Row Data: ", SecondRowText);//Retursn--[ 'Learn Java', 'Mukesh', 'Java', '500' ]

await expect(SecondRowCells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);


for(let text of SecondRowText)
    
    {
       console.log(SecondRowText);

    }


  //4] Read all the data form the excluding header
  
  //By using all() we can convert that locator into array format then  only we can use the for of loop(Initiall for traditional loop only we can able to use, once all() used then we can be able to use for of/for in)

  const allRowData=await rows.all();


   console.log("BookName  Author  Subject  Price");
  for(let row of allRowData.slice(1)) //Slice(1) remove the header details
    {

      const col=await row.locator("td").allInnerTexts();
      console.log(col.join('\t'));



    }

    //5] Print book name written by Mukesh

 console.log("Books written by Mukesh")



console.log("Books written by Mukesh");


const MukeshBooks:string[]=[];
for (let row of allRowData.slice(1))
{
    const cell = await row.locator('td').allInnerTexts();

    const author = cell[1];// 1 we r using because author comes in the 1st index
    const book = cell[0];

    if (author === 'Mukesh')
    {
        console.log(`${author}\t${book}`);
        MukeshBooks.push(book);
    }
}

expect(MukeshBooks).toHaveLength(2);

//6]Calculate total price of all books

let totalprice:number=0;

for (let row of allRowData.slice(1))
{
    const cell = await row.locator('td').allInnerTexts();

    const price = cell[3];// 1 we r using because author comes in the 1st index
    
totalprice=totalprice+parseInt(price);

    
}
console.log("Total price of all books: ", totalprice)

expect(totalprice).toBe(7100);

await page.waitForTimeout(3000);
}
)