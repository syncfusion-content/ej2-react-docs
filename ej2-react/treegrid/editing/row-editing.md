---
layout: post
title: React TreeGrid Row Editing | Syncfusion
description: Learn how to use row editing in React TreeGrid, including editing rows, programmatic CRUD operations, and confirmation dialogs.
control: Row editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row Editing in React TreeGrid

In row edit mode, starting an edit on the selected record switches the entire row to edit state. Cell values across the row can be modified and then saved to the datasource. Enable row editing by setting [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel#mode) to **Row**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs14/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs14" %}