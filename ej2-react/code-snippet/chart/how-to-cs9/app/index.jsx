{% raw %}


import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Selection, Legend, Category, ScatterSeries } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    const data = [
        { x: 1971, y: 50 },
        { x: 1972, y: 20 },
        { x: 1973, y: 63 },
        { x: 1974, y: 81 },
        { x: 1975, y: 64 },
        { x: 1976, y: 36 },
        { x: 1977, y: 22 },
        { x: 1978, y: 78 },
        { x: 1979, y: 60 },
        { x: 1980, y: 41 },
        { x: 1981, y: 62 },
        { x: 1982, y: 56 },
        { x: 1983, y: 96 },
        { x: 1984, y: 48 },
        { x: 1985, y: 23 },
        { x: 1986, y: 54 },
        { x: 1987, y: 73 },
        { x: 1988, y: 56 },
        { x: 1989, y: 67 },
        { x: 1990, y: 79 },
        { x: 1991, y: 18 },
        { x: 1992, y: 78 },
        { x: 1993, y: 92 },
        { x: 1994, y: 43 },
        { x: 1995, y: 29 },
        { x: 1996, y: 14 },
        { x: 1997, y: 85 },
        { x: 1998, y: 24 },
        { x: 1999, y: 61 },
        { x: 2000, y: 80 },
        { x: 2001, y: 14 },
        { x: 2002, y: 34 },
        { x: 2003, y: 81 },
        { x: 2004, y: 70 },
        { x: 2005, y: 21 },
        { x: 2006, y: 70 },
        { x: 2007, y: 32 },
        { x: 2008, y: 43 },
        { x: 2009, y: 21 },
        { x: 2010, y: 63 },
        { x: 2011, y: 9 },
        { x: 2012, y: 51 },
        { x: 2013, y: 25 },
        { x: 2014, y: 96 },
        { x: 2015, y: 32 }
    ];
    const primaryxAxis = { minimum: 1970, maximum: 2016 };
    const primaryyAxis = { title: 'Sales', labelFormat: '{value}%', interval: 25, minimum: 0, maximum: 100 };
    const marker = { shape: 'Triangle', width: 10, height: 10 };
    const legendSettings = { visible: true, toggleVisibility: false };
    const selectionMode = 'DragXY';
    var grid;
    var chart;
    function dragComplete(args) {
        grid.dataSource = args.selectedDataValues[0];
        grid.refresh();
    }
    return (<div>
        <div>
            <div>
                <ChartComponent id='charts' ref={(g) => (chart = g)} primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title="Profit Comparision of A and B" selectionMode={selectionMode} legendSettings={legendSettings} dragComplete={dragComplete.bind(this)}>
                    <Inject services={[Selection, Legend, Category, ScatterSeries]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data} xName='x' yName='y' name='Product A' type='Scatter' marker={marker}></SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
        <div>
            <GridComponent id='grid' ref={(g) => (grid = g)} height='250px'>
                <ColumnsDirective>
                    <ColumnDirective field='x' headerText='x' type='string' />
                    <ColumnDirective field='y' headerText='y' type='number' />
                </ColumnsDirective>
            </GridComponent>
        </div>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));


{% endraw %}