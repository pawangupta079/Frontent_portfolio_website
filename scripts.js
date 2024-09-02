
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded, fetching header...');
    fetch('header.htm')
        .then(response => {
            console.log('Response status:', response.status);
            return response.text();
        })
        .then(data => {
            console.log('Header HTML:', data);
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});




function toggleNav() {
    var nav = document.getElementById("navDemo");
    if (nav.className.indexOf("w3-show") === -1) {
        nav.className += " w3-show";
    } else {
        nav.className = nav.className.replace(" w3-show", "");
    }
}

// Add event listener for mobile menu button if needed
document.addEventListener('DOMContentLoaded', () => {
    var menuButton = document.getElementById("menuButton");
    if (menuButton) {
        menuButton.addEventListener('click', toggleNav);
    }
});
