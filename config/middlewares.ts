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
              "statusmoney-cms.s3.us-west-2.amazonaws.com"
            ),
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            env(
              "AWS_BUCKET_NAME",
              "statusmoney-cms.s3.us-west-2.amazonaws.com"
            ),
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
