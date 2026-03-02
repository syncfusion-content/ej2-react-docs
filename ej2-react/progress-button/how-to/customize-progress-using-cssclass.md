---
layout: post
title: Customize progress using cssclass in React Progress button component | Syncfusion
description: Learn here all about Customize progress using cssclass in Syncfusion React Progress button component of Syncfusion Essential JS 2 and more.
control: Customize progress using cssclass 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize progress using cssClass in React Progress button component

Customize the progress bar appearance by applying CSS classes through the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/progress-button/#cssClass) property. These built-in classes modify how the progress fills and displays within the button.

* **`e-vertical`** - Displays the progress fill vertically (top-to-bottom) instead of horizontally.
* **`e-progress-top`** - Positions the progress fill at the top edge of the button instead of bottom.

You can also create a reverse progress effect (right-to-left fill) by adding a custom CSS class to the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/progress-button/#cssClass) property with appropriate CSS rules that override the default fill direction.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/progress-button/getting-started-cs4/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/progress-button/getting-started-cs4/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs4" %}