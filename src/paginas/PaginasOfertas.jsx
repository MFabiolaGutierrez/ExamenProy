import { useState } from 'react';
import imagen1 from '../img/tinku.jpg'
import imagen2 from '../img/cueca.jpg'
import imagen3 from '../img/chovena.jpg'
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
            <img alt="Tinku" src={imagen1} height="200" style={{ objectFit: 'cover' }} />
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
            <img alt="Cueca" src={imagen2} height="200" style={{ objectFit: 'cover' }} />
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
            <img alt="Chovena" src={imagen3} height="200" style={{ objectFit: 'cover' }} />
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
