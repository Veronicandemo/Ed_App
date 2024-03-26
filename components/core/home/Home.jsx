'use client'
import { Link } from 'react-scroll'
import Button from '../../base/Button'
import CarouselComp from './Carousel'
import HeroText from './HeroText'
import VideoAndMap from './VideoAndMap'
import styles from './home.module.css'
const Home = ({ isMenuOpen }) => {
  return (
    <main className={`p-16 sm:p-4 `}>
      <div className={`h-[100vh] ${styles.container} `}>
        <section
          className={`flex flex-col md:flex-row md:mt-16  items-center md:gap-10 ${styles.heroCont}`}
        >
          <HeroText isMenuOpen={isMenuOpen} />
          <VideoAndMap />
        </section>
        <div className='md:relative'>
          <div
            className={`${styles.btn_container} flex gap-6 absolute mb-6 md:bottom-[55rem]`}
          >
            <Button variant='play'>Play Video</Button>
            <Button variant='scroll'>
              <Link
                activeClass='active'
                to='carousel'
                spy={true}
                smooth={true}
                offset={50}
                duration={50}
              >
                Scroll
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div
        className={` ${styles.line} w-full h-[1px] bg-greyYellow md:mt-0 mt-20`}
      ></div>
      <CarouselComp />
      <div></div>
    </main>
  )
}

export default Home
