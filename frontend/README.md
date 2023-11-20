# Engineering Project Frontend

### tenant
The users can see different products based on tenant id.
Available tenant ids are `tenant1` and `tenant2` for test.

### site config
The basic styles of header, button and product come from the backend.

The users can get different site config by id.

Available site config ids are `1` and `2` for test.

To get different site config, update id prop of getConfig method in
`components/layout/index.jsx`

`dispatch.siteConfig.getConfig({ tenantId, id: 1 });`

`dispatch.siteConfig.getConfig({ tenantId, id: 2 });`