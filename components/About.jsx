import { Fugaz_One } from 'next/font/google';
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function About() {
  return (
    <h1 className={' mt-10 text-5xl sm:text-6xl md:text-7xl text-center ' + fugaz.className}><span className='textGradient'>About</span>
      <p className=' mt-10 text-lg sm:text-xl md:text-2xl text-center w-full max-w-[1500px] leading-[2]'>Welcome to Broodl, your personal space for tracking and understanding your emotions. 
        We believe that self-awareness is the first step toward emotional well-being, and our platform is designed to help you reflect on your moods, recognize patterns, 
        and gain insights into your mental health journey. Whether you&apos;re navigating daily stresses or striving for a deeper understanding of your emotions, our intuitive tools make it easy to 
        log your feelings, track changes over time, and discover what influences your mood. </p>
    </h1>
  )
}
