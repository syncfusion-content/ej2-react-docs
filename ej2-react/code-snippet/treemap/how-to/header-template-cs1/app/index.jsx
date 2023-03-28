{% raw %}
import { TreeMapComponent, LevelDirective, LevelsDirective, ILoadedEventArgs, IDrillEndEventArgs } from '@syncfusion/ej2-react-treemap';

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { DrillDown } from './datasource';
export function App() {
  function loaded(args) {
    var header = document.getElementById('header');
    var population = 0;
    for (var i = 0; i < args.treemap.layout.renderItems[0]['parent'].Continent.length; i++) {
      population += +(args.treemap.layout.renderItems[0]['parent'].Continent[i]['data'].Population);
    }
    header.innerHTML = 'Continent - Population : ' + population
  }
  function drillEnd(args) {
      var header = document.getElementById('header');
      var layout = document.getElementById("container_TreeMap_Squarified_Layout");
      var population = 0;
      if (args.treemap.layout.renderItems[0]['isDrilled']) {
        for (var i = 0; i < args.treemap.layout.renderItems.length; i++) {
          population += +(args.treemap.layout.renderItems[i]['data'].Population);
        }
        header.innerHTML = layout.children[0].children[1].innerHTML.split(']')[1] + ' - ' + population;
      }
      else if (args.treemap.layout.renderItems[0]['parent'].Continent) {
        for (var i = 0; i < args.treemap.layout.renderItems[0]['parent'].Continent.length; i++) {
          population += +(args.treemap.layout.renderItems[0]['parent'].Continent[i]['data'].Population);
        }
        header.innerHTML = 'Continent - Population : ' + population;
      } else {
        population = args.treemap.layout.renderItems[0]['data'].Population;
        header.innerHTML = layout.children[0].children[1].innerHTML.split(']')[1] + ' - Population : ' + population;
      }
  }
    return (
      <TreeMapComponent drillEnd={drillEnd} loaded={loaded}  palette={ ['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66'] } enableDrillDown={true} format={"n"} useGroupingSeparator={true} dataSource={DrillDown} weightValuePath='Population' leafItemSettings={ {
            labelPath: 'Name',
            showLabels: false,
            labelStyle: { size: '0px' },
            border: { color: 'black', width: 0.5 }
          } }>
            <LevelsDirective>
              <LevelDirective groupPath='Continent' fill='#336699' border={ { color: 'black', width: 0.5 } } />
              <LevelDirective groupPath='States' fill='#336699' border={ { color: 'black', width: 0.5 } } />
              <LevelDirective groupPath='Region' showHeader={false} fill='#336699' border={ { color: 'black', width: 0.5 } } />
            </LevelsDirective>
          </TreeMapComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


{% endraw %}