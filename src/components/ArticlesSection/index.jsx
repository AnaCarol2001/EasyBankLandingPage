import { articlesData } from "../../data/articles";
import {
  ArticleSectionStyled,
  ArticleStyled,
  ArticlesItemsContainer,
} from "./ArticlesSection.styled";

export default function ArticleSection() {
  return (
    <ArticleSectionStyled>
      <h2>Latest Articles</h2>
      <ArticlesItemsContainer>
        {articlesData.map((article) => (
          <ArticleStyled key={article.id}>
            <img src={article.image} aria-hidden="true" />
            <div className="article__content">
              <header>
                <h3>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h3>

                <p>By {article.author}</p>
              </header>
              <p>{article.preview}</p>
            </div>
          </ArticleStyled>
        ))}
      </ArticlesItemsContainer>
    </ArticleSectionStyled>
  );
}
