import { assertEquals, assertThrows } from "jsr:@std/assert";

import { Liste } from "../src/modele/liste.ts";
import { Tache } from "../src/modele/tache.ts";

Deno.test("Constructeur / getters ok", () => {
  const liste = new Liste([]);
  assertEquals(liste.list, []);
});

Deno.test("Setter list ok", () => {
  const liste = new Liste([]);
  const nouvelleListe = [new Tache("Faire les courses")];
  liste.list = nouvelleListe;
  assertEquals(liste.list, nouvelleListe);
}   );