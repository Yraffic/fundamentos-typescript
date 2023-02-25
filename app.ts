import { PeopleAccount } from "./class/PeopleAccount"
import { CompanyAccount } from "./class/CompanyAccont"

const peopleAccount: PeopleAccount = new PeopleAccount(1, "yuri", 10)
console.log(peopleAccount)

peopleAccount.setName("raffic")

console.log(peopleAccount)
/* const companyAccount: CompanyAccount = new CompanyAccount("dio", 20)
console.log(companyAccount) */