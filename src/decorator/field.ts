import "reflect-metadata";

import {
  isFactory,
  TypeOrFactory,
  Class,
  getFieldsMeta,
  setFieldsMeta,
  FieldsMeta,
} from "../helper";

type FieldProps<Type> = {
  type?: TypeOrFactory<Class<Type>>;
  nullable?: boolean;
};

export const Field = <T = any>(args?: FieldProps<T>): PropertyDecorator => {
  return (cls, key) => {
    if (typeof key !== `string`)
      throw new Error(`data field has to be of type string`);
    let store: FieldsMeta = getFieldsMeta(cls);
    store = store ? { ...store } : {};
    let type = Reflect.getMetadata(`design:type`, cls, key);
    if (type === Array)
      if (args?.type)
        if (isFactory(args.type)) type = args.type();
        else type = args.type;
      else throw new Error(`array fields must be explicitly typed!`);
    store[key] = {
      type,
      nullable: args?.nullable,
    };
    setFieldsMeta(cls, store);
  };
};
