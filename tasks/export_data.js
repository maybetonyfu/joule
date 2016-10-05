const influx = require("influx")
const config = require("config")

const db = config.get("db")
const client = influx(db)

function export_data (data) {

    return new Promise((resolve, reject) => {

        client.writeSeries(data, {db: db.database}, (error, response) => error ? reject(error) : resolve(response))

    })

}

module.exports = export_data
