const people = [
  { id: 1, name: 'Jeremy', age: 25, city: 'New York' },
  { id: 2, name: 'Evan', age: 28, city: 'Miami' },
  { id: 3, name: 'Rachel', age: 22, city: 'Boston' }
];

const getPeople = () => {
  return people;
}

const getPerson = (id) => {
  return people.find(person => person.id === id * 1)
}

module.exports = {
  getPeople,
  getPerson
}
