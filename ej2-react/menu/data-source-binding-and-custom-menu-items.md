---
layout: post
title: Data binding and custom menu items in React Menu | Syncfusion
description: Bind the Syncfusion React Menu to hierarchical or self-referential JSON data, a remote DataManager, or a custom `fields` mapping.
control: Data source binding and custom menu items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding and custom menu items in React Menu

## Data binding

The Menu supports data source bindings such as an array of JavaScript objects that can be structured as either `hierarchical` or `self-referential` data.

### Hierarchical data

The Menu can be populated with a hierarchical data source by assigning it to the [`items`](https://ej2.syncfusion.com/react/documentation/api/menu/menuitemmodel#items) property, and the fields with corresponding keys can be mapped to the [`fields`](https://ej2.syncfusion.com/react/documentation/api/menu/fieldsettingsmodel) property.

#### JSON data

The Menu can generate its menu items through an array of complex data by mapping fields from the [`fields`](https://ej2.syncfusion.com/react/documentation/api/menu/fieldSettingsModel) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs2" %}

#### Data Service

At the application level, remote data binding can be achieved using [`DataManager`](https://ej2.syncfusion.com/react/documentation/data). To create the Menu, assign the `items` property with the resultant data from the [`callback`](https://ej2.syncfusion.com/documentation/api/data/deferred#then) function.

The following example displays five employees' **FirstName** from **Employees** table and **ShipName** details from **Orders** table of the `Northwind` Data Service.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs3" %}

### Self-referential data

The Menu can be populated from a self-referential data structure that contains an array of JSON objects with `parentId` mapping.

In the following example, the **id**, **pId**, and **text** columns from self-referential data have been mapped to the [`itemId`](https://ej2.syncfusion.com/react/documentation/api/menu/fieldsettingsmodel#itemid), [`parentId`](https://ej2.syncfusion.com/react/documentation/api/menu/fieldsettingsmodel#parentid), and [`text`](https://ej2.syncfusion.com/react/documentation/api/menu/fieldsettingsmodel#text) fields, respectively.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs4" %}

## Custom menu items

The Menu can be customized using the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential JS 2 [`template`](https://ej2.syncfusion.com/react/documentation/api/menu/index-default#template) property to render the elements.

To customize menu items in your application, set your customized template string to the [`template`](https://ej2.syncfusion.com/react/documentation/api/menu/index-default#template) property. In the following example, the menu has been rendered with customized menu items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/template-cs1" %}

>To prevent a submenu from closing, set `args.cancel` to `true` in the [`beforeClose`](https://ej2.syncfusion.com/react/documentation/api/menu/index-default#beforeclose) event.

## See Also

* [Render menu with items](./getting-started#getting-started)
