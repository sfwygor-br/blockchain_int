require('dotenv').config();
const express    = require('express');
const cors       = require('cors');
const { ethers } = require('ethers');
const network_routes = require('./routes/network');
const wallet_routes = require('./routes/wallet');


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', network_routes);
app.use('/wallet', wallet_routes);

app.listen(process.env.SYSTEM_PORT, () => {
    console.log(`Server running on port ${process.env.SYSTEM_PORT} `);
});

