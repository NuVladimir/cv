import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Collabs from '@/assets/handshake-regular.svg'
import Profile from '@/assets/avatar-profile.webp'
import HomeSocials from '../elements/HomeSocials'
const Home = () => {
    return (
        <>
            <Image
                width={108}
                height={108}
                src={Profile}
                alt="Avatar Dwi"
                className="outline outline-[0.35rem] outline-background rounded-2xl mb-8"
            />
            <h2 className='text-xl text-subtext mb-0 flex items-center gap-1 '>Hi there<span className="animate-waving-hand">👋</span> </h2>
            <div className="flex gap-2 self-center items-center mb-1">
                <h1 className="font-bold text-3xl text-text">
                    {`I'm Dwi Wijaya`}
                </h1>

            </div>
            <span className="flex items-center gap-2">
                I&apos;m a Full-stack developer <i className="bx bx-code-alt"></i> &nbsp;
            </span>
            <HomeSocials/>
            <hr className="border-stroke my-4" />
            <div className='card'>
                <div className='flex gap-3 items-center'>
                    <i className='bx bx-rocket'></i>
                    <h2 className='text-xl font-medium'>Lets work together!</h2>
                </div>
                <p className='text-sm text-subtext my-2'>
                    I&apos;m open for freelance projects, feel free to email me to see how
                    can we collaborate.
                </p>
                <Link href='contact'
                    aria-label='contact me'
                    className='btn'
                >
                    <i className="bx bx-envelope"></i>Contact me
                </Link>
            </div>
        </>
    )
}

export default Home