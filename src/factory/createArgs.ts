import { FieldMeta } from "../helper";

type Buf = {
  [key: string]: FieldMeta | Buf;
};

export const createArgs = (cls: Function) => {};
