// pq a interface recebe um tipo generico?
export interface IAgenda<T> {
    protocolo: string
    data: Date
    regras: T
}