fetch('/api/message')
  .then(response => response.json())
  .then(data => {
    document.getElementById('data').innerText = data.message;
  });
