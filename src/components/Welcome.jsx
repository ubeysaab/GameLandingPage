import { useEffect } from "react";
import HomeSection from "./HomeSection";
import Button from "./Button";
import hoverEffect from "hover-effect";
import bg1 from "../assets/images/bg-1.jpg";
import ashe from "../assets/images/Champion_ashe_HP.png";
import ahri from "../assets/images/Champion_Ahri_HP.png";
import goren from "../assets/images/Champion_garen_HP.png";
import distortion from "../assets/images/distortion.png";

function Welcome(props) {
  const championsImages = [ashe, ahri, goren];

  useEffect(() => {
    const welcomeImgs = document.querySelectorAll('#welcome__img__slide > img')
    let animates = []
    welcomeImgs.forEach((item, index) => {
        let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute('src')
        let animation = new hoverEffect({
            parent: document.querySelector('#welcome__img__slide'),
            intensity: 0.5,
            angle:Math.PI / 2,
            image1: item.getAttribute('src'),
            image2: nextImg,
            displacementImage: distortion,
            hover: false
        })
        animates.push(animation)
    })
    welcomeImgs.forEach(e => e.remove())

    let currItem = 0

    const autoImageSlide = () => {
        let prevItem = currItem
        currItem = (currItem + 1) % animates.length

        if (!document.hidden) {
            animates[prevItem].next()
        }

        setTimeout(() => {
            let canvas = document.querySelectorAll('#welcome__img__slide > canvas')
            document.querySelector('#welcome__img__slide').appendChild(canvas[0])
            animates[prevItem].previous()
        }, 3000);
    }

    setInterval(autoImageSlide, 3000);
}, [])
  

  return (
    <HomeSection
      className={`welcome ${props.isActive ? "active" : ""}`}
      contentClassName="overlay welcome__content"
      bgImage={bg1}
    >
      <div className="welcome__info relative">
        <div className="welcome__info__content">
          <div className="title">
            <span>Welcome To</span>
            <h2 className="main-color">Summoner's Rift</h2>
          </div>
          <div className="description m-t-4">
            Team up with friends and test your skills in 5v5 MOBA combat. All
            the high-skill competition you crave, designed especially for mobile
            and console with revamped controls and streamlined matches.Explore
            the living universe of Runeterra through lore, comics, games, and
            more. Then dive into the community of gamers, cosplayers, musicians,
            and content creators who are waiting for you to join them.
          </div>
          <div className="btns">
            <Button className="btn--primary">play Now</Button>
            <Button className="btn--secondary">get started</Button>
          </div>
        </div>
      </div>

      <div className="welcome__img relative">
        <div className="welcome__img__slide" id="welcome__img__slide">
          {championsImages.map((item, i) => {
            return <img key={i} src={item} alt="" />;
          })}
        </div>
      </div>
    </HomeSection>
  );
}

export default Welcome;
