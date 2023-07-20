import aboutus from '../images/aboutus.jpg'
import vison from '../images/vision.jpg'
import mission from '../images/mission.jpg'


export default function About() {

  return (
    <div  id='about'>
<div className="flex-col w-full p-4 mt-14 text-center bg-white text-black">
     
     <section className='flex-col p-2 md:pt-14'>
      <div className='my-8 md:my-16'>
      <h1 className='block font-extrabold text-2xl text-bcolor  md:text-4xl'>
       ABOUT
       <span className='text-black mx-2'>
         US
       </span> 
       </h1>
      </div>
     
       <article
        className='md:grid md:grid-cols-2 md:w-[90%] md:mx-auto md:gap-8 md:py-2'>
       <div className='flex justify-center w-full'>
         <img
         className='md:h-[90%] md:w-[100%] md:my-auto'
         src={aboutus}
         alt='about1' />
       </div>
       <div className="flex-col">
         <p className='flex p-2 my-12 rounded-2xl shadow-md shadow-gray-300 text-center text-lg md:text-xl font-semibold tracking-wider '>
         M-bazz Empire is a distinguished umpire,
         offering services in brand management and marketing
         communications, talent promotion, entrepreneurship, and
         social values. Our comprehensive approach involves
         nurturing, promoting, and empowering talented individuals
         from various backgrounds, elevating their presence from
         local to global platforms. Our accomplished team engages
         in talent hunts, event planning, and socio-cultural promotions.
         </p>
         <p className='flex p-2 my-12 rounded-2xl shadow-md shadow-gray-300  text-center text-lg md:text-xl  font-semibold tracking-wider'>
         Over the years, M-bazz Empire has organically evolved into
         an industry leader by integrating diverse perspectives and
         values from individuals across different regions and orientations.
         Collaborating with brands, businesses, and cooperations,
         we effectively advertise and promote their products and
         services to a vast audience through our extensive media
         coverage.
         </p>
         <p className='flex p-2 my-12 rounded-2xl shadow-md shadow-gray-300  text-center text-lg md:text-xl  font-semibold tracking-wider'>
         Our unique promotion pattern encompasses a
         strategic mix of offline and online campaigns, bolstered by the
         endorsement of individuals we have helped establish as
         celebrities in academia, entertainment, and other industries.
         In addition to our focus on talent promotion, entrepreneurship,
         and social values, M-bazz Empire offers professional real
         estate services.
         </p>
         <p className='flex p-2 my-12 rounded-2xl shadow-md shadow-gray-300  text-center text-lg md:text-xl  font-semibold tracking-wider'>
          Our experienced team, hailing from diverse
         backgrounds, assists clients in buying, selling, or leasing
         properties, delivering personalized and expert guidance
         throughout the process. With our expertise, we curate
         exceptional events, organize captivating contests, and execute
         engaging roadshows on behalf of our clients. Our commitment
         to positively impacting lives and enhancing societal values has
         garnered recognition through numerous esteemed Dignity
         Awards of Recognition.
         </p>
       </div>
       </article>
       
        
       </section>
       <article className='md:grid md:grid-cols-2 md:w-[90%] md:mx-auto md:gap-8 w-full mx-auto'>
       <section
         >
         <h1 className='block my-8 font-extrabold text-2xl text-bcolor'>
         MISSION
         </h1>
        
         <div className='flex justify-center w-full'>
         <img
         className='md:w-[120%] md:h-[50%] my-auto'
         src={mission}
         alt='about1' />
         </div>
         <div className='flex p-2 my-12 rounded-2xl shadow-md shadow-gray-300  text-center text-lg md:text-xl  font-semibold tracking-wider md:w-full'>
         <p>
           At M-bazz Empire, our mission is to discover and
           promote exceptional talents across Nigeria, empowering
           them through media exposure and opportunities for
           growth. We aim to showcase these unique and polished
           talents to a global audience, utilizing our extensive offline
           and online media presence. Additionally, we strive to
           establish partnerships with authentic brands and
           businesses, both within and beyond Nigeria, delivering
           exceptional planning, promotion, marketing, and
           advertising services. With a strong commitment to
           professionalism, we provide innovative and reliable real
           estate solutions tailored to our clients' specific needs.
           Our organization fosters a culture of growth and
           innovation while making a positive impact in our
           community and beyond.

         </p>
         </div>
       </section>

       <section
         >
         <h1 className='block my-8 font-extrabold text-2xl text-bcolor'>
         VISION
         </h1>
         
        
         <div className='flex justify-center w-full'>
         <img
         className='w-full md:h-[50%]'
         src={vison}
         alt='about1' />
         </div>
         <div className='flex p-2 my-12 rounded-2xl shadow-md shadow-gray-300  text-center text-lg md:text-xl  font-semibold tracking-wider '>
         <p>
           M-bazz Empire envisions becoming a global leader in the
           media, marketing, and real estate industries, transcending
           borders. Our Vision is to empower individuals through
           talent scouting and promotion, fostering positive impact
           worldwide. We aim to be a distinguished institution for
           talent development, fostering creativity and enabling
           individuals to reach their utmost potential. Our ultimate
           objective is to establish ourselves as the epitome of
           excellence, setting industry benchmarks for others to
           aspire to.
         </p>
         </div>
       </section>
       </article>
   </div>
    </div>
    
  )
}
