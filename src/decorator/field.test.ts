import { Field } from "./field";
import { FIELDS_META, FieldsMeta } from "../helper";

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

  @Field()
  nested?: TestNestedData;
}

describe(__filename, () => {
  it(`adds fields metadata`, async () => {
    expect(Reflect.getMetadata(FIELDS_META, new TestBaseData())).toEqual({
      id: { type: String },
    } as FieldsMeta);
  });

  it(`works in inheritance`, async () => {
    expect(Reflect.getMetadata(FIELDS_META, TestChildData.prototype)).toEqual({
      id: { type: String },
      random: { type: Number, nullable: true },
      nested: { type: { nested: { type: String } } },
    } as FieldsMeta);
  });
});
