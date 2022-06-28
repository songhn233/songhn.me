import { GetStaticProps } from 'next';
import styles from '../styles/index.module.css';

export default function Footer({ year }: { year: string }) {
  return (
    <footer className="p-4 footer footer-center text-base-content">
      <div>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            className={styles['home-link']}
          >
            CC BY-NC-SA 4.0
          </a>{' '}
          - Songhn © {year}
        </p>
      </div>
    </footer>
  );
}
