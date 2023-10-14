import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import claimABI from './Claim_ABI.json'; // Import your contract's ABI
import { ethers } from 'ethers'; // Import ethers


const Claim = () => {
  const onFinish = async (values) => {
    console.log('Claim Form Data:', values);

    const {
      claimAmount,
      insurancePolicyID,
      claimDate,
      supportingDocuments,
      codeAuthorityReport,
    } = values;

    try {
      // Connect to Ethereum using Ethers.js
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = provider.getSigner();
        const contractAddress = '0x85DEdc89245F442286e58065Ec01641826ff03D2'; // Replace with your contract's address
        const contract = new ethers.Contract(contractAddress, claimABI, signer);

        // Convert claimAmount to wei
        const claimAmountWei = ethers.utils.parseEther(claimAmount);

        // Call the makeClaim function on your contract
        const transaction = await contract.makeClaim(
          claimAmountWei,
          insurancePolicyID,
          claimDate,
          supportingDocuments,
          codeAuthorityReport
        );

        await transaction.wait(); // Wait for the transaction to be mined
        console.log('Claim successful. Transaction hash:', transaction.hash);
      } else {
        console.error('Ethereum provider not available. Make sure you have MetaMask or a compatible wallet installed.');
      }
    } catch (error) {
      console.error('Claim failed:', error);
    }
  };

  return (
    <section className="px-5 md:justify-center md:items-center">
      <div className="text-xl font-bold flex mt-2" style={{ fontSize: "18pt" }}>Claim Insurance</div>
      <div className="flex">
        <div className="flex md:w-1/3 hidden md:contents md:block">{" "}</div>
        <div className="flex md:justify-center md:items-center w-full md:w-1/3">
          <div className="mt-3 md:w-3/4 ">
            <Form
              name="claimInsuranceForm"
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                label="Claim Amount"
                name="claimAmount"
                rules={[
                  {
                    required: true,
                    message: 'Please input your claim amount!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Insurance Policy ID"
                name="insurancePolicyID"
                rules={[
                  {
                    required: true,
                    message: 'Please input your insurance policy ID!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Claim Date"
                name="claimDate"
                rules={[
                  {
                    required: true,
                    message: 'Please input your claim date!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Supporting Documents (Link ONLY) (Optional)"
                name="supportingDocuments"
              >
                <Input className="rounded-lg" />
              </Form.Item>
              <Form.Item
                label="Code of Authority Report (Optional)"
                name="codeAuthorityReport"
              >
                <Input className="rounded-lg" />
              </Form.Item>
              <Form.Item label=" ">
                <Button className="primary text-white" htmlType="submit" style={{ background: "blue" }}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Claim;




// import React, { useState } from 'react';
// import { Button, Form, Input } from 'antd';
// import claimABI from './Claim_ABI.json'; // Import your contract's ABI
// import { ethers } from 'ethers'; // Import ethers


// const Claim = () => {

//    const onFinish = (values) => {
//       console.log('Success:', values);
//     };


//  return   <section className=" px-5 md:justify-center md:items-center">

// <div className="text-xl font-bold flex mt-2" style={{fontSize: "18pt"}}>Claim Insurance</div>


// <div className="flex">

// <div className="flex md:w-1/3 hidden md:contents md:block">{" "}</div>

   
//    <div className="flex md:justify-center md:items-center w-full md:w-1/3">

//                 <div className="mt-3 md:w-3/4 ">
//                   <Form name="claimInsuranceForm" labelWrap
//                     layout="vertical"
//     onFinish={onFinish}>
//  <Form.Item
//       label="Claim Amount"
//       name="claimAmount"
//       labelWrap
//       rules={[
//         {
//           required: true,
//           message: 'Please input your claim amount!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Insurance Policy ID"
//       name="insurancePolicyID"
//       labelWrap
//       rules={[
//         {
//           required: true,
//           message: 'Please input your insurance policy ID!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Claim Date"
//       name="claimDate"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your claim date!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Supporting Documents (Link ONLY) (Optional)"
//       name="supportingDocuments"
      
      
//     >
//       <Input className="rounded-lg" />
//     </Form.Item>

//     <Form.Item
//       label="Code of Authority Report (Optional)"
//       name="codeAuthorityReport"
     
//     >
//       <Input className="rounded-lg" />
//     </Form.Item>

                  
                 
//     <Form.Item label=" ">
//       <Button className="primary text-white" htmlType="submit" style={{background: "blue"}}>
//         Submit
//       </Button>
//     </Form.Item>
//                   </Form>
//                 </div>
//    </div>
// </div>

            
             
           
//         </section>
// };

// export default Claim;