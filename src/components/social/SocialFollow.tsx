
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import classNames from 'classnames'

export const SocialFollow = ({}) => {

    return (
      <div className="social-container">
        <a href={process.env.REACT_APP_SOCIAL_FACEBOOK}
          className="inline cursor-pointer dark:stroke-white facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="h-6 w-6 mr-3" />
        </a>
        <a href={process.env.REACT_APP_SOCIAL_LINKEDIN}
          className="inline cursor-pointer dark:stroke-white linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="h-6 w-6 mr-3" />
        </a>
        <a href={process.env.REACT_APP_SOCIAL_TWITTER}
          className="inline cursor-pointer dark:stroke-white twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" className="h-6 w-6 mr-3" />
        </a>
        <a href={process.env.REACT_APP_SOCIAL_INSTAGRAM}
          className="inline cursor-pointer dark:stroke-white instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="h-6 w-6 mr-2" />
        </a>
      </div>
    )
}
