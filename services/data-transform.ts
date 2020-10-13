import { rollup, sum } from "d3-array";
import { scaleOrdinal } from "d3-scale";
import { schemeSpectral } from "d3-scale-chromatic";

import { EXPENDITURE_CATEGORIES } from "../reference/politics";

// interface
import { IRawData } from "../pages/app-campaign-expenditures";

interface ITree {
	title: string,
	children: any[],
}

export interface ITreeNode {
	title: string;
	label?: string;
	color?: string;
	children?: unknown[];
	size?: number;
}

const createColorScale = (categories: Map<string, string>) => {
	const arr = Array.from(categories.keys());
	return scaleOrdinal(schemeSpectral[9]).domain(arr);
};
const colorScale = createColorScale(EXPENDITURE_CATEGORIES);

const pivotData = (data: IRawData[], key1: string, key2?: string, key3?: string): ITree => {
	interface IRollup {
		data: any;
		reducer: any;
		key: any[];
	}

	const nested = rollup(
		data,
		(v: any) => sum(v, (d: IRawData) => d["amount"]),
		(d: any) => d[key1],
		(d: any) => d[key2 as string],
		(d: any) => d[key3 as string]
	);

	const addChildren = (
		value: Map<string, any> | number,
		key: string
	): ITreeNode => {
		const leaf: ITreeNode = {
			title: key,
			label: EXPENDITURE_CATEGORIES.has(key)
				? EXPENDITURE_CATEGORIES.get(key)
				: key.split(",")[0],
			color: EXPENDITURE_CATEGORIES.has(key) ? colorScale(key) : "#2E294E",
		};
		if (typeof value !== "number") {
			value.forEach((v, k) => {
				if (!leaf.children) {
					leaf.children = [];
				}
				leaf.children.push(addChildren(v, k));
				leaf.children = leaf.children.sort((a: any, b: any) => b.size - a.size);
			});
		} else if (typeof value === "number"){
			leaf.size = value;
		}
		return leaf;
	};

	const convertMapToObjectArray = (nestedData: Map<string, any>) => {
		const tree: ITree = {
			title: "All Candidates",
			children: [],
		};

		nestedData.forEach((value: Map<string, any>, key: string) => {
			const entry = addChildren(value, key);
			tree.children.push(entry);
		});

		return tree;
	};

	const tree = convertMapToObjectArray(nested as Map<string, any>);
	return tree;
};

export { pivotData };
