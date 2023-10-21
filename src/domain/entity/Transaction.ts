import Account from "./Account";
import BaseEntity from "./BaseEntity";
import PixKey from "./pixKey";

enum StatusTransaction {
    TrasactionPending = 'pending',
    TrasactionCompleted = 'completed',
    TrasactionError = 'error',
    TrasactionConfirmed = 'confirmed',
}

class Trasaction extends BaseEntity {
    accountFrom: Account
    amount: number
    pixKeyTo: PixKey
    status: string
    description: string
    cancelDescription: string

    constructor(accountFrom: Account, amount: number, pixKeyTo: PixKey, description: string) {
        super()

        if (amount <= 0) { throw new Error("The amount must be greater than 0") }
        if (pixKeyTo.accountId === accountFrom.id) { throw new Error("The source and the destination account cannot be the same") }

        this.accountFrom = accountFrom
        this.amount = amount
        this.pixKeyTo = pixKeyTo;
        this.status = StatusTransaction.TrasactionPending
        this.description = description

    }

    private complete() {
        this.status = StatusTransaction.TrasactionCompleted
        this.updatedAt = new Date()
    }

    private cancel(cancelDescription: string) {
        this.status = StatusTransaction.TrasactionError
        this.cancelDescription = cancelDescription
        this.updatedAt = new Date()
    }

    private confirm() {
        this.status = StatusTransaction.TrasactionConfirmed
        this.updatedAt = new Date()
    }
}

export default Trasaction;