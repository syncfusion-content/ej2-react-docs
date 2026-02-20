---
layout: post
title: Style and appearance in React List box component | Syncfusion
description: Learn here all about Style and appearance in Syncfusion React List box component of Syncfusion Essential JS 2 and more.
control: Style and appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in React List box component

Modify the ListBox appearance by overriding the default CSS of the ListBox component. Refer to the CSS class table below for customization options. You can also create custom themes using [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

CSS Class | Purpose of Class
-----|-----
|.e-listbox-wrapper|To customize the listbox wrapper
|.e-list-parent .e-list-item|To customize the listbox list items
|.e-list-parent .e-list-item:hover|To customize the listbox list items on hover
|.e-list-parent .e-list-item.e-selected|To customize the listbox selected list item
|.e-listboxtool-wrapper .e-listbox-tool|To customize the listbox toolbar
|.e-listboxtool-wrapper .e-listbox-tool .e-btn|To customize the listbox toolbar button
|.e-listboxtool-wrapper .e-listbox-tool .e-btn .e-btn-icon.e-icons::before|To customize the listbox toolbar icon

## Horizontal ListBox

Display the ListBox horizontally using the [cssClass](https://ej2.syncfusion.com/react/documentation/api/list-box/#cssClass) property:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/horizontal-listbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/horizontal-listbox-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listbox/horizontal-listbox-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/horizontal-listbox-cs1" %}
