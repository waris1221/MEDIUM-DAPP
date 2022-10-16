// require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-etherscan");
// const dotenv = require("dotenv");
// const { task } = require("hardhat/config");

// // require("dotenv").config({ path: ".env" });

// // const QUICKNODE_HTTP_URL = process.env.POLYGON_MUMBAI;
// // const PRIVATE_KEY = process.env.PRIVATE_KEY;

// task("accounts", "prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for(const account of accounts){
//     console.log(account.ad)
//   }
// });

// dotenv.config();

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.11",
//   networks: {
//     mumbai: {
//       url: process.env.POLYGON_MUMBAI,
//       accounts: [process.env.PRIVATE_kEY]
//     },
//     etherscan:{
//       apiKey: process.env.API_KEY,
//     }
//   }
// };

// require('dotenv').config();
// require("@nomiclabs/hardhat-ethers");
// require("@nomiclabs/hardhat-etherscan");

// module.exports = {
//   defaultNetwork: "matic",
//   networks: {
//     hardhat: {
//     },
//     matic: {
//       url: "https://rpc-mumbai.maticvigil.com",
//       accounts: [process.env.PRIVATE_KEY]
//     }
//   },
//   etherscan: {
//     apiKey: process.env.POLYGON_MUMBAI
//   },
//   solidity: {
//     version: "0.8.11",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       }
//     }
//   },
// }



/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
const { POLYGON_MUMBAI, PRIVATE_KEY, API_KEY } = process.env;
module.exports = {
        solidity: '0.8.11',
        defaultNetwork: 'mumbai',
        networks: {
            hardhat: {},
            mumbai: {
               url: POLYGON_MUMBAI,
               accounts: [`0x${PRIVATE_KEY}`],
           }
        },
        etherscan: {
           apiKey: API_KEY,
        }
};