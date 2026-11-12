const imgImagemDoProcedimento = "./assets/images/117-160-imgRectangle5.webp";

export default function ModalMobileRinomodelacao() {
  return (
    <div className="relative size-full" data-node-id="142:428" data-name="Modal mobile / Rinomodelação">
      <button className="absolute bg-[rgba(20,26,26,0.48)] block cursor-pointer h-[844px] left-0 top-0 w-[390px]" data-node-id="142:429" data-name="Fora do modal / fechar" />
      <div className="absolute bg-white content-stretch flex flex-col items-start left-[16px] overflow-clip rounded-[16px] top-[56px] w-[358px]" data-node-id="142:431" data-name="Procedimento / janela mobile">
        <div className="h-[300px] relative rounded-[12px] shrink-0 w-full" data-node-id="142:432" data-name="Imagem do procedimento">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
            <div className="absolute bg-[#e3e8e5] inset-0 rounded-[12px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[12px]">
              <img alt="" className="absolute max-w-none inset-0 size-full object-cover" src={imgImagemDoProcedimento} style={{ objectPosition: "50.0000% 41.9218%" }} />
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[18px] items-start overflow-clip p-[24px] relative shrink-0 w-[358px]" data-node-id="142:433" data-name="Conteúdo">
          <p className="font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#596661] text-[10px] w-[310px]" data-node-id="142:434" style={{ fontVariationSettings: '"opsz" 14' }}>
            CATÁLOGO DE PROCEDIMENTOS
          </p>
          <p className="font-['DM_Sans:Medium'] font-medium leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[24px] w-[310px]" data-node-id="142:435" style={{ fontVariationSettings: '"opsz" 14' }}>
            Rinomodelação
          </p>
          <p className="font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[15px] w-[310px]" data-node-id="142:436" style={{ fontVariationSettings: '"opsz" 14' }}>
            Sutil, mas transformador! A rinomodelação é a prova de que pequenos ajustes podem trazer grandes resultados.
          </p>
          <p className="font-['DM_Sans:Regular'] font-normal leading-[1.55] relative shrink-0 text-[#596661] text-[15px] w-[310px]" data-node-id="142:437" style={{ fontVariationSettings: '"opsz" 14' }}>
            Cada pele, cada corpo e cada objetivo são únicos. A avaliação é o primeiro passo para conversar sobre suas necessidades e conhecer as possibilidades de cuidado.
          </p>
          <button className="block cursor-pointer font-['DM_Sans:Medium'] font-medium leading-[0] relative shrink-0 text-[#1c2f2c] text-[14px] text-left w-[310px]" data-node-id="142:438" style={{ fontVariationSettings: '"opsz" 14' }}>
            <p className="leading-[1.55]">Fechar e voltar ao catálogo</p>
          </button>
        </div>
      </div>
      <button className="absolute bg-white border border-[#e5ebe8] border-solid content-stretch cursor-pointer flex items-center justify-center left-[322px] overflow-clip rounded-[12px] size-[36px] top-[68px]" data-node-id="142:440" data-name="Fechar modal">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold'] font-semibold leading-[1.55] relative shrink-0 text-[#1c2f2c] text-[14px] text-left whitespace-nowrap" data-node-id="142:441" style={{ fontVariationSettings: '"opsz" 14' }}>
          ×
        </p>
      </button>
    </div>
  );
}
