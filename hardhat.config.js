/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "ropsten",
  networks: {
    abc: {
      url: "http://127.0.0.1:8545/",
      accounts: ["0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0"]
    },
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/r9u1NsjWCThozj5NVdmfjOncaWoT3gkK",
      accounts: ["0x16d751e0312aec3a4b06ad26f5bdd1700eb3f438c9ed8bee4b11a4a607b1782a"]
    }
  }
};
