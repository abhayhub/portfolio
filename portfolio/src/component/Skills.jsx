import React from 'react'
import js from "../assets/javascriptlogo-removebg-preview.png"
import nodelogo from "../assets/nodejs (1).png"
import reactlogo from "../assets/react.png"
import docker from '../assets/docker.png'
import mongo from '../assets/mongorm.png'
import tail from '../assets/tailwind.png'
import exp from '../assets/express.png'
function Skills() {
    const skill = [
        {
            id : 1,
            image : mongo,
            bordercolr : "shadow-green-300"
        },{
            id : 8,
            image : exp,
            bordercolr : "shadow-gray-300"   
        },{
            id : 3,
            image : reactlogo,
            bordercolr : "shadow-red-500"
        },{
        id : 2,
        image : nodelogo,
        bordercolr : "shadow-green-500"
    },{
        id : 4,
        
        image : docker,
        bordercolr : "shadow-teal-500"
    },{
        id : 5,
        image : tail,
        bordercolr : "shadow-orange-500"
    }
    

]
  return (
    <div className='flex flex-col justify-start items-center mt-5'>
        <h1 className='text-6xl'>Skills</h1>
        <h3 className='text-gray-400 mt-4'>These are the technologies I've worked with.</h3>
        <div className='grid gap-6 lg:gap-14 lg:grid-cols-2 mt-4 mb-4'>
                
                {skill.map(({id,image,title,bordercolr}) => (
                    <div key={id} className={`max-w-lg flex flex-col  shadow-lg ${bordercolr} rounded-2xl flex-wrap cursor-pointer`}>
                    <img src={image} alt='log' className=' object-fill w-40 py-2  text-center '/>
                    <h3 className='px-8'>{title}</h3>
                </div>
                ))}     
                


                {/* <div className='max-w-lg flex shadow-lg shadow-orange-500 rounded-2xl flex-wrap '>
                    <img src={nodelogo} alt='log' className='object-cover'/>
                </div>
                <div className='max-w-lg flex shadow-lg shadow-blue-300 rounded-2xl flex-wrap '>
                    <img src={reactlogo} alt='log' className='object-cover'/>
                </div>
                <div className='max-w-lg flex items-center justify-center shadow-lg shadow-rose-300 rounded-2xl  flex-wrap '>
                    <img src={docker} alt='log' className='object-cover'/>
                </div>
                <div className='max-w-lg flex shadow-lg shadow-teal-300 rounded-2xl flex-wrap '>
                    <img src={tail} alt='log' className='object-cover'/>
                </div>
                <div className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl flex-wrap'>
                    <img src={htm} alt='log' className='object-cover'/>
                </div>    */}
        </div>
    </div>
  )
}

export default Skills