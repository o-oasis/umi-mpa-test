import { useEffect } from "react";

const DocsPage = () => {
  useEffect(()=>{
    console.log('DocsPage effect');
  },[])
  return (
    <div>
      <p>This is umi docs.</p>
    </div>
  );
};

export default DocsPage;
