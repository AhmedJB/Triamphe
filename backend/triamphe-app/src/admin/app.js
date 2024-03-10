const config = {
  locales: ["en"],
  translations: {
    en: {
      "Auth.form.button.login.strapi": "Log in",
      "Auth.form.welcome.subtitle": "Log in to your Admin account",
      "Auth.form.welcome.title": "Welcome to Triamphe",
      "admin.pages.MarketPlacePage.subtitle": "Get more",
      "admin.pages.MarketPlacePage.coming-soon.1": "A new way",
      "admin.pages.MarketPlacePage.content.subtitle":
        "The new marketplace will help you get. We are working hard to offer the best experience to discover and install plugins.",
      "admin.components.leftMeny.navbrand.title": "Triamphe",
      "admin.components.leftMeny.navbrand.workplace": "Triamphe",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
