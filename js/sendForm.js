let form = document.querySelector('.form-test-drive');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let user = {};
  for (let { name, value } of form.elements) {
    if (name) {
      user[name] = value;
    }
  }
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then((data) => {
      console.log(data);
      alert('Submit');
      form.reset();
    })
    .catch((error) => {
      console.dor(error);
    });
});
