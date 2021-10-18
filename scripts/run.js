const main = async () => {


	const [owner, randomPerson] = await hre.ethers.getSigners();

	//compile our contract and generate the necessary files we need
	// under the artifacts directory
	const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
	
	// hardhat will create a local ethereum network for us, but just for this contract. 
	// evertime you run the contract, it'll create a fresh blockchain to make it easier to debug 
	// waveContractFactory.deploy() deploys our contract to the blockchain
	// our functions become available to be called because of the public keyword in declaration (kind of like a public API endpoint)

	const waveContract = await waveContractFactory.deploy();
	
	// wait till the contract is officially deployed to our local blockchain;
	// constructor runs when we actually deploy. 
	await waveContract.deployed()

	//this is how we find our contract on the blockchain. 
	console.log("Contract Deployed to:", waveContract.address);
	console.log("Contract deployed by: ", owner.address);

	let waveCount;
	waveCount = await waveContract.getTotalWaves();

	let waveTxn = await waveContract.wave();
	await waveTxn.wait();
	waveCount = await waveContract.getTotalWaves();

	waveTxn = await waveContract.connect(randomPerson).wave();
	await waveTxn.wait();

	waveCount = await waveContract.getTotalWaves();

	// lines 25-29 are us manually calling our functions (similar to an API call)
	// we get # of waves, then wave and get # of waves to check if it has been updated after the wave 


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