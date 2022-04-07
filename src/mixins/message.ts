import { Vue, Component } from "vue-property-decorator";
import store from "@/store";

@Component
export default class Message extends Vue {
  $t(value: string, variables?: string[], language?: string): string {
    return store.getters.message.getMessage(value, variables, language);
  }
}
