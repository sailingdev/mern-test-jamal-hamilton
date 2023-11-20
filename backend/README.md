# Engineering Project Backend

All request urls start from tenant id and return different data based on tenant.
`tenant1/config/1`

`tenant1/products`

`tenant2/products`

## There are 2 base api endpoints.

- /config
- /products

### /config/:id

Takes a site config id and returns the site configuration for that id.

The config has styles of Header and Button, text styles of product such as title, category and description.

We can extends it easily by adding style props to json later.

### /products

Return all products for tenant

### /products/:id

Takes a product id and returns the details of that product.
