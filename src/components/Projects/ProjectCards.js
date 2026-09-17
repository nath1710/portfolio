import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const hasFooterContent =
    props.ghLink ||
    props.demoLink ||
    props.siteLink ||
    (props.siteLinks && props.siteLinks.length > 0);

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center",
    lineHeight: "1.5",
    letterSpacing: "0.05em" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
      {hasFooterContent && (
        <Card.Footer>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: props.ghLink ? "10px" : 0 }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}

          {props.siteLink && (
            <Button variant="primary" href={props.siteLink} target="_blank">
              <CgWebsite /> &nbsp; Ver sitio
            </Button>
          )}

          {props.siteLinks &&
            props.siteLinks.map((link, index) => (
              <Button
                key={index}
                variant="primary"
                href={link.url}
                target="_blank"
                style={{ marginLeft: index > 0 ? "10px" : 0 }}
              >
                <CgWebsite /> &nbsp; {link.label}
              </Button>
            ))}
        </Card.Footer>
      )}
    </Card>
  );
}

export default ProjectCards;