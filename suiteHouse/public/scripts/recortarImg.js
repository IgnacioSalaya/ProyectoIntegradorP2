document.addEventListener('DOMContentLoaded', () => {

    // Input File
    const inputImage = document.querySelector('#image');
    // Nodo donde estará el editor
    const editor = document.querySelector('#editor');
    // El canvas donde se mostrará la previa
    const miCanvas = document.querySelector('#preview');
    // Contexto del canvas
    const contexto = miCanvas.getContext('2d');
    // Ruta de la imagen seleccionada
    let urlImage = undefined;
    // Evento disparado cuando se adjunte una imagen
    inputImage.addEventListener('change', abrirEditor, false);

    /* Método que abre el editor con la imagen seleccionada */
    function abrirEditor(e) {
        // Obtiene la imagen
        urlImage = URL.createObjectURL(e.target.files[0]);

        let caja = document.querySelector('#caja-contenedora-superpuesta')
        caja.hidden = false;

        // Borra editor en caso que existiera una imagen previa
        editor.innerHTML = '';
        let cropprImg = document.createElement('img');
        cropprImg.setAttribute('id', 'croppr');
        editor.appendChild(cropprImg);

        // Limpia la previa en caso que existiera algún elemento previo
        contexto.clearRect(0, 0, miCanvas.width, miCanvas.height);

        // Envia la imagen al editor para su recorte
        document.querySelector('#croppr').setAttribute('src', urlImage);

        // Crea el editor
        new Croppr('#croppr', {
            aspectRatio: 1,
            startSize: [70, 70],
            onCropEnd: recortarImagen
        })
    }

    /* Método que recorta la imagen con las coordenadas proporcionadas con croppr.js */
    function recortarImagen(data) {
        // Variables
        const inicioX = data.x;
        const inicioY = data.y;
        const nuevoAncho = data.width;
        const nuevaAltura = data.height;
        const zoom = 1;
        let imagenEn64 = '';
        // La imprimo
        miCanvas.width = nuevoAncho;
        miCanvas.height = nuevaAltura;
        // La declaro
        let miNuevaImagenTemp = new Image();
        // Cuando la imagen se carge se procederá al recorte
        miNuevaImagenTemp.onload = function () {
            // Se recorta
            contexto.drawImage(miNuevaImagenTemp, inicioX, inicioY, nuevoAncho * zoom, nuevaAltura *
                zoom, 0, 0, nuevoAncho, nuevaAltura);
            // Se transforma a base64
            imagenEn64 = miCanvas.toDataURL("image/png");
            // Mostramos el código generado
            document.querySelector('#base64').textContent = imagenEn64;
        }
        // Proporciona la imagen cruda, sin editarla por ahora
        miNuevaImagenTemp.src = urlImage;


        let close = document.querySelector('#button-close');
        let check = document.querySelector('#button-check');
        let reset = document.querySelector('#reset');
        let caja = document.querySelector('#caja-contenedora-superpuesta');
        let fotoPerfil = document.querySelector('.foto-perfil');
    
        close.addEventListener('click', (e) => {
            caja.hidden = true;
            inputImage = undefined;
        });
    
        check.addEventListener('click', (e) => {
            caja.hidden = true;
            fotoPerfil.src = imagenEn64
        });

        reset.addEventListener('click', (e) => {
            fotoPerfil.src = 'https://via.placeholder.com/200';
        });
    }
    
});