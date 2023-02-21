import Button from "./Button";
import Description from "./Description";
import Footer from "./Footer";
import Header from "./header";
import Image from "./images";
import Restaurant from "./Restaurant";
import Works from "./Works";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Description />
      <Button />
      <Works />
      <Restaurant />
      <div className="img-wrapper">
        <Image
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ18YJL-DL2-OaWwuWqChIXtLhs8JMIqPAHORz5qPm9&s"
          noodles="Noodles with beef"
        />
        <Image
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGjuS_ry7VgJWK228JCAIjqIjJz7c-7QcZE6HPpfu&s"
          noodles="Noodles with veg"
        />
        <Image
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCzC_mpqwTsSaA-7Wp19NGXCoMvfTleV4ptd-Q4Fp&s"
          noodles="Noodles with Onions"
        />
        <Image
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvBPyW5ZuPRwfoTboK2xJze3STdJVs0VSgPeQPYuHO&s"
          noodles="Noodles with stew"
        />
      </div>
      <Footer />

    </div>
  );
};
export default HomePage;
