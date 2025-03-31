export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (var [item, quantity] of groceries) {
    if (quantity === 1) {
      groceries.set(item, 100);
    }
  }
}
