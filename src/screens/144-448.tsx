import HomeReviews from '../components/HomeReviews';
import Gallery from '../components/Gallery';
const imgInicioMobile = "./assets/images/144-448-imgInicioMobile.webp";
const imgResultadoAntesEDepois = "./assets/images/144-448-imgResultadoAntesEDepois.webp";
const imgResultadoAntesEDepois1 = "./assets/images/144-448-imgResultadoAntesEDepois1.webp";
const imgResultadoAntesEDepois2 = "./assets/images/144-448-imgResultadoAntesEDepois2.webp";
const imgResultadoAntesEDepois3 = "./assets/images/144-448-imgResultadoAntesEDepois3.webp";
const imgImagemDoProcedimento = "./assets/images/117-160-imgRectangle1.webp";
const imgImagemDoProcedimento1 = "./assets/images/117-160-imgRectangle2.webp";
const imgImagemDoProcedimento2 = "./assets/images/117-160-imgRectangle3.webp";
const imgImagemDoProcedimento3 = "./assets/images/117-160-imgRectangle4.webp";
const imgImagemDoProcedimento4 = "./assets/images/117-160-imgRectangle5.webp";

type VbFaqItemMobileProps = {
  className?: string;
  estado?: "Fechado";
  numero?: string;
  pergunta?: string;
};

function VbFaqItemMobile({ className, estado = "Fechado", numero = "01.", pergunta = "Como agendar uma avaliação?" }: VbFaqItemMobileProps) {
  return (
    <button className={className || "bg-white border-[var(--cor\\/apoio\\/nevoa,#e3e8e7)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start py-[24px] relative w-[342px]"} data-node-id="144:536">
      <div className="[word-break:break-word] content-stretch flex gap-[10px] items-start leading-[1.5] overflow-clip relative shrink-0 text-left w-[342px]" data-node-id="144:537" data-name="Cabeçalho">
        <p className="font-['DM_Sans:Regular'] font-normal relative shrink-0 text-[12px] text-[color:var(--cor\/texto\/secundario,#596761)] w-[26px]" data-node-id="144:538" style={{ fontVariationSettings: '"opsz" 14' }}>
          {numero}
        </p>
        <p className="font-['DM_Sans:Medium'] font-medium relative shrink-0 text-[17px] text-[color:var(--cor\/marca\/floresta,#1c2f2c)] w-[276px]" data-node-id="144:539" style={{ fontVariationSettings: '"opsz" 14' }}>
          {pergunta}
        </p>
        <p className="font-['DM_Sans:Regular'] font-normal relative shrink-0 text-[18px] text-[color:var(--cor\/marca\/floresta,#1c2f2c)] w-[20px]" data-node-id="144:540" style={{ fontVariationSettings: '"opsz" 14' }}>
          +
        </p>
      </div>
    </button>
  );
}

export default function LpMobile() {
  return (
    <div className="bg-[#1c2f2c] content-stretch flex flex-col items-start relative size-full" data-node-id="144:448" data-name="LP — Mobile">
      <div className="content-stretch flex flex-col gap-[18px] h-[680px] items-start justify-end overflow-clip pb-[32px] pt-[96px] px-[24px] relative rounded-bl-[28px] rounded-br-[28px] shrink-0 w-[390px]" data-node-id="144:452" data-name="Início mobile">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-bl-[28px] rounded-br-[28px]">
          <img alt="" className="absolute max-w-none object-cover rounded-bl-[28px] rounded-br-[28px] size-full" src={imgInicioMobile} />
          <div className="absolute bg-gradient-to-b from-[1.838%] from-[rgba(13,26,23,0)] inset-0 rounded-bl-[28px] rounded-br-[28px] to-[72.794%] to-[rgba(13,26,23,0.92)] via-[37.031%] via-[rgba(13,26,23,0.1)]" />
        </div>
        <div className="[word-break:break-word] absolute backdrop-blur-[5px] border-[#8f8f8f] border-b border-solid content-stretch flex font-medium h-[72px] items-center justify-between left-0 overflow-clip px-[24px] py-[18px] top-0 w-[390px]" data-node-id="144:449" data-name="Menu mobile">
          <p className="font-['Playfair_Display:Medium'] leading-[1.2] relative shrink-0 text-[#f3edc3] text-[22px] w-[218px]" data-node-id="144:450">
            Viviane Bondi
          </p>
          <button className="block cursor-pointer font-['DM_Sans:Medium'] leading-[0] relative shrink-0 text-[14px] text-left text-white w-[48px]" data-node-id="144:451" style={{ fontVariationSettings: '"opsz" 14' }}>
            <p className="leading-[1.55]">Menu</p>
          </button>
        </div>
        <div className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[0] relative shrink-0 text-[36px] text-[color:var(--cor\/marca\/champagne,#f3edc3)] tracking-[-1px] w-[342px]" data-node-id="144:454" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[1.1] mb-0">Viviane Bondi</p>
          <p className="leading-[1.1]">Estética Avançada</p>
        </div>
        <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[1.45] relative shrink-0 text-[#f5f7f2] text-[15px] w-[342px]" data-node-id="144:455" style={{ fontVariationSettings: '"opsz" 14' }}>
          Enfermeira esteta há 24 anos, promovendo autoestima naturalmente. Especializada em estética. Mentora em cuidados e bem-estar estético, proporcionando resultados únicos e personalizados.
        </p>
        <a className="bg-white content-stretch cursor-pointer flex h-[50px] items-center justify-center overflow-clip relative rounded-[25px] shrink-0 w-[342px]" href="tel:+5561991817984" data-node-id="144:456" target="_blank" data-name="Agendamento">
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[14px] text-left whitespace-nowrap" data-node-id="144:457" style={{ fontVariationSettings: '"opsz" 14' }}>
            Agende sua consulta ↗
          </p>
        </a>
      </div>
      <HomeReviews mobile />
      <Gallery mobile />
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[24px] py-[40px] relative shrink-0 w-[390px]" data-node-id="144:485" data-name="Procedimentos mobile">
        <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[1.2] relative shrink-0 text-[#1c2f2c] text-[28px] tracking-[-0.6px] w-[342px]" data-node-id="144:486" style={{ fontVariationSettings: '"opsz" 14' }}>
          Procedimentos
        </p>
        <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#596661] text-[15px] w-[342px]" data-node-id="144:487" style={{ fontVariationSettings: '"opsz" 14' }}>
          Explore os procedimentos e entenda o cuidado ideal para você.
        </p>
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[342px]" data-node-id="144:488" data-name="Procedimento / Harmonização Protocolo Natural Lifting">
          <button className="block cursor-pointer h-[224px] relative rounded-[20px] shrink-0 w-[342px]" data-node-id="144:489" data-name="Imagem do procedimento">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[20px]">
              <div className="absolute bg-[#e3e8e5] inset-0 rounded-[20px]" />
              <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                <img alt="" className="absolute max-w-none inset-0 size-full object-cover" src={imgImagemDoProcedimento} style={{ objectPosition: "50.0000% 42.0813%" }} />
              </div>
            </div>
          </button>
          <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[1.55] min-w-full relative shrink-0 text-[#1c2f2c] text-[23px] tracking-[-0.4px] w-[min-content]" data-node-id="144:490" style={{ fontVariationSettings: '"opsz" 14' }}>
            Harmonização Protocolo Natural Lifting
          </p>
          <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#596661] text-[15px] w-[342px]" data-node-id="144:491" style={{ fontVariationSettings: '"opsz" 14' }}>
            Vai muito além da estética: é sobre realçar sua beleza com equilíbrio, naturalidade e segurança. Cada procedimento é realizado com técnica, planejamento e cuidado.
          </p>
          <button className="bg-white border border-[rgba(229,235,232,0.65)] border-solid content-stretch cursor-pointer flex h-[48px] items-center justify-center overflow-clip relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(26,43,38,0.05)] shrink-0 w-[342px]" data-node-id="144:492" data-name="Entender Procedimento">
            <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[13px] text-left whitespace-nowrap" data-node-id="144:493" style={{ fontVariationSettings: '"opsz" 14' }}>
              Entender Procedimento ↗
            </p>
          </button>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[342px]" data-node-id="144:494" data-name="Procedimento / Revitalização de perfil feminino">
          <button className="block cursor-pointer h-[224px] relative rounded-[20px] shrink-0 w-full" data-node-id="144:495" data-name="Imagem do procedimento">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[20px]">
              <div className="absolute bg-[#e3e8e5] inset-0 rounded-[20px]" />
              <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                <img alt="" className="absolute max-w-none inset-0 size-full object-cover" src={imgImagemDoProcedimento1} style={{ objectPosition: "50.0000% 42.0813%" }} />
              </div>
            </div>
          </button>
          <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[1.55] min-w-full relative shrink-0 text-[#1c2f2c] text-[23px] tracking-[-0.4px] w-[min-content]" data-node-id="144:496" style={{ fontVariationSettings: '"opsz" 14' }}>
            Revitalização de perfil feminino
          </p>
          <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#596661] text-[15px] w-[342px]" data-node-id="144:497" style={{ fontVariationSettings: '"opsz" 14' }}>
            Cuidar de si é muito mais do que estética — é sobre se sentir bem, confiante e em equilíbrio.
          </p>
          <button className="bg-white border border-[rgba(229,235,232,0.65)] border-solid content-stretch cursor-pointer flex h-[48px] items-center justify-center overflow-clip relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(26,43,38,0.05)] shrink-0 w-[342px]" data-node-id="144:498" data-name="Entender Procedimento">
            <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[13px] text-left whitespace-nowrap" data-node-id="144:499" style={{ fontVariationSettings: '"opsz" 14' }}>
              Entender Procedimento ↗
            </p>
          </button>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[342px]" data-node-id="144:500" data-name="Procedimento / Lábios">
          <button className="block cursor-pointer h-[224px] relative rounded-[20px] shrink-0 w-full" data-node-id="144:501" data-name="Imagem do procedimento">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[20px]">
              <div className="absolute bg-[#e3e8e5] inset-0 rounded-[20px]" />
              <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                <img alt="" className="absolute max-w-none inset-0 size-full object-cover" src={imgImagemDoProcedimento2} style={{ objectPosition: "50.0000% 55.8282%" }} />
              </div>
            </div>
          </button>
          <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[1.55] min-w-full relative shrink-0 text-[#1c2f2c] text-[23px] tracking-[-0.4px] w-[min-content]" data-node-id="144:502" style={{ fontVariationSettings: '"opsz" 14' }}>
            Lábios
          </p>
          <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#596661] text-[15px] w-[342px]" data-node-id="144:503" style={{ fontVariationSettings: '"opsz" 14' }}>
            O procedimento também ajuda na hidratação, definição do contorno e valorização da beleza natural dos lábios. O objetivo é realçar seus traços com equilíbrio e naturalidade.
          </p>
          <button className="bg-white border border-[rgba(229,235,232,0.65)] border-solid content-stretch cursor-pointer flex h-[48px] items-center justify-center overflow-clip relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(26,43,38,0.05)] shrink-0 w-[342px]" data-node-id="144:504" data-name="Entender Procedimento">
            <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[13px] text-left whitespace-nowrap" data-node-id="144:505" style={{ fontVariationSettings: '"opsz" 14' }}>
              Entender Procedimento ↗
            </p>
          </button>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[342px]" data-node-id="144:506" data-name="Procedimento / Natural Lifting">
          <button className="block cursor-pointer h-[224px] relative rounded-[20px] shrink-0 w-full" data-node-id="144:507" data-name="Imagem do procedimento">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[20px]">
              <div className="absolute bg-[#e3e8e5] inset-0 rounded-[20px]" />
              <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                <img alt="" className="absolute max-w-none inset-0 size-full object-cover" src={imgImagemDoProcedimento3} style={{ objectPosition: "50.0000% 40.2030%" }} />
              </div>
            </div>
          </button>
          <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[1.55] min-w-full relative shrink-0 text-[#1c2f2c] text-[23px] tracking-[-0.4px] w-[min-content]" data-node-id="144:508" style={{ fontVariationSettings: '"opsz" 14' }}>
            Natural Lifting
          </p>
          <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#596661] text-[15px] w-[342px]" data-node-id="144:509" style={{ fontVariationSettings: '"opsz" 14' }}>
            O meu objetivo é realçar o que você tem de melhor, preservando a sua identidade e garantindo que o espelho reflita uma versão renovada, descansada e, acima de tudo, você mesma.
          </p>
          <button className="bg-white border border-[rgba(229,235,232,0.65)] border-solid content-stretch cursor-pointer flex h-[48px] items-center justify-center overflow-clip relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(26,43,38,0.05)] shrink-0 w-[342px]" data-node-id="144:510" data-name="Entender Procedimento">
            <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[13px] text-left whitespace-nowrap" data-node-id="144:511" style={{ fontVariationSettings: '"opsz" 14' }}>
              Entender Procedimento ↗
            </p>
          </button>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[342px]" data-node-id="144:512" data-name="Procedimento / Rinomodelação">
          <button className="block cursor-pointer h-[224px] relative rounded-[20px] shrink-0 w-full" data-node-id="144:513" data-name="Imagem do procedimento">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[20px]">
              <div className="absolute bg-[#e3e8e5] inset-0 rounded-[20px]" />
              <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                <img alt="" className="absolute max-w-none inset-0 size-full object-cover" src={imgImagemDoProcedimento4} style={{ objectPosition: "50.0000% 44.1054%" }} />
              </div>
            </div>
          </button>
          <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[1.55] min-w-full relative shrink-0 text-[#1c2f2c] text-[23px] tracking-[-0.4px] w-[min-content]" data-node-id="144:514" style={{ fontVariationSettings: '"opsz" 14' }}>
            Rinomodelação
          </p>
          <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#596661] text-[15px] w-[342px]" data-node-id="144:515" style={{ fontVariationSettings: '"opsz" 14' }}>
            Sutil, mas transformador! A rinomodelação é a prova de que pequenos ajustes podem trazer grandes resultados.
          </p>
          <button className="bg-white border border-[rgba(229,235,232,0.65)] border-solid content-stretch cursor-pointer flex h-[48px] items-center justify-center overflow-clip relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(26,43,38,0.05)] shrink-0 w-[342px]" data-node-id="144:516" data-name="Entender Procedimento">
            <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[13px] text-left whitespace-nowrap" data-node-id="144:517" style={{ fontVariationSettings: '"opsz" 14' }}>
              Entender Procedimento ↗
            </p>
          </button>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[342px]" data-node-id="144:518" data-name="Procedimento / Fios Aptos">
          <button className="bg-[#e3e8e5] block cursor-pointer h-[224px] relative rounded-[20px] shrink-0 w-full" data-node-id="144:519" data-name="Fios Aptos / fotografia" ><img className="site-procedure-photo" src="./assets/images/fios-aptos-rosto.webp" alt="Comparação de rosto" width={1920} height={1920} loading="lazy" decoding="async" /></button>
          <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[1.55] min-w-full relative shrink-0 text-[#1c2f2c] text-[23px] tracking-[-0.4px] w-[min-content]" data-node-id="144:520" style={{ fontVariationSettings: '"opsz" 14' }}>
            Fios Aptos
          </p>
          <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#596661] text-[15px] w-[342px]" data-node-id="144:521" style={{ fontVariationSettings: '"opsz" 14' }}>
            Cada pele, cada corpo e cada objetivo são únicos. A avaliação é o primeiro passo para conversar sobre suas necessidades e conhecer as possibilidades de cuidado.
          </p>
          <button className="bg-white border border-[rgba(229,235,232,0.65)] border-solid content-stretch cursor-pointer flex h-[48px] items-center justify-center overflow-clip relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(26,43,38,0.05)] shrink-0 w-[342px]" data-node-id="144:522" data-name="Entender Procedimento">
            <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[13px] text-left whitespace-nowrap" data-node-id="144:523" style={{ fontVariationSettings: '"opsz" 14' }}>
              Entender Procedimento ↗
            </p>
          </button>
        </div>
        <a className="bg-white border border-[#e5ebe8] border-solid content-stretch cursor-pointer flex h-[48px] items-center justify-center overflow-clip relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(26,43,38,0.05)] shrink-0 w-[342px]" data-node-id="144:524" data-name="Ver catálogo">
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[14px] text-left whitespace-nowrap" data-node-id="144:525" style={{ fontVariationSettings: '"opsz" 14' }}>
            Catálogo de Procedimentos ↗
          </p>
        </a>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[24px] py-[40px] relative shrink-0 w-[390px]" data-node-id="144:532" data-name="FAQ mobile">
        <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[1.2] relative shrink-0 text-[#1c2f2c] text-[28px] tracking-[-0.6px] w-[342px]" data-node-id="144:533" style={{ fontVariationSettings: '"opsz" 14' }}>
          Ainda tem dúvidas?
        </p>
        <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#596661] text-[15px] w-[342px]" data-node-id="144:534" style={{ fontVariationSettings: '"opsz" 14' }}>
          Respostas para começar com tranquilidade.
        </p>
        <VbFaqItemMobile className="bg-white border-[var(--cor\/apoio\/nevoa,#e3e8e7)] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[20px] items-start py-[24px] relative shrink-0 w-[342px]" />
        <VbFaqItemMobile className="bg-white border-[var(--cor\/apoio\/nevoa,#e3e8e7)] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[20px] items-start py-[24px] relative shrink-0 w-[342px]" numero="02." pergunta="Onde fica a clínica?" />
        <VbFaqItemMobile className="bg-white border-[var(--cor\/apoio\/nevoa,#e3e8e7)] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[20px] items-start py-[24px] relative shrink-0 w-[342px]" numero="03." pergunta="Quais são os horários de atendimento?" />
        <VbFaqItemMobile className="bg-white border-[var(--cor\/apoio\/nevoa,#e3e8e7)] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[20px] items-start py-[24px] relative shrink-0 w-[342px]" numero="04." pergunta="Como escolher o procedimento ideal?" />
        <VbFaqItemMobile className="bg-white border-[var(--cor\/apoio\/nevoa,#e3e8e7)] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[20px] items-start py-[24px] relative shrink-0 w-[342px]" numero="05." pergunta="O cuidado é personalizado?" />
        <VbFaqItemMobile className="bg-white border-[var(--cor\/apoio\/nevoa,#e3e8e7)] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[20px] items-start py-[24px] relative shrink-0 w-[342px]" numero="06." pergunta="Onde posso ver avaliações e procedimentos?" />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[24px] py-[40px] relative shrink-0 w-[390px]" data-node-id="144:586" data-name="Contato mobile">
        <div className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[0] relative shrink-0 text-[#1c2f2c] text-[28px] tracking-[-0.6px] w-[342px]" data-node-id="144:587" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[1.2] mb-0">Seu próximo momento</p>
          <p className="leading-[1.2]">de cuidado.</p>
        </div>
        <p className="[word-break:break-word] font-['DM_Sans:Medium'] font-medium leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[24px] w-[342px]" data-node-id="144:588" style={{ fontVariationSettings: '"opsz" 14' }}>
          +55 61 99181-7984
        </p>
        <div className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#1c2f2c] text-[16px] w-[342px]" data-node-id="144:589" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[1.55] mb-0">Rua das Paineiras, Lote 06</p>
          <p className="leading-[1.55] mb-0">One Mall Business — Torre B, Sala 112</p>
          <p className="leading-[1.55]">Brasília — CEP 71918-000</p>
        </div>
        <div className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#596661] text-[15px] w-[342px]" data-node-id="144:590" style={{ fontVariationSettings: '"opsz" 14' }}>
          <p className="leading-[1.55] mb-0">Terça a sexta-feira: 09:00 – 20:00</p>
          <p className="leading-[1.55] mb-0">Sábado: 09:00 – 13:00</p>
          <p className="leading-[1.55]">Domingo e segunda: fechado</p>
        </div>
        <a className="bg-[#1c2f2c] content-stretch cursor-pointer flex h-[48px] items-center justify-center overflow-clip relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(26,43,38,0.05)] shrink-0 w-[342px]" href="tel:+5561991817984" data-node-id="144:591" target="_blank" data-name="Agendamento">
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.55] relative shrink-0 text-[14px] text-left text-white whitespace-nowrap" data-node-id="144:592" style={{ fontVariationSettings: '"opsz" 14' }}>
            Agende sua consulta ↗
          </p>
        </a>
      </div>
      <div className="[word-break:break-word] bg-[#1c2f2c] border-[#e5ebe8] border-solid border-t content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[24px] py-[28px] relative shrink-0 w-[390px]" data-node-id="144:594" data-name="Rodapé mobile">
        <p className="font-['Playfair_Display:Medium'] font-medium leading-[1.2] relative shrink-0 text-[#f3edc3] text-[30px] w-[342px]" data-node-id="144:595">
          Viviane Bondi
        </p>
        <div className="content-stretch cursor-pointer flex flex-col font-['DM_Sans:Medium'] font-medium gap-[16px] items-start leading-[0] overflow-clip relative shrink-0 text-[#f3edc3] text-[16px] w-[342px]" data-node-id="144:597" data-name="Navegação">
          <button className="block relative shrink-0 text-left w-[342px]" data-node-id="144:598" style={{ fontVariationSettings: '"opsz" 14' }}>
            <p className="leading-[1.55]">Início</p>
          </button>
          <a className="block relative shrink-0 w-[342px]" data-node-id="144:599" style={{ fontVariationSettings: '"opsz" 14' }}>
            <p className="leading-[1.55]">Avaliações</p>
          </a>
          <a className="block relative shrink-0 w-[342px]" data-node-id="144:600" style={{ fontVariationSettings: '"opsz" 14' }}>
            <p className="leading-[1.55]">Catálogo de Procedimentos</p>
          </a>
        </div>
        <a className="block cursor-pointer font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#f3edc3] text-[16px] w-[342px]" href="tel:+5561991817984" data-node-id="144:601" style={{ fontVariationSettings: '"opsz" 14' }} target="_blank">
          <p className="leading-[1.55]">+55 61 99181-7984</p>
        </a>
        <p className="font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#596661] text-[12px] w-[342px]" data-node-id="144:602" style={{ fontVariationSettings: '"opsz" 14' }}>
          © Viviane Bondi · Estética Avançada x Zacx
        </p>
      </div>
    </div>
  );
}
