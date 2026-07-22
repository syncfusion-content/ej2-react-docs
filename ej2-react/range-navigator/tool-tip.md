---
layout: post
title: Tool tip in React Range navigator component | Syncfusion
description: Learn here all about Tool tip in Syncfusion React Range navigator component of Syncfusion Essential JS 2 and more.
control: Tool tip 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip in React Range navigator component

## Enable tooltip

The tooltip is useful for showing the selected data. Enable the tooltip by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangeTooltipSettingsModel#enable) property to `true` in the [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangeNavigatorModel#tooltip) object, and by injecting the `RangeTooltip` module into the `services` as shown below.

```javascript
import { RangeNavigatorComponent, AreaSeries, DateTime, RangeTooltip, Inject } from "@syncfusion/ej2-react-charts";
import * as React from "react";

function App() {
  return (
    <RangeNavigatorComponent id="charts" tooltip={{ enable: true }}>
      <Inject services={[AreaSeries, DateTime, RangeTooltip]} />
    </RangeNavigatorComponent>
  );
}

export default App;
```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs19/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs19" %}

## Customization

Tooltip can be customized using the following properties:

* enable - Customizes the visibility of the tooltip.
* fill - Customizes the background color of the tooltip.
* opacity - Customizes the opacity of the tooltip.
* textStyle - Customizes the font size, color, family, style, weight, alignment, and overflow of the tooltip.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs33/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs33/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs33" %}

## Label Format

The `labelFormat` property in the tooltip is used to format and parse the date to all globalize formats.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs34/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs34/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs34" %}

The following table shows the results of applying some common date and time formats to the `labelFormat` property.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Label Value</b></td>
<td><b>Label Format Property Value</b></td>
<td><b>Result </b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>EEEE</td>
<td>Monday</td>
<td>The Date is displayed in day format</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>yMd</td>
<td>04/10/2000</td>
<td>The Date is displayed in month/date/year format</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td> MMM </td>
<td>Apr</td>
<td>The Shorthand month for the date is displayed</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hm</td>
<td>12:00 AM</td>
<td>Time of the date value is displayed as label</td>
</tr>
<tr>
<td>new Date(2000, 03, 10)</td>
<td>hms</td>
<td>12:00:00 AM</td>
<td>The Label is displayed in hours:minutes:seconds format</td>
</tr>
</table>