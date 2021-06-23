import "reflect-metadata";

import { FIELDS_META, FieldsMeta, PrimaryData } from "../helper";

type FieldProps = { nullable?: boolean };

export const Field = (args?: FieldProps) => {
  return ((cls, key) => {
    if (typeof key !== `string`)
      throw new Error(`data field has to be of type string`);
    let store: FieldsMeta = Reflect.getMetadata(FIELDS_META, cls);
    store = store ? { ...store } : {};
    let type = Reflect.getMetadata(`design:type`, cls, key);
    if (!PrimaryData.includes(type))
      type = Reflect.getMetadata(FIELDS_META, type.prototype);
    store[key] = {
      type,
      nullable: args?.nullable,
    };
    Reflect.defineMetadata(FIELDS_META, store, cls);
  }) as PropertyDecorator;
};
