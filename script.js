// Coded by d3f4ult
// Coded by d3f4ult
// Coded by d3f4ult

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const searchMenu = document.getElementById('search-menu');
    const searchEngineElement = document.getElementById('search-engine');
    const searchInput = document.getElementById('search');
    const welcomeText = document.getElementById('welcome-text');

    let searchEngine = 'duckduckgo';

    setTimeout(() => {
        welcomeText.style.opacity = '1';
    }, 100);

    menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        searchMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!searchMenu.contains(e.target) && e.target !== menuButton) {
            searchMenu.classList.remove('active');
        }
    });

    document.querySelectorAll('.menu-item').forEach((item) => {
        item.addEventListener('click', () => {
            searchEngine = item.getAttribute('data-engine');
            searchEngineElement.textContent = item.textContent;
            searchMenu.style.display = 'none';
        });
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.replaceAll(' ', '+');
            const engines = {
                google: `https://www.google.com/search?q=${query}`,
                yandex: `https://yandex.ru/search/?text=${query}`,
                duckduckgo: `https://duckduckgo.com/?t=lm&q=${query}&ia=web`,
            };
            window.open(engines[searchEngine], '_blank');
            searchInput.value = '';
        }
    });
});
