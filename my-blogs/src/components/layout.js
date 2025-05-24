import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import classes from './layout.module.css';



const name = 'Vincent Gaines';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <>
      <div className={classes.profileWrapper}>
        <div className={classes.profileImageWrapper}>
          <Image className={classes.profileImage}
            src="/profile-image.jpg"
            width={150}
            height={150} />
        </div>

        <div className={classes.profileTextWrapper}>
          <p className={classes.profileNameText}>Vincent Gaines</p>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}