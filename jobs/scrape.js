const xray = require("x-ray")

const logger = require("../utils/logger")

function scrape (opt) {

    const {

        url,

        pick,

        fetcher,

        pre_parser,

        parser,

        exporter

    } = opt

    const x = xray()

    if (!parser || typeof parser !== "function") {

        throw new Error("No parser found")

    }

    x(url, ["a"])((err, files) => {

        if (err) {

            logger.error(err)
            throw new Error("Data source failed")

        }

        Promise.all(
            files
                .slice(-pick)
                .map(file_name => {

                    return fetcher(url, file_name)
                        .then(data => pre_parser(data))
                        .then(data => parser(data))
                        .then(data => exporter(data))
                        .then(data => console.log(data))
                        .catch(err => logger.error(err))

                })
            )
            .then(() => {

                logger.info("files downloaded!")

            })

    })

}

module.exports = scrape
