'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Head from 'next/head'

import { useForm, SubmitHandler } from 'react-hook-form'

import { useDeparture } from '../../store'
import calendar from './../../public/images/calendar_blue.svg'
import { IDeparture } from '../../utils/types'

import styles from './page.module.css'

export default function Home() {

  const router = useRouter()
  const departureData = useDeparture((state) => state.changeDeparture)
  const regExp = /^[A-Za-zА-Яа-яЁё+-]+$/
  const regExpNumber = /(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d/

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IDeparture>();
  const onSubmit: SubmitHandler<IDeparture> = data => {
    departureData(data)
    router.push('/ticket')
    reset();
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <div className={styles.Form}>
        <div className={styles.FormContainer}>
          <div className={styles.FormBlock}>
            <form className={styles.FormFilling} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.FormLocation}>
                <div className={styles.FormDeparture}>
                  <div className={styles.DepartureLabel}>Откуда</div>
                  <input type='text' {...register("departure", { required: 'Required field', minLength: { value: 3, message: '3 symbols minimum' }, maxLength: { value: 16, message: '16 symbols maximum' }, pattern: regExp })} placeholder='Город вылета' className={styles.Departure} />
                  {errors?.departure && <div className={styles.Error}>{errors?.departure?.message || 'Error'}</div>}
                </div>
                <div className={styles.FormDeparture}>
                  <div className={styles.DepartureLabel}>Куда</div>
                  <input type='text' {...register("arrive", { required: 'Required field', minLength: { value: 3, message: '3 symbols minimum' }, maxLength: { value: 16, message: '16 symbols maximum' }, pattern: regExp })} placeholder='Город прилёта' className={styles.Departure} />
                  {errors?.arrive && <div className={styles.Error}>{errors?.arrive?.message || 'Error'}</div>}
                </div>
                <div className={styles.FormDeparture}>
                  <div className={styles.DepartureLabel}>Туда</div>
                  <div className={styles.DepartureStatic}>
                    <Image src={calendar} className={styles.DepartureCalendar} alt='Calendar' />
                    <span>19.05.22</span>
                  </div>
                </div>
                <div className={styles.FormDeparture}>
                  <div className={styles.DepartureLabel}>Обратно</div>
                  <input type='text' {...register("reverse", { pattern: regExpNumber, maxLength: 10, minLength: 10 })} placeholder='дд.мм.гггг' className={styles.ReturnTrip} />
                  {errors?.reverse && <div className={styles.Error}>{errors?.reverse?.message || 'Error'}</div>}
                </div>
              </div>
              <div className={styles.FormSubmit}>
                <button type='submit' className={styles.FormBtn}>Найти билеты</button>
              </div>
            </form>
          </div>
        </div>
      </div >
    </>
  )
}
