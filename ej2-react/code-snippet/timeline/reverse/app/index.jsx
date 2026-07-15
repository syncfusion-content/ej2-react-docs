import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {

    const careerProgress = [
        "Graduated \n Bachelors in Computer Engineering",
        "Software Engineering Internship \n ABC Software and Technology",
        "Associate Software Engineer \n ABC Software and Technology",
        "Software Level 1 Engineer \n XYZ Solutions"
    ];

    return (
        <div id='timeline'>
            <TimelineComponent align='Before' reverse={true}>
                <ItemsDirective>
                    <ItemDirective content='June 2022' oppositeContent = {careerProgress[0]} />
                    <ItemDirective content='Aug 2022' oppositeContent = {careerProgress[1]} />
                    <ItemDirective content='Feb 2023' oppositeContent = {careerProgress[2]} />
                    <ItemDirective content='Mar 2024' oppositeContent = {careerProgress[3]} />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);