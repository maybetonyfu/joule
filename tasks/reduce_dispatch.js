const moment = require("moment-timezone")

const generators = require("../generators.json")

function reduce_dispatch (data) {

    const region_list = ["NSW", "VIC", "QLD", "SA", "TAS"]

    const technology_list = [
        "hydro",
        "gas",
        "black_coal",
        "brown_coal",
        "wind",
        "other"
    ]

    let dispatch = []

    region_list.forEach(
        region => {

            technology_list.forEach(
                technology => dispatch.push([
                    {
                        value: 0,
                        time: 0
                    },
                    {
                        region,
                        technology
                    }
                ])
            )

        }
    )

    data
        .filter(datum => generators[datum.DUID])
        .forEach(datum => {

            const dispatch_entry = dispatch.findIndex(entry => {

                return (entry[1].region === generators[datum.DUID].region && entry[1].technology === generators[datum.DUID].feul)

            })

            if (dispatch_entry !== -1) {

                const value = Math.round(+datum.SCADAVALUE) >= 0 ? Math.round(+datum.SCADAVALUE) : 0

                dispatch[dispatch_entry][0]["value"] += value
                dispatch[dispatch_entry][0]["time"] = moment.tz(datum.SETTLEMENTDATE, "YYYY/MM/DD HH:mm:ss", "Australia/Sydney").valueOf()

            }

        })

    const series = {
        dispatch
    }

    return Promise.resolve(series)

}

module.exports = reduce_dispatch
