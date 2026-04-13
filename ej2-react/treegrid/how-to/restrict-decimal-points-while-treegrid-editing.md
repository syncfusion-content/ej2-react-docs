---
layout: post
title: Restrict Decimal Points in React TreeGrid Editing | Syncfusion
description: Learn here all about Restrict decimal points while treegrid editing in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Restrict decimal points while treegrid editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Restrict decimal points while treegrid editing in React TreeGrid

By default, NumericTextBox restricts input to two decimal places when editing a numeric column. Prevent entering decimal points in a NumericTextBox by using the **validateDecimalOnType** and **decimals** properties of NumericTextBox.

In the following demo, during row editing, the NumericTextBox in the **Progress** column prevents entering decimal values.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/customizedialog-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/customizedialog-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/customizedialog-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/customizedialog-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/customizedialog-cs4" %}

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React Tree Grid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.