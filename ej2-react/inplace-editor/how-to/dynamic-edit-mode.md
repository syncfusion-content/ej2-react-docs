---
layout: post
title: Move input to edit mode in React In-place Editor | Syncfusion
description: Open the Syncfusion React In-place Editor in edit mode on initial load using enableEditMode, and toggle edit mode at runtime from a checkbox event.
control: In-place Editor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to dynamically move input to edit mode in React In-place Editor

Open the editor automatically when the In-place Editor component loads by setting the [enableEditMode](https://ej2.syncfusion.com/react/documentation/api/inplace-editor#enableeditmode) property to `true`.

In the following sample, the editor opens at initial load. Toggling the checkbox dynamically toggles the edit mode on and off.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/dynamic-edit-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/dynamic-edit-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/dynamic-edit-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/dynamic-edit-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/dynamic-edit-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/dynamic-edit-cs2" %}