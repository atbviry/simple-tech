//cette enum contient les types des cartes à jouer

// Nous avons 4 fourniseurs de cartes (il y'a plant, electric, fire, water).
// Donc nous gérons 4 models/façons de cartes à savoir: plant, electric, fire, water
export enum MonsterType {
    PLANT = 'plant',
    ELECTRIC = 'electric',
    FIRE = 'fire',
    WATER = 'water'
}

//cette interface contient l'image et la couleurs des types des cartes à jouer
export interface IMonsterProperties {
    imagreUrl: string;
    color: string;
}

export const MonsterTypeProperties: { [key: string]: IMonsterProperties } = {
    [MonsterType.PLANT]: {
        imagreUrl: 'assets/img/plant.png',
        color: 'rgba(135, 255, 21, 1)'
    },
    [MonsterType.ELECTRIC]: {
        imagreUrl: 'assets/img/electric.png',
        color: 'rgba(255, 255, 104, 1)'
    },
    [MonsterType.FIRE]: {
        imagreUrl: 'assets/img/fire.png',
        color: 'rgba(155, 10, 21, 1)'
    },
    [MonsterType.WATER]: {
        imagreUrl: 'assets/img/watter.png',
        color: 'rgba(23, 129, 156, 0.53)'
    }
}

