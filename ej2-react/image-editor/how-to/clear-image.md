---
layout: post
title: Clear an Image in Image Editor Component | Syncfusion
description: Learn here all about How to Clear an Image in Image editor Component of Syncfusion Essential JS 2 and more.
control: Clear an Image
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Clear an Image

The [`clearImage`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#clearimage) method in the image editor control is indeed useful for scenarios where you need to ensure that the image editor is emptied before reopening it, especially if the editor is used within a dialog. By using `clearImage` before closing the dialog, you can ensure that the editor does not retain the previously loaded image when the dialog is reopened. This allows users to start fresh with a new image selection.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs48/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs48/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs48/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs48" %}