function parse_region_id (region_id) {

    switch (region_id) {

        case "NSW1":

            return "NSW"

        case "VIC1":

            return "VIC"

        case "SA1":

            return "SA"

        case "QLD1":

            return "QLD"

        case "TAS1":

            return "TAS"

        default:

            throw new Error(`Unknown region id ${region_id}`)

    }

}

module.exports = parse_region_id
