import { CarouselComponent } from "@syncfusion/ej2-react-navigations";
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    function itemTemplate(props) {
        return <figure className="img-container"><img src={"https://ej2.syncfusion.com/products/images/carousel/" + props.imageName + ".png"} alt={props.Name} style={{ height: "100%", width: "100%" }}/><figcaption className="img-caption">{props.Name}</figcaption></figure>;
    }
    const productItems = [
        { ID: 1, Name: "Cardinal", imageName: 'cardinal' },
        { ID: 2, Name: "Kingfisher", imageName: 'hunei' },
        { ID: 3, Name: "Keel-billed-toucan", imageName: 'costa-rica' },
        { ID: 4, Name: "Yellow-warbler", imageName: 'kaohsiung' },
        { ID: 5, Name: "Bee-eater", imageName: 'bee-eater' }
    ];
    return (<div className='control-container'>
      <CarouselComponent dataSource={productItems} itemTemplate={itemTemplate}></CarouselComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);