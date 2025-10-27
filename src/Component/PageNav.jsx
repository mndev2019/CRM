import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const PageNav = ({ title, btn, path }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(path);
    };
    return (
        <>
            <div className='justify-between flex items-center my-4'>
                <h2 className='text-2xl font-bold text-[#001B48]'>
                    {title}
                </h2>
                {btn && (
                    <button
                        onClick={handleNavigate}
                        className='px-3 py-2 rounded-sm text-white text-md bg-[#001B48]'
                    >
                        {btn}
                    </button>
                )}
            </div>
        </>
    )
}

export default PageNav
