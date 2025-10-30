---
layout: post
title: Mentions in React Rich Text Editor component | Syncfusion
description: Learn how to integrate and customize the Mentions in the Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Mentions
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Mentions in React Rich Text Editor Component

The Mention feature, integrated with the Syncfusion React Rich Text Editor via the [Mention](https://ej2.syncfusion.com/react/documentation/mention/getting-started/) component , enables users to tag or mention users or objects from a suggestion list. This functionality streamlines tagging by eliminating manual entry of names or identifiers, enhancing efficiency and accuracy.

## Setup and configuration

Use the [target](https://ej2.syncfusion.com/react/documentation/api/mention/#target) property of the Mention component to specify the `ID` of the content editable div element within the Rich Text Editor. When setting the target, make sure to append the suffix `_rte-edit-view` to the ID. This allows you to enable the Mention functionality within the Rich Text Editor, so that users can mention or tag other users or objects from the suggested list while editing the text.

## Using mentions

When users type the `@` symbol followed by a character the Rich Text Editor, a suggestion list appears, Users can then select an item from the list by:

* Clicking on it
* Typing the name of the item they want to tag

## Customizing suggestion list 

### Minimum input length for Mention suggestions

You can control when the suggestion list appears by setting the [minLength](https://ej2.syncfusion.com/react/documentation/api/mention/#minlength) property in the Mention component. This property defines the minimum number of characters a user must type after the mention character (@) to trigger the search action. This is especially useful when working with large datasets, as it helps reduce unnecessary queries and improves performance.

By default, minLength is set to 0, which means the suggestion list appears immediately after the mention character is entered. However, you can increase this value to delay the search until the user has typed a specific number of characters.

In the following example, the minLength is set to 3, so the suggestion list will only appear once the user types three or more characters after the @ symbol.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/mention-min-length-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/mention-min-length-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/mention-min-length-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/mention-min-length-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/mention-min-length-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/mention-min-length-cs2" %}

### Customizing suggestion list count

You can control the number of items displayed in the Mention suggestion list using the [suggestionCount](https://ej2.syncfusion.com/react/documentation/api/mention/#suggestioncount) property. This is particularly useful when working with large datasets, allowing you to limit the number of suggestions shown to the user.

By default, the suggestion list displays 25 items. You can customize this value to show fewer or more items based on your application's needs.

In the example below, the `suggestionCount` is set to 5, so only 5 items will be displayed in the suggestion list when the user types the mention character (@).

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/suggestion-count-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/suggestion-count-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/suggestion-count-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/suggestion-count-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/suggestion-count-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/suggestion-count-cs2" %}

### Customizing suggestion list using templates

#### Item template

You can customize how each item appears in the suggestion list using the [itemTemplate](https://ej2.syncfusion.com/react/documentation/api/mention/#itemtemplate) property. This allows you to display additional details such as email, role, or profile image alongside the mention name.

#### Display template 

Use the [displayTemplate](https://ej2.syncfusion.com/react/documentation/api/mention/#displaytemplate) property to define how the selected mention appears in the editor content.

For example, by default, the mention chip renders as:

```
<span contenteditable="false" class="e-mention-chip">@Selma Rose</span>

```
Using the `displayTemplate` property, you can customize it to render as a clickable link:

```
<a href="mailto:selma@gmail.com" title="selma@gmail.com">@Selma Rose</a>

```

This allows you to create more interactive and informative mentions within the editor.

In the following sample, we configured the following properties:

* [itemTemplate](https://ej2.syncfusion.com/react/documentation/api/mention/#itemtemplate) - Used to display the customized appearance in suggestion list.
* [displayTemplate](https://ej2.syncfusion.com/react/documentation/api/mention/#displaytemplate) - Used to customize how the selected value appears in the editor content.
* [allowSpaces](https://ej2.syncfusion.com/react/documentation/api/mention/#allowspaces) - Allow to continue search action if user enter space after mention character while searching.
* [suggestionCount](https://ej2.syncfusion.com/react/documentation/api/mention/#suggestioncount) - The maximum number of items that will be displayed in the suggestion list.


`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/mention-integration-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/mention-integration-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/mention-integration-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/mention-integration-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/mention-integration-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/mention-integration-cs2" %}

> [View Sample](https://ej2.syncfusion.com/react/demos/#/bootstrap5/rich-text-editor/mention-integration)

## See also

* [Mention](https://ej2.syncfusion.com/react/documentation/mention/getting-started/)