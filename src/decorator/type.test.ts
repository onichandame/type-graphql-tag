import { getTypeMeta } from "../helper";
import { Type } from "./type";

@Type(`testtype`)
class TestType {}

describe(__filename, () => {
  it(`can extract type metadata`, async () => {
    expect(getTypeMeta(new TestType())).toEqual({ name: `testtype` });
  });
});
