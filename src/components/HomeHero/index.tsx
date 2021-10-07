import { CodeItem, Container, InfosContainer, TextContainer } from './styles';

export function HomeHero() {
  return (
    <Container>
      <img src="/pessoa.webp" alt="Profile" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo João</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha aprensentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              <div>
                Nome: <span className="blue">João</span>
              </div>
              <div>
                Sobrenome: <span className="blue">Dias</span>
              </div>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              <div>
                Função: <span className="blue">Dev Full Stack</span>
              </div>
              <div>
                Languages: <span className="blue">JavaScript, Typescript</span>
              </div>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
