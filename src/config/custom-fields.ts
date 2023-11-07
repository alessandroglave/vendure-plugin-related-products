import { CustomFieldConfig, LanguageCode, Product } from "@vendure/core";

export const RelatedProductsCustomField: CustomFieldConfig = {
	name: "relatedProducts",
	type: "relation",
	entity: Product,
	list: true,
	label: [
		{ languageCode: LanguageCode.en, value: "Related products" },
		{ languageCode: LanguageCode.it, value: "Prodotti correlati" },
	],
	graphQLType: "Product",
	ui: { tab: "Related Products" },
};
