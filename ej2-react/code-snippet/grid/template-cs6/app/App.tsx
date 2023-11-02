import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';
import { SparklineComponent } from '@syncfusion/ej2-react-charts';
function App() {
  let grid: Grid | null;
  const lineData: object[] = [
    [0, 6, -4, 1, -3, 2, 5],
    [5, -4, 6, 3, -1, 2, 0],
    [6, 4, 0, 3, -2, 5, 1],
    [4, -6, 3, 0, 1, -2, 5],
    [3, 5, -6, -4, 0, 1, 2],
    [1, -3, 4, -2, 5, 0, 6],
    [2, 4, 0, -3, 5, -6, 1],
    [5, 4, -6, 3, 1, -2, 0],
    [0, -6, 4, 1, -3, 2, 5],
    [6, 4, 0, -3, 2, -5, 1],
  ];
  const getSparkData = ((type: string, count: number) => {
    if (type === 'line') {
      return lineData[count - 1] as number[];
    }
  })

  const ratingTemplate = ((props: any) => {
    const length = (grid as any).dataSource.length
    for (let i: number = 1; i <= length; i++) {
      let spkLine: any = getSparkData('line', i)
      return (
        <SparklineComponent height='50px' dataSource={spkLine} width='90%' lineWidth={2} valueType='Numeric' fill='#3C78EF' />
      )
    }
  })
  return (
    <div>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent ref={g => grid = g} dataSource={employeeData} height={315}>
          <ColumnsDirective>
            <ColumnDirective field='EmployeeID' headerText='EmployeeID' width='100' />
            <ColumnDirective field='FirstName' headerText='FirstName' width='120' />
            <ColumnDirective headerText='Employee Performance Rating' template={ratingTemplate} />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
