export interface IDeparture {
   reverse: string
   departure: string
   arrive: string
}

export interface IState {
   departureInfo: IDeparture
   changeDeparture: (data: IDeparture) => void
}