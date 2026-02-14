import {Liste} from "../modele/liste.ts";
import {Tache} from "../modele/tache.ts";

export function ajoutTacheListe(liste: Liste, tache: Tache): void {
  liste.list.push(tache);
}