const test = require("ava")

const remove_csv_comment = require("./remove_csv_comment")

test("CSV comments are removed", t => {

    const content = [
        "C, will remove",
        "Content",
        "C, will remove again"
    ].join("\n")

    const buf = new Buffer(content.length)

    buf.write(content, 0)

    return remove_csv_comment(buf)
        .then(content => {

            t.is(content, "Content")

        })

})
