import React, { useState, useEffect, useRef } from 'react';

function Header(props) {

  return (
    <>
    

      <div
        className='sticky top-0 right-0 left-0 z-50'
        style={{
          backgroundImage: 'linear-gradient(#33424C, #1A242E)',
        }}
      >
      {props.children}
      </div>
    </>
  );
}

export default Header;
