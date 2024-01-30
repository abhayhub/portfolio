import React from 'react'
import {FaLinkedin, FaGithub, FaArrowDown} from 'react-icons/fa'

function Hero() {

    const social = [
        {
            id : 1,
            link : "https://www.linkedin.com/in/abhay-tiwari-b42579202/",
            icon : <FaLinkedin />
        },
        {
            id : 2,
            link : "https://github.com/abhayhub",
            icon : <FaGithub />
        }
    ]

    window.addEventListener('scroll', function(){
        const downArrow = document.querySelector(".down-arrow");
        if(this.screenY >= 2) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow")
    })
  return (
    <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
        <h2 className='text-5xl text-rose-600  uppercase font-bold'>Abhay Tiwari</h2>
        <h3 className='py-5 text-2xl'>Front-End Developer</h3>
        <p className='max-w-xl font-light text-gray-400'>Hiii<span className='animate-pulse text-4xl'>👋</span>,
        I am Abhay Tiwari a aspiring front-end developer. I love to work on web dev projcets.I have  a good understanding of Javascript and React js</p>

        {/* socila icons*/}
        <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
            {social.map(({id, link, icon}) => (
                <a href={link} key={id}
                target='_blank'
                rel='noopener noreferrer'
                className='cursor-pointer duration-300 hover:text-rose-600'
                >
                    {icon}
                </a>
            ))}
            </div>

            {/* avatar and resume */}
            <div>
                {/* <img src={avatar} alt='avatar' className='w-40  rounded-full'/> */}
                <a href='/Abhay-Resume.pdf' download={true}
                className='flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 px-3 rounded-lg'
                >Download Resume</a>
            </div>

            {/* arrow down animation */}
            <div className='mt-10 down-arrow'>
                <FaArrowDown className='text-gray-400 text-2xl animate-bounce'/>
            </div>
        
    </section>
  )
}

export default Hero;