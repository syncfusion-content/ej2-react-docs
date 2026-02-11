---
layout: post
title: Aggregate Customization in React Grid component | Syncfusion
description: Learn here all about Aggregate customization in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Aggregate 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Aggregate Customization in React Grid component

The appearance of aggregate elements in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component can be customized using CSS. Below are examples for customizing the aggregate root element and the aggregate cell elements.

## Customizing the aggregate root element

The `.e-gridfooter` class is used to style the aggregate root element in the grid footer.

```css
.e-grid .e-gridfooter {
    font-family: cursive;
}
```

![Customize aggregate root element](../images/aggregate-root-element.png)

## Customizing the aggregate cell elements

The `.e-summaryrow` class is used to style the summary row, and the `.e-summarycell` class is used to style individual aggregate cells.

```css
.e-grid .e-summaryrow .e-summarycell {
    background-color: #deecf9;
}
```

![Customize aggregate cell element](../images/aggregate-cell-element.png)