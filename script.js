/*const animal = {
  type: "dog",
  color: "brown",
  bread: "Golden Retriever",
  age: 5,
  isFriendly: true,
  food: ["dog food", "meat", "fish"],
  bark: function () {
    console.log("arf");
  },
};

console.log(animal.type);
animal["type"] = "cat";
console.log(animal.type);

animal.food[0] = "fruit";
console.log(animal.food);*/

/* const products = [
  {
    id: 1,
    name: "Product 1",
    price: 9.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/200/300",
    category: "Category 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://picsum.photos/200/300",
    category: "Category 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 29.99,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://picsum.photos/200/300",
    category: "Category 3",
  },
  {
    id: 4,
    name: "Product 4",
    price: 39.99,
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://picsum.photos/200/300",
    category: "Category 4",
  },
  {
    id: 5,
    name: "Product 5",
    price: 49.99,
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "https://picsum.photos/200/300",
    category: "Category 5",
  },
  {
    id: 6,
    name: "Product 6",
    price: 59.99,
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    image: "https://picsum.photos/200/300",
    category: "Category 6",
  },
  {
    id: 7,
    name: "Product 7",
    price: 69.99,
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    image: "https://picsum.photos/200/300",
    category: "Category 7",
  },
  {
    id: 8,
    name: "Product 8",
    price: 79.99,
    description:
      "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    image: "https://picsum.photos/200/300",
    category: "Category 8",
  },
  {
    id: 9,
    name: "Product 9",
    price: 89.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://picsum.photos/200/300",
    category: "Category 9",
  },
  {
    id: 10,
    name: "Product 10",
    price: 99.99,
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    image: "https://picsum.photos/200/300",
  },
];

products.forEach(function (product) {
  const card = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = product.price;

  const description = document.createElement("p");
  description.textContent = product.description;

  const addToCardBtn = document.createElement("button");
  addToCardBtn.textContent = "Add to Cart";

  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(description);
  card.appendChild(addToCardBtn);

  document.body.appendChild(card);
}); */

const animals = [
  {
    id: 1,
    name: "Corgi",
    price: 500,
    description:
      "A small, fluffy dog breed with a friendly and outgoing personality.",
    image: "https://picsum.photos/200/300/?random=1",
    category: "Dogs",
  },
  {
    id: 2,
    name: "Persian Cat",
    price: 800,
    description:
      "A beautiful, long-haired cat breed known for their sweet and gentle personalities.",
    image: "https://picsum.photos/200/300/?random=2",
    category: "Cats",
  },
  {
    id: 3,
    name: "African Grey Parrot",
    price: 1200,
    description:
      "A highly intelligent and talkative bird species that make great companions.",
    image: "https://picsum.photos/200/300/?random=3",
    category: "Birds",
  },
  {
    id: 4,
    name: "Bearded Dragon",
    price: 150,
    description:
      "A reptile species that are easy to care for and make great pets for beginners.",
    image: "https://picsum.photos/200/300/?random=4",
    category: "Reptiles",
  },
  {
    id: 5,
    name: "Goldfish",
    price: 10,
    description:
      "A popular freshwater fish species that are easy to care for and make great pets for kids.",
    image: "https://picsum.photos/200/300/?random=5",
    category: "Fish",
  },
  {
    id: 6,
    name: "Rabbit",
    price: 200,
    description:
      "A cute and cuddly small animal species that make great indoor pets.",
    image: "https://picsum.photos/200/300/?random=6",
    category: "Small Animals",
  },
  {
    id: 7,
    name: "Bengal Cat",
    price: 1000,
    description:
      "A beautiful, spotted cat breed known for their energetic and playful personalities.",
    image: "https://picsum.photos/200/300/?random=7",
    category: "Cats",
  },
  {
    id: 8,
    name: "French Bulldog",
    price: 1500,
    description:
      "A small, muscular dog breed known for their affectionate and playful personalities.",
    image: "https://picsum.photos/200/300/?random=8",
    category: "Dogs",
  },
  {
    id: 9,
    name: "Hamster",
    price: 20,
    description:
      "A small, furry rodent species that are easy to care for and make great pets for kids.",
    image: "https://picsum.photos/200/300/?random=9",
    category: "Small Animals",
  },
  {
    id: 10,
    name: "Siamese Fighting Fish",
    price: 15,
    description:
      "A beautiful freshwater fish species that are easy to care for and come in a variety of colors.",
    image: "https://picsum.photos/200/300/?random=10",
    category: "Fish",
  },
];

animals.forEach((animal) => {
  const card = document.createElement("div");
  card.classList.add("cards");

  const title = document.createElement("h1");
  title.textContent = animal.name;

  const price = document.createElement("p");
  price.textContent = animal.price;

  const description = document.createElement("p");
  description.textContent = animal.description;

  const addToCardBtn = document.createElement("button");
  addToCardBtn.textContent = "Add to Cart";

  const image = document.createElement("img");
  image.src = animal.image;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(description);
  card.appendChild(addToCardBtn);

  document.body.appendChild(card);
});
