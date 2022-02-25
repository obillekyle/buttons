import { Button } from "./component/button";
import { Nav } from "./component/nav";
import { SideBar, sidebarToggle } from "./component/sidebar";

export function App(path: any) {

  const menu = {
    label: "Test",
    icon: "mdi-flask-outline",
    onClick: () => sidebarToggle(true)
  }

  const sidebar = [{
    name: "Test",
    icon: "mdi-flask-empty-outline",
    link: "https://google.com"
  }]

  return (
    <>
      <Nav title="Hello World" menu={menu}/>
      <SideBar options={sidebar}/>
      <header>
        <Button label="Filter" icon="mdi-filter-variant" color="cyan" />
        <Button label="Filter" color="cyan" />
        <Button icon="mdi-filter-variant" color="cyan" />
        <Button label="Delete" icon="mdi-trash-can-outline" color="red" />
        <Button label="Delete" color="red" />
        <Button icon="mdi-trash-can-outline" color="red" />
        <Button label="Create" icon="mdi-card-bulleted-outline" color="green" />
        <Button label="Create" color="green" />
        <Button icon="mdi-card-bulleted-outline" color="green" />
        <Button label="Edit" icon="mdi-pencil-outline" color="orange" />
        <Button label="Edit" color="orange" />
        <Button icon="mdi-pencil-outline" color="orange" />
        <Button label="Promote" icon="mdi-account-arrow-up-outline" color="violet"/>
        <Button label="Promote" color="violet" />
        <Button icon="mdi-account-arrow-up-outline" color="violet" />
        <Button label="Ban" icon="mdi-account-cancel-outline" color="yellow" />
        <Button label="Ban" color="yellow" />
        <Button icon="mdi-account-cancel-outline" color="yellow" />
        <Button label="Archive" icon="mdi:archive-outline" color="gray" />
        <Button label="Archive" color="gray" />
        <Button icon="mdi-archive-outline" color="gray" />
      </header>
    </>
  );
}
