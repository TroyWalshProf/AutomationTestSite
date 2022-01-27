import { useEffect } from "react";

const useScripts = (...scripts: string[]) => {
  useEffect(() => {
    const scriptElements = scripts.map((script) => {
      const scriptElement = document.createElement("script");
      scriptElement.innerHTML = script;
      document.body.appendChild(scriptElement);
      return scriptElement;
    });

    return () => {
      scriptElements.forEach((scriptElement) =>
        document.body.removeChild(scriptElement)
      );
    };
  });
};

export { useScripts };
