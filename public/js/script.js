class EncriptadorMensaje extends HTMLElement {
    constructor() {
      super();
  
      // Crear el shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Definir el template
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
       
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
  
          ::-webkit-scrollbar-track {
            background-color: #D8DFE8;
            border-radius: 3px;
          }
  
          ::-webkit-scrollbar {
            width: 10px;
          }
  
          ::-webkit-scrollbar-thumb {
            background-color:  #0A3871;
            border-radius: 3px;
            border: none;
            cursor: pointer;
          }
  
          :host {
            display: block;
            background:  #F3F5FC;
          }
  
          header {
            display: inline-block;
            position: absolute;
            width: 120px;
            height: 48px;
            left: 40px;
            top: 40px;
          }
  
          .header__contenedor {
            width: 100%;
            height: 100%;
          }
  
          main {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 100vh;
          }
  
          .main__form-input {
            display: flex;
            padding-top: 168px;
            padding-left: 240px;
            padding-right: 40px;
            padding-bottom: 72px;
            flex: 4;
          }
  
          .main__form-input form {
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: space-between;
          }
  
          .main__form-input form textarea::-webkit-input-placeholder {
            color:#0A3871;
          }
  
          .main__form-input form textarea {
            resize: none;
            color:  #0A3871;
            font-family: "Inter_28pt-Regular";
            font-size: 32px;
            border: none;
            outline: none;
            background: transparent;
          }
  
          .form-input__condition {
            display: flex;
            flex-direction: column;
          }
  
          .form-input__menssage {
            display: flex;
            gap: 8px;
            margin-bottom: 16px;
          }
  
          .form-input__condition small {
            color:  #495057;
            font-family: "Inter_18pt-Regular";
            font-size: 12px;
          }
  
          .form-input__button {
            display: flex;
            justify-content: space-between;
            gap: 24px;
          }
  
          .form-input__button input[type="submit"],
          .form-ouput__menssage input[type="button"] {
            width: 100%;
            height: 67px;
            border: none;
            outline: none;
            border-radius: 24px;
            font-family: "Inter_18pt-Regular";
            font-size: 16px;
            cursor: pointer;
            border: 1px solid  #0A3871;
          }
  
          .form-input__button input[type="submit"]:first-child {
            background:#0A3871;
            color: #fff;
          }
  
          .form-input__button input[type="submit"]:last-child {
            background: #D8DFE8;
            color: #0A3871;
          }
  
          .form-ouput__menssage input[type="button"] {
            background: transparent;
          }
  
          .main__form-ouput {
            flex: 1;
            padding: 64px 40px 40px;
          }
  
          .form-ouput,
          .form-ouput__menssage {
            background:  #FFF;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 400px;
            height: 100%;
            border-radius: 32px;
            padding: 32px;
            box-shadow: 0px 24px 32px -8px  #D8DFE8;
          }
  
          .form-ouput__menssage {
            justify-content: space-between;
          }
  
          .form-ouput img {
            margin-bottom: 32px;
          }
  
          .form-ouput h1 {
            font-size: 24px;
            text-align: center;
            margin-bottom: 5px;
            font-family: "Inter_24pt-Bold";
          }
  
          .form-ouput p {
            font-family: "Inter_18pt-Regular";
            font-size: 16px;
            text-align: center;
          }
  
          .form-ouput__menssage p {
            color: #495057;
            font-family: "Inter_24pt-Regular";
            font-size: 24px;
            word-wrap: break-word;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            margin-bottom: 15px;
          }
  
          .active {
            display: flex;
          }
  
          @media (max-width: 1277px) {
            .main__form-input {
              padding-left: 120px;
            }
          }
  
          @media (max-width: 1170px) {
            .main__form-input {
              padding-left: 40px;
            }
          }
  
          @media (max-width: 1087px) {
            header {
              left: 0;
            }
  
            main {
              flex-direction: column;
            }
  
            .main__form-ouput {
              padding-top: 0;
            }
  
            .form-ouput,
            .form-ouput__menssage {
              width: 100%;
            }
  
            .form-ouput__menssage p {
              margin-bottom: 32px;
              height: 180px;
            }
  
            .form-ouput img {
              display: none;
            }
          }
  
          @media (max-width: 500px) {
            header {
              top: 24px;
              left: -30px;
            }
  
            .main__form-input {
              padding-top: 152px;
              padding-left: 16px;
              padding-right: 16px;
            }
  
            .main__form-ouput {
              padding: 0 16px 16px;
            }
  
            .form-input__button {
              flex-direction: column;
            }
  
            .form-ouput__menssage p {
              height: 432px;
            }
          }
        </style>
        <header>
          <div class="header__contenedor">
            <img class="contenedor__logo" src="storage/img/Logo.png" alt="Logo Alura Latam">
          </div>
        </header>
        <main>
          <section class="main__form-input">
            <form id="myForm">
              <textarea name="chain" class="entrada-texto" cols="30" rows="10" placeholder="Ingrese el texto aquí"></textarea>
              <div class="form-input__condition">
                <div class="form-input__menssage">
                  <img src="storage/img/exclamation-circle-fill.png"> <small>Solo letras minúsculas y sin acentos</small>
                </div>
                <div class="form-input__button">
                  <input type="submit" data-action="encrypt" value="Encriptar">
                  <input type="submit" data-action="decrypt" value="Desencriptar">
                </div>
              </div>
            </form>
          </section>
          <section class="main__form-ouput">
            <article class="form-ouput active">
              <img src="storage/img/Muñeco.png">
              <h1>Ningún mensaje fue encontrado</h1>
              <p>Ingresa el texto que desees encriptar o desencriptar.</p>
            </article>
            <article class="form-ouput__menssage">
              <p></p>
              <input type="button" id="copy" value="Copiar">
            </article>
          </section>
        </main>
      `;
  
      // Agregar el template al shadow DOM
      shadow.appendChild(template.content.cloneNode(true));
  
      // Agregar eventos
      this.shadowRoot.querySelector('#myForm').addEventListener('submit', this.handleSubmit.bind(this));
      this.shadowRoot.querySelector('#copy').addEventListener('click', this.handleCopy.bind(this));
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const btn = event.submitter.dataset.action;
      const data = Object.fromEntries(new FormData(event.target));
  
      const outputMessage = this.shadowRoot.querySelector('.form-ouput');
      const copySection = this.shadowRoot.querySelector('.form-ouput__menssage');
      const copyParagraph = this.shadowRoot.querySelector('.form-ouput__menssage p');
  
      if (btn === 'encrypt') {
        outputMessage.classList.remove('active');
        copySection.classList.add('active');
        copyParagraph.innerHTML = this.encrypt(data);
      } else if (btn === 'decrypt') {
        outputMessage.classList.remove('active');
        copySection.classList.add('active');
        copyParagraph.innerHTML = this.decrypt(data);
      }
    }
  
    handleCopy() {
      const text = this.shadowRoot.querySelector('.form-ouput__menssage p').textContent;
      navigator.clipboard.writeText(text).then(() => {
        console.log('Texto copiado al portapapeles');
      });
    }
  
    encrypt(data) {
      let word = data.chain.split(" ");
    let convertion = word.map((value) => {
      value = value.split('');
      return value.map((caracter) => {
        if (caracter === "e") return "enter";
        else if (caracter === "i") return "imes";
        else if (caracter === "a") return "ai";
        else if (caracter === "o") return "ober";
        else if (caracter === "u") return "ufat";
        else return caracter;
      }).join("");
    }).join(" ");
    return convertion;
    }
  
    decrypt(data) {
      let word = data.chain.split(" ");
    let convertion = word.map((value) => {
      value = value.replace(/enter/gi, "e");
      value = value.replace(/imes/gi, "i");
      value = value.replace(/ai/gi, "a");
      value = value.replace(/ober/gi, "o");
      value = value.replace(/ufat/gi, "u");
      return value;
    }).join(" ");
    return convertion;
    }
  }
  
  customElements.define('encriptador-mensaje', EncriptadorMensaje);
  