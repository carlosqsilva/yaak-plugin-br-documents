import type { PluginDefinition } from "@yaakapp/api";
import { generateCNPJ, generateCPF, generateRG } from "./generators";

export const plugin: PluginDefinition = {
	templateFunctions: [
		{
			name: "document.cpf",
			args: [],
			async onRender() {
				return generateCPF(false);
			},
		},
		{
			name: "document.cpf_masked",
			args: [],
			async onRender() {
				return generateCPF(true);
			},
		},
		{
			name: "document.cnpj",
			args: [],
			async onRender() {
				return generateCNPJ(false);
			},
		},
		{
			name: "document.cnpj_masked",
			args: [],
			async onRender() {
				return generateCNPJ(true);
			},
		},
		{
			name: "document.rg",
			args: [],
			async onRender() {
				return generateRG(false);
			},
		},
		{
			name: "document.rg_masked",
			args: [],
			async onRender() {
				return generateRG(true);
			},
		},
	],
};
