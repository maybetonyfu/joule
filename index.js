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

    const fetch = config.get("dispatch.fetch")

    const pre_parse = config.get("dispatch.pre_parse")

    const parse = config.get("dispatch.parse")

    const transform = config.get("dispatch.transform")

    const export_db = config.get("dispatch.export_db")

    const url = config.get("dispatch.url")

    const pick = config.get("dispatch.pick")

    const conf = {

        url,

        pick,

        fetch: require(`./tasks/${fetch}`),

        pre_parse: require(`./tasks/${pre_parse}`),

        parse: require(`./tasks/${parse}`),

        transform: require(`./tasks/${transform}`),

        export_db: require(`./tasks/${export_db}`)

    }

    scrape(conf)

}
