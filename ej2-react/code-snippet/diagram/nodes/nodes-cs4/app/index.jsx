{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, SymbolPalette,
    SymbolPaletteComponent, } from '@syncfusion/ej2-react-diagrams';
let diagramInstance;
let node = [
  {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
  },
];
export function getBasicShapes() {
    let basicShapes = [
        {
            id: "Rectangle",
            shape: {
                type: "Basic",
                shape: "Rectangle",
            },
            height: 100,
            width: 100
        },
    ];
    return basicShapes;
}
// initialize Diagram component
function App() {
  return (
    <div  style={{width:'100%'}}>
        <div style={{float: 'left', width:'30%'}}>
         <SymbolPaletteComponent id="palette" width={'100%'} height={"700px"}
         palettes={[
            {
                id: 'basic',
                title: 'Basic Shapes',
                symbols: getBasicShapes(),
            },
        ]} 
    //Specifies the size of the symbol
    symbolHeight={80} symbolWidth={80} 
    //Sets the space to be left around a symbol
    symbolMargin={{
            left: 15,
            right: 15,
            top: 0,
            bottom: 15,
        }} />
         </div>
         <div style={{float: 'right', width:'70%'}}>
      <DiagramComponent
        id="container"
        ref={(diagram) => (diagramInstance = diagram)}
        width={'70%'}
        height={'700px'}
        nodes={node}
      />
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}