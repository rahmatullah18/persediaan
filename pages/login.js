import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import ButtonSubmit from '../components/button/ButtonSubmit';
import Input from '../components/input';
import loginImage from "../public/login.svg"
import nookies from 'nookies'
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
    const [email, setEmail] = useState('')
    const [errorList, setErrorList] = useState([])
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password,
        }
        setLoading(true)
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/login', data).then(res => {
                // jika berhasil
                if (res.data.status === 200) {
                    nookies.set(null, 'token', res.data.token)
                    nookies.set(null, 'auth_name', res.data.name)
                    router.replace('/')
                    setLoading(false)
                }
                // jika passsword dan email tidak cocok
                else if (res.data.status === 401) {
                    Swal.fire({
                        title: 'Error!',
                        text: res.data.message,
                        icon: 'error',
                        confirmButtonText: 'Kembali'
                    })
                    setLoading(false)
                }
                else {
                    setErrorList(res.data.validation_errors)
                    setLoading(false)
                }
            })
        });
    }

    return <div className='flex items-center justify-center min-h-screen mx-5'>
        <div>
            <div className='mb-5'>
                <Image src={loginImage} />
            </div>
            <div className='mb-4'>
                <h1 className='text-3xl font-semibold'>Login</h1>
            </div>
            <form onSubmit={handleSubmitLogin}>
                {/* value, onChange, label, placeholder, type, name, className */}
                <Input error={errorList.email} label={"Email"} placeholder={"Masukan Email"} onChange={(e) => setEmail(e.target.value)} value={email} type={'text'} name={'email'} />
                <Input error={errorList.password} label={"Password"} placeholder={"Masukan Password"} onChange={(e) => setPassword(e.target.value)} value={password} type={'password'} name={'password'} />
                {/* classname, label */}
                <ButtonSubmit label={loading ? "Loading..." : 'Masuk'} className={'w-full mt-4'} />
            </form>
            <div className='mt-5 text-lg text-center'>
                <div className='text-gray-500 '>Belum punya akun?</div>
                <Link href="/register"><a className="text-blue-500">Register</a></Link>
            </div>
        </div>
    </div>
}


