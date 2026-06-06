const express = require('express');
const {wallet_balance} = require('../controllers/wallet');
const router  = express.Router();

router.get("/balance/:address", async (req, res) => {
    wallet_balance(req, res);
});

module.exports = router;