// SPDX-License-Identifier: UNLICENSED

// specifies the version of the solidity compiler we want to use.
pragma solidity ^0.8.0;

// used to debug smart contracts
import "hardhat/console.sol";

// smart contracts looks like a class in other languages.
// Once we initialize this contract, the constructor will print out that line
contract WavePortal {
    // state variable and
    //it is stored permanantly sotred in contract storage
    uint256 totalWaves;

    constructor() {
        console.log("yo yo yo, I am a contract and I am smart");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved", msg.sender);
        // msg.sender:
        // wallet address of the person who called the function.
        // essentially like built in auth, keeps track of uniquely who called what function
        // to call a smart contract function, you need to be connected with a valid wallet
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves", totalWaves);
        return totalWaves;
    }
}
