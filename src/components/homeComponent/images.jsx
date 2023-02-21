import "./styles.css";
const Image = (props) => {
  return (
    <div className="images-cont">
      <div>
        <img src={props.img} alt="pics" />
        <h5>{props.noodles}</h5>
      </div>
    </div>
  );
};
export default Image;
