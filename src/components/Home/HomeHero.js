import React from "react"
import PropTypes from "prop-types"
import {
  homeHero,
  heroLogo,
  logoOnlyLeft,
  logoOnlyRight,
  heroContent,
  logosContainer,
  heroImageContainer,
} from "../../styles/homehero.module.css"
import LogoOnly from "../../assets/logo-only.svg"
import Button from "../Button"
import { btnContainer } from "../../styles/utils.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HomeHero = ({ homeHeroFields }) => {
  const heroImage = getImage(homeHeroFields.heroImage.localFile)
  return (
    <div className="bg-primary">
      <div className={logosContainer}>
        <div className={`${logoOnlyRight} ${heroLogo}`}>
          <LogoOnly />
        </div>
        <div className={`${logoOnlyLeft} ${heroLogo}`}>
          <LogoOnly />
        </div>
      </div>
      <div className={`${homeHero} container`}>
        <div className={heroContent}>
          <span>{homeHeroFields.slogan}</span>
          <h1>{homeHeroFields.heroTitle}</h1>
          <div dangerouslySetInnerHTML={{ __html: homeHeroFields.heroText }} />
          <div className={btnContainer}>
            <Button
              width="large"
              height="large"
              link={homeHeroFields.heroButtons.firstButtonLink.uri}
              color="white"
              text={homeHeroFields.heroButtons.firstButtonName}
            />
            <Button
              width="small"
              height="large"
              link={homeHeroFields.heroButtons.secondButtonLink.uri}
              color="transparent"
              text={homeHeroFields.heroButtons.secondButtonName}
              textColor="white"
            />
          </div>
        </div>
        <div className={heroImageContainer}>
          <GatsbyImage image={heroImage} alt="Three dogs and cat" />
        </div>
      </div>
    </div>
  )
}

//default values for props
HomeHero.defaultProps = {
  heroText:
    "<p>Before you bring home your pet, be sure you&#8217;re ready to take care of it properly.</p>",
  heroTitle: "Your Family Members are Important to Us",
  slogan: "Sincere, Compassionate and Skilled Veterinary Care",
}

HomeHero.propTypes = {
  homeHeroFields: PropTypes.shape({
    heroText: PropTypes.string,
    heroTitle: PropTypes.string,
    slogan: PropTypes.string,
    heroButtons: PropTypes.shape({
      firstButtonLink: PropTypes.shape({
        uri: PropTypes.string,
      }),
      firstButtonName: PropTypes.string,
      secondButtonLink: PropTypes.shape({
        uri: PropTypes.string,
      }),
      secondButtonName: PropTypes.string,
    }),
    heroImage: PropTypes.object,
  }),
}

export default HomeHero
