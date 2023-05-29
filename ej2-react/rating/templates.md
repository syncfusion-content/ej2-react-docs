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

The rating component allows you to customize the appearance of the rating items using templates. You can use templates to specify a custom layout for the rating items, which can include any content you want. This allows you to create a more customized and interactive rating experience for the user.

The rating component supports below templates for item customization.

* [`emptyTemplate`](https://ej2.syncfusion.com/react/documentation/api/rating#emptytemplate)
* [`fullTemplate`](https://ej2.syncfusion.com/react/documentation/api/rating#fulltemplate)

## Empty (unrated) symbol template

To customize the appearance of **unrated** items, you can use the `emptyTemplate` tag directive. It allows you to specify the desired custom content for the unrated items.
The `value` and `index` are available in the template context for accessing information about the un-rated item.
If the `fullTemplate` is not defined, the `emptyTemplate` will be used as the default for both rated and unrated items. You can apply custom styles to differentiate between the rated and unrated states of the items.

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

To customize the appearance of **rated** items in the rating component, you can use the `fullTemplate` tag directive. This directive allows you to specify a custom layout for the rated items, which can include any content you desire.
The `value` and `index` are available in the template context for accessing information about the rated item.

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

You can use emojis of your choice as rating symbol by specifying them as template content within the `emptyTemplate` tag directive.

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

You can use SVG icons of your choice as rating symbol by specifying them as template content within the `emptyTemplate` and `fullTemplate` tag directive.

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

You can use PNG images of your choice as rating symbol by specifying them as template content within the `emptyTemplate` and `fullTemplate` tag directives.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rating/templates/png-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rating/templates/png-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rating/templates/png-template-cs1" %}
