const stars = document.querySelectorAll('.stars span');
    const submitButton = document.getElementById('submit');
    const form = document.getElementById('form');
    let rating = 0;

    // Guardar la calificación en el localStorage
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            rating = index + 1;  // Las estrellas empiezan desde 0
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('checked');
                } else {
                    s.classList.remove('checked');
                }
            });
        });
    });

    // Función para guardar los datos en localStorage
    submitButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const comments = document.getElementById('comments').value;

        if (name && comments && rating > 0) {
            const commentData = {
                name,
                comments,
                rating
            };

            // Guardar en localStorage
            let storedComments = JSON.parse(localStorage.getItem('comments')) || [];
            storedComments.push(commentData);
            localStorage.setItem('comments', JSON.stringify(storedComments));

            alert('Comentario guardado exitosamente.');
            form.reset();
            stars.forEach(star => star.classList.remove('checked')); // Limpiar las estrellas
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });