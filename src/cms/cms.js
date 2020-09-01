import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import ContactUsPagePreview from "./preview-templates/ContactUsPagePreview";
import DonatePagePreview from "./preview-templates/DonatePagePreview";
import BlogPagePreview from "./preview-templates/BlogPagePreview";
import ClientsPagePreview from "./preview-templates/ClientsPagePreview";
import ExpertisePagePreview from "./preview-templates/ExpertisePagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

// CMS.registerPreviewTemplate("index", IndexPagePreview);
// CMS.registerPreviewTemplate("about", AboutPagePreview);
// CMS.registerPreviewTemplate("blog", BlogPostPreview);
// CMS.registerPreviewTemplate("contact-us", ContactUsPagePreview);
// CMS.registerPreviewTemplate("donate", DonatePagePreview);
// CMS.registerPreviewTemplate("news", BlogPagePreview);
// CMS.registerPreviewTemplate("clients", ClientsPagePreview);
// CMS.registerPreviewTemplate("expertise", ExpertisePagePreview);
