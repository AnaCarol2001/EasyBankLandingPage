import Heading from "src/components/UI/Heading";
import Section from "src/components/UI/Section";
import Card from "src/components/UI/Card";
import { FontSizes } from "src/global-styles";
import { articlesData } from "./articles";

const articleContainer = `
display: grid;
place-items: start center;
gap: 1.5rem;

@media screen and (min-width: 1024px){
    grid-template-columns: repeat(${articlesData.length}, 1fr);
}
`;

export default function ArticleSection() {
  return (
    <Section.Root>
      <Section.Header>
        <Heading $fontSize={FontSizes[600]}>Latest Articles</Heading>
      </Section.Header>
      <Section.Body $styles={articleContainer}>
        {articlesData.map((article, i) => (
          <Card.Root key={i} as="article">
            <Card.Image src={article.image} />
            <Card.Body>
              <Card.SmallText>{article.author}</Card.SmallText>
              <Card.Title $fontSize={FontSizes[400]}>
                <a href="#">{article.title}</a>
              </Card.Title>
              <Card.Text $fontSize={FontSizes[200]}>
                {article.preview}
              </Card.Text>
            </Card.Body>
          </Card.Root>
        ))}
      </Section.Body>
    </Section.Root>
  );
}
