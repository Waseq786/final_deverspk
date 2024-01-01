import React from 'react'

const Logo = () => {
    return (
        <div>
            <div className='flex flex-row justify-start'>
                <div className='lg:w-[200px] w-[130px] 
                lg:ml-[20px] lg:mt-[20px] mt-[3px] bg-gray-700 h-auto'>
                   <a href="/">
                   <img src="/logo.png" alt="Logo Picture" />
                   </a>
                    
                </div>
            </div>
        </div>
    )
}

export default Logo
