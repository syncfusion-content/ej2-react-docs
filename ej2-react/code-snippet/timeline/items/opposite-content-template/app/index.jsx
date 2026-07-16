import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    const items = [
        { content: 'Breakfast', time: '8:00 AM', label: 'Morning' },
        { content: 'Lunch', time: '1:00 PM', label: 'Afternoon' },
        { content: 'Snacks', time: '4:30 PM', label: 'Evening' },
        { content: 'Dinner', time: '8:00 PM', label: 'Night' }
    ];

    const oppositeTemplate = (data) => (
        <div className="opposite-container">
            <span className="time">{data.time}</span>
            <span className="label">{data.label}</span>
        </div>
    );

    return (
        <div id='timeline'>
            <TimelineComponent>
                <ItemsDirective>
                    {items.map((item, index) => (
                        <ItemDirective
                            key={index}
                            content={item.content}
                            oppositeContent={() => oppositeTemplate(item)}
                        />
                    ))}
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
const root = ReactDOM.createRoot(
  document.getElementById('element')
);
root.render(<App />);
