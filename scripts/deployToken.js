const hre = require("hardhat");

async function main() {
  
  const TokenFactory = await hre.ethers.getContractFactory("Token");
  const TokenContract = await TokenFactory.deploy();

  console.log(`Token Deployed with contract address : ${TokenContract.target}`)
  require('fs').writeFileSync(`./deployments/Token/${new Date().toISOString().substring(0,10)}_${Date.now()}_${TokenContract.target}`, JSON.stringify(TokenContract, null, 4));
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});