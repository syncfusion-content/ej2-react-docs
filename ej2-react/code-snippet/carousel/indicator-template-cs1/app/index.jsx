import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from "@syncfusion/ej2-react-navigations";
import { useState } from "react";
import ReactDom from "react-dom";

const App = () => {
  const [slides] = useState(["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"]);

  const getContent = (index) => {
    return slides[index];
  }

  const indicatorTemplate = (props) => {
    return (
      <div className="indicator" indicator-index={props.index}>
        <div className="preview-content">{getContent(props.index)}</div>
      </div>
    );
  }

  return (
    <div className="control-container">
      <CarouselComponent indicatorsTemplate={indicatorTemplate}>
        <CarouselItemsDirective>
          <CarouselItemDirective template="<div class='slide-content'>Slide 1</div>" />
          <CarouselItemDirective template="<div class='slide-content'>Slide 2</div>" />
          <CarouselItemDirective template="<div class='slide-content'>Slide 3</div>" />
          <CarouselItemDirective template="<div class='slide-content'>Slide 4</div>" />
          <CarouselItemDirective template="<div class='slide-content'>Slide 5</div>" />
        </CarouselItemsDirective>
      </CarouselComponent>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById('element'));
root.render(<App />);
