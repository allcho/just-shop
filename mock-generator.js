const fs = require("fs/promises");
const { fakerRU: faker } = require("@faker-js/faker");
const path = require("path");

const COUNTITEMS = Number(process.argv[2]) || 100;
const COUNTCATEGORY = 20;

function generate() {
  const items = [];
  const categories = [];
  const cart = [];


  for (let i = 1; i <= COUNTCATEGORY; i += 1) {
    categories.push({
      name: faker.commerce.product(),
      id: i
    });
  }

  for (let i = 1; i <= COUNTITEMS; i += 1) {
    items.push({
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.number.float({ min: 10, max: 1000, precision: 0.01 }),
      image: faker.image.urlLoremFlickr(), 
      color: faker.color.human(),
      category_id: faker.helpers.arrayElement(categories).id,
      id: i
    });
  }

  fs.writeFile(
    path.resolve("./db.json"),
    JSON.stringify({ categories, items, cart }, undefined, 2),
    { flag: "w" }
  );
}

generate();
