"use client";

import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi2";
import { css } from "styled-system/css";

import { Menu } from "~/components/ui/menu";
import { IconButton, type IconButtonProps } from "./ui/icon-button";

export function ThemeSwitcher(props: IconButtonProps) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <>
      <meta name="color-scheme" content={resolvedTheme} />
      <Menu.Root>
        <Menu.Trigger asChild>
          <IconButton variant="subtle" colorPalette="accent" {...props}>
            {resolvedTheme === "light" && <HiSun />}
            {resolvedTheme === "dark" && <HiMoon />}
            <span className={css({ srOnly: true })}>Select theme</span>
          </IconButton>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content maxWidth="fit-content">
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Change Theme</Menu.ItemGroupLabel>
              <Menu.Item value="light" onClick={() => setTheme("light")}>
                Light
              </Menu.Item>
              <Menu.Item value="dark" onClick={() => setTheme("dark")}>
                Dark
              </Menu.Item>
              <Menu.Item value="system" onClick={() => setTheme("system")}>
                System
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </>
  );
}
