var influx = require("influx")

const client = influx({
    host: "45.63.27.151",
    port: 8086,
    protocol: "http",
    username: "datawrite",
    password: "datawrite",
    database: "aemo_data"
})

function export_data (data) {

    return new Promise((resolve, reject) => {

        client.writeSeries(data, {db: "aemo_data"}, (error, response) => error ? reject(error) : resolve(response))

    })

}

module.exports = export_data
