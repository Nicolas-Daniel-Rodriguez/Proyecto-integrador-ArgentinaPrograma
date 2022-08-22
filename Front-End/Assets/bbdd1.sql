-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-08-2022 a las 01:23:20
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bbdd1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acerca_de`
--

CREATE TABLE `acerca_de` (
  `id` bigint(20) NOT NULL,
  `acerca_de` varchar(1500) DEFAULT NULL,
  `ac_fk` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `acerca_de`
--

INSERT INTO `acerca_de` (`id`, `acerca_de`, `ac_fk`) VALUES
(0, 'Deseo poder brindar grandes soluciones a empresas y personas por medio de la programación. Cada vez que veo o desempeño una tarea automáticamente mi cabeza piensa como mejorar el proceso, como hacerlo mas eficiente, mas entendible y mas productivo. Mientras mas aprendo a programar mas me entusiasmo en el potencial de lo que se puede crear, en como se pueden mejorar la calidad de vida de la gente y del trabajo, mejorando procesos diarios, simplificando tareas tediosas, agregándole calidad a productos, etc. Actualmente me desempeño como Regente de una institución educativa, mi labor principal es supervisar y asistir pedagógicamente a los instructores y ayudar al equipo educativo a cumplir sus tareas de la mejor forma posible. Soy el puente entre la conducción general de la institución y los instructores. Siempre buscando empatizar con las partes y analizando como alcanzar el mayor objetivo. También estoy a cargo de la Coordinación de los Puntos Progresar en la Ciudad de Berisso donde gestionamos diferentes puntos itinerantes para ayudar y asesorar a todos los jóvenes que quieran inscribirse a la beca o tengan algún inconveniente. Estoy diseñando una web para una escuela ad honorem para que pueda difundir su información de una manera mas adecuada y atractiva para sus alumnos. A su vez, hago ediciones graficas, logos, banner, flyer, presentaciones y videos.', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `educacion`
--

CREATE TABLE `educacion` (
  `id` bigint(20) NOT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `lugar_estudio` varchar(100) DEFAULT NULL,
  `fecha_inicio` varchar(255) DEFAULT NULL,
  `fecha_fin` varchar(255) DEFAULT NULL,
  `certificado` varchar(100) DEFAULT NULL,
  `ed_fk` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `educacion`
--

INSERT INTO `educacion` (`id`, `titulo`, `lugar_estudio`, `fecha_inicio`, `fecha_fin`, `certificado`, `ed_fk`) VALUES
(19, 'DESARROLLADOR WEB FULLSTACK JR', 'Ministerio de Desarrollo Productivo - CESSI - INTI', '10/2021', '08/2022', './assets/cert.1.svg', NULL),
(56, 'INSTRUCTOR DE FORMACIÓN PROFESIONAL', 'Centro de Formación en Administración Pública Nº 440', '07/2020', '08/2021', './assets/cert.1.svg', NULL),
(57, 'BACHILLER Y TÉCNICO ELECTRONICO', 'Escuela Industrial N°6 Alberth Thomas', '03/2005', '11/2011', './assets/cert.3.svg', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experiencia_laboral`
--

CREATE TABLE `experiencia_laboral` (
  `id` bigint(20) NOT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `fecha_inicio` varchar(255) DEFAULT NULL,
  `fecha_fin` varchar(255) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `img_exp` varchar(100) DEFAULT NULL,
  `ex_fk` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `experiencia_laboral`
--

INSERT INTO `experiencia_laboral` (`id`, `titulo`, `fecha_inicio`, `fecha_fin`, `descripcion`, `img_exp`, `ex_fk`) VALUES
(22, 'Coordinador de los Puntos Progresar', '02/2022', 'Actual', 'Estoy a cargo de la coordinación de los puntos itinerantes con equipos de trabajo por diversos lugares de la ciudad de Berisso para ayudar y asesorar en la inscripción y programas de la beca educativa Progresar.', './assets/PProgresar.svg', NULL),
(58, 'Regente CFL Nº404 Berisso', '02/2019', 'Actual', '- 12 personas a cargo. - Coordinar las actividades de los trayectos formativos y cursos de organización curricular en las familias profesionales. - Efectuar el seguimiento del desarrollo de la actividad institucional, informar y proponer estrategias de intervención al equipo de conducción de acuerdo con sus observaciones. - Asistir pedagógicamente a los maestros de ciclo y los docentes a cargo de área en el desarrollo de sus planificaciones y proyectos. - Etc.', './assets/CFL.svg', NULL),
(59, 'Administrativo Cat.C', '01/2016', '03/2020', '- Cuentas corrientes, conciliación, extractos bancarios, manejo de caja, stock, precios, atención al público, gestoría, manejo de software erp, etc.', './assets/Madeco.svg', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habilidades`
--

CREATE TABLE `habilidades` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `img_hab` varchar(255) DEFAULT NULL,
  `porcentaje` varchar(255) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `sk_fk` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `habilidades`
--

INSERT INTO `habilidades` (`id`, `descripcion`, `img_hab`, `porcentaje`, `titulo`, `sk_fk`) VALUES
(17, 'El esqueleto y maquetación general de este portfolio fue realizado con HTML 5.', './assets/HTML.png', '90', 'HTML', NULL),
(28, 'El estilo y diseño general de este portfolio fue realizado con CSS 3.', './assets/CSS.png', '90', 'CSS', NULL),
(29, 'El comportamiento y ejecución de eventos de este portfolio fue realizado con JavaScript.', './assets/Javascript.svg', '60', 'Javascript', NULL),
(60, 'El login y diseño de xxxxxx de este portfolio fue realizado con Bootstrap.', './assets/Bootstrap.png', '75', 'Bootstrap', NULL),
(61, 'La conexión de xxxxxxx de este portfolio fue realizado con TypeScript.', './assets/Typescript.png', '70', 'TypeScript', NULL),
(62, 'El esqueleto y maquetación general de este portfolio fue realizado con HTML5 en Visual Studio Code.', './assets/Angular.svg', '70', 'Angular', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(67);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `img_perfil`
--

CREATE TABLE `img_perfil` (
  `id` bigint(20) NOT NULL,
  `img_perfil` varchar(100) DEFAULT NULL,
  `img_pe_fk` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `img_perfil`
--

INSERT INTO `img_perfil` (`id`, `img_perfil`, `img_pe_fk`) VALUES
(0, './assets/nico.png', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `img_portada`
--

CREATE TABLE `img_portada` (
  `id` bigint(20) NOT NULL,
  `img_portada` varchar(100) DEFAULT NULL,
  `img_po_fk` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `img_portada`
--

INSERT INTO `img_portada` (`id`, `img_portada`, `img_po_fk`) VALUES
(0, './assets/RodriguezNicolas.png', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `pais` varchar(50) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `instagram` varchar(100) DEFAULT NULL,
  `github` varchar(100) DEFAULT NULL,
  `linkedin` varchar(100) DEFAULT NULL,
  `ocupacion_corta` varchar(100) DEFAULT NULL,
  `ocupacion` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `nombre`, `apellido`, `pais`, `telefono`, `email`, `instagram`, `github`, `linkedin`, `ocupacion_corta`, `ocupacion`) VALUES
(5, 'Nicolás Daniel', 'Rodríguez', 'Argentina', '221-559-9179', 'ndr126@abc.gob.ar', 'https://www.instagram.com/nicolas_daniel_rodriguez/', 'https://github.com/Nicolas-Daniel-Rodriguez/', 'https://www.linkedin.com/in/nicolas-daniel-rodriguez/', 'Fullstack Web Developer Jr', 'Regente CFL 404 Berisso -  Coordinador Puntos Progresar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id` bigint(20) NOT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `descripcion` varchar(1500) DEFAULT NULL,
  `logo_proy` varchar(100) DEFAULT NULL,
  `link` varchar(100) DEFAULT NULL,
  `img_demo` varchar(100) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  `pr_fk` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id`, `titulo`, `descripcion`, `logo_proy`, `link`, `img_demo`, `num`, `pr_fk`) VALUES
(63, 'Página Web para Escuela de Educación Secundaria Técnica NºX - La Plata', 'Ante la búsqueda de escuela secundaria para uno de mis hijos, me encuentro con una escuela la cual le tengo mucho aprecio y su página web. La misma se había hecho con mucho esfuerzo y sin conocimiento técnico y de diseño. Realmente se encontraba desordenada, poco intuitiva y sin diseño. No daba una buena impresión del establecimiento. Dada está situación decido crear una página web institucional con buen diseño y la información accesible e intuitiva para los estudiantes. Una vez semi terminado un bosquejo casi total y con la página oculta a la comunidad me acerco a la escuela y ofrezco mí proyecto comentando que lo hago sin cargo, si les gusta sin compromiso pueden aceptar mí donación a la institución. Realmente contentos por la iniciativa y el trabajo realizado empezamos a trabajar en conjunto, agregarle funcionalidades según las necesidades de la institución, formas de actualizar el contenido y cuestiones de seguridad básica. Por temas administrativos aún no largamos y está detenido el proyecto. Espero que pronto pueda publicarse. La idea es ir actualizando la calidad del trabajo con lo aprendido en Argentina Programa. Cabe mencionar que la página web tiene más trabajo de diseño que de codificación al momento.', './assets/LogoEscuela.svg', 'Próximamente Link', './assets/Escuela.svg', NULL, NULL),
(64, 'Página Web - Diseño de Logo, tarjetas y membretes', 'Este proyecto nació de la necesidad de una empresa de tener una identidad visual y web para captar mas clientes y verse mas profesional para la cartera que ya estaban manejando. Se realizó los logos, tarjetas y membretes con adobe Illustrator y photoshop. Tambien se registro la empresa en google para que aparezca en las busquedas y se realizó una web sencilla con wix.', './assets/LogoConlara.svg', 'https://conlaraservicios.wixsite.com/inicio', './assets/WEBCONLARA.svg', NULL, NULL),
(65, 'Página Web - Diseño de Logo, mejora de personajes...', 'Este proyecto nació con el objetivo de realizar un juego NFT de penales con personajes famosos. Me encargue del diseño de la página junto a mi socio, animaciones, videos, infografía, mejora de personajes, logo y detalles varios.', './assets/LogoCelebrity.svg', 'https://celebritysoccernft.wixsite.com/my-site', './assets/Celebrity.svg', NULL, NULL),
(66, 'Diseño de Logo, imágenes y videos - Centro de Formación Laboral Nº404 Berisso', 'Realice el logo de esta institución con Illustrator y photoshop, como la edición de videos e imágenes institucionales, presentaciones de trabajo y colaboración en el desarrollo de la página web.', './assets/LogoCFL.svg', 'https://educacionberisso.wixsite.com/cfp404', './assets/CFLWEB.svg', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `rol_nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `rol_nombre`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `nombre_usuario` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `email`, `nombre`, `nombre_usuario`, `password`) VALUES
(1, 'ndr126@abc.gob.ar', 'admin12', 'admin12', '$2a$10$.cl.nIgXKi14oQHGVFbHQuT8.kjcUB55IZtEiWGZ77zV21mQlbhIy'),
(2, 'nikoo853@gmail.com', 'admin', 'admin', '$2a$10$TT2iMFD3BzwS4FGLhqTvQOvw2lA3Utqf0TK55g/TIKn8jKhcFqf9G');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_rol`
--

CREATE TABLE `usuario_rol` (
  `id_usuario` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario_rol`
--

INSERT INTO `usuario_rol` (`id_usuario`, `rol_id`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `acerca_de`
--
ALTER TABLE `acerca_de`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK8h0vpl5ki7rk3lrwxlyofwgsf` (`ac_fk`);

--
-- Indices de la tabla `educacion`
--
ALTER TABLE `educacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `EduFK` (`id`),
  ADD KEY `FK2n9kwrgre1vb68ihjwj2irw8t` (`ed_fk`);

--
-- Indices de la tabla `experiencia_laboral`
--
ALTER TABLE `experiencia_laboral`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ExpFK` (`id`),
  ADD KEY `FKk8bu8b3g01dbe21yfokrx92f6` (`ex_fk`);

--
-- Indices de la tabla `habilidades`
--
ALTER TABLE `habilidades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK1drkr7fupxpkpgyde33yd5gpa` (`sk_fk`);

--
-- Indices de la tabla `img_perfil`
--
ALTER TABLE `img_perfil`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK7cxcqo2bl4kxwly4jqjx47s1` (`img_pe_fk`);

--
-- Indices de la tabla `img_portada`
--
ALTER TABLE `img_portada`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK9hcynly59y93gr76vap1y4ih3` (`img_po_fk`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKes6svvojymjj62541j1cl1wqd` (`pr_fk`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `UK_5171l57faosmj8myawaucatdw` (`email`),
  ADD UNIQUE KEY `UK_puhr3k3l7bj71hb7hk7ktpxn0` (`nombre_usuario`);

--
-- Indices de la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD PRIMARY KEY (`id_usuario`,`rol_id`),
  ADD KEY `FK610kvhkwcqk2pxeewur4l7bd1` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `acerca_de`
--
ALTER TABLE `acerca_de`
  ADD CONSTRAINT `FK8h0vpl5ki7rk3lrwxlyofwgsf` FOREIGN KEY (`ac_fk`) REFERENCES `persona` (`id`);

--
-- Filtros para la tabla `educacion`
--
ALTER TABLE `educacion`
  ADD CONSTRAINT `FK2n9kwrgre1vb68ihjwj2irw8t` FOREIGN KEY (`ed_fk`) REFERENCES `persona` (`id`);

--
-- Filtros para la tabla `experiencia_laboral`
--
ALTER TABLE `experiencia_laboral`
  ADD CONSTRAINT `FKk8bu8b3g01dbe21yfokrx92f6` FOREIGN KEY (`ex_fk`) REFERENCES `persona` (`id`);

--
-- Filtros para la tabla `habilidades`
--
ALTER TABLE `habilidades`
  ADD CONSTRAINT `FK1drkr7fupxpkpgyde33yd5gpa` FOREIGN KEY (`sk_fk`) REFERENCES `persona` (`id`);

--
-- Filtros para la tabla `img_perfil`
--
ALTER TABLE `img_perfil`
  ADD CONSTRAINT `FK7cxcqo2bl4kxwly4jqjx47s1` FOREIGN KEY (`img_pe_fk`) REFERENCES `persona` (`id`);

--
-- Filtros para la tabla `img_portada`
--
ALTER TABLE `img_portada`
  ADD CONSTRAINT `FK9hcynly59y93gr76vap1y4ih3` FOREIGN KEY (`img_po_fk`) REFERENCES `persona` (`id`);

--
-- Filtros para la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD CONSTRAINT `FKes6svvojymjj62541j1cl1wqd` FOREIGN KEY (`pr_fk`) REFERENCES `persona` (`id`);

--
-- Filtros para la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD CONSTRAINT `FK3ftpt75ebughsiy5g03b11akt` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `FK610kvhkwcqk2pxeewur4l7bd1` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
