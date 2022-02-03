const template = document.createElement('template');
template.innerHTML = `
<style>
.container {
  width: 100%;
}
.profile-card {
  border: 1px solid rgba(0, 0, 0, .5);
  border-radius: 30px;
  padding: 1em;
  padding-top: 2.3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
}
.profile-card:hover {
  -webkit-box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.5); 
  box-shadow: 0px 0px 14px 3px rgba(0,0,0,0.5);
}
.profile-picture {
  margin: 0px;
  padding: 0px;
  max-height: 5em;
  border: 1px solid rgba(0, 0, 0, .5);
  border-radius: 50%;
  padding: 1%;
}
.title, .subtitle {
  margin: 0px;
  margin-bottom: 0.3em;
  align-content: center;
  text-align: center;
  display: inline;
}

.subtitle {
  /* margin: 5px; */
}
#facebook, #twitter {
  text-decoration: none;
  color: inherit;
  margin: .25em;
  font-size: 1.8em;
}

#twitter {
  color: #1DA1F2;;
}
#facebook {
  color: #3b5998;
}
</style>
<div class="profile-card">
  <img alt="" class="profile-picture">
  <h1 id="name" class="title"></h1>
  <h2 id="email" class="subtitle" >/h2>
  <h3 id="phone" class="subtitle"></h3>
  <div class="social-media">
  <a id="facebook" href="#" class="fa fa-facebook"></a>
  <a id="twitter" href="" class="fa fa-twitter"></a>
  </div>
</div>
`;

class Profile extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('#name').innerText = this.getAttribute('fullname');
        this.shadowRoot.querySelector('#email').innerText = this.getAttribute('email');
        this.shadowRoot.querySelector('#phone').innerText = this.getAttribute('phone');
        this.shadowRoot.querySelector('img').src = this.getAttribute('pictureurl');   
    } 
   
    connectedCallback(){
      this.render();
    }

    static get observedAttributes() {
      return ['fullname', 'email','phone','pictureurl'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      let selectorName ='';
      console.log(name);
      if(name==='pictureurl') {
        selectorName='img';
        this.shadowRoot.querySelector(selectorName).src = newValue;
        return;
      }
      if(name==='fullname'){selectorName='#name';}
      if(name==='email') {selectorName='#email';}
      if(name==='phone') {selectorName='#phone';}
      
      console.log(newValue);
      this.shadowRoot.querySelector(selectorName).innerText = newValue;
      this.render();
    }
   
    render(){
      this.shadowRoot;
    }
   }
   window.customElements.define('profile-component', Profile);