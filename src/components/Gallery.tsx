import images from '../gallery.json';

export default function Gallery({mobile = false}: {mobile?: boolean}) {
  return (
    <section className="site-gallery" data-node-id={mobile ? '144:526' : '81:546'} aria-label="Galeria de resultados">
      <div className="site-gallery-header">
        <h2>{mobile ? 'Resultados reais.' : 'Galeria'}</h2>
        <div className="site-gallery-controls">
          <button type="button" data-gallery-direction="-1" aria-label="Ver fotos anteriores">←</button>
          <button type="button" data-gallery-direction="1" aria-label="Ver próximas fotos">→</button>
        </div>
      </div>
      <div className="site-gallery-track" tabIndex={0} aria-label="Fotos de resultados; deslize para ver mais">
        {images.map((image,index) => (
          <figure className="site-gallery-item" key={image.src}>
            <img src={image.src} width={image.width} height={image.height} alt={'Comparação de resultado — imagem '+(index+1)} loading="lazy" decoding="async"/>
          </figure>
        ))}
      </div>
    </section>
  );
}
