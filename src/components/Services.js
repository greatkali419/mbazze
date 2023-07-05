import Brand from '../images/brand.jpg'
import Artist from '../images/artist.jpg'
import real from '../images/real.jpg'
import events from '../images/eventsmanagement.jpg'
import digital from '../images/digital.jpg'
import activation from '../images/brandactivation.jpg'
import development from '../images/Business-development.png'
import strategy from '../images/mediaplanning.jpg'
import advertising from '../images/advertising.jpg'
import transformation from '../images/digitaltransformation.jpeg'
import training from '../images/traingandworkshop.jpg'
import roadshow from '../images/roadshow.jpg'
import socials from '../images/socialmediamanagement.jpeg'
import jingles from '../images/jingles.png'
import influencer from '../images/influencer.jpg'



import  {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer"
import { useState } from 'react'

export default function Services() {
  const {ref, inView} = useInView({
    threshold: 0.5
  })
  const animation = useAnimation()
  const animation1 = useAnimation()
  const animation2 = useAnimation()
  const control = useAnimation();

  useEffect(()=>{
    if(inView) {
      animation.start({
        y: 0,
        
      })
    }if(!inView) {
      animation.start({
        y: [-100,-300,0,-10,0]
      })
      

    }
    if(inView) {
      animation1.start({
        y: 0,
        
      })
    }if(!inView) {
      animation1.start({
        y: [-100,-300,0,-10,0]
      })
      

    }
    if(inView) {
      animation2.start({
        y: 0,
        
      })
    }if(!inView) {
      animation2.start({
        y: [100,300,0,10,0]
      })
      

    }
  },[inView])
  return (
    <div>
<div className="flex-col w-full p-4 mt-14 text-center  bg-white text-black md:pt-20">
      <h1 className="block my-8 font-extrabold text-2xl text-bcolor  md:text-4xl">
     <span className='text-black mx-2'>
      OUR  
      </span>
       SERVICES
      </h1>
     <section className='md:grid md:grid-cols-5 gap-8 md:w-[90%] mx-auto '>
    
      <motion.section
         animate={animation1}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={development}
          alt='development'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-bold text-2xl my-10 text-bcolor">
          Business Development
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <textarea maxLength={4} className=" my-4 text-lg font-semibold md:text-xl w-full h-full">
          We offer a range of business
          development services designed to
          identify and capitalize on growth
          opportunities. Our strategic
          approach includes market research,
          competitor analysis, and feasibility
          studies to help you make informed
          decisions. We assist in formulating
          business strategies, developing
          expansion plans, and establishing
          strategic partnerships to enhance
          your market reach.
          </textarea>
        </div>
        
      </motion.section>
      <motion.section
         animate={animation1}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={Artist}
          alt='artist'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-bold text-2xl my-10 text-bcolor">
          Artiste Management
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className=" my-4 text-lg font-semibold md:text-xl">
          Our artiste management services are designed to help musicians, actors, and other 
          performers navigate the complex world of entertainment. We provide a range of services, including 
          contract negotiation, career planning, performance scheduling, and marketing and promotion. Our team 
          has extensive experience working with artists of all genres and can help you achieve your goals, whether 
          you're a newcomer to the industry or an established performer.
          </p>
        </div>
        
      </motion.section>
      <motion.section
         animate={animation2}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={activation}
          alt='events'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-bold text-2xl my-10 text-bcolor">
          Brand Activation
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className=" my-4 text-lg font-semibold md:text-xl">
          At M-bazz Empire, we specialize in comprehensive brand activation and product sampling strategies that effectively engage with target audiences and drive market penetration. Our expertise extends across various channels, including in-store, mail, open market, and leveraging our extensive distribution network.

          Through meticulous planning and execution, we craft tailored brand activation campaigns that resonate with consumers and deliver tangible results. Our in-store activations seamlessly integrate your brand message and product experience within retail environments, maximizing visibility and customer engagement. By leveraging our strong relationships with retail partners, we ensure widespread availability and exposure of your products across diverse stores nationwide.

          Additionally, our mail activation initiatives provide a direct and personalized approach to reaching potential customers. We design captivating mail campaigns that effectively communicate your brand's unique value proposition, fostering a sense of exclusivity and prompting recipients to engage with your offerings.

          Furthermore, we excel in open market activation, utilizing our comprehensive network and market intelligence to identify and penetrate key open market locations. By understanding the dynamics and preferences of different regions, we devise strategies to position your products effectively and drive adoption in these markets.

          </p>
        </div>
        
      </motion.section>
      <motion.section
         animate={animation}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={influencer}
          alt='real'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-bold text-2xl my-10 text-bcolor">
          Influencer Marketing
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className=" my-4 text-lg font-semibold md:text-xl">
          We harness the power of social media
          influencers to create impactful
          campaigns that increase brand
          awareness, drive engagement, and
          generate leads for your business.
          </p>
        </div>
        
      </motion.section>
      <motion.section
         animate={animation1}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={roadshow}
          alt='roadshow'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-bold text-2xl my-10 text-bcolor">
          Roadshow Campaigns
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className="my-4 text-lg font-semibold md:text-xl">
          Our roadshow campaigns are designed
              to take your brand directly to your
              target audience, creating memorable
              experiences and building lasting
              connections through interactive
              engagements and product
              demonstrations.

          </p>
        </div>
        
      </motion.section>
      <motion.section
         animate={animation1}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={jingles}
          alt='jingles'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-bold text-2xl my-10 text-bcolor">
          Jingles and TV Commercials
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className="my-4 text-lg font-semibold md:text-xl">
          We create captivating jingles and TV
          commercials that leave a lasting
          impression on your audience,
          effectively conveying your brand
          message and values.


          </p>
        </div>
        
      </motion.section>
      <motion.section
         animate={animation1}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={socials}
          alt='socials'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-bold text-2xl my-10 text-bcolor">
          Social Media Management
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className="my-4 text-lg font-semibold md:text-xl">
          Our social media experts craft and
              execute data-driven social media
              strategies to amplify your brand’s
              presence across various platforms.
              Accounts, create engaging content,
              and analyze performance metrics to
              ensure optimal results.

          </p>
        </div>
        
      </motion.section>
      <motion.section
         animate={animation1}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={advertising}
          alt='advertising'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-bold text-2xl my-10 text-bcolor">
          Advertising
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className="my-4 text-lg font-semibold md:text-xl">
          Our team of creative professionals designs
          compelling advertising campaigns
          across traditional and digital
          channels to effectively reach your
          5
          target audience and drive
          conversions.


          </p>
        </div>
        
      </motion.section>
      <motion.section
         animate={animation1}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={events}
          alt='events'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-bold text-2xl my-10 text-bcolor">
          Event Management
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className="my-4 text-lg font-semibold md:text-xl">
          From conceptualization to execution, our
          experienced event management
          team handles all aspects of your
          corporate or promotional events. We
          ensure seamless event planning,
          logistics, and production to deliver
          memorable experiences.

          </p>
        </div>
        
      </motion.section>
      <motion.section
         animate={animation1}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={strategy}
          alt='strategy'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-bold text-2xl my-10 text-bcolor">
          Media Strategy and Planning
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className="my-4 text-lg font-semibold md:text-xl">
          Effective media planning and strategy are essential for reaching
          your target audience and
          maximizing brand exposure. Our
          experienced team will work closely
          with you to develop a customized
          media strategy tailored to your
          business objectives. We analyze
          market trends, consumer behavior,
          and media consumption patterns to
          create targeted campaigns across
          various platforms, including print,
          digital, social media, and broadcast.
          </p>
        </div>
        
      </motion.section>
      <motion.section
         animate={animation1}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={Brand}
          alt='brand'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-bold text-2xl my-10 text-bcolor">
          Marketing and Branding
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className="my-4 text-lg font-semibold md:text-xl">
          Our marketing and branding services are designed to enhance
          your brand image, increase
          customer engagement, and drive
          conversions. We offer a
          comprehensive range of services,
          including brand positioning,
          messaging development, creative
          design, content creation, and digital
          marketing. By leveraging the power
          of data-driven insights and
          innovative marketing techniques, we
          help you build a strong brand
          presence and achieve measurable
          results.

          </p>
        </div>
        
      </motion.section>
      <motion.section
         animate={animation1}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={transformation}
          alt='transformation'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-bold text-2xl my-10 text-bcolor">
          Digital Transformation
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className="my-4 text-lg font-semibold md:text-xl">
          In today’s digital age, businesses
          need to adapt and leverage
          technology to stay competitive. We
          provided digital transformation
          solutions to help you streamline
          operations, optimize customer
          experiences, and harness the power
          of emerging technologies. Our
          expertise includes website and app
          development, e-commerce
          solutions, digital marketing
          8
          automation, data analytics, and
          cloud-based services.

          </p>
        </div>
        
      </motion.section>
      <motion.section
         animate={animation1}
         className='mt-24'>
        <div className='my-5 text-left'>
          <img
          src={training}
          alt='training'
          className='md:h-[300px] md:rounded-2xl' />
          <h2 className="font-bold text-2xl my-10 text-bcolor">
          Training and Workshops
          </h2>
        </div>
        
        <div className="flex-col p-2 my-3 rounded-2xl shadow-md shadow-bcolor">
          
          <p className="my-4 text-lg font-semibold md:text-xl">
          To empower your team with the
          necessary skills and knowledge, we
          offer training programs and
          workshops in various aspects of
          business development, media, and
          marketing. Our interactive sessions
          cover topics such as strategic
          planning, digital marketing best
          practices, social media
          management, and effective
          communication. We customize the
          training modules to address your
          specific needs and ensure practical
          learning outcomes.

          </p>
        </div>
        
      </motion.section>
     </section>
      
      
    </div>
    </div>
    
  )
}
