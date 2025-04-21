import { formGroupEye, formGroupEyeSlash, formGroupMail } from './icons.js';
import { closeModal, closeModalRegister, showModalAlert } from './modals.js';
import { validateEmail, validatePassword } from './validation.js';

export async function showModalInformation() {
  const modal = document.getElementById('modal-information');
  const title = document.getElementById('modal-information-title');
  const content = document.getElementById('modal-information-main');
  const btnClose = document.getElementById('close-information');
  const init = document.getElementById('init');

  title.textContent = 'Sobre Nós';
  content.innerHTML = `
    <div class="contact-card">
      <p>Na <span>FluxoClean</span>, acreditamos que <span>indústrias de pequeno e médio porte, prestadores de serviços e beneficiadoras</span> merecem operar com a eficiência das grandes empresas, mas sem a complexidade e os custos elevados.</p>
      <h2>Nossa Missão</h2>
      <p>Aumentar o <span>lucro líquido</span> dos nossos parceiros por meio da <span>análise inteligente, melhoria contínua e digitalização sob medida</span> dos seus processos operacionais e gerenciais.</p>
      <h2>O que fazemos</h2>
      <p>Identificamos e <span>eliminamos desperdícios</span> que consomem até <span>20% do faturamento</span>, utilizando metodologias reconhecidas de classe mundial como:</p>
      <ul>
        <li><P><span>KAIZEN</span> (melhoria contínua)</p></li>
        <li><P><span>PDCA</span> (ciclo de otimização)</p></li>
        <li><P><span>WCM</span> (World Class Manufacturing)</p></li>
        <li><P><span>FMEA</span> (análise de falhas)</p></li>
      </ul>
      <p>Transformamos dados em <span>ações práticas</span> com:</p>
        <P><span>✔</span> Diagnóstico preciso do processo ou modus operandi</p>
        <P><span>✔</span> Padronização das oeprações</p>
        <P><span>✔</span> Sistemas personalizados para gerenciamento</p>
        <P><span>✔</span> Treinamentos operacionais e gerenciais</p>
        <P><span>✔</span> Digitalização de dados</p>
      <h2>Diferenciais</h2>
      <P><span>Foco no custo unitário</span>: Redução dos custos do Processo para menor custo do Produto</p>
      <P><span>Soluções adaptáveis</span>: Ferramentas feitas para a realidade da sua operação</p>
      <P><span>Resultados mensuráveis</span>: Acompanhamos indicadores de desempenho reais</p>
      <h2>Atendemos</h2>
      <P><span>▸</span> Pequenas e médias indústrias</p>
      <P><span>▸</span> Beneficiadoras de alimentos</p>
      <P><span>▸</span> Oficinas e prestadores de serviços</p>
      <h2>Atuação</h2>
      <P><span>Belo Horizonte/MG e região</span> (com possibilidade de atuação em todo o estado)</p>
      <h2>Transforme perdas em lucro</h2>
      <P>Acesse nossos canais de comunicação e solicite uma <span>avaliação gratuita</span>.</p>
        <img src="./src/img/logo-header.svg" alt="Logo da FluxoClean">            
    </div>
  `;

  modal.style.display = 'block';

  btnClose.onclick = function () {
    modal.style.display = 'none';
  };

  init.onclick = function () {
    content.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
}

export async function showModalContact() {
  const modal = document.getElementById('modal-information');
  const title = document.getElementById('modal-information-title');
  const content = document.getElementById('modal-information-main');
  const btnClose = document.getElementById('close-information');
  const init = document.getElementById('init');

  title.textContent = 'Contatos';
  content.innerHTML = `
    <div class="contact-card">
      
      <h2>Instituicional</h2>
      <div class="contact-item">
        <a href="mailto:contato@fluxoclean.com.br?subject=Resumo%20do%20processo%20e%20principais%20perdas&body=Olá,%20meu%20nome%20é%20...%20Gostaria%20de%20apresentar%20um%20resumo%20do%20meu%20processo%20de%20...%20e%20as%20etapas%20que%20acredito%20estar%20gerando%20maiores%20prejuízos.%20Segue%20abaixo:%0A%0A- Resumo%20do%20Processo:%20...%0A- Etapa 1:%0A- Etapa 2:%0A- Etapa 3:%0A%0A- Resumo%20das%20principais%20perdas:%20...%0A%0AAguardo%20retorno%20para%20avançar%20na%20melhoria%20do%20meu%20processo." target="_blank">
          contato@fluxoclean.com.br
        </a>
        <span>— Dúvidas e esclarecimentos</span>
      </div>

      <h2>Analista</h2>
      <div class="contact-item">
        <a href="mailto:felipe.galvao@fluxoclean.com.br" target="_blank">
          felipe.galvao@fluxoclean.com.br
        </a>
        <span>— Analista Técnico</span>
      </div>
      <div class="contact-item">
        <a href="https://wa.me/5531995454632?text=Olá%20FluxoClean!%20Gostaria%20de%20descrever%20meu%20processo%20produtivo%20e%20as%20etapas%20onde%20ocorrem%20as%20maiores%20perdas%20ou%20ineficiências." target="_blank">
          (31)99545-4632
        </a>
        <span>— WhatsApp</span>
      </div>
      <h2>Atuação</h2>
      <div class="contact-item">
        <a href="#">
          Belo Horizonte e Região
        </a>
        <span>— Possibilidade em todo estado de MG</span>
      </div>
      <h2>Transforme perdas em lucro</h2>
      <P>Acesse nossos canais de comunicação e solicite uma <span>avaliação gratuita</span>.</p>
        <img src="./src/img/logo-header.svg" alt="Logo da FluxoClean">             
    </div>
  `;

  modal.style.display = 'block';

  btnClose.onclick = function () {
    modal.style.display = 'none';
  };

  init.onclick = function () {
    content.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
}

export async function showModalLogin() {
  const modal = document.getElementById('modal-register');
  const title = document.getElementById('modal-register-title');
  const content = document.getElementById('modal-register-main');
  const btnClose = document.getElementById('close-register');
  const footer = document.getElementById('modal-register-footer');

  title.textContent = 'Iniciar Sessão';
  content.innerHTML = `
    <form id="formLogin" class="form">  
      <div class="form-group">
        <input class="form-group-input" type="text" id="email" name="email" autocomplete="username" required>
        <label class="form-group-label" for="">E-mail:</label>
        ${formGroupMail}
      </div>
      <div class="form-group">
        <input class="form-group-input" type="password" id="password" class="icon-input"  name="password" autocomplete="current-password" required>
        <label class="form-group-label" for="">Senha:</label>
        <button type="button" id="togglePassword">
          ${formGroupEye}
        </button>
      </div>
    </form>
  `;

  footer.innerHTML = `
    <div class="modal-user-footer">
      <button id="submit" class="modal-content-btn-enable">Entrar</button>
    </div>
  `;

  btnClose.onclick = function () {
    closeModalRegister();
  };

  modal.style.display = 'block';

  const passwordInput = document.getElementById('password');
  const togglePasswordButton = document.getElementById('togglePassword');

  togglePasswordButton.addEventListener('click', () => {
    const type =
      passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePasswordButton.innerHTML =
      type === 'password' ? formGroupEye : formGroupEyeSlash;
  });

  document.getElementById('submit').addEventListener('click', async () => {
    const dataLogin = {};

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email === '') {
      showModalAlert('Alert', 'E-mail!!', 'Digite seu e-mail', closeModal);
      return;
    }

    if (password === '') {
      showModalAlert('Alert', 'Senha!!', 'Digite a senha', closeModal);
      return;
    }

    if (!validateEmail(email) || !validatePassword(password)) {
      showModalAlert(
        'Alert',
        'Login Inválido',
        'E-mail ou Senha inválido!',
        closeModal
      );
      return;
    }

    dataLogin.email = email;
    dataLogin.password = password;
  });
}
/*
    try {
      const userData = await userLogin(dataLogin);
      if (userData.redirectUrl) {
        window.location.href = userData.redirectUrl;
      } else if (userData.status === 201) {
        const level = userData.level;
        showModalAlert('Next', userData.title, userData.msg, async () => {
          await openSession(level);
          window.location.href = './client.html';
        });
      } else if (userData.status === 400 || userData.status === 401) {
        showModalAlert('Alert', userData.title, userData.msg, closeModal);
        return;
      }
    } catch (error) {
      showModalAlert('Alert', 'Erro de Conexão!', error, closeModal);
      return;
    }
  });

  const modalRegister = document.getElementById('register');
  modalRegister.addEventListener('click', () => {
    //showModalRegister();
  });*/
