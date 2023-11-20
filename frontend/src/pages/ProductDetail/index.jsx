import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Loading from "components/Loading";
import ProductInfo from "components/productDetail/ProductInfo";
import Resources from "components/productDetail/Resources";
import Other from "components/productDetail/Other";

const ProductDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tenantId, productId } = useParams();
  const { loading, product } = useSelector((state) => state.product);
  const { config } = useSelector((state) => state.siteConfig);

  useEffect(() => {
    dispatch.product.getProduct({ tenantId, id: productId });
  }, [productId]);

  const handleDelete = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth="100%" pb="10">
      {!loading && product ? (
        <>
          <Flex
            as="header"
            alignItems="center"
            gap="5"
            p="4"
            mx="-4"
            mb="4"
            bg={config.header.bg}
          >
            <Image
              width="14"
              height="14"
              src={config.header.logoUrl}
              alt="WILE E. CO."
            />
            <Heading
              fontSize={config.header.fontSize}
              color={config.header.color}
            >
              WILE E. CO.
            </Heading>
          </Flex>
          <Flex
            alignItems={{ base: "flex-start", sm: "center" }}
            justifyContent="space-between"
            mb="10"
            gap="4"
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Heading>{product.productId}</Heading>
            <ButtonGroup spacing="2">
              <Button as={Link} to="edit" {...config.button}>
                Edit
              </Button>
              <Button onClick={handleDelete} {...config.button}>
                Delete
              </Button>
              <Button as={Link} to=".." variant="ghost">
                Back to list
              </Button>
            </ButtonGroup>
          </Flex>
          <Tabs>
            <TabList>
              <Tab>Product Information</Tab>
              <Tab>Resources</Tab>
              <Tab>Other</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <ProductInfo />
              </TabPanel>
              <TabPanel>
                <Resources />
              </TabPanel>
              <TabPanel>
                <Other />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Flex as="footer" h="20" mx="-4" bg={config.header.bg}></Flex>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default ProductDetail;
