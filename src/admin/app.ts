export default {
  config: {
    tutorials: false,
    notifications: false,
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "aBLT",
        "app.components.LeftMenu.navbrand.workplace": "Bot Creator",
        "Auth.form.welcome.title": "Welcome back to aBLT",
        "Auth.form.welcome.subtitle": "Log in to your account",
        "app.components.HomePage.welcomeBlock.content.again": "Here you can create, train and launch your bots. Get started with the menu on the left.",
        "Content Manager": "Your Bots",
        "global.content-manager": "Your Bots",
        "content-manager.models": "Collection Types",
        "Media Library": "Uploads",
        "global.plugins.upload": "Uploads",
      },
    },
    // theme: {
    //   colors: {
    //     light: {
    //       primary: '#1976d2',
    //       secondary: '#424242',
    //       accent: '#82B1FF',
    //       error: '#FF5252',
    //       info: '#2196F3',
    //       success: '#4CAF50',
    //       warning: '#FFC107',
    //     },
    //     dark:  {
    //       primary: '#2196F3',
    //       secondary: '#424242',
    //       accent: '#FF4081',
    //       error: '#FF5252',
    //       info: '#2196F3',
    //       success: '#4CAF50',
    //       warning: '#FFC107',
    //     },
    //   },
    // },
    locales: [
      "en",
      "ru"
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app) {
    console.log(app);
  },
};
