import Router from "./router.js";

const roteador = new Router()
roteador.addRoute('/', './pages/home.html')
roteador.addRoute('/universo', './pages/universo.html')
roteador.addRoute('/exploracao', './pages/exploracao.html')

roteador.getTheRoute()
window.onpopstate = () => roteador.getTheRoute()
window.route = () => roteador.getThePage()