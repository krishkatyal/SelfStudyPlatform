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
          <ListTitle>First</ListTitle>
          <ListParagraph>
          Creating personalized pathways for people who have an end goal depending on their current skills.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Second</ListTitle>
          <ListParagraph>
          Use latest project done to recommend the next project.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Third</ListTitle>
          <ListParagraph>
          Integrate with coursera, github to check real time status of pathway of a person.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>

);

export default Future;
