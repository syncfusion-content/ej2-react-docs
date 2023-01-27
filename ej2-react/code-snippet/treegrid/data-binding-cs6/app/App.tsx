

import { DataManager } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { SerialNoAdaptor } from './serialNoAdaptor';

export default class App extends React.Component<{}, {}>{
    public data = new DataManager({
        adaptor: new SerialNoAdaptor,
        crossDomain: true,
        url: 'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData'
    });
    public render() {
        return <TreeGridComponent dataSource={this.data} hasChildMapping='isParent' treeColumnIndex={2} idMapping='TaskID' parentIdMapping='ParentItem' height='260'>
            <ColumnsDirective>
              <ColumnDirective field='Sno' headerText='Sno' width='90' textAlign='Right'/>
                <ColumnDirective field='TaskID' headerText='Task ID' width='90' textAlign='Right'/>
                <ColumnDirective field='TaskName' headerText='Task Name' width='180'/>
                <ColumnDirective field='StartDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
                <ColumnDirective field='Duration' headerText='Duration' width='80' textAlign='Right' />
            </ColumnsDirective>
        </TreeGridComponent>
    }
};


