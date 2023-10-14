pragma solidity ^0.8.0;
contract UserReputationContract {
    mapping(address => uint256) public userReputations;

    // Event to log reputation update
    event ReputationUpdated(address user, uint256 reputation);


    // Function to update user reputation for good behavior
    function updateGoodReputation(address user ) external {
        userReputations[user] += 1;

        // Emit event for reputation update
        emit ReputationUpdated(user, userReputations[user]);
    }

    // Function to update user reputation for violations
    function updateBadReputation(address user) external {
        userReputations[user] -= 1;
        
        // Emit event for reputation update
        emit ReputationUpdated(user, userReputations[user]);
    }
    
}