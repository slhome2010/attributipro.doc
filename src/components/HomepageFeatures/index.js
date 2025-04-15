import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Tree Structure, Drag-and-Drop and Copy-Paste nodes</Translate>, 
    Svg: require('@site/static/img/attributipro_tree.svg').default,
    description: (
      <Translate>
        Visual representation of groups, attributes, and values in a tree view. Edit, add, delete, drag and drop, and copy nodes.
      </Translate>
    ),
  },
  {
    title: <Translate>Category Attributes and Duty Templates</Translate>, //'Powered by React',
    Svg: require('@site/static/img/attributipro_category.svg').default,
    description: (
      <Translate>
        Binding a set of attributes to a product category for quick assignment to similar products. Default template for each attribute and its substitution when adding a category attribute.
      </Translate>
    ),
  },
  {
    title: <Translate>Metadata</Translate>, //'Focus on What Matters',
    Svg: require('@site/static/img/attributipro_metadata.svg').default,
    description: (
      <Translate>
        Images, descriptions for tooltips, and other metadata for attributes and values. Using metadata on the frontend.
      </Translate>
    ),
  },
  {
    title: <Translate>Units of measurement</Translate>,
    Svg: require('@site/static/img/attributipro_units_4.svg').default,
    description: (
      <Translate>
        Using measurement units in product attributes ensures accuracy, convenience, and versatility. Creating a custom dictionary of units.
      </Translate>
    ),
  },
  {
    title: <Translate>Merging Duplicates</Translate>,
    Svg: require('@site/static/img/attributipro_merge.svg').default,
    description: (
      <Translate>
        Manual and automatic merging of duplicate attributes without losing connections between their values and products.
      </Translate>
    ),
  },
  {
    title: <Translate>Batch processing</Translate>, 
    Svg: require('@site/static/img/attributipro_tools_2.svg').default,
    description: (
      <Translate>
        Batch replacement of value separators, changing letter case, and cloning a language. Standardization of measurement units in attributes and values. Export and import attributes in CSV and SQL formats.
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
