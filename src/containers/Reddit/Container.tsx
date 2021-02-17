// Vendor
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// Actions
import { fetch } from "./actions";
// Internal container components
import Content from "./Content";
// Types
import { usePostList } from "./selectors";

export function Reddit() {
  const dispatch = useDispatch();
  const data = usePostList();

  useEffect(() => {
    // Bind dispatch to action
    const fetchData = () => dispatch(fetch());
    // Dispatch fetch action
    fetchData();
  }, [dispatch]);

  return <Content data={data} />;
}
