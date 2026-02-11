---
layout: post
title: Integrate Chart in React Grid | Syncfusion
description: Learn here all about integrate Chart in Syncfusion React Grid of Syncfusion Essential JS 2 and more.
control: Integrate Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Chart in Syncfusion React Grid

Grid and Chart integration in Syncfusion<sup style="font-size:70%">&reg;</sup> enables visualizing tabular data by linking the Grid with a Chart. Selected data can be rendered interactively as bar, line, or pie charts via the [ContextMenu](https://ej2.syncfusion.com/react/documentation/grid/context-menu) feature. This integration is suitable for dashboards, reporting tools, and other data-driven applications where tabular and visual representations improve analysis and decision making.

## Steps for Chart integration

Follow these steps to integrate Charts into the Grid:

### Dependencies

Below is the list of minimum dependencies required to integrate Chart functionality into the Grid:

```javascript
|-- dependencies
  |-- @syncfusion/ej2-grid-chart
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-notifications
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-charts

```

### Setup for local development

Choose one of the following options to set up a React application. The recommended approach is using [create-react-app](https://github.com/facebook/create-react-app), which prepares a development environment and optimizes the application for production. Refer to the [installation instructions](https://github.com/facebook/create-react-app#creating-an-app).

```bash
npx create-react-app my-app
cd my-app
npm start
```

or

```bash
yarn create react-app my-app
cd my-app
yarn start
```

Run the following command to create a React application in a TypeScript environment:

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

Alternatively, create an application with `npm init`. For `npm init`, ensure `npm` is version 6 or higher.

```bash
npm init react-app my-app
cd my-app
npm start
```

### Add Syncfusion React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/~syncfusionorg). Install the corresponding npm packages to use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in a project.

Run the following commands to install the Grid and Grid-Chart packages.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-grids
npm install @syncfusion/ej2-grid-chart

{% endhighlight %}
{% endtabs %}

### Import the Syncfusion CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> React controls include [built-in themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) provided in the installed packages. Apply one of the built-in themes to match the application's visual style.

Import the required CSS files from the **node_modules** directory. For example, to use the "Material 3" theme, add the following imports to the **src/App.css** file.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-react-grids/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-grid-chart/styles/material3.css';

```

### Chart integration via context menu in Grid

This section explains how the Grid can render charts dynamically based on interactions within the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid using the context menu. **Right-clicking** on selected rows presents chart types such as bar, pie, or line for immediate visualization. This enhances interactivity and provides a quick analytical view.

For example, in a sales dashboard, selecting records for specific products can display a comparative bar or pie chart that shows online sales versus retail sales or revenue trends across months.

Steps to integrate a chart into the Grid via the context menu:

**Step 1. Inject required modules:**

Import the required modules from the `Grid`, `GridChart`, and `Chart` packages, then inject the `ContextMenu` module into the Grid:


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, ContextMenuClickEventArgs, ContextMenu, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { GridChart } from '@syncfusion/ej2-grid-chart';

function App() {
  return (
    <div>
      <GridComponent>
        <ColumnsDirective>
        </ColumnsDirective>
        <Inject services={[ContextMenu]} />
      </GridComponent>
    </div>
  );
}

export default App;

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, ContextMenuClickEventArgs, ContextMenu, GridComponent, Inject, SelectionSettingsModel} from '@syncfusion/ej2-react-grids';
import { GridChart, CategorySeries, ChartChanges} from '@syncfusion/ej2-grid-chart';
import { ChartModel } from '@syncfusion/ej2-charts';

function App() {
  return (
    <div>
      <GridComponent>
        <ColumnsDirective>
        </ColumnsDirective>
        <Inject services={[ContextMenu]} />
      </GridComponent>
    </div>
  );
}

export default App;

{% endraw %}
{% endhighlight %}
{% endtabs %}

**Step 2: Define Chart options to Grid Context Menu:**

Add chart visualization options as context menu items within the Grid configuration using the [contextMenuItems](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#contextmenuitems) property. These items allow right-clicking on selected rows to choose a chart type for visualization.

```ts

contextMenuItems={[
  'Bar', 'StackingBar', 'StackingBar100',
  'Pie', 'Column', 'StackingColumn', 'StackingColumn100',
  'Line', 'StackingLine', 'StackingLine100',
  'Area', 'StackingArea', 'StackingArea100', 'Scatter'
]}

```

**Step 3: Initialize GridChart instance on Grid creation:**

Inside the Grid’s [created](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#created) event, instantiate a `GridChart` object. This instance is used to render charts dynamically based on the selected Grid data.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

function created() {
  gridChart = new GridChart({
    enableRtl: grid.enableRtl,
    locale: grid.locale,
  });
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% raw %}

function created() {
  gridChart = new GridChart({
    enableRtl: (grid as GridComponent).enableRtl,
    locale: (grid as GridComponent).locale,
  });
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

This ensures the Chart instance is ready when the Grid initializes, allowing seamless interaction through the context menu.

**Step 4: Handle context menu click to render Chart:**

Use the [contextMenuClick](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#contextmenuclick) event to determine the selected chart type and render it with the `gridChart.render` method.

The `contextMenuClick` event provides the following arguments:

  * `args.chartType` — selected chart type.
  * `args.gridInstance` — current Grid instance.
  * `args.records` — selected data records to visualize.

The `gridChart.render` method accepts three arguments:

  * `chartArgs`: Contains the Grid instance, [chart type](https://ej2.syncfusion.com/react/documentation/chart/chart-types), and the selected records.

  * `chartModel`: Specifies chart configuration, including axes, labels, legends, tooltips, and other appearance or behavior settings. See Syncfusion's [Chart Model](https://ej2.syncfusion.com/react/documentation/api/chart/chartmodel) for details.

  * `categorySeries`: Specifies data fields for [categories](https://ej2.syncfusion.com/react/documentation/chart/category-axis) and [series](https://ej2.syncfusion.com/react/documentation/chart/chart-series).

    * Category fields define the grouping axis.
    * Series fields define the values plotted on the chart.


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

function contextMenuClick(args) 
{
  if (args.chartType) 
  {
    // Prepare the Chart arguments including the Grid instance, Chart type, and records to plot.
    const chartArgs = {
      gridInstance: args.gridInstance,
      chartType: args.chartType,
      records: args.records
    };

    // Set up the Chart model configurations.
    const chartModel = {
      primaryXAxis: {
        valueType: 'Category',
        labelRotation: 315
      }
    };

    // Combine both Chart models into a single model for rendering.
    const model = {
      chart: chartModel,
      accumulationChart: {}
    };

    // Determine fields for category and series data in the Chart.
    const categorySeries = {
      category: ['Product', 'Month'],
      series: ['Online', 'Retail']
    };

    // Render the Chart using the configured arguments and models.
    // The render function uses the defined chartArgs, model, and categorySeries to display the Chart.
    gridChart.render(chartArgs, model, categorySeries);
  }
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% raw %}

function contextMenuClick(args: ContextMenuClickEventArgs) 
{
  if (args.chartType) 
  {
    const chartArgs = {
      gridInstance: (args.gridInstance as GridComponent),
      chartType: args.chartType,
      records: (args.records as SalesRecord[])
    };

    // Set up the Chart model configurations.
    const chartModel: ChartModel = {
      primaryXAxis: {
        valueType: 'Category',
        labelRotation: 315
      }
    };

    // Combine both Chart models into a single model for rendering.
    const model: ChartChanges = {
      chart: chartModel,
      accumulationChart: {}
    };

    // Determine fields for category and series data in the Chart.
    const categorySeries: CategorySeries = {
      category: ['Product', 'Month'],
      series: ['Online', 'Retail']
    };

    // Render the Chart using the configured arguments and models.
    // The render function uses the defined chartArgs, model, and categorySeries to display the Chart.
    (gridChart as GridChart).render(chartArgs, model, categorySeries);
  }
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

The following example demonstrates integrating Charts into the Grid context menu by using the `contextMenuClick` event and the `gridChart.render` method:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/chart-integration/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/chart-integration/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/chart-integration/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/chart-integration/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/chart-integration" %}

## Enable export functionality in GridChart

GridChart export functionality enables saving or sharing charts in multiple formats. This is useful for preserving visualizations or including charts in reports and presentations.

Enable export by setting the `allowExport` property to `true` when creating the `GridChart` instance. Once enabled, an export option appears in the chart popup toolbar, allowing export to formats such as PDF, CSV, Print, JPEG, XLSX, SVG, and PNG.

```ts

gridChart = new GridChart({
  allowExport: true
});

```

When enabled, the property panel appears alongside the Chart popup and offers three main configuration sections:

* **Chart Types:** Choose from a variety of Chart types, including Column, Line, Pie, and others.

* **Chart Data:** Configure the category axis and series fields for data visualization.

* **Formatting Options:** Adjust styling properties such as Chart style, title style, legend appearance, series settings, and axes formatting.

  * **Chart Style:**

    * **Margin:** Adjust the [margins](https://ej2.syncfusion.com/react/documentation/api/chart/margin) around the chart (top, bottom, left, right) for better layout spacing.
    * **Color:** Set distinct colors for different chart elements to improve visual clarity.

  * **Title Style** 

    * **Legend** - Toggle the visibility of the legend and customize its font, size, color, and position.
    * **Series** - Enable/disable tooltips and customize [Series](https://ej2.syncfusion.com/react/documentation/api/chart/series) color and data labels based on categories such as online, retail, or revenue.

  * **Axes:** - Select axes as either category or value type, and customize:

    * Reverse Order to change the data sequence.
    * **Title:** Adjust text, font, size, color, and rotation.
    * **Label:** Modify text, font, size, color, and rotation for better label presentation.


**Customize the chart model:**

[Accumulation Charts](https://ej2.syncfusion.com/react/documentation/accumulation-chart/getting-started) (for example, pie charts) can be customized using the `accumulationChart` property of the `model` object. This property configures titles, legends, data labels, and visual styles for accumulation-type visualizations.

Additionally, Accumulation Chart [events](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/index-default#events) can be used to apply extra customizations during rendering.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

function contextMenuClick(args) 
{
  if (args.chartType) {
    const chartArgs = {
       gridInstance: args.gridInstance,
      chartType: args.chartType,
      records: args.records
    };
    const chartModel = {
      primaryXAxis: {
        valueType: 'Category',
        labelRotation: 315
      },
      margin: {
        top: 20,
        bottom: 20,
        right: 20,
        left: 20
      },
      tooltip: {
        enable: true,
        textStyle: {
          size: '16px',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }
      },
      title: 'Sales Data',
      titleStyle: {
        size: '24px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 'Bold'
      },
      subTitle: 'Sales data for various products over the months',
      load: (args) => {
        if (args.chart.titleStyle) {
          args.chart.titleStyle.color = '#1976d2';
        }
      }
    };
    const accumulationChartModel = {
      title :'Sales Distribution'
    };
    const model = {
      chart: chartModel,
      accumulationChart: accumulationChartModel
    };
  }
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% raw %}

function contextMenuClick(args: ContextMenuClickEventArgs) {
  if (args.chartType) {
    const chartModel: ChartModel = {
      primaryXAxis: {
        valueType: 'Category',
        labelRotation: 315
      },
      margin: {
        top: 20,
        bottom: 20,
        right: 20,
        left: 20
      },
      tooltip: {
        enable: true,
        textStyle: {
          size: '16px',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }
      },
      title: 'Sales Data',
      titleStyle: {
        size: '24px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 'Bold'
      },
      subTitle: 'Sales data for various products over the months',
      load: (args: ILoadedEventArgs) => {
        if (args.chart.titleStyle) {
          args.chart.titleStyle.color = '#1976d2';
        }
      }
    };
    const accumulationChartModel: AccumulationChartModel = {
      title :'Sales Distribution'
    }

    // Combine both chart models into a single object.
    const model: ChartChanges = {
      chart: chartModel,
      accumulationChart: accumulationChartModel
    };
  }
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

Chart appearance can also be updated programmatically using the `updateChartSettings` event provided by the `GridChart` integration. This event triggers when Chart properties are modified through the Chart popup’s property panel. The event enables applying custom themes, adjusting axis settings, or modifying series styles.

The following code snippet demonstrates dynamically customizing chart margins and restricting their values to a minimum of "20" using the `updateChartSettings` event:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

function created() {
  gridChart = new GridChart({
    enablePropertyPanel: true,
    allowExport: true,
    enableRtl: grid.enableRtl,
    locale: grid.locale,
    updateChartSettings: updateChartSettings
  });
}

function updateChartSettings(args) 
{
  const chart = args.changes.chart;
  if (!chart) return;
  const chartMargin = chart.margin;

  // Restrict margin values to minimum 20.
  if (chartMargin && !isNullOrUndefined(chartMargin)) {
    if (chartMargin.top < 20) chartMargin.top = 20;
    if (chartMargin.bottom < 20) chartMargin.bottom = 20;
    if (chartMargin.left < 20) chartMargin.left = 20;
    if (chartMargin.right < 20) chartMargin.right = 20;
  }
}

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% raw %}

function created() {
  gridChart = new GridChart({
    enablePropertyPanel: true,
    allowExport: true,
    enableRtl: (grid as GridComponent).enableRtl,
    locale: (grid as GridComponent).locale,
    updateChartSettings: updateChartSettings
  });
}

function updateChartSettings(args: UpdateChartArgs) 
{
  const chart = args.changes.chart;
  if (!chart) return;

  // Restrict margin values to minimum 20.
  const chartMargin = chart.margin;
  if (chartMargin && !isNullOrUndefined(chartMargin)) {
    if (chartMargin.top < 20) chartMargin.top = 20;
    if (chartMargin.bottom < 20) chartMargin.bottom = 20;
    if (chartMargin.left < 20) chartMargin.left = 20;
    if (chartMargin.right < 20) chartMargin.right = 20;
  }
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

The following example demonstrates enabling the property panel by setting `enablePropertyPanel` to `true`, customizing the chart using the `chartModel` within `contextMenuClick` event, and dynamically controlling or customizing the behavior of the  `updateChartSettings` event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/chart-integration-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/chart-integration-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/chart-integration-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/chart-integration-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/chart-integration-cs1" %}
