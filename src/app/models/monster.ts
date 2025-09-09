import { MonsterType } from "../composants/utils/monster.utils";

export class Monster {
    id: number = -1;
    name: string = "My monster";
    image: string = 'assets/img/monster.png';
    type: MonsterType = MonsterType.ELECTRIC;
    hp: number = 40;
    figureCaption: string = "N°001 Monster";
    attackName: string = "Geo Impact"
    attackStrength: number = 60;
    attackDescription: string = "This is a long description of a monster capacity.";

    copy(): Monster {
        return Object.assign(new Monster(), this);
    }

}
