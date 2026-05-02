type PriceProps = {
	value: number;
	currency?: string;
	position?: 'before' | 'after';
};
const Price = ({ value, currency = '$', position = 'after' }: PriceProps) => {
	const formatted = value.toFixed(2);

	const res = position === 'before' ? `${currency} ${formatted}` : `${formatted} ${currency}`;

	return <span>{res}</span>;
};

export default Price;
