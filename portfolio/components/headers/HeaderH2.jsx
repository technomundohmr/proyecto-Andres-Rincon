import "./headers.css";

const HeaderH2 = ({header, classes = ''}) => {
  return <h2 className={`header-h2 ${classes}`}>
    {header}
  </h2>;
};

export default HeaderH2;