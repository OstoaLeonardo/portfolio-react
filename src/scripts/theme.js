// Get the theme of the device
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set the theme with the value of the localStorage or the device
const initialTheme = localStorage.getItem('color-theme') || (prefersDarkMode ? 'dark' : 'light');

// Function to toggle the theme
const toggleTheme = () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('color-theme', newTheme);
};

// Set the theme of the document
document.documentElement.classList.toggle('dark', initialTheme === 'dark');

// Set the initial position of the toggle button depending on the theme
var themeToggle = document.getElementById('theme-toggle');
themeToggle.checked = initialTheme === 'dark';

// Add the event listener to the toggle button
themeToggle.addEventListener('click', toggleTheme);
