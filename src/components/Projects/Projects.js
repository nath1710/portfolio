import React from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import authentication from "../../Assets/Projects/authenticationSystem.png";
import formcreditcard from "../../Assets/Projects/html5form.png";
import randomcard from "../../Assets/Projects/randomcard.png";
import rockpaperscissors from "../../Assets/Projects/rockpaperscissors.png";
import starwarsBlog from "../../Assets/Projects/starwarsBlog.png";
import todolist from "../../Assets/Projects/todolist.png";
import mazda from "../../Assets/Projects/Mazda-2026.png";
import chery from "../../Assets/Projects/Chery-2026.png";
import dongfeng from "../../Assets/Projects/Dongfeng-2026.png";
import fiat from "../../Assets/Projects/Fiat-2026.png";
import jeep from "../../Assets/Projects/Jeep-2026.png";
import ram from "../../Assets/Projects/Ram-2026.png";
import lavca from "../../Assets/Projects/Lavca-2026.png";
import prizma from "../../Assets/Projects/Prizma-2026.png";
import stablix from "../../Assets/Projects/stablix-2026.png";
import combia from "../../Assets/Projects/combia-2026.png";
import sampi from "../../Assets/Projects/sampi-2026.png";
import pacs from "../../Assets/Projects/Pacs-2026.png";
import geosCore from "../../Assets/Projects/Geos-2026.png";
import hidrochem from "../../Assets/Projects/hidrochem-2026.png";
import cursosSerimagenes from "../../Assets/Projects/cursos-2026.png";
import ecoa from "../../Assets/Projects/ecoa-2026.png";
import cfi from "../../Assets/Projects/CFI-2026.png";

const professionalProjects = [
  {
    imgPath: prizma,
    title: "Prizmapay",
    description:
      "Landing page de Prizmapay. Participé como desarrolladora Front-End y Back-End en su desarrollo.",
    siteLink: "https://www.prizmapay.com/",
  },
  {
    imgPath: stablix,
    title: "Stablix",
    description:
      "Landing page de Stablix. Participé como desarrolladora Front-End y Back-End en su desarrollo.",
    siteLink: "https://www.stablix.co/",
  },
  {
    imgPath: combia,
    title: "Combia",
    description:
      "Plataforma Combia. Participé como desarrolladora Front-End y Back-End en su desarrollo.",
    siteLink: "https://combia.humath.co/auth",
  },
  {
    imgPath: sampi,
    title: "Sampi Suite",
    description:
      "Plataforma Sampi Suite. Participé como desarrolladora Front-End y Back-End en su desarrollo.",
    siteLink: "https://sampisuite.com/",
  },
  {
    imgPath: pacs,
    title: "PACS",
    description:
      "Sistema PACS para gestión de imágenes médicas. Participé como desarrolladora Front-End y Back-End en su desarrollo.",
    siteLink: "https://pacs.humath.co/login",
  },
  {
    imgPath: geosCore,
    title: "Geos Core",
    description:
      "Plataforma Geos Core para Geosingeniería. Participé como desarrolladora Front-End y Back-End en su desarrollo.",
    siteLink: "https://black-stone-06b92270f.2.azurestaticapps.net/login",
  },
  {
    imgPath: hidrochem,
    title: "Hidrochem",
    description:
      "Plataforma Hidrochem. Participé como desarrolladora Front-End y Back-End en su desarrollo.",
    siteLink: "https://calm-dune-09447fc0f.7.azurestaticapps.net/auth",
  },
  {
    imgPath: cursosSerimagenes,
    title: "Cursos Serimágenes",
    description:
      "Plataforma de cursos en línea para Serimágenes. Participé como desarrolladora Front-End y Back-End en su desarrollo.",
    siteLink: "https://cursos.serimagenes.com/",
  },
  {
    imgPath: ecoa,
    title: "Ecoa",
    description:
      "Sistema Ecoa con portal para médicos y portal para pacientes. Participé como desarrolladora Front-End y Back-End en su desarrollo, cubriendo ambos flujos de usuario.",
    siteLinks: [
      { label: "Portal médicos", url: "https://ecoaepro-medicos.humath.co/" },
      { label: "Portal pacientes", url: "https://ecoaepro-pacientes.humath.co/" },
    ],
  },
  {
    imgPath: cfi,
    title: "CFI",
    description:
      "Aplicación de escritorio privada desarrollada para una empresa de manejo de drones. Participé como desarrolladora Front-End y Back-End. Al ser un sistema privado de uso interno, no cuenta con un enlace público.",
  },
  {
    imgPath: mazda,
    title: "Mazda Ecuador",
    description:
      "Sitio web oficial de Mazda Ecuador. Participé como desarrolladora Front-End y Back-End, contribuyendo a su mantenimiento y evolución durante el tiempo que trabajé con la marca.",
    siteLink: "https://www.mazda.com.ec/",
  },
  {
    imgPath: chery,
    title: "Chery Ecuador",
    description:
      "Sitio web oficial de Chery Ecuador. Participé como desarrolladora Front-End y Back-End, contribuyendo a su mantenimiento y evolución durante el tiempo que trabajé con la marca.",
    siteLink: "https://www.chery.com.ec/",
  },
  {
    imgPath: dongfeng,
    title: "Dongfeng Ecuador",
    description:
      "Sitio web oficial de Dongfeng Ecuador. Participé como desarrolladora Front-End y Back-End, contribuyendo a su mantenimiento y evolución durante el tiempo que trabajé con la marca.",
    siteLink: "https://dongfeng.ec/",
  },
  {
    imgPath: fiat,
    title: "Fiat Ecuador",
    description:
      "Sitio web oficial de Fiat Ecuador. Participé como desarrolladora Front-End y Back-End, contribuyendo a su mantenimiento y evolución durante el tiempo que trabajé con la marca.",
    siteLink: "https://www.fiat.ec/",
  },
  {
    imgPath: jeep,
    title: "Jeep Ecuador",
    description:
      "Sitio web oficial de Jeep Ecuador. Participé como desarrolladora Front-End y Back-End, contribuyendo a su mantenimiento y evolución durante el tiempo que trabajé con la marca.",
    siteLink: "https://www.jeep.com/ec/index.html",
  },
  {
    imgPath: ram,
    title: "RAM Ecuador",
    description:
      "Sitio web oficial de RAM Ecuador. Participé como desarrolladora Front-End y Back-End, contribuyendo a su mantenimiento y evolución durante el tiempo que trabajé con la marca.",
    siteLink: "https://www.ram.com/ec/",
  },
  {
    imgPath: lavca,
    title: "Lavca",
    description:
      "Sitio web oficial de Lavca. Participé como desarrolladora Front-End y Back-End, contribuyendo a su mantenimiento y evolución durante el tiempo que trabajé con la empresa.",
    siteLink: "https://www.lavca.com.ec/",
  },
];

const personalProjects = [
  {
    imgPath: rockpaperscissors,
    title: "Rock, Paper, Scissors",
    description:
      "Desarrollo de un juego de piedra, papel o tijera con diseño responsive, incluye efectos de sonido para indicar victorias o derrotas y un botón para reiniciar la partida.",
    ghLink: "https://github.com/Nath1710/Rock-paper-scissors",
  },
  {
    imgPath: authentication,
    title: "Authentication System",
    description:
      "Implementación de un sistema de autenticación en cuatro pasos: registro, inicio y cierre de sesión, y validación de token, utilizando renderizados condicionales y aplicando autorización adecuada con controles de acceso efectivos.",
    ghLink:
      "https://github.com/Nath1710/Natalycastaneda_latampt36_AuthenticationsystemwithPythonFlaskandReact.js",
  },
  {
    imgPath: starwarsBlog,
    title: "Star Wars Blog",
    description:
      "Se desarrolló una aplicación web con React que consume datos de la API SWAPI.tech para mostrar información sobre personajes, vehículos y planetas del universo de Star Wars. La aplicación tiene como objetivo practicar el uso de fetch, enrutamiento con React Router, y Context API, priorizando un diseño simple y funcional.",
    ghLink:
      "https://github.com/Nath1710/NatalyCastaneda-Latam-pt-36-Starwarsblogreadinglist",
  },
  {
    imgPath: todolist,
    title: "Todolist",
    description:
      "Desarrollo de una aplicación de lista de tareas (TODO List) sincronizada con una API de backend. La lista se actualiza automáticamente al agregar o eliminar tareas, y cuenta con un botón de limpieza que elimina todas las tareas en el front-end.",
    ghLink:
      "https://github.com/Nath1710/NatalyCastaneda_latam36_TodolistApplicationwithFetch",
  },
  {
    imgPath: formcreditcard,
    title: "Create a HTML5 form",
    description:
      "Este proyecto tiene como objetivo el aprendizaje y la implementación de un formulario HTML5 responsivo, donde se han incorporado funciones en JavaScript para validar y manejar la interacción del usuario. El formulario está diseñado para recibir datos relacionados con tarjetas de crédito y pagos, proporcionando una experiencia interactiva a través de validaciones y mensajes personalizados.",
    ghLink: "https://github.com/Nath1710/Create-a-HTML5-form",
  },
  {
    imgPath: randomcard,
    title: "Random Card Generator",
    description:
      "Desarrollo de un generador de cartas aleatorias que muestra una nueva carta con palo y valor al actualizarse. Incluye un botón para generar cartas manualmente, un temporizador automático cada 10 segundos y opciones para personalizar el tamaño de la carta.",
    ghLink:
      "https://github.com/Nath1710/NatalyCastaneda-latam36-RandomCardGenerator-",
  },
];

function ProjectGrid({ projects }) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {projects.map((project, index) => (
        <Col md={4} className="project-card" key={index}>
          <ProjectCard isBlog={false} {...project} />
        </Col>
      ))}
    </Row>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">proyectos</strong>
        </h1>

        <Tabs
          defaultActiveKey="professional"
          id="projects-tabs"
          className="project-tabs"
          justify
        >
          <Tab eventKey="professional" title="Proyectos profesionales">
            <p style={{ color: "white", paddingTop: "20px" }}>
              Sitios web oficiales de empresas en los que trabajé como
              desarrolladora Front-End y Back-End, siendo parte de su proceso
              de crecimiento durante el tiempo que colaboré con ellas.
            </p>
            <ProjectGrid projects={professionalProjects} />
          </Tab>

          <Tab eventKey="personal" title="Proyectos personales">
            <p style={{ color: "white", paddingTop: "20px" }}>
              Proyectos de práctica en los que he trabajado recientemente.
            </p>
            <ProjectGrid projects={personalProjects} />
          </Tab>
        </Tabs>
      </Container>
    </Container>
  );
}

export default Projects;
