

import { getObject } from '@syncfusion/ej2-grids';
import { ISparklineLoadedEventArgs, SparklineComponent, SparklineTheme } from '@syncfusion/ej2-react-charts';
import { ColumnDirective, ColumnsDirective, Inject, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { getSparkData, textdata } from './datasource';

function App() {

  const load = (args: ISparklineLoadedEventArgs): void => {
    let theme: string = location.hash.split('/')[1];
    theme = theme ? theme : 'Material';
    args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1)) as SparklineTheme;
  }
  
  const taxColTemplate = (props: object) => {
    return (<SparklineComponent id={"spkline" + getObject('EmployeeID', props)}
        fill='#3C78EF'
        height='50px'
        load={load}
        lineWidth= {2}
        valueType='Numeric'
        width='150px'
        dataSource={getSparkData('line', +getObject('EmployeeID', props))}/>);
  }
  const dayColTemplate = (props: object) => {
    return (<SparklineComponent id={"spkarea" + getObject('EmployeeID', props)}
    fill='#3C78EF'
    height='50px'
    load={load}
    negativePointColor='#f7a816'
    type='Column'
    valueType='Numeric'
    width='150px'
    dataSource={getSparkData('column', +getObject('EmployeeID', props))}/>);
  }
  const yearColTemplate = (props: object) => {
    return (<SparklineComponent id={"spkwl" + getObject('EmployeeID', props)}
    fill='#3C78EF'
    height='50px'
    load={load}
    negativePointColor='#f7a816'
    type='WinLoss'
    tiePointColor= 'darkgray'
    valueType='Numeric'
    width='150px'
    dataSource={getSparkData('column', +getObject('EmployeeID', props))}/>);
  }
  return <TreeGridComponent dataSource={textdata} treeColumnIndex={0} childMapping='Children'
          allowPaging={true} height='410'>
      <ColumnsDirective>
          <ColumnDirective field='EmpID' headerText='Employee ID' width='95'/>
          <ColumnDirective field='Name' headerText='Name' width='90'/>
          <ColumnDirective field='DOB' headerText='DOB' width='90' format='yMd' textAlign='Right'/>
          <ColumnDirective headerText='Tax per annum' width='90' template={taxColTemplate} textAlign='Center'/>
          <ColumnDirective headerText='One Day Index' template={dayColTemplate} textAlign='Center' width='100'/>
          <ColumnDirective headerText='Year GR' template={yearColTemplate} textAlign='Center' width='100'/>
      </ColumnsDirective>
      <Inject services={[Page]} />
      </TreeGridComponent>
};
export default App;


