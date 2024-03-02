export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      sayHello: (text, text2) => console.log(`${text} & ${text2} from plugin`),
    },
  };
});
