export default function SideLeft() {
  return(
    <aside className="side-left">
      <ul>
          <li>
            <h2>&ensp;<span id="maqueiro">Digite seu nome</span></h2>
          </li>
          <li className="side-left-periodo">&emsp;<span>Períodos</span>
              <ul>
                    <li>ANUAL</li>
                    <li>MENSAL</li>
                    <li>DIÁRIO</li>
                    <li>HOJE</li>
              </ul>
            </li>
          <li>&emsp;<span>Dados Salvos</span>
                <ul>
                    <li id="side-left-acomp">Acompanhantes</li>
                    <li id="side-left-observ">Observações</li>
                    <li id="side-left-limpar">Limpar todos os Atendimentos</li>
                    <li id="side-left-resetar">RESETAR TODOS OS DADOS</li>
                </ul>
          </li>
      </ul>
    </aside>
  )
}