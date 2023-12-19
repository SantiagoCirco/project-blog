import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import styles from './postSlug.module.css';
import { loadBlogPost } from '@/helpers/file-helpers';

import BlogHero from '@/components/BlogHero';


async function BlogPost({params}) {

  const postContent =  await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title="Example post!"
        publishedOn={new Date()}
      />
      <div className={styles.page}>
        <MDXRemote source={postContent.content}/>
      </div>
    </article>
  );
} 

export default BlogPost;
