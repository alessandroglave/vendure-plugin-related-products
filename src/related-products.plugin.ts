
import { PluginCommonModule, VendurePlugin } from "@vendure/core";
import { RelatedProductsCustomField } from "./config/custom-fields";

@VendurePlugin({
	imports: [PluginCommonModule],
	configuration: (config) => {
		config.customFields.Product.push(RelatedProductsCustomField);
		return config;
	},
	compatibility: '^2.0.0',
})
export class RelatedProductsPlugin {}
