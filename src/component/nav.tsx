import { Icon } from "@iconify/react";
import { FunctionComponent as FC } from "preact";
import { navigationStyle } from "./colors";
import { DefaultItems } from "./main";
import "./utils.scss";

interface MenuItems extends DefaultItems {
  icon?: string;
  label?: string;
  click?: Function;
}

interface NavItems {
  title?: string;
  menu?: MenuItems;
}

export const Nav: FC<NavItems> = ({ children, title, menu }) => {
  return (
    <div class="main-nav" style={navigationStyle(0, 0)}>
      {menu ? (
        <Icon
          id={menu.id}
          icon={menu.icon}
          onClick={menu.click}
          aria-label={menu.label}
          className={menu.className}
        />
      ) : null}
      <div class="title">{title}</div>
      <div class="actions">{children}</div>
    </div>
  );
};
