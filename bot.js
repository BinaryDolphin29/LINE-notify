const request = require('request');

// Token
let Token = 'Y O U R  T O K E N'; // Token
    Token = `Bearer ${Token}`;

// Options
const options = {
	url: 'https://notify-api.line.me/api/notify',
	method: 'POST',
	json: true,
	form: { message: 'メッセージ内容' },
	headers: {
		'Content-type': 'application/x-www-form-urlencoded',
		'Authorization': Token
	}
}

request(options, (err, res, body) => {
	body = JSON.stringify(body, null, 2);
	console.log(body);
});
