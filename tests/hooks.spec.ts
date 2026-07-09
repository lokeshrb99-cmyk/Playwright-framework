import{test,expect} from"@playwright/test"


test.beforeEach("BeforeEach", async()=>
{
    console.log("This is before each");
}
)


test.afterEach("AfterEach", async()=>
{
    console.log("This is after each");
}
)


test("test1", async()=>
{console.log("This is 1st test")
}

)


test("test2", async()=>
{console.log("This is 2nd test")
}
)


test("test3", async()=>
{console.log("This is 3rd test")
}

)


test("test4", async()=>
{console.log("This is 4th test")
}

)