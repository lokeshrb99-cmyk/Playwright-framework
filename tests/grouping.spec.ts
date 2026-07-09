import{test,expect} from"@playwright/test"

test.describe("Group1", async()=>
{
test("test1", async()=>
{console.log("This is 1st test")
}
);

test("test2", async()=>
{console.log("This is 2nd test")
}
);

})
test.describe("Group2", async()=>
{
test("test3", async()=>
{console.log("This is 3rd test")
}
);

test("test4", async()=>
{console.log("This is 4th test")
}
);

})