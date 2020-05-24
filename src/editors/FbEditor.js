import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "./editors.scss";
import { FiEdit } from "react-icons/fi";

export default function FbEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [isEditor, setEditor] = useState(false);

  const handleEditArea = () => setEditor(true);

  return (
    <div className="editor-content">
      <FiEdit
        className={`edit-icon ${isEditor ? "active" : ""}`}
        onClick={handleEditArea}
      />
      <div className={`editor-area ${isEditor ? "" : "disabled"}`}>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          placeholder="Write your content here ..."
        />
      </div>
    </div>
  );
}
