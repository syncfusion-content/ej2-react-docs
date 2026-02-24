---
layout: post
title: Selected data grid in React Chart component | Syncfusion
description: Learn here all about Selected data grid in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Selected data grid 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Selected data grid in React Chart component

By using the [`dragComplete`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#dragcomplete), you can get the selected data values for range selection.

To display the selected data value, follow the given steps:

**Step 1**:

Get the selected data point values and display the values through grid component by using the [`dragComplete`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#dragcomplete) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/code-path/how-to-cs9/index.html %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs9" %}