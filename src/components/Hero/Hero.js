import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Verbose <br />
        Guacamole
      </SectionTitle>
      <SectionText>
        Kuch bhi likh do abhi kuch dimaag mae nahi aa raha hai. 
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;