import { gql } from "graphql-tag";

import { Field } from "../decorator";
import { createFunction } from "./createFunction";

class Input {
  @Field()
  id!: string;
}

class Output {
  @Field()
  random!: number;
}

describe(__filename, () => {
  it(`works`, async () => {
    expect(
      gql`
        ${createFunction({
          name: `testQuery`,
          endpoint: `test`,
          output: Output,
          input: Input,
          operation: `mutation`,
        })}
      `
    ).toBeTruthy();
  });
});
