import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import MyAvatar from '../public/images/avatar.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { SVGProps } from 'react';
import { SocialLink } from '../components/SocialLink';
import styles from '../styles/index.module.css';
import ScaleBox from '../animations/ScaleBox';
import FadeInBox from '../animations/FadeInBox';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useTranslation } from 'next-i18next';

const Home: NextPage<{ year: string }> = ({ year }) => {
  // const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>Songhn Site</title>
        <meta name="description" content="Songhn self profile and showcases" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container mx-auto my-8 prose px-7 lg:px-8">
        <div className="flex items-center justify-center">
          <ScaleBox>
            <div className="w-12 h-12 overflow-hidden rounded-full shadow-md sm:w-16 sm:h-16 shadow-dark-900 dark:shadow-light-900">
              <Image src={MyAvatar} alt="Avatar" priority draggable={false} />
            </div>
          </ScaleBox>

          <div className="ml-4 md:ml-6 lg:ml-8">
            <h2 className="!my-0 !mb-1 !text-xl md:!text-2xl">
              👋 Hello, I&#39;m{' '}
              <mark
                className="bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                style={{
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Songhn
              </mark>
            </h2>
            <p className="!mb-0 !text-sm">
              <span>Web developer</span>
              <span className="text-info-content"> / </span>
              <span>Open Source</span>
              <span className="text-info-content"> / </span>
              <span>Blogger</span>
            </p>
          </div>
        </div>
        <FadeInBox>
          <article>
            <p className="mt-6 lg:mt-8">
              Hey, I am a senior at{' '}
              <abbr
                title="Hangzhou Dianzi University"
                className="decoration-wavy decoration-info"
              >
                HDU
              </abbr>
              , majoring in Computer Science. Will join{' '}
              <strong>ByteDance</strong> after 🎓.
            </p>
            <p>
              I work mostly with React & Node.js, and in spare time, trying
              to learn Rust or Golang. My focus as an amateur is on{' '}
              <strong>📈 Data visualization</strong> and{' '}
              <strong>⚙️ Static site generation</strong>. In terms of work, currently focused on 🐳 <strong>Observability</strong> and <strong>DevOps</strong> areas
            </p>
            <p>
              Outside of programming, hobbies are barren. 🦈 Nana7mi and Anime are
              the main form of entertainment (so sad 😢). Trying to change
              things, maybe...
            </p>
            <hr className="mx-auto !my-7 w-20" />
            <p>
              Want to contact me? Mail me at{' '}
              <MailIcon className="inline-block" />{' '}
              <a
                href="mailto:songhn233@gmail.com"
                className={styles['home-link']}
              >
                Gmail
              </a>
              .
            </p>
            <p className="flex items-center">
              <span className="pr-1">Socials:</span>
              <SocialLink
                Icon={GithubIcon}
                href={'https://github.com/songhn233'}
                title={'Github Profile'}
                label={'Github'}
                className="bg-violet-600/20 hover:bg-violet-500/10"
              />
              <SocialLink
                Icon={ZhiIcon}
                href={'https://www.zhihu.com/people/song-nan-80-71'}
                title={'Zhihu Profile'}
                label={'Zhihu'}
                className="bg-blue-600/20 hover:bg-blue-600/10"
              />
              <SocialLink
                Icon={BlogIcon}
                href={'https://blog.songhn.com'}
                title={'Blog'}
                label={'Blog'}
                className="bg-orange-600/20 hover:bg-orange-600/10"
              />
            </p>
          </article>
        </FadeInBox>
      </main>
      <Footer year={year} />
    </>
  );
};

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v9c0 .55-.45 1-1 1zm-7-7L4 6h16l-8 5z"
      ></path>
    </svg>
  );
}

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M20.38 8.53c.16-.4.68-1.99-.17-4.14c0 0-1.31-.39-4.3 1.61c-1.25-.33-2.58-.38-3.91-.38c-1.32 0-2.66.05-3.91.38c-2.99-2.03-4.3-1.61-4.3-1.61c-.85 2.15-.33 3.74-.16 4.14C2.61 9.62 2 11 2 12.72c0 6.44 4.16 7.89 10 7.89c5.79 0 10-1.45 10-7.89c0-1.72-.61-3.1-1.62-4.19M12 19.38c-4.12 0-7.47-.19-7.47-4.19c0-.95.47-1.85 1.27-2.58c1.34-1.23 3.63-.58 6.2-.58c2.59 0 4.85-.65 6.2.58c.8.73 1.3 1.62 1.3 2.58c0 3.99-3.37 4.19-7.5 4.19m-3.14-6.26c-.82 0-1.5 1-1.5 2.22c0 1.23.68 2.24 1.5 2.24c.83 0 1.5-1 1.5-2.24c0-1.23-.67-2.22-1.5-2.22m6.28 0c-.83 0-1.5.99-1.5 2.22c0 1.24.67 2.24 1.5 2.24c.82 0 1.5-1 1.5-2.24c0-1.23-.64-2.22-1.5-2.22z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function ZhiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.373 18.897h1.452l.478 1.637l2.605-1.637h3.07V5.395h-7.605v13.502zM14.918 6.86h4.515v10.57h-1.732l-1.73 1.087l-.314-1.084l-.739-.003V6.861zm-2.83 4.712H8.846a70.3 70.3 0 0 0 .136-4.56h3.172s.122-1.4-.532-1.384H6.135c.216-.814.488-1.655.813-2.524c0 0-1.493 0-2 1.339c-.211.552-.82 2.677-1.904 4.848c.365-.04 1.573-.073 2.284-1.378c.131-.366.156-.413.318-.902h1.79c0 .651-.074 4.151-.104 4.558h-3.24c-.729 0-.965 1.466-.965 1.466h4.066C6.92 16.131 5.456 18.74 2.8 20.8c1.27.363 2.536-.057 3.162-.614c0 0 1.425-1.297 2.206-4.298l3.346 4.03s.49-1.668-.077-2.481c-.47-.554-1.74-2.052-2.281-2.595l-.907.72c.27-.867.433-1.71.488-2.524h3.822s-.005-1.466-.47-1.466z"
      ></path>
    </svg>
  );
}

export function BlogIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M14.52 4.01a.507.507 0 0 0-.52.51V6.5c0 .28.22.5.5.5v.02c6.23.24 11.24 5.25 11.48 11.48H26c0 .28.22.5.5.5h1.98c.29 0 .52-.24.51-.52c-.27-7.86-6.61-14.2-14.47-14.47zm0 5a.514.514 0 0 0-.52.51v1.98c0 .28.22.5.5.5v.03c3.47.23 6.24 3 6.47 6.47H21c0 .28.22.5.5.5h1.98c.28 0 .52-.24.51-.52c-.27-5.1-4.37-9.2-9.47-9.47zM5.5 10c-.28 0-.5.22-.5.5v11c0 3.58 2.92 6.5 6.5 6.5s6.5-2.92 6.5-6.5s-2.92-6.5-6.5-6.5c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5a2.5 2.5 0 0 1 0 5A2.5 2.5 0 0 1 9 21.5v-11c0-.28-.22-.5-.5-.5h-3z"
      ></path>
    </svg>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const year = new Date().getFullYear();
  return {
    props: {
      year,
      // ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};

export default Home;
