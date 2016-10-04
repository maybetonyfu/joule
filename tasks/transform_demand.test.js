const test = require("ava")

const transform_demand = require("./transform_demand")

test("export demand serie", t => {

    /*
    I,OPERATIONAL_DEMAND,ACTUAL,1,REGIONID,INTERVAL_DATETIME,OPERATIONAL_DEMAND,LASTCHANGED
    D,OPERATIONAL_DEMAND,ACTUAL,1,NSW1,"2016/09/19 11:00:00",8117,"2016/09/19 11:00:33"
    D,OPERATIONAL_DEMAND,ACTUAL,1,QLD1,"2016/09/19 11:00:00",6224,"2016/09/19 11:00:33"
    D,OPERATIONAL_DEMAND,ACTUAL,1,SA1,"2016/09/19 11:00:00",1415,"2016/09/19 11:00:33"
    D,OPERATIONAL_DEMAND,ACTUAL,1,TAS1,"2016/09/19 11:00:00",1231,"2016/09/19 11:00:33"
    D,OPERATIONAL_DEMAND,ACTUAL,1,VIC1,"2016/09/19 11:00:00",5834,"2016/09/19 11:00:33"
    */

    const data = [
        {
            "REGIONID": "NSW1",
            "INTERVAL_DATETIME": "2016/09/19 11:00:00",
            "OPERATIONAL_DEMAND": 8117
        },
        {
            "REGIONID": "QLD1",
            "INTERVAL_DATETIME": "2016/09/19 11:00:00",
            "OPERATIONAL_DEMAND": 6224
        },
        {
            "REGIONID": "SA1",
            "INTERVAL_DATETIME": "2016/09/19 11:00:00",
            "OPERATIONAL_DEMAND": 1415
        },
        {
            "REGIONID": "TAS1",
            "INTERVAL_DATETIME": "2016/09/19 11:00:00",
            "OPERATIONAL_DEMAND": 1231
        },
        {
            "REGIONID": "VIC1",
            "INTERVAL_DATETIME": "2016/09/19 11:00:00",
            "OPERATIONAL_DEMAND": 5834
        }
    ]

    return transform_demand(data)
        .then(series => {

            t.is(typeof series.demand[0][0]["time"], "number")
            t.falsy(Number.isNaN(series.demand[0][0]["time"]))
            t.is(typeof series.demand[0][0]["value"], "number")
            t.falsy(Number.isNaN(series.demand[0][0]["value"]))

        })

})
