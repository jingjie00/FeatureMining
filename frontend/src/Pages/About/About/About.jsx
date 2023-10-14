import React from 'react';
import AboutService from '../../../components/AboutService/AboutService';
import LatestBlog from '../../../components/LatestBlog/LatestBlog';
import Appoinment from '../../Home/Appoinment/Appoinment';
import Content from '../AboutContent/Content';
import Achivement from '../Achivement/Achivement';

const About = () => {
    return (
        <>
          <AboutService />
          <Achivement />
          <LatestBlog />
        </>
    );
};

export default About;