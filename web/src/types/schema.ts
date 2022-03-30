import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   * Titles should be catchy, descriptive, and not too long
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Some frontends will require a slug to be set to be able to show the post
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Published at — `datetime`
   *
   * This can be used to schedule post for publishing
   */
  publishedAt?: string;

  /**
   * Main image — `mainImage`
   *
   *
   */
  mainImage?: MainImage;

  /**
   * Page Overview — `blockContent`
   *
   *
   */
  pageOverview?: BlockContent;

  /**
   * Keywords — `array`
   *
   * Add keywords that describes your page.
   */
  keywords?: Array<SanityKeyed<string>>;
}

/**
 * Table of Contents
 *
 *
 */
export interface Toc extends SanityDocument {
  _type: "toc";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Sections — `array`
   *
   *
   */
  sections?: Array<SanityKeyed<TocSection>>;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type TocLink = {
  _type: "tocLink";
  /**
   * Target — `reference`
   *
   *
   */
  target?: SanityReference<Page>;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Children — `array`
   *
   *
   */
  children?: Array<SanityKeyed<TocLink>>;
};

export type TocSection = {
  _type: "tocSection";
  /**
   * Target — `reference`
   *
   *
   */
  target?: SanityReference<Page>;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Links — `array`
   *
   *
   */
  links?: Array<SanityKeyed<TocLink>>;
};

export type MainImage = {
  _type: "mainImage";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessiblity.
   */
  alt?: string;
};

export type Documents = Page | Toc;
