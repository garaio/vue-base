import { Vue, Component } from "vue-property-decorator";
import store from "@/store";
import { VueResources } from "@/api/translations/VueResources";
type VueResourcesType = typeof VueResources;

@Component
export default class Message extends Vue {
  $t(value: string, variables?: string[], language?: string): string {
    return store.getters.message.getMessage(value, variables, language);
  }

  // If you have VueResources, you can define them here:
  get $Resources(): VueResourcesType {
    return VueResources as typeof VueResources;
  }
}
