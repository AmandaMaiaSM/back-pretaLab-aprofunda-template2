import { AnyARecord } from "dns";
import { Despesa } from "../../domain/despesa";

export interface ChatRepository {
    //seu codigo aqui
    open(transactions: Despesa[], uid: string, messageUser: string ):  Promise<any>;
}