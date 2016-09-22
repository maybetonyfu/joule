const csv = require("csv")

function parse_csv (data) {

    const options = {
        columns: true,
        relax_column_count: true
    }

    return new Promise((resolve, reject) => {

        csv.parse(data, options, (error, data) => error ? reject(error) : resolve(data))

    })

}

module.exports = parse_csv
