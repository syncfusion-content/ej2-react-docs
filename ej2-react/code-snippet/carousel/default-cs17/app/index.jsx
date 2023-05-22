import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { useRef } from "react";
import * as ReactDOM from "react-dom";

const App = () => {
  const carouselRef = useRef<CarouselComponent>(null);
  const prevBtnClick = () => {
    carouselRef.current.prev();
  }

  const nextBtnClick = () => {
    carouselRef.current.next();
  }

  return (
    <div>
      <ButtonComponent className="e-btn" cssClass="e-info" onClick={prevBtnClick}>Previous</ButtonComponent>
      <ButtonComponent className="e-btn" cssClass="e-info" onClick={nextBtnClick}>Next</ButtonComponent>
      <div className='control-container'>
        <CarouselComponent ref={carouselRef}>
          <CarouselItemsDirective>
            <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/cardinal.png" alt="cardinal" style="height:100%;width:100%;" /><figcaption class="img-caption">Cardinal</figcaption></figure>' />
            <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/hunei.png" alt="kingfisher" style="height:100%;width:100%;" /><figcaption class="img-caption">Kingfisher</figcaption></figure>' />
            <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png" alt="keel-billed-toucan" style="height:100%;width:100%;" /><figcaption class="img-caption">Keel-billed-toucan</figcaption></figure>' />
            <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png" alt="yellow-warbler" style="height:100%;width:100%;" /><figcaption class="img-caption">Yellow-warbler</figcaption></figure>' />
            <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png" alt="bee-eater" style="height:100%;width:100%;" /><figcaption class="img-caption">Bee-eater</figcaption></figure>' />
          </CarouselItemsDirective>
        </CarouselComponent>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
