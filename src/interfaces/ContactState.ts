import type { Contact } from "./Contact";

export interface ContactState {
  contacts : Contact[],
  isLoading : boolean,
  error : string
}