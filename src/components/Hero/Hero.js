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
        A single stop to get to know what all you need to study to master that research paper. 
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;