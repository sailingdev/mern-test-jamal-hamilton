import React, { useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { tenantId } = useParams();
  const { products } = useSelector((state) => state.product);
  const { config } = useSelector((state) => state.siteConfig);

  useEffect(() => {
    dispatch.product.getProducts(tenantId);
  }, [dispatch]);

  return (
    <Container maxWidth="100%" py="10">
      <Flex alignItems="center" justifyContent="space-between">
        <Heading mb="10">Products</Heading>
        <Button as={Link} to="add" {...config.button}>
          Add
        </Button>
      </Flex>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing="10">
        {products.map((product, i) => (
          <Card key={i}>
            <CardBody>
              <Image
                src={product.image}
                alt={product.brand}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Flex alignItems="center" justifyContent="space-between">
                  <Heading {...config.product.title}>{product.brand}</Heading>
                  <Heading {...config.product.category}>
                    {product.category}
                  </Heading>
                </Flex>
                <Text {...config.product.description}>
                  {product.description}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button as={Link} to={product.id} {...config.button}>
                  View detail
                </Button>
                <Button as={Link} to={`${product.id}/edit`} {...config.button}>
                  Edit
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Products;
