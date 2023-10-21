import { v4 as uuid } from 'uuid';
import BaseEntity from './BaseEntity';
import Account from './Account';

class Bank extends BaseEntity {
    code: string;
    name: string;
    accounts: Array<Account>;

    constructor(code: string, name:string) {
        super();
        this.id = uuid();
        this.name = name
        this.code = code
        this.createdAt = new Date();
    }

}

export default Bank;