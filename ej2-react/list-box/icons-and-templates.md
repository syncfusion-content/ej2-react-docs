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

Add icons to list box items by setting the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/list-box/fieldSettingsModel/#iconcss) property with the `e-icons` class and required icon CSS. Icons are positioned on the left side of the list by default.

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

Customize ListBox items using the [`itemTemplate`](https://ej2.syncfusion.com/react/documentation/api/list-box/#itemtemplate) property to display items according to your requirements.

In the following example, cart items are displayed using a ListBox template:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listbox/template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listbox/template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listbox/template-cs1" %}