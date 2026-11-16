const inventory = [
  { id: 1, name: "Laptop Stand", category: "hardware", price: 45, active: true },
  { id: 2, name: "USB Hub", category: "hardware", price: 30, active: true },
  { id: 3, name: "Old Adapter", category: "hardware", price: 10, active: false },
  { id: 4, name: "Code Editor Add-on", category: "software", price: 15, active: true },
  { id: 5, name: "Diagram Tool", category: "software", price: 20, active: true },
];

function getActiveItems(items) {
  return items.filter((item) => item.active === true);
}

function getItemNames(items) {
  return items.map((item) => item.name);
}

function getTotalValue(items) {
  return items.reduce((total, item) => total + item.price, 0);
}

function getCategoryItems(items, category) {
  return items.filter((item) => item.category === category);
}

const activeItems = getActiveItems(inventory);

console.log("Active item count:", activeItems.length);
console.log("All item names count:", getItemNames(inventory).length);
console.log("Active total value:", getTotalValue(activeItems));
console.log("Hardware item count:", getCategoryItems(inventory, "hardware").length);
console.log("Software item count:", getCategoryItems(inventory, "software").length);
console.log("Missing category items:", getCategoryItems(inventory, "books"));