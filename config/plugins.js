module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_QlTNOTYWkSVCXqesdpCiXthcRzuR/gaBLwOLUUG",
        apiToken: "QHgJbEVfm5PuDX57llCZGpMA",
        appFilter: "strapi-twilio",
        teamFilter: "tom-bits-projects",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });
