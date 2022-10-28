require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
require("@openzeppelin/hardhat-defender");
require('dotenv').config();

const { API_URL, PRIVATE_KEY, DEFENDER_TEAM_API_KEY, DEFENDER_TEAM_API_SECRET_KEY } = process.env;

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
      }
    }
  },
  paths: {
    artifacts: './src/artifacts'
  },
  mocha: {
    timeout: 30000000
  },
  defaultNetwork: "georli",
  networks: {
    hardhat: {},
    georli: {
      url: API_URL,
      allowUnlimitedContractSize: true,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 7000000,
      gasPrice: 30000000000
    },
  },
  etherscan: {
    apiKey: {
      goerli: "J4SA8XSSPGTB369N1GTWE6Z5FPMR6QY3EG"
    }
  },
  defender: {
    apiKey: DEFENDER_TEAM_API_KEY,
    apiSecret: DEFENDER_TEAM_API_SECRET_KEY
  }
};
