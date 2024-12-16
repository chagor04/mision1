"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let nav = document.getElementById("nav");
let targets = document.getElementById("target");
// let banner = document.getElementById("banner") as HTMLDivElement;
let foot = document.getElementById("foot");
var urlCompleta = window.location.href;
let logoimage = "";
let target1 = "";
let target2 = "";
let target3 = "";
let target4 = "";
// Obtener solo la ruta (sin el dominio)
var ruta = window.location.pathname;
console.log("URL Completa: " + urlCompleta);
console.log("Ruta: " + ruta);
let rutas = ["http://127.0.0.1:5500/pages/routes.html",
    "http://127.0.0.1:5500/pages/forms.html",
    "http://127.0.0.1:5500/inde.html",
    ""];
function nsame() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            var ruta = window.location.pathname;
            if (ruta === "http://127.0.0.1:5500/pages/routes.html") { // Asegúrate de que la ruta sea correcta
                target1 = ".././ASSETS/parada estadio.jpg";
                target2 = ".././ASSETS/porteria carrera 30.jpg";
                target3 = ".././ASSETS/Estacion fisioterapia.jpg";
                target4 = ".././ASSETS/parada facultad de salud.jpg";
                resolve("Ruta correcta");
            }
            else {
                reject("Ruta incorrecta");
            }
        });
    });
}
nsame()
    .then((message) => {
    console.log(message); // Manejo de la resolución de la promesa
})
    .catch((error) => {
    console.error(error); // Manejo del rechazo de la promesa
});
// switch (ruta) {
//     case "http://127.0.0.1:5500/pages/routes.html":
//          target1="./ASSETS/parada estadio.jpg";
//          target2="./ASSETS/parada facultad de salud.jpg";
// vistas desde rutas 
//  case rutas[1]:
//      logoimage="";
//      target1=".././ASSETS/parada estadio.jpg";
//      target2=".././ASSETS/porteria carrera 30.jpg";
//      target3=".././ASSETS/Estacion fisioterapia.jpg";
//      target4=".././ASSETS/parada facultad de salud.jpg";
nav.innerHTML = `<nav >
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
</nav>`;
// banner.innerHTML=`<div class="carrusel">
//         <ul class="slider">
//             <li id="slide1">
//                 <img src="https://comunicaciones.uis.edu.co/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-11-at-7.13.07-PM-1024x576.jpeg"
//                     alt="Evento UIS1" />
//             </li>
//             <li id="slide2">
//                 <img src="https://comunicaciones.uis.edu.co/wp-content/uploads/2022/08/Coheteria-UIS-Brasil-1024x575.jpeg"
//                     alt="Evento UIS 2" />
//             <li id="slide3">
//                 <img src="https://comunicaciones.uis.edu.co/wp-content/uploads/2022/04/banner-3-1024x499.jpg"
//                     alt="Evento UIS3" />
//             </li>
//             </li> -->
//             <!-- <li id="slide4">
//             <h1>Ejemplo con otros elementos</h1>
//             <p>Esto es un párrafo de ejemplo para comprobar que podemos meter cualquier tipo de elementos en el slider</p>
//              <a href="">Vincent de van Gogh</a>
//           </li>
//       z -->
//         <!-- </ul>
//     </div>
//     <ul class="menu">
//         <li>
//             <a href="#slide1">1</a>
//         </li>
//         <li>
//             <a href="#slide2">2</a>
//         </li>
//         <li>
//             <a href="#slide3">3</a>
//         </li>
//         <li>
//             <a href="#slide4">4</a>
//         </li>
//     </ul>`;
targets.innerHTML += `<div class="container_target">
        <a href="https://maps.app.goo.gl/BwiTAgSn6RLcGzdR9" target="_blank">
            <img src="${target1}""></a>
        <section class="routinfo">
            <br><br>
            <h1>Estacion Estadio</h1>
            <ul>

                <li>Hora Salida: 6:00 a.m.</li>
                <li>Salida cada 30 minutos</li>
                <li>Ubicada en la salida del parqueadero
                    del estadio Americo Montanini <br>que le presta servicio a la UIS
                </li>
                <button class="cp">Ver Estacion</button>
            </ul>
        </section>
    </div>
    <div class="container_target">
        <a href="https://maps.app.goo.gl/BwiTAgSn6RLcGzdR9" target="_blank">
            <img src="${target2}" alt=""></a>
        <section class="routinfo">
            <br><br>
            <h1>Estacion Facultad de Salud</h1>
            <ul>
                <li>Hora Salida: 6:50 a.m.</li>
                <li>Salida cada 30 minutos</li>
                <li>Ubicada en la porteria principal de la porteria
                    <br>principal de la sede de salud de la universidad industrial de santander
                </li>
                <button class="cp">Ver Estacion</button>
            </ul>
        </section>
    </div>
    <a href="./pages/routes.html">
    <button class="showmore">Ver mas</button></a>`;
if (ruta == "http://127.0.0.1:5500/pages/routes.html") {
    targets.innerHTML += `
    <div class="container_target">
            <a href="https://maps.app.goo.gl/BwiTAgSn6RLcGzdR9" target="_blank">
                <img src="${target3}" alt="" width="472px" height="300px"></a>
            <section class="routinfo">
                <br><br>
                <h1>Estacion Meson de los bucaros</h1><br>
                <ul>
                    <li>Hora Salida: 6:15 a.m.</li>
                    <li>Salida cada 30 minutos</li>
                    <li>Ubicada en la porteria <br> de la sede de fisioterapia  de la Universidad Industrial de Santander
                    </li>

                    <button class="cp">Ver Estacion</button>
                </ul>
            </section>
        </div>
        <div class="container_target">
            <a href="https://maps.app.goo.gl/BwiTAgSn6RLcGzdR9" target="_blank">
                <img src="${target4}" alt=""></a>
            <section class="routinfo">
                <br><br>
                <h1>Estacion Facultad de Salud</h1><br>
                <ul>
                    <li>Hora Salida: 6:20 a.m.</li>
                    <li>Salida cada 30 minutos</li>
                    <li>Ubicada en la porteria principal de la porteria
                        <br>principal de la sede de salud de la universidad industrial de santander
                    </li>
                    <button class="cp">Ver Estacion</button>
                </ul>
            </section>
        </div>
`;
}
foot.innerHTML = `<div class="contacus">
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
// nav.innerHTML=`<nav >
//         <div class="logo-container">
//             <img src="https://web.uis.edu.co/wp-content/uploads/elementor/thumbs/Logo-UIS-web-qbqj494k91py9kvbai0ukya46twhbb1tj22br6je4k.webp"
//                 alt="Logo UIS" class="logo">
//         </div>
//         <div>
//             <ul class="nav-links2">
//                 <li><a href="#">Trasnparencia</a></li>
//                 <li><a href="#">Atención a la ciudadania</a></li>
//                 <li><a href="#">participa</a></li>
//                 <li><a href="/pages/forms.html">PQRDS</a></li>
//             </ul>
//             <ul class="nav-links">
//                 <li><a href="#inicio" style="color: var(--e-global-color-17ab7c36);">Inicio</a></li>
//                 <li> <a href="/pages/routes.html">Rutas</a></li>
//                 <li><a href="#noticias">Noticias</a></li>
//                 <li><a href="#contacto">Contacto</a></li>
//                 <li><a href="#rutas">Rutas</a></li>
//                 <li><a href="#noticias">Noticias</a></li>
//                 <li><a href="#contacto">Contacto</a></li>
//                 <img width="26" height="26"
//                     src="https://uis.edu.co/wp-content/uploads/2020/07/Icono-Accesos-Rapidos-1.png">
//                 <img class="lupa" width="26" height="26"
//                     src="https://uis.edu.co/wp-content/uploads/2020/07/Icono-Buscador-2024.png">
//             </ul>
//         </div>
//     </nav>`;
// banner.innerHTML=`<div class="carrusel">
//             <ul class="slider">
//                 <li id="slide1">
//                     <img src="https://comunicaciones.uis.edu.co/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-11-at-7.13.07-PM-1024x576.jpeg"
//                         alt="Evento UIS1" />
//                 </li>
//                 <li id="slide2">
//                     <img src="https://comunicaciones.uis.edu.co/wp-content/uploads/2022/08/Coheteria-UIS-Brasil-1024x575.jpeg"
//                         alt="Evento UIS 2" />
//                 <li id="slide3">
//                     <img src="https://comunicaciones.uis.edu.co/wp-content/uploads/2022/04/banner-3-1024x499.jpg"
//                         alt="Evento UIS3" />
//                 </li>
//                 </li> -->
//                 <!-- <li id="slide4">
//                 <h1>Ejemplo con otros elementos</h1>
//                 <p>Esto es un párrafo de ejemplo para comprobar que podemos meter cualquier tipo de elementos en el slider</p>
//                  <a href="">Vincent de van Gogh</a>
//               </li>
//           z -->
//             <!-- </ul>
//         </div>
//         <ul class="menu">
//             <li>
//                 <a href="#slide1">1</a>
//             </li>
//             <li>
//                 <a href="#slide2">2</a>
//             </li>
//             <li>
//                 <a href="#slide3">3</a>
//             </li>
//             <li>
//                 <a href="#slide4">4</a>
//             </li>
//         </ul>`;
// targets.innerHTML=`<div class="container_target">
//             <a href="https://maps.app.goo.gl/BwiTAgSn6RLcGzdR9" target="_blank">
//                 <img src="./ASSETS/parada estadio.jpg" alt=""></a>
//             <section class="routinfo">
//                 <br><br>
//                 <h1>Estacion Estadio</h1>
//                 <ul>
//                     <li>Hora Salida: 6:00 a.m.</li>
//                     <li>Salida cada 30 minutos</li>
//                     <li>Ubicada en la salida del parqueadero
//                         del estadio Americo Montanini <br>que le presta servicio a la UIS
//                     </li>
//                     <button class="cp">Ver Estacion</button>
//                 </ul>
//             </section>
//         </div>
//         <div class="container_target">
//             <a href="https://maps.app.goo.gl/BwiTAgSn6RLcGzdR9" target="_blank">
//                 <img src="./ASSETS/parada facultad de salud.jpg" alt=""></a>
//             <section class="routinfo">
//                 <br><br>
//                 <h1>Estacion Facultad de Salud</h1>
//                 <ul>
//                     <li>Hora Salida: 6:50 a.m.</li>
//                     <li>Salida cada 30 minutos</li>
//                     <li>Ubicada en la porteria principal de la porteria
//                         <br>principal de la sede de salud de la universidad industrial de santander
//                     </li>
//                     <button class="cp">Ver Estacion</button>
//                 </ul>
//             </section>
//         </div>
//         <a href="./pages/routes.html">
//         <button class="showmore">Ver mas</button></a>`;
// foot.innerHTML=`<div class="contacus">
//             <section class="footlogos">
//                 <img src="https://web.uis.edu.co/wp-content/uploads/elementor/thumbs/Logo-gov.co_-qboxd6ttey35f7ao1708039nhgmrev05ydopnb66yi.webp"
//                     alt="">
//                 <img src="https://web.uis.edu.co/wp-content/uploads/elementor/thumbs/Logo-co-qboxd5vyr0bvjubcjz5aqhxj8iihx2pv4wsd5qo47s.webp"
//                     alt="">
//             </section>
//             <section class="footlogos">
//                 <img src="https://web.uis.edu.co/wp-content/uploads/2023/08/Logo-Acreditacion-Institucional.webp"
//                     alt="">
//                 <img src="https://web.uis.edu.co/wp-content/uploads/elementor/thumbs/Logo-Icontec-qboxd5vywpl5hy1t1pel450txpzlnlij6206hfmrnc.webp"
//                     alt="">
//             </section>
//             <section>
//                 <p>Universidad Industrial de Santander</p>
//                 <p>NIT: 890.201.213-4</p>
//             </section>
//             <section>
//                 <p>Síganos</p>
//             </section>
//             <section class="networks">
//                 <i class="fa-brands fa-facebook"></i>
//                 <i class="fa-brands fa-instagram"></i>
//                 <i class="fa-brands fa-x-twitter"></i>
//                 <i class="fa-brands fa-youtube"></i>
//                 <i class="fa-brands fa-linkedin"></i>
//                 <i class="fa-brands fa-flickr"></i>
//             </section>
//             <section class="nationalphone">
//                 <p>Línea de atención nacional</p>
//                 <p>+57 01 8000 111 641</p>
//             </section>
//             <section class="nationalphone">
//                 <p>Teléfono</p>
//                 <p>+57 (607) 634 4000</p>
//             </section>
//             <section>
//                 <a class="pqrs" href="/pages/forms.html">PQRDS ></a>
//             </section>
//             <section>
//                 <p>Descargue nuestras apps:</p>
//             </section>
//             <section>
//                 App UIS
//                 <i class="fa-brands fa-google-play"></i>
//                 <i class="fa-brands fa-app-store-ios"></i>
//                 <i class="fa-solid fa-download"></i>
//             </section>
//             <section>
//                 <a class="pqrs" href="/pages/forms.html">App PQRS</a>
//             </section>
//         </div>
//         <div class="information">
//             <section class="contacts">
//                 <div>
//                     <p>Campus Central UIS</p>
//                     <p>Carrera 27 Calle 9</p>
//                     <p>Bucaramanga</p>
//                     <p>PBX: (+57) (7) 634 4000</p>
//                 </div>
//                 <div>
//                     <p>Instituto de Lenguas</p>
//                     <p>Carrera 27 Calle 9</p>
//                     <p>Bucaramanga</p>
//                     <p>PBX: (+57) (7) 634 4000</p>
//                 </div>
//                 <div>
//                     <p>Horario de atención:</p>
//                     <p>Lunes a viernes</p>
//                     <p>7:00 a.m. - 12:00 m.</p>
//                     <p>2:00 p.m. - 5:00 p.m.</p>
//                 </div>
//             </section>
//             <section class="headquarters">
//                 <div>
//                     <p>Sede Área Metropolitana de Bucaramanga</p>
//                     <p>Bucarica</p>
//                     <p>Campus central</p>
//                     <p>Facultad de Salud</p>
//                     <p>Guatiguará</p>
//                 </div>
//                 <div>
//                     <p>Sedes Regionales</p>
//                     <p>Barbosa</p>
//                     <p>Barrancabermeja</p>
//                     <p>Málaga</p>
//                     <p>Socorro</p>
//                     <p>Oficina</p>
//                     <p>Bogotá</p>
//                 </div>
//                 <div>
//                     <p>Programas</p>
//                     <p>Pregrados</p>
//                     <p>Posgrados</p>
//                     <p>Curso PreUIS</p>
//                     <p>Cursos</p>
//                     <p>Idiomas</p>
//                 </div>
//                 <div>
//                     <p>Perfiles</p>
//                     <p>Aspirantes</p>
//                     <p>Estudiantes</p>
//                     <p>Profesores</p>
//                     <p>Empleados</p>
//                     <p>Egresados</p>
//                     <p>Proveedores</p>
//                 </div>
//             </section>
//             <section class="policies">
//                 <div class="policies1">
//                     <p>Transparencia y acceso a la información pública</p>
//                     <p>Política de privacidad y tratamiento de datos</p>
//                     <p>Atención y servicios a la ciudadanía</p>
//                     <p>Sistema de gestión de calidad</p>
//                     <p>Peticiones, quejas y reclamos</p>
//                     <p>Política de derechos de autor</p>
//                 </div>
//                 <div class="policies2">
//                     <p>Acuerdos Conciliatorios</p>
//                     <p>Términos y condiciones</p>
//                     <p>Normativa aplicable</p>
//                     <p>Veeduría Ciudadana</p>
//                     <p>Ventanilla única</p>
//                     <p>Pagos y ventas</p>
//                 </div>
//                 <div>
//                     <p>Mesa de Ayuda</p>
//                     <p>Convocatorias</p>
//                     <p>Mapa del sitio</p>
//                     <p>Políticas UIS</p>
//                     <p>Micrositios</p>
//                     <p>Participa</p>
//                 </div>
//             </section>
//         </div>`;
// Obtener la URL completa de la página actual
