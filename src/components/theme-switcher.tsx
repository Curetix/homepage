"use client";

import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi2";
import { css } from "styled-system/css";

import { Button, type ButtonProps } from "@/components/ui/button";
import * as Menu from "@/components/ui/menu";

export function ThemeSwitcher({ className }: ButtonProps) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <>
      <meta name="color-scheme" content={resolvedTheme} />
      <Menu.Root positioning={{ placement: "bottom-start" }}>
        <Menu.Trigger asChild>
          <Button variant="subtle" colorPalette="accent" className={className}>
            {resolvedTheme === "light" && <HiSun />}
            {resolvedTheme === "dark" && <HiMoon />}
            <span className={css({ srOnly: true })}>Select theme</span>
          </Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
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
