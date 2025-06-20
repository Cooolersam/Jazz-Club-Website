# Dougherty Valley High School Jazz Club Website

A modern, responsive website for the Dougherty Valley High School jazz club, featuring student performances, photo galleries, and membership information.

## 🎵 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, student-friendly design with smooth animations
- **Interactive Navigation**: Smooth scrolling and mobile-friendly hamburger menu
- **Performance Showcase**: Display upcoming student performances with countdown timers
- **Photo Gallery**: Tabbed gallery system for different categories of photos
- **Membership System**: Complete sign-up form for new club members
- **Contact Information**: Easy-to-find contact details for club leaders and faculty advisor
- **Social Media Integration**: Links to social media platforms
- **Performance Optimized**: Fast loading with optimized assets

## 🚀 Live Demo

Visit the live website: [Your GitHub Pages URL will appear here after deployment]

## 📁 Project Structure

```
jazz-club-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Playfair Display & Inter)

## 🎨 Design Features

- **Color Scheme**: Dougherty Valley Blue (#1C3B8A) with Gold accents (#FFC72C)
- **Typography**: Elegant serif fonts for headings, clean sans-serif for body text
- **Animations**: Smooth scroll animations and hover effects
- **Parallax**: Subtle parallax effect on the hero section
- **Glass Morphism**: Modern backdrop blur effects

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 767px and below

## 🎯 Website Sections

### Home
- Hero section with club introduction
- Call-to-action buttons for performances and membership

### About Us
- Club mission and values
- Key features: weekly rehearsals, student-led, performance opportunities
- Placeholder for rehearsal photos

### Performances
- Upcoming student performances
- Performance details including location, time, and admission info
- Tags for event types (free, community event, etc.)

### Gallery
- Tabbed photo gallery with categories:
  - Recent Events
  - Performances
  - Rehearsals
  - Club Members
- Placeholder images ready for real photos

### Join Us
- Benefits of joining the club
- Meeting times and location
- Comprehensive sign-up form with:
  - Student information
  - Grade level
  - Instrument selection
  - Experience level

### Contact
- Faculty advisor information
- Club leadership details
- Meeting location and times
- Contact form for general inquiries

## 🚀 Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `dougherty-valley-jazz-club` or your preferred name

2. **Upload Files**:
   - Clone the repository to your local machine
   - Copy all the website files (`index.html`, `styles.css`, `script.js`) to the repository folder
   - Commit and push the changes

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access Your Website**:
   - Your website will be available at: `https://yourusername.github.io/repository-name`

### Option 2: Manual Setup

If you prefer to set up the repository manually:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Dougherty Valley High School jazz club website"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/dougherty-valley-jazz-club.git

# Push to GitHub
git push -u origin main
```

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1C3B8A;
    --accent-color: #FFC72C;
    --text-color: #333;
}
```

### Updating Content
- **Club Information**: Edit the content in `index.html`
- **Performances**: Update the performances section with your actual events
- **Meeting Times**: Modify the meeting schedule and location (currently P124, Wednesdays after school)
- **Contact Details**: Update faculty advisor, club leadership, and email (currently dvjazzclub@gmail.com)

### Adding Real Photos
1. Replace the placeholder images in the gallery sections
2. Update the hero background image URL in `styles.css`
3. Add your own photos to the project folder
4. Update the image placeholders with actual `<img>` tags

### Customizing Forms
The forms currently simulate submission. To make them functional:

1. **Backend Integration**: Connect to a backend service (Node.js, PHP, etc.)
2. **Email Service**: Use services like EmailJS, Formspree, or Netlify Forms
3. **Database**: Store member applications and contact messages

### Example with EmailJS:
```javascript
// Add EmailJS integration for join form
emailjs.send("service_id", "template_id", {
    name: data.name,
    email: data.email,
    grade: data.grade,
    instrument: data.instrument,
    experience: data.experience,
    message: data.message
});
```

## 🎵 For Jazz Club Leaders

### Adding Performances
Update the performances section in `index.html`:
```html
<div class="performance-card">
    <div class="performance-date">
        <span class="day">15</span>
        <span class="month">MAR</span>
    </div>
    <div class="performance-details">
        <h3>Spring Concert</h3>
        <p class="performance-time"><i class="far fa-clock"></i> 7:00 PM - 9:00 PM</p>
        <p class="performance-location"><i class="fas fa-map-marker-alt"></i> School Auditorium</p>
        <p class="performance-description">Description of the performance...</p>
        <div class="performance-tags">
            <span class="tag">Free Event</span>
            <span class="tag">All Ages</span>
        </div>
    </div>
</div>
```

### Managing Gallery
Organize photos into the four categories:
- Recent Events
- Performances
- Rehearsals
- Club Members

Replace placeholder divs with actual images:
```html
<div class="gallery-item">
    <img src="path/to/your/image.jpg" alt="Description">
</div>
```

## 🌟 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with deployment, please open an issue on GitHub.

## 🎯 Future Enhancements

- [ ] Add a blog section for jazz news and student spotlights
- [ ] Integrate with school calendar system
- [ ] Add an online practice schedule
- [ ] Implement student member profiles
- [ ] Add a photo upload system
- [ ] Integrate with social media feeds
- [ ] Add multilingual support
- [ ] Implement dark mode toggle
- [ ] Add audio/video performance recordings
- [ ] Create a practice resources section

## 🎵 Perfect For

- High school jazz clubs
- Middle school music programs
- College jazz ensembles
- Community youth jazz programs
- Music education organizations

---

**Built with ❤️ for the Dougherty Valley High School Jazz Club** 