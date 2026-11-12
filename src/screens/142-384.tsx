const imgImagemDoProcedimento = "./assets/images/117-160-imgRectangle3.webp";

export default function ModalMobileLabios() {
  return (
    <div className="relative size-full" data-node-id="142:384" data-name="Modal mobile / Lábios">
      <button className="absolute bg-[rgba(20,26,26,0.48)] block cursor-pointer h-[844px] left-0 top-0 w-[390px]" data-node-id="142:385" data-name="Fora do modal / fechar" />
      <div className="absolute bg-white content-stretch flex flex-col items-start left-[16px] overflow-clip rounded-[16px] top-[56px] w-[358px]" data-node-id="142:387" data-name="Procedimento / janela mobile">
        <div className="h-[300px] relative rounded-[12px] shrink-0 w-full" data-node-id="142:388" data-name="Imagem do procedimento">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
            <div className="absolute bg-[#e3e8e5] inset-0 rounded-[12px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[12px]">
              <img alt="" className="absolute max-w-none inset-0 size-full object-cover" src={imgImagemDoProcedimento} style={{ objectPosition: "50.0000% 62.5462%" }} />
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[18px] items-start overflow-clip p-[24px] relative shrink-0 w-[358px]" data-node-id="142:389" data-name="Conteúdo">
          <p className="font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#596661] text-[10px] w-[310px]" data-node-id="142:390" style={{ fontVariationSettings: '"opsz" 14' }}>
            CATÁLOGO DE PROCEDIMENTOS
          </p>
          <p className="font-['DM_Sans:Medium'] font-medium leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[24px] w-[310px]" data-node-id="142:391" style={{ fontVariationSettings: '"opsz" 14' }}>
            Lábios
          </p>
          <p className="font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[15px] w-[310px]" data-node-id="142:392" style={{ fontVariationSettings: '"opsz" 14' }}>
            O procedimento também ajuda na hidratação, definição do contorno e valorização da beleza natural dos lábios. O objetivo é realçar seus traços com equilíbrio e naturalidade.
          </p>
          <p className="font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#596661] text-[15px] w-[310px]" data-node-id="142:393" style={{ fontVariationSettings: '"opsz" 14' }}>
            Cada pele, cada corpo e cada objetivo são únicos. A avaliação é o primeiro passo para conversar sobre suas necessidades e conhecer as possibilidades de cuidado.
          </p>
          <button className="block cursor-pointer font-['DM_Sans:Medium'] font-medium leading-[0] relative shrink-0 text-[#1c2f2c] text-[14px] text-left w-[310px]" data-node-id="142:394" style={{ fontVariationSettings: '"opsz" 14' }}>
            <p className="leading-[1.55]">Fechar e voltar ao catálogo</p>
          </button>
        </div>
      </div>
      <button className="absolute bg-white border border-[#e5ebe8] border-solid content-stretch cursor-pointer flex items-center justify-center left-[322px] overflow-clip rounded-[12px] size-[36px] top-[68px]" data-node-id="142:396" data-name="Fechar modal">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[14px] text-left whitespace-nowrap" data-node-id="142:397" style={{ fontVariationSettings: '"opsz" 14' }}>
          ×
        </p>
      </button>
    </div>
  );
}
