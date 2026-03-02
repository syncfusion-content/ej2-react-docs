---
layout: post
title: Types in React Chips component | Syncfusion
description: Learn here all about Types in Syncfusion React Chips component of Syncfusion Essential JS 2 and more.
control: Types 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Types in React Chips component

The Chips component supports four primary types, each serving a different functional purpose. Choose the appropriate type based on the interaction pattern and use case.

* **Input Chip** - For collecting and organizing user-provided values
* **Choice Chip** - For single selection from a set of options
* **Filter Chip** - For multi-selection from a set of options
* **Action Chip** - For triggering actions or displaying interactive content

## Input chip

Input chips hold user-generated information in a compact form. They allow users to enter, tag, or organize data efficiently. This type is ideal for search tags, email recipients, or categorization.

The following example demonstrates how to create input chips:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/default-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/default-cs3/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chips/default-cs3/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/chips/default-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/default-cs3" %}

## Choice chip

Allow users to select a single chip from a set of options by setting the [selection](https://ej2.syncfusion.com/react/documentation/api/chips/selection/) property to `Single`. Choice chips are ideal for radio-button-like selection patterns where only one option can be active at a time. Common use cases include view options, sorting preferences, or theme selection.

The following example demonstrates single selection with choice chips:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/default-cs4/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/default-cs4/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chips/default-cs4/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/chips/default-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/default-cs4" %}

## Filter chip

Enable users to select multiple chips from a set of options by setting the [selection](https://ej2.syncfusion.com/react/documentation/api/chips/selection/) property to `Multiple`. Filter chips are ideal for checkbox-like selection patterns where multiple options can be active simultaneously. Use cases include category filtering, skill selection, or preference checkboxes.

The following example demonstrates multiple selection with filter chips:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/default-cs5/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/default-cs5/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chips/default-cs5/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/chips/default-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/default-cs5" %}

## Action chip

Action chips trigger specific events or actions when interacted with. Unlike selection-focused chips, action chips are designed to perform operations such as opening dialogs, submitting forms, or executing commands. Use action chips for buttons, calls-to-action, or interactive content.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/default-cs6/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/default-cs6/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chips/default-cs6/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/chips/default-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/default-cs6" %}

### Deletable chip

Enable users to remove chips from the list by setting the [enableDelete](https://ej2.syncfusion.com/react/documentation/api/chips/#enabledelete) property to `true`. A delete icon appears on each chip, allowing users to remove items by clicking it. This feature works with input chips and filter chips to provide a dismissible, user-controlled list.

The following example demonstrates deletable chips:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chips/default-cs7/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chips/default-cs7/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chips/default-cs7/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/chips/default-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chips/default-cs7" %}
