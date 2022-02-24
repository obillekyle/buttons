import { FunctionComponent as FC} from 'preact';
import { Icon } from "@iconify/react";
import "./utils.scss";

interface DefaultItems {
  id?: string;
  color?: String;
  onClick?: Function;
  disabled?: boolean;
  className?: String;
}

interface ButtonItems extends DefaultItems {
  icon?: String;
  label?: String;
}


export const Button:FC<ButtonItems> =({ disabled, color, icon, className, id, label, onClick }) => {
  return (
    <div class={`button ${className ? className : ""}`} data-color={color} 
         onClick={(e: any) => onClick?.(e)} id={id} disabled={disabled}>
      {icon ? <Icon icon={icon} /> : null}
      {label ? <p>{label}</p> : null}
    </div>
  )
}
