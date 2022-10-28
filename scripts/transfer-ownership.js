const {upgrades} = require("hardhat");

async function main () {
    const gnosisSafe = '0xD68567497336964cbFc0d258DA1D9a2A4D71983F';
  
    console.log('Transferring ownership of ProxyAdmin...');
    // The owner of the ProxyAdmin can upgrade our contracts
    await upgrades.admin.transferProxyAdminOwnership(gnosisSafe);
    console.log('Transferred ownership of ProxyAdmin to:', gnosisSafe);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });