

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, HierarchicalTree } from '@syncfusion/ej2-react-diagrams';


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
];

//Initializes connectors
let connectors = [{
    id: 'connector1',
    sourceID: 'Start',
    targetID: 'Init',
    type: 'Orthogonal',
}];

export default function App() {

    // Function expand/collapse state changes
    function expandStateChange(args) {
        //We can get the expanded or collapsed state in args
        console.log('Expanded ' + args.state);
    }
    return (
        <div>
            <DiagramComponent
                id="container"
                width={'100%'}
                height={'550px'}
                nodes={nodes}
                connectors={connectors}
                // Event Triggers when the state of the expand and collapse icon change
                expandStateChange={expandStateChange}
                //Uses layout to auto-arrange nodes on the diagram page
                layout={{
                    //Sets layout type
                    type: 'HierarchicalTree',
                }}
            >

                {/* Inject necessary services for the diagram */}
                <Inject services={[HierarchicalTree]} />
            </DiagramComponent>

        </div>
    );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

