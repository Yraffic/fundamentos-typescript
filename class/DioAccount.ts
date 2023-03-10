export abstract class DioAccount {
    private name: string
    accountNumber: number 
    balance: number = 0
    private status: boolean =true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void =>{
        this.name = this.name
        console.log("nome alterado")
    }

    getName = (): string =>{
        return this.name
    }

    deposit = (): void =>{
        if(this.validateStatus()){
            return console.log("deposito feito")
        }
    }

    withdraw = (): void =>{
        console.log("vc sacou")
    }

    getBalance = (): void =>{
        console.log(this.balance)
    }

    private validateStatus = (): boolean => {
      if(this.status){
        return this.status
      }

      throw new Error()
    } 
}
