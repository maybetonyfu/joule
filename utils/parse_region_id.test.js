const test = require("ava")

const parse_region_id = require("./parse_region_id")

test("parse valid region id", t => {

    t.is(parse_region_id("NSW1"), "NSW")

    t.is(parse_region_id("VIC1"), "VIC")

    t.is(parse_region_id("SA1"), "SA")

    t.is(parse_region_id("QLD1"), "QLD")

    t.is(parse_region_id("TAS1"), "TAS")

})

test("throw error when invalid/unknown region provided", t => {

    t.throws(() => {

        parse_region_id("NT1")

    })

})
