import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import contact from "../assets/mobile.png"

function Contact() {
  
  const social = [
    {
        id : 1,
        link : "https://www.linkedin.com/in/abhay-tiwari-b42579202/",
        icon : <FaLinkedin />
    },
    {
        id : 2,
        link : "https://www.instagram.com/justice_abhay/?hl=en",
        icon : <FaInstagram />
    }
  ]

  return (
    <section className='flex flex-col justify-start items-center mt-10'>
        <h1 className='text-6xl'>Contact ☎️</h1>
        <h3 className='text-gray-400 mt-4'>These are the ways you can get in touch with me.</h3>
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
            <div>
                <img src={contact} alt='contact info' className='w32 h-32 mt-2'/>
            </div>
            <div>
                <p className='max-w-xs md:max-w-lg font-extralight'>
                I am open to talk regarding freelancing or full-time or internship<br/> opportunities.
                feel free to contact me using your prefered medium.
                </p></div>
            <div className='flex w-full items-center justify-evenly text-3xl'>
                {social.map(({id,link,icon}) => (
                    <a href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='duration-200 ease-in-out hover:text-red-600'>{icon}</a>
                ))}
            </div>

            {/* bottom form */}
            <div className='p-8 text-left w-full flex items-center justify-center'>
                <form action='https://getform.io/f/2e9d5179-2ebc-4f0d-a292-a6a73347ba78' method='POST'>
                    <div className='gap-4 w-full'>
                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>name</label>
                            <input
                            type='text'
                            name='name'
                            className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                            ></input>
                        </div>
                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>Phone</label>
                            <input
                            type='text'
                            name='name'
                            className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                            ></input>
                        </div>
                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>Email</label>
                            <input
                            type='email'
                            name='name'
                            className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                            ></input>
                        </div>
                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>Message</label>
                            <textarea name='message' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none overflow-y-scroll no-scrollbar'></textarea>
                        </div>
                    </div>

                    <div>
                        <button className='my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3  uppercase rounded-md tracking-wider cursor-pointer'>send message</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact