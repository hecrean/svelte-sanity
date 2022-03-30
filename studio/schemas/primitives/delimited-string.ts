import StringWithLimits from "../../input-components/CustomString";
import { Rule } from "@sanity/types";

const delimitedString = {
  name: "delimitedString",
  title: "String that is limited",
  type: "string",
  inputComponent: StringWithLimits,
  validation: (Rule: Rule) => Rule.max(100),
};

export default delimitedString;
