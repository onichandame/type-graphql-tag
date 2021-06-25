import { Field, Type } from "../decorator";
import { createInput, createFunctionInput } from "./createInput";

@Type(`Nested`)
class TestNestedType {}

class TestInputType {
  @Field()
  id!: string;

  @Field({ type: () => [TestNestedType], nullable: true })
  nested?: TestNestedType[];
}

describe(__filename, () => {
  it(`can convert inputs`, async () => {
    expect(createInput(TestInputType)).toMatch(
      /^\s*\$id\s*:\s*String!\s*,\s*\$nested\s*:\s*\[\s*Nested\s*\]\s*$/
    );
  });

  it(`can convert function input`, async () => {
    expect(createFunctionInput(TestInputType)).toMatch(
      /^\s*id\s*:\s*\$id\s*,\s*nested\s*:\s*\$nested\s*$/
    );
  });
});
