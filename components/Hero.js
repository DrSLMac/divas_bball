import Image from "next/image";
import heroBackground from '../public/dallas-skyline.png'
import { motion } from "framer-motion"
import Carousel from "./Carousel";
import { Inspiration } from 'next/font/google'

const inspiration = Inspiration({ 
  subsets: ['latin'],
  weight: ['400'],
})

import pic1 from '../public/carousel-pics/pic7.jpeg'
import pic2 from '../public/carousel-pics/pic6.jpeg'
import pic3 from '../public/carousel-pics/pic8.jpeg'
import pic4 from '../public/carousel-pics/pic5.jpeg'
import pic5 from '../public/carousel-pics/pic9.jpeg'
import pic6 from '../public/carousel-pics/pic4.jpeg'
import pic7 from '../public/carousel-pics/pic17.jpeg'
import pic8 from '../public/carousel-pics/pic15.jpeg'
import pic9 from '../public/carousel-pics/pic18.jpeg'
import pic10 from '../public/carousel-pics/pic19.jpeg'
import pic11 from '../public/carousel-pics/pic21.jpeg'
import pic12 from '../public/carousel-pics/pic10.jpeg'
import pic13 from '../public/carousel-pics/pic11.jpeg'
import pic14 from '../public/carousel-pics/pic14.jpeg'
import pic15 from '../public/carousel-pics/pic16.jpeg'
import pic16 from '../public/carousel-pics/pic2.jpeg'
import pic17 from '../public/carousel-pics/pic22.jpeg'

const images =[
    {src: pic1, id: 2}, 
    {src: pic2, id: 3}, 
    {src: pic3, id: 4}, 
    {src: pic4, id: 5}, 
    {src: pic5, id: 6}, 
    {src: pic6, id: 7}, 
    {src: pic7, id: 8}, 
    {src: pic8, id: 9}, 
    {src: pic9, id: 10},
    {src: pic10, id: 11},
    {src: pic11, id: 13},
    {src: pic12, id: 14},
    {src: pic13, id: 15},
    {src: pic14, id: 16},
    {src: pic15, id: 17},
    {src: pic16, id: 18},
    {src: pic17, id: 19},
]


const Hero = () => {

    return (
        <section className="bg-hero-background h-screen w-screen pt-6 text-center text-4xl">
            <h1 className={inspiration.className}>Don&apos;t Let the Name Fool You</h1>
            <Carousel images={images} />
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