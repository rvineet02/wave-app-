const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log('Deploying contracts with account: ', deployer.address);
  console.log('Account balance: ', accountBalance.toString());

  const Token = await hre.ethers.getContractFactory('WavePortal');
  const portal = await Token.deploy();
  await portal.deployed();

  console.log('WavePortal address: ', portal.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();

// npx hardhat node is a server for hardhat to make etheruem network stay alive 
// npx hardhat run scripts/deploy.js --network localhost : deploy locally 
// npx hardhat run scripts/deploy.js --network rinkeby : deploy to rinkeby network 

// WavePortal address:  0xF9C1D356D8815b5EBa8fa3A4a41857eB3da0d492 : deployed to rinkeby 
