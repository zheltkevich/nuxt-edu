export const useUtils = () => {
  const sayHello = (text: string) => {
    console.log(text ? text : "HELLO FROM COMPOSABLES");
  };

  return {
    sayHello,
  };
};
