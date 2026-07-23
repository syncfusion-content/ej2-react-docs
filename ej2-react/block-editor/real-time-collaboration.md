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

The Block Editor supports real-time collaborative editing, enabling multiple users to work on the same document simultaneously. Collaboration is powered by [**Yjs**](https://yjs.dev/), an open-source Conflict-free Replicated Data Type (CRDT) framework that synchronizes document changes across all connected users and automatically resolves conflicts.

With collaboration enabled, users can:

* Edit the same document in real time.
* View remote user cursors and selections.
* Track active collaborators.
* Perform collaboration-aware undo and redo operations.
* Create, restore, compare, export, and import document versions.

{% doccards %}
{% doccard text="Live Demo" link="https://ej2.syncfusion.com/showcase/react/blockeditor-collaborative-editing/" %}
{% enddoccards %}

## Quick Start

Get real-time collaboration working in just a few minutes using `y-websocket` and a simple WebSocket server in our Block Editor component.

### Step 1: Set up a basic Vite React Block Editor component

Follow the [Getting Started guide](./getting-started.md) to create a Vite-based React project with the Block Editor component. This ensures you have all required dependencies and the correct project structure before adding collaboration.

### Step 2: Install Yjs and the WebSocket provider

A Yjs provider handles the transport of document updates between connected users. Choose a provider based on your deployment requirements.

See [Yjs Providers](https://docs.yjs.dev/ecosystem/connection-provider) to choose the right provider for your use case.

| Provider | Type | Use Case |
| -------- | ---- | -------- |
| `y-websocket` | Self-hosted | Production deployments with your own WebSocket server. |
| `y-webrtc` | Peer-to-peer | Quick local testing and development; no server required. |
| `y-indexeddb` | Local storage | Offline persistence within a single browser. |
| [Hocuspocus](https://tiptap.dev/docs/hocuspocus/getting-started/overview) | Open-source server | Scalable Node.js server with pluggable storage and Redis support. |
| [Liveblocks](https://liveblocks.io/) | Fully managed | Hosted WebSocket infrastructure with REST API and DevTools. |
| [PartyKit](https://www.partykit.io/) | Serverless | Serverless provider on Cloudflare; ideal for prototyping. |

Install the required libraries using npm:

```powershell
npm install yjs y-websocket
```

### Step 3: Create a simple WebSocket server

Install the WebSocket server package:

```powershell
npm install @y/websocket-server
```

#### Run the WebSocket Server

{% tabs %}
{% highlight bash tabtitle="CMD" %}

set HOST=localhost&& set PORT=1234&& npx y-websocket

{% endhighlight %}
{% highlight bash tabtitle="Powershell" %}

$env:HOST="localhost"; $env:PORT="1234"; npx y-websocket

{% endhighlight %}
{% endtabs %}

You should see the message:

```
running at 'localhost' on port 1234
```

### Step 4: Create a collaboration configuration file

- Create a shared Yjs document and XML fragment.
- Create an adapter that provides the Yjs runtime and the shared fragment to the Block Editor.
- Create a provider that connects users to the same shared document.

Create a `collaboration.ts` file in the src folder and add the following code to configure the Yjs document, provider, collaboration adapter and room allocation logic.

```typescript
import * as Y from 'yjs';
import { type YjsAdapter } from '@syncfusion/ej2-blockeditor';
import { WebsocketProvider } from 'y-websocket';

// Create a shared Yjs document for collaborative editing.
// Each URL hash gets its own room name (e.g., #wb3lu, #x2p4k)
const roomName = getRoomName();
const yDoc = new Y.Doc();
const yFragment = yDoc.getXmlFragment('blockeditor');

// Create adapter that provides Yjs runtime and shared fragment
const adapter: YjsAdapter = {
    yRuntime: Y,
    yXmlFragment: yFragment
};

// Connects to local WebSocket server on port 1234 and joins the room based on URL hash.
// Example: https://yourapp.com/#wb3lu joins room "wb3lu"
const provider = new WebsocketProvider(
    'ws://localhost:1234',
    roomName,
    yDoc
);

/**
 * Get or create room ID and store in URL hash
 */
function getRoomName(): string {
    if (typeof window === 'undefined') {
        return 'default';
    }
    // Check if room ID exists in URL hash
    let roomId = getRoomIdFromHash();
    // If no room ID in hash, generate a new one
    if (!roomId) {
        roomId = generateRoomId();
        setRoomIdInHash(roomId);
    }
    return roomId;
}

/**
 * Get room ID from URL hash
 */
function getRoomIdFromHash(): string | null {
    const hash = window.location.hash.substring(1);
    return hash || null;
}

/**
 * Generate a unique 5-character room ID
 */
function generateRoomId(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let roomId = '';
    for (let i = 0; i < 5; i++) {
        roomId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return roomId;
}

/**
 * Set room ID in URL hash
 */
function setRoomIdInHash(roomId: string): void {
    window.location.hash = roomId;
}

export { yDoc, yFragment, adapter, provider, roomName };
```


### Step 5: Set up the Block Editor with collaboration

- Enable collaboration by importing the `Collaboration` module from `@syncfusion/ej2-react-blockeditor` and injecting it into the blockeditor.
- Use the `collaborationSettings` property of type `CollaborationSettingsModel` to configure collaboration settings for your Block Editor.
- It provides properties such as `provider`, `enableAwareness`, `adapter` and `versionHistory` which allows to customize the collaboration behavior.
- Pass the adapter and provider to the Block Editor through the `collaborationSettings` property.
- Set `enableAwareness` to `true` in `collaborationSettings` property to display remote cursors, text selection overlays, and user details on hover.

In your React component file, add the following code. Replace your existing Block Editor setup with this:

```typescript
import {BlockEditorComponent, Inject, Collaboration} from '@syncfusion/ej2-react-blockeditor';
import { adapter, provider } from './collaboration';

function App() {
  return (
    <BlockEditorComponent 
      collaborationSettings={{
        adapter: adapter,
        provider: provider,
        enableAwareness: true
    }}>
      <Inject services={[Collaboration]} />
    </BlockEditorComponent>
  );
}

export default App;
```

### Step 6: Test the collaboration
 
1. **Start your Vite development server** — In your project terminal, run:

```bash
npm run dev
```
 
> **Important:** Make sure your WebSocket server is still running in another terminal window.
 
2. **Open a tab and duplicate it** with your React application
3. **Type in one window** — you should see the text appear in the other window instantly

If the text appears in both tabs, **real-time collaboration is achieved.**

> **Note:** The BroadcastChannel mechanism only handles synchronization locally across tabs of the same browser. To synchronize data across entirely different browsers (e.g., Chrome to Firefox), you must utilize the WebSocket provider layer and connect both environments to a properly configured, centralized backend WebSocket server.

## Configure the current user

Set the current user's display name and cursor highlight color using the `users` and `currentUserId` properties. The `avatarBgColor` value is used for that user's remote cursor and text selection overlay. The users property includes `id`, `user` and `avatarBgColor`.

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

### Get active users

Retrieve all currently connected users using the `users` property in the block editor.

```typescript
const blockEditorRef = useRef(null);
const users = blockEditorRef.current?.users;
```

## Version history

`Version History` allows you to capture document snapshots and restore earlier versions. This is a built-in capability of the Block Editor and does not require a third-party service.

### Enable version history

- Inject the `VersionHistory` module and configure the `versionHistory` property under `collaborationSettings` property.

- Version snapshots need to be persisted to enable version history across browser sessions.

- Implement the `IVersionStorage` interface to provide a custom storage backend for managing snapshots. You can use IndexedDB, a backend database, or any other storage solution suitable for your deployment.

- The `IVersionStorage` interface defines the following methods:

| Method | Signature | Description |
| -------- | -------- | ----------- |
| `saveSnapshot` | `(snapshot: VersionSnapshot): Promise<void>` | Persist a snapshot. |
| `loadAllSnapshots` | `(): Promise<VersionSnapshot[]>` | Load all persisted snapshots, ordered by timestamp ascending. |
| `loadSnapshot` | `(id: string): Promise<VersionSnapshot \| null>` | Load a single snapshot by id. |
| `deleteSnapshot` | `(id: string): Promise<void>` | Permanently remove a snapshot by id. |
| `clearAll` | `(): Promise<void>` | Remove all snapshots from storage. |

- After the Block Editor initializes, retrieve the version history instance and wait for snapshot data to load before calling any version history methods.

Before that need to create a storage service for snapshots.
- Create versionHistoryService.ts with IndexedDBVersionStorage class
- This class implements IVersionStorage interface (required by Syncfusion)

Make Storage Room-Specific by importing roomName from collaboration.ts to make each room gets its own isolated snapshot database.

Create a `versionHistoryService.ts` file in the src folder, replace the `App.tsx` file to configure the BlockEditorComponent, and replace the `App.css` file with the styles required for the version history panel.

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}
{% raw %}
import { BlockEditorComponent, Collaboration, VersionHistory, Inject } from '@syncfusion/ej2-react-blockeditor';
import { useRef, useState, useEffect } from 'react';
import type { VersionSnapshot } from '@syncfusion/ej2-react-blockeditor';
import { adapter, provider, roomName } from './collaboration';
import { IndexedDBVersionStorage } from './versionHistoryService';
import './App.css';

function App() {
    const blockEditorRef
     = useRef<BlockEditorComponent>(null);
    const myStorage = new IndexedDBVersionStorage(`blockeditor-versions-${roomName}`);
    const [snapshots, setSnapshots] = useState<VersionSnapshot[]>([]);

    useEffect(() => {
        const i = setInterval(() => setSnapshots(blockEditorRef.current?.getVersionHistory()?.getSnapshots() || []), 2000);
        return () => clearInterval(i);
    }, []);

    // blockeditor instance
    const versionHistory = blockEditorRef.current?.getVersionHistory();

    return (
        <div className="app-container">
            <div className="editor-section">
                <BlockEditorComponent
                    ref={blockEditorRef}
                    collaborationSettings={{
                        adapter: adapter,
                        provider: provider,
                        versionHistory: {
                            storage: myStorage,
                            snapshotInterval: 3000
                        }
                    }}
                >
                  <Inject services={[Collaboration, VersionHistory]} />
                </BlockEditorComponent>
            </div>

            {/* Version History Panel */}
            <div className="version-history-panel">
                <h3>Snapshots ({snapshots.length})</h3>
                {snapshots.length === 0 ? (
                    <p>No snapshots yet...</p>
                ) : (
                    <div className="snapshots-container">
                        {snapshots.map(s => (
                            <div key={s.id} className="snapshot-item">
                                <div className="snapshot-timestamp">{new Date(s.lastModifiedAt).toLocaleString()}</div>
                                <div className="snapshot-actions">
                                    <button className="restore-btn" onClick={() => versionHistory?.restoreSnapshot(s.id)}>Restore</button>
                                    <button className="delete-btn" onClick={() => versionHistory?.deleteSnapshot(s.id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="App.css" %}
.app-container {
    display: flex;
    gap: 20px;
    padding: 20px;
}

.editor-section {
    flex: 1;
}

.version-history-panel {
    width: 350px;
    padding: 15px;
    border: 1px solid #ddd;
}

.snapshots-container {
    max-height: 600px;
    overflow-y: auto;
}

.snapshot-item {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #eee;
}

.snapshot-timestamp {
    font-size: 12px;
    color: #666;
    margin-bottom: 8px;
}

.snapshot-actions {
    display: flex;
    gap: 5px;
}

.snapshot-actions button {
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    color: white;
}

.restore-btn {
    background-color: #007bff;
}

.delete-btn {
    background-color: #dc3545;
}
{% endhighlight %}

{% highlight ts tabtitle="versionHistoryService.ts" %}
import type { IVersionStorage, VersionSnapshot } from '@syncfusion/ej2-react-blockeditor';

export class IndexedDBVersionStorage implements IVersionStorage {
    private db: IDBDatabase | null = null;
    private initPromise: Promise<void>;

    constructor(dbName: string) {
        this.initPromise = new Promise((resolve) => {
            const req = indexedDB.open(dbName, 1);
            req.onsuccess = () => { this.db = req.result; resolve(); };
            req.onupgradeneeded = (e) => {
                const db = (e.target as IDBOpenDBRequest).result;
                if (!db.objectStoreNames.contains('snapshots')) {
                    db.createObjectStore('snapshots', { keyPath: 'id' });
                }
            };
        });
    }

    private exec(mode: 'readonly' | 'readwrite', fn: (store: IDBObjectStore) => IDBRequest): Promise<any> {
        return this.initPromise.then(() => new Promise((resolve, reject) => {
            const tx = this.db!.transaction('snapshots', mode);
            const req = fn(tx.objectStore('snapshots'));
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        }));
    }

    async saveSnapshot(snapshot: VersionSnapshot): Promise<void> {
        await this.exec('readwrite', (store) => store.put(snapshot));
    }

    async loadAllSnapshots(): Promise<VersionSnapshot[]> {
        return await this.exec('readonly', (store) => store.getAll());
    }

    async loadSnapshot(id: string): Promise<VersionSnapshot | null> {
        return await this.exec('readonly', (store) => store.get(id));
    }

    async deleteSnapshot(id: string): Promise<void> {
        await this.exec('readwrite', (store) => store.delete(id));
    }

    async clearAll(): Promise<void> {
        await this.exec('readwrite', (store) => store.clear());
    }
}
{% endhighlight %}
{% endtabs %}

Once done, run the app to see versionHistory panel for individual rooms.

### Methods

The following are the methods available in the `IVersionHistory`:

#### Create a snapshot

Creates a new snapshot of the current document state with an optional label and metadata.

```typescript
const versionHistory = blockEditorRef.current?.getVersionHistory();
const snapshot = await versionHistory.createSnapshot({
    label: 'Before major update',
    modifiedBy: currentUserId
});
```

#### List snapshots

Retrieves all saved snapshots or a paginated subset. Snapshots are returned in chronological order.

```typescript
const versionHistory = blockEditorRef.current?.getVersionHistory();
// Retrieve all snapshots
const snapshots = versionHistory.getSnapshots();

// Retrieve a paginated subset — getSnapshots(skip, take)
const snapshots = versionHistory.getSnapshots(20, 40);
```

#### Rename a snapshot

Updates the label or metadata of an existing snapshot without modifying its content.

```typescript
const versionHistory = blockEditorRef.current?.getVersionHistory();
await versionHistory.renameSnapshot(snapshotId, 'Release Candidate');
```

#### Restore a snapshot

Reverts the document to a previously saved snapshot state. The current document state is automatically backed up before restoration.

```typescript
const versionHistory = blockEditorRef.current?.getVersionHistory();
await versionHistory.restoreSnapshot(snapshotId);
```

> **Note:** When a snapshot is restored, the current document state is automatically 
> backed up before the restore operation is applied.

#### Compare versions

Compares two snapshots to identify differences such as added, removed, or modified content.

```typescript
const versionHistory = blockEditorRef.current?.getVersionHistory();
const diff = versionHistory.compareVersions(snapshotIdA, snapshotIdB);
```

The returned `VersionDiff` object provides a summary of the differences between the two selected versions.

#### Export a snapshot

Serializes a snapshot into a portable format that can be stored externally or transferred between systems.

```typescript
const versionHistory = blockEditorRef.current?.getVersionHistory();
const exported = await versionHistory.exportSnapshot(snapshotId);
```

Exported snapshots can be stored externally or transferred between systems.

#### Import a snapshot

Imports a previously exported snapshot back into the version history storage.

```typescript
const versionHistory = blockEditorRef.current?.getVersionHistory();
const imported = await versionHistory.importSnapshot(exported);
```

### Events

Use the following event callbacks in `versionHistory` settings to respond to snapshot lifecycle events.

#### snapshotCreated

Triggered when a new snapshot is created.

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

#### snapshotRestored

Triggered when a snapshot is restored.

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