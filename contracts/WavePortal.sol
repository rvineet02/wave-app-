// SPDX-License-Identifier: UNLICENSED

// specifies the version of the solidity compiler we want to use.
pragma solidity ^0.8.0;

// used to debug smart contracts
import "hardhat/console.sol";

// smart contracts looks like a class in other languages.
// Once we initialize this contract, the constructor will print out that line
contract WavePortal {
    constructor() {
        console.log("yo yo yo, I am a contract and I am smart");
    }
}
