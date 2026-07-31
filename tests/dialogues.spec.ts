import {test,expect,Locator} from"@playwright/test"
test("sample dialogues", async({page})=>
{

    await page.goto("https://testautomationpractice.blogspot.com/");
//Register a dialog handler

page.on('dialog', (dialog)=>{
    
    console.log("Dialog type is:", dialog);// Returns the type of the dialog
    expect(dialog.type()).toContain("alert");

    console.log("Dialog text: ", dialog.message());//Returns the message from the dialog
    expect(dialog.message()).toContain("I am an alert box!");

    dialog.accept()
                            }
        );

    await page.locator('#alertBtn').click();

    await page.waitForTimeout(4000);


}
)

//-------------------------------------------------------------------

test("confirmation dialog", async({page})=>
{

    await page.goto("https://testautomationpractice.blogspot.com/");

page.on('dialog', (dialog)=>{
    
    console.log("Dialog type is:", dialog);// Returns the type of the dialog
    expect(dialog.type()).toContain("confirm");

    console.log("Dialog text: ", dialog.message());//Returns the message from the dialog
    expect(dialog.message()).toContain("Press a button");

    dialog.accept();
     // dialog.dismiss();                    
      }
        )


    await page.locator('#confirmBtn').click();
        const text:string=await page.locator('#demo').innerText();
        console.log("Dialog text: ", text);
        await expect(page.locator('#demo')).toHaveText("You pressed OK!");
      //  await expect(page.locator('#demo')).toHaveText("You pressed Cancel!");


    await page.waitForTimeout(4000);


}
)
//------------------------------------------------------------
test("Prompt dialog", async({page})=>
{

    await page.goto("https://testautomationpractice.blogspot.com/");

page.on('dialog', (dialog)=>{
    
    console.log("Dialog type is:", dialog);// Returns the type of the dialog
    expect(dialog.type()).toContain("prompt");

    console.log("Dialog text: ", dialog.message());//Returns the message from the dialog
    expect(dialog.message()).toContain("Please enter your name:");

    expect(dialog.defaultValue()).toContain("Harry Potter"); //Checks default value of the dialog

    dialog.accept("Virat");//It is only after accepting dialog

     // dialog.dismiss();                    
      }
        )


    await page.locator('#promptBtn').click();
        const text:string=await page.locator('#demo').innerText();
        console.log("Dialog text: ", text);
        await expect(page.locator('#demo')).toHaveText("Hello Virat! How are you today?");
      //  await expect(page.locator('#demo')).toHaveText("You pressed Cancel!");


    await page.waitForTimeout(4000);


}
)