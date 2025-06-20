document.addEventListener('DOMContentLoaded', () => {

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu on link click
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (menuToggle) menuToggle.classList.remove('active');
                }
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }

            const subject = `Message from ${name}`;
            const mailtoLink = `mailto:dvjazzclub@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;

            window.location.href = mailtoLink;
            contactForm.reset();
        });
    }

    // Fetch and render dynamic content
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            renderPerformances(data.performances);
            renderGallery(data.gallery, 'recent');
            renderContactInfo(data.officers);
            setupGalleryTabs(data.gallery);
        })
        .catch(error => {
            console.error('Error fetching or processing data:', error);
            const performancesGrid = document.getElementById('performances-grid');
            if(performancesGrid) performancesGrid.innerHTML = '<p>Could not load performance data. Please try again later.</p>';
            const galleryGrid = document.getElementById('gallery-grid');
            if(galleryGrid) galleryGrid.innerHTML = '<p>Could not load gallery data. Please try again later.</p>';
        });

    function renderPerformances(performances) {
        const grid = document.getElementById('performances-grid');
        if (!grid) return;
        grid.innerHTML = '';
        performances.forEach(perf => {
            const card = document.createElement('div');
            card.className = 'performance-card';
            card.innerHTML = `
                <div class="performance-date">
                    <span class="day">${perf.day}</span>
                    <span class="month">${perf.month}</span>
                </div>
                <div class="performance-details">
                    <h3>${perf.title}</h3>
                    <p class="performance-time"><i class="far fa-clock"></i> ${perf.time}</p>
                    <p class="performance-location"><i class="fas fa-map-marker-alt"></i> ${perf.location}</p>
                    <p class="performance-description">${perf.description}</p>
                    <div class="performance-tags">
                        ${perf.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    function renderGallery(galleryItems, category) {
        const grid = document.getElementById('gallery-grid');
        if (!grid) return;
        grid.innerHTML = '';
        
        const filteredItems = galleryItems.filter(item => item.category === category);

        if (filteredItems.length === 0) {
            grid.innerHTML = '<p class="gallery-empty">No items to display in this category yet. Check back soon!</p>';
            return;
        }

        filteredItems.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';

            if (item.type === 'image') {
                galleryItem.innerHTML = `
                    <img src="${item.url}" alt="${item.title}" loading="lazy">
                    <div class="gallery-item-info">
                        <p>${item.title}</p>
                    </div>
                `;
            } else if (item.type === 'video') {
                galleryItem.innerHTML = `
                    <div class="video-container">
                        <iframe src="${item.embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
                    </div>
                    <div class="gallery-item-info">
                        <p>${item.title}</p>
                    </div>
                `;
            }
            grid.appendChild(galleryItem);
        });
    }
    
    function setupGalleryTabs(galleryItems) {
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.getAttribute('data-category');
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                renderGallery(galleryItems, category);
            });
        });
    }


    function renderContactInfo(officers) {
        const container = document.getElementById('contact-info');
        if (!container) return;
        
        const officerList = `
            <strong>Vice President:</strong> ${officers.vicePresident}<br>
            <strong>Conductor:</strong> ${officers.conductor}<br>
            <strong>Secretary:</strong> ${officers.secretary}<br>
            <strong>Treasurer:</strong> ${officers.treasurer}<br>
            <strong>PR Officer:</strong> ${officers.prOfficer}
        `;

        container.innerHTML = `
            <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <div>
                    <h4>Club Email</h4>
                    <p><a href="mailto:dvjazzclub@gmail.com">dvjazzclub@gmail.com</a></p>
                </div>
            </div>
            <div class="contact-item">
                <i class="fab fa-instagram"></i>
                <div>
                    <h4>Instagram</h4>
                    <p><a href="https://www.instagram.com/dvhsjazzclub" target="_blank">@dvhsjazzclub</a></p>
                </div>
            </div>
            <div class="contact-item">
                <i class="fab fa-discord"></i>
                <div>
                    <h4>Discord</h4>
                    <p><a href="https://discord.gg/ap65wjgm4k" target="_blank">Join our Server</a></p>
                </div>
            </div>
             <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <h4>Meetings</h4>
                    <p>Fridays at Lunch, P124 (Band Room)</p>
                </div>
            </div>
            <div class="contact-item">
                <i class="fas fa-user-tie"></i>
                <div>
                    <h4>Faculty Advisor</h4>
                    <p>${officers.facultyAdvisor}</p>
                </div>
            </div>
            <div class="contact-item">
                <i class="fas fa-user-graduate"></i>
                <div>
                    <h4>President</h4>
                    <p>${officers.president}</p>
                </div>
            </div>
            <div class="contact-item">
                <i class="fas fa-users"></i>
                <div>
                    <h4>Club Officers</h4>
                    <p class="officer-list">${officerList}</p>
                </div>
            </div>
        `;
    }
}); 