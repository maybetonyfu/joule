const schedule = require("node-schedule")
const config = require("config")

const logger = require("./utils/logger")
const scrape = require("./jobs/scrape")

// schedule.scheduleJob("*/10 * * * * *", scrape_demand)

schedule.scheduleJob("*/10 * * * * *", scrape_dispatch)

// function scrape_demand () {

//     logger.info("Job triggered")

//     const fetcher = require("tasks/fetch_data")

//     const pre_parser = require("tasks/remove_csv_comment")

//     const parser = require("tasks/parse_csv")

//     const exporter = require("tasks/export_dispatch")

//     const conf = {

//         url_path: "http://www.nemweb.com.au/Reports/CURRENT/Operational_Demand/ACTUAL_HH/",

//         pick: 2,

//         fetcher,

//         pre_parser,

//         parser,

//         exporter

//     }

//     scrape(conf)

// }

function scrape_dispatch () {

    logger.info("Job triggered")

    const fetcher = config.get("dispatch.fetcher")

    const pre_parser = config.get("dispatch.pre_parser")

    const parser = config.get("dispatch.parser")

    const exporter = config.get("dispatch.exporter")

    const url = config.get("dispatch.url")

    const pick = config.get("dispatch.pick")

    const conf = {

        url,

        pick,

        fetcher: require(`./tasks/${fetcher}`),

        pre_parser: require(`./tasks/${pre_parser}`),

        parser: require(`./tasks/${parser}`),

        exporter: require(`./tasks/${exporter}`)

    }

    scrape(conf)

}
