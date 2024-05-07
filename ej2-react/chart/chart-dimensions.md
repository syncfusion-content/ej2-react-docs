---
layout: post
title: Chart dimensions in React Chart component | Syncfusion
description: Learn here all about Chart dimensions in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Chart dimensions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart dimensions in React Chart component

## Size for Container

Chart can render to its container size. You can set the size via inline or CSS as demonstrated below.

```
 <div id="charts" style="width:650px; height:350px"></div>
```



```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,
ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection}
from'@syncfusion/ej2-react-charts';

function App() {

        return <ChartComponent id='charts'>
        </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
```

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent } from '@syncfusion/ej2-react-charts';
function App() {
    return <ChartComponent id='charts'>
        </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/dimensions/style-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/dimensions/style-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/dimensions/style-cs1" %}

## Size for Chart

You can also set size for chart directly through [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#width) and
[`height`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel/#height) properties.

<!-- markdownlint-disable MD036 -->
**In Pixel**
<!-- markdownlint-disable MD036 -->

You can set the size of chart in pixel as demonstrated below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/getting-started/datasource-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/getting-started/datasource-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/getting-started/datasource-cs1" %}

**In Percentage**

By setting value in percentage, chart gets its dimension with respect to its container. For example, when the height is ‘50%’, chart renders to half of the container height.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/getting-started/datasource-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/getting-started/datasource-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/getting-started/datasource-cs2" %}

> Note:  When you do not specify the size, it takes `450px` as the height and window size as its width.