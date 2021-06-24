import { FieldsMeta, TypeMeta } from "./type";

const FIELDS_META = `__meta_keys__`;
const TYPE_META = `__meta_type__`;

export const setFieldsMeta = (tgt: Object, fields: FieldsMeta) => {
  return Reflect.defineMetadata(FIELDS_META, fields, tgt);
};

export const getFieldsMeta = (tgt: Object): FieldsMeta => {
  return Reflect.getMetadata(FIELDS_META, tgt);
};

export const getTypeMeta = (tgt: Object): TypeMeta => {
  return Reflect.getMetadata(TYPE_META, tgt) || { name: tgt.constructor.name };
};

export const setTypeMeta = (tgt: Object, type: TypeMeta) => {
  return Reflect.defineMetadata(TYPE_META, type, tgt);
};
