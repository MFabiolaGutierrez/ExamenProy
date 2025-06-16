import { useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col
} from 'reactstrap';


export default function PaginasOfertas() {
  const [modal, setModal] = useState(false);
  const [precio, setPrecio] = useState("");

  const toggle = () => setModal(!modal);

  const verPrecio = (valor) => {
    setPrecio(valor);
    setModal(true);
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4 text-danger fw-bold">Oferta de Cursos</h2>
      <Row className="gy-4 justify-content-center">

        <Col xs="12" md="6" lg="4">
          <Card>
            <img alt="Tinku" src="https://www.google.com/imgres?q=tinku&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FBailarin_de_Tinku_en_Bolivia.jpg%2F2560px-Bailarin_de_Tinku_en_Bolivia.jpg&imgrefurl=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3ABailarin_de_Tinku_en_Bolivia.jpg&docid=7fYxWaYP0RyqvM&tbnid=DGIi6mp0afUsCM&vet=12ahUKEwj6poa87PSNAxXjALkGHa7VDJYQM3oECEgQAA..i&w=2560&h=2048&hcb=2&ved=2ahUKEwj6poa87PSNAxXjALkGHa7VDJYQM3oECEgQAA" height="200" style={{ objectFit: 'cover' }} />
            <CardBody>
              <CardTitle tag="h5">Tinku</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">Potosí</CardSubtitle>
              <CardText>Danza ritual de combate originaria de Potosí.</CardText>
              <Button color="danger" onClick={() => verPrecio("$100")}>Ver Precio</Button>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" md="6" lg="4">
          <Card>
            <img alt="Cueca" src="src/img/cueca.jpg" height="200" style={{ objectFit: 'cover' }} />
            <CardBody>
              <CardTitle tag="h5">Cueca</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">Valles Bolivianos</CardSubtitle>
              <CardText>Danza romántica tradicional de los valles bolivianos.</CardText>
              <Button color="danger" onClick={() => verPrecio("$90")}>Ver Precio</Button>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" md="6" lg="4">
          <Card>
            <img alt="Chovena" src="src/img/chovena.jpg" height="200" style={{ objectFit: 'cover' }} />
            <CardBody>
              <CardTitle tag="h5">Chovena</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">Oriente Boliviano</CardSubtitle>
              <CardText>Danza alegre y festiva de los pueblos del oriente boliviano.</CardText>
              <Button color="danger" onClick={() => verPrecio("$85")}>Ver Precio</Button>
            </CardBody>
          </Card>
        </Col>

      </Row>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Precio del curso</ModalHeader>
        <ModalBody>
          El precio del curso es: <strong>{precio}</strong>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}
