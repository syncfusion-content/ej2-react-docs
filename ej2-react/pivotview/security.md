---
layout: post
title: Security in React Pivot Table | Syncfusion
description: Learn security practices for React Pivot Table data sources, templates, server APIs, reports, drill-through, persistence, and exports.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Security in React Pivot Table

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Pivot Table displays and transforms data supplied by an application. The component does not replace application-level authentication, authorization, validation, output encoding, or transport security. Apply these controls when binding data, accepting report definitions, rendering templates, connecting to remote services, and exporting results.

The main risks to consider are:

* **Cross-Site Scripting (XSS)** - Validate and encode untrusted field values, captions, hyperlink values, and template content so malicious scripts cannot run in Pivot Table cells or dialogs.
* **Content Security Policy (CSP)** - Restrict the resources that the application can load and execute.
* **Cross-Site Request Forgery (CSRF)** - Protect authenticated requests to remote data services, report-storage endpoints, and server-side pivot engines with anti-forgery controls.
* **Injection attacks** - Validate report settings, filters, calculated-field formulas, queries, file names, and server parameters before processing them.
* **Unauthorized data disclosure** - Restrict the fields, members, raw records, and exported data that each user is allowed to access.

## Secure data binding and server processing

Use only application-controlled data sources and HTTPS endpoints. Do not accept an arbitrary Pivot Table `url`, connection string, cube URL, or adaptor endpoint from a user. On every remote endpoint:

* Authenticate the request and authorize access to the requested dataset, report, tenant, fields, and operations.
* Apply row-level and field-level authorization on the server. Hiding a field in the Field List or Pivot Table is not an access-control boundary.
* Parse requests into a defined model, permit only supported actions and fields, validate types and limits, and reject unknown properties.
* Use parameterized database queries. Never concatenate filter members, sort values, report names, or calculated-field input into SQL, MDX, file paths, or commands.
* Limit request size, result size, member counts, drill-through rows, export size, execution time, and request rate to reduce denial-of-service risk.
* Return generic errors to the client and keep credentials, connection strings, query text, and stack traces out of responses and logs.

For the [server-side pivot engine](./server-side-pivot-engine), attach short-lived authentication credentials through the `beforeServiceInvoke` event and `args.internalProperties.headers`. Validate the token and permissions on every server action. Configure CORS for explicit trusted origins, methods, and headers; CORS does not provide authentication or CSRF protection.

## Templates, hyperlinks, and XSS

React escapes values interpolated as text, but HTML introduced through custom templates, DOM APIs, third-party renderers, or application callbacks still requires care. Treat cell values, captions, tooltip content, hyperlink targets, and imported report data as untrusted.

* Prefer JSX text interpolation instead of `dangerouslySetInnerHTML`.
* If HTML is required, sanitize it with a maintained sanitizer before rendering. Do not rely on regex-based filtering.
* Permit only trusted hyperlink protocols and destinations. Reject values such as `javascript:` URLs. When opening an allowed external link in a new tab, prevent the new page from accessing its opener and suppress referrer information when required by the application's privacy policy.
* Avoid constructing selectors, styles, or DOM fragments directly from field values.
* Deploy a restrictive CSP and avoid broad script allowances. Add only the style, font, image, worker, and connection sources required by the application.

## Reports, calculated fields, and persistence

Saved reports can contain field names, filters, sort settings, drilled members, formatting rules, calculated-field formulas, and service configuration. Treat imported or restored reports as input rather than trusted application configuration.

* Validate imported report JSON against a list of permitted values and reject unsupported fields, operations, excessively large arrays, and unexpected URLs.
* Authorize saved-report create, read, update, and delete operations per user and tenant. Use opaque identifiers instead of trusting report names as storage keys or paths.
* Validate calculated-field formulas with the Pivot Table formula grammar and restrict the referenced fields to those the user may access. Do not evaluate formulas with JavaScript `eval` or convert them directly into database expressions.
* The [`enablePersistence`](./state-persistence) feature stores Pivot Table state in browser local storage. Do not place access tokens, credentials, connection strings, or sensitive raw data in persisted component state. Clear user-specific state during sign-out and prevent state from crossing users on shared devices.

## Drill-through, editing, and exports

Drill-through, editing, and export operations can reveal more data than the summarized view:

* Enforce authorization again when retrieving drill-through records or applying edits. Do not rely on `allowDrillThrough`, UI visibility, or disabled controls as security controls.
* Validate edited values on the server and use concurrency controls where lost updates would matter.
* Apply the same row-level and field-level permissions to Excel, CSV, PDF, chart, and print output as to the on-screen report.
* Treat export callbacks and file names as untrusted input. Neutralize spreadsheet formula injection when user-controlled text can begin with characters interpreted as formulas by spreadsheet applications.
* Avoid embedding secrets, internal identifiers, or hidden fields in exported documents, metadata, or error messages.

## Deployment checklist

Before deploying a Pivot Table application:

* Keep React, Syncfusion packages, server frameworks, database drivers, and export dependencies on supported patched versions.
* Use HTTPS, secure cookies, appropriate `SameSite` settings, CSRF protection, and a restrictive CSP.
* Store secrets on the server or in a secret manager, never in source code or browser-delivered configuration.
* Test authorization for direct API calls, drill-through, saved reports, editing, and every export path.
* Log security-relevant failures without logging tokens, credentials, complete reports, or sensitive data values.
* Monitor dependency advisories and retest security controls after upgrades.

For framework-wide guidance and CSP directives, HTML sanitization, and browser storage considerations, see the [Syncfusion React security](https://ej2.syncfusion.com/react/documentation/common/security) documentation.
