// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import styles from './starField.less';

const StarField = () => {
	const [container, setContainer] = useState<any>();

	const parent = container as unknown as SVGSVGElement;
	const stars = [] as any[];
	const rect = parent?.getBoundingClientRect();
	if (rect) {
		const { width, height } = rect;
		const count = width / 2;

		// eslint-disable-next-line no-plusplus
		for (let i = 0; i < count; i++) {
			const m = Math.random();
			stars.push(
				<circle
					cx={Math.random() * width}
					cy={Math.random() * height}
					r={m * 2}
					key={`star-${i}`}
					stroke={`rgba(255, 255, 255, ${m})`}
					fill={`rgba(255, 255, 255, ${m})`}
				/>,
			);
		}
	}

	return (
		<div className={styles.StarWrapper}>
			<svg className={styles.Sky} ref={(e) => { setContainer(e); }}>
				{stars}
			</svg>
		</div>
	);
};

export default StarField;
