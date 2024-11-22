import { ISOString } from "./Util";

export interface Link {
  id: string;
  createdAt: ISOString;
  updatedAt: ISOString;
  publishedAt: ISOString;
  revisedAt: ISOString;
  name: string;
  url: string;
}
