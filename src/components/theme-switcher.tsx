"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as Menu from "@/components/ui/menu";

import { Button, type ButtonProps } from "@/components/ui/button";
import { css } from "styled-system/css";

export function ThemeSwitcher({ className }: ButtonProps) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <>
      <meta name="color-scheme" content={resolvedTheme} />
      <Menu.Root positioning={{ placement: "bottom-start" }}>
        <Menu.Trigger asChild>
          <Button variant="outline" className={className}>
            {resolvedTheme === "light" && (
              <Sun
                //   className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                className={css({ height: "1.2rem", width: "1.2rem" })}
              />
            )}
            {resolvedTheme === "dark" && (
              <Moon
              // className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              />
            )}
            <span className={css({ srOnly: true })}>Toggle theme</span>
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
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className={cn(className)}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Change Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </>
  );
}
