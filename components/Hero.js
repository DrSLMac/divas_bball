import Image from "next/image";
import heroBackground from '../public/dallas-skyline.png'
import { motion } from "framer-motion"
import Carousel from "./Carousel";
import pic2 from '../public/carousel-pics/pic2.jpeg'
import pic3 from '../public/carousel-pics/pic21.jpeg'
import pic4 from '../public/carousel-pics/pic4.jpeg'
import pic5 from '../public/carousel-pics/pic5.jpeg'
import pic6 from '../public/carousel-pics/pic6.jpeg'
import pic7 from '../public/carousel-pics/pic7.jpeg'
import pic8 from '../public/carousel-pics/pic8.jpeg'
import pic9 from '../public/carousel-pics/pic9.jpeg'
import pic10 from '../public/carousel-pics/pic10.jpeg'
import pic11 from '../public/carousel-pics/pic11.jpeg'
import pic13 from '../public/carousel-pics/pic14.jpeg'
import pic14 from '../public/carousel-pics/pic15.jpeg'
import pic15 from '../public/carousel-pics/pic16.jpeg'
import pic16 from '../public/carousel-pics/pic17.jpeg'
import pic17 from '../public/carousel-pics/pic18.jpeg'
import pic18 from '../public/carousel-pics/pic19.jpeg'
import pic19 from '../public/carousel-pics/pic22.jpeg'
import AboutBlock from "./AboutBlock";

const images =[
    {src: pic2, id: 2}, 
    {src: pic3, id: 3}, 
    {src: pic4, id: 4}, 
    {src: pic5, id: 5}, 
    {src: pic6, id: 6}, 
    {src: pic7, id: 7}, 
    {src: pic8, id: 8}, 
    {src: pic9, id: 9}, 
    {src: pic10, id: 10},
    {src: pic11, id: 11},
    {src: pic13, id: 13},
    {src: pic14, id: 14},
    {src: pic15, id: 15},
    {src: pic16, id: 16},
    {src: pic17, id: 17},
    {src: pic18, id: 18},
    {src: pic19, id: 19},
]


const Hero = () => {

    return (
        <section className="bg-hero-background h-screen w-screen">
            <div className="text-navy-blue text-center
                text-sm py-2 px-2 font-bold tracking-wide
                sm:text-lg sm:tracking-wider
                md:text-xl md:py-3 md:px-3 md:tracking-widest
                lg:text-2xl lg:py-4 lg:px-4
                xl:text-3xl xl:tracking-[.2em]"
            >
                <h1> 🏀 👟 Fast Feet ⛹🏽‍♀️ Fierce Hearts ❤️ 🏀 </h1>
                <h1>✊🏾 Unstoppable Spirits ✊🏾</h1>
            </div>

            <Carousel images={images} />

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.3
                }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5}}
                className='flex flex-row items-center text-navy-blue 
                px-2 
                sm:px-3'
            >


                {/* <div className="bg-gradient-to-b  from-slate-100/80 rounded-lg p-2">
                    <p>This will be the main view on page load</p>
                    <p>There will be a background image</p>
                    <p>There will be an image overlay and a short blurb intro</p>
                    <p>C - Commitment</p>
                    <p>O - Obligation</p>
                    <p>S - Sacrifice</p>
                    <p>T - Team</p>
                </div> */}
            </motion.div>

        </section>
    )
}

export default Hero;







                    {/* <motion.div
                    initial={{
                        x: -500,
                        opacity: 0,
                        scale: 0.3,
                    }}
                    animate={{ x: 0, opacity: 1, scale: 1, }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="
                        w-60 px-5 
                        sm:w-[80%]"
                    >
                        <Image 
                            src={pic10}
                            alt='Female basketball player with championship ring'
                            height={'auto'}
                            width={500}
                            style={{
                                borderRadius:'16px',
                                border:'solid #101F3E thick',
                                boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
                            }}
                        />
                    </div>
                </motion.div> */}