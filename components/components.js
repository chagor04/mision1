"use strict";
const nav = document.getElementById("nav");
const foot = document.getElementById("foot");
const container = document.querySelector('.container');
const urlActual = window.location.href;
nav.innerHTML += ` <nav >
            <div class="logo-container">
                <img src="https://web.uis.edu.co/wp-content/uploads/elementor/thumbs/Logo-UIS-web-qbqj494k91py9kvbai0ukya46twhbb1tj22br6je4k.webp"
                    alt="Logo UIS" class="logo">
            </div>
    
            <div>
                <ul class="nav-links2">
                    <li><a href="#">Trasnparencia</a></li>
                    <li><a href="#">Atención a la ciudadania</a></li>
                    <li><a href="#">participa</a></li>
                    <li><a href="/pages/forms.html">PQRDS</a></li>
                </ul>
                <ul class="nav-links">
                    <li><a href="#inicio" style="color: var(--e-global-color-17ab7c36);">Inicio</a></li>
                    <li> <a href="/pages/routes.html">Rutas</a></li>
                    <li><a href="#noticias">Noticias</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                    <li><a href="#rutas">Rutas</a></li>
                    <li><a href="#noticias">Noticias</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                    <img width="26" height="26"
                        src="https://uis.edu.co/wp-content/uploads/2020/07/Icono-Accesos-Rapidos-1.png">
                    <img class="lupa" width="26" height="26"
                        src="https://uis.edu.co/wp-content/uploads/2020/07/Icono-Buscador-2024.png">
                </ul>
            </div>
        </nav>;`;
foot.innerHTML += `<div class="contacus">
            <section class="footlogos">
                <img src="https://web.uis.edu.co/wp-content/uploads/elementor/thumbs/Logo-gov.co_-qboxd6ttey35f7ao1708039nhgmrev05ydopnb66yi.webp"
                    alt="">


                <img src="https://web.uis.edu.co/wp-content/uploads/elementor/thumbs/Logo-co-qboxd5vyr0bvjubcjz5aqhxj8iihx2pv4wsd5qo47s.webp"
                    alt="">
            </section>
            <section class="footlogos">
                <img src="https://web.uis.edu.co/wp-content/uploads/2023/08/Logo-Acreditacion-Institucional.webp"
                    alt="">
                <img src="https://web.uis.edu.co/wp-content/uploads/elementor/thumbs/Logo-Icontec-qboxd5vywpl5hy1t1pel450txpzlnlij6206hfmrnc.webp"
                    alt="">
            </section>
            <section>
                <p>Universidad Industrial de Santander</p>
                <p>NIT: 890.201.213-4</p>
            </section>
            <section>
                <p>Síganos</p>
            </section>
            <section class="networks">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-flickr"></i>
            </section>
            <section class="nationalphone">
                <p>Línea de atención nacional</p>
                <p>+57 01 8000 111 641</p>
            </section>
            <section class="nationalphone">
                <p>Teléfono</p>
                <p>+57 (607) 634 4000</p>
            </section>
            <section>
                <a class="pqrs" href="/pages/forms.html">PQRDS ></a>
            </section>
            <section>
                <p>Descargue nuestras apps:</p>
            </section>
            <section>
                App UIS
                <i class="fa-brands fa-google-play"></i>
                <i class="fa-brands fa-app-store-ios"></i>
                <i class="fa-solid fa-download"></i>
            </section>
            <section>
                

                <a class="pqrs" href="/pages/forms.html">App PQRS</a>
            </section>

        </div>
        <div class="information">
            <section class="contacts">
                <div>
                    <p>Campus Central UIS</p>
                    <p>Carrera 27 Calle 9</p>
                    <p>Bucaramanga</p>
                    <p>PBX: (+57) (7) 634 4000</p>
                </div>
                <div>
                    <p>Instituto de Lenguas</p>
                    <p>Carrera 27 Calle 9</p>
                    <p>Bucaramanga</p>
                    <p>PBX: (+57) (7) 634 4000</p>
                </div>
                <div>
                    <p>Horario de atención:</p>
                    <p>Lunes a viernes</p>
                    <p>7:00 a.m. - 12:00 m.</p>
                    <p>2:00 p.m. - 5:00 p.m.</p>
                </div>
            </section>
            <section class="headquarters">
                <div>
                    <p>Sede Área Metropolitana de Bucaramanga</p>
                    <p>Bucarica</p>
                    <p>Campus central</p>
                    <p>Facultad de Salud</p>
                    <p>Guatiguará</p>
                </div>
                <div>
                    <p>Sedes Regionales</p>
                    <p>Barbosa</p>
                    <p>Barrancabermeja</p>
                    <p>Málaga</p>
                    <p>Socorro</p>
                    <p>Oficina</p>
                    <p>Bogotá</p>
                </div>
                <div>
                    <p>Programas</p>
                    <p>Pregrados</p>
                    <p>Posgrados</p>
                    <p>Curso PreUIS</p>
                    <p>Cursos</p>
                    <p>Idiomas</p>
                </div>
                <div>
                    <p>Perfiles</p>
                    <p>Aspirantes</p>
                    <p>Estudiantes</p>
                    <p>Profesores</p>
                    <p>Empleados</p>
                    <p>Egresados</p>
                    <p>Proveedores</p>
                </div>

            </section>
            <section class="policies">
                <div class="policies1">
                    <p>Transparencia y acceso a la información pública</p>
                    <p>Política de privacidad y tratamiento de datos</p>
                    <p>Atención y servicios a la ciudadanía</p>
                    <p>Sistema de gestión de calidad</p>
                    <p>Peticiones, quejas y reclamos</p>
                    <p>Política de derechos de autor</p>
                </div>
                <div class="policies2">
                    <p>Acuerdos Conciliatorios</p>
                    <p>Términos y condiciones</p>
                    <p>Normativa aplicable</p>
                    <p>Veeduría Ciudadana</p>
                    <p>Ventanilla única</p>
                    <p>Pagos y ventas</p>
                </div>
                <div>
                    <p>Mesa de Ayuda</p>
                    <p>Convocatorias</p>
                    <p>Mapa del sitio</p>
                    <p>Políticas UIS</p>
                    <p>Micrositios</p>
                    <p>Participa</p>
                </div>
            </section>
        </div>`;
const estaciones = [
    {
        nombre: "Estacion Estadio",
        horaSalida: "6:00 a.m.",
        frecuencia: "Salida cada 30 minutos",
        ubicacion: "Ubicada en la salida del parqueadero del estadio ameriaco montanini",
        servicio: "Servicio Prestado por UIS",
        imagen: ".././ASSETS/parada estadio.jpg",
        mapa: "https://maps.app.goo.gl/kLsujAhVP4U4BSLf8"
    },
    {
        nombre: "Estacion Porteria Carrera 30",
        horaSalida: "6:02 a.m.",
        frecuencia: "Salida cada 30 minutos",
        ubicacion: "Estacion Ubicada en la porteria de la carrear 30 de la Universidad",
        servicio: "Servicio Prestado por UIS",
        imagen: ".././ASSETS/porteria carrera 30.jpg",
        mapa: "https://maps.app.goo.gl/BwiTAgSn6RLcGzdR9"
    },
    {
        nombre: "Estacion Meson de los Bucaros",
        horaSalida: "6:15 a.m.",
        frecuencia: "Salida cada 30 minutos",
        ubicacion: "Ubicada en la porteria de la sede de fisioterapia de la Universidad Industrial de Santander",
        servicio: "Servicio Prestado por UIS",
        imagen: ".././ASSETS/Estacion fisioterapia.jpg",
        mapa: "https://maps.app.goo.gl/BwiTAgSn6RLcGzdR9"
    },
    {
        nombre: "Estacion Facultad de Salud",
        horaSalida: "6:20 a.m.",
        frecuencia: "Salida cada 30 minutos",
        ubicacion: "Ubicada en la porteria principal de la sede de salud de la Universidad Industrial de Santander",
        servicio: "Servicio Prestado por UIS",
        imagen: ".././ASSETS/parada facultad de salud.jpg",
        mapa: "https://maps.app.goo.gl/BwiTAgSn6RLcGzdR9"
    }
];
console.log(urlActual);
let n;
if (urlActual == "http://127.0.0.1:5500/pages/routes.html") {
    // para routes 
    n = 4;
}
else if (urlActual == "http://127.0.0.1:5500/index.html") {
    //  
    //   para index
    n = 2;
}
else {
    n = 0;
    const container = "";
}
container.innerHTML += estaciones.slice(0, n).map(estacion => `
    <div class="container_target">
        <a href="${estacion.mapa}" target="_blank">
            <img src="${estacion.imagen}" alt="${estacion.nombre}">
        </a>
        <section class="routinfo">
            <br><br>
            <h1>${estacion.nombre}</h1><br>
            <ul>
                <li>Hora Salida: ${estacion.horaSalida}</li>
                <li>${estacion.frecuencia}</li>
                <li>${estacion.ubicacion}</li>
                <li>${estacion.servicio}</li>
                <button>Ver Estacion</button>
            </ul>
        </section>
    </div>
`).join('');
container.innerHTML += ` <a href="./pages/routes.html">
<button class="showmore">Ver mas</button></a>`;
if (urlActual == "http://127.0.0.1:5500/index.html") {
    const baner = document.getElementById("banner");
    baner.innerHTML = `<div class="carrusel">
            <ul class="slider">
                <li id="slide1">
                    <img src="https://comunicaciones.uis.edu.co/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-11-at-7.13.07-PM-1024x576.jpeg"
                        alt="Evento UIS1" />
                </li>
                <li id="slide2">
                    <img src="https://comunicaciones.uis.edu.co/wp-content/uploads/2022/08/Coheteria-UIS-Brasil-1024x575.jpeg"
                        alt="Evento UIS 2" />
                <li id="slide3">
                    <img src="https://comunicaciones.uis.edu.co/wp-content/uploads/2022/04/banner-3-1024x499.jpg"
                        alt="Evento UIS3" />
                </li>

                </li> -->

                <!-- <li id="slide4">
                <h1>Ejemplo con otros elementos</h1>
                <p>Esto es un párrafo de ejemplo para comprobar que podemos meter cualquier tipo de elementos en el slider</p>
                 <a href="">Vincent de van Gogh</a>
              </li>
          z -->
             </ul>
        </div>
        <ul class="menu">
            <li>
                <a href="#slide1">1</a>
            </li>
            <li>
                <a href="#slide2">2</a>
            </li>
            <li>
                <a href="#slide3">3</a>
            </li>
            <li>
                <a href="#slide4">4</a>
            </li>
        </ul> `;
}
else if (urlActual == "http://127.0.0.1:5500/pages/routes.html") {
    const banner = document.getElementById("banner");
    banner.innerHTML += `<img src="https://uis.edu.co/wp-content/uploads/2023/10/Atajos-Universidad-Industrial-de-Santander-01.png">
`;
}
