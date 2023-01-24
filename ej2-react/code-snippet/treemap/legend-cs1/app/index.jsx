{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { TreeMapComponent, Inject, TreeMapLegend } from '@syncfusion/ej2-react-treemap';
class App extends React.Component {
    render() {
        return (<TreeMapComponent id='treemap' dataSource={[
                { fruit: 'Apple', count: 5000 },
                { fruit: 'Mango', count: 3000 },
                { fruit: 'Orange', count: 2300 },
                { fruit: 'Banana', count: 500 },
                { fruit: 'Grape', count: 4300 },
                { fruit: 'Papaya', count: 1200 },
                { fruit: 'Melon', count: 4500 }
            ]} weightValuePath='count' rangeColorValuePath='count' legendSettings={{
                visible: true,
                position: 'Top'
            }} leafItemSettings={{
                labelPath: 'fruit',
                colorMapping: [
                    {
                        from: 500,
                        to: 3000,
                        color: 'orange'
                    },
                    {
                        from: 3000,
                        to: 5000,
                        color: 'green'
                    }
                ]
            }}>
        <Inject services={[TreeMapLegend]}/>
    </TreeMapComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('treemap'));
{% endraw %}