'use client'

import { useState } from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import logo from './../public/images/logo.svg'
import baggage from './../public/images/baggage.svg'
import handbag from './../public/images/handbag.svg'
import { departureSchedule } from '../utils/schedule'
import { useDeparture } from '../store'

import styles from './Ticket.module.css'

function Ticket() {

   const [time, setTime] = useState({ timeDeparture: '09:20', timeArrive: '11:05' })

   const ticketInfo = useDeparture((state) => state.departureInfo)

   return (
      <div className={styles.TicketAvia}>
         <div className={styles.TicketAviaAirline}>
            <div className={styles.TicketAviaIrrevocable}>Невозвратный</div>
            <div className={styles.TicketAviaCompany}>
               <div className={styles.TicketAviaLogo}>
                  <Image src={logo} alt="Logo" className={styles.Seven} />
               </div>
               <div className={styles.TicketAviaText}>S7 Airlines</div>
            </div>
         </div>
         <div className={styles.TicketAviaInfo}>
            <div className={styles.TicketContent}>
               <div className={styles.DepartureInfo}>
                  <div className={styles.Departure}>
                     <div className={styles.DepartureTime}>{time.timeDeparture}</div>
                     <div className={styles.DepartureCity}>{ticketInfo.departure}</div>
                     <div className={styles.DepartureDate}>19.05.2022</div>
                  </div>
                  <div className={styles.Way}>
                     <div className={styles.WayAirport}>
                        <div className={styles.AirportDeparture}>SVO</div>
                        <div className={styles.AirportDeparture}>ROV</div>
                     </div>
                     <div className={styles.WayDecorElement}>
                        <div className={styles.WayDecor}></div>
                     </div>
                     <div className={styles.WayText}>В пути 1 ч 45 мин</div>
                  </div>
                  <div className={styles.Departure}>
                     <div className={styles.DepartureTime}>{time.timeArrive}</div>
                     <div className={styles.DepartureCity}>{ticketInfo.arrive}</div>
                     <div className={styles.DepartureDate}>19.05.2022</div>
                  </div>
               </div>
               <div className={styles.TicketButtons}>
                  {departureSchedule.map(flight => <button key={flight.departure} className={clsx(styles.TicketButton, time.timeDeparture === flight.departure && styles.Active)} onClick={() => {
                     setTime({ timeDeparture: flight.departure, timeArrive: flight.arrive })
                  }}>{flight.departure} - {flight.arrive}</button>)}
               </div>
            </div>
            <div className={styles.TicketAviaPictures}>
               <div className={styles.Handbag}>
                  <Image src={handbag} alt='handbag' />
               </div>
               <Image src={baggage} alt='baggage' />
            </div>
         </div>
         <div className={styles.TicketAviaPrice}>4 150 ₽</div>
      </div>
   )
}
export default Ticket;