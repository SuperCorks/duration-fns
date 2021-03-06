import { Duration, DurationInput } from './types';
import { UNIT_KEYS, ZERO } from './lib/units';
import { parse } from './parse';

/**
 * Sum durations.
 *
 * @example
 * sum({ days: 1 }, { days: 2, hours: 12 })
 * { days: 3, hours: 12 }
 */
export const sum = (...durations: DurationInput[]): Duration => {
	const output = { ...ZERO };

	durations.map(parse).forEach(duration => {
		UNIT_KEYS.forEach(key => {
			output[key] += duration[key];
		});
	});

	return output;
};
