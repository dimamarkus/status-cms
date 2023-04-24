module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          // ACL: 'private', // <== set ACL to private
          // signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 60 * 60 * 24 * 7),
          Bucket: env('AWS_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
      "duplicate-button": true,
    },
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 6, // Default is 5
    }
  },
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        contentTypes: [
          // list of Content-Types UID to cache
          "api::landing-page.landing-page",
        ],
      },
    },
  },
});
