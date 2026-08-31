---
layout: post
title: Styles and Appearances in React Query Builder UI | Syncfusion
description: Style the React Query Builder UI by overriding CSS classes for group headers, rule containers, buttons, and joining lines, or use Theme Studio.
control: QueryBuilder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Styles and Appearances in React Query Builder UI

Customize the Query Builder appearance by overriding its default CSS styles. The following table lists the CSS classes and their corresponding Query Builder components. Additionally, you can create custom themes using the [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material). Note that the Theme Studio defaults to the `material` theme; switch the `?theme=` query-string to `tailwind3`, `bootstrap5`, `fluent2`, or `bootstrap4` to match your project's styling.

| CSS Class | Purpose |
|---|---|
| .e-group-header .e-btn | Customize the condition button |
| .e-group-body .e-rule-container | Customize the rule container |
| .e-group-container .e-group-header .e-dropdown-btn | Customize the Add Group/Condition button |
| .e-query-builder .e-group-header .e-deletegroup | Customize the Delete Group button |
| .e-query-builder .e-rule-field .e-rule-value-delete .e-rule-delete | Customize the Delete Condition button |
| .e-query-builder .e-rule-list > ::after, .e-query-builder .e-rule-list > ::before | Customize group joining lines |
| .e-query-builder .e-rule-container.e-joined-rule | Customize condition joining lines |