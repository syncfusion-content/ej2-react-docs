import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective, TimelineItemModel } from '@syncfusion/ej2-react-layouts';

function App() {
    
    const projectMilestones: TimelineItemModel [] = [
        { content: 'Kickoff meeting'},
        { content: 'Content approved'},
        { content: 'Design approved'},
        { content: 'Product delivered'}
    ];
    
    const getTemplate = (props: any) => {
        return (
          <div className={`template-container item-${props.itemIndex}`}>
                <div className="content-container">
                    <div className="timeline-content"> {props.item.content} </div>
                </div>
                <div className="content-connector"></div>
                <div className="progress-line">
                    <span className="indicator"></span>
                </div>
            </div>
        );
    }

    return (
        <div id='timeline'>
            <TimelineComponent cssClass='custom-timeline' template={getTemplate} orientation='Horizontal' >
                <ItemsDirective>
                    {projectMilestones.map((item, index) => {
                        return <ItemDirective key={index} content={item.content} />
                    })}
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);