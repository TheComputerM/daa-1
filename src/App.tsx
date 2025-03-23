import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatasetReport } from "./components/DatasetReport";

function App() {
	return (
		<div className="container mx-auto px-4">
			<br />
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
				Assignment 1 - Group 29
			</h1>
			<br />

			<div>
				<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
					Members
				</h2>
				<ul className="mt-4">
					<li>Mudit Somani - 2022A7PS0149H</li>
					<li>V S Saitej Samudrala - 2022A7PS0241H</li>
					<li>Praharsh Vitta - 2022A7PS0015H</li>
					<li>Varun Reddy Padala - 2022A7PS0010H</li>
					<li>Eshaan Sudan - 2022A7PS0075H</li>
				</ul>
			</div>

			<br />

			<Tabs defaultValue="1">
				<TabsList className="w-full mb-4">
					<TabsTrigger value="1">Enron Email</TabsTrigger>
					<TabsTrigger value="2">Skitter</TabsTrigger>
					<TabsTrigger value="3">Wikipedia</TabsTrigger>
				</TabsList>
				<TabsContent value="1">
					<DatasetReport maxCliqueSize={420} noOfMaximalCliques={69} />
				</TabsContent>
				<TabsContent value="2">TODO</TabsContent>
				<TabsContent value="3">TODO</TabsContent>
			</Tabs>
		</div>
	);
}

export default App;
