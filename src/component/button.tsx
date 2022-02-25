import "./utils.scss";
import { colors, buttonStyle, getHueSat } from "./colors"
import { Icon } from "@iconify/react";
import { changeTheme, Theme } from "../main"
import { FunctionComponent as FC } from 'preact';
import { useContext } from "preact/hooks";

interface DefaultItems {
  id?: string;
  onClick?: Function;
  disabled?: boolean;
  className?: String;
  color?: string | number;
}

interface ButtonItems extends DefaultItems {
  icon?: String;
  label?: String;
}

export const Button:FC<ButtonItems> =({ disabled, color, icon, className, id, label, onClick }) => {

  const theme = useContext(Theme);
  let classes = [className, "button"];
  const [hue, sat] = getHueSat(color);

  const click = (e:any) => {
    onClick?.(e);
    changeTheme?.(!theme);
  }

  return (
    <div className={classes.join(" ")}
         onClick={click} id={id} disabled={disabled} 
         style={buttonStyle(hue, sat)}>
      {icon ? <Icon icon={icon} /> : null}
      {label ? <p>{label}</p> : null}
    </div>
  )
}
