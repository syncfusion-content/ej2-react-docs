{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRef, useEffect, useState } from "react";
import { DiagramComponent, NodeModel, Inject, UndoRedo } from "@syncfusion/ej2-react-diagrams";

const App = () => {
  const diagramRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const nodes: NodeModel[] = [
    {
      // Position of the node
      offsetX: 250,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      annotations: [
        {
          content: "Node",
        },
      ],
    },
  ];

  useEffect(() => {
    const diagram = diagramRef.current;
    if (diagram) {
      diagram.historyChange = () => {
        setCanUndo(diagram.historyManager.canUndo);
        setCanRedo(diagram.historyManager.canRedo);
      };
    }
  }, []);

  const handleUndo = () => {
    diagramRef.current?.undo();
  };

  const handleRedo = () => {
    diagramRef.current?.redo();
  };

  return (
    <div>
      <button onClick={handleUndo} disabled={!canUndo}>
        Undo
      </button>
      <button onClick={handleRedo} disabled={!canRedo}>
        Redo
      </button>
      <DiagramComponent
        id="container"
        ref={diagramRef}
        width="100%"
        height="600px"
        nodes={nodes}
      >
        <Inject services={[UndoRedo]} />
      </DiagramComponent>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
{% endraw %}