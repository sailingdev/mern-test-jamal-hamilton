import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ProductForm = () => {
  const dispatch = useDispatch();
  const { tenantId, productId } = useParams();
  const { config } = useSelector((state) => state.siteConfig);
  const { product } = useSelector((state) => state.product);
  const [data, setData] = useState({
    brand: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (!productId) return;
    dispatch.product.getProduct({ tenantId, id: productId });
  }, [productId]);

  useEffect(() => {
    if (!productId) return;
    setData((prev) => ({ ...prev, ...product }));
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log(data);
  };

  return (
    <Container maxWidth="100%" py="10">
      <Heading>{productId ? "Edit" : "Add"} Product</Heading>
      <Stack py="5" gap="5">
        <Flex gap="5">
          <FormControl>
            <FormLabel>Brand</FormLabel>
            <Input name="brand" value={data.brand} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Input
              name="category"
              value={data.category}
              onChange={handleChange}
            />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={data.description}
            onChange={handleChange}
          />
        </FormControl>
      </Stack>
      <ButtonGroup spacing="2">
        <Button onClick={handleSave} {...config.button}>
          Save
        </Button>
        <Button as={Link} to=".." variant="ghost">
          Cancel
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default ProductForm;
