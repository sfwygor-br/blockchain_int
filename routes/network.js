const express = require('express');
const {check_network} = require('../controllers/network');

const router = express.Router();

router.get("/network", async (req, res) => {
    check_network(req, res);
});

module.exports = router;