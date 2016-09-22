function remove_csv_comment (data) {

    const lines = data
        .toString()
        .split("\n")
        .filter(line => !/^C,[\s\S]+/.test(line))

    const new_data = lines.join("\n")

    return Promise.resolve(new_data)

}

module.exports = remove_csv_comment
