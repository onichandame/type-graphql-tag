import "reflect-metadata";

import { getFieldsMeta, setFieldsMeta, FieldsMeta } from "../helper";

type FieldProps = { nullable?: boolean };

export const Field = (args?: FieldProps): PropertyDecorator => {
  return (cls, key) => {
    if (typeof key !== `string`)
      throw new Error(`data field has to be of type string`);
    let store: FieldsMeta = getFieldsMeta(cls);
    store = store ? { ...store } : {};
    let type = Reflect.getMetadata(`design:type`, cls, key);
    store[key] = {
      type,
      nullable: args?.nullable,
    };
    setFieldsMeta(cls, store);
  };
};
