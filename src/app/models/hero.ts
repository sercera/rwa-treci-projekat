export class Hero {
    constructor(
        public id: number,
        public localized_name: string,
        public img: string,
        public primary_attr: string,
        public attack_type: string,
        public base_health: number,
        public base_healt_regen: number,
        public base_mana: number,
        public base_mana_regen: number
    ){}
}
