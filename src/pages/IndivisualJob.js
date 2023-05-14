import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const IndivisualJob = () => {
    const [product, setProduct] = useState({})
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function getAndSetProduct() {
            const productReceived = await axios.get(`http://localhost:8080/api/job/job/${params.id}`);
            setProduct(productReceived.data);
        }
        getAndSetProduct();
    }, []);

    function copyUrl() {

        navigator.clipboard.writeText
            (`http://localhost:3000/products/${params.id}`);

    }

    const { companyName, description, designation, image, salaryRange, salary, lastDateToApply, jobLink } = product

    return (<>
        <div style={{ marginLeft: '100px', marginRight: '100px' }} className='mt-16'>
            <button className='font-bold mb-2' onClick={() => { navigate(-1) }}>Back</button>
        </div>



        <div className='grid place-items-center mb-4'>
            <h1 style={{ textAlign: 'center' }} className='text-4xl font-bold'>{companyName}</h1>
            <img className='my-2 rounded' style={{ width: '240px', height: '240px' }} src={image} alt='Job-image' ></img>
            <button className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4' onClick={()=>{jobLink?window.location.href = jobLink:window.location.href=`http://localhost:3000/products/${params.id}`}}>Apply Now</button>
            <button onClick={copyUrl} className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4'>Share This Job</button>
        </div>

        <div className='mx-5 lg:mx-80 md:mx-60'>
            <h2 className='text-2xl font-bold mb-2'>Role: {designation}</h2>
            <h3 className='text-2xl font-bold mb-2'>Salary: {salary?salary:salaryRange}</h3>
            <p className='text-md font-bold mb-2'>Last Date To Apply: <span className='text-md font-bold'>{lastDateToApply}</span></p>

            <div className='text-md mb-20'>Any Lorem Ipsum Any Lorem Ipsum Any Lorem Ipsum Any Lorem Ipsum Any Lorem Ipsum Any Lorem Any Lorem Ipsum Any Lorem Ipsum Any Lorem Ipsum Any Lorem Ipsum Any Lorem Ipsum Any Lorem Any Lorem Ipsum Any Lorem Ipsum Any Lorem Ipsum Any Lorem Ipsum Any Lorem Ipsum Any Lorem Any Lorem Ipsum Any Lorem Ipsum Any Lorem Ipsum Any Lorem Ipsum Any Lorem Ipsum Any Lorem</div>
        </div></>




        // {/* <div className='text-md mb-20 sm:mx-10 lg:mx-80 md:mx-60'>{description}</div></> */}




    )
}

export default IndivisualJob