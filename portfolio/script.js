function showContent(contentId) {
    hideAllContent();
    document.getElementById(contentId).style.display = 'block';
}

function hideAllContent() {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });
}