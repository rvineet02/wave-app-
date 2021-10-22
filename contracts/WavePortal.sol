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

    // Event:Events are inheritable members of contracts. When you call them, they
    // cause the arguments to be stored in the transaction’s log — a special data
    // structure in the blockchain. These logs are associated with the address of the contract
    // The definition of the event contains the name of the event and
    // the parameters you want to save when you trigger the event.

    event NewWave(address indexed from, uint256 timestamp, string message);

    // struct allows us to create a custom data structure
    struct Wave {
        address waver; // address of user who waved
        string message; // message user sent
        uint256 timestamp; // timestamp when user waved
    }

    Wave[] waves; // variables waves that is an array of strutcts, Waves

    constructor() {
        console.log("I am a smart contract");
    }

    function wave(string memory _message) public {
        totalWaves += 1;
        console.log("%s has waved", msg.sender);
        // msg.sender:
        // wallet address of the person who called the function.
        // essentially like built in auth, keeps track of uniquely who called what function
        // to call a smart contract function, you need to be connected with a valid wallet

        // store data in wavwe array using Wave struct
        waves.push(Wave(msg.sender, _message, block.timestamp));

        // emiting event so it can be stored in the transaction log
        emit NewWave(msg.sender, block.timestamp, _message);
    }

    // return the struct array
    // simplifies process to retireve information from our website
    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves", totalWaves);
        return totalWaves;
    }
}
