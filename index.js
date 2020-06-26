const https = require("https")
const querystring = require("querystring")

const Token = "ここに発行したToken"
const content = querystring.stringify({
    message: "ここにメッセージ内容"
})

const options = {
    hostname: "notify-api.line.me",
    path: "/api/notify",
    method: "POST",
    headers: {
        "Content-type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(content),
        "Authorization": `Bearer ${Token}`
    }
}

const request = https.request(options, res => {
    res.setEncoding("utf8")
    res.on("data", console.log)
    res.on("error", console.log)
})

request.write(content)
request.end()
