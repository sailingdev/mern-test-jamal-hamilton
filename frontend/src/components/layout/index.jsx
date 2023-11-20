import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";

const Layout = () => {
  const dispatch = useDispatch();
  const { tenantId } = useParams();

  useEffect(() => {
    dispatch.siteConfig.getConfig({ tenantId, id: 2 });
  }, []);

  return <Outlet />;
};

export default Layout;
