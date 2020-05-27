'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);


  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);


  /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');
  console.log('clickedElement:', clickedElement);
}

/* 5.4 javasript-blog */
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = '') {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);

  titleList.innerHTML = '';
  let html = '';

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  for(let article of articles) {
  /* get the article id */
    const articleId = article.getAttribute('id');
    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /* get the title from the title element */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    /* insert link into titleList */
    titleList.innerHTML = titleList.innerHTML + linkHTML;
  }
  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

// TAGS //

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for(let article of articles) {
    /* find tags wrapper */
  const titleList = article.querySelector(optArticleTagsSelector);
  titleList.innerHTML = '';
    /* make html variable with empty string */
  let html = '';
    /* get tags from data-tags attribute */
  const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
  const articleTagsArray = articleTags.split(' ');
  /* START LOOP: for each tag */
  for(let tag of articleTagsArray){
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      /* add generated code to html variable */
        html = html + linkHTML;
      }
    /* END LOOP: for each tag */
    /* insert HTML of all the links into the tags wrapper */
    titleList.innerHTML = html;
  }
  /* END LOOP: for every article: */
}


generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  const activeLinks = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each active tag link */
  for(let activeLink of activeLinks) {
    /* remove class active */
    activeLink.classList.remove('.active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll(href);
  /* START LOOP: for each found tag link */
    for(let taglink of taglinks){
    /* add class active */
      tagLink.classList.add('active');
  /* END LOOP: for each found tag link */
    }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();

// AUTHORS //

function generateAuthors(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  let html = '';
  /* START LOOP: for every article: */
  for(let article of articles) {

    /* find author wrapper */
    const author = article.querySelector(optArticleAuthorSelector);
    author.innerHTML = '';
    console.log(author);

    /* make html variable with empty string */

    /* get authors from data-author attribute */
    const authorData = author.getAttribute('data-author');
    console.log(authorData);

      /* generate HTML of the link */
      const authorLink = '<li><a href="#' + authorData + '"><span>' + authorData + '</span></a></li>';
      console.log(authorLink);
      /* add generated code to html variable */
      html = html + authorLink;
      author.innerHTML = html;

    /* END LOOP: for each tag */
  }
  /* END LOOP: for every article: */
}

generateAuthors();
