{% raw %}

import { createRoot } from 'react-dom/client';

/**
 * Sample for Chart print
 */
import * as React from 'react';
import { useEffect, useRef } from 'react';
import {
  CircularChart3DSeriesDirective,
  CircularChart3DSeriesCollectionDirective,
  Inject,
  CircularChart3DComponent,
  CircularChartDataLabel3D,
  CircularChartLegend3D,
  PieSeries3D,
  CircularChartExport3D,
} from '@syncfusion/ej2-react-charts';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export let circularData = [
  { x: 'John', y: 10, dataLabelMappingName: '$10k' },
  { x: 'Jake', y: 12, dataLabelMappingName: '$12k' },
  { x: 'Peter', y: 18, dataLabelMappingName: '$18k' },
  { x: 'James', y: 11, dataLabelMappingName: '$11k' },
  { x: 'Mary', y: 9.7, dataLabelMappingName: '$9.7k' },
];

const Print = () => {
  useEffect(() => {
    const button = document.getElementById('chart-print');
    button.addEventListener('click', onClick);
  }, []);
  let chartInstance = useRef(null);

  const onClick = (e) => {
    chartInstance.current.export('JPEG', 'chart');
  };
  return (
    <div className="control-pane">
      <div className="control-section row">
        <div className="col-lg-9">
          <CircularChart3DComponent
            id="charts"
            ref={chartInstance}
            title="Browser Market Shares in November 2023"
            tilt={-45}
            enableExport={true}
            legendSettings={{ visible: false, position: 'Right' }}
          >
            <Inject
              services={[
                PieSeries3D,
                CircularChartDataLabel3D,
                CircularChartLegend3D,
                CircularChartExport3D,
              ]}
            />
            <CircularChart3DSeriesCollectionDirective>
              <CircularChart3DSeriesDirective
                dataSource={circularData}
                xName="x"
                yName="y"
                dataLabel={{
                  visible: true,
                  position: 'Inside',
                  name: 'x',
                  font: { fontWeight: '600', color: 'white' },
                }}
              ></CircularChart3DSeriesDirective>
            </CircularChart3DSeriesCollectionDirective>
          </CircularChart3DComponent>
        </div>
        <div className="col-lg-3 property-section">
          <ButtonComponent
            id="chart-print"
            iconCss="e-icons e-print-icon"
            cssClass="e-flat"
            isPrimary={true}
          >
            Export
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};
export default Print;

const root = createRoot(document.getElementById('charts'));
root.render(<Print />);
{% endraw %}