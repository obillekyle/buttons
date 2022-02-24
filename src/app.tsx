import { Button } from "./component/button"
import { Nav } from "./component/nav";

export function App() {
  return (
    <>
      <header>
        <Nav title="Hello World"/>
        <Button label="Filter" icon="mdi-filter-variant" color="cyan"/>
        <Button label="Filter" color="cyan"/>
        <Button icon="mdi-filter-variant" color="cyan"/>
        <Button label="Delete" icon="mdi-trash-can-outline" color="red"/>
        <Button label="Delete" color="red"/>
        <Button icon="mdi-trash-can-outline" color="red"/>
        <Button label="Create" icon="mdi-card-bulleted-outline" color="green"/>
        <Button label="Create" color="green"/>
        <Button icon="mdi-card-bulleted-outline" color="green"/>
        <Button label="Edit" icon="mdi-pencil-outline" color="orange"/>
        <Button label="Edit" color="orange"/>
        <Button icon="mdi-pencil-outline" color="orange"/>
        <Button label="Promote" icon="mdi-account-arrow-up-outline" color="violet"/>
        <Button label="Promote" color="violet"/>
        <Button icon="mdi-account-arrow-up-outline" color="violet"/>
        <Button label="Ban" icon="mdi-account-cancel-outline" color="yellow"/>
        <Button label="Ban" color="yellow"/>
        <Button icon="mdi-account-cancel-outline" color="yellow"/>
      </header>
    </>
  )
}
