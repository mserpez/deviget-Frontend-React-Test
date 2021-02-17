// Vendor
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// Actions
import { fetch } from "./actions";
// Internal container components
import Content from "./Content";

export function Reddit() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Bind dispatch to action
    const fetchData = () => dispatch(fetch());
    // Dispatch fetch action
    fetchData();
  }, [dispatch]);

  return <Content />;
}
