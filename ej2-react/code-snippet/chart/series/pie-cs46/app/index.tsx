

import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { useEffect, useRef, useState } from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Inject } from '@syncfusion/ej2-react-charts';
import { accData } from 'datasource.ts';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  var chart: AccumulationChartComponent | null;
  const [hasData, setHasData] = React.useState(false);
  React.useEffect(() => {
    if (hasData) {
      const buttonContainer = document.getElementById("syncfusionButtonContainer");
      if (buttonContainer) {
        ReactDOM.unmountComponentAtNode(buttonContainer);
      }
    }
  }, [hasData]);
  const SAMPLE_CSS = `
    #noDataTemplateContainer {
        height: inherit;
        width: inherit;
    }

    .light-bg {
        background-color: #fafafa;
        color: #000000;
    }

    .template-align img {
        max-width: 150px;
        /* Adjust size as needed */
        max-height: 150px;
        margin-top: 55px;
    }

    .load-data-btn {
        border-radius: 4px;
    }

    .template-align {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
    }

    #syncfusionButtonContainer {
        margin-top: 5px;
    }`;
  const noDataTemplate = `
          <div id="noDataTemplateContainer" class="light-bg">
              <div class="template-align">
                  <img src="no-data.png" alt="No Data"/>
              </div>
              <div class="template-align">
                  <p style="font-size: 15px; margin: 10px 0 10px;"><strong>No data available to display.</strong></p>
              </div>
              <div class="template-align">
                  <div id="syncfusionButtonContainer"></div>
              </div>
          </div>
      `;

  // Function to load data when button is clicked
  const loadData = () => {
    if (chart) {
      (chart as AccumulationChartComponent).series[0].dataSource = accData;
    }
  };
  // Function to load data when button is clicked
  const loadedChartData = () => {
    if (!hasData) {
      const buttonContainer = document.getElementById("syncfusionButtonContainer");
      if (buttonContainer && !buttonContainer.hasChildNodes()) {
        // Create the button element using React.createElement
        const buttonElement = React.createElement(ButtonComponent, {
          id: "loadDataButton",
          content: "Load Data",
          iconCss: "e-icons e-refresh",
          cssClass: "load-data-btn e-outline",
          isPrimary: false,
          onClick: loadData
        });

        const root = createRoot(buttonContainer);
        root.render(buttonElement);
      }
    }
  };
  return (
    <div>
      {/* Custom No Data Template with Button */}
      <style>{SAMPLE_CSS}</style>

      {/* Chart Component */}
      <div id="chart-container"><AccumulationChartComponent id='charts' ref={g => chart = g} loaded={loadedChartData} noDataTemplate={noDataTemplate} >
        <Inject services={[PieSeries]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective xName='x' yName='y' type='Pie'>
          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
      </div>
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));