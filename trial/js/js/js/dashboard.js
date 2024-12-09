// Check if user is logged in
function checkAuth() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'index.html';
        return;
    }
    
    // Update UI with user info
    const user = JSON.parse(currentUser);
    document.querySelector('.user-name').textContent = user.fullName;
    document.querySelector('.user-avatar').textContent = user.fullName
        .split(' ')
        .map(n => n[0])
        .join('');
}

// Run auth check when page loads
checkAuth();

// Handle logout
document.getElementById('logoutBtn').addEventListener('click', function() {
    sessionStorage.removeItem('currentUser');
    window.location.href = 'index.html';
});

// Add active class to current nav item
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.nav-links .active').classList.remove('active');
        this.parentElement.classList.add('active');
    });
});