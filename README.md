# Dougherty Valley High School Jazz Club Website

This is the official website for the Dougherty Valley High School Jazz Club.

The site is built with plain HTML, CSS, and JavaScript. It's designed to be easily updatable by club officers, even those with no coding experience.

## How to Update the Website

All the website's content (performances, gallery, officers) is stored in a single file: `data.json`. To update the site, you just need to edit this file directly in GitHub.

**Location of the content file:** [data.json](data.json)

---

### Editing `data.json` on GitHub

1.  Navigate to the `data.json` file in the repository.
2.  Click the **pencil icon** (Edit this file) in the top-right corner.
3.  Make your changes according to the instructions below.
4.  Scroll to the bottom and click the **"Commit changes"** button. Your updates will be live on the website in a few moments.

---

### 1. How to Add a New Performance

Find the `"performances"` section in `data.json`. To add a new event, copy an existing performance block and paste it at the top of the list.

**Example Performance Block:**

```json
{
  "day": "18",
  "month": "OCT",
  "title": "Performance at Oakmont Senior Center",
  "time": "2:00 PM - 3:00 PM",
  "location": "Oakmont Senior Living",
  "description": "An afternoon of jazz classics for the residents.",
  "tags": ["Community Event", "Private Performance"]
}
```

-   **Important:** Don't forget the comma `,` between each performance block.

---

### 2. How to Add Photos & Videos to the Gallery

This is a two-step process: first, you upload the media file to the `images` folder, and second, you add its information to `data.json`.

#### Step 2a: Uploading Image Files

1.  Navigate to the `images` folder in the repository: [images/](images/)
2.  Click **"Add file"** > **"Upload files"**.
3.  Drag and drop your image file(s) here.
4.  Click **"Commit changes"**.
5.  Once uploaded, click on your new image file and copy its name (e.g., `my-cool-photo.jpg`).

#### Step 2b: Adding Items to the Gallery

Find the `"gallery"` section in `data.json`. Copy and paste a block and update the details.

**To add an IMAGE:**

```json
{
  "type": "image",
  "category": "performances",
  "url": "images/my-cool-photo.jpg",
  "title": "Spring Concert"
}
```

-   `category`: Must be one of `recent`, `performances`, `rehearsals`, or `members`. This decides which tab it appears under.
-   `url`: Must be `images/` followed by the exact filename you uploaded.
-   `title`: The text that appears when you hover over the image.

**To add a VIDEO (from YouTube or Google Drive):**

You need an **embed link** for videos.

-   **For YouTube:** Right-click the video > "Copy embed code" > grab the `src` URL from the code. It looks like `https://www.youtube.com/embed/VIDEO_ID`.
-   **For Google Drive:** Open the video > Click the three dots > "Share" > Change "General access" to "Anyone with the link" > Click "Copy link" > Open the link in a new tab > Click the three dots again > "Embed item" > grab the `src` URL. It looks like `https://drive.google.com/file/d/FILE_ID/preview`.

```json
{
  "type": "video",
  "category": "recent",
  "embedUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "title": "Our latest performance!"
}
```

-   `type`: Must be `"video"`.
-   `category`: Same as for images.
-   `embedUrl`: The special embed link you copied.

---

### 3. How to Update the Officer List

Find the `"officers"` section at the top of `data.json`. Simply edit the names for each role.

**Example:**

```json
"officers": {
  "president": "New President Name",
  "vicePresident": "New VP Name",
  "conductor": "New Conductor",
  // ...and so on
}
```

---

### Local Development

For those comfortable with code, you can run a local server to see your changes live before pushing to GitHub.

1.  Make sure you have Python 3 installed.
2.  Open your terminal or command prompt in the project folder.
3.  Run the following command:
    -   On Mac/Linux: `python3 -m http.server`
    -   On Windows: `python -m http.server`
4.  Open your web browser and go to `http://localhost:8000`.

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