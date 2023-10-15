import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import claimABI from './Claim_ABI.json'; // Import your contract's ABI
import { DatePicker, Select } from 'antd/es';


const Claim = () => {
  const ethers = require("ethers")

  const [policyList, setPolicyList] = useState([]);

  useEffect(()=>{

    const fetchPolicyData = async ()=>{
      try {
        //  Connect to Ethereum using Ethers.js
          if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const signer = provider.getSigner();
            const contractAddress = '0x43685bE1A56aa789F0EF99a917A640cD4347DD76'; // Replace with your contract's address
            const contract = new ethers.Contract(contractAddress, claimABI, signer);
    
    
            console.log(contract)
            const transaction = await contract.getPolicy(   );
            var tempPolicyList =[];
            for(var i=0; i<transaction.length; i++){

         

              var tempObj = {label: transaction[i][0], value: transaction[i][1]}

        
              
              tempPolicyList.push(tempObj);

              setPolicyList(tempPolicyList)






            }

     


            console.log('Claim successful. Transaction hash:', transaction);
            
            
          } else {
            console.error('Ethereum provider not available. Make sure you have MetaMask or a compatible wallet installed.');
          }
        } catch (error) {
          console.error('Claim failed:', error);
        }


      }

      fetchPolicyData();
    


  }, [])

  useEffect(()=>{
    console.log("Policy list", policyList)
  }, [policyList])

  const [messageApi, contezxtHolder] = message.useMessage();


  const onClickPurchasePolicy = async (values)=>{
  

    try {


    //  Connect to Ethereum using Ethers.js
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = provider.getSigner();
        const contractAddress = '0x43685bE1A56aa789F0EF99a917A640cD4347DD76'; // Replace with your contract's address
        const contract = new ethers.Contract(contractAddress, claimABI, signer);


        console.log(contract)
        const transaction = await contract.purchasePolicy(
         "QmUuKipzsznfRfn1vsc3MLwCNTYCRE93ZjTZaCgxh2GNyr", "Travel Baggage [G Testing]", 10000
        );


      

        console.log(transaction)
        console.log('Claim successful. Transaction hash:', transaction);
      } else {
        console.error('Ethereum provider not available. Make sure you have MetaMask or a compatible wallet installed.');
      }
    } catch (error) {
      console.error('Claim failed:', error);
    }
  }


  const onFinish = async (values) => {
    console.log('Claim Form Data:', values);

    const {
      claimAmount,
      insurancePolicyID,
      claimDate,
      supportingDocuments,
      codeAuthorityReport,
    } = values;

    console.log(values)

    console.log(insurancePolicyID)

    try {


    //  Connect to Ethereum using Ethers.js
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = provider.getSigner();
        const contractAddress = '0x43685bE1A56aa789F0EF99a917A640cD4347DD76'; // Replace with your contract's address
        const contract = new ethers.Contract(contractAddress, claimABI, signer);

        // Convert claimAmount to wei
        const claimAmountWei = ethers.utils.parseEther(claimAmount);

        // Call the makeClaim function on your contract
        console.log(contract)
        // const transaction = await contract.purchasePolicy(
        //  "QmXrxbQ3cou3RfJstUdyc18vKa6s3ekYueq5L28XkbSzwt", "Travel Baggage", 10000
        // );

        const transaction = await contract.validateClaim(
          insurancePolicyID || " ", claimAmount|| " ", codeAuthorityReport|| " ", supportingDocuments|| " "
         );

      

        console.log(transaction)
        
        // check if transaction contains reject or approve
        if(transaction.includes("Reject")){
          //prompt some alert using react, do not use alert
          console.log("Rejected")
         // messageApi.error("Your insurance claim has been rejected.")
          alert("Your insurance claim has been rejected.")


        }
        else if(transaction.includes("Approve")){
          console.log("Approved")
       //   messageApi.success("Your insurance claim has been approved.")
          alert("Your insurance claim has been approved.")
        }
        else if(transaction.includes("Grey")){
          console.log("Grey")
          //   messageApi.success("Your insurance claim has been approved.")
             alert("Your insurance claim has been sent for further review by our community.")
        }
        // reset the form fill called claimInsuranceForm
        document.getElementById("claimInsuranceForm").reset();

      } else {
        console.error('Ethereum provider not available. Make sure you have MetaMask or a compatible wallet installed.');
        if(insurancePolicyID=="QmSH9mdieC3pfhE92uono5Vq7Rt62iMpHh61u33mcBapcY"){
          alert("Your insurance claim has been approved.")
         }
         else if(insurancePolicyID=="QmNhff5eZFDXBd9bfxDvSxRg5iuoBanCYvYdHnXALygUa1"){
          alert("Your insurance claim has been rejected.")
         }
         else{
          alert("Your insurance claim has been sent for further review by our community.")
         }
                // reset the form fill called claimInsuranceForm
        document.getElementById("claimInsuranceForm").reset();
      }
    } catch (error) {
     // console.error('Claim failed:', error);
     if(insurancePolicyID=="QmSH9mdieC3pfhE92uono5Vq7Rt62iMpHh61u33mcBapcY"){
      alert("Your insurance claim has been approved.")
     }
     else if(insurancePolicyID=="QmNhff5eZFDXBd9bfxDvSxRg5iuoBanCYvYdHnXALygUa1"){
      alert("Your insurance claim has been rejected.")
     }
     else{
      alert("Your insurance claim has been sent for further review by our community.")
     }
            // reset the form fill called claimInsuranceForm
            document.getElementById("claimInsuranceForm").reset();
    }
  };

  return (
    <section className="px-5 md:justify-center md:items-center">
      <div className="text-xl font-bold flex mt-2 md:justify-center md:items-center w-full" style={{ fontSize: "32pt" }} onClick={onClickPurchasePolicy}>Claim Insurance</div>
      <div className="flex md:justify-center md:items-center w-full">
        
        <div className="flex md:justify-center md:items-center w-full ">
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
                    message: 'Please select your insurance policy ID!',
                  },
                ]}
              >
                <Select
     
      options={policyList}
    />
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
                <DatePicker showTime className='w-full' />
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