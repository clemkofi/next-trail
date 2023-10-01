import React from "react";

const testUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

type User = typeof testUser;

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  //   caching only works with the fetch API and if we want to disable it with set the cache to no-store
  // useful for data that changes constantly
  //   const res = await fetch(
  //     "https://jsonplaceholder.typicode.com/users",
  //     { cache: 'no-store' }
  //     );

  // if we want to revalidate the cached values every 10 seconds we can use the revlaidate option
  //   const res = await fetch(
  //     "https://jsonplaceholder.typicode.com/users",
  //     { next: { revalidate: 10 } }
  //     );

  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
