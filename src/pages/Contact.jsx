import React from 'react'

import { Link } from 'react-router-dom'
function Conatct() {
  return (
    
    <div>

        <div className=''>
            <div className='px-3 py-6 mb-6 border-[1px] broder-[#ebebeb]'>
                <p>Home / Contact</p>
            </div>

            <div className='px-3 mb-16'>
            <iframe className='w-full rounded-lg ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.60649261135!2d-0.4312478148294698!3d51.528607007339176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1724996340221!5m2!1sen!2s" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='grid grid-cols-2 gap-[25px] pb-[90px]'>
            <div className='px-3'>
                <div>
                    <h2 className='text-2xl font-bold mb-2 text-[#333e48] '>Get in Touch</h2>
                    <p className='mb-6 text-[#777777]'>Your email address will not be published. Required fields are marked *</p>
                </div>
                <div className='flex gap-5'>
                    <input className='px-5 py-3 w-full mb-5 border-[1px] broder-[#ebebeb] focus:outline-none' type="text" name="name" id="name" placeholder='Name *' />
                    <input className='px-5 py-3 w-full mb-5 border-[1px] broder-[#ebebeb] focus:outline-none' type="email" name="email" id="email" placeholder='Email *' />
                </div>
                <div>
                <input className='px-5 py-3 w-full mb-5 border-[1px] broder-[#ebebeb] focus:outline-none' type="text" name="name" id="name" placeholder='Phone Number *' />
                </div>
                <div>
                    <textarea  className='px-5 py-3 w-full h-[200px] mb-5 border-[1px] broder-[#ebebeb]' name="message" placeholder='Message *' id="message"></textarea>
                </div>
                <div className='text-center'>
                    <button className=' uppercase px-10 py-3 bg-[#222222] hover:bg-[#FF7E00] text-white '>send message</button>
                </div>
            </div>

            <div className='px-3'>
                <div>
                    <h2 className='text-2xl font-bold mb-2 text-[#333e48]'>Contact Information</h2>
                    <p className='mb-6 text-[#777777]'>Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos pretium.</p>
                </div>
                <div>
                    <p className='text-sm uppercase font-bold mb-2 text-[#333e48]'>Location store:</p>
                    <p className='text-sm mb-6 text-[#777777]'>268 St, South New York/NY 98944, United States.</p>
                </div>
                <div>
                    <p className='text-sm uppercase font-bold mb-2 text-[rgb(51,62,72)]'>Work time:</p>
                    <p className='text-sm mb-6 text-[#777777]'>Monday – Friday: 9:00-20:00<br />
                    Saturady: 11:00 – 15:00</p>
                </div>
                <div>
                    <p className='text-sm uppercase font-bold mb-2 text-[#333e48]'>Phone Number:</p>
                    <Link to={"#"}><p className=' text-[#777777]'>212 654 3322</p></Link>
                    <Link to={"#"}><p className='text-sm mb-6 text-[#777777]'>(+100) 666-456-7890</p></Link>
                </div>
                <div>
                    <p className='text-sm uppercase font-bold mb-2 text-[#333e48]'>Email Address:</p>
                    <Link to={"#"}><p className=' text-[#777777]'>aloshopify@alothemes.com</p></Link>
                    <Link to={"#"}><p className='text-sm mb-6 text-[#777777]'>aloshopify@alothemes.com</p></Link>
                </div>
                <div>
                    <p className='text-sm uppercase font-bold mb-2 text-[#333e48]'>Social Accounts:</p>
                    
                </div>
            </div>
            </div>
            
        </div>

        
    </div>
  )
}

export default Conatct