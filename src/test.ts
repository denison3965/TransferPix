import Account from "./domain/entity/Account";
import Bank from "./domain/entity/Bank";
import PixKey from "./domain/entity/pixKey";
import PixKeyRepository from "./infrastructure/repository/PixKeyRepository";

const r = new PixKeyRepository();

const b = new Bank('001', 'codeBank');
const a = new Account('Deni', b);
const e = new PixKey('cpf', a, '39888983992', 'active')

r.register(e);