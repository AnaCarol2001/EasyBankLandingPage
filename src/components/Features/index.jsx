import { useState } from "react";
import { featuresData } from "../../data/features";
import {
  FeaturesItemsContainer,
  FeaturesSectionStyled,
} from "./FeaturesSection.styled";

export default function Features() {
  const [features] = useState(featuresData);
  return (
    <FeaturesSectionStyled id="features">
      <div className="features__text">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before
        </p>
      </div>
      <FeaturesItemsContainer id="features__items">
        {features.map((feature) => (
          <div key={feature.id}>
            <img src={feature.icon} alt={feature.title} aria-hidden="true" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </FeaturesItemsContainer>
    </FeaturesSectionStyled>
  );
}
