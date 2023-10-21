import Trasaction from "../entity/Transaction";

export default interface ITransactionRepository {
    register(transaction: Trasaction)
    save(Trasaction: Trasaction)
    find(id: string): Trasaction
}