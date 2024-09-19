import React from 'react'
import FooterLogo from "../assets/HeaderImages/logo_210x@2x.png"
import { Link } from 'react-router-dom'
import amazon from "../assets/FooterImages/amazon.svg"
function Footer() {
  return (
    <div className='bg-[#222E3C]'>
        <div className='grid grid-cols-5 pt-[40px] pb-[60px] px-3 border-b-[0.5px] border-[#2e3a48]'>
            <div className='px-[10px]'>
                <img className='mb-6' src={FooterLogo} alt="logo" />
                <p className='text-white mb-2'>Hotline Free 24/24:</p>
                <p className='text-[#FF7E00] mb-2'>(+100) 123 456 7890</p>
                <p className='text-[#93979C]'>Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.
                Email: Contact@erentheme.com</p>
            </div>

            <div className='px-[10px]'>
                <h1 className='text-white text-lg font-semibold mb-5'>My Account</h1>
                <ul className='text-[#93979C] '>
                <li className='mb-2'><Link className=' hover:text-[#ff7e00] hover:underline ' to={"#"}>Product Support</Link></li>
                <li className='mb-2' ><Link className=' hover:text-[#ff7e00] hover:underline' to={"#"}>Checkout</Link></li>
                <li className='mb-2'><Link className=' hover:text-[#ff7e00] hover:underline' to={"#"}>Shopping Cart</Link></li>
                <li className='mb-2'><Link className=' hover:text-[#ff7e00] hover:underline' to={"#"}>Wishlist</Link></li>
                <li className='mb-2'><Link className=' hover:text-[#ff7e00] hover:underline' to={"#"}>Custom Link</Link></li>
                <li className='mb-2'><Link className=' hover:text-[#ff7e00] hover:underline' to={"#"}>Redeem Voucher</Link></li>
              </ul>
                
            </div>

            <div className='px-[10px]'>
                <h1 className='text-white text-lg font-semibold mb-5'>Customer Service</h1>
                <ul className='text-[#93979C] '>
                <li className='mb-2'><Link className=' hover:text-[#ff7e00] hover:underline ' to={"#"}>Help Center</Link></li>
                <li className='mb-2' ><Link className=' hover:text-[#ff7e00] hover:underline' to={"#"}>Contact Us</Link></li>
                <li className='mb-2'><Link className=' hover:text-[#ff7e00] hover:underline' to={"#"}>Report Abuse</Link></li>
                <li className='mb-2'><Link className=' hover:text-[#ff7e00] hover:underline' to={"#"}>Submit a Dispute</Link></li>
                <li className='mb-2'><Link className=' hover:text-[#ff7e00] hover:underline' to={"#"}>Policies & Rules</Link></li>
                <li className='mb-2'><Link className=' hover:text-[#ff7e00] hover:underline' to={"#"}>Online Returns Policy</Link></li>
              </ul>
                
            </div>

            <div className='px-[10px]'>
                <h1 className='text-white text-lg font-semibold mb-5'>Help & Customer Care</h1>
                <ul className='text-[#93979C] '>
                <li className='mb-2'><Link className=' hover:text-[#ff7e00] hover:underline ' to={"#"}>New Customers</Link></li>
                <li className='mb-2' ><Link className=' hover:text-[#ff7e00] hover:underline' to={"#"}>How to use My Account</Link></li>
                <li className='mb-2'><Link className=' hover:text-[#ff7e00] hover:underline' to={"#"}>Placing an Order</Link></li>
                <li className='mb-2'><Link className=' hover:text-[#ff7e00] hover:underline' to={"#"}>Payment Methods</Link></li>
                <li className='mb-2'><Link className=' hover:text-[#ff7e00] hover:underline' to={"#"}>Delivery & Dispatch</Link></li>
                <li className='mb-2'><Link className=' hover:text-[#ff7e00] hover:underline' to={"#"}>Problems with your Order</Link></li>
              </ul>
                
            </div>

            <div className='px-[10px]'>
                <h1 className='text-white text-lg font-semibold mb-5'>Sign Up To Newsletter</h1>
                <p className='text-[#93979C]'>Join 60.000+ subscribers and get a new discount coupon on every Saturday.</p>
                <div className='flex '>
                    <input className='w-28 px-2' type="email" name="email" id="email" placeholder='Your email' />
                    <button className='uppercase px-4 py-2 text-white bg-[#FF7E00]'>subscribe</button>
                </div>
                <p className='text-[#93979C]'>By providing your email address, you agree to our Privacy Policy and Terms of Service.</p>
                
            </div>
        </div>
        <div className='py-[60px] flex justify-between px-3 '>
            <div className='text-[#93979C] '>
                <p>Copyright © <Link className='text-[#FF7E00]' to={"#"}>Muhammad Hamza</Link>. All Rights Reserved. Powered by <Link className='text-[#FF7E00]' to={"#"}>React JS</Link>.</p>
            </div>
            <div className='flex gap-1'>
                <img src={amazon} alt="amazon" />
                <img src={amazon} alt="amazon" />
                <img src={amazon} alt="amazon" />
                <img src={amazon} alt="amazon" />
                <img src={amazon} alt="amazon" />
                <img src={amazon} alt="amazon" />
                <img src={amazon} alt="amazon" />

            </div>
        </div>
    </div>
  )
}

export default Footer