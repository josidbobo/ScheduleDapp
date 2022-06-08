/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.9",
  paths:{
    sources: "./contracts",
    tests: "./test",
    artifacts: "./schedule-frontend/src/artifacts"
  }
};
