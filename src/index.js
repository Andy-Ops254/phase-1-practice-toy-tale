let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () =>{  
  fetch('  http://localhost:3000/toys')
  .then(function(response){
    return response.json()
  })
  .then(newToys => {
    const toyCollection = document.getElementById('toy-collection');
    newToys.forEach(toy => {
      const card = document.createElement('div')
      card.className = 'card'
      card.innerHTML = `
      <h2>${toy.name}</h2>
      <img src="${toy.image}" class="toy-avatar" />
      <p>${toy.likes} likes</p>
      <button class="like btn" id="${toy.id}">like ❤️</button>
      `;
      toyCollection.appendChild(card);

  const likes = document.getElementsByClassName('like btn');
    likes.addEventListener('click', () => {
      const likesP = card.querySelector('p');
      let currentLikes = parseInt(likesP.textContent);//converts string to numbers
      let updatedLikes = currentLikes + 1;
      likesP.textContent = `${updatedLikes} likes`;
      
      fetch(`http://localhost:3000/toys/${like.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ likes: updatedLikes })
      });
    });

})
    })
  })
  

document.getElementsByClassName('add-toy-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name=event.target.name.value
  const image=event.target.image.value
  const likes=0;

  fetch('http://localhost:3000/toys') ,{
    method:'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept":"application/json,"
    },
    body: JSON.stringify({name,image, like})
  }
  .then(response => response.json())
  .then(newToy => {
    // Create and append the new toy card to the DOM
    const toyCollection = document.getElementById('toy-collection');
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h2>${newToy.name}</h2>
      <img src="${newToy.image}" class="toy-avatar" />
      <p>${newToy.likes} likes</p>
      <button class="like btn" id="${newToy.id}">like ❤️</button>
    `;
    toyCollection.appendChild(card);
  });

})




