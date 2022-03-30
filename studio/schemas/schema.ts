// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import page from "./documents/page";
import toc from "./documents/table-of-contents";
import post from "./documents/post";
import project from "./documents/project";
import siteSettings from "./documents/site-settings";
import companyInfo from "./documents/company-info";

import tocLink from "./objects/table-of-contents-link";
import tocSection from "./objects/table-of-contents-section";
import blockContent from "./objects/block-content";
import delimitedString from "./primitives/delimited-string";
import mainImage from "./objects/main-image";
import blockText from "./objects/block-text";
import category from "./documents/category";
import figure from "./objects/figure";
import person from "./objects/person";
import postAuthor from "./objects/post-author";
import projectMember from "./objects/project-memeber";
import slideshow from "./objects/slideshow";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // // The following are document types which will appear
    // // in the studio.
    page,
    toc,
    post,
    project,
    siteSettings,
    companyInfo,
    // // When added to this list, object types can be used as
    // // { type: 'typename' } in other document schemas
    tocLink,
    tocSection,
    blockContent,
    delimitedString,
    mainImage,
    blockText,
    category,
    figure,
    person,
    postAuthor,
    projectMember,
    slideshow,
  ]),
});
