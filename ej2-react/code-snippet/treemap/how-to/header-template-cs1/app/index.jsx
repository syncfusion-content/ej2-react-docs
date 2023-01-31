{% raw %}
import { TreeMapComponent, LevelDirective, LevelsDirective } from '@syncfusion/ej2-react-treemap';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { DrillDown } from './datasource';
class App extends React.Component {
    loaded(args) {
        let header = document.getElementById('header');
        let population = 0;
        for (let i = 0; i < args.treemap.layout.renderItems[0]['parent'].Continent.length; i++) {
            population += +(args.treemap.layout.renderItems[0]['parent'].Continent[i]['data'].Population);
        }
        header.innerHTML = 'Continent - Population : ' + population;
    }
    drillEnd(args) {
        let header = document.getElementById('header');
        let layout = document.getElementById("container_TreeMap_Squarified_Layout");
        let population = 0;
        if (args.treemap.layout.renderItems[0]['isDrilled']) {
            for (let i = 0; i < args.treemap.layout.renderItems.length; i++) {
                population += +(args.treemap.layout.renderItems[i]['data'].Population);
            }
            header.innerHTML = layout.children[0].children[1].innerHTML.split(']')[1] + ' - ' + population;
        }
        else if (args.treemap.layout.renderItems[0]['parent'].Continent) {
            for (let i = 0; i < args.treemap.layout.renderItems[0]['parent'].Continent.length; i++) {
                population += +(args.treemap.layout.renderItems[0]['parent'].Continent[i]['data'].Population);
            }
            header.innerHTML = 'Continent - Population : ' + population;
        }
        else {
            population = args.treemap.layout.renderItems[0]['data'].Population;
            header.innerHTML = layout.children[0].children[1].innerHTML.split(']')[1] + ' - Population : ' + population;
        }
    }
    render() {
        return (<TreeMapComponent drillEnd={this.drillEnd.bind(this)} loaded={this.loaded.bind(this)} id='container' palette={['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66']} enableDrillDown={true} format={"n"} useGroupingSeparator={true} dataSource={DrillDown} weightValuePath='Population' leafItemSettings={{
                labelPath: 'Name',
                showLabels: false,
                labelStyle: { size: '0px' },
                border: { color: 'black', width: 0.5 }
            }}>
            <LevelsDirective>
              <LevelDirective groupPath='Continent' fill='#336699' border={{ color: 'black', width: 0.5 }}/>
              <LevelDirective groupPath='States' fill='#336699' border={{ color: 'black', width: 0.5 }}/>
              <LevelDirective groupPath='Region' showHeader={false} fill='#336699' border={{ color: 'black', width: 0.5 }}/>
            </LevelsDirective>
          </TreeMapComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('treemap'));
{% endraw %}