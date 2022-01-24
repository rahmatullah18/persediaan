import React from 'react';

export default function Input({ value, onChange, label, placeholder, type, name, className }) {
    // const handleInput = (e) => {
    //     const { value } = e.target
    //     onChange(value)
    // }
    return <div className='mb-4'>
        <label className='text-lg font-semibold text-gray-500'>{label}</label>
        <input onChange={onChange} value={value} placeholder={placeholder} type={type} name={name} className={`w-full border-b-2 border-gray-400 outline-none focus:border-b-2 focus:border-cool-green  py-2 ${className}`} />
    </div>;
}
