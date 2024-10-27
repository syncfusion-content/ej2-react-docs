
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { DiagramComponent, Inject, SymmetricLayout } from '@syncfusion/ej2-react-diagrams';


//Initialize nodes 
let nodes = [];

//Initializes connectors
let connectors = [];

// creating the connection between the layout nodes and connectors.
function connectNodes(parentNode, childNode) {
    const connector = {
        id: parentNode.id + childNode.id,
        sourceID: parentNode.id,
        targetID: childNode.id,
        targetDecorator: { shape: 'None' },
    };
    return connector;
}

// creating the layout nodes as rectangle in shape.
function getRectangle(name) {
    const shape = { type: 'Basic', shape: 'Ellipse' };
    const node = {
        id: name,
        height: 25,
        width: 25,
        style: { fill: '#ff6329' },
        shape: shape,
    };
    return node;
}

// creating the symmetrical layout child elements hierarchy.
function populateNodes() {
    const parentRect = getRectangle('p');
    nodes.push(parentRect);
    for (let i = 0; i < 2; i++) {
        const childRect_i = getRectangle('c' + i);
        nodes.push(childRect_i);
        for (let j = 0; j < 2; j++) {
            const childRect_j = getRectangle('c' + i + j);
            nodes.push(childRect_j);
            for (let k = 0; k < 6; k++) {
                const childRect_k = getRectangle('c' + i + j + k);
                nodes.push(childRect_k);
                connectors.push(connectNodes(childRect_j, childRect_k));
            }
            connectors.push(connectNodes(childRect_i, childRect_j));
        }
        connectors.push(connectNodes(parentRect, childRect_i));
    }
    return nodes;
}

//sets the layout child elements
populateNodes();

export default function App() {

    return (
        <div>
            <DiagramComponent
                id="container"
                width={'80%'}
                height={'550px'}
                nodes={nodes}
                connectors={connectors}

                //Uses layout to auto-arrange nodes on the diagram page
                layout={{
                    //Sets layout type
                    type: 'SymmetricalLayout',
                    springLength: 80,
                    springFactor: 0.8,
                    maxIteration: 500,
                    margin: { left: 20, top: 20 },
                }}
            >

                {/* Inject necessary services for the diagram */}
                <Inject services={[SymmetricLayout]} />
            </DiagramComponent>

        </div>
    );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
