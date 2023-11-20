const dummyData = {
  tenant1: [
    {
      id: "1",
      header: {
        bg: "gray.400",
        logoUrl: "/logo192.png",
        fontSize: "4xl",
        color: "gray.800",
      },
      button: {
        variant: "solid",
        colorScheme: "blue",
      },
      product: {
        title: {
          color: "gray.800",
          size: "md",
        },
        category: {
          color: "gray.500",
          size: "sm",
        },
        description: {
          color: "gray.800",
          fontSize: "md",
        },
      },
    },
    {
      id: "2",
      header: {
        bg: "gray.400",
        logoUrl: "/logo192.png",
        fontSize: "4xl",
        color: "blue.800",
      },
      button: {
        variant: "outline",
        colorScheme: "blue",
      },
      product: {
        title: {
          color: "blue.800",
          size: "md",
        },
        category: {
          color: "blue.500",
          size: "sm",
        },
        description: {
          color: "red.800",
          fontSize: "md",
        },
      },
    },
  ],
  tenant2: [
    {
      id: "1",
      header: {
        bg: "green.200",
        logoUrl: "/logo192.png",
        fontSize: "4xl",
        color: "purple.800",
      },
      button: {
        variant: "solid",
        colorScheme: "green",
      },
      product: {
        title: {
          color: "purple.800",
          size: "md",
        },
        category: {
          color: "green.700",
          size: "sm",
        },
        description: {
          color: "purple.800",
          fontSize: "md",
        },
      },
    },
    {
      id: "2",
      header: {
        bg: "blue.100",
        logoUrl: "/logo192.png",
        fontSize: "4xl",
        color: "blue.800",
      },
      button: {
        variant: "outline",
        colorScheme: "cyan",
      },
      product: {
        title: {
          color: "blue.800",
          size: "md",
        },
        category: {
          color: "blue.500",
          size: "sm",
        },
        description: {
          color: "cyan.800",
          fontSize: "md",
        },
      },
    },
  ],
};

const show = async (req, res) => {
  const { id } = req.params;
  let config = dummyData[req.tenantId]?.find((item) => item.id === id);

  res.send(config);
};

module.exports = {
  show,
};
