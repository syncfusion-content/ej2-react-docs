---
layout: post
title: Chart dimensions in React Stock chart component | Syncfusion
description: Learn here all about Chart dimensions in Syncfusion React Stock chart component of Syncfusion Essential JS 2 and more.
control: Chart dimensions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart dimensions in React Stock chart component

## Size for Container

Stock Chart can render to its container size. You can set the size via inline or CSS as demonstrated below.

```
 <div id="stockcharts" style="width:650px; height:350px"></div>
```



```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import { StockChartComponent}
from'@syncfusion/ej2-react-charts';

function App() {

        return <StockChartComponent id='stockcharts'>
        </StockChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("stockcharts"));
```

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import { StockChartComponent } from '@syncfusion/ej2-react-charts';
function App() {
    return <StockChartComponent id='stockcharts'>
        </StockChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("stockcharts"));
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/chart-dimensions-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/chart-dimensions-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/chart-dimensions-cs1" %}

## Size for Stock Chart

You can also set size for stock chart directly through [`width`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartModel/#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartModel/#height) properties.

<!-- markdownlint-disable MD036 -->
**In Pixel**
<!-- markdownlint-disable MD036 -->

You can set the size of chart in pixel as demonstrated below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/chart-dimensions-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/chart-dimensions-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/chart-dimensions-cs2" %}

**In Percentage**

By setting value in percentage, Stock Chart gets its dimension with respect to its container. For example, when the height is ‘50%’, Stock Chart renders to half of the container height.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/chart-dimensions-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/chart-dimensions-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/chart-dimensions-cs3" %}

>Note: When you do not specify the size, it takes `450px` as the height and window size as its width.