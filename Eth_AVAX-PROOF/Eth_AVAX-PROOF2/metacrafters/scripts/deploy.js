const { ethers } = require('hardhat');

async function main() {
  // Compile the contract
  const TaskManager = await ethers.getContractFactory('TaskManager');
  console.log('Compiling contract...');

  // Deploy the contract
  const taskManager = await TaskManager.deploy();
  console.log('Deploying contract...');

  // Wait for the contract to be mined and get the deployed address
  await taskManager.deployed();
  console.log('Contract deployed to:', taskManager.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
