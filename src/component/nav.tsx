import { Icon } from "@iconify/react";
import { FunctionComponent as FC } from "preact";
import "./utils.scss";

interface NavItems{
  title?: string;
}

export const Nav:FC<NavItems> = ({children, title}) => {
  return (
    <div class="main-nav">
      <Icon icon="mdi-menu"/>
      <div class="title">{title}</div>
      <div class="actions">
        {children}
      </div>
    </div>
  ) 
}