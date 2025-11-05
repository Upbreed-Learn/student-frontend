import ChooseYourPlan from './choose-your-plan';
import Faqs from './faqs';
import Hero from './hero';
import WhatToExpect from './what-to-expect';

const Welcome = () => {
  return (
    <>
      <Hero />
      <WhatToExpect />
      <ChooseYourPlan />
      <Faqs />
    </>
  );
};

export default Welcome;
