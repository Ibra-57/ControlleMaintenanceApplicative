export class Tache{
    private _nom! : string;
    private _etat! : boolean;

    constructor(nom:string|null){
        this._nom = nom!;
        this._etat = true
    }

    public get nom(): string {
        return this._nom;
    }
    
    public set nom(value: string) {
        if (value.trim().length < 1) {
            throw new Error("Le nom doit comporter au moins 1 caractère !");
        }
        this._nom = value;
    }

    public get etat(): boolean {
        return this._etat;
    }
    
    public etatFalse():string {
        this._etat = false;
        return "La tâche " + this._nom + " a été marquée comme terminée";
    }

}