import React from 'react';
import OnboardingStep from './onboarding-step';
import Swiper from './swiper';
import { Images } from '../../Theme';

const OnboardingScreen = props => {
  const { navigation } = props;

  return (
    <Swiper navigation={navigation}>
      <OnboardingStep
        image={Images.onboardingStep1}
        title={'Discover New Artists'}
        subtext={'Discover up-and-coming performing artists and be part of their journey to being the next online star'}
      />
      <OnboardingStep
        image={Images.onboardingStep2}
        title={'Collaborate with other artists'}
        subtext={'Seamlessly perform with other artists in real-time'}
      />
            <OnboardingStep
        image={Images.onboardingStep3}
        title={'Live Entertainment Anywhere'}
        subtext={'Watch your favorite artists perform live wherever you are'}
      />
    </Swiper>
  )
}

export default OnboardingScreen;

