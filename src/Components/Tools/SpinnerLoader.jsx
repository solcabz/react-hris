import { useEffect, useState } from "react";
import spinner from "../../public/sp.svg";

function SpinnerLoader() {
  const [text, setText] = useState("");
  const [showImg, setShowImg] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowImg(false);
      setText("");
    }, 1000);
  }, []);

  return (
    <>
      <div>{showImg ? <img src={spinner} /> : <h3>{text}</h3>}</div>
    </>
  );
}

export default SpinnerLoader;
