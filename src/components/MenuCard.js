const MenuCard = ({ data }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {data.map((curElem) => {
          const {id, name, category, image, description} = curElem;
          return (
            <>
              <div className="card-containter" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <span className="card-read">Read</span>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
