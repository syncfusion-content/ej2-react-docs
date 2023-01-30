---
layout: post
title: Group popup items with listview component in React Drop down button component | Syncfusion
description: Learn here all about Group popup items with listview component in Syncfusion React Drop down button component of Syncfusion Essential JS 2 and more.
control: Group popup items with listview component 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Group popup items with listview component in React Drop down button component

Header in popup items is possible in DropdownButton by templating entire popup with ListView. Create ListView with id `#listview` and provide it as a [`target`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button#target) for DropDownButton.

In the following example, ListView element is given as `target` to DropDownButton and header can be achieved by [`groupBy`](https://ej2.syncfusion.com/react/documentation/api/list-view/fieldSettings#groupby) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/header-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/header-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/header-cs1" %}