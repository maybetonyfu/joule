const moment = require("moment-timezone")

const generators = require("../generators.json")

function parse_dispatch (data) {

    const dispatch = data
        .filter(datum => generators[datum.DUID])
        .map(datum => {

            return [
                {
                    value: Math.round(+datum.SCADAVALUE),
                    time: moment.tz(datum.SETTLEMENTDATE, "YYYY/MM/DD HH:mm:ss", "Australia/Sydney").valueOf()
                },
                {
                    region: generators[datum.DUID].region,
                    technology: generators[datum.DUID].feul,
                    generator: datum.DUID
                }
            ]

        })

    const series = {
        dispatch
    }

    return Promise.resolve(series)

}

module.exports = parse_dispatch
