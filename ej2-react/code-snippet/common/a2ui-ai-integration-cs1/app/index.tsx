import { useEffect, useRef, useState } from 'react';
import {
    syncfusionCatalog,
    SyncfusionA2UIProvider,
} from '@syncfusion/ej2-react-a2ui';
import { MessageProcessor } from '@a2ui/web_core/v0_9';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import './../index.css';

const AGENT_URL = 'http://localhost:10004';

function App() {
    const [surface, setSurface] = useState(null);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const processorRef = useRef(null);

    if (!processorRef.current) {
        processorRef.current = new MessageProcessor(
            [syncfusionCatalog],
            async (action) => {
                const res = await fetch(AGENT_URL, {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({
                        jsonrpc: '2.0',
                        id: `req-${Date.now()}`,
                        method: 'message/send',
                        params: {
                            message: {
                                kind: 'message',
                                messageId: `msg-${Date.now()}`,
                                role: 'user',
                                parts: [{ data: action }],
                            },
                        },
                    }),
                });
                const envelope = await res.json();
                const messages = envelope?.result?.artifacts?.[0]?.parts?.[0]?.data?.a2uiEnvelope;
                if (messages) processorRef.current.processMessages(messages);
            },
        );
    }

    const processor = processorRef.current;

    useEffect(() => {
        const sub = processor.onSurfaceCreated(setSurface);
        return () => sub.unsubscribe();
    }, [processor]);

    const sendQuery = async () => {
        if (!query.trim()) return;
        setLoading(true);
        setSurface(null);
        try {
            const res = await fetch(AGENT_URL, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    id: `req-${Date.now()}`,
                    method: 'message/send',
                    params: {
                        message: {
                            kind: 'message',
                            messageId: `msg-${Date.now()}`,
                            role: 'user',
                            parts: [{ text: query }],
                        },
                    },
                }),
            });
            const envelope = await res.json();
            const messages = envelope?.result?.artifacts?.[0]?.parts?.[0]?.data?.a2uiEnvelope;
            if (messages) processor.processMessages(messages);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="a2ui-chat">
                <TextBoxComponent
                    value={query}
                    change={(e) => setQuery(String(e.value ?? ''))}
                    placeholder="Ask the agent something…"
                    floatLabelType="Auto"
                />
                <ButtonComponent
                    onClick={sendQuery}
                    disabled={loading}
                    isPrimary={true}
                    content={loading ? 'Sending…' : 'Send'}
                />
            </div>
            {surface && <SyncfusionA2UIProvider surface={surface} />}
        </div>
    );
}
export default App;
