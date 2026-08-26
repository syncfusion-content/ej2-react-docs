---
layout: post
title: Chart Dimensions in React Chart | Syncfusion
description: Learn how to set Syncfusion React Chart size for its container, in pixels, or as a percentage of the parent container.
control: Chart dimensions
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart Dimensions in React Chart

## Size for Container

The chart renders based on its container size. Set the size using inline styles or CSS, as shown below.

```html
<div id="charts" style="width:650px; height:350px"></div>
```

```ts
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent } from '@syncfusion/ej2-react-charts';

function App() {
    return <ChartComponent id='charts' />;
}

export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/dimensions/style-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/dimensions/style-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/dimensions/style-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/dimensions/style-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/dimensions/style-cs1" %}

## Size for Chart

Set the chart size directly using the [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#width) and
[`height`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#height) properties (in pixels or percentages). For example:

```tsx
<ChartComponent id='charts' width='650px' height='350px'>
  {/* ... */}
</ChartComponent>
```

Values can be specified as strings with units (for example, `'650px'`, `'50%'`) or as numbers, which are treated as pixels. By default, the chart uses a height of `450px` and a width that fills the container.

<!-- markdownlint-disable MD036 -->
### In Pixel
<!-- markdownlint-disable MD036 -->

You can set the chart size in pixels, as demonstrated below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/dimensions/size-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/dimensions/size-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/dimensions/size-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/dimensions/size-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/dimensions/size-cs1" %}

### In Percentage

When percentage values are used, the chart dimensions are relative to the container. For example, a height of `50%` renders the chart to half the container height.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/dimensions/size-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/dimensions/size-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/dimensions/size-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/dimensions/size-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/dimensions/size-cs2" %}

> Note: When you do not specify a size, the chart uses `450px` height and the container's width.