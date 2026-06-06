const {ethers} = require('ethers');

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

async function check_network(req, res) {
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
}

module.exports = {check_network};