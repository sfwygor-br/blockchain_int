require('dotenv').config();
const express    = require('express');
const cors       = require('cors');
const { ethers } = require('ethers');


const app = express();

app.use(cors());
app.use(express.json());

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

app.get("/network", async (req, res) => {
    try{
        const network = await provider.getNetwork();
        res.json({
            name: network.name,
            chainId: network.chainId.toString()
        });
    } catch (error) {
        res.status(500).json({
            error : "Failed to get network information",
            details : error.message
        });
    }
});


app.listen(process.env.SYSTEM_PORT, () => {
    console.log(`Server running on port ${process.env.SYSTEM_PORT} `);
});

