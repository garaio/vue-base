import Vue from "vue";
declare module "vue/types/vue" {
  interface Vue {
    $t(value: string, variables?: string[], language?: string): string;
  }
}
