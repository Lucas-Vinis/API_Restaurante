import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("products").del();

    await knex("products").insert([
        { name: "Ragu de Ossobuco", price: "79.9" },
        { name: "Entremet", price: "49.9" },
        { name: "Dadinho de tapioca", price: "25.9" },
        { name: "Burrata", price: "29.9" },
        { name: "Carpaccio", price: "20.9" },
        { name: "Ravioli de queijo Brie", price: "69.9" },
        { name: "Fetutini de espinafre", price: "75.9" },
        { name: "Marguerita", price: "20" },
        { name: "Whisky 12 anos", price: "27" },
        { name: "Strogonof de filé Mignon", price: "89" },
    ]);
};
