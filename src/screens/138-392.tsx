const imgImagemDoProcedimento = "./assets/images/117-160-imgRectangle4.webp";

export default function ModalNaturalLifting() {
  return (
    <div className="relative size-full" data-node-id="138:392" data-name="Modal / Natural Lifting">
      <button className="absolute bg-[rgba(20,26,26,0.48)] block cursor-pointer h-[900px] left-0 top-0 w-[1440px]" data-node-id="138:393" data-name="Fora do modal / clique para fechar" />
      <div className="absolute bg-white content-stretch flex flex-col items-start left-[310px] overflow-clip rounded-[16px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.18)] top-[60px] w-[820px]" data-node-id="138:395" data-name="Procedimento / janela">
        <div className="h-[420px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-node-id="138:396" data-name="Imagem do procedimento">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px]">
            <div className="absolute bg-[#e3e8e5] inset-0 rounded-tl-[16px] rounded-tr-[16px]" />
            <img alt="" className="absolute max-w-none object-contain rounded-tl-[16px] rounded-tr-[16px] size-full" src={imgImagemDoProcedimento} />
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[40px] relative shrink-0 w-[820px]" data-node-id="138:397" data-name="Explicação do procedimento">
          <p className="font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#596661] text-[11px] tracking-[1.2px] w-[740px]" data-node-id="138:398" style={{ fontVariationSettings: '"opsz" 14' }}>
            CATÁLOGO DE PROCEDIMENTOS
          </p>
          <p className="font-['DM_Sans:Medium'] font-medium leading-[1.2] relative shrink-0 text-[#1c2f2c] text-[32px] w-[740px]" data-node-id="138:399" style={{ fontVariationSettings: '"opsz" 14' }}>
            Natural Lifting
          </p>
          <p className="font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[18px] w-[740px]" data-node-id="138:400" style={{ fontVariationSettings: '"opsz" 14' }}>
            O meu objetivo é realçar o que você tem de melhor, preservando a sua identidade e garantindo que o espelho reflita uma versão renovada, descansada e, acima de tudo, você mesma.
          </p>
          <p className="font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#596661] text-[16px] w-[740px]" data-node-id="138:401" style={{ fontVariationSettings: '"opsz" 14' }}>
            Cada pele, cada corpo e cada objetivo são únicos. A avaliação é o primeiro passo para conversar sobre suas necessidades e conhecer as possibilidades de cuidado.
          </p>
          <button className="block cursor-pointer font-['DM_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[#1c2f2c] text-[14px] text-left w-[740px]" data-node-id="138:402" style={{ fontVariationSettings: '"opsz" 14' }}>
            <p className="leading-[1.55]">Fechar e voltar ao catálogo</p>
          </button>
        </div>
      </div>
      <button className="absolute bg-white content-stretch cursor-pointer flex items-center justify-center left-[1058px] overflow-clip rounded-[20px] size-[40px] top-[76px]" data-node-id="138:404" data-name="Fechar modal">
        <p className="[word-break:break-word] font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[24px] text-left w-[20px]" data-node-id="138:405" style={{ fontVariationSettings: '"opsz" 14' }}>
          ×
        </p>
      </button>
    </div>
  );
}
