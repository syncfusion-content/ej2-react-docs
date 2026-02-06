{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, HierarchicalTree, LayoutAnimation } from '@syncfusion/ej2-react-diagrams';


//Initialize nodes 
let nodes = [
    {
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
        annotations: [{ content: 'Node1' }],
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        expandIcon: {
            shape: 'ArrowDown',
            width: 20,
            height: 15,
        },
        collapseIcon: {
            shape: 'ArrowUp',
            width: 20,
            height: 15,
        },
    },
    {
        id: 'Init',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 140,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: 'Node2' }],
    },
    {
        id: 'Init2',
        width: 140,
        height: 50,
        offsetX: 100,
        offsetY: 140,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: 'Node3' }],
    },
    {
        id: 'Init3',
        width: 140,
        height: 50,
        offsetX: 150,
        offsetY: 140,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: 'Node4' }],
    }
];

//Initializes connectors
let connectors = [
    {
        id: 'connector1',
        sourceID: 'Start',
        targetID: 'Init',
        type: 'Orthogonal',
    },
    {
        id: 'connector2',
        sourceID: 'Start',
        targetID: 'Init2',
        type: 'Orthogonal',
    },
    {
        id: 'connector3',
        sourceID: 'Init2',
        targetID: 'Init3',
        type: 'Orthogonal',
    }
];

export default function App() {
    let diagramInstance;

    // Function to handle animation state changes
    function animationComplete() {
        console.log('Animation complete');
        diagramInstance.nodes[0].style.fill =
            diagramInstance.nodes[0].style.fill === '#6BA5D7' ? 'red' : '#6BA5D7';
        diagramInstance.dataBind();

        //customize
    }
    return (
        <div>
            <DiagramComponent
                id="container"
                width={'80%'}
                height={'550px'}
                nodes={nodes}
                connectors={connectors}
                ref={(diagram) => (diagramInstance = diagram)}
                // Event Triggers when animation complete
                animationComplete={animationComplete}
                //Uses layout to auto-arrange nodes on the diagram page
                layout={{
                    //Sets layout type
                    type: 'HierarchicalTree',
                }}
            >

                {/* Inject necessary services for the diagram */}
                <Inject services={[LayoutAnimation, HierarchicalTree]} />
            </DiagramComponent>

        </div>
    );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}