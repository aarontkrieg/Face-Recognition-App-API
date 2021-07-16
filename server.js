const express = require('express')

const app = express();

app.use(express.json());

const database = {
	users: [

	]
}

app.get('/', (req, res) => {
	res.send('this is working');
})

app.post('/signin', (req, res) => {

	if ((req.body.email) === database.users[0].email &&
		req.body.password === database.users[0].password) {
		res.json('success');
	} else {
		res.status(400).json('error logging in');
	}
})

app.listen(3000, ()=> {
	console.log('app is running on port 3000');
})



/*
/ --> res = this is working
/signin --> POST success/fail
/regiester --> POST = 
/profile/:userId --> GET = user


*/