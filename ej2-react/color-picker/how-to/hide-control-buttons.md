---
layout: post
title: How to hide control buttons in React Color Picker | Syncfusion
description: Render the React Color Picker without Apply and Cancel buttons by setting showButtons to false so the selected color applies immediately.
control: Hide control buttons 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to hide control buttons in React Color Picker

The React Color Picker can be rendered without control buttons (Apply/Cancel). In this case, selecting a color immediately closes the popup, and the selected color is applied directly. To hide control buttons, set the [`showButtons`](https://ej2.syncfusion.com/react/documentation/api/color-picker#showbuttons) property to `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/how-to-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/how-to-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/how-to-cs3" %}
