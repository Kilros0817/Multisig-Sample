// scripts/propose-upgrade.js
const { defender } = require("hardhat");

async function main() {
  const proxyAddress = '0x9eB85422755D9b05e250413e31720D2a9f36cC6c';

  const Lock = await ethers.getContractFactory("Lock");
  console.log("Preparing proposal...");
  const proposal = await defender.proposeUpgrade(proxyAddress, Lock);
  console.log("Upgrade proposal created at:", proposal.url);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })