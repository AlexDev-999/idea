import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = ({ backTitle, nowtitle }) => {
  return (
    <div>
      {backTitle}
      {nowtitle}
    </div>
  );
};

export default BreadCrumbs;
