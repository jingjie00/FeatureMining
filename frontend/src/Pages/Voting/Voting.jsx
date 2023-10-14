import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import claimABI from './Claim_ABI.json'; // Import your contract's ABI
import { voteAvailableArr } from '../../DataArr/voteAvailableArr';


const Voting = () => {
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

  const [statusArr, setStatusArr] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);

  return (
    <div className="px-5 ">
      <div className="text-xl font-bold mt-2 mb-3 justify-start" style={{ fontSize: "32pt" }}>Voting System</div>
      
      <div className='p-3 rounded-lg bg-gray-300 w-fit'>Credit Score: 89</div>


      {voteAvailableArr.map((i, index)=>{
        return <div key={i +"-vote-record-"+ statusArr[i-1]} className={`rounded-lg my-3 p-2 ${statusArr[i-1]==1? 'bg-green-200': ''} ${statusArr[i-1]==0? 'bg-red-200': ''} ${statusArr[i-1]==-1? 'bg-blue-200': ''} `}>
           
           <div className='flex-row flex justify-between gap-2'> <div className='flex flex-col items-start justify-start align-center '> <div className='font-semibold'>Date: {i.date}</div>
            <div> <strong>Description:</strong> {i.description}</div>
            <div><strong>Documents:</strong> {i.supportingDocuments}</div>
            <div><strong>Amount:</strong> {i.transactionAmount}</div></div>

            
            

            <div className='flex justify-end gap-3 align-center items-center mr-5'> <div className='flex align-center'> <Button className='primary outline-double text-black align-center' style={{background: "#90EE90"}} onClick={()=>{

              alert("You have approved an insurance claim.")

               
            }}>Approve</Button>  </div>
            <div className='flex align-center'> <Button className='primary outline-double text-black' style={{background: "#ffcccb"}} onClick={()=>{

alert("You have rejected an insurance claim.")

}}>Reject</Button>   </div></div>
            
            </div>

          
           
           


           
        </div>
      })}

      


    </div>
  );
};

export default Voting;

