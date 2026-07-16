import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    
  const templateContents = [
    { title: 'Shipped', description: 'Package details received', info: '- Awaiting dispatch' },
    { title: 'Departed', description: 'In-transit', info: '(International warehouse)' },
    { title: 'Arrived', description: 'Package arrived at nearest hub', info: '(New York - US)' }
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
  <div className="container">
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
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
