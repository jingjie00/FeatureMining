import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Col, Container, Row } from 'react-bootstrap';
//import donto from '../../../Images/about-banner1.png';
//import dontoAnimated from '../../../Images/cleaner.png';
import './Claim.css';

const Claim = () => {

   const onFinish = (values) => {
      console.log('Success:', values);
    };


 return   <section className=" px-5 md:justify-center md:items-center">

<div className="text-xl font-bold flex mt-2" style={{fontSize: "18pt"}}>Claim Insurance</div>


<div className="flex">

<div className="flex md:w-1/3 hidden md:contents md:block">{" "}</div>

   
   <div className="flex md:justify-center md:items-center w-full md:w-1/3">

                <div className="mt-3 md:w-3/4 ">
                  <Form name="claimInsuranceForm" labelWrap
                    layout="vertical"
    onFinish={onFinish}>
 <Form.Item
      label="Claim Amount"
      name="claimAmount"
      labelWrap
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
      labelWrap
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
      <Button className="primary text-white" htmlType="submit" style={{background: "blue"}}>
        Submit
      </Button>
    </Form.Item>
                  </Form>
                </div>
   </div>
</div>

            
             
           
        </section>
};

export default Claim;