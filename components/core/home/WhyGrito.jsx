import Button from '@/components/base/Button'
import Footer from '@/components/layout/home/Footer'
import { PiBookOpenTextBold } from 'react-icons/pi'
import styles from './whygrito.module.css'

function WhyGrito() {
  return (
    <main className={`h-full ${styles.content_bg}`}>
      <h2 className={`${styles.heading} text-center text-xl my-10`}>
        WHY YOU SHOULD ENROLL AT GRITO ACADEMY?
      </h2>
      <div className={styles.container}>
        <div>
          <PiBookOpenTextBold className={styles.icon} />
          <p className={styles.paragraph}>
            Learn in milestones at your own pace and build your first software
            product within 60days with Your Expert Tech Guide.
          </p>
        </div>
        <div>
          <PiBookOpenTextBold className={styles.icon} />
          <p className={styles.paragraph}>
            Learn HTML, CSS and Javascript in your African local dialect.
          </p>
        </div>
        <div>
          <PiBookOpenTextBold className={styles.icon} />
          <p className={styles.paragraph}>
            Enroll at GRITO Academy on our flexible payment plans and win
            bonuses on referrals
          </p>
        </div>

        <div>
          <PiBookOpenTextBold className={styles.icon} />
          <p className={styles.paragraph}>
            Join our Virtual Internship Program (VIP) to prepare for your dream
            tech job.
          </p>
        </div>
        <Button variant='get_started'>Get started</Button>
      </div>
      <Footer />
    </main>
  )
}

export default WhyGrito
