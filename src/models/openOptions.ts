export interface OpenOptions {
	baudRate: number;
	autoOpen: boolean;
	endOnClose: boolean;
	dataBits: number;
	hupcl: boolean;
	lock: boolean;
	parity: string;
	rtscts: boolean;
	stopBits: number;
	xany: boolean;
	xoff: boolean;
	xon: boolean;
	highWaterMark: number;
}
