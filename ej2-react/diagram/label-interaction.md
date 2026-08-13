---
layout: post
title: Label Interaction in React Diagram | Syncfusion®
description: Enable label interaction on React Diagram nodes and connectors for select, drag, rotate, resize, and edit operations at runtime.
control: Label Interaction
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Label Interaction in React Diagram

The Diagram component allows labels to be interactive through selecting, dragging, rotating, and resizing operations. Label interaction is disabled by default. Enable label interaction using the `constraints` property of the label. You can also control specific interaction types by enabling individual constraints for selecting, dragging, rotating, or resizing. The following code demonstrates how to enable interactive mode.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Interaction-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Interaction-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Interaction-cs1" %}

## Constraints

The [`constraints`](https://helpej2.syncfusion.com/react/documentation/api/diagram/annotationModel#constraints) property of labels allows enabling or disabling specific label behaviors. The available [`AnnotationConstraints`](https://helpej2.syncfusion.com/react/documentation/api/diagram/annotationConstraints) values include `Select`, `Drag`, `Rotate`, `Resize`, `Edit`, `ReadOnly`, and `Interaction` (a combined flag of the common interactions). Use these constraints to control which interaction types are available for each label. The following code example shows how to enable Select, Drag, Rotate, and Resize constraints individually for a label.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Constraints-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Constraints-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Constraints-cs1" %}

## Label Editing

The Diagram component supports editing labels at runtime, both programmatically and interactively. By default, labels are in view mode. Labels can be switched to edit mode using two approaches:

### Programmatic Editing
By using [`startTextEdit`](https://helpej2.syncfusion.com/react/documentation/api/diagram#starttextedit) method to programmatically enter edit mode for a specific label. Capture the diagram instance via a `ref` so the method can be invoked, as shown below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Opacity-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Opacity-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Opacity-cs1" %}

### Interactive Editing
Labels can be edited interactively through user actions:
1. Double-clicking the label.
2. Selecting the item and pressing the F2 key.

Double-clicking any label enables editing mode, provided the label's `constraints` include the `AnnotationConstraints.Edit` value. When the editor loses focus, the label content is updated. The [`doubleClick`](https://helpej2.syncfusion.com/react/documentation/api/diagram#doubleclick) event triggers when double-clicking on nodes, connectors, or the diagram canvas. For the full list of label events, see [Label Events](./label-events).

## Label Rotation

The [`rotationReference`](https://helpej2.syncfusion.com/react/documentation/api/diagram/shapeAnnotationModel#rotationreference) property controls whether labels rotate relative to their parent node or remain fixed relative to the page. The following code examples demonstrate how to configure rotationReference for labels.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Rotation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Rotation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Rotation-cs1" %}

| Value | Description | Image |
| -------- | -------- | -------- |
| Page | When this option is set, the annotation remains fixed in its original orientation even if its parent node is rotated. | ![No_Rotation](images/page_rotationreference.gif) |
| Parent | When this option is set, the annotation rotates along with its parent node. | ![Rotation](images/parent_rotationreference.gif)|

## Read-only Labels

The Diagram component supports creating read-only labels that cannot be edited by users. Set the read-only constraint in the label's [`constraints`](https://helpej2.syncfusion.com/react/documentation/api/diagram/annotationModel#constraints) property. The following code demonstrates how to enable read-only mode.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Read-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Read-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Read-cs1" %}

## Drag Limits

The diagram control supports defining the [`dragLimit`](https://helpej2.syncfusion.com/react/documentation/api/diagram/annotationModel#draglimit) property for connector labels to restrict dragging within specified boundaries. The drag limit automatically updates the label position to the nearest segment offset when dragging.

Configure drag limit boundaries using the [`left`](https://helpej2.syncfusion.com/react/documentation/api/diagram/marginModel#left), [`right`](https://helpej2.syncfusion.com/react/documentation/api/diagram/marginModel#right), [`top`](https://helpej2.syncfusion.com/react/documentation/api/diagram/marginModel#top), and [`bottom`](https://helpej2.syncfusion.com/react/documentation/api/diagram/marginModel#bottom) properties of the `dragLimit` object (typed as `MarginModel`). These properties limit connector label dragging based on user-defined values.

Drag limits are disabled by default for connectors. Enable drag limits by setting the connector [`constraints`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector#constraints) to include drag functionality.

The following code demonstrates how to configure dragLimit for connector labels:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Interaction-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Interaction-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Interaction-cs2" %}

## Multiple Labels

Nodes and connectors support multiple labels. Each label can have independent properties and constraints. The following code demonstrates how to add multiple labels to nodes and connectors.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Multiple-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Multiple-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Multiple-cs1" %}

## See also

* [Labels](./labels)
* [Label appearance](./label-appearance)
* [Label events](./label-events)
