import { Container } from './styles';
import { SectionTitle } from '../SectionTitle';
import { ExperienceItem } from './ExperienceItem';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="01 ano" description="de experiência" />

      <section>
        <ExperienceItem
          year={2021}
          title="Dev Front End"
          description="Desenvolvedor front end na toma agora é seu."
        />
        <ExperienceItem
          year={2021}
          title="Dev Front End"
          description="Desenvolvedor front end na toma agora é seu."
        />
        <ExperienceItem
          year={2021}
          title="Dev Front End"
          description="Desenvolvedor front end na toma agora é seu."
        />
        <ExperienceItem
          year={2021}
          title="Dev Front End"
          description="Desenvolvedor front end na toma agora é seu."
        />
        <ExperienceItem
          year={2021}
          title="Dev Front End"
          description="Desenvolvedor front end na toma agora é seu."
        />
      </section>
    </Container>
  );
}
