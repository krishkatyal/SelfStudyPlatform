import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './FutureStyles';

const Future = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Future Scope</SectionTitle>
    <SectionText>
      We've tried to make our project as best as we can within this much time.
      But there are certain aspects we would like to work on.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Point 1</ListTitle>
          <ListParagraph>
            XYZ
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Point 2</ListTitle>
          <ListParagraph>
            ABC
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Point 3</ListTitle>
          <ListParagraph>
            ABC
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>

);

export default Future;
