

import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective, CarouselButtonVisibility } from "@syncfusion/ej2-react-navigations";
import * as React from "react";
import * as ReactDom from "react-dom";

 function App() {
  const showButtons: CarouselButtonVisibility = "VisibleOnHover";

  return (
    <div className='control-container'>
      <CarouselComponent buttonsVisibility={showButtons}>
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
const root = ReactDom.createRoot(document.getElementById('element'));
root.render(<App />);


