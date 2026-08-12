import { pool } from "../shared/db/conn.mysql.js";
/*const clients: Client[] = [ //Array de Client
    new Client('Ivo', 'Cosimo', 'ivo@mail.com', "doc1", "DNI", "*ctr1*", new Date('2000-07-03'), "Socio", "36b8f84d-df4e-4d49-b662-bcde71a8764f"),
    new Client('Lionel', 'Messi', 'messi@mail.com',  "doc2", "DNI", "*ctr2*", new Date('1986-07-03'), "Socio", "a02b91bc-3769-4221-beb1-d7a3aeba7dad")
] //Creo 2 clients*/
export class ClientRepository {
    //El item es el objeto cliente que recibo
    async findAll() {
        const [clients] = await pool.query('select * from clients');
        return clients;
    }
    async findOne(item) {
        const id = Number.parseInt(item.id);
        const [clients] = await pool.query('select * from clients where id = ?', [id]);
        if (clients.length === 0) {
            return undefined;
        }
        const client = clients[0];
        return client;
    }
    async add(clientInput) {
        const { id, ...clientRow } = clientInput;
        const [result] = await pool.query('insert into clients set ?', [clientRow]);
        clientInput.id = Number(result.insertId);
        return clientInput;
    }
    async update(id, clientInput) {
        // const {id, ...clientRow} = clientInput
        const clientId = Number(id);
        await pool.query('update clients set ? where id = ?', [clientInput, clientId]);
        return await this.findOne({ id });
    }
    async delete(item) {
        try {
            const clientToDelete = await this.findOne(item);
            const clientId = Number.parseInt(item.id);
            await pool.query('delete from clients where id = ?', clientId);
            return clientToDelete;
        }
        catch (error) {
            throw new Error('unable to delete character');
        }
    }
}
//# sourceMappingURL=client.repository.js.map