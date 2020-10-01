// eslint-disable-next-line no-use-before-define
import React, {
	useCallback, useEffect, useMemo, useState,
} from 'react';
import styles from './starField.less';

const StarField = () => {
	const [container, setContainer] = useState<any>();
	const [renderId, setRenderId] = useState(Date.now());

	const stars = useMemo(() => {
		const parent = container as unknown as SVGSVGElement;
		const result = [] as any[];
		const rect = parent?.getBoundingClientRect();
		if (rect) {
			const { width, height } = rect;
			const count = width / 2;

			for (let i = 0; i < count; i += 1) {
				const m = Math.random();
				result.push(
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
		return result;
	}, [container, renderId]);

	const handleResize = useCallback(() => {
		setRenderId(Date.now());
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize, container]);

	return (
		<div className={styles.StarWrapper}>
			<svg className={styles.Sky} ref={(e) => { setContainer(e); }}>
				{stars}
			</svg>
		</div>
	);
};

export default StarField;
