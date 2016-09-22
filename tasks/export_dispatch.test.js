const test = require("ava")

const parse_dispatch = require("./export_dispatch")

test("export dispatch serie", t => {

    /*
    I,DISPATCH,UNIT_SCADA,1,SETTLEMENTDATE,DUID,SCADAVALUE
    D,DISPATCH,UNIT_SCADA,1,"2016/09/19 11:55:00",BUTLERSG,11.999999
    D,DISPATCH,UNIT_SCADA,1,"2016/09/19 11:55:00",CALL_A_4,0
    D,DISPATCH,UNIT_SCADA,1,"2016/09/19 11:55:00",CAPTL_WF,53.6120
    D,DISPATCH,UNIT_SCADA,1,"2016/09/19 11:55:00",CATHROCK,21.109999
    D,DISPATCH,UNIT_SCADA,1,"2016/09/19 11:55:00",CHALLHWF,0.70
    */

    const data = [
        {
            "SETTLEMENTDATE": "2016/09/19 11:00:00",
            "DUID": "BUTLERSG",
            "SCADAVALUE": 11.999999
        },
        {
            "SETTLEMENTDATE": "2016/09/19 11:00:00",
            "DUID": "CALL_A_4",
            "SCADAVALUE": 0
        },
        {
            "SETTLEMENTDATE": "2016/09/19 11:00:00",
            "DUID": "CAPTL_WF",
            "SCADAVALUE": 53.6120
        },
        {
            "SETTLEMENTDATE": "2016/09/19 11:00:00",
            "DUID": "CATHROCK",
            "SCADAVALUE": 21.109999
        },
        {
            "SETTLEMENTDATE": "2016/09/19 11:00:00",
            "DUID": "CHALLHWF",
            "SCADAVALUE": 0.70
        }
    ]

    return parse_dispatch(data)
        .then(series => {

            t.is(typeof series.dispatch[0][0]["time"], "number")
            t.falsy(Number.isNaN(series.dispatch[0][0]["time"]))
            t.is(typeof series.dispatch[0][0]["value"], "number")
            t.falsy(Number.isNaN(series.dispatch[0][0]["value"]))

        })

})
