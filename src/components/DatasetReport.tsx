import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useState } from "react";

interface DatasetReportProps {
	maxCliqueSize: number;
	noOfMaximalCliques: number;
	execution?: { x: number; p1: number; p2: number; p3: number }[];
}

const chartConfig = {
	p1: {
		label: "Paper 1",
		color: "var(--chart-1)",
	},
	p2: {
		label: "Paper 2",
		color: "var(--chart-2)",
	},
	p3: {
		label: "Paper 3",
		color: "var(--chart-3)",
	},
} satisfies ChartConfig;

export const DatasetReport = (props: DatasetReportProps) => {
	const [activeChart, setActiveChart] = useState("p1");

	const chartData = props.execution ?? [
		{ x: 1, p1: 1, p2: 1, p3: 3 },
		{ x: 2, p1: 2, p2: 3, p3: 1 },
		{ x: 3, p1: 3, p2: 2, p3: 1 },
	];

	return (
		<div className="flex flex-col gap-8">
			<div className="grid grid-cols-2 gap-8">
				<Card>
					<CardHeader>
						<CardTitle>Max clique size</CardTitle>
						<CardDescription>
							Largest size of the clique in each dataset.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="scroll-m-20 text-2xl font-semibold tracking-tight">
							{props.maxCliqueSize}
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>No. of maximal cliques</CardTitle>
						<CardDescription>
							Total number of maximal cliques in each dataset.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="scroll-m-20 text-2xl font-semibold tracking-tight">
							{props.noOfMaximalCliques}
						</p>
					</CardContent>
				</Card>
			</div>
			<Card>
				<CardHeader className="flex flex-col items-center justify-between border-b px-8 sm:flex-row">
					<div className="flex flex-col grow text-center">
						<CardTitle>Execution time</CardTitle>
					</div>
					<div className="flex gap-2">
						{Object.keys(chartConfig).map((key) => (
							<button
								type="button"
								data-active={activeChart === key}
								key={key}
								onClick={() => setActiveChart(key)}
								className="px-6 py-4 text-center data-[active=true]:bg-muted border"
							>
								<span className="text-lg font-bold leading-none sm:text-3xl">
									{chartConfig[key as keyof typeof chartConfig].label}
								</span>
							</button>
						))}
					</div>
				</CardHeader>
				<CardContent>
					<ChartContainer
						config={chartConfig}
						className="aspect-auto h-[250px] w-full"
					>
						<BarChart accessibilityLayer data={chartData}>
							<CartesianGrid vertical={false} />
							<XAxis
								dataKey="x"
								tickLine={false}
								axisLine={false}
								tickMargin={8}
								minTickGap={32}
							/>
							<Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
						</BarChart>
					</ChartContainer>
				</CardContent>
			</Card>
		</div>
	);
};
