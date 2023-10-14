pragma solidity ^0.8.0;
struct reportResult{
    bool isPassed;
    uint256 maxClaimAmount;
}

struct policy {
    string name;
    string ipfsHash;
    bool isActive;
    uint startDate;
    uint endDate;
    uint256 coverageAmount;
    int maxClaim;
    int pastClaimNumber;
}

struct criteria{
    string criteriaName;
    string comparator;
    string refer;
}

contract PoliceReportStorage {
    mapping(string => reportResult) public policeReports;

    // Function to add a hashed police report to the contract
    function addPoliceReport(string memory ipfsHash, bool isPassed, uint256 maxClaimAmount) public {
        require(policeReports[ipfsHash].maxClaimAmount == 0, "Report with this ID already exists");
        policeReports[ipfsHash] = result(isPassed, maxClaimAmount);
    }

    // Function to retrieve the hashed value of a police report by its ID
    function getPoliceReport(string memory ipfsHash) public view returns (result memory) {
        require(policeReports[ipfsHash].maxClaimAmount != 0, "Report with this ID does not exist");
        return policeReports[ipfsHash];
    }
}

contract TrustedInsurance {

    mapping(address => policy[]) public insured;

    event PolicyCreated(address indexed policyOwner, string ipfsHash);
    event ClaimValidated(address indexed policyOwner, bool isValid);

    // Create a new policy
    function purchasePolicy(string memory _ipfsHash, string memory _policyName, uint256 claimAmount) public {
        for (uint256 i = 0; i < insured[msg.sender].length; i++) {
            require(!(keccak256(abi.encodePacked((insured[msg.sender][i].ipfsHash))) == keccak256(abi.encodePacked((_ipfsHash)))
             && insured[msg.sender][i].isActive == true), "Policy already exists for this user");
        }

        insured[msg.sender].push(policy(_policyName, _ipfsHash, true, block.timestamp, block.timestamp + 4 weeks, claimAmount, 3, 0));

        emit PolicyCreated(msg.sender, _ipfsHash);
    }

    // Create a new policy
    function getPolicy() public view returns(policy[] memory) {
        return insured[msg.sender];
    }

    // Validate claim based on judging criteria
    function validateClaim(string memory _ipfsHash, uint256 memory _claimAmount, string memory _reportCode, string memory _docLinks) view  public returns (bool) {
        for (uint256 i = 0; i < insured[msg.sender].length; i++) {
            require(keccak256(abi.encodePacked((insured[msg.sender][i].ipfsHash))) == keccak256(abi.encodePacked((_ipfsHash))) && insured[msg.sender][i].isActive == true, "No active policy found");
        }

        policy memory targetPolicy;
        for (uint256 i = 0; i < insured[msg.sender].length; i++) {
            if(keccak256(abi.encodePacked((insured[msg.sender][i].ipfsHash))) == keccak256(abi.encodePacked((_ipfsHash)))){
                targetPolicy=insured[msg.sender][i];
            }
        }

        bool isApproved;
        bool isGrey;
        
        reportResult targetReport = getPoliceReport(_reportCode);
        if(_claimAmount < targetPolicy.coverageAmount && _claimAmount < targetReport.maxClaim && targetReport.pastClaimNumber < targetReport.maxClaim
        && block.timestamp < targetPolicy.endDate && block.timestamp > targetPolicy.startDate && targetReport.isPassed){
            isApproved = true;
        }else{
            isApproved = false;
        }

        //if claimAmount

    }
}