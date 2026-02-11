---
layout: post
title: Sorting customization in React Grid component | Syncfusion
description: Learn here all about Sorting customization in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Sorting 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Sorting customization in React Grid component

The appearance of the sorting icons and multi sorting icons in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component can be customized using CSS. Available Syncfusion<sup style="font-size:70%">&reg;</sup> [icons](https://ej2.syncfusion.com/react/documentation/appearance/icons#material) can be used based on the active theme.

## Customizing the grid sorting icon

The `.e-icon-ascending::before` and `.e-icon-descending::before` classes are used to style the sorting icons for ascending and descending order.

```css
.e-grid .e-icon-ascending::before {
    content: '\e7a3'; /* Icon code for ascending order */
}
.e-grid .e-icon-descending::before {
    content: '\e7b6'; /* Icon code for descending order */
}
```

![Grid sorting icon](../images/grid-sorting-icon.png)

## Customizing the grid multi sorting icon

The `.e-sortnumber` class is used to style the multi sorting icon.

```css
.e-grid .e-sortnumber {
    background-color: #deecf9;
    font-family: cursive;
}
```

![Grid multi sorting icon](../images/grid-multi-sorting-icon.png)