import React from 'react'
import portf from "../assets/portfolio.jpg"
import flight from "../assets/flight.jpg"
import chat from "../assets/chat.jpg"
import { FaGithub } from 'react-icons/fa'

function Project() {
 
  const projectlist = [
    {
        id : 1,
        image : chat,
        title : "Chat App",
        github : "https://github.com/abhayhub/chat_app"
    },
    {
        id : 2,
        image : flight,
        title : "Airline ticket Booking System",
        github : "https://github.com/abhayhub?tab=repositories"
    },
    {
        id : 3,
        image : portf,
        title : "Personel Portfolio Website",
        github : "https://github.com/abhayhub?tab=repositories"
    }
  ]

  return (
    <section className='flex flex-col justify-start items-center'>
        <h1 className='text-6xl'>Projects 📋</h1>
        <h3 className='text-gray-400 mt-4'>These are all my projects that I have worked on.</h3>

        <div className='grid gap-8 lg:gap-14 lg:grid-cols-2 mt-4 mb-4'>
            {projectlist.map(({id,image,title,github}) => (

                <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl flex-wrap '>
                    <img src={image} alt={title} className='w-2/3' />
                    <div className='w-1/3 flex flex-col items-center justify-center p-1'>
                        <h2>{title}</h2>
                        <a
                        className='text-2xl cursor-pointer duration-150 hover:scale-110 mt-2'
                         href={github}
                         target='_blank'
                         rel="noopener noreferrer"
                         ><FaGithub/></a>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Project;