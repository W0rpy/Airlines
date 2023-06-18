'use client'

import Image from 'next/image'

import logo from './../public/images/logo.svg'
import baggage from './../public/images/baggage.svg'
import handbag from './../public/images/handbag.svg'
import { useDeparture } from '../store'

import styles from './Tickets.module.css'

function Tickets() {

   const ticketInfo = useDeparture((state) => state.departureInfo)

   return (
      <div className={styles.TicketDouble}>
         <div className={styles.TicketDoubleContent}>
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
                           <div className={styles.DepartureTime}>21:57</div>
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
                           <div className={styles.DepartureTime}>23:42</div>
                           <div className={styles.DepartureCity}>{ticketInfo.arrive}</div>
                           <div className={styles.DepartureDate}>19.05.2022</div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.TicketAviaPictures}>
                     <div className={styles.Handbag}>
                        <Image src={handbag} alt='handbag' />
                     </div>
                     <Image src={baggage} alt='baggage' />
                  </div>
               </div>
            </div>
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
               <div className={styles.TicketDoubleInfo}>
                  <div className={styles.TicketContent}>
                     <div className={styles.DepartureInfo}>
                        <div className={styles.Departure}>
                           <div className={styles.DepartureTime}>15:20</div>
                           <div className={styles.DepartureCity}>{ticketInfo.arrive}</div>
                           <div className={styles.DepartureDate}>{ticketInfo.reverse}</div>
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
                           <div className={styles.DepartureTime}>17:05</div>
                           <div className={styles.DepartureCity}>{ticketInfo.departure}</div>
                           <div className={styles.DepartureDate}>{ticketInfo.reverse}</div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.TicketAviaPictures}>
                     <div className={styles.Handbag}>
                        <Image src={handbag} alt='handbag' />
                     </div>
                     <Image src={baggage} alt='baggage' />
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.TicketDoublePrice}>
            9 300 ₽
         </div>
      </div>
   )
}
export default Tickets;