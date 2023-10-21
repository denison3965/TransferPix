import Account from "./Account";
import BaseEntity from "./BaseEntity";

class PixKey extends BaseEntity{

    kind: string
    key: string
    accountId: string
    account: Account
    staus: string

    constructor(kind: string, account: Account, key: string, status: string) {
        super()

        if (kind !== 'email' && kind !== 'cpf') {
            throw new Error("Invalid type of key");
        }

        if (status !== 'active' && status !== 'inactive') {
            throw new Error("Invalid type os status");
        }

        this.kind = kind
        this.key = key
        this.accountId = account.id
        this.account = account
        this.staus = status
    }
}

export default PixKey;