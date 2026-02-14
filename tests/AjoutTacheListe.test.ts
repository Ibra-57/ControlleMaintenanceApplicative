import { assertEquals, assertThrows } from "jsr:@std/assert";

import { Liste } from "../src/modele/liste.ts";
import { Tache } from "../src/modele/tache.ts";
import { ajoutTacheListe } from "../src/controller/ajoutTacheListe.ts";

Deno.test("Ajouter une tâche à la liste", () => {
  const liste = new Liste([]);
  const tache = new Tache("Faire les courses");

  ajoutTacheListe(liste, tache);

  assertEquals(liste.list.length, 1);
  assertEquals(liste.list[0].nom, "Faire les courses");
});