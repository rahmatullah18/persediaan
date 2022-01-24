import Image from 'next/image';
import React, { useState } from 'react';
import ButtonSubmit from '../components/button/ButtonSubmit';
import Input from '../components/input';
import loginImage from "../public/login.svg"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmitLogin = (e) => {
        e.preventDefault()
    }

    return <div className='flex items-center justify-center py-24 mx-5'>
        <div>
            <div className='mb-5'>
                <Image src={loginImage} />
            </div>
            <div className='mb-4'>
                <h1 className='text-3xl font-semibold'>Login</h1>
            </div>
            <form onSubmit={handleSubmitLogin}>
                {/* value, onChange, label, placeholder, type, name, className */}
                <Input label={"Email"} placeholder={"Masukan Email"} onChange={(e) => setEmail(e.target.value)} value={email} type={'text'} name={'email'} />
                <Input label={"Password"} placeholder={"Masukan Password"} onChange={(e) => setPassword(e.target.value)} value={password} type={'password'} name={'password'} />
                {/* classname, label */}
                <ButtonSubmit label={'Masuk'} className={'w-full mt-4'} />
            </form>
        </div>
    </div>
}
