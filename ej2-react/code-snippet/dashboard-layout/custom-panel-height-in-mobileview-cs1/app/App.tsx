import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';
function App() {
    const cellSpacing: number[] = [20, 20];
    let mediaQuery: string = 'max-width: 700px';
    let panels: any = [
        {
            sizeX: 1,
            sizeY: 1,
            row: 0,
            col: 0,
            content: '<div class="content">0</div>',
            mobilePanelHeight: 0.25
        },
        {
            sizeX: 1,
            sizeY: 1,
            row: 0,
            col: 1,
            content: '<div class="content">1</div>',
            mobilePanelHeight: 0.5
        },
        {
            sizeX: 1,
            sizeY: 1,
            row: 1,
            col: 0,
            content: '<div class="content">2</div>',
            mobilePanelHeight: 0.75
        },
        {
            sizeX: 1,
            sizeY: 1,
            row: 2,
            col: 0,
            content: '<div class="content">3</div>',
            mobilePanelHeight: 1
        },
    ];
    return (<div>
            <div id='container'>
                <DashboardLayoutComponent id='defaultLayout' columns={5} cellSpacing={cellSpacing} panels={panels} mediaQuery={mediaQuery}/>
            </div>
        </div>);
}
export default App;
