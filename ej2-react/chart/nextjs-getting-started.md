---
layout: post
title: React Chart getting started with Next.js | Syncfusion
description: Check out and learn here all about how to use the Syncfusion React UI components in the Next.js project.
control: Next.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Creating a Next.js Application Using Syncfusion<sup style="font-size:70%">&reg;</sup> React Components 

This section provides a step-by-step guide for setting up a Next.js application and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> React Chart component.

## What is Next.js?

[Next.js](https://nextjs.org) is a React framework that makes it easy to build fast, SEO-friendly, and user-friendly web applications. It provides features such as server-side rendering, automatic code splitting, routing, and API routes, making it an excellent choice for building modern web applications.

## Prerequisites

Before getting started with the Next.js application, ensure the following prerequisites are met:

* [Node.js 16.8](https://nodejs.org/en) or later.

* The application is compatible with macOS, Windows, and Linux operating systems.

## Create a Next.js application

To create a new `Next.js` application, use one of the commands that are specific to either NPM or Yarn.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app

{% endhighlight %}
{% endtabs %}

Using one of the above commands will lead you to set up additional configurations for the project as below:

1.Define the project name: Users can specify the name of the project directly. Let's specify the name of the project as `ej2-nextjs-chart`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-chart

{% endhighlight %}
{% endtabs %}

2.Select the required packages.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? ... ej2-nextjs-chart
√ Would you like to use TypeScript? ... No / `Yes`
√ Would you like to use ESLint? ... No / `Yes`
√ Would you like to use Tailwind CSS? ... `No` / Yes
√ Would you like to use `src/` directory? ... No / `Yes`
√ Would you like to use App Router? (recommended) ... No / `Yes`
√ Would you like to customize the default import alias? ... `No`/ Yes
Creating a new Next.js app in D:\ej2-nextjs-chart.

{% endhighlight %}
{% endtabs %}

3.Once complete the above mentioned steps to create `ej2-nextjs-chart`, navigate to the directory using the below command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nextjs-chart

{% endhighlight %}
{% endtabs %}

The application is ready to run with default settings. Now, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

Here, the [React Chart component](https://www.syncfusion.com/react-components/react-charts) is used in the project. To install the React Chart component, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-charts --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-charts

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React component

Follow the below steps to add the React Chart component to the Next.js project:

1.Before adding the Chart component to your markup, import the Chart component in the **src/app/page.tsx** file.

{% tabs %}
{% highlight js tabtitle="page.tsx" %}

'use client'
import {
  AxisModel, Category, ChartComponent, ColumnSeries, DataLabel, Inject,
  Legend, LegendSeriesModel, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, TooltipSettingsModel
} from '@syncfusion/ej2-react-charts';

{% endhighlight %}
{% endtabs %}

2.Then, define the Chart component in the **src/app/page.tsx** file, as shown below:

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import {
  AxisModel, Category, ChartComponent, ColumnSeries, DataLabel, Inject,
  Legend, LegendSeriesModel, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, TooltipSettingsModel
} from '@syncfusion/ej2-react-charts';

export default function Home() {
  const data: any[] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
  ];
  const tooltip: TooltipSettingsModel = { enable: true, shared: false }
  const primaryyAxis: AxisModel = { labelFormat: '${value}K' }
  const primarxyAxis: AxisModel = { valueType: 'Category' }
  const legendSettings: LegendSeriesModel = { visible: true }
  const marker = { dataLabel: { visible: true } };

  return (
    <>
      <h2>Syncfusion React Chart Component</h2>
      <ChartComponent id="charts" primaryXAxis={primarxyAxis} legendSettings={legendSettings}
        primaryYAxis={primaryyAxis} tooltip={tooltip}>
        <Inject services={[ColumnSeries, DataLabel, Tooltip, Legend, LineSeries, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales' marker={marker} />
        </SeriesCollectionDirective>
      </ChartComponent>
    </>
  )
}


{% endhighlight %}
{% endtabs %}

## Run the application

To run the application, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

To learn more about the functionality of the Chart component, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/chart/getting-started#module-injection).

> [View the NEXT.js Chart sample in the GitHub repository](https://github.com/SyncfusionExamples/ej2-nextjs-chart).
