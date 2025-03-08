import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroBoxes}>
          <img
            src={useBaseUrl('img/logo/attributico-red-tree.svg')}
            className={styles.heroBox}
            alt="Attributico Logo"
          /*  width="150"
           height="198"
           loading="lazy" */
          />
        </div>
        <div className={styles.heroContent}>
          <Heading as="h1" className="hero__title">
            {/* {siteConfig.title} */}
            <span className={clsx(styles.heroFirstLine, styles.ruHyphens)}>
              <Translate id="homepage.banner.heroFirstline"
                description="The homepage banner title firstline">
                Full control over product attributes
              </Translate>
            </span><br/>
            {' '}
            <Translate>in your</Translate>
            <span className={styles.heroAmpersand}> OpenCart </span>
            <Translate>store</Translate>
            {' '}
          </Heading>
          <p className={clsx("hero__subtitle", styles.heroBloat)}>
            <Translate id="homepage.banner.slogan"
              description="The homepage slogan message">
              ATTRIBUTES - IT IS EASY!
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--outline button--lg', styles.getStarted)}
              to="/docs/intro">
              <Translate id="homepage.banner.link.tutorial"
                description="The homepage link label">
                Tutorial - 5min ⏱️
              </Translate>
            </Link>
            <Link
              className={clsx('button button--outline button--lg', styles.getStarted)}
              to={useBaseUrl('docs/install')}
            >
              <Translate id="homepage.banner.link.getStarted"
                description="The homepage link label">
                Get started 🚀
              </Translate>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
