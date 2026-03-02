---
layout: post
title: Template in React Speed dial component | Syncfusion
description: Learn here all about Template in Syncfusion React Speed dial component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template in React Speed dial component

SpeedDial provides powerful templating capabilities to customize both individual action items and the entire popup container. Use templates to create complex layouts with custom HTML, styling, and interactive elements beyond the standard text and icon configurations.

## Item template

Customize the appearance and content of individual action items using the [`itemTemplate`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#itemtemplate) property. Define custom HTML markup as child content within the `itemTemplate` directive to create rich, interactive item layouts with images, badges, custom styling, or nested components.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/template-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/template-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/speed-dial/template-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/template-cs1" %}

## Popup template

Customize the entire popup container using the [`popupTemplate`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#popuptemplate) property. Define custom HTML markup as child content within the `popupTemplate` directive to create completely custom popup layouts, including custom item lists, headers, footers, or alternative content structures.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/template-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/template-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/speed-dial/template-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/template-cs2" %}