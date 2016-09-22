const download = require("download")
const promisify = require("promisify-node")
const fs = promisify("fs")
const logger = require("../utils/logger")

function fetch_data (url, file_name) {

    return download(url + file_name, "data", { extract: true })
       .then(() => fs.readFile(`data/${file_name}`.replace("zip", "CSV")))
       .catch(err => logger.error(err))

}

module.exports = fetch_data
