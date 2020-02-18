const API_URL = 'http://localhost:3001';
function make_request(route, data={}, method='GET') {

  console.log("Data is ", data);
  console.log(API_URL + route);
  console.log(method);
  fetch(API_URL + route, {method: method})
  .then(res => res.json())  
}
export default make_request;