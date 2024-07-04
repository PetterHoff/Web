document.addEventListener("DOMContentLoaded", function() {
    // Fetch navbar.html and insert it into the navbar div, with regards to subdirectories
    let path = window.location.pathname.split('/').length > 2 ? '../navbar.html' : 'navbar.html';
    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
