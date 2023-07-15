import { React } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import { ContextNoteProvider } from "./components/ContextNote";


function App() {
  return (
    <ContextNoteProvider>
      <Header />
      <Main />
    </ContextNoteProvider>
  );
}

export default App;
