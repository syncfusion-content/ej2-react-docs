---
layout: post
title: API TooltipModel in React Tooltip component | Syncfusion
description: Learn here all about API TooltipModel in Syncfusion React Tooltip component of Syncfusion Essential JS 2 and more.
control: API TooltipModel 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# API TooltipModel in React Tooltip component

Interface for a class React Tooltip

## Properties

### afterClose [`EmitType<TooltipEventArgs>`](https://ej2.syncfusion.com/react/documentation/api-tooltipEventArgs.html)

We can trigger `afterClose` event when the React Tooltip Component gets closed.

### afterOpen [`EmitType<TooltipEventArgs>`](https://ej2.syncfusion.com/react/documentation/api-tooltipEventArgs.html)

We can trigger `afterOpen` event after the React Tooltip Component gets opened.

### beforeClose [`EmitType<TooltipEventArgs>`](https://ej2.syncfusion.com/react/documentation/api-tooltipEventArgs.html)

We can trigger `beforeClose` event before the React Tooltip hides from the screen. If returned false, then the React Tooltip is no more hidden.

### beforeCollision [`EmitType<TooltipEventArgs>`](https://ej2.syncfusion.com/react/documentation/api-tooltipEventArgs.html)

We can trigger `beforeCollision` event for every collision fit calculation.

### beforeOpen [`EmitType<TooltipEventArgs>`](https://ej2.syncfusion.com/react/documentation/api-tooltipEventArgs.html)

We can trigger `beforeOpen` event before the React Tooltip is displayed over the target element.
When one of its arguments `cancel` is set to true, the React Tooltip display can be prevented. This event is mainly used for the purpose of refreshing the React Tooltip positions dynamically or to set customized styles in it and so on.

### beforeRender [`EmitType<TooltipEventArgs>`](https://ej2.syncfusion.com/react/documentation/api-tooltipEventArgs.html)

We can trigger [beforeRender](https://ej2.syncfusion.com/react/documentation/api/tooltip/#beforerender) event before the React Tooltip and its contents are added to the DOM.
When one of its arguments `cancel` is set to true, the React Tooltip can be prevented from rendering on the page. This event is mainly used for the purpose of customizing the React Tooltip before it shows up on the screen.
For example, to load the AJAX content or to set new animation effects on the React Tooltip, this event can be opted.
Refer the documentation {@link http://ej2.syncfusion.com/documentation/tooltip/content.html?lang=typescript#dynamic-content-via-ajax here} to know more about this property with demo.

### created  `EmitType<Object>`

We can trigger `created` event after the React Tooltip component is created.

### destroyed  `EmitType<Object>`

We can trigger `destroyed` event when the React Tooltip component is destroyed.

### animation [`AnimationModel`](https://ej2.syncfusion.com/react/documentation/api-animationModel.html)

We can set the same or different animation option to React Tooltip while it is in open or close state.
Refer the documentation {@link http://ej2.syncfusion.com/documentation/tooltip/animation.html?lang=typescript here} to know more about this property with demo.

### closeDelay `number`

It is used to close the React Tooltip after a specified delay in milliseconds.

### content `string` &#124;  `HTMLElement`

It is used to display the content of React Tooltip which can be both string and HTML Elements.
Refer the documentation {@link http://ej2.syncfusion.com/documentation/tooltip/content.html?lang=typescript here} to know more about this property with demo.

### cssClass `string`

It is used to customize the React Tooltip which accepts custom CSS class names that defines specific user-defined styles and themes to be applied on the React Tooltip element.

### enablePersistence `boolean`

Enable or disable persisting component's state between page reloads.

### enableRtl `boolean`

It is used to display the React Tooltip and content of React Tooltip from right to left direction.

### height `string` &#124;  `number`

It is used to set the height of React Tooltip component which accepts both string and number values.
When React Tooltip content gets overflow due to height value then the scroll mode will be enabled. Refer the documentation {@link http://ej2.syncfusion.com/documentation/tooltip/setting-dimension.html?lang=typescript here} to know more about this property with demo.

### isSticky `Boolean`

It is used to display the React Tooltip in an open state until closed by manually.
Refer the documentation {@link http://ej2.syncfusion.com/documentation/React Tooltip/open-mode.html?lang=typescript#sticky-mode here} to know more about this property with demo.

### locale `string`

Overrides the global culture and localization value for this component. Default global culture is 'en-US'.

### mouseTrail `boolean`

It allows the React Tooltip to follow the mouse pointer movement over the specified target element. Refer the documentation {@link http://ej2.syncfusion.com/documentation/tooltip/position.html?lang=typescript#mouse-trailing here} to know more about this property with demo.

### offsetX `number`

It sets the space between the target and React Tooltip element in X axis.

### offsetY `number`

It sets the space between the target and React Tooltip element in Y axis.

### openDelay `number`

It is used to open the React Tooltip after the specified delay in milliseconds.

### opensOn `string`

It is used to determine the device mode to display the React Tooltip content.
If it is in desktop, it will show the React Tooltip content when hovering on the target element.
If it is in touch device, it will show the React Tooltip content when tap and holding on the target element.

### position [`Position`](https://ej2.syncfusion.com/react/documentation/api-position.html)

It is used to set the position of React Tooltip element, with respect to Target element.

### showTipPointer `boolean`

It is used to show or hide the tip pointer of React Tooltip.

### target `string`

It is used to denote the target selector where the React Tooltip need to be displayed. The target element is considered as parent container.

### tipPointerPosition [`TipPointerPosition`](https://ej2.syncfusion.com/react/documentation/api-tipPointerPosition.html)

It is used to set the position of tip pointer on React Tooltip.
When it sets to auto, the tip pointer auto adjusts within the space of target's length and does not point outside.
Refer the documentation {@link http://ej2.syncfusion.com/documentation/tooltip/position.html?lang=typescript#tip-pointer-positioning here} to know more about this property with demo.

### width `string` &#124;  `number`

It is used to set the width of React Tooltip component which accepts both string and number values.
When set to auto, the React Tooltip width gets auto adjusted to display its content within the viewable screen.
