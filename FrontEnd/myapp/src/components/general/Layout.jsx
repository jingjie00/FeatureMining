import React, { useEffect, useState } from 'react';

function Layout(props) {

  return (
    <>
      <div className='text-white'>
     
        <div
          className='min-h-screen relative bg-custom'
          // style={{ minWidth: 300, maxWidth: 667 }}
        >
          <div>{props.children}</div>

         
            {/* new footer desktop */}
            <div className='hidden md:contents'>
              <div className='container pb-20 px-1 md:px-5 relative pt-2'>
                <div className='grid grid-cols-12'>
                  <div className='hidden md:block pr-6 md:mt-5 col-span-12 md:col-span-2' />
                  <div className='md:mb-auto col-span-12 md:col-span-10'>
                    <div className='mx-2 md:mx-0 border-wrap grid grid-cols-12 gap-4 flex items-center justify-between rounded-xl px-5 pt-4 pb-6 footer-bg-custom'>
                     Hello
                    </div>
                  </div>
                </div>
              </div>
            </div>
       
          </div>
        </div>
 
    
    </>
  );
}

export default Layout;
