---
layout: post
title: State persistence in React TreeGrid | Syncfusion
description: Learn here all about State persistence in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: State persistence
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in React TreeGrid

State persistence maintains the TreeGrid state in the browser’s [localStorage](https://www.w3schools.com/html/html5_webstorage.asp#) across page refreshes and intra-tab navigation.

TreeGrid stores its model in local storage when [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/treegrid/#enablepersistence) is set to **true**.

## Get or set local storage value

When [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/treegrid/#enablepersistence) is true, TreeGrid property values are saved in `window.localStorage`. Use `getItem` and `setItem` to retrieve or assign the stored model.

```ts
        // Get the TreeGrid model.
        const value: string = window.localStorage.getItem('treegridTreeGrid') as string; //"treegridTreeGrid" is component name + component id.
        const model: object = JSON.parse(value);
```

```ts
        // Set the TreeGrid model.
        window.localStorage.setItem('treegridTreeGrid', JSON.stringify(model)); //"treegridTreeGrid" is component name + component id.
```

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) for data presentation and manipulation options.
