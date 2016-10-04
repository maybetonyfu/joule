const xray = require("x-ray")

const logger = require("../utils/logger")

function scrape (opt) {

    const {

        url,

        pick,

        fetch,

        pre_pars,

        parse,

        transform,

        exporter

    } = opt

    const x = xray()

    if (!parse || typeof parser !== "function") {

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

                    return fetch(url, file_name)
                        .then(data => pre_pars(data))
                        .then(data => parse(data))
                        .then(data => transform(data))
                        .then(data => exporter(data))
                        .catch(err => logger.error(err))

                })
            )
            .then(() => {

                logger.info("files downloaded!")

            })

    })

}

module.exports = scrape
