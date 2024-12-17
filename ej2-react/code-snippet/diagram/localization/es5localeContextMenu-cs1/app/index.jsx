{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent,DiagramContextMenu,Diagram } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(DiagramContextMenu);
import { L10n, setCulture } from '@syncfusion/ej2-base';
setCulture('de');

L10n.load({
  'de-DE': {
    diagram: {
      Cut: 'Corte',
      Copy: 'Copia',
      Paste: 'Pasta',
      Undo: 'Deshacer',
      Redo: 'Rehacer',
      SelectAll: 'Seleccionar todo',
      Grouping: 'Agrupación',
      Group: 'Grupo',
      Ungroup: 'Desagrupar',
      Order: 'Fin',
      BringToFront: 'Traer a delante',
      MoveForward: 'Movimiento adelante',
      SendToBack: 'Enviar a espalda',
      SendBackward: 'Enviar hacia atrás',
    },
  },
});
let node = [
    {
      id: 'Node1',
      offsetX: 300,
      offsetY: 288,
      annotations: [{ content: 'Node1' }],
    },
    {
      id: 'Node2',
      offsetX: 150,
      offsetY: 250,
      annotations: [{ content: 'Node2' }],
    },
  ];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
    locale='de-DE'
     //Enables the context menu
     contextMenuSettings={{
        show: true
    }}
    nodes={node}
    getNodeDefaults={(node) => {
        node.width = 100;
        node.height = 100;
        node.shape = { type: 'Basic', shape: 'Ellipse' };
    }}
    />);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}