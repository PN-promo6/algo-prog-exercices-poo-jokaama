class Client {
    name: string;
    idBank: number;

    constructor(name: string, idBank: number) {
        this.name = name;
        this.idBank = idBank
    }

}

class ClientPro extends Client {
    siret: number

    constructor(name: string, idBank: number, siret: number) {
        super(name, idBank);
        this.siret = siret;

    }
}

let userBank: Client = new Client("Silva", 650269)
console.log(userBank.name, userBank.idBank);

let proUserBank: ClientPro = new ClientPro("Silva", 650269, 85269)
console.log(proUserBank.name, proUserBank.idBank, proUserBank.siret);
