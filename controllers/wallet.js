const {ethers} = require('ethers');
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

async function wallet_balance(req, res) {
    try {
        const {address} = req.params;
        
        if (!ethers.isAddress(address)) {
            return res.status(400).json({
                error : "Invalid wallet address"
            });
        }

        const balanceWei = await provider.getBalance(address);
        const balanceEth = ethers.formatEther(balanceWei);

        res.json({
            address,
            balanceWei : balanceWei.toString(),
            balanceEth
        });


    }catch (error) {
        res.status(500).json({ 
            error: "Failed to fetch wallet balance",
            message: error.message
        })
    }
}

module.exports = {wallet_balance};