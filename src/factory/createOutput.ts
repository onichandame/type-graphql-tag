import { isPrimaryData, getFieldsMeta } from "../helper";

export const createOutput = (cls: Function) => {
  const fields = getFieldsMeta(cls.prototype);
  let arr: string[] = [];
  for (const key in fields) {
    const field = fields[key];
    arr.push(key);
    if (!isPrimaryData(field.type)) {
      const subFields = createOutput(field.type);
      if (subFields) arr.push(`{ ${subFields} }`);
    }
  }
  return arr.join(` `);
};
