const schedule = require("node-schedule")
const config = require("config")

const logger = require("./utils/logger")
const scrape = require("./jobs/scrape")

schedule.scheduleJob("*/15 * * * *", scrape_demand)

schedule.scheduleJob("*/5 * * * *", scrape_dispatch)

function scrape_demand () {

    logger.info("Job triggered")

    const fetch = config.get("demand.fetch")

    const pre_parse = config.get("demand.pre_parse")

    const parse = config.get("demand.parse")

    const transform = config.get("demand.transform")

    const export_db = config.get("demand.export_db")

    const url = config.get("demand.url")

    const pick = config.get("demand.pick")

    const pattern = config.get("demand.pattern")

    const conf = {

        url,

        pick,

        pattern,

        fetch: require(`./tasks/${fetch}`),

        pre_parse: require(`./tasks/${pre_parse}`),

        parse: require(`./tasks/${parse}`),

        transform: require(`./tasks/${transform}`),

        export_db: require(`./tasks/${export_db}`)

    }

    scrape(conf)

}

function scrape_dispatch () {

    logger.info("Job triggered")

    const fetch = config.get("dispatch.fetch")

    const pre_parse = config.get("dispatch.pre_parse")

    const parse = config.get("dispatch.parse")

    const transform = config.get("dispatch.transform")

    const export_db = config.get("dispatch.export_db")

    const url = config.get("dispatch.url")

    const pick = config.get("dispatch.pick")

    const pattern = config.get("dispatch.pattern")

    const conf = {

        url,

        pick,

        pattern,

        fetch: require(`./tasks/${fetch}`),

        pre_parse: require(`./tasks/${pre_parse}`),

        parse: require(`./tasks/${parse}`),

        transform: require(`./tasks/${transform}`),

        export_db: require(`./tasks/${export_db}`)

    }

    scrape(conf)

}
