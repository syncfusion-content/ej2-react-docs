---
layout: post
title: React TreeGrid Cell Editing | Syncfusion
description: Learn how to use cell editing in the React TreeGrid, including enabling, editing, and handling cell edit events.
control: Cell editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cell Editing in React TreeGrid

In cell edit mode, double-clicking a cell switches it to edit state. Modify the value and save it to the datasource. Enable cell editing by setting [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel#mode) to **Cell**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs2" %}

> Cell edit mode is the default editing mode.