import "./card.css";

const Card = ({classes='', children}) => {
  return <div className={`card ${classes}`}>
    {children}
  </div>;
};

export default Card;