import Model from '../components/Models/Models';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Team from '../components/Team/Team';
import Future from '../components/Future/Future';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Model />
      <Future />
      <Team />
    </Layout>
  );
};

export default Home;
