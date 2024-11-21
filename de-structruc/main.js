let study = {
  from: "Youtube",
  why: "to learn react",
  when: "3:00 pm to 5:00 pm everyday",
};

let { when } = study;

console.log(when);

{
  // Basic Object Destructuring

  const user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  };

  const { name, age, email } = user;
  console.log(name, age, email); // Output: John Doe 30 john.doe@example.com
}

{
  //   Nested Object Destructuring

  const user = {
    name: "John Doe",
    location: {
      city: "New York",
      state: "NY",
    },
  };

  const {
    name,
    location: { city, state },
  } = user;
  console.log(name, city, state); // Output: John Doe New York NY
}

{
  // Array Destructuring

  const colors = ["red", "green", "blue"];

  const [firstColor, secondColor, thirdColor] = colors;
  console.log(firstColor, secondColor, thirdColor); // Output: red green blue

  // Nested Array Destructuring

  const nestedArray = [1, [2, 3], 4];

  const [one, [two, three], four] = nestedArray;
  console.log(one, two, three, four); // Output: 1 2 3 4
}
{
  // Destructuring with Default Values

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  const { name, age = 25 } = user;
  console.log(name, age); // Output: John Doe 25
}
{
  // Destructuring Function Parameters

  const displayUser = ({ name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`);
  };

  const user = {
    name: "John Doe",
    age: 30,
  };

  displayUser(user); // Output: Name: John Doe, Age: 30
}

{
  // Combining Destructuring with Spread Operator

  const user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  };

  const { name, ...rest } = user;
  console.log(name); // Output: John Doe
  console.log(rest); // Output: { age: 30, email: 'john.doe@example.com' }
}

{
  // Destructuring an API Response

  const data = {
    results: [
      {
        gender: "female",
        name: { title: "Ms", first: "Signe", last: "Rasmussen" },
        location: {
          street: { number: 2408, name: "Munkevænget" },
          city: "København Sv",
          state: "Hovedstaden",
          country: "Denmark",
          postcode: 60203,
          coordinates: { latitude: "-39.2255", longitude: "176.5124" },
          timezone: {
            offset: "-5:00",
            description: "Eastern Time (US & Canada), Bogota, Lima",
          },
        },
        email: "signe.rasmussen@example.com",
        login: {
          uuid: "ddc33874-89ef-4884-b022-9037f9051dbc",
          username: "bluemeercat107",
          password: "berlin",
          salt: "K40HFr7b",
          md5: "7e14d134f530126f8102e0c4a19a82e9",
          sha1: "5f64e6b0dd35b827fdbfd56d109b3ed2f239de73",
          sha256:
            "b1b48676603f8ca1bedcef73d0618695589c4d4bb64aba094d9da76fe3643a87",
        },
        dob: { date: "1956-07-27T07:03:45.729Z", age: 68 },
        registered: { date: "2012-03-07T22:51:58.188Z", age: 12 },
        phone: "50308677",
        cell: "65465205",
        id: { name: "CPR", value: "270756-8239" },
        picture: {
          large: "https://randomuser.me/api/portraits/women/92.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/92.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/92.jpg",
        },
        nat: "DK",
      },
    ],
    info: { seed: "1dcb50502b09bf23", results: 1, page: 1, version: "1.4" },
  };

  // Destructuring the API response
  const { results } = data;
  const [
    {
      name: { first, last },
      location: { city, country },
      email,
      phone,
      cell,
    },
  ] = results;

  console.log(first, last); // Output: Signe Rasmussen
  console.log(city, country); // Output: København Sv Denmark
  console.log(email); // Output: signe.rasmussen@example.com
  console.log(phone, cell); // Output: 50308677 65465205
}
