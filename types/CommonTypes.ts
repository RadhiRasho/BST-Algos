export type ComputeRange<
	N,
	Result extends Array<number> = [],
> = Result["length"] extends N
	? Result
	: ComputeRange<N, [...Result, Result["length"]]>;

// 0 to N range
export type NumberRange<N> = ComputeRange<N>[never];

export type Percent = `${NumberRange<101>}%`;
