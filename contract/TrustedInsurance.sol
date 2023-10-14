pragma solidity ^0.8.0;

import 'ipfs-http-client/with-cors'; // Import the IPFS library

contract TrustedInsurance {
    string public policyHash;

    // Set the IPFS hash
    function setPolicyHash(string memory _ipfsHash) public {
        policyHash = _ipfsHash;
    }

    // Retrieve and verify the IPFS data
    function claimInsurance(string memory userInput) public view returns (bool) {
        string memory retrievedPolicy;
        string memory claimDetail = userInput; // Replace with your expected data

        // Initialize IPFS client
        IpfsHttpClient.Client memory policyFS = IpfsHttpClient.Client("http://localhost:5001");

        // Retrieve data from IPFS using the stored hash
        (retrievedData, ) = policyFS.cat(policyHash);

        // Check if the retrieved data matches the user input
        // compare the claim detail here
        return (keccak256(abi.encodePacked(retrievedData)) == keccak256(abi.encodePacked(claimDetail)));
    }
}