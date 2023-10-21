import Bank from "./Bank";
import BaseEntity from "./BaseEntity";
import { v4 as uuid } from 'uuid'
import PixKey from "./pixKey";

class Account extends BaseEntity {
    ownerName: string;
    bank: Bank;
    number: string;
    pixKeys: Array<PixKey>

    constructor(ownerName: string, bank: Bank) {
        super()
        this.id = uuid();
        this.ownerName = ownerName
        this.bank = bank
        this.createdAt = new Date();
    }
}

export default Account;