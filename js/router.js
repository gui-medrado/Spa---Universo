import * as elements from './elements.js'

export default class Router {
    routes = {}
    addRoute (rota, page) {
        //Nome e valor
        this.routes[rota] = page
    }
    getTheRoute () {
        this.getThePage()

        elements.link.addEventListener('click', (e) => {
            e.preventDefault()
            
            if(e.target.id) {
                elements.html.classList.remove(...elements.html.classList)
                elements.html.classList.add(e.target.id)
            } else return

            window.history.pushState({}, '', e.target.href)
            this.getThePage()
        })
    }
    getThePage () {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
    
        fetch(route)
            .then(data => data.text())
            .then(html => {
                document.querySelector('#app').innerHTML = html
            })
    }
}