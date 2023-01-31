

import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
  const btnClick = (): void => {
    let buttonObj = (document.querySelector(".playBtn") as any).ej2_instances[0];
    let carouselObj = (document.querySelector(".e-carousel") as any).ej2_instances[0];
    if (carouselObj.autoPlay) {
      buttonObj.content = "Play";
      carouselObj.autoPlay = false;
    } else {
      buttonObj.content = "Pause";
      carouselObj.autoPlay = true;
    }
  }

  function playButtonTemplate(props: any): JSX.Element {
    return (<ButtonComponent className="e-btn" cssClass="e-info playBtn" content="Pause" onClick={btnClick} />);
  }

  return (
    <div className='control-container'>
      <CarouselComponent showPlayButton={true} playButtonTemplate={playButtonTemplate}>
        <CarouselItemsDirective>
          <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/cardinal.png" alt="cardinal" style="height:100%;width:100%;" /><figcaption class="img-caption">Cardinal</figcaption></figure>' />
          <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/hunei.png" alt="kingfisher" style="height:100%;width:100%;" /><figcaption class="img-caption">Kingfisher</figcaption></figure>' />
          <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png" alt="keel-billed-toucan" style="height:100%;width:100%;" /><figcaption class="img-caption">Keel-billed-toucan</figcaption></figure>' />
          <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png" alt="yellow-warbler" style="height:100%;width:100%;" /><figcaption class="img-caption">Yellow-warbler</figcaption></figure>' />
          <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png" alt="bee-eater" style="height:100%;width:100%;" /><figcaption class="img-caption">Bee-eater</figcaption></figure>' />
        </CarouselItemsDirective>
      </CarouselComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);


