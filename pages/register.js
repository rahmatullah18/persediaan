import Image from 'next/image';
import React, { useState } from 'react';
import ButtonSubmit from '../components/button/ButtonSubmit';
import Input from '../components/input';
import registerImage from "../public/register.svg"

export default function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [roleAs, setRoleAs] = useState('users')
    const handleSubmitLogin = (e) => {
        e.preventDefault()
    }

    return <div className='flex items-center justify-center py-24 mx-5'>
        <div>
            <div className='mb-5'>
                <Image src={registerImage} />
            </div>
            <div className='mb-4'>
                <h1 className='text-3xl font-semibold'>Register</h1>
            </div>
            <form onSubmit={handleSubmitLogin}>
                {/* value, onChange, label, placeholder, type, name, className */}
                <Input label={"Name"} placeholder={"Masukan Nama Lengkap"} onChange={(e) => setName(e.target.value)} value={name} type={'text'} name={'name'} />
                <Input label={"Email"} placeholder={"Masukan Email"} onChange={(e) => setEmail(e.target.value)} value={email} type={'text'} name={'email'} />
                <Input label={"Password"} placeholder={"Masukan Password"} onChange={(e) => setPassword(e.target.value)} value={password} type={'password'} name={'password'} />
                {/* classname, label */}
                <ButtonSubmit label={'Daftar'} className={'w-full mt-4'} />
            </form>
        </div>
    </div>
}
