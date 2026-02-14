import { assertEquals, assertThrows } from "jsr:@std/assert";

import { Tache } from "../src/modele/tache.ts";

Deno.test("Constructeur / getters ok", () => {
  const tache = new Tache("Faire les courses");

  assertEquals(tache.nom, "Faire les courses");
  assertEquals(tache.etat, true);
});

Deno.test("Constructeur erreur nom", () => {
  assertThrows(() => {
    new Tache("");
  });
});

Deno.test("Setter nom ok", () => {
  const tache = new Tache("Faire les courses");
  tache.nom = "Faire le ménage";
  assertEquals(tache.nom, "Faire le ménage");
});

Deno.test("Setter nom lance exception (nom vide)", () => {
  const tache = new Tache("Faire les courses");

  assertThrows(() => {
    tache.nom = "";
  });
});

Deno.test("Setter état ok", () => {
  const tache = new Tache("Faire les courses");
  tache.etatFalse();
  assertEquals(tache.etat, false);
});

Deno.test("Méthode etatFalse ok", () => {
  const tache = new Tache("Faire les courses");
  const message = tache.etatFalse();
  assertEquals(tache.etat, false);
  assertEquals(message, "La tâche Faire les courses a été marquée comme terminée");
});