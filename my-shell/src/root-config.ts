import { registerApplication, start, type LifeCycles } from "single-spa";


// Registro de apps (puedes usar SystemJS o cargar por URL directa)
registerApplication<{
    domElementGetter: () => HTMLElement | null;
  }>({
    name: "@ewc/ecard",
    app: () => System.import<LifeCycles>("@ewc/ecard"),
    activeWhen: ["/ecard"],
    customProps: {
      domElementGetter: () => document.getElementById("microfrontend-container"),
    },
  });

registerApplication({
  name: "@ewc/reportes",
  app: () => System.import<LifeCycles>("@ewc/reportes"),
  activeWhen: ["/reportes"],
});

// puedes agregar más apps...

start();