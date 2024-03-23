import { useState } from "react";
import { articlesData } from "src/data/articles";
import {
  ArticleSectionStyled,
  ArticleStyled,
  ArticlesItemsContainer,
} from "./ArticlesSection.styled";

import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: "-20%",
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { type: "inertia", velocity: 100 },
  },
};

export default function ArticleSection() {
  const [articlesList] = useState(articlesData);

  return (
    <ArticleSectionStyled>
      <h2>Latest Articles</h2>
      <ArticlesItemsContainer
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.08 }}
      >
        {articlesList.map((article) => (
          <ArticleStyled
            key={article.id}
            as={motion.article}
            whileHover={{ scale: 1.03, transition: { duration: 0.5 } }}
            variants={variants}
          >
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
