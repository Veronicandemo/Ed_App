import styles from './home.module.css'

const HeroText = ({ isMenuOpen }) => {
  const heroTextClass = isMenuOpen ? styles.menu_open : styles.menu_closed

  return (
    <div className={`${styles.hero_text} $ ${heroTextClass}`}>
      <h1
        className={`lg:text-6xl text-5xl text-brightYellow  md:mt-0 font-bold md:mb-28 mb-10 tracking-[2.72px] ${styles.header}`}
      >
        Hire <span className={`${styles.africa_text}`}>African</span> <br></br>{' '}
        Tech Talents!
      </h1>
      <p className={styles.text1}>Vetted Quality and Affordable Rates</p>
      <p className={styles.text2}>Flexible Timezones</p>
      <p className={styles.text3}>Negotiable Work Plan</p>
    </div>
  )
}
export default HeroText
