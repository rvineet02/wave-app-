const main = async () => {
	//compile our contract and generate the necessary files we need
	// under the artifacts directory
	const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
	
	// hardhat will create a local ethereum network for us, but just for this contract. 
	// evertime you run the contract, it'll create a fresh blockchain to make it easier to debug 
	const waveContract = await waveContractFactory.deploy();
	
	// wait till the contract is officially deployed to our local blockchain;
	// constructor runs when we actually deploy. 
	await waveContract.deployed()

	//this is how we find our contract on the blockchain. 
	console.log("Contract Deployed to:", waveContract.address);
};

const runMain = async() => {
	try{
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};


runMain();