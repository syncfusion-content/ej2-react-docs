---
layout: post
title: Smart AI with Syncfusion React Pivot Table | Syncfusion
description: Configure a Syncfusion React Pivot Table with validated natural-language actions using AI AssistView and a secure server.
platform: ej2-react
control: Pivot Table
documentation: ug
---

# Smart AI with Syncfusion React Pivot Table

The Syncfusion React Pivot Table can be integrated with the React AI AssistView to let users configure reports with natural-language commands. Users can filter, sort, summarize, reorganize, format, and visualize a report while the field list, grouping bar, toolbar, and chart controls remain available.

The assistant does not apply arbitrary component properties. Each prompt is converted into exactly one validated Pivot action, and only the corresponding report setting is changed.

> The AI integration described here is an application pattern. It requires a server-side LLM integration. Never expose an OpenAI API key in React code or a `VITE_*` environment variable.

## How it works

1. The user submits a prompt through `AIAssistViewComponent`.
2. The client sends the prompt and compact report metadata to `/api/pivot-action`.
3. The server authenticates and rate-limits the request.
4. If `OPENAI_API_KEY` is configured, the OpenAI Responses API returns one structured action. Otherwise, the sample uses deterministic mock actions.
5. The server validates the action and checks all referenced fields and members.
6. The client validates the response again and immutably updates only the Pivot setting on the allow list.
7. AI AssistView displays the applied change or a recovery message.

The raw dataset, event handlers, templates, credentials, and data-source configuration are never sent to the model.

## Supported AI operations

| Operation | Example prompt | Pivot Table setting |
| --- | --- | --- |
| Member filter | "Show only France and Germany" | `filterSettings` with `Include` |
| Label filter | "Show countries containing land" | `filterSettings` with `Label` |
| Value filter | "Show countries with Amount greater than 100000" | `filterSettings` with `Value` |
| Clear filter | "Clear the Country filter" | Removes one or all filter settings |
| Member sort | "Sort Country descending" | `sortSettings` |
| Clear sort | "Clear Country sorting" | Removes one or all sort settings |
| Aggregation | "Average units sold" | `values[].type` |
| Move field | "Move Quarter to rows" | `rows`, `columns`, `values`, or `filters` |
| Expand or collapse | "Expand Country" | `expandAll` or field `expandAll` |
| Primary view | "Switch to chart view" | `displayOption.primary` |
| Chart type | "Use a line chart" | `chartSettings.chartSeries.type` |
| Totals | "Hide row grand totals" | subtotal and grand-total visibility |
| Number format | "Format Amount as currency with two decimals" | `formatSettings` |

Calculated fields, conditional formatting, drill-through, export, report persistence, raw-record editing, and data-source replacement are intentionally not automated. Keep these operations in the standard Pivot Table UI or introduce a separate reviewed contract.

## Prerequisites

- Node.js 18 or later and npm 8 or later.
- React 18 or later with TypeScript and Vite. The sample is verified with React 19.2.
- Syncfusion Essential JS 2 packages from the same release family.
- A Syncfusion license key or active trial.
- An OpenAI API key with available API billing quota for live mode.
- For production, an OIDC provider and Redis.

Register the Syncfusion license as described in the [React licensing guide](https://ej2.syncfusion.com/react/documentation/licensing/license-key-registration).

The reference sample was verified with Node.js 24, React 19.2.3, Syncfusion `34.1.x`, OpenAI JavaScript SDK 5.23.2, Express 4.22.2, and Zod 3.25.76. Use the repository lock files to reproduce the exact dependency graph.

## Use the complete sample

For the fastest path, clone and run the complete sample:

```bash
git clone https://github.com/SyncfusionExamples/react-assistive-pivot.git
cd react-assistive-pivot
```

The sample contains the complete runnable client, server, environment templates, schemas, reducers, tests, and CI configuration. Use the manual steps below when you want to recreate the integration in an existing application.

## Create the projects manually

Create a React TypeScript project and a sibling server project:

```bash
npm create vite@latest assistive-pivot -- --template react-ts
mkdir server
cd server
npm init -y
cd ..
```

Use the following structure:

```text
assistive-pivot/
  src/
    ai/                         Action types, reducer, and API client
    frontend/                   PivotView and AI AssistView UI
    data/                       Trusted sample data
  .env.example
server/
  auth.js                       OIDC authentication boundary
  rate-limit.js                 Redis and development rate-limit stores
  schema.js                     Request and action validation
  ai-model.js                   Live and deterministic mock adapters
  server.js                     Express routes and error mapping
  .env.example
```

When building manually, create each listed file before adding the corresponding snippets. Use the complete sample when you need the full file contents instead of focused excerpts.

## Install and configure the packages

Install the client packages:

```bash
cd assistive-pivot
npm install @syncfusion/ej2-base @syncfusion/ej2-react-pivotview @syncfusion/ej2-react-interactive-chat @syncfusion/ej2-react-popups @syncfusion/ej2-tailwind3-theme
npm install --save-dev vitest
```

Install the server packages:

```bash
cd ../server
npm install cors dotenv express express-rate-limit jose openai rate-limit-redis redis zod
```

Use the current Tailwind 3 theme-package styles in the global stylesheet. The PivotView and AI AssistView getting-started guides use component `index.css` files from `@syncfusion/ej2-tailwind3-theme`; the Dialog import is included because the assistant is rendered inside a modal dialog:

```css
@import "@syncfusion/ej2-tailwind3-theme/styles/pivotview/index.css";
@import "@syncfusion/ej2-tailwind3-theme/styles/ai-assistview/index.css";
@import "@syncfusion/ej2-tailwind3-theme/styles/dialog/index.css";
```

Register the Syncfusion license before rendering the application:

```tsx
import { registerLicense } from '@syncfusion/ej2-base';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const syncfusionLicenseKey = import.meta.env.VITE_SYNCFUSION_LICENSE_KEY;
if (syncfusionLicenseKey) {
  registerLicense(syncfusionLicenseKey);
}

createRoot(document.getElementById('root')!).render(<App />);
```

Create `assistive-pivot/.env.example`:

```env
VITE_API_BASE_URL=http://localhost:3000
VITE_SYNCFUSION_LICENSE_KEY=
VITE_ACCESS_TOKEN=
```

`VITE_SYNCFUSION_LICENSE_KEY` is intended for client registration. Never place `OPENAI_API_KEY` in a `VITE_*` variable.
`VITE_ACCESS_TOKEN` is only for local integration testing. Production applications should obtain a fresh token from the deployed application's OIDC client at runtime.

## Define a typed action contract

Do not accept arbitrary properties from the model. Define a discriminated union for the supported operations:

```ts
const dimensions = [
  'Country', 'Year', 'Quarter', 'Product_Categories', 'Products', 'Order_Source'
] as const;
const measures = ['Sold', 'Amount'] as const;

type Dimension = typeof dimensions[number];
type Measure = typeof measures[number];
type FilterCondition =
  | 'Equals' | 'DoesNotEquals' | 'Contains' | 'DoesNotContains'
  | 'BeginWith' | 'EndsWith' | 'GreaterThan' | 'GreaterThanOrEqualTo'
  | 'LessThan' | 'LessThanOrEqualTo' | 'Between' | 'NotBetween';
type Aggregate = 'Sum' | 'Avg' | 'Count' | 'DistinctCount' | 'Min' | 'Max' | 'Product';
type Axis = 'rows' | 'columns' | 'values' | 'filters';
type ChartType = 'Column' | 'Bar' | 'Line' | 'Spline' | 'Area' | 'StackingColumn' | 'StackingBar';
type TotalsTarget = 'rowSubtotals' | 'columnSubtotals' | 'rowGrandTotals' | 'columnGrandTotals';
type NumberFormat = 'N0' | 'N2' | 'C0' | 'C2' | 'P0' | 'P2';

type PivotAction =
  | { action: 'memberFilter'; field: Dimension; mode: 'Include' | 'Exclude'; items: string[]; message: string }
  | { action: 'labelFilter'; field: Dimension; condition: FilterCondition; value1: string; value2?: string; message: string }
  | { action: 'valueFilter'; field: Dimension; measure: Measure; condition: FilterCondition; value1: number; value2?: number; message: string }
  | { action: 'clearFilter'; field?: Dimension; message: string }
  | { action: 'sort'; field: Dimension; order: 'Ascending' | 'Descending' | 'None'; message: string }
  | { action: 'clearSort'; field?: Dimension; message: string }
  | { action: 'aggregate'; measure: Measure; aggregation: Aggregate; message: string }
  | { action: 'moveField'; field: Dimension | Measure; axis: Axis | 'remove'; message: string }
  | { action: 'expand'; field?: Dimension; expanded: boolean; message: string }
  | { action: 'view'; primary: 'Table' | 'Chart'; message: string }
  | { action: 'chartType'; chartType: ChartType; message: string }
  | { action: 'totals'; target: TotalsTarget; visible: boolean; message: string }
  | { action: 'numberFormat'; measure: Measure; format: NumberFormat; message: string };
```

Validate the action on the server and client. Check action-specific properties, enum values, field names, measure names, member values, collection sizes, message length, and unknown properties. The snippets below focus on the integration points; use the complete [sample project on GitHub](https://github.com/SyncfusionExamples/react-assistive-pivot) for the runnable client reducer and server schema.

The server must use a discriminated schema, reject unknown properties, and verify trusted references after parsing:

```ts
const action = actionSchema.parse(candidate);
validateTrustedReferences(action, request.context);
```

The client must reject a response before applying it unless its action name, required properties, and enum values match the same contract.

## Send compact report context

Send metadata required to interpret the prompt, not business records:

```ts
interface ReportContext {
  rows: string[];
  columns: string[];
  values: Array<{ name: string; type: string }>;
  filters: string[];
  availableFields: readonly string[];
  availableMembers: Record<string, string[]>;
  primaryView: 'Table' | 'Chart';
}

interface AssistantRequest {
  prompt: string;
  reportId: string;
  context: ReportContext;
}
```

Build this object from the current trusted configuration:

```ts
function createReportContext(
  settings: IDataOptions,
  primaryView: 'Table' | 'Chart',
  trustedMembers: Record<string, string[]>
): ReportContext {
  return {
    rows: (settings.rows ?? []).map(item => item.name ?? ''),
    columns: (settings.columns ?? []).map(item => item.name ?? ''),
    values: (settings.values ?? []).map(item => ({
      name: item.name ?? '',
      type: String(item.type ?? 'Sum')
    })),
    filters: (settings.filters ?? []).map(item => item.name ?? ''),
    availableFields: [...dimensions, ...measures],
    availableMembers: trustedMembers,
    primaryView
  };
}
```

Derive `trustedMembers` from an application-controlled dataset or authorized metadata endpoint. Do not copy member values from a prompt or model response.

The client request is:

```json
{
  "prompt": "Show only France and Germany",
  "reportId": "sales-pivot",
  "context": {
    "rows": ["Country"],
    "columns": ["Year"],
    "values": [{ "name": "Amount", "type": "Sum" }],
    "filters": [],
    "availableFields": ["Country", "Year", "Amount"],
    "availableMembers": { "Country": ["France", "Germany"] },
    "primaryView": "Table"
  }
}
```

Send the request with an `AbortSignal` so the AI AssistView stop-response action can cancel it. Check the HTTP status and validate the response before returning it:

```ts
interface AssistantResponse {
  action: PivotAction;
  mode: 'live' | 'mock';
}

async function requestPivotAction(
  prompt: string,
  reportId: string,
  context: ReportContext,
  signal: AbortSignal,
  accessToken?: string
): Promise<AssistantResponse> {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const response = await fetch(`${apiBaseUrl}/api/pivot-action`, {
    method: 'POST',
    signal,
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
    },
    body: JSON.stringify({ prompt, reportId, context })
  });

  const text = await response.text();
  let body: unknown = {};
  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      throw new Error('The assistant service returned an unreadable response.');
    }
  }

  if (!response.ok) {
    const error = body as { error?: string };
    throw new Error(error.error ?? 'The assistant request failed.');
  }
  return validateAssistantResponse(body);
}
```

## Configure AI AssistView

Use `AIAssistViewComponent` for prompt entry, built-in suggestions, conversation history, response actions, keyboard support, and stop-response behavior. The following excerpt assumes that `assistRef`, `requestController`, `suggestions`, stable `toolbarSettings`, templates, and `onPromptRequest` are defined in the containing component:

```tsx
import {
  AIAssistViewComponent,
  ViewDirective,
  ViewsDirective,
  type PromptRequestEventArgs,
  type ToolbarSettingsModel
} from '@syncfusion/ej2-react-interactive-chat';

<AIAssistViewComponent
  ref={assistRef}
  id="pivot-ai-assist"
  width="100%"
  height="100%"
  showHeader={true}
  toolbarSettings={toolbarSettings}
  promptSuggestions={suggestions}
  promptSuggestionsHeader="Try a supported Pivot action"
  promptSuggestionItemTemplate={suggestionTemplate}
  promptPlaceholder="Ask to filter, sort, summarize, reorganize, or visualize the report"
  showClearButton={true}
  enableScrollToBottom={true}
  enableAttachments={false}
  speechToTextSettings={{ enable: false }}
  bannerTemplate={bannerTemplate}
  responseItemTemplate={responseTemplate}
  promptRequest={onPromptRequest}
  stopRespondingClick={() => requestController.current?.abort()}
>
  <ViewsDirective>
    <ViewDirective type="Assist" name="Pivot Assistant" iconCss="e-icons e-assistview-icon" />
  </ViewsDirective>
</AIAssistViewComponent>
```

Keep `toolbarSettings` referentially stable with `useMemo`. Recreating it for every render can cause third-party toolbar state to be rebuilt unnecessarily. The sample toolbar provides **Start new chat**, **Undo**, **Reset**, **Developer details**, and **Close** actions. Use `promptToolbarSettings` to customize prompt actions and `responseToolbarSettings` to customize response actions. Leave the default prompt toolbar actions (**Edit** and **Copy**) and response actions (**Copy**, **Like**, and **Dislike**) enabled unless the application has a reason to replace them.

In `onPromptRequest`, reject an empty prompt, prevent concurrent submissions, create an `AbortController`, call `requestPivotAction`, apply the validated action, and finish with `assistRef.current?.addPromptResponse(...)`. The complete AI AssistView and PivotView component is available in the [sample project on GitHub](https://github.com/SyncfusionExamples/react-assistive-pivot).

Attachments and speech input are disabled because this integration accepts text commands only and must not upload report data.

Render the AI AssistView inside a modal `DialogComponent` targeted inside the React root. Enable escape-to-close behavior, restore focus to the opener after closing, and size the dialog relative to the viewport.

## Configure the Pivot Table

Keep the standard Pivot features available so AI remains optional. Enable filtering in `dataSourceSettings`:

```ts
const dataSourceSettings: IDataOptions = {
  dataSource: trustedData,
  enableSorting: true,
  allowMemberFilter: true,
  allowLabelFilter: true,
  allowValueFilter: true,
  rows: [{ name: 'Country' }],
  columns: [{ name: 'Year' }],
  values: [{ name: 'Sold', type: 'Sum' }, { name: 'Amount', type: 'Sum' }]
};
```

The following component excerpt assumes the imported services and state shown by the complete sample:

```tsx
<PivotViewComponent
  ref={pivotRef}
  id="ai-pivot"
  dataSourceSettings={dataSourceSettings}
  width="100%"
  height={measuredHeight}
  gridSettings={{ columnWidth: 140, allowResizing: true }}
  displayOption={{ view: 'Both', primary: primaryView }}
  chartSettings={{ chartSeries: { type: chartType } }}
  enableValueSorting={true}
  allowCalculatedField={true}
  allowConditionalFormatting={true}
  allowNumberFormatting={true}
  showGroupingBar={true}
  showFieldList={true}
  showToolbar={true}
  toolbar={toolbar}
>
  <Inject services={[GroupingBar, FieldList, CalculatedField, Toolbar, ConditionalFormatting, NumberFormatting, PivotChart]} />
</PivotViewComponent>
```

If the Pivot Table must fill a responsive parent, give the parent an explicit height and pass a measured pixel height to the component. Create and clean up a `ResizeObserver` in an effect:

```ts
const pivotContainerRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const element = pivotContainerRef.current;
  if (!element) return;
  const updateHeight = () => {
    const style = getComputedStyle(element);
    const padding =
      Number.parseFloat(style.paddingTop) +
      Number.parseFloat(style.paddingBottom);
    setPivotHeight(Math.max(460, Math.floor(element.clientHeight - padding)));
  };
  updateHeight();
  const observer = new ResizeObserver(updateHeight);
  observer.observe(element);
  return () => observer.disconnect();
}, []);
```

## Apply validated actions

Clone the current `IDataOptions`, change only the target setting, and preserve unrelated arrays and `dataSource`.

For example, a member filter replaces only the filter for the selected field:

```ts
next.filterSettings = [
  ...(next.filterSettings ?? []).filter(item => item.name !== action.field),
  { name: action.field, type: action.mode, items: action.items }
];
```

For view changes, preserve `view: 'Both'` and change only `primary`. For chart-type actions, also select `'Chart'` as the primary view. Store a compact snapshot without raw data to implement undo.

Apply the remaining actions as follows:

| Action | Minimal update |
| --- | --- |
| `labelFilter` / `valueFilter` | Replace only the matching field entry in `filterSettings` |
| `clearFilter` / `clearSort` | Remove the requested field entry, or clear the collection when the field is omitted |
| `sort` | Replace only the matching field entry in `sortSettings` |
| `aggregate` | Change `type` on the matching value field |
| `moveField` | Remove the field from all axes and append it to the requested axis |
| `expand` | Change global `expandAll` or the selected row/column field |
| `totals` | Change only the requested subtotal or grand-total flag |
| `numberFormat` | Replace only the matching measure entry in `formatSettings` |

Value filters use `type: 'Value'` and store the numeric values as strings in `filterSettings`:

```ts
next.filterSettings = [
  ...(next.filterSettings ?? []).filter(item => item.name !== action.field),
  {
    name: action.field,
    type: 'Value',
    measure: action.measure,
    condition: action.condition,
    value1: String(action.value1),
    value2: action.value2 === undefined ? undefined : String(action.value2)
  }
];
```

Field movement must remove the field from every axis before appending it to the requested axis:

```ts
if (action.action === 'moveField') {
  for (const axis of ['rows', 'columns', 'values', 'filters'] as const) {
    next[axis] = (next[axis] ?? []).filter(item => item.name !== action.field);
  }
  if (action.axis !== 'remove') {
    next[action.axis] = [...(next[action.axis] ?? []), { name: action.field }];
  }
}
```

Totals and number-format actions should touch only their matching setting:

```ts
if (action.action === 'totals' && action.target === 'rowGrandTotals') {
  next.showGrandTotals = true;
  next.showRowGrandTotals = action.visible;
}

if (action.action === 'numberFormat') {
  next.formatSettings = [
    ...(next.formatSettings ?? []).filter(item => item.name !== action.measure),
    { name: action.measure, format: action.format }
  ];
}
```

The reducer must reject missing measures or fields and must never accept `dataSource`, URLs, callbacks, templates, or arbitrary component properties.

## Configure the server

Create `server/.env.example`, then copy it to `server/.env` for local development:

```env
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173,http://127.0.0.1:5173
OPENAI_API_KEY=
OPENAI_MODEL=gpt-5-mini

# Required in production
OIDC_ISSUER=https://identity.example.com/
OIDC_AUDIENCE=assistive-pivot-api
OIDC_JWKS_URI=https://identity.example.com/.well-known/jwks.json
ALLOWED_REPORT_IDS=sales-pivot
REDIS_URL=redis://localhost:6379

# Development defaults
DEV_USER_ID=local-developer
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX=30
```

When `OPENAI_API_KEY` is empty, the server starts in mock mode and returns deterministic validated actions for the built-in suggestions. When a key is available, it uses the OpenAI Responses API with strict JSON-schema output.

Environment variables:

| Variable | Purpose |
| --- | --- |
| `PORT` | HTTP listening port |
| `NODE_ENV` | Selects development or production behavior |
| `CORS_ORIGIN` | Comma-separated exact frontend origins |
| `OPENAI_API_KEY` | Server-only provider credential; empty enables mock mode |
| `OPENAI_MODEL` | Responses API model that supports strict JSON-schema output |
| `OIDC_ISSUER` | Expected token issuer URL |
| `OIDC_AUDIENCE` | Expected API audience |
| `OIDC_JWKS_URI` | HTTPS endpoint containing signing keys |
| `ALLOWED_REPORT_IDS` | Sample production report allowlist; replace with the deploying application's report-permission check |
| `REDIS_URL` | Redis connection URL for the production rate-limit store |
| `DEV_USER_ID` | Development-only local identity |
| `RATE_LIMIT_WINDOW_MS` | Rate-limit window in milliseconds |
| `RATE_LIMIT_MAX` | Maximum requests per authenticated subject in one window |

Implement the server in this order:

1. Load and validate the environment.
2. Fail production startup if OIDC, report authorization, or Redis configuration is missing.
3. Configure the exact CORS origins and a `32kb` JSON body limit.
4. Add development identity or production OIDC bearer-token validation.
5. Add the in-memory development limiter or Redis production limiter.
6. Validate `{ prompt, reportId, context }`.
7. Authorize the authenticated subject for `reportId`.
8. Generate a deterministic mock action or call `openai.responses.create`.
9. Validate the returned action and its trusted field/member references.
10. Return `{ action, mode }`.

The route should follow this shape:

```js
app.post('/api/pivot-action', authenticate, limiter, async (req, res) => {
  const parsed = requestSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'The assistant request is invalid.' });
  }
  if (!canAccessReport(req.auth, parsed.data.reportId)) {
    return res.status(403).json({ error: 'Access to this report is denied.' });
  }

  try {
    const candidate = mode === 'live'
      ? await createLiveAction(parsed.data.prompt, parsed.data.context)
      : createMockAction(parsed.data.prompt);
    const action = actionSchema.parse(candidate);
    validateTrustedReferences(action, parsed.data.context);
    return res.json({ action, mode });
  } catch (error) {
    const mapped = mapAssistantError(error);
    return res.status(mapped.status).json({ error: mapped.message });
  }
});
```

Use the complete Express route, OIDC middleware, Redis limiter, and OpenAI/mock adapter in the [sample project on GitHub](https://github.com/SyncfusionExamples/react-assistive-pivot) as the runnable server implementation.

Mock mode supports the built-in examples for filtering France and Germany, averaging `Sold`, switching to Chart, sorting Country, and clearing filters. Other mock prompts return HTTP 422 without changing the report.

Expose a health endpoint:

```json
{ "status": "ok", "mode": "mock" }
```

In production:

- Validate OIDC bearer tokens using the configured issuer, audience, signature, expiry, and JWKS endpoint.
- Obtain the access token through the deploying application's OIDC client and send it as `Authorization: Bearer <token>`.
- Authorize the authenticated subject for `reportId` before generating an action. Replace the sample `ALLOWED_REPORT_IDS` allowlist with the deploying application's report-permission store.
- Key rate limits by the authenticated token subject.
- Store rate limits in Redis so they are shared across instances and survive restarts.
- Fail startup when OIDC, report authorization, or Redis configuration is unavailable.
- Restrict CORS to the deployed frontend origin.

## Handle errors

Return predictable responses and leave the report unchanged after a failure:

| Status | Meaning | Response |
| --- | --- | --- |
| 200 | Valid action | `{ "action": PivotAction, "mode": "live" \| "mock" }` |
| 400 | Invalid client payload | `{ "error": "The assistant request is invalid." }` |
| 401 | Missing or invalid bearer token | `{ "error": "Authentication is required." }` |
| 403 | Authenticated user cannot access the report | `{ "error": "Access to this report is denied." }` |
| 422 | Unsupported or invalid action | `{ "error": "Try one of the supported Pivot actions." }` |
| 429 | Application request limit | `{ "error": "Too many requests. Try again shortly." }` |
| 429 | OpenAI billing quota exhausted | `{ "error": "The OpenAI API project has no available quota. Check API billing." }` |
| 502 | Invalid provider output | `{ "error": "The AI service returned an invalid action." }` |
| 503 | Provider, Redis, or JWKS unavailable | `{ "error": "The assistant service is temporarily unavailable." }` |

Do not classify provider failures by HTTP status alone. Inspect the provider error code or type to distinguish temporary request-rate limits from billing-quota exhaustion. Retry temporary rate limits with bounded exponential retry delays; quota errors require available API credits or a project budget. Map provider details to safe application messages rather than returning raw provider errors to the browser.

For provider behavior, refer to the OpenAI API [error codes](https://developers.openai.com/api/docs/guides/error-codes#api-errors), [rate limits](https://developers.openai.com/api/docs/guides/rate-limits), and [API billing setup](https://developers.openai.com/api/docs/quickstart#add-credits-to-keep-building) guidance.

Abort and timeout errors should report cancellation or timeout without applying an action. Invalid JSON, schema failures, Redis connection failures, and JWKS retrieval failures must also leave the report unchanged.

## Run the sample

From the cloned sample root, or from the parent folder that contains both `server` and `assistive-pivot`, start the backend:

```bash
cd server
cp .env.example .env
npm install
npm start
```

On Windows PowerShell, use `Copy-Item .env.example .env`.

Start the frontend in another terminal from the same parent folder:

```bash
cd assistive-pivot
cp .env.example .env
npm install
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env`.

Open `http://localhost:5173`. The sample works in mock mode without an OpenAI key. Add the key only to `server/.env`, stop and restart the server, and verify that `http://localhost:3000/health` reports `live`.

The `live` health value confirms that a key is configured; it does not confirm available billing quota, model access, or a successful provider request. Execute one supported prompt to verify the complete live path.

## Verify the integration

Verify the following behavior:

1. The AI Assistant toolbar item opens the modal.
2. Built-in AI AssistView suggestions execute through `promptRequest`.
3. Filter, sort, aggregation, field movement, expand/collapse, view, chart, totals, and format actions preserve unrelated settings.
4. Stop responding cancels the active request.
5. Undo restores the previous compact report state and reset restores the initial report.
6. Unsupported prompts and invalid members do not change the Pivot Table.
7. Mock and live modes are visibly identified.
8. The dialog remains keyboard accessible and usable at 320 CSS pixels.
9. The Pivot Table fills its measured parent height.

Run the automated checks:

```bash
npm run lint
npm test
npm run build

cd ../server
npm test
```

The repository package manifests define `lint`, `test`, and `build`. When creating the project manually, add this entry to the client scripts:

```json
"test": "vitest run"
```

Add this entry to the server scripts:

```json
"test": "node --test --test-isolation=none"
```

## Security considerations

- Keep provider credentials on the server.
- Never put `OPENAI_API_KEY` in a `VITE_*` variable.
- Authenticate and authorize every production request.
- Validate at both trust boundaries.
- Never accept arbitrary component properties, URLs, templates, callbacks, or data-source changes.
- Do not send raw records, hidden fields, credentials, or personal information to the model.
- Apply prompt, payload, output, execution-time, and per-user request limits.
- Log operational metadata without recording secrets or sensitive prompt contents.

## Troubleshooting

Local sample and UI:

| Problem | Cause | Resolution |
| --- | --- | --- |
| AI Assistant button does not open | Custom toolbar click is not bound | Add a direct `click` callback to the custom toolbar item |
| Suggestions do not respond | Origin is not allowed or `promptRequest` is missing | Allow both configured local origins and bind `promptRequest` |
| Toolbar icons appear repeatedly | `toolbarSettings` is recreated on every render | Memoize the AI AssistView toolbar configuration |
| Suggestions occupy half the dialog | Both suggestion wrapper and list use a grid | Keep the wrapper block-level and apply the grid only to its `<ul>` |
| Pivot Table does not fill its parent | The parent has no definite height | Set an explicit parent height and pass a measured component height |
| Filtering has no effect | Field or member is unavailable | Validate against trusted metadata |
| Average does not apply | `Average` was returned instead of `Avg` | Normalize to the Pivot aggregation identifier |
| A license message is shown | No Syncfusion license key is registered | Add `VITE_SYNCFUSION_LICENSE_KEY` to `assistive-pivot/.env` and restart the frontend |

Deployment and API:

| Problem | Cause | Resolution |
| --- | --- | --- |
| API reports mock mode | `OPENAI_API_KEY` is absent | Configure the key in `server/.env` and restart |
| API returns quota error | The API project has no credits or budget | Configure OpenAI API billing; ChatGPT subscriptions do not provide API quota |
| Browser blocks the API | CORS origin differs between `localhost` and `127.0.0.1` | Add the exact frontend origin to `CORS_ORIGIN` |
| A previous request applies late | An older request was not canceled | Abort or version in-flight requests |
| Live mode fails after health succeeds | Key exists but lacks quota or model access | Check API billing, project budget, and model permissions |
| Production API will not start | OIDC, report authorization, or Redis configuration is missing or unavailable | Verify issuer, audience, JWKS URL, report authorization, Redis URL, and service connectivity |
| Request times out | Provider or network response exceeded the application timeout | Abort the request, keep the report unchanged, and allow a bounded retry |

## GitHub reference

To see the complete implementation, check the sample project on [GitHub](https://github.com/SyncfusionExamples/react-assistive-pivot).

This guide explains the integration and shows focused excerpts. The repository contains the complete runnable client, server, environment templates, schemas, reducers, tests, and CI configuration.

## See also

- [React Pivot Table getting started](https://ej2.syncfusion.com/react/documentation/pivotview/getting-started)
- [React AI AssistView getting started](https://ej2.syncfusion.com/react/documentation/ai-assistview/getting-started)
- [AI AssistView toolbar items](https://ej2.syncfusion.com/react/documentation/ai-assistview/toolbar-items)
- [AI AssistView templates](https://ej2.syncfusion.com/react/documentation/ai-assistview/templates)
- [Filtering in the React Pivot Table](https://ej2.syncfusion.com/react/documentation/pivotview/filtering)
- [Sorting in the React Pivot Table](https://ej2.syncfusion.com/react/documentation/pivotview/sorting)
- [Aggregation in the React Pivot Table](https://ej2.syncfusion.com/react/documentation/pivotview/aggregation)
- [Pivot Chart](https://ej2.syncfusion.com/react/documentation/pivotview/pivot-chart)
- [Number formatting](https://ej2.syncfusion.com/react/documentation/pivotview/number-formatting)
- [Show or hide totals](https://ej2.syncfusion.com/react/documentation/pivotview/show-hide-totals)
- [OpenAI API error codes](https://developers.openai.com/api/docs/guides/error-codes#api-errors)
- [OpenAI API rate limits](https://developers.openai.com/api/docs/guides/rate-limits)
- [OpenAI API billing setup](https://developers.openai.com/api/docs/quickstart#add-credits-to-keep-building)
