import type { User } from "./user";

export type Story = {
  id: string;
  title: string;
  content: string;
  author: User;         // exercise wants author
  contributors: User[]; // exercise wants contributors
};