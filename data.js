const users = [
  { id: 1, firstName: "Erik", lastName: "Anderson", email: "test1@email.com", password: "test1" },
  { id: 2, firstName: "Angel", lastName: "Valant", email:"test2@email.com", passed: "test2" }
]

const data = [
  {
    id: 1,
    name: "Snacks from Exxon",
    description: "This is a short description.",

    location : {
      name: 'Exxon',
      latitutude: 38.9072,
      longitude: 77.0369
    },
    amount: 10,
    user_id: 1
  }
]


module.exports = data;
