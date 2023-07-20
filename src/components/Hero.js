import {Link} from "react-router-dom"

export default function Hero() {
 
  

  return (
    <div>
 <div
    id='hero'
     className=''>
        
    </div>
      <div
      
    className='flex-col absolute top-16 md:left-12 left-4 ' >
        <h1
        className=" pt-20 md:pt-56 text-[2rem] md:text-[2.5rem] md:pr-[40%] md:text-left text-bcolor font-extrabold">
          Business Development, Media,
          and
          Marketing
          Consultancy
          </h1>
        <h2
        className="mt-2 md:mt-8 text-lg md:text-xl text-white md:text-gray-100 font-semibold md:font-bold md:pr-[25%] ">
        At [M-bazz Empire], we specialize in
        providing comprehensive business
        development, media, and marketing
        consultancy services to help
        businesses thrive in today’s
        competitive landscape. With our expertise and strategic approach, 
        we enable our clients to reach their 
        target audience effectively, enhance 
        brand visibility, and achieve 
        sustainable growth.
        </h2>
        <Link to='/about'>
        <button 
        className='border-bcolor border-2 bg-bcolor p-4 md:p-2 md:px-6 cursor-pointer rounded-md hover:bg-white hover:border-bcolor py-2 mt-5 md:mt-10 text-lg md:text-xl font-bold text-white motion-safe:animate-bounce'
        >
          Read More...
        </button>
        </Link>
   </div>
    </div>
   
  )
}
