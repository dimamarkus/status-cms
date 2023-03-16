export default ({ env }) => [
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  // 'strapi::security',
  // https://market.strapi.io/providers/@strapi-provider-upload-aws-s3#install-now-section
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            env(
              "AWS_BUCKET_NAME",
              "yourBucketName.s3.yourRegion.amazonaws.com"
            ),
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            env(
              "AWS_BUCKET_NAME",
              "yourBucketName.s3.yourRegion.amazonaws.com"
            ),
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
