// User credentials
const users = [
    {
        username: 'admin',
        password: 'admin123',
        role: 'administrator',
        fullName: 'System Administrator'
    },
    {
        username: 'operator',
        password: 'operator123',
        role: 'operator',
        fullName: 'Energy Operator'
    }
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('loginError');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        // Validate inputs
        if (!username || !password) {
            showError('Please enter both username and password');
            return;
        }

        // Find user
        const user = users.find(u => 
            u.username.toLowerCase() === username.toLowerCase() && 
            u.password === password
        );

        if (user) {
            // Clear any previous errors
            hideError();
            
            // Store user info in sessionStorage
            sessionStorage.setItem('currentUser', JSON.stringify({
                username: user.username,
                role: user.role,
                fullName: user.fullName
            }));
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            showError('Invalid username or password');
            // Clear password field for security
            document.getElementById('password').value = '';
        }
    });

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    function hideError() {
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';
    }
});