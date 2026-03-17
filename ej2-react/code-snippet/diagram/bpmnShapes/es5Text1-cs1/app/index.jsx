{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent,Diagram,BpmnDiagrams, DiagramComponent} from "@syncfusion/ej2-react-diagrams";

Diagram.Inject(BpmnDiagrams);
SymbolPaletteComponent.Inject(BpmnDiagrams);
//Initialize the basicshapes for the symbol palette
export function getBPMNShapes() {
    let bpmnShapes = [
        {
            id: 'Start',
            width: 35,
            height: 35,
            shape: {
              type: 'Bpmn',
              shape: 'Event',
              event: { event: 'Start' },
            },
          },
          {
            id: 'Gateway',
            width: 35,
            height: 35,
            offsetX: 100,
            offsetY: 100,
            shape: {
              type: 'Bpmn',
              shape: 'Gateway',
              gateway: { type: 'Exclusive' }
            },
          },
          {
            id: 'DataObject',
            width: 35,
            height: 35,
            offsetX: 500,
            offsetY: 100,
            shape: {
              type: 'Bpmn',
              shape: 'DataObject',
              dataObject: { collection: false, type: 'None' },
            },
          },
          {
            id: 'textAnnotation',
            width: 35,
            height: 35,
            shape: {
              type: 'Bpmn',
              shape: 'TextAnnotation',
            },
            annotations: [{ content: 'textAnnotation' }],
          },
    ];
    return bpmnShapes;
}
//Initializes the symbol palette
function App() {
    return (
        <div style={{ width: '100%' }}>
            <div id="palette-space" className="sb-mobile-palette">
            <SymbolPaletteComponent
                id="container"
                palettes={[
                {
                    id: 'uml',
                    expanded: true,
                    symbols: getBPMNShapes(),
                    title: 'BPMN Shapes',
                },
                ]}
                symbolHeight={80}
                symbolWidth={80}
                getNodeDefaults={(symbol) => {
                symbol.width = 100;
                symbol.height = 100;
                }}
                //Sets the margin of the dragging helper relative to the mouse cursor
                symbolMargin={{
                left: 12,
                right: 12,
                top: 12,
                bottom: 12,
                }}
                getSymbolInfo={(symbol) => {
                //Defines the symbol description
                return { fit: true, description: { text: symbol.id } };
                }}
            />
            </div>
            <div id="diagram-space" className="sb-mobile-diagram">
            <DiagramComponent
                id="diagram"
                width={'800px'}
                height={'445px'}
            ></DiagramComponent>
            </div>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}