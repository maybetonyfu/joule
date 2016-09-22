const test = require("ava")

const scrape = require("./scrape")

test("panic! without a parser", t => {

    t.throws(() => {

        scrape({

            url: "http://fakeurl.com/fakefile",

            pick: 1

        })

    })

})

test("panic! parser is not a function", t => {

    t.throws(() => {

        scrape({

            url: "http://fakeurl.com/fakefile",

            pick: 1,

            parser: "not a function"

        })

    })

})
