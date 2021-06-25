import { Field } from "./field";
import { getFieldsMeta, FieldsMeta } from "../helper";

class TestNestedData {
  @Field()
  nested!: string;
}

class TestBaseData {
  @Field()
  id!: string;
}

class TestChildData extends TestBaseData {
  @Field({ nullable: true })
  random?: number;

  @Field({ type: [TestNestedData] })
  nested?: TestNestedData[];
}

describe(__filename, () => {
  it(`adds fields metadata`, async () => {
    expect(getFieldsMeta(new TestBaseData())).toEqual({
      id: { type: String },
    } as FieldsMeta);
  });

  it(`works in inheritance`, async () => {
    expect(getFieldsMeta(new TestChildData())).toEqual({
      id: { type: String },
      random: { type: Number, nullable: true },
      nested: { type: [TestNestedData] },
    } as FieldsMeta);
  });
});
