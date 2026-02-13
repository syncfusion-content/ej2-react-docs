
import { TreeMapComponent, LevelDirective, LevelsDirective, ILoadedEventArgs, IDrillEndEventArgs } from '@syncfusion/ej2-react-treemap';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { CarSales } from './datasource';
export function App() {
  function drillStart(args) {
    var labelElementGroup = document.getElementById('container_Label_Template_Group');
    labelElementGroup.remove();
  }
    return (
     <TreeMapComponent drillStart={drillStart}  weightValuePath='Sales' palette={['white']} enableDrillDown={true} dataSource={CarSales}
          leafItemSettings={ {
            showLabels: false,
            labelTemplate: '<div style="background-color: red">{{:Company}}</div>',
            templatePosition: 'Center'
          } }>
          <LevelsDirective>
            <LevelDirective groupPath='Continent' fill='#336699' border={ { color: 'black', width: 0.5 } } />
            <LevelDirective groupPath='Company' fill='#336699' border={ { color: 'black', width: 0.5 } } />
          </LevelsDirective>
        </TreeMapComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

