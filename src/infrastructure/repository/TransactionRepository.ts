import pool from '../DB/dbconfig'
import Trasaction from "../../domain/entity/Transaction";
import ITransactionRepository from "../../domain/repository/ITransaction";

export default class TransactionRepository implements ITransactionRepository {

    async register(transaction: Trasaction) {
        const connection = await pool.connect();
        connection.query(' ')
    }
    save(Trasaction: Trasaction) {
        throw new Error("Method not implemented.");
    }
    find(id: string): Trasaction {
        throw new Error("Method not implemented.");
    }

}