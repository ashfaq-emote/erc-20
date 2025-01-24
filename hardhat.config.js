require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
require('@nomicfoundation/hardhat-ethers');
require('@nomicfoundation/hardhat-verify');
require('hardhat-gas-reporter');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat:{},
    polygon_amoy: {
      url: `https://polygon-amoy.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: {
      polygon: process.env.POLYGON_SCAN_KEY,
      polygonAmoy: process.env.POLYGON_SCAN_KEY
    }
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  gasReporter: {
    enabled: true,
    coinmarketcap: process.env.COINMARKETCAP_KEY,
    currency: 'USD',
    L1Etherscan: process.env.POLYGON_SCAN_KEY,
    L1: 'polygon',
    showTimeSpent: true,
    reportPureAndViewMethods: true
  }
};