import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useState, useEffect } from 'react';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const blockData = [
    {
      blockType: 'Heading',
      properties: { level: 1},
      content: [{ contentType: ContentType.Text, content: 'Appearance Configuration Demo' }]
    },
    {
      blockType: 'Paragraph',
      content: [
        {
          contentType: ContentType.Text,
          content:
            'This demo showcases different appearance configurations including readonly mode and a custom CSS theme.'
        }
      ]
    },
    {
      blockType: 'Heading',
      properties: { level: 2},
      content: [{ contentType: ContentType.Text, content: 'Configured Custom Theme' }]
    },
    {
      blockType: 'BulletList',
      content: [{ contentType: ContentType.Text, content: 'Gradient background with modern styling' }]
    },
    {
      blockType: 'Paragraph',
      content: [
        {
          contentType: ContentType.Text,
          content:
            'Use the readonly toggle to switch between editable and read-only modes. In readonly mode, you can view content but cannot make changes.'
        }
      ]
    }
  ];

  const editorRef = useRef(null);
  const [isReadonly, setIsReadonly] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');
  const outputRef = useRef(null);
  const statusTextRef = useRef(null);

  useEffect(() => {
    const toggleReadonlyBtn = document.getElementById('toggleReadonlyBtn');
    const applyCustomThemeBtn = document.getElementById('applyCustomThemeBtn');
    outputRef.current = document.getElementById('output');
    statusTextRef.current = document.getElementById('statusText');

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

    if (toggleReadonlyBtn) {
      toggleReadonlyBtn.addEventListener('click', toggleReadonly);
    }
    if (applyCustomThemeBtn) {
      applyCustomThemeBtn.addEventListener('click', applyCustomTheme);
    }

    updateStatus();

    return () => {
      if (toggleReadonlyBtn) {
        toggleReadonlyBtn.removeEventListener('click', toggleReadonly);
      }
      if (applyCustomThemeBtn) {
        applyCustomThemeBtn.removeEventListener('click', applyCustomTheme);
      }
    };
  }, [isReadonly, currentTheme]);

  return (
    <div className='appearance'>
      <div id="controls">
        <h3>Appearance Configuration Demo</h3>
        <div className="button-group">
          <button id="toggleReadonlyBtn">Toggle Readonly Mode</button>
          <button id="applyCustomThemeBtn">Apply Custom Theme</button>
        </div>
        <div className="status-info">
          <p>
            <strong>Current Status:</strong>{' '}
            <span id="statusText">Editable, Default Theme</span>
          </p>
        </div>
      </div>

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
      />

      <div id="output" ref={outputRef}></div>
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('container'));
