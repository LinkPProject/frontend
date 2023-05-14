import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { VisitsContext } from '../context/visitsContext';

function Navigation() {
    const cartStyle = {
        background: '#F59E0D',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '50px'
    }
    const {visits} = useContext(VisitsContext)
    return (
        <>

            <nav className="flex items-center justify-between py-8 px-8">


                <Link to='/'>
                    <img style={{ height: 45 }} src="/images/peproni.png" alt="logo" />
                </Link>

                <ul className='flex items-center'>
                    <li><Link to='/'>Home</Link></li>
                    <li className='ml-6'><Link to='/products'>Openings</Link></li>
                    <li className='ml-6'>
                        <Link to='/cart'>
                            <div style={cartStyle}>

                                <span className='text-white'>Visits - {visits.totalVisits?visits.totalVisits:0}</span>
                                <img className='ml-2' src="/images/cart.png" alt="cart" />

                            </div>
                        </Link>
                    </li>
                </ul>


            </nav>

        </>
    )
}

export default Navigation