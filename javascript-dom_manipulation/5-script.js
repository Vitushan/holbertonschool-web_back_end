const updateButton = document.getElementById('update_header');

updateButton.addEventListener('click', function() {
  const header = document.querySelector('header');
  
  header.textContent = 'New Header!!!';
});
