import React from 'react'
import styles from '../style'
import {
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testi,
  Clients,
  Cta,
} from '../components'

const HomePage = () => {
  return (
    <div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX}  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testi />
          <Clients />
          <Cta />
        </div>
      </div>
    </div>
  )
}

export default HomePage
