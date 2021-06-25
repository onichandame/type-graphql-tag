export type Class<T = any> = {
  new (..._: any[]): T;
};

export type ArrayOrValue<T> = T | T[];

export type Factory<T> = (..._: any[]) => T;
export type TypeOrFactory<T extends Class> =
  | ArrayOrValue<T>
  | Factory<ArrayOrValue<T>>;
export const isFactory = <T>(raw: any): raw is Factory<T> =>
  typeof raw === `function` && raw.prototype === undefined;

export const PrimaryData = [String, Number, Boolean];

export const isPrimaryData = (raw: any): raw is typeof PrimaryData[number] =>
  PrimaryData.includes(raw);

export type FieldsMeta = {
  [key: string]: {
    type: ArrayOrValue<typeof PrimaryData[number] | Class>;
    nullable?: boolean;
  };
};

export type TypeMeta = {
  name: string;
};
