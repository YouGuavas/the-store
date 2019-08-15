const express = require('express');
const router = express.Router();
const request = require('request');


const dotenv = require('dotenv').config();

const mongod = require('mongodb');
const ObjectId = mongod.ObjectId;
const mongo = mongod.MongoClient;
const mongoURI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;


router.get('/', (req, res) => {
	res.send('hello world');
});
router.get('/products', (req, res) => {
	mongo.connect(mongoURI, (err, client) => {
		if (err) throw err;
		const db = client.db(process.env.DB_NAME);
		const collection = db.collection(process.env.COLLECTION);
		const query = {};
		collection.find(query).toArray((err, data) => {
			if (err) throw err;
			client.close();
			res.json(data);
			res.end();
		});
	})
});


module.exports = router;