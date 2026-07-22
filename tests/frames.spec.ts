import{test,expect,Locator} from"@playwright/test"
test("Frames", async({page})=>
    {
        await page.goto("http://docs.oracle.com/javase/8/docs/api/");

        //total no of frames present on the page
        const frames=page.frames();

        console.log("No. of frames present on the page: ", frames.length);

        //Approach1. Using page.frame
        const frame=page.frame("http://docs.oracle.com/javase/8/docs/api/jdadhd/ukdu");//Page.frame is allows only url of the frame
        
        if(frame)
            {
                await frame.locator("[name='mytext1']").fill("Hello")
                await frame.fill("[name='mytext1']", "Hello");
            }
                else
                    {
                        console.log("Frame is not available");
                    }
        await page.waitForTimeout(4000);

//Approach 2. Using frameLocator()


test("Inner Frames demo", async({page})=>
    {
        await page.goto("http://docs.oracle.com/javase/8/docs/api/");

        //total no of frames present on the page
        const frames=page.frames();

        console.log("No. of frames present on the page: ", frames.length);

        //Approach2. Using page.framelocator
        await page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']").fill("Virat");//Page.framelocator is allows any kind of locator of the frame
        
        
        
        await page.waitForTimeout(4000);
                




    })

test.only("Inner/child Frames demo", async({page})=>
    {
        await page.goto("http://docs.oracle.com/javase/8/docs/api/");

        const frame3=page.frame({url: 'http://docs.oracle.com/javase/8/docs/api/jdadhd/ukdu'});
        
      //  await frame3?.locator("[name='text3']").fill("Welcome");//Putting ? is not a best pracctise, that's y use if condition

        if(frame3)
            {
                await frame3.locator("[name='text3']").fill("Welcome");
                const childframes=frame3.childFrames();
                console.log("child frames inside the frame3: ", childframes.length);// only 1frame is exist
               const radio= childframes[0].getByLabel("I am a human");
                    await radio.check();
                    await expect(radio).toBeChecked();
            }
            else{
                console.log("frame3 is not available");
            }

        
        
        await page.waitForTimeout(4000);
                




        })}
)