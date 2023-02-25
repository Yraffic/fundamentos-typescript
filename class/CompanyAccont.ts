import { DioAccount } from "./DioAccount";


export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }
    getLoan= (): void =>{
        console.log("você fez emprestimo")
    }
    deposit  = (): void =>{
        console.log("a empresa depositou")
    }
}