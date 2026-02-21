---
layout: post
title: Templates with React Rating component | Syncfusion
description:  Learn here all about Templates in Syncfusion React Rating component of Syncfusion Essential JS 2 and more.
control: Templates
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Templates in React Rating Component

Customize the appearance of rating items using templates. Templates allow you to specify a custom layout for rating items with any content, creating a personalized rating experience.

The Rating component supports the following templates for item customization:

* [`emptyTemplate`](https://ej2.syncfusion.com/react/documentation/api/rating/#emptytemplate)
* [`fullTemplate`](https://ej2.syncfusion.com/react/documentation/api/rating/#fulltemplate)

## Empty (unrated) symbol template

Customize unrated items using the `emptyTemplate` tag directive. The `value` and `index` are available in the template context for accessing unrated item information.
If `fullTemplate` is not defined, `emptyTemplate` is used for both rated and unrated items. Apply custom styles to differentiate between rated and unrated states.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/templates/empty-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/templates/empty-template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/rating/templates/empty-template-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/templates/empty-template-cs1" %}

> The current value of the rating item available in the template context as `value` and in the rating item element as CSS Variable (`--rating-value`) can be used to support precision in templates.

## Full (rated) symbol template

Customize rated items using the `fullTemplate` tag directive. This allows you to specify a custom layout for rated items with any content you desire.
The `value` and `index` are available in the template context for accessing rated item information.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/templates/full-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/templates/full-template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/rating/templates/full-template-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/templates/full-template-cs1" %}

## Using Emoji icon as rating symbol

Use emojis as rating symbols by specifying them as template content within the `emptyTemplate` tag directive.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/templates/emoji-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/templates/emoji-template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/rating/templates/emoji-template-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/templates/emoji-template-cs1" %}

## Using SVG icon as rating symbol

Use SVG icons as rating symbols by specifying them as template content within the `emptyTemplate` and `fullTemplate` tag directives.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/templates/svg-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/templates/svg-template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/rating/templates/svg-template-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/templates/svg-template-cs1" %}

## Using PNG image as rating symbol

Use PNG images as rating symbols by specifying them as template content within the `emptyTemplate` and `fullTemplate` tag directives.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/templates/png-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/templates/png-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/templates/png-template-cs1" %}
