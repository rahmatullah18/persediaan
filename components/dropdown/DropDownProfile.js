import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import favicon from "../../public/favicon.ico"

export default function DropDownProfile() {
    return <div className=''>
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="">
                <Image src={favicon} width={30} height={30} />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-0 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-44 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                            <Link href={'#'}>
                                <a
                                    className={`${active ? 'bg-violet-500 text-white' : "text-gray-900"} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                    Account settings
                                </a>
                            </Link>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    </div>
}
