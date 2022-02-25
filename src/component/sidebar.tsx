import { Icon, IconProps } from "@iconify/react";
import { FunctionComponent as FC } from "preact";
import { useEffect, useState } from "preact/hooks";
import { getHueSat, listItemTheme, sideBarTheme } from "./colors";
import { DefaultItems } from "./main";

interface SidebarOptions extends DefaultItems {
  name: string;
  link?: string;
  icon?: string;
  onClick?: JSX.MouseEventHandler<Element>;
}

interface SideBarItems extends DefaultItems {
  options: SidebarOptions[];
}

export let sidebarToggle: any;

export const SideBar: FC<SideBarItems> = ({
  id,
  color,
  options,
  className,
}) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    sidebarToggle = setOpen;
    return () => (sidebarToggle = null);
  });

  let items: JSX.Element[] = [];
  let classes = ["sidebar", className];

  options.forEach(
    ({ className, id, color, name, icon, link, onClick }, index: number) => {
      let classes = "sidebar " + className;
      const [hue, sat] = getHueSat(color);
      items.push(
        <a href={link}>
          <div
            id={id}
            key={index}
            onClick={onClick}
            className={classes}
            style={listItemTheme(hue, sat)}
          >
            <Icon icon={icon} />
            <div className="label">{name}</div>
          </div>
        </a>
      );
    }
  );

  const [hue, sat] = getHueSat(color);

  return (
    <div
      id={id}
      data-open={isOpen}
      className={classes.join(" ")}
      style={sideBarTheme(hue, sat)}
    >
      <div className="item toggle" onClick={() => setOpen(true)}>
        <Icon icon="mdi:menu-open" />
        {items}
      </div>
    </div>
  );
};
