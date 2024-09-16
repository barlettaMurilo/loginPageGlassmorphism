document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.inputContent input');

    inputs.forEach(input => {
        input.addEventListener('focus', (e) => {
            const title = e.target.previousElementSibling;
            if (title && title.classList.contains('titleInput')) {
                title.classList.add('focused');
            }
        });

        input.addEventListener('blur', (e) => {
            const title = e.target.previousElementSibling;
            if (title && title.classList.contains('titleInput')) {
                title.classList.remove('focused');
            }
        });
    });
});
