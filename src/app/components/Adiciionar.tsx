//ADICIONAR REGISTRO na planilha-----------------------------------------
document.getElementById('btn-add-periodo').addEventListener('click', function()
{
	  f_selectMenu_cancel();
    document.querySelector('section.block').classList.remove('block');
    Tela[1].classList.add('block');
    document.getElementById('btn-cancelar-registrar').value = Titulo.innerText;

    document.getElementById('data').value = HOJE;
    document.getElementById('data').disabled = false;
    document.getElementById('acomp').value = '';
    document.getElementById('observ').value = '';
    Setor[0].selectedIndex = 0;
    Setor[1].selectedIndex = 0;

    let data = new Date();
    let hora = String(data.getHours()).padStart(2,'0');
    let min = String(data.getMinutes()).padStart(2,'0');

    hora = hora + ':' + min;
    document.getElementById('hora').value = hora;

    if(plt==[])
    {
        Titulo.innerText = 'ATENDIMENTO 01';
        SALVAR.value = HOJE+'-01';
    }
    else
    {
        let flt = plt.filter(d => d.atd.slice(0,10) == HOJE).length;

        if (flt == 0)
        {
            Titulo.innerText = 'ATENDIMENTO 01';
            SALVAR.value = HOJE+'-01';
        }
        else
        {
            let add = String(flt+1).padStart(2,'0');
            Titulo.innerText = 'ATENDIMENTO ' + add;
            SALVAR.value = HOJE+'-'+add;
            
        }
    }
    Setor[0].focus();
    Setor[0].click();
});

  return (
    <div>
      <button onClick={alternarClasses}>Alternar Classes</button>

      <section className={secao1Ativa ? 'block' : ''}>
        {/* Conteúdo da seção 1 */}
        <h2>Seção 1</h2>
      </section>

      <section className={!secao1Ativa ? 'block' : ''}>
        {/* Conteúdo da seção 2 */}
        <h2>Seção 2</h2>
      </section>
    </div>
  );
};
