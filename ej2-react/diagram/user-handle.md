---
layout: post
title: User handle in React Diagram component | Syncfusion
description: Learn here all about User handle in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: User handle 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# User handle in React Diagram component

User handles are used to add frequently used commands around the selector.

## Create user handle

To create user handles, define and add them to the [`userHandles`](https://helpej2.syncfusion.com/react/documentation/api/diagram/selectorModel/#userhandles) collection of the [`selectedItems`](https://ej2.syncfusion.com/react/documentation/api/diagram#selectAll#selecteditems-selectormodel) property. The [`name`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#name) property of userHandles is used to define the name of the user handle, which can then be used at runtime for identification and customization. The [`pathData`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#pathdata) property is used to define the path data of userhandle. 

The following example shows how to render user handle.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/es5UserHandle-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/es5UserHandle-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/interaction/es5UserHandle-cs3" %}

## Customize User handle click

When the user handle is clicked, the [`onUserHandleMouseDown`](https://ej2.syncfusion.com/react/documentation/api/diagram/#onuserhandlemousedown) event allows us to identify which user handle was clicked using the name property of userHandle. Based on this name, we can customize the diagram elements accordingly. Several events are triggered while interacting with a user handle. In the following example, we use the [`onUserHandleMouseDown`](https://ej2.syncfusion.com/react/documentation/api/diagram/#onuserhandlemousedown) event to clone nodes on user handle click.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/es5UserHandle-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/es5UserHandle-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/interaction/es5UserHandle-cs4" %}

## Alignment

User handles can be aligned relative to the node boundaries. It has [`margin`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#margin), [`offset`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#offset), [`side`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#side), [`horizontalAlignment`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#horizontalalignment), and [`verticalAlignment`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#verticalalignment) properties to align user handle based on user's needs.

### Offset

The [`offset`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#offset), property of [`userHandles`](https://helpej2.syncfusion.com/react/documentation/api/diagram/selectorModel/#userhandles) aligns the user handle based on fractions. For example, 0 represents the top-left corner, 1 represents the top-right corner, and 0.5 represents the top-center.

### Side

The [`side`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#side) property of [`userHandles`](https://helpej2.syncfusion.com/react/documentation/api/diagram/selectorModel/#userhandles) aligns the user handle using the following options: [`Top`](https://ej2.syncfusion.com/react/documentation/api/diagram/side#top), [`Bottom`](https://ej2.syncfusion.com/react/documentation/api/diagram/side#bottom), [`Left`](https://ej2.syncfusion.com/react/documentation/api/diagram/side#left), and [`Right`](https://ej2.syncfusion.com/react/documentation/api/diagram/side#right).

### Horizontal and vertical alignments

The [`horizontalAlignment`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#horizontalalignment) property of [`userHandles`](https://helpej2.syncfusion.com/react/documentation/api/diagram/selectorModel/#userhandles)  is used to set how the user handle is horizontally aligned at the position based on the [`offset`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#offset). The [`verticalAlignment`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#verticalalignment) property is used to set how user handle is vertically aligned at the position.

### Margin for the user handle

The [`margin`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#margin) property adds blank space to any of the four sides of the user handle, allowing for precise displacement.

In the following example, the user handle is aligned to the bottom-right corner of the node.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/es5UserHandle-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/es5UserHandle-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/interaction/es5UserHandle-cs5" %}

The following table shows all the possible alignments of user handle around the node.

| Offset | side | Output |
| -------- | -------- | -------- |
| 0 | Left |![user handle for node](images/userhandleAlign1.png)|
| 0 | Right |![user handle for node](images/userhandleAlign2.png)|
| 0 | Top |![user handle for node](images/userhandleAlign3.png)|
| 0 | Bottom |![user handle for node](images/userhandleAlign4.png)|
| 1 | Left |![user handle for node](images/userhandleAlign5.png)|
| 1 | Right |![user handle for node](images/userhandleAlign6.png)|
| 1 | Top |![user handle for node](images/userhandleAlign7.png)|
| 1 | Bottom |![user handle for node](images/userhandleAlign8.png)|

## User handle tooltip

The diagram provides support to show a tooltip when the mouse hovers over any user handle. To show the tooltip on mouse hover, set the [`tooltip`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#tooltip) property of the user handle with the tooltip [`content`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramTooltipModel/#content) as shown in the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/es5UserHandle-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/es5UserHandle-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/interaction/es5UserHandle-cs6" %}

You can also customize other properties of the tooltip, such as [`position`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramTooltipModel/#position), [`width`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramTooltipModel/#width), [`height`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramTooltipModel/#height), etc. For more information refer to the [`tooltip`](./tooltip.md) section.

## Appearance

The appearance of the user handle can be customized by using the [`size`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#size), [`borderColor`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#bordercolor), [`backgroundColor`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#backgroundcolor), [`borderWidth`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#borderwidth), [`visible`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#visible), and [`pathColor`](https://helpej2.syncfusion.com/react/documentation/api/diagram/userHandleModel/#pathcolor) properties of the userHandles.  

The following example demonstrates, how to use these properties to customize the appearance of user handle

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/es5UserHandle-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/es5UserHandle-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/interaction/es5UserHandle-cs2" %}

## Multiple user handle

Multiple user handles can be rendered for the selected objects (nodes/connectors) at a time to perform different operations.

### Disable Nodes and disable Connectors

User handles are typically defined within the [`selectedItems`](https://ej2.syncfusion.com/react/documentation/api/diagram#selectAll#selecteditems-selectormodel) property of the diagram, applying them universally to both nodes and connectors. However, in some scenarios, specific user handles may need to be excluded from connectors or nodes selectively. To address this, the disableNodes and disableConnectors properties come into play. These properties allow certain user handles to be disabled based on the type of selected item.

In the example below, multiple user handles are utilized for various functionalities, with some handles hidden selectively for nodes or connectors depending on their intended functionality.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/es5MultipleUserHandle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/es5MultipleUserHandle-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/interaction/es5MultipleUserHandle-cs1" %}

## Different types of user handle

Diagram provides support to render different types of user handles:

* `Source`: Renders an image as a user handle using an image source.
* `Content`: Renders a user handle using SVG content.
* `pathData`: Renders a user handle using custom path data.
* `template`: Renders a user handle using a predefined template ([`userHandleTemplate`](https://ej2.syncfusion.com/react/documentation/api/diagram/#userhandletemplate)) defined in the diagram.

The precedence order for user handles is as follows:

1. pathData
2. Content
3. Source
4. userHandleTemplate

This means that if multiple options are used for the user handle, the one with higher precedence will be rendered.

The below example code demonstrating different types of user handles.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/es5UserHandleTypes-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/es5UserHandleTypes-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/interaction/es5UserHandleTypes-cs1" %}

## User handle events

When interacting with user handles, certain events are triggered that can be used to customize the appearance and functionality of the handles. The user handle events are explained below.

* [`click`](https://ej2.syncfusion.com/react/documentation/api/diagram/#click) - Triggered when the user handle is clicked.

* [`onUserHandleMouseEnter`](https://ej2.syncfusion.com/react/documentation/api/diagram/#onuserhandlemouseenter) - Triggered when the mouse enters the user handle region.
* [`onUserHandleMouseDown`](https://ej2.syncfusion.com/react/documentation/api/diagram/#onuserhandlemousedown) - Triggered when the mouse is pressed down on the user handle.
* [`onUserHandleMouseUp`](https://ej2.syncfusion.com/react/documentation/api/diagram/#onuserhandlemouseup) - Triggered when the mouse is released on the user handle.
* [`onUserHandleMouseLeave`](https://ej2.syncfusion.com/react/documentation/api/diagram/#onuserhandlemouseleave) - Triggered when the mouse leaves the user handle region.

In the following example, the above events are used to customize the appearance of user handles.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/es5UserHandleEvents-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/es5UserHandleEvents-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/interaction/es5UserHandleEvents-cs1" %}

## Fixed user handles

Fixed user handles are used to perform specific actions when interacted with. Unlike regular user handles, [`fixedUserHandles`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/) are defined within the node/connector object, allowing different fixed user handles to be added to different nodes.

### Create fixed user handles

To create the [`fixedUserHandles`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/), define and add them to the collection of [`nodes`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeModel/) and [`connectors`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectorModel/). The [`pathData`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#pathdata) property of [`fixedUserHandles`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/) is used to define the path data for the fixed user handle. The [`id`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#id) property in `fixedUserHandles` assigns a unique identifier to each handle. This identifier helps locate and modify fixed user handles during runtime. You can handle the click event of a fixed user handle using the [`fixedUserHandleClick`](https://ej2.syncfusion.com/react/documentation/api/diagram/#fixeduserhandleclick) event. This event allows customization based on the type of fixed user handle clicked.

The following code example demonstrates how to create fixed user handles for nodes and connectors and how to handle fixed user handle click:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/es5FixedUserHandle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/es5FixedUserHandle-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/interaction/es5FixedUserHandle-cs1" %}

>Note: The fixed user handle id need to be unique.

### Alignment

Fixed user handles can be aligned relative to the node boundaries. It has [`margin`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/marginModel/), [`offset`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#offset), [`padding`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#padding) properties to align them based on user's needs.


#### Margin

Margin is an absolute value used to add some blank space in any one of its four sides. The fixed user handle can be displaced with the [`margin`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/marginModel/) property.

#### Offset

The  [`offset`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#offset) property of fixed user handle is used to align the user handle based on the `x` and `y` points. (0,0) represents the top-left corner and (1,1) represents the bottom-right corner.

#### Padding

The [`padding`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#padding) is used to leave the space that is inside the fixed user handle between the icon and border.

The following example demonstrates how to align fixed user handle for both node and connector.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/es5FixedUserHandle-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/es5FixedUserHandle-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/interaction/es5FixedUserHandle-cs2" %}

The following table shows all the possible alignments of fixed user handle around the node.

| Offset | Margin | Output |
| -------- | -------- | -------- |
| (0,0) | Right = 20 |![fixed user handle for node](images/topleft.png)|
| (0.5,0) | Bottom = 20 |![fixed user handle for node](images/topcenter.png)|
| (1,0) | Left = 20 |![fixed user handle for node](images/topright.png)|
| (0,0.5) | Right = 20 |![fixed user handle for node](images/leftcenter.png)|
| (0,1) | Left = 20 |![fixed user handle for node](images/rightcenter.png)|
| (0,1) | Right = 20 |![fixed user handle for node](images/bottomleft.png)|
| (0.5,1) | Top = 20 |![fixed user handle for node](images/bottomcenter.png)|
| (1,1) | Left = 20 |![fixed user handle for node](images/bottomright.png)|

>Note: Both `displacement` and `alignment` are applicable only to connector fixed user handles.

#### Customizing the connector fixed user handle

The connector fixed user handle can be aligned relative to the connector boundaries. It has alignment, displacement and offset settings. The [`displacement`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectorFixedUserHandleModel/#displacement) property displaces the handle from its aligned position and its functioning only when the [`alignment`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectorFixedUserHandleModel/#alignment) property is set to 'After' or 'Before'.

##### Offset

The [`offset`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectorFixedUserHandleModel/#offset), property of fixed user handle aligns the fixed user handle based on fractions. For example, 0 represents the left or top corner, 1 represents the bottom or right corner, and 0.5 represents the center.

##### Alignment

The connector’s fixed user handle can be aligned over its segment path using the [`alignment`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectorFixedUserHandleModel/#alignment) property of fixed user handle.

The following table shows all the possible offset and alignment combinations of connector fixed user handle.

| Offset | Alignment | Output |
| -------- | -------- | -------- |
| 0 | Before |![fixed user handle align before offset 0](images/before0.png)|
| 0.5 | Before |![fixed user handle align before offset 0.5](images/before0.5.png)|
| 1 | Before |![fixed user handle align before offset 1](images/before1.png)|
| 0 | Center |![fixed user handle align center offset 0](images/center0.png)|
| 0.5 | Center |![fixed user handle align center offset 0.5](images/center0.5.png)|
| 1 | Center |![fixed user handle align center offset 1](images/center1.png)|
| 0 | After |![fixed user handle align after offset 0](images/after0.png)|
| 0.5 | After |![fixed user handle align after offset 0.5](images/after0.5.png)|
| 1 | After |![fixed user handle for align after offset 1](images/after1.png)|

##### Displacement

The [`displacement`](https://ej2.syncfusion.com/react/documentation/api/diagram/connectorFixedUserHandleModel/#displacement) property displaces the handle from its aligned position based on the provided x and y value.

The following table shows all the possible alignment and displacement combinations of fixed user handle.

| Displacement | Alignment | Output |
| -------- | -------- | -------- |
| x=10 | Before |![fixed user handle for node](images/xbefore.png)|
| x=10 | After |![fixed user handle for node](images/xafter.png)|
| y=10 | Before |![fixed user handle for node](images/ybefore.png)|
| y=10 | After |![fixed user handle for node](images/yafter.png)|

>Note: Displacement will not be done if the alignment is set to be center.

The following code explains how to customize the alignment of connector fixed user handle.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/es5ConnectorFixedUserHandle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/es5ConnectorFixedUserHandle-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/interaction/es5ConnectorFixedUserHandle-cs1" %}

### Fixed user handle tooltip

The diagram provides support to show a tooltip when the mouse hovers over any fixed user handle. To show the tooltip on mouse hover, set the [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#tooltip) property of the fixed user handle with the tooltip [`content`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramTooltipModel/#content) as shown in the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/es5ConnectorFixedUserHandle-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/es5ConnectorFixedUserHandle-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/interaction/es5ConnectorFixedUserHandle-cs3" %}

You can also customize other properties of the tooltip, such as [`position`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramTooltipModel/#position), [`width`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramTooltipModel/#width), [`height`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramTooltipModel/#height), etc. For more information refer to the [`tooltip`](./tooltip) section.

### Appearance

The appearance of the fixed user handle can be customized by using the [`cornerRadius`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#cornerradius), [`fill`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#fill), [`handleStrokeColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#handlestrokecolor), [`handleStrokeWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#handlestrokewidth), [`iconStrokeColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#iconstrokecolor), [`iconStrokeWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#iconstrokewidth) and [`visibility`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#visibility) properties of the fixed user handles.

#### Size

The [`height`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#height) and [`width`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#width) properties of fixed user handle is used to define the size of the fixed user handle.

#### Style

The fixed user handle's  [`iconStrokeColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#iconstrokecolor) and [`iconStrokeWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#iconstrokewidth) property used to change the stroke color and stroke width of the given `pathData`.

The fixed user handle's [`handleStrokeColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#handlestrokecolor) and [`handleStrokeWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#handlestrokewidth), properties are used to define the stroke color and stroke width of the fixed user handle and the [`fill`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#fill), property is used to define the fill color of fixed user handle.

The [`cornerRadius`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#cornerradius) property of the fixed user handle is used to apply border radius for the fixed user handle.

The [`visibility`](https://ej2.syncfusion.com/react/documentation/api/diagram/nodeFixedUserHandleModel/#visibility) property of the fixed user handle enables or disables the visibility of fixed user handle.

The following example demonstrates, how to use these properties to customize the appearance of the fixed user handle.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/es5CustomizingFixedUserHandle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/es5CustomizingFixedUserHandle-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/interaction/es5CustomizingFixedUserHandle-cs1" %}

#### Customizing Fixed User Handles with HTML Templates

Fixed user handles are interactive elements added to nodes and connectors. Their appearance can be customized using HTML templates. To render fixed user handle with HTML templates, we need to create an HTML element inside a `<script>` tag then add the template reference using the [`fixedUserHandleTemplate`](https://ej2.syncfusion.com/react/documentation/api/diagram/#fixeduserhandletemplate) property in the diagram model.

 {% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/es5FixedUserHandleTemplate-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/es5FixedUserHandleTemplate-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/interaction/es5FixedUserHandleTemplate-cs1" %}

### Fixed user handle events

When interacting with fixed user handles, certain events are triggered that can be used to customize the appearance and functionality of the handles. The fixed user handle events are explained below.


* [`click`](https://ej2.syncfusion.com/react/documentation/api/diagram/#click) - Triggered when the fixed user handle is clicked.
* [`onFixedUserHandleMouseEnter`](https://ej2.syncfusion.com/react/documentation/api/diagram/#onfixeduserhandlemouseenter) - Triggered when the mouse enters the fixed user handle region.
* [`onFixedUserHandleMouseDown`](https://ej2.syncfusion.com/react/documentation/api/diagram/#onfixeduserhandlemousedown) - Triggered when the mouse is pressed down on the fixed user handle.
* [`onFixedUserHandleMouseUp`](https://ej2.syncfusion.com/react/documentation/api/diagram/#onfixeduserhandlemouseup) - Triggered when the mouse is released on the fixed user handle.
* [`onFixedUserHandleMouseLeave`](https://ej2.syncfusion.com/react/documentation/api/diagram/#onfixeduserhandlemouseleave) - Triggered when the mouse leaves the fixed user handle region.
* [`fixedUserHandleClick`](https://ej2.syncfusion.com/react/documentation/api/diagram/fixedUserHandleClickEventArgs/) - Triggered when the fixed user handle is clicked.

In the following example, the above events are used to customize the appearance of fixed user handles.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/interaction/es5FixedUserHandleEvents-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/interaction/es5FixedUserHandleEvents-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/interaction/es5FixedUserHandleEvents-cs1" %}