import { Field, Type } from "../decorator";
import { createOutput } from "./createOutput";

@Type(`Nested`)
class TestNestedType {
  @Field()
  random!: number;
}

class TestOutputType {
  @Field()
  id!: string;

  @Field({ type: () => [TestNestedType], nullable: true })
  nested?: TestNestedType[];
}

describe(__filename, () => {
  it(`can parse output`, async () => {
    expect(createOutput(TestOutputType)).toMatch(
      /^\s*id\s+nested\s*{\s*random\s*}\s*$/
    );
  });
});
