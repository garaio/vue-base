// inside src/types.d.ts
import Vue from "vue";
import { VueResources } from "./api/translations/VueResources";
declare module "vue/types/vue" {
  interface Vue {
    $t(value: string, variables?: string[], language?: string): string;
    $Resources: typeof VueResources;
  }
}
