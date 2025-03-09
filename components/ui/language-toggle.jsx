"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { localeNames } from "@/i18n/request";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { routing } from "@/i18n/routing";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(locale) {
    startTransition(() => {
      router.replace({ pathname, params }, { locale: locale });
    });
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="h-[1.2rem] w-[1.2rem] cursor-pointer">
          {localeNames[locale].flag}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((locale) => (
          <DropdownMenuItem
            onClick={() => onSelectChange(locale)}
            className="gap-x-2"
          >
            <div>{localeNames[locale].flag}</div>
            <div>{localeNames[locale].name}</div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
