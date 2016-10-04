const moment = require("moment-timezone")

const parse_region_id = require("../utils/parse_region_id")

function transform_demand (data) {

    const demand = data
        .map(datum => {

            return [
                {
                    value: Math.round(+datum.OPERATIONAL_DEMAND),
                    time: moment.tz(datum.INTERVAL_DATETIME, "YYYY/MM/DD HH:mm:ss", "Australia/Sydney").valueOf()
                },
                {
                    region: parse_region_id(datum.REGIONID)
                }
            ]

        })

    const series = {
        demand
    }

    return Promise.resolve(series)

}

module.exports = transform_demand
