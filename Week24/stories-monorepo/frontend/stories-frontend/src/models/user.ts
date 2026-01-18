import type { Story } from "./story";

export type User = {
  id: string;
  username: string;   // exercise wants this
  email: string;
  stories?: Story[];  // optional; often you don’t send full stories in auth response
};
