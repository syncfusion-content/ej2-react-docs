---
layout: post
title: Render methods in React Chart | Syncfusion
description: Learn how to use the render and refresh methods on Syncfusion React Chart to re-render the chart manually after data or option changes.
control: Render methods
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Render methods in React Chart

The Chart component uses one of the following two rendering methods. Choose the method that best matches your performance and feature requirements.

* SVG
* Canvas

## SVG

SVG is used to render the Chart by default in all modern browsers. It provides high-fidelity visuals and full support for Chart features such as animation, accessibility, and interactivity.

## Canvas

Switch between SVG and Canvas rendering by setting the `enableCanvas` property to `true`. The canvas mode is useful in the following scenarios:

* Plotting a large number of data points.
* Performing high-frequency live updates.

The `enableCanvas` property accepts a boolean value (`true` or `false`) and defaults to `false`.

```ts
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries } from '@syncfusion/ej2-react-charts';

<ChartComponent id="charts" enableCanvas={true} title="Sales Analysis">
  <Inject services={[LineSeries]} />
  <SeriesCollectionDirective>
    <SeriesDirective dataSource={data} xName="month" yName="sales" type="Line" />
  </SeriesCollectionDirective>
</ChartComponent>
```

**Limitations**

- Animation is not supported in canvas mode.
- Print and export quality may be lower than SVG for very large canvases.
- Some SVG-specific events and accessibility hooks may not be available in canvas mode.

> Note: Canvas rendering improves performance for very large datasets or high-frequency updates but may limit certain SVG-specific features.

**SVG vs. Canvas comparison**

| Feature | SVG | Canvas |
|---|---|---|
| Animation | Supported | Not supported |
| Performance with large data | Moderate | High |
| High-frequency updates | Moderate | High |
| Print/Export quality | High | Moderate |
| Accessibility | Full | Limited |

## See also

* [Getting started with React Chart](getting-started)
* [Chart appearance](chart-appearance)
* [Chart dimensions](chart-dimensions)