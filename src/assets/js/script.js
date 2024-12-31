document.addEventListener("DOMContentLoaded", () => {
    let sp = document.querySelectorAll("span#star");

    setInterval(() => {
        let no = Math.floor(Math.random() * (99 + 1));
        let h = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
        let w = Math.floor(Math.random() * (99 - 1 + 1)) + 1;

        sp[no].style.top = `${h}%`;
        sp[no].style.left = `${w}%`;
        sp[no].style.opacity = `1`;

        setTimeout(() => {
            sp[no].style.opacity = `0`;
            sp[no].style.top = `${h}%`;
            sp[no].style.left = `${w}%`;
        }, 1000);
    }, 80);
});

function descargarArchivo() {
    const enlace = document.createElement('a');
    enlace.href = '../docs/curriculum.pdf';
    enlace.download = 'curriculum.PDF';
    enlace.click();
}


(function() {
    emailjs.init("dYmKyLvjKxde61rs-");
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        emailjs.sendForm('service_pzockgc', 'template_ptmf4m6', this)
            .then(() => {
                console.log('¡Éxito!');
                alert("Mensaje enviado correctamente.");
            }, (error) => {
                console.log('¡Falló...', error);
                alert("Hubo un problema al enviar el mensaje.");
            });
    });
};

