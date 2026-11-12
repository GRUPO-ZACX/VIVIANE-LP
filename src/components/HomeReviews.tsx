const reviews = [
  {
    name: 'Danielle',
    text: '“A Dra. Vivi é um amor, te deixa super a vontade, uma simpatia em pessoa. Sem contar com o espaço, super confortável e aconchegante. Comecei pelo Ellasé e amei. Super natural. Faço limpeza de pele, já fiz peeling e fios de colageno. Tudo perfeito! Ela sabe tratar cada cliente de acordo com sua necessidade e particularidades.”',
  },
  {
    name: 'ANA T',
    text: '“Dra Viviane Bondi(Vivi salvar minha pele, assim que eu a conheci) é uma profissional incrível, atenciosa, segura e muito talentosa. O resultado sempre harmonioso e elegante, o mais natural possível, exatamente como eu gosto, Ela tem um olhar artístico e uma mão leve que transformam rosto sem perder a naturalidade. Extremamente satisfeita com o atendimento e resultado! SUPER INDICO”',
  },
  {
    name: 'Ivana K',
    text: '“A Dra Vivi é dona e proprietária do meu rosto! Fios, botox, preenchimento e bioestimuladores faço tudo com ela! Iniciei meu acompanhamento há 3 anos para tratar o melasma e deste então só acompanho com ela, gosto de manter a naturalidade do meu rosto e ela é mestre nisto! Super recomendo a clínica pelos excelentes profissionais que lá atendem… Lolo e Ana são fantásticas também! ♥️”',
  },
];

export default function HomeReviews({mobile = false}: {mobile?: boolean}) {
  return (
    <section className="site-review-section" data-node-id={mobile ? 'home-reviews-mobile' : '81:149'} aria-label="Avaliações de clientes">
      <h2 className="site-review-heading">Avaliações de clientes</h2>
      <div className="site-review-layout">
        <div className="site-review-summary">
          <p className="site-review-score">5.0</p>
          <div className="site-review-stars" aria-label="5 de 5 estrelas">{[0,1,2,3,4].map(n=><img key={n} src="./assets/images/7-8-imgLucideStar.svg" width="24" height="24" alt=""/>)}</div>
          <p className="site-review-count">33 avaliações do Google</p>
        </div>
        <div className="site-review-track" aria-label="Depoimentos de clientes">
          {reviews.map(review => (
            <article className="site-review-card" key={review.name} tabIndex={mobile ? 0 : undefined}>
              <header className="site-review-card-header">
                <span className="site-google-word" role="img" aria-label="Google"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></span>
                <span className="site-review-rating" aria-label="Nota 5 de 5">5.0 ★</span>
              </header>
              <blockquote className="site-review-quote">{review.text}</blockquote>
              <p className="site-review-author">{review.name}</p>
              <p className="site-review-source">Avaliação publicada no Google</p>
            </article>
          ))}
        </div>
      </div>
      <a href="./avaliacoes.html" className="site-review-more" data-node-id={mobile ? '144:483' : '81:542'}>Veja mais avaliações</a>
    </section>
  );
}
