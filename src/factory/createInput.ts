import { isPrimaryData, getFieldsMeta, getTypeMeta } from "../helper";

export const createInput = (cls: Function) => {
  const fields = getFieldsMeta(cls.prototype);
  let args: string[] = [];
  for (const key in fields) {
    const field = fields[key];
    let typeName = ``;
    if (isPrimaryData(field.type)) typeName = field.type.name;
    else typeName = getTypeMeta(field.type.prototype).name;
    args.push(`$${key}: ${typeName}${!field.nullable ? `!` : ``}`);
  }
  return args.join(`,`);
};

export const createFunctionInput = (cls: Function) => {
  const fields = getFieldsMeta(cls.prototype);
  let res: string[] = [];
  for (const key in fields) {
    res.push(`${key}:$${key}`);
  }

  return res.join(`,`);
};
