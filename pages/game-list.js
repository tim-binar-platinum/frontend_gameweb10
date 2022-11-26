/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-duplicates */
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Link from "next/link";
import Image from "next/image";
import Gallery1 from "../public/image/suit.jpg";
import Gallery2 from "../public/image/coming-soon.jpg";
import Gallery3 from "../public/image/coming-soon.jpg";
import Gallery4 from "../public/image/coming-soon.jpg";
import Gallery5 from "../public/image/coming-soon.jpg";
import Gallery6 from "../public/image/coming-soon.jpg";

function Gallery() {
  return (
    <div className="gallery min-vh-100 d-flex align-items-center" id="gallery">
      <Container>
        <Row
          className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4"
          data-aos="fade-right"
        >
          <Col>
            <Link href="/game-suit">
              <Image
                src={Gallery1}
                alt="game suit"
                className="w-100"
                height={200}
              />
              <p className="text-center fw-bold">Rock Paper Scisor</p>
            </Link>
          </Col>
          <Col>
            <Image
              src={Gallery2}
              alt="coming-soon"
              className="w-100"
              height={200}
            />
            <p className="text-center fw-bold">Coming Soon</p>
          </Col>
          <Col>
            <Image
              src={Gallery4}
              alt="coming-soon"
              className="w-100"
              height={200}
            />
            <p className="text-center fw-bold">Coming Soon</p>
          </Col>
          <Col>
            <Image
              src={Gallery5}
              alt="coming-soon"
              className="w-100"
              height={200}
            />
            <p className="text-center fw-bold">Coming Soon</p>
          </Col>
          <Col>
            <Image
              src={Gallery6}
              alt="coming-soon"
              className="w-100"
              height={200}
            />
            <p className="text-center fw-bold">Coming Soon</p>
          </Col>
          <Col>
            <Image
              src={Gallery3}
              alt="coming-soon"
              className="w-100"
              height={200}
            />
            <p className="text-center fw-bold">Coming Soon</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Gallery;
