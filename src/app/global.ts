if (typeof document !== 'undefined') {
  const Z7_sideMenu = document.querySelector('.side-left') as HTMLElement | null;
  const Z7_sideMenu_btn = document.querySelectorAll('.side-left > ul > li > ul li') as NodeListOf<HTMLElement>;
  const Z7_sideMenu_Out = document.querySelector('.side-left-out') as HTMLElement | null;

if (Z7_sideMenu) {
  document.querySelector('.side-left-in')?.addEventListener('click', () => {
    
    Z7_sideMenu.classList.add('block');
    if (Z7_sideMenu_Out) {
      Z7_sideMenu_Out.classList.add('block');
    }
  });

  Z7_sideMenu_btn.forEach((z) => {
    z.addEventListener('click', () => {
      if (Z7_sideMenu) {
        Z7_sideMenu.classList.remove('block');
      }
      if (Z7_sideMenu_Out) {
        Z7_sideMenu_Out.classList.remove('block');
      }
    });
  });

  if (Z7_sideMenu_Out) {
    Z7_sideMenu_Out.addEventListener('click', () => {
      if (Z7_sideMenu) {
        Z7_sideMenu.classList.remove('block');
      }
      Z7_sideMenu_Out.classList.remove('block');
    });
  }
}

  // Restante do código que utiliza document
} else {
  // Código alternativo ou lógica que não depende do documento (pode ser vazio se não for necessário)
}

