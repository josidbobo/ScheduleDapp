/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.9",
  paths:{
    sources: "./contracts",
    tests: "./test",
    artifacts: "../schedule-frontend/src/artifacts"
  },
  defaultNetwork: "localhost",
  networks:{
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/O38Edb4ZsFU9pHygWFcaT4PMF54xrsOk" ,
      accounts:["b64c8875e978cd2c53de64d4b24156b357f0cb62e270a76ea16c7f2f7ee7ac53"]
    }
  }
};
