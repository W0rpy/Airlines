import { create } from 'zustand'

import { IDeparture, IState } from '../utils/types'

export const useDeparture = create<IState>((set) => ({
   departureInfo: {
      departure: 'Москва',
      arrive: 'Ростов на Дону',
      reverse: ''
   },
   changeDeparture: (data: IDeparture) => set((state) => ({ departureInfo: state.departureInfo = data })),
}))