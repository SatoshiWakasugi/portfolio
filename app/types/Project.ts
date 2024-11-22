import { ISOString } from "./Util";

export interface Project {
  id: string;
  createdAt: ISOString;
  updatedAt: ISOString;
  publishedAt: ISOString;
  revisedAt: ISOString;
  name: string;
  start_date: ISOString;
  end_date: ISOString;
  scale: string;
  detail: string;
  environment: string;
}
