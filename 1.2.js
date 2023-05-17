// getting the data from api
const fetchPromise = async () => {
  await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

