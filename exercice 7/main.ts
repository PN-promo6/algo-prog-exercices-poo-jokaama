abstract class Item {
    name: string;
    size: number;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}

class Teleporter extends Item {
    energy: number;

    constructor(name: string, energy: number) {
        //Nous avons donné une valeur par défaut à size, d'où son absence du constructor
        super(name, 3);
        this.energy = energy;
    }

}

class Arrow extends Item {
    power: number;

    constructor(name: string, power: number) {
        super(name, 1);
        this.power = power;
    }
}

class Player {
    namePlayer: string;
    life: number;
    itemSlots: Array<Item>;
    itemsUsed: number;

    constructor(namePlayer: string) {
        this.namePlayer = namePlayer;
        this.life = 3;
        this.itemSlots = Array<Item>();
        this.itemsUsed = 0;
    }

    addItem(item: Item): boolean {
        if (this.itemsUsed + item.size > 9) {
            console.log("Plus de place dans votre inventaire");

            return false;
        }
        this.itemSlots.push(item);
        this.itemsUsed += item.size;
        console.log(item.name + " a été ajouté !");

        return true;
    }

}
let playerOne: Player = new Player("Geralt de Riv");
let teleporter: Teleporter = new Teleporter("Téléporteur rouge", 200);
playerOne.addItem(teleporter);
playerOne.addItem(teleporter);
playerOne.addItem(teleporter);
playerOne.addItem(teleporter);
