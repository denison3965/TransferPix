import Account from "../entity/Account";
import Bank from "../entity/Bank";
import PixKey from "../entity/pixKey";

export default interface IPixKeyRepository {
    register(pixKey: PixKey): Promise<PixKey>
    findKeyByKind(key: string, kind: string): PixKey
    addBank(bank: Bank): void
    addAccount(account: Account): void
    findAccount(id: string): Account
}