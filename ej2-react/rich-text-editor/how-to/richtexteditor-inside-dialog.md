---
layout: post
title: Integrating Rich Text Editor in Dialog Components | Syncfusion
description: Learn here all about Rich Text Editor Inside Dialog in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Integrating Rich Text Editor in Dialog Components
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Integrating Rich Text Editor in Dialog Components

When rendering the Rich Text Editor inside a Dialog component, the dialog container and its wrapper elements are initially styled with `display: none`. This styling prevents the editor's toolbar from calculating the proper offset width. As a result, the toolbar may render incorrectly, appearing above the edit area container.

To resolve this issue, we can utilize the [refreshUI](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#refreshui) method of the Rich Text Editor in conjunction with the [open](https://ej2.syncfusion.com/react/documentation/api/dialog#open) event. This approach ensures that the Rich Text Editor's UI is properly refreshed and rendered once the Dialog is visible.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/richtexteditor-inside-dialog-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/richtexteditor-inside-dialog-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/richtexteditor-inside-dialog-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/richtexteditor-inside-dialog-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/richtexteditor-inside-dialog-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/richtexteditor-inside-dialog-cs2" %}