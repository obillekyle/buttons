import { useContext } from "preact/hooks";
import { Theme } from "../main";
export const colors: Readonly<{ [key: string]: number }> = {
  red: 0,
  blue: 200,
  cyan: 176,
  pink: 298,
  orange: 25,
  yellow: 51,
  green: 125,
  violet: 288,
};

export function buttonStyle(hue?: number, sat?: number): JSX.CSSProperties {
  let theme = useContext(Theme);

  hue ??= 0;
  sat ??= 0;

  if (theme)
    return {
      "--t-bg": `hsl(${hue}, ${sat}%, 80%)`,
      "--t-color": `hsl(${hue}, ${sat}%, 20%)`,
      "--t-outline": `hsl(${hue}, ${sat}%, 40%)`,
      "--t-disabled": `hsl(${hue}, ${sat}%, 90%)`,
    };
  return {
    "--t-bg": `hsl(${hue}, ${sat}%, 20%)`,
    "--t-color": `hsl(${hue}, ${sat}%, 80%)`,
    "--t-outline": `hsl(${hue}, ${sat}%, 60%)`,
    "--t-disabled": `hsl(${hue}, ${sat}%, 10%)`,
  };
}

export function iconButtonStyle(hue?: number, sat?: number): JSX.CSSProperties {
  let theme = useContext(Theme);

  hue ??= 0;
  sat ??= 0;

  if (theme)
    return {
      "--ic-bg": `hsl(${hue}, ${sat}%, 80%)`,
      "--ic-color": `hsl(${hue}, ${sat}%, 20%)`,
      "--ic-bg-hover": `hsl(${hue}, ${sat}%, 40%)`,
      "--ic-bg-disabled": `hsl(${hue}, ${sat}%, 90%)`,
      "--ic-color-hover": `hsl(${hue}, ${sat}%, 30%)`,
      "--ic-color-disabled": `hsl(${hue},   0%, 70%)`,
    };
  return {
    "--ic-bg": `hsl(${hue}, ${sat}%, 20%)`,
    "--ic-color": `hsl(${hue}, ${sat}%, 80%)`,
    "--ic-bg-hover": `hsl(${hue}, ${sat}%, 60%)`,
    "--ic-bg-disabled": `hsl(${hue}, ${sat}%, 10%)`,
    "--ic-color-hover": `hsl(${hue}, ${sat}%, 70%)`,
    "--ic-color-disabled": `hsl(${hue},   0%, 30%)`,
  };
}

export function navigationStyle(hue?: number, sat?: number): JSX.CSSProperties {
  let theme = useContext(Theme);

  hue ??= 0;
  sat ??= 0;

  if (theme)
    return {
      "--nav-bg": `hsl(${hue}, ${sat}%, 90%)`,
      "--nav-color": `hsl(${hue}, ${sat}%, 10%)`,
    };
  return {
    "--nav-bg": `hsl(${hue}, ${sat}%, 10%)`,
    "--nav-color": `hsl(${hue}, ${sat}%, 90%)`,
  };
}

export function listItemTheme(hue?: number, sat?: number): JSX.CSSProperties {
  let theme = useContext(Theme);

  hue ??= 0;
  sat ??= 0;

  if (theme)
    return {
      "--i-bg": `hsl(${hue}, ${sat}%, 90%)`,
      "--i-color": `hsl(${hue}, ${sat}%, 20%)`,
    };
  return {
    "--i-bg": `hsl(${hue}, ${sat}%, 10%)`,
    "--i-color": `hsl(${hue}, ${sat}%, 80%)`,
  };
}

export function sideBarTheme(hue?: number, sat?: number): JSX.CSSProperties {
  let theme = useContext(Theme);

  hue ??= 0;
  sat ??= 0;

  if (theme)
    return {
      "--sb-bg": `hsl(${hue}, ${sat}%, 90%)`,
      "--sb-color": `hsl(${hue}, ${sat}%, 20%)`,
    };
  return {
    "--sb-bg": `hsl(${hue}, ${sat}%, 10%)`,
    "--sb-color": `hsl(${hue}, ${sat}%, 80%)`,
  };
}

export function getHueSat(color?: string | number): number[] {
  if (color! in colors) return [colors[color!], 100];
  return [0, 0];
}
