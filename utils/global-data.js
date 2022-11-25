export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Patrick Ortell';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Next.js Blog Theme';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';
  const blogFontHeadings = process.env.BLOG_FONT_HEADINGS
    ? decodeURI(process.env.BLOG_FONT_HEADINGS)
    : 'monospace';
  const blogFontParagraphs = process.env.BLOG_FONT_PARAGRAPHS
    ? decodeURI(process.env.BLOG_FONT_PARAGRAPHS)
    : 'monospace';
  const blogTheme = process.env.BLOG_THEME
    ? decodeURI(process.env.BLOG_THEME)
    : 'default';

  console.log('what theme is this ==> ' + blogTheme);
  // console.log(process.env.BLOG_THEME);

  return {
    name,
    blogTheme,
    blogFontParagraphs,
    blogFontHeadings,
    blogTitle,
    footerText,
  };
};
