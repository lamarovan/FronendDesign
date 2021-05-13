import Carousel from "react-bootstrap/Carousel";

import "./contentSlider.scss";

export default function ContentSlider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block h-100 w-50"
          src="https://preview.redd.it/ht2t4bd7mby61.jpg?width=640&crop=smart&auto=webp&s=0479f271bbcb095789ffd375d50ab2e7c1cb90a5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://preview.redd.it/64lte2296by61.jpg?width=640&crop=smart&auto=webp&s=2d73a1f13c87b62500d687e10a08f0e483768ea0"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://preview.redd.it/oh95ijukz1y61.jpg?width=640&crop=smart&auto=webp&s=bf6d502845551e29a5384e67749eb30b0c52ec74"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
