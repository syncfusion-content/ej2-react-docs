


import { TreeMapComponent, LevelDirective, LevelsDirective, ILoadedEventArgs, IDrillEndEventArgs } from '@syncfusion/ej2-react-treemap';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { CarSales } from './datasource';

class App extends React.Component {
  public drillStart(args: IDrillStartEventArgs): void {
    let labelElementGroup: HTMLElement = document.getElementById('container_Label_Template_Group') as HTMLElement;
    labelElementGroup.remove();
  }
  render() {
    return (
     <TreeMapComponent drillStart={this.drillStart.bind(this)} id='container' weightValuePath='Sales' palette={['white']} enableDrillDown={true} dataSource={CarSales}
          leafItemSettings={ {
            showLabels: false,
            labelTemplate: '#template',
            templatePosition: 'Center'
          } }>
          <LevelsDirective>
            <LevelDirective groupPath='Continent' fill='#336699' border={ { color: 'black', width: 0.5 } } />
            <LevelDirective groupPath='Company' fill='#336699' border={ { color: 'black', width: 0.5 } } />
          </LevelsDirective>
        </TreeMapComponent>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('treemap') as HTMLElement
);


