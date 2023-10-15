import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import claimABI from './Claim_ABI.json'; // Import your contract's ABI
import { voteAvailableArr } from '../../DataArr/voteAvailableArr';


const Voting = () => {

  var voteAvailableArr = [
    {
        "id": 1,
        "date": "2023-09-09 18:30:37",
        "description": "Broken luggage at airport.....",
        "supportingDocuments": "https://picsum.photos/200/300",
        "transactionAmount": 1234567,
        "status": -1
    },
    {
        "id": 2,
        "date": "2023-10-04 09:31:45",
        "description": "Car accident in Ipoh",
        "supportingDocuments": "https://picsum.photos/300/200",
        "transactionAmount": 9181,
        "status": -1

    },
    {
        "id": 3,
        "date": "2023-09-14 17:34:44",
        "description": "Medical",
        "supportingDocuments": "https://picsum.photos/600/300",
        "transactionAmount": 10095,
        "status": -1

    },
    {
        "id": 4,
        "date": "2023-09-26 06:50:41",
        "description": "Broken arm",
        "supportingDocuments": "https://picsum.photos/280/370",
        "transactionAmount": 15773,
        "status": -1
    },
    {
        "id": 5,
        "date": "2023-10-09 08:16:42",
        "description": "Lorry hit and run",
        "supportingDocuments": "https://picsum.photos/201/305",
        "transactionAmount": 18968,
        "status": -1

    },
    {
        "id": 6,
        "date": "2023-09-25 10:57:21",
        "description": "Earthquake",
        "supportingDocuments": "https://picsum.photos/204/320",
        "transactionAmount": 3108,
        "status": -1
    },
    {
        "id": 7,
        "date": "2023-10-04 05:06:24",
        "description": "Flood",
        "supportingDocuments": "https://picsum.photos/207/303",
        "transactionAmount": 29454,
        "status": -1
    },
    {
        "id": 8,
        "date": "2023-09-11 06:15:51",
        "description": "Tsunami",
        "supportingDocuments": "https://picsum.photos/270/340",
        "transactionAmount": 27102,
        "status": -1

    },
    {
        "id": 9,
        "date": "2023-09-06 19:35:22",
        "description": "Medical Reasons",
        "supportingDocuments": "https://picsum.photos/250/307",
        "transactionAmount": 1213,
        "status": -1

    },
    {
        "id": 10,
        "date": "2023-09-26 17:21:51",
        "description": "Hit and run",
        "supportingDocuments": "https://picsum.photos/280/360",
        "transactionAmount": 17935,
        "status": -1

    },
  
 
]

const [testArr, setTestArr ]= useState(voteAvailableArr);

  const ethers = require("ethers")
  const onFinish = async (values) => {

    const {
      claimAmount,
      insurancePolicyID,
      claimDate,
      supportingDocuments,
      codeAuthorityReport,
    } = values;

    try {


    //  Connect to Ethereum using Ethers.js
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = provider.getSigner();
        const contractAddress = '0x6FB195624Dd69E375798f4878525D0e3156F7735'; // Replace with your contract's address
        const contract = new ethers.Contract(contractAddress, claimABI, signer);

        // Convert claimAmount to wei
        const claimAmountWei = ethers.utils.parseEther(claimAmount);

        // Call the makeClaim function on your contract
        console.log(contract)
        const transaction = await contract.addPoliceReport(
         "11112345123456789098765111", false, 1999993
        );

      

        console.log(transaction)
        console.log('Claim successful. Transaction hash:', transaction);
      } else {
        console.error('Ethereum provider not available. Make sure you have MetaMask or a compatible wallet installed.');
      }
    } catch (error) {
      console.error('Claim failed:', error);
    }
  };


  return (
    <div className="px-5 ">
      <div className="text-xl font-bold mt-2 mb-3 justify-start" style={{ fontSize: "32pt" }}>Voting System</div>
      
      <div className='p-3 rounded-lg bg-gray-300 w-fit'>Credit Score: 89</div>


      {testArr.map((i, index)=>{
        return <div key={i +"-vote-record-"} className={`rounded-lg my-3 p-2 `}>
           
           <div className='flex-row flex justify-between gap-2'> <div className='flex flex-col items-start justify-start align-center '> <div className='font-semibold'>Date: {i.date}</div>
            <div> <strong>Description:</strong> {i.description}</div>
            <div><strong>Documents:</strong> {i.supportingDocuments}</div>
            <div><strong>Amount:</strong> {i.transactionAmount}</div></div>

            
            

            <div className='flex justify-end gap-3 align-center items-center mr-5'> <div className='flex align-center'> <Button className='primary outline-double text-black align-center' style={{background: "#90EE90"}} onClick={()=>{

              alert("You have approved an insurance claim.");

              //remove obj from array voteAvailableArr
              

             setTestArr(testArr.filter((ii)=>{
              return ii.id != i.id
            })) 
              
              


               
            }}>Approve</Button>  </div>
            <div className='flex align-center'> <Button className='primary outline-double text-black' style={{background: "#ffcccb"}} onClick={()=>{

alert("You have rejected an insurance claim.")
setTestArr(testArr.filter((ii)=>{
  return ii.id != i.id
})) 

}}>Reject</Button>   </div></div>
            
            </div>

          
           
           


           
        </div>
      })}

      


    </div>
  );
};

export default Voting;

