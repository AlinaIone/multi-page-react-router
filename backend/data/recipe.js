const fs = require('fs').promises;

const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');

async function readData() {
  const data = await fs.readFile('recipes.json', 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile('recipes.json', JSON.stringify(data));
}

async function getAll() {
  const storedData = await readData();
  if (!storedData.recipes) {
    throw new NotFoundError('Could not find any recipes.');
  }
  return storedData.recipes;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.recipes || storedData.recipes.length === 0) {
    throw new NotFoundError('Could not find any recipes.');
  }

  const recipe = storedData.recipes.find((ev) => ev.id === id);
  if (!recipe) {
    throw new NotFoundError('Could not find recipe for id ' + id);
  }

  return recipe;
}

async function add(data) {
  const storedData = await readData();
  storedData.recipes.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.recipes || storedData.recipes.length === 0) {
    throw new NotFoundError('Could not find any recipes.');
  }

  const index = storedData.recipes.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find recipe for id ' + id);
  }

  storedData.recipes[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.recipes.filter((ev) => ev.id !== id);
  await writeData({recipes: updatedData});
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
