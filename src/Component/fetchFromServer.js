export async function fetch() {
  // // const respons = await fetch('{url}/dev/all-category');
  // // const resdata = await respons.json();
  // return resdata;
  return {
    data: [
      {
        city: 'homs',
        id: 1,
      },
      {
        city: 'hama',
        id: 2,
      },
      {
        city: 'damascus',
        id: 3,
      },
    ],
  };
}
