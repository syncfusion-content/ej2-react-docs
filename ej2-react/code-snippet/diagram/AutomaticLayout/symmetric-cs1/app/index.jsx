

import * as React from 'react';
import * as ReactDOM from 'react-dom';
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

// Creates an elliptical node for the symmetric layout.
function getEllipse(name) {
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
    const parentEllipse = getEllipse('p');
    nodes.push(parentEllipse);
    for (let i = 0; i < 2; i++) {
        const childEllipse_i = getEllipse('c' + i);
        nodes.push(childEllipse_i);
        for (let j = 0; j < 2; j++) {
            const childEllipse_j = getEllipse('c' + i + '-' + j);
            nodes.push(childEllipse_j);
            for (let k = 0; k < 6; k++) {
                const childEllipse_k = getEllipse('c' + i + '-' + j + '-' + k);
                nodes.push(childEllipse_k);
                connectors.push(connectNodes(childEllipse_j, childEllipse_k));
            }
            connectors.push(connectNodes(childEllipse_i, childEllipse_j));
        }
        connectors.push(connectNodes(parentEllipse, childEllipse_i));
    }
    return nodes;
}

//sets the layout child elements
populateNodes();

const layout = {
    //Sets layout type
    type: 'SymmetricalLayout',
    springLength: 80,
    springFactor: 0.8,
    maxIteration: 500,
    margin: { left: 20, top: 20 },
};

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
                layout={layout}
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

