import "./Feedback.scss"

import TwoColumns from "../../components/TwoColumns/TwoColumns";
import { ContactUsSmall } from "../../components/ContactUsSmall/ContactUsSmall";
import feedbackImage from "../../pages/PageMain/images/feedback-image.jpg"

export const Feedback = () => {
  return (
    <section className="section-feedback feedback">
      <TwoColumns>
        <img className="feedback__image" src={feedbackImage} alt="Кирпичи оличного качества"/>
        <ContactUsSmall />
      </TwoColumns>
    </section>
  )
};
