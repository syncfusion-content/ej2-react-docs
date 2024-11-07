{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Keys,NodeModel, KeyModifiers } from "@syncfusion/ej2-react-diagrams";
let diagramInstance:DiagramComponent;
// Initializes the nodes
let node:NodeModel[] = [
    {
        id: 'node1',
        offsetX: 100,
        offsetY: 100,
        width: 70,
        height: 40,
        style: { fill: '#64abbb' },
    },
];

// Initializes the Diagram component
function App() {
    return (

        <DiagramComponent
            id="diagram1"
            ref={(diagram) => (diagramInstance = diagram)}
            width={'650px'}
            height={'350px'}
            nodes={node}
            commandManager={{
                commands: [
                    {
                        //Preventing default cut command
                        name: 'cut',
                        canExecute: function () {
                            return false;
                        },
                        execute: null,
                        gesture: {
                            key: Keys.X,
                            keyModifiers: KeyModifiers.Control,
                        },
                    },
                    {
                        //Preventing default delete command
                        name: 'delete',
                        canExecute: function () {
                            return false;
                        },
                        execute: null,
                        gesture: {
                            key: Keys.Delete,
                        },
                    },
                    {
                        //Modifying copy command to clone node
                        name: 'clone',
                        canExecute: function () {
                            let execute = diagramInstance.selectedItems.nodes.length > 0;
                            return execute;
                        },
                        execute: function () {
                            diagramInstance.copy();
                            diagramInstance.paste();
                        },
                        gesture: {
                            //Press CTRL+C to clone node
                            key: Keys.C,
                            keyModifiers: KeyModifiers.Control,
                        },
                    },
                ],
            }}
        />
    );
}

const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}