fetch('https://raw.githubusercontent.com/Komalgill12/js4assign/main/data.json')
  .then(response => response.json())
  .then(data => {
    const gallery = document.getElementById('image-gallery');
    
    data.forEach(item => {
      const imageDiv = document.createElement('div');
      imageDiv.classList.add('gallery-item');
      
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      img.classList.add('gallery-image');
      
      const name = document.createElement('h3');
      name.textContent = item.name;
      
      const location = document.createElement('p');
      location.textContent = item.location;
      
      const description = document.createElement('p');
      description.textContent = item.description;

      imageDiv.appendChild(img);
      imageDiv.appendChild(name);
      imageDiv.appendChild(location);
      imageDiv.appendChild(description);
      
      gallery.appendChild(imageDiv);
    });
  })
  .catch(error => console.log('Error fetching JSON data:', error));
