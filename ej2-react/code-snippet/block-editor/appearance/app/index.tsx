import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useState, useEffect } from 'react';
import { BlockEditorComponent, BlockModel, ContentType } from '@syncfusion/ej2-react-blockeditor';

const blockData: BlockModel[] = [
    {
        id: 'title-block',
        type: 'Heading1',
        content: [{ type: ContentType.Text, content: 'Appearance Configuration Demo' }]
    },
    {
        id: 'intro-block',
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content:
                    'This demo showcases different appearance configurations including readonly mode and a custom CSS theme.'
            }
        ]
    },
    {
        id: 'features-heading',
        type: 'Heading2',
        content: [{ type: ContentType.Text, content: 'Configured Custom Theme' }]
    },
    {
        id: 'theme-list-1',
        type: 'BulletList',
        content: [{ type: ContentType.Text, content: 'Gradient background with modern styling' }]
    },
    {
        id: 'readonly-info',
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content:
                    'Use the readonly toggle to switch between editable and read-only modes. In readonly mode, you can view content but cannot make changes.'
            }
        ]
    }
];

function App() {
    const editorRef = useRef<BlockEditorComponent | null>(null);
    const [isReadonly, setIsReadonly] = useState<boolean>(false);
    const [currentTheme, setCurrentTheme] = useState<'default' | 'custom'>('default');
    const outputRef = useRef<HTMLDivElement | null>(null);
    const statusTextRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const toggleReadonlyBtn = document.getElementById('toggleReadonlyBtn') as HTMLElement | null;
        const applyCustomThemeBtn = document.getElementById('applyCustomThemeBtn') as HTMLElement | null;
        outputRef.current = document.getElementById('output') as HTMLDivElement | null;
        statusTextRef.current = document.getElementById('statusText') as HTMLSpanElement | null;

        const toggleReadonly = () => {
            setIsReadonly((prev) => {
                const newMode = !prev;
                if (editorRef.current) {
                    editorRef.current.readOnly = newMode;
                    const el = document.getElementById('blockeditor');
                    if (el) {
                        if (newMode) el.classList.add('readonly-mode');
                        else el.classList.remove('readonly-mode');
                    }
                }
                if (outputRef.current) {
                    outputRef.current.textContent = `Readonly mode ${newMode ? 'enabled' : 'disabled'}. ${
                        newMode ? 'Content is now view-only.' : 'Content is now editable.'
                    }`;
                }
                return newMode;
            });
            setTimeout(updateStatus, 0);
        };

        const applyCustomTheme = () => {
            if (editorRef.current) {
                editorRef.current.cssClass = 'custom-theme';
            }
            setCurrentTheme('custom');
            if (outputRef.current) {
                outputRef.current.textContent =
                    'Custom theme applied. The editor now features a gradient background with modern styling and hover effects.';
            }
            updateStatus();
        };

        const updateStatus = () => {
            const mode = isReadonly ? 'Readonly' : 'Editable';
            const theme = currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1);
            if (statusTextRef.current) {
                statusTextRef.current.textContent = `${mode}, ${theme} Theme`;
            }
        };

        // Attach event listeners to existing buttons
        if (toggleReadonlyBtn) {
            toggleReadonlyBtn.addEventListener('click', toggleReadonly);
        }
        if (applyCustomThemeBtn) {
            applyCustomThemeBtn.addEventListener('click', applyCustomTheme);
        }

        // Initialize status text
        updateStatus();

        // Cleanup event listeners on component unmount
        return () => {
            if (toggleReadonlyBtn) {
                toggleReadonlyBtn.removeEventListener('click', toggleReadonly);
            }
            if (applyCustomThemeBtn) {
                applyCustomThemeBtn.removeEventListener('click', applyCustomTheme);
            }
        };
    }, []);

    return (
        <BlockEditorComponent
            id="blockeditor"
            ref={editorRef}
            blocks={blockData}
            focus={() => {
                if (outputRef.current) {
                    outputRef.current.textContent = 'Editor focused. You can now type or edit content.';
                }
            }}
            blur={() => {
                if (outputRef.current) {
                    outputRef.current.textContent = 'Editor lost focus.';
                }
            }}
            created={() => console.log('BlockEditor initialized')} // Debug initialization
            style={{ border: '1px solid red' }} // Temporary styling to confirm rendering
        />
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('blockeditor'));