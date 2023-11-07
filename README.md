# Related Products Vendure plugin

This plugin allows the store owner to add related products.

## Documentation

### Install

```
yarn add vendure-plugin-related-products
```

or 

```
npm install vendure-plugin-related-products
```

### Register plugin in your Vendure config

```js
import { RelatedProductsPlugin } from vendure-plugin-related-products;

//...

plugins: [
  RelatedProductsPlugin
]
```

### Generate and run migration

```
yarn migration:generate RelatedProducts
yarn migration:run
```
or 
```
npm run migration:generate RelatedProducts
npm run migration:run
```

## Preview

### Admin UI

![Related Products Vendure plugin](/docs/related-products-admin-ui.gif)

### GraphQL

![Related Products Vendure plugin](/docs/related-products-graphql.png)

## Credits

This repo is based on [Vendure Plugin Template](https://github.com/vendure-ecommerce/plugin-template)