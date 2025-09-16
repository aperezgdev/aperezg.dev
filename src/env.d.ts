/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    lang: import("./i18n/ui").Language;
    t: (typeof import("./i18n/ui").ui)[import("./i18n/ui").Language];
  }
}
