// Gallery items data
const galleryItems = [
    {
        id: 1,
        category: 'screenshots',
        image: 'assets/images/screenshot-1.jpg',
        title: 'City Exploration',
        description: 'Player exploring the neon-lit streets of the metropolis'
    },
    {
        id: 2,
        category: 'concept-art',
        image: 'assets/images/concept-1.jpg',
        title: 'Character Design',
        description: 'Initial concept art for the main character'
    },
    {
        id: 3,
        category: 'sprites',
        image: 'assets/images/sprite-1.png',
        title: 'Weapon Sprite',
        description: '2D sprite for the plasma rifle / weapon'
    }
    // Add more gallery items as needed
];

// Gallery filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryGrid = document.querySelector('.gallery-grid');

// Initialize gallery
function initGallery() {
    displayGalleryItems('all');
    setupFilterListeners();
}

// Display gallery items based on category
function displayGalleryItems(category) {
    const filteredItems = category === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === category);

    galleryGrid.innerHTML = filteredItems.map(item => `
        <div class="gallery-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-item-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');
}

// Setup filter button listeners
function setupFilterListeners() {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Filter gallery items
            displayGalleryItems(btn.dataset.filter);
        });
    });
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery);