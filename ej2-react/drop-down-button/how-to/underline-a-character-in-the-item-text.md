---
layout: post
title: Underline a character in React Dropdown Button Component | Syncfusion
description: Learn here all about Underline a character in the item text in Syncfusion Essential React Dropdown Button component, its elements and more.
control: Underline a character in the item text 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Underline a character in React Dropdown Button Component

Underline a particular character in a text can be handled in [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#beforeitemrender)event by adding `<u>` tag in between the text and given as innerHTML in `li` rendering.

In the following example, `C` is underlined in the text `Copy`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/default-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/default-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs1" %}