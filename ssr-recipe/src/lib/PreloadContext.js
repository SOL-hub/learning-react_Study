import { createContext, useContext } from "react";

const PreloadContext = createContext(null);
export default PreloadContext;

//resolve는 함수 타입이다.
export const Preloader = ({ resolve }) => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext) return null;
  if (preloadContext.done) return null;

  preloadContext.promises.push(Promise(resolve()));
  return null;
};
