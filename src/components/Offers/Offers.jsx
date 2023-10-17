import "./Offers.scss";


export const Offers = () => {
  return (
    <section id="offers" className="section-offers offers">
      <h2 className="offers__title">Специальные предложения</h2>
      <ul className="offers__list">
        <li className="offers__item">
          <p className="offers__date">01.11.2022</p>
          <p className="offers__content">Снижена цена на доставку продукции. Подробности у менеджеров.</p>
        </li>
        <li className="offers__item">
          <p className="offers__date">01.11.2022</p>
          <p className="offers__content">Специальные цены на кирпич полуторный пустотелый в период с ноября по февраль</p>
        </li>
        <li className="offers__item">
          <p className="offers__date">01.11.2022</p>
          <p className="offers__content">Специальные цены на кирпич одинарный полнотелый в период с ноября по февраль</p>
        </li>
      </ul>
    </section>
  )
}

