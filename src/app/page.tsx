{/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}

import './global';
import SideLeft from './components/SideLeft';
import Header from './components/Header';

function $1(tag: string){
  document.querySelector(tag)
}

export default function Home() {
  return (
    <div>
      <Header />
  
      {/* <!-- SIDE MENU 1 – – – – – – – – – – ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— --> */}
      <div className="side-left-out"></div>

      <SideLeft />

      <main>
          {/* <!--========================================PERIODO==================================================--> */}
          <section id="dv-periodo" className="block">
            <article></article>

            <div className="dv-btn abs">
                <button id="btn-voltar-periodo" className="btn btn-left" type="button">&lt;</button>
                <button id="btn-add-periodo" className="btn btn-right" type="button">ADICIONAR</button>
                <button id="btn-copiar-periodo" className="btn btn-left opacity" type="button">COPIAR</button>
                <button id="btn-inverter-periodo" className="btn btn-left opacity" type="button">INVERTER</button>
            </div>
          </section>

          {/* <!--========================================REGISTRO==================================================--> */}

          <section id="dv-registrar">
            <article>
              <div>
                <label>
                  DATA:
                  <input id="data" type="date" />
                </label>
                <label>
                  HORÁRIO:
                  <input id="hora" type="time" />
                </label>
              </div>

              <label>
                ORIGEM
                <select id="origem"></select>
              </label>

              <label>
                DESTINO
                <select id="destino"></select>
              </label>

              <label htmlFor="acomp">ACOMPANHADO POR:</label>
              <input id="acomp" list="acomp-list" type="text" name="acp" />
              <datalist id="acomp-list"></datalist>

              <label htmlFor="observ">OBSERVAÇÕES</label>
              <input id="observ" list="observ-list" type="text" name="obs" />
              <datalist id="observ-list"></datalist>
            </article>
          </section>

          {/* <!--========================================EDITOR==================================================--> */}
          <section id="dv-editar">

              <article></article>

              <div className="dv-btn abs">
                  <button id="btn-cancelar-editar" className="btn btn-left" type="button">CANCELAR</button>
                  <button id="btn-excluir-editar" className="btn btn-right" type="button">EXCLUIR</button>
              </div>
          </section>
      </main>
    </div>
  )
}
