import { ItemContainer } from './styles';

interface ExperienceItemProps {
  year: number;
  title: string;
  description: string;
}

export function ExperienceItem({
  description,
  title,
  year
}: ExperienceItemProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
