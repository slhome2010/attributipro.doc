import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>​Tree view</Translate>, //'Easy to Use',
    Svg: require('@site/static/img/undraw_attributico_tree.svg').default,
    description: (
      <Translate>
        ​Visual representation of groups, attributes and attribute values ​​in the form of a tree. 
        Editing, adding, deleting directly in the tree.
      </Translate>
    ),
  },
  {
    title: <Translate>Drag-and-drop</Translate>, //'Focus on What Matters',
    Svg: require('@site/static/img/undraw_attributico_mountain.svg').default,
    description: (
      <Translate>
        Drag and drop attributes or groups using the mouse. 
        Now, attributes and groups can be sorted using drag and drop.
      </Translate>
    ),
  },
  {
    title: <Translate>Category Attributes</Translate>, //'Powered by React',
    Svg: require('@site/static/img/undraw_attributico_category.svg').default,
    description: (
      <Translate>
        Binding a set of attributes to a product category for quick assignment to similar products. 
        Preparing a set of Category Attributes using Drag-and-Drop or the auto-creation tool.
      </Translate>
    ),
  },
  {
    title: <Translate>Duty templates</Translate>, //'Powered by React',
    Svg: require('@site/static/img/undraw_attributico_monitor.svg').default,
    description: (
      <Translate>
        It is possible to set a default template for each attribute and 
        substitute it into the value when adding an attribute or category attribute to a product.
      </Translate>
    ),
  },
  {
    title: <Translate>Merging Duplicates</Translate>, //'Powered by React',
    Svg: require('@site/static/img/undraw_attributico_double.svg').default,
    description: (
      <Translate>
        Merging duplicate attributes without losing the links between their values ​​and products.
      </Translate>
    ),
  },
  {
    title: <Translate>Batch processing</Translate>, //'Powered by React',
    Svg: require('@site/static/img/undraw_attributico_react.svg').default,
    description: (
      <Translate>
        Batch replacement of the value separator, letter case replacement, and language cloning.
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
