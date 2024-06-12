{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    
  const templateContents = [
    { title: 'Shipped', description: 'Package details received', info: '- Awaiting dispatch' },
    { title: 'Departed', description: 'In-transit', info: '(International warehouse)' },
    { title: 'Arrived', description: 'Package arrived at nearest hub', info: '(New york - US)' }
];

const contentTemplate = (data: any) => (
  <div className="content-container">
      <div className="title">
          {data.title}
      </div>
      <span className="description">
          {data.description}
      </span>
      <div className="info">
          {data.info}
      </div>
  </div>
);

return (
  <div className="container" style={{ height: '330px', marginTop: '30px' }}>
      <TimelineComponent id="timeline">
          <ItemsDirective>
              {templateContents.map((item, index) => (
                  <ItemDirective key={index} content={() => contentTemplate(item)}/>
              ))}
              <ItemDirective content="Out for Delivery" />
          </ItemsDirective>
      </TimelineComponent>
  </div>
);

}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
