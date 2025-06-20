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
            // --- Performance Sorting Logic ---
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Set to midnight to compare days accurately

            const upcomingPerformances = [];
            const pastPerformances = [];

            const monthMap = { JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11 };

            data.performances.forEach(perf => {
                const perfDate = new Date(perf.year, monthMap[perf.month.toUpperCase()], perf.day);
                if (perfDate >= today) {
                    upcomingPerformances.push(perf);
                } else {
                    pastPerformances.push(perf);
                }
            });

            // Sort past performances to show the most recent first
            pastPerformances.sort((a, b) => {
                const dateA = new Date(a.year, monthMap[a.month.toUpperCase()], a.day);
                const dateB = new Date(b.year, monthMap[b.month.toUpperCase()], b.day);
                return dateB - dateA; // Descending order
            });

            renderUpcomingPerformances(upcomingPerformances, data.gallery);
            renderPastPerformances(pastPerformances, data.gallery);
            renderContactInfo(data.officers);
        })
        .catch(error => {
            console.error('Error fetching or processing data:', error);
            const performancesGrid = document.getElementById('upcoming-performances-grid');
            if(performancesGrid) performancesGrid.innerHTML = '<p>Could not load performance data. Please try again later.</p>';
            const galleryGrid = document.getElementById('gallery-grid');
            if(galleryGrid) galleryGrid.innerHTML = '<p>Could not load gallery data. Please try again later.</p>';
        });

    function createPerformanceCard(perf, galleryItems) {
        const card = document.createElement('div');
        card.className = 'performance-card';
        card.innerHTML = `
            <div class="performance-date">
                <span class="day">${perf.day}</span>
                <span class="month">${perf.month}</span>
                <span class="year">${perf.year}</span>
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
        card.addEventListener('click', () => openModal(perf.title, galleryItems));
        return card;
    }

    function renderUpcomingPerformances(performances, galleryItems) {
        const grid = document.getElementById('upcoming-performances-grid');
        if (!grid) return;

        if (performances.length === 0) {
            grid.innerHTML = '<p class="no-events-message">No upcoming performances scheduled. Check back soon!</p>';
            return;
        }

        grid.innerHTML = '';
        performances.forEach(perf => {
            const card = createPerformanceCard(perf, galleryItems);
            grid.appendChild(card);
        });
    }

    function renderPastPerformances(performances, galleryItems) {
        const grid = document.getElementById('past-performances-grid');
        if (!grid) return;
        grid.innerHTML = '';
        performances.forEach(perf => {
            const card = createPerformanceCard(perf, galleryItems);
            grid.appendChild(card);
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

    // --- Modal Logic ---
    const modal = document.getElementById('performance-modal');
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    const modalGalleryGrid = document.getElementById('modal-gallery-grid');
    const modalTitle = document.querySelector('.modal-title');

    function openModal(performanceTitle, galleryItems) {
        const performanceImages = galleryItems.filter(item => item.performance === performanceTitle && item.type === 'image');
        
        modalTitle.textContent = `${performanceTitle} - Gallery`;
        modalGalleryGrid.innerHTML = ''; // Clear previous images

        if (performanceImages.length > 0) {
            performanceImages.forEach(item => {
                const img = document.createElement('img');
                img.src = item.url;
                img.alt = item.title;
                modalGalleryGrid.appendChild(img);
            });
        } else {
            modalGalleryGrid.innerHTML = '<p>No images available for this performance yet.</p>';
        }

        modal.classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    // Event listener for closing the modal
    if (modal) {
        modalCloseBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }
}); 