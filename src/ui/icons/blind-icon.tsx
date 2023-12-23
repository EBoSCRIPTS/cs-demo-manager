import type { SVGAttributes } from 'react';
import React from 'react';

type Props = SVGAttributes<SVGElement>;

export const BlindIcon = React.forwardRef(function BlindIcon(props: Props, ref: React.Ref<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32.074 32.074" ref={ref} {...props}>
      <path d="M24.653 20.562c3.162-2.137 4.701-4.76 4.701-4.76s-4.11-7.656-13.544-7.656a14.48 14.48 0 0 0-3.208.358l2.968 2.973a4.244 4.244 0 0 1 4.497 4.54l1.686 1.681a6.228 6.228 0 0 0-2.315-7.081c4.001 1.063 6.428 3.69 7.502 5.141a15.28 15.28 0 0 1-3.697 3.333l1.41 1.471zm-8.964-.619a4.246 4.246 0 0 1-4.091-4.236l-1.776-1.659a6.22 6.22 0 0 0 2.286 6.652c-3.536-1.093-6.071-3.513-7.314-4.927a17.818 17.818 0 0 1 3.537-3.207l-1.43-1.46c-3.027 2.154-4.637 4.695-4.637 4.695s4.986 7.467 13.544 7.467c1.061 0 2.059-.1 2.992-.277.002 0-3.061-3.046-3.111-3.048zM2.75 5.478l2.706-2.706 23.172 23.165-2.706 2.706z" />
    </svg>
  );
});
