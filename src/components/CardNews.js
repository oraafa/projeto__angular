class Cardnews extends HTMLElement {
    constructor () {
        super ();

        const shadow = this.attachShadow({ mode : 'open'});

        shadow.appendChild(this.build());
        shadow.appendChild(this.style());

    }
    build () {
        const componenteRoot = document.createElement('div');
        componenteRoot.setAttribute('class' , 'cards');

        // CARD LEFT
        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card__left');

        const autor = document.createElement('span');
        const linkTitle =document.createElement('a');
        const paragraph = document.createElement('p')

        autor.textContent = 'by ' +  (this.getAttribute('autor') || 'Anonymous');
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('link-url')
        paragraph.textContent = this.getAttribute('content');
        paragraph.setAttribute('class' , 'texto__descricao');

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(paragraph)


        // CARD RIGHT
        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card__right');

        const newsImage = document.createElement('img')
        newsImage.src = this.getAttribute('photo')
        newsImage.alt = this.getAttribute('texto-alternativo')
        


        componenteRoot.appendChild(cardLeft);
        componenteRoot.appendChild(cardRight);

        cardRight.appendChild(newsImage);

        
        return componenteRoot;
    }

    style () {

        const componenteStyle = document.createElement('style')

        componenteStyle.textContent = `
        img {
            width: 70%;
        }
        
        
        
        
        .cards {
            display: flex;
            background-color: rgb(245, 236, 225);
            width: 720px;
            box-shadow: -1px -1px 21px 1px #000000, 5px 5px 10px 1px #000000;
            border-radius: 10px;
        }
        
        .card__right {
            display: flex;
            justify-content: flex-end;
        }
        
        .card__left > a {
            margin-top: 15px;
            margin-bottom: 10px;
            font-size: 25px;
            text-decoration: none;
            color: black;
            font-weight: bold
            
        }
        .card__left > p {
            font-weight: 400;
        }
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        
        }
        
        .texto__descricao {
            color: gray;
        }
        
        `

        return componenteStyle

    }
    

    
}

customElements.define('card-news' , Cardnews);