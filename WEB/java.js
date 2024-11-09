// date nad time and greeting 
function formatDateTime(date) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    };
    return date.toLocaleString('en-US', options);
}

function getGreeting() {
    const now = new Date(); 
    const hours = now.getHours();
    let greeting = '';

    if (hours >= 5 && hours < 12) {
        greeting = 'Good Morning!';
    } else if (hours >= 12 && hours < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    return greeting;
}

function updateDateTime() {
    const currentDateTimeElement = document.getElementById('currentDateTime');
    const greetingElement = document.getElementById('greeting');
    const now = new Date();

    currentDateTimeElement.innerHTML = `Current Date and Time: ${formatDateTime(now)}`;
    greetingElement.innerHTML = ` ${getGreeting()}`;
}

updateDateTime();

setInterval(updateDateTime, 60000);







// form java 

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('successMessage').textContent = '';

    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    let isValid = true;

   
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Email format is invalid.';
        isValid = false;
    }
    


   
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters.';
        isValid = false;
    }

    
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Form submitted successfully!';
    }
});


// --------------------- popup 

document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.getElementById('contactBtn');
    const contactModal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close-btn');

  
    contactBtn.addEventListener('click', function () {
        contactModal.style.display = 'block';
    });


    closeBtn.addEventListener('click', function () {
        contactModal.style.display = 'none';
    });

    
    window.addEventListener('click', function (event) {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });
});


// -------------srars 
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');

    function updateRatingMessage(starElement, messageElement) {
        const ratingValue = starElement.dataset.value;
        messageElement.textContent = `You rated this ${ratingValue} stars!`;
    }

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const section = this.closest('section');
            let messageElement = null;

            if (section.querySelector('#rating-message-divergent')) {
                messageElement = document.getElementById('rating-message-divergent');
            } else if (section.querySelector('#rating-message-maze')) {
                messageElement = document.getElementById('rating-message-maze');
            } else if (section.querySelector('#rating-message-harry')) {
                messageElement = document.getElementById('rating-message-harry');
            }

         
            const allStars = this.parentNode.querySelectorAll('.star');

            
            const selectedRating = parseInt(this.dataset.value);

          
            allStars.forEach((s, index) => {
                if (index < selectedRating) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });

            if (messageElement) {
                updateRatingMessage(this, messageElement);
            }
        });
    });
});




//----------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.form-step');
    let currentStep = 0;

    const booksByGenre = {
        fantasy: ['Harry Potter', 'Lord of the Rings'],
        'science-fiction': ['Dune', 'Ender\'s Game'],
        romance: ['Pride and Prejudice', 'The Notebook'],
        mystery: ['Sherlock Holmes', 'Gone Girl']
    };

    function showStep(step) {
        steps.forEach((formStep, index) => {
            formStep.classList.toggle('active', index === step);
        });
    }

    function handleNext() {
        if (currentStep === 0) {
            
            const selectedGenre = document.getElementById('genre').value;
            const bookSelect = document.getElementById('book');
            bookSelect.innerHTML = ''; 
            booksByGenre[selectedGenre].forEach(book => {
                const option = document.createElement('option');
                option.value = book;
                option.textContent = book;
                bookSelect.appendChild(option);
            });
        }

        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    }

    function handleBack() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    }

    const nextButtons = document.querySelectorAll('#nextBtn');
    const backButtons = document.querySelectorAll('#backBtn');

    nextButtons.forEach(button => {
        button.addEventListener('click', handleNext);
    });

    backButtons.forEach(button => {
        button.addEventListener('click', handleBack);
    });

    showStep(currentStep); 
});




