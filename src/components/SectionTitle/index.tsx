import { Container } from './styles';

interface SectionProps {
  title: string;
  description?: string;
}

export function SectionTitle({ title, description }: SectionProps) {
  return (
    <Container>
      <h1>#{title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}
