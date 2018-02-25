const request = require('request');

request.post({
	url: "https://notify-api.line.me/api/notify",
	method: 'POST',
	form: { message: 'メッセージ内容' },
	headers: {
		"Content-type": "application/json",
		"Authorization": 'Bearer Token'
	}
});