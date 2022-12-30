const express = require('express');

const router = express.Router();

const controllerVenueMonk = require('../venuemonk controllers/controllerVenueMonk.js');

router.post('/addLatestNews', controllerVenueMonk.addNewsDetailsInDatabase);

router.get('/allEmployee',  controllerVenueMonk.displayAllNews);

router.get('/leftswap', controllerVenueMonk.getNewsOnLeftSwap);

router.put('/leftUpdateRead/:newsId',  controllerVenueMonk.leftUpdateRead);

router.get('/rightswap', controllerVenueMonk.getNewsOnRightSwap);

router.put('/rightUpdateRead/:newsId',  controllerVenueMonk.rightUpdateRead);

module.exports = router;