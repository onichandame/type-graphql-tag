import { gql } from "graphql-tag";

import { createFunction } from "./createFunction";

export const createSchema = (args: Parameters<typeof createFunction>[0]) => {
  return gql`
    ${createFunction(args)}
  `;
};
