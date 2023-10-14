<p align="center">
  <a href="" rel="noopener">
 <img src="./logo-reg.png" alt="inShield"></a>
</p>
<h3 align="center">inShield</h3>


## 📝 Table of Contents

- [Project Name](#project_name)
- [Tagline](#tagline)
- [The Problem it Solves](#problem)
- [Challenges we ran into](#challenges)
- [Technologies We Used](#tech)
- [Link](#link)
- [Video Demo](#video)
- [Cover Image](cover_img)

## 🧐 Project Name <a name = "project_name"></a>

Our project name is called inShield.

## 💡 Tagline <a name = "tagline"></a>

Community-Driven Insurance : Where Community Shapes Insurance

## ⛓️ The Problem it Solves <a name = "problem"></a>

1. Fraud Detection and Prevention:
Insurance fraud has always been a pervasive issue within the industry, costing insurers billions of dollars annually. The blockchain's immutability and transparency provide a robust defense against fraudulent claims. Through its decentralized ledger, the application securely records and time-stamps each claim's details, making it nearly impossible for policyholders to tamper with information or submit false claims.

2. Eliminating Manual Verification:
  One of the most significant problems this blockchain application addresses is the burden of manual claim verification. In the traditional insurance industry, each claim must be painstakingly reviewed by insurance agents, a process that often involves sifting through heaps of documents and verifying the authenticity of the provided information. This manual verification process is not only time-consuming but also prone to human errors, leading to delayed or incorrect claim processing

3. Increased Trust and Transparency:
  By utilizing blockchain technology, this application fosters a level of trust and transparency that has been lacking in the insurance industry. Every step of the claim verification process, from the submission of all the necessary documents, is recorded on the blockchain, creating an immutable record that all stakeholders can trust. This transparency reduces disputes and fosters a sense of fairness among policyholders.

## 🚀 Challenges we ran into <a name = "challenges"></a>

Write about what you could not develop during the course of the Hackathon; and about what your project can achieve
in the future.

## 🏁 Technologies We Used <a name = "tech"></a>

React.js, Ethers.js, JavaScript, Solidity, HTML, CSS, 

### Link <a name = "link"></a>

### Video Demo <a name = "video"></a>

### Cover Image <a name = "cover_img"></a>

What things you need to install the software and how to install them.

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

## 🎈 Usage <a name="usage"></a>

Add notes about how to use the system.

## ⛏️ Built With <a name = "tech_stack"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@kylelobo](https://github.com/kylelobo) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors)
who participated in this project.

## 🎉 Acknowledgments <a name = "acknowledgments"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References

Police Report Storage Contract
 - Address: 0x6FB195624Dd69E375798f4878525D0e3156F7735
 - ABI: [
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "ipfsHash",
                "type": "string"
              },
              {
                "internalType": "bool",
                "name": "isPassed",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "maxClaimAmount",
                "type": "uint256"
              }
            ],
            "name": "addPoliceReport",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "ipfsHash",
                "type": "string"
              }
            ],
            "name": "getPoliceReport",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "bool",
                    "name": "isPassed",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "maxClaimAmount",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct reportResult",
                "name": "",
                "type": "tuple"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "name": "policeReports",
            "outputs": [
              {
                "internalType": "bool",
                "name": "isPassed",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "maxClaimAmount",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "ipfsHash",
                "type": "string"
              },
              {
                "internalType": "bool",
                "name": "isPassed",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "maxClaimAmount",
                "type": "uint256"
              }
            ],
            "name": "updatePoliceReport",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]

Trusted Insurance Contract
- Address: 0x316C5f67462710C30fe8e5435EF8504ED0570E14
- ABI:  [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_policeReportStorageAddress",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "policyOwner",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "bool",
                "name": "isValid",
                "type": "bool"
              }
            ],
            "name": "ClaimValidated",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "policyOwner",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "ipfsHash",
                "type": "string"
              }
            ],
            "name": "PolicyCreated",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_ipfsHash",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_policyName",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "claimCoverageAmount",
                "type": "uint256"
              }
            ],
            "name": "purchasePolicy",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_ipfsHash",
                "type": "string"
              }
            ],
            "name": "updatePolicyClaimNum",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getPolicy",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "ipfsHash",
                    "type": "string"
                  },
                  {
                    "internalType": "bool",
                    "name": "isActive",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "startDate",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "endDate",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "coverageAmount",
                    "type": "uint256"
                  },
                  {
                    "internalType": "int256",
                    "name": "maxClaim",
                    "type": "int256"
                  },
                  {
                    "internalType": "int256",
                    "name": "pastClaimNumber",
                    "type": "int256"
                  }
                ],
                "internalType": "struct policy[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "insured",
            "outputs": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "ipfsHash",
                "type": "string"
              },
              {
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "startDate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "endDate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "coverageAmount",
                "type": "uint256"
              },
              {
                "internalType": "int256",
                "name": "maxClaim",
                "type": "int256"
              },
              {
                "internalType": "int256",
                "name": "pastClaimNumber",
                "type": "int256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "policeReportStorage",
            "outputs": [
              {
                "internalType": "contract PoliceReportStorage",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_ipfsHash",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "_claimAmount",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "_reportCode",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_docLinks",
                "type": "string"
              }
            ],
            "name": "validateClaim",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
        ]