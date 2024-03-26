import Link from 'next/link'
import Button from '../../base/Button'
import Logo from '../../core/home/Logo'
import styles from './footer.module.css'

function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer id='footer' className={styles.footer}>
      <div
        className={`flex  items-center justify-center md:gap-28 gap-10 mx-auto ${styles.footercols}`}
      >
        <div className='flex flex-col items-center gap-8 justify-between'>
          <Link href='/' className=''>
            <Logo />
          </Link>

          <p className={styles.footer_text}>
            Carrer Sicilia 190 1ero 2°, 08013, Ciudad de Barcelona, Espana.
          </p>
          <p className={styles.footer_text}>
            Europe: +346 310 385 88 Email: gustavo@grito.africa
          </p>
          <p className={styles.footer_text}>
            Africa: +234 802 919 7097 Email: emeka@grito.africa
          </p>
        </div>
        <div className={styles.horizonal_line}></div>
        <div className='flex items-center gap-10 flex-col '>
          <h2
            className={`text-[28px] font-medium uppercase mb-20 text-[#CBB26A] ${styles.heading}`}
          >
            Office Hours
          </h2>

          <ul>
            <li className=''>9am - 4pm (Mon - Sat, WAT)</li>
          </ul>
          <Link href='/'>
            <Button variant='chat'>Chat with Us</Button>
          </Link>
        </div>
        <div className={styles.horizonal_line}></div>

        <div className={`w-80 ${styles.about}`}>
          <p>
            At GRITO Talent Agency, our motto says: “Never Waste Talent” because
            we take African Tech Professionals one step closer to International
            Jobs
          </p>
          {/* <ul>
            <li>You Tube </li>
            <li>Linkedln</li>
          </ul> */}
        </div>
      </div>
      <div>
        <p className={`text-center font-[600] text-lg mt-28  ${styles.rights}`}>
          © ALL RIGHTS RESERVED {date} | GRITO TALENT AGENCY
        </p>
      </div>
    </footer>
  )
}

export default Footer
