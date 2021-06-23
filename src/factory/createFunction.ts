import { OperationTypeNode } from "graphql";

import { FIELD_ARRAY } from "../helper";

export const createFunction = (args: {
  operation: OperationTypeNode;
  name: string;
  args: FunctionConstructor;
  resp: Function;
}) => {
  const respFields: string[] = Object.keys(
    Reflect.getMetadata(FIELD_ARRAY, args.resp)
  );
};
