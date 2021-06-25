import { isPrimaryData, getFieldsMeta } from "../helper";

export const createOutput = (cls: Function) => {
  const fields = getFieldsMeta(cls.prototype);
  let arr: string[] = [];
  for (const key in fields) {
    const field = fields[key];
    arr.push(key);
    if (!isPrimaryData(field.type)) {
      let subFields = ``;
      if (Array.isArray(field.type)) subFields = createOutput(field.type[0]);
      else subFields = createOutput(field.type);
      if (subFields) arr.push(`{ ${subFields} }`);
    }
  }
  return arr.join(` `);
};
