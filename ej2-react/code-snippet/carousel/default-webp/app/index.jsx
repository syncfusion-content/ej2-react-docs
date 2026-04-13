import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from "@syncfusion/ej2-react-navigations";
import * as React from "react";
import * as ReactDOM from "react-dom";
const App = () => {
    return (<div className='control-container'>
      <CarouselComponent animationEffect="Fade">
        <CarouselItemsDirective>
          <CarouselItemDirective template='<figure class="img-container"><img src="https://www.gstatic.com/webp/gallery/1.webp" alt="Majestic Valley View" style="height:100%;width:100%;" /><figcaption class="img-caption">Majestic Valley View</figcaption></figure>'/>
          <CarouselItemDirective template='<figure class="img-container"><img src="https://www.gstatic.com/webp/gallery/2.webp" alt="Thrilling Rapids Adventure" style="height:100%;width:100%;" /><figcaption class="img-caption">Thrilling Rapids Adventure</figcaption></figure>'/>
          <CarouselItemDirective template='<figure class="img-container"><img src="https://www.gstatic.com/webp/gallery/3.webp" alt="Snowy Stroll" style="height:100%;width:100%;" /><figcaption class="img-caption">Snowy Stroll</figcaption></figure>'/>
        </CarouselItemsDirective>
      </CarouselComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
