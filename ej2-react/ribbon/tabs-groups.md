---
layout: post
title: Tabs and Groups in React Ribbon component | Syncfusion
description:  Checkout and learn about Tabs and Groups in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tabs, Groups, and Items

The Ribbon component's structure is a hierarchy of tabs, groups, and items that provides organized access to commands. Each tab contains one or more groups, and each group holds collections of related items.

## Adding Tabs

You can use the [tabs](https://ej2.syncfusion.com/react/documentation/api/ribbon/#tabs) property to add tabs to the Ribbon component and define the content of the tab header by using the [header](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonTabModel/#header) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Tabs/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Tabs/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Tabs/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Tabs" %}

## Adding Groups

You can use the [groups](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonTabModel/#groups) property to add groups for each tab in the Ribbon and define the name of the group header by using the [header](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroupModel/#header) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Groups/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Groups/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Groups/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Groups" %}

## Adding Items

You can add collections of items to each group by using the [collections](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonGroupModel/#collections) and [items](https://ej2.syncfusion.com/documentation/api/ribbon/ribbonCollectionModel/#items) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Items/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Items/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Items/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Items" %}

> For more information on configuring built-in items and creating custom items, refer to the [`Items`](./items) documentation.