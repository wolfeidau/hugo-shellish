// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  if (!toggle) return;
  
  function updateIcon() {
    const isDark = html.getAttribute('data-theme') === 'dark';
    const moonIcon = toggle.querySelector('.moon-icon');
    const sunIcon = toggle.querySelector('.sun-icon');
    
    if (isDark) {
      moonIcon.classList.add('hidden');
      sunIcon.classList.remove('hidden');
    } else {
      moonIcon.classList.remove('hidden');
      sunIcon.classList.add('hidden');
    }
  }
  
  // Set initial icon
  updateIcon();
  
  // Toggle theme on button click
  toggle.addEventListener('click', function() {
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateIcon();
  });
});
