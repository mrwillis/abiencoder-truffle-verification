const HDWalletProvider = require("truffle-hdwallet-provider");
const {utils} = require("ethers")

module.exports = {
  compilers: {
    solc: {
      version: "0.5.16",
      settings: {
        optimizer: {
          enabled: true,
          details: { yul: true },
        },
      },
    },
  },
  networks: {
    rinkeby: {
      provider: new HDWalletProvider(
        process.env.MNEMONIC,
        process.env.PROVIDER_URL
      ),
      gas: 6900000,
      gasPrice: utils.parseUnits("20", "gwei").toString(),
      network_id: 4,
      skipDryRun: true,
    },
  },
  //
};
