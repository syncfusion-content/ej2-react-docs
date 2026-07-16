---
layout: post
title: Real-Time Collabortion in React Block Editor component | Syncfusion
description: Enable real-time collaborative editing in the React Block Editor component of Syncfusion Essential JS 2 with user presence and version history.
platform: ej2-react
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Real-Time Collaboration in React Block Editor component

The Block Editor supports real-time collaborative editing, enabling multiple users to work on the same document simultaneously. Collaboration is powered by **Yjs**, a Conflict-free Replicated Data Type (CRDT) framework that synchronizes document changes across all connected users and automatically resolves conflicts.

With collaboration enabled, users can:

* Edit the same document in real time.
* View remote user cursors and selections.
* Track active collaborators.
* Perform collaboration-aware undo and redo operations.
* Create, restore, compare, export, and import document versions.

Try the live demo [here](https://ej2.syncfusion.com/showcase/react/blockeditor-collaborative-editing/)*

## Prerequisites

Before enabling collaboration, install the `yjs` library and a Yjs provider. See [Yjs Providers](https://docs.yjs.dev/ecosystem/connection-provider) to choose the right provider for your use case.

Inject the `Collaboration` module into the Block Editor before use.

{% raw %}
```typescript
import { BlockEditorComponent, Collaboration, Inject } from '@syncfusion/ej2-react-blockeditor';

<BlockEditorComponent>
<Inject services={[Collaboration]} />
</BlockEditorComponent>
```
{% endraw %}

## Yjs Providers

A Yjs provider handles the transport of document updates between connected users. Choose a provider based on your deployment requirements.

| Provider | Type | Use Case |
| -------- | ---- | -------- |
| `y-websocket` | Self-hosted | Production deployments with your own WebSocket server. |
| `y-webrtc` | Peer-to-peer | Quick local testing and development; no server required. |
| `y-indexeddb` | Local storage | Offline persistence within a single browser. |
| [Hocuspocus](https://tiptap.dev/docs/hocuspocus/getting-started/overview) | Open-source server | Scalable Node.js server with pluggable storage and Redis support. |
| [Liveblocks](https://liveblocks.io/) | Fully managed | Hosted WebSocket infrastructure with REST API and DevTools. |
| [PartyKit](https://www.partykit.io/) | Serverless | Serverless provider on Cloudflare; ideal for prototyping. |

> **Note:** For development and testing, `y-webrtc` or PartyKit allow you to get started without a server. For production, use `y-websocket` or a managed provider such as Liveblocks or Hocuspocus for reliable, persistent synchronization.

## Configure collaboration settings

Use the `collaborationSettings` property of type `CollaborationSettingsModel` to configure collaboration settings for your Block Editor. It provides properties such as `provider`, `enableAwareness`, `adapter` and `versionHistory` which allows to customize the collaboration behavior.

## Getting Started

The following steps will help you set up real-time collaboration in the Block Editor using `Yjs`.

### Step 1: Create a Yjs document

Create a shared Yjs document and XML fragment.

{% raw %}
```typescript
import * as Y from 'yjs';

const yDoc = new Y.Doc();
const yFragment = yDoc.getXmlFragment('blockeditor');
```
{% endraw %}

### Step 2: Create a Yjs adapter

Create an adapter that provides the Yjs runtime and the shared fragment to the Block Editor.

{% raw %}
```typescript
import * as Y from 'yjs';
import { YjsAdapter } from '@syncfusion/ej2-react-blockeditor';

const adapter: YjsAdapter = {
    yRuntime: Y,
    yXmlFragment: yFragment
};
```
{% endraw %}

### Step 3: Configure a provider

Create a provider that connects users to the same shared document. The following example uses `y-websocket` for production use. For local development, replace it with `y-webrtc` or a PartyKit provider — no server setup is required.

**Production (y-websocket):**

{% raw %}
```typescript
import { WebsocketProvider } from 'y-websocket';

const provider = new WebsocketProvider(
    'wss://your-server-url',
    'document-room-id',
    yDoc
);
```
{% endraw %}

**Development (y-webrtc):**

{% raw %}
```typescript
import { WebrtcProvider } from 'y-webrtc';

const provider = new WebrtcProvider('document-room-id', yDoc);
```
{% endraw %}

### Step 4: Enable Collaboration

Pass the adapter and provider to the Block Editor through the `collaborationSettings` property.

{% raw %}
```ts
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';


<BlockEditorComponent
    collaborationSettings={{
        adapter: adapter,
        provider: provider
    }}
/>
```
{% endraw %}

## User presence and remote cursors

The Block Editor can display remote cursors, text selection overlays, and user details on hover. To enable these user presence features, set `enableAwareness` to `true` in `collaborationSettings` property.

{% raw %}
```typescript
<BlockEditorComponent
    collaborationSettings={{
        adapter: adapter,
        provider: provider,
        enableAwareness: true
    }}
/>
```
{% endraw %}

## Configure the current user

Set the current user's display name and cursor highlight color using the `users` and `currentUserId` properties. The `avatarBgColor` value is used for that user's remote cursor and text selection overlay. The users property includes `id`, `user` and `avatarBgColor`.

{% raw %}
```typescript
<BlockEditorComponent
    users={[{
        id: 'user-1',
        user: 'John Doe',
        avatarBgColor: '#e74c3c'
    }]}
    currentUserId='user-1'
/>
```
{% endraw %}

### Get active users

Retrieve all currently connected users using the `users` property in the block editor.

{% raw %}
```typescript
const blockEditorRef = useRef(null);
const users = blockEditorRef.current?.users;
```
{% endraw %}

## Version history

`Version History` allows you to capture document snapshots and restore earlier versions. This is a built-in capability of the Block Editor and does not require a third-party service.

### Enable version history

Inject the `VersionHistory` module and configure the `versionHistory` property under `collaborationSettings` property.

{% raw %}
```typescript
import { BlockEditorComponent, VersionHistory, Inject } from '@syncfusion/ej2-react-blockeditor';

const myStorage = new CustomVersionStorage(`blockeditor-${uniqueId}`);

<BlockEditorComponent
    collaborationSettings={{
        adapter: adapter,
        provider: provider,
        versionHistory: {
            storage: myStorage,
            snapshotInterval: 3000
        }
    }}
> <Inject services={[VersionHistory]} />
</BlockEditorComponent>
```
{% endraw %}

### Configure snapshot storage

Version snapshots need to be persisted to enable version history across browser sessions. Implement the `IVersionStorage` interface to provide a custom storage backend for managing snapshots. You can use IndexedDB, a backend database, or any other storage solution suitable for your deployment.

The `IVersionStorage` interface defines the following methods:

| Method | Signature | Description |
| -------- | -------- | ----------- |
| `saveSnapshot` | `(snapshot: VersionSnapshot): Promise<void>` | Persist a snapshot. |
| `loadAllSnapshots` | `(): Promise<VersionSnapshot[]>` | Load all persisted snapshots, ordered by timestamp ascending. |
| `loadSnapshot` | `(id: string): Promise<VersionSnapshot \| null>` | Load a single snapshot by id. |
| `deleteSnapshot` | `(id: string): Promise<void>` | Permanently remove a snapshot by id. |
| `clearAll` | `(): Promise<void>` | Remove all snapshots from storage. |

### Access the version history instance

After the Block Editor initializes, retrieve the version history instance and wait for snapshot data to load before calling any version history methods.

{% raw %}
```typescript
const blockEditorRef = useRef(null);
const versionHistory = blockEditorRef.current?.getVersionHistory();
await versionHistory.whenReady();
```
{% endraw %}

### Methods

The following are the methods available in the `IVersionHistory`:

#### Create a snapshot

Creates a new snapshot of the current document state with an optional label and metadata.

{% raw %}
```typescript
const snapshot = await versionHistory.createSnapshot({
    label: 'Before major update',
    modifiedBy: currentUserId
});
```
{% endraw %}

#### List snapshots

Retrieves all saved snapshots or a paginated subset. Snapshots are returned in chronological order.

{% raw %}
```typescript
// Retrieve all snapshots
const snapshots = versionHistory.getSnapshots();

// Retrieve a paginated subset — getSnapshots(skip, take)
const snapshots = versionHistory.getSnapshots(20, 40);
```
{% endraw %}

#### Rename a snapshot

Updates the label or metadata of an existing snapshot without modifying its content.

{% raw %}
```typescript
await versionHistory.renameSnapshot(snapshotId, 'Release Candidate');
```
{% endraw %}

#### Restore a snapshot

Reverts the document to a previously saved snapshot state. The current document state is automatically backed up before restoration.

{% raw %}
```typescript
await versionHistory.restoreSnapshot(snapshotId);
```
{% endraw %}

> **Note:** When a snapshot is restored, the current document state is automatically 
> backed up before the restore operation is applied.

#### Compare versions

Compares two snapshots to identify differences such as added, removed, or modified content.

{% raw %}
```typescript
const diff = versionHistory.compareVersions(snapshotIdA, snapshotIdB);
```
{% endraw %}

The returned `VersionDiff` object provides a summary of the differences between the two selected versions.

#### Export a snapshot

Serializes a snapshot into a portable format that can be stored externally or transferred between systems.

{% raw %}
```typescript
const exported = await versionHistory.exportSnapshot(snapshotId);
```
{% endraw %}

Exported snapshots can be stored externally or transferred between systems.

#### Import a snapshot

Imports a previously exported snapshot back into the version history storage.

{% raw %}
```typescript
const imported = await versionHistory.importSnapshot(exported);
```
{% endraw %}

### Events

Use the following event callbacks in `versionHistory` settings to respond to snapshot lifecycle events.

#### snapshotCreated

Triggered when a new snapshot is created.

{% raw %}
```typescript
<BlockEditorComponent
    collaborationSettings={{
        versionHistory: {
            storage: myStorage,
            snapshotCreated: ({ snapshot }) => {
                console.log(snapshot.id);
            }
        }
    }}
/>
```
{% endraw %}

#### snapshotRestored

Triggered when a snapshot is restored.

{% raw %}
```typescript
<BlockEditorComponent
    collaborationSettings={{
        versionHistory: {
            storage: myStorage,
            snapshotRestored: ({ snapshot, backupSnapshot }) => {
                console.log(snapshot.label);
            }
        }
    }}
/>
```
{% endraw %}

## Best Practices

* **Use WebRTC or PartyKit for development** - These providers require no server setup and are ideal for local testing and prototyping before moving to a production provider.
* **Use WebSocket-based providers in production** - `y-websocket`, Hocuspocus, or a managed service like Liveblocks provides reliable, low-latency, persistent synchronization at scale.
* **Use stable room identifiers** - Use a unique document ID as the collaboration room name to prevent unintended document sharing between different documents.
* **Persist snapshots externally** - Store snapshots in a database or cloud storage to preserve version history across sessions.
* **Enable awareness selectively** - Disable `enableAwareness` when user presence information is not required to reduce network and processing overhead.

## Troubleshooting

### Changes Are Not Synchronizing

Verify the following:

* All users are connected to the same collaboration room.
* The provider connection is active.
* The shared Yjs document is correctly configured.

### Remote Cursors Are Not Visible

Verify the following:

* `enableAwareness` is set to `true`.
* The configured provider supports the Yjs awareness protocol.
* User information is set via the `users` and `currentUserId` properties.
* Each user has a unique `id` value.

### Remote User Names Are Not Appearing on Cursors

Verify the following:

* The `user` field is populated for all entries in the `users` array.

### Version History Is Not Available

Verify the following:

* The `VersionHistory` module is injected into the Block Editor.
* A valid `IVersionStorage` implementation is provided.
* `whenReady()` has been awaited before accessing snapshots.
