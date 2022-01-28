import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import ButtonSubmit from '../components/button/ButtonSubmit';
import Input from '../components/input';
import registerImage from "../public/register.svg"

export default function Login() {
    const router = useRouter();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorList, setErrorList] = useState([])
    const [loading, setLoading] = useState(false);

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        const data = {
            name: name,
            email: email,
            password: password,
        }
        setLoading(true)
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/register', data).then(res => {
                if (res.data.status === 200) {
                    Swal.fire({
                        title: 'Sukses',
                        text: 'Data berhasil di tambahkan',
                        icon: 'success',
                        confirmButtonText: "Login"
                    })
                    setLoading(false)
                    router.push('/login')
                }
                else {
                    setErrorList(res.data.validation_errors)
                    setLoading(false)
                }
            });
        });
    }
    return <div className='flex items-center justify-center h-full py-10 mx-5'>
        <div>
            <div className='mb-5'>
                <Image src={registerImage} />
            </div>
            <div className='mb-4'>
                <h1 className='text-3xl font-semibold'>Register</h1>
            </div>
            <form onSubmit={handleSubmitLogin}>
                {/* value, onChange, label, placeholder, type, name, className */}
                <Input error={errorList.name} label={"Nama"} placeholder={"Masukan Nama Lengkap"} onChange={(e) => setName(e.target.value)} value={name} type={'text'} name={'name'} />
                <Input error={errorList.email} label={"Email"} placeholder={"Masukan Email"} onChange={(e) => setEmail(e.target.value)} value={email} type={'text'} name={'email'} />
                <Input error={errorList.password} label={"Password"} placeholder={"Masukan Password"} onChange={(e) => setPassword(e.target.value)} value={password} type={'password'} name={'password'} />
                {/* classname, label */}
                <ButtonSubmit label={loading ? 'Loading...' : "Daftar"} className={'w-full mt-4'} />
            </form>
            <div className='mt-5 text-lg text-center'>
                <div className='text-gray-500 '>Sudah punya akun?</div>
                <Link href="/login"><a className="text-blue-500">Log in</a></Link>
            </div>
        </div>
    </div>
}
