import pool from '../DB/dbconfig'
import Account from "../../domain/entity/Account";
import Bank from "../../domain/entity/Bank";
import PixKey from "../../domain/entity/pixKey";
import IPixKeyRepository from "../../domain/repository/IPixKeyRepository";

export default class PixKeyRepository implements IPixKeyRepository {
    async register(pixKey: PixKey): PixKey {
        const connection = await pool.connect();
    }
    findKeyByKind(key: string, kind: string): PixKey {
        throw new Error("Method not implemented.");
    }
    addBank(bank: Bank): void {
        throw new Error("Method not implemented.");
    }
    addAccount(account: Account): void {
        throw new Error("Method not implemented.");
    }
    findAccount(id: string): Account {
        throw new Error("Method not implemented.");
    }

}