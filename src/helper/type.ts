export const PrimaryData = [String, Number, Boolean];
export type FieldsMeta = {
  [key: string]: {
    type: typeof PrimaryData[number] | FieldsMeta;
    nullable?: boolean;
  };
};
