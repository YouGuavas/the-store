const express = require('express');
const router = express.Router();

const mongod = require('mongodb');
const mongo = mongod.MongoClient;

const multer = require('multer');
const cloudinary = require('cloudinary');

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



/* multer stuff for image uploads*/
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, '../uploads');
	},
	filename: function(req, file, cb) {
		cb(null, Date.now() + file.originalname);
	}
});

const fileFilter = (req, file, cb) => {
	if (file.mimetype.match(/\/(jpe?g|png|gif|bmp|svg)$/)) {
		cb(null, true);
	} else {
		cb(null, false);
	}
}
const upload = multer({
	storage,
	limits: {
		fileSize: 1024 * 1024 * 5
	},
	fileFilter
});
/* multer stuff for image uploads */

router.post('/newproduct', (req, res) => {
	const titleCase = (title) => {
		return title.toLowerCase().split(' ').map((word, index) => {
			const noCaps = ['a', 'for', 'of', 'the'];
			if (index === 0 || noCaps.indexOf(word) === -1) return word.replace(word[0], word[0].toUpperCase());
			else return word;
		}).join(' ');
	}
	const priceCase = (price) => {
		let newPrice = price;
		if (price.indexOf('$') === -1) newPrice = `$${newPrice}`;
		if (price.indexOf('.') === -1) newPrice = `${newPrice}.00`;
		return newPrice;
	}
	mongo.connect(mongoURI, (err, client) => {
		if (err) throw err;
		const db = client.db(process.env.DB_NAME);
		const collection = db.collection(process.env.COLLECTION);
		/*collection.insert({
			name: titleCase(req.body.name),
			price: priceCase(req.body.price),
			image: req.body.image,
			description: req.body.description
		});*/
		console.log(req.body.image.imageData);
		client.close();
	})
});



module.exports = router;