fetch('../json/average.json')
  .then(response => response.json())
  .then(data     => console.log(data))
  .catch(error   => console.error(error));

  console.log(1)