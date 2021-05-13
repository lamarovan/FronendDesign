import Header from "./component/header/Header";
import ContentSlider from "./component/slider/ContentSlider";
import Gallery from "./component/gallery/Gallery";
import Testimonial from "./component/testimonial/Testimonial";
import ContactForm from "./component/form/ContactForm";
// import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentSlider />
      <Gallery />
      <Testimonial />
      <ContactForm />
    </div>
  );
}

export default App;
