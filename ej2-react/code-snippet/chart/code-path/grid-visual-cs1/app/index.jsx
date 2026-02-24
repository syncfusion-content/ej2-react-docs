{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, getElement, Inject, AccumulationDataLabel, AccumulationTooltip, PieSeries, AccumulationAnnotation, } from '@syncfusion/ej2-react-charts';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
export class Drilldown extends React.Component {
    data = [
        {
            x: 'SUV',
            y: 25,
            z: [
                {
                    title: 'Automobile Sales in the SUV Segment',
                    x: 'Toyota',
                    y: 8,
                    z: [
                        { x: '2000', y: 20 },
                        { x: '2001', y: 30 },
                        { x: '2002', y: 40 },
                    ],
                },
                { x: 'Ford', y: 12 },
                { x: 'GM', y: 17 },
                { x: 'Renault', y: 6 },
            ],
        },
        {
            x: 'Car',
            y: 37,
            z: [
                { title: 'Automobile Sales in the Car Segment', x: 'Toyota', y: 7 },
                { x: 'Chrysler', y: 12 },
                { x: 'Nissan', y: 9 },
                { x: 'Ford', y: 15 },
            ],
        },
        {
            x: 'Pickup',
            y: 15,
            z: [
                { title: 'Automobile Sales in the Pickup Segment', x: 'Nissan', y: 9 },
                { x: 'Chrysler', y: 4 },
                { x: 'Ford', y: 7 },
                { x: 'Toyota', y: 20 },
            ],
        },
        {
            x: 'Minivan',
            y: 23,
            z: [
                { title: 'Automobile Sales in the Minivan Segment', x: 'Hummer', y: 11 },
                { x: 'Ford', y: 5 },
                { x: 'GM', y: 12 },
                { x: 'Chrysler', y: 3 },
            ],
        },
    ];
    grid;
    pointIndex = -1;
    dataLabel = {
        visible: true, position: 'Inside', connectorStyle: { type: 'Curve', length: '5%' }, font: { size: '14px', color: 'white' }
    };
    pointIndex = -1;
    startAngle = 0;
    //public explodeIndex: number = 2;
    endAngle = 360;
    title = 'Automobile Sales by Category';
    pie;
    isparent = true;
    render() {
        return (<div className='control-pane'>
                <div className='control-section'>
                    <AccumulationChartComponent id='pie-chart' ref={pie => this.pie = pie} title='Automobile Sales by Category' enableSmartLabels={false} legendSettings={{ visible: false }} tooltip={{ enable: false, format: '${point.x} <br> ${point.y} %' }} chartMouseClick={this.onChartMouseClick.bind(this)} pointClick={this.onPointClick.bind(this)} textRender={this.onTextRender.bind(this)}>
                        <Inject services={[AccumulationDataLabel, AccumulationTooltip, PieSeries, AccumulationAnnotation]}/>
                        <AccumulationSeriesCollectionDirective>
                            <AccumulationSeriesDirective dataSource={this.data} xName='x' yName='y' dataLabel={this.dataLabel} radius='70%' explode={false}>
                            </AccumulationSeriesDirective>
                        </AccumulationSeriesCollectionDirective>
                    </AccumulationChartComponent>
                    <GridComponent ref={g => this.grid = g} dataSource={data} height='350'>
                        <ColumnsDirective>
                            <ColumnDirective field='x' headerText='Vehicle' type='string'></ColumnDirective>
                            <ColumnDirective field='y' headerText='Sales' type='string'></ColumnDirective>
                        </ColumnsDirective>
                    </GridComponent>
                </div>
            </div>);
    }
    onTextRender(args) {
        args.text = args.point.x + ' ' + args.point.y + ' %';
    }
    onPointClick(args) {
        if (getElement(pie.element.id + '_Series_' + args.seriesIndex + '_Point_' + args.pointIndex)) {
            this.pie.series[0].dataSource = data[args.pointIndex].z;
            this.pie.title = data[args.pointIndex].z[0].title;
            pointIndex = args.pointIndex;
            this.pie.series[0].name = 'Level 2';
            this.pie.series[0].innerRadius = '30%';
            this.pie.annotations = [
                {
                    content: '<div id="back" style="cursor:pointer;padding:3px;width:30px; height:30px;">' +
                        '<img src="https://ej2.syncfusion.com/javascript/demos/src/chart/images/back.png" id="back" />',
                    region: 'Series',
                    x: '50%',
                    y: '50%',
                },
            ];
            this.pie.pointClick = click;
        }
        this.grid.dataSource = pie.series[0].dataSource;
        this.grid.columns[0].headerText = data[args.pointIndex].x;
        this.grid.refresh();
        this.pie.refresh();
    }
    onChartMouseClick(args) {
        if (args.target.indexOf('back') > -1) {
            if (pie.series[0].name === 'Level 3') {
                pie.series[0].dataSource = data[pointIndex].z;
                pie.series[0].name = 'Level 2';
                pie.title = data[pointIndex].z[0].title;
                pie.series[0].innerRadius = '30%';
                grid.dataSource = pie.series[0].dataSource;
                grid.columns[0].headerText = data[pointIndex].x;
                grid.refresh();
                pie.refresh();
            }
            else if (pie.series[0].name === 'Level 2') {
                pie.series[0].dataSource = data;
                pie.series[0].name = 'Level 1';
                pie.series[0].innerRadius = '0%';
                pie.title = 'Automobile Sales by Category';
                pie.annotations = null;
                pie.pointClick = pointClick;
                grid.dataSource = pie.series[0].dataSource;
                grid.columns[0].headerText = 'Vehicle';
                grid.refresh();
                pie.refresh();
            }
        }
        grid.dataSource = pie.series[0].dataSource;
    }
    pointClick;
    tooltip;
    title;
    click(args) {
        if (pie.series[0].name !== 'Level 3') {
            switch (args.pointIndex) {
                case 0:
                    pie.series[0].dataSource = data[0].z[0].z;
                    pie.title = 'SUV Sales by Years';
                    pie.series[0].name = 'Level 3';
                    grid.columns[0].headerText = 'Year';
                    grid.refresh();
                    pie.refresh();
                    break;
            }
            grid.dataSource = pie.series[0].dataSource;
        }
    }
    ;
}
ReactDOM.render(<Drilldown />, document.getElementById("charts"));
{% endraw %}