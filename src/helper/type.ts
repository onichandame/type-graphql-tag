export const PrimaryData = [String, Number, Boolean];

export const isPrimaryData = (raw: any): raw is typeof PrimaryData[number] =>
  PrimaryData.includes(raw);

export type FieldsMeta = {
  [key: string]: {
    type: typeof PrimaryData[number] | Function;
    nullable?: boolean;
  };
};

export type TypeMeta = {
  name: string;
};
