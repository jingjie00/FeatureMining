pragma solidity ^0.8.0;

// Make is a contract called Voting. It have several methods and variables.


// First, it can get pendingClaiming from the InsuranceClaimingContract
// Second, it can receive user vote and update to the pendingClaiming
// There might be a situation where the entries is for verification which we already have ground truth
// If the user violate that, update the another contract called UserReputationContract
// If the user is good, update the another contract called UserReputationContract
// After certain input is reach for the pendingClaiming for a specific claim, weight the vote according to the UserReputationContract, and label it before submitback to Insurance Claiming Contracr
// The Insurance Claiming Contract will then update the claim status.
// The user will receive reputation from this cycle


