import * as React from "react";
import { createRoot } from 'react-dom/client';
import { DiagramComponent, Inject, BpmnDiagrams, randomId } from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

let diagramInstance;
let nodes = [
    {
        id: 'event',
        offsetX: 200,
        offsetY: 200,
        width: 70,
        height: 70,
        shape: { type: 'Bpmn', shape: 'Event' },
    },
]
const addTextAnnotation = function () {
    let event = diagramInstance.nodes[0];
    let textAnnotation = {
        name: 'newAnnotation' + randomId(),
        angle: 0,
        length: 100,
        width: 100,
        height: 40,
        text: 'New Annotation',
    };
    /**
     * parameter 1 - TextAnnotation to be added
     * parameter 2 - The parent node where the text annotation will be added as a child.
     */
    diagramInstance.addTextAnnotation(textAnnotation, event);
}

const addTextAnnotationNode = function () {
    let textAnnotation = {
        id: 'textAnnotation' + randomId(),
        offsetX: 300,
        offsetY: 100,
        width: 100,
        height: 40,
        annotations: [{ content: 'Text Annotation' }],
        shape: {
            type: 'Bpmn',
            shape: 'TextAnnotation',
            textAnnotation: {
                //Parent node of text annotation
                textAnnotationTarget: 'event',
                textAnnotationDirection: 'Auto',
            },
        },
    };
    /**
     * parameter 1 - TextAnnotation to be added to the event node
     */
    diagramInstance.add(textAnnotation);
}

const addTextAnnotationAlone = function () {
    let textAnnotation = {
        id: 'textAnnotationAlone' + randomId(),
        offsetX: 300,
        offsetY: 300,
        width: 100,
        height: 70,
        annotations: [{ content: 'Text Annotation' }],
        shape: {
            type: 'Bpmn',
            shape: 'TextAnnotation',
        },
    };
    /**
     * parameter 1 - TextAnnotation to be added to diagram without parent
     */
    diagramInstance.add(textAnnotation);
}
// initialize diagram component 
function App() {
    return (<div>
        <ButtonComponent content="Add text Annotation" onClick={addTextAnnotation} />
        <ButtonComponent content="Add text Annotation Node" onClick={addTextAnnotationNode} />
        <ButtonComponent content="Add text Annotation Alone" onClick={addTextAnnotationAlone} /><DiagramComponent id="container" width={'100%'} height={'600px'} ref={(diagram) => (diagramInstance = diagram)}
            // Add node
            nodes={nodes}
        >
            <Inject services={[BpmnDiagrams]} />
        </DiagramComponent></div>);
}
const root = createRoot(document.getElementById('diagram'));
root.render(<App />);