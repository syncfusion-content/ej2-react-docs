{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
function App() {
    // Data source for TreeView component
    let continents = [
        {
            code: "AF", name: "Africa", countries: [
                { code: "NGA", name: "Nigeria" },
                { code: "EGY", name: "Egypt" },
                { code: "ZAF", name: "South Africa" }
            ]
        },
        {
            code: "AS", name: "Asia", countries: [
                { code: "CHN", name: "China" },
                { code: "IND", name: "India", selected: true },
                { code: "JPN", name: "Japan" }
            ]
        },
        {
            code: "EU", name: "Europe", countries: [
                { code: "DNK", name: "Denmark" },
                { code: "FIN", name: "Finland" },
                { code: "AUT", name: "Austria",
                }
            ]
        },
        {
            code: "NA", name: "North America", countries: [
                { code: "USA", name: "United States of America" },
                { code: "CUB", name: "Cuba" },
                { code: "MEX", name: "Mexico" }
            ]
        },
        {
            code: "OC", name: "Oceania", countries: [
                { code: "AUS", name: "Australia" },
                { code: "NZL", name: "New Zealand" },
                { code: "WSM", name: "Samoa" }
            ]
        }
    ];
    let field = { dataSource: continents, id: "code", text: "name", child: "countries" };
    let style = 'accordiontree';
    let treeObj;
    function nodeSelect(args) {
        if (args.node.classList.contains('e-level-1')) {
            treeObj.collapseAll();
            treeObj.expandAll([args.node]);
            treeObj.expandOn = 'None';
        }
    }
    return (<div className='control-pane'>
            <div className='control-section'>
                <div className='control_wrapper'>
                    {/* Render TreeView */}
                    <TreeViewComponent fields={field} cssClass={style} ref={(treeview) => { treeObj = treeview; }} nodeSelected={nodeSelect.bind(this)}/>
                </div>
            </div>
        </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}