import "reflect-metadata";

import { setTypeMeta } from "../helper";

type TypeProps = { name?: string } | string;

export const Type = (args?: TypeProps): ClassDecorator => {
  return (tgt) => {
    const name = args
      ? typeof args === `string`
        ? args
        : args.name
        ? args.name
        : tgt.name
      : tgt.name;
    return setTypeMeta(tgt.prototype, { name });
  };
};
