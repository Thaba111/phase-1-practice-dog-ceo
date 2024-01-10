// Ensure the script runs only after the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {


    // Part 1: Console Styling
    console.log('%c HI', 'color: firebrick');


    // Part 2: Fetching and Displaying Dog Images
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            // Get the container to display dog images
            const dogImageContainer = document.getElementById('dog-image-container');


            // Iterate through each fetched dog image and create list items in HTML
            data.message.forEach(dogImage => {
                const dogImageList = document.createElement('li');
                dogImageList.innerHTML = `
                    <img src="${dogImage}" alt="${dogImage}">
                `;
                dogImageContainer.appendChild(dogImageList);
            });
        })
        .catch(error => console.error('Error fetching dog images:', error));


    // Part 3: Fetching and Displaying Dog Breeds with Filtering
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
        .then(response => response.json())
        .then(dogs => {
            // Get the container to display dog breeds and the dropdown for filtering
            const dogBreedContainer = document.getElementById('dog-breeds');
            const dropdown = document.getElementById('breed-dropdown');


            // Iterate through each dog breed and create list items in HTML
            for (const dogBreed in dogs.message) {
                const dogBreedList = document.createElement('li');
                dogBreedList.innerHTML = `<p>${dogBreed}</p>`;
                dogBreedList.setAttribute('data-letter', dogBreed.charAt(0).toLowerCase());


                // Add click event listener to toggle font color on breed selection
                dogBreedList.addEventListener('click', () => {
                    const currentColor = dogBreedList.style.color;
                    dogBreedList.style.color = currentColor === 'blue' ? '' : 'blue';
                });


                dogBreedContainer.appendChild(dogBreedList);
            }


            // Add event listener to the dropdown for breed filtering
            dropdown.addEventListener('change', () => {
                const selectedLetter = dropdown.value.toLowerCase();


                // Show/hide breeds based on the selected letter
                const breedListItems = dogBreedContainer.getElementsByTagName('li');
                for (const breedListItem of breedListItems) {
                    const firstLetter = breedListItem.getAttribute('data-letter');
                    breedListItem.style.display = firstLetter === selectedLetter ? 'block' : 'none';
                }
            });
        })
        .catch(error => console.error('Error fetching dog breeds:', error));
});
