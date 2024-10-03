var r = document.getElementById("resetar");
var count = 0;

document.getElementById("input").addEventListener("keydown", function (event) {
    if (event.key == "a" || event.key == "A") {
        count++;
        document.querySelector(
            "#resposta"
        ).innerHTML = `<br>Foi digitado ${count} letras a`;
    }
});

r.addEventListener("click", function (event) {
    count = 0;
    document.querySelector(
        "#resposta"
    ).innerHTML = `<br>Foi digitado ${count} letras a`;
    document.getElementById("input").value = "";
});

const suggestions = [
    "JavaScript",
    "Java",
    "Python",
    "Ruby",
    "Go",
    "C++",
    "C#",
    "Swift",
    "Kotlin",
    "PHP",
];

const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions-list');
let selectedIndex = -1;

searchInput.addEventListener('keyup', (event) => {
    const inputValue = searchInput.value.toLowerCase();
    suggestionsList.innerHTML = '';
    selectedIndex = -1;

    if (inputValue) {
        const filteredSuggestions = suggestions.filter(suggestion => 
            suggestion.toLowerCase().includes(inputValue)
        );

        filteredSuggestions.forEach((suggestion, index) => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            li.classList.add('suggestion-item');
            li.dataset.index = index;

            li.addEventListener('click', () => {
                searchInput.value = suggestion;
                suggestionsList.innerHTML = '';
            });

            suggestionsList.appendChild(li);
        });
    }
});

searchInput.addEventListener('keydown', (event) => {
    const items = suggestionsList.getElementsByClassName('suggestion-item');

    if (event.key === 'ArrowDown') {
        selectedIndex = (selectedIndex + 1) % items.length;
        updateSelection(items);
        event.preventDefault();
    } else if (event.key === 'ArrowUp') {
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        updateSelection(items);
        event.preventDefault();
    } else if (event.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
            searchInput.value = items[selectedIndex].textContent;
            suggestionsList.innerHTML = '';
        }
    }
});

function updateSelection(items) {
    Array.from(items).forEach((item, index) => {
        item.classList.toggle('selected', index === selectedIndex);
    });
}
