---
layout: post
title: Icons and templates in React List box component | Syncfusion
description: Learn here all about Icons and templates in Syncfusion React List box component of Syncfusion Essential JS 2 and more.
control: Icons and templates 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Icons and templates in React List box component

## Icons

To place the icon on a list box, set the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/list-box/fieldSettingsModel/#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the list.

In the following sample, icon classes are mapped with `iconCss` field.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/icons-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/icons-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/icons-cs1" %}

## Templates

ListBox items can be customized according to the requirement using [`itemTemplate`](https://ej2.syncfusion.com/react/documentation/api/list-box/#itemtemplate) property.

In the following sample, the items in the cart are displayed using list box template,

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/template-cs1" %}