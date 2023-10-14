// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HashReport{
    mapping(bytes32 => string) private hashToString;

    function saveString(string memory input) public {
        bytes32 hash = keccak256(abi.encodePacked(input));
        hashToString[hash] = input;
    }

    function numberToString(bytes32 hash) public view returns (string memory) {
        return hashToString[hash];
    }
}