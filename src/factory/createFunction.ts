import { OperationTypeNode } from "graphql";

import { createInput, createFunctionInput } from "./createInput";
import { createOutput } from "./createOutput";

export const createFunction = (args: {
  operation: OperationTypeNode;
  endpoint: string;
  output: Function;
  name?: string;
  input?: Function;
}) => {
  return `${args.operation} ${args.name ? args.name : ``}${
    args.input ? `(${createInput(args.input)})` : ``
  }{
    ${args.endpoint}${args.input ? `(${createFunctionInput(args.input)})` : ``}{
      ${createOutput(args.output)}
      }
  }`;
};
