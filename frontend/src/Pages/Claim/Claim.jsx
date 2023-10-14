import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
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
            const contractAddress = '0x6FB195624Dd69E375798f4878525D0e3156F7735'; // Replace with your contract's address
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


  const onClickPurchasePolicy = async (values)=>{
  

    try {


    //  Connect to Ethereum using Ethers.js
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = provider.getSigner();
        const contractAddress = '0x6FB195624Dd69E375798f4878525D0e3156F7735'; // Replace with your contract's address
        const contract = new ethers.Contract(contractAddress, claimABI, signer);


        console.log(contract)
        const transaction = await contract.purchasePolicy(
         "qwerghjktgyhfghjuytju", "Travel Baggage 3", 10000
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
        // const transaction = await contract.purchasePolicy(
        //  "QmXrxbQ3cou3RfJstUdyc18vKa6s3ekYueq5L28XkbSzwt", "Travel Baggage", 10000
        // );

        const transaction = await contract.validateClaim(
          insurancePolicyID || " ", claimAmount|| " ", codeAuthorityReport|| " ", supportingDocuments|| " "
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
    <section className="px-5 md:justify-center md:items-center">
      <div className="text-xl font-bold flex mt-2" style={{ fontSize: "32pt" }} onClick={onClickPurchasePolicy}>Claim Insurance</div>
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