{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';
import './index.css'

function App() {

    const projectMilestones = [
        { content: 'Kickoff meeting'},
        { content: 'Content approved'},
        { content: 'Design approved'},
        { content: 'Product delivered'}
    ];

    const getTemplate = (props) => {
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
        <div id='timeline' style={{ height: "150px", width: "600px", margin: '50px auto' }}>
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
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
