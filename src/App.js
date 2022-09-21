import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import ReactDOM from "react-dom";
import "./styles.css";
import { Menubar } from "primereact/menubar";
import { Toast } from "primereact/toast";
import React, { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Text, View } from "react-native";

export default function App() {
  const toast = useRef(null);
  const [e, setApi] = useState("");

  const elementos = [
    {
      label: "Cardápio",
      icon: "pi pi-fw pi-plus",
      items: [
        {
          label: "New ",
          icon: "pi pi-fw pi-plus",
          items: [
            {
              label: "Comidas Caseiras",
              icon: "pi pi-fw pi-car",
              items: [
                {
                  label: "Bolos",
                  icon: "pi pi-fw pi-car",
                  command: (event) => {
                    event.originalEvent =
                      "../../pages/CadastrarVeiculos/CarrosNovos/createCarros.js";
                  }
                },
                {
                  label: "Tortas",
                  icon: "pi pi-fw pi-car"
                }
              ]
            }
          ]
        },
        {
          label: "Icons",
          icon: "pi pi-fw pi-google",
          items: [
            { label: "Linkedin", icon: " pi pi-linkedin" },
            { label: "GitHub", icon: "pi pi-github" },
            { label: "Telegram", icon: " pi pi-telegram" },
            { label: "Facebook", icon: "pi pi-facebook" },
            { label: "Twitter", icon: "pi pi-twitter" },
            { label: "Whattsapp", icon: "pi pi-whatsapp" },
            { label: "Youtube", icon: "pi pi-youtube" },
            { label: "Instagram", icon: "pi pi-instagram" }
          ]
        },
        { label: "Massas" },
        {
          label: "Sopas",
          icon: "pi pi-fw ",
          items: [
            { label: "Combo 200 Gramas", icon: "" },
            { label: "Combo 400 Gramas", icon: "" },
            { label: "", icon: "" }
          ]
        }
      ]
    }
  ];
  const end = (
    <InputText placeholder="Search" type="text" onClick={() => setApi("")} />
  );

  return (
    <div className="App">
      <Toast ref={toast}></Toast>
      <header>
        <div className="card">
          <Menubar
            model={elementos}
            onClick={() => setApi(elementos.items)}
            end={end}
          />
        </div>
      </header>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Try editing me! 🎉</Text>
        <Text>Olá.Silas Vasconcelos Aqui 🎉</Text>
      </View>
      <nav>
        <ul class="nav nav-pills nav-fill">
          <div class="container p-3 my-3 bg-dark text-#">
            <li class="nav-item">
              <a
                class="nav-link active"
                href="https://www.instagram.com/tathymarmitasfitt/"
              >
                Click Aqui para conhcer nosso Instagram
              </a>
            </li>
          </div>
        </ul>
      </nav>

      {/* Implementação */}
      {/* <div class="jumbotron text-center"> */}
      {/* <img
          src="tathy.jpeg"
          class="rounded-circle"
          style="width:300px;height:300px;"
        /> */}
      {/* <!--<h1>TATHY MARMITAS FITT</h1></div>--> */}
      {/* <!--Substituição de uma nova função-->     */}
      {/* <!--<button type="button"  class="btn btn-lg btn-danger" style="color: black;"  */}
      {/* data-toggle="popover" */}
      {/* title="Título do popover">--> <a href="#" class="text-primar"   */}
      {/* data-content="Aqui vai algum tipo de conteúdo. Muito da hora, né?!">Clique para Nosso Instagram! */}
      {/* </button></a> */}
      <div class="box-content"></div>
      <article>
        <h2>Cardápio:</h2>
        <p>Risoto</p>
        <p>Lasanha de berinjela</p>
        <p>Lasanha de abobrinha</p>
        <p>Lentilha Bacon Calabresa</p>
        <p>Arroz Panqueca de Frango</p>
        <p>Arroz Panqueca, Carne Moída</p>
      </article>
      <article>
        <p>Arroz, Cenoura, Filé De Frango.</p>
        <p>Arroz, Strogonoff e batata doce</p>
        <p>Purê De Batata Doce, Frango Assado.</p>
        <p>Escondidinho de carne moída com purê de aipim</p>
        <p>Escondidinho de frango desfiado com batata doce</p>
        <p>Risoto de frango com arroz integral e mix de legumes</p>
      </article>
      <article>
        <p>Carne moída com molho de tomate e macarrão sem glúten</p>
        <p>Carne moída com molho de tomate e nhoque de batata doce</p>
        <p>Escondidinho de carne desfiada com Purê de batata salsa</p>
        <p>Arroz Abobrinha, Carne Moída, Grão De Bico, Carne De Porco</p>
        <p>Arroz abóbora carne de panela</p>
        <p>Caldo Verde, Bacon, Calabresa</p>
      </article>
      <article>
        <h2>SOPAS</h2>
        <h2>Combo 200 Gramas </h2>
        <p>1 Unidade -R$:9,00</p>
        <p>5 Unidades - R$:45,00</p>
        <p>10 Unidades - R$:75,00</p>
        <p>15 Unidades - R$:90,00</p>
        <p>20 Unidades - R$:140,00</p>
      </article>
      <article>
        <h2>Combo 400 Gramas</h2>
        <p>1 Unidade -R$:12,00 </p>
        <p>5 Unidades - R$:60,00</p>
        <p> 10 Unidades - R$:110,00</p>
        <p> 15 Unidades - R$:145,00</p>
        <p> 20 Unidades- R$:190,00</p>
      </article>
      <div class="footer">
        <p>Developer: Silas Vasconcelos Cruz</p>
      </div>
    </div>
  );
}
