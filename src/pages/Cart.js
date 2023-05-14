import React from 'react'
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react'
import { VisitsContext } from '../context/visitsContext'
import axios from 'axios'



const Cart = () => {

  const { visits,setVisits } = useContext(VisitsContext)
  let [VisitsDataReceived, setVisitsDataReceived] = useState([])

  useEffect(() => {
    if (VisitsDataReceived.length) {
      return;
    }
    async function getVisitsData() {
      VisitsDataReceived = await axios.post('http://localhost:8080/api/job/getJobsByIds', { "jobIds": Object.keys(visits.visits) });
      setVisitsDataReceived(VisitsDataReceived.data);
    }
    getVisitsData();

  }, [visits]);

  const visitAgainOnClick = (e, product) => {

    console.log(product.id,"Product id")

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
}

  return (
    VisitsDataReceived.length ?
      <div className='container mx-auto lg:w-1/2 w-full pb-24'>
        <h1 className='my-12 font-bold'>Visits History</h1>

        <ul>
          <hr className='my-3' />
          {VisitsDataReceived.map(visitData => {

            return (<li className='mb-12' key={visitData.id}>
              <div className='flex items-center justify-between'>

                <div className='flex items-center'>

                  <img className='h-16 w-16' src={visitData.image} alt='Visit image'></img>
                  <span className='font-bold ml-4 w-48'>{visitData.companyName}</span>

                </div>

                <div>
                  <b>{visits.visits[visitData.id]}</b>
                </div>

                <span>{visitData.designation}</span>

                <Link to={`/products/${visitData.id}`}>
                  <button onClick={(e) => { visitAgainOnClick(e, { id: visitData.id }) }} className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>Visit Again</button>
                </Link>

              </div>
            </li>)

          })}
        </ul>
        <hr />

      </div>
      :
      <img className='mx-auto w-1/2 mt-12 mb-12' src='/images/empty-cart.jpg' alt='empty image'></img>
  )
}

export default Cart