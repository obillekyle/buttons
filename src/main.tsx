import "./styles/index.scss";
import Router from "preact-router";
import { createContext, render } from "preact";
import { useEffect, useState } from "preact/hooks";
import { App } from "./app";

export let changeTheme: any;
export const Theme = createContext(false);

function Main() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    changeTheme = setTheme;
    return () => (changeTheme = null);
  });

  const classes = theme ? "light" : "dark";

  return (
    <Theme.Provider value={theme}>
      <div id="app" className={classes}>
        <Router>
          <App path="/" />
        </Router>
      </div>
    </Theme.Provider>
  );
}

render(<Main />, document.body!);
