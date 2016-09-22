const test = require("ava")

const parse_csv = require("./parse_csv")

test("parse typical csv file", t => {

    const csv_data = [
        "I,OPERATIONAL_DEMAND,ACTUAL,1,REGIONID,INTERVAL_DATETIME,OPERATIONAL_DEMAND,LASTCHANGED",
        "D,OPERATIONAL_DEMAND,ACTUAL,1,NSW1,'2016/09/19 11:00:00',8117,'2016/09/19 11:00:33'",
        "D,OPERATIONAL_DEMAND,ACTUAL,1,QLD1,'2016/09/19 11:00:00',6224,'2016/09/19 11:00:33'",
        "D,OPERATIONAL_DEMAND,ACTUAL,1,SA1,'2016/09/19 11:00:00',1415,'2016/09/19 11:00:33'",
        "D,OPERATIONAL_DEMAND,ACTUAL,1,TAS1,'2016/09/19 11:00:00',1231,'2016/09/19 11:00:33'",
        "D,OPERATIONAL_DEMAND,ACTUAL,1,VIC1,'2016/09/19 11:00:00',5834,'2016/09/19 11:00:33'"
    ].join("\n")

    return parse_csv(csv_data)
        .then(data => {

            t.is(data.length, 5)

        })

})
