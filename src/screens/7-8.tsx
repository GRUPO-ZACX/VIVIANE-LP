import HomeReviews from '../components/HomeReviews';
import Gallery from '../components/Gallery';
const imgHome = "./assets/images/7-8-imgHome.webp";
const imgHome1 = "./assets/images/116-86-imgLogoOriginal1.webp";
const imgRectangle1 = "./assets/images/117-160-imgRectangle1.webp";
const imgRectangle2 = "./assets/images/117-160-imgRectangle2.webp";
const imgRectangle3 = "./assets/images/117-160-imgRectangle3.webp";
const imgRectangle4 = "./assets/images/117-160-imgRectangle4.webp";
const imgRectangle5 = "./assets/images/117-160-imgRectangle5.webp";
const imgRectangle6 = "./assets/images/144-448-imgResultadoAntesEDepois.webp";
const imgRectangle7 = "./assets/images/144-448-imgResultadoAntesEDepois1.webp";
const imgRectangle8 = "./assets/images/144-448-imgResultadoAntesEDepois2.webp";
const imgRectangle9 = "./assets/images/144-448-imgResultadoAntesEDepois3.webp";
const imgLogoOriginal = "./assets/images/116-86-imgLogoOriginal.webp";
const imgFrame3 = "./assets/images/7-8-imgFrame3.svg";
const imgLucideStar = "./assets/images/7-8-imgLucideStar.svg";

type VbFaqItemProps = {
  className?: string;
  estado?: "Fechado" | "Aberto";
  numero?: string;
  pergunta?: string;
  resposta?: string;
};

function VbFaqItem({ className, estado = "Fechado", numero = "01.", pergunta = "Como agendar uma avaliação?", resposta = "Entre em contato pelo telefone +55 61 99181-7984 para consultar os horários disponíveis e agendar sua avaliação." }: VbFaqItemProps) {
  const isAberto = estado === "Aberto";
  return (
    <button className={className || `${String.raw`border-[var(--cor\/apoio\/nevoa,#e3e8e7)] border-b border-solid content-stretch flex flex-col gap-[20px] items-start py-[24px] relative w-[736px] `}${isAberto ? "[word-break:break-word] leading-[1.5] text-left" : ""}`} id={isAberto ? "node-115_117" : "node-115_111"}>
      <div className={`${String.raw`content-stretch flex gap-[var(--spacing\/4,16px)] items-start overflow-clip relative shrink-0 w-[736px] `}${isAberto ? "" : "[word-break:break-word] leading-[1.5] text-left"}`} id={isAberto ? "node-115_118" : "node-115_112"} data-name="Cabeçalho">
        <p className="font-['DM_Sans:Regular'] font-normal relative shrink-0 text-[14px] text-[color:var(--cor\/texto\/secundario,#596761)] w-[40px]" data-node-id="115:113" style={{ fontVariationSettings: '"opsz" 14' }}>
          {numero}
        </p>
        <p className="font-['DM_Sans:Medium'] font-medium relative shrink-0 text-[20px] text-[color:var(--cor\/marca\/floresta,#1c2f2c)] w-[640px]" data-node-id="115:114" style={{ fontVariationSettings: '"opsz" 14' }}>
          {pergunta}
        </p>
        <p className="font-['DM_Sans:Regular'] font-normal relative shrink-0 text-[24px] text-[color:var(--cor\/marca\/floresta,#1c2f2c)] w-[24px]" id={isAberto ? "node-115_121" : "node-115_115"} style={{ fontVariationSettings: '"opsz" 14' }}>
          {isAberto ? "−" : "+"}
        </p>
      </div>
      {isAberto && (
        <p className="font-['DM_Sans:Regular'] font-normal relative shrink-0 text-[16px] text-[color:var(--cor\/texto\/secundario,#596761)] w-[660px]" data-node-id="115:122" style={{ fontVariationSettings: '"opsz" 14' }}>
          {resposta}
        </p>
      )}
    </button>
  );
}

export default function LandpageDesktop() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-node-id="7:8" data-name="Landpage - Desktop">
      <div className="content-stretch flex gap-[var(--spacing\/14,56px)] h-[1008px] items-center overflow-clip p-[100px] relative shrink-0 w-full" data-node-id="7:4" data-name="HOME">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[var(--cor\/marca\/floresta,#1c2f2c)] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgHome} />
          <div className="absolute inset-0 opacity-15 overflow-hidden">
            <img alt="" className="absolute h-[133.85%] left-[20.51%] max-w-none top-[-4.98%] w-[95.23%]" src={imgHome1} />
          </div>
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(269.6685975397537deg, rgba(28, 47, 44, 0) 28.01%, var(--cor\\/marca\\/floresta,rgba(28, 47, 44, 0.4)) 96.521%)" }} />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center max-w-[617px] min-w-px relative" data-node-id="80:2980" data-name="CONTEUDO">
          <div className="content-stretch flex flex-col gap-[var(--spacing\/8,32px)] items-start justify-center relative shrink-0 w-full" data-node-id="78:2975" data-name="HEAD">
            <p className="[word-break:break-word] font-['Playfair_Display:Medium'] font-medium leading-[1.1] min-w-full relative shrink-0 text-[color:var(--cor\/marca\/champagne,#f3edc3)] text-[length:var(--font\/size\/7xl,72px)] w-[min-content]" data-node-id="7:9">
              Viviane Bondi Estética Avançada
            </p>
            <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[0px] text-[rgba(243,237,195,0.55)] tracking-[var(--font\/tracking\/tight,-0.4px)] w-[min-content]" data-node-id="78:2974" style={{ fontVariationSettings: '"opsz" 14' }}>
              <span className="leading-[1.6] text-[18px]">{`Enfermeira esteta há 24 anos, promovendo autoestima naturalmente. Especializada em estética. `}</span>
              <span className="leading-[1.6] text-[#f3edc3] text-[18px] tracking-[-0.4px]" style={{ fontVariationSettings: '"opsz" 14' }}>
                Mentora em cuidados e bem-estar estético, proporcionando resultados únicos e personalizados.
              </span>
            </p>
            <a className="bg-[var(--cor\/marca\/floresta,#1c2f2c)] content-stretch cursor-pointer flex gap-[17.126px] items-center px-[5.138px] py-[6.851px] relative rounded-[var(--radius\/3xl,41.103px)] shrink-0" href="tel:+5561991817984" data-node-id="81:301" target="_blank" data-name="BUTTON">
              <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.4] relative shrink-0 text-[20.552px] text-[color:var(--cor\/marca\/champagne,#f3edc3)] text-center tracking-[-0.6851px] w-[229.494px]" data-node-id="I81:301;81:268" style={{ fontVariationSettings: '"opsz" 14' }}>
                Agende sua consulta
              </p>
              <div className="h-[41.845px] relative shrink-0 w-[42.816px]" data-node-id="I81:301;81:277">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame3} />
              </div>
            </a>
          </div>
        </div>
      </div>
      <HomeReviews />
      <div className="bg-[var(--superficie\/principal,#fffef2)] content-stretch flex flex-col gap-[var(--spacing\/16,64px)] items-center justify-center overflow-clip p-[100px] relative shrink-0 w-full" data-node-id="81:310" data-name="03 / Procedimentos e blog">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between relative shrink-0 text-[#1c2f2c] w-full" data-node-id="81:339">
          <p className="font-['Inter_Display:Medium'] leading-[1.15] not-italic relative shrink-0 text-[56px] tracking-[-2.24px] whitespace-nowrap" data-node-id="81:311">
            Procedimentos
          </p>
          <p className="font-['DM_Sans:Medium'] font-medium leading-[1.5] relative shrink-0 text-[18px] tracking-[-0.72px] w-[527px]" data-node-id="81:338" style={{ fontVariationSettings: '"opsz" 14' }}>
            Conheça o Catálogo de Procedimentos da Viviane Bondi — Estética Avançada. Explore os cuidados disponíveis e clique em Entender Procedimento para saber mais.
          </p>
        </div>
        <div className="content-stretch flex flex-col flex-wrap gap-[20px] items-center justify-center relative shrink-0 w-full" data-node-id="81:398" data-name="card">
          <div className="flex flex-col items-center self-stretch" data-node-id="81:474">
            <div className="content-stretch cursor-pointer flex gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="1">
              <button className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px relative" data-node-id="81:429" data-name="Artigo / Harmonização Protocolo Natural Lifting">
                <div className="h-[249.728px] relative rounded-[12px] shrink-0 w-full" data-node-id="I81:429;81:341">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
                    <div className="absolute bg-[#e3e8e5] inset-0 rounded-[12px]" />
                    <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                      <img alt="" className="absolute max-w-none inset-0 size-full object-cover" src={imgRectangle1} style={{ objectPosition: "50.0000% 42.2950%" }} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[var(--spacing\/5,20px)] items-start relative shrink-0 w-full" data-node-id="I81:429;81:344">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--skew\/6,6px)] items-start leading-[1.5] relative shrink-0 text-left w-full" data-node-id="I81:429;81:498">
                    <p className="font-['DM_Sans:SemiBold'] font-semibold relative shrink-0 text-[16px] text-[color:var(--color\/zinc\/800,#27272a)] tracking-[-0.64px] w-full" data-node-id="I81:429;81:342" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Harmonização Protocolo Natural Lifting
                    </p>
                    <p className="font-['DM_Sans:Medium'] font-medium relative shrink-0 text-[14px] text-[color:var(--color\/zinc\/500,#71717b)] tracking-[-0.56px] w-full" data-node-id="I81:429;81:343" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Vai muito além da estética: é sobre realçar sua beleza com equilíbrio, naturalidade e segurança. Cada procedimento é realizado com técnica, planejamento e cuidado.
                    </p>
                  </div>
                  <div className="border border-[var(--color\/zinc\/900,#18181b)] border-solid content-stretch cursor-pointer flex items-center justify-center px-[var(--espaco\/16,16px)] py-[var(--spacing\/2,8px)] relative rounded-[var(--espaco\/8,8px)] shrink-0" data-node-id="I81:429;81:380" role="button" tabIndex="0" data-name="BUTTON">
                    <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.4] relative shrink-0 text-[color:var(--color\/zinc\/900,#18181b)] text-[length:var(--font\/size\/xs,12px)] text-left tracking-[var(--font\/tracking\/tight,-0.4px)] whitespace-nowrap" data-node-id="I81:429;81:380;81:366" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Saiba mais
                    </p>
                  </div>
                </div>
              </button>
              <button className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px relative" data-node-id="81:437" data-name="Artigo / Revitalização de perfil feminino">
                <div className="h-[249.728px] relative rounded-[12px] shrink-0 w-full" data-node-id="I81:437;81:341">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
                    <div className="absolute bg-[#e3e8e5] inset-0 rounded-[12px]" />
                    <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                      <img alt="" className="absolute max-w-none inset-0 size-full object-cover" src={imgRectangle2} style={{ objectPosition: "50.0000% 42.2950%" }} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[var(--spacing\/5,20px)] items-start relative shrink-0 w-full" data-node-id="I81:437;81:344">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--skew\/6,6px)] items-start leading-[1.5] relative shrink-0 text-left w-full" data-node-id="I81:437;81:498">
                    <p className="font-['DM_Sans:SemiBold'] font-semibold relative shrink-0 text-[16px] text-[color:var(--color\/zinc\/800,#27272a)] tracking-[-0.64px] w-full" data-node-id="I81:437;81:342" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Revitalização de perfil feminino
                    </p>
                    <p className="font-['DM_Sans:Medium'] font-medium relative shrink-0 text-[14px] text-[color:var(--color\/zinc\/500,#71717b)] tracking-[-0.56px] w-full" data-node-id="I81:437;81:343" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Cuidar de si é muito mais do que estética — é sobre se sentir bem, confiante e em equilíbrio.
                    </p>
                  </div>
                  <div className="border border-[var(--color\/zinc\/900,#18181b)] border-solid content-stretch cursor-pointer flex items-center justify-center px-[var(--espaco\/16,16px)] py-[var(--spacing\/2,8px)] relative rounded-[var(--espaco\/8,8px)] shrink-0" data-node-id="I81:437;81:380" role="button" tabIndex="0" data-name="BUTTON">
                    <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.4] relative shrink-0 text-[color:var(--color\/zinc\/900,#18181b)] text-[length:var(--font\/size\/xs,12px)] text-left tracking-[var(--font\/tracking\/tight,-0.4px)] whitespace-nowrap" data-node-id="I81:437;81:380;81:366" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Saiba mais
                    </p>
                  </div>
                </div>
              </button>
              <button className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px relative" data-node-id="81:444" data-name="Artigo / Lábios">
                <div className="h-[249.728px] relative rounded-[12px] shrink-0 w-full" data-node-id="I81:444;81:341">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
                    <div className="absolute bg-[#e3e8e5] inset-0 rounded-[12px]" />
                    <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                      <img alt="" className="absolute max-w-none inset-0 size-full object-cover" src={imgRectangle3} style={{ objectPosition: "50.0000% 55.3580%" }} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[var(--spacing\/5,20px)] items-start relative shrink-0 w-full" data-node-id="I81:444;81:344">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--skew\/6,6px)] items-start leading-[1.5] relative shrink-0 text-left w-full" data-node-id="I81:444;81:498">
                    <p className="font-['DM_Sans:SemiBold'] font-semibold relative shrink-0 text-[16px] text-[color:var(--color\/zinc\/800,#27272a)] tracking-[-0.64px] w-full" data-node-id="I81:444;81:342" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Lábios
                    </p>
                    <p className="font-['DM_Sans:Medium'] font-medium relative shrink-0 text-[14px] text-[color:var(--color\/zinc\/500,#71717b)] tracking-[-0.56px] w-full" data-node-id="I81:444;81:343" style={{ fontVariationSettings: '"opsz" 14' }}>
                      O procedimento também ajuda na hidratação, definição do contorno e valorização da beleza natural dos lábios. O objetivo é realçar seus traços com equilíbrio e naturalidade.
                    </p>
                  </div>
                  <div className="border border-[var(--color\/zinc\/900,#18181b)] border-solid content-stretch cursor-pointer flex items-center justify-center px-[var(--espaco\/16,16px)] py-[var(--spacing\/2,8px)] relative rounded-[var(--espaco\/8,8px)] shrink-0" data-node-id="I81:444;81:380" role="button" tabIndex="0" data-name="BUTTON">
                    <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.4] relative shrink-0 text-[color:var(--color\/zinc\/900,#18181b)] text-[length:var(--font\/size\/xs,12px)] text-left tracking-[var(--font\/tracking\/tight,-0.4px)] whitespace-nowrap" data-node-id="I81:444;81:380;81:366" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Saiba mais
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center self-stretch" data-node-id="81:475">
            <div className="content-stretch cursor-pointer flex gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="2">
              <button className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px relative" data-node-id="81:451" data-name="Artigo / Natural Lifting">
                <div className="h-[249.728px] relative rounded-[12px] shrink-0 w-full" data-node-id="I81:451;81:341">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
                    <div className="absolute bg-[#e3e8e5] inset-0 rounded-[12px]" />
                    <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                      <img alt="" className="absolute max-w-none inset-0 size-full object-cover" src={imgRectangle4} style={{ objectPosition: "50.0000% 41.7112%" }} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[var(--spacing\/5,20px)] items-start relative shrink-0 w-full" data-node-id="I81:451;81:344">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--skew\/6,6px)] items-start leading-[1.5] relative shrink-0 text-left w-full" data-node-id="I81:451;81:498">
                    <p className="font-['DM_Sans:SemiBold'] font-semibold relative shrink-0 text-[16px] text-[color:var(--color\/zinc\/800,#27272a)] tracking-[-0.64px] w-full" data-node-id="I81:451;81:342" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Natural Lifting
                    </p>
                    <p className="font-['DM_Sans:Medium'] font-medium relative shrink-0 text-[14px] text-[color:var(--color\/zinc\/500,#71717b)] tracking-[-0.56px] w-full" data-node-id="I81:451;81:343" style={{ fontVariationSettings: '"opsz" 14' }}>
                      O meu objetivo é realçar o que você tem de melhor, preservando a sua identidade e garantindo que o espelho reflita uma versão renovada, descansada e, acima de tudo, você mesma.
                    </p>
                  </div>
                  <div className="border border-[var(--color\/zinc\/900,#18181b)] border-solid content-stretch cursor-pointer flex items-center justify-center px-[var(--espaco\/16,16px)] py-[var(--spacing\/2,8px)] relative rounded-[var(--espaco\/8,8px)] shrink-0" data-node-id="I81:451;81:380" role="button" tabIndex="0" data-name="BUTTON">
                    <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.4] relative shrink-0 text-[color:var(--color\/zinc\/900,#18181b)] text-[length:var(--font\/size\/xs,12px)] text-left tracking-[var(--font\/tracking\/tight,-0.4px)] whitespace-nowrap" data-node-id="I81:451;81:380;81:366" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Saiba mais
                    </p>
                  </div>
                </div>
              </button>
              <button className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px relative" data-node-id="81:458" data-name="Artigo / Rinomodelação">
                <div className="h-[249.728px] relative rounded-[12px] shrink-0 w-full" data-node-id="I81:458;81:341">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
                    <div className="absolute bg-[#e3e8e5] inset-0 rounded-[12px]" />
                    <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                      <img alt="" className="absolute max-w-none inset-0 size-full object-cover" src={imgRectangle5} style={{ objectPosition: "50.0000% 44.3603%" }} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[var(--spacing\/5,20px)] items-start relative shrink-0 w-full" data-node-id="I81:458;81:344">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--skew\/6,6px)] items-start leading-[1.5] relative shrink-0 text-left w-full" data-node-id="I81:458;81:498">
                    <p className="font-['DM_Sans:SemiBold'] font-semibold relative shrink-0 text-[16px] text-[color:var(--color\/zinc\/800,#27272a)] tracking-[-0.64px] w-full" data-node-id="I81:458;81:342" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Rinomodelação
                    </p>
                    <p className="font-['DM_Sans:Medium'] font-medium relative shrink-0 text-[14px] text-[color:var(--color\/zinc\/500,#71717b)] tracking-[-0.56px] w-full" data-node-id="I81:458;81:343" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Sutil, mas transformador! A rinomodelação é a prova de que pequenos ajustes podem trazer grandes resultados.
                    </p>
                  </div>
                  <div className="border border-[var(--color\/zinc\/900,#18181b)] border-solid content-stretch cursor-pointer flex items-center justify-center px-[var(--espaco\/16,16px)] py-[var(--spacing\/2,8px)] relative rounded-[var(--espaco\/8,8px)] shrink-0" data-node-id="I81:458;81:380" role="button" tabIndex="0" data-name="BUTTON">
                    <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.4] relative shrink-0 text-[color:var(--color\/zinc\/900,#18181b)] text-[length:var(--font\/size\/xs,12px)] text-left tracking-[var(--font\/tracking\/tight,-0.4px)] whitespace-nowrap" data-node-id="I81:458;81:380;81:366" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Saiba mais
                    </p>
                  </div>
                </div>
              </button>
              <button className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px relative" data-node-id="81:465" data-name="Artigo / Fios Aptos">
                <div className="bg-[#e3e8e5] h-[249.728px] relative rounded-[12px] shrink-0 w-full" data-node-id="I81:465;81:341" data-name="Fios Aptos / fotografia" ><img className="site-procedure-photo" src="./assets/images/fios-aptos-rosto.webp" alt="Comparação de rosto" width={1920} height={1920} loading="lazy" decoding="async" /></div>
                <div className="content-stretch flex flex-col gap-[var(--spacing\/5,20px)] items-start relative shrink-0 w-full" data-node-id="I81:465;81:344">
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--skew\/6,6px)] items-start leading-[1.5] relative shrink-0 text-left w-full" data-node-id="I81:465;81:498">
                    <p className="font-['DM_Sans:SemiBold'] font-semibold relative shrink-0 text-[16px] text-[color:var(--color\/zinc\/800,#27272a)] tracking-[-0.64px] w-full" data-node-id="I81:465;81:342" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Fios Aptos
                    </p>
                    <p className="font-['DM_Sans:Medium'] font-medium relative shrink-0 text-[14px] text-[color:var(--color\/zinc\/500,#71717b)] tracking-[-0.56px] w-full" data-node-id="I81:465;81:343" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Cada pele, cada corpo e cada objetivo são únicos. A avaliação é o primeiro passo para conversar sobre suas necessidades e conhecer as possibilidades de cuidado.
                    </p>
                  </div>
                  <div className="border border-[var(--color\/zinc\/900,#18181b)] border-solid content-stretch cursor-pointer flex items-center justify-center px-[var(--espaco\/16,16px)] py-[var(--spacing\/2,8px)] relative rounded-[var(--espaco\/8,8px)] shrink-0" data-node-id="I81:465;81:380" role="button" tabIndex="0" data-name="BUTTON">
                    <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.4] relative shrink-0 text-[color:var(--color\/zinc\/900,#18181b)] text-[length:var(--font\/size\/xs,12px)] text-left tracking-[var(--font\/tracking\/tight,-0.4px)] whitespace-nowrap" data-node-id="I81:465;81:380;81:366" style={{ fontVariationSettings: '"opsz" 14' }}>
                      Saiba mais
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center py-[var(--spacing\/7,28px)] relative shrink-0 w-full" data-node-id="81:539" data-name="button">
          <a className="bg-[var(--cor\/marca\/floresta,#1c2f2c)] content-stretch cursor-pointer flex items-center justify-center px-[var(--spacing\/7,28px)] py-[var(--spacing\/3,12px)] relative rounded-[var(--espaco\/8,8px)] shrink-0" data-node-id="81:536" data-name="BUTTON">
            <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[1.6] relative shrink-0 text-[color:var(--cor\/marca\/champagne,#f3edc3)] text-[length:var(--font\/size\/base,16px)] text-left tracking-[var(--font\/tracking\/tight,-0.4px)] whitespace-nowrap" data-node-id="I81:536;78:2972" style={{ fontVariationSettings: '"opsz" 14' }}>
              Ver Catálogo de Procedimentos
            </p>
          </a>
        </div>
      </div>
      <Gallery />
      <div className="bg-[var(--cor\/neutro\/marfim,#fffef2)] content-start flex flex-wrap gap-[var(--spacing\/16,40px_64px)] items-start overflow-clip p-[100px] relative shrink-0 w-[1440px]" data-node-id="115:102" data-name="05 / FAQ — dúvidas frequentes">
        <div className="content-stretch flex flex-col gap-[var(--spacing\/6,24px)] items-start overflow-clip relative shrink-0 w-[440px]" data-node-id="115:103" data-name="FAQ / introdução">
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.5] relative shrink-0 text-[12px] text-[color:var(--cor\/texto\/secundario,#596761)] w-[440px]" data-node-id="115:104" style={{ fontVariationSettings: '"opsz" 14' }}>
            FAQ
          </p>
          <div className="[word-break:break-word] font-['Inter_Display:Medium'] leading-[0] not-italic relative shrink-0 text-[56px] text-[color:var(--cor\/marca\/floresta,#1c2f2c)] tracking-[-2.24px] w-[440px]" data-node-id="115:105">
            <p className="leading-[1.15] mb-0">Ainda tem</p>
            <p className="leading-[1.15]">dúvidas?</p>
          </div>
          <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[18px] text-[color:var(--cor\/texto\/secundario,#596761)] w-[400px]" data-node-id="115:106" style={{ fontVariationSettings: '"opsz" 14' }}>
            Tem mais perguntas? Teremos prazer em respondê-las. Entre em contato para conversar sobre o seu cuidado.
          </p>
          <a className="bg-[var(--cor\/marca\/floresta,#1c2f2c)] content-stretch cursor-pointer flex h-[52px] items-center justify-center px-[var(--espaco\/16,16px)] py-[var(--spacing\/2,8px)] relative rounded-[99px] shrink-0 w-[230px]" href="tel:+5561991817984" data-node-id="115:107" target="_blank" data-name="CTA / Fale com a clínica">
            <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.4] relative shrink-0 text-[16px] text-[color:var(--cor\/marca\/champagne,#f3edc3)] text-left tracking-[var(--font\/tracking\/tight,-0.4px)] whitespace-nowrap" data-node-id="I115:107;78:2972" style={{ fontVariationSettings: '"opsz" 14' }}>
              Fale com a clínica
            </p>
          </a>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--spacing\/0,0px)] items-start overflow-clip relative shrink-0 w-[736px]" data-node-id="115:110" data-name="FAQ / perguntas">
          <VbFaqItem className="[word-break:break-word] border-[var(--cor\/apoio\/nevoa,#e3e8e7)] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[20px] items-start leading-[1.5] py-[24px] relative shrink-0 text-left w-full" estado="Aberto" />
          <VbFaqItem className="border-[var(--cor\/apoio\/nevoa,#e3e8e7)] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[20px] items-start py-[24px] relative shrink-0 w-full" numero="02." pergunta="Onde fica a clínica?" resposta="Rua das Paineiras, Lote 06, Edifício One Mall Business, Torre B, Sala 112, em Brasília. CEP 71918-000." />
          <VbFaqItem className="border-[var(--cor\/apoio\/nevoa,#e3e8e7)] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[20px] items-start py-[24px] relative shrink-0 w-full" numero="03." pergunta="Quais são os horários de atendimento?" resposta="De terça a sexta-feira, das 09:00 às 20:00, e aos sábados, das 09:00 às 13:00. A clínica fecha aos domingos e às segundas-feiras." />
          <VbFaqItem className="border-[var(--cor\/apoio\/nevoa,#e3e8e7)] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[20px] items-start py-[24px] relative shrink-0 w-full" numero="04." pergunta="Como escolher o procedimento ideal?" resposta="Cada pele, cada corpo e cada objetivo são únicos. Agende uma avaliação para conversar sobre suas necessidades e conhecer as possibilidades de cuidado." />
          <VbFaqItem className="border-[var(--cor\/apoio\/nevoa,#e3e8e7)] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[20px] items-start py-[24px] relative shrink-0 w-full" numero="05." pergunta="O cuidado é personalizado?" resposta="Sim. O trabalho da Viviane Bondi é voltado a resultados únicos e personalizados, com atenção às necessidades e particularidades de cada cliente." />
          <VbFaqItem className="border-[var(--cor\/apoio\/nevoa,#e3e8e7)] border-b border-solid content-stretch cursor-pointer flex flex-col gap-[20px] items-start py-[24px] relative shrink-0 w-full" numero="06." pergunta="Onde posso ver avaliações e procedimentos?" resposta="Explore as páginas de avaliações de clientes e de procedimentos para conhecer experiências reais e os conteúdos publicados pela clínica." />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[27.35px] bg-[rgba(28,47,44,0.25)] border-[rgba(243,237,195,0.19)] border-b border-solid content-stretch flex items-center justify-between left-1/2 overflow-clip pl-[40px] pr-[20px] py-[5px] rounded-[231px] top-[19px] w-[1106px]" data-node-id="78:601" data-name="MENU BAR">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="81:541" data-name="Mask group">
          <div className="col-1 h-[45.999px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[57.498px_45.999px] ml-0 mt-0 relative row-1 w-[57.498px]" data-node-id="78:2964" style={{ maskImage: `url("${imgLogoOriginal}")` }} data-name="Logo original">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-contain size-full" src={imgHome1} />
              <div className="absolute bg-[#f3edc3] inset-0" />
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch cursor-pointer flex font-['DM_Sans:SemiBold'] font-semibold gap-[48px] items-center leading-[0] relative shrink-0 text-[#f3edc3] text-[length:var(--font\/size\/xs,12px)] tracking-[var(--font\/tracking\/tight,-0.4px)] whitespace-nowrap" data-node-id="78:2971">
          <button className="block relative shrink-0 text-left" data-node-id="78:2966" style={{ fontVariationSettings: '"opsz" 14' }}>
            <p className="leading-[1.4]">Início</p>
          </button>
          <a className="block relative shrink-0" data-node-id="78:2967" style={{ fontVariationSettings: '"opsz" 14' }}>
            <p className="leading-[1.4]">Avaliações</p>
          </a>
          <a className="block relative shrink-0" data-node-id="78:2968" style={{ fontVariationSettings: '"opsz" 14' }}>
            <p className="leading-[1.4]">Catálogo de Procedimentos</p>
          </a>
          <button className="block relative shrink-0 text-left" data-node-id="78:2969" style={{ fontVariationSettings: '"opsz" 14' }}>
            <p className="leading-[1.4]">Galeria</p>
          </button>
          <button className="block relative shrink-0 text-left" data-node-id="78:2970" style={{ fontVariationSettings: '"opsz" 14' }}>
            <p className="leading-[1.4]">Contato</p>
          </button>
        </div>
        <a className="bg-[var(--cor\/marca\/floresta,#1c2f2c)] content-stretch cursor-pointer flex items-center justify-center px-[var(--espaco\/16,16px)] py-[var(--spacing\/2,8px)] relative rounded-[99px] shrink-0" href="tel:+5561991817984" data-node-id="81:167" target="_blank" data-name="BUTTON">
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.4] relative shrink-0 text-[color:var(--cor\/marca\/champagne,#f3edc3)] text-[length:var(--font\/size\/xs,12px)] text-left tracking-[var(--font\/tracking\/tight,-0.4px)] whitespace-nowrap" data-node-id="I81:167;78:2972" style={{ fontVariationSettings: '"opsz" 14' }}>
            Agende sua consulta
          </p>
        </a>
      </div>
      <div className="bg-[var(--cor\/neutro\/marfim,#fffef2)] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[100px] py-[96px] relative shrink-0 w-[1440px]" data-node-id="105:54" data-name="06 / Contato — agende sua avaliação">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.5] relative shrink-0 text-[12px] text-[color:var(--cor\/texto\/secundario,#596761)] w-[1240px]" data-node-id="115:55" style={{ fontVariationSettings: '"opsz" 14' }}>
          FALE CONOSCO
        </p>
        <div className="content-start flex flex-wrap gap-[var(--spacing\/16,40px_64px)] items-start overflow-clip relative shrink-0 w-full" data-node-id="115:56" data-name="Contato / conteúdo e informações">
          <div className="content-stretch flex flex-col gap-[var(--spacing\/6,24px)] items-start overflow-clip relative shrink-0 w-[560px]" data-node-id="115:57" data-name="Convite ao cuidado">
            <div className="[word-break:break-word] font-['Inter_Display:Medium'] leading-[0] not-italic relative shrink-0 text-[56px] text-[color:var(--cor\/marca\/floresta,#1c2f2c)] tracking-[-2.24px] w-[560px]" data-node-id="115:58">
              <p className="leading-[1.15] mb-0">Seu momento de</p>
              <p className="leading-[1.15]">cuidado começa aqui.</p>
            </div>
            <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[18px] text-[color:var(--cor\/texto\/secundario,#596761)] w-[530px]" data-node-id="115:59" style={{ fontVariationSettings: '"opsz" 14' }}>
              Enfermeira esteta há 24 anos, promovendo autoestima naturalmente. Resultados únicos e personalizados para valorizar a sua beleza.
            </p>
            <a className="bg-[var(--cor\/marca\/floresta,#1c2f2c)] content-stretch cursor-pointer flex h-[52px] items-center justify-center px-[var(--espaco\/16,16px)] py-[var(--spacing\/2,8px)] relative rounded-[99px] shrink-0 w-[250px]" href="tel:+5561991817984" data-node-id="115:60" target="_blank" data-name="CTA / Agende sua consulta">
              <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.4] relative shrink-0 text-[16px] text-[color:var(--cor\/marca\/champagne,#f3edc3)] text-left tracking-[var(--font\/tracking\/tight,-0.4px)] whitespace-nowrap" data-node-id="I115:60;78:2972" style={{ fontVariationSettings: '"opsz" 14' }}>
                Agende sua consulta
              </p>
            </a>
          </div>
          <div className="[word-break:break-word] bg-[var(--cor\/apoio\/nevoa,#e3e8e7)] content-stretch flex flex-col gap-[var(--spacing\/7,28px)] items-start overflow-clip p-[32px] relative rounded-[var(--radius\/2xl,16px)] shrink-0 w-[616px]" data-node-id="115:64" data-name="Visite a clínica">
            <p className="font-['DM_Sans:SemiBold'] font-semibold leading-[1.5] relative shrink-0 text-[12px] text-[color:var(--cor\/texto\/secundario,#596761)] w-[552px]" data-node-id="115:65" style={{ fontVariationSettings: '"opsz" 14' }}>
              ONDE ESTAMOS
            </p>
            <p className="font-['Playfair_Display:Medium'] font-medium leading-[1.15] relative shrink-0 text-[30px] text-[color:var(--cor\/marca\/floresta,#1c2f2c)] w-[552px]" data-node-id="115:66">
              One Mall Business
            </p>
            <div className="font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-[color:var(--cor\/marca\/floresta,#1c2f2c)] w-[552px]" data-node-id="115:67" style={{ fontVariationSettings: '"opsz" 14' }}>
              <p className="leading-[1.5] mb-0">Rua das Paineiras, Lote 06</p>
              <p className="leading-[1.5] mb-0">Torre B, Sala 112 — Brasília</p>
              <p className="leading-[1.5]">CEP 71918-000</p>
            </div>
            <a className="block font-['DM_Sans:Medium'] font-medium leading-[0] relative shrink-0 text-[16px] text-[color:var(--cor\/marca\/floresta,#1c2f2c)] w-[552px]" href="https://www.google.com/maps/search/?api=1&query=Viviane+Bondi+Estetica+One+Mall+Business+Brasilia" data-node-id="115:68" style={{ fontVariationSettings: '"opsz" 14' }} target="_blank">
              <p className="cursor-pointer leading-[1.5]">Como chegar ↗</p>
            </a>
            <p className="font-['DM_Sans:SemiBold'] font-semibold leading-[1.5] relative shrink-0 text-[12px] text-[color:var(--cor\/texto\/secundario,#596761)] w-[552px]" data-node-id="115:69" style={{ fontVariationSettings: '"opsz" 14' }}>
              HORÁRIOS DE ATENDIMENTO
            </p>
            <div className="font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-[color:var(--cor\/marca\/floresta,#1c2f2c)] w-[552px] whitespace-pre-wrap" data-node-id="115:70" style={{ fontVariationSettings: '"opsz" 14' }}>
              <p className="leading-[1.5] mb-0">{`Terça a sexta-feira   09:00 – 20:00`}</p>
              <p className="leading-[1.5] mb-0">{`Sábado                       09:00 – 13:00`}</p>
              <p className="leading-[1.5]">{`Domingo e segunda   Fechado`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] bg-[var(--cor\/marca\/floresta,#1c2f2c)] content-stretch flex flex-col gap-[56px] items-start overflow-clip px-[100px] py-[72px] relative shrink-0 w-[1440px]" data-node-id="105:68" data-name="07 / Rodapé — navegação completa">
        <div className="content-start flex flex-wrap gap-[var(--spacing\/10,40px)] items-start overflow-clip relative shrink-0 w-full" data-node-id="115:71" data-name="Rodapé / quatro colunas">
          <div className="content-stretch flex flex-col gap-[var(--spacing\/6,24px)] items-start overflow-clip relative shrink-0 w-[340px]" data-node-id="115:72" data-name="Marca e endereço">
            <button className="block cursor-pointer font-['Playfair_Display:Medium'] font-medium leading-[0] relative shrink-0 text-[36px] text-[color:var(--cor\/marca\/champagne,#f3edc3)] text-left w-[340px]" data-node-id="115:73">
              <p className="leading-[1.15]">Viviane Bondi</p>
            </button>
            <p className="font-['DM_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] w-[340px]" data-node-id="115:74" style={{ fontVariationSettings: '"opsz" 14' }}>
              Estética Avançada
            </p>
            <div className="font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[14px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] w-[340px]" data-node-id="115:75" style={{ fontVariationSettings: '"opsz" 14' }}>
              <p className="leading-[1.5] mb-0">Brasília — DF</p>
              <p className="leading-[1.5] mb-0">Rua das Paineiras, Lote 06</p>
              <p className="leading-[1.5]">One Mall Business, Torre B, Sala 112</p>
            </div>
            <p className="font-['DM_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] w-[340px]" data-node-id="115:76" style={{ fontVariationSettings: '"opsz" 14' }}>
              © Viviane Bondi 2026
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--spacing\/5,20px)] items-start overflow-clip relative shrink-0 w-[260px]" data-node-id="115:77" data-name="Procedimentos">
            <p className="font-['DM_Sans:SemiBold'] font-semibold leading-[1.5] relative shrink-0 text-[12px] text-[color:var(--cor\/marca\/champagne,#f3edc3)] w-[260px]" data-node-id="115:78" style={{ fontVariationSettings: '"opsz" 14' }}>
              PROCEDIMENTOS
            </p>
            <button className="block cursor-pointer font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] text-left w-[260px]" data-node-id="115:79" style={{ fontVariationSettings: '"opsz" 14' }}>
              <p className="leading-[1.5]">Harmonização Protocolo Natural Lifting</p>
            </button>
            <button className="block cursor-pointer font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] text-left w-[260px]" data-node-id="115:80" style={{ fontVariationSettings: '"opsz" 14' }}>
              <p className="leading-[1.5]">Revitalização de perfil feminino</p>
            </button>
            <button className="block cursor-pointer font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] text-left w-[260px]" data-node-id="115:81" style={{ fontVariationSettings: '"opsz" 14' }}>
              <p className="leading-[1.5]">Lábios</p>
            </button>
            <button className="block cursor-pointer font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] text-left w-[260px]" data-node-id="115:82" style={{ fontVariationSettings: '"opsz" 14' }}>
              <p className="leading-[1.5]">Natural Lifting</p>
            </button>
            <button className="block cursor-pointer font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] text-left w-[260px]" data-node-id="115:83" style={{ fontVariationSettings: '"opsz" 14' }}>
              <p className="leading-[1.5]">Rinomodelação</p>
            </button>
            <button className="block cursor-pointer font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] text-left w-[260px]" data-node-id="115:84" style={{ fontVariationSettings: '"opsz" 14' }}>
              <p className="leading-[1.5]">Fios Aptos</p>
            </button>
            <a className="block cursor-pointer font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[14px] text-[color:var(--cor\/marca\/champagne,#f3edc3)] w-[260px]" data-node-id="115:85" style={{ fontVariationSettings: '"opsz" 14' }}>
              <p className="leading-[1.5]">Catálogo de Procedimentos ↗</p>
            </a>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--spacing\/5,20px)] items-start overflow-clip relative shrink-0 w-[260px]" data-node-id="115:86" data-name="Explore">
            <p className="font-['DM_Sans:SemiBold'] font-semibold leading-[1.5] relative shrink-0 text-[12px] text-[color:var(--cor\/marca\/champagne,#f3edc3)] w-[260px]" data-node-id="115:87" style={{ fontVariationSettings: '"opsz" 14' }}>
              EXPLORE
            </p>
            <button className="block cursor-pointer font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] text-left w-[260px]" data-node-id="115:88" style={{ fontVariationSettings: '"opsz" 14' }}>
              <p className="leading-[1.5]">Início</p>
            </button>
            <a className="block cursor-pointer font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] w-[260px]" data-node-id="115:89" style={{ fontVariationSettings: '"opsz" 14' }}>
              <p className="leading-[1.5]">Avaliações de clientes</p>
            </a>
            <button className="block cursor-pointer font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] text-left w-[260px]" data-node-id="115:90" style={{ fontVariationSettings: '"opsz" 14' }}>
              <p className="leading-[1.5]">Galeria de resultados</p>
            </button>
            <button className="block cursor-pointer font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] text-left w-[260px]" data-node-id="115:91" style={{ fontVariationSettings: '"opsz" 14' }}>
              <p className="leading-[1.5]">Perguntas frequentes</p>
            </button>
            <button className="block cursor-pointer font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] text-left w-[260px]" data-node-id="115:92" style={{ fontVariationSettings: '"opsz" 14' }}>
              <p className="leading-[1.5]">Contato e localização</p>
            </button>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--spacing\/5,20px)] items-start overflow-clip relative shrink-0 w-[260px]" data-node-id="115:93" data-name="Contato e redes sociais">
            <p className="font-['DM_Sans:SemiBold'] font-semibold leading-[1.5] relative shrink-0 text-[12px] text-[color:var(--cor\/marca\/champagne,#f3edc3)] w-[260px]" data-node-id="115:94" style={{ fontVariationSettings: '"opsz" 14' }}>
              CONECTE-SE
            </p>
            <p className="font-['DM_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] w-[260px]" data-node-id="115:95" style={{ fontVariationSettings: '"opsz" 14' }}>
              Instagram
            </p>
            <a className="block font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] w-[260px]" href="tel:+5561991817984" data-node-id="115:96" style={{ fontVariationSettings: '"opsz" 14' }} target="_blank">
              <p className="cursor-pointer leading-[1.5]">Ligue para nós ↗</p>
            </a>
            <p className="font-['DM_Sans:Regular'] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[color:var(--cor\/neutro\/marfim,#fffef2)] w-[260px]" data-node-id="115:97" style={{ fontVariationSettings: '"opsz" 14' }}>
              +55 61 99181-7984
            </p>
          </div>
        </div>
        <div className="content-stretch flex font-['DM_Sans:Regular'] font-normal gap-[var(--spacing\/10,40px)] items-start overflow-clip relative shrink-0 text-[14px] text-[color:var(--cor\/marca\/champagne,#f3edc3)] w-full" data-node-id="115:98" data-name="Rodapé / assinatura">
          <p className="leading-[1.5] relative shrink-0 w-[800px]" data-node-id="115:99" style={{ fontVariationSettings: '"opsz" 14' }}>
            Cuidado, naturalidade e bem-estar.
          </p>
          <button className="block cursor-pointer leading-[0] relative shrink-0 text-left w-[260px]" data-node-id="115:100" style={{ fontVariationSettings: '"opsz" 14' }}>
            <p className="leading-[1.5]">Voltar ao topo ↑</p>
          </button>
        </div>
      </div>
    </div>
  );
}
