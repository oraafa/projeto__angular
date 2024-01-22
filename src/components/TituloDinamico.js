class TituloDinamico extends HTMLElement {
    constructor () {
        super ()

        const shadow = this.attachShadow({ mode : 'open'})

        // componente base 
        const componenteRoot = document.createElement('h1')
        componenteRoot.textContent = this.getAttribute('titulo')

        // componente estilizado
        const style = document.createElement('style')
        style.textContent = `
            h1 {
                color : green;
            }
        `

        shadow.appendChild(componenteRoot)
        shadow.appendChild(style)
    }
}

customElements.define('titulo-dinamico' , TituloDinamico)