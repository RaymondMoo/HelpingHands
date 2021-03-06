const button = document.getElementById('submit');
button.addEventListener('click', async event =>{
  console.log("button pushed");
  const name = document.getElementById('name').value;
  const number = document.getElementById('number').value;
  const address = document.getElementById('address').value;
const service = document.getElementById('service').value;
const date = document.getElementById('date').value;
const comment = document.getElementById('comment').value;
const comment = document.getElementById('location').value;

  const data = {name,number,address,service,date,comment};
  
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  const response = await fetch('/seeker', options);
  const json = await response.json();
  console.log(json);
})