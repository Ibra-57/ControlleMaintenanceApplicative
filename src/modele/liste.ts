import {Tache} from "./tache.ts"

export class Liste{
        private _list!: Array<Tache>
    

    constructor(list:Array<Tache>){
        this._list = list;
    }

    public get list(): Array<Tache> {
        return this._list;
    }

    public set list(value: Array<Tache>) {
        this._list = value;
    }
}