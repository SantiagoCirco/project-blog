
import React from 'react';
import dynamic from 'next/dynamic';
import { MDXRemote } from 'next-mdx-remote/rsc';

import styles from './postSlug.module.css';
import { loadBlogPost } from '@/helpers/file-helpers';

import BlogHero from '@/components/BlogHero';
import CodeSnippet from '@/components/CodeSnippet';
const DivisionGroupsDemo = dynamic(() => import('@/components/DivisionGroupsDemo'));
const CircularColorsDemo = dynamic(() => import('@/components/CircularColorsDemo'));


export async function generateMetadata({ params }) {
  const postContent = await loadBlogPost(params.postSlug);

  return {
    title: postContent.frontmatter.title,
    description: postContent.frontmatter.abstract
  }
}



async function BlogPost({ params }) {
  const postContent = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={postContent.frontmatter.title}
        publishedOn={postContent.frontmatter.publishedOn}
        description={postContent.frontmatter.abstract}
      />
      <div className={styles.page}>
        <MDXRemote source={postContent.content} components={{
          CodeSnippet,
          DivisionGroupsDemo,
          CircularColorsDemo
        }}/>
      </div>
    </article>
  );
}

export default BlogPost;
