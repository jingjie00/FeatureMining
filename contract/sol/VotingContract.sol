pragma solidity ^0.8.0;

// Import other contracts if needed
import "./InsuranceClaimingContract.sol";
import "./UserReputationContract.sol";

contract Voting {
    // Reference to other contracts
    // InsuranceClaimingContract public insuranceClaimingContract;
    // UserReputationContract public userReputationContract;

    // Struct to represent a vote
    struct Vote {
        address voter;
        uint8 decision; // 1 for approval, 2 for violation
    }

    // Mapping to store pending claimings and their corresponding votes
    mapping(uint256 => mapping(address => Vote)) public pendingClaimings;

    // Event to log vote submission
    event VoteSubmitted(uint256 claimId, address voter, uint8 decision);

    // Function to get pendingClaiming from InsuranceClaimingContract
    function getPendingClaiming(uint256 claimId) external view returns (ClaimingData) {
        // Get randome claiming entries from InsuranceClaimingContract
        ClaimingData memory pendingClaiming = insuranceClaimingContract.getPendingClaiming(claimId);

        // Return pendingClaiming
        return pendingClaiming;
    }

    // Function to receive user vote and update pendingClaiming
    function vote(uint256 claimId, uint8 decision) external {
        // Get pendingClaiming from InsuranceClaimingContract
        // ClaimingData memory pendingClaiming = insuranceClaimingContract.getPendingClaiming(claimId);

        // Implement logic to validate vote, update pendingClaiming, and update UserReputationContract accordingly
        //check if grounth truth is same with user decision
        if (pendingClaiming.groundTruth == decision) {
            userReputationContract.updateGoodReputation(msg.sender); 
        } else {
            userReputationContract.updateBadReputation(msg.sender);

        // Emit event for vote submission
        emit VoteSubmitted(claimId, msg.sender, decision);
    }

    // Function to label the vote and update InsuranceClaimingContract
    function labelVote(uint256 claimId) external {
        // Get pendingClaiming from InsuranceClaimingContract
         ClaimingData memory pendingClaiming = insuranceClaimingContract.getPendingClaiming(claimId);

        // Implement logic to weight the vote according to UserReputationContract and label it
        //get user reputation
        uint256 userReputation = userReputationContract.userReputations(msg.sender);
        //get vote
        Vote memory vote = pendingClaimings[claimId][msg.sender];
        //get decision
        uint8 decision = vote.decision;

        //weight the vote
        if (userReputation > 0) {
            if (userReputation < 10) {
                if (decision == 1) {
                    decision = 2;
                } else {
                    decision = 1;
                }
            } else if (userReputation < 20) {
                if (decision == 1) {
                    decision = 3;
                } else {
                    decision = 1;
                }
            } else {
                if (decision == 1) {
                    decision = 4;
                } else {
                    decision = 1;
                }
            }
        }

        // Update InsuranceClaimingContract with labeled vote
        insuranceClaimingContract.updateClaimStatus(claimId, labeledVote);

        // Emit event for vote labeling
        emit VoteLabeled(claimId, msg.sender, labeledVote);
    }
}
