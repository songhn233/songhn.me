import { SVGProps } from 'react';
import cx from 'classnames';

interface ISocialLink {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  href: string;
  title: string;
  label: string;
  className?: string;
  [key: string]: any;
}

export function SocialLink({
  Icon,
  href,
  title,
  label,
  className = '',
  ...props
}: ISocialLink) {
  return (
    <a
      className={cx(
        'mx-1 inline-flex items-center rounded-md px-2 py-1 text-sm text-base-content no-underline',
        className,
      )}
      href={href}
      title={title}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      <Icon className="inline-block mr-1" /> <span>{label}</span>
    </a>
  );
}
