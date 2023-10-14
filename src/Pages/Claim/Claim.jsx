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

 return   <section className="">
            <Container>
                <div className="text-xl font-bold justify-start flex">Claim Insurance</div>

                <div className="mt-3 w-1/2">
                  <Form name="claimInsuranceForm"
    onFinish={onFinish}>
 <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
                  
                  </Form>
                </div>
            </Container>
        </section>
};

export default Claim;