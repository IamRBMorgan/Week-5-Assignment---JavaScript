// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // 1. Dark/Light Mode Toggle
    const modeToggle = document.createElement('button');
    modeToggle.id = 'mode-toggle';
    modeToggle.textContent = '🌙 Dark Mode';
    document.querySelector('#main-header .container').appendChild(modeToggle);

    modeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        modeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
        
        // Store preference in localStorage
        localStorage.setItem('darkMode', isDark);
    });

    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        modeToggle.textContent = '☀️ Light Mode';
    }

    // 2. Interactive Box Model Demo
    const boxDemo = document.querySelector('.box-model-demo');
    const boxControls = document.createElement('div');
    boxControls.className = 'box-controls';
    boxControls.innerHTML = `
        <h4>Box Model Controls</h4>
        <label>Margin: <input type="range" id="margin-control" min="0" max="50" value="20"></label>
        <label>Padding: <input type="range" id="padding-control" min="0" max="50" value="20"></label>
        <label>Border: <input type="range" id="border-control" min="0" max="20" value="5"></label>
    `;
    boxDemo.parentNode.insertBefore(boxControls, boxDemo.nextSibling);

    document.getElementById('margin-control').addEventListener('input', function(e) {
        boxDemo.style.margin = `${e.target.value}px`;
    });

    document.getElementById('padding-control').addEventListener('input', function(e) {
        boxDemo.style.padding = `${e.target.value}px`;
    });

    document.getElementById('border-control').addEventListener('input', function(e) {
        boxDemo.style.borderWidth = `${e.target.value}px`;
    });

    // 3. Form Validation for Newsletter Signup
    const newsletterForm = document.createElement('form');
    newsletterForm.id = 'newsletter-form';
    newsletterForm.innerHTML = `
        <h4>Subscribe to Newsletter</h4>
        <div class="form-group">
            <input type="email" id="newsletter-email" placeholder="Enter your email" required>
            <span class="error-message"></span>
        </div>
        <button type="submit" class="btn">Subscribe</button>
    `;
    document.querySelector('#sidebar').appendChild(newsletterForm);

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = document.getElementById('newsletter-email');
        const errorMessage = document.querySelector('.error-message');
        
        if (!validateEmail(emailInput.value)) {
            errorMessage.textContent = 'Please enter a valid email address';
            emailInput.classList.add('error');
        } else {
            errorMessage.textContent = '';
            emailInput.classList.remove('error');
            alert('Thank you for subscribing!');
            emailInput.value = '';
        }
    });

    // 4. Post Interaction - Like Button
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        const likeBtn = document.createElement('button');
        likeBtn.className = 'like-btn';
        likeBtn.innerHTML = '❤️ Like';
        likeBtn.dataset.liked = 'false';
        
        likeBtn.addEventListener('click', function() {
            const isLiked = this.dataset.liked === 'true';
            this.dataset.liked = !isLiked;
            this.innerHTML = isLiked ? '❤️ Like' : '❤️ Liked!';
            this.style.backgroundColor = isLiked ? '#3498db' : '#e74c3c';
        });
        
        post.appendChild(likeBtn);
    });

    // 5. Mobile Menu Toggle
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰ Menu';
    document.querySelector('#main-nav .container').prepend(mobileMenuBtn);

    mobileMenuBtn.addEventListener('click', function() {
        const navList = document.querySelector('#main-nav ul');
        navList.classList.toggle('show');
    });

    // Helper function for email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});