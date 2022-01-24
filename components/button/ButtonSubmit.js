import React from 'react';

export default function ButtonSubmit({ className, label }) {
    return <div>
        <button type='submit' name='button' className={`px-4 py-2 text-xl font-semibold text-white rounded-md bg-cool-green ${className}`}>{label}</button>
    </div>;
}
