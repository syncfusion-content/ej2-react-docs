---
layout: post
title: Row editing in React TreeGrid component | Syncfusion
description: Learn here all about Row editing in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Row editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row editing in React TreeGrid

In row edit mode, starting an edit on the selected record switches the entire row to edit state. Cell values across the row can be modified and then saved to the datasource. Enable row editing by setting [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#mode) to **Row**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs14/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs14" %}