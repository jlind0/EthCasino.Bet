require("@nomicfoundation/hardhat-ethers");
require("@typechain/hardhat");

/** @type import('hardhat/config').HardhatUserConfig */
const config = {
    solidity: {
        version: "0.8.28",
        settings: {
            optimizer: {
                enabled: true,
                runs: 100,
            },
        },
    },
    typechain: {
        outDir: "typechain",
        target: "ethers-v6",
    },
};

module.exports = config;
