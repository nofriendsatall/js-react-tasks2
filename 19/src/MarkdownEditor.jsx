import React, { useEffect, useRef } from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
const MarkdownEditor = ({ onContentChange }) => {
    const editorRef = useRef(null);
  
    useEffect(() => {
      const editor = new Editor({
        el: editorRef.current,
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        hideModeSwitch: true,
      });
  
      editor.addHook('change', () => {
        const content = editor.getMarkdown();
        onContentChange(content);
      });
  
      return () => {
        editor.destroy();
      };
    }, [onContentChange]);
  
    return <div ref={editorRef} />;
  };
  
  export default MarkdownEditor;
// END
