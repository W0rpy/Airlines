'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import Ticket from '../../../components/Ticket'
import Tickets from '../../../components/Tickets'
import { useDeparture } from '../../../store'
import arrow from './../../../public/images/arrow.svg'

import styles from './ticket.module.css'

function TicketPage() {

   const ticketInfo = useDeparture((state) => state.departureInfo)

   return (
      <>
         <Head>
            <meta name='viewport' content='width=device-width' />
         </Head>
         <div className={styles.Ticket}>
            <div className={styles.TicketContainer}>
               <div className={styles.TicketBlock}>
                  <div className={styles.TicketBack}>
                     <Image src={arrow} alt='arrow' className={styles.TicketArrow} />
                     <Link className={styles.TicketBackLink} href='/'>Назад</Link>
                  </div>
                  {ticketInfo.reverse
                     ? <Tickets />
                     : <Ticket />
                  }
               </div>
            </div>
         </div>
      </>
   )
}
export default TicketPage;