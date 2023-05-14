import React from 'react'
import { Link } from "react-router-dom";
import '../css/Products.css'
import { useContext,useState } from 'react';
import { VisitsContext } from '../context/visitsContext';

const Product = (props) => {

    const [isAdded, setIsAdded] = useState(false)

    const { companyName, description, designation, image, id } = props.product;

    const { visits, setVisits } = useContext(VisitsContext)


    const applyNowOnClick = (e, product) => {

        let visitsCopy = { ...visits }

        if (!visitsCopy.visits) {
            visitsCopy.visits = {}
            visitsCopy.totalVisits = 0 
        }

        if (visitsCopy.visits[product.id]) {
            visitsCopy.visits[product.id] += 1;
        }
        else {
            visitsCopy.visits[product.id] = 1;
        }

        visitsCopy.totalVisits += 1
        setVisits(visitsCopy);
        setIsAdded(true);
        setTimeout(() => {
            setIsAdded(false);
        }, 1000);
    }


    return (



        <div className='job-card'>
            <div className='job-name'>

                <Link to={`/products/${id}`}><img className='job-profile' src={image} alt="" /></Link>


                <div className='job-detail'>
                    <h4 className='text-lg font-bold'>{companyName}</h4>
                    <h3 className='text-lg font-bold'>{designation}</h3>
                    <p>{description.substring(0,100)}</p>
                </div>
            </div>
            <div className='job-label'>
                <a className='label-a' href="#">HTML</a>
                <a className='label-b' href="#">CSS</a>
                <a className='label-c' href="#">JavaScript</a>
            </div>
            <Link to={`/products/${id}`}>
                <div onClick={(e) => { applyNowOnClick(e, { id }) }} className={`job-posted${isAdded?' bg-green-500':' bg-yellow-500'} py-1 px-8 rounded-full font-bold mt-4`}>
                Apply Now
            </div>
            </Link>

        </div>
    )
}

export default Product

