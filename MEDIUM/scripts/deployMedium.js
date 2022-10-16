
const hre = require("hardhat");

async function main() {

  const Medium = await hre.ethers.getContractFactory("Medium");
  const medium = await Medium.deploy(
    "Medium Blog",
    "BLOG",
    "1000000000000000" // 0.001 Matic
  );

  await medium.deployed();

  console.log(
    `Medium contract address:  ${medium.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
