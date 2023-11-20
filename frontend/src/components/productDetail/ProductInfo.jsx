import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const ProductInfo = () => {
  const { product } = useSelector((state) => state.product);
  const { config } = useSelector((state) => state.siteConfig);

  return (
    <Card direction={{ base: "column", md: "row" }} overflow="hidden">
      <Image
        objectFit="cover"
        maxW={{ base: "100%", md: "400px" }}
        src={product.image}
        alt={product.brand}
      />

      <CardBody>
        <Flex
          alignItems="center"
          justifyContent={{ base: "space-between", md: "flex-start" }}
          gap="4"
        >
          <Heading {...config.product.title}>{product.brand}</Heading>
          <Heading {...config.product.category}>{product.category}</Heading>
        </Flex>
        <Text py="2" mb="4" {...config.product.description}>
          {product.description}
        </Text>

        <Heading {...config.product.title}>Features</Heading>
        <UnorderedList>
          {product.features.map((feature, i) => (
            <ListItem key={i} {...config.product.description}>{feature}</ListItem>
          ))}
        </UnorderedList>
      </CardBody>
    </Card>
  );
};

export default ProductInfo;
