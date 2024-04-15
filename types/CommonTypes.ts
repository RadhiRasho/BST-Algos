export type ComputeRange<
	N,
	Result extends Array<number> = [],
> = Result["length"] extends N
	? Result
	: ComputeRange<N, [...Result, Result["length"]]>;

// 0 to 100
export type NumberRange<N extends number> = ComputeRange<N>[number];

export type Percent = `${NumberRange<101>}%`;
