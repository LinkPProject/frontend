import Products from "../components/Products";
import '../css/Home.css'
const Home = () => {
   return (
      <>
         <div className="hero py-16">

            <div className="container mx-auto flex items-center justify-between mar-pad">

               <div className="w-1/2 px-8">
                  <h6 className="text-lg"><em>Looking For a new Job?</em></h6>
                  <h1 className="text-3xl md:text-6xl font-bold">We are here to help you out.</h1>
                  <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">Have a look.</button>
               </div>
               <div className="w-1/2 px-8">
                  <img className='w-4/5' src='/images/pizza.jpg' alt='pizza'></img>
               </div>

            </div>

         </div>
         <div className='pb-24'>
            <Products/>
         </div>
         </>


   )
};

export default Home;