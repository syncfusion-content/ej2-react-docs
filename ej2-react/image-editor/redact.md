---
layout: post
title: Redact in React Image Editor | Syncfusion
description: Conceal sensitive information in images by applying blur or pixelate redact effects to specific regions in the React Image Editor.
control: Redact 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Redact in React Image Editor

The redact feature in an Image Editor is a valuable tool that empowers users to conceal sensitive information by applying blur or pixel effects to specific areas of an image. This feature is particularly valuable for protecting privacy and complying with data protection regulations, making it easier to securely share images without compromising sensitive information.

## Apply redact to the image

The Image Editor control includes a [`drawRedact`](https://ej2.syncfusion.com/react/documentation/api/image-editor#drawRedact) method, which allows you to draw redaction on an image. This method takes six parameters that define how the redact should be carried out:

* type: Specifies the type of redaction to be drawn on the image such as `blur` or `pixelate`. If not specified, the default type is `blur`.

* x: Specifies the x-coordinate of the redact area in pixels. If not specified, the redact is positioned at the horizontal center of the image.

* y: Specifies the y-coordinate of the redact area in pixels. If not specified, the redact is positioned at the vertical center of the image.

* width: Specifies the width of the redact area in pixels. The default value is 100.

* height: Specifies the height of the redact area in pixels. The default value is 50.

* value: Specifies the blur radius (pixels) for `blur` type or the pixel size for `pixelate` type. The default value is 20 (pixels).

## Selecting a redact

Use the [`selectRedact`](https://ej2.syncfusion.com/react/documentation/api/image-editor#selectRedact) method to select a redact by id. Use `getRedacts()` to obtain redact objects (with ids). This method takes one parameter that defines how the redact should be selected:

* id: Specifies the shape id of the redact to select.

## Deleting a redact

Use the [`deleteRedact`](https://ej2.syncfusion.com/react/documentation/api/image-editor#deleteRedact) method to delete a redact by id. Use `getRedacts()` to obtain redact objects (with ids). This method takes one parameter that defines how the redact should be deleted:

* id: Specifies the shape id of the redact to delete.

## Updating a redact

Use the [`updateRedact`](https://ej2.syncfusion.com/react/documentation/api/image-editor#updateRedact) method to update an existing redact. Use `getRedacts()` to obtain redact objects. This method takes two parameters that define how the redact should be updated:

* setting: Specifies the redact settings to update for the shape.

* isSelected: Specifies whether to show the redact in the selected state.

## Getting redacts

Use the [`getRedacts`](https://ej2.syncfusion.com/react/documentation/api/image-editor#getRedacts) method to get all redact details that are drawn on the image editor.

Here's an example demonstrating how to draw, select, delete, update, and get redacts on an image using the [`drawRedact`](https://ej2.syncfusion.com/react/documentation/api/image-editor#drawRedact), [`selectRedact`](https://ej2.syncfusion.com/react/documentation/api/image-editor#selectRedact), [`deleteRedact`](https://ej2.syncfusion.com/react/documentation/api/image-editor#deleteRedact), [`updateRedact`](https://ej2.syncfusion.com/react/documentation/api/image-editor#updateRedact) and [`getRedacts`](https://ej2.syncfusion.com/react/documentation/api/image-editor#getRedacts) methods.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs56/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs56/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs56/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs56" %}