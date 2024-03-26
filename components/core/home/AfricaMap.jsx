import Image from 'next/image'
// import image from "/Rectangle 4 (1).png";
import svgOutline from '@/public/mapoutline.png'
import svgImg from '@/public/svgviewer-png-output.png'
import styles from './africa.module.css'
const AfricaMap = () => {
  return (
    <div className='relative right-4 -z-10'>
      <div className={`${styles.map_outline}`}>
        <Image
          width={382}
          height={416}
          className='hidden md:block  flex-shrink-0 top-[10rem] relative '
          alt='Afican map image'
          src={svgImg}
        />{' '}
        <Image
          width={382}
          height={416}
          className='hidden md:block w-full -z-40 bottom-[23rem] right-11 flex-shrink-0 relative '
          alt='Afican map image outline'
          src={svgOutline}
        />
      </div>
      <Image
        width={382}
        height={416}
        className='hidden md:block flex-shrink-0 bottom-[70rem]  relative'
        alt='image of a devloper'
        src={'/Rectangle 4 (1).png'}
      />
    </div>
  )
}

export default AfricaMap
