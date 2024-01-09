//Challenge 1
//fetches the images using the url above
//adds image elements to the DOM for each 🤔 image in the array
console.log('%c HI', 'color: firebrick');

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';

fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        const dogImageContainer = document.getElementById('dog-image-container');

        data.message.forEach(dogImage => {
            const dogImageList = document.createElement('li');
            dogImageList.innerHTML = `
                <img src="${dogImage}" alt="${dogImage}">
            `;
            dogImageContainer.appendChild(dogImageList);
        });
    })
    .catch(error => console.error('Error fetching dog images:', error));

    // Challenge 2
    //fetches all the dog breeds
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
        .then(response => response.json())
        .then(dogs => {
            const dogBreedContainer = document.getElementById('dog-breeds');
            const dropdown = document.getElementById('breed-dropdown'); // Corrected id

       for (const dogBreed in dogs.message) {
            const dogBreedList = document.createElement('li');
            dogBreedList.innerHTML = `<p>${dogBreed}</p>`;
            dogBreedList.setAttribute('data-letter', dogBreed.charAt(0).toLowerCase()); // Add data-letter attribute
            dogBreedContainer.appendChild(dogBreedList);
        }
    
    })
    .catch(error => console.error('Error fetching dog breeds:', error));

    