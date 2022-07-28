interface IData {
    name:string,
    id: number
}
export interface ListRes {
    code: number,
    message:string,
    data: IData
}