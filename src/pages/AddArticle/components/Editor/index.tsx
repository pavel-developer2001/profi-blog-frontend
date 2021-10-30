import React, { useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import { TextField } from "@mui/material";

interface EditorProps {
  text: string;
  setText: (arg: any) => void;
}
export const Editor: React.FC<EditorProps> = ({ text, setText }) => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
      placeholder: "Введите текст вашей статьи",
    });
    console.log("Editor", editor);
    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e) => console.error("ERROR editor cleanup", e));
    };
  }, []);
  // useEffect(() => {
  //   editor
  //     .save()
  //     .then((savedData) => {
  //       setText(savedData);
  //     })
  //     .catch((error) => {
  //       console.error("Saving error", error);
  //     });
  // }, [text]);
  return (
    <div id='editor' />
    // <div id='editor'>
    //   <TextField value={text} onChange={(e) => setText(e.target.value)} />
    // </div>
  );
};
