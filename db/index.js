const people = [
  { id: 1, name: 'Gary', age: 60, city: 'Utica'},
  { id: 2, name: 'Lisa', age: 59, city: 'Hollywood'},
  { id: 3, name: 'Evan', age: 28, city: 'Miami' },
  { id: 4, name: 'Jeremy', age: 25, city: 'New York' },
  { id: 5, name: 'Rachel', age: 22, city: 'Boston' }
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
