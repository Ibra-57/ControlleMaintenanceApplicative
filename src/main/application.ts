import {ajoutTacheListe} from "../controller/ajoutTacheListe.ts";
import {Liste} from "../modele/liste.ts";
import {Tache} from "../modele/tache.ts";

const liste = new Liste([]);

const tache1 = new Tache(null);
tache1.nom = "Faire les courses";
console.log(tache1.etatFalse()); // La tâche est terminée

const tache2 = new Tache(null);
tache2.nom = "Faire le ménage";

ajoutTacheListe(liste, tache1);
ajoutTacheListe(liste, tache2);

const list = JSON.stringify(liste.list);
console.log(list); // Affiche la liste des tâches au format JSON

console.log(liste.list);    